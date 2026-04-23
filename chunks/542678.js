a.d(t, { A: () => h });
var s = a(627968),
    l = a(64700),
    r = a(419354),
    i = a(311907),
    n = a(518009),
    c = a(717421),
    o = a(775602),
    d = a(503469);
let u = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    h = function (e) {
        let { animate: t, state: a, cleanUp: h, children: g } = e,
            A = (0, i.bG)([o.A], () => o.A.useReducedMotion),
            _ = l.useMemo(
                () =>
                    !1 === t || A
                        ? { opacity: 1 }
                        : a === n.wL.ENTERED || a === n.wL.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: u }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: u,
                                onRest: () => {
                                    h();
                                },
                            },
                [t, h, A, a],
            ),
            m = (0, c.z)(_);
        return (0, s.jsx)(r.animated.div, { style: m, className: d.Hp, children: g });
    };
