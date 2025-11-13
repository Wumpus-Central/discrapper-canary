n.d(t, {
    $0: () => d,
    ZP: () => h,
}),
    n(388685),
    n(539854);
var l,
    r = n(647438),
    i = n(399606),
    s = n(597688),
    a = n(1870),
    o = n(884697),
    c = n(235897),
    u = n(388032),
    d = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let p = { skuId: "None" },
    m = { skuId: "Shop" },
    h = () => {
        let e = (0, i.e7)([a.Z], () => a.Z.purchases),
            [t, n] = (0, i.Wu)([s.Z], () => [s.Z.categories, s.Z.products]);
        return (
            c.Z.useConfig({ location: "use nameplate sections" }),
            (0, r.useMemo)(() => {
                let l = (0, o.Y)(e, t).reduce(
                    (t, l) => {
                        let r = e.get(l.skuId),
                            i = (0, o.G1)(null != r ? r : n.get(l.skuId));
                        return (
                            i ? t.premium_purchase.push(l) : null != r ? t.purchase.push(l) : i || t.preview.push(l), t
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
                        header: u.intl.string(u.t.WfGV52),
                    },
                    {
                        section: "premium_purchase",
                        items: l.premium_purchase,
                        height: 12,
                        header: u.intl.string(u.t.TiLCgw),
                    },
                    {
                        section: "preview",
                        items: l.preview,
                        height: 12,
                        header: u.intl.string(u.t["1vbbee"]),
                    },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, e, n])
        );
    };
