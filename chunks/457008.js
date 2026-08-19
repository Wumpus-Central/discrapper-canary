"use strict";
n.d(t, { $9: () => c, dR: () => d });
var i,
    r = n(136857),
    a = n(158317),
    s = n(652215);
n(758836);
var l =
        (((i = {})[(i.INSUFFICIENT_ORB_BALANCE = 1e3)] = "INSUFFICIENT_ORB_BALANCE"),
        (i[(i.MISSING_DEPENDENT_SKU_ENTITLEMENT = 1001)] = "MISSING_DEPENDENT_SKU_ENTITLEMENT"),
        (i[(i.SKU_PRODUCT_LINE_NOT_PURCHASABLE = 1002)] = "SKU_PRODUCT_LINE_NOT_PURCHASABLE"),
        (i[(i.SKU_ALREADY_OWNED = 1003)] = "SKU_ALREADY_OWNED"),
        (i[(i.FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION = 1004)] = "FRACTIONAL_PREMIUM_ACTIVE_MOBILE_SUBSCRIPTION"),
        (i[(i.SKU_NOT_AVAILABLE_FOR_DISTRIBUTION = 1005)] = "SKU_NOT_AVAILABLE_FOR_DISTRIBUTION"),
        (i[(i.SKU_MISSING_ORB_PRICE = 1006)] = "SKU_MISSING_ORB_PRICE"),
        (i[(i.SKU_IS_THIRD_PARTY = 1007)] = "SKU_IS_THIRD_PARTY"),
        (i[(i.SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED = 1008)] = "SLAYER_STOREFRONT_ORB_REDEMPTION_DISABLED"),
        (i[(i.FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER = 1009)] = "FRACTIONAL_PREMIUM_SUBSCRIPTION_GROUP_MEMBER"),
        (i[(i.BUNDLE_PARTIALLY_OWNED = 1010)] = "BUNDLE_PARTIALLY_OWNED"),
        (i[(i.SOCIAL_LAYER_NOT_PURCHASABLE = 1011)] = "SOCIAL_LAYER_NOT_PURCHASABLE"),
        (i[(i.FRAMES_FIAT_EXCLUSIVE = 1012)] = "FRAMES_FIAT_EXCLUSIVE"),
        (i[(i.FIRST_PARTY_NO_ORBS = 1013)] = "FIRST_PARTY_NO_ORBS"),
        i),
    o = n(375708);
function d(e, t) {
    let n = t && null != e[s.lid.PREMIUM_TIER_2] ? e[s.lid.PREMIUM_TIER_2] : e[s.lid.DEFAULT];
    return (n?.countryPrices?.prices?.slice(0, 2) ?? []).find((e) => e.currency === s.Yri.DISCORD_ORB) ?? null;
}
function c(e, t) {
    if (null == e) return null;
    if (e instanceof a.FY && null != t)
        switch (t) {
            case l.INSUFFICIENT_ORB_BALANCE:
                return o.intl.string(o.t.keFvXM);
            case l.SKU_ALREADY_OWNED:
                return o.intl.string(o.t.m371Mx);
            case l.BUNDLE_PARTIALLY_OWNED:
                return o.intl.string(o.t.v9oC0p);
            default:
                return o.intl.string(o.t.fqJZ11);
        }
    return e instanceof a.j2
        ? o.intl.string(o.t["2BmwgV"])
        : e.code === r.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
          ? o.intl.string(o.t.keFvXM)
          : e.code === r.tG.ALREADY_PURCHASED
            ? o.intl.string(o.t.m371Mx)
            : e.code === r.tG.BILLING_ORDER_NOT_SIGNABLE
              ? o.intl.string(o.t.ZHgEG7)
              : o.intl.string(o.t.fqJZ11);
}
