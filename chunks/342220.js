var i = n(855986),
    r = n(696451),
    a = n(711014),
    s = n(287809),
    l = n(178368),
    o = n(474090),
    d = n(682901);
function c(e, t, n) {
    return (
        !(null == e || e.isPremiumGroupMember()) &&
        (!!((0, o.ki)(e, d.PremiumTypes.TIER_2) || t.some((e) => null != e.premiumGuildSubscription)) ||
            n.some((t) => {
                let n = r.Ay.getMember(t, e.id);
                return n?.premiumSince != null;
            }))
    );
}
n.d(
    t,
    {},
    {
        A: function () {
            return c(
                (0, i.bG)([s.default], () => s.default.getCurrentUser()),
                (0, i.yK)([l.A], () => (l.A.hasFetched ? Object.values(l.A.boostSlots) : [])),
                (0, i.bG)([a.Ay], () => a.Ay.getFlattenedGuildIds()),
            );
        },
        X: function () {
            return c(
                s.default.getCurrentUser(),
                l.A.hasFetched ? Object.values(l.A.boostSlots) : [],
                a.Ay.getFlattenedGuildIds(),
            );
        },
    },
);
