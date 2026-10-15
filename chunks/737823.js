l.d(t, { Ay: () => x, T4: () => m, XQ: () => p, Z5: () => g, ns: () => h });
var i,
    s = l(477900),
    n = l(582128),
    a = l(503698),
    r = l.n(a),
    o = l(308941),
    c = l(661531),
    d = l(939249),
    u = l(381645);
function h(e) {
    let { scrollPosition: t } = e;
    return (0, s.jsx)(o.animated.div, { className: u.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
}
function m(e) {
    let { icon: t } = e;
    return (0, s.jsx)(t, { className: u.Kk, color: c.A.colors.TEXT_STRONG, size: "md" });
}
function p(e) {
    let { onClick: t, icon: l } = e;
    return (0, s.jsx)(d.D, {
        className: u.gb,
        onClick: t,
        children: (0, s.jsx)(l, { color: "currentColor", size: "sm" }),
    });
}
var g = (((i = {}).OVERLAY = "overlay"), (i.RELATIVE = "relative"), i);
function x(e) {
    let { className: t, variant: l, children: i } = e,
        a = n.useMemo(() => ("overlay" === l ? u.Lw : u.V8), [l]);
    return (0, s.jsx)("div", { className: r()(u.jr, a, t), children: i });
}
