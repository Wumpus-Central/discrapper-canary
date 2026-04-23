n.d(t, { Ay: () => L, KU: () => y, Qt: () => N, r4: () => R }), n(321073);
var i,
    r = n(735438),
    l = n(713402),
    a = n(717558),
    s = n(933958),
    o = n(259464),
    d = n(652896),
    u = n(616356),
    c = n(495544),
    h = n(470710),
    E = n(734057),
    _ = n(969341),
    p = n(485296),
    A = n(287809),
    f = n(803301),
    g = n(977997),
    I = n(562153),
    T = n(90575),
    S = n(806931),
    m = n(652215),
    O = n(731854);
let C = "__EMBEDDED_ACTIVITIES__";
function N(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function y(e) {
    switch (e.type) {
        case S.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case S.lp.HIDDEN_STREAM:
        case S.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, T.A)(e.userNick, e.user)}\x03`;
        case S.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, T.A)(e.userNick, e.user)}`
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
    participantByIndex = new l.J((e) => {
        let t = [];
        return (
            e.type === S.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === S.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, S.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === S.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === S.lp.ACTIVITY && t.push("ACTIVITY"),
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
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.A.getVoiceStatesForChannel(e.id)) : e.recipients);
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
        return this.updateParticipant(C);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === C ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                if (n.type === S.lp.USER) {
                    let i = (0, a.R)({ userId: e, checkIsMuted: !0 }),
                        r = p.A.isSoundSharing(e),
                        l = this.participantByIndex.get(n.id);
                    return l?.type === S.lp.USER && l.speaking === i && l.soundsharing === r
                        ? t
                        : (i && (this.lastSpoke[e] = Date.now()),
                          this.participantByIndex.set(n.id, {
                              ...n,
                              speaking: i,
                              lastSpoke: this.lastSpoke[e],
                              soundsharing: r,
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
                    i.type === S.lp.STREAM
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
        return null == t ? e : (0, r.uniqBy)([...e, t], (e) => e.compositeInstanceId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => ({
            type: S.lp.ACTIVITY,
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
            r = A.default.getUser(e);
        if (null == r) return i;
        let l = g.A.getVoiceStateForChannel(this.channelId, e),
            s = g.A.getVoicePlatformForChannel(this.channelId, e),
            h = E.A.getChannel(this.channelId),
            T = h?.getGuildId(),
            m = (this.call?.ringing?.includes(e) || this.guildRingingUsers.has(e)) ?? !1;
        (null != l || m) &&
            ((t = {
                type: S.lp.USER,
                ...f.A.getUserStreamData(e, T),
                user: r,
                id: r.id,
                voiceState: l,
                voicePlatform: s,
                speaking: (0, a.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: p.A.isSoundSharing(e),
                ringing: m,
                userNick: I.Ay.getName(T, this.channelId, r),
                userAvatarDecoration: (0, o.U)(r, T),
                localVideoDisabled: _.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let C = u.A.getStreamForUser(e, T) ?? u.A.getActiveStreamForUser(e, T);
        if (null != C && C.channelId === this.channelId) {
            let t = (0, d._z)(C),
                a = this.getParticipant(t),
                s = C.ownerId === c.default.getId() && u.A.isSelfStreamHidden(this.channelId),
                o =
                    a?.type === S.lp.STREAM
                        ? {
                              maxResolution: null != a.maxResolution ? { ...a.maxResolution } : void 0,
                              maxFrameRate: a.maxFrameRate,
                          }
                        : null;
            (n = {
                ...f.A.getUserStreamData(e, T, O.x.STREAM),
                ...o,
                type: s ? S.lp.HIDDEN_STREAM : S.lp.STREAM,
                id: t,
                userVideo: l?.selfVideo ?? !1,
                user: r,
                userNick: I.Ay.getName(T, this.channelId, r),
                stream: C,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n);
        }
        return i;
    }
}
