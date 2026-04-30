s.d(t, { A: () => r });
var i = s(64700),
    l = s(17928),
    n = s(228366),
    a = s(233317);
function r(e) {
    let { useCachedData: t = !1, fetch: s = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: r,
            isFetchingMembers: c,
            isUpdatingMembers: o,
        } = (0, l.cf)([a.A], () => ({
            premiumGroupMembers: a.A.getMembers(),
            isFetchingMembers: a.A.isFetchingMembers(),
            isUpdatingMembers: a.A.isUpdatingMembers(),
        }));
    return (
        (0, i.useEffect)(() => {
            !s ||
                (t && a.A.hasFetchedMembers()) ||
                (null != e && n.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
        }, [s, e, t]),
        { premiumGroupMembers: r, isLoading: c || o }
    );
}
