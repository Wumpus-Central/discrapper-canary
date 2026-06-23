n.d(t, { X: () => u });
var s = n(64700),
    l = n(575593),
    r = n(702841),
    a = n(4227),
    i = n(623373);
function o(e, t) {
    return e.type === l.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
        ? 1
        : (0, i.B1)(e)
          ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
          : 2 * !!t.includes(e.skuId);
}
function u(e) {
    let t = (0, r.bG)([a.A], () => a.A.purchases),
        n = (0, s.useMemo)(
            () =>
                [...t].map((e) => {
                    let [t] = e;
                    return t;
                }),
            [t],
        );
    return (0, s.useMemo)(() => [...e].sort((e, t) => o(e, n) - o(t, n)), [e, n]);
}
