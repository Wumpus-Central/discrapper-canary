n.d(t, { A: () => c });
var r = n(627968),
    l = n(158954),
    a = n(298072),
    i = n(623373),
    s = n(561769);
let c = (e) => {
    let { skuId: t, overrideVariantIndex: n } = e,
        c = (0, s.Vm)(t),
        o = (0, a.Q)(c);
    return null != c && (0, i.B1)(c)
        ? (0, r.jsx)(l.EYj, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: c.variants[null != n ? n : o].variantLabel,
          })
        : null;
};
