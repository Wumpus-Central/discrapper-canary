r.d(t, { X: () => u });
var n = r(582128),
    l = r(575593),
    s = r(702841),
    a = r(4227),
    i = r(623373);
function o(e, t) {
    return e.type === l.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
        ? 1
        : (0, i.B1)(e)
          ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
          : 2 * !!t.includes(e.skuId);
}
function u(e) {
    let t = (0, s.bG)([a.A], () => a.A.purchases),
        r = (0, n.useMemo)(
            () =>
                [...t].map((e) => {
                    let [t] = e;
                    return t;
                }),
            [t],
        );
    return (0, n.useMemo)(() => [...e].sort((e, t) => o(e, r) - o(t, r)), [e, r]);
}
