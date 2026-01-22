n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(747550),
    o = n(282026),
    c = n(997590),
    u = n(324580),
    d = n(985018),
    p = n(516616),
    f = n(842503);
let h = function (e) {
    let { loadId: t } = e,
        n = o.A.useField("categoryId"),
        h = (0, l.bG)([c.A], () => c.A.getCategoryName(n)),
        A = i.useCallback(() => {
            o.A.setState({ categoryId: u.Iq }),
                s.A.loadCategoryResults({
                    loadId: t,
                    categoryId: u.Iq,
                    query: o.A.getField("fetchedQuery"),
                    languageCode: o.A.getField("languageCode"),
                });
        }, [t]),
        g = n === u.Iq ? d.intl.string(d.t.Ivw1Is) : d.intl.formatToPlainString(d.t["+1WAFb"], { categoryName: h }),
        m = n === u.Iq ? d.intl.string(d.t.aXvEjd) : d.intl.format(d.t.XLioqn, { onClick: A });
    return (0, r.jsxs)("div", {
        className: p.kL,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: f,
                className: p.Sl,
            }),
            (0, r.jsx)(a.Heading, {
                variant: "heading-xl/semibold",
                className: p.wx,
                children: g,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: m,
            }),
        ],
    });
};
