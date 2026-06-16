s.d(t, { A: () => a });
var l = s(64700),
    i = s(17928),
    r = s(228366),
    n = s(233317);
function a() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: s, isFetchingMembership: a } = (0, i.cf)([n.A], () => ({
            premiumGroupMembership: n.A.getMembership(),
            isFetchingMembership: n.A.isFetchingMembership(),
        }));
    return (
        (0, l.useEffect)(() => {
            !t || (e && n.A.hasFetchedMembership()) || r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        }, [t, e]),
        { premiumGroupMembership: s, isLoading: a }
    );
}
