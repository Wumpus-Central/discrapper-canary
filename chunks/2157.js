n.d(t, { D: () => h, b: () => C });
var l = n(582128),
    i = n(17928),
    r = n(561573),
    a = n(240248),
    s = n(936785),
    o = n(640363),
    u = n(296045),
    c = n(556766),
    d = n(459005),
    m = n(206285),
    p = n(105292);
function h(e) {
    let { surface: t, applicationId: n, skuId: h } = e,
        C = (0, c.m)(n),
        f = (0, i.bG)([r.A], () => r.A.getPromotionIdsForSkuId(h), [h]),
        E = (0, u.x)({ surface: t, skuId: h }),
        S = l.useMemo(() => {
            if (null == C) return null;
            for (let e of f ?? []) {
                let t = C[e];
                if (null != t) return t;
            }
            for (let e of E) {
                let t = C[e.promotionId];
                if (null != t) return t;
            }
            return null;
        }, [C, f, E]),
        g = (0, d.n)({ surface: t, skuId: h }),
        I = (0, o.j)(S, "pdp.label"),
        A = (0, o.j)(S, "pdp.tooltip"),
        y = (0, o.j)(S, "checkout.label"),
        x = (0, o.j)(S, "checkout.tooltip");
    return (
        (0, o.P)(n, t),
        l.useMemo(() => {
            if (null == S) return null;
            let e = (0, s.RD)(S.endsAt);
            switch (t) {
                case "gift_customization": {
                    if (null == g) return null;
                    let t = (0, s.Ew)(y, g.amount);
                    if ((0, a.uJ)(t)) return null;
                    return {
                        Icon: (0, s.LZ)(S.checkout?.icon ?? null),
                        text: t,
                        tooltip: (0, s.Ew)(x, g.amount),
                        endsAt: e,
                        flavor: S.flavor,
                        rewardRequirements: S.rewardRequirements,
                    };
                }
                case "pdp":
                case "card": {
                    let t = S.pdp,
                        n = (0, s.Ew)(I, g?.amount ?? null);
                    if ((0, a.uJ)(n)) return null;
                    return {
                        Icon: (0, s.LZ)(t?.icon ?? null),
                        text: n,
                        tooltip: (0, s.Ew)(A, g?.amount ?? null),
                        endsAt: e,
                        flavor: S.flavor,
                        rewardRequirements: S.rewardRequirements,
                    };
                }
                case "sku_purchase_badge":
                case "sku_gift_badge": {
                    if (null == g) return null;
                    let n = "sku_gift_badge" === t ? y : I,
                        l = "sku_gift_badge" === t ? x : A,
                        i = (0, s.Ew)(n, g.amount);
                    if ((0, a.uJ)(i)) return null;
                    return {
                        Icon: (0, s.LZ)("TAG"),
                        text: p.intl.string(m.default.hriMCc),
                        tooltip: (0, s.Ew)(l, g.amount),
                        endsAt: e,
                        flavor: S.flavor,
                        rewardRequirements: S.rewardRequirements,
                    };
                }
            }
        }, [t, S, g, I, A, y, x])
    );
}
function C(e) {
    let { surface: t, applicationId: n, skuId: i } = e,
        r = h({ surface: t, applicationId: n, skuId: i }),
        a = (0, d.n)({ surface: t, skuId: i }),
        s = (0, u.x)({ surface: t, skuId: i });
    return l.useMemo(() => ({ display: r, reward: a, offers: s }), [r, a, s]);
}
