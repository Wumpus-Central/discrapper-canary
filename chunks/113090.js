n.d(t, { A: () => l });
var i = n(64700),
    s = n(311907),
    r = n(73153),
    a = n(233317);
function l() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: n, isFetchingMembership: l } = (0, s.cf)([a.A], () => ({
            premiumGroupMembership: a.A.getMembership(),
            isFetchingMembership: a.A.isFetchingMembership(),
        }));
    return (
        (0, i.useEffect)(() => {
            !t || (e && a.A.hasFetchedMembership()) || r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
        }, [t, e]),
        { premiumGroupMembership: n, isLoading: l }
    );
}
