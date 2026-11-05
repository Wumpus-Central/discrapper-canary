var i = s(477900),
    a = s(582128),
    n = s(503698),
    c = s.n(n),
    r = s(120692),
    u = s(494012),
    h = s(717421),
    l = s(802859);
s.d(
    t,
    {},
    {
        N: function (e) {
            let { children: t, className: s, collapsibleContent: n, isExpanded: d } = e,
                [o, f] = a.useState(!1),
                [m, p] = a.useState(!0),
                [g, k] = a.useState(!1),
                v = d ?? o,
                [x, N] = a.useState(v);
            x !== v && (N(v), k(!1));
            let { ref: j, height: y = 0 } = (0, u.Ay)(),
                { ref: C, height: S = 0 } = (0, u.Ay)(),
                b = (0, h.z)(
                    { height: v ? y + S : S, config: r.config.stiff, onRest: () => k(!0) },
                    m ? "animate-never" : "respect-motion-settings",
                ),
                w = a.useCallback(() => {
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
                    className: c()(l.uR, { [l.$M]: v }, s),
                    children: (0, i.jsxs)(r.animated.div, {
                        className: c()(l.N0, { [l.Mm]: v && g }),
                        style: b,
                        children: [
                            (0, i.jsx)("div", {
                                ref: C,
                                className: c()(l.wx, { [l.$M]: v }),
                                children: t({ onClick: w }),
                            }),
                            (0, i.jsx)("div", { ref: j, inert: !v, children: n }),
                        ],
                    }),
                })
            );
        },
    },
);
