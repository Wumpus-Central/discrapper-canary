"use strict";
n.d(t, { $9: () => c, dR: () => u });
var i,
    r = n(136857),
    s = n(158317),
    a = n(652215);
n(758836);
var o =
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
    l = n(375708);
function u(e, t) {
    let n = t && null != e[a.lid.PREMIUM_TIER_2] ? e[a.lid.PREMIUM_TIER_2] : e[a.lid.DEFAULT];
    return (n?.countryPrices?.prices?.slice(0, 2) ?? []).find((e) => e.currency === a.Yri.DISCORD_ORB) ?? null;
}
function c(e, t) {
    if (null == e) return null;
    if (e instanceof s.FY && null != t)
        switch (t) {
            case o.INSUFFICIENT_ORB_BALANCE:
                return l.intl.string(l.t.keFvXM);
            case o.SKU_ALREADY_OWNED:
                return l.intl.string(l.t.m371Mx);
            case o.BUNDLE_PARTIALLY_OWNED:
                return l.intl.string(l.t.v9oC0p);
            default:
                return l.intl.string(l.t.fqJZ11);
        }
    return e instanceof s.j2
        ? l.intl.string(l.t["2BmwgV"])
        : e.code === r.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE
          ? l.intl.string(l.t.keFvXM)
          : e.code === r.tG.ALREADY_PURCHASED
            ? l.intl.string(l.t.m371Mx)
            : e.code === r.tG.BILLING_ORDER_NOT_SIGNABLE
              ? l.intl.string(l.t.ZHgEG7)
              : l.intl.string(l.t.fqJZ11);
}
