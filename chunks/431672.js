n.d(t, { Ay: () => p, ZK: () => m, dP: () => u, wn: () => d }), n(321073);
var s,
    r = n(64700),
    i = n(417597),
    l = n(590180),
    a = n(4227),
    o = n(993408),
    c = n(985018),
    d = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, i.bG)([a.A], () => a.A.purchases),
            [t, n] = (0, i.yK)([l.A], () => [l.A.categories, l.A.products]);
        return (0, r.useMemo)(() => {
            let s = (0, o.MG)(e, t).reduce(
                (t, s) => {
                    let r = e.get(s.skuId);
                    return (
                        (null != r ? (0, o.gA)(r) : (0, o.G0)(n.get(s.skuId)))
                            ? t.premium_purchase.push(s)
                            : null != r
                              ? t.purchase.push(s)
                              : t.preview.push(s),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...s.purchase], height: 12, header: c.intl.string(c.t["9eZ4aO"]) },
                {
                    section: "premium_purchase",
                    items: s.premium_purchase,
                    height: 12,
                    header: c.intl.string(c.t.TiLCgw),
                },
                { section: "preview", items: s.preview, height: 12, header: c.intl.string(c.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e]);
    };
