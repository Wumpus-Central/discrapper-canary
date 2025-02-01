n.d(t, { Z: () => _ }), n(47120);
var s = n(200651),
    r = n(192379),
    a = n(120356),
    o = n.n(a),
    i = n(119617),
    l = n(995295),
    c = n(642128),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    x = n(569379),
    h = n(675654),
    g = n(211720),
    f = n(197857);
let v = ['#51BC9D'],
    _ = (e) => {
        var t;
        let { expansionSpring: n, overlayRef: a, quest: _, progressBarRef: C, isExpanded: j } = e,
            { completionSpring: b, startCompletionAnimation: T } = (0, x.G)(),
            E = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
            S = r.useRef(!1),
            N = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            y = r.useRef(null),
            w = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
            A = (0, u.Z)(w),
            [B, R] = r.useState(null),
            [P, k] = r.useState(null),
            q = r.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0
                })
            ),
            I = (0, i.uR)(B, P),
            O = r.useCallback(() => {
                if (N) return;
                let e = C.current,
                    t = y.current;
                if (null != t && null != e && I.isReady) {
                    var n, s, r, a;
                    let { x: o, y: i } = e.getBoundingClientRect(),
                        { x: l, y: c } = t.getBoundingClientRect();
                    I.createMultipleConfetti(
                        ((n = o - l),
                        (s = i - c),
                        (r = e.clientHeight),
                        (a = e.clientWidth),
                        {
                            ...h.We,
                            position: {
                                type: 'static-random',
                                minValue: {
                                    x: n,
                                    y: s
                                },
                                maxValue: {
                                    x: n + r,
                                    y: s + a
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
            }, [C, y, I, N]),
            M = (0, u.Z)(j);
        return (r.useEffect(() => {
            E && j && !M && (T(), O());
        }, [j, E, T, O, M]),
        r.useEffect(() => {
            E &&
                !w &&
                A &&
                setTimeout(() => {
                    T(), O();
                }, 200);
        }, [E, A, w, T, O]),
        r.useEffect(() => {
            I.isReady && (!S.current && E && (T(), O()), (S.current = E));
        }, [E, S, O, T, I]),
        N)
            ? null
            : (0, s.jsxs)('div', {
                  className: g.wrapper,
                  'aria-hidden': 'true',
                  ref: y,
                  children: [
                      (0, s.jsx)(c.animated.div, {
                          className: g.background,
                          style: { opacity: b }
                      }),
                      (0, s.jsx)(c.animated.div, {
                          className: o()(g.borders, g.bordersTopLeft),
                          style: { opacity: b }
                      }),
                      (0, s.jsxs)(c.animated.div, {
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
                              (0, s.jsx)(i.O_, {
                                  ref: R,
                                  className: g.confetti,
                                  environment: q.current
                              }),
                              (0, s.jsx)(i.Ji, {
                                  ref: k,
                                  sprites: [f],
                                  colors: v,
                                  spriteWidth: h.Ko,
                                  spriteHeight: h.Ko
                              }),
                              null != a.current &&
                                  (0, l.createPortal)(
                                      (0, s.jsx)(c.animated.div, {
                                          className: o()(g.borders, g.bordersBottom),
                                          style: { opacity: b }
                                      }),
                                      a.current
                                  )
                          ]
                      })
                  ]
              });
    };
