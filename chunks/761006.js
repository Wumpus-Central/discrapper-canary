n.d(t, { Z: () => p });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(55373),
    s = n(148218),
    l = n(679475),
    c = n(898972),
    u = n(888523),
    d = n(726677),
    f = n(557179);
let p = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: i,
        carContainerClassName: p,
        hammerContainerClassName: _,
        keyContainerClassName: m,
        starContainerClassName: h,
        boltAssetClassName: g,
        carAssetClassName: E,
        hammerAssetClassName: b,
        keyAssetClassName: y,
        starAssetClassName: O,
        animationSpeedScale: v = 1,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != i &&
                (0, r.jsx)("div", {
                    className: a()(s.boltContainer, i),
                    children: (0, r.jsx)(o.ZP, {
                        blurAnimationData: {
                            startBlurRadius: 10,
                            endBlurRadius: 0,
                            duration: o.SR,
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: o.SR,
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: o.vi,
                            path: o.js.COSINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: o.eo.UP,
                                      range: 125,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", {
                            src: l.Z,
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
            null != p &&
                (0, r.jsx)("div", {
                    className: a()(s.carContainer, p),
                    children: (0, r.jsx)(o.ZP, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: o.vi,
                            path: o.js.COSINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: o.eo.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", {
                            src: c.Z,
                            className: E,
                            alt: "",
                        }),
                    }),
                }),
            null != _ &&
                (0, r.jsx)("div", {
                    className: a()(s.hammerContainer, _),
                    children: (0, r.jsx)(o.ZP, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: o.vi,
                            path: o.js.SINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: o.eo.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", {
                            src: u.Z,
                            className: b,
                            alt: "",
                        }),
                    }),
                }),
            null != m &&
                (0, r.jsx)("div", {
                    className: a()(s.keyContainer, m),
                    children: (0, r.jsx)(o.ZP, {
                        blurAnimationData: {
                            startBlurRadius: 5,
                            endBlurRadius: 0,
                            duration: o.b5,
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: o.b5,
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: o.vi,
                            path: o.js.SINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: o.eo.UP,
                                      range: 200,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", {
                            src: d.Z,
                            className: y,
                            alt: "",
                        }),
                    }),
                }),
            null != h &&
                (0, r.jsx)("div", {
                    className: a()(s.starContainer, h),
                    children: (0, r.jsx)(o.ZP, {
                        blurAnimationData: {
                            startBlurRadius: 0,
                            endBlurRadius: 2,
                            duration: o.SR,
                        },
                        scaleAnimationData: {
                            startScale: 1,
                            endScale: 0.85,
                            duration: o.SR,
                        },
                        yAxisAnimationData: {
                            range: 20,
                            duration: o.b5,
                            path: o.js.COSINE,
                        },
                        parallaxAnimationData:
                            null != n
                                ? {
                                      pathDirection: o.eo.UP,
                                      range: 50,
                                      containerVisibilityPercentage: n,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", {
                            src: f.Z,
                            className: O,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
