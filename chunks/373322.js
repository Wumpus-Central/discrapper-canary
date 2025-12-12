n.d(t, { Z: () => y }), n(388685);
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
    h = n(444134),
    f = n(526188),
    x = n(617889),
    b = n(675654),
    g = n(922630),
    v = n(197857);
let j = ["#51BC9D"],
    y = (e) => {
        var t;
        let { overlayRef: n, progressBarRef: i, isHovered: y } = e,
            { quest: C, isExpanded: _ } = r.useContext(f.A),
            { expansionSpring: S } = r.useContext(h.xo),
            { completionSpring: E, startCompletionAnimation: T } = (0, x.GX)(),
            O = (null == (t = C.userStatus) ? void 0 : t.completedAt) != null,
            N = r.useRef(!1),
            P = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
            w = r.useRef(null),
            I = (0, d.e7)([p.Z], () => p.Z.hasLayers()),
            k = (0, u.Z)(I),
            [R, A] = r.useState(null),
            [D, Z] = r.useState(null),
            L = r.useRef(
                new s.qA({
                    gravity: 0,
                    wind: 0,
                }),
            ),
            M = (0, s.uR)(R, D),
            U = r.useCallback(() => {
                if (P) return;
                let e = i.current,
                    t = w.current;
                if (null != t && null != e && M.isReady) {
                    var n, a, r, l, s, o;
                    let { x: i, y: c } = e.getBoundingClientRect(),
                        { x: d, y: u } = t.getBoundingClientRect();
                    M.createMultipleConfetti(
                        ((n = i - d),
                        (a = c - u),
                        (r = e.clientHeight),
                        (l = e.clientWidth),
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
                        })({}, b.We)),
                        (o = o =
                            {
                                position: {
                                    type: "static-random",
                                    minValue: {
                                        x: n,
                                        y: a,
                                    },
                                    maxValue: {
                                        x: n + r,
                                        y: a + l,
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
            }, [i, w, M, P]),
            B = (0, u.Z)(_);
        return (r.useEffect(() => {
            O && _ && !B && (T(), U());
        }, [_, O, T, U, B]),
        r.useEffect(() => {
            O &&
                !I &&
                k &&
                setTimeout(() => {
                    T(), U();
                }, 200);
        }, [O, k, I, T, U]),
        r.useEffect(() => {
            M.isReady && (!N.current && O && (T(), U()), (N.current = O));
        }, [O, N, U, T, M]),
        r.useEffect(() => {
            y && O && (T(), U());
        }, [y, O, T, U]),
        P)
            ? null
            : (0, a.jsxs)("div", {
                  className: g.wrapper,
                  "aria-hidden": "true",
                  ref: w,
                  children: [
                      (0, a.jsx)(c.animated.div, {
                          className: g.background,
                          style: { opacity: E },
                      }),
                      (0, a.jsx)(c.animated.div, {
                          className: l()(g.borders, g.bordersTopLeft),
                          style: { opacity: E },
                      }),
                      (0, a.jsxs)(c.animated.div, {
                          className: g.confettiWrapper,
                          style: {
                              transform: S.to({
                                  range: [0, 1],
                                  output: [-35, 0],
                              }).to((e) => "translateY(".concat(e, "px)")),
                          },
                          children: [
                              (0, a.jsx)(s.O_, {
                                  ref: A,
                                  className: g.confetti,
                                  environment: L.current,
                              }),
                              (0, a.jsx)(s.Ji, {
                                  ref: Z,
                                  sprites: [v],
                                  colors: j,
                                  spriteWidth: b.Ko,
                                  spriteHeight: b.Ko,
                              }),
                              null != n.current &&
                                  (0, o.createPortal)(
                                      (0, a.jsx)(c.animated.div, {
                                          className: l()(g.borders, g.bordersBottom),
                                          style: { opacity: E },
                                      }),
                                      n.current,
                                  ),
                          ],
                      }),
                  ],
              });
    };
