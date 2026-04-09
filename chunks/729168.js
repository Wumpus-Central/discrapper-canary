n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(397927),
    o = n(770178),
    d = n(652215),
    c = n(192164);
let u = r.forwardRef(function (e, t) {
    let { topContent: n, title: a, subtitle: u, buttons: A, background: h, className: _ } = e,
        [m, p] = r.useState("display-lg"),
        g = r.useCallback((e) => {
            p(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        E = (0, o.w)(g, [], { fireOnMount: !0 });
    return (0, i.jsx)(s.NPJ, {
        theme: d.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, i.jsx)("div", {
                className: l()(c.iE, e, _),
                ref: (e) => {
                    (E.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
                },
                children: (0, i.jsxs)("div", {
                    className: c.FG,
                    children: [
                        (0, i.jsxs)(s.BJc, {
                            className: c.Qs,
                            direction: "vertical",
                            justify: null != n ? "space-between" : "end",
                            children: [
                                n,
                                (0, i.jsxs)(s.BJc, {
                                    className: c.yp,
                                    gap: 16,
                                    children: [
                                        (0, i.jsxs)(s.BJc, {
                                            gap: 8,
                                            children: [
                                                (0, i.jsx)(s.Heading, {
                                                    color: "text-strong",
                                                    variant: m,
                                                    className: c.DD,
                                                    children: a,
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    color: "text-strong",
                                                    variant: "text-md/normal",
                                                    className: c.VA,
                                                    children: u,
                                                }),
                                            ],
                                        }),
                                        A,
                                    ],
                                }),
                            ],
                        }),
                        h,
                    ],
                }),
            }),
    });
});
