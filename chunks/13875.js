n.d(t, { Ay: () => g, Do: () => d, M: () => m, sk: () => u });
var i = n(17928),
    r = n(441574),
    l = n(287809),
    a = n(474090),
    s = n(32206),
    o = n(482947),
    c = n(788868);
function u(e) {
    let t = (0, s.c)(e),
        { bucket: n } = o.A.useConfig({ location: e });
    return t && n !== o.H.CONTROL;
}
function d(e) {
    let t = (0, s.c)(e),
        { bucket: n } = o.A.useConfig({ location: e });
    return t && n === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
}
function m(e) {
    return (
        (0, a.YE)(e, c.PremiumTypes.TIER_2) &&
        e?.premiumState != null &&
        e.premiumState.premiumSubscriptionType === r.jK.TIER_2
    );
}
function g(e) {
    let t = (0, s.c)(e),
        { bucket: n } = o.A.useConfig({ location: e }),
        r = (0, i.bG)([l.default], () => m(l.default.getCurrentUser())),
        a = n === o.H.OPEN_PURCHASE || (n === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && r);
    return t && a;
}
