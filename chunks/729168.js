n.d(t, { A: () => c });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(397927),
    o = n(770178),
    d = n(311401);
let c = a.forwardRef(function (e, t) {
    let { topContent: n, title: l, subtitle: c, buttons: u, background: A, className: h } = e,
        [_, m] = a.useState("display-lg"),
        g = a.useCallback((e) => {
            m(e.contentRect.width < 500 ? "display-md" : "display-lg");
        }, []),
        p = (0, o.w)(g, [], { fireOnMount: !0 });
    return (0, i.jsx)("div", {
        className: r()(d.iE, "theme-midnight", h),
        ref: (e) => {
            (p.current = e), "function" == typeof t ? t(e) : null != t && (t.current = e);
        },
        children: (0, i.jsxs)("div", {
            className: d.FG,
            children: [
                (0, i.jsxs)(s.BJc, {
                    className: d.Qs,
                    direction: "vertical",
                    justify: null != n ? "space-between" : "end",
                    children: [
                        n,
                        (0, i.jsxs)(s.BJc, {
                            className: d.yp,
                            gap: 16,
                            children: [
                                (0, i.jsxs)(s.BJc, {
                                    gap: 8,
                                    children: [
                                        (0, i.jsx)(s.Heading, {
                                            color: "text-strong",
                                            variant: _,
                                            className: d.DD,
                                            children: l,
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            color: "text-strong",
                                            variant: "text-md/normal",
                                            className: d.VA,
                                            children: c,
                                        }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                }),
                A,
            ],
        }),
    });
});
