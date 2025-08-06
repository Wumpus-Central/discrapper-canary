n.d(t, { Z: () => s });
var i = n(255367),
    o = n(73800),
    l = n(481060),
    r = n(36361),
    a = n(355521);
let s = o.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, layout: s, render: c, init: u } = t,
        d = null == n ? void 0 : n();
    return (o.useEffect(() => {
        null == u || u();
    }, [u]),
    null != c)
        ? (0, i.jsx)(c, {})
        : (0, i.jsx)(l.hjN, {
              tag: l.RB0.H1,
              className: a.category,
              title: d,
              titleClassName: a.categoryTitle,
              children: s.map((e) => (0, i.jsx)(r.Z, { node: e }, e.key)),
          });
});
