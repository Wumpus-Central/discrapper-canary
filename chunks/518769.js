"use strict";
n.d(t, { wY: () => N, ip: () => S, Ay: () => y }), n(321073);
var i,
    r,
    a = n(713402),
    s = n(90575),
    l = n(652896),
    o = n(616356),
    d = n(734057),
    c = n(860071),
    u = n(696451),
    _ = n(994500),
    E = n(287809),
    A = n(977997),
    h = n(607567),
    I = n(562153),
    f = n(312006),
    p = n(446600),
    T = n(105530);
n(17928);
var m = n(71393),
    g = n(488926),
    S =
        (((i = {}).SPEAKER = "SPEAKER"),
        (i.AUDIENCE = "AUDIENCE"),
        (i.NO_ROLE = "NO_ROLE"),
        (i.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK"),
        (i.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY"),
        (i.BLOCKED = "BLOCKED"),
        (i.IGNORED = "IGNORED"),
        (i.FRIEND = "FRIEND"),
        (i.SELECTED = "SELECTED"),
        (i.MEDIA = "MEDIA"),
        i),
    N = (((r = {}).VOICE = "VOICE"), (r.STREAM = "STREAM"), r);
function C(e) {
    let { speaker: t, role: n, user: i, userNick: r, connectedOn: a, voiceState: l, type: o } = e,
        d = l.selfMute ? "\x01" : "\0",
        c = l.selfVideo ? "\0" : "\x01",
        u = `${n?.position ?? 999}`.padStart(3, "0");
    return `${t ? "\0" : "\x01"}${"STREAM" === o ? "\0" : "\x01"}${d}${c}${u}${a}${(0, s.A)(r, i)}`;
}
function O(e) {
    let { user: t, voiceState: n } = e,
        i = n.requestToSpeakTimestamp;
    return null == i ? t.id : `${Date.parse(i)}${t.id}`;
}
function R(e) {
    return e === T.zF.REQUESTED_TO_SPEAK || e === T.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function L(e) {
    let { speaker: t, role: n, rtsState: i, blocked: r, ignored: a, isFriend: s } = e,
        l = [];
    return (
        R(i) && l.push("ALL_REQUESTED_TO_SPEAK"),
        i === T.zF.REQUESTED_TO_SPEAK && l.push("REQUESTED_TO_SPEAK_ONLY"),
        t ? l.push("SPEAKER") : (null != n ? l.push(n.id) : l.push("NO_ROLE"), l.push("AUDIENCE")),
        r ? l.push("BLOCKED") : a && l.push("IGNORED"),
        s && l.push("FRIEND"),
        l
    );
}
class y {
    channelId;
    guildId;
    participants = {};
    _participantsIndex = new a.J(L, C);
    _requestToSpeakIndex = new a.J(() => [], O);
    constructor(e) {
        (this.channelId = e), (this.guildId = d.A.getChannel(e)?.getGuildId());
    }
    _getParticipantsForUser(e, t) {
        let n,
            i = [],
            r = A.A.getVoiceStateForChannel(this.channelId, e);
        if (null == r) return i;
        let a = E.default.getUser(e);
        if (null == a)
            return null != this.guildId && p.A.isPublic(this.channelId) && c.A.requestMember(this.guildId, e), i;
        let s = null != t ? t[0] : null,
            d = null != this.guildId ? u.Ay.getMember(this.guildId, e) : null,
            S = d?.nick ?? I.Ay.getName(this.guildId, this.channelId, a),
            N = {
                user: a,
                userNick: I.Ay.getName(this.guildId, this.channelId, a),
                nick: S,
                comparator: (0, h.hz)(r, S),
                voiceState: r,
                role: (function (e, t) {
                    let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [m.A, u.Ay];
                    if (null == e || null == t) return null;
                    let r = n.getGuild(e);
                    if (null == r) return null;
                    let a = i.getMember(r.id, t);
                    return null == a ? null : g.li(r, a);
                })(this.guildId, e),
                speaker: f.Ay.isSpeaker(e, this.channelId),
                member: d,
                blocked: _.A.isBlocked(a.id),
                ignored: _.A.isIgnored(a.id),
                isFriend: _.A.isFriend(a.id),
                connectedOn: s?.connectedOn ?? Date.now(),
            },
            C = { ...N, type: "VOICE", id: a.id, rtsState: (0, T.eY)(r) };
        i.push(C);
        let O = o.A.getStreamForUser(e, this.guildId) ?? o.A.getActiveStreamForUser(e, this.guildId);
        if (null != O && O.channelId === this.channelId) {
            let e = (0, l._z)(O);
            (n = { ...N, id: e, type: "STREAM", rtsState: T.zF.NONE }), i.push(n);
        }
        return i;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = this._getParticipantsForUser(e, t);
        return (
            (null != t || 0 !== n.length) &&
            (t?.forEach((e) => {
                this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id);
            }),
            n.forEach((t) => {
                this._participantsIndex.set(t.id, t),
                    t.id === e && R(t.rtsState)
                        ? this._requestToSpeakIndex.set(e, t)
                        : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    rebuild() {
        let e = d.A.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let t = new Set(Object.keys(A.A.getVoiceStatesForChannel(e.id)));
        return (
            this._participantsIndex.clear(),
            this._requestToSpeakIndex.clear(),
            (this.participants = {}),
            t.forEach((e) => this.updateParticipant(e)),
            !0
        );
    }
    get version() {
        return this._participantsIndex.version;
    }
    size(e) {
        return this._participantsIndex.size(e);
    }
    toArray(e) {
        return this._participantsIndex.values(e, !0);
    }
    getParticipant(e) {
        return this._participantsIndex.get(e) ?? null;
    }
    get requestToSpeakVersion() {
        return this._requestToSpeakIndex.version;
    }
    getRequestToSpeakParticipants() {
        return this._requestToSpeakIndex.values(void 0, !0);
    }
}
