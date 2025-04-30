n.d(t, {
    $0: () => d,
    Tm: () => f,
    ZP: () => p,
    oT: () => _
}),
    n(388685),
    n(539854);
var r = n(73800),
    i = n(399606),
    a = n(597688),
    o = n(1870),
    s = n(884697),
    l = n(594174),
    c = n(74538),
    u = n(388032),
    d = (function (e) {
        return (e.PURCHASE = 'purchase'), (e.PREMIUM_PURCHASE = 'premium_purchase'), (e.PREVIEW = 'preview'), (e.PREMIUM_PREVIEW = 'premium_preview'), e;
    })({});
let f = { id: 'None' },
    _ = { id: 'Shop' },
    p = () => {
        let e = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
            t = c.ZP.canUseCollectibles(e),
            n = (0, i.e7)([o.Z], () => o.Z.purchases),
            [d, p] = (0, i.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
        return (0, r.useMemo)(() => {
            let e = (0, s.iC)(n, d).reduce(
                (e, r) => {
                    let i = n.get(r.skuId),
                        a = (0, s.qS)(i);
                    return (a && 0 === e.premium_purchase.length && ((e.premium_purchase = e.premium_preview), (e.premium_preview = [])), a) ? e.premium_purchase.push(r) : null != i ? e.purchase.push(r) : !t && (0, s.G1)(p.get(r.skuId)) ? (e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(r) : e.preview.push(r), e;
                },
                {
                    purchase: [],
                    premium_purchase: [],
                    preview: [],
                    premium_preview: []
                }
            );
            return [
                {
                    section: 'purchase',
                    items: [f, _, ...e.purchase],
                    height: 12,
                    header: u.intl.string(u.t.VqmVqK)
                },
                {
                    section: e.premium_purchase.length > 0 ? 'premium_purchase' : 'premium_preview',
                    items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                    height: 12,
                    header: u.intl.string(u.t.TiLCg4)
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: u.intl.string(u.t['1vbbeX'])
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [d, p, n, t]);
    };
