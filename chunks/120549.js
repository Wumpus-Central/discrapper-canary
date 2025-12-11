n.d(t, {
    V: () => b,
    Z: () => g,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(89182),
    d = n(706454),
    u = n(678694),
    p = n(216780),
    m = n(388032),
    h = n(370374);
function f(e) {
    let { category: t, count: n, onSelectCategory: i, selected: s } = e,
        c = r.useCallback(() => {
            i(t.id);
        }, [t.id, i]),
        u = n.toLocaleString(d.default.locale);
    return (0, a.jsxs)(o.P3F, {
        onClick: c,
        className: l()(h.category, { [h.selected]: s }),
        children: [
            (0, a.jsx)(o.Text, {
                className: h.name,
                variant: "text-sm/medium",
                color: "text-strong",
                children: t.name,
            }),
            (0, a.jsx)(o.Text, {
                className: h.count,
                variant: "text-sm/normal",
                color: "text-muted",
                children: u,
            }),
        ],
    });
}
function g(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: i } = e,
        l = (0, s.e7)([u.Z], () => u.Z.getCategories()),
        o = r.useMemo(
            () => [
                (0, p.KQ)(),
                ...l.filter((e) => {
                    var n;
                    return (null != (n = t[e.id]) ? n : 0) !== 0;
                }),
            ],
            [l, t],
        );
    return 0 === o.length
        ? null
        : (0, a.jsx)("div", {
              className: h.categories,
              children: o.map((e) => {
                  var r;
                  let l = e.id,
                      s = null != (r = t[l]) ? r : 0;
                  return (0, a.jsx)(
                      f,
                      {
                          category: e,
                          count: s,
                          selected: l === i,
                          onSelectCategory: () => n(e),
                      },
                      l,
                  );
              }),
          });
}
function b(e) {
    var t;
    let { countsByCategory: n, onSelectCategory: i, selectedCategoryId: l } = e,
        d = (0, s.e7)([u.Z], () => u.Z.getCategories()),
        f = r.useMemo(
            () => [
                (0, p.KQ)(),
                ...d.filter((e) => {
                    var t;
                    return (null != (t = n[e.id]) ? t : 0) !== 0;
                }),
            ],
            [d, n],
        ),
        g = r.useMemo(
            () =>
                f.map((e) => ({
                    id: "".concat(e.id),
                    label: (0, a.jsx)(c.iG, {
                        count: n[e.id],
                        name: e.name,
                    }),
                })),
            [f, n],
        ),
        b = r.useCallback(
            (e) => {
                let t = f.find((t) => t.id === Number(e));
                null != t && i(t);
            },
            [i, f],
        ),
        x = r.useMemo(() => f.find((e) => e.id === l), [l, f]);
    return 0 === g.length
        ? null
        : (0, a.jsxs)("div", {
              className: h.container,
              children: [
                  (0, a.jsx)(o.Text, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: m.intl.string(m.t.f09BQJ),
                  }),
                  (0, a.jsx)(c.ZP, {
                      items: g,
                      title: null != (t = null == x ? void 0 : x.name) ? t : "",
                      onSelect: b,
                      selected: "".concat(l),
                      "aria-label": m.intl.string(m.t.WHdCwR),
                      variant: c.PA.FILLED,
                  }),
              ],
          });
}
