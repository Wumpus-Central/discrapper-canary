n.d(t, { Z: () => l });
var r = n(951288),
    i = n(55373),
    a = n(314042),
    o = n(320067),
    s = n(476921);
let l = (e) => {
    let { isMotionReduced: t, containerVisibilityPercentage: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: a.hammerContainer,
                children: (0, r.jsx)(i.ZP, {
                    yAxisAnimationData: {
                        range: 15,
                        duration: i.vi,
                        path: i.js.SINE,
                    },
                    parallaxAnimationData:
                        null != n
                            ? {
                                  pathDirection: i.eo.DOWN,
                                  range: 120,
                                  containerVisibilityPercentage: n,
                                  changeOpacity: !0,
                              }
                            : void 0,
                    animateXAxisWiggle: !0,
                    isMotionReduced: t,
                    children: (0, r.jsx)("img", {
                        src: o.Z,
                        className: a.hammerTrinket,
                        alt: "",
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: a.keyContainer,
                children: (0, r.jsx)(i.ZP, {
                    blurAnimationData: {
                        startBlurRadius: 5,
                        endBlurRadius: 0,
                        duration: i.b5,
                    },
                    scaleAnimationData: {
                        startScale: 0.85,
                        endScale: 1,
                        duration: i.b5,
                    },
                    yAxisAnimationData: {
                        range: 15,
                        duration: i.vi,
                        path: i.js.SINE,
                    },
                    parallaxAnimationData:
                        null != n
                            ? {
                                  pathDirection: i.eo.UP,
                                  range: 200,
                                  containerVisibilityPercentage: n,
                                  changeOpacity: !0,
                              }
                            : void 0,
                    animateXAxisWiggle: !0,
                    isMotionReduced: t,
                    children: (0, r.jsx)("img", {
                        src: s.Z,
                        className: a.keyTrinket,
                        alt: "",
                    }),
                }),
            }),
        ],
    });
};
