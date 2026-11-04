var r = n(582128),
    i = n(855986),
    s = n(561573),
    l = n(918467),
    a = n(288106),
    u = n(313217),
    o = n(652215);
function d(e, t) {
    if (null == t || t.currency === o.Yri.DISCORD_ORB) return null;
    let n = e?.find((e) => e.currency === t.currency);
    return null == n || n.amount >= t.amount ? null : { ...t, amount: n.amount };
}
function c(e, t) {
    return (e ?? []).map((e) => t?.find((t) => t.id === e));
}
n.d(
    t,
    {},
    {
        QV: function (e) {
            let { storefrontPrices: t, nonPromoPrice: n } = e;
            return d(t?.[a.QK.SELF_PURCHASE]?.userPrice, n);
        },
        f3: function (e) {
            let { storefrontPrices: t, premiumPrice: n } = e;
            return d(t?.[a.QK.SELF_PURCHASE]?.prices[o.FBC.PREMIUM_TIER_2]?.[a.v8.DISCOUNTED], n);
        },
        vF: function (e, t) {
            let n = (0, u.s)(t),
                a = (0, i.bG)([s.A], () => (n ? s.A.getPricesForSkuId(e) : void 0)),
                d = (0, i.bG)([s.A], () => (n ? s.A.getPromotionIdsForSkuId(e) : void 0)),
                f = (0, i.bG)([l.A], () => (n ? l.A.getPromotionsForApplication(o.FYj) : null)),
                I = (function (e, t) {
                    let [n, i] = r.useState(Date.now),
                        s = (function (e) {
                            let { pricingPromotionIds: t, promotions: n, now: r } = e,
                                i = null;
                            for (let e of c(t, n))
                                for (let t of [e?.startsAt?.getTime(), e?.endsAt?.getTime()])
                                    null != t && t > r && (null == i || t < i) && (i = t);
                            return i;
                        })({ pricingPromotionIds: e, promotions: t, now: n });
                    return (
                        r.useEffect(() => {
                            if (null == s) return;
                            let e = setTimeout(() => i(Date.now()), Math.min(Math.max(s - Date.now(), 0), 0x7fffffff));
                            return () => clearTimeout(e);
                        }, [s, n]),
                        n
                    );
                })(d, f);
            return !(function (e) {
                let { pricingPromotionIds: t, promotions: n, now: r } = e,
                    i = c(t, n);
                return (
                    i.length > 0 &&
                    i.every((e) => {
                        let t, n;
                        return (
                            null != e &&
                            ((t = null == e.startsAt || e.startsAt.getTime() <= r),
                            (n = null != e.endsAt && e.endsAt.getTime() <= r),
                            t && !n)
                        );
                    })
                );
            })({ pricingPromotionIds: d, promotions: f, now: I })
                ? void 0
                : a;
        },
    },
);
