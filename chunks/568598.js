n.d(t, { Ay: () => L, KU: () => y, Qt: () => N, r4: () => R }), n(321073);
var i,
    l = n(735438),
    a = n(713402),
    r = n(717558),
    s = n(933958),
    o = n(259464),
    d = n(652896),
    u = n(616356),
    c = n(495544),
    h = n(470710),
    E = n(734057),
    A = n(51760),
    _ = n(485296),
    p = n(287809),
    g = n(803301),
    f = n(977997),
    I = n(562153),
    S = n(90575),
    T = n(806931),
    m = n(652215),
    C = n(731854);
let O = "__EMBEDDED_ACTIVITIES__";
function N(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function y(e) {
    switch (e.type) {
        case T.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case T.lp.HIDDEN_STREAM:
        case T.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, S.A)(e.userNick, e.user)}\x03`;
        case T.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, S.A)(e.userNick, e.user)}`
            );
    }
}
var R =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    i);
class L {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    guildRingingUsers = new Set();
    poppedOutParticipants = new Set();
    participantByIndex = new a.J((e) => {
        let t = [];
        return (
            e.type === T.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === T.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, T.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === T.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === T.lp.ACTIVITY && t.push("ACTIVITY"),
            ("isPoppedOut" in e && e.isPoppedOut) || t.push("NOT_POPPED_OUT"),
            t
        );
    }, y);
    constructor(e) {
        this.channelId = e;
    }
    get version() {
        return this.participantByIndex.version;
    }
    size(e) {
        return this.participantByIndex.size(e);
    }
    toArray(e) {
        return this.participantByIndex.values(e, !0);
    }
    rebuild() {
        let e = E.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === m.rbe.GUILD_TEXT ||
            ((this.call = h.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(f.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(c.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            u.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
                let { ownerId: n } = e;
                return t.add(n);
            }),
            this.participantByIndex.clear(),
            (this.participants = {}),
            t.forEach((e) => this.updateParticipant(e)),
            this.updateEmbeddedActivities(),
            !0
        );
    }
    getParticipant(e) {
        return this.participantByIndex.get(e) ?? null;
    }
    updateEmbeddedActivities() {
        return this.updateParticipant(O);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === O ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
        return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
                this.participantByIndex.delete(e.id);
            }),
            n.forEach((e) => {
                this.participantByIndex.set(e.id, e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    updateParticipantSpeaking(e) {
        return (
            this.participants[e]?.reduce((t, n) => {
                if (n.type === T.lp.USER) {
                    let i = (0, r.R)({ userId: e, checkIsMuted: !0 }),
                        l = _.A.isSoundSharing(e),
                        a = this.participantByIndex.get(n.id);
                    return a?.type === T.lp.USER && a.speaking === i && a.soundsharing === l
                        ? t
                        : (i && (this.lastSpoke[e] = Date.now()),
                          this.participantByIndex.set(n.id, {
                              ...n,
                              speaking: i,
                              lastSpoke: this.lastSpoke[e],
                              soundsharing: l,
                          }),
                          !0);
                }
                return t;
            }, !1) ?? !1
        );
    }
    updateParticipantQuality(e, t, n) {
        return (
            this.participants[e]?.reduce(
                (e, i) =>
                    i.type === T.lp.STREAM
                        ? (this.participantByIndex.set(i.id, { ...i, maxResolution: t, maxFrameRate: n }), !0)
                        : e,
                !1,
            ) ?? !1
        );
    }
    updateGuildRingingUsers(e, t) {
        t ? this.guildRingingUsers.add(e) : this.guildRingingUsers.delete(e);
    }
    updateParticipantPoppedOut(e, t) {
        t ? this.poppedOutParticipants.add(e) : this.poppedOutParticipants.delete(e);
    }
    _getEmbeddedActivities() {
        let e = s.Ay.getEmbeddedActivitiesForChannel(this.channelId),
            t = s.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
        return null == t ? e : (0, l.uniqBy)([...e, t], (e) => e.compositeInstanceId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => ({
            type: T.lp.ACTIVITY,
            id: N({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
            applicationId: e.applicationId,
            activityType: m.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: E.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
        }));
    }
    _getParticipantsForUser(e) {
        let t,
            n,
            i = [],
            l = p.default.getUser(e);
        if (null == l) return i;
        let a = f.A.getVoiceStateForChannel(this.channelId, e),
            s = f.A.getVoicePlatformForChannel(this.channelId, e),
            h = E.A.getChannel(this.channelId),
            S = h?.getGuildId(),
            m = (this.call?.ringing?.includes(e) || this.guildRingingUsers.has(e)) ?? !1;
        (null != a || m) &&
            ((t = {
                type: T.lp.USER,
                ...g.A.getUserStreamData(e, S),
                user: l,
                id: l.id,
                voiceState: a,
                voicePlatform: s,
                speaking: (0, r.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: _.A.isSoundSharing(e),
                ringing: m,
                userNick: I.Ay.getName(S, this.channelId, l),
                userAvatarDecoration: (0, o.U)(l, S),
                localVideoDisabled: A.Ay.isLocalVideoDisabled(l.id),
                isPoppedOut: this.poppedOutParticipants.has(l.id),
            }),
            i.push(t));
        let O = u.A.getStreamForUser(e, S) ?? u.A.getActiveStreamForUser(e, S);
        if (null != O && O.channelId === this.channelId) {
            let t = (0, d._z)(O),
                r = this.getParticipant(t),
                s = O.ownerId === c.default.getId() && u.A.isSelfStreamHidden(this.channelId),
                o =
                    r?.type === T.lp.STREAM
                        ? {
                              maxResolution: null != r.maxResolution ? { ...r.maxResolution } : void 0,
                              maxFrameRate: r.maxFrameRate,
                          }
                        : null;
            (n = {
                ...g.A.getUserStreamData(e, S, C.x.STREAM),
                ...o,
                type: s ? T.lp.HIDDEN_STREAM : T.lp.STREAM,
                id: t,
                userVideo: a?.selfVideo ?? !1,
                user: l,
                userNick: I.Ay.getName(S, this.channelId, l),
                stream: O,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n);
        }
        return i;
    }
}
