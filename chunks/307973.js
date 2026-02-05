n.d(t, { A: () => m });
var i = n(627968),
    s = n(503698),
    r = n.n(s),
    a = n(608416),
    l = n(285637),
    o = n(194225),
    c = n(104400),
    d = n(737968),
    u = n(275869),
    _ = n(979250);
let m = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: s,
        carContainerClassName: m,
        hammerContainerClassName: A,
        keyContainerClassName: g,
        starContainerClassName: E,
        boltAssetClassName: h,
        carAssetClassName: p,
        hammerAssetClassName: C,
        keyAssetClassName: x,
        starAssetClassName: T,
        animationSpeedScale: I = 1,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != s &&
                (0, i.jsx)("div", {
                    className: r()(l.nJ, s),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 10, endBlurRadius: 0, duration: a.$G },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: a.$G },
                        yAxisAnimationData: { range: 15, duration: a.XN, path: a.aV.COSINE },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: a.MN.UP,
                                      range: 125,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: I,
                        children: (0, i.jsx)("img", { src: o.A, className: h, alt: "" }),
                    }),
                }),
            null != m &&
                (0, i.jsx)("div", {
                    className: r()(l.IN, m),
                    children: (0, i.jsx)(a.Ay, {
                        yAxisAnimationData: { range: 15, duration: a.XN, path: a.aV.COSINE },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: a.MN.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: I,
                        children: (0, i.jsx)("img", { src: c.A, className: p, alt: "" }),
                    }),
                }),
            null != A &&
                (0, i.jsx)("div", {
                    className: r()(l.Gj, A),
                    children: (0, i.jsx)(a.Ay, {
                        yAxisAnimationData: { range: 15, duration: a.XN, path: a.aV.SINE },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: a.MN.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: I,
                        children: (0, i.jsx)("img", { src: d.A, className: C, alt: "" }),
                    }),
                }),
            null != g &&
                (0, i.jsx)("div", {
                    className: r()(l.FV, g),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 5, endBlurRadius: 0, duration: a.Mp },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: a.Mp },
                        yAxisAnimationData: { range: 15, duration: a.XN, path: a.aV.SINE },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: a.MN.UP,
                                      range: 200,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: I,
                        children: (0, i.jsx)("img", { src: u.A, className: x, alt: "" }),
                    }),
                }),
            null != E &&
                (0, i.jsx)("div", {
                    className: r()(l.E1, E),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2, duration: a.$G },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: a.$G },
                        yAxisAnimationData: { range: 20, duration: a.Mp, path: a.aV.COSINE },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: a.MN.UP,
                                      range: 50,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: I,
                        children: (0, i.jsx)("img", { src: _.A, className: T, alt: "" }),
                    }),
                }),
        ],
    });
};
