s.d(t, { X: () => u });
var l = s(64700),
    r = s(575593),
    n = s(702841),
    a = s(4227),
    i = s(623373);
let o = (e, t) =>
        e.type === r.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
            ? 1
            : (0, i.B1)(e)
              ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
              : 2 * !!t.includes(e.skuId),
    u = (e) => {
        let t = (0, n.bG)([a.A], () => a.A.purchases),
            s = (0, l.useMemo)(
                () =>
                    [...t].map((e) => {
                        let [t] = e;
                        return t;
                    }),
                [t],
            );
        return (0, l.useMemo)(() => [...e].sort((e, t) => o(e, s) - o(t, s)), [e, s]);
    };
