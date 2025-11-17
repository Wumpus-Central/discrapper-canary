n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(921254),
    l = n(745510),
    a = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70,
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    u = i.memo(function (e) {
        let {
                confettiTarget: t,
                colors: n,
                emojiURL: u,
                numBursts: d,
                particlesPerBurst: f,
                offsetXPercentageMax: p,
                offsetXPercentageMin: h,
                offsetYPercentageMax: m,
                offsetYPercentageMin: g,
                customConfettiCanvas: b,
                speedValues: y = o,
                dragCoefficientValue: O = 1.66,
                onAnimationEnd: j,
            } = e,
            [P, v] = i.useState(null),
            { confettiCanvas: x } = i.useContext(l.h),
            S = (0, s.uR)(null != b ? b : x, P),
            [w, _] = i.useState(!1);
        i.useEffect(() => {
            w && (null == j || j());
        });
        let Z = i.useMemo(() => {
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
                    (e = e.map((n, r) =>
                        setTimeout(() => {
                            S.createMultipleConfetti(
                                (function (e, t, n, r, i) {
                                    var s, l;
                                    let u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        f = c(e.width, 100, n),
                                        p = c(e.height, 75, i),
                                        h = c(e.width, 350, t),
                                        m = c(e.height, 75, r),
                                        { xMin: g, xMax: b, yMin: y, yMax: O } = u;
                                    return (
                                        (s = (function (e) {
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
                                        })({}, a.We)),
                                        (l = l =
                                            {
                                                position: {
                                                    type: "static-random",
                                                    minValue: {
                                                        x: e.left + f,
                                                        y: e.top + p,
                                                    },
                                                    maxValue: {
                                                        x: e.left + h,
                                                        y: e.top + m,
                                                    },
                                                },
                                                velocity: {
                                                    type: "static-random",
                                                    minValue: {
                                                        x: g,
                                                        y: y,
                                                    },
                                                    maxValue: {
                                                        x: b,
                                                        y: O,
                                                    },
                                                },
                                                size: {
                                                    type: "static-random",
                                                    minValue: a.Ko,
                                                    maxValue: a.Ko,
                                                },
                                                dragCoefficient: {
                                                    type: "static",
                                                    value: d,
                                                },
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(l)).forEach(function (e) {
                                                  Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e));
                                              }),
                                        s
                                    );
                                })(t.getBoundingClientRect(), p, h, m, g, y, O),
                                null != f ? f : 50,
                            ),
                                r === e.length - 1 && null != j && _(!0);
                        }, 60 * r),
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [S, t, d, f, p, h, m, g, y, O, j]),
            (0, r.jsx)(s.Ji, {
                ref: v,
                sprites: null != Z ? Z : a.CA,
                colors: null != n ? n : a.Br,
                spriteWidth: a.Ko,
                spriteHeight: a.Ko,
            })
        );
    });
