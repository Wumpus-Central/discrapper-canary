"use strict";
n.d(t, { Ay: () => C, ip: () => A, wY: () => I }), n(321073);
var r = n(713402),
    i = n(90575),
    a = n(652896),
    s = n(616356),
    o = n(734057),
    l = n(256587),
    u = n(696451),
    c = n(994500),
    d = n(287809),
    _ = n(977997),
    f = n(607567),
    p = n(562153),
    h = n(312006),
    m = n(446600),
    g = n(105530),
    E = n(905278),
    A = (function (e) {
        return (
            (e.SPEAKER = "SPEAKER"),
            (e.AUDIENCE = "AUDIENCE"),
            (e.NO_ROLE = "NO_ROLE"),
            (e.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK"),
            (e.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY"),
            (e.BLOCKED = "BLOCKED"),
            (e.IGNORED = "IGNORED"),
            (e.FRIEND = "FRIEND"),
            (e.SELECTED = "SELECTED"),
            (e.MEDIA = "MEDIA"),
            e
        );
    })({}),
    I = (function (e) {
        return (e.VOICE = "VOICE"), (e.STREAM = "STREAM"), e;
    })({});
function T(e) {
    let { speaker: t, role: n, user: r, userNick: a, connectedOn: s, voiceState: o, type: l } = e,
        u = t ? "\0" : "\x01",
        c = "STREAM" === l ? "\0" : "\x01",
        d = o.selfMute ? "\x01" : "\0",
        _ = o.selfVideo ? "\0" : "\x01",
        f = `${n?.position ?? 999}`.padStart(3, "0");
    return `${u}${c}${d}${_}${f}${s}${(0, i.A)(a, r)}`;
}
function y(e) {
    let { user: t, voiceState: n } = e,
        r = n.requestToSpeakTimestamp;
    return null == r ? t.id : `${Date.parse(r)}${t.id}`;
}
function S(e) {
    return e === g.zF.REQUESTED_TO_SPEAK || e === g.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function v(e) {
    let { speaker: t, role: n, rtsState: r, blocked: i, ignored: a, isFriend: s } = e,
        o = [];
    return (
        S(r) && o.push("ALL_REQUESTED_TO_SPEAK"),
        r === g.zF.REQUESTED_TO_SPEAK && o.push("REQUESTED_TO_SPEAK_ONLY"),
        t ? o.push("SPEAKER") : (null != n ? o.push(n.id) : o.push("NO_ROLE"), o.push("AUDIENCE")),
        i ? o.push("BLOCKED") : a && o.push("IGNORED"),
        s && o.push("FRIEND"),
        o
    );
}
class C {
    channelId;
    guildId;
    participants = {};
    _participantsIndex = new r.J(v, T);
    _requestToSpeakIndex = new r.J(() => [], y);
    constructor(e) {
        (this.channelId = e), (this.guildId = o.A.getChannel(e)?.getGuildId());
    }
    _getParticipantsForUser(e, t) {
        let n,
            r = [],
            i = _.A.getVoiceStateForChannel(this.channelId, e);
        if (null == i) return r;
        let o = d.default.getUser(e);
        if (null == o)
            return null != this.guildId && m.A.isPublic(this.channelId) && l.A.requestMember(this.guildId, e), r;
        let A = null != t ? t[0] : null,
            I = null != this.guildId ? u.Ay.getMember(this.guildId, e) : null,
            T = I?.nick ?? p.Ay.getName(this.guildId, this.channelId, o),
            y = {
                user: o,
                userNick: p.Ay.getName(this.guildId, this.channelId, o),
                nick: T,
                comparator: (0, f.hz)(i, T),
                voiceState: i,
                role: (0, E.l)(this.guildId, e),
                speaker: h.Ay.isSpeaker(e, this.channelId),
                member: I,
                blocked: c.A.isBlocked(o.id),
                ignored: c.A.isIgnored(o.id),
                isFriend: c.A.isFriend(o.id),
                connectedOn: A?.connectedOn ?? Date.now(),
            },
            S = { ...y, type: "VOICE", id: o.id, rtsState: (0, g.eY)(i) };
        r.push(S);
        let v = s.A.getStreamForUser(e, this.guildId) ?? s.A.getActiveStreamForUser(e, this.guildId);
        if (null != v && v.channelId === this.channelId) {
            let e = (0, a._z)(v);
            (n = { ...y, id: e, type: "STREAM", rtsState: g.zF.NONE }), r.push(n);
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
                    t.id === e && S(t.rtsState)
                        ? this._requestToSpeakIndex.set(e, t)
                        : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    rebuild() {
        let e = o.A.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let t = new Set(Object.keys(_.A.getVoiceStatesForChannel(e.id)));
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
