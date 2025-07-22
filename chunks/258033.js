(n.d(t, { Z: () => v }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(42133),
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
        let { blurAnimationData: a, scaleAnimationData: c, yAxisAnimationData: d, parallaxAnimationData: u, animateXAxisWiggle: m = !1, isMotionReduced: p = !1, children: g } = e,
            h = (0, l.q_F)(
                null != d
                    ? {
                          from: { y: 0 },
                          to: { y: 1 },
                          config: { duration: d.duration },
                          loop: !0
                      }
                    : { y: 0 }
            ),
            f = (null == d ? void 0 : d.path) === 'sine' ? Math.sin : Math.cos,
            [b, x] = (0, r.useState)(1),
            _ = (0, l.q_F)(
                null != c
                    ? {
                          from: { scale: b > 0 ? c.startScale : c.endScale },
                          to: { scale: b > 0 ? c.endScale : c.startScale },
                          config: { duration: c.duration },
                          onRest: () => x((e) => -1 * e)
                      }
                    : { scale: 1 }
            ),
            [j, E] = (0, r.useState)(1),
            O = (0, l.q_F)(
                null != a
                    ? {
                          from: { blur: j > 0 ? a.startBlurRadius : a.endBlurRadius },
                          to: { blur: j > 0 ? a.endBlurRadius : a.startBlurRadius },
                          config: { duration: a.duration },
                          onRest: () => E((e) => -1 * e)
                      }
                    : { blur: 0 }
            ),
            C = (0, r.useMemo)(() => Math.round(750 + (200 * Math.random() - 100)), []),
            [v, S] = (0, r.useState)(0),
            [T, N] = (0, r.useState)(1),
            I = (0, l.q_F)({
                xOffset: v,
                config: {
                    tension: 10,
                    friction: 10,
                    duration: C
                }
            });
        return ((0, o.Z)(() => {
            (S(T * (0.5 * Math.random() * 5 + 2.5)), N((e) => -1 * e));
        }, C),
        p)
            ? g
            : (0, i.jsx)(s.animated.div, {
                  style: {
                      transform:
                          null == (t = h.y)
                              ? void 0
                              : t.to((e) => {
                                    if (null == d) return 'translateY(0px)';
                                    let t = f(e * Math.PI * 2) * d.range,
                                        n = 0;
                                    if (null != u) {
                                        let e = u.range * (1 - u.containerVisibilityPercentage);
                                        n = 'up' === u.pathDirection ? -e : e;
                                    }
                                    return 'translateY('.concat(t + n, 'px)');
                                }),
                      translateX: m ? I.xOffset.to((e) => ''.concat(e, 'px')) : 0,
                      scale: _.scale,
                      filter: null == (n = O.blur) ? void 0 : n.to((e) => 'blur('.concat(e, 'px)')),
                      opacity: null != u && u.changeOpacity ? u.containerVisibilityPercentage : 1
                  },
                  children: g
              });
    },
    O = (e) => {
        let { isMotionReduced: t, containerVisibilityPercentage: n } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: m.boltContainer,
                    children: (0, i.jsx)(E, {
                        blurAnimationData: {
                            startBlurRadius: 10,
                            endBlurRadius: 0,
                            duration: 3000
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: 3000
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: 6000,
                            path: 'cosine'
                        },
                        parallaxAnimationData: {
                            pathDirection: 'up',
                            range: 125,
                            containerVisibilityPercentage: n,
                            changeOpacity: !0
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: p.Z,
                            className: m.boltTrinket,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.carContainer,
                    children: (0, i.jsx)(E, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: 6000,
                            path: 'sine'
                        },
                        parallaxAnimationData: {
                            pathDirection: 'down',
                            range: 50,
                            containerVisibilityPercentage: n,
                            changeOpacity: !0
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: g.Z,
                            className: m.carTrinket,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.hammerContainer,
                    children: (0, i.jsx)(E, {
                        yAxisAnimationData: {
                            range: 15,
                            duration: 6000,
                            path: 'sine'
                        },
                        parallaxAnimationData: {
                            pathDirection: 'down',
                            range: 120,
                            containerVisibilityPercentage: n,
                            changeOpacity: !0
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: h.Z,
                            className: m.hammerTrinket,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.keyContainer,
                    children: (0, i.jsx)(E, {
                        blurAnimationData: {
                            startBlurRadius: 5,
                            endBlurRadius: 0,
                            duration: 4000
                        },
                        scaleAnimationData: {
                            startScale: 0.85,
                            endScale: 1,
                            duration: 4000
                        },
                        yAxisAnimationData: {
                            range: 15,
                            duration: 6000,
                            path: 'sine'
                        },
                        parallaxAnimationData: {
                            pathDirection: 'up',
                            range: 200,
                            containerVisibilityPercentage: n,
                            changeOpacity: !0
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: f.Z,
                            className: m.keyTrinket,
                            alt: ''
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: m.starContainer,
                    children: (0, i.jsx)(E, {
                        blurAnimationData: {
                            startBlurRadius: 0,
                            endBlurRadius: 2,
                            duration: 3000
                        },
                        scaleAnimationData: {
                            startScale: 1,
                            endScale: 0.85,
                            duration: 3000
                        },
                        yAxisAnimationData: {
                            range: 20,
                            duration: 4000,
                            path: 'cosine'
                        },
                        parallaxAnimationData: {
                            pathDirection: 'up',
                            range: 50,
                            containerVisibilityPercentage: n,
                            changeOpacity: !0
                        },
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        children: (0, i.jsx)('img', {
                            src: b.Z,
                            className: m.starTrinket,
                            alt: ''
                        })
                    })
                })
            ]
        });
    },
    C = (e) => {
        let { supportHEVCAlpha: t, isMotionReduced: n, containerVisibilityPercentage: r } = e;
        return n
            ? (0, i.jsx)('div', {
                  className: m.flyingWumpusContainer,
                  children: (0, i.jsx)('img', {
                      src: j.Z,
                      alt: '',
                      className: m.flyingWumpusAsset
                  })
              })
            : (0, i.jsx)('div', {
                  className: m.flyingWumpusContainer,
                  children: (0, i.jsx)(E, {
                      scaleAnimationData: {
                          startScale: 0.9,
                          endScale: 1,
                          duration: 3000
                      },
                      yAxisAnimationData: {
                          range: 20,
                          duration: 4000,
                          path: 'sine'
                      },
                      parallaxAnimationData: {
                          pathDirection: 'up',
                          range: 200,
                          containerVisibilityPercentage: r,
                          changeOpacity: !1
                      },
                      animateXAxisWiggle: !0,
                      children: t
                          ? (0, i.jsx)('img', {
                                src: x.Z,
                                alt: '',
                                className: m.flyingWumpusAsset
                            })
                          : (0, i.jsx)(
                                d.Z,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: m.flyingWumpusAsset,
                                    children: (0, i.jsx)('source', { src: _.Z })
                                },
                                _.Z
                            )
                  })
              });
    },
    v = (e) => {
        let { containerVisibilityPercentage: t } = e,
            n = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
            r = (0, u.rO)();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C, {
                    supportHEVCAlpha: r,
                    isMotionReduced: n,
                    containerVisibilityPercentage: t
                }),
                (0, i.jsx)(O, {
                    isMotionReduced: n,
                    containerVisibilityPercentage: t
                })
            ]
        });
    };
