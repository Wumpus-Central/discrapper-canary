s.d(t, { A: () => c });
var r = s(627968),
    a = s(607470),
    i = s(608416),
    n = s(48415),
    l = s(592151),
    o = s(844738);
let c = (e) => {
    let {
        supportHEVCAlpha: t,
        isMotionReduced: s,
        containerVisibilityPercentage: c,
        containerClassName: d,
        assetClassName: m,
    } = e;
    return s
        ? (0, r.jsx)("div", { className: d, children: (0, r.jsx)("img", { src: o.A, alt: "", className: m }) })
        : (0, r.jsx)("div", {
              className: d,
              children: (0, r.jsx)(i.Ay, {
                  scaleAnimationData: { startScale: 0.9, endScale: 1, duration: i.$G },
                  yAxisAnimationData: { range: 20, duration: i.Mp, path: i.aV.SINE },
                  parallaxAnimationData: {
                      pathDirection: i.MN.UP,
                      range: 200,
                      containerVisibilityPercentage: c,
                      changeOpacity: !1,
                  },
                  animateXAxisWiggle: !0,
                  children: t
                      ? (0, r.jsx)("img", { src: n.A, alt: "", className: m })
                      : (0, r.jsx)(
                            a.A,
                            {
                                muted: !0,
                                autoPlay: !0,
                                playsInline: !0,
                                loop: !0,
                                className: m,
                                children: (0, r.jsx)("source", { src: l.A }),
                            },
                            l.A,
                        ),
              }),
          });
};
