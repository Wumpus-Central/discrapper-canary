a.d(t, { A: () => g });
var s = a(627968),
    l = a(64700),
    r = a(834730),
    i = a(191711),
    n = a(282026),
    c = a(926277),
    o = a(931222),
    d = a(44440),
    u = a(985018),
    h = a(66749);
function g(e) {
    let { loadId: t } = e,
        a = n.A.useField("categoryId"),
        g = (0, o.L)(),
        A = (0, c.r)({ categoryId: a }),
        _ = l.useCallback(
            (e) => {
                (0, d.j)({ loadId: t, categoryId: Number(e) });
            },
            [t],
        ),
        m = l.useMemo(
            () =>
                null == g
                    ? []
                    : g.map((e) => {
                          let [t] = e;
                          return t;
                      }),
            [g],
        ),
        C = (0, c.o)({ categoryIds: m }),
        f = l.useMemo(
            () =>
                null == g
                    ? []
                    : g.map((e) => {
                          let [t, a] = e;
                          return { id: `${t}`, name: C[t] ?? "", count: a };
                      }),
            [g, C],
        );
    return null == g
        ? null
        : (0, s.jsxs)("div", {
              className: h.k,
              children: [
                  (0, s.jsx)(r.E, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: u.intl.string(u.t.f09BQJ),
                  }),
                  (0, s.jsx)(i.A, {
                      items: f,
                      title: A,
                      onSelect: _,
                      selected: `${a}`,
                      "aria-label": u.intl.string(u.t.Ng5cTK),
                      variant: i.H.FILLED,
                  }),
              ],
          });
}
