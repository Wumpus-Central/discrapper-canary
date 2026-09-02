"use strict";
n.d(t, { Ay: () => v, KU: () => y, Qt: () => L, r4: () => D }), n(321073);
var i,
    r = n(435558),
    a = n(713402),
    s = n(717558),
    l = n(240583),
    o = n(933958),
    d = n(259464),
    c = n(159993),
    u = n(652896),
    _ = n(616356),
    E = n(280450),
    A = n(470710),
    h = n(734057),
    I = n(45630),
    f = n(485296),
    p = n(287809),
    T = n(803301),
    m = n(977997),
    g = n(562153),
    S = n(90575),
    N = n(806931),
    C = n(652215),
    O = n(731854);
let R = "__EMBEDDED_ACTIVITIES__";
function L(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function y(e) {
    switch (e.type) {
        case N.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case N.lp.HIDDEN_STREAM:
        case N.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, S.A)(e.userNick, e.user)}\x03`;
        case N.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, S.A)(e.userNick, e.user)}`
            );
    }
}
var D =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    i);
class v {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    guildRingingUsers = new Set();
    poppedOutParticipants = new Set();
    participantByIndex = new a.J((e) => {
        let t = [];
        return (
            e.type === N.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === N.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, N.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === N.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === N.lp.ACTIVITY && t.push("ACTIVITY"),
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
        let e = h.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === C.rbe.GUILD_TEXT ||
            ((this.call = A.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(m.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(E.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            _.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(R);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === R ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                if (n.type === N.lp.USER) {
                    let i = (0, s.R)({ userId: e, checkIsMuted: !0 }),
                        r = f.A.isSoundSharing(e),
                        a = this.participantByIndex.get(n.id);
                    return a?.type === N.lp.USER && a.speaking === i && a.soundsharing === r
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
                    i.type === N.lp.STREAM
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
        let e,
            t = o.Ay.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId),
            n = o.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
        e = null == n ? t : (0, r.uniqBy)([...t, n], (e) => e.compositeInstanceId);
        let { enabled: i } = l.c.getConfig({ location: "rtc_participants" });
        return p.default.getCurrentUser()?.nsfwAllowed || !i ? e : e.filter((e) => !(0, c.Q)(e.contentClassification));
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => ({
            type: N.lp.ACTIVITY,
            id: L({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
            applicationId: e.applicationId,
            activityType: C.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: h.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
        }));
    }
    _getParticipantsForUser(e) {
        let t,
            n,
            i = [],
            r = p.default.getUser(e);
        if (null == r) return i;
        let a = m.A.getVoiceStateForChannel(this.channelId, e),
            l = m.A.getVoicePlatformForChannel(this.channelId, e),
            o = h.A.getChannel(this.channelId),
            c = o?.getGuildId(),
            A = (this.call?.ringing?.includes(e) || this.guildRingingUsers.has(e)) ?? !1;
        (null != a || A) &&
            ((t = {
                type: N.lp.USER,
                ...T.A.getUserStreamData(e, c),
                user: r,
                id: r.id,
                voiceState: a,
                voicePlatform: l,
                speaking: (0, s.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: f.A.isSoundSharing(e),
                ringing: A,
                userNick: g.Ay.getName(c, this.channelId, r),
                userAvatarDecoration: (0, d.U)(r, c),
                localVideoDisabled: I.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let S = _.A.getStreamForUser(e, c) ?? _.A.getActiveStreamForUser(e, c);
        if (I.Ay.supports(O.O5.VIDEO) && null != S && S.channelId === this.channelId) {
            let t = (0, u._z)(S),
                s = this.getParticipant(t),
                l = S.ownerId === E.default.getId() && _.A.isSelfStreamHidden(this.channelId),
                o =
                    s?.type === N.lp.STREAM
                        ? {
                              maxResolution: null != s.maxResolution ? { ...s.maxResolution } : void 0,
                              maxFrameRate: s.maxFrameRate,
                          }
                        : null;
            (n = {
                ...T.A.getUserStreamData(e, c, O.x.STREAM),
                ...o,
                type: l ? N.lp.HIDDEN_STREAM : N.lp.STREAM,
                id: t,
                userVideo: a?.selfVideo ?? !1,
                user: r,
                userNick: g.Ay.getName(c, this.channelId, r),
                stream: S,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n);
        }
        return i;
    }
}
