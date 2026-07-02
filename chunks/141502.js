n.d(t, { A: () => l });
var i = n(627968),
    a = n(607470),
    s = n(652533);
let r =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    l = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: n,
            containerVisibilityPercentage: l,
            containerClassName: c,
            assetClassName: o,
            animationSpeedScale: d = 1,
        } = e;
        return n
            ? (0, i.jsx)("div", {
                  className: c,
                  children: (0, i.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: o,
                  }),
              })
            : (0, i.jsx)("div", {
                  className: c,
                  children: (0, i.jsx)(s.Ay, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: s.$G },
                      yAxisAnimationData: { range: 20, duration: s.Mp, path: s.aV.SINE },
                      parallaxAnimationData: {
                          pathDirection: s.MN.UP,
                          range: 200,
                          containerVisibilityPercentage: l,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: d,
                      children: t
                          ? (0, i.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: o,
                            })
                          : (0, i.jsx)(
                                a.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: o,
                                    children: (0, i.jsx)("source", { src: r }),
                                },
                                r,
                            ),
                  }),
              });
    };
