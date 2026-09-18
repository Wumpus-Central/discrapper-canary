r.d(e, { W8: () => o, oG: () => s, we: () => _ });
var i = r(17928),
    n = r(288106),
    l = r(309954),
    u = r(287809),
    a = r(760716);
function o() {
    let t = (0, a.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, i.bG)([u.default], () => u.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        r = (0, i.bG)([u.default], () => u.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || r;
}
function s(t) {
    let { orbPriceAmount: e, spendOrbsOffer: r } = t;
    return _({ orbPriceAmount: e, spendOrbsOffer: r }).state;
}
function _(t) {
    let { orbPriceAmount: e, spendOrbsOffer: r } = t,
        i = r?.rewardStatus === n.GM.EARNED,
        { balance: u, isFetching: a, error: o } = (0, l.W)({ disableFetch: !i || null == e });
    if (null == r || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!i) return { state: "NEEDS_NITRO", isReady: !0 };
    let s = !a && (null != u || null != o);
    return null == u || u < e ? { state: "NOT_ENOUGH_ORBS", isReady: s } : { state: "CAN_CHECKOUT", isReady: s };
}
