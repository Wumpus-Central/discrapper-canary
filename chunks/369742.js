n.d(t, { Ay: () => p, ZK: () => m, dP: () => u, wn: () => d }), n(321073);
var r,
    s = n(64700),
    i = n(417597),
    l = n(590180),
    a = n(4227),
    o = n(993408),
    c = n(985018),
    d = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, i.bG)([a.A], () => a.A.purchases),
            [t, n] = (0, i.yK)([l.A], () => [l.A.categories, l.A.products]);
        return (0, s.useMemo)(() => {
            let r = (0, o.wo)(e, t).reduce(
                (t, r) => {
                    let s = e.get(r.skuId);
                    return (
                        (null != s ? (0, o.gA)(s) : (0, o.G0)(n.get(r.skuId)))
                            ? t.premium_purchase.push(r)
                            : null != s
                              ? t.purchase.push(r)
                              : t.preview.push(r),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...r.purchase], height: 12, header: c.intl.string(c.t["9x1v/p"]) },
                {
                    section: "premium_purchase",
                    items: r.premium_purchase,
                    height: 12,
                    header: c.intl.string(c.t.TiLCgw),
                },
                { section: "preview", items: r.preview, height: 12, header: c.intl.string(c.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e]);
    };
