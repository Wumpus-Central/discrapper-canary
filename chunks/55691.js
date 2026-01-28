n.d(t, {
    U: () => u,
});
var r = n(627968),
    i = n(158954),
    l = n(311907),
    s = n(287809),
    a = n(5661),
    o = n(161319),
    c = n(985018),
    d = n(74019);
let u = (e) => {
    let { percentage: t } = e,
        n = new Date(),
        u = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(),
        _ = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        p = null == _ ? void 0 : _.isFractionalPremiumWithNoStandardSub();
    return (0, r.jsxs)("div", {
        className: d.k,
        children: [
            (0, r.jsx)(i.EYj, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: p
                    ? c.intl.string(c.t.E1ONHQ)
                    : c.intl.format(c.t["43kZKL"], {
                          days: u - n.getDate(),
                      }),
            }),
            !1 === p &&
                (0, r.jsx)(o.PR, {
                    percentage: t,
                }),
            (0, r.jsx)("div", {
                className: d.Z,
                children: (0, r.jsx)(a.G, {}),
            }),
        ],
    });
};
