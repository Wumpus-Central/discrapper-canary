"use strict";
n.d(t, { A: () => D }), n(938796);
var r = n(311907),
    i = n(73153),
    a = n(124838),
    s = n(488926),
    o = n(734057),
    l = n(430452),
    u = n(383501),
    c = n(309010),
    d = n(652215),
    _ = n(731854);
let f = new Map(),
    h = null,
    p = null,
    g = null,
    E = !1,
    A = !1;
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT,
        t = f.get(e);
    return null == t && ((t = new Map()), f.set(e, t)), t;
}
function T(e, t) {
    let n = f.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && f.delete(e), r;
}
function y(e, t, n) {
    return ((f.get(e)?.get(t)?.flags ?? _.ME.NONE) & n) === n;
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = f.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) if ((!n || e !== h) && (i & t) === t) return !0;
    return !1;
}
function v(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
        i = I(e),
        a = i.get(t),
        s = a?.flags ?? 0;
    if (0 === s && 0 === n) return !1;
    if (0 === n) i.delete(t), 0 === i.size && f.delete(e);
    else {
        let e = a?.since ?? null,
            o = (s & _.ME.VOICE) === _.ME.VOICE,
            l = (n & _.ME.VOICE) === _.ME.VOICE;
        o !== l && (e = l ? Date.now() : null), i.set(t, { flags: n, since: e, voiceDb: r });
    }
    return !0;
}
function C(e) {
    let { user: t, sessionId: n } = e;
    (h = t.id), (p = n), (g = null);
}
function b(e) {
    let { context: t, userId: n, speakingFlags: r, voiceDb: i } = e;
    if ((r & _.ME.PRIORITY) === _.ME.PRIORITY) {
        let e = o.A.getChannel(c.A.getVoiceChannelId());
        null != e && s.$3({ permission: d.xBc.PRIORITY_SPEAKER, user: n, context: e })
            ? l.Ay.setCanHavePriority(n, !0)
            : (l.Ay.setCanHavePriority(n, !1), (r &= ~_.ME.PRIORITY));
    }
    return (r & _.ME.HIDDEN) === _.ME.HIDDEN && (r = 0), v(t, n, r, i);
}
function N(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: r, sessionId: i } = t,
            a = !1,
            s = g;
        return (
            n === h && i === p && (g = r ?? null),
            s !== g && (a = f.delete(_.x.DEFAULT) || a),
            null == r
                ? (a = n === h && i === p ? f.delete(_.x.DEFAULT) || a : T(_.x.DEFAULT, n) || a)
                : n === h && i !== p
                  ? (a = f.delete(_.x.DEFAULT) || a)
                  : n !== h && r !== u.A.getChannelId() && (a = T(_.x.DEFAULT, n) || a),
            a || e
        );
    }, !1);
}
function R(e) {
    let { isActive: t, isLatched: n } = e;
    (E = n), (A = t);
}
class O extends r.Ay.Store {
    static displayName = "SpeakingStore";
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(o.A, l.Ay, u.A, c.A);
    }
    getSpeakingDuration(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.x.DEFAULT,
            r = f.get(n)?.get(e)?.since;
        return null != r ? t - r : 0;
    }
    getSpeakers() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return Array.from(f.get(e)?.keys() ?? []).filter((t) => y(e, t, _.ME.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return y(t, e, _.ME.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return y(t, e, _.ME.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return y(t, e, _.ME.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return S(e, _.ME.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != h && this.isSpeaking(h, e);
    }
    isCurrentUserPTTActive() {
        return A;
    }
    isCurrentUserPTTLatched() {
        return E;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return S(e, _.ME.VOICE | _.ME.PRIORITY);
    }
    isCurrentUserPrioritySpeaker() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != h && this.isPrioritySpeaker(h, e);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != h && this.isPrioritySpeaker(h, e) && this.isSpeaking(h, e);
    }
    getVoiceVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT,
            n = a.A.getConfig({ location: "SpeakingStore" });
        return n.enabled && !n.disableUI ? (f.get(t)?.get(e)?.voiceDb ?? -1 / 0) : -1 / 0;
    }
}
let D = new O(i.h, {
    CONNECTION_OPEN: C,
    OVERLAY_INITIALIZE: C,
    SPEAKING: b,
    VOICE_STATE_UPDATES: N,
    PUSH_TO_TALK_STATE_CHANGE: R,
});
