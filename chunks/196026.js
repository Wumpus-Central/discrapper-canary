r.d(t, { Ay: () => x, ZK: () => m, dP: () => u, wn: () => d }), r(321073);
var n,
    s = r(64700),
    i = r(417597),
    a = r(590180),
    l = r(4227),
    o = r(993408),
    c = r(985018),
    d = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    x = () => {
        let e = (0, i.bG)([l.A], () => l.A.purchases),
            [t, r] = (0, i.yK)([a.A], () => [a.A.categories, a.A.products]);
        return (0, s.useMemo)(() => {
            let n = (0, o.ps)(e, t).reduce(
                (t, n) => {
                    let s = e.get(n.skuId);
                    return (
                        (null != s ? (0, o.gA)(s) : (0, o.G0)(r.get(n.skuId)))
                            ? t.premium_purchase.push(n)
                            : null != s
                              ? t.purchase.push(n)
                              : t.preview.push(n),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...n.purchase], height: 12, header: c.intl.string(c.t.VqmVqE) },
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
        }, [t, r, e]);
    };
