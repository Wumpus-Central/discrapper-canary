n.d(t, { A: () => o });
var r = n(627968),
    a = n(158954),
    i = n(298072),
    s = n(623373),
    l = n(561769);
let o = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: o } = e,
        c = (0, l.Vm)(t),
        d = (0, i.Q)(c);
    return null != c && (0, s.B1)(c)
        ? (0, r.jsx)(a.EYj, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: o,
              lineClamp: 1,
              children: c.variants[n ?? d].variantLabel,
          })
        : null;
};
