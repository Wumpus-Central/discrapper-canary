n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(191711),
    s = n(282026),
    o = n(926277),
    c = n(931222),
    u = n(44440),
    d = n(985018),
    p = n(430556);

function h(e) {
    let { loadId: t } = e,
        n = s.A.useField("categoryId"),
        h = (0, c.L)(),
        g = (0, o.r)({
            categoryId: n,
        }),
        f = i.useCallback(
            (e) => {
                (0, u.j)({
                    loadId: t,
                    categoryId: Number(e),
                });
            },
            [t],
        ),
        m = i.useMemo(
            () =>
                null == h
                    ? []
                    : h.map((e) => {
                          let [t] = e;
                          return t;
                      }),
            [h],
        ),
        A = (0, o.o)({
            categoryIds: m,
        }),
        _ = i.useMemo(
            () =>
                null == h
                    ? []
                    : h.map((e) => {
                          var t;
                          let [n, r] = e;
                          return {
                              id: "".concat(n),
                              name: null != (t = A[n]) ? t : "",
                              count: r,
                          };
                      }),
            [h, A],
        );
    return null == h
        ? null
        : (0, r.jsxs)("div", {
              className: p.k,
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: d.intl.string(d.t.f09BQJ),
                  }),
                  (0, r.jsx)(a.A, {
                      items: _,
                      title: g,
                      onSelect: f,
                      selected: "".concat(n),
                      "aria-label": d.intl.string(d.t.Ng5cTK),
                      variant: a.H.FILLED,
                  }),
              ],
          });
}
