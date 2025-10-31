n.d(t, {
    $0: () => u,
    ZP: () => x,
}),
    n(388685),
    n(539854);
var l,
    i = n(647438),
    r = n(399606),
    s = n(597688),
    a = n(1870),
    o = n(884697),
    c = n(235897),
    d = n(388032),
    u = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let p = { skuId: "None" },
    m = { skuId: "Shop" },
    x = () => {
        let e = (0, r.e7)([a.Z], () => a.Z.purchases),
            [t, n] = (0, r.Wu)([s.Z], () => [s.Z.categories, s.Z.products]);
        return (
            c.Z.useConfig({ location: "use nameplate sections" }),
            (0, i.useMemo)(() => {
                let l = (0, o.Y)(e, t).reduce(
                    (t, l) => {
                        let i = e.get(l.skuId),
                            r = (0, o.G1)(null != i ? i : n.get(l.skuId));
                        return (
                            r ? t.premium_purchase.push(l) : null != i ? t.purchase.push(l) : r || t.preview.push(l), t
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
                        items: [p, m, ...l.purchase],
                        height: 12,
                        header: d.intl.string(d.t.WfGV52),
                    },
                    {
                        section: "premium_purchase",
                        items: l.premium_purchase,
                        height: 12,
                        header: d.intl.string(d.t.TiLCgw),
                    },
                    {
                        section: "preview",
                        items: l.preview,
                        height: 12,
                        header: d.intl.string(d.t["1vbbee"]),
                    },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, e, n])
        );
    };
