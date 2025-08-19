n.d(t, { Z: () => a });
var i = n(951288),
    l = n(647438),
    o = n(481060),
    r = n(36361),
    s = n(476804);
let a = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: a, render: u, init: c } = t,
        d = null == n ? void 0 : n();
    return (l.useEffect(() => {
        null == c || c();
    }, [c]),
    null != u)
        ? (0, i.jsx)(u, {})
        : (0, i.jsx)(o.hjN, {
              tag: o.RB0.H1,
              className: s.category,
              title: d,
              titleClassName: s.categoryTitle,
              children: a.map((e) => (0, i.jsx)(r.Z, { node: e }, e.key)),
          });
});
