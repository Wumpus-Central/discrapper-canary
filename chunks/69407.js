"use strict";
n.d(t, { Ay: () => y, ip: () => T, wY: () => S }), n(321073);
var i,
    r,
    s = n(713402),
    a = n(90575),
    o = n(652896),
    l = n(616356),
    _ = n(734057),
    d = n(860071),
    u = n(696451),
    c = n(994500),
    E = n(287809),
    h = n(977997),
    m = n(607567),
    f = n(562153),
    g = n(312006),
    A = n(446600),
    I = n(105530),
    p = n(905278),
    T =
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
    S = (((r = {}).VOICE = "VOICE"), (r.STREAM = "STREAM"), r);
function N(e) {
    let { speaker: t, role: n, user: i, userNick: r, connectedOn: s, voiceState: o, type: l } = e,
        _ = o.selfMute ? "\x01" : "\0",
        d = o.selfVideo ? "\0" : "\x01",
        u = `${n?.position ?? 999}`.padStart(3, "0");
    return `${t ? "\0" : "\x01"}${"STREAM" === l ? "\0" : "\x01"}${_}${d}${u}${s}${(0, a.A)(r, i)}`;
}
function O(e) {
    let { user: t, voiceState: n } = e,
        i = n.requestToSpeakTimestamp;
    return null == i ? t.id : `${Date.parse(i)}${t.id}`;
}
function R(e) {
    return e === I.zF.REQUESTED_TO_SPEAK || e === I.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function C(e) {
    let { speaker: t, role: n, rtsState: i, blocked: r, ignored: s, isFriend: a } = e,
        o = [];
    return (
        R(i) && o.push("ALL_REQUESTED_TO_SPEAK"),
        i === I.zF.REQUESTED_TO_SPEAK && o.push("REQUESTED_TO_SPEAK_ONLY"),
        t ? o.push("SPEAKER") : (null != n ? o.push(n.id) : o.push("NO_ROLE"), o.push("AUDIENCE")),
        r ? o.push("BLOCKED") : s && o.push("IGNORED"),
        a && o.push("FRIEND"),
        o
    );
}
class y {
    channelId;
    guildId;
    participants = {};
    _participantsIndex = new s.J(C, N);
    _requestToSpeakIndex = new s.J(() => [], O);
    constructor(e) {
        (this.channelId = e), (this.guildId = _.A.getChannel(e)?.getGuildId());
    }
    _getParticipantsForUser(e, t) {
        let n,
            i = [],
            r = h.A.getVoiceStateForChannel(this.channelId, e);
        if (null == r) return i;
        let s = E.default.getUser(e);
        if (null == s)
            return null != this.guildId && A.A.isPublic(this.channelId) && d.A.requestMember(this.guildId, e), i;
        let a = null != t ? t[0] : null,
            _ = null != this.guildId ? u.Ay.getMember(this.guildId, e) : null,
            T = _?.nick ?? f.Ay.getName(this.guildId, this.channelId, s),
            S = {
                user: s,
                userNick: f.Ay.getName(this.guildId, this.channelId, s),
                nick: T,
                comparator: (0, m.hz)(r, T),
                voiceState: r,
                role: (0, p.l)(this.guildId, e),
                speaker: g.Ay.isSpeaker(e, this.channelId),
                member: _,
                blocked: c.A.isBlocked(s.id),
                ignored: c.A.isIgnored(s.id),
                isFriend: c.A.isFriend(s.id),
                connectedOn: a?.connectedOn ?? Date.now(),
            },
            N = { ...S, type: "VOICE", id: s.id, rtsState: (0, I.eY)(r) };
        i.push(N);
        let O = l.A.getStreamForUser(e, this.guildId) ?? l.A.getActiveStreamForUser(e, this.guildId);
        if (null != O && O.channelId === this.channelId) {
            let e = (0, o._z)(O);
            (n = { ...S, id: e, type: "STREAM", rtsState: I.zF.NONE }), i.push(n);
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
        let e = _.A.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let t = new Set(Object.keys(h.A.getVoiceStatesForChannel(e.id)));
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
