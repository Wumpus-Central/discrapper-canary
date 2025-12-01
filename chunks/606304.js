n.d(t, { Z: () => R }), n(388685), n(997841);
var r,
    i = n(442837),
    a = n(570140),
    o = n(700785),
    s = n(592125),
    l = n(131951),
    c = n(19780),
    u = n(944486),
    d = n(981631),
    f = n(65154);
function p(e, t, n) {
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
let _ = new Map(),
    m = null,
    h = null,
    g = null,
    E = !1,
    b = !1;
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT,
        t = _.get(e);
    return null == t && ((t = new Map()), _.set(e, t)), t;
}
function O(e, t) {
    let n = _.get(e);
    if (null == n) return !1;
    let r = n.delete(t);
    return 0 === n.size && _.delete(e), r;
}
function v(e, t, n) {
    var r, i, a;
    return (
        ((null != (a = null == (i = _.get(e)) || null == (r = i.get(t)) ? void 0 : r.flags) ? a : f.Dg.NONE) & n) === n
    );
}
function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = _.get(e);
    if (null == r) return !1;
    for (let [e, { flags: i }] of r) if ((!n || e !== m) && (i & t) === t) return !0;
    return !1;
}
function I(e, t, n) {
    var r, i;
    let a = y(e),
        o = a.get(t),
        s = null != (r = null == o ? void 0 : o.flags) ? r : 0;
    if (0 === s && 0 === n) return !1;
    if (0 === n) a.delete(t), 0 === a.size && _.delete(e);
    else {
        let e = null != (i = null == o ? void 0 : o.since) ? i : null,
            r = (s & f.Dg.VOICE) === f.Dg.VOICE,
            l = (n & f.Dg.VOICE) === f.Dg.VOICE;
        r !== l && (e = l ? Date.now() : null),
            a.set(t, {
                flags: n,
                since: e,
            });
    }
    return !0;
}
function T(e) {
    let { user: t, sessionId: n } = e;
    (m = t.id), (h = n), (g = null);
}
function A(e) {
    let { context: t, userId: n, speakingFlags: r } = e;
    if ((r & f.Dg.PRIORITY) === f.Dg.PRIORITY) {
        let e = s.Z.getChannel(u.Z.getVoiceChannelId());
        null != e &&
        o.BT({
            permission: d.Plq.PRIORITY_SPEAKER,
            user: n,
            context: e,
        })
            ? l.Z.setCanHavePriority(n, !0)
            : (l.Z.setCanHavePriority(n, !1), (r &= ~f.Dg.PRIORITY));
    }
    return (r & f.Dg.HIDDEN) === f.Dg.HIDDEN && (r = 0), I(t, n, r);
}
function C(e) {
    let { voiceStates: t } = e;
    return t.reduce((e, t) => {
        let { userId: n, channelId: r, sessionId: i } = t,
            a = !1,
            o = g;
        return (
            n === m && i === h && (g = null != r ? r : null),
            o !== g && (a = _.delete(f.Yn.DEFAULT) || a),
            null == r
                ? (a = n === m && i === h ? _.delete(f.Yn.DEFAULT) || a : O(f.Yn.DEFAULT, n) || a)
                : n === m && i !== h
                  ? (a = _.delete(f.Yn.DEFAULT) || a)
                  : n !== m && r !== c.Z.getChannelId() && (a = O(f.Yn.DEFAULT, n) || a),
            a || e
        );
    }, !1);
}
function N(e) {
    let { isActive: t, isLatched: n } = e;
    (E = n), (b = t);
}
class P extends (r = i.ZP.Store) {
    initialize() {
        this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type),
            this.waitFor(s.Z, l.Z, c.Z, u.Z);
    }
    getSpeakingDuration(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Yn.DEFAULT,
            a = null == (r = _.get(i)) || null == (n = r.get(e)) ? void 0 : n.since;
        return null != a ? t - a : 0;
    }
    getSpeakers() {
        var e, t;
        let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return Array.from(null != (t = null == (e = _.get(n)) ? void 0 : e.keys()) ? t : []).filter((e) =>
            v(n, e, f.Dg.VOICE),
        );
    }
    isSpeaking(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
        return v(t, e, f.Dg.VOICE);
    }
    isPrioritySpeaker(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
        return v(t, e, f.Dg.PRIORITY);
    }
    isSoundSharing(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
        return v(t, e, f.Dg.SOUNDSHARE);
    }
    isAnyoneElseSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return S(e, f.Dg.VOICE, !0);
    }
    isCurrentUserSpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return null != m && this.isSpeaking(m, e);
    }
    isCurrentUserPTTActive() {
        return b;
    }
    isCurrentUserPTTLatched() {
        return E;
    }
    isAnyonePrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return S(e, f.Dg.VOICE | f.Dg.PRIORITY);
    }
    isCurrentUserPrioritySpeaker() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return null != m && this.isPrioritySpeaker(m, e);
    }
    isCurrentUserPrioritySpeaking() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
        return null != m && this.isPrioritySpeaker(m, e) && this.isSpeaking(m, e);
    }
}
p(P, "displayName", "SpeakingStore");
let R = new P(a.Z, {
    CONNECTION_OPEN: T,
    OVERLAY_INITIALIZE: T,
    SPEAKING: A,
    VOICE_STATE_UPDATES: C,
    PUSH_TO_TALK_STATE_CHANGE: N,
});
