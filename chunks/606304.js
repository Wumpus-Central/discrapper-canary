n.d(t, { Z: () => w }), n(388685), n(997841);
var r,
    i = n(442837),
    a = n(570140),
    o = n(504313),
    s = n(700785),
    l = n(592125),
    c = n(131951),
    u = n(19780),
    d = n(944486),
    f = n(981631),
    p = n(65154);
function _(e, t, n) {
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
let m = new Map(),
    h = null,
    g = null,
    E = null,
    b = !1,
    y = !1;
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT,
        t = m.get(e);
    return null == t && ((t = new Map()), m.set(e, t)), t;
}
function v(e, t) {
    let n = m.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && m.delete(e), r;
}
function S(e, t, n) {
    var r, i, a;
    return (
        ((null != (a = null == (i = m.get(e)) || null == (r = i.get(t)) ? void 0 : r.flags) ? a : p.Dg.NONE) & n) === n
    );
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = m.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) if ((!n || e !== h) && (i & t) === t) return !0;
    return !1;
}
function T(e, t, n) {
    var r, i;
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
        o = O(e),
        s = o.get(t),
        l = null != (r = null == s ? void 0 : s.flags) ? r : 0;
    if (0 === l && 0 === n) return !1;
    if (0 === n) o.delete(t), 0 === o.size && m.delete(e);
    else {
        let e = null != (i = null == s ? void 0 : s.since) ? i : null,
            r = (l & p.Dg.VOICE) === p.Dg.VOICE,
            c = (n & p.Dg.VOICE) === p.Dg.VOICE;
        r !== c && (e = c ? Date.now() : null),
            o.set(t, {
                flags: n,
                since: e,
                voiceDb: a,
            });
    }
    return !0;
}
function A(e) {
    let { user: t, sessionId: n } = e;
    (h = t.id), (g = n), (E = null);
}
function C(e) {
    let { context: t, userId: n, speakingFlags: r, voiceDb: i } = e;
    if ((r & p.Dg.PRIORITY) === p.Dg.PRIORITY) {
        let e = l.Z.getChannel(d.Z.getVoiceChannelId());
        null != e &&
        s.BT({
            permission: f.Plq.PRIORITY_SPEAKER,
            user: n,
            context: e,
        })
            ? c.Z.setCanHavePriority(n, !0)
            : (c.Z.setCanHavePriority(n, !1), (r &= ~p.Dg.PRIORITY));
    }
    return (r & p.Dg.HIDDEN) === p.Dg.HIDDEN && (r = 0), T(t, n, r, i);
}
function N(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: r, sessionId: i } = t,
            a = !1,
            o = E;
        return (
            n === h && i === g && (E = null != r ? r : null),
            o !== E && (a = m.delete(p.Yn.DEFAULT) || a),
            null == r
                ? (a = n === h && i === g ? m.delete(p.Yn.DEFAULT) || a : v(p.Yn.DEFAULT, n) || a)
                : n === h && i !== g
                  ? (a = m.delete(p.Yn.DEFAULT) || a)
                  : n !== h && r !== u.Z.getChannelId() && (a = v(p.Yn.DEFAULT, n) || a),
            a || e
        );
    }, !1);
}
function P(e) {
    let { isActive: t, isLatched: n } = e;
    (b = n), (y = t);
}
class R extends (r = i.ZP.Store) {
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(l.Z, c.Z, u.Z, d.Z);
    }
    getSpeakingDuration(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.Yn.DEFAULT,
            a = null == (r = m.get(i)) || null == (n = r.get(e)) ? void 0 : n.since;
        return null != a ? t - a : 0;
    }
    getSpeakers() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return Array.from(null != (t = null == (e = m.get(n)) ? void 0 : e.keys()) ? t : []).filter((e) =>
            S(n, e, p.Dg.VOICE),
        );
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        return S(t, e, p.Dg.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        return S(t, e, p.Dg.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        return S(t, e, p.Dg.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return I(e, p.Dg.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return null != h && this.isSpeaking(h, e);
    }
    isCurrentUserPTTActive() {
        return y;
    }
    isCurrentUserPTTLatched() {
        return b;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return I(e, p.Dg.VOICE | p.Dg.PRIORITY);
    }
    isCurrentUserPrioritySpeaker() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return null != h && this.isPrioritySpeaker(h, e);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.Yn.DEFAULT;
        return null != h && this.isPrioritySpeaker(h, e) && this.isSpeaking(h, e);
    }
    getVoiceVolume(e) {
        var t, n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
        return (0, o.h)({ location: "SpeakingStore" }).enabled &&
            null != (r = null == (n = m.get(i)) || null == (t = n.get(e)) ? void 0 : t.voiceDb)
            ? r
            : -1 / 0;
    }
}
_(R, "displayName", "SpeakingStore");
let w = new R(a.Z, {
    CONNECTION_OPEN: A,
    OVERLAY_INITIALIZE: A,
    SPEAKING: C,
    VOICE_STATE_UPDATES: N,
    PUSH_TO_TALK_STATE_CHANGE: P,
});
