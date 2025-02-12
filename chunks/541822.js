n.d(e, { Z: () => c }), n(47120);
var i = n(200651),
    s = n(192379),
    t = n(557533),
    r = n.n(t),
    a = n(349361),
    o = n(372337);
function c(l) {
    let { children: e, gradientClassName: n, ...t } = l,
        c = s.useRef(null),
        [d, u] = s.useState(!0),
        x = () => {
            var l;
            (null === (l = c.current) || void 0 === l ? void 0 : l.isScrolledToBottom()) === !0 ? u(!1) : u(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.h2, {
                fade: !0,
                ...t,
                ref: (l) => {
                    null != l && ((c.current = l), x());
                },
                onScroll: x,
                children: e
            }),
            (0, i.jsx)('div', {
                className: r()(o.containerScrollGradient, n),
                'data-shown': d
            })
        ]
    });
}
