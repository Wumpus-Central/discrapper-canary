"use strict";
n.d(t, { A: () => N }), n(938796);
var i = n(17928),
    r = n(228366),
    a = n(124838),
    s = n(488926),
    l = n(734057),
    o = n(186295),
    d = n(763827),
    c = n(309010),
    u = n(652215),
    _ = n(731854);
let E = new Map(),
    A = null,
    h = null,
    I = null,
    f = !1;
function p(e, t) {
    let n = E.get(e);
    if (null == n) return !1;
    let i = n.delete(t);
    return 0 === n.size && E.delete(e), i;
}
function T(e, t, n) {
    return ((E.get(e)?.get(t)?.flags ?? _.ME.NONE) & n) === n;
}
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = E.get(e);
    if (null == i) return !1;
    for (let [e, { flags: r }] of i) if ((!n || e !== A) && (r & t) === t) return !0;
    return !1;
}
function g(e) {
    let { user: t, sessionId: n } = e;
    (A = t.id), (h = n), (I = null);
}
class S extends i.Ay.Store {
    static displayName = "SpeakingStore";
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(l.A, o.Ay, d.A, c.Ay);
    }
    getSpeakingDuration(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.x.DEFAULT,
            i = E.get(n)?.get(e)?.since;
        return null != i ? t - i : 0;
    }
    getSpeakers() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return Array.from(E.get(e)?.keys() ?? []).filter((t) => T(e, t, _.ME.VOICE));
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
        return m(e, _.ME.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != A && this.isSpeaking(A, e);
    }
    isCurrentUserPTTActive() {
        return f;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return m(e, _.ME.VOICE | _.ME.PRIORITY);
    }
    isCurrentUserPrioritySpeaker() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != A && this.isPrioritySpeaker(A, e);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != A && this.isPrioritySpeaker(A, e) && this.isSpeaking(A, e);
    }
    getVoiceVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT,
            n = a.A.getConfig({ location: "SpeakingStore" });
        return n.enabled && !n.disableUI ? (E.get(t)?.get(e)?.voiceDb ?? -1 / 0) : -1 / 0;
    }
}
let N = new S(r.h, {
    CONNECTION_OPEN: g,
    OVERLAY_INITIALIZE: g,
    SPEAKING: function (e) {
        let { context: t, userId: n, speakingFlags: i, voiceDb: r } = e;
        if ((i & _.ME.PRIORITY) === _.ME.PRIORITY) {
            let e = l.A.getChannel(c.Ay.getVoiceChannelId());
            null != e && s.$3({ permission: u.xBc.PRIORITY_SPEAKER, user: n, context: e })
                ? o.Ay.setCanHavePriority(n, !0)
                : (o.Ay.setCanHavePriority(n, !1), (i &= ~_.ME.PRIORITY));
        }
        return (
            (i & _.ME.HIDDEN) === _.ME.HIDDEN && (i = 0),
            (function (e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
                    r = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT,
                            t = E.get(e);
                        return null == t && ((t = new Map()), E.set(e, t)), t;
                    })(e),
                    a = r.get(t),
                    s = a?.flags ?? 0;
                if (0 === s && 0 === n) return !1;
                if (0 === n) r.delete(t), 0 === r.size && E.delete(e);
                else {
                    let e = a?.since ?? null,
                        l = (s & _.ME.VOICE) === _.ME.VOICE,
                        o = (n & _.ME.VOICE) === _.ME.VOICE;
                    l !== o && (e = o ? Date.now() : null), r.set(t, { flags: n, since: e, voiceDb: i });
                }
                return !0;
            })(t, n, i, r)
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, channelId: i, sessionId: r } = t,
                a = !1,
                s = I;
            return (
                n === A && r === h && (I = i ?? null),
                s !== I && (a = E.delete(_.x.DEFAULT) || a),
                null == i
                    ? (a = n === A && r === h ? E.delete(_.x.DEFAULT) || a : p(_.x.DEFAULT, n) || a)
                    : n === A && r !== h
                      ? (a = E.delete(_.x.DEFAULT) || a)
                      : n !== A && i !== d.A.getChannelId() && (a = p(_.x.DEFAULT, n) || a),
                a || e
            );
        }, !1);
    },
    PUSH_TO_TALK_STATE_CHANGE: function (e) {
        let { isActive: t } = e;
        f = t;
    },
});
