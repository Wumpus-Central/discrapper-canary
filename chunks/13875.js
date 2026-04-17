n.d(t, { A: () => c });
var i = n(311907),
    s = n(988506),
    l = n(287809),
    r = n(474090),
    a = n(32206),
    o = n(482947),
    d = n(788868);
function c(e) {
    let t = (0, a.c)(e),
        { bucket: n } = o.A.useConfig({ location: e }),
        c = (0, i.bG)([l.default], () => {
            let e = l.default.getCurrentUser();
            return (
                (0, r.YE)(e, d.PremiumTypes.TIER_2) &&
                e?.premiumState != null &&
                e.premiumState.premiumSubscriptionType === s.jK.TIER_2
            );
        }),
        u = n === o.H.OPEN_PURCHASE || (n === o.H.PAID_PREMIUM_SUBSCRIBERS_ONLY && c);
    return t && u;
}
