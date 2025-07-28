n.d(t, { Z: () => r });
var i = n(255367),
    a = n(73800),
    o = n(481060),
    s = n(36361),
    l = n(355521);
let r = a.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: r, render: c, init: u } = t.data,
        d = null == n ? void 0 : n();
    return (a.useEffect(() => {
        null == u || u();
    }, [u]),
    null != c)
        ? (0, i.jsx)(c, {})
        : (0, i.jsx)(o.hjN, {
              tag: o.RB0.H1,
              className: l.category,
              title: d,
              titleClassName: l.categoryTitle,
              children: r.map((e) => (0, i.jsx)(s.Z, { node: e }, e.key))
          });
});
