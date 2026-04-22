"use strict";
r.d(t, { A: () => s });
var a = r(627968),
    i = r(64700),
    n = r(106778),
    l = r(851110);
let s = function (e) {
    let { confettiTarget: t, confettiCanvas: r, confettiVelocityMultiplier: s, sprites: o, colors: c } = e,
        [d, u] = i.useState(null),
        _ = (0, n.f9)(r, d),
        [p, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = Array(10).fill(0);
            return (
                null != t &&
                    _.isReady &&
                    !p &&
                    (e = e.map((r, a) =>
                        setTimeout(() => {
                            var r, i;
                            a === e.length - 1 && h(!0),
                                _.createMultipleConfetti(
                                    ((r = t.getBoundingClientRect()),
                                    (i = (i = s) ?? 1),
                                    {
                                        ...l.Mw,
                                        position: {
                                            type: "static-random",
                                            minValue: { x: r.x, y: r.y },
                                            maxValue: { x: r.x + r.width, y: r.y + r.height / 2 },
                                        },
                                        velocity: {
                                            type: "static-random",
                                            minValue: { x: -100 * i, y: -50 * i },
                                            maxValue: { x: 100 * i, y: -300 * i },
                                        },
                                        dragCoefficient: { type: "static", value: 0.166 },
                                    }),
                                    50,
                                );
                        }, 100 * a),
                    )),
                () => {
                    for (let t of e) clearTimeout(t);
                }
            );
        }, [_, t, p, s]),
        (0, a.jsx)(n.K_, { ref: u, sprites: o ?? l.uI, colors: c ?? l._t, spriteWidth: l.wn, spriteHeight: l.wn })
    );
};
