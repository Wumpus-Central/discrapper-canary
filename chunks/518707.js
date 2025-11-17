n.d(t, { Z: () => c });
var r = n(54381),
    i = n(70097),
    a = n(55373),
    o = n(323053),
    s = n(530347),
    l = n(334937);
let c = (e) => {
    let {
        supportHEVCAlpha: t,
        isMotionReduced: n,
        containerVisibilityPercentage: c,
        containerClassName: u,
        assetClassName: d,
    } = e;
    return n
        ? (0, r.jsx)("div", {
              className: u,
              children: (0, r.jsx)("img", {
                  src: l.Z,
                  alt: "",
                  className: d,
              }),
          })
        : (0, r.jsx)("div", {
              className: u,
              children: (0, r.jsx)(a.ZP, {
                  scaleAnimationData: {
                      startScale: 0.9,
                      endScale: 1,
                      duration: a.SR,
                  },
                  yAxisAnimationData: {
                      range: 20,
                      duration: a.b5,
                      path: a.js.SINE,
                  },
                  parallaxAnimationData: {
                      pathDirection: a.eo.UP,
                      range: 200,
                      containerVisibilityPercentage: c,
                      changeOpacity: !1,
                  },
                  animateXAxisWiggle: !0,
                  children: t
                      ? (0, r.jsx)("img", {
                            src: o.Z,
                            alt: "",
                            className: d,
                        })
                      : (0, r.jsx)(
                            i.Z,
                            {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                className: d,
                                children: (0, r.jsx)("source", { src: s.Z }),
                            },
                            s.Z,
                        ),
              }),
          });
};
