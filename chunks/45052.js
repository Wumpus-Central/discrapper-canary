t.d(n, { GZ: () => C, Se: () => f, Ig: () => N, Hv: () => g, F5: () => _ });
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
var A = t(998370);
function C(e, n, t) {
    let i = (0, s.rL)(n),
        l = (0, s.rL)(t);
    return Math.min(
        Math.max(null != t ? (l > 0 ? (e / l) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100, 0),
        100,
    );
}
function _(e) {
    return A.J.useConfig({ location: e }).enabled;
}
function N(e) {
    return A.J.getConfig({ location: e }).enabled;
}
function f(e) {
    return e?.complex_icon_static_url ?? e?.simple_icon_url;
}
function g(e) {
    let { location: n, enabled: t = !0 } = e,
        { enabled: C } = A.J.useConfig({ location: n }),
        { enabled: _ } = d.useConfig({ location: `${n}${C ? "" : "-DISABLED"}` }),
        N = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.hasHadPremium() ?? !1),
        f = (0, u.HX)(r.M.NEW_GIFTING_BADGES_COACHMARK),
        g = (0, a.bG)([s.Ay], () => s.Ay.getBadgeById(l.$.GIFTING)),
        I = C && !f && t,
        T = I && !_ && N,
        R = I && _ && null == g;
    return (i.useEffect(() => {
        R ? (0, o.Ay)(l.$.GIFTING) : T && (0, o.o0)(l.$.GIFTING);
    }, [T, R]),
    _)
        ? I && null != g && !g.hidden && (N || g.owned)
            ? "noCount"
            : null
        : I && N && null != g
          ? "count"
          : null;
}
(t(339514), t(792996));
