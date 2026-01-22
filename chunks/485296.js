n.d(t, {
    A: () => P,
}),
    n(896048),
    n(938796);
var r,
    i = n(311907),
    a = n(73153),
    s = n(124838),
    o = n(488926),
    l = n(734057),
    c = n(430452),
    u = n(383501),
    d = n(309010),
    f = n(652215),
    p = n(731854);

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
let h = new Map(),
    m = null,
    g = null,
    E = null,
    b = !1,
    y = !1;

function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.x.DEFAULT,
        t = h.get(e);
    return null == t && ((t = new Map()), h.set(e, t)), t;
}

function A(e, t) {
    let n = h.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && h.delete(e), r;
}

function v(e, t, n) {
    var r, i, a;
    return (
        ((null != (r = null == (a = h.get(e)) || null == (i = a.get(t)) ? void 0 : i.flags) ? r : p.ME.NONE) & n) === n
    );
}

function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = h.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) if ((!n || e !== m) && (i & t) === t) return !0;
    return !1;
}

function I(e, t, n) {
    var r, i;
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1 / 0,
        s = O(e),
        o = s.get(t),
        l = null != (r = null == o ? void 0 : o.flags) ? r : 0;
    if (0 === l && 0 === n) return !1;
    if (0 === n) s.delete(t), 0 === s.size && h.delete(e);
    else {
        let e = null != (i = null == o ? void 0 : o.since) ? i : null,
            r = (l & p.ME.VOICE) === p.ME.VOICE,
            c = (n & p.ME.VOICE) === p.ME.VOICE;
        r !== c && (e = c ? Date.now() : null),
            s.set(t, {
                flags: n,
                since: e,
                voiceDb: a,
            });
    }
    return !0;
}

function T(e) {
    let { user: t, sessionId: n } = e;
    (m = t.id), (g = n), (E = null);
}

function C(e) {
    let { context: t, userId: n, speakingFlags: r, voiceDb: i } = e;
    if ((r & p.ME.PRIORITY) === p.ME.PRIORITY) {
        let e = l.A.getChannel(d.A.getVoiceChannelId());
        null != e &&
        o.$3({
            permission: f.xBc.PRIORITY_SPEAKER,
            user: n,
            context: e,
        })
            ? c.A.setCanHavePriority(n, !0)
            : (c.A.setCanHavePriority(n, !1), (r &= ~p.ME.PRIORITY));
    }
    return (r & p.ME.HIDDEN) === p.ME.HIDDEN && (r = 0), I(t, n, r, i);
}

function N(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: r, sessionId: i } = t,
            a = !1,
            s = E;
        return (
            n === m && i === g && (E = null != r ? r : null),
            s !== E && (a = h.delete(p.x.DEFAULT) || a),
            null == r
                ? (a = n === m && i === g ? h.delete(p.x.DEFAULT) || a : A(p.x.DEFAULT, n) || a)
                : n === m && i !== g
                  ? (a = h.delete(p.x.DEFAULT) || a)
                  : n !== m && r !== u.A.getChannelId() && (a = A(p.x.DEFAULT, n) || a),
            a || e
        );
    }, !1);
}

function R(e) {
    let { isActive: t, isLatched: n } = e;
    (b = n), (y = t);
}
class w extends (r = i.Ay.Store) {
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(l.A, c.A, u.A, d.A);
    }
    getSpeakingDuration(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p.x.DEFAULT,
            a = null == (r = h.get(i)) || null == (n = r.get(e)) ? void 0 : n.since;
        return null != a ? t - a : 0;
    }
    getSpeakers() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.x.DEFAULT;
        return Array.from(null != (e = null == (t = h.get(n)) ? void 0 : t.keys()) ? e : []).filter((e) =>
            v(n, e, p.ME.VOICE),
        );
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.x.DEFAULT;
        return v(t, e, p.ME.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.x.DEFAULT;
        return v(t, e, p.ME.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.x.DEFAULT;
        return v(t, e, p.ME.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.x.DEFAULT;
        return S(e, p.ME.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.x.DEFAULT;
        return null != m && this.isSpeaking(m, e);
    }
    isCurrentUserPTTActive() {
        return y;
    }
    isCurrentUserPTTLatched() {
        return b;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.x.DEFAULT;
        return S(e, p.ME.VOICE | p.ME.PRIORITY);
    }
    isCurrentUserPrioritySpeaker() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.x.DEFAULT;
        return null != m && this.isPrioritySpeaker(m, e);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.x.DEFAULT;
        return null != m && this.isPrioritySpeaker(m, e) && this.isSpeaking(m, e);
    }
    getVoiceVolume(e) {
        var t, n, r;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p.x.DEFAULT;
        return (0, s.r)({
            location: "SpeakingStore",
        }).enabled && null != (t = null == (r = h.get(i)) || null == (n = r.get(e)) ? void 0 : n.voiceDb)
            ? t
            : -1 / 0;
    }
}
_(w, "displayName", "SpeakingStore");
let P = new w(a.h, {
    CONNECTION_OPEN: T,
    OVERLAY_INITIALIZE: T,
    SPEAKING: C,
    VOICE_STATE_UPDATES: N,
    PUSH_TO_TALK_STATE_CHANGE: R,
});
