n.d(t, {
    $0: () => u,
    ZP: () => m,
}),
    n(388685),
    n(539854);
var l,
    i = n(647438),
    r = n(399606),
    s = n(597688),
    a = n(1870),
    o = n(884697),
    c = n(388032),
    u = (((l = {}).PURCHASE = "purchase"), (l.PREMIUM_PURCHASE = "premium_purchase"), (l.PREVIEW = "preview"), l);
let d = { id: "None" },
    p = { id: "Shop" },
    m = () => {
        let e = (0, r.e7)([a.Z], () => a.Z.purchases),
            [t, n] = (0, r.Wu)([s.Z], () => [s.Z.categories, s.Z.products]);
        return (0, i.useMemo)(() => {
            let l = (0, o.Y)(e, t).reduce(
                (t, l) => {
                    let i = e.get(l.skuId),
                        r = (0, o.G1)(null != i ? i : n.get(l.skuId));
                    return r ? t.premium_purchase.push(l) : null != i ? t.purchase.push(l) : r || t.preview.push(l), t;
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
                    items: [d, p, ...l.purchase],
                    height: 12,
                    header: c.intl.string(c.t["WfGV5+"]),
                },
                {
                    section: "premium_purchase",
                    items: l.premium_purchase,
                    height: 12,
                    header: c.intl.string(c.t.TiLCg4),
                },
                {
                    section: "preview",
                    items: l.preview,
                    height: 12,
                    header: c.intl.string(c.t["1vbbeX"]),
                },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, e, n]);
    };
