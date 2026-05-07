"use strict";
n.d(t, { Ay: () => R, KU: () => v, Qt: () => C, r4: () => O }), n(321073);
var i,
    r = n(735438),
    s = n(713402),
    a = n(717558),
    o = n(933958),
    l = n(259464),
    u = n(652896),
    c = n(616356),
    d = n(495544),
    _ = n(470710),
    f = n(734057),
    h = n(235058),
    p = n(485296),
    E = n(287809),
    m = n(803301),
    g = n(977997),
    A = n(562153),
    I = n(90575),
    T = n(806931),
    S = n(652215),
    N = n(731854);
let y = "__EMBEDDED_ACTIVITIES__";
function C(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function v(e) {
    switch (e.type) {
        case T.lp.ACTIVITY:
            return `\x01${e.sortKey}`;
        case T.lp.HIDDEN_STREAM:
        case T.lp.STREAM:
            return `${e.userVideo ? "\x02" : "\x03"}${(0, I.A)(e.userNick, e.user)}\x03`;
        case T.lp.USER:
            let t = "\x05";
            return (
                e.voiceState?.selfVideo ? (t = "\x03") : e.voiceState?.selfStream && (t = "\x04"),
                `${t}${(0, I.A)(e.userNick, e.user)}`
            );
    }
}
var O =
    (((i = {}).VIDEO = "VIDEO"),
    (i.STREAM = "STREAM"),
    (i.FILTERED = "FILTERED"),
    (i.SPEAKING = "SPEAKING"),
    (i.ACTIVITY = "ACTIVITY"),
    (i.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
    i);
class R {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    guildRingingUsers = new Set();
    poppedOutParticipants = new Set();
    participantByIndex = new s.J((e) => {
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
    }, v);
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
        let e = f.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === S.rbe.GUILD_TEXT ||
            ((this.call = _.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(g.A.getVoiceStatesForChannel(e.id)) : e.recipients);
        return (
            t.add(d.default.getId()),
            this.guildRingingUsers.size > 0 && (t = new Set([...t, ...this.guildRingingUsers])),
            c.A.getAllActiveStreamsForChannel(this.channelId).forEach((e) => {
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
        return this.updateParticipant(y);
    }
    hasEmbeddedActivity() {
        return this.size("ACTIVITY") > 0;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = e === y ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
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
                    let i = (0, a.R)({ userId: e, checkIsMuted: !0 }),
                        r = p.A.isSoundSharing(e),
                        s = this.participantByIndex.get(n.id);
                    return s?.type === T.lp.USER && s.speaking === i && s.soundsharing === r
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
        let e = o.Ay.getEmbeddedActivitiesForChannel(this.channelId),
            t = o.Ay.getSelfEmbeddedActivityForChannel(this.channelId);
        return null == t ? e : (0, r.uniqBy)([...e, t], (e) => e.compositeInstanceId);
    }
    _getParticipantsForEmbeddedActivities() {
        return this._getEmbeddedActivities().map((e, t) => ({
            type: T.lp.ACTIVITY,
            id: C({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
            applicationId: e.applicationId,
            activityType: S.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: f.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
        }));
    }
    _getParticipantsForUser(e) {
        let t,
            n,
            i = [],
            r = E.default.getUser(e);
        if (null == r) return i;
        let s = g.A.getVoiceStateForChannel(this.channelId, e),
            o = g.A.getVoicePlatformForChannel(this.channelId, e),
            _ = f.A.getChannel(this.channelId),
            I = _?.getGuildId(),
            S = (this.call?.ringing?.includes(e) || this.guildRingingUsers.has(e)) ?? !1;
        (null != s || S) &&
            ((t = {
                type: T.lp.USER,
                ...m.A.getUserStreamData(e, I),
                user: r,
                id: r.id,
                voiceState: s,
                voicePlatform: o,
                speaking: (0, a.R)({ userId: e, checkIsMuted: !0 }),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: p.A.isSoundSharing(e),
                ringing: S,
                userNick: A.Ay.getName(I, this.channelId, r),
                userAvatarDecoration: (0, l.U)(r, I),
                localVideoDisabled: h.Ay.isLocalVideoDisabled(r.id),
                isPoppedOut: this.poppedOutParticipants.has(r.id),
            }),
            i.push(t));
        let y = c.A.getStreamForUser(e, I) ?? c.A.getActiveStreamForUser(e, I);
        if (null != y && y.channelId === this.channelId) {
            let t = (0, u._z)(y),
                a = this.getParticipant(t),
                o = y.ownerId === d.default.getId() && c.A.isSelfStreamHidden(this.channelId),
                l =
                    a?.type === T.lp.STREAM
                        ? {
                              maxResolution: null != a.maxResolution ? { ...a.maxResolution } : void 0,
                              maxFrameRate: a.maxFrameRate,
                          }
                        : null;
            (n = {
                ...m.A.getUserStreamData(e, I, N.x.STREAM),
                ...l,
                type: o ? T.lp.HIDDEN_STREAM : T.lp.STREAM,
                id: t,
                userVideo: s?.selfVideo ?? !1,
                user: r,
                userNick: A.Ay.getName(I, this.channelId, r),
                stream: y,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                i.push(n);
        }
        return i;
    }
}
