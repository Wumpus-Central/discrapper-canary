n.d(t, { A: () => g, j: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    o = n(773669),
    d = n(747550),
    c = n(282026),
    u = n(926277),
    A = n(931222),
    h = n(65283);
function _(e) {
    let { categoryId: t, loadId: n } = e;
    c.A.setState({ categoryId: t }),
        d.A.loadCategoryResults({
            loadId: n,
            categoryId: t,
            query: c.A.getField("fetchedQuery"),
            languageCode: c.A.getField("languageCode"),
        });
}
function m(e) {
    let { loadId: t, categoryId: n, count: a } = e,
        d = l.useCallback(() => {
            _({ categoryId: n, loadId: t });
        }, [n, t]),
        A = c.A.useField("categoryId") === n,
        m = a.toLocaleString(o.default.locale),
        g = (0, u.r)({ categoryId: n });
    return (0, i.jsxs)(s.DUT, {
        onClick: d,
        className: r()(h.L1, { [h.wH]: A }),
        children: [
            (0, i.jsx)(s.Text, { className: h.UU, variant: "text-sm/medium", color: "text-strong", children: g }),
            (0, i.jsx)(s.Text, { className: h.U9, variant: "text-sm/normal", color: "text-muted", children: m }),
        ],
    });
}
let g = function (e) {
    let { loadId: t } = e,
        n = (0, A.L)();
    return null == n
        ? null
        : (0, i.jsx)("div", {
              className: h.LZ,
              children: n.map((e) => {
                  let [n, l] = e;
                  return (0, i.jsx)(m, { loadId: t, categoryId: n, count: l }, n);
              }),
          });
};
