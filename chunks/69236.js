r.d(e, { W8: () => a, oG: () => s, we: () => _ });
var i = r(17928),
    n = r(309954),
    l = r(287809),
    o = r(517907),
    u = r(760716);
function a() {
    let t = (0, u.i)((t) =>
            t.overrideNitroEligibilityForSocialLayerStorefront ? t.isNitroEligibleForSocialLayerStorefront : void 0,
        ),
        e = (0, i.bG)([l.default], () => l.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        r = (0, i.bG)([l.default], () => l.default.getCurrentUser()?.isPremiumGroupMember() ?? !1);
    return null != t ? t : e || r;
}
function s(t) {
    let { orbPriceAmount: e, applicationId: r, location: i } = t;
    return _({ orbPriceAmount: e, applicationId: r, location: i }).state;
}
function _(t) {
    let { orbPriceAmount: e, applicationId: r, location: i } = t,
        l = (0, o.A)({ applicationId: r, location: i }),
        u = a(),
        { balance: s, isFetching: _, error: d } = (0, n.W)({ disableFetch: !l || null == e || !u });
    if (!l || null == e) return { state: "HIDDEN", isReady: !0 };
    if (!u) return { state: "NEEDS_NITRO", isReady: !0 };
    let T = !_ && (null != s || null != d);
    return null == s || s < e ? { state: "NOT_ENOUGH_ORBS", isReady: T } : { state: "CAN_CHECKOUT", isReady: T };
}
