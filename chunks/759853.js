n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(238651),
    l = n(603113),
    c = n(803948),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    f = n(569379),
    g = n(675654),
    x = n(674386),
    h = n(197857);
let b = ["#51BC9D"],
    _ = (e) => {
        var t;
        let {
                expansionSpring: n,
                overlayRef: o,
                quest: _,
                progressBarRef: j,
                isExpanded: v,
                isHovered: C,
                shouldShowRewardsCTAWhenCollapsed: y,
            } = e,
            { completionSpring: E, startCompletionAnimation: O } = (0, f.G)(),
            S = (null == (t = _.userStatus) ? void 0 : t.completedAt) != null,
            T = s.useRef(!1),
            w = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            P = s.useRef(null),
            A = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
            N = (0, u.Z)(A),
            [R, B] = s.useState(null),
            [k, I] = s.useState(null),
            q = s.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0,
                }),
            ),
            Q = (0, i.uR)(R, k),
            D = s.useCallback(() => {
                if (w) return;
                let e = j.current,
                    t = P.current;
                if (null != t && null != e && Q.isReady) {
                    var n, r, s, o, a, i;
                    let { x: l, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    Q.createMultipleConfetti(
                        ((n = l - d),
                        (r = c - u),
                        (s = e.clientHeight),
                        (o = e.clientWidth),
                        (a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, g.We)),
                        (i = i =
                            {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n,
                                        y: r,
                                    },
                                    maxValue: {
                                        x: n + s,
                                        y: r + o,
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
                        100,
                    );
                }
            }, [j, P, Q, w]),
            V = (0, u.Z)(v);
        return (s.useEffect(() => {
            S && v && !V && (O(), D());
        }, [v, S, O, D, V]),
        s.useEffect(() => {
            S &&
                !A &&
                N &&
                setTimeout(() => {
                    O(), D();
                }, 200);
        }, [S, N, A, O, D]),
        s.useEffect(() => {
            Q.isReady && (!T.current && S && (O(), D()), (T.current = S));
        }, [S, T, D, O, Q]),
        s.useEffect(() => {
            C && y && (O(), D());
        }, [C, y, O, D]),
        w)
            ? null
            : (0, r.jsxs)("div", {
                  className: x.wrapper,
                  "aria-hidden": "true",
                  ref: P,
                  children: [
                      (0, r.jsx)(c.animated.div, {
                          className: x.background,
                          style: { opacity: E },
                      }),
                      (0, r.jsx)(c.animated.div, {
                          className: a()(x.borders, x.bordersTopLeft),
                          style: { opacity: E },
                      }),
                      (0, r.jsxs)(c.animated.div, {
                          className: x.confettiWrapper,
                          style: {
                              transform: n
                                  .to({
                                      range: [0, 1],
                                      output: [-35, 0],
                                  })
                                  .to((e) => "translateY(".concat(e, "px)")),
                          },
                          children: [
                              (0, r.jsx)(i.O_, {
                                  ref: B,
                                  className: x.confetti,
                                  environment: q.current,
                              }),
                              (0, r.jsx)(i.Ji, {
                                  ref: I,
                                  sprites: [h],
                                  colors: b,
                                  spriteWidth: g.Ko,
                                  spriteHeight: g.Ko,
                              }),
                              null != o.current &&
                                  (0, l.createPortal)(
                                      (0, r.jsx)(c.animated.div, {
                                          className: a()(x.borders, x.bordersBottom),
                                          style: { opacity: E },
                                      }),
                                      o.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
