i.d(t, { A: () => c });
var a = i(627968),
    n = i(503698),
    s = i.n(n),
    r = i(652533),
    l = i(692979);
let c = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: i,
        boltContainerClassName: n,
        carContainerClassName: c,
        hammerContainerClassName: o,
        keyContainerClassName: d,
        starContainerClassName: u,
        boltAssetClassName: m,
        carAssetClassName: A,
        hammerAssetClassName: N,
        keyAssetClassName: g,
        starAssetClassName: p,
        animationSpeedScale: f = 1,
        blurScale: E = 1,
    } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != n &&
                (0, a.jsx)("div", {
                    className: s()(l.nJ, n),
                    children: (0, a.jsx)(r.Ay, {
                        blurAnimationData: { startBlurRadius: 10 * E, endBlurRadius: 0, duration: r.$G },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: r.$G },
                        yAxisAnimationData: { range: 15, duration: r.XN, path: r.aV.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: r.MN.UP,
                                      range: 125,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != c &&
                (0, a.jsx)("div", {
                    className: s()(l.IN, c),
                    children: (0, a.jsx)(r.Ay, {
                        yAxisAnimationData: { range: 15, duration: r.XN, path: r.aV.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: r.MN.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: A,
                            alt: "",
                        }),
                    }),
                }),
            null != o &&
                (0, a.jsx)("div", {
                    className: s()(l.Gj, o),
                    children: (0, a.jsx)(r.Ay, {
                        yAxisAnimationData: { range: 15, duration: r.XN, path: r.aV.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: r.MN.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: N,
                            alt: "",
                        }),
                    }),
                }),
            null != d &&
                (0, a.jsx)("div", {
                    className: s()(l.FV, d),
                    children: (0, a.jsx)(r.Ay, {
                        blurAnimationData: { startBlurRadius: 5 * E, endBlurRadius: 0, duration: r.Mp },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: r.Mp },
                        yAxisAnimationData: { range: 15, duration: r.XN, path: r.aV.SINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: r.MN.UP,
                                      range: 200,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
            null != u &&
                (0, a.jsx)("div", {
                    className: s()(l.E1, u),
                    children: (0, a.jsx)(r.Ay, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * E, duration: r.$G },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: r.$G },
                        yAxisAnimationData: { range: 20, duration: r.Mp, path: r.aV.COSINE },
                        parallaxAnimationData:
                            null != i
                                ? {
                                      pathDirection: r.MN.UP,
                                      range: 50,
                                      containerVisibilityPercentage: i,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: f,
                        children: (0, a.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: p,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
