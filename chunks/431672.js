s.d(t, { Ay: () => p, ZK: () => m, dP: () => u, wn: () => d }), s(321073);
var n,
    l = s(64700),
    r = s(417597),
    i = s(590180),
    a = s(4227),
    o = s(993408),
    c = s(985018),
    d = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, r.bG)([a.A], () => a.A.purchases),
            [t, s] = (0, r.yK)([i.A], () => [i.A.categories, i.A.products]);
        return (0, l.useMemo)(() => {
            let n = (0, o.MG)(e, t).reduce(
                (t, n) => {
                    let l = e.get(n.skuId);
                    return (
                        (null != l ? (0, o.gA)(l) : (0, o.G0)(s.get(n.skuId)))
                            ? t.premium_purchase.push(n)
                            : null != l
                              ? t.purchase.push(n)
                              : t.preview.push(n),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...n.purchase], height: 12, header: c.intl.string(c.t["9eZ4aO"]) },
                {
                    section: "premium_purchase",
                    items: n.premium_purchase,
                    height: 12,
                    header: c.intl.string(c.t.TiLCgw),
                },
                { section: "preview", items: n.preview, height: 12, header: c.intl.string(c.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, s, e]);
    };
