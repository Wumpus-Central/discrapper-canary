n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    a = n(570140),
    o = n(643281);
function s(e) {
    let { useCachedData: t = !1, fetch: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: s,
            isFetchingMembers: l,
            isUpdatingMembers: c,
        } = (0, i.cj)([o.Z], () => ({
            premiumGroupMembers: o.Z.getMembers(),
            isFetchingMembers: o.Z.isFetchingMembers(),
            isUpdatingMembers: o.Z.isUpdatingMembers(),
        }));
    return (
        (0, r.useEffect)(() => {
            n &&
                ((t && o.Z.hasFetchedMembers()) ||
                    (null != e &&
                        a.Z.dispatch({
                            type: "PREMIUM_GROUP_MEMBERS_REQUEST",
                            subscriptionId: e,
                        })));
        }, [n, e, t]),
        {
            premiumGroupMembers: s,
            isLoading: l || c,
        }
    );
}
