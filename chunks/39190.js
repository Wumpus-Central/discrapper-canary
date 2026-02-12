n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(985018),
    r = n(69940);
let o = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: o, children: c, showPageCount: d = !0, ...u } = e,
        _ = n >= s - 1,
        m = d
            ? l.intl.format(l.t.MtpIwg, { currentPage: n + 1, numPages: s })
            : l.intl.format(l.t.bKI77c, { currentPage: n + 1 });
    return (0, i.jsxs)("div", {
        ref: t,
        ...u,
        children: [
            c,
            (0, i.jsx)("div", {
                className: r.v,
                children: (0, i.jsxs)("div", {
                    className: r.U,
                    children: [
                        (0, i.jsx)(a.K0, {
                            variant: "icon-only",
                            icon: a.n2b,
                            disabled: n <= 0,
                            onClick: () => o(n - 1),
                            "aria-label": l.intl.string(l.t.vgfxaA),
                        }),
                        (0, i.jsx)(a.Text, { variant: "text-sm/medium", children: m }),
                        (0, i.jsx)(a.K0, {
                            variant: "icon-only",
                            icon: a._BQ,
                            disabled: _,
                            onClick: () => o(n + 1),
                            "aria-label": l.intl.string(l.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
