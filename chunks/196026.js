r.d(t, {
    Ay: () => p,
    ZK: () => m,
    dP: () => d,
    wn: () => u,
}),
    r(896048),
    r(321073);
var n,
    l = r(64700),
    i = r(417597),
    a = r(590180),
    s = r(4227),
    c = r(993408),
    o = r(985018),
    u = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let d = {
        skuId: "None",
    },
    m = {
        skuId: "Shop",
    },
    p = () => {
        let e = (0, i.bG)([s.A], () => s.A.purchases),
            [t, r] = (0, i.yK)([a.A], () => [a.A.categories, a.A.products]);
        return (0, l.useMemo)(() => {
            let n = (0, c.ps)(e, t).reduce(
                (t, n) => {
                    let l = e.get(n.skuId);
                    return (
                        (null != l ? (0, c.gA)(l) : (0, c.G0)(r.get(n.skuId)))
                            ? t.premium_purchase.push(n)
                            : null != l
                              ? t.purchase.push(n)
                              : t.preview.push(n),
                        t
                    );
                },
                {
                    purchase: [],
                    premium_purchase: [],
                    preview: [],
                },
            );
            return [
                {
                    section: "purchase",
                    items: [d, m, ...n.purchase],
                    height: 12,
                    header: o.intl.string(o.t.VqmVqE),
                },
                {
                    section: "premium_purchase",
                    items: n.premium_purchase,
                    height: 12,
                    header: o.intl.string(o.t.TiLCgw),
                },
                {
                    section: "preview",
                    items: n.preview,
                    height: 12,
                    header: o.intl.string(o.t["1vbbee"]),
                },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, r, e]);
    };
