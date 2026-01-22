l.d(t, { X: () => o }), l(896048), l(638769);
var n = l(64700),
    r = l(575593),
    s = l(417597),
    a = l(4227);
let i = (e, t) => {
        if (e.type === r.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))) return 2;
        if (e.type === r.R.VARIANTS_GROUP) {
            var l, n;
            if (null != (l = null == (n = e.variants) ? void 0 : n.some((e) => t.includes(e.skuId))) && l) return 1;
        }
        return 3 * !!t.includes(e.skuId);
    },
    o = (e) => {
        let t = (0, s.bG)([a.A], () => a.A.purchases),
            l = (0, n.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, n.useMemo)(() => [...e].sort((e, t) => i(e, l) - i(t, l)), [e, l]);
    };
