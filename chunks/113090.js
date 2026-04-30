s.d(t, { A: () => r });
var i = s(64700),
    l = s(17928),
    n = s(228366),
    a = s(233317);
function r() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: s, isFetchingMembership: r } = (0, l.cf)([a.A], () => ({
            premiumGroupMembership: a.A.getMembership(),
            isFetchingMembership: a.A.isFetchingMembership(),
        }));
    return (
        (0, i.useEffect)(() => {
            !t || (e && a.A.hasFetchedMembership()) || n.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        }, [t, e]),
        { premiumGroupMembership: s, isLoading: r }
    );
}
