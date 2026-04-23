"use strict";
n.d(t, { A: () => N }), n(938796);
var i = n(17928),
    r = n(228366),
    s = n(124838),
    a = n(488926),
    o = n(734057),
    l = n(969341),
    d = n(763827),
    _ = n(309010),
    u = n(652215),
    c = n(731854);
let E = new Map(),
    h = null,
    m = null,
    f = null,
    g = !1;
function p(e, t) {
    let n = E.get(e);
    if (null == n) return !1;
    let i = n.delete(t);
    return 0 === n.size && E.delete(e), i;
}
function A(e, t, n) {
    return ((E.get(e)?.get(t)?.flags ?? c.ME.NONE) & n) === n;
}
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = E.get(e);
    if (null == i) return !1;
    for (let [e, { flags: r }] of i) if ((!n || e !== h) && (r & t) === t) return !0;
    return !1;
}
function T(e) {
    let { user: t, sessionId: n } = e;
    (h = t.id), (m = n), (f = null);
}
class S extends i.Ay.Store {
    static displayName = "SpeakingStore";
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(o.A, l.Ay, d.A, _.A);
    }
    getSpeakingDuration(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.x.DEFAULT,
            i = E.get(n)?.get(e)?.since;
        return null != i ? t - i : 0;
    }
    getSpeakers() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return Array.from(E.get(e)?.keys() ?? []).filter((t) => A(e, t, c.ME.VOICE));
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT;
        return A(t, e, c.ME.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT;
        return A(t, e, c.ME.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT;
        return A(t, e, c.ME.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return I(e, c.ME.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return null != h && this.isSpeaking(h, e);
    }
    isCurrentUserPTTActive() {
        return g;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return I(e, c.ME.VOICE | c.ME.PRIORITY);
    }
    isCurrentUserPrioritySpeaker() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return null != h && this.isPrioritySpeaker(h, e);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT;
        return null != h && this.isPrioritySpeaker(h, e) && this.isSpeaking(h, e);
    }
    getVoiceVolume(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
            n = s.A.getConfig({ location: "SpeakingStore" });
        return n.enabled && !n.disableUI ? (E.get(t)?.get(e)?.voiceDb ?? -1 / 0) : -1 / 0;
    }
}
let N = new S(r.h, {
    CONNECTION_OPEN: T,
    OVERLAY_INITIALIZE: T,
    SPEAKING: function (e) {
        let { context: t, userId: n, speakingFlags: i, voiceDb: r } = e;
        if ((i & c.ME.PRIORITY) === c.ME.PRIORITY) {
            let e = o.A.getChannel(_.A.getVoiceChannelId());
            null != e && a.$3({ permission: u.xBc.PRIORITY_SPEAKER, user: n, context: e })
                ? l.Ay.setCanHavePriority(n, !0)
                : (l.Ay.setCanHavePriority(n, !1), (i &= ~c.ME.PRIORITY));
        }
        return (
            (i & c.ME.HIDDEN) === c.ME.HIDDEN && (i = 0),
            (function (e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
                    r = (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.x.DEFAULT,
                            t = E.get(e);
                        return null == t && ((t = new Map()), E.set(e, t)), t;
                    })(e),
                    s = r.get(t),
                    a = s?.flags ?? 0;
                if (0 === a && 0 === n) return !1;
                if (0 === n) r.delete(t), 0 === r.size && E.delete(e);
                else {
                    let e = s?.since ?? null,
                        o = (a & c.ME.VOICE) === c.ME.VOICE,
                        l = (n & c.ME.VOICE) === c.ME.VOICE;
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
                a = f;
            return (
                n === h && r === m && (f = i ?? null),
                a !== f && (s = E.delete(c.x.DEFAULT) || s),
                null == i
                    ? (s = n === h && r === m ? E.delete(c.x.DEFAULT) || s : p(c.x.DEFAULT, n) || s)
                    : n === h && r !== m
                      ? (s = E.delete(c.x.DEFAULT) || s)
                      : n !== h && i !== d.A.getChannelId() && (s = p(c.x.DEFAULT, n) || s),
                s || e
            );
        }, !1);
    },
    PUSH_TO_TALK_STATE_CHANGE: function (e) {
        let { isActive: t } = e;
        g = t;
    },
});
