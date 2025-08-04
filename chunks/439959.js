(n.d(t, {
    $0: () => c,
    Tm: () => u,
    ZP: () => f,
    oT: () => d
}),
    n(388685),
    n(539854));
var r = n(73800),
    i = n(399606),
    a = n(597688),
    o = n(1870),
    s = n(884697),
    l = n(388032),
    c = (function (e) {
        return ((e.PURCHASE = 'purchase'), (e.PREMIUM_PURCHASE = 'premium_purchase'), (e.PREVIEW = 'preview'), e);
    })({});
let u = { id: 'None' },
    d = { id: 'Shop' },
    f = () => {
        let e = (0, i.e7)([o.Z], () => o.Z.purchases),
            [t, n] = (0, i.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
        return (0, r.useMemo)(() => {
            let r = (0, s.iC)(e, t).reduce(
                (t, r) => {
                    let i = e.get(r.skuId);
                    return ((0, s.G1)(n.get(r.skuId)) ? t.premium_purchase.push(r) : null != i ? t.purchase.push(r) : t.preview.push(r), t);
                },
                {
                    purchase: [],
                    premium_purchase: [],
                    preview: []
                }
            );
            return [
                {
                    section: 'purchase',
                    items: [u, d, ...r.purchase],
                    height: 12,
                    header: l.intl.string(l.t.VqmVqK)
                },
                {
                    section: 'premium_purchase',
                    items: r.premium_purchase,
                    height: 12,
                    header: l.intl.string(l.t.TiLCg4)
                },
                {
                    section: 'preview',
                    items: r.preview,
                    height: 12,
                    header: l.intl.string(l.t['1vbbeX'])
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e]);
    };
