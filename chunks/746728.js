n.d(t, {
    I: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
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
    let { loadId: t, categoryId: n, count: l } = e,
        c = r.useCallback(() => {
            p({
                categoryId: n,
                loadId: t
            });
        }, [n, t]),
        h = d.Z.useField('categoryId') === n,
        g = l.toLocaleString(o.default.locale),
        f = (0, u.E)({ categoryId: n });
    return (0, i.jsxs)(s.Clickable, {
        onClick: c,
        className: a()(m.category, { [m.selected]: h }),
        children: [
            (0, i.jsx)(s.Text, {
                className: m.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: f
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
t.Z = function (e) {
    let { loadId: t } = e,
        n = (0, h.q)();
    return null == n
        ? null
        : (0, i.jsx)('div', {
              className: m.categories,
              children: n.map((e) => {
                  let [n, r] = e;
                  return (0, i.jsx)(
                      g,
                      {
                          loadId: t,
                          categoryId: n,
                          count: r
                      },
                      n
                  );
              })
          });
};
