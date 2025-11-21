n.d(t, {
    $0: () => p,
    ZP: () => g,
}),
    n(388685),
    n(539854);
var l,
    r = n(473749),
    i = n(399606),
    s = n(597688),
    a = n(1870),
    o = n(884697),
    c = n(235897),
    u = n(215023),
    d = n(388032),
    p = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let m = { skuId: "None" },
    h = { skuId: "Shop" },
    g = () => {
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
                                i
                                    ? t.premium_purchase.push(l)
                                    : null != r
                                      ? t.purchase.push(l)
                                      : i || t.preview.push(l),
                                t
                            );
                        },
                        {
                            purchase: [],
                            premium_purchase: [],
                            preview: [],
                        },
                    ),
                    r = l.preview.filter(
                        (e) =>
                            !u.y8.some((t) => {
                                let { rewardSkuId: n } = t;
                                return n === e.skuId;
                            }),
                    );
                return [
                    {
                        section: "purchase",
                        items: [m, h, ...l.purchase],
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
                        items: r,
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
