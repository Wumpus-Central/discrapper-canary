i.d(e, { A: () => d });
var n = i(477900),
    s = i(582128),
    l = i(776310),
    a = i(21161),
    r = i(536283);
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
            offsetXPercentageMax: h,
            offsetXPercentageMin: p,
            offsetYPercentageMax: m,
            offsetYPercentageMin: g,
            customConfettiCanvas: A,
            speedValues: x = o,
            dragCoefficientValue: y = 1.66,
            onAnimationEnd: R,
        } = t,
        [S, C] = s.useState(null),
        { confettiCanvas: I } = s.useContext(a.x),
        T = (0, l.f9)(A ?? I, S),
        [j, E] = s.useState(!1);
    s.useEffect(() => {
        j && R?.();
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
                        (T.createMultipleConfetti(
                            (function (t, e, i, n, s) {
                                let l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                    a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                    d = u(t.width, 100, i),
                                    c = u(t.height, 75, s),
                                    f = u(t.width, 350, e),
                                    h = u(t.height, 75, n),
                                    { xMin: p, xMax: m, yMin: g, yMax: A } = l;
                                return {
                                    ...r.Mw,
                                    position: {
                                        type: "static-random",
                                        minValue: { x: t.left + d, y: t.top + c },
                                        maxValue: { x: t.left + f, y: t.top + h },
                                    },
                                    velocity: {
                                        type: "static-random",
                                        minValue: { x: p, y: g },
                                        maxValue: { x: m, y: A },
                                    },
                                    size: { type: "static-random", minValue: r.wn, maxValue: r.wn },
                                    dragCoefficient: { type: "static", value: a },
                                };
                            })(e.getBoundingClientRect(), h, p, m, g, x, y),
                            f ?? 50,
                        ),
                            n === t.length - 1 && null != R && E(!0));
                    }, 60 * n),
                )),
                () => {
                    for (let e of t) clearTimeout(e);
                }
            );
        }, [T, e, c, f, h, p, m, g, x, y, R]),
        (0, n.jsx)(l.K_, { ref: C, sprites: v ?? r.uI, colors: i ?? r._t, spriteWidth: r.wn, spriteHeight: r.wn })
    );
});
