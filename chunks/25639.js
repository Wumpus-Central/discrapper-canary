l.d(t, { A: () => C, s: () => s });
var n,
    i = l(17928),
    r = l(228366),
    a = l(967198),
    o = l(977997),
    s =
        (((n = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
        (n.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
        (n.HIGH_CONTRAST = "HIGH_CONTRAST"),
        n);
let c = {},
    u = {},
    d = null;
function T(e) {
    null != u[e] && (clearTimeout(u[e]), delete u[e]);
}
function E(e) {
    (T(e),
        (u[e] = setTimeout(() => {
            let t = c[e];
            (null != t && ((c[e] = { ...t, style: "GENTLE_AMBIENT" }), A.emitChange()), delete u[e]);
        }, 2e3)));
}
function h() {
    for (let e of Object.keys(u)) clearTimeout(u[e]);
    ((u = {}), (c = {}));
}
function N() {
    return (h(), !0);
}
class I extends i.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(o.A, a.A);
    }
    getAnimationStyle(e) {
        return c[e]?.style ?? "GENTLE_AMBIENT";
    }
    getUserCount(e) {
        return c[e]?.userCount ?? 0;
    }
}
let A = new I(r.h, {
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                l = a.A.getGuildId();
            l !== d && null != l && (d = l);
            let n = {};
            for (let e of t)
                e.guildId === l &&
                    (null != e.oldChannelId && (n[e.oldChannelId] = (n[e.oldChannelId] ?? 0) - 1),
                    null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1));
            let i = !1;
            for (let [e, t] of Object.entries(n))
                (function (e, t) {
                    let l = c[e],
                        n = l?.userCount ?? 0,
                        i = Math.max(0, n + t);
                    return 0 === n && i > 0
                        ? ((c[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: i }), E(e), !0)
                        : n > 0 && i > n
                          ? ((c[e] = { style: "HIGH_CONTRAST", userCount: i }), E(e), !0)
                          : 0 === i
                            ? (T(e), delete c[e], !0)
                            : null != l && i !== n && ((c[e] = { ...l, userCount: i }), !0);
                })(e, t) && (i = !0);
            return i;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (t === d || null == t) return !1;
            ((d = t), h());
            let l = o.A.getVoiceStates(t),
                n = {};
            for (let e of Object.values(l)) null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1);
            for (let [e, t] of Object.entries(n)) t > 0 && (c[e] = { style: "GENTLE_AMBIENT", userCount: t });
            return !0;
        },
        CONNECTION_OPEN: N,
        LOGOUT: N,
    }),
    C = A;
