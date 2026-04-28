l.d(t, { Ay: () => x, T4: () => m, XQ: () => p, Z5: () => g, ns: () => h });
var s,
    i = l(627968),
    a = l(64700),
    n = l(503698),
    r = l.n(n),
    o = l(123924),
    c = l(661531),
    d = l(939249),
    u = l(295890);
function h(e) {
    let { scrollPosition: t } = e;
    return (0, i.jsx)(o.animated.div, { className: u.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
}
function m(e) {
    let { icon: t } = e;
    return (0, i.jsx)(t, { className: u.Kk, color: c.A.colors.TEXT_STRONG, size: "md" });
}
function p(e) {
    let { onClick: t, icon: l } = e;
    return (0, i.jsx)(d.D, {
        className: u.gb,
        onClick: t,
        children: (0, i.jsx)(l, { color: "currentColor", size: "sm" }),
    });
}
var g = (((s = {}).OVERLAY = "overlay"), (s.RELATIVE = "relative"), s);
function x(e) {
    let { className: t, variant: l, children: s } = e,
        n = a.useMemo(() => ("overlay" === l ? u.Lw : u.V8), [l]);
    return (0, i.jsx)("div", { className: r()(u.jr, n, t), children: s });
}
