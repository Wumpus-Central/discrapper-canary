i.d(t, { A: () => r });
var s = i(582128),
    n = i(17928),
    a = i(73153),
    l = i(233317);
function r(e) {
    let { useCachedData: t = !1, fetch: i = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: r,
            isFetchingMembers: c,
            isUpdatingMembers: o,
        } = (0, n.cf)([l.A], () => ({
            premiumGroupMembers: l.A.getMembers(),
            isFetchingMembers: l.A.isFetchingMembers(),
            isUpdatingMembers: l.A.isUpdatingMembers(),
        }));
    return (
        (0, s.useEffect)(() => {
            !i ||
                (t && l.A.hasFetchedMembers()) ||
                (null != e && a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
        }, [i, e, t]),
        { premiumGroupMembers: r, isLoading: c || o }
    );
}
