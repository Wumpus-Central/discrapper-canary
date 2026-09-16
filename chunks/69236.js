r.d(e, { W8: () => s, oG: () => _, we: () => d });
var i = r(17928),
    n = r(561573),
    l = r(288106),
    u = r(309954),
    a = r(287809),
    o = r(760716);
function s() {
    let t = (0, o.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, i.bG)([a.default], () => a.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        r = (0, i.bG)([a.default], () => a.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || r;
}
function _(t) {
    let { orbPriceAmount: e, skuId: r } = t;
    return d({ orbPriceAmount: e, skuId: r }).state;
}
function d(t) {
    let { orbPriceAmount: e, skuId: r } = t,
        a = (0, i.bG)([n.A], () => n.A.getOffersForSkuId(r)?.find((t) => t.type === l.B8.ORB_REDEMPTION) ?? null, [r]),
        o = a?.rewardStatus === l.GM.EARNED,
        { balance: s, isFetching: _, error: d } = (0, u.W)({ disableFetch: !o || null == e });
    if (null == a || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!o) return { state: "NEEDS_NITRO", isReady: !0 };
    let T = !_ && (null != s || null != d);
    return null == s || s < e ? { state: "NOT_ENOUGH_ORBS", isReady: T } : { state: "CAN_CHECKOUT", isReady: T };
}
