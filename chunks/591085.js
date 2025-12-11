n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    a = n(570140),
    o = n(643281);
function s() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        {
            premiumGroupMembers: t,
            premiumGroupSubscriptionId: n,
            hasFetchedMembers: s,
            isFetchingMembers: l,
            isFetchingMembership: c,
            isUpdatingMembers: u,
        } = (0, i.cj)([o.Z], () => ({
            premiumGroupMembers: o.Z.getMembers(),
            premiumGroupSubscriptionId: o.Z.getPremiumGroupSubscriptionId(),
            hasFetchedMembers: o.Z.hasFetchedMembers(),
            isFetchingMembers: o.Z.isFetchingMembers(),
            isFetchingMembership: o.Z.isFetchingMembership(),
            isUpdatingMembers: o.Z.isUpdatingMembers(),
        }));
    return (
        (0, r.useEffect)(() => {
            e &&
                (s ||
                    (null != n
                        ? a.Z.dispatch({
                              type: "PREMIUM_GROUP_MEMBERS_REQUEST",
                              subscriptionId: n,
                          })
                        : a.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" })));
        }, [e, n, s]),
        {
            premiumGroupMembers: t,
            isLoading: l || c || u,
        }
    );
}
