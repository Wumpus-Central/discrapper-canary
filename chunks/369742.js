"use strict";
r.d(t, { Ay: () => _, ZK: () => p, dP: () => u, wn: () => d }), r(321073);
var i,
    n = r(64700),
    s = r(417597),
    a = r(590180),
    l = r(4227),
    c = r(993408),
    o = r(985018),
    d = (((i = {}).PURCHASE = "purchase"), (i.PREMIUM_PURCHASE = "premium_purchase"), (i.PREVIEW = "preview"), i);
let u = { skuId: "None" },
    p = { skuId: "Shop" },
    _ = () => {
        let e = (0, s.bG)([l.A], () => l.A.purchases),
            [t, r] = (0, s.yK)([a.A], () => [a.A.categories, a.A.products]);
        return (0, n.useMemo)(() => {
            let i = (0, c.wo)(e, t).reduce(
                (t, i) => {
                    let n = e.get(i.skuId);
                    return (
                        (null != n ? (0, c.gA)(n) : (0, c.G0)(r.get(i.skuId)))
                            ? t.premium_purchase.push(i)
                            : null != n
                              ? t.purchase.push(i)
                              : t.preview.push(i),
                        t
                    );
                },
                { purchase: [], premium_purchase: [], preview: [] },
            );
            return [
                { section: "purchase", items: [u, p, ...i.purchase], height: 12, header: o.intl.string(o.t["9x1v/p"]) },
                {
                    section: "premium_purchase",
                    items: i.premium_purchase,
                    height: 12,
                    header: o.intl.string(o.t.TiLCgw),
                },
                { section: "preview", items: i.preview, height: 12, header: o.intl.string(o.t["1vbbee"]) },
            ].filter((e) => {
                let { items: t } = e;
                return t.length > 0;
            });
        }, [t, r, e]);
    };
