r.d(t, { W8: () => u, oG: () => d, we: () => o });
var i = r(17928),
    l = r(288106),
    a = r(309954),
    n = r(287809),
    s = r(760716);
function u() {
    let e = (0, s.i)((e) =>
            e.overrideNitroEligibilityForSocialLayerStorefront ? e.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        t = (0, i.bG)([n.default], () => n.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        r = (0, i.bG)([n.default], () => n.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != e ? e : t || r;
}
function d(e) {
    let { orbPriceAmount: t, spendOrbsOffer: r } = e;
    return o({ orbPriceAmount: t, spendOrbsOffer: r }).state;
}
function o(e) {
    let { orbPriceAmount: t, spendOrbsOffer: r } = e,
        i = r?.rewardStatus === l.GM.EARNED,
        { balance: n, isFetching: s, error: u } = (0, a.W)({ disableFetch: !i || null == t });
    if (null == r || null == t) return { state: "HIDDEN", isReady: !0 };
    if (!i) return { state: "NEEDS_NITRO", isReady: !0 };
    let d = !s && (null != n || null != u);
    return null == n || n < t ? { state: "NOT_ENOUGH_ORBS", isReady: d } : { state: "CAN_CHECKOUT", isReady: d };
}
