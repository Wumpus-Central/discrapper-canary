n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    l = n(81239),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    c = n(674633);
let u = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0,
    },
    d = function (e) {
        let { animate: t, state: n, cleanUp: d, children: p } = e,
            f = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
            g = i.useMemo(
                () =>
                    !1 === t || f
                        ? { opacity: 1 }
                        : n === o.pJH.ENTERED || n === o.pJH.MOUNTED
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
            h = (0, o.q_F)(g);
        return (0, r.jsx)(l.animated.div, {
            style: h,
            className: c.transitionItem,
            children: p,
        });
    };
