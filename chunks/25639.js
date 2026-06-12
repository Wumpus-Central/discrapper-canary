t.d(l, { A: () => C, s: () => o });
var n,
    i = t(17928),
    r = t(228366),
    s = t(967198),
    a = t(977997),
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
            let l = c[e];
            null != l && ((c[e] = { ...l, style: "GENTLE_AMBIENT" }), A.emitChange()), delete d[e];
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
            let { voiceStates: l } = e,
                t = s.A.getGuildId();
            t !== u && null != t && (u = t);
            let n = {};
            for (let e of l)
                e.guildId === t &&
                    (null != e.oldChannelId && (n[e.oldChannelId] = (n[e.oldChannelId] ?? 0) - 1),
                    null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1));
            let i = !1;
            for (let [e, l] of Object.entries(n))
                (function (e, l) {
                    let t = c[e],
                        n = t?.userCount ?? 0,
                        i = Math.max(0, n + l);
                    return 0 === n && i > 0
                        ? ((c[e] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: i }), T(e), !0)
                        : n > 0 && i > n
                          ? ((c[e] = { style: "HIGH_CONTRAST", userCount: i }), T(e), !0)
                          : 0 === i
                            ? (h(e), delete c[e], !0)
                            : null != t && i !== n && ((c[e] = { ...t, userCount: i }), !0);
                })(e, l) && (i = !0);
            return i;
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: l } = e;
            if (l === u || null == l) return !1;
            (u = l), E();
            let t = a.A.getVoiceStates(l),
                n = {};
            for (let e of Object.values(t)) null != e.channelId && (n[e.channelId] = (n[e.channelId] ?? 0) + 1);
            for (let [e, l] of Object.entries(n)) l > 0 && (c[e] = { style: "GENTLE_AMBIENT", userCount: l });
            return !0;
        },
        CONNECTION_OPEN: N,
        LOGOUT: N,
    }),
    C = A;
