n.d(t, { N: () => m });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(419354),
    o = n(717421),
    c = n(247928),
    d = n(765671),
    u = n(205977);
function m(e) {
    let { children: t, className: n, collapsibleContent: a, isExpanded: m } = e,
        [p, h] = i.useState(!1),
        [_, A] = i.useState(!0),
        [f, x] = i.useState(!1),
        E = m ?? p,
        { ref: C, height: N = 0 } = (0, d.Ay)(),
        { ref: g, height: b = 0 } = (0, d.Ay)(),
        v = (0, o.z)(
            { height: E ? N + b : b, config: r.config.stiff, onRest: () => x(!0) },
            _ ? "animate-never" : "respect-motion-settings",
        ),
        I = i.useCallback(() => {
            h(!p);
        }, [p, h]);
    return (
        i.useLayoutEffect(() => {
            let e = setTimeout(() => {
                A(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, l.jsx)("div", {
            className: s()(u.uR, { [u.$M]: E }, n),
            children: (0, l.jsxs)(r.animated.div, {
                className: s()(u.N0, { [u.Mm]: E && f }),
                style: v,
                children: [
                    (0, l.jsx)("div", { ref: g, className: s()(u.wx, { [u.$M]: E }), children: t({ onClick: I }) }),
                    (0, l.jsx)(c.M, {
                        enabled: !E,
                        children: (0, l.jsx)("div", { ref: C, "aria-hidden": !E, children: a }),
                    }),
                ],
            }),
        })
    );
}
