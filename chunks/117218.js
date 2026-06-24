"use strict";
n.d(t, { rW: () => g, CD: () => I, JL: () => T, Oj: () => m }), n(938796);
var i = n(64700),
    r = n(735438),
    s = n.n(r);
n(665260), n(574381);
var a = n(17928),
    o = n(871123),
    l = n(773669),
    u = n(652215);
n(758836), n(375708);
var c = n(287809),
    d = n(428262),
    _ = n(580630),
    h = n(561573),
    f = n(288106),
    p = n(788868);
function E(e) {
    return e.map((e) => ({ currency: e.currency, amount: e.amount }));
}
function m(e) {
    var t, n;
    return {
        skuPriceMap: s().mapValues(e.sku_price_map, (e) => ({
            pricingResultId: e.pricing_result_id,
            rewardResultIds: e.reward_result_ids,
        })),
        pricingResultIdMap:
            ((t = e.pricing_result_id_map),
            s().mapValues(t, (e) =>
                s().mapValues(e, (e) => ({
                    userPrice: E(e.user_price),
                    prices: s().mapValues(e.prices, (e) => s().mapValues(e, (e) => E(e))),
                })),
            )),
        rewardResultIdMap:
            ((n = e.reward_result_id_map),
            s().mapValues(n, (e) => s().mapValues(e, (e) => ({ type: e.type, amount: e.amount })))),
    };
}
function g(e) {
    if (null == e) return f.QK.SELF_PURCHASE;
    switch (e) {
        case u.lid.DEFAULT:
            return f.QK.SELF_PURCHASE;
        case u.lid.GIFT:
            return f.QK.GIFT;
        default:
            return f.QK.SELF_PURCHASE;
    }
}
function A(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: r } = e,
        s = (0, a.bG)([h.A], () => h.A.getPricesForSkuId(t?.id ?? null));
    return i.useMemo(() => {
        let e = g(n);
        if (null == t || null == s)
            return { userPrice: void 0, pricesForPurchaseType: void 0, purchaseType: e, storeHasPrice: null != s };
        let i = s[e] ?? s[f.QK.SELF_PURCHASE];
        return {
            userPrice: i?.userPrice?.find((e) =>
                r ? e.currency === u.Yri.DISCORD_ORB : e.currency !== u.Yri.DISCORD_ORB,
            ),
            pricesForPurchaseType: i,
            purchaseType: e,
            storeHasPrice: !0,
        };
    }, [t, s, n, r]);
}
function I(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = u.lid.DEFAULT } = e,
        r = (function (e) {
            let { sku: t, priceSetAssignmentPurchaseType: n = u.lid.DEFAULT } = e,
                {
                    userPrice: r,
                    pricesForPurchaseType: s,
                    purchaseType: l,
                    storeHasPrice: d,
                } = A({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !1 }),
                _ = (0, a.yK)([h.A], () => h.A.getRewardsForSkuId(t?.id) ?? []),
                p = (0, a.bG)([c.default], () => c.default.getCurrentUser());
            return i.useMemo(() => {
                if (null == t)
                    return { normalPrice: null, discountedPrice: null, discountPercent: null, userPrice: null };
                if (!d) {
                    let e =
                            t.productLine === u.EZt.SOCIAL_LAYER_GAME_ITEM
                                ? (0, o.y8)(t, n)
                                : t.getPrice(p?.premiumType),
                        i = null != e && e.amount > 0 ? e : null;
                    return { normalPrice: i, discountedPrice: null, discountPercent: null, userPrice: i };
                }
                let e = _.find((e) => e[l]?.type === f.Ns.DISCOUNT),
                    i = null != e ? e[l] : null,
                    a = null != i && null != r ? r : null,
                    c = null != i && i.amount > 0 ? i.amount : null,
                    h =
                        null != i
                            ? s?.prices[u.FBC.BASE]?.[f.v8.NORMAL]?.find((e) => e.currency !== u.Yri.DISCORD_ORB)
                            : r;
                return {
                    normalPrice: null != h && h.amount > 0 ? h : null,
                    discountedPrice: a,
                    discountPercent: c,
                    userPrice: r ?? null,
                };
            }, [t, n, p?.premiumType, d, r, s, l, _]);
        })({ sku: t, priceSetAssignmentPurchaseType: n }),
        s = (0, a.bG)([l.default], () => l.default.locale);
    return i.useMemo(
        () =>
            (function (e, t) {
                let { normalPrice: n, discountedPrice: i, discountPercent: r, userPrice: s } = e;
                return {
                    normalPrice: null != n && n.amount > 0 ? (0, _.$g)(n.amount, n.currency) : null,
                    discountedPrice: null != i && i.amount > 0 ? (0, _.$g)(i.amount, i.currency) : null,
                    discountPercent: null != r ? (0, _.l9)(t, -r / 100) : null,
                    userPrice: null != s && s.amount > 0 ? (0, _.$g)(s.amount, s.currency) : null,
                };
            })(r, s),
        [r, s],
    );
}
function T(e) {
    let { sku: t, priceSetAssignmentPurchaseType: n = u.lid.DEFAULT } = e,
        { userPrice: r, storeHasPrice: s } = A({ sku: t, priceSetAssignmentPurchaseType: n, isOrbPrice: !0 }),
        o = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        l = i.useMemo(() => d.Ay.isPremium(o, p.PremiumTypes.TIER_2), [o]);
    return i.useMemo(() => {
        if (null == t) return null;
        if (!s) {
            var e;
            let n,
                i =
                    ((e = t.prices),
                    (n = l && null != e[u.lid.PREMIUM_TIER_2] ? e[u.lid.PREMIUM_TIER_2] : e[u.lid.DEFAULT]),
                    (n?.countryPrices?.prices?.slice(0, 2) ?? []).find((e) => e.currency === u.Yri.DISCORD_ORB) ??
                        null);
            return null != i ? { amount: i.amount, currency: i.currency } : null;
        }
        return r ?? null;
    }, [t, l, s, r]);
}
