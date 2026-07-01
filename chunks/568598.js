"use strict";
n.d(t, { Ay: () => D, KU: () => O, Qt: () => R, r4: () => b }), n(321073);
var i,
    r = n(735438),
    s = n(713402),
    a = n(717558),
    o = n(240583),
    l = n(933958),
    u = n(259464),
    c = n(159993),
    d = n(652896),
    _ = n(616356),
    h = n(495544),
    f = n(470710),
    p = n(734057),
    E = n(472444),
    m = n(485296),
    g = n(287809),
    A = n(803301),
    I = n(977997),
    T = n(562153),
    S = n(90575),
    y = n(806931),
    C = n(652215),
    N = n(731854);
let v = "__EMBEDDED_ACTIVITIES__";
function R(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function O(e) {
    switch (e.type) {
        case y.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case y.lp.HIDDEN_STREAM:
        case y.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, S.A)(e.userNick, e.user)}\x03`;
        case y.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, S.A)(e.userNick, e.user)}`
            );
    }
}
var b =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    i);
class D {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    guildRingingUsers = new Set();
    poppedOutParticipants = new Set();
    participantByIndex = new s.J((e) => {
        let t = [];
        return (
            e.type === y.lp.USER && e.speaking && t.push("SPEAKING"),
            e.type === y.lp.USER && e.voiceState?.selfVideo
                ? (t.push("VIDEO"), e.localVideoDisabled || e.isPoppedOut || t.push("FILTERED"))
                : (0, y.Ay)(e) &&
                  (t.push("STREAM"),
                  e.type === y.lp.HIDDEN_STREAM || null == e.streamId || e.isPoppedOut || t.push("FILTERED")),
            e.type === y.lp.ACTIVITY && t.push("ACTIVITY"),
            ("isPoppedOut" in e && e.isPoppedOut) || t.push("NOT_POPPED_OUT"),
            t
        );
    }, O);
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
        let e = p.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === C.rbe.GUILD_TEXT ||
            ((this.call = f.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(I.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(h.default.getId()),
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
        return this.updateParticipant(v);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === v ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                if (n.type === y.lp.USER) {
                    let i = (0, a.R)({ userId: e, checkIsMuted: !0 }),
                        r = m.A.isSoundSharing(e),
                        s = this.participantByIndex.get(n.id);
                    return s?.type === y.lp.USER && s.speaking === i && s.soundsharing === r
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
                    i.type === y.lp.STREAM
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
            t = l.Ay.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId),
            n = l.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
        e = null == n ? t : (0, r.uniqBy)([...t, n], (e) => e.compositeInstanceId);
        let { enabled: i } = o.c.getConfig({ location: "rtc_participants" });
        return g.default.getCurrentUser()?.nsfwAllowed || !i ? e : e.filter((e) => !(0, c.Q)(e.contentClassification));
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => ({
            type: y.lp.ACTIVITY,
            id: R({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
            applicationId: e.applicationId,
            activityType: C.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: p.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
        }));
    }
    _getParticipantsForUser(e) {
        let t,
            n,
            i = [],
            r = g.default.getUser(e);
        if (null == r) return i;
        let s = I.A.getVoiceStateForChannel(this.channelId, e),
            o = I.A.getVoicePlatformForChannel(this.channelId, e),
            l = p.A.getChannel(this.channelId),
            c = l?.getGuildId(),
            f = (this.call?.ringing?.includes(e) || this.guildRingingUsers.has(e)) ?? !1;
        (null != s || f) &&
            ((t = {
                type: y.lp.USER,
                ...A.A.getUserStreamData(e, c),
                user: r,
                id: r.id,
                voiceState: s,
                voicePlatform: o,
                speaking: (0, a.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: m.A.isSoundSharing(e),
                ringing: f,
                userNick: T.Ay.getName(c, this.channelId, r),
                userAvatarDecoration: (0, u.U)(r, c),
                localVideoDisabled: E.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let S = _.A.getStreamForUser(e, c) ?? _.A.getActiveStreamForUser(e, c);
        if (null != S && S.channelId === this.channelId) {
            let t = (0, d._z)(S),
                a = this.getParticipant(t),
                o = S.ownerId === h.default.getId() && _.A.isSelfStreamHidden(this.channelId),
                l =
                    a?.type === y.lp.STREAM
                        ? {
                              maxResolution: null != a.maxResolution ? { ...a.maxResolution } : void 0,
                              maxFrameRate: a.maxFrameRate,
                          }
                        : null;
            (n = {
                ...A.A.getUserStreamData(e, c, N.x.STREAM),
                ...l,
                type: o ? y.lp.HIDDEN_STREAM : y.lp.STREAM,
                id: t,
                userVideo: s?.selfVideo ?? !1,
                user: r,
                userNick: T.Ay.getName(c, this.channelId, r),
                stream: S,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n);
        }
        return i;
    }
}
