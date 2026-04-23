n.d(t, { A: () => c, X: () => d });
var i = n(17928),
    r = n(696451),
    a = n(711014),
    s = n(287809),
    _ = n(178368),
    l = n(474090),
    o = n(788868);
function E(e, t, n) {
    return (
        !(null == e || e.isPremiumGroupMember()) &&
        (!!((0, l.ki)(e, o.PremiumTypes.TIER_2) || t.some((e) => null != e.premiumGuildSubscription)) ||
            n.some((t) => {
                let n = r.Ay.getMember(t, e.id);
                return n?.premiumSince != null;
            }))
    );
}
function d() {
    return E(
        s.default.getCurrentUser(),
        _.A.hasFetched ? Object.values(_.A.boostSlots) : [],
        a.Ay.getFlattenedGuildIds(),
    );
}
function c() {
    return E(
        (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        (0, i.yK)([_.A], () => (_.A.hasFetched ? Object.values(_.A.boostSlots) : [])),
        (0, i.bG)([a.Ay], () => a.Ay.getFlattenedGuildIds()),
    );
}
