s.d(t, { A: () => h });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(43990),
    o = s(331322),
    c = s(534514),
    u = s(834730),
    d = s(770178),
    _ = s(652215),
    m = s(14233);
let h = l.forwardRef(function (e, t) {
    let { topContent: s, title: a, subtitle: h, buttons: x, background: f, className: E } = e,
        [p, g] = l.useState("display-lg"),
        A = l.useCallback((e) => {
            g(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        C = (0, d.w)(A, [], { fireOnMount: !0 });
    return (0, n.jsx)(i.N, {
        theme: _.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: r()(m.iE, e, E),
                ref: (e) => {
                    (C.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: m.FG,
                    children: [
                        (0, n.jsxs)(o.B, {
                            className: m.Qs,
                            direction: "vertical",
                            justify: null != s ? "space-between" : "end",
                            children: [
                                s,
                                (0, n.jsxs)(o.B, {
                                    className: m.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(o.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(c.D, {
                                                    color: "text-strong",
                                                    variant: p,
                                                    className: m.DD,
                                                    children: a,
                                                }),
                                                (0, n.jsx)(u.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: m.VA,
                                                    children: h,
                                                }),
                                            ],
                                        }),
                                        x,
                                    ],
                                }),
                            ],
                        }),
                        f,
                    ],
                }),
            }),
    });
});
