n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(48026),
    a = n(745510),
    l = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    d = i.memo(function (e) {
        let { confettiTarget: t, colors: n, emojiURL: d, numBursts: u, particlesPerBurst: m, offsetXPercentageMax: g, offsetXPercentageMin: p, offsetYPercentageMax: h, offsetYPercentageMin: f, customConfettiCanvas: b, speedValues: N = o, dragCoefficientValue: x = 1.66, onAnimationEnd: _ } = e,
            [E, j] = i.useState(null),
            { confettiCanvas: O } = i.useContext(a.h),
            C = (0, s.uR)(null != b ? b : O, E),
            [S, v] = i.useState(!1);
        i.useEffect(() => {
            S && (null == _ || _());
        });
        let T = i.useMemo(() => {
            if (null != d)
                return [
                    {
                        src: d,
                        colorize: !1
                    }
                ];
        }, [d]);
        return (
            i.useEffect(() => {
                if (null == t) return;
                let e = Array(null != u ? u : 4).fill(0);
                return (
                    (e = e.map((n, r) =>
                        setTimeout(() => {
                            C.createMultipleConfetti(
                                (function (e, t, n, r, i) {
                                    var s, a;
                                    let d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        m = c(e.width, 100, n),
                                        g = c(e.height, 75, i),
                                        p = c(e.width, 350, t),
                                        h = c(e.height, 75, r),
                                        { xMin: f, xMax: b, yMin: N, yMax: x } = d;
                                    return (
                                        (s = (function (e) {
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
                                        })({}, l.We)),
                                        (a = a =
                                            {
                                                position: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: e.left + m,
                                                        y: e.top + g
                                                    },
                                                    maxValue: {
                                                        x: e.left + p,
                                                        y: e.top + h
                                                    }
                                                },
                                                velocity: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: f,
                                                        y: N
                                                    },
                                                    maxValue: {
                                                        x: b,
                                                        y: x
                                                    }
                                                },
                                                size: {
                                                    type: 'static-random',
                                                    minValue: l.Ko,
                                                    maxValue: l.Ko
                                                },
                                                dragCoefficient: {
                                                    type: 'static',
                                                    value: u
                                                }
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(a)).forEach(function (e) {
                                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                                              }),
                                        s
                                    );
                                })(t.getBoundingClientRect(), g, p, h, f, N, x),
                                null != m ? m : 50
                            ),
                                r === e.length - 1 && null != _ && v(!0);
                        }, 60 * r)
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [C, t, u, m, g, p, h, f, N, x, _]),
            (0, r.jsx)(s.Ji, {
                ref: j,
                sprites: null != T ? T : l.CA,
                colors: null != n ? n : l.Br,
                spriteWidth: l.Ko,
                spriteHeight: l.Ko
            })
        );
    });
