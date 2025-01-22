r.d(n, {
    Ui: function () {
        return a;
    },
    ZP: function () {
        return R;
    },
    pV: function () {
        return i;
    }
});
var i,
    a,
    o = r(653041);
var s = r(47120);
var l = r(759174),
    u = r(933546),
    c = r(569545),
    d = r(199902),
    f = r(592125),
    p = r(720202),
    h = r(271383),
    _ = r(699516),
    m = r(594174),
    g = r(979651),
    E = r(5192),
    v = r(88751),
    y = r(427679),
    b = r(590415),
    I = r(974609);
function T(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function S(e) {
    var n;
    let { speaker: r, role: i, user: a, userNick: o, connectedOn: s, voiceState: l, type: c } = e,
        d = r ? '\0' : '\x01',
        f = 'STREAM' === c ? '\0' : '\x01',
        p = l.selfMute ? '\x01' : '\0',
        h = l.selfVideo ? '\0' : '\x01',
        _ = ''.concat(null !== (n = null == i ? void 0 : i.position) && void 0 !== n ? n : 999).padStart(3, '0');
    return ''
        .concat(d)
        .concat(f)
        .concat(p)
        .concat(h)
        .concat(_)
        .concat(s)
        .concat((0, u.Z)(o, a));
}
function A(e) {
    let { user: n, voiceState: r } = e,
        i = r.requestToSpeakTimestamp;
    return null == i ? n.id : ''.concat(Date.parse(i)).concat(n.id);
}
function C(e) {
    return e === b.xO.REQUESTED_TO_SPEAK || e === b.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
function N(e) {
    let { speaker: n, role: r, rtsState: i, blocked: a, ignored: o, isFriend: s } = e,
        l = [];
    return C(i) && l.push('ALL_REQUESTED_TO_SPEAK'), i === b.xO.REQUESTED_TO_SPEAK && l.push('REQUESTED_TO_SPEAK_ONLY'), n ? l.push('SPEAKER') : (null != r ? l.push(r.id) : l.push('NO_ROLE'), l.push('AUDIENCE')), a ? l.push('BLOCKED') : o && l.push('IGNORED'), s && l.push('FRIEND'), l;
}
!(function (e) {
    (e.SPEAKER = 'SPEAKER'), (e.AUDIENCE = 'AUDIENCE'), (e.NO_ROLE = 'NO_ROLE'), (e.ALL_REQUESTED_TO_SPEAK = 'ALL_REQUESTED_TO_SPEAK'), (e.REQUESTED_TO_SPEAK_ONLY = 'REQUESTED_TO_SPEAK_ONLY'), (e.BLOCKED = 'BLOCKED'), (e.IGNORED = 'IGNORED'), (e.FRIEND = 'FRIEND'), (e.SELECTED = 'SELECTED'), (e.MEDIA = 'MEDIA');
})(i || (i = {})),
    !(function (e) {
        (e.VOICE = 'VOICE'), (e.STREAM = 'STREAM');
    })(a || (a = {}));
class R {
    _getParticipantsForUser(e, n) {
        var r, i;
        let a;
        let o = [],
            s = g.Z.getVoiceStateForChannel(this.channelId, e);
        if (null == s) return o;
        let l = m.default.getUser(e);
        if (null == l) return null != this.guildId && y.Z.isPublic(this.channelId) && p.Z.requestMember(this.guildId, e), o;
        let u = null != n ? n[0] : null,
            f = {
                user: l,
                userNick: E.ZP.getName(this.guildId, this.channelId, l),
                voiceState: s,
                role: (0, I.H)(this.guildId, e),
                speaker: v.ZP.isSpeaker(e, this.channelId),
                member: null != this.guildId ? h.ZP.getMember(this.guildId, e) : null,
                blocked: _.Z.isBlocked(l.id),
                ignored: _.Z.isIgnored(l.id),
                isFriend: _.Z.isFriend(l.id),
                connectedOn: null !== (r = null == u ? void 0 : u.connectedOn) && void 0 !== r ? r : Date.now()
            },
            T = {
                ...f,
                type: 'VOICE',
                id: l.id,
                rtsState: (0, b.gf)(s)
            };
        o.push(T);
        let S = null !== (i = d.Z.getStreamForUser(e, this.guildId)) && void 0 !== i ? i : d.Z.getActiveStreamForUser(e, this.guildId);
        if (null != S && S.channelId === this.channelId) {
            let e = (0, c.V9)(S);
            (a = {
                ...f,
                id: e,
                type: 'STREAM',
                rtsState: b.xO.NONE
            }),
                o.push(a);
        }
        return o;
    }
    updateParticipant(e) {
        let n = this.participants[e],
            r = this._getParticipantsForUser(e, n);
        return (
            (null != n || 0 !== r.length) &&
            (null == n ||
                n.forEach((e) => {
                    this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id);
                }),
            r.forEach((n) => {
                this._participantsIndex.set(n.id, n), n.id === e && C(n.rtsState) ? this._requestToSpeakIndex.set(e, n) : this._requestToSpeakIndex.delete(e);
            }),
            (this.participants[e] = r),
            !0)
        );
    }
    rebuild() {
        let e = f.Z.getChannel(this.channelId);
        if (null == e || !e.isGuildStageVoice()) return !1;
        let n = new Set(Object.keys(g.Z.getVoiceStatesForChannel(e.id)));
        return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), (this.participants = {}), n.forEach((e) => this.updateParticipant(e)), !0;
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
        var n;
        return null !== (n = this._participantsIndex.get(e)) && void 0 !== n ? n : null;
    }
    get requestToSpeakVersion() {
        return this._requestToSpeakIndex.version;
    }
    getRequestToSpeakParticipants() {
        return this._requestToSpeakIndex.values(void 0, !0);
    }
    constructor(e) {
        var n;
        T(this, 'channelId', void 0), T(this, 'guildId', void 0), T(this, 'participants', {}), T(this, '_participantsIndex', new l.h(N, S)), T(this, '_requestToSpeakIndex', new l.h(() => [], A)), (this.channelId = e), (this.guildId = null === (n = f.Z.getChannel(e)) || void 0 === n ? void 0 : n.getGuildId());
    }
}
