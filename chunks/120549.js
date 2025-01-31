n.d(t, {
    V: () => x,
    Z: () => _
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(894653),
    d = n(34674),
    u = n(89182),
    m = n(706454),
    h = n(388032),
    p = n(968654);
function g(e) {
    let { category: t, count: n, onSelectCategory: r, selected: s } = e,
        c = a.useCallback(() => {
            r(t.id);
        }, [t.id, r]),
        d = n.toLocaleString(m.default.locale);
    return (0, i.jsxs)(o.P3F, {
        onClick: c,
        className: l()(p.category, { [p.selected]: s }),
        children: [
            (0, i.jsx)(o.Text, {
                className: p.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, i.jsx)(o.Text, {
                className: p.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function _(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: r } = e,
        l = (0, s.e7)([c.Z], () => c.Z.getCategories()),
        o = a.useMemo(
            () => [
                (0, d.KQ)(),
                ...l.filter((e) => {
                    var n;
                    return (null !== (n = t[e.id]) && void 0 !== n ? n : 0) !== 0;
                })
            ],
            [l, t]
        );
    return 0 === o.length
        ? null
        : (0, i.jsx)('div', {
              className: p.categories,
              children: o.map((e) => {
                  var a;
                  let l = e.id,
                      s = null !== (a = t[l]) && void 0 !== a ? a : 0;
                  return (0, i.jsx)(
                      g,
                      {
                          category: e,
                          count: s,
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
        m = (0, s.e7)([c.Z], () => c.Z.getCategories()),
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
        _ = a.useMemo(
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
        C = a.useMemo(() => g.find((e) => e.id === l), [l, g]);
    return 0 === _.length
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: h.intl.string(h.t.f09BQE)
                  }),
                  (0, i.jsx)(u.ZP, {
                      items: _,
                      title: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : '',
                      onSelect: x,
                      selected: ''.concat(l),
                      'aria-label': h.intl.string(h.t.WHdCwc),
                      variant: u.PA.FILLED
                  })
              ]
          });
}
