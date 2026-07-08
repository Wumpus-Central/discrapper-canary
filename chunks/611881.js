"use strict";
n.d(t, { Ls: () => E, Ig: () => _, F5: () => u, GZ: () => c });
var i = n(17928),
    r = n(554146),
    a = n(982240),
    s = n(826673),
    l = n(287809);
let o = (0, n(945810).mj)({
    name: "2026-06-gifting-badge-desktop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var d = n(998370);
function c(e, t, n) {
    let i = (0, a.rL)(t),
        r = (0, a.rL)(n);
    return Math.min(
        Math.max(null != n ? (r > 0 ? (e / r) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100, 0),
        100,
    );
}
function u(e) {
    let { enabled: t } = d.J.useConfig({ location: e }),
        { enabled: n } = o.useConfig({ location: `${e}${t ? "" : "-DISABLED"}` });
    return n && t;
}
function _(e) {
    return !!d.J.getConfig({ location: e }).enabled && o.getConfig({ location: e }).enabled;
}
function E(e) {
    let { platform: t, location: n } = e,
        { enabled: a } = d.J.useConfig({ location: n }),
        { enabled: c } = o.useConfig({ location: `${n}${"web" === t ? "" : "-DISABLED"}` }),
        u = (0, i.bG)([l.default], () => l.default.getCurrentUser()?.hasHadPremium() ?? !1),
        _ = (0, s.JZ)(r.M.NEW_GIFTING_BADGES_COACHMARK);
    return ("web" === t ? c && a : a) && u && !_;
}
