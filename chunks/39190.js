n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var s = n(408278),
    l = n(921853),
    r = n(834730),
    a = n(320448),
    o = n(105292),
    u = n(22306);
function d(e) {
    let { currentPageIndex: t, numPages: n, onChangePage: d, children: c, showPageCount: g = !0, ref: m, ...A } = e,
        E = t >= n - 1,
        h = g
            ? o.intl.format(o.t.MtpIwg, { currentPage: t + 1, numPages: n })
            : o.intl.format(o.t.bKI77c, { currentPage: t + 1 });
    return (0, i.jsxs)("div", {
        ref: m,
        ...A,
        children: [
            c,
            (0, i.jsx)("div", {
                className: u.v,
                children: (0, i.jsxs)("div", {
                    className: u.U,
                    children: [
                        (0, i.jsx)(s.K, {
                            variant: "icon-only",
                            icon: l.n,
                            disabled: t <= 0,
                            onClick: () => d(t - 1),
                            "aria-label": o.intl.string(o.t.vgfxaA),
                        }),
                        (0, i.jsx)(r.E, { variant: "text-sm/medium", children: h }),
                        (0, i.jsx)(s.K, {
                            variant: "icon-only",
                            icon: a._,
                            disabled: E,
                            onClick: () => d(t + 1),
                            "aria-label": o.intl.string(o.t.XiOHRX),
                        }),
                    ],
                }),
            }),
        ],
    });
}
