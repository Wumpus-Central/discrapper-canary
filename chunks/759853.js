n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    s = n(647438),
    a = n(120356),
    o = n.n(a),
    i = n(238651),
    l = n(603113),
    c = n(358458),
    d = n(442837),
    u = n(110924),
    p = n(607070),
    m = n(819640),
    g = n(569379),
    f = n(675654),
    h = n(674386),
    x = n(197857);
let _ = ["#51BC9D"],
    b = (e) => {
        var t;
        let { expansionSpring: n, overlayRef: a, quest: b, progressBarRef: j, isExpanded: v, isHovered: C } = e,
            { completionSpring: y, startCompletionAnimation: E } = (0, g.G)(),
            O = (null == (t = b.userStatus) ? void 0 : t.completedAt) != null,
            S = s.useRef(!1),
            T = (0, d.e7)([p.Z], () => p.Z.useReducedMotion),
            w = s.useRef(null),
            P = (0, d.e7)([m.Z], () => m.Z.hasLayers()),
            N = (0, u.Z)(P),
            [R, A] = s.useState(null),
            [B, k] = s.useState(null),
            I = s.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0,
                }),
            ),
            D = (0, i.uR)(R, B),
            q = s.useCallback(() => {
                if (T) return;
                let e = j.current,
                    t = w.current;
                if (null != t && null != e && D.isReady) {
                    var n, r, s, a, o, i;
                    let { x: l, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    D.createMultipleConfetti(
                        ((n = l - d),
                        (r = c - u),
                        (s = e.clientHeight),
                        (a = e.clientWidth),
                        (o = (function (e) {
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
                        })({}, f.We)),
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
                                        y: r + a,
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
                            ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        o),
                        100,
                    );
                }
            }, [j, w, D, T]),
            L = (0, u.Z)(v);
        return (s.useEffect(() => {
            O && v && !L && (E(), q());
        }, [v, O, E, q, L]),
        s.useEffect(() => {
            O &&
                !P &&
                N &&
                setTimeout(() => {
                    E(), q();
                }, 200);
        }, [O, N, P, E, q]),
        s.useEffect(() => {
            D.isReady && (!S.current && O && (E(), q()), (S.current = O));
        }, [O, S, q, E, D]),
        s.useEffect(() => {
            C && O && (E(), q());
        }, [C, O, E, q]),
        T)
            ? null
            : (0, r.jsxs)("div", {
                  className: h.wrapper,
                  "aria-hidden": "true",
                  ref: w,
                  children: [
                      (0, r.jsx)(c.animated.div, {
                          className: h.background,
                          style: { opacity: y },
                      }),
                      (0, r.jsx)(c.animated.div, {
                          className: o()(h.borders, h.bordersTopLeft),
                          style: { opacity: y },
                      }),
                      (0, r.jsxs)(c.animated.div, {
                          className: h.confettiWrapper,
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
                                  ref: A,
                                  className: h.confetti,
                                  environment: I.current,
                              }),
                              (0, r.jsx)(i.Ji, {
                                  ref: k,
                                  sprites: [x],
                                  colors: _,
                                  spriteWidth: f.Ko,
                                  spriteHeight: f.Ko,
                              }),
                              null != a.current &&
                                  (0, l.createPortal)(
                                      (0, r.jsx)(c.animated.div, {
                                          className: o()(h.borders, h.bordersBottom),
                                          style: { opacity: y },
                                      }),
                                      a.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
