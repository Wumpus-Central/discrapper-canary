n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(205120),
    a = n(442837),
    s = n(481060),
    o = n(607070),
    c = n(514482);
let u = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0,
    },
    d = function (e) {
        let { animate: t, state: n, cleanUp: d, children: p } = e,
            f = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
            h = i.useMemo(
                () =>
                    !1 === t || f
                        ? { opacity: 1 }
                        : n === s.pJH.ENTERED || n === s.pJH.MOUNTED
                          ? {
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: u,
                            }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: u,
                                onRest: () => {
                                    d();
                                },
                            },
                [t, d, f, n],
            ),
            g = (0, s.q_F)(h);
        return (0, r.jsx)(l.animated.div, {
            style: g,
            className: c.transitionItem,
            children: p,
        });
    };
