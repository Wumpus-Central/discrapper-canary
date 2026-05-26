n.d(t, { A: () => o });
var r = n(627968),
    i = n(834730),
    l = n(298072),
    a = n(623373),
    s = n(561769);
let o = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: o } = e,
        c = (0, s.Vm)(t),
        u = (0, l.Q)(c);
    return null != c && (0, a.B1)(c)
        ? (0, r.jsx)(i.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: o,
              lineClamp: 1,
              children: c.variants[n ?? u].variantLabel,
          })
        : null;
};
