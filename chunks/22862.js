n.d(t, { A: () => h });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(191711),
    s = n(282026),
    o = n(926277),
    d = n(931222),
    c = n(44440),
    u = n(985018),
    A = n(430556);
function h(e) {
    let { loadId: t } = e,
        n = s.A.useField("categoryId"),
        h = (0, d.L)(),
        _ = (0, o.r)({ categoryId: n }),
        m = r.useCallback(
            (e) => {
                (0, c.j)({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        p = r.useMemo(
            () =>
                null == h
                    ? []
                    : h.map((e) => {
                          let [t] = e;
                          return t;
                      }),
            [h],
        ),
        g = (0, o.o)({ categoryIds: p }),
        E = r.useMemo(
            () =>
                null == h
                    ? []
                    : h.map((e) => {
                          let [t, n] = e;
                          return { id: `${t}`, name: g[t] ?? "", count: n };
                      }),
            [h, g],
        );
    return null == h
        ? null
        : (0, i.jsxs)("div", {
              className: A.k,
              children: [
                  (0, i.jsx)(a.Text, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: u.intl.string(u.t.f09BQJ),
                  }),
                  (0, i.jsx)(l.A, {
                      items: E,
                      title: _,
                      onSelect: m,
                      selected: `${n}`,
                      "aria-label": u.intl.string(u.t.Ng5cTK),
                      variant: l.H.FILLED,
                  }),
              ],
          });
}
