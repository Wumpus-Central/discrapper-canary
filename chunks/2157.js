n.d(t, { D: () => p, b: () => h });
var l = n(582128),
    i = n(17928),
    r = n(561573),
    a = n(240248),
    s = n(936785),
    o = n(296045),
    u = n(556766),
    c = n(459005),
    d = n(206285),
    m = n(105292);
function p(e) {
    let { surface: t, applicationId: n, skuId: p } = e,
        h = (0, u.m)(n),
        C = (0, i.bG)([r.A], () => r.A.getPromotionIdsForSkuId(p), [p]),
        f = (0, o.x)({ surface: t, skuId: p }),
        E = l.useMemo(() => {
            if (null == h) return null;
            for (let e of C ?? []) {
                let t = h[e];
                if (null != t) return t;
            }
            for (let e of f) {
                let t = h[e.promotionId];
                if (null != t) return t;
            }
            return null;
        }, [h, C, f]),
        S = (0, c.n)({ surface: t, skuId: p });
    return l.useMemo(() => {
        if (null == E) return null;
        let e = (0, s.RD)(E.endsAt);
        switch (t) {
            case "gift_customization": {
                if (null == S) return null;
                let t = (0, s.Ew)(E.checkout?.label ?? null, S.amount);
                if ((0, a.uJ)(t)) return null;
                return {
                    Icon: (0, s.LZ)(E.checkout?.icon ?? null),
                    text: t,
                    tooltip: (0, s.Ew)(E.checkout?.tooltip ?? null, S.amount),
                    endsAt: e,
                    flavor: E.flavor,
                    rewardRequirements: E.rewardRequirements,
                };
            }
            case "pdp":
            case "card": {
                let t = E.pdp,
                    n = (0, s.Ew)(t?.label ?? null, S?.amount ?? null);
                if ((0, a.uJ)(n)) return null;
                return {
                    Icon: (0, s.LZ)(t?.icon ?? null),
                    text: n,
                    tooltip: (0, s.Ew)(t?.tooltip ?? null, S?.amount ?? null),
                    endsAt: e,
                    flavor: E.flavor,
                    rewardRequirements: E.rewardRequirements,
                };
            }
            case "sku_purchase_badge":
            case "sku_gift_badge": {
                if (null == S) return null;
                let n = "sku_gift_badge" === t ? E.checkout : E.pdp,
                    l = (0, s.Ew)(n?.label ?? null, S.amount);
                if ((0, a.uJ)(l)) return null;
                return {
                    Icon: (0, s.LZ)("TAG"),
                    text: m.intl.string(d.default.hriMCc),
                    tooltip: (0, s.Ew)(n?.tooltip ?? null, S.amount),
                    endsAt: e,
                    flavor: E.flavor,
                    rewardRequirements: E.rewardRequirements,
                };
            }
        }
    }, [t, E, S]);
}
function h(e) {
    let { surface: t, applicationId: n, skuId: i } = e,
        r = p({ surface: t, applicationId: n, skuId: i }),
        a = (0, c.n)({ surface: t, skuId: i }),
        s = (0, o.x)({ surface: t, skuId: i });
    return l.useMemo(() => ({ display: r, reward: a, offers: s }), [r, a, s]);
}
