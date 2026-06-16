n.d(t, { o: () => u });
var i = n(17928),
    a = n(309954),
    r = n(287809),
    s = n(681064);
function u(e) {
    let { orbPriceAmount: t, location: n } = e,
        u = (0, s.R)({ location: n }),
        _ = (0, i.bG)([r.default], () => r.default.getCurrentUser()?.hasPaidTier2Subscription() ?? !1),
        { balance: l } = (0, a.W)({ disableFetch: !u || null == t || !_ });
    return u && null != t ? (_ ? (null == l || l < t ? "NOT_ENOUGH_ORBS" : "CAN_CHECKOUT") : "NEEDS_NITRO") : "HIDDEN";
}
