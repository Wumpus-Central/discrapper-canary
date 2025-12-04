n.d(t, {
    $0: () => d,
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
    u = n(388032),
    d = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let p = { skuId: "None" },
    m = { skuId: "Shop" },
    g = () => {
        let e = (0, i.e7)([a.Z], () => a.Z.purchases),
            [t, n] = (0, i.Wu)([s.Z], () => [s.Z.categories, s.Z.products]);
        return (
            c.Z.useConfig({ location: "use nameplate sections" }),
            (0, r.useMemo)(() => {
                let l = (0, o.Y)(e, t).reduce(
                    (t, l) => {
                        var r;
                        let i = e.get(l.skuId),
                            s = n.get(l.skuId),
                            a = (0, o.G1)(null != i ? i : s),
                            c = null != (r = null == s ? void 0 : s.isCategoryReward) && r;
                        return (
                            a
                                ? t.premium_purchase.push(l)
                                : null != i
                                  ? t.purchase.push(l)
                                  : a || c || t.preview.push(l),
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
