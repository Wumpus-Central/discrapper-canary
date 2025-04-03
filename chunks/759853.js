n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    o = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(48026),
    l = n(995295),
    c = n(642128),
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
        let { expansionSpring: n, overlayRef: s, quest: j, progressBarRef: v, isExpanded: y } = e,
            { completionSpring: _, startCompletionAnimation: C } = (0, f.G)(),
            O = (null == (t = j.userStatus) ? void 0 : t.completedAt) != null,
            w = o.useRef(!1),
            S = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            P = o.useRef(null),
            N = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
            E = (0, u.Z)(N),
            [T, A] = o.useState(null),
            [B, R] = o.useState(null),
            k = o.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0
                })
            ),
            q = (0, i.uR)(T, B),
            D = o.useCallback(() => {
                if (S) return;
                let e = v.current,
                    t = P.current;
                if (null != t && null != e && q.isReady) {
                    var n, r, o, s, a, i;
                    let { x: l, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    q.createMultipleConfetti(
                        ((n = l - d),
                        (r = c - u),
                        (o = e.clientHeight),
                        (s = e.clientWidth),
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
            }, [v, P, q, S]),
            I = (0, u.Z)(y);
        return (o.useEffect(() => {
            O && y && !I && (C(), D());
        }, [y, O, C, D, I]),
        o.useEffect(() => {
            O &&
                !N &&
                E &&
                setTimeout(() => {
                    C(), D();
                }, 200);
        }, [O, E, N, C, D]),
        o.useEffect(() => {
            q.isReady && (!w.current && O && (C(), D()), (w.current = O));
        }, [O, w, D, C, q]),
        S)
            ? null
            : (0, r.jsxs)('div', {
                  className: x.wrapper,
                  'aria-hidden': 'true',
                  ref: P,
                  children: [
                      (0, r.jsx)(c.animated.div, {
                          className: x.background,
                          style: { opacity: _ }
                      }),
                      (0, r.jsx)(c.animated.div, {
                          className: a()(x.borders, x.bordersTopLeft),
                          style: { opacity: _ }
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
                                  environment: k.current
                              }),
                              (0, r.jsx)(i.Ji, {
                                  ref: R,
                                  sprites: [h],
                                  colors: b,
                                  spriteWidth: g.Ko,
                                  spriteHeight: g.Ko
                              }),
                              null != s.current &&
                                  (0, l.createPortal)(
                                      (0, r.jsx)(c.animated.div, {
                                          className: a()(x.borders, x.bordersBottom),
                                          style: { opacity: _ }
                                      }),
                                      s.current
                                  )
                          ]
                      })
                  ]
              });
    };
