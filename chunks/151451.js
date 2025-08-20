n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    o = n(176754),
    s = n(715404),
    l = n(307248),
    c = n(389351),
    u = n(320067),
    d = n(476921),
    f = n(266768);
let _ = (e) => {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: n,
        boltTrinketClassName: i,
        carTrinketClassName: _,
        hammerTrinketClassName: p,
        keyTrinketClassName: h,
        starTrinketClassName: m,
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
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
                    children: (0, r.jsx)("img", {
                        src: l.Z,
                        className: s.boltTrinket,
                        alt: "",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(s.carContainer, _),
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
                    children: (0, r.jsx)("img", {
                        src: c.Z,
                        className: s.carTrinket,
                        alt: "",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(s.hammerContainer, p),
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
                    children: (0, r.jsx)("img", {
                        src: u.Z,
                        className: s.hammerTrinket,
                        alt: "",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(s.keyContainer, h),
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
                    children: (0, r.jsx)("img", {
                        src: d.Z,
                        className: s.keyTrinket,
                        alt: "",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: a()(s.starContainer, m),
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
                    children: (0, r.jsx)("img", {
                        src: f.Z,
                        className: s.starTrinket,
                        alt: "",
                    }),
                }),
            }),
        ],
    });
};
