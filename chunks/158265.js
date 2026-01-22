n.d(t, {
    A: () => y,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(106778),
    o = n(340287),
    c = n(108531),
    d = n(311907),
    u = n(475743),
    m = n(775602),
    p = n(186111),
    h = n(568329),
    f = n(963713),
    x = n(772244),
    b = n(851110),
    g = n(307725),
    v = n(231901);
let j = ["#51BC9D"],
    y = (e) => {
        var t;
        let { overlayRef: n, progressBarRef: i, isHovered: y } = e,
            { quest: _, isExpanded: A } = l.useContext(f.T),
            { expansionSpring: C } = l.useContext(h.PW),
            { completionSpring: S, startCompletionAnimation: O } = (0, x.Ry)(),
            E = (null == (t = _.userStatus) ? void 0 : t.completedAt) != null,
            N = l.useRef(!1),
            T = (0, d.bG)([m.A], () => m.A.useReducedMotion),
            I = l.useRef(null),
            w = (0, d.bG)([p.A], () => p.A.hasLayers()),
            k = (0, u.A)(w),
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
                if (T) return;
                let e = i.current,
                    t = I.current;
                if (null != t && null != e && U.isReady) {
                    var n, a, l, r, s, o;
                    let { x: i, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    U.createMultipleConfetti(
                        ((n = i - d),
                        (a = c - u),
                        (l = e.clientHeight),
                        (r = e.clientWidth),
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
                                        y: a + r,
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
            }, [i, I, U, T]),
            G = (0, u.A)(A);
        return (l.useEffect(() => {
            E && A && !G && (O(), B());
        }, [A, E, O, B, G]),
        l.useEffect(() => {
            E &&
                !w &&
                k &&
                setTimeout(() => {
                    O(), B();
                }, 200);
        }, [E, k, w, O, B]),
        l.useEffect(() => {
            U.isReady && (!N.current && E && (O(), B()), (N.current = E));
        }, [E, N, B, O, U]),
        l.useEffect(() => {
            y && E && (O(), B());
        }, [y, E, O, B]),
        T)
            ? null
            : (0, a.jsxs)("div", {
                  className: g.iE,
                  "aria-hidden": "true",
                  ref: I,
                  children: [
                      (0, a.jsx)(c.animated.div, {
                          className: g.Tp,
                          style: {
                              opacity: S,
                          },
                      }),
                      (0, a.jsx)(c.animated.div, {
                          className: r()(g.sJ, g.ix),
                          style: {
                              opacity: S,
                          },
                      }),
                      (0, a.jsxs)(c.animated.div, {
                          className: g.KG,
                          style: {
                              transform: C.to({
                                  range: [0, 1],
                                  output: [-35, 0],
                              }).to((e) => "translateY(".concat(e, "px)")),
                          },
                          children: [
                              (0, a.jsx)(s.Fk, {
                                  ref: R,
                                  className: g.t_,
                                  environment: L.current,
                              }),
                              (0, a.jsx)(s.K_, {
                                  ref: M,
                                  sprites: [v],
                                  colors: j,
                                  spriteWidth: b.wn,
                                  spriteHeight: b.wn,
                              }),
                              null != n.current &&
                                  (0, o.createPortal)(
                                      (0, a.jsx)(c.animated.div, {
                                          className: r()(g.sJ, g.d7),
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
