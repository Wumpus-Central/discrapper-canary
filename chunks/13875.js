u.d(t, { Ay: () => a, Do: () => C, M: () => E, sk: () => S });
var r = u(17928),
    i = u(441574),
    n = u(287809),
    c = u(474090),
    R = u(32206),
    s = u(482947),
    _ = u(788868);
function S(e) {
    let t = (0, R.c)(e),
        { bucket: u } = s.A.useConfig({ location: e });
    return t && u !== s.H.CONTROL;
}
function C(e) {
    let t = (0, R.c)(e),
        { bucket: u } = s.A.useConfig({ location: e });
    return t && u === s.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
}
function E(e) {
    return (
        (0, c.YE)(e, _.PremiumTypes.TIER_2) &&
        e?.premiumState != null &&
        e.premiumState.premiumSubscriptionType === i.jK.TIER_2
    );
}
function a(e) {
    let t = (0, R.c)(e),
        { bucket: u } = s.A.useConfig({ location: e }),
        i = (0, r.bG)([n.default], () => E(n.default.getCurrentUser())),
        c = u === s.H.OPEN_PURCHASE || (u === s.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && i);
    return t && c;
}
