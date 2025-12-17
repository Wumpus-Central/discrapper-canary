n.d(t, { Z: () => u });
var r = n(54381),
    i = n(399606),
    a = n(607070),
    o = n(55373),
    s = n(761006),
    l = n(640560),
    c = n(319515);
let u = () => {
    let e = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l.jumpingWumpusContainer,
                children: (0, r.jsx)(o.ZP, {
                    scaleAnimationData: {
                        startScale: 0.9,
                        endScale: 1,
                        duration: o.SR,
                    },
                    yAxisAnimationData: {
                        range: 20,
                        duration: o.b5,
                        path: o.js.SINE,
                    },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, r.jsx)("img", {
                        src: c.Z,
                        alt: "",
                        className: l.jumpingWumpus,
                    }),
                }),
            }),
            (0, r.jsx)(s.Z, {
                isMotionReduced: e,
                boltContainerClassName: l.boltContainer,
                carContainerClassName: l.carContainer,
                hammerContainerClassName: l.hammerContainer,
                keyContainerClassName: l.keyContainer,
                starContainerClassName: l.starContainer,
                boltAssetClassName: l.boltTrinket,
                carAssetClassName: l.carTrinket,
                hammerAssetClassName: l.hammerTrinket,
                keyAssetClassName: l.keyTrinket,
                starAssetClassName: l.starTrinket,
            }),
        ],
    });
};
