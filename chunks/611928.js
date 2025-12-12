n.d(t, {
    Cm: () => m,
    ZP: () => f,
    _6: () => h,
    aV: () => p,
    z6: () => u,
});
var a,
    r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(467721),
    c = n(481060),
    d = n(748650);
function u(e) {
    let { scrollPosition: t } = e;
    return (0, r.jsx)(o.animated.div, {
        className: d.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1]),
        },
    });
}
function p(e) {
    let { icon: t } = e;
    return (0, r.jsx)(t, {
        className: d.icon,
        color: c.TVs.colors.TEXT_STRONG,
        size: "md",
    });
}
function m(e) {
    let { onClick: t, icon: n } = e;
    return (0, r.jsx)(c.P3F, {
        className: d.iconButton,
        onClick: t,
        children: (0, r.jsx)(n, {
            color: "currentColor",
            size: "sm",
        }),
    });
}
var h = (((a = {}).OVERLAY = "overlay"), (a.RELATIVE = "relative"), a);
function f(e) {
    let { className: t, variant: n, children: a } = e,
        l = i.useMemo(() => ("overlay" === n ? d.overlay : d.relative), [n]);
    return (0, r.jsx)("div", {
        className: s()(d.headerBar, l, t),
        children: a,
    });
}
