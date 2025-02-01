n.d(t, { Z: () => C }), n(47120), n(789020), n(724458);
var i,
    r = n(442837),
    a = n(570140),
    s = n(700785),
    o = n(592125),
    l = n(131951),
    u = n(19780),
    c = n(944486),
    d = n(981631),
    f = n(65154);
function _(e, t, n) {
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
let p = new Map(),
    h = null,
    m = null,
    g = null;
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT,
        t = p.get(e);
    return null == t && ((t = new Map()), p.set(e, t)), t;
}
function v(e, t) {
    let n = p.get(e);
    if (null == n) return !1;
    let i = n.delete(t);
    return 0 === n.size && p.delete(e), i;
}
function y(e, t, n) {
    var i, r, a;
    return ((null !== (a = null === (r = p.get(e)) || void 0 === r ? void 0 : null === (i = r.get(t)) || void 0 === i ? void 0 : i.flags) && void 0 !== a ? a : f.Dg.NONE) & n) === n;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = p.get(e);
    if (null == i) return !1;
    for (let [e, { flags: r }] of i) if ((!n || e !== h) && (r & t) === t) return !0;
    return !1;
}
function T(e, t, n) {
    var i, r;
    let a = E(e),
        s = a.get(t),
        o = null !== (i = null == s ? void 0 : s.flags) && void 0 !== i ? i : 0;
    if (0 === o && 0 === n) return !1;
    if (0 === n) a.delete(t), 0 === a.size && p.delete(e);
    else {
        let e = null !== (r = null == s ? void 0 : s.since) && void 0 !== r ? r : null,
            i = (o & f.Dg.VOICE) === f.Dg.VOICE,
            l = (n & f.Dg.VOICE) === f.Dg.VOICE;
        i !== l && (e = l ? Date.now() : null),
            a.set(t, {
                flags: n,
                since: e
            });
    }
    return !0;
}
function b(e) {
    let { user: t, sessionId: n } = e;
    (h = t.id), (m = n), (g = null);
}
function S(e) {
    let { context: t, userId: n, speakingFlags: i } = e;
    if ((i & f.Dg.PRIORITY) === f.Dg.PRIORITY) {
        let e = o.Z.getChannel(c.Z.getVoiceChannelId());
        null != e &&
        s.BT({
            permission: d.Plq.PRIORITY_SPEAKER,
            user: n,
            context: e
        })
            ? l.Z.setCanHavePriority(n, !0)
            : (l.Z.setCanHavePriority(n, !1), (i &= ~f.Dg.PRIORITY));
    }
    return T(t, n, i);
}
function A(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: i, sessionId: r } = t,
            a = !1,
            s = g;
        return n === h && r === m && (g = null != i ? i : null), s !== g && (a = p.delete(f.Yn.DEFAULT) || a), null == i ? (a = n === h && r === m ? p.delete(f.Yn.DEFAULT) || a : v(f.Yn.DEFAULT, n) || a) : n === h && r !== m ? (a = p.delete(f.Yn.DEFAULT) || a) : n !== h && i !== u.Z.getChannelId() && (a = v(f.Yn.DEFAULT, n) || a), a || e;
    }, !1);
}
class N extends (i = r.ZP.Store) {
    initialize() {
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(u.Z);
    }
    getSpeakingDuration(e, t) {
        var n, i;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Yn.DEFAULT,
            a = null === (i = p.get(r)) || void 0 === i ? void 0 : null === (n = i.get(e)) || void 0 === n ? void 0 : n.since;
        return null != a ? t - a : 0;
    }
    getSpeakers() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return Array.from(null !== (t = null === (e = p.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter((e) => y(n, e, f.Dg.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
        return y(t, e, f.Dg.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
        return y(t, e, f.Dg.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
        return y(t, e, f.Dg.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return I(e, f.Dg.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return null != h && this.isSpeaking(h, e);
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return I(e, f.Dg.VOICE | f.Dg.PRIORITY);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return null != h && this.isPrioritySpeaker(h, e) && this.isSpeaking(h, e);
    }
}
_(N, 'displayName', 'SpeakingStore');
let C = new N(a.Z, {
    CONNECTION_OPEN: b,
    OVERLAY_INITIALIZE: b,
    SPEAKING: S,
    VOICE_STATE_UPDATES: A
});
