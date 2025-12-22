n.d(t, { Z: () => s });
var r = n(473749),
    i = n(442837),
    a = n(570140),
    o = n(643281);
function s() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: n, isFetchingMembership: s } = (0, i.cj)([o.Z], () => ({
            premiumGroupMembership: o.Z.getMembership(),
            isFetchingMembership: o.Z.isFetchingMembership(),
        }));
    return (
        (0, r.useEffect)(() => {
            t && ((e && o.Z.hasFetchedMembership()) || a.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" }));
        }, [t, e]),
        {
            premiumGroupMembership: n,
            isLoading: s,
        }
    );
}
