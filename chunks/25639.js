n.d(t, { A: () => A, s: () => o });
var l,
    i = n(311907),
    a = n(73153),
    s = n(967198),
    r = n(977997),
    o =
        (((l = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
        (l.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
        (l.HIGH_CONTRAST = "HIGH_CONTRAST"),
        l);
let u = {},
    c = {},
    d = null;
function h(e) {
    null != c[e] && (clearTimeout(c[e]), delete c[e]);
}
function g(e) {
    h(e),
        (c[e] = setTimeout(() => {
            let t = u[e];
            null != t && ((u[e] = { ...t, style: "GENTLE_AMBIENT" }), N.emitChange()), delete c[e];
        }, 2e3));
}
function f() {
    for (let e of Object.keys(c)) clearTimeout(c[e]);
    (c = {}), (u = {});
}
function m() {
    return f(), !0;
}
class p extends i.Ay.Store {
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
let N = new p(a.h, {
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = s.A.getGuildId();
            n !== d && null != n && (d = n);
            let l = {};
            for (let e of t)
                e.guildId === n &&
                    (null != e.oldChannelId && (l[e.oldChannelId] = (l[e.oldChannelId] ?? 0) - 1),
                    null != e.channelId && (l[e.channelId] = (l[e.channelId] ?? 0) + 1));
            let i = !1;
            for (let [e, t] of Object.entries(l))
                (function (e, t) {
                    let n = u[e],
                        l = n?.userCount ?? 0,
                        i = Math.max(0, l + t);
                    return 0 === l && i > 0
                        ? ((u[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: i }), g(e), !0)
                        : l > 0 && i > l
                          ? ((u[e] = { style: "HIGH_CONTRAST", userCount: i }), g(e), !0)
                          : 0 === i
                            ? (h(e), delete u[e], !0)
                            : null != n && i !== l && ((u[e] = { ...n, userCount: i }), !0);
                })(e, t) && (i = !0);
            return i;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (t === d || null == t) return !1;
            (d = t), f();
            let n = r.A.getVoiceStates(t),
                l = {};
            for (let e of Object.values(n)) null != e.channelId && (l[e.channelId] = (l[e.channelId] ?? 0) + 1);
            for (let [e, t] of Object.entries(l)) t > 0 && (u[e] = { style: "GENTLE_AMBIENT", userCount: t });
            return !0;
        },
        CONNECTION_OPEN: m,
        LOGOUT: m,
    }),
    A = N;
