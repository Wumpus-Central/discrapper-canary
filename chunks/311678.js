n.d(t, { N: () => N });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    T = n.n(l),
    I = n(517738),
    E = n(717421),
    o = n(247928),
    a = n(765671),
    s = n(205977);
function N(e) {
    let { children: t, className: n, collapsibleContent: l, isExpanded: N } = e,
        [u, c] = r.useState(!1),
        [S, d] = r.useState(!0),
        [_, h] = r.useState(!1),
        O = N ?? u,
        { ref: A, height: p = 0 } = (0, a.Ay)(),
        { ref: G, height: f = 0 } = (0, a.Ay)(),
        R = (0, E.z)(
            { height: O ? p + f : f, config: I.config.stiff, onRest: () => h(!0) },
            S ? "animate-never" : "respect-motion-settings",
        ),
        g = r.useCallback(() => {
            c(!u);
        }, [u, c]);
    return (
        r.useLayoutEffect(() => {
            let e = setTimeout(() => {
                d(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)("div", {
            className: T()(s.uR, { [s.$M]: O }, n),
            children: (0, i.jsxs)(I.animated.div, {
                className: T()(s.N0, { [s.Mm]: O && _ }),
                style: R,
                children: [
                    (0, i.jsx)("div", { ref: G, className: T()(s.wx, { [s.$M]: O }), children: t({ onClick: g }) }),
                    (0, i.jsx)(o.M, {
                        enabled: !O,
                        children: (0, i.jsx)("div", { ref: A, "aria-hidden": !O, children: l }),
                    }),
                ],
            }),
        })
    );
}
