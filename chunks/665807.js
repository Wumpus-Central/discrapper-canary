n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(959165),
    s = n(164991),
    c = n(526429),
    u = n(128449),
    d = n(388032),
    p = n(831686),
    f = n(882008);
let g = function (e) {
    let { loadId: t } = e,
        n = s.Z.useField("categoryId"),
        g = (0, l.e7)([c.Z], () => c.Z.getCategoryName(n)),
        h = i.useCallback(() => {
            s.Z.setState({ categoryId: u.Hk }),
                o.Z.loadCategoryResults({
                    loadId: t,
                    categoryId: u.Hk,
                    query: s.Z.getField("fetchedQuery"),
                    languageCode: s.Z.getField("languageCode"),
                });
        }, [t]),
        m = n === u.Hk ? d.intl.string(d.t.Ivw1Is) : d.intl.formatToPlainString(d.t["+1WAFb"], { categoryName: g }),
        b = n === u.Hk ? d.intl.string(d.t.aXvEjd) : d.intl.format(d.t.XLioqn, { onClick: h });
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
                children: m,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: b,
            }),
        ],
    });
};
