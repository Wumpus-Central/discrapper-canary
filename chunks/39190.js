n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(408278),
    a = n(921853),
    r = n(834730),
    o = n(320448),
    d = n(985018),
    u = n(632787);
let c = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: c, children: g, showPageCount: m = !0, ..._ } = e,
        A = n >= s - 1,
        h = m
            ? d.intl.format(d.t.MtpIwg, { currentPage: n + 1, numPages: s })
            : d.intl.format(d.t.bKI77c, { currentPage: n + 1 });
    return (0, i.jsxs)("div", {
        ref: t,
        ..._,
        children: [
            g,
            (0, i.jsx)("div", {
                className: u.v,
                children: (0, i.jsxs)("div", {
                    className: u.U,
                    children: [
                        (0, i.jsx)(l.K, {
                            variant: "icon-only",
                            icon: a.n,
                            disabled: n <= 0,
                            onClick: () => c(n - 1),
                            "aria-label": d.intl.string(d.t.vgfxaA),
                        }),
                        (0, i.jsx)(r.E, { variant: "text-sm/medium", children: h }),
                        (0, i.jsx)(l.K, {
                            variant: "icon-only",
                            icon: o._,
                            disabled: A,
                            onClick: () => c(n + 1),
                            "aria-label": d.intl.string(d.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
