n.d(t, { A: () => d });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    s = n(399513),
    i = n(568329),
    u = n(241762),
    c = n(506500);
let d = function (e) {
    let { children: t, header: n, layoutVariant: a } = e,
        { collapsedHeight: d, isExpanded: p } = (0, u.H)(),
        { expansionSpring: m } = r.useContext(i.PW);
    return (0, l.jsxs)(s.animated.div, {
        "aria-hidden": !p,
        className: o()(c.R, { [c.w]: "inset" === a }),
        style: {
            transform: (0, s.to)(
                [m.to({ range: [0, 1], output: [0, -100] }), m.to({ range: [0, 1], output: [0, d] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [n, (0, l.jsx)(s.animated.div, { style: { opacity: 1 }, children: t })],
    });
};
