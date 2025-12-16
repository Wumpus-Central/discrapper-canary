n.d(t, {
    $0: () => u,
    Tm: () => d,
    ZP: () => p,
    oT: () => f,
}),
    n(388685),
    n(539854);
var r,
    i = n(473749),
    l = n(399606),
    o = n(597688),
    s = n(1870),
    c = n(884697),
    a = n(388032),
    u = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let d = { skuId: "None" },
    f = { skuId: "Shop" },
    p = () => {
        let e = (0, l.e7)([s.Z], () => s.Z.purchases),
            [t, n] = (0, l.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
        return (0, i.useMemo)(() => {
            let r = (0, c.yn)(e, t).reduce(
                (t, r) => {
                    let i = e.get(r.skuId);
                    return (
                        (null != i ? (0, c.qS)(i) : (0, c.G1)(n.get(r.skuId)))
                            ? t.premium_purchase.push(r)
                            : null != i
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
                    items: [d, f, ...r.purchase],
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
