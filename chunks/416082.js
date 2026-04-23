a.d(t, { A: () => _ });
var s = a(627968),
    l = a(64700),
    r = a(311907),
    i = a(534514),
    n = a(834730),
    c = a(747550),
    o = a(282026),
    d = a(997590),
    u = a(324580),
    h = a(985018),
    g = a(922985),
    A = a(842503);
let _ = function (e) {
    let { loadId: t } = e,
        a = o.A.useField("categoryId"),
        _ = (0, r.bG)([d.A], () => d.A.getCategoryName(a)),
        m = l.useCallback(() => {
            o.A.setState({ categoryId: u.Iq }),
                c.A.loadCategoryResults({
                    loadId: t,
                    categoryId: u.Iq,
                    query: o.A.getField("fetchedQuery"),
                    languageCode: o.A.getField("languageCode"),
                });
        }, [t]),
        C = a === u.Iq ? h.intl.string(h.t.Ivw1Is) : h.intl.formatToPlainString(h.t["+1WAFb"], { categoryName: _ }),
        f = a === u.Iq ? h.intl.string(h.t.aXvEjd) : h.intl.format(h.t.XLioqn, { onClick: m });
    return (0, s.jsxs)("div", {
        className: g.kL,
        children: [
            (0, s.jsx)("img", { alt: "", src: A, className: g.Sl }),
            (0, s.jsx)(i.D, { variant: "heading-xl/semibold", className: g.wx, children: C }),
            (0, s.jsx)(n.E, { variant: "text-md/normal", color: "text-default", children: f }),
        ],
    });
};
