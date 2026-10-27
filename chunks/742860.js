n.d(t, { A: () => d });
var l = n(477900),
    r = n(582128),
    u = n(503698),
    a = n.n(u),
    o = n(399513),
    i = n(568329),
    s = n(241762),
    c = n(506500);
let d = function (e) {
    let { children: t, header: n, layoutVariant: u } = e,
        { collapsedHeight: d, isExpanded: p } = (0, s.H)(),
        { expansionSpring: f } = r.useContext(i.PW);
    return (0, l.jsxs)(o.animated.div, {
        "aria-hidden": !p,
        className: a()(c.R, { [c.w]: "inset" === u }),
        style: {
            transform: (0, o.to)(
                [f.to({ range: [0, 1], output: [0, -100] }), f.to({ range: [0, 1], output: [0, d] })],
                (e, t) => `translateY(calc(${e}% + ${t}px))`,
            ),
        },
        children: [n, (0, l.jsx)(o.animated.div, { style: { opacity: 1 }, children: t })],
    });
};
