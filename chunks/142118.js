n.d(t, { Z: () => l });
var a = n(255367),
    i = n(73800),
    o = n(481060),
    s = n(36361),
    r = n(355521);
let l = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: i, render: l } = t.data,
        c = null == n ? void 0 : n();
    return null != l
        ? (0, a.jsx)(l, {})
        : (0, a.jsx)(o.hjN, {
              tag: o.RB0.H1,
              className: r.category,
              title: c,
              titleClassName: r.categoryTitle,
              children: i.map((e) => (0, a.jsx)(s.Z, { node: e }, e.key))
          });
});
