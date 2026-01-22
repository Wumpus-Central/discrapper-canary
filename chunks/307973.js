n.d(t, { A: () => p });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(608416),
    o = n(285637),
    l = n(194225),
    c = n(104400),
    u = n(737968),
    d = n(275869),
    f = n(979250);
let p = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: i,
        carContainerClassName: p,
        hammerContainerClassName: _,
        keyContainerClassName: h,
        starContainerClassName: m,
        boltAssetClassName: g,
        carAssetClassName: E,
        hammerAssetClassName: b,
        keyAssetClassName: y,
        starAssetClassName: O,
        animationSpeedScale: A = 1,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != i &&
                (0, r.jsx)("div", {
                    className: a()(o.nJ, i),
                    children: (0, r.jsx)(s.Ay, {
                        blurAnimationData: {
                            startBlurRadius: 10,
                            endBlurRadius: 0,
                            duration: s.$G,
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: s.$G,
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: s.XN,
                            path: s.aV.COSINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: s.MN.UP,
                                      range: 125,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: A,
                        children: (0, r.jsx)("img", {
                            src: l.A,
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
            null != p &&
                (0, r.jsx)("div", {
                    className: a()(o.IN, p),
                    children: (0, r.jsx)(s.Ay, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: s.XN,
                            path: s.aV.COSINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: s.MN.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: A,
                        children: (0, r.jsx)("img", {
                            src: c.A,
                            className: E,
                            alt: "",
                        }),
                    }),
                }),
            null != _ &&
                (0, r.jsx)("div", {
                    className: a()(o.Gj, _),
                    children: (0, r.jsx)(s.Ay, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: s.XN,
                            path: s.aV.SINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: s.MN.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: A,
                        children: (0, r.jsx)("img", {
                            src: u.A,
                            className: b,
                            alt: "",
                        }),
                    }),
                }),
            null != h &&
                (0, r.jsx)("div", {
                    className: a()(o.FV, h),
                    children: (0, r.jsx)(s.Ay, {
                        blurAnimationData: {
                            startBlurRadius: 5,
                            endBlurRadius: 0,
                            duration: s.Mp,
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: s.Mp,
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: s.XN,
                            path: s.aV.SINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: s.MN.UP,
                                      range: 200,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: A,
                        children: (0, r.jsx)("img", {
                            src: d.A,
                            className: y,
                            alt: "",
                        }),
                    }),
                }),
            null != m &&
                (0, r.jsx)("div", {
                    className: a()(o.E1, m),
                    children: (0, r.jsx)(s.Ay, {
                        blurAnimationData: {
                            startBlurRadius: 0,
                            endBlurRadius: 2,
                            duration: s.$G,
                        },
                        scaleAnimationData: {
                            startScale: 1,
                            endScale: 0.85,
                            duration: s.$G,
                        },
                        yAxisAnimationData: {
                            range: 20,
                            duration: s.Mp,
                            path: s.aV.COSINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: s.MN.UP,
                                      range: 50,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: A,
                        children: (0, r.jsx)("img", {
                            src: f.A,
                            className: O,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
