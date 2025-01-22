r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(119617);
let l = [r(123353)],
    u = ['#FFFFFF'],
    c = 6,
    d = 1000 / 60,
    f = {
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
function p(e) {
    let { className: n, firing: r = !0, wind: i = 2, sprites: p = l, spriteColors: h = u, confettiConfig: _ } = e,
        [m, g] = o.useState(null),
        [E, v] = o.useState(null),
        y = (0, s.uR)(E, m),
        b = o.useMemo(() => new s.qA({ wind: i }), [i]),
        I = o.useCallback(() => {
            let e = null == E ? void 0 : E.getCanvas();
            if (null == e) return;
            let n = e.getBoundingClientRect();
            y.createConfetti({
                ...f,
                ..._,
                position: {
                    type: 'static-random',
                    minValue: {
                        x: -n.width / 2,
                        y: -c
                    },
                    maxValue: {
                        x: n.width,
                        y: -c
                    }
                }
            });
        }, [y, E, _]);
    return (
        o.useEffect(() => {
            let e = r ? setInterval(I, d) : null;
            return () => clearInterval(e);
        }, [r, I]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(s.O_, {
                    ref: v,
                    className: n,
                    environment: b
                }),
                (0, a.jsx)(s.Ji, {
                    ref: g,
                    colors: h,
                    sprites: p,
                    spriteWidth: c,
                    spriteHeight: c
                })
            ]
        })
    );
}
