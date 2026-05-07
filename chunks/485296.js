"use strict";
n.d(t, { A: () => N }), n(938796);
var i = n(17928),
    r = n(228366),
    s = n(124838),
    a = n(488926),
    o = n(734057),
    l = n(235058),
    u = n(763827),
    c = n(309010),
    d = n(652215),
    _ = n(731854);
let f = new Map(),
    h = null,
    p = null,
    E = null,
    m = !1;
function g(e, t) {
    let n = f.get(e);
    if (null == n) return !1;
    let i = n.delete(t);
    return 0 === n.size && f.delete(e), i;
}
function A(e, t, n) {
    return ((f.get(e)?.get(t)?.flags ?? _.ME.NONE) & n) === n;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = f.get(e);
    if (null == i) return !1;
    for (let [e, { flags: r }] of i) if ((!n || e !== h) && (r & t) === t) return !0;
    return !1;
}
function T(e) {
    let { user: t, sessionId: n } = e;
    (h = t.id), (p = n), (E = null);
}
class S extends i.Ay.Store {
    static displayName = "SpeakingStore";
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(o.A, l.Ay, u.A, c.A);
    }
    getSpeakingDuration(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.x.DEFAULT,
            i = f.get(n)?.get(e)?.since;
        return null != i ? t - i : 0;
    }
    getSpeakers() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return Array.from(f.get(e)?.keys() ?? []).filter((t) => A(e, t, _.ME.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return A(t, e, _.ME.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return A(t, e, _.ME.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.x.DEFAULT;
        return A(t, e, _.ME.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return I(e, _.ME.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return null != h && this.isSpeaking(h, e);
    }
    isCurrentUserPTTActive() {
        return m;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT;
        return I(e, _.ME.VOICE | _.ME.PRIORITY);
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
            n = s.A.getConfig({ location: "SpeakingStore" });
        return n.enabled && !n.disableUI ? (f.get(t)?.get(e)?.voiceDb ?? -1 / 0) : -1 / 0;
    }
}
let N = new S(r.h, {
    CONNECTION_OPEN: T,
    OVERLAY_INITIALIZE: T,
    SPEAKING: function (e) {
        let { context: t, userId: n, speakingFlags: i, voiceDb: r } = e;
        if ((i & _.ME.PRIORITY) === _.ME.PRIORITY) {
            let e = o.A.getChannel(c.A.getVoiceChannelId());
            null != e && a.$3({ permission: d.xBc.PRIORITY_SPEAKER, user: n, context: e })
                ? l.Ay.setCanHavePriority(n, !0)
                : (l.Ay.setCanHavePriority(n, !1), (i &= ~_.ME.PRIORITY));
        }
        return (
            (i & _.ME.HIDDEN) === _.ME.HIDDEN && (i = 0),
            (function (e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
                    r = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.x.DEFAULT,
                            t = f.get(e);
                        return null == t && ((t = new Map()), f.set(e, t)), t;
                    })(e),
                    s = r.get(t),
                    a = s?.flags ?? 0;
                if (0 === a && 0 === n) return !1;
                if (0 === n) r.delete(t), 0 === r.size && f.delete(e);
                else {
                    let e = s?.since ?? null,
                        o = (a & _.ME.VOICE) === _.ME.VOICE,
                        l = (n & _.ME.VOICE) === _.ME.VOICE;
                    o !== l && (e = l ? Date.now() : null), r.set(t, { flags: n, since: e, voiceDb: i });
                }
                return !0;
            })(t, n, i, r)
        );
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.reduce((e, t) => {
            let { userId: n, channelId: i, sessionId: r } = t,
                s = !1,
                a = E;
            return (
                n === h && r === p && (E = i ?? null),
                a !== E && (s = f.delete(_.x.DEFAULT) || s),
                null == i
                    ? (s = n === h && r === p ? f.delete(_.x.DEFAULT) || s : g(_.x.DEFAULT, n) || s)
                    : n === h && r !== p
                      ? (s = f.delete(_.x.DEFAULT) || s)
                      : n !== h && i !== u.A.getChannelId() && (s = g(_.x.DEFAULT, n) || s),
                s || e
            );
        }, !1);
    },
    PUSH_TO_TALK_STATE_CHANGE: function (e) {
        let { isActive: t } = e;
        m = t;
    },
});
