n.d(t, { QV: () => f, f3: () => I, vF: () => p });
var r = n(582128),
    i = n(17928),
    l = n(561573),
    s = n(918467),
    a = n(288106),
    u = n(313217),
    o = n(652215);
let d = 0x80000000 - 1;
function c(e, t) {
    if (null == t || t.currency === o.Yri.DISCORD_ORB) return null;
    let n = e?.find((e) => e.currency === t.currency);
    return null == n || n.amount >= t.amount ? null : { ...t, amount: n.amount };
}
function f(e) {
    let { storefrontPrices: t, nonPromoPrice: n } = e;
    return c(t?.[a.QK.SELF_PURCHASE]?.userPrice, n);
}
function I(e) {
    let { storefrontPrices: t, premiumPrice: n } = e;
    return c(t?.[a.QK.SELF_PURCHASE]?.prices[o.FBC.PREMIUM_TIER_2]?.[a.v8.DISCOUNTED], n);
}
function v(e, t) {
    return (e ?? []).map((e) => t?.find((t) => t.id === e));
}
function p(e, t) {
    let n = (0, u.s)(t),
        a = (0, i.bG)([l.A], () => (n ? l.A.getPricesForSkuId(e) : void 0)),
        c = (0, i.bG)([l.A], () => (n ? l.A.getPromotionIdsForSkuId(e) : void 0)),
        f = (0, i.bG)([s.A], () => (n ? s.A.getPromotionsForApplication(o.FYj) : null)),
        I = (function (e, t) {
            let [n, i] = r.useState(Date.now),
                l = (function (e) {
                    let { pricingPromotionIds: t, promotions: n, now: r } = e,
                        i = null;
                    for (let e of v(t, n))
                        for (let t of [e?.startsAt?.getTime(), e?.endsAt?.getTime()])
                            null != t && t > r && (null == i || t < i) && (i = t);
                    return i;
                })({ pricingPromotionIds: e, promotions: t, now: n });
            return (
                r.useEffect(() => {
                    if (null == l) return;
                    let e = setTimeout(() => i(Date.now()), Math.min(Math.max(l - Date.now(), 0), d));
                    return () => clearTimeout(e);
                }, [l, n]),
                n
            );
        })(c, f);
    return !(function (e) {
        let { pricingPromotionIds: t, promotions: n, now: r } = e,
            i = v(t, n);
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
    })({ pricingPromotionIds: c, promotions: f, now: I })
        ? void 0
        : a;
}
