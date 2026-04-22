"use strict";
n.d(t, { Ay: () => v, ip: () => T, wY: () => S }), n(321073);
var r,
    i,
    s = n(713402),
    a = n(90575),
    o = n(652896),
    l = n(616356),
    u = n(734057),
    d = n(256587),
    c = n(696451),
    _ = n(994500),
    f = n(287809),
    E = n(977997),
    h = n(607567),
    p = n(562153),
    m = n(312006),
    g = n(446600),
    A = n(105530),
    I = n(905278),
    T =
        (((r = {}).SPEAKER = "SPEAKER"),
        (r.AUDIENCE = "AUDIENCE"),
        (r.NO_ROLE = "NO_ROLE"),
        (r.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK"),
        (r.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY"),
        (r.BLOCKED = "BLOCKED"),
        (r.IGNORED = "IGNORED"),
        (r.FRIEND = "FRIEND"),
        (r.SELECTED = "SELECTED"),
        (r.MEDIA = "MEDIA"),
        r),
    S = (((i = {}).VOICE = "VOICE"), (i.STREAM = "STREAM"), i);
function y(e) {
    let { speaker: t, role: n, user: r, userNick: i, connectedOn: s, voiceState: o, type: l } = e,
        u = o.selfMute ? "\x01" : "\0",
        d = o.selfVideo ? "\0" : "\x01",
        c = `${n?.position ?? 999}`.padStart(3, "0");
    return `${t ? "\0" : "\x01"}${"STREAM" === l ? "\0" : "\x01"}${u}${d}${c}${s}${(0, a.A)(i, r)}`;
}
function N(e) {
    let { user: t, voiceState: n } = e,
        r = n.requestToSpeakTimestamp;
    return null == r ? t.id : `${Date.parse(r)}${t.id}`;
}
function O(e) {
    return e === A.zF.REQUESTED_TO_SPEAK || e === A.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function R(e) {
    let { speaker: t, role: n, rtsState: r, blocked: i, ignored: s, isFriend: a } = e,
        o = [];
    return (
        O(r) && o.push("ALL_REQUESTED_TO_SPEAK"),
        r === A.zF.REQUESTED_TO_SPEAK && o.push("REQUESTED_TO_SPEAK_ONLY"),
        t ? o.push("SPEAKER") : (null != n ? o.push(n.id) : o.push("NO_ROLE"), o.push("AUDIENCE")),
        i ? o.push("BLOCKED") : s && o.push("IGNORED"),
        a && o.push("FRIEND"),
        o
    );
}
class v {
    channelId;
    guildId;
    participants = {};
    _participantsIndex = new s.J(R, y);
    _requestToSpeakIndex = new s.J(() => [], N);
    constructor(e) {
        (this.channelId = e), (this.guildId = u.A.getChannel(e)?.getGuildId());
    }
    _getParticipantsForUser(e, t) {
        let n,
            r = [],
            i = E.A.getVoiceStateForChannel(this.channelId, e);
        if (null == i) return r;
        let s = f.default.getUser(e);
        if (null == s)
            return null != this.guildId && g.A.isPublic(this.channelId) && d.A.requestMember(this.guildId, e), r;
        let a = null != t ? t[0] : null,
            u = null != this.guildId ? c.Ay.getMember(this.guildId, e) : null,
            T = u?.nick ?? p.Ay.getName(this.guildId, this.channelId, s),
            S = {
                user: s,
                userNick: p.Ay.getName(this.guildId, this.channelId, s),
                nick: T,
                comparator: (0, h.hz)(i, T),
                voiceState: i,
                role: (0, I.l)(this.guildId, e),
                speaker: m.Ay.isSpeaker(e, this.channelId),
                member: u,
                blocked: _.A.isBlocked(s.id),
                ignored: _.A.isIgnored(s.id),
                isFriend: _.A.isFriend(s.id),
                connectedOn: a?.connectedOn ?? Date.now(),
            },
            y = { ...S, type: "VOICE", id: s.id, rtsState: (0, A.eY)(i) };
        r.push(y);
        let N = l.A.getStreamForUser(e, this.guildId) ?? l.A.getActiveStreamForUser(e, this.guildId);
        if (null != N && N.channelId === this.channelId) {
            let e = (0, o._z)(N);
            (n = { ...S, id: e, type: "STREAM", rtsState: A.zF.NONE }), r.push(n);
        }
        return r;
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
                    t.id === e && O(t.rtsState)
                        ? this._requestToSpeakIndex.set(e, t)
                        : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    rebuild() {
        let e = u.A.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let t = new Set(Object.keys(E.A.getVoiceStatesForChannel(e.id)));
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
