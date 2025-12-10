n.d(t, { Z: () => v }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(921254),
    o = n(24156),
    c = n(467721),
    d = n(442837),
    u = n(110924),
    m = n(607070),
    p = n(819640),
    h = n(617889),
    x = n(675654),
    f = n(157564),
    g = n(197857);
let b = ["#51BC9D"],
    v = (e) => {
        var t;
        let { expansionSpring: n, overlayRef: i, quest: v, progressBarRef: j, isExpanded: _, isHovered: y } = e,
            { completionSpring: C, startCompletionAnimation: S } = (0, h.GX)(),
            E = (null == (t = v.userStatus) ? void 0 : t.completedAt) != null,
            O = r.useRef(!1),
            T = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
            N = r.useRef(null),
            P = (0, d.e7)([p.Z], () => p.Z.hasLayers()),
            w = (0, u.Z)(P),
            [I, k] = r.useState(null),
            [R, A] = r.useState(null),
            D = r.useRef(
                new s.qA({
                    gravity: 0,
                    wind: 0,
                }),
            ),
            Z = (0, s.uR)(I, R),
            L = r.useCallback(() => {
                if (T) return;
                let e = j.current,
                    t = N.current;
                if (null != t && null != e && Z.isReady) {
                    var n, a, r, i, l, s;
                    let { x: o, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    Z.createMultipleConfetti(
                        ((n = o - d),
                        (a = c - u),
                        (r = e.clientHeight),
                        (i = e.clientWidth),
                        (l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({}, x.We)),
                        (s = s =
                            {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n,
                                        y: a,
                                    },
                                    maxValue: {
                                        x: n + r,
                                        y: a + i,
                                    },
                                },
                                velocity: {
                                    type: "static-random",
                                    minValue: {
                                        x: -20,
                                        y: -20,
                                    },
                                    maxValue: {
                                        x: 20,
                                        y: 20,
                                    },
                                },
                                opacity: {
                                    type: "linear",
                                    value: 2,
                                    addValue: -0.1,
                                },
                                dragCoefficient: {
                                    type: "static",
                                    value: 0.166,
                                },
                                size: {
                                    type: "static-random",
                                    minValue: 2,
                                    maxValue: 3,
                                },
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        l),
                        100,
                    );
                }
            }, [j, N, Z, T]),
            M = (0, u.Z)(_);
        return (r.useEffect(() => {
            E && _ && !M && (S(), L());
        }, [_, E, S, L, M]),
        r.useEffect(() => {
            E &&
                !P &&
                w &&
                setTimeout(() => {
                    S(), L();
                }, 200);
        }, [E, w, P, S, L]),
        r.useEffect(() => {
            Z.isReady && (!O.current && E && (S(), L()), (O.current = E));
        }, [E, O, L, S, Z]),
        r.useEffect(() => {
            y && E && (S(), L());
        }, [y, E, S, L]),
        T)
            ? null
            : (0, a.jsxs)("div", {
                  className: f.wrapper,
                  "aria-hidden": "true",
                  ref: N,
                  children: [
                      (0, a.jsx)(c.animated.div, {
                          className: f.background,
                          style: { opacity: C },
                      }),
                      (0, a.jsx)(c.animated.div, {
                          className: l()(f.borders, f.bordersTopLeft),
                          style: { opacity: C },
                      }),
                      (0, a.jsxs)(c.animated.div, {
                          className: f.confettiWrapper,
                          style: {
                              transform: n
                                  .to({
                                      range: [0, 1],
                                      output: [-35, 0],
                                  })
                                  .to((e) => "translateY(".concat(e, "px)")),
                          },
                          children: [
                              (0, a.jsx)(s.O_, {
                                  ref: k,
                                  className: f.confetti,
                                  environment: D.current,
                              }),
                              (0, a.jsx)(s.Ji, {
                                  ref: A,
                                  sprites: [g],
                                  colors: b,
                                  spriteWidth: x.Ko,
                                  spriteHeight: x.Ko,
                              }),
                              null != i.current &&
                                  (0, o.createPortal)(
                                      (0, a.jsx)(c.animated.div, {
                                          className: l()(f.borders, f.bordersBottom),
                                          style: { opacity: C },
                                      }),
                                      i.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
