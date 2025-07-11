n.d(t, { Z: () => d });
var a = n(255367),
    i = n(73800),
    o = n(481060),
    r = n(36361),
    s = n(598612),
    l = n(355521);
let d = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: i, render: d } = t.data,
        c = null == n ? void 0 : n();
    return null != d
        ? (0, a.jsx)(d, {})
        : (0, a.jsxs)(o.hjN, {
              className: l.category,
              children: [null != c && (0, a.jsx)(s.Y, { title: c }), i.map((e) => (0, a.jsx)(r.Z, { node: e }, e.key))]
          });
});
