var t,
    r = n(855986),
    i = n(73153),
    o = n(967198),
    a = n(977997),
    s =
        (((t = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
        (t.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
        (t.HIGH_CONTRAST = "HIGH_CONTRAST"),
        t);
let u = {},
    d = {},
    c = null;
function T(e) {
    null != d[e] && (clearTimeout(d[e]), delete d[e]);
}
function E(e) {
    (T(e),
        (d[e] = setTimeout(() => {
            let l = u[e];
            (null != l && ((u[e] = { ...l, style: "GENTLE_AMBIENT" }), h.emitChange()), delete d[e]);
        }, 2e3)));
}
function I() {
    for (let e of Object.keys(d)) clearTimeout(d[e]);
    ((d = {}), (u = {}));
}
function N() {
    return (I(), !0);
}
class C extends r.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(a.A, o.A);
    }
    getAnimationStyle(e) {
        return u[e]?.style ?? "GENTLE_AMBIENT";
    }
    getUserCount(e) {
        return u[e]?.userCount ?? 0;
    }
}
let h = new C(i.h, {
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: l } = e,
            n = o.A.getGuildId();
        n !== c && null != n && (c = n);
        let t = {};
        for (let e of l)
            e.guildId === n &&
                (null != e.oldChannelId && (t[e.oldChannelId] = (t[e.oldChannelId] ?? 0) - 1),
                null != e.channelId && (t[e.channelId] = (t[e.channelId] ?? 0) + 1));
        let r = !1;
        for (let [e, l] of Object.entries(t))
            (function (e, l) {
                let n = u[e],
                    t = n?.userCount ?? 0,
                    r = Math.max(0, t + l);
                return 0 === t && r > 0
                    ? ((u[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: r }), E(e), !0)
                    : t > 0 && r > t
                      ? ((u[e] = { style: "HIGH_CONTRAST", userCount: r }), E(e), !0)
                      : 0 === r
                        ? (T(e), delete u[e], !0)
                        : null != n && r !== t && ((u[e] = { ...n, userCount: r }), !0);
            })(e, l) && (r = !0);
        return r;
    },
    CHANNEL_SELECT: function (e) {
        let { guildId: l } = e;
        if (l === c || null == l) return !1;
        ((c = l), I());
        let n = a.A.getVoiceStates(l),
            t = {};
        for (let e of Object.values(n)) null != e.channelId && (t[e.channelId] = (t[e.channelId] ?? 0) + 1);
        for (let [e, l] of Object.entries(t)) l > 0 && (u[e] = { style: "GENTLE_AMBIENT", userCount: l });
        return !0;
    },
    CONNECTION_OPEN: N,
    LOGOUT: N,
});
n.d(l, {}, { A: h, s: s });
