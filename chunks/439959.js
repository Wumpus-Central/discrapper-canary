n.d(t, {
    $0: () => d,
    Tm: () => f,
    ZP: () => p,
    oT: () => _
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(399606),
    o = n(597688),
    a = n(1870),
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
            n = (0, i.e7)([a.Z], () => a.Z.purchases),
            [d, p] = (0, i.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
        return (0, r.useMemo)(() => {
            let e = (0, s.iC)(n, d).reduce(
                (e, r) => {
                    let i = n.get(r.skuId),
                        o = (0, s.qS)(i);
                    return (o && 0 === e.premium_purchase.length && ((e.premium_purchase = e.premium_preview), (e.premium_preview = [])), o) ? e.premium_purchase.push(r) : null != i ? e.purchase.push(r) : !t && (0, s.G1)(p.get(r.skuId)) ? (e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(r) : e.preview.push(r), e;
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
                    header: u.NW.string(u.t.JEimX1)
                },
                {
                    section: e.premium_purchase.length > 0 ? 'premium_purchase' : 'premium_preview',
                    items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
                    height: 12,
                    header: u.NW.string(u.t.DIJLzM)
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: u.NW.string(u.t.fmIfaG)
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [d, p, n, t]);
    };
