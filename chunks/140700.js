n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(89182),
    o = n(164991),
    s = n(783393),
    c = n(112471),
    u = n(746728),
    d = n(388032),
    p = n(106016);
function f(e) {
    let { count: t, categoryId: n } = e,
        i = (0, s.E)({ categoryId: n });
    return (0, r.jsx)(a.iG, {
        count: t,
        name: i,
    });
}
function g(e) {
    let { loadId: t } = e,
        n = o.Z.useField("categoryId"),
        g = (0, c.q)(),
        h = (0, s.E)({ categoryId: n }),
        m = i.useCallback(
            (e) => {
                (0, u.I)({
                    loadId: t,
                    categoryId: Number(e),
                });
            },
            [t],
        ),
        b = i.useMemo(
            () =>
                null == g
                    ? []
                    : g.map((e) => {
                          let [t, n] = e;
                          return {
                              id: "".concat(t),
                              label: (0, r.jsx)(f, {
                                  categoryId: t,
                                  count: n,
                              }),
                          };
                      }),
            [g],
        );
    return null == g
        ? null
        : (0, r.jsxs)("div", {
              className: p.container,
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: d.intl.string(d.t.f09BQJ),
                  }),
                  (0, r.jsx)(a.ZP, {
                      items: b,
                      title: h,
                      onSelect: m,
                      selected: "".concat(n),
                      "aria-label": d.intl.string(d.t.Ng5cTK),
                      variant: a.PA.FILLED,
                  }),
              ],
          });
}
