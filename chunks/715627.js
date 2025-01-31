o.d(e, { Z: () => f }), o(47120);
var i = o(200651),
    n = o(192379),
    a = o(119617),
    l = o(745510),
    r = o(675654);
let u = {
        xMin: -40,
        xMax: 40,
        yMin: -40,
        yMax: -70
    },
    s = (t, e, o) => (null == o ? e : (t * o) / 100),
    f = n.memo(function (t) {
        let { confettiTarget: e, colors: o, emojiURL: f, numBursts: c, particlesPerBurst: d, offsetXPercentageMax: _, offsetXPercentageMin: m, offsetYPercentageMax: p, offsetYPercentageMin: h, customConfettiCanvas: x, speedValues: y = u, dragCoefficientValue: v = 1.66, onAnimationEnd: g } = t,
            [w, b] = n.useState(null),
            { confettiCanvas: C } = n.useContext(l.h),
            G = (0, a.uR)(null != x ? x : C, w),
            [M, k] = n.useState(!1);
        n.useEffect(() => {
            M && (null == g || g());
        });
        let P = n.useMemo(() => {
            if (null != f)
                return [
                    {
                        src: f,
                        colorize: !1
                    }
                ];
        }, [f]);
        return (
            n.useEffect(() => {
                if (null == e) return;
                let t = Array(null != c ? c : 4).fill(0);
                return (
                    (t = t.map((o, i) =>
                        setTimeout(() => {
                            G.createMultipleConfetti(
                                (function (t, e, o, i, n) {
                                    let a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : u,
                                        l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        f = s(t.width, 100, o),
                                        c = s(t.height, 75, n),
                                        d = s(t.width, 350, e),
                                        _ = s(t.height, 75, i),
                                        { xMin: m, xMax: p, yMin: h, yMax: x } = a;
                                    return {
                                        ...r.We,
                                        position: {
                                            type: 'static-random',
                                            minValue: {
                                                x: t.left + f,
                                                y: t.top + c
                                            },
                                            maxValue: {
                                                x: t.left + d,
                                                y: t.top + _
                                            }
                                        },
                                        velocity: {
                                            type: 'static-random',
                                            minValue: {
                                                x: m,
                                                y: h
                                            },
                                            maxValue: {
                                                x: p,
                                                y: x
                                            }
                                        },
                                        size: {
                                            type: 'static-random',
                                            minValue: r.Ko,
                                            maxValue: r.Ko
                                        },
                                        dragCoefficient: {
                                            type: 'static',
                                            value: l
                                        }
                                    };
                                })(e.getBoundingClientRect(), _, m, p, h, y, v),
                                null != d ? d : 50
                            ),
                                i === t.length - 1 && null != g && k(!0);
                        }, 60 * i)
                    )),
                    () => {
                        for (let e of t) clearTimeout(e);
                    }
                );
            }, [G, e, c, d, _, m, p, h, y, v, g]),
            (0, i.jsx)(a.Ji, {
                ref: b,
                sprites: null != P ? P : r.CA,
                colors: null != o ? o : r.Br,
                spriteWidth: r.Ko,
                spriteHeight: r.Ko
            })
        );
    });
