n.d(e, { Z: () => u }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(505266),
    l = n(745510),
    a = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    c = (t, e, n) => (null == n ? e : (t * n) / 100),
    u = r.memo(function (t) {
        let { confettiTarget: e, colors: n, emojiURL: u, numBursts: d, particlesPerBurst: p, offsetXPercentageMax: f, offsetXPercentageMin: h, offsetYPercentageMax: m, offsetYPercentageMin: g, customConfettiCanvas: y, speedValues: O = o, dragCoefficientValue: b = 1.66, onAnimationEnd: j } = t,
            [S, P] = r.useState(null),
            { confettiCanvas: v } = r.useContext(l.h),
            x = (0, s.uR)(null != y ? y : v, S),
            [w, Z] = r.useState(!1);
        r.useEffect(() => {
            w && (null == j || j());
        });
        let C = r.useMemo(() => {
            if (null != u)
                return [
                    {
                        src: u,
                        colorize: !1
                    }
                ];
        }, [u]);
        return (
            r.useEffect(() => {
                if (null == e) return;
                let t = Array(null != d ? d : 4).fill(0);
                return (
                    (t = t.map((n, i) =>
                        setTimeout(() => {
                            x.createMultipleConfetti(
                                (function (t, e, n, i, r) {
                                    var s, l;
                                    let u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        p = c(t.width, 100, n),
                                        f = c(t.height, 75, r),
                                        h = c(t.width, 350, e),
                                        m = c(t.height, 75, i),
                                        { xMin: g, xMax: y, yMin: O, yMax: b } = u;
                                    return (
                                        (s = (function (t) {
                                            for (var e = 1; e < arguments.length; e++) {
                                                var n = null != arguments[e] ? arguments[e] : {},
                                                    i = Object.keys(n);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (t) {
                                                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                        })
                                                    )),
                                                    i.forEach(function (e) {
                                                        var i;
                                                        (i = n[e]),
                                                            e in t
                                                                ? Object.defineProperty(t, e, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (t[e] = i);
                                                    });
                                            }
                                            return t;
                                        })({}, a.We)),
                                        (l = l =
                                            {
                                                position: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: t.left + p,
                                                        y: t.top + f
                                                    },
                                                    maxValue: {
                                                        x: t.left + h,
                                                        y: t.top + m
                                                    }
                                                },
                                                velocity: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: g,
                                                        y: O
                                                    },
                                                    maxValue: {
                                                        x: y,
                                                        y: b
                                                    }
                                                },
                                                size: {
                                                    type: 'static-random',
                                                    minValue: a.Ko,
                                                    maxValue: a.Ko
                                                },
                                                dragCoefficient: {
                                                    type: 'static',
                                                    value: d
                                                }
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
                                            : (function (t, e) {
                                                  var n = Object.keys(t);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(t);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(l)).forEach(function (t) {
                                                  Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(l, t));
                                              }),
                                        s
                                    );
                                })(e.getBoundingClientRect(), f, h, m, g, O, b),
                                null != p ? p : 50
                            ),
                                i === t.length - 1 && null != j && Z(!0);
                        }, 60 * i)
                    )),
                    () => {
                        for (let e of t) clearTimeout(e);
                    }
                );
            }, [x, e, d, p, f, h, m, g, O, b, j]),
            (0, i.jsx)(s.Ji, {
                ref: P,
                sprites: null != C ? C : a.CA,
                colors: null != n ? n : a.Br,
                spriteWidth: a.Ko,
                spriteHeight: a.Ko
            })
        );
    });
