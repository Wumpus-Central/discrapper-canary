l.d(t, { Ay: () => p, wn: () => o }), l(321073);
var a,
    s = l(64700),
    r = l(417597),
    i = l(590180),
    n = l(4227),
    c = l(993408),
    d = l(985018),
    o = (((a = {}).PURCHASE = "purchase"), (a.PREMIUM_PURCHASE = "premium_purchase"), (a.PREVIEW = "preview"), a);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, r.bG)([n.A], () => n.A.purchases),
            [t, l] = (0, r.yK)([i.A], () => [i.A.categories, i.A.products]);
        return (0, s.useMemo)(() => {
            let a = (0, c.zd)(e, t).reduce(
                (t, a) => {
                    let s = e.get(a.skuId),
                        r = l.get(a.skuId),
                        i = null != s ? (0, c.gA)(s) : (0, c.G0)(r),
                        n = r?.isCategoryReward ?? !1;
                    return i ? t.premium_purchase.push(a) : null != s ? t.purchase.push(a) : n || t.preview.push(a), t;
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...a.purchase], height: 12, header: d.intl.string(d.t.WfGV52) },
                {
                    section: "premium_purchase",
                    items: a.premium_purchase,
                    height: 12,
                    header: d.intl.string(d.t.TiLCgw),
                },
                { section: "preview", items: a.preview, height: 12, header: d.intl.string(d.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, e, l]);
    };
