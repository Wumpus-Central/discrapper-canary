l.d(t, { A: () => C, s: () => o });
var n,
    i = l(17928),
    r = l(228366),
    s = l(967198),
    a = l(977997),
    o =
        (((n = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
        (n.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
        (n.HIGH_CONTRAST = "HIGH_CONTRAST"),
        n);
let c = {},
    d = {},
    u = null;
function h(e) {
    null != d[e] && (clearTimeout(d[e]), delete d[e]);
}
function T(e) {
    h(e),
        (d[e] = setTimeout(() => {
            let t = c[e];
            null != t && ((c[e] = { ...t, style: "GENTLE_AMBIENT" }), A.emitChange()), delete d[e];
        }, 2e3));
}
function E() {
    for (let e of Object.keys(d)) clearTimeout(d[e]);
    (d = {}), (c = {});
}
function N() {
    return E(), !0;
}
class I extends i.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(a.A, s.A);
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
                l = s.A.getGuildId();
            l !== u && null != l && (u = l);
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
                        ? ((c[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: i }), T(e), !0)
                        : n > 0 && i > n
                          ? ((c[e] = { style: "HIGH_CONTRAST", userCount: i }), T(e), !0)
                          : 0 === i
                            ? (h(e), delete c[e], !0)
                            : null != l && i !== n && ((c[e] = { ...l, userCount: i }), !0);
                })(e, t) && (i = !0);
            return i;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (t === u || null == t) return !1;
            (u = t), E();
            let l = a.A.getVoiceStates(t),
                n = {};
            for (let e of Object.values(l)) null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1);
            for (let [e, t] of Object.entries(n)) t > 0 && (c[e] = { style: "GENTLE_AMBIENT", userCount: t });
            return !0;
        },
        CONNECTION_OPEN: N,
        LOGOUT: N,
    }),
    C = A;
