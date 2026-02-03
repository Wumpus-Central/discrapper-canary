n.d(t, {
    A: () => y,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(106778),
    o = n(340287),
    c = n(92674),
    d = n(311907),
    u = n(475743),
    m = n(775602),
    p = n(186111),
    h = n(398025),
    x = n(568329),
    g = n(963713),
    f = n(772244),
    b = n(851110),
    v = n(307725),
    j = n(231901);
let _ = ["#51BC9D"],
    y = (e) => {
        var t;
        let { overlayRef: n, progressBarRef: r, isHovered: y } = e,
            { quest: A, isExpanded: C } = l.useContext(g.T),
            { expansionSpring: S } = l.useContext(x.PW),
            { completionSpring: O, startCompletionAnimation: T } = (0, f.Ry)(),
            E = (null == (t = A.userStatus) ? void 0 : t.completedAt) != null,
            N = l.useRef(!1),
            w = (0, d.bG)([m.A], () => m.A.useReducedMotion),
            I = l.useRef(null),
            k = (0, d.bG)([p.A], () => p.A.hasLayers()),
            P = (0, u.A)(k),
            [R, D] = l.useState(null),
            [M, L] = l.useState(null),
            U = l.useRef(
                new s.OH({
                    gravity: 0,
                    wind: 0,
                }),
            ),
            B = (0, s.f9)(R, M),
            G = l.useCallback(() => {
                if (w) return;
                let e = r.current,
                    t = I.current;
                if (null != t && null != e && B.isReady) {
                    var n, a, l, i, s, o;
                    let { x: r, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    B.createMultipleConfetti(
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
                        })({}, b.Mw)),
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
            }, [r, I, B, w]),
            F = (0, u.A)(C);
        return (l.useEffect(() => {
            E && C && !F && (T(), G());
        }, [C, E, T, G, F]),
        l.useEffect(() => {
            E &&
                !k &&
                P &&
                setTimeout(() => {
                    T(), G();
                }, 200);
        }, [E, P, k, T, G]),
        l.useEffect(() => {
            B.isReady && (!N.current && E && (T(), G()), (N.current = E));
        }, [E, N, G, T, B]),
        l.useEffect(() => {
            y && E && (T(), G());
        }, [y, E, T, G]),
        w)
            ? null
            : (0, a.jsxs)("div", {
                  className: v.iE,
                  "aria-hidden": "true",
                  ref: I,
                  children: [
                      (0, a.jsx)(c.animated.div, {
                          className: v.Tp,
                          style: {
                              opacity: (0, h.a)(O),
                          },
                      }),
                      (0, a.jsx)(c.animated.div, {
                          className: i()(v.sJ, v.ix),
                          style: {
                              opacity: (0, h.a)(O),
                          },
                      }),
                      (0, a.jsxs)(c.animated.div, {
                          className: v.KG,
                          style: {
                              transform: S.to({
                                  range: [0, 1],
                                  output: [-35, 0],
                              }).to((e) => "translateY(".concat(e, "px)")),
                          },
                          children: [
                              (0, a.jsx)(s.Fk, {
                                  ref: D,
                                  className: v.t_,
                                  environment: U.current,
                              }),
                              (0, a.jsx)(s.K_, {
                                  ref: L,
                                  sprites: [j],
                                  colors: _,
                                  spriteWidth: b.wn,
                                  spriteHeight: b.wn,
                              }),
                              null != n.current &&
                                  (0, o.createPortal)(
                                      (0, a.jsx)(c.animated.div, {
                                          className: i()(v.sJ, v.d7),
                                          style: {
                                              opacity: (0, h.a)(O),
                                          },
                                      }),
                                      n.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
