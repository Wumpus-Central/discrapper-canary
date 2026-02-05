n.d(t, { Ay: () => x, wn: () => d }), n(321073);
var l,
    i = n(64700),
    s = n(417597),
    r = n(590180),
    a = n(4227),
    c = n(993408),
    o = n(638242),
    u = n(985018),
    d = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let m = { skuId: "None" },
    p = { skuId: "Shop" },
    x = () => {
        let e = (0, s.bG)([a.A], () => a.A.purchases),
            [t, n] = (0, s.yK)([r.A], () => [r.A.categories, r.A.products]);
        return (
            o.A.useConfig({ location: "use nameplate sections" }),
            (0, i.useMemo)(() => {
                let l = (0, c.zd)(e, t).reduce(
                    (t, l) => {
                        let i = e.get(l.skuId),
                            s = n.get(l.skuId),
                            r = null != i ? (0, c.gA)(i) : (0, c.G0)(s),
                            a = s?.isCategoryReward ?? !1;
                        return (
                            r
                                ? t.premium_purchase.push(l)
                                : null != i
                                  ? t.purchase.push(l)
                                  : r || a || t.preview.push(l),
                            t
                        );
                    },
                    { purchase: [], premium_purchase: [], preview: [] },
                );
                return [
                    {
                        section: "purchase",
                        items: [m, p, ...l.purchase],
                        height: 12,
                        header: u.intl.string(u.t.WfGV52),
                    },
                    {
                        section: "premium_purchase",
                        items: l.premium_purchase,
                        height: 12,
                        header: u.intl.string(u.t.TiLCgw),
                    },
                    { section: "preview", items: l.preview, height: 12, header: u.intl.string(u.t["1vbbee"]) },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, e, n])
        );
    };
