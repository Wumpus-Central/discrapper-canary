n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(985018),
    l = n(69940);
let o = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: o, children: c, showPageCount: d = !0, ...u } = e,
        _ = n >= s - 1,
        m = d
            ? a.intl.format(a.t.MtpIwg, { currentPage: n + 1, numPages: s })
            : a.intl.format(a.t.bKI77c, { currentPage: n + 1 });
    return (0, i.jsxs)("div", {
        ref: t,
        ...u,
        children: [
            c,
            (0, i.jsx)("div", {
                className: l.v,
                children: (0, i.jsxs)("div", {
                    className: l.U,
                    children: [
                        (0, i.jsx)(r.K0, {
                            variant: "icon-only",
                            icon: r.n2b,
                            disabled: n <= 0,
                            onClick: () => o(n - 1),
                            "aria-label": a.intl.string(a.t.vgfxaA),
                        }),
                        (0, i.jsx)(r.Text, { variant: "text-sm/medium", children: m }),
                        (0, i.jsx)(r.K0, {
                            variant: "icon-only",
                            icon: r._BQ,
                            disabled: _,
                            onClick: () => o(n + 1),
                            "aria-label": a.intl.string(a.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
