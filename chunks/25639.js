l.d(t, { A: () => m, s: () => o });
var n,
    i = l(311907),
    a = l(73153),
    s = l(967198),
    r = l(977997),
    o =
        (((n = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
        (n.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
        (n.HIGH_CONTRAST = "HIGH_CONTRAST"),
        n);
let u = {},
    c = {},
    d = null;
function A(e) {
    null != c[e] && (clearTimeout(c[e]), delete c[e]);
}
function h(e) {
    A(e),
        (c[e] = setTimeout(() => {
            let t = u[e];
            null != t && ((u[e] = { ...t, style: "GENTLE_AMBIENT" }), _.emitChange()), delete c[e];
        }, 2e3));
}
function g() {
    for (let e of Object.keys(c)) clearTimeout(c[e]);
    (c = {}), (u = {});
}
function E() {
    return g(), !0;
}
class f extends i.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(r.A, s.A);
    }
    getAnimationStyle(e) {
        return u[e]?.style ?? "GENTLE_AMBIENT";
    }
    getUserCount(e) {
        return u[e]?.userCount ?? 0;
    }
}
let _ = new f(a.h, {
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                l = s.A.getGuildId();
            l !== d && null != l && (d = l);
            let n = {};
            for (let e of t)
                e.guildId === l &&
                    (null != e.oldChannelId && (n[e.oldChannelId] = (n[e.oldChannelId] ?? 0) - 1),
                    null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1));
            let i = !1;
            for (let [e, t] of Object.entries(n))
                (function (e, t) {
                    let l = u[e],
                        n = l?.userCount ?? 0,
                        i = Math.max(0, n + t);
                    return 0 === n && i > 0
                        ? ((u[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: i }), h(e), !0)
                        : n > 0 && i > n
                          ? ((u[e] = { style: "HIGH_CONTRAST", userCount: i }), h(e), !0)
                          : 0 === i
                            ? (A(e), delete u[e], !0)
                            : null != l && i !== n && ((u[e] = { ...l, userCount: i }), !0);
                })(e, t) && (i = !0);
            return i;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (t === d || null == t) return !1;
            (d = t), g();
            let l = r.A.getVoiceStates(t),
                n = {};
            for (let e of Object.values(l)) null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1);
            for (let [e, t] of Object.entries(n)) t > 0 && (u[e] = { style: "GENTLE_AMBIENT", userCount: t });
            return !0;
        },
        CONNECTION_OPEN: E,
        LOGOUT: E,
    }),
    m = _;
