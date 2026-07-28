s.d(t, { A: () => a });
var l = s(582128),
    n = s(17928),
    i = s(228366),
    r = s(233317);
function a(e) {
    let { useCachedData: t = !1, fetch: s = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: a,
            isFetchingMembers: o,
            isUpdatingMembers: c,
        } = (0, n.cf)([r.A], () => ({
            premiumGroupMembers: r.A.getMembers(),
            isFetchingMembers: r.A.isFetchingMembers(),
            isUpdatingMembers: r.A.isUpdatingMembers(),
        }));
    return (
        (0, l.useEffect)(() => {
            !s ||
                (t && r.A.hasFetchedMembers()) ||
                (null != e && i.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
        }, [s, e, t]),
        { premiumGroupMembers: a, isLoading: o || c }
    );
}
