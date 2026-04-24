"use strict";
n.d(t, { A: () => c, X: () => u });
var i = n(17928),
    r = n(696451),
    s = n(711014),
    a = n(287809),
    o = n(178368),
    l = n(474090),
    _ = n(788868);
function d(e, t, n) {
    return (
        !(null == e || e.isPremiumGroupMember()) &&
        (!!((0, l.ki)(e, _.PremiumTypes.TIER_2) || t.some((e) => null != e.premiumGuildSubscription)) ||
            n.some((t) => {
                let n = r.Ay.getMember(t, e.id);
                return n?.premiumSince != null;
            }))
    );
}
function u() {
    return d(
        a.default.getCurrentUser(),
        o.A.hasFetched ? Object.values(o.A.boostSlots) : [],
        s.Ay.getFlattenedGuildIds(),
    );
}
function c() {
    return d(
        (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        (0, i.yK)([o.A], () => (o.A.hasFetched ? Object.values(o.A.boostSlots) : [])),
        (0, i.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
    );
}
