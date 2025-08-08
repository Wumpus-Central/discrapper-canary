n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    s = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(505266),
    l = n(867309),
    c = n(126663),
    u = n(442837),
    d = n(110924),
    p = n(607070),
    m = n(819640),
    g = n(569379),
    f = n(675654),
    x = n(513940),
    h = n(197857);
let j = ["#51BC9D"],
    _ = (e) => {
        var t;
        let { expansionSpring: n, overlayRef: o, quest: _, progressBarRef: b, isExpanded: v } = e,
            { completionSpring: C, startCompletionAnimation: y } = (0, g.G)(),
            O = (null == (t = _.userStatus) ? void 0 : t.completedAt) != null,
            E = s.useRef(!1),
            S = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            T = s.useRef(null),
            w = (0, u.e7)([m.Z], () => m.Z.hasLayers()),
            P = (0, d.Z)(w),
            [N, A] = s.useState(null),
            [R, B] = s.useState(null),
            k = s.useRef(
                new i.qA({
                    gravity: 0,
                    wind: 0,
                }),
            ),
            I = (0, i.uR)(N, R),
            q = s.useCallback(() => {
                if (S) return;
                let e = b.current,
                    t = T.current;
                if (null != t && null != e && I.isReady) {
                    var n, r, s, o, a, i;
                    let { x: l, y: c } = e.getBoundingClientRect(),
                        { x: u, y: d } = t.getBoundingClientRect();
                    I.createMultipleConfetti(
                        ((n = l - u),
                        (r = c - d),
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
            }, [b, T, I, S]),
            D = (0, d.Z)(v);
        return (s.useEffect(() => {
            O && v && !D && (y(), q());
        }, [v, O, y, q, D]),
        s.useEffect(() => {
            O &&
                !w &&
                P &&
                setTimeout(() => {
                    y(), q();
                }, 200);
        }, [O, P, w, y, q]),
        s.useEffect(() => {
            I.isReady && (!E.current && O && (y(), q()), (E.current = O));
        }, [O, E, q, y, I]),
        S)
            ? null
            : (0, r.jsxs)("div", {
                  className: x.wrapper,
                  "aria-hidden": "true",
                  ref: T,
                  children: [
                      (0, r.jsx)(c.animated.div, {
                          className: x.background,
                          style: { opacity: C },
                      }),
                      (0, r.jsx)(c.animated.div, {
                          className: a()(x.borders, x.bordersTopLeft),
                          style: { opacity: C },
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
                                  ref: A,
                                  className: x.confetti,
                                  environment: k.current,
                              }),
                              (0, r.jsx)(i.Ji, {
                                  ref: B,
                                  sprites: [h],
                                  colors: j,
                                  spriteWidth: f.Ko,
                                  spriteHeight: f.Ko,
                              }),
                              null != o.current &&
                                  (0, l.createPortal)(
                                      (0, r.jsx)(c.animated.div, {
                                          className: a()(x.borders, x.bordersBottom),
                                          style: { opacity: C },
                                      }),
                                      o.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
