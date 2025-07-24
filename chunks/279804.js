n.d(t, { Z: () => d });
var i = n(255367),
    r = n(399606),
    s = n(607070),
    a = n(176754),
    l = n(151451),
    o = n(874773),
    c = n(798500);
let d = () => {
    let e = (0, r.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: o.jumpingWumpusContainer,
                children: (0, i.jsx)(a.ZP, {
                    scaleAnimationData: {
                        startScale: 0.9,
                        endScale: 1,
                        duration: a.SR
                    },
                    yAxisAnimationData: {
                        range: 20,
                        duration: a.b5,
                        path: a.js.SINE
                    },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, i.jsx)('img', {
                        src: c.Z,
                        alt: '',
                        className: o.jumpingWumpus
                    })
                })
            }),
            (0, i.jsx)(l.Z, {
                isMotionReduced: e,
                boltTrinketClassName: o.bolt,
                carTrinketClassName: o.car,
                hammerTrinketClassName: o.hammer,
                keyTrinketClassName: o.key,
                starTrinketClassName: o.star
            })
        ]
    });
};
