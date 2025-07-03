(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    o = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(505266),
    l = n(867309),
    c = n(405499),
    u = n(442837),
    d = n(110924),
    p = n(607070),
    m = n(819640),
    f = n(569379),
    g = n(675654),
    x = n(513940),
    h = n(197857);
let b = ['#51BC9D'],
    j = (e) => {
        var t;
        let { expansionSpring: n, overlayRef: s, quest: j, progressBarRef: _, isExpanded: v } = e,
            { completionSpring: y, startCompletionAnimation: C } = (0, f.G)(),
            O = (null == (t = j.userStatus) ? void 0 : t.completedAt) != null,
            E = o.useRef(!1),
            S = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            w = o.useRef(null),
            P = (0, u.e7)([m.Z], () => m.Z.hasLayers()),
            T = (0, d.Z)(P),
            [N, A] = o.useState(null),
            [R, k] = o.useState(null),
            B = o.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0
                })
            ),
            I = (0, i.uR)(N, R),
            q = o.useCallback(() => {
                if (S) return;
                let e = _.current,
                    t = w.current;
                if (null != t && null != e && I.isReady) {
                    var n, r, o, s, a, i;
                    let { x: l, y: c } = e.getBoundingClientRect(),
                        { x: u, y: d } = t.getBoundingClientRect();
                    I.createMultipleConfetti(
                        ((n = l - u),
                        (r = c - d),
                        (o = e.clientHeight),
                        (s = e.clientWidth),
                        (a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
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
            }, [_, w, I, S]),
            D = (0, d.Z)(v);
        return (o.useEffect(() => {
            O && v && !D && (C(), q());
        }, [v, O, C, q, D]),
        o.useEffect(() => {
            O &&
                !P &&
                T &&
                setTimeout(() => {
                    (C(), q());
                }, 200);
        }, [O, T, P, C, q]),
        o.useEffect(() => {
            I.isReady && (!E.current && O && (C(), q()), (E.current = O));
        }, [O, E, q, C, I]),
        S)
            ? null
            : (0, r.jsxs)('div', {
                  className: x.wrapper,
                  'aria-hidden': 'true',
                  ref: w,
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
                                  ref: k,
                                  sprites: [h],
                                  colors: b,
                                  spriteWidth: g.Ko,
                                  spriteHeight: g.Ko
                              }),
                              null != s.current &&
                                  (0, l.createPortal)(
                                      (0, r.jsx)(c.animated.div, {
                                          className: a()(x.borders, x.bordersBottom),
                                          style: { opacity: y }
                                      }),
                                      s.current
                                  )
                          ]
                      })
                  ]
              });
    };
