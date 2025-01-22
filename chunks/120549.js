n.d(t, {
    V: function () {
        return x;
    },
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(894653),
    d = n(34674),
    u = n(89182),
    m = n(706454),
    p = n(388032),
    h = n(968654);
function g(e) {
    let { category: t, count: n, onSelectCategory: r, selected: o } = e,
        c = a.useCallback(() => {
            r(t.id);
        }, [t.id, r]),
        d = n.toLocaleString(m.default.locale);
    return (0, i.jsxs)(s.Clickable, {
        onClick: c,
        className: l()(h.category, { [h.selected]: o }),
        children: [
            (0, i.jsx)(s.Text, {
                className: h.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, i.jsx)(s.Text, {
                className: h.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function C(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: r } = e,
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
        : (0, i.jsx)('div', {
              className: h.categories,
              children: s.map((e) => {
                  var a;
                  let l = e.id,
                      o = null !== (a = t[l]) && void 0 !== a ? a : 0;
                  return (0, i.jsx)(
                      g,
                      {
                          category: e,
                          count: o,
                          selected: l === r,
                          onSelectCategory: () => n(e)
                      },
                      l
                  );
              })
          });
}
function x(e) {
    var t;
    let { countsByCategory: n, onSelectCategory: r, selectedCategoryId: l } = e,
        m = (0, o.e7)([c.Z], () => c.Z.getCategories()),
        g = a.useMemo(
            () => [
                (0, d.KQ)(),
                ...m.filter((e) => {
                    var t;
                    return (null !== (t = n[e.id]) && void 0 !== t ? t : 0) !== 0;
                })
            ],
            [m, n]
        ),
        C = a.useMemo(
            () =>
                g.map((e) => ({
                    id: ''.concat(e.id),
                    label: (0, i.jsx)(u.iG, {
                        count: n[e.id],
                        name: e.name
                    })
                })),
            [g, n]
        ),
        x = a.useCallback(
            (e) => {
                let t = g.find((t) => t.id === Number(e));
                null != t && r(t);
            },
            [r, g]
        ),
        v = a.useMemo(() => g.find((e) => e.id === l), [l, g]);
    return 0 === C.length
        ? null
        : (0, i.jsxs)('div', {
              className: h.container,
              children: [
                  (0, i.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: p.intl.string(p.t.f09BQE)
                  }),
                  (0, i.jsx)(u.ZP, {
                      items: C,
                      title: null !== (t = null == v ? void 0 : v.name) && void 0 !== t ? t : '',
                      onSelect: x,
                      selected: ''.concat(l),
                      'aria-label': p.intl.string(p.t.WHdCwc),
                      variant: u.PA.FILLED
                  })
              ]
          });
}
