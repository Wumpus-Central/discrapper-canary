e.d(n, {
    Z: function () {
        return c;
    }
}),
    e(47120);
var i = e(200651),
    r = e(192379),
    a = e(557533),
    s = e.n(a),
    o = e(349361),
    l = e(366481);
function c(t) {
    let { children: n, gradientClassName: e, ...a } = t,
        c = r.useRef(null),
        [d, u] = r.useState(!0),
        p = () => {
            var t;
            (null === (t = c.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? u(!1) : u(!0);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.h2, {
                fade: !0,
                ...a,
                ref: (t) => {
                    null != t && ((c.current = t), p());
                },
                onScroll: p,
                children: n
            }),
            (0, i.jsx)('div', {
                className: s()(l.containerScrollGradient, e),
                'data-shown': d
            })
        ]
    });
}
