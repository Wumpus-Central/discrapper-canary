a.d(t, { Ay: () => p, Do: () => u, M: () => h, sk: () => d });
var n = a(17928),
    l = a(441574),
    r = a(287809),
    i = a(474090),
    s = a(32206),
    o = a(482947),
    c = a(788868);
function d(e) {
    let t = (0, s.c)(e),
        { bucket: a } = o.A.useConfig({ location: e });
    return t && a !== o.H.CONTROL;
}
function u(e) {
    let t = (0, s.c)(e),
        { bucket: a } = o.A.useConfig({ location: e });
    return t && a === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
}
function h(e) {
    return (
        (0, i.YE)(e, c.PremiumTypes.TIER_2) &&
        e?.premiumState != null &&
        e.premiumState.premiumSubscriptionType === l.jK.TIER_2
    );
}
function p(e) {
    let t = (0, s.c)(e),
        { bucket: a } = o.A.useConfig({ location: e }),
        l = (0, n.bG)([r.default], () => h(r.default.getCurrentUser())),
        i = a === o.H.OPEN_PURCHASE || (a === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && l);
    return t && i;
}
