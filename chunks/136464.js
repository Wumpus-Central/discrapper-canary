r.d(t, { Ay: () => x, ZK: () => m, dP: () => u, wn: () => d }), r(321073);
var s,
    i = r(64700),
    n = r(417597),
    l = r(590180),
    a = r(4227),
    o = r(993408),
    c = r(985018),
    d = (((s = {}).PURCHASE = "purchase"), (s.PREMIUM_PURCHASE = "premium_purchase"), (s.PREVIEW = "preview"), s);
let u = { skuId: "None" },
    m = { skuId: "Shop" },
    x = () => {
        let e = (0, n.bG)([a.A], () => a.A.purchases),
            [t, r] = (0, n.yK)([l.A], () => [l.A.categories, l.A.products]);
        return (0, i.useMemo)(() => {
            let s = (0, o.ps)(e, t).reduce(
                (t, s) => {
                    let i = e.get(s.skuId);
                    return (
                        (null != i ? (0, o.gA)(i) : (0, o.G0)(r.get(s.skuId)))
                            ? t.premium_purchase.push(s)
                            : null != i
                              ? t.purchase.push(s)
                              : t.preview.push(s),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, m, ...s.purchase], height: 12, header: c.intl.string(c.t.VqmVqE) },
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
        }, [t, r, e]);
    };
