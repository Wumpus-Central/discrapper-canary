n(47120);
var i = n(200651),
    r = n(192379),
    s = n(119617),
    a = n(745510),
    l = n(675654);
let o = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    c = (e, t, n) => (null == n ? t : (e * n) / 100),
    d = r.memo(function (e) {
        let { confettiTarget: t, colors: n, emojiURL: d, numBursts: u, particlesPerBurst: m, offsetXPercentageMax: g, offsetXPercentageMin: h, offsetYPercentageMax: p, offsetYPercentageMin: x, customConfettiCanvas: f, speedValues: _ = o, dragCoefficientValue: E = 1.66, onAnimationEnd: C } = e,
            [T, S] = r.useState(null),
            { confettiCanvas: b } = r.useContext(a.h),
            I = (0, s.uR)(null != f ? f : b, T),
            [N, v] = r.useState(!1);
        r.useEffect(() => {
            N && (null == C || C());
        });
        let A = r.useMemo(() => {
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
                            I.createMultipleConfetti(
                                (function (e, t, n, i, r) {
                                    let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        d = c(e.width, 100, n),
                                        u = c(e.height, 75, r),
                                        m = c(e.width, 350, t),
                                        g = c(e.height, 75, i),
                                        { xMin: h, xMax: p, yMin: x, yMax: f } = s;
                                    return {
                                        ...l.We,
                                        position: {
                                            type: 'static-random',
                                            minValue: {
                                                x: e.left + d,
                                                y: e.top + u
                                            },
                                            maxValue: {
                                                x: e.left + m,
                                                y: e.top + g
                                            }
                                        },
                                        velocity: {
                                            type: 'static-random',
                                            minValue: {
                                                x: h,
                                                y: x
                                            },
                                            maxValue: {
                                                x: p,
                                                y: f
                                            }
                                        },
                                        size: {
                                            type: 'static-random',
                                            minValue: l.Ko,
                                            maxValue: l.Ko
                                        },
                                        dragCoefficient: {
                                            type: 'static',
                                            value: a
                                        }
                                    };
                                })(t.getBoundingClientRect(), g, h, p, x, _, E),
                                null != m ? m : 50
                            ),
                                i === e.length - 1 && null != C && v(!0);
                        }, 60 * i)
                    )),
                    () => {
                        for (let t of e) clearTimeout(t);
                    }
                );
            }, [I, t, u, m, g, h, p, x, _, E, C]),
            (0, i.jsx)(s.Ji, {
                ref: S,
                sprites: null != A ? A : l.CA,
                colors: null != n ? n : l.Br,
                spriteWidth: l.Ko,
                spriteHeight: l.Ko
            })
        );
    });
t.Z = d;
