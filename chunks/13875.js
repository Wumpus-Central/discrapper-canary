"use strict";
n.d(t, { Ay: () => h, Do: () => d, M: () => _, sk: () => c });
var i = n(17928),
    r = n(441574),
    s = n(287809),
    a = n(474090),
    o = n(32206),
    l = n(482947),
    u = n(788868);
function c(e) {
    let t = (0, o.c)(e),
        { bucket: n } = l.A.useConfig({ location: e });
    return t && n !== l.H.CONTROL;
}
function d(e) {
    let t = (0, o.c)(e),
        { bucket: n } = l.A.useConfig({ location: e });
    return t && n === l.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
}
function _(e) {
    return (
        (0, a.YE)(e, u.PremiumTypes.TIER_2) &&
        e?.premiumState != null &&
        e.premiumState.premiumSubscriptionType === r.jK.TIER_2
    );
}
function h(e) {
    let t = (0, o.c)(e),
        { bucket: n } = l.A.useConfig({ location: e }),
        r = (0, i.bG)([s.default], () => _(s.default.getCurrentUser())),
        a = n === l.H.OPEN_PURCHASE || (n === l.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && r);
    return t && a;
}
