n.d(t, { o: () => s });
var i = n(17928),
    r = n(309954),
    a = n(287809),
    u = n(681064);
function s(e) {
    let { orbPriceAmount: t, location: n } = e,
        s = (0, u.R)({ location: n }),
        _ = (0, i.bG)([a.default], () => a.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        l = (0, i.bG)([a.default], () => a.default.getCurrentUser()?.isPremiumGroupMember() ?? !1),
        { balance: o } = (0, r.W)({ disableFetch: !s || null == t || (!_ && !l) });
    return s && null != t
        ? _ || l
            ? null == o || o < t
                ? "NOT_ENOUGH_ORBS"
                : "CAN_CHECKOUT"
            : "NEEDS_NITRO"
        : "HIDDEN";
}
