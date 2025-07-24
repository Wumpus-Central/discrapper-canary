n.d(t, { Z: () => h });
var i = n(255367),
    r = n(399606),
    s = n(607070),
    a = n(70097),
    l = n(526167),
    o = n(176754),
    c = n(151451),
    d = n(294242),
    u = n(323053),
    m = n(530347),
    p = n(334937);
let g = (e) => {
        let { supportHEVCAlpha: t, isMotionReduced: n, containerVisibilityPercentage: r } = e;
        return n
            ? (0, i.jsx)('div', {
                  className: d.flyingWumpusContainer,
                  children: (0, i.jsx)('img', {
                      src: p.Z,
                      alt: '',
                      className: d.flyingWumpusAsset
                  })
              })
            : (0, i.jsx)('div', {
                  className: d.flyingWumpusContainer,
                  children: (0, i.jsx)(o.ZP, {
                      scaleAnimationData: {
                          startScale: 0.9,
                          endScale: 1,
                          duration: o.SR
                      },
                      yAxisAnimationData: {
                          range: 20,
                          duration: o.b5,
                          path: o.js.SINE
                      },
                      parallaxAnimationData: {
                          pathDirection: o.eo.UP,
                          range: 200,
                          containerVisibilityPercentage: r,
                          changeOpacity: !1
                      },
                      animateXAxisWiggle: !0,
                      children: t
                          ? (0, i.jsx)('img', {
                                src: u.Z,
                                alt: '',
                                className: d.flyingWumpusAsset
                            })
                          : (0, i.jsx)(
                                a.Z,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: d.flyingWumpusAsset,
                                    children: (0, i.jsx)('source', { src: m.Z })
                                },
                                m.Z
                            )
                  })
              });
    },
    h = (e) => {
        let { containerVisibilityPercentage: t } = e,
            n = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
            a = (0, l.rO)();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g, {
                    supportHEVCAlpha: a,
                    isMotionReduced: n,
                    containerVisibilityPercentage: t
                }),
                (0, i.jsx)(c.Z, {
                    isMotionReduced: n,
                    containerVisibilityPercentage: t,
                    boltTrinketClassName: d.bolt,
                    carTrinketClassName: d.car,
                    hammerTrinketClassName: d.hammer,
                    keyTrinketClassName: d.key,
                    starTrinketClassName: d.star
                })
            ]
        });
    };
