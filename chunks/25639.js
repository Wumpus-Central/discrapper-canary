l.d(e, { A: () => N, s: () => r });
var a,
    i = l(17928),
    s = l(228366),
    n = l(967198),
    A = l(977997),
    r =
        (((a = {}).GENTLE_AMBIENT = "GENTLE_AMBIENT"),
        (a.GENTLE_AMBIENT_WITH_INTRO = "GENTLE_AMBIENT_WITH_INTRO"),
        (a.HIGH_CONTRAST = "HIGH_CONTRAST"),
        a);
let _ = {},
    I = {},
    E = null;
function h(t) {
    null != I[t] && (clearTimeout(I[t]), delete I[t]);
}
function d(t) {
    h(t),
        (I[t] = setTimeout(() => {
            let e = _[t];
            null != e && ((_[t] = { ...e, style: "GENTLE_AMBIENT" }), c.emitChange()), delete I[t];
        }, 2e3));
}
function u() {
    for (let t of Object.keys(I)) clearTimeout(I[t]);
    (I = {}), (_ = {});
}
function o() {
    return u(), !0;
}
class L extends i.Ay.Store {
    static displayName = "VoiceChannelAnimationStateStore";
    initialize() {
        this.waitFor(A.A, n.A);
    }
    getAnimationStyle(t) {
        return _[t]?.style ?? "GENTLE_AMBIENT";
    }
    getUserCount(t) {
        return _[t]?.userCount ?? 0;
    }
}
let c = new L(s.h, {
        VOICE_STATE_UPDATES: function (t) {
            let { voiceStates: e } = t,
                l = n.A.getGuildId();
            l !== E && null != l && (E = l);
            let a = {};
            for (let t of e)
                t.guildId === l &&
                    (null != t.oldChannelId && (a[t.oldChannelId] = (a[t.oldChannelId] ?? 0) - 1),
                    null != t.channelId && (a[t.channelId] = (a[t.channelId] ?? 0) + 1));
            let i = !1;
            for (let [t, e] of Object.entries(a))
                (function (t, e) {
                    let l = _[t],
                        a = l?.userCount ?? 0,
                        i = Math.max(0, a + e);
                    return 0 === a && i > 0
                        ? ((_[t] = { style: "GENTLE_AMBIENT_WITH_INTRO", userCount: i }), d(t), !0)
                        : a > 0 && i > a
                          ? ((_[t] = { style: "HIGH_CONTRAST", userCount: i }), d(t), !0)
                          : 0 === i
                            ? (h(t), delete _[t], !0)
                            : null != l && i !== a && ((_[t] = { ...l, userCount: i }), !0);
                })(t, e) && (i = !0);
            return i;
        },
        CHANNEL_SELECT: function (t) {
            let { guildId: e } = t;
            if (e === E || null == e) return !1;
            (E = e), u();
            let l = A.A.getVoiceStates(e),
                a = {};
            for (let t of Object.values(l)) null != t.channelId && (a[t.channelId] = (a[t.channelId] ?? 0) + 1);
            for (let [t, e] of Object.entries(a)) e > 0 && (_[t] = { style: "GENTLE_AMBIENT", userCount: e });
            return !0;
        },
        CONNECTION_OPEN: o,
        LOGOUT: o,
    }),
    N = c;
