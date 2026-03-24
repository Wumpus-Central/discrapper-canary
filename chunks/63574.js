"use strict";
r.d(t, { A: () => c });
var n = r(627968),
    i = r(158954),
    s = r(298072),
    a = r(623373),
    l = r(561769);
let c = (e) => {
    let { skuId: t, overrideVariantIndex: r, className: c } = e,
        o = (0, l.Vm)(t),
        d = (0, s.Q)(o);
    return null != o && (0, a.B1)(o)
        ? (0, n.jsx)(i.EYj, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: c,
              lineClamp: 1,
              children: o.variants[r ?? d].variantLabel,
          })
        : null;
};
