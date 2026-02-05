a.d(t, { Ay: () => _, T4: () => h, XQ: () => m, Z5: () => p, ns: () => u });
var n,
    i = a(627968),
    s = a(64700),
    l = a(503698),
    r = a.n(l),
    o = a(92674),
    c = a(397927),
    d = a(982339);
function u(e) {
    let { scrollPosition: t } = e;
    return (0, i.jsx)(o.animated.div, { className: d.tB, style: { opacity: t?.to([0, 100], [0, 1]) } });
}
function h(e) {
    let { icon: t } = e;
    return (0, i.jsx)(t, { className: d.Kk, color: c.LU0.colors.TEXT_STRONG, size: "md" });
}
function m(e) {
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
        l = s.useMemo(() => ("overlay" === a ? d.Lw : d.V8), [a]);
    return (0, i.jsx)("div", { className: r()(d.jr, l, t), children: n });
}
