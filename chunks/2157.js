var l = n(582128),
    i = n(855986),
    r = n(561573),
    a = n(240248),
    s = n(936785),
    o = n(879043),
    u = n(296045),
    c = n(556766),
    d = n(459005),
    m = n(25082),
    p = n(792996);
function C(e) {
    let { surface: t, applicationId: n, skuId: C } = e,
        h = (0, c.m)(n),
        f = (0, i.bG)([r.A], () => r.A.getPromotionIdsForSkuId(C), [C]),
        E = (0, u.x)({ surface: t, skuId: C }),
        S = l.useMemo(() => {
            if (null == h) return null;
            for (let e of f ?? []) {
                let t = h[e];
                if (null != t) return t;
            }
            for (let e of E) {
                let t = h[e.promotionId];
                if (null != t) return t;
            }
            return null;
        }, [h, f, E]),
        I = (0, d.n)({ surface: t, skuId: C }),
        g = (0, o.j)(S, "pdp.label"),
        y = (0, o.j)(S, "pdp.tooltip"),
        A = (0, o.j)(S, "checkout.label"),
        P = (0, o.j)(S, "checkout.tooltip");
    return (
        (0, o.P)(n, t),
        l.useMemo(() => {
            if (null == S) return null;
            let e = (0, s.RD)(S.endsAt);
            switch (t) {
                case "gift_customization": {
                    if (null == I) return null;
                    let t = (0, s.Ew)(A, I.amount);
                    if ((0, a.uJ)(t)) return null;
                    return {
                        Icon: (0, s.LZ)(S.checkout?.icon ?? null),
                        text: t,
                        tooltip: (0, s.Ew)(P, I.amount),
                        endsAt: e,
                        flavor: S.flavor,
                        rewardRequirements: S.rewardRequirements,
                    };
                }
                case "pdp":
                case "card": {
                    let t = S.pdp,
                        n = (0, s.Ew)(g, I?.amount ?? null);
                    if ((0, a.uJ)(n)) return null;
                    return {
                        Icon: (0, s.LZ)(t?.icon ?? null),
                        text: n,
                        tooltip: (0, s.Ew)(y, I?.amount ?? null),
                        endsAt: e,
                        flavor: S.flavor,
                        rewardRequirements: S.rewardRequirements,
                        rewardStatus: S.rewardStatus,
                    };
                }
                case "sku_purchase_badge":
                case "sku_gift_badge": {
                    if (null == I) return null;
                    let n = "sku_gift_badge" === t ? A : g,
                        l = "sku_gift_badge" === t ? P : y,
                        i = (0, s.Ew)(n, I.amount);
                    if ((0, a.uJ)(i)) return null;
                    return {
                        Icon: (0, s.LZ)("TAG"),
                        text: p.intl.string(m.default.hriMCc),
                        tooltip: (0, s.Ew)(l, I.amount),
                        endsAt: e,
                        flavor: S.flavor,
                        rewardRequirements: S.rewardRequirements,
                    };
                }
            }
        }, [t, S, I, g, y, A, P])
    );
}
n.d(
    t,
    {},
    {
        D: C,
        b: function (e) {
            let { surface: t, applicationId: n, skuId: i } = e,
                r = C({ surface: t, applicationId: n, skuId: i }),
                a = (0, d.n)({ surface: t, skuId: i }),
                s = (0, u.x)({ surface: t, skuId: i });
            return l.useMemo(() => ({ display: r, reward: a, offers: s }), [r, a, s]);
        },
    },
);
