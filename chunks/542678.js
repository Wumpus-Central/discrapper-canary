n.d(t, { A: () => u });
var i = n(627968),
    a = n(64700),
    l = n(382222),
    r = n(311907),
    s = n(397927),
    o = n(775602),
    d = n(569181);
let c = { mass: 1, tension: 600, friction: 60, clamp: !0 },
    u = function (e) {
        let { animate: t, state: n, cleanUp: u, children: A } = e,
            h = (0, r.bG)([o.A], () => o.A.useReducedMotion),
            _ = a.useMemo(
                () =>
                    !1 === t || h
                        ? { opacity: 1 }
                        : n === s.wLy.ENTERED || n === s.wLy.MOUNTED
                          ? { from: { opacity: 0 }, to: { opacity: 1 }, config: c }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: c,
                                onRest: () => {
                                    u();
                                },
                            },
                [t, u, h, n],
            ),
            m = (0, s.zhh)(_);
        return (0, i.jsx)(l.animated.div, { style: m, className: d.Hp, children: A });
    };
