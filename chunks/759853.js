n.d(t, { Z: () => j }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(505266),
    l = n(867309),
    c = n(524979),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    f = n(569379),
    g = n(675654),
    x = n(513940),
    h = n(197857);
let b = ['#51BC9D'],
    j = (e) => {
        var t;
        let { expansionSpring: n, overlayRef: o, quest: j, progressBarRef: v, isExpanded: _ } = e,
            { completionSpring: y, startCompletionAnimation: O } = (0, f.G)(),
            C = (null == (t = j.userStatus) ? void 0 : t.completedAt) != null,
            w = s.useRef(!1),
            S = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            E = s.useRef(null),
            P = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
            T = (0, u.Z)(P),
            [N, A] = s.useState(null),
            [k, R] = s.useState(null),
            B = s.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0
                })
            ),
            q = (0, i.uR)(N, k),
            I = s.useCallback(() => {
                if (S) return;
                let e = v.current,
                    t = E.current;
                if (null != t && null != e && q.isReady) {
                    var n, r, s, o, a, i;
                    let { x: l, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    q.createMultipleConfetti(
                        ((n = l - d),
                        (r = c - u),
                        (s = e.clientHeight),
                        (o = e.clientWidth),
                        (a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, g.We)),
                        (i = i =
                            {
                                position: {
                                    type: 'static-random',
                                    minValue: {
                                        x: n,
                                        y: r
                                    },
                                    maxValue: {
                                        x: n + s,
                                        y: r + o
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
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        a),
                        100
                    );
                }
            }, [v, E, q, S]),
            D = (0, u.Z)(_);
        return (s.useEffect(() => {
            C && _ && !D && (O(), I());
        }, [_, C, O, I, D]),
        s.useEffect(() => {
            C &&
                !P &&
                T &&
                setTimeout(() => {
                    O(), I();
                }, 200);
        }, [C, T, P, O, I]),
        s.useEffect(() => {
            q.isReady && (!w.current && C && (O(), I()), (w.current = C));
        }, [C, w, I, O, q]),
        S)
            ? null
            : (0, r.jsxs)('div', {
                  className: x.wrapper,
                  'aria-hidden': 'true',
                  ref: E,
                  children: [
                      (0, r.jsx)(c.animated.div, {
                          className: x.background,
                          style: { opacity: y }
                      }),
                      (0, r.jsx)(c.animated.div, {
                          className: a()(x.borders, x.bordersTopLeft),
                          style: { opacity: y }
                      }),
                      (0, r.jsxs)(c.animated.div, {
                          className: x.confettiWrapper,
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
                                  ref: A,
                                  className: x.confetti,
                                  environment: B.current
                              }),
                              (0, r.jsx)(i.Ji, {
                                  ref: R,
                                  sprites: [h],
                                  colors: b,
                                  spriteWidth: g.Ko,
                                  spriteHeight: g.Ko
                              }),
                              null != o.current &&
                                  (0, l.createPortal)(
                                      (0, r.jsx)(c.animated.div, {
                                          className: a()(x.borders, x.bordersBottom),
                                          style: { opacity: y }
                                      }),
                                      o.current
                                  )
                          ]
                      })
                  ]
              });
    };
