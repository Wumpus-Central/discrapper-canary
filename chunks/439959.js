r.d(t, {
    $0: () => u,
    Tm: () => d,
    ZP: () => p,
    oT: () => m,
}),
    r(388685),
    r(539854);
var n,
    i = r(473749),
    l = r(399606),
    s = r(597688),
    a = r(1870),
    o = r(884697),
    c = r(388032),
    u = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let d = { skuId: "None" },
    m = { skuId: "Shop" },
    p = () => {
        let e = (0, l.e7)([a.Z], () => a.Z.purchases),
            [t, r] = (0, l.Wu)([s.Z], () => [s.Z.categories, s.Z.products]);
        return (0, i.useMemo)(() => {
            let n = (0, o.iC)(e, t).reduce(
                (t, n) => {
                    let i = e.get(n.skuId);
                    return (
                        (0, o.G1)(null != i ? i : r.get(n.skuId))
                            ? t.premium_purchase.push(n)
                            : null != i
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
                    header: c.intl.string(c.t.VqmVqE),
                },
                {
                    section: "premium_purchase",
                    items: n.premium_purchase,
                    height: 12,
                    header: c.intl.string(c.t.TiLCgw),
                },
                {
                    section: "preview",
                    items: n.preview,
                    height: 12,
                    header: c.intl.string(c.t["1vbbee"]),
                },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, r, e]);
    };
