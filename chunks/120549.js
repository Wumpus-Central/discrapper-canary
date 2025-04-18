n.d(t, {
    V: () => f,
    Z: () => _
}),
    n(388685);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(89182),
    d = n(706454),
    u = n(678694),
    p = n(216780),
    m = n(388032),
    h = n(969507);
function g(e) {
    let { category: t, count: n, onSelectCategory: i, selected: s } = e,
        c = a.useCallback(() => {
            i(t.id);
        }, [t.id, i]),
        u = n.toLocaleString(d.default.locale);
    return (0, r.jsxs)(o.P3F, {
        onClick: c,
        className: l()(h.category, { [h.selected]: s }),
        children: [
            (0, r.jsx)(o.Text, {
                className: h.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, r.jsx)(o.Text, {
                className: h.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: u
            })
        ]
    });
}
function _(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: i } = e,
        l = (0, s.e7)([u.Z], () => u.Z.getCategories()),
        o = a.useMemo(
            () => [
                (0, p.KQ)(),
                ...l.filter((e) => {
                    var n;
                    return (null != (n = t[e.id]) ? n : 0) !== 0;
                })
            ],
            [l, t]
        );
    return 0 === o.length
        ? null
        : (0, r.jsx)('div', {
              className: h.categories,
              children: o.map((e) => {
                  var a;
                  let l = e.id,
                      s = null != (a = t[l]) ? a : 0;
                  return (0, r.jsx)(
                      g,
                      {
                          category: e,
                          count: s,
                          selected: l === i,
                          onSelectCategory: () => n(e)
                      },
                      l
                  );
              })
          });
}
function f(e) {
    var t;
    let { countsByCategory: n, onSelectCategory: i, selectedCategoryId: l } = e,
        d = (0, s.e7)([u.Z], () => u.Z.getCategories()),
        g = a.useMemo(
            () => [
                (0, p.KQ)(),
                ...d.filter((e) => {
                    var t;
                    return (null != (t = n[e.id]) ? t : 0) !== 0;
                })
            ],
            [d, n]
        ),
        _ = a.useMemo(
            () =>
                g.map((e) => ({
                    id: ''.concat(e.id),
                    label: (0, r.jsx)(c.iG, {
                        count: n[e.id],
                        name: e.name
                    })
                })),
            [g, n]
        ),
        f = a.useCallback(
            (e) => {
                let t = g.find((t) => t.id === Number(e));
                null != t && i(t);
            },
            [i, g]
        ),
        b = a.useMemo(() => g.find((e) => e.id === l), [l, g]);
    return 0 === _.length
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: m.NW.string(m.t.f09BQE)
                  }),
                  (0, r.jsx)(c.ZP, {
                      items: _,
                      title: null != (t = null == b ? void 0 : b.name) ? t : '',
                      onSelect: f,
                      selected: ''.concat(l),
                      'aria-label': m.NW.string(m.t.WHdCwc),
                      variant: c.PA.FILLED
                  })
              ]
          });
}
