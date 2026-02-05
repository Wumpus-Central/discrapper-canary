i.d(e, { A: () => d });
var s = i(627968),
    n = i(64700),
    l = i(106778),
    a = i(21161),
    r = i(851110);
let o = { xMin: -40, xMax: 40, yMin: -40, yMax: -70 },
    u = (t, e, i) => (null == i ? e : (t * i) / 100),
    d = n.memo(function (t) {
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
                speedValues: x = o,
                dragCoefficientValue: _ = 1.66,
                onAnimationEnd: y,
            } = t,
            [R, S] = n.useState(null),
            { confettiCanvas: C } = n.useContext(a.x),
            T = (0, l.f9)(A ?? C, R),
            [I, b] = n.useState(!1);
        n.useEffect(() => {
            I && y?.();
        });
        let j = n.useMemo(() => {
            if (null != d) return [{ src: d, colorize: !1 }];
        }, [d]);
        return (
            n.useEffect(() => {
                if (null == e) return;
                let t = Array(c ?? 4).fill(0);
                return (
                    (t = t.map((i, s) =>
                        setTimeout(() => {
                            T.createMultipleConfetti(
                                (function (t, e, i, s, n) {
                                    let l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : o,
                                        a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1.66,
                                        d = u(t.width, 100, i),
                                        c = u(t.height, 75, n),
                                        f = u(t.width, 350, e),
                                        p = u(t.height, 75, s),
                                        { xMin: h, xMax: m, yMin: g, yMax: A } = l;
                                    return {
                                        ...r.Mw,
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
                                        size: { type: "static-random", minValue: r.wn, maxValue: r.wn },
                                        dragCoefficient: { type: "static", value: a },
                                    };
                                })(e.getBoundingClientRect(), p, h, m, g, x, _),
                                f ?? 50,
                            ),
                                s === t.length - 1 && null != y && b(!0);
                        }, 60 * s),
                    )),
                    () => {
                        for (let e of t) clearTimeout(e);
                    }
                );
            }, [T, e, c, f, p, h, m, g, x, _, y]),
            (0, s.jsx)(l.K_, { ref: S, sprites: j ?? r.uI, colors: i ?? r._t, spriteWidth: r.wn, spriteHeight: r.wn })
        );
    });
