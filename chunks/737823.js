a.d(t, { Ay: () => g, T4: () => m, XQ: () => p, Z5: () => _, ns: () => h });
var n,
    l = a(627968),
    i = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(517738),
    c = a(827734),
    d = a(939249),
    u = a(295890);
function h(e) {
    let { scrollPosition: t } = e;
    return (0, l.jsx)(o.animated.div, { className: u.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
}
function m(e) {
    let { icon: t } = e;
    return (0, l.jsx)(t, { className: u.Kk, color: c.A.colors.TEXT_STRONG, size: "md" });
}
function p(e) {
    let { onClick: t, icon: a } = e;
    return (0, l.jsx)(d.D, {
        className: u.gb,
        onClick: t,
        children: (0, l.jsx)(a, { color: "currentColor", size: "sm" }),
    });
}
var _ = (((n = {}).OVERLAY = "overlay"), (n.RELATIVE = "relative"), n);
function g(e) {
    let { className: t, variant: a, children: n } = e,
        s = i.useMemo(() => ("overlay" === a ? u.Lw : u.V8), [a]);
    return (0, l.jsx)("div", { className: r()(u.jr, s, t), children: n });
}
