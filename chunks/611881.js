"use strict";
n.d(t, { Ls: () => m, Ig: () => h, F5: () => d, GZ: () => c });
var l = n(17928),
    i = n(554146),
    s = n(982240),
    r = n(826673),
    a = n(287809);
let o = (0, n(945810).mj)({
    name: "2026-06-gifting-badge-desktop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var u = n(998370);
function c(e, t, n) {
    let l = (0, s.rL)(t),
        i = (0, s.rL)(n);
    return Math.min(
        Math.max(null != n ? (i > 0 ? (e / i) * 100 : 100) : l > 0 ? (Math.min(l, e) / l) * 100 : 100, 0),
        100,
    );
}
function d(e) {
    let { enabled: t } = u.J.useConfig({ location: e }),
        { enabled: n } = o.useConfig({ location: `${e}${t ? "" : "-DISABLED"}` });
    return n && t;
}
function h(e) {
    return !!u.J.getConfig({ location: e }).enabled && o.getConfig({ location: e }).enabled;
}
function m(e) {
    let { platform: t, location: n } = e,
        { enabled: s } = u.J.useConfig({ location: n }),
        { enabled: c } = o.useConfig({ location: `${n}${"web" === t ? "" : "-DISABLED"}` }),
        d = (0, l.bG)([a.default], () => a.default.getCurrentUser()?.hasHadPremium() ?? !1),
        h = (0, r.HX)(i.M.NEW_GIFTING_BADGES_COACHMARK);
    return ("web" === t ? c && s : s) && d && !h;
}
