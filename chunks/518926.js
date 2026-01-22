r.d(t, { A: () => u }), r(896048);
var n = r(627968),
    i = r(64700),
    l = r(106778),
    s = r(21161),
    a = r(851110);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70,
    },
    c = (e, t, r) => (null == r ? t : (e * r) / 100),
    u = i.memo(function (e) {
        let {
                confettiTarget: t,
                colors: r,
                emojiURL: u,
                numBursts: d,
                particlesPerBurst: p,
                offsetXPercentageMax: f,
                offsetXPercentageMin: h,
                offsetYPercentageMax: y,
                offsetYPercentageMin: b,
                customConfettiCanvas: g,
                speedValues: m = o,
                dragCoefficientValue: O = 1.66,
                onAnimationEnd: j,
            } = e,
            [A, x] = i.useState(null),
            { confettiCanvas: v } = i.useContext(s.x),
            S = (0, l.f9)(null != g ? g : v, A),
            [P, w] = i.useState(!1);
        i.useEffect(() => {
            P && (null == j || j());
        });
        let R = i.useMemo(() => {
            if (null != u)
                return [
                    {
                        src: u,
                        colorize: !1,
                    },
                ];
        }, [u]);
        return (
            i.useEffect(() => {
                if (null == t) return;
                let e = Array(null != d ? d : 4).fill(0);
                return (
                    (e = e.map((r, n) =>
                        setTimeout(() => {
                            S.createMultipleConfetti(
                                (function (e, t, r, n, i) {
                                    var l, s;
                                    let u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        p = c(e.width, 100, r),
                                        f = c(e.height, 75, i),
                                        h = c(e.width, 350, t),
                                        y = c(e.height, 75, n),
                                        { xMin: b, xMax: g, yMin: m, yMax: O } = u;
                                    return (
                                        (l = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        }),
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = r[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })({}, a.Mw)),
                                        (s = s =
                                            {
                                                position: {
                                                    type: "static-random",
                                                    minValue: {
                                                        x: e.left + p,
                                                        y: e.top + f,
                                                    },
                                                    maxValue: {
                                                        x: e.left + h,
                                                        y: e.top + y,
                                                    },
                                                },
                                                velocity: {
                                                    type: "static-random",
                                                    minValue: {
                                                        x: b,
                                                        y: m,
                                                    },
                                                    maxValue: {
                                                        x: g,
                                                        y: O,
                                                    },
                                                },
                                                size: {
                                                    type: "static-random",
                                                    minValue: a.wn,
                                                    maxValue: a.wn,
                                                },
                                                dragCoefficient: {
                                                    type: "static",
                                                    value: d,
                                                },
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(s)).forEach(function (e) {
                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                              }),
                                        l
                                    );
                                })(t.getBoundingClientRect(), f, h, y, b, m, O),
                                null != p ? p : 50,
                            ),
                                n === e.length - 1 && null != j && w(!0);
                        }, 60 * n),
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [S, t, d, p, f, h, y, b, m, O, j]),
            (0, n.jsx)(l.K_, {
                ref: x,
                sprites: null != R ? R : a.uI,
                colors: null != r ? r : a._t,
                spriteWidth: a.wn,
                spriteHeight: a.wn,
            })
        );
    });
