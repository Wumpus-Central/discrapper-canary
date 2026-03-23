n.d(t, { A: () => o });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(985018),
    r = n(69940);
let o = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: o, children: d, showPageCount: c = !0, ...u } = e,
        _ = n >= s - 1,
        m = c
            ? a.intl.format(a.t.MtpIwg, { currentPage: n + 1, numPages: s })
            : a.intl.format(a.t.bKI77c, { currentPage: n + 1 });
    return (0, i.jsxs)("div", {
        ref: t,
        ...u,
        children: [
            d,
            (0, i.jsx)("div", {
                className: r.v,
                children: (0, i.jsxs)("div", {
                    className: r.U,
                    children: [
                        (0, i.jsx)(l.K0, {
                            variant: "icon-only",
                            icon: l.n2b,
                            disabled: n <= 0,
                            onClick: () => o(n - 1),
                            "aria-label": a.intl.string(a.t.vgfxaA),
                        }),
                        (0, i.jsx)(l.Text, { variant: "text-sm/medium", children: m }),
                        (0, i.jsx)(l.K0, {
                            variant: "icon-only",
                            icon: l._BQ,
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
