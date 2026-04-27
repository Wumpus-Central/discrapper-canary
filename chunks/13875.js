"use strict";
n.d(t, { Ay: () => _, Do: () => d, sk: () => u });
var r = n(17928),
    i = n(441574),
    a = n(287809),
    l = n(474090),
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
function _(e) {
    let t = (0, s.c)(e),
        { bucket: n } = o.A.useConfig({ location: e }),
        u = (0, r.bG)([a.default], () => {
            var e;
            return (
                (e = a.default.getCurrentUser()),
                (0, l.YE)(e, c.PremiumTypes.TIER_2) &&
                    e?.premiumState != null &&
                    e.premiumState.premiumSubscriptionType === i.jK.TIER_2
            );
        }),
        d = n === o.H.OPEN_PURCHASE || (n === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && u);
    return t && d;
}
