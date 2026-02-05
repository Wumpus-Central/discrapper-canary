"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(851110);
let o = 50,
    l = 10,
    u = 100;
function c(e, t) {
    return (
        (t = t ?? 1),
        {
            ...s.Mw,
            position: {
                type: "static-random",
                minValue: { x: e.x, y: e.y },
                maxValue: { x: e.x + e.width, y: e.y + e.height / 2 },
            },
            velocity: {
                type: "static-random",
                minValue: { x: -100 * t, y: -50 * t },
                maxValue: { x: 100 * t, y: -300 * t },
            },
            dragCoefficient: { type: "static", value: 0.166 },
        }
    );
}
let d = function (e) {
    let { confettiTarget: t, confettiCanvas: n, confettiVelocityMultiplier: d, sprites: _, colors: f } = e,
        [p, h] = i.useState(null),
        m = (0, a.f9)(n, p),
        [g, E] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = Array(l).fill(0);
            return (
                null != t &&
                    m.isReady &&
                    !g &&
                    (e = e.map((n, r) =>
                        setTimeout(() => {
                            r === e.length - 1 && E(!0), m.createMultipleConfetti(c(t.getBoundingClientRect(), d), o);
                        }, r * u),
                    )),
                () => {
                    for (let t of e) clearTimeout(t);
                }
            );
        }, [m, t, g, d]),
        (0, r.jsx)(a.K_, { ref: h, sprites: _ ?? s.uI, colors: f ?? s._t, spriteWidth: s.wn, spriteHeight: s.wn })
    );
};
