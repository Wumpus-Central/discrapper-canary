"use strict";
n.d(t, { G: () => c, L: () => d });
var i = n(17928),
    r = n(554146),
    s = n(982240),
    a = n(826673),
    o = n(287809),
    l = n(928898),
    u = n(998370);
function c(e, t, n) {
    let i = (0, s.rL)(t),
        r = (0, s.rL)(n);
    return Math.min(
        Math.max(null != n ? (r > 0 ? (e / r) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100, 0),
        100,
    );
}
function d(e) {
    let { platform: t, location: n } = e,
        { enabled: s } = ("web" === t ? l.n : u.J).useConfig({ location: n }),
        c = (0, i.bG)([o.default], () => o.default.getCurrentUser()?.hasHadPremium() ?? !1),
        d = (0, a.JZ)(r.M.NEW_GIFTING_BADGES_COACHMARK);
    return s && c && !d;
}
