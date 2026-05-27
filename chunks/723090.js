"use strict";
n.d(t, { Oj: () => S, CD: () => N, JL: () => v }), n(938796);
var i,
    r,
    s,
    a = n(64700),
    o = n(735438),
    l = n.n(o);
n(665260), n(574381);
var u = n(17928),
    c = n(871123),
    d = n(773669),
    _ = n(652215);
n(758836), n(375708);
var h = n(287809),
    f = n(428262),
    p = n(580630),
    E = n(561573),
    m = (((i = {})[(i.DISCOUNT = 1)] = "DISCOUNT"), i),
    g = (((r = {})[(r.SELF_PURCHASE = 0)] = "SELF_PURCHASE"), (r[(r.GIFT = 1)] = "GIFT"), r),
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
function y(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: i } = e,
        r = (0, u.bG)([E.A], () => E.A.getPricesForSkuId(t?.id ?? null));
    return a.useMemo(() => {
        let e = ((e) => {
            if (null == e) return g.SELF_PURCHASE;
            switch (e) {
                case _.lid.DEFAULT:
                    return g.SELF_PURCHASE;
                case _.lid.GIFT:
                    return g.GIFT;
                default:
                    return g.SELF_PURCHASE;
            }
        })(n);
        if (null == t || null == r)
            return { userPrice: void 0, pricesForPurchaseType: void 0, purchaseType: e, storeHasPrice: null != r };
        let s = r[e] ?? r[g.SELF_PURCHASE];
        return {
            userPrice: s?.userPrice?.find((e) =>
                i ? e.currency === _.Yri.DISCORD_ORB : e.currency !== _.Yri.DISCORD_ORB,
            ),
            pricesForPurchaseType: s,
            purchaseType: e,
            storeHasPrice: !0,
        };
    }, [t, r, n, i]);
}
function N(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = _.lid.DEFAULT } = e,
        i = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n = _.lid.DEFAULT } = e,
                {
                    userPrice: i,
                    pricesForPurchaseType: r,
                    purchaseType: s,
                    storeHasPrice: o,
                } = y({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !1 }),
                l = (0, u.yK)([E.A], () => E.A.getRewardsForSkuId(t?.id) ?? []),
                d = (0, u.bG)([h.default], () => h.default.getCurrentUser());
            return a.useMemo(() => {
                if (null == t) return { normalPrice: null, discountedPrice: null, discountPercent: null };
                if (!o) {
                    let e =
                        t.productLine === _.EZt.SOCIAL_LAYER_GAME_ITEM ? (0, c.y8)(t, n) : t.getPrice(d?.premiumType);
                    return {
                        normalPrice: null != e && e.amount > 0 ? e : null,
                        discountedPrice: null,
                        discountPercent: null,
                    };
                }
                let e = l.find((e) => e[s]?.type === m.DISCOUNT),
                    a = null != e ? e[s] : null,
                    u = null != a && null != i ? i : null,
                    h = null != a && a.amount > 0 ? a.amount : null,
                    f =
                        null != a
                            ? r?.prices[_.FBC.BASE]?.[A.NORMAL]?.find((e) => e.currency !== _.Yri.DISCORD_ORB)
                            : i;
                return { normalPrice: null != f && f.amount > 0 ? f : null, discountedPrice: u, discountPercent: h };
            }, [t, n, d?.premiumType, o, i, r, s, l]);
        })({ sku: t, priceSetAssignmentPurchaseType: n }),
        r = (0, u.bG)([d.default], () => d.default.locale);
    return a.useMemo(
        () =>
            (function (e, t) {
                let { normalPrice: n, discountedPrice: i, discountPercent: r } = e;
                return {
                    normalPrice: null != n && n.amount > 0 ? (0, p.$g)(n.amount, n.currency) : null,
                    discountedPrice: null != i ? (0, p.$g)(i.amount, i.currency) : null,
                    discountPercent: null != r ? (0, p.l9)(t, -r / 100) : null,
                };
            })(i, r),
        [i, r],
    );
}
function v(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = _.lid.DEFAULT } = e,
        { userPrice: i, storeHasPrice: r } = y({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !0 }),
        s = (0, u.bG)([h.default], () => h.default.getCurrentUser()),
        o = a.useMemo(() => f.Ay.isPremium(s, I.PremiumTypes.TIER_2), [s]);
    return a.useMemo(() => {
        if (null == t) return null;
        if (!r) {
            var e;
            let n,
                i =
                    ((e = t.prices),
                    (n = o && null != e[_.lid.PREMIUM_TIER_2] ? e[_.lid.PREMIUM_TIER_2] : e[_.lid.DEFAULT]),
                    (n?.countryPrices?.prices?.slice(0, 2) ?? []).find((e) => e.currency === _.Yri.DISCORD_ORB) ??
                        null);
            return null != i ? { amount: i.amount, currency: i.currency } : null;
        }
        return i ?? null;
    }, [t, o, r, i]);
}
