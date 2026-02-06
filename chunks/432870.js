n.d(t, { A: () => c });
var i = n(627968),
    s = n(607470),
    a = n(608416),
    l = n(48415),
    r = n(592151),
    o = n(844738);
let c = (e) => {
    let {
        supportHEVCAlpha: t,
        isMotionReduced: n,
        containerVisibilityPercentage: c,
        containerClassName: d,
        assetClassName: u,
    } = e;
    return n
        ? (0, i.jsx)("div", { className: d, children: (0, i.jsx)("img", { src: o.A, alt: "", className: u }) })
        : (0, i.jsx)("div", {
              className: d,
              children: (0, i.jsx)(a.Ay, {
                  scaleAnimationData: { startScale: 0.9, endScale: 1, duration: a.$G },
                  yAxisAnimationData: { range: 20, duration: a.Mp, path: a.aV.SINE },
                  parallaxAnimationData: {
                      pathDirection: a.MN.UP,
                      range: 200,
                      containerVisibilityPercentage: c,
                      changeOpacity: !1,
                  },
                  animateXAxisWiggle: !0,
                  children: t
                      ? (0, i.jsx)("img", { src: l.A, alt: "", className: u })
                      : (0, i.jsx)(
                            s.A,
                            {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                className: u,
                                children: (0, i.jsx)("source", { src: r.A }),
                            },
                            r.A,
                        ),
              }),
          });
};
