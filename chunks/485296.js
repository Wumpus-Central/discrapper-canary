"use strict";
n.d(t, { A: () => R }), n(938796);
var r = n(311907),
    i = n(73153),
    s = n(124838),
    a = n(488926),
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
    E = !1;
function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT,
        t = f.get(e);
    return null == t && ((t = new Map()), f.set(e, t)), t;
}
function A(e, t) {
    let n = f.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && f.delete(e), r;
}
function I(e, t, n) {
    return ((f.get(e)?.get(t)?.flags ?? _.ME.NONE) & n) === n;
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = f.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) if ((!n || e !== p) && (i & t) === t) return !0;
    return !1;
}
function S(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
        i = g(e),
        s = i.get(t),
        a = s?.flags ?? 0;
    if (0 === a && 0 === n) return !1;
    if (0 === n) i.delete(t), 0 === i.size && f.delete(e);
    else {
        let e = s?.since ?? null,
            o = (a & _.ME.VOICE) === _.ME.VOICE,
            l = (n & _.ME.VOICE) === _.ME.VOICE;
        o !== l && (e = l ? Date.now() : null), i.set(t, { flags: n, since: e, voiceDb: r });
    }
    return !0;
}
function y(e) {
    let { user: t, sessionId: n } = e;
    (p = t.id), (h = n), (m = null);
}
function v(e) {
    let { context: t, userId: n, speakingFlags: r, voiceDb: i } = e;
    if ((r & _.ME.PRIORITY) === _.ME.PRIORITY) {
        let e = o.A.getChannel(c.A.getVoiceChannelId());
        null != e && a.$3({ permission: d.xBc.PRIORITY_SPEAKER, user: n, context: e })
            ? l.Ay.setCanHavePriority(n, !0)
            : (l.Ay.setCanHavePriority(n, !1), (r &= ~_.ME.PRIORITY));
    }
    return (r & _.ME.HIDDEN) === _.ME.HIDDEN && (r = 0), S(t, n, r, i);
}
function N(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: r, sessionId: i } = t,
            s = !1,
            a = m;
        return (
            n === p && i === h && (m = r ?? null),
            a !== m && (s = f.delete(_.x.DEFAULT) || s),
            null == r
                ? (s = n === p && i === h ? f.delete(_.x.DEFAULT) || s : A(_.x.DEFAULT, n) || s)
                : n === p && i !== h
                  ? (s = f.delete(_.x.DEFAULT) || s)
                  : n !== p && r !== u.A.getChannelId() && (s = A(_.x.DEFAULT, n) || s),
            s || e
        );
    }, !1);
}
function C(e) {
    let { isActive: t } = e;
    E = t;
}
class b extends r.Ay.Store {
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
        return Array.from(f.get(e)?.keys() ?? []).filter((t) => I(e, t, _.ME.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return I(t, e, _.ME.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return I(t, e, _.ME.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return I(t, e, _.ME.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return T(e, _.ME.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != p && this.isSpeaking(p, e);
    }
    isCurrentUserPTTActive() {
        return E;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return T(e, _.ME.VOICE | _.ME.PRIORITY);
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
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT,
            n = s.A.getConfig({ location: "SpeakingStore" });
        return n.enabled && !n.disableUI ? (f.get(t)?.get(e)?.voiceDb ?? -1 / 0) : -1 / 0;
    }
}
let R = new b(i.h, {
    CONNECTION_OPEN: y,
    OVERLAY_INITIALIZE: y,
    SPEAKING: v,
    VOICE_STATE_UPDATES: N,
    PUSH_TO_TALK_STATE_CHANGE: C,
});
