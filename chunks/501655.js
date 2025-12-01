n.d(t, {
    Ui: () => I,
    ZP: () => P,
    pV: () => S,
}),
    n(539854),
    n(388685);
var r = n(759174),
    i = n(933546),
    a = n(569545),
    o = n(199902),
    s = n(592125),
    l = n(720202),
    c = n(271383),
    u = n(699516),
    d = n(594174),
    f = n(979651),
    p = n(938475),
    _ = n(5192),
    m = n(88751),
    h = n(427679),
    g = n(590415),
    E = n(974609);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var S = (function (e) {
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
    var t;
    let { speaker: n, role: r, user: a, userNick: o, connectedOn: s, voiceState: l, type: c } = e,
        u = n ? "\0" : "\x01",
        d = "STREAM" === c ? "\0" : "\x01",
        f = l.selfMute ? "\x01" : "\0",
        p = l.selfVideo ? "\0" : "\x01",
        _ = "".concat(null != (t = null == r ? void 0 : r.position) ? t : 999).padStart(3, "0");
    return ""
        .concat(u)
        .concat(d)
        .concat(f)
        .concat(p)
        .concat(_)
        .concat(s)
        .concat((0, i.Z)(o, a));
}
function A(e) {
    let { user: t, voiceState: n } = e,
        r = n.requestToSpeakTimestamp;
    return null == r ? t.id : "".concat(Date.parse(r)).concat(t.id);
}
function C(e) {
    return e === g.xO.REQUESTED_TO_SPEAK || e === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function N(e) {
    let { speaker: t, role: n, rtsState: r, blocked: i, ignored: a, isFriend: o } = e,
        s = [];
    return (
        C(r) && s.push("ALL_REQUESTED_TO_SPEAK"),
        r === g.xO.REQUESTED_TO_SPEAK && s.push("REQUESTED_TO_SPEAK_ONLY"),
        t ? s.push("SPEAKER") : (null != n ? s.push(n.id) : s.push("NO_ROLE"), s.push("AUDIENCE")),
        i ? s.push("BLOCKED") : a && s.push("IGNORED"),
        o && s.push("FRIEND"),
        s
    );
}
class P {
    _getParticipantsForUser(e, t) {
        var n, r, i;
        let s,
            b = [],
            O = f.Z.getVoiceStateForChannel(this.channelId, e);
        if (null == O) return b;
        let S = d.default.getUser(e);
        if (null == S)
            return null != this.guildId && h.Z.isPublic(this.channelId) && l.Z.requestMember(this.guildId, e), b;
        let I = null != t ? t[0] : null,
            T = null != this.guildId ? c.ZP.getMember(this.guildId, e) : null,
            A = null != (n = null == T ? void 0 : T.nick) ? n : _.ZP.getName(this.guildId, this.channelId, S),
            C = {
                user: S,
                userNick: _.ZP.getName(this.guildId, this.channelId, S),
                nick: A,
                comparator: (0, p.sQ)(O, A),
                voiceState: O,
                role: (0, E.H)(this.guildId, e),
                speaker: m.ZP.isSpeaker(e, this.channelId),
                member: T,
                blocked: u.Z.isBlocked(S.id),
                ignored: u.Z.isIgnored(S.id),
                isFriend: u.Z.isFriend(S.id),
                connectedOn: null != (r = null == I ? void 0 : I.connectedOn) ? r : Date.now(),
            },
            N = v(y({}, C), {
                type: "VOICE",
                id: S.id,
                rtsState: (0, g.gf)(O),
            });
        b.push(N);
        let P = null != (i = o.Z.getStreamForUser(e, this.guildId)) ? i : o.Z.getActiveStreamForUser(e, this.guildId);
        if (null != P && P.channelId === this.channelId) {
            let e = (0, a.V9)(P);
            (s = v(y({}, C), {
                id: e,
                type: "STREAM",
                rtsState: g.xO.NONE,
            })),
                b.push(s);
        }
        return b;
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
                this._participantsIndex.set(t.id, t),
                    t.id === e && C(t.rtsState)
                        ? this._requestToSpeakIndex.set(e, t)
                        : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = n),
            !0)
        );
    }
    rebuild() {
        let e = s.Z.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let t = new Set(Object.keys(f.Z.getVoiceStatesForChannel(e.id)));
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
        var t;
        return null != (t = this._participantsIndex.get(e)) ? t : null;
    }
    get requestToSpeakVersion() {
        return this._requestToSpeakIndex.version;
    }
    getRequestToSpeakParticipants() {
        return this._requestToSpeakIndex.values(void 0, !0);
    }
    constructor(e) {
        var t;
        b(this, "channelId", void 0),
            b(this, "guildId", void 0),
            b(this, "participants", {}),
            b(this, "_participantsIndex", new r.h(N, T)),
            b(this, "_requestToSpeakIndex", new r.h(() => [], A)),
            (this.channelId = e),
            (this.guildId = null == (t = s.Z.getChannel(e)) ? void 0 : t.getGuildId());
    }
}
