l.d(t, {
    Ay: () => x,
    wn: () => d,
}),
    l(896048),
    l(321073);
var n,
    r = l(64700),
    i = l(417597),
    s = l(590180),
    a = l(4227),
    c = l(993408),
    o = l(638242),
    u = l(985018),
    d = (((n = {}).PURCHASE = "purchase"), (n.PREMIUM_PURCHASE = "premium_purchase"), (n.PREVIEW = "preview"), n);
let m = {
        skuId: "None",
    },
    p = {
        skuId: "Shop",
    },
    x = () => {
        let e = (0, i.bG)([a.A], () => a.A.purchases),
            [t, l] = (0, i.yK)([s.A], () => [s.A.categories, s.A.products]);
        return (
            o.A.useConfig({
                location: "use nameplate sections",
            }),
            (0, r.useMemo)(() => {
                let n = (0, c.zd)(e, t).reduce(
                    (t, n) => {
                        var r;
                        let i = e.get(n.skuId),
                            s = l.get(n.skuId),
                            a = null != i ? (0, c.gA)(i) : (0, c.G0)(s),
                            o = null != (r = null == s ? void 0 : s.isCategoryReward) && r;
                        return (
                            a
                                ? t.premium_purchase.push(n)
                                : null != i
                                  ? t.purchase.push(n)
                                  : a || o || t.preview.push(n),
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
                        items: [m, p, ...n.purchase],
                        height: 12,
                        header: u.intl.string(u.t.WfGV52),
                    },
                    {
                        section: "premium_purchase",
                        items: n.premium_purchase,
                        height: 12,
                        header: u.intl.string(u.t.TiLCgw),
                    },
                    {
                        section: "preview",
                        items: n.preview,
                        height: 12,
                        header: u.intl.string(u.t["1vbbee"]),
                    },
                ].filter((e) => {
                    let { items: t } = e;
                    return t.length > 0;
                });
            }, [t, e, l])
        );
    };
