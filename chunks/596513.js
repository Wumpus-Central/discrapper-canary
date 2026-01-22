n.d(t, {
    A: () => c,
});
var r = n(627968),
    i = n(607470),
    a = n(608416),
    s = n(48415),
    o = n(592151),
    l = n(844738);
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
                  src: l.A,
                  alt: "",
                  className: d,
              }),
          })
        : (0, r.jsx)("div", {
              className: u,
              children: (0, r.jsx)(a.Ay, {
                  scaleAnimationData: {
                      startScale: 0.9,
                      endScale: 1,
                      duration: a.$G,
                  },
                  yAxisAnimationData: {
                      range: 20,
                      duration: a.Mp,
                      path: a.aV.SINE,
                  },
                  parallaxAnimationData: {
                      pathDirection: a.MN.UP,
                      range: 200,
                      containerVisibilityPercentage: c,
                      changeOpacity: !1,
                  },
                  animateXAxisWiggle: !0,
                  children: t
                      ? (0, r.jsx)("img", {
                            src: s.A,
                            alt: "",
                            className: d,
                        })
                      : (0, r.jsx)(
                            i.A,
                            {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                className: d,
                                children: (0, r.jsx)("source", {
                                    src: o.A,
                                }),
                            },
                            o.A,
                        ),
              }),
          });
};
