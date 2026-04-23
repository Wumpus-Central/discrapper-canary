n.d(t, { A: () => m });
var r = n(627968),
    a = n(503698),
    i = n.n(a),
    s = n(608416),
    l = n(738472),
    c = n(194225),
    o = n(104400),
    d = n(737968),
    u = n(275869),
    _ = n(979250);
let m = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltContainerClassName: a,
        carContainerClassName: m,
        hammerContainerClassName: p,
        keyContainerClassName: f,
        starContainerClassName: A,
        boltAssetClassName: g,
        carAssetClassName: h,
        hammerAssetClassName: b,
        keyAssetClassName: x,
        starAssetClassName: C,
        animationSpeedScale: v = 1,
        blurScale: R = 1,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != a &&
                (0, r.jsx)("div", {
                    className: i()(l.nJ, a),
                    children: (0, r.jsx)(s.Ay, {
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
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", { src: c.A, className: g, alt: "" }),
                    }),
                }),
            null != m &&
                (0, r.jsx)("div", {
                    className: i()(l.IN, m),
                    children: (0, r.jsx)(s.Ay, {
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
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", { src: o.A, className: h, alt: "" }),
                    }),
                }),
            null != p &&
                (0, r.jsx)("div", {
                    className: i()(l.Gj, p),
                    children: (0, r.jsx)(s.Ay, {
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
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", { src: d.A, className: b, alt: "" }),
                    }),
                }),
            null != f &&
                (0, r.jsx)("div", {
                    className: i()(l.FV, f),
                    children: (0, r.jsx)(s.Ay, {
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
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", { src: u.A, className: x, alt: "" }),
                    }),
                }),
            null != A &&
                (0, r.jsx)("div", {
                    className: i()(l.E1, A),
                    children: (0, r.jsx)(s.Ay, {
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
                        animationSpeedScale: v,
                        children: (0, r.jsx)("img", { src: _.A, className: C, alt: "" }),
                    }),
                }),
        ],
    });
};
