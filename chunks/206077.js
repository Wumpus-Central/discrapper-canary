var l = n(582128),
    r = n(575593),
    s = n(164636),
    a = n(4227),
    i = n(623373);
function o(e, t) {
    return e.type === r.R.BUNDLE && e.items.some((e) => t.includes(e.skuId))
        ? 1
        : (0, i.B1)(e)
          ? 2 * !!e.variants.every((e) => t.includes(e.skuId))
          : 2 * !!t.includes(e.skuId);
}
n.d(
    t,
    {},
    {
        X: function (e) {
            let t = (0, s.bG)([a.A], () => a.A.purchases),
                n = (0, l.useMemo)(
                    () =>
                        [...t].map((e) => {
                            let [t] = e;
                            return t;
                        }),
                    [t],
                );
            return (0, l.useMemo)(() => [...e].sort((e, t) => o(e, n) - o(t, n)), [e, n]);
        },
    },
);
