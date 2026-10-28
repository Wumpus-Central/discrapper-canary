n.d(t, { A: () => d });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(399513),
    o = n(568329),
    u = n(241762),
    c = n(506500);
let d = function (e) {
    let { children: t, header: n, layoutVariant: s } = e,
        { collapsedHeight: d, isExpanded: m } = (0, u.H)(),
        { expansionSpring: p } = r.useContext(o.PW);
    return (0, l.jsxs)(i.animated.div, {
        "aria-hidden": !m,
        className: a()(c.R, { [c.w]: "inset" === s }),
        style: {
            transform: (0, i.to)(
                [p.to({ range: [0, 1], output: [0, -100] }), p.to({ range: [0, 1], output: [0, d] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [n, (0, l.jsx)(i.animated.div, { style: { opacity: 1 }, children: t })],
    });
};
