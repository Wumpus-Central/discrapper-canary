r.d(t, {
    $0: () => f,
    Tm: () => p,
    ZP: () => g,
    oT: () => m
}),
    r(388685),
    r(539854);
var n,
    i = r(73800),
    l = r(399606),
    o = r(597688),
    s = r(1870),
    c = r(884697),
    a = r(594174),
    u = r(74538),
    d = r(388032),
    f = (((n = {}).PURCHASE = 'purchase'), (n.PREMIUM_PURCHASE = 'premium_purchase'), (n.PREVIEW = 'preview'), n);
let p = { id: 'None' },
    m = { id: 'Shop' },
    g = () => {
        let e = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
            t = u.ZP.canUseCollectibles(e),
            r = (0, l.e7)([s.Z], () => s.Z.purchases),
            [n, f] = (0, l.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
        return (0, i.useMemo)(() => {
            let e = (0, c.yn)(r, n).reduce(
                (e, n) => {
                    let i = r.get(n.skuId);
                    return (0, c.qS)(i) ? e.premium_purchase.push(n) : null != i ? e.purchase.push(n) : !t && (0, c.G1)(f.get(n.skuId)) ? e.premium_purchase.push(n) : e.preview.push(n), e;
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
                    items: [p, m, ...e.purchase],
                    height: 12,
                    header: d.intl.string(d.t['9x1v/v'])
                },
                {
                    section: 'premium_purchase',
                    items: e.premium_purchase,
                    height: 12,
                    header: d.intl.string(d.t.TiLCg4)
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: d.intl.string(d.t['1vbbeX'])
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [n, f, r, t]);
    };
