n.d(t, {
    $0: () => u,
    ZP: () => g,
}),
    n(388685),
    n(539854);
var l,
    r = n(473749),
    i = n(399606),
    a = n(597688),
    s = n(1870),
    o = n(884697),
    c = n(235897),
    d = n(388032),
    u = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let p = { skuId: "None" },
    m = { skuId: "Shop" },
    g = () => {
        let e = (0, i.e7)([s.Z], () => s.Z.purchases),
            [t, n] = (0, i.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
        return (
            c.Z.useConfig({ location: "use nameplate sections" }),
            (0, r.useMemo)(() => {
                let l = (0, o.Y)(e, t).reduce(
                    (t, l) => {
                        var r;
                        let i = e.get(l.skuId),
                            a = n.get(l.skuId),
                            s = null != i ? (0, o.qS)(i) : (0, o.G1)(a),
                            c = null != (r = null == a ? void 0 : a.isCategoryReward) && r;
                        return (
                            s
                                ? t.premium_purchase.push(l)
                                : null != i
                                  ? t.purchase.push(l)
                                  : s || c || t.preview.push(l),
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
