n.d(t, {
    $0: () => u,
    Tm: () => d,
    ZP: () => p,
    oT: () => f,
}),
    n(388685),
    n(539854);
var r,
    i = n(647438),
    l = n(399606),
    s = n(597688),
    o = n(1870),
    c = n(884697),
    a = n(388032),
    u = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let d = { id: "None" },
    f = { id: "Shop" },
    p = () => {
        let e = (0, l.e7)([o.Z], () => o.Z.purchases),
            [t, n] = (0, l.Wu)([s.Z], () => [s.Z.categories, s.Z.products]);
        return (0, i.useMemo)(() => {
            let r = (0, c.yn)(e, t).reduce(
                (t, r) => {
                    let i = e.get(r.skuId);
                    return (
                        (0, c.G1)(n.get(r.skuId))
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
                    header: a.intl.string(a.t["9x1v/v"]),
                },
                {
                    section: "premium_purchase",
                    items: r.premium_purchase,
                    height: 12,
                    header: a.intl.string(a.t.TiLCg4),
                },
                {
                    section: "preview",
                    items: r.preview,
                    height: 12,
                    header: a.intl.string(a.t["1vbbeX"]),
                },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, n, e]);
    };
