n.d(t, { A: () => c });
var i = n(477900),
    s = n(582128),
    l = n(408278),
    r = n(921853),
    a = n(834730),
    o = n(320448),
    u = n(375708),
    d = n(22306);
let c = s.forwardRef(function (e, t) {
    let { currentPageIndex: n, numPages: s, onChangePage: c, children: g, showPageCount: m = !0, ...A } = e,
        E = n >= s - 1,
        h = m
            ? u.intl.format(u.t.MtpIwg, { currentPage: n + 1, numPages: s })
            : u.intl.format(u.t.bKI77c, { currentPage: n + 1 });
    return (0, i.jsxs)("div", {
        ref: t,
        ...A,
        children: [
            g,
            (0, i.jsx)("div", {
                className: d.v,
                children: (0, i.jsxs)("div", {
                    className: d.U,
                    children: [
                        (0, i.jsx)(l.K, {
                            variant: "icon-only",
                            icon: r.n,
                            disabled: n <= 0,
                            onClick: () => c(n - 1),
                            "aria-label": u.intl.string(u.t.vgfxaA),
                        }),
                        (0, i.jsx)(a.E, { variant: "text-sm/medium", children: h }),
                        (0, i.jsx)(l.K, {
                            variant: "icon-only",
                            icon: o._,
                            disabled: E,
                            onClick: () => c(n + 1),
                            "aria-label": u.intl.string(u.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
});
