l.d(e, { W8: () => a, oG: () => c, we: () => f });
var n = l(17928),
    r = l(288106),
    u = l(309954),
    o = l(287809),
    i = l(760716);
function a() {
    let t = (0, i.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, n.bG)([o.default], () => o.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        l = (0, n.bG)([o.default], () => o.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || l;
}
function c(t) {
    let { orbPriceAmount: e, spendOrbsOffer: l } = t;
    return f({ orbPriceAmount: e, spendOrbsOffer: l }).state;
}
function f(t) {
    let { orbPriceAmount: e, spendOrbsOffer: l } = t,
        n = l?.rewardStatus === r.GM.EARNED,
        { balance: o, isFetching: i, error: a } = (0, u.W)({ disableFetch: !n || null == e });
    if (null == l || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!n) return { state: "NEEDS_NITRO", isReady: !0 };
    let c = !i && (null != o || null != a);
    return null == o || o < e ? { state: "NOT_ENOUGH_ORBS", isReady: c } : { state: "CAN_CHECKOUT", isReady: c };
}
