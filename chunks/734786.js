a.d(t, { A: () => m });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(534514),
    r = a(834730),
    o = a(38181),
    c = a(767599),
    d = a(985018),
    u = a(678871),
    h = a(842503);
let m = function (e) {
    let { selectedCategoryId: t, searchAllCategories: a } = e,
        m = (0, i.bG)([o.A], () => o.A.getCategories()),
        p = l.useMemo(() => m.find((e) => e.id === t)?.name, [m, t]),
        _ =
            t === c.lj || null == p
                ? d.intl.string(d.t["FVJt+8"])
                : d.intl.formatToPlainString(d.t.FjCaNB, { categoryName: p }),
        g = t === c.lj ? d.intl.string(d.t.GXiMta) : d.intl.format(d.t.JaLoFF, { onClick: a });
    return (0, n.jsxs)("div", {
        className: u.kL,
        children: [
            (0, n.jsx)("img", { alt: "", src: h, className: u.Sl }),
            (0, n.jsx)(s.D, { variant: "heading-xl/semibold", className: u.wx, children: _ }),
            (0, n.jsx)(r.E, { variant: "text-md/normal", color: "text-default", children: g }),
        ],
    });
};
