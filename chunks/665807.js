n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(959165),
    o = n(164991),
    c = n(526429),
    u = n(128449),
    d = n(388032),
    p = n(394843),
    f = n(882008);
let m = function (e) {
    let { loadId: t } = e,
        n = o.Z.useField("categoryId"),
        m = (0, l.e7)([c.Z], () => c.Z.getCategoryName(n)),
        h = i.useCallback(() => {
            o.Z.setState({ categoryId: u.Hk }),
                s.Z.loadCategoryResults({
                    loadId: t,
                    categoryId: u.Hk,
                    query: o.Z.getField("fetchedQuery"),
                    languageCode: o.Z.getField("languageCode"),
                });
        }, [t]),
        g = n === u.Hk ? d.intl.string(d.t.Ivw1Is) : d.intl.formatToPlainString(d.t["+1WAFb"], { categoryName: m }),
        _ = n === u.Hk ? d.intl.string(d.t.aXvEjd) : d.intl.format(d.t.XLioqn, { onClick: h });
    return (0, r.jsxs)("div", {
        className: p.container,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: f,
                className: p.image,
            }),
            (0, r.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                className: p.header,
                children: g,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: _,
            }),
        ],
    });
};
