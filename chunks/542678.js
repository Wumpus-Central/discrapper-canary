n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(108531),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    c = n(330640);
let u = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0,
    },
    d = function (e) {
        let { animate: t, state: n, cleanUp: d, children: p } = e,
            f = (0, a.bG)([o.A], () => o.A.useReducedMotion),
            h = i.useMemo(
                () =>
                    !1 === t || f
                        ? {
                              opacity: 1,
                          }
                        : n === s.wLy.ENTERED || n === s.wLy.MOUNTED
                          ? {
                                from: {
                                    opacity: 0,
                                },
                                to: {
                                    opacity: 1,
                                },
                                config: u,
                            }
                          : {
                                from: {
                                    opacity: 1,
                                },
                                to: {
                                    opacity: 0,
                                },
                                config: u,
                                onRest: () => {
                                    d();
                                },
                            },
                [t, d, f, n],
            ),
            A = (0, s.zhh)(h);
        return (0, r.jsx)(l.animated.div, {
            style: A,
            className: c.Hp,
            children: p,
        });
    };
