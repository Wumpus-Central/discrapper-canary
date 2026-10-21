i.d(e, { A: () => g });
var n = i(477900);
i(582128);
var l = i(503698),
    s = i.n(l),
    r = i(941143),
    a = i(17928),
    d = i(866323),
    o = i(252392),
    u = i(775602),
    c = i(679492),
    A = i(518477),
    f = i(105292),
    m = i(988199);
let g = (t) => {
    let { className: e } = t,
        { interactionTypeSent: i, showInteractionToast: l } = (0, c.Pq)(),
        g = i === A.AQ.REPLY ? f.intl.string(f.t.BPaiaa) : f.intl.string(f.t.Ry2EtG),
        E = (0, a.bG)([u.Ay], () => u.Ay.useReducedMotion),
        h = (0, d.p)(
            l,
            {
                from: { transform: E ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                enter: { transform: "translateY(0)", opacity: 1 },
                leave: { transform: E ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                delay: 200,
            },
            "animate-always",
        );
    return (0, n.jsx)(n.Fragment, {
        children: h(
            (t, l) =>
                l &&
                (0, n.jsx)(r.animated.div, {
                    className: s()(m.J, e),
                    style: t,
                    children:
                        null != i
                            ? (0, n.jsx)(o.y, { text: g, variant: "success" })
                            : (0, n.jsx)(o.y, { text: f.intl.string(f.t.tcARX0) }),
                }),
        ),
    });
};
