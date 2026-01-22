n.d(t, {
    A: () => g,
    j: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(773669),
    c = n(747550),
    u = n(282026),
    d = n(926277),
    p = n(931222),
    f = n(503330);
function h(e) {
    let { categoryId: t, loadId: n } = e;
    u.A.setState({ categoryId: t }),
        c.A.loadCategoryResults({
            loadId: n,
            categoryId: t,
            query: u.A.getField("fetchedQuery"),
            languageCode: u.A.getField("languageCode"),
        });
}
function A(e) {
    let { loadId: t, categoryId: n, count: l } = e,
        c = i.useCallback(() => {
            h({
                categoryId: n,
                loadId: t,
            });
        }, [n, t]),
        p = u.A.useField("categoryId") === n,
        A = l.toLocaleString(o.default.locale),
        g = (0, d.r)({ categoryId: n });
    return (0, r.jsxs)(s.DUT, {
        onClick: c,
        className: a()(f.L1, { [f.wH]: p }),
        children: [
            (0, r.jsx)(s.Text, {
                className: f.UU,
                variant: "text-sm/medium",
                color: "text-strong",
                children: g,
            }),
            (0, r.jsx)(s.Text, {
                className: f.U9,
                variant: "text-sm/normal",
                color: "text-muted",
                children: A,
            }),
        ],
    });
}
let g = function (e) {
    let { loadId: t } = e,
        n = (0, p.L)();
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: f.LZ,
              children: n.map((e) => {
                  let [n, i] = e;
                  return (0, r.jsx)(
                      A,
                      {
                          loadId: t,
                          categoryId: n,
                          count: i,
                      },
                      n,
                  );
              }),
          });
};
