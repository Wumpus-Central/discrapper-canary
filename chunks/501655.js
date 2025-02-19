n.d(t, {
    Ui: () => I,
    ZP: () => R,
    pV: () => S
}),
    n(653041),
    n(47120);
var r = n(759174),
    i = n(933546),
    o = n(569545),
    a = n(199902),
    s = n(592125),
    l = n(720202),
    c = n(271383),
    u = n(699516),
    d = n(594174),
    f = n(979651),
    p = n(938475),
    _ = n(5192),
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var S = (function (e) {
        return (e.SPEAKER = 'SPEAKER'), (e.AUDIENCE = 'AUDIENCE'), (e.NO_ROLE = 'NO_ROLE'), (e.ALL_REQUESTED_TO_SPEAK = 'ALL_REQUESTED_TO_SPEAK'), (e.REQUESTED_TO_SPEAK_ONLY = 'REQUESTED_TO_SPEAK_ONLY'), (e.BLOCKED = 'BLOCKED'), (e.IGNORED = 'IGNORED'), (e.FRIEND = 'FRIEND'), (e.SELECTED = 'SELECTED'), (e.MEDIA = 'MEDIA'), e;
    })({}),
    I = (function (e) {
        return (e.VOICE = 'VOICE'), (e.STREAM = 'STREAM'), e;
    })({});
function T(e) {
    var t;
    let { speaker: n, role: r, user: o, userNick: a, connectedOn: s, voiceState: l, type: c } = e,
        u = n ? '\0' : '\x01',
        d = 'STREAM' === c ? '\0' : '\x01',
        f = l.selfMute ? '\x01' : '\0',
        p = l.selfVideo ? '\0' : '\x01',
        _ = ''.concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, '0');
    return ''
        .concat(u)
        .concat(d)
        .concat(f)
        .concat(p)
        .concat(_)
        .concat(s)
        .concat((0, i.Z)(a, o));
}
function N(e) {
    let { user: t, voiceState: n } = e,
        r = n.requestToSpeakTimestamp;
    return null == r ? t.id : ''.concat(Date.parse(r)).concat(t.id);
}
function A(e) {
    return e === g.xO.REQUESTED_TO_SPEAK || e === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function C(e) {
    let { speaker: t, role: n, rtsState: r, blocked: i, ignored: o, isFriend: a } = e,
        s = [];
    return A(r) && s.push('ALL_REQUESTED_TO_SPEAK'), r === g.xO.REQUESTED_TO_SPEAK && s.push('REQUESTED_TO_SPEAK_ONLY'), t ? s.push('SPEAKER') : (null != n ? s.push(n.id) : s.push('NO_ROLE'), s.push('AUDIENCE')), i ? s.push('BLOCKED') : o && s.push('IGNORED'), a && s.push('FRIEND'), s;
}
class R {
    _getParticipantsForUser(e, t) {
        var n, r, i;
        let s;
        let v = [],
            y = f.Z.getVoiceStateForChannel(this.channelId, e);
        if (null == y) return v;
        let S = d.default.getUser(e);
        if (null == S) return null != this.guildId && m.Z.isPublic(this.channelId) && l.Z.requestMember(this.guildId, e), v;
        let I = null != t ? t[0] : null,
            T = null != this.guildId ? c.ZP.getMember(this.guildId, e) : null,
            N = null !== (n = null == T ? void 0 : T.nick) && void 0 !== n ? n : _.ZP.getName(this.guildId, this.channelId, S),
            A = {
                user: S,
                userNick: _.ZP.getName(this.guildId, this.channelId, S),
                nick: N,
                comparator: (0, p.sQ)(y, N),
                voiceState: y,
                role: (0, E.H)(this.guildId, e),
                speaker: h.ZP.isSpeaker(e, this.channelId),
                member: T,
                blocked: u.Z.isBlocked(S.id),
                ignored: u.Z.isIgnored(S.id),
                isFriend: u.Z.isFriend(S.id),
                connectedOn: null !== (r = null == I ? void 0 : I.connectedOn) && void 0 !== r ? r : Date.now()
            },
            C = O(b({}, A), {
                type: 'VOICE',
                id: S.id,
                rtsState: (0, g.gf)(y)
            });
        v.push(C);
        let R = null !== (i = a.Z.getStreamForUser(e, this.guildId)) && void 0 !== i ? i : a.Z.getActiveStreamForUser(e, this.guildId);
        if (null != R && R.channelId === this.channelId) {
            let e = (0, o.V9)(R);
            (s = O(b({}, A), {
                id: e,
                type: 'STREAM',
                rtsState: g.xO.NONE
            })),
                v.push(s);
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
                this._participantsIndex.set(t.id, t), t.id === e && A(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    rebuild() {
        let e = s.Z.getChannel(this.channelId);
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
        v(this, 'channelId', void 0), v(this, 'guildId', void 0), v(this, 'participants', {}), v(this, '_participantsIndex', new r.h(C, T)), v(this, '_requestToSpeakIndex', new r.h(() => [], N)), (this.channelId = e), (this.guildId = null === (t = s.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId());
    }
}
