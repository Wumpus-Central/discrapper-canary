(r.d(t, {
    $0: () => u,
    Tm: () => d,
    ZP: () => p,
    oT: () => f
}),
    r(388685),
    r(539854));
var n,
    i = r(73800),
    l = r(399606),
    o = r(597688),
    s = r(1870),
    c = r(884697),
    a = r(388032),
    u = (((n = {}).PURCHASE = 'purchase'), (n.PREMIUM_PURCHASE = 'premium_purchase'), (n.PREVIEW = 'preview'), n);
let d = { id: 'None' },
    f = { id: 'Shop' },
    p = () => {
        let e = (0, l.e7)([s.Z], () => s.Z.purchases),
            [t, r] = (0, l.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
        return (0, i.useMemo)(() => {
            let n = (0, c.yn)(e, t).reduce(
                (t, n) => {
                    let i = e.get(n.skuId);
                    return ((0, c.G1)(r.get(n.skuId)) ? t.premium_purchase.push(n) : null != i ? t.purchase.push(n) : t.preview.push(n), t);
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
                    items: [d, f, ...n.purchase],
                    height: 12,
                    header: a.intl.string(a.t['9x1v/v'])
                },
                {
                    section: 'premium_purchase',
                    items: n.premium_purchase,
                    height: 12,
                    header: a.intl.string(a.t.TiLCg4)
                },
                {
                    section: 'preview',
                    items: n.preview,
                    height: 12,
                    header: a.intl.string(a.t['1vbbeX'])
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, r, e]);
    };
