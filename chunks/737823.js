n.d(t, {
    Ay: () => b,
    T4: () => p,
    XQ: () => h,
    Z5: () => m,
    ns: () => u,
});
var l,
    a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(432022),
    o = n(397927),
    d = n(982339);
function u(e) {
    let { scrollPosition: t } = e;
    return (0, a.jsx)(c.animated.div, {
        className: d.tB,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1]),
        },
    });
}
function p(e) {
    let { icon: t } = e;
    return (0, a.jsx)(t, {
        className: d.Kk,
        color: o.LU0.colors.TEXT_STRONG,
        size: "md",
    });
}
function h(e) {
    let { onClick: t, icon: n } = e;
    return (0, a.jsx)(o.DUT, {
        className: d.gb,
        onClick: t,
        children: (0, a.jsx)(n, {
            color: "currentColor",
            size: "sm",
        }),
    });
}
var m = (((l = {}).OVERLAY = "overlay"), (l.RELATIVE = "relative"), l);
function b(e) {
    let { className: t, variant: n, children: l } = e,
        i = r.useMemo(() => ("overlay" === n ? d.Lw : d.V8), [n]);
    return (0, a.jsx)("div", {
        className: s()(d.jr, i, t),
        children: l,
    });
}
