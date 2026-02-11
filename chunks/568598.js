"use strict";
n.d(t, { Ay: () => D, KU: () => b, Qt: () => C, hS: () => N, r4: () => R }), n(321073);
var r = n(735438),
    i = n(713402),
    a = n(717558),
    s = n(933958),
    o = n(357046),
    l = n(652896),
    u = n(616356),
    c = n(961350),
    d = n(470710),
    _ = n(734057),
    f = n(430452),
    h = n(485296),
    p = n(287809),
    g = n(803301),
    E = n(977997),
    A = n(562153),
    I = n(90575),
    T = n(806931),
    y = n(652215),
    S = n(731854);
let v = "__EMBEDDED_ACTIVITIES__";
function C(e) {
    let { applicationId: t, instanceId: n } = e;
    return null != n ? `activity-${t}-${n}` : `activity-${t}`;
}
function b(e) {
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
function N(e, t) {
    let [, n] = e,
        [, r] = t;
    return n === r;
}
var R = (function (e) {
    return (
        (e.VIDEO = "VIDEO"),
        (e.STREAM = "STREAM"),
        (e.FILTERED = "FILTERED"),
        (e.SPEAKING = "SPEAKING"),
        (e.ACTIVITY = "ACTIVITY"),
        (e.NOT_POPPED_OUT = "NOT_POPPED_OUT"),
        e
    );
})({});
function O(e) {
    return !(c.default.getId() !== e || f.Ay.isMute()) && h.A.isCurrentUserPTTLatched();
}
class D {
    channelId;
    call;
    participants = {};
    lastSpoke = {};
    guildRingingUsers = new Set();
    poppedOutParticipants = new Set();
    participantByIndex = new i.J((e) => {
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
    }, b);
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
        let e = _.A.getChannel(this.channelId);
        if (
            null == e ||
            e.type === y.rbe.GUILD_TEXT ||
            ((this.call = d.A.getCall(this.channelId)), e.isPrivate() && (null == this.call || this.call.unavailable))
        )
            return !1;
        let t = new Set(e.isGuildVocalOrThread() ? Object.keys(E.A.getVoiceStatesForChannel(e.id)) : e.recipients);
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
                if (n.type === T.lp.USER) {
                    let r = (0, a.R)({ userId: e, checkIsMuted: !0 }),
                        i = O(e),
                        s = h.A.isSoundSharing(e),
                        o = this.participantByIndex.get(n.id);
                    return o?.type === T.lp.USER && o.speaking === r && o.latched === i && o.soundsharing === s
                        ? t
                        : (r && (this.lastSpoke[e] = Date.now()),
                          this.participantByIndex.set(n.id, {
                              ...n,
                              speaking: r,
                              latched: i,
                              lastSpoke: this.lastSpoke[e],
                              soundsharing: s,
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
                (e, r) =>
                    r.type === T.lp.STREAM
                        ? (this.participantByIndex.set(r.id, { ...r, maxResolution: t, maxFrameRate: n }), !0)
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
            type: T.lp.ACTIVITY,
            id: C({ applicationId: e.applicationId, instanceId: e.compositeInstanceId }),
            applicationId: e.applicationId,
            activityType: y.$pd.PLAYING,
            activityUrl: e.url,
            participants: [...(e.participants ?? [])],
            guildId: _.A.getChannel(this.channelId)?.getGuildId() ?? null,
            sortKey: t.toString(),
        }));
    }
    _getParticipantsForUser(e) {
        let t,
            n,
            r = [],
            i = p.default.getUser(e);
        if (null == i) return r;
        let s = E.A.getVoiceStateForChannel(this.channelId, e),
            d = E.A.getVoicePlatformForChannel(this.channelId, e),
            I = _.A.getChannel(this.channelId),
            y = I?.getGuildId(),
            v = (this.call?.ringing?.includes(e) || this.guildRingingUsers.has(e)) ?? !1;
        (null != s || v) &&
            ((t = {
                type: T.lp.USER,
                ...g.A.getUserStreamData(e, y),
                user: i,
                id: i.id,
                voiceState: s,
                voicePlatform: d,
                speaking: (0, a.R)({ userId: e, checkIsMuted: !0 }),
                latched: O(e),
                lastSpoke: this.lastSpoke[e] ?? 0,
                soundsharing: h.A.isSoundSharing(e),
                ringing: v,
                userNick: A.Ay.getName(y, this.channelId, i),
                userAvatarDecoration: (0, o.U)(i, y),
                localVideoDisabled: f.Ay.isLocalVideoDisabled(i.id),
                isPoppedOut: this.poppedOutParticipants.has(i.id),
            }),
            r.push(t));
        let C = u.A.getStreamForUser(e, y) ?? u.A.getActiveStreamForUser(e, y);
        if (null != C && C.channelId === this.channelId) {
            let t = (0, l._z)(C),
                a = this.getParticipant(t),
                o = C.ownerId === c.default.getId() && u.A.isSelfStreamHidden(this.channelId),
                d =
                    a?.type === T.lp.STREAM
                        ? {
                              maxResolution: null != a.maxResolution ? { ...a.maxResolution } : void 0,
                              maxFrameRate: a.maxFrameRate,
                          }
                        : null;
            (n = {
                ...g.A.getUserStreamData(e, y, S.x.STREAM),
                ...d,
                type: o ? T.lp.HIDDEN_STREAM : T.lp.STREAM,
                id: t,
                userVideo: s?.selfVideo ?? !1,
                user: i,
                userNick: A.Ay.getName(y, this.channelId, i),
                stream: C,
                isPoppedOut: this.poppedOutParticipants.has(t),
            }),
                r.push(n);
        }
        return r;
    }
}
