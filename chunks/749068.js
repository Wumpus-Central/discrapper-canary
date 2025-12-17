n.d(t, { Z: () => s });
var r = n(54381),
    i = n(793030),
    a = n(429368),
    l = n(27123),
    o = n(786040);
let s = (e) => {
    let { skuId: t, overrideVariantIndex: n } = e,
        s = (0, o.LJ)(t),
        c = (0, a.o)(s);
    return null != s && (0, l.ox)(s)
        ? (0, r.jsx)(i.xvT, {
              variant: "text-xs/medium",
              color: "text-subtle",
              children: s.variants[null != n ? n : c].variantLabel,
          })
        : null;
};
