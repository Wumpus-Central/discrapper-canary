n.d(t, {
    I: () => p,
    Z: () => _
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(706454),
    c = n(959165),
    d = n(164991),
    u = n(783393),
    h = n(112471),
    m = n(196684);
function p(e) {
    let { categoryId: t, loadId: n } = e;
    d.Z.setState({ categoryId: t }),
        c.Z.loadCategoryResults({
            loadId: n,
            categoryId: t,
            query: d.Z.getField('fetchedQuery'),
            languageCode: d.Z.getField('languageCode')
        });
}
function g(e) {
    let { loadId: t, categoryId: n, count: r } = e,
        c = l.useCallback(() => {
            p({
                categoryId: n,
                loadId: t
            });
        }, [n, t]),
        h = d.Z.useField('categoryId') === n,
        g = r.toLocaleString(o.default.locale),
        _ = (0, u.E)({ categoryId: n });
    return (0, i.jsxs)(s.P3F, {
        onClick: c,
        className: a()(m.category, { [m.selected]: h }),
        children: [
            (0, i.jsx)(s.Text, {
                className: m.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: _
            }),
            (0, i.jsx)(s.Text, {
                className: m.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: g
            })
        ]
    });
}
let _ = function (e) {
    let { loadId: t } = e,
        n = (0, h.q)();
    return null == n
        ? null
        : (0, i.jsx)('div', {
              className: m.categories,
              children: n.map((e) => {
                  let [n, l] = e;
                  return (0, i.jsx)(
                      g,
                      {
                          loadId: t,
                          categoryId: n,
                          count: l
                      },
                      n
                  );
              })
          });
};
