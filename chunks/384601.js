"use strict";
n.d(t, { A: () => l });
var i = n(627968),
    r = n(503698),
    s = n.n(r),
    a = n(608416),
    o = n(738472);
let l = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: r,
        carContainerClassName: l,
        hammerContainerClassName: u,
        keyContainerClassName: c,
        starContainerClassName: d,
        boltAssetClassName: _,
        carAssetClassName: f,
        hammerAssetClassName: h,
        keyAssetClassName: p,
        starAssetClassName: E,
        animationSpeedScale: m = 1,
        blurScale: g = 1,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != r &&
                (0, i.jsx)("div", {
                    className: s()(o.nJ, r),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 10 * g, endBlurRadius: 0, duration: a.$G },
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
                        animationSpeedScale: m,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: _,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, i.jsx)("div", {
                    className: s()(o.IN, l),
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
                        animationSpeedScale: m,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: f,
                            alt: "",
                        }),
                    }),
                }),
            null != u &&
                (0, i.jsx)("div", {
                    className: s()(o.Gj, u),
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
                        animationSpeedScale: m,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: h,
                            alt: "",
                        }),
                    }),
                }),
            null != c &&
                (0, i.jsx)("div", {
                    className: s()(o.FV, c),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 5 * g, endBlurRadius: 0, duration: a.Mp },
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
                        animationSpeedScale: m,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: p,
                            alt: "",
                        }),
                    }),
                }),
            null != d &&
                (0, i.jsx)("div", {
                    className: s()(o.E1, d),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * g, duration: a.$G },
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
                        animationSpeedScale: m,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: E,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
