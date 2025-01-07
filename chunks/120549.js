t.d(n, {
    V: function () {
        return v;
    },
    Z: function () {
        return f;
    }
}),
    t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(442837),
    s = t(481060),
    c = t(894653),
    d = t(34674),
    u = t(89182),
    m = t(706454),
    p = t(388032),
    _ = t(968654);
function g(e) {
    let { category: n, count: t, onSelectCategory: r, selected: o } = e,
        c = i.useCallback(() => {
            r(n.id);
        }, [n.id, r]),
        d = t.toLocaleString(m.default.locale);
    return (0, a.jsxs)(s.Clickable, {
        onClick: c,
        className: l()(_.category, { [_.selected]: o }),
        children: [
            (0, a.jsx)(s.Text, {
                className: _.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: n.name
            }),
            (0, a.jsx)(s.Text, {
                className: _.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function f(e) {
    let { countsByCategory: n, onSelectCategory: t, selectedCategoryId: r } = e,
        l = (0, o.e7)([c.Z], () => c.Z.getCategories()),
        s = i.useMemo(
            () => [
                (0, d.KQ)(),
                ...l.filter((e) => {
                    var t;
                    return (null !== (t = n[e.id]) && void 0 !== t ? t : 0) !== 0;
                })
            ],
            [l, n]
        );
    return 0 === s.length
        ? null
        : (0, a.jsx)('div', {
              className: _.categories,
              children: s.map((e) => {
                  var i;
                  let l = e.id,
                      o = null !== (i = n[l]) && void 0 !== i ? i : 0;
                  return (0, a.jsx)(
                      g,
                      {
                          category: e,
                          count: o,
                          selected: l === r,
                          onSelectCategory: () => t(e)
                      },
                      l
                  );
              })
          });
}
function v(e) {
    var n;
    let { countsByCategory: t, onSelectCategory: r, selectedCategoryId: l } = e,
        m = (0, o.e7)([c.Z], () => c.Z.getCategories()),
        g = i.useMemo(
            () => [
                (0, d.KQ)(),
                ...m.filter((e) => {
                    var n;
                    return (null !== (n = t[e.id]) && void 0 !== n ? n : 0) !== 0;
                })
            ],
            [m, t]
        ),
        f = i.useMemo(
            () =>
                g.map((e) => ({
                    id: ''.concat(e.id),
                    label: (0, a.jsx)(u.iG, {
                        count: t[e.id],
                        name: e.name
                    })
                })),
            [g, t]
        ),
        v = i.useCallback(
            (e) => {
                let n = g.find((n) => n.id === Number(e));
                null != n && r(n);
            },
            [r, g]
        ),
        C = i.useMemo(() => g.find((e) => e.id === l), [l, g]);
    return 0 === f.length
        ? null
        : (0, a.jsxs)('div', {
              className: _.container,
              children: [
                  (0, a.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: p.intl.string(p.t.f09BQE)
                  }),
                  (0, a.jsx)(u.ZP, {
                      items: f,
                      title: null !== (n = null == C ? void 0 : C.name) && void 0 !== n ? n : '',
                      onSelect: v,
                      selected: ''.concat(l),
                      'aria-label': p.intl.string(p.t.WHdCwc),
                      variant: u.PA.FILLED
                  })
              ]
          });
}
