"use strict";
s.d(t, { X: () => o });
var n = s(64700),
    r = s(575593),
    l = s(417597),
    a = s(4227);
let i = (e, t) =>
        e.type === r.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 2
            : e.type === r.R.VARIANTS_GROUP && e.variants?.some((e) => t.includes(e.skuId))
              ? 1
              : 3 * !!t.includes(e.skuId),
    o = (e) => {
        let t = (0, l.bG)([a.A], () => a.A.purchases),
            s = (0, n.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, n.useMemo)(() => [...e].sort((e, t) => i(e, s) - i(t, s)), [e, s]);
    };
