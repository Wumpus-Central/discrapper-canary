var r = e(582128),
    u = e(855986),
    l = e(561573),
    i = e(918467),
    o = e(288106),
    a = e(313217),
    s = e(652215);
function c(n, t) {
    if (null == t || t.currency === s.Yri.DISCORD_ORB) return null;
    let e = n?.find((n) => n.currency === t.currency);
    return null == e || e.amount >= t.amount ? null : { ...t, amount: e.amount };
}
function d(n, t) {
    let e = null == n.startsAt || n.startsAt.getTime() <= t,
        r = null != n.endsAt && n.endsAt.getTime() <= t;
    return e && !r;
}
function f(n, t) {
    return (n ?? []).map((n) => t?.find((t) => t.id === n));
}
e.d(
    t,
    {},
    {
        QV: function (n) {
            let { storefrontPrices: t, nonPromoPrice: e } = n;
            return c(t?.[o.QK.SELF_PURCHASE]?.userPrice, e);
        },
        f3: function (n) {
            let { storefrontPrices: t, premiumPrice: e } = n;
            return c(t?.[o.QK.SELF_PURCHASE]?.prices[s.FBC.PREMIUM_TIER_2]?.[o.v8.DISCOUNTED], e);
        },
        us: d,
        vF: function (n, t) {
            let e = (0, a.s)(t),
                o = (0, u.bG)([l.A], () => (e ? l.A.getPricesForSkuId(n) : void 0)),
                c = (0, u.bG)([l.A], () => (e ? l.A.getPromotionIdsForSkuId(n) : void 0)),
                E = (0, u.bG)([i.A], () => (e ? i.A.getPromotionsForApplication(s.FYj) : null)),
                m = (function (n, t) {
                    let [e, u] = r.useState(Date.now),
                        l = (function (n) {
                            let { pricingPromotionIds: t, promotions: e, now: r } = n,
                                u = null;
                            for (let n of f(t, e))
                                for (let t of [n?.startsAt?.getTime(), n?.endsAt?.getTime()])
                                    null != t && t > r && (null == u || t < u) && (u = t);
                            return u;
                        })({ pricingPromotionIds: n, promotions: t, now: e });
                    return (
                        r.useEffect(() => {
                            if (null == l) return;
                            let n = setTimeout(() => u(Date.now()), Math.min(Math.max(l - Date.now(), 0), 0x7fffffff));
                            return () => clearTimeout(n);
                        }, [l, e]),
                        e
                    );
                })(c, E);
            return !(function (n) {
                let { pricingPromotionIds: t, promotions: e, now: r } = n,
                    u = f(t, e);
                return u.length > 0 && u.every((n) => null != n && d(n, r));
            })({ pricingPromotionIds: c, promotions: E, now: m })
                ? void 0
                : o;
        },
    },
);
