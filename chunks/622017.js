s.d(t, { A: () => l });
var r = s(64700),
    a = s(311907),
    i = s(73153),
    n = s(233317);
function l(e) {
    let { useCachedData: t = !1, fetch: s = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: l,
            isFetchingMembers: o,
            isUpdatingMembers: c,
        } = (0, a.cf)([n.A], () => ({
            premiumGroupMembers: n.A.getMembers(),
            isFetchingMembers: n.A.isFetchingMembers(),
            isUpdatingMembers: n.A.isUpdatingMembers(),
        }));
    return (
        (0, r.useEffect)(() => {
            !s ||
                (t && n.A.hasFetchedMembers()) ||
                (null != e && i.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
        }, [s, e, t]),
        { premiumGroupMembers: l, isLoading: o || c }
    );
}
