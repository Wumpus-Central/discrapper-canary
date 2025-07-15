n.d(t, { Z: () => d });
var i = n(255367),
    a = n(73800),
    s = n(481060),
    o = n(36361),
    r = n(598612),
    l = n(355521);
let d = a.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: a, render: d } = t.data,
        c = null == n ? void 0 : n();
    return null != d
        ? (0, i.jsx)(d, {})
        : (0, i.jsxs)(s.hjN, {
              className: l.category,
              children: [null != c && (0, i.jsx)(r.Y, { title: c }), a.map((e) => (0, i.jsx)(o.Z, { node: e }, e.key))]
          });
});
