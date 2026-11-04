var a = i(477900),
    r = i(582128),
    s = i(776310),
    u = i(77183);
i.d(
    e,
    {},
    {
        A: function (t) {
            let { confettiTarget: e, confettiCanvas: i, confettiVelocityMultiplier: l, sprites: n, colors: o } = t,
                [c, p] = r.useState(null),
                d = (0, s.f9)(i, c),
                [y, f] = r.useState(!1);
            return (
                r.useEffect(() => {
                    let t = Array(10).fill(0);
                    return (
                        null != e &&
                            d.isReady &&
                            !y &&
                            (t = t.map((i, a) =>
                                setTimeout(() => {
                                    var i, r;
                                    (a === t.length - 1 && f(!0),
                                        d.createMultipleConfetti(
                                            ((i = e.getBoundingClientRect()),
                                            (r = (r = l) ?? 1),
                                            {
                                                ...u.Mw,
                                                position: {
                                                    type: "static-random",
                                                    minValue: { x: i.x, y: i.y },
                                                    maxValue: { x: i.x + i.width, y: i.y + i.height / 2 },
                                                },
                                                velocity: {
                                                    type: "static-random",
                                                    minValue: { x: -100 * r, y: -50 * r },
                                                    maxValue: { x: 100 * r, y: -300 * r },
                                                },
                                                dragCoefficient: { type: "static", value: 0.166 },
                                            }),
                                            50,
                                        ));
                                }, 100 * a),
                            )),
                        () => {
                            for (let e of t) clearTimeout(e);
                        }
                    );
                }, [d, e, y, l]),
                (0, a.jsx)(s.K_, { ref: p, sprites: n ?? u.uI, colors: o ?? u._t, spriteWidth: 28, spriteHeight: 28 })
            );
        },
    },
);
