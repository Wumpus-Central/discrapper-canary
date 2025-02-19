r.d(t, { Z: () => f }), r(47120);
var n = r(200651),
    o = r(192379),
    i = r(119617),
    a = r(745510),
    c = r(675654);
let l = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    u = (e, t, r) => (null == r ? t : (e * r) / 100),
    f = o.memo(function (e) {
        let { confettiTarget: t, colors: r, emojiURL: f, numBursts: s, particlesPerBurst: p, offsetXPercentageMax: y, offsetXPercentageMin: b, offsetYPercentageMax: m, offsetYPercentageMin: d, customConfettiCanvas: h, speedValues: O = l, dragCoefficientValue: _ = 1.66, onAnimationEnd: g } = e,
            [v, w] = o.useState(null),
            { confettiCanvas: j } = o.useContext(a.h),
            P = (0, i.uR)(null != h ? h : j, v),
            [x, S] = o.useState(!1);
        o.useEffect(() => {
            x && (null == g || g());
        });
        let k = o.useMemo(() => {
            if (null != f)
                return [
                    {
                        src: f,
                        colorize: !1
                    }
                ];
        }, [f]);
        return (
            o.useEffect(() => {
                if (null == t) return;
                let e = Array(null != s ? s : 4).fill(0);
                return (
                    (e = e.map((r, n) =>
                        setTimeout(() => {
                            P.createMultipleConfetti(
                                (function (e, t, r, n, o) {
                                    var i, a;
                                    let f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : l,
                                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        p = u(e.width, 100, r),
                                        y = u(e.height, 75, o),
                                        b = u(e.width, 350, t),
                                        m = u(e.height, 75, n),
                                        { xMin: d, xMax: h, yMin: O, yMax: _ } = f;
                                    return (
                                        (i = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                'function' == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        })
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = r[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })({}, c.We)),
                                        (a = a =
                                            {
                                                position: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: e.left + p,
                                                        y: e.top + y
                                                    },
                                                    maxValue: {
                                                        x: e.left + b,
                                                        y: e.top + m
                                                    }
                                                },
                                                velocity: {
                                                    type: 'static-random',
                                                    minValue: {
                                                        x: d,
                                                        y: O
                                                    },
                                                    maxValue: {
                                                        x: h,
                                                        y: _
                                                    }
                                                },
                                                size: {
                                                    type: 'static-random',
                                                    minValue: c.Ko,
                                                    maxValue: c.Ko
                                                },
                                                dragCoefficient: {
                                                    type: 'static',
                                                    value: s
                                                }
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(a)).forEach(function (e) {
                                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                              }),
                                        i
                                    );
                                })(t.getBoundingClientRect(), y, b, m, d, O, _),
                                null != p ? p : 50
                            ),
                                n === e.length - 1 && null != g && S(!0);
                        }, 60 * n)
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [P, t, s, p, y, b, m, d, O, _, g]),
            (0, n.jsx)(i.Ji, {
                ref: w,
                sprites: null != k ? k : c.CA,
                colors: null != r ? r : c.Br,
                spriteWidth: c.Ko,
                spriteHeight: c.Ko
            })
        );
    });
