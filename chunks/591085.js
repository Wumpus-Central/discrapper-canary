n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    a = n(570140),
    o = n(643281);
function s() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, i.e7)([o.Z], () => o.Z.getMembers()),
        n = (0, i.e7)([o.Z], () => o.Z.getPremiumGroupSubscriptionId()),
        s = (0, i.e7)([o.Z], () => o.Z.hasFetchedMembers()),
        l = !s;
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
            isLoading: l,
        }
    );
}
