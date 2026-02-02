n.d(t, {
    A: () => _,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(106778),
    o = n(340287),
    c = n(353709),
    d = n(311907),
    u = n(475743),
    m = n(775602),
    p = n(186111),
    h = n(568329),
    x = n(963713),
    g = n(772244),
    f = n(851110),
    b = n(307725),
    v = n(231901);
let j = ["#51BC9D"],
    _ = (e) => {
        var t;
        let { overlayRef: n, progressBarRef: r, isHovered: _ } = e,
            { quest: y, isExpanded: A } = l.useContext(x.T),
            { expansionSpring: C } = l.useContext(h.PW),
            { completionSpring: S, startCompletionAnimation: O } = (0, g.Ry)(),
            T = (null == (t = y.userStatus) ? void 0 : t.completedAt) != null,
            E = l.useRef(!1),
            N = (0, d.bG)([m.A], () => m.A.useReducedMotion),
            w = l.useRef(null),
            I = (0, d.bG)([p.A], () => p.A.hasLayers()),
            k = (0, u.A)(I),
            [P, R] = l.useState(null),
            [D, M] = l.useState(null),
            L = l.useRef(
                new s.OH({
                    gravity: 0,
                    wind: 0,
                }),
            ),
            U = (0, s.f9)(P, D),
            B = l.useCallback(() => {
                if (N) return;
                let e = r.current,
                    t = w.current;
                if (null != t && null != e && U.isReady) {
                    var n, a, l, i, s, o;
                    let { x: r, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    U.createMultipleConfetti(
                        ((n = r - d),
                        (a = c - u),
                        (l = e.clientHeight),
                        (i = e.clientWidth),
                        (s = (function (e) {
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
                        })({}, f.Mw)),
                        (o = o =
                            {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n,
                                        y: a,
                                    },
                                    maxValue: {
                                        x: n + l,
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
                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var a = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, a);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        s),
                        100,
                    );
                }
            }, [r, w, U, N]),
            G = (0, u.A)(A);
        return (l.useEffect(() => {
            T && A && !G && (O(), B());
        }, [A, T, O, B, G]),
        l.useEffect(() => {
            T &&
                !I &&
                k &&
                setTimeout(() => {
                    O(), B();
                }, 200);
        }, [T, k, I, O, B]),
        l.useEffect(() => {
            U.isReady && (!E.current && T && (O(), B()), (E.current = T));
        }, [T, E, B, O, U]),
        l.useEffect(() => {
            _ && T && (O(), B());
        }, [_, T, O, B]),
        N)
            ? null
            : (0, a.jsxs)("div", {
                  className: b.iE,
                  "aria-hidden": "true",
                  ref: w,
                  children: [
                      (0, a.jsx)(c.animated.div, {
                          className: b.Tp,
                          style: {
                              opacity: S,
                          },
                      }),
                      (0, a.jsx)(c.animated.div, {
                          className: i()(b.sJ, b.ix),
                          style: {
                              opacity: S,
                          },
                      }),
                      (0, a.jsxs)(c.animated.div, {
                          className: b.KG,
                          style: {
                              transform: C.to({
                                  range: [0, 1],
                                  output: [-35, 0],
                              }).to((e) => "translateY(".concat(e, "px)")),
                          },
                          children: [
                              (0, a.jsx)(s.Fk, {
                                  ref: R,
                                  className: b.t_,
                                  environment: L.current,
                              }),
                              (0, a.jsx)(s.K_, {
                                  ref: M,
                                  sprites: [v],
                                  colors: j,
                                  spriteWidth: f.wn,
                                  spriteHeight: f.wn,
                              }),
                              null != n.current &&
                                  (0, o.createPortal)(
                                      (0, a.jsx)(c.animated.div, {
                                          className: i()(b.sJ, b.d7),
                                          style: {
                                              opacity: S,
                                          },
                                      }),
                                      n.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
