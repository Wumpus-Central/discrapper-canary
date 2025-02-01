n.d(t, {
    Ui: () => y,
    ZP: () => A,
    pV: () => v
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
    _ = n(5192),
    p = n(88751),
    h = n(427679),
    m = n(590415),
    g = n(974609);
function E(e, t, n) {
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
var v = (function (e) {
        return (e.SPEAKER = 'SPEAKER'), (e.AUDIENCE = 'AUDIENCE'), (e.NO_ROLE = 'NO_ROLE'), (e.ALL_REQUESTED_TO_SPEAK = 'ALL_REQUESTED_TO_SPEAK'), (e.REQUESTED_TO_SPEAK_ONLY = 'REQUESTED_TO_SPEAK_ONLY'), (e.BLOCKED = 'BLOCKED'), (e.IGNORED = 'IGNORED'), (e.FRIEND = 'FRIEND'), (e.SELECTED = 'SELECTED'), (e.MEDIA = 'MEDIA'), e;
    })({}),
    y = (function (e) {
        return (e.VOICE = 'VOICE'), (e.STREAM = 'STREAM'), e;
    })({});
function I(e) {
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
function b(e) {
    return e === m.xO.REQUESTED_TO_SPEAK || e === m.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function S(e) {
    let { speaker: t, role: n, rtsState: i, blocked: r, ignored: a, isFriend: s } = e,
        o = [];
    return b(i) && o.push('ALL_REQUESTED_TO_SPEAK'), i === m.xO.REQUESTED_TO_SPEAK && o.push('REQUESTED_TO_SPEAK_ONLY'), t ? o.push('SPEAKER') : (null != n ? o.push(n.id) : o.push('NO_ROLE'), o.push('AUDIENCE')), r ? o.push('BLOCKED') : a && o.push('IGNORED'), s && o.push('FRIEND'), o;
}
class A {
    _getParticipantsForUser(e, t) {
        var n, i;
        let r;
        let o = [],
            E = f.Z.getVoiceStateForChannel(this.channelId, e);
        if (null == E) return o;
        let v = d.default.getUser(e);
        if (null == v) return null != this.guildId && h.Z.isPublic(this.channelId) && l.Z.requestMember(this.guildId, e), o;
        let y = null != t ? t[0] : null,
            I = {
                user: v,
                userNick: _.ZP.getName(this.guildId, this.channelId, v),
                voiceState: E,
                role: (0, g.H)(this.guildId, e),
                speaker: p.ZP.isSpeaker(e, this.channelId),
                member: null != this.guildId ? u.ZP.getMember(this.guildId, e) : null,
                blocked: c.Z.isBlocked(v.id),
                ignored: c.Z.isIgnored(v.id),
                isFriend: c.Z.isFriend(v.id),
                connectedOn: null !== (n = null == y ? void 0 : y.connectedOn) && void 0 !== n ? n : Date.now()
            },
            T = {
                ...I,
                type: 'VOICE',
                id: v.id,
                rtsState: (0, m.gf)(E)
            };
        o.push(T);
        let b = null !== (i = s.Z.getStreamForUser(e, this.guildId)) && void 0 !== i ? i : s.Z.getActiveStreamForUser(e, this.guildId);
        if (null != b && b.channelId === this.channelId) {
            let e = (0, a.V9)(b);
            (r = {
                ...I,
                id: e,
                type: 'STREAM',
                rtsState: m.xO.NONE
            }),
                o.push(r);
        }
        return o;
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
                this._participantsIndex.set(t.id, t), t.id === e && b(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e);
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
        E(this, 'channelId', void 0), E(this, 'guildId', void 0), E(this, 'participants', {}), E(this, '_participantsIndex', new i.h(S, I)), E(this, '_requestToSpeakIndex', new i.h(() => [], T)), (this.channelId = e), (this.guildId = null === (t = o.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId());
    }
}
