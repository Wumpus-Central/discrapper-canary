var l = n(477900),
    s = n(582128),
    a = n(503698),
    i = n.n(a),
    r = n(156150),
    o = n(568329),
    u = n(241762),
    c = n(506500);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { children: t, header: n, layoutVariant: a } = e,
                { collapsedHeight: d, isExpanded: p } = (0, u.H)(),
                { expansionSpring: m } = s.useContext(o.PW);
            return (0, l.jsxs)(r.animated.div, {
                "aria-hidden": !p,
                className: i()(c.R, { [c.w]: "inset" === a }),
                style: {
                    transform: (0, r.to)(
                        [m.to({ range: [0, 1], output: [0, -100] }), m.to({ range: [0, 1], output: [0, d] })],
                        (e, t) => `translateY(calc(${e}% + ${t}px))`,
                    ),
                },
                children: [n, (0, l.jsx)(r.animated.div, { style: { opacity: 1 }, children: t })],
            });
        },
    },
);
