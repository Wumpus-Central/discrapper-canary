var r = l(855986),
    n = l(288106),
    u = l(309954),
    a = l(287809),
    i = l(760716);
function o(t) {
    let { orbPriceAmount: e, spendOrbsOffer: l } = t,
        r = l?.rewardStatus === n.GM.EARNED,
        { balance: a, isFetching: i, error: o } = (0, u.W)({ disableFetch: !r || null == e });
    if (null == l || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!r) return { state: "NEEDS_NITRO", isReady: !0 };
    let c = !i && (null != a || null != o);
    return null == a || a < e ? { state: "NOT_ENOUGH_ORBS", isReady: c } : { state: "CAN_CHECKOUT", isReady: c };
}
l.d(
    e,
    {},
    {
        W8: function () {
            let t = (0, i.i)((t) =>
                    t.overrideNitroEligibilityForSocialLayerStorefront
                        ? t.isNitroEligibleForSocialLayerStorefront
                        : void 0,
                ),
                e = (0, r.bG)([a.default], () => a.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                l = (0, r.bG)([a.default], () => a.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
            return null != t ? t : e || l;
        },
        oG: function (t) {
            let { orbPriceAmount: e, spendOrbsOffer: l } = t;
            return o({ orbPriceAmount: e, spendOrbsOffer: l }).state;
        },
        we: o,
    },
);
