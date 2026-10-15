n.d(e, { A: () => g });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(308941),
    a = n(17928),
    d = n(866323),
    u = n(252392),
    o = n(775602),
    c = n(679492),
    A = n(518477),
    f = n(105292),
    m = n(988199);
let g = (t) => {
    let { className: e } = t,
        { interactionTypeSent: n, showInteractionToast: l } = (0, c.Pq)(),
        g = n === A.AQ.REPLY ? f.intl.string(f.t.BPaiaa) : f.intl.string(f.t.Ry2EtG),
        E = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion),
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
    return (0, i.jsx)(i.Fragment, {
        children: h(
            (t, l) =>
                l &&
                (0, i.jsx)(r.animated.div, {
                    className: s()(m.J, e),
                    style: t,
                    children:
                        null != n
                            ? (0, i.jsx)(u.y, { text: g, variant: "success" })
                            : (0, i.jsx)(u.y, { text: f.intl.string(f.t.tcARX0) }),
                }),
        ),
    });
};
