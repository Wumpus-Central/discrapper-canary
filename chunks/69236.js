var i = n(855986),
    r = n(288106),
    a = n(309954),
    s = n(287809),
    l = n(760716);
function o(e) {
    let { orbPriceAmount: t, spendOrbsOffer: n } = e,
        i = n?.rewardStatus === r.GM.EARNED,
        { balance: s, isFetching: l, error: o } = (0, a.W)({ disableFetch: !i || null == t });
    if (null == n || null == t) return { state: "HIDDEN", isReady: !0 };
    if (!i) return { state: "NEEDS_NITRO", isReady: !0 };
    let d = !l && (null != s || null != o);
    return null == s || s < t ? { state: "NOT_ENOUGH_ORBS", isReady: d } : { state: "CAN_CHECKOUT", isReady: d };
}
n.d(
    t,
    {},
    {
        W8: function () {
            let e = (0, l.i)((e) =>
                    e.overrideNitroEligibilityForSocialLayerStorefront
                        ? e.isNitroEligibleForSocialLayerStorefront
                        : void 0,
                ),
                t = (0, i.bG)([s.default], () => s.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
                n = (0, i.bG)([s.default], () => s.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
            return null != e ? e : t || n;
        },
        oG: function (e) {
            let { orbPriceAmount: t, spendOrbsOffer: n } = e;
            return o({ orbPriceAmount: t, spendOrbsOffer: n }).state;
        },
        we: o,
    },
);
