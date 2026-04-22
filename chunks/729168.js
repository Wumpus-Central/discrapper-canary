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
    m = s(652215),
    _ = s(789145);
let h = l.forwardRef(function (e, t) {
    let { topContent: s, title: a, subtitle: h, buttons: x, background: f, className: b } = e,
        [p, A] = l.useState("display-lg"),
        g = l.useCallback((e) => {
            A(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, d.w)(g, [], { fireOnMount: !0 });
    return (0, n.jsx)(i.N, {
        theme: m.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, n.jsx)("div", {
                className: r()(_.iE, e, b),
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, n.jsxs)("div", {
                    className: _.FG,
                    children: [
                        (0, n.jsxs)(o.B, {
                            className: _.Qs,
                            direction: "vertical",
                            justify: null != s ? "space-between" : "end",
                            children: [
                                s,
                                (0, n.jsxs)(o.B, {
                                    className: _.yp,
                                    gap: 16,
                                    children: [
                                        (0, n.jsxs)(o.B, {
                                            gap: 8,
                                            children: [
                                                (0, n.jsx)(c.D, {
                                                    color: "text-strong",
                                                    variant: p,
                                                    className: _.DD,
                                                    children: a,
                                                }),
                                                (0, n.jsx)(u.E, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: _.VA,
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
