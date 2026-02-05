a.d(t, { A: () => h });
var n = a(627968),
    i = a(64700),
    s = a(311907),
    l = a(397927),
    r = a(38181),
    o = a(767599),
    c = a(985018),
    d = a(471100),
    u = a(842503);
let h = function (e) {
    let { selectedCategoryId: t, searchAllCategories: a } = e,
        h = (0, s.bG)([r.A], () => r.A.getCategories()),
        m = i.useMemo(() => h.find((e) => e.id === t)?.name, [h, t]),
        p =
            t === o.lj || null == m
                ? c.intl.string(c.t["FVJt+8"])
                : c.intl.formatToPlainString(c.t.FjCaNB, { categoryName: m }),
        _ = t === o.lj ? c.intl.string(c.t.GXiMta) : c.intl.format(c.t.JaLoFF, { onClick: a });
    return (0, n.jsxs)("div", {
        className: d.kL,
        children: [
            (0, n.jsx)("img", { alt: "", src: u, className: d.Sl }),
            (0, n.jsx)(l.Heading, { variant: "heading-xl/semibold", className: d.wx, children: p }),
            (0, n.jsx)(l.Text, { variant: "text-md/normal", color: "text-default", children: _ }),
        ],
    });
};
