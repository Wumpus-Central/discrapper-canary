n.d(t, { A: () => o });
var i = n(627968),
    r = n(834730),
    a = n(298072),
    l = n(623373),
    s = n(561769);
let o = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: o } = e,
        c = (0, s.Vm)(t),
        d = (0, a.Q)(c);
    return null != c && (0, l.B1)(c)
        ? (0, i.jsx)(r.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: o,
              lineClamp: 1,
              children: c.variants[n ?? d].variantLabel,
          })
        : null;
};
