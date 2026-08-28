n.d(t, { X: () => u });
var r = n(582128),
    s = n(575593),
    l = n(702841),
    a = n(4227),
    i = n(623373);
function o(e, t) {
    return e.type === s.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
        ? 1
        : (0, i.B1)(e)
          ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
          : 2 * !!t.includes(e.skuId);
}
function u(e) {
    let t = (0, l.bG)([a.A], () => a.A.purchases),
        n = (0, r.useMemo)(
            () =>
                [...t].map((e) => {
                    let [t] = e;
                    return t;
                }),
            [t],
        );
    return (0, r.useMemo)(() => [...e].sort((e, t) => o(e, n) - o(t, n)), [e, n]);
}
