n.d(t, { Z: () => u }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(921254),
    s = n(745510),
    a = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70,
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    u = r.memo(function (e) {
        let {
                confettiTarget: t,
                colors: n,
                emojiURL: u,
                numBursts: d,
                particlesPerBurst: f,
                offsetXPercentageMax: p,
                offsetXPercentageMin: m,
                offsetYPercentageMax: h,
                offsetYPercentageMin: g,
                customConfettiCanvas: b,
                speedValues: y = o,
                dragCoefficientValue: O = 1.66,
                onAnimationEnd: j,
            } = e,
            [P, v] = r.useState(null),
            { confettiCanvas: S } = r.useContext(s.h),
            x = (0, l.uR)(null != b ? b : S, P),
            [w, _] = r.useState(!1);
        r.useEffect(() => {
            w && (null == j || j());
        });
        let C = r.useMemo(() => {
            if (null != u)
                return [
                    {
                        src: u,
                        colorize: !1,
                    },
                ];
        }, [u]);
        return (
            r.useEffect(() => {
                if (null == t) return;
                let e = Array(null != d ? d : 4).fill(0);
                return (
                    (e = e.map((n, i) =>
                        setTimeout(() => {
                            x.createMultipleConfetti(
                                (function (e, t, n, i, r) {
                                    var l, s;
                                    let u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        d = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        f = c(e.width, 100, n),
                                        p = c(e.height, 75, r),
                                        m = c(e.width, 350, t),
                                        h = c(e.height, 75, i),
                                        { xMin: g, xMax: b, yMin: y, yMax: O } = u;
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
                                        })({}, a.We)),
                                        (s = s =
                                            {
                                                position: {
                                                    type: "static-random",
                                                    minValue: {
                                                        x: e.left + f,
                                                        y: e.top + p,
                                                    },
                                                    maxValue: {
                                                        x: e.left + m,
                                                        y: e.top + h,
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
                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var i = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, i);
                                                  }
                                                  return n;
                                              })(Object(s)).forEach(function (e) {
                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                                              }),
                                        l
                                    );
                                })(t.getBoundingClientRect(), p, m, h, g, y, O),
                                null != f ? f : 50,
                            ),
                                i === e.length - 1 && null != j && _(!0);
                        }, 60 * i),
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [x, t, d, f, p, m, h, g, y, O, j]),
            (0, i.jsx)(l.Ji, {
                ref: v,
                sprites: null != C ? C : a.CA,
                colors: null != n ? n : a.Br,
                spriteWidth: a.Ko,
                spriteHeight: a.Ko,
            })
        );
    });
