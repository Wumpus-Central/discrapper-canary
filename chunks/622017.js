s.d(t, { A: () => a });
var l = s(64700),
    i = s(17928),
    r = s(228366),
    n = s(233317);
function a(e) {
    let { useCachedData: t = !1, fetch: s = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: a,
            isFetchingMembers: o,
            isUpdatingMembers: c,
        } = (0, i.cf)([n.A], () => ({
            premiumGroupMembers: n.A.getMembers(),
            isFetchingMembers: n.A.isFetchingMembers(),
            isUpdatingMembers: n.A.isUpdatingMembers(),
        }));
    return (
        (0, l.useEffect)(() => {
            !s ||
                (t && n.A.hasFetchedMembers()) ||
                (null != e && r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
        }, [s, e, t]),
        { premiumGroupMembers: a, isLoading: o || c }
    );
}
