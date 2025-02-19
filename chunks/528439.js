r.d(t, {
    $0: () => p,
    Tm: () => m,
    ZP: () => h,
    oT: () => g
}),
    r(47120),
    r(653041);
var n,
    i = r(192379),
    o = r(392711),
    l = r(399606),
    s = r(597688),
    c = r(1870),
    a = r(884697),
    u = r(594174),
    d = r(74538),
    f = r(388032),
    p = (((n = {}).PURCHASE = 'purchase'), (n.PREMIUM_PURCHASE = 'premium_purchase'), (n.PREVIEW = 'preview'), n);
let m = { id: 'None' },
    g = { id: 'Shop' },
    h = () => {
        let e = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
            t = d.ZP.canUseCollectibles(e),
            r = (0, l.e7)([c.Z], () => c.Z.purchases),
            [n, p] = (0, l.Wu)([s.Z], () => [s.Z.categories, s.Z.products]);
        return (0, i.useMemo)(() => {
            let e = (0, o.uniqBy)([...(0, a.aj)(r), ...(0, a.XS)(n)], 'id').reduce(
                (e, n) => {
                    let i = r.get(n.skuId);
                    return (0, a.qS)(i) ? e.premium_purchase.push(n) : null != i ? e.purchase.push(n) : !t && (0, a.G1)(p.get(n.skuId)) ? e.premium_purchase.push(n) : e.preview.push(n), e;
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
                    items: [m, g, ...e.purchase],
                    height: 12,
                    header: f.NW.string(f.t.JEimX1)
                },
                {
                    section: 'premium_purchase',
                    items: e.premium_purchase,
                    height: 12,
                    header: f.NW.string(f.t.DIJLzM)
                },
                {
                    section: 'preview',
                    items: e.preview,
                    height: 12,
                    header: f.NW.string(f.t.fmIfaG)
                }
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [n, p, r, t]);
    };
