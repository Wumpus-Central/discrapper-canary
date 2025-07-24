n.d(t, { Z: () => p });
var i = n(255367),
    r = n(120356),
    s = n.n(r),
    a = n(176754),
    l = n(851345),
    o = n(307248),
    c = n(389351),
    d = n(320067),
    u = n(476921),
    m = n(266768);
let p = (e) => {
    let { isMotionReduced: t, containerVisibilityPercentage: n, boltTrinketClassName: r, carTrinketClassName: p, hammerTrinketClassName: g, keyTrinketClassName: h, starTrinketClassName: f } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: s()(l.boltContainer, r),
                children: (0, i.jsx)(a.ZP, {
                    blurAnimationData: {
                        startBlurRadius: 10,
                        endBlurRadius: 0,
                        duration: a.SR
                    },
                    scaleAnimationData: {
                        startScale: 0.85,
                        endScale: 1,
                        duration: a.SR
                    },
                    yAxisAnimationData: {
                        range: 15,
                        duration: a.vi,
                        path: a.js.COSINE
                    },
                    parallaxAnimationData:
                        null != n
                            ? {
                                  pathDirection: a.eo.UP,
                                  range: 125,
                                  containerVisibilityPercentage: n,
                                  changeOpacity: !0
                              }
                            : void 0,
                    animateXAxisWiggle: !0,
                    isMotionReduced: t,
                    children: (0, i.jsx)('img', {
                        src: o.Z,
                        className: l.boltTrinket,
                        alt: ''
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: s()(l.carContainer, p),
                children: (0, i.jsx)(a.ZP, {
                    yAxisAnimationData: {
                        range: 15,
                        duration: a.vi,
                        path: a.js.COSINE
                    },
                    parallaxAnimationData:
                        null != n
                            ? {
                                  pathDirection: a.eo.DOWN,
                                  range: 50,
                                  containerVisibilityPercentage: n,
                                  changeOpacity: !0
                              }
                            : void 0,
                    animateXAxisWiggle: !0,
                    isMotionReduced: t,
                    children: (0, i.jsx)('img', {
                        src: c.Z,
                        className: l.carTrinket,
                        alt: ''
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: s()(l.hammerContainer, g),
                children: (0, i.jsx)(a.ZP, {
                    yAxisAnimationData: {
                        range: 15,
                        duration: a.vi,
                        path: a.js.SINE
                    },
                    parallaxAnimationData:
                        null != n
                            ? {
                                  pathDirection: a.eo.DOWN,
                                  range: 120,
                                  containerVisibilityPercentage: n,
                                  changeOpacity: !0
                              }
                            : void 0,
                    animateXAxisWiggle: !0,
                    isMotionReduced: t,
                    children: (0, i.jsx)('img', {
                        src: d.Z,
                        className: l.hammerTrinket,
                        alt: ''
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: s()(l.keyContainer, h),
                children: (0, i.jsx)(a.ZP, {
                    blurAnimationData: {
                        startBlurRadius: 5,
                        endBlurRadius: 0,
                        duration: a.b5
                    },
                    scaleAnimationData: {
                        startScale: 0.85,
                        endScale: 1,
                        duration: a.b5
                    },
                    yAxisAnimationData: {
                        range: 15,
                        duration: a.vi,
                        path: a.js.SINE
                    },
                    parallaxAnimationData:
                        null != n
                            ? {
                                  pathDirection: a.eo.UP,
                                  range: 200,
                                  containerVisibilityPercentage: n,
                                  changeOpacity: !0
                              }
                            : void 0,
                    animateXAxisWiggle: !0,
                    isMotionReduced: t,
                    children: (0, i.jsx)('img', {
                        src: u.Z,
                        className: l.keyTrinket,
                        alt: ''
                    })
                })
            }),
            (0, i.jsx)('div', {
                className: s()(l.starContainer, f),
                children: (0, i.jsx)(a.ZP, {
                    blurAnimationData: {
                        startBlurRadius: 0,
                        endBlurRadius: 2,
                        duration: a.SR
                    },
                    scaleAnimationData: {
                        startScale: 1,
                        endScale: 0.85,
                        duration: a.SR
                    },
                    yAxisAnimationData: {
                        range: 20,
                        duration: a.b5,
                        path: a.js.COSINE
                    },
                    parallaxAnimationData:
                        null != n
                            ? {
                                  pathDirection: a.eo.UP,
                                  range: 50,
                                  containerVisibilityPercentage: n,
                                  changeOpacity: !0
                              }
                            : void 0,
                    animateXAxisWiggle: !0,
                    isMotionReduced: t,
                    children: (0, i.jsx)('img', {
                        src: m.Z,
                        className: l.starTrinket,
                        alt: ''
                    })
                })
            })
        ]
    });
};
