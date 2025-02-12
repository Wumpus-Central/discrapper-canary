n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    r = n(642128),
    a = n(442837),
    s = n(481060),
    o = n(607070),
    c = n(454008);
let d = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0
    },
    u = function (e) {
        let { animate: t, state: n, cleanUp: u, children: h } = e,
            m = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
            p = l.useMemo(
                () =>
                    !1 === t || m
                        ? { opacity: 1 }
                        : n === s.pJH.ENTERED || n === s.pJH.MOUNTED
                          ? {
                                from: { opacity: 0 },
                                to: { opacity: 1 },
                                config: d
                            }
                          : {
                                from: { opacity: 1 },
                                to: { opacity: 0 },
                                config: d,
                                onRest: () => {
                                    u();
                                }
                            },
                [t, u, m, n]
            ),
            g = (0, s.q_F)(p);
        return (0, i.jsx)(r.animated.div, {
            style: g,
            className: c.transitionItem,
            children: h
        });
    };
