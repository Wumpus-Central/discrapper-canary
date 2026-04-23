n.d(t, { A: () => a });
var l = n(627968),
    r = n(64700),
    i = n(106778),
    s = n(851110);
let a = function (e) {
    let { confettiTarget: t, confettiCanvas: n, confettiVelocityMultiplier: a, sprites: o, colors: u } = e,
        [d, c] = r.useState(null),
        C = (0, i.f9)(n, d),
        [p, m] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = Array(10).fill(0);
            return (
                null != t &&
                    C.isReady &&
                    !p &&
                    (e = e.map((n, l) =>
                        setTimeout(() => {
                            var n, r;
                            l === e.length - 1 && m(!0),
                                C.createMultipleConfetti(
                                    ((n = t.getBoundingClientRect()),
                                    (r = (r = a) ?? 1),
                                    {
                                        ...s.Mw,
                                        position: {
                                            type: "static-random",
                                            minValue: { x: n.x, y: n.y },
                                            maxValue: { x: n.x + n.width, y: n.y + n.height / 2 },
                                        },
                                        velocity: {
                                            type: "static-random",
                                            minValue: { x: -100 * r, y: -50 * r },
                                            maxValue: { x: 100 * r, y: -300 * r },
                                        },
                                        dragCoefficient: { type: "static", value: 0.166 },
                                    }),
                                    50,
                                );
                        }, 100 * l),
                    )),
                () => {
                    for (let t of e) clearTimeout(t);
                }
            );
        }, [C, t, p, a]),
        (0, l.jsx)(i.K_, { ref: c, sprites: o ?? s.uI, colors: u ?? s._t, spriteWidth: s.wn, spriteHeight: s.wn })
    );
};
