var u = e(582128),
    r = e(855986),
    l = e(561573),
    o = e(918467),
    i = e(288106),
    a = e(313217),
    s = e(652215);
function c(n, t) {
    if (null == t || t.currency === s.Yri.DISCORD_ORB) return null;
    let e = n?.find((n) => n.currency === t.currency);
    return null == e || e.amount >= t.amount ? null : { ...t, amount: e.amount };
}
function d(n, t) {
    let e = null == n.startsAt || n.startsAt.getTime() <= t,
        u = null != n.endsAt && n.endsAt.getTime() <= t;
    return e && !u;
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
            return c(t?.[i.QK.SELF_PURCHASE]?.userPrice, e);
        },
        f3: function (n) {
            let { storefrontPrices: t, premiumPrice: e } = n;
            return c(t?.[i.QK.SELF_PURCHASE]?.prices[s.FBC.PREMIUM_TIER_2]?.[i.v8.DISCOUNTED], e);
        },
        us: d,
        vF: function (n, t) {
            let e = (0, a.s)(t),
                i = (0, r.bG)([l.A], () => (e ? l.A.getPricesForSkuId(n) : void 0)),
                c = (0, r.bG)([l.A], () => (e ? l.A.getPromotionIdsForSkuId(n) : void 0)),
                p = (0, r.bG)([o.A], () => (e ? o.A.getPromotionsForApplication(s.FYj) : null)),
                A = (function (n, t) {
                    let [e, r] = u.useState(Date.now),
                        l = (function (n) {
                            let { pricingPromotionIds: t, promotions: e, now: u } = n,
                                r = null;
                            for (let n of f(t, e))
                                for (let t of [n?.startsAt?.getTime(), n?.endsAt?.getTime()])
                                    null != t && t > u && (null == r || t < r) && (r = t);
                            return r;
                        })({ pricingPromotionIds: n, promotions: t, now: e });
                    return (
                        u.useEffect(() => {
                            if (null == l) return;
                            let n = setTimeout(() => r(Date.now()), Math.min(Math.max(l - Date.now(), 0), 0x7fffffff));
                            return () => clearTimeout(n);
                        }, [l, e]),
                        e
                    );
                })(c, p);
            return !(function (n) {
                let { pricingPromotionIds: t, promotions: e, now: u } = n,
                    r = f(t, e);
                return r.length > 0 && r.every((n) => null != n && d(n, u));
            })({ pricingPromotionIds: c, promotions: p, now: A })
                ? void 0
                : i;
        },
    },
);
