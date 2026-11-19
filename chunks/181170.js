var r = n(582128),
    u = n(855986),
    o = n(561573),
    i = n(918467),
    l = n(288106),
    f = n(65238),
    c = n(927813),
    s = n(313217),
    a = n(652215);
let d = 10 * c.A.Millis.MINUTE;
function h(t, e) {
    if (null == e || e.currency === a.Yri.DISCORD_ORB) return null;
    let n = t?.find((t) => t.currency === e.currency);
    return null == n || n.amount >= e.amount ? null : { ...e, amount: n.amount };
}
function p(t, e) {
    let n = null == t.startsAt || t.startsAt.getTime() <= e,
        r = null != t.endsAt && t.endsAt.getTime() <= e;
    return n && !r;
}
function m(t, e) {
    return (t ?? []).map((t) => e?.find((e) => e.id === t));
}
n.d(
    e,
    {},
    {
        QV: function (t) {
            let { storefrontPrices: e, nonPromoPrice: n } = t;
            return h(e?.[l.QK.SELF_PURCHASE]?.userPrice, n);
        },
        f3: function (t) {
            let { storefrontPrices: e, premiumPrice: n } = t;
            return h(e?.[l.QK.SELF_PURCHASE]?.prices[a.FBC.PREMIUM_TIER_2]?.[l.v8.DISCOUNTED], n);
        },
        h: function (t, e) {
            return t?.type === "loading" || (t?.type === "success" && t.fetchedAt + d > e);
        },
        us: p,
        vF: function (t, e) {
            let n = (0, s.s)(e),
                c = (0, u.bG)([o.A], () => (n ? o.A.getPricesForSkuId(t) : void 0)),
                d = (0, u.bG)([o.A], () => (n ? o.A.getPromotionIdsForSkuId(t) : void 0)),
                h = (0, u.bG)([i.A], () => (n ? i.A.getPromotionsForApplication(a.FYj) : null)),
                A = (function (t, e) {
                    let [n, u] = r.useState(Date.now),
                        o = (function (t) {
                            let { pricingPromotionIds: e, promotions: n, now: r } = t,
                                u = null;
                            for (let t of m(e, n))
                                for (let e of [t?.startsAt?.getTime(), t?.endsAt?.getTime()])
                                    null != e && e > r && (null == u || e < u) && (u = e);
                            return u;
                        })({ pricingPromotionIds: t, promotions: e, now: n });
                    return (
                        r.useEffect(() => {
                            if (null == o) return;
                            let t = setTimeout(() => u(Date.now()), Math.min(Math.max(o - Date.now(), 0), 0x7fffffff));
                            return () => clearTimeout(t);
                        }, [o, n]),
                        n
                    );
                })(d, h);
            return !(function (t) {
                let { skuId: e, pricingPromotionIds: n, promotions: r, now: u } = t,
                    o = m(n, r);
                return (
                    o.length > 0 &&
                    o.every((t) => null != t && p(t, u) && t.rewardStatus !== l.GM.CONSUMED && (0, f.TX)(t, e))
                );
            })({ skuId: t, pricingPromotionIds: d, promotions: h, now: A })
                ? void 0
                : c;
        },
    },
);
