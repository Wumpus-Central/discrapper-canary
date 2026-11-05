var n,
    a = l(855986),
    i = l(73153),
    r = l(967198),
    s = l(977997),
    o =
        (((n = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
        (n.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
        (n.HIGH_CONTRAST = "HIGH_CONTRAST"),
        n);
let c = {},
    d = {},
    h = null;
function u(e) {
    null != d[e] && (clearTimeout(d[e]), delete d[e]);
}
function T(e) {
    (u(e),
        (d[e] = setTimeout(() => {
            let t = c[e];
            (null != t && ((c[e] = { ...t, style: "GENTLE_AMBIENT" }), A.emitChange()), delete d[e]);
        }, 2e3)));
}
function E() {
    for (let e of Object.keys(d)) clearTimeout(d[e]);
    ((d = {}), (c = {}));
}
function N() {
    return (E(), !0);
}
class I extends a.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(s.A, r.A);
    }
    getAnimationStyle(e) {
        return c[e]?.style ?? "GENTLE_AMBIENT";
    }
    getUserCount(e) {
        return c[e]?.userCount ?? 0;
    }
}
let A = new I(i.h, {
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            l = r.A.getGuildId();
        l !== h && null != l && (h = l);
        let n = {};
        for (let e of t)
            e.guildId === l &&
                (null != e.oldChannelId && (n[e.oldChannelId] = (n[e.oldChannelId] ?? 0) - 1),
                null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1));
        let a = !1;
        for (let [e, t] of Object.entries(n))
            (function (e, t) {
                let l = c[e],
                    n = l?.userCount ?? 0,
                    a = Math.max(0, n + t);
                return 0 === n && a > 0
                    ? ((c[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: a }), T(e), !0)
                    : n > 0 && a > n
                      ? ((c[e] = { style: "HIGH_CONTRAST", userCount: a }), T(e), !0)
                      : 0 === a
                        ? (u(e), delete c[e], !0)
                        : null != l && a !== n && ((c[e] = { ...l, userCount: a }), !0);
            })(e, t) && (a = !0);
        return a;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        if (t === h || null == t) return !1;
        ((h = t), E());
        let l = s.A.getVoiceStates(t),
            n = {};
        for (let e of Object.values(l)) null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1);
        for (let [e, t] of Object.entries(n)) t > 0 && (c[e] = { style: "GENTLE_AMBIENT", userCount: t });
        return !0;
    },
    CONNECTION_OPEN: N,
    LOGOUT: N,
});
l.d(t, {}, { A: A, s: o });
