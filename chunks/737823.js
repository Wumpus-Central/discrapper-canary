a.d(t, { Ay: () => _, T4: () => m, XQ: () => h, Z5: () => p, ns: () => u });
var n,
    i = a(627968),
    l = a(64700),
    s = a(503698),
    r = a.n(s),
    o = a(4208),
    c = a(397927),
    d = a(12162);
function u(e) {
    let { scrollPosition: t } = e;
    return (0, i.jsx)(o.animated.div, { className: d.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
}
function m(e) {
    let { icon: t } = e;
    return (0, i.jsx)(t, { className: d.Kk, color: c.LU0.colors.TEXT_STRONG, size: "md" });
}
function h(e) {
    let { onClick: t, icon: a } = e;
    return (0, i.jsx)(c.DUT, {
        className: d.gb,
        onClick: t,
        children: (0, i.jsx)(a, { color: "currentColor", size: "sm" }),
    });
}
var p = (((n = {}).OVERLAY = "overlay"), (n.RELATIVE = "relative"), n);
function _(e) {
    let { className: t, variant: a, children: n } = e,
        s = l.useMemo(() => ("overlay" === a ? d.Lw : d.V8), [a]);
    return (0, i.jsx)("div", { className: r()(d.jr, s, t), children: n });
}
