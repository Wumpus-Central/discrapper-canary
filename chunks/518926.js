var n = i(477900),
    s = i(582128),
    r = i(776310),
    l = i(21161),
    a = i(77183);
let o = { xMin: -40, xMax: 40, yMin: -40, yMax: -70 };
function u(t, e, i) {
    return null == i ? e : (t * i) / 100;
}
let d = s.memo(function (t) {
    let {
            confettiTarget: e,
            colors: i,
            emojiURL: d,
            numBursts: c,
            particlesPerBurst: f,
            offsetXPercentageMax: p,
            offsetXPercentageMin: h,
            offsetYPercentageMax: m,
            offsetYPercentageMin: g,
            customConfettiCanvas: A,
            speedValues: R = o,
            dragCoefficientValue: S = 1.66,
            onAnimationEnd: x,
        } = t,
        [y, C] = s.useState(null),
        { confettiCanvas: I } = s.useContext(l.x),
        b = (0, r.f9)(A ?? I, y),
        [E, T] = s.useState(!1);
    s.useEffect(() => {
        E && x?.();
    });
    let v = s.useMemo(() => {
        if (null != d) return [{ src: d, colorize: !1 }];
    }, [d]);
    return (
        s.useEffect(() => {
            if (null == e) return;
            let t = Array(c ?? 4).fill(0);
            return (
                (t = t.map((i, n) =>
                    setTimeout(() => {
                        (b.createMultipleConfetti(
                            (function (t, e, i, n, s) {
                                let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                    l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                    d = u(t.width, 100, i),
                                    c = u(t.height, 75, s),
                                    f = u(t.width, 350, e),
                                    p = u(t.height, 75, n),
                                    { xMin: h, xMax: m, yMin: g, yMax: A } = r;
                                return {
                                    ...a.Mw,
                                    position: {
                                        type: "static-random",
                                        minValue: { x: t.left + d, y: t.top + c },
                                        maxValue: { x: t.left + f, y: t.top + p },
                                    },
                                    velocity: {
                                        type: "static-random",
                                        minValue: { x: h, y: g },
                                        maxValue: { x: m, y: A },
                                    },
                                    size: { type: "static-random", minValue: 28, maxValue: 28 },
                                    dragCoefficient: { type: "static", value: l },
                                };
                            })(e.getBoundingClientRect(), p, h, m, g, R, S),
                            f ?? 50,
                        ),
                            n === t.length - 1 && null != x && T(!0));
                    }, 60 * n),
                )),
                () => {
                    for (let e of t) clearTimeout(e);
                }
            );
        }, [b, e, c, f, p, h, m, g, R, S, x]),
        (0, n.jsx)(r.K_, { ref: C, sprites: v ?? a.uI, colors: i ?? a._t, spriteWidth: 28, spriteHeight: 28 })
    );
});
i.d(e, {}, { A: d });
