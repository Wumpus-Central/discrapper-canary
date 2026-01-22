n.d(t, { U: () => d });
var r = n(627968),
    i = n(158954),
    a = n(311907),
    s = n(287809),
    o = n(5661),
    l = n(161319),
    c = n(985018),
    u = n(74019);
let d = (e) => {
    let { percentage: t } = e,
        n = new Date(),
        d = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(),
        f = (0, a.bG)([s.default], () => s.default.getCurrentUser()),
        p = null == f ? void 0 : f.isFractionalPremiumWithNoStandardSub();
    return (0, r.jsxs)("div", {
        className: u.k,
        children: [
            (0, r.jsx)(i.EYj, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: p ? c.intl.string(c.t.E1ONHQ) : c.intl.format(c.t["43kZKL"], { days: d - n.getDate() }),
            }),
            !1 === p && (0, r.jsx)(l.PR, { percentage: t }),
            (0, r.jsx)(o.G, {}),
        ],
    });
};
