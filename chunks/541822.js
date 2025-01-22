i.d(n, {
    Z: function () {
        return c;
    }
}),
    i(47120);
var e = i(200651),
    r = i(192379),
    a = i(557533),
    o = i.n(a),
    s = i(349361),
    l = i(366481);
function c(t) {
    let { children: n, gradientClassName: i, ...a } = t,
        c = r.useRef(null),
        [d, u] = r.useState(!0),
        p = () => {
            var t;
            (null === (t = c.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? u(!1) : u(!0);
        };
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(s.h2, {
                fade: !0,
                ...a,
                ref: (t) => {
                    null != t && ((c.current = t), p());
                },
                onScroll: p,
                children: n
            }),
            (0, e.jsx)('div', {
                className: o()(l.containerScrollGradient, i),
                'data-shown': d
            })
        ]
    });
}
