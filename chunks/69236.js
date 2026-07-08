i.d(e, { W8: () => l, oG: () => o, we: () => _ });
var r = i(17928),
    n = i(309954),
    u = i(287809),
    a = i(517907),
    s = i(760716);
function l() {
    let t = (0, s.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        i = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || i;
}
function o(t) {
    let { orbPriceAmount: e, applicationId: i, location: r } = t;
    return _({ orbPriceAmount: e, applicationId: i, location: r }).state;
}
function _(t) {
    let { orbPriceAmount: e, applicationId: i, location: r } = t,
        u = (0, a.A)({ applicationId: i, location: r }),
        s = l(),
        { balance: o, isFetching: _, error: d } = (0, n.W)({ disableFetch: !u || null == e || !s });
    if (!u || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!s) return { state: "NEEDS_NITRO", isReady: !0 };
    let T = !_ && (null != o || null != d);
    return null == o || o < e ? { state: "NOT_ENOUGH_ORBS", isReady: T } : { state: "CAN_CHECKOUT", isReady: T };
}
