"use strict";
n.d(t, { wY: () => y, ip: () => N, Ay: () => b }), n(321073);
var i,
    r,
    s = n(713402),
    a = n(90575),
    o = n(652896),
    l = n(616356),
    u = n(734057),
    c = n(860071),
    d = n(696451),
    _ = n(994500),
    f = n(287809),
    h = n(977997),
    p = n(607567),
    E = n(562153),
    m = n(312006),
    g = n(446600),
    A = n(105530);
n(17928);
var I = n(71393),
    T = n(488926);
let S = function (e, t) {
    let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [I.A, d.Ay];
    if (null == e || null == t) return null;
    let r = n.getGuild(e);
    if (null == r) return null;
    let s = i.getMember(r.id, t);
    return null == s ? null : T.li(r, s);
};
var N =
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
    y = (((r = {}).VOICE = "VOICE"), (r.STREAM = "STREAM"), r);
function C(e) {
    let { speaker: t, role: n, user: i, userNick: r, connectedOn: s, voiceState: o, type: l } = e,
        u = o.selfMute ? "\x01" : "\0",
        c = o.selfVideo ? "\0" : "\x01",
        d = `${n?.position ?? 999}`.padStart(3, "0");
    return `${t ? "\0" : "\x01"}${"STREAM" === l ? "\0" : "\x01"}${u}${c}${d}${s}${(0, a.A)(r, i)}`;
}
function v(e) {
    let { user: t, voiceState: n } = e,
        i = n.requestToSpeakTimestamp;
    return null == i ? t.id : `${Date.parse(i)}${t.id}`;
}
function O(e) {
    return e === A.zF.REQUESTED_TO_SPEAK || e === A.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function R(e) {
    let { speaker: t, role: n, rtsState: i, blocked: r, ignored: s, isFriend: a } = e,
        o = [];
    return (
        O(i) && o.push("ALL_REQUESTED_TO_SPEAK"),
        i === A.zF.REQUESTED_TO_SPEAK && o.push("REQUESTED_TO_SPEAK_ONLY"),
        t ? o.push("SPEAKER") : (null != n ? o.push(n.id) : o.push("NO_ROLE"), o.push("AUDIENCE")),
        r ? o.push("BLOCKED") : s && o.push("IGNORED"),
        a && o.push("FRIEND"),
        o
    );
}
class b {
    channelId;
    guildId;
    participants = {};
    _participantsIndex = new s.J(R, C);
    _requestToSpeakIndex = new s.J(() => [], v);
    constructor(e) {
        (this.channelId = e), (this.guildId = u.A.getChannel(e)?.getGuildId());
    }
    _getParticipantsForUser(e, t) {
        let n,
            i = [],
            r = h.A.getVoiceStateForChannel(this.channelId, e);
        if (null == r) return i;
        let s = f.default.getUser(e);
        if (null == s)
            return null != this.guildId && g.A.isPublic(this.channelId) && c.A.requestMember(this.guildId, e), i;
        let a = null != t ? t[0] : null,
            u = null != this.guildId ? d.Ay.getMember(this.guildId, e) : null,
            I = u?.nick ?? E.Ay.getName(this.guildId, this.channelId, s),
            T = {
                user: s,
                userNick: E.Ay.getName(this.guildId, this.channelId, s),
                nick: I,
                comparator: (0, p.hz)(r, I),
                voiceState: r,
                role: S(this.guildId, e),
                speaker: m.Ay.isSpeaker(e, this.channelId),
                member: u,
                blocked: _.A.isBlocked(s.id),
                ignored: _.A.isIgnored(s.id),
                isFriend: _.A.isFriend(s.id),
                connectedOn: a?.connectedOn ?? Date.now(),
            },
            N = { ...T, type: "VOICE", id: s.id, rtsState: (0, A.eY)(r) };
        i.push(N);
        let y = l.A.getStreamForUser(e, this.guildId) ?? l.A.getActiveStreamForUser(e, this.guildId);
        if (null != y && y.channelId === this.channelId) {
            let e = (0, o._z)(y);
            (n = { ...T, id: e, type: "STREAM", rtsState: A.zF.NONE }), i.push(n);
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
