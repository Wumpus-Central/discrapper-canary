n.d(t, {
    Cm: () => h,
    ZP: () => g,
    _6: () => p,
    aV: () => m,
    z6: () => u
});
var i,
    a = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(642128),
    c = n(481060),
    d = n(834480);
function u(e) {
    let { scrollPosition: t } = e;
    return (0, a.jsx)(o.animated.div, {
        className: d.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1])
        }
    });
}
function m(e) {
    let { icon: t } = e;
    return (0, a.jsx)(t, {
        className: d.icon,
        color: c.TVs.colors.HEADER_PRIMARY,
        size: 'md'
    });
}
function h(e) {
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
var p = (((i = {}).OVERLAY = 'overlay'), (i.RELATIVE = 'relative'), i);
function g(e) {
    let { className: t, variant: n, children: i } = e,
        l = r.useMemo(() => ('overlay' === n ? d.overlay : d.relative), [n]);
    return (0, a.jsx)('div', {
        className: s()(d.headerBar, l, t),
        children: i
    });
}
