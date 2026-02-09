n.d(t, { Ay: () => p, wn: () => u }), n(321073);
var l,
    s = n(64700),
    i = n(417597),
    r = n(590180),
    a = n(4227),
    c = n(993408),
    o = n(985018),
    u = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let d = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, i.bG)([a.A], () => a.A.purchases),
            [t, n] = (0, i.yK)([r.A], () => [r.A.categories, r.A.products]);
        return (0, s.useMemo)(() => {
            let l = (0, c.zd)(e, t).reduce(
                (t, l) => {
                    let s = e.get(l.skuId),
                        i = n.get(l.skuId),
                        r = null != s ? (0, c.gA)(s) : (0, c.G0)(i),
                        a = i?.isCategoryReward ?? !1;
                    return (
                        r ? t.premium_purchase.push(l) : null != s ? t.purchase.push(l) : r || a || t.preview.push(l), t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [d, m, ...l.purchase], height: 12, header: o.intl.string(o.t.WfGV52) },
                {
                    section: "premium_purchase",
                    items: l.premium_purchase,
                    height: 12,
                    header: o.intl.string(o.t.TiLCgw),
                },
                { section: "preview", items: l.preview, height: 12, header: o.intl.string(o.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, e, n]);
    };
