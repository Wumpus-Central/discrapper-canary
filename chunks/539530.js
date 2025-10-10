n.d(t, {
    $0: () => u,
    ZP: () => m,
}),
    n(388685),
    n(539854);
var i,
    r = n(647438),
    a = n(399606),
    l = n(597688),
    o = n(1870),
    s = n(884697),
    c = n(235897),
    d = n(388032),
    u = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let p = { id: "None" },
    _ = { id: "Shop" },
    m = () => {
        let e = (0, a.e7)([o.Z], () => o.Z.purchases),
            [t, n] = (0, a.Wu)([l.Z], () => [l.Z.categories, l.Z.products]);
        return (
            c.Z.useConfig({ location: "use nameplate sections" }),
            (0, r.useMemo)(() => {
                let i = (0, s.Y)(e, t).reduce(
                    (t, i) => {
                        let r = e.get(i.skuId),
                            a = (0, s.G1)(null != r ? r : n.get(i.skuId));
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
                        items: [p, _, ...i.purchase],
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
