t.d(r, { Ay: () => m, Do: () => d, M: () => f, sk: () => o });
var i = t(17928),
    n = t(441574),
    s = t(287809),
    a = t(474090),
    u = t(32206),
    l = t(482947),
    c = t(202541);
function o(e) {
    let r = (0, u.c)(e),
        { bucket: t } = l.A.useConfig({ location: e });
    return r && t !== l.H.CONTROL;
}
function d(e) {
    let r = (0, u.c)(e),
        { bucket: t } = l.A.useConfig({ location: e });
    return r && t === l.H.PAID_PREMIUM_SUBSCRIBERS_ONLY;
}
function f(e) {
    return (
        (0, a.YE)(e, c.PremiumTypes.TIER_2) &&
        e?.premiumState != null &&
        e.premiumState.premiumSubscriptionType === n.jK.TIER_2
    );
}
function m(e) {
    let r = (0, u.c)(e),
        { bucket: t } = l.A.useConfig({ location: e }),
        n = (0, i.bG)([s.default], () => f(s.default.getCurrentUser())),
        a = t === l.H.OPEN_PURCHASE || (t === l.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && n);
    return r && a;
}
