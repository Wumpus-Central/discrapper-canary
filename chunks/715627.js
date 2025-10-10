n.d(t, { Z: () => c }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(238651),
    a = n(745510),
    s = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70,
    },
    u = (e, t, n) => (null == n ? t : (e * n) / 100),
    c = r.memo(function (e) {
        let {
                confettiTarget: t,
                colors: n,
                emojiURL: c,
                numBursts: d,
                particlesPerBurst: p,
                offsetXPercentageMax: f,
                offsetXPercentageMin: m,
                offsetYPercentageMax: g,
                offsetYPercentageMin: h,
                customConfettiCanvas: b,
                speedValues: y = o,
                dragCoefficientValue: O = 1.66,
                onAnimationEnd: v,
            } = e,
            [P, j] = r.useState(null),
            { confettiCanvas: S } = r.useContext(a.h),
            x = (0, l.uR)(null != b ? b : S, P),
            [w, _] = r.useState(!1);
        r.useEffect(() => {
            w && (null == v || v());
        });
        let I = r.useMemo(() => {
            if (null != c)
                return [
                    {
                        src: c,
                        colorize: !1,
                    },
                ];
        }, [c]);
        return (
            r.useEffect(() => {
                if (null == t) return;
                let e = Array(null != d ? d : 4).fill(0);
                return (
                    (e = e.map((n, i) =>
                        setTimeout(() => {
                            x.createMultipleConfetti(
                                (function (e, t, n, i, r) {
                                    var l, a;
                                    let c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        p = u(e.width, 100, n),
                                        f = u(e.height, 75, r),
                                        m = u(e.width, 350, t),
                                        g = u(e.height, 75, i),
                                        { xMin: h, xMax: b, yMin: y, yMax: O } = c;
                                    return (
                                        (l = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    i.forEach(function (t) {
                                                        var i;
                                                        (i = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: i,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = i);
                                                    });
                                            }
                                            return e;
                                        })({}, s.We)),
                                        (a = a =
                                            {
                                                position: {
                                                    type: "static-random",
                                                    minValue: {
                                                        x: e.left + p,
                                                        y: e.top + f,
                                                    },
                                                    maxValue: {
                                                        x: e.left + m,
                                                        y: e.top + g,
                                                    },
                                                },
                                                velocity: {
                                                    type: "static-random",
                                                    minValue: {
                                                        x: h,
                                                        y: y,
                                                    },
                                                    maxValue: {
                                                        x: b,
                                                        y: O,
                                                    },
                                                },
                                                size: {
                                                    type: "static-random",
                                                    minValue: s.Ko,
                                                    maxValue: s.Ko,
                                                },
                                                dragCoefficient: {
                                                    type: "static",
                                                    value: d,
                                                },
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(a)).forEach(function (e) {
                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                              }),
                                        l
                                    );
                                })(t.getBoundingClientRect(), f, m, g, h, y, O),
                                null != p ? p : 50,
                            ),
                                i === e.length - 1 && null != v && _(!0);
                        }, 60 * i),
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [x, t, d, p, f, m, g, h, y, O, v]),
            (0, i.jsx)(l.Ji, {
                ref: j,
                sprites: null != I ? I : s.CA,
                colors: null != n ? n : s.Br,
                spriteWidth: s.Ko,
                spriteHeight: s.Ko,
            })
        );
    });
