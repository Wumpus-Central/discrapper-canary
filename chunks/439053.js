var n = i(477900);
i(582128);
var l = i(503698),
    s = i.n(l),
    r = i(120692),
    a = i(855986),
    d = i(866323),
    o = i(994484),
    u = i(775602),
    c = i(679492),
    A = i(518477),
    m = i(792996),
    f = i(988199);
i.d(
    e,
    {},
    {
        A: (t) => {
            let { className: e } = t,
                { interactionTypeSent: i, showInteractionToast: l } = (0, c.Pq)(),
                g = i === A.AQ.REPLY ? m.intl.string(m.t.BPaiaa) : m.intl.string(m.t.Ry2EtG),
                h = (0, a.bG)([u.Ay], () => u.Ay.useReducedMotion),
                I = (0, d.p)(
                    l,
                    {
                        from: { transform: h ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                        enter: { transform: "translateY(0)", opacity: 1 },
                        leave: { transform: h ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                        config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                        delay: 200,
                    },
                    "animate-always",
                );
            return (0, n.jsx)(n.Fragment, {
                children: I(
                    (t, l) =>
                        l &&
                        (0, n.jsx)(r.animated.div, {
                            className: s()(f.J, e),
                            style: t,
                            children:
                                null != i
                                    ? (0, n.jsx)(o.y, { text: g, variant: "success" })
                                    : (0, n.jsx)(o.y, { text: m.intl.string(m.t.tcARX0) }),
                        }),
                ),
            });
        },
    },
);
