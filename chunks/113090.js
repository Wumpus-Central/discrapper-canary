s.d(t, { A: () => a });
var l = s(582128),
    n = s(17928),
    i = s(228366),
    r = s(233317);
function a() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: s, isFetchingMembership: a } = (0, n.cf)([r.A], () => ({
            premiumGroupMembership: r.A.getMembership(),
            isFetchingMembership: r.A.isFetchingMembership(),
        }));
    return (
        (0, l.useEffect)(() => {
            !t || (e && r.A.hasFetchedMembership()) || i.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        }, [t, e]),
        { premiumGroupMembership: s, isLoading: a }
    );
}
