n.d(t, {
    $0: () => d,
    Tm: () => f,
    ZP: () => p,
    oT: () => _
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(192379),
    r = n(399606),
    a = n(597688),
    s = n(1870),
    o = n(884697),
    l = n(594174),
    u = n(74538),
    c = n(388032),
    d = (function (e) {
        return (e.PURCHASE = 'purchase'), (e.PREMIUM_PURCHASE = 'premium_purchase'), (e.PREVIEW = 'preview'), (e.PREMIUM_PREVIEW = 'premium_preview'), e;
    })({});
let f = { id: 'None' },
    _ = { id: 'Shop' },
    p = () => {
        let e = (0, r.e7)([l.default], () => l.default.getCurrentUser()),
            t = u.ZP.canUseCollectibles(e),
            n = (0, r.e7)([s.Z], () => s.Z.purchases),
            [d, p] = (0, r.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
        return (0, i.useMemo)(() => {
            let e = (0, o.iC)(n, d).reduce(
                (e, i) => {
                    let r = n.get(i.skuId),
                        a = (0, o.qS)(r);
                    return (a && 0 === e.premium_purchase.length && ((e.premium_purchase = e.premium_preview), (e.premium_preview = [])), a) ? e.premium_purchase.push(i) : null != r ? e.purchase.push(i) : !t && (0, o.G1)(p.get(i.skuId)) ? (e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(i) : e.preview.push(i), e;
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
                    header: c.intl.string(c.t.JEimX1)
                },
                {
                    section: e.premium_purchase.length > 0 ? 'premium_purchase' : 'premium_preview',
                    items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                    height: 12,
                    header: c.intl.string(c.t.DIJLzM)
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: c.intl.string(c.t.fmIfaG)
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [d, p, n, t]);
    };
