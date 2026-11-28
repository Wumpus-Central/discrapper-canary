t.d(n, { GZ: () => f, Se: () => C, Hv: () => g });
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
function f(e, n, t) {
    let i = (0, s.rL)(n),
        l = (0, s.rL)(t);
    return Math.min(
        Math.max(null != t ? (l > 0 ? (e / l) * 100 : 100) : i > 0 ? (Math.min(i, e) / i) * 100 : 100, 0),
        100,
    );
}
function C(e) {
    return e?.complex_icon_static_url ?? e?.simple_icon_url;
}
function g(e) {
    let { location: n, enabled: t = !0 } = e,
        { enabled: f } = d.useConfig({ location: n }),
        C = (0, a.bG)([c.default], () => c.default.getCurrentUser()?.hasHadPremium() ?? !1),
        g = (0, u.HX)(r.M.NEW_GIFTING_BADGES_COACHMARK),
        m = (0, a.bG)([s.Ay], () => s.Ay.getBadgeById(l.$.GIFTING)),
        A = !g && t,
        b = A && !f && C,
        h = A && f && null == m;
    return (i.useEffect(() => {
        h ? (0, o.Ay)(l.$.GIFTING) : b && (0, o.o0)(l.$.GIFTING);
    }, [b, h]),
    f)
        ? A && null != m && !m.hidden && (C || m.owned)
            ? "noCount"
            : null
        : A && C && null != m
          ? "count"
          : null;
}
(t(705440), t(792996));
