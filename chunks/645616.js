n.d(t, { Z: () => h });
var r = n(951288),
    i = n(399606),
    a = n(607070),
    o = n(70097),
    s = n(526167),
    l = n(176754),
    c = n(151451),
    u = n(115596),
    d = n(323053),
    f = n(530347),
    _ = n(334937);
let p = (e) => {
        let { supportHEVCAlpha: t, isMotionReduced: n, containerVisibilityPercentage: i } = e;
        return n
            ? (0, r.jsx)("div", {
                  className: u.flyingWumpusContainer,
                  children: (0, r.jsx)("img", {
                      src: _.Z,
                      alt: "",
                      className: u.flyingWumpusAsset,
                  }),
              })
            : (0, r.jsx)("div", {
                  className: u.flyingWumpusContainer,
                  children: (0, r.jsx)(l.ZP, {
                      scaleAnimationData: {
                          startScale: 0.9,
                          endScale: 1,
                          duration: l.SR,
                      },
                      yAxisAnimationData: {
                          range: 20,
                          duration: l.b5,
                          path: l.js.SINE,
                      },
                      parallaxAnimationData: {
                          pathDirection: l.eo.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      children: t
                          ? (0, r.jsx)("img", {
                                src: d.Z,
                                alt: "",
                                className: u.flyingWumpusAsset,
                            })
                          : (0, r.jsx)(
                                o.Z,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: u.flyingWumpusAsset,
                                    children: (0, r.jsx)("source", { src: f.Z }),
                                },
                                f.Z,
                            ),
                  }),
              });
    },
    h = (e) => {
        let { containerVisibilityPercentage: t } = e,
            n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
            o = (0, s.rO)();
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p, {
                    supportHEVCAlpha: o,
                    isMotionReduced: n,
                    containerVisibilityPercentage: t,
                }),
                (0, r.jsx)(c.Z, {
                    isMotionReduced: n,
                    containerVisibilityPercentage: t,
                    boltTrinketClassName: u.bolt,
                    carTrinketClassName: u.car,
                    hammerTrinketClassName: u.hammer,
                    keyTrinketClassName: u.key,
                    starTrinketClassName: u.star,
                }),
            ],
        });
    };
