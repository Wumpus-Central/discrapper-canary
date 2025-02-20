n.d(t, {
    V: () => f,
    Z: () => _
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(894653),
    d = n(34674),
    u = n(89182),
    p = n(706454),
    m = n(388032),
    h = n(744806);
function g(e) {
    let { category: t, count: n, onSelectCategory: i, selected: o } = e,
        c = a.useCallback(() => {
            i(t.id);
        }, [t.id, i]),
        d = n.toLocaleString(p.default.locale);
    return (0, r.jsxs)(s.P3F, {
        onClick: c,
        className: l()(h.category, { [h.selected]: o }),
        children: [
            (0, r.jsx)(s.Text, {
                className: h.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, r.jsx)(s.Text, {
                className: h.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function _(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: i } = e,
        l = (0, o.e7)([c.Z], () => c.Z.getCategories()),
        s = a.useMemo(
            () => [
                (0, d.KQ)(),
                ...l.filter((e) => {
                    var n;
                    return (null !== (n = t[e.id]) && void 0 !== n ? n : 0) !== 0;
                })
            ],
            [l, t]
        );
    return 0 === s.length
        ? null
        : (0, r.jsx)('div', {
              className: h.categories,
              children: s.map((e) => {
                  var a;
                  let l = e.id,
                      o = null !== (a = t[l]) && void 0 !== a ? a : 0;
                  return (0, r.jsx)(
                      g,
                      {
                          category: e,
                          count: o,
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
        p = (0, o.e7)([c.Z], () => c.Z.getCategories()),
        g = a.useMemo(
            () => [
                (0, d.KQ)(),
                ...p.filter((e) => {
                    var t;
                    return (null !== (t = n[e.id]) && void 0 !== t ? t : 0) !== 0;
                })
            ],
            [p, n]
        ),
        _ = a.useMemo(
            () =>
                g.map((e) => ({
                    id: ''.concat(e.id),
                    label: (0, r.jsx)(u.iG, {
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
        v = a.useMemo(() => g.find((e) => e.id === l), [l, g]);
    return 0 === _.length
        ? null
        : (0, r.jsxs)('div', {
              className: h.container,
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: m.NW.string(m.t.f09BQE)
                  }),
                  (0, r.jsx)(u.ZP, {
                      items: _,
                      title: null !== (t = null == v ? void 0 : v.name) && void 0 !== t ? t : '',
                      onSelect: f,
                      selected: ''.concat(l),
                      'aria-label': m.NW.string(m.t.WHdCwc),
                      variant: u.PA.FILLED
                  })
              ]
          });
}
