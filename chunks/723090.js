"use strict";
n.d(t, { Oj: () => S, CD: () => C, JL: () => R });
var i,
    r,
    s,
    a = n(64700),
    o = n(735438),
    l = n.n(o),
    d = n(17928),
    _ = n(871123),
    u = n(773669),
    c = n(652215);
n(758836), n(985018);
var E = n(287809),
    h = n(927578),
    m = n(580630),
    f = n(561573),
    g = (((i = {})[(i.DISCOUNT = 1)] = "DISCOUNT"), i),
    p = (((r = {})[(r.SELF_PURCHASE = 0)] = "SELF_PURCHASE"), (r[(r.GIFT = 1)] = "GIFT"), r),
    A = (((s = {})[(s.NORMAL = 0)] = "NORMAL"), (s[(s.DISCOUNTED = 1)] = "DISCOUNTED"), s),
    I = n(788868);
function T(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function S(e) {
    var t, n;
    return {
        skuPriceMap: l().mapValues(e.sku_price_map, (e) => ({
            pricingResultId: e.pricing_result_id,
            rewardResultIds: e.reward_result_ids,
        })),
        pricingResultIdMap:
            ((t = e.pricing_result_id_map),
            l().mapValues(t, (e) =>
                l().mapValues(e, (e) => ({
                    userPrice: T(e.user_price),
                    prices: l().mapValues(e.prices, (e) => l().mapValues(e, (e) => T(e))),
                })),
            )),
        rewardResultIdMap:
            ((n = e.reward_result_id_map),
            l().mapValues(n, (e) => l().mapValues(e, (e) => ({ type: e.type, amount: e.amount })))),
    };
}
function N(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: i } = e,
        r = (0, d.bG)([f.A], () => f.A.getPricesForSkuId(t?.id ?? null));
    return a.useMemo(() => {
        let e = ((e) => {
            if (null == e) return p.SELF_PURCHASE;
            switch (e) {
                case c.lid.DEFAULT:
                    return p.SELF_PURCHASE;
                case c.lid.GIFT:
                    return p.GIFT;
                default:
                    return p.SELF_PURCHASE;
            }
        })(n);
        if (null == t || null == r)
            return { userPrice: void 0, pricesForPurchaseType: void 0, purchaseType: e, storeHasPrice: null != r };
        let s = r[e] ?? r[p.SELF_PURCHASE];
        return {
            userPrice: s?.userPrice?.find((e) =>
                i ? e.currency === c.Yri.DISCORD_ORB : e.currency !== c.Yri.DISCORD_ORB,
            ),
            pricesForPurchaseType: s,
            purchaseType: e,
            storeHasPrice: !0,
        };
    }, [t, r, n, i]);
}
function C(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = c.lid.DEFAULT } = e,
        {
            normalPrice: i,
            discountedPrice: r,
            discountPercent: s,
        } = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n = c.lid.DEFAULT } = e,
                {
                    userPrice: i,
                    pricesForPurchaseType: r,
                    purchaseType: s,
                    storeHasPrice: o,
                } = N({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !1 }),
                l = (0, d.yK)([f.A], () => f.A.getRewardsForSkuId(t?.id) ?? []),
                u = (0, d.bG)([E.default], () => E.default.getCurrentUser());
            return a.useMemo(() => {
                if (null == t) return { normalPrice: null, discountedPrice: null, discountPercent: null };
                if (!o) {
                    let e =
                        t.productLine === c.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, _.y8)(t, n) : t.getPrice(u?.premiumType);
                    return {
                        normalPrice: null != e && e.amount > 0 ? e : null,
                        discountedPrice: null,
                        discountPercent: null,
                    };
                }
                let e = l.find((e) => e[s]?.type === g.DISCOUNT),
                    a = null != e ? e[s] : null,
                    d = null != a && null != i ? i : null,
                    E = null != a && a.amount > 0 ? a.amount : null,
                    h =
                        null != a
                            ? r?.prices[c.FBC.BASE]?.[A.NORMAL]?.find((e) => e.currency !== c.Yri.DISCORD_ORB)
                            : i;
                return { normalPrice: null != h && h.amount > 0 ? h : null, discountedPrice: d, discountPercent: E };
            }, [t, n, u?.premiumType, o, i, r, s, l]);
        })({ sku: t, priceSetAssignmentPurchaseType: n }),
        o = (0, d.bG)([u.default], () => u.default.locale);
    return a.useMemo(
        () => ({
            normalPrice: null != i && i.amount > 0 ? (0, m.$g)(i.amount, i.currency) : null,
            discountedPrice: null != r ? (0, m.$g)(r.amount, r.currency) : null,
            discountPercent: null != s ? (0, m.l9)(o, -s / 100) : null,
        }),
        [i, r, s, o],
    );
}
function R(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = c.lid.DEFAULT } = e,
        { userPrice: i, storeHasPrice: r } = N({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !0 }),
        s = (0, d.bG)([E.default], () => E.default.getCurrentUser()),
        o = a.useMemo(() => h.Ay.isPremium(s, I.PremiumTypes.TIER_2), [s]);
    return a.useMemo(() => {
        if (null == t) return null;
        if (!r) {
            var e;
            let n,
                i =
                    ((e = t.prices),
                    (n = o && null != e[c.lid.PREMIUM_TIER_2] ? e[c.lid.PREMIUM_TIER_2] : e[c.lid.DEFAULT]),
                    (n?.countryPrices?.prices?.slice(0, 2) ?? []).find((e) => e.currency === c.Yri.DISCORD_ORB) ??
                        null);
            return null != i ? { amount: i.amount, currency: i.currency } : null;
        }
        return i ?? null;
    }, [t, o, r, i]);
}
