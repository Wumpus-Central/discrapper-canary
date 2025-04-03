n.d(t, {
    Cm: () => m,
    ZP: () => g,
    _6: () => h,
    aV: () => p,
    z6: () => u
});
var r,
    a = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(642128),
    c = n(481060),
    d = n(794916);
function u(e) {
    let { scrollPosition: t } = e;
    return (0, a.jsx)(s.animated.div, {
        className: d.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1])
        }
    });
}
function p(e) {
    let { icon: t } = e;
    return (0, a.jsx)(t, {
        className: d.icon,
        color: c.TVs.colors.HEADER_PRIMARY,
        size: 'md'
    });
}
function m(e) {
    let { onClick: t, icon: n } = e;
    return (0, a.jsx)(c.P3F, {
        className: d.iconButton,
        onClick: t,
        children: (0, a.jsx)(n, {
            color: 'currentColor',
            size: 'sm'
        })
    });
}
var h = (((r = {}).OVERLAY = 'overlay'), (r.RELATIVE = 'relative'), r);
function g(e) {
    let { className: t, variant: n, children: r } = e,
        l = i.useMemo(() => ('overlay' === n ? d.overlay : d.relative), [n]);
    return (0, a.jsx)('div', {
        className: o()(d.headerBar, l, t),
        children: r
    });
}
