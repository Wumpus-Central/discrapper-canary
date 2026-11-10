var l = n(582128),
    o = n(855986),
    i = n(561573),
    r = n(918467),
    u = n(288106),
    a = n(313217),
    s = n(652215);
function c(e, t) {
    if (null == t || t.currency === s.Yri.DISCORD_ORB) return null;
    let n = e?.find((e) => e.currency === t.currency);
    return null == n || n.amount >= t.amount ? null : { ...t, amount: n.amount };
}
function d(e, t) {
    let n = null == e.startsAt || e.startsAt.getTime() <= t,
        l = null != e.endsAt && e.endsAt.getTime() <= t;
    return n && !l;
}
function C(e, t) {
    return (e ?? []).map((e) => t?.find((t) => t.id === e));
}
n.d(
    t,
    {},
    {
        QV: function (e) {
            let { storefrontPrices: t, nonPromoPrice: n } = e;
            return c(t?.[u.QK.SELF_PURCHASE]?.userPrice, n);
        },
        f3: function (e) {
            let { storefrontPrices: t, premiumPrice: n } = e;
            return c(t?.[u.QK.SELF_PURCHASE]?.prices[s.FBC.PREMIUM_TIER_2]?.[u.v8.DISCOUNTED], n);
        },
        us: d,
        vF: function (e, t) {
            let n = (0, a.s)(t),
                u = (0, o.bG)([i.A], () => (n ? i.A.getPricesForSkuId(e) : void 0)),
                c = (0, o.bG)([i.A], () => (n ? i.A.getPromotionIdsForSkuId(e) : void 0)),
                p = (0, o.bG)([r.A], () => (n ? r.A.getPromotionsForApplication(s.FYj) : null)),
                h = (function (e, t) {
                    let [n, o] = l.useState(Date.now),
                        i = (function (e) {
                            let { pricingPromotionIds: t, promotions: n, now: l } = e,
                                o = null;
                            for (let e of C(t, n))
                                for (let t of [e?.startsAt?.getTime(), e?.endsAt?.getTime()])
                                    null != t && t > l && (null == o || t < o) && (o = t);
                            return o;
                        })({ pricingPromotionIds: e, promotions: t, now: n });
                    return (
                        l.useEffect(() => {
                            if (null == i) return;
                            let e = setTimeout(() => o(Date.now()), Math.min(Math.max(i - Date.now(), 0), 0x7fffffff));
                            return () => clearTimeout(e);
                        }, [i, n]),
                        n
                    );
                })(c, p);
            return !(function (e) {
                let { pricingPromotionIds: t, promotions: n, now: l } = e,
                    o = C(t, n);
                return o.length > 0 && o.every((e) => null != e && d(e, l));
            })({ pricingPromotionIds: c, promotions: p, now: h })
                ? void 0
                : u;
        },
    },
);
