t.d(n, {
    Cm: function () {
        return _;
    },
    ZP: function () {
        return g;
    },
    _6: function () {
        return i;
    },
    aV: function () {
        return p;
    },
    z6: function () {
        return m;
    }
});
var a,
    i,
    r = t(200651),
    l = t(192379),
    o = t(120356),
    s = t.n(o),
    c = t(666912),
    d = t(481060),
    u = t(406014);
function m(e) {
    let { scrollPosition: n } = e;
    return (0, r.jsx)(c.animated.div, {
        className: u.backdrop,
        style: {
            opacity: null == n ? void 0 : n.to([0, 100], [0, 1])
        }
    });
}
function p(e) {
    let { icon: n } = e;
    return (0, r.jsx)(n, {
        className: u.icon,
        color: d.tokens.colors.HEADER_PRIMARY,
        size: 'md'
    });
}
function _(e) {
    let { onClick: n, icon: t } = e;
    return (0, r.jsx)(d.Clickable, {
        className: u.iconButton,
        onClick: n,
        children: (0, r.jsx)(t, {
            color: 'currentColor',
            size: 'sm'
        })
    });
}
((a = i || (i = {})).OVERLAY = 'overlay'), (a.RELATIVE = 'relative');
function g(e) {
    let { className: n, variant: t, children: a } = e,
        i = l.useMemo(
            () =>
                (function (e) {
                    if ('overlay' === e) return u.overlay;
                    return u.relative;
                })(t),
            [t]
        );
    return (0, r.jsx)('div', {
        className: s()(u.headerBar, i, n),
        children: a
    });
}
