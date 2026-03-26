n.d(t, { Ay: () => p, ZK: () => m, dP: () => u, wn: () => d }), n(321073);
var r,
    i = n(64700),
    s = n(417597),
    l = n(590180),
    a = n(4227),
    c = n(993408),
    o = n(985018),
    d = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, s.bG)([a.A], () => a.A.purchases),
            [t, n] = (0, s.yK)([l.A], () => [l.A.categories, l.A.products]);
        return (0, i.useMemo)(() => {
            let r = (0, c.wo)(e, t).reduce(
                (t, r) => {
                    let i = e.get(r.skuId);
                    return (
                        (null != i ? (0, c.gA)(i) : (0, c.G0)(n.get(r.skuId)))
                            ? t.premium_purchase.push(r)
                            : null != i
                              ? t.purchase.push(r)
                              : t.preview.push(r),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...r.purchase], height: 12, header: o.intl.string(o.t["9x1v/p"]) },
                {
                    section: "premium_purchase",
                    items: r.premium_purchase,
                    height: 12,
                    header: o.intl.string(o.t.TiLCgw),
                },
                { section: "preview", items: r.preview, height: 12, header: o.intl.string(o.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e]);
    };
