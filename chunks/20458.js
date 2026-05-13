n.d(t, { A: () => c });
var i = n(627968),
    l = n(503698),
    r = n.n(l),
    s = n(652533),
    a = n(692979);
let c = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: l,
        carContainerClassName: c,
        hammerContainerClassName: o,
        keyContainerClassName: d,
        starContainerClassName: u,
        boltAssetClassName: E,
        carAssetClassName: A,
        hammerAssetClassName: _,
        keyAssetClassName: T,
        starAssetClassName: I,
        animationSpeedScale: N = 1,
        blurScale: R = 1,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != l &&
                (0, i.jsx)("div", {
                    className: r()(a.nJ, l),
                    children: (0, i.jsx)(s.Ay, {
                        blurAnimationData: { startBlurRadius: 10 * R, endBlurRadius: 0, duration: s.$G },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: s.$G },
                        yAxisAnimationData: { range: 15, duration: s.XN, path: s.aV.COSINE },
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
                        animationSpeedScale: N,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: E,
                            alt: "",
                        }),
                    }),
                }),
            null != c &&
                (0, i.jsx)("div", {
                    className: r()(a.IN, c),
                    children: (0, i.jsx)(s.Ay, {
                        yAxisAnimationData: { range: 15, duration: s.XN, path: s.aV.COSINE },
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
                        animationSpeedScale: N,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: A,
                            alt: "",
                        }),
                    }),
                }),
            null != o &&
                (0, i.jsx)("div", {
                    className: r()(a.Gj, o),
                    children: (0, i.jsx)(s.Ay, {
                        yAxisAnimationData: { range: 15, duration: s.XN, path: s.aV.SINE },
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
                        animationSpeedScale: N,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: _,
                            alt: "",
                        }),
                    }),
                }),
            null != d &&
                (0, i.jsx)("div", {
                    className: r()(a.FV, d),
                    children: (0, i.jsx)(s.Ay, {
                        blurAnimationData: { startBlurRadius: 5 * R, endBlurRadius: 0, duration: s.Mp },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: s.Mp },
                        yAxisAnimationData: { range: 15, duration: s.XN, path: s.aV.SINE },
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
                        animationSpeedScale: N,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: T,
                            alt: "",
                        }),
                    }),
                }),
            null != u &&
                (0, i.jsx)("div", {
                    className: r()(a.E1, u),
                    children: (0, i.jsx)(s.Ay, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * R, duration: s.$G },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: s.$G },
                        yAxisAnimationData: { range: 20, duration: s.Mp, path: s.aV.COSINE },
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
                        animationSpeedScale: N,
                        children: (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: I,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
