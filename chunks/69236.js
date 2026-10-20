r.d(e, { W8: () => u, oG: () => s, we: () => _ });
var n = r(17928),
    i = r(288106),
    o = r(309954),
    l = r(287809),
    a = r(760716);
function u() {
    let t = (0, a.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, n.bG)([l.default], () => l.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        r = (0, n.bG)([l.default], () => l.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || r;
}
function s(t) {
    let { orbPriceAmount: e, spendOrbsOffer: r } = t;
    return _({ orbPriceAmount: e, spendOrbsOffer: r }).state;
}
function _(t) {
    let { orbPriceAmount: e, spendOrbsOffer: r } = t,
        n = r?.rewardStatus === i.GM.EARNED,
        { balance: l, isFetching: a, error: u } = (0, o.W)({ disableFetch: !n || null == e });
    if (null == r || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!n) return { state: "NEEDS_NITRO", isReady: !0 };
    let s = !a && (null != l || null != u);
    return null == l || l < e ? { state: "NOT_ENOUGH_ORBS", isReady: s } : { state: "CAN_CHECKOUT", isReady: s };
}
