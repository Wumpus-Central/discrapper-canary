n.d(t, { Z: () => c });
var a = n(255367),
    i = n(73800),
    r = n(481060),
    s = n(36361),
    o = n(598612),
    l = n(355521);
let c = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: i, render: c } = t.data,
        d = null == n ? void 0 : n();
    return null != c
        ? (0, a.jsx)(c, {})
        : (0, a.jsxs)(r.hjN, {
              className: l.category,
              children: [null != d && (0, a.jsx)(o.Y, { title: d }), i.map((e) => (0, a.jsx)(s.Z, { node: e }, e.key))]
          });
});
