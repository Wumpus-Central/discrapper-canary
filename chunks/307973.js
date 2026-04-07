n.d(t, { A: () => g });
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    a = n(608416),
    r = n(676440),
    o = n(194225),
    d = n(104400),
    c = n(737968),
    u = n(275869),
    m = n(979250);
let g = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: s,
        carContainerClassName: g,
        hammerContainerClassName: _,
        keyContainerClassName: x,
        starContainerClassName: A,
        boltAssetClassName: h,
        carAssetClassName: p,
        hammerAssetClassName: T,
        keyAssetClassName: f,
        starAssetClassName: S,
        animationSpeedScale: b = 1,
        blurScale: E = 1,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != s &&
                (0, i.jsx)("div", {
                    className: l()(r.nJ, s),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 10 * E, endBlurRadius: 0, duration: a.$G },
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
                        animationSpeedScale: b,
                        children: (0, i.jsx)("img", { src: o.A, className: h, alt: "" }),
                    }),
                }),
            null != g &&
                (0, i.jsx)("div", {
                    className: l()(r.IN, g),
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
                        animationSpeedScale: b,
                        children: (0, i.jsx)("img", { src: d.A, className: p, alt: "" }),
                    }),
                }),
            null != _ &&
                (0, i.jsx)("div", {
                    className: l()(r.Gj, _),
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
                        animationSpeedScale: b,
                        children: (0, i.jsx)("img", { src: c.A, className: T, alt: "" }),
                    }),
                }),
            null != x &&
                (0, i.jsx)("div", {
                    className: l()(r.FV, x),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 5 * E, endBlurRadius: 0, duration: a.Mp },
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
                        animationSpeedScale: b,
                        children: (0, i.jsx)("img", { src: u.A, className: f, alt: "" }),
                    }),
                }),
            null != A &&
                (0, i.jsx)("div", {
                    className: l()(r.E1, A),
                    children: (0, i.jsx)(a.Ay, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * E, duration: a.$G },
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
                        animationSpeedScale: b,
                        children: (0, i.jsx)("img", { src: m.A, className: S, alt: "" }),
                    }),
                }),
        ],
    });
};
