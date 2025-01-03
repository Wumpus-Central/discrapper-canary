var i = n(200651),
    r = n(192379),
    l = n(752877),
    a = n(442837),
    s = n(481060),
    o = n(607070),
    c = n(704839);
let d = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
};
t.Z = function (e) {
    let { animate: t, state: n, cleanUp: u, children: h } = e,
        m = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        p = r.useMemo(() => {
            var e, i, r;
            return (
                (e = !1 !== t && !m),
                (i = n),
                (r = u),
                e
                    ? i === s.TransitionStates.ENTERED || i === s.TransitionStates.MOUNTED
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
                                  r();
                              }
                          }
                    : { opacity: 1 }
            );
        }, [t, u, m, n]),
        g = (0, s.useSpring)(p);
    return (0, i.jsx)(l.animated.div, {
        style: g,
        className: c.transitionItem,
        children: h
    });
};
