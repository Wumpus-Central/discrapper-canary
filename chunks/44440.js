a.d(t, { A: () => C, j: () => _ });
var s = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    n = a(939249),
    c = a(834730),
    o = a(773669),
    d = a(747550),
    u = a(282026),
    h = a(926277),
    g = a(931222),
    A = a(360067);
function _(e) {
    let { categoryId: t, loadId: a } = e;
    u.A.setState({ categoryId: t }),
        d.A.loadCategoryResults({
            loadId: a,
            categoryId: t,
            query: u.A.getField("fetchedQuery"),
            languageCode: u.A.getField("languageCode"),
        });
}
function m(e) {
    let { loadId: t, categoryId: a, count: r } = e,
        d = l.useCallback(() => {
            _({ categoryId: a, loadId: t });
        }, [a, t]),
        g = u.A.useField("categoryId") === a,
        m = r.toLocaleString(o.default.locale),
        C = (0, h.r)({ categoryId: a });
    return (0, s.jsxs)(n.D, {
        onClick: d,
        className: i()(A.L1, { [A.wH]: g }),
        children: [
            (0, s.jsx)(c.E, { className: A.UU, variant: "text-sm/medium", color: "text-strong", children: C }),
            (0, s.jsx)(c.E, { className: A.U9, variant: "text-sm/normal", color: "text-muted", children: m }),
        ],
    });
}
let C = function (e) {
    let { loadId: t } = e,
        a = (0, g.L)();
    return null == a
        ? null
        : (0, s.jsx)("div", {
              className: A.LZ,
              children: a.map((e) => {
                  let [a, l] = e;
                  return (0, s.jsx)(m, { loadId: t, categoryId: a, count: l }, a);
              }),
          });
};
