n.d(t, { A: () => l });
var i = n(64700),
    s = n(311907),
    r = n(73153),
    a = n(233317);
function l(e) {
    let { useCachedData: t = !1, fetch: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: l,
            isFetchingMembers: o,
            isUpdatingMembers: c,
        } = (0, s.cf)([a.A], () => ({
            premiumGroupMembers: a.A.getMembers(),
            isFetchingMembers: a.A.isFetchingMembers(),
            isUpdatingMembers: a.A.isUpdatingMembers(),
        }));
    return (
        (0, i.useEffect)(() => {
            !n ||
                (t && a.A.hasFetchedMembers()) ||
                (null != e && r.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
        }, [n, e, t]),
        { premiumGroupMembers: l, isLoading: o || c }
    );
}
