s.d(t, { N: () => l });
var i = s(627968),
    a = s(64700),
    n = s(503698),
    c = s.n(n),
    r = s(785651),
    u = s(717421),
    h = s(765671),
    d = s(205977);
function l(e) {
    let { children: t, className: s, collapsibleContent: n, isExpanded: l } = e,
        [o, f] = a.useState(!1),
        [m, p] = a.useState(!0),
        [g, k] = a.useState(!1),
        v = l ?? o,
        { ref: x, height: N = 0 } = (0, h.Ay)(),
        { ref: j, height: y = 0 } = (0, h.Ay)(),
        C = (0, u.z)(
            { height: v ? N + y : y, config: r.config.stiff, onRest: () => k(!0) },
            m ? "animate-never" : "respect-motion-settings",
        ),
        b = a.useCallback(() => {
            f(!o);
        }, [o, f]);
    return (
        a.useLayoutEffect(() => {
            let e = setTimeout(() => {
                p(!1);
            }, 100);
            return () => clearTimeout(e);
        }, []),
        (0, i.jsx)("div", {
            className: c()(d.uR, { [d.$M]: v }, s),
            children: (0, i.jsxs)(r.animated.div, {
                className: c()(d.N0, { [d.Mm]: v && g }),
                style: C,
                children: [
                    (0, i.jsx)("div", { ref: j, className: c()(d.wx, { [d.$M]: v }), children: t({ onClick: b }) }),
                    (0, i.jsx)("div", { ref: x, inert: !v, children: n }),
                ],
            }),
        })
    );
}
