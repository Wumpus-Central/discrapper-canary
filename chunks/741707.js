n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(417597),
    a = n(775602),
    s = n(608416),
    o = n(307973),
    l = n(235607),
    c = n(180894);
let u = () => {
    let e = (0, i.bG)([a.A], () => a.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l.BI,
                children: (0, r.jsx)(s.Ay, {
                    scaleAnimationData: {
                        startScale: 0.9,
                        endScale: 1,
                        duration: s.$G,
                    },
                    yAxisAnimationData: {
                        range: 20,
                        duration: s.Mp,
                        path: s.aV.SINE,
                    },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, r.jsx)("img", {
                        src: c.A,
                        alt: "",
                        className: l.Q,
                    }),
                }),
            }),
            (0, r.jsx)(o.A, {
                isMotionReduced: e,
                boltContainerClassName: l.nJ,
                carContainerClassName: l.IN,
                hammerContainerClassName: l.Gj,
                keyContainerClassName: l.FV,
                starContainerClassName: l.E1,
                boltAssetClassName: l.j7,
                carAssetClassName: l.or,
                hammerAssetClassName: l.Wv,
                keyAssetClassName: l.rs,
                starAssetClassName: l.OY,
            }),
        ],
    });
};
