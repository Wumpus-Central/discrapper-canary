n.d(t, { Se: () => g, Ls: () => x, Ig: () => f, F5: () => m, GZ: () => h, b9: () => p });
var l = n(17928),
    i = n(554146),
    s = n(982240),
    r = n(826673),
    a = n(287809),
    o = n(945810);
let u = (0, o.mj)({
        name: "2026-09-gifting-badge-complex-art",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    c = (0, o.mj)({
        name: "2026-06-gifting-badge-desktop",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
var d = n(998370);
function h(e, t, n) {
    let l = (0, s.rL)(t),
        i = (0, s.rL)(n);
    return Math.min(
        Math.max(null != n ? (i > 0 ? (e / i) * 100 : 100) : l > 0 ? (Math.min(l, e) / l) * 100 : 100, 0),
        100,
    );
}
function m(e) {
    let { enabled: t } = d.J.useConfig({ location: e }),
        { enabled: n } = c.useConfig({ location: `${e}${t ? "" : "-DISABLED"}` });
    return n && t;
}
function f(e) {
    return !!d.J.getConfig({ location: e }).enabled && c.getConfig({ location: e }).enabled;
}
function p(e) {
    return u.useConfig({ location: e }).enabled;
}
function g(e, t) {
    return t ? (e?.complex_icon_static_url ?? e?.simple_icon_url) : e?.simple_icon_url;
}
function x(e) {
    let { platform: t, location: n } = e,
        { enabled: s } = d.J.useConfig({ location: n }),
        { enabled: o } = c.useConfig({ location: `${n}${"web" === t ? "" : "-DISABLED"}` }),
        u = (0, l.bG)([a.default], () => a.default.getCurrentUser()?.hasHadPremium() ?? !1),
        h = (0, r.HX)(i.M.NEW_GIFTING_BADGES_COACHMARK);
    return ("web" === t ? o && s : s) && u && !h;
}
(n(556427), n(375708));
