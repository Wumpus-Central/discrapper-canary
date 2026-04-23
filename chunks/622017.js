s.d(t, { A: () => l });
var a = s(64700),
    r = s(17928),
    i = s(228366),
    n = s(233317);
function l(e) {
    let { useCachedData: t = !1, fetch: s = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: l,
            isFetchingMembers: o,
            isUpdatingMembers: c,
        } = (0, r.cf)([n.A], () => ({
            premiumGroupMembers: n.A.getMembers(),
            isFetchingMembers: n.A.isFetchingMembers(),
            isUpdatingMembers: n.A.isUpdatingMembers(),
        }));
    return (
        (0, a.useEffect)(() => {
            !s ||
                (t && n.A.hasFetchedMembers()) ||
                (null != e && i.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
        }, [s, e, t]),
        { premiumGroupMembers: l, isLoading: o || c }
    );
}
