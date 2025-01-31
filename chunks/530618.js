n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(119617),
    s = n(675654);
let o = 50,
    l = 10,
    u = 100;
function c(e, t) {
    return (
        (t = null != t ? t : 1),
        {
            ...s.We,
            position: {
                type: 'static-random',
                minValue: {
                    x: e.x,
                    y: e.y
                },
                maxValue: {
                    x: e.x + e.width,
                    y: e.y + e.height / 2
                }
            },
            velocity: {
                type: 'static-random',
                minValue: {
                    x: -100 * t,
                    y: -50 * t
                },
                maxValue: {
                    x: 100 * t,
                    y: -300 * t
                }
            },
            dragCoefficient: {
                type: 'static',
                value: 0.166
            }
        }
    );
}
let d = function (e) {
    let { confettiTarget: t, confettiCanvas: n, confettiVelocityMultiplier: d, sprites: f, colors: _ } = e,
        [p, h] = r.useState(null),
        m = (0, a.uR)(n, p),
        [g, E] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = Array(l).fill(0);
            return (
                null != t &&
                    m.isReady &&
                    !g &&
                    (e = e.map((n, i) =>
                        setTimeout(() => {
                            i === e.length - 1 && E(!0), m.createMultipleConfetti(c(t.getBoundingClientRect(), d), o);
                        }, i * u)
                    )),
                () => {
                    for (let t of e) clearTimeout(t);
                }
            );
        }, [m, t, g, d]),
        (0, i.jsx)(a.Ji, {
            ref: h,
            sprites: null != f ? f : s.CA,
            colors: null != _ ? _ : s.Br,
            spriteWidth: s.Ko,
            spriteHeight: s.Ko
        })
    );
};
