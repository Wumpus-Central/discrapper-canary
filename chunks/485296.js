"use strict";
n.d(t, { A: () => O }), n(938796);
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
    p = null,
    h = null,
    m = null,
    g = !1,
    E = !1;
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT,
        t = f.get(e);
    return null == t && ((t = new Map()), f.set(e, t)), t;
}
function I(e, t) {
    let n = f.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && f.delete(e), r;
}
function T(e, t, n) {
    return ((f.get(e)?.get(t)?.flags ?? _.ME.NONE) & n) === n;
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = f.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) if ((!n || e !== p) && (i & t) === t) return !0;
    return !1;
}
function S(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
        i = A(e),
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
function v(e) {
    let { user: t, sessionId: n } = e;
    (p = t.id), (h = n), (m = null);
}
function C(e) {
    let { context: t, userId: n, speakingFlags: r, voiceDb: i } = e;
    if ((r & _.ME.PRIORITY) === _.ME.PRIORITY) {
        let e = o.A.getChannel(c.A.getVoiceChannelId());
        null != e && s.$3({ permission: d.xBc.PRIORITY_SPEAKER, user: n, context: e })
            ? l.A.setCanHavePriority(n, !0)
            : (l.A.setCanHavePriority(n, !1), (r &= ~_.ME.PRIORITY));
    }
    return (r & _.ME.HIDDEN) === _.ME.HIDDEN && (r = 0), S(t, n, r, i);
}
function b(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: r, sessionId: i } = t,
            a = !1,
            s = m;
        return (
            n === p && i === h && (m = r ?? null),
            s !== m && (a = f.delete(_.x.DEFAULT) || a),
            null == r
                ? (a = n === p && i === h ? f.delete(_.x.DEFAULT) || a : I(_.x.DEFAULT, n) || a)
                : n === p && i !== h
                  ? (a = f.delete(_.x.DEFAULT) || a)
                  : n !== p && r !== u.A.getChannelId() && (a = I(_.x.DEFAULT, n) || a),
            a || e
        );
    }, !1);
}
function N(e) {
    let { isActive: t, isLatched: n } = e;
    (g = n), (E = t);
}
class R extends r.Ay.Store {
    static displayName = "SpeakingStore";
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(o.A, l.A, u.A, c.A);
    }
    getSpeakingDuration(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.x.DEFAULT,
            r = f.get(n)?.get(e)?.since;
        return null != r ? t - r : 0;
    }
    getSpeakers() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return Array.from(f.get(e)?.keys() ?? []).filter((t) => T(e, t, _.ME.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return T(t, e, _.ME.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return T(t, e, _.ME.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return T(t, e, _.ME.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return y(e, _.ME.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != p && this.isSpeaking(p, e);
    }
    isCurrentUserPTTActive() {
        return E;
    }
    isCurrentUserPTTLatched() {
        return g;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return y(e, _.ME.VOICE | _.ME.PRIORITY);
    }
    isCurrentUserPrioritySpeaker() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != p && this.isPrioritySpeaker(p, e);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != p && this.isPrioritySpeaker(p, e) && this.isSpeaking(p, e);
    }
    getVoiceVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return (0, a.r)({ location: "SpeakingStore" }).enabled ? (f.get(t)?.get(e)?.voiceDb ?? -1 / 0) : -1 / 0;
    }
}
let O = new R(i.h, {
    CONNECTION_OPEN: v,
    OVERLAY_INITIALIZE: v,
    SPEAKING: C,
    VOICE_STATE_UPDATES: b,
    PUSH_TO_TALK_STATE_CHANGE: N,
});
