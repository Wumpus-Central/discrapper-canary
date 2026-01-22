n.d(t, { A: () => p });
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(397927),
    s = n(38181),
    c = n(767599),
    o = n(985018),
    d = n(471100),
    u = n(842503);
let p = function (e) {
    let { selectedCategoryId: t, searchAllCategories: n } = e,
        p = (0, r.bG)([s.A], () => s.A.getCategories()),
        h = a.useMemo(() => {
            var e;
            return null == (e = p.find((e) => e.id === t)) ? void 0 : e.name;
        }, [p, t]),
        m =
            t === c.lj || null == h
                ? o.intl.string(o.t["FVJt+8"])
                : o.intl.formatToPlainString(o.t.FjCaNB, { categoryName: h }),
        b = t === c.lj ? o.intl.string(o.t.GXiMta) : o.intl.format(o.t.JaLoFF, { onClick: n });
    return (0, l.jsxs)("div", {
        className: d.kL,
        children: [
            (0, l.jsx)("img", {
                alt: "",
                src: u,
                className: d.Sl,
            }),
            (0, l.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                className: d.wx,
                children: m,
            }),
            (0, l.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: b,
            }),
        ],
    });
};
