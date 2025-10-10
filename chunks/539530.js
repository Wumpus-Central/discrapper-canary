n.d(t, {
    $0: () => u,
    ZP: () => _,
}),
    n(388685),
    n(539854);
var i,
    r = n(647438),
    a = n(399606),
    l = n(597688),
    s = n(1870),
    o = n(884697),
    c = n(235897),
    d = n(388032),
    u = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let p = { skuId: "None" },
    m = { skuId: "Shop" },
    _ = () => {
        let e = (0, a.e7)([s.Z], () => s.Z.purchases),
            [t, n] = (0, a.Wu)([l.Z], () => [l.Z.categories, l.Z.products]);
        return (
            c.Z.useConfig({ location: "use nameplate sections" }),
            (0, r.useMemo)(() => {
                let i = (0, o.Y)(e, t).reduce(
                    (t, i) => {
                        let r = e.get(i.skuId),
                            a = (0, o.G1)(null != r ? r : n.get(i.skuId));
                        return (
                            a ? t.premium_purchase.push(i) : null != r ? t.purchase.push(i) : a || t.preview.push(i), t
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
                        items: [p, m, ...i.purchase],
                        height: 12,
                        header: d.intl.string(d.t["WfGV5+"]),
                    },
                    {
                        section: "premium_purchase",
                        items: i.premium_purchase,
                        height: 12,
                        header: d.intl.string(d.t.TiLCg4),
                    },
                    {
                        section: "preview",
                        items: i.preview,
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
