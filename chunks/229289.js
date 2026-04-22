n.d(t, { A: () => d });
var r = n(627968),
    a = n(417597),
    i = n(775602),
    s = n(608416),
    l = n(307973),
    c = n(21588),
    o = n(180894);
let d = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, a.bG)([i.A], () => i.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: c.BI,
                children: (0, r.jsx)(s.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: s.$G },
                    yAxisAnimationData: { range: 20, duration: s.Mp, path: s.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: s.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, r.jsx)("img", { src: o.A, alt: "", className: c.Q }),
                }),
            }),
            (0, r.jsx)(l.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: c.Gj,
                keyContainerClassName: c.FV,
                starContainerClassName: c.E1,
                hammerAssetClassName: c.Wv,
                keyAssetClassName: c.rs,
                starAssetClassName: c.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
