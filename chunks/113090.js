s.d(t, { A: () => l });
var a = s(64700),
    r = s(17928),
    i = s(228366),
    n = s(233317);
function l() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: s, isFetchingMembership: l } = (0, r.cf)([n.A], () => ({
            premiumGroupMembership: n.A.getMembership(),
            isFetchingMembership: n.A.isFetchingMembership(),
        }));
    return (
        (0, a.useEffect)(() => {
            !t || (e && n.A.hasFetchedMembership()) || i.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        }, [t, e]),
        { premiumGroupMembership: s, isLoading: l }
    );
}
