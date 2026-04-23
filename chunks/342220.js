"use strict";
n.d(t, { A: () => _, X: () => d });
var r = n(311907),
    i = n(696451),
    s = n(711014),
    a = n(287809),
    o = n(178368),
    l = n(474090),
    u = n(788868);
function c(e, t, n) {
    return (
        !(null == e || e.isPremiumGroupMember()) &&
        (!!((0, l.ki)(e, u.PremiumTypes.TIER_2) || t.some((e) => null != e.premiumGuildSubscription)) ||
            n.some((t) => {
                let n = i.Ay.getMember(t, e.id);
                return n?.premiumSince != null;
            }))
    );
}
function d() {
    return c(
        a.default.getCurrentUser(),
        o.A.hasFetched ? Object.values(o.A.boostSlots) : [],
        s.Ay.getFlattenedGuildIds(),
    );
}
function _() {
    return c(
        (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        (0, r.yK)([o.A], () => (o.A.hasFetched ? Object.values(o.A.boostSlots) : [])),
        (0, r.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
    );
}
