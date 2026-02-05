n.d(t, { A: () => c });
var i = n(627968),
    s = n(607470),
    r = n(608416),
    a = n(48415),
    l = n(592151),
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
              children: (0, i.jsx)(r.Ay, {
                  scaleAnimationData: { startScale: 0.9, endScale: 1, duration: r.$G },
                  yAxisAnimationData: { range: 20, duration: r.Mp, path: r.aV.SINE },
                  parallaxAnimationData: {
                      pathDirection: r.MN.UP,
                      range: 200,
                      containerVisibilityPercentage: c,
                      changeOpacity: !1,
                  },
                  animateXAxisWiggle: !0,
                  children: t
                      ? (0, i.jsx)("img", { src: a.A, alt: "", className: u })
                      : (0, i.jsx)(
                            s.A,
                            {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                className: u,
                                children: (0, i.jsx)("source", { src: l.A }),
                            },
                            l.A,
                        ),
              }),
          });
};
