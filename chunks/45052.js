t.d(n, { GZ: () => g, Se: () => A, Ig: () => m, Hv: () => b, F5: () => C });
var i = t(582128),
    l = t(70283),
    a = t(855986),
    r = t(554146),
    o = t(682618),
    s = t(982240),
    u = t(826673),
    c = t(287809);
let d = (0, t(945810).mj)({
    name: "2026-09-gifting-badge-coachmark-audience",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var f = t(998370);
function g(e, n, t) {
    let i = (0, s.rL)(n),
        l = (0, s.rL)(t);
    return Math.min(
        Math.max(null != t ? (l > 0 ? (e / l) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100, 0),
        100,
    );
}
function C(e) {
    return f.J.useConfig({ location: e }).enabled;
}
function m(e) {
    return f.J.getConfig({ location: e }).enabled;
}
function A(e) {
    return e?.complex_icon_static_url ?? e?.simple_icon_url;
}
function b(e) {
    let { location: n, enabled: t = !0 } = e,
        { enabled: g } = f.J.useConfig({ location: n }),
        { enabled: C } = d.useConfig({ location: `${n}${g ? "" : "-DISABLED"}` }),
        m = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.hasHadPremium() ?? !1),
        A = (0, u.HX)(r.M.NEW_GIFTING_BADGES_COACHMARK),
        b = (0, a.bG)([s.Ay], () => s.Ay.getBadgeById(l.$.GIFTING)),
        p = g && !A && t,
        I = p && !C && m,
        h = p && C && null == b;
    return (i.useEffect(() => {
        h ? (0, o.Ay)(l.$.GIFTING) : I && (0, o.o0)(l.$.GIFTING);
    }, [I, h]),
    C)
        ? p && null != b && !b.hidden && (m || b.owned)
            ? "noCount"
            : null
        : p && m && null != b
          ? "count"
          : null;
}
(t(339514), t(792996));
