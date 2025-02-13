n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(119617),
    l = n(995295),
    c = n(642128),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    x = n(569379),
    h = n(675654),
    g = n(898480),
    f = n(197857);
let _ = ['#51BC9D'],
    C = (e) => {
        var t;
        let { expansionSpring: n, overlayRef: s, quest: C, progressBarRef: v, isExpanded: j } = e,
            { completionSpring: b, startCompletionAnimation: T } = (0, x.G)(),
            E = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            N = o.useRef(!1),
            S = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            y = o.useRef(null),
            A = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
            B = (0, u.Z)(A),
            [R, w] = o.useState(null),
            [q, k] = o.useState(null),
            P = o.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0
                })
            ),
            I = (0, i.uR)(R, q),
            M = o.useCallback(() => {
                if (S) return;
                let e = v.current,
                    t = y.current;
                if (null != t && null != e && I.isReady) {
                    var n, r, o, s;
                    let { x: a, y: i } = e.getBoundingClientRect(),
                        { x: l, y: c } = t.getBoundingClientRect();
                    I.createMultipleConfetti(
                        ((n = a - l),
                        (r = i - c),
                        (o = e.clientHeight),
                        (s = e.clientWidth),
                        {
                            ...h.We,
                            position: {
                                type: 'static-random',
                                minValue: {
                                    x: n,
                                    y: r
                                },
                                maxValue: {
                                    x: n + o,
                                    y: r + s
                                }
                            },
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: -20,
                                    y: -20
                                },
                                maxValue: {
                                    x: 20,
                                    y: 20
                                }
                            },
                            opacity: {
                                type: 'linear',
                                value: 2,
                                addValue: -0.1
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: 0.166
                            },
                            size: {
                                type: 'static-random',
                                minValue: 2,
                                maxValue: 3
                            }
                        }),
                        100
                    );
                }
            }, [v, y, I, S]),
            O = (0, u.Z)(j);
        return (o.useEffect(() => {
            E && j && !O && (T(), M());
        }, [j, E, T, M, O]),
        o.useEffect(() => {
            E &&
                !A &&
                B &&
                setTimeout(() => {
                    T(), M();
                }, 200);
        }, [E, B, A, T, M]),
        o.useEffect(() => {
            I.isReady && (!N.current && E && (T(), M()), (N.current = E));
        }, [E, N, M, T, I]),
        S)
            ? null
            : (0, r.jsxs)('div', {
                  className: g.wrapper,
                  'aria-hidden': 'true',
                  ref: y,
                  children: [
                      (0, r.jsx)(c.animated.div, {
                          className: g.background,
                          style: { opacity: b }
                      }),
                      (0, r.jsx)(c.animated.div, {
                          className: a()(g.borders, g.bordersTopLeft),
                          style: { opacity: b }
                      }),
                      (0, r.jsxs)(c.animated.div, {
                          className: g.confettiWrapper,
                          style: {
                              transform: n
                                  .to({
                                      range: [0, 1],
                                      output: [-35, 0]
                                  })
                                  .to((e) => 'translateY('.concat(e, 'px)'))
                          },
                          children: [
                              (0, r.jsx)(i.O_, {
                                  ref: w,
                                  className: g.confetti,
                                  environment: P.current
                              }),
                              (0, r.jsx)(i.Ji, {
                                  ref: k,
                                  sprites: [f],
                                  colors: _,
                                  spriteWidth: h.Ko,
                                  spriteHeight: h.Ko
                              }),
                              null != s.current &&
                                  (0, l.createPortal)(
                                      (0, r.jsx)(c.animated.div, {
                                          className: a()(g.borders, g.bordersBottom),
                                          style: { opacity: b }
                                      }),
                                      s.current
                                  )
                          ]
                      })
                  ]
              });
    };
