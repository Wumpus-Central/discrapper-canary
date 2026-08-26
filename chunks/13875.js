u.d(t, { Ay: () => C, Do: () => a, sk: () => S });
var r = u(17928),
    i = u(441574),
    n = u(287809),
    R = u(474090),
    c = u(32206),
    s = u(482947),
    _ = u(202541);
function S(e) {
    let t = (0, c.c)(e),
        { bucket: u } = s.A.useConfig({ location: e });
    return t && u !== s.H.CONTROL;
}
function a(e) {
    let t = (0, c.c)(e),
        { bucket: u } = s.A.useConfig({ location: e });
    return t && u === s.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
}
function C(e) {
    let t = (0, c.c)(e),
        { bucket: u } = s.A.useConfig({ location: e }),
        S = (0, r.bG)([n.default], () => {
            var e;
            return (
                (e = n.default.getCurrentUser()),
                (0, R.YE)(e, _.PremiumTypes.TIER_2) &&
                    e?.premiumState != null &&
                    e.premiumState.premiumSubscriptionType === i.jK.TIER_2
            );
        }),
        a = u === s.H.OPEN_PURCHASE || (u === s.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && S);
    return t && a;
}
