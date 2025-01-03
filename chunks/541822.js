l.d(e, {
    Z: function () {
        return c;
    }
}),
    l(47120);
var t = l(200651),
    i = l(192379),
    o = l(557533),
    r = l.n(o),
    s = l(349361),
    a = l(366481);
function c(n) {
    let { children: e, gradientClassName: l, ...o } = n,
        c = i.useRef(null),
        [d, u] = i.useState(!0),
        m = () => {
            var n;
            (null === (n = c.current) || void 0 === n ? void 0 : n.isScrolledToBottom()) === !0 ? u(!1) : u(!0);
        };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(s.h2, {
                fade: !0,
                ...o,
                ref: (n) => {
                    null != n && ((c.current = n), m());
                },
                onScroll: m,
                children: e
            }),
            (0, t.jsx)('div', {
                className: r()(a.containerScrollGradient, l),
                'data-shown': d
            })
        ]
    });
}
