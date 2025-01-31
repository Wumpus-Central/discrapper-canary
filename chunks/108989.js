n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(119617);
let s = [n(123353)],
    o = ['#FFFFFF'],
    l = 6,
    u = 1000 / 60,
    c = {
        velocity: {
            type: 'static-random',
            minValue: {
                x: 0,
                y: 1
            },
            maxValue: {
                x: 3,
                y: 3
            }
        },
        rotation: {
            type: 'linear-random',
            minValue: {
                x: 0,
                y: 0,
                z: 0
            },
            maxValue: {
                x: 0,
                y: 0,
                z: 360
            },
            minAddValue: {
                x: 0,
                y: 0,
                z: -5
            },
            maxAddValue: {
                x: 0,
                y: 0,
                z: 5
            }
        },
        size: {
            type: 'static-random',
            minValue: 2,
            maxValue: 6
        },
        dragCoefficient: {
            type: 'static',
            value: 830
        },
        opacity: {
            type: 'static',
            value: 0.3
        }
    };
function d(e) {
    let { className: t, firing: n = !0, wind: d = 2, sprites: f = s, spriteColors: _ = o, confettiConfig: p } = e,
        [h, m] = r.useState(null),
        [g, E] = r.useState(null),
        v = (0, a.uR)(g, h),
        y = r.useMemo(() => new a.qA({ wind: d }), [d]),
        I = r.useCallback(() => {
            let e = null == g ? void 0 : g.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            v.createConfetti({
                ...c,
                ...p,
                position: {
                    type: 'static-random',
                    minValue: {
                        x: -t.width / 2,
                        y: -l
                    },
                    maxValue: {
                        x: t.width,
                        y: -l
                    }
                }
            });
        }, [v, g, p]);
    return (
        r.useEffect(() => {
            let e = n ? setInterval(I, u) : null;
            return () => clearInterval(e);
        }, [n, I]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.O_, {
                    ref: E,
                    className: t,
                    environment: y
                }),
                (0, i.jsx)(a.Ji, {
                    ref: m,
                    colors: _,
                    sprites: f,
                    spriteWidth: l,
                    spriteHeight: l
                })
            ]
        })
    );
}
