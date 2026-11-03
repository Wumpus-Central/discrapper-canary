n.d(t, { X: () => u });
var r = n(582128),
    l = n(575593),
    s = n(702841),
    a = n(4227),
    o = n(623373);
function i(e, t) {
    return e.type === l.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
        ? 1
        : (0, o.B1)(e)
          ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
          : 2 * !!t.includes(e.skuId);
}
function u(e) {
    let t = (0, s.bG)([a.A], () => a.A.purchases),
        n = (0, r.useMemo)(
            () =>
                [...t].map((e) => {
                    let [t] = e;
                    return t;
                }),
            [t],
        );
    return (0, r.useMemo)(() => [...e].sort((e, t) => i(e, n) - i(t, n)), [e, n]);
}
