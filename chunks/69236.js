var r = l(855986),
    n = l(288106),
    u = l(309954),
    o = l(287809),
    a = l(760716);
function i(t) {
    let { orbPriceAmount: e, spendOrbsOffer: l } = t,
        r = l?.rewardStatus === n.GM.EARNED,
        { balance: o, isFetching: a, error: i } = (0, u.W)({ disableFetch: !r || null == e });
    if (null == l || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!r) return { state: "NEEDS_NITRO", isReady: !0 };
    let c = !a && (null != o || null != i);
    return null == o || o < e ? { state: "NOT_ENOUGH_ORBS", isReady: c } : { state: "CAN_CHECKOUT", isReady: c };
}
l.d(
    e,
    {},
    {
        W8: function () {
            let t = (0, a.i)((t) =>
                    t.overrideNitroEligibilityForSocialLayerStorefront
                        ? t.isNitroEligibleForSocialLayerStorefront
                        : void 0,
                ),
                e = (0, r.bG)([o.default], () => o.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                l = (0, r.bG)([o.default], () => o.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
            return null != t ? t : e || l;
        },
        oG: function (t) {
            let { orbPriceAmount: e, spendOrbsOffer: l } = t;
            return i({ orbPriceAmount: e, spendOrbsOffer: l }).state;
        },
        we: i,
    },
);
