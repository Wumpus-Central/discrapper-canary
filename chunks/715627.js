n.d(t, { Z: () => d }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(995899),
    l = n(745510),
    a = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    d = r.memo(function (e) {
        let { confettiTarget: t, colors: n, emojiURL: d, numBursts: u, particlesPerBurst: m, offsetXPercentageMax: p, offsetXPercentageMin: g, offsetYPercentageMax: h, offsetYPercentageMin: f, customConfettiCanvas: b, speedValues: _ = o, dragCoefficientValue: x = 1.66, onAnimationEnd: E } = e,
            [j, C] = r.useState(null),
            { confettiCanvas: O } = r.useContext(l.h),
            S = (0, s.uR)(null != b ? b : O, j),
            [v, T] = r.useState(!1);
        r.useEffect(() => {
            v && (null == E || E());
        });
        let N = r.useMemo(() => {
            if (null != d)
                return [
                    {
                        src: d,
                        colorize: !1
                    }
                ];
        }, [d]);
        return (
            r.useEffect(() => {
                if (null == t) return;
                let e = Array(null != u ? u : 4).fill(0);
                return (
                    (e = e.map((n, i) =>
                        setTimeout(() => {
                            S.createMultipleConfetti(
                                (function (e, t, n, i, r) {
                                    var s, l;
                                    let d = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        m = c(e.width, 100, n),
                                        p = c(e.height, 75, r),
                                        g = c(e.width, 350, t),
                                        h = c(e.height, 75, i),
                                        { xMin: f, xMax: b, yMin: _, yMax: x } = d;
                                    return (
                                        (s = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({}, a.We)),
                                        (l = l =
                                            {
                                                position: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: e.left + m,
                                                        y: e.top + p
                                                    },
                                                    maxValue: {
                                                        x: e.left + g,
                                                        y: e.top + h
                                                    }
                                                },
                                                velocity: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: f,
                                                        y: _
                                                    },
                                                    maxValue: {
                                                        x: b,
                                                        y: x
                                                    }
                                                },
                                                size: {
                                                    type: 'static-random',
                                                    minValue: a.Ko,
                                                    maxValue: a.Ko
                                                },
                                                dragCoefficient: {
                                                    type: 'static',
                                                    value: u
                                                }
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(l)).forEach(function (e) {
                                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e));
                                              }),
                                        s
                                    );
                                })(t.getBoundingClientRect(), p, g, h, f, _, x),
                                null != m ? m : 50
                            ),
                                i === e.length - 1 && null != E && T(!0);
                        }, 60 * i)
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [S, t, u, m, p, g, h, f, _, x, E]),
            (0, i.jsx)(s.Ji, {
                ref: C,
                sprites: null != N ? N : a.CA,
                colors: null != n ? n : a.Br,
                spriteWidth: a.Ko,
                spriteHeight: a.Ko
            })
        );
    });
