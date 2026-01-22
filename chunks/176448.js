n.d(t, {
    Ay: () => f,
    ZK: () => p,
    dP: () => d,
    wn: () => u,
}),
    n(896048),
    n(321073);
var r,
    l = n(64700),
    i = n(417597),
    s = n(590180),
    c = n(4227),
    o = n(993408),
    a = n(985018),
    u = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let d = { skuId: "None" },
    p = { skuId: "Shop" },
    f = () => {
        let e = (0, i.bG)([c.A], () => c.A.purchases),
            [t, n] = (0, i.yK)([s.A], () => [s.A.categories, s.A.products]);
        return (0, l.useMemo)(() => {
            let r = (0, o.wo)(e, t).reduce(
                (t, r) => {
                    let l = e.get(r.skuId);
                    return (
                        (null != l ? (0, o.gA)(l) : (0, o.G0)(n.get(r.skuId)))
                            ? t.premium_purchase.push(r)
                            : null != l
                              ? t.purchase.push(r)
                              : t.preview.push(r),
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
                    items: [d, p, ...r.purchase],
                    height: 12,
                    header: a.intl.string(a.t["9x1v/p"]),
                },
                {
                    section: "premium_purchase",
                    items: r.premium_purchase,
                    height: 12,
                    header: a.intl.string(a.t.TiLCgw),
                },
                {
                    section: "preview",
                    items: r.preview,
                    height: 12,
                    header: a.intl.string(a.t["1vbbee"]),
                },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e]);
    };
