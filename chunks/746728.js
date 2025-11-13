n.d(t, {
    I: () => h,
    Z: () => m,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(706454),
    c = n(959165),
    u = n(164991),
    d = n(783393),
    p = n(112471),
    f = n(803638);
function h(e) {
    let { categoryId: t, loadId: n } = e;
    u.Z.setState({ categoryId: t }),
        c.Z.loadCategoryResults({
            loadId: n,
            categoryId: t,
            query: u.Z.getField("fetchedQuery"),
            languageCode: u.Z.getField("languageCode"),
        });
}
function g(e) {
    let { loadId: t, categoryId: n, count: l } = e,
        c = i.useCallback(() => {
            h({
                categoryId: n,
                loadId: t,
            });
        }, [n, t]),
        p = u.Z.useField("categoryId") === n,
        g = l.toLocaleString(o.default.locale),
        m = (0, d.E)({ categoryId: n });
    return (0, r.jsxs)(s.P3F, {
        onClick: c,
        className: a()(f.category, { [f.selected]: p }),
        children: [
            (0, r.jsx)(s.Text, {
                className: f.name,
                variant: "text-sm/medium",
                color: "header-primary",
                children: m,
            }),
            (0, r.jsx)(s.Text, {
                className: f.count,
                variant: "text-sm/normal",
                color: "text-muted",
                children: g,
            }),
        ],
    });
}
let m = function (e) {
    let { loadId: t } = e,
        n = (0, p.q)();
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: f.categories,
              children: n.map((e) => {
                  let [n, i] = e;
                  return (0, r.jsx)(
                      g,
                      {
                          loadId: t,
                          categoryId: n,
                          count: i,
                      },
                      n,
                  );
              }),
          });
};
