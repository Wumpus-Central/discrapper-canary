i.d(e, { Z: () => c }), i(47120);
var n = i(200651),
    r = i(192379),
    s = i(557533),
    l = i.n(s),
    a = i(349361),
    o = i(366481);
function c(t) {
    let { children: e, gradientClassName: i, ...s } = t,
        c = r.useRef(null),
        [d, _] = r.useState(!0),
        u = () => {
            var t;
            (null === (t = c.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? _(!1) : _(!0);
        };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(a.h2, {
                fade: !0,
                ...s,
                ref: (t) => {
                    null != t && ((c.current = t), u());
                },
                onScroll: u,
                children: e
            }),
            (0, n.jsx)('div', {
                className: l()(o.containerScrollGradient, i),
                'data-shown': d
            })
        ]
    });
}
