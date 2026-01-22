n.d(t, {
    A: () => o,
});
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(233317);

function o() {
    let { useCachedData: e = !1, fetch: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { premiumGroupMembership: n, isFetchingMembership: o } = (0, i.cf)([s.A], () => ({
            premiumGroupMembership: s.A.getMembership(),
            isFetchingMembership: s.A.isFetchingMembership(),
        }));
    return (
        (0, r.useEffect)(() => {
            !t ||
                (e && s.A.hasFetchedMembership()) ||
                a.h.dispatch({
                    type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST",
                });
        }, [t, e]),
        {
            premiumGroupMembership: n,
            isLoading: o,
        }
    );
}
