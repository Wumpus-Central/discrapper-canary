n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(417597),
    a = n(775602),
    s = n(608416),
    o = n(307973),
    l = n(660595),
    c = n(180894);
let u = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
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
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: s.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, r.jsx)("img", {
                        src: c.A,
                        alt: "",
                        className: l.Q,
                    }),
                }),
            }),
            (0, r.jsx)(o.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: l.Gj,
                keyContainerClassName: l.FV,
                starContainerClassName: l.E1,
                hammerAssetClassName: l.Wv,
                keyAssetClassName: l.rs,
                starAssetClassName: l.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
