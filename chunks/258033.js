(n.d(t, { Z: () => v }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(108542),
    a = n(399606),
    l = n(481060),
    o = n(745735),
    c = n(607070),
    d = n(70097),
    u = n(526167),
    m = n(702013),
    p = n(307248),
    g = n(389351),
    h = n(320067),
    f = n(476921),
    b = n(266768),
    x = n(323053),
    _ = n(530347),
    j = n(334937);
let E = (e) => {
        var t, n;
        let { blurAnimationData: a, scaleAnimationData: c, yAxisAnimationData: d, animateXAxisWiggle: u = !1, isMotionReduced: m = !1, children: p } = e,
            g = (0, l.q_F)(
                null != d
                    ? {
                          from: { y: 0 },
                          to: { y: 1 },
                          config: { duration: d.duration },
                          loop: !0
                      }
                    : { y: 0 }
            ),
            h = (null == d ? void 0 : d.path) === 'sine' ? Math.sin : Math.cos,
            [f, b] = (0, r.useState)(1),
            x = (0, l.q_F)(
                null != c
                    ? {
                          from: { scale: f > 0 ? c.startScale : c.endScale },
                          to: { scale: f > 0 ? c.endScale : c.startScale },
                          config: { duration: c.duration },
                          onRest: () => b((e) => -1 * e)
                      }
                    : { scale: 1 }
            ),
            [_, j] = (0, r.useState)(1),
            E = (0, l.q_F)(
                null != a
                    ? {
                          from: { blur: _ > 0 ? a.startBlurRadius : a.endBlurRadius },
                          to: { blur: _ > 0 ? a.endBlurRadius : a.startBlurRadius },
                          config: { duration: a.duration },
                          onRest: () => j((e) => -1 * e)
                      }
                    : { blur: 0 }
            ),
            [O, C] = (0, r.useState)(0),
            v = (0, l.q_F)({
                xOffset: O,
                config: {
                    tension: 500,
                    friction: 20
                }
            });
        return ((0, o.Z)(() => {
            C((Math.random() - 0.5) * 4);
        }, 250),
        m)
            ? p
            : (0, i.jsx)(s.animated.div, {
                  style: {
                      transform:
                          null == (t = g.y)
                              ? void 0
                              : t.to((e) => {
                                    if (null == d) return 'translateY(0px)';
                                    let t = h(e * Math.PI * 2) * d.range;
                                    return 'translateY('.concat(t, 'px)');
                                }),
                      translateX: u ? v.xOffset.to((e) => ''.concat(e, 'px')) : 0,
                      scale: x.scale,
                      filter: null == (n = E.blur) ? void 0 : n.to((e) => 'blur('.concat(e, 'px)'))
                  },
                  children: p
              });
    },
    O = (e) => {
        let { isMotionReduced: t } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: m.boltTrinket,
                    children: (0, i.jsx)(E, {
                        blurAnimationData: {
                            startBlurRadius: 10,
                            endBlurRadius: 0,
                            duration: 1500
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: 1500
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: 3000,
                            path: 'cosine'
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: p.Z,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.carTrinket,
                    children: (0, i.jsx)(E, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: 3000,
                            path: 'sine'
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: g.Z,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.hammerTrinket,
                    children: (0, i.jsx)(E, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: 3000,
                            path: 'sine'
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: h.Z,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.keyTrinket,
                    children: (0, i.jsx)(E, {
                        blurAnimationData: {
                            startBlurRadius: 5,
                            endBlurRadius: 0,
                            duration: 2000
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: 2000
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: 3000,
                            path: 'sine'
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: f.Z,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.starTrinket,
                    children: (0, i.jsx)(E, {
                        blurAnimationData: {
                            startBlurRadius: 0,
                            endBlurRadius: 2,
                            duration: 1500
                        },
                        scaleAnimationData: {
                            startScale: 1,
                            endScale: 0.85,
                            duration: 1500
                        },
                        yAxisAnimationData: {
                            range: 20,
                            duration: 2000,
                            path: 'cosine'
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: b.Z,
                            alt: ''
                        })
                    })
                })
            ]
        });
    },
    C = (e) => {
        let { supportHEVCAlpha: t, isMotionReduced: n } = e;
        return n
            ? (0, i.jsx)('div', {
                  className: m.flyingWumpus,
                  children: (0, i.jsx)('img', {
                      src: j.Z,
                      alt: ''
                  })
              })
            : (0, i.jsx)('div', {
                  className: m.flyingWumpus,
                  children: (0, i.jsx)(E, {
                      scaleAnimationData: {
                          startScale: 0.9,
                          endScale: 1,
                          duration: 1500
                      },
                      yAxisAnimationData: {
                          range: 20,
                          duration: 2000,
                          path: 'sine'
                      },
                      animateXAxisWiggle: !0,
                      children: t
                          ? (0, i.jsx)('img', {
                                src: x.Z,
                                alt: ''
                            })
                          : (0, i.jsx)(
                                d.Z,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    children: (0, i.jsx)('source', { src: _.Z })
                                },
                                _.Z
                            )
                  })
              });
    },
    v = () => {
        let e = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            t = (0, u.rO)();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C, {
                    supportHEVCAlpha: t,
                    isMotionReduced: e
                }),
                (0, i.jsx)(O, { isMotionReduced: e })
            ]
        });
    };
