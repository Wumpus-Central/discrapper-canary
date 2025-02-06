n.d(t, {
    Ui: () => I,
    ZP: () => N,
    pV: () => y
}),
    n(653041),
    n(47120);
var i = n(759174),
    r = n(933546),
    a = n(569545),
    s = n(199902),
    o = n(592125),
    l = n(720202),
    u = n(271383),
    c = n(699516),
    d = n(594174),
    f = n(979651),
    _ = n(938475),
    p = n(5192),
    h = n(88751),
    m = n(427679),
    g = n(590415),
    E = n(974609);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var y = (function (e) {
        return (e.SPEAKER = 'SPEAKER'), (e.AUDIENCE = 'AUDIENCE'), (e.NO_ROLE = 'NO_ROLE'), (e.ALL_REQUESTED_TO_SPEAK = 'ALL_REQUESTED_TO_SPEAK'), (e.REQUESTED_TO_SPEAK_ONLY = 'REQUESTED_TO_SPEAK_ONLY'), (e.BLOCKED = 'BLOCKED'), (e.IGNORED = 'IGNORED'), (e.FRIEND = 'FRIEND'), (e.SELECTED = 'SELECTED'), (e.MEDIA = 'MEDIA'), e;
    })({}),
    I = (function (e) {
        return (e.VOICE = 'VOICE'), (e.STREAM = 'STREAM'), e;
    })({});
function b(e) {
    var t;
    let { speaker: n, role: i, user: a, userNick: s, connectedOn: o, voiceState: l, type: u } = e,
        c = n ? '\0' : '\x01',
        d = 'STREAM' === u ? '\0' : '\x01',
        f = l.selfMute ? '\x01' : '\0',
        _ = l.selfVideo ? '\0' : '\x01',
        p = ''.concat(null !== (t = null == i ? void 0 : i.position) && void 0 !== t ? t : 999).padStart(3, '0');
    return ''
        .concat(c)
        .concat(d)
        .concat(f)
        .concat(_)
        .concat(p)
        .concat(o)
        .concat((0, r.Z)(s, a));
}
function T(e) {
    let { user: t, voiceState: n } = e,
        i = n.requestToSpeakTimestamp;
    return null == i ? t.id : ''.concat(Date.parse(i)).concat(t.id);
}
function S(e) {
    return e === g.xO.REQUESTED_TO_SPEAK || e === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function A(e) {
    let { speaker: t, role: n, rtsState: i, blocked: r, ignored: a, isFriend: s } = e,
        o = [];
    return S(i) && o.push('ALL_REQUESTED_TO_SPEAK'), i === g.xO.REQUESTED_TO_SPEAK && o.push('REQUESTED_TO_SPEAK_ONLY'), t ? o.push('SPEAKER') : (null != n ? o.push(n.id) : o.push('NO_ROLE'), o.push('AUDIENCE')), r ? o.push('BLOCKED') : a && o.push('IGNORED'), s && o.push('FRIEND'), o;
}
class N {
    _getParticipantsForUser(e, t) {
        var n, i, r;
        let o;
        let v = [],
            y = f.Z.getVoiceStateForChannel(this.channelId, e);
        if (null == y) return v;
        let I = d.default.getUser(e);
        if (null == I) return null != this.guildId && m.Z.isPublic(this.channelId) && l.Z.requestMember(this.guildId, e), v;
        let b = null != t ? t[0] : null,
            T = null != this.guildId ? u.ZP.getMember(this.guildId, e) : null,
            S = null !== (n = null == T ? void 0 : T.nick) && void 0 !== n ? n : p.ZP.getName(this.guildId, this.channelId, I),
            A = {
                user: I,
                userNick: p.ZP.getName(this.guildId, this.channelId, I),
                nick: S,
                comparator: (0, _.sQ)(y, S),
                voiceState: y,
                role: (0, E.H)(this.guildId, e),
                speaker: h.ZP.isSpeaker(e, this.channelId),
                member: T,
                blocked: c.Z.isBlocked(I.id),
                ignored: c.Z.isIgnored(I.id),
                isFriend: c.Z.isFriend(I.id),
                connectedOn: null !== (i = null == b ? void 0 : b.connectedOn) && void 0 !== i ? i : Date.now()
            },
            N = {
                ...A,
                type: 'VOICE',
                id: I.id,
                rtsState: (0, g.gf)(y)
            };
        v.push(N);
        let C = null !== (r = s.Z.getStreamForUser(e, this.guildId)) && void 0 !== r ? r : s.Z.getActiveStreamForUser(e, this.guildId);
        if (null != C && C.channelId === this.channelId) {
            let e = (0, a.V9)(C);
            (o = {
                ...A,
                id: e,
                type: 'STREAM',
                rtsState: g.xO.NONE
            }),
                v.push(o);
        }
        return v;
    }
    updateParticipant(e) {
        let t = this.participants[e],
            n = this._getParticipantsForUser(e, t);
        return (
            (null != t || 0 !== n.length) &&
            (null == t ||
                t.forEach((e) => {
                    this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id);
                }),
            n.forEach((t) => {
                this._participantsIndex.set(t.id, t), t.id === e && S(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    rebuild() {
        let e = o.Z.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let t = new Set(Object.keys(f.Z.getVoiceStatesForChannel(e.id)));
        return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), (this.participants = {}), t.forEach((e) => this.updateParticipant(e)), !0;
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
        var t;
        return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null;
    }
    get requestToSpeakVersion() {
        return this._requestToSpeakIndex.version;
    }
    getRequestToSpeakParticipants() {
        return this._requestToSpeakIndex.values(void 0, !0);
    }
    constructor(e) {
        var t;
        v(this, 'channelId', void 0), v(this, 'guildId', void 0), v(this, 'participants', {}), v(this, '_participantsIndex', new i.h(A, b)), v(this, '_requestToSpeakIndex', new i.h(() => [], T)), (this.channelId = e), (this.guildId = null === (t = o.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId());
    }
}
