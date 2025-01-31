n.d(t, {
    $0: () => m,
    Tm: () => p,
    ZP: () => g,
    oT: () => h
}),
    n(47120),
    n(724458),
    n(653041);
var r,
    i = n(192379),
    l = n(392711),
    s = n(399606),
    o = n(597688),
    c = n(1870),
    a = n(884697),
    d = n(594174),
    u = n(74538),
    f = n(388032),
    m = (((r = {}).PURCHASE = 'purchase'), (r.PREMIUM_PURCHASE = 'premium_purchase'), (r.PREVIEW = 'preview'), r);
let p = { id: 'None' },
    h = { id: 'Shop' },
    g = () => {
        let e = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
            t = u.ZP.canUseCollectibles(e),
            n = (0, s.e7)([c.Z], () => c.Z.purchases),
            [r, m] = (0, s.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
        return (0, i.useMemo)(() => {
            let e = (0, l.uniqBy)([...(0, a.aj)(n), ...(0, a.XS)(r)], 'id').reduce(
                (e, r) => {
                    let i = n.get(r.skuId);
                    return (0, a.qS)(i) ? e.premium_purchase.push(r) : null != i ? e.purchase.push(r) : !t && (0, a.G1)(m.get(r.skuId)) ? e.premium_purchase.push(r) : e.preview.push(r), e;
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
                    items: [p, h, ...e.purchase],
                    height: 12,
                    header: f.intl.string(f.t.JEimX1)
                },
                {
                    section: 'premium_purchase',
                    items: e.premium_purchase,
                    height: 12,
                    header: f.intl.string(f.t.DIJLzM)
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: f.intl.string(f.t.fmIfaG)
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [r, m, n, t]);
    };
