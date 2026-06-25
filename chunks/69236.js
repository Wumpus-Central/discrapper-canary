i.d(e, { W: () => a, o: () => l });
var r = i(17928),
    n = i(309954),
    u = i(287809),
    o = i(801158),
    _ = i(760716);
function a() {
    let t = (0, _.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        i = (0, r.bG)([u.default], () => u.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || i;
}
function l(t) {
    let { orbPriceAmount: e, applicationId: i, location: r } = t,
        u = (0, o.A)({ applicationId: i, location: r }),
        _ = a(),
        { balance: l } = (0, n.W)({ disableFetch: !u || null == e || !_ });
    return u && null != e ? (_ ? (null == l || l < e ? "NOT_ENOUGH_ORBS" : "CAN_CHECKOUT") : "NEEDS_NITRO") : "HIDDEN";
}
