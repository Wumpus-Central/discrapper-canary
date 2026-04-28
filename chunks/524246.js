i.d(e, { A: () => u });
var a = i(627968),
    l = i(64700),
    r = i(106778),
    s = i(851110);
let u = function (t) {
    let { confettiTarget: e, confettiCanvas: i, confettiVelocityMultiplier: u, sprites: n, colors: o } = t,
        [c, p] = l.useState(null),
        d = (0, r.f9)(i, c),
        [y, f] = l.useState(!1);
    return (
        l.useEffect(() => {
            let t = Array(10).fill(0);
            return (
                null != e &&
                    d.isReady &&
                    !y &&
                    (t = t.map((i, a) =>
                        setTimeout(() => {
                            var i, l;
                            a === t.length - 1 && f(!0),
                                d.createMultipleConfetti(
                                    ((i = e.getBoundingClientRect()),
                                    (l = (l = u) ?? 1),
                                    {
                                        ...s.Mw,
                                        position: {
                                            type: "static-random",
                                            minValue: { x: i.x, y: i.y },
                                            maxValue: { x: i.x + i.width, y: i.y + i.height / 2 },
                                        },
                                        velocity: {
                                            type: "static-random",
                                            minValue: { x: -100 * l, y: -50 * l },
                                            maxValue: { x: 100 * l, y: -300 * l },
                                        },
                                        dragCoefficient: { type: "static", value: 0.166 },
                                    }),
                                    50,
                                );
                        }, 100 * a),
                    )),
                () => {
                    for (let e of t) clearTimeout(e);
                }
            );
        }, [d, e, y, u]),
        (0, a.jsx)(r.K_, { ref: p, sprites: n ?? s.uI, colors: o ?? s._t, spriteWidth: s.wn, spriteHeight: s.wn })
    );
};
