n.d(t, {
    Cm: function () {
        return h;
    },
    ZP: function () {
        return g;
    },
    _6: function () {
        return a;
    },
    aV: function () {
        return p;
    },
    z6: function () {
        return m;
    }
});
var i,
    a,
    r = n(200651),
    l = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(642128),
    d = n(481060),
    u = n(406014);
function m(e) {
    let { scrollPosition: t } = e;
    return (0, r.jsx)(c.animated.div, {
        className: u.backdrop,
        style: {
            opacity: null == t ? void 0 : t.to([0, 100], [0, 1])
        }
    });
}
function p(e) {
    let { icon: t } = e;
    return (0, r.jsx)(t, {
        className: u.icon,
        color: d.tokens.colors.HEADER_PRIMARY,
        size: 'md'
    });
}
function h(e) {
    let { onClick: t, icon: n } = e;
    return (0, r.jsx)(d.Clickable, {
        className: u.iconButton,
        onClick: t,
        children: (0, r.jsx)(n, {
            color: 'currentColor',
            size: 'sm'
        })
    });
}
((i = a || (a = {})).OVERLAY = 'overlay'), (i.RELATIVE = 'relative');
function g(e) {
    let { className: t, variant: n, children: i } = e,
        a = l.useMemo(
            () =>
                (function (e) {
                    if ('overlay' === e) return u.overlay;
                    return u.relative;
                })(n),
            [n]
        );
    return (0, r.jsx)('div', {
        className: s()(u.headerBar, a, t),
        children: i
    });
}
