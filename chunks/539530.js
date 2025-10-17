n.d(t, {
    $0: () => u,
    ZP: () => m,
}),
    n(388685),
    n(539854);
var r,
    i = n(647438),
    a = n(399606),
    l = n(597688),
    s = n(1870),
    o = n(884697),
    c = n(235897),
    d = n(388032),
    u = (((r = {}).PURCHASE = "purchase"), (r.PREMIUM_PURCHASE = "premium_purchase"), (r.PREVIEW = "preview"), r);
let p = { skuId: "None" },
    _ = { skuId: "Shop" },
    m = () => {
        let e = (0, a.e7)([s.Z], () => s.Z.purchases),
            [t, n] = (0, a.Wu)([l.Z], () => [l.Z.categories, l.Z.products]);
        return (
            c.Z.useConfig({ location: "use nameplate sections" }),
            (0, i.useMemo)(() => {
                let r = (0, o.Y)(e, t).reduce(
                    (t, r) => {
                        let i = e.get(r.skuId),
                            a = (0, o.G1)(null != i ? i : n.get(r.skuId));
                        return (
                            a ? t.premium_purchase.push(r) : null != i ? t.purchase.push(r) : a || t.preview.push(r), t
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
                        items: [p, _, ...r.purchase],
                        height: 12,
                        header: d.intl.string(d.t["WfGV5+"]),
                    },
                    {
                        section: "premium_purchase",
                        items: r.premium_purchase,
                        height: 12,
                        header: d.intl.string(d.t.TiLCg4),
                    },
                    {
                        section: "preview",
                        items: r.preview,
                        height: 12,
                        header: d.intl.string(d.t["1vbbeX"]),
                    },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, e, n])
        );
    };
