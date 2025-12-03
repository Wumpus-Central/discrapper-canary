n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    l = n(481060),
    s = n(678694),
    o = n(216780),
    c = n(388032),
    d = n(188399),
    u = n(882008);
let p = function (e) {
    let { selectedCategoryId: t, searchAllCategories: n } = e,
        p = (0, a.e7)([s.Z], () => s.Z.getCategories()),
        m = i.useMemo(() => {
            var e;
            return null == (e = p.find((e) => e.id === t)) ? void 0 : e.name;
        }, [p, t]),
        h =
            t === o.MU || null == m
                ? c.intl.string(c.t["FVJt+8"])
                : c.intl.formatToPlainString(c.t.FjCaNB, { categoryName: m }),
        g = t === o.MU ? c.intl.string(c.t.GXiMta) : c.intl.format(c.t.JaLoFF, { onClick: n });
    return (0, r.jsxs)("div", {
        className: d.container,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: u,
                className: d.image,
            }),
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                className: d.header,
                children: h,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: g,
            }),
        ],
    });
};
