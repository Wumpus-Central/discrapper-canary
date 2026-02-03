n.d(t, {
    Ay: () => g,
    T4: () => p,
    XQ: () => h,
    Z5: () => m,
    ns: () => u,
});
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(92674),
    c = n(397927),
    d = n(982339);

function u(e) {
    let { scrollPosition: t } = e;
    return (0, l.jsx)(o.animated.div, {
        className: d.tB,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1]),
        },
    });
}

function p(e) {
    let { icon: t } = e;
    return (0, l.jsx)(t, {
        className: d.Kk,
        color: c.LU0.colors.TEXT_STRONG,
        size: "md",
    });
}

function h(e) {
    let { onClick: t, icon: n } = e;
    return (0, l.jsx)(c.DUT, {
        className: d.gb,
        onClick: t,
        children: (0, l.jsx)(n, {
            color: "currentColor",
            size: "sm",
        }),
    });
}
var m = (((r = {}).OVERLAY = "overlay"), (r.RELATIVE = "relative"), r);

function g(e) {
    let { className: t, variant: n, children: r } = e,
        a = i.useMemo(() => ("overlay" === n ? d.Lw : d.V8), [n]);
    return (0, l.jsx)("div", {
        className: s()(d.jr, a, t),
        children: r,
    });
}
