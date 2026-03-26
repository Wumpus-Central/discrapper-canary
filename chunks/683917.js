l.d(t, { Ay: () => p, wn: () => d }), l(321073);
var n,
    s = l(64700),
    i = l(417597),
    r = l(590180),
    a = l(4227),
    c = l(993408),
    o = l(985018),
    d = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, i.bG)([a.A], () => a.A.purchases),
            [t, l] = (0, i.yK)([r.A], () => [r.A.categories, r.A.products]);
        return (0, s.useMemo)(() => {
            let n = (0, c.zd)(e, t).reduce(
                (t, n) => {
                    let s = e.get(n.skuId),
                        i = l.get(n.skuId),
                        r = null != s ? (0, c.gA)(s) : (0, c.G0)(i),
                        a = i?.isCategoryReward ?? !1;
                    return (
                        r ? t.premium_purchase.push(n) : null != s ? t.purchase.push(n) : r || a || t.preview.push(n), t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...n.purchase], height: 12, header: o.intl.string(o.t.WfGV52) },
                {
                    section: "premium_purchase",
                    items: n.premium_purchase,
                    height: 12,
                    header: o.intl.string(o.t.TiLCgw),
                },
                { section: "preview", items: n.preview, height: 12, header: o.intl.string(o.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, e, l]);
    };
