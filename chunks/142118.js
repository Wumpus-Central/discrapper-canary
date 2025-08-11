n.d(t, { Z: () => r });
var i = n(255367),
    l = n(73800),
    s = n(481060),
    o = n(36361),
    a = n(355521);
let r = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: r, render: u, init: c } = t,
        d = null == n ? void 0 : n();
    return (l.useEffect(() => {
        null == c || c();
    }, [c]),
    null != u)
        ? (0, i.jsx)(u, {})
        : (0, i.jsx)(s.hjN, {
              tag: s.RB0.H1,
              className: a.category,
              title: d,
              titleClassName: a.categoryTitle,
              children: r.map((e) => (0, i.jsx)(o.Z, { node: e }, e.key)),
          });
});
