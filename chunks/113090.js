i.d(t, { A: () => r });
var s = i(582128),
    n = i(17928),
    a = i(73153),
    l = i(233317);
function r() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: i, isFetchingMembership: r } = (0, n.cf)([l.A], () => ({
            premiumGroupMembership: l.A.getMembership(),
            isFetchingMembership: l.A.isFetchingMembership(),
        }));
    return (
        (0, s.useEffect)(() => {
            !t || (e && l.A.hasFetchedMembership()) || a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        }, [t, e]),
        { premiumGroupMembership: i, isLoading: r }
    );
}
