n.d(t, { A: () => c });
var r = n(627968),
    i = n(834730),
    a = n(298072),
    l = n(623373),
    s = n(561769);
let c = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: c } = e,
        o = (0, s.Vm)(t),
        d = (0, a.Q)(o);
    return null != o && (0, l.B1)(o)
        ? (0, r.jsx)(i.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: c,
              lineClamp: 1,
              children: o.variants[n ?? d].variantLabel,
          })
        : null;
};
