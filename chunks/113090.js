s.d(t, { A: () => l });
var r = s(64700),
    a = s(311907),
    i = s(73153),
    n = s(233317);
function l() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: s, isFetchingMembership: l } = (0, a.cf)([n.A], () => ({
            premiumGroupMembership: n.A.getMembership(),
            isFetchingMembership: n.A.isFetchingMembership(),
        }));
    return (
        (0, r.useEffect)(() => {
            !t || (e && n.A.hasFetchedMembership()) || i.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        }, [t, e]),
        { premiumGroupMembership: s, isLoading: l }
    );
}
