n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    a = n(73153),
    s = n(233317);
function o(e) {
    let { useCachedData: t = !1, fetch: n = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        {
            premiumGroupMembers: o,
            isFetchingMembers: l,
            isUpdatingMembers: c,
        } = (0, i.cf)([s.A], () => ({
            premiumGroupMembers: s.A.getMembers(),
            isFetchingMembers: s.A.isFetchingMembers(),
            isUpdatingMembers: s.A.isUpdatingMembers(),
        }));
    return (
        (0, r.useEffect)(() => {
            !n ||
                (t && s.A.hasFetchedMembers()) ||
                (null != e &&
                    a.h.dispatch({
                        type: "PREMIUM_GROUP_MEMBERS_REQUEST",
                        subscriptionId: e,
                    }));
        }, [n, e, t]),
        {
            premiumGroupMembers: o,
            isLoading: l || c,
        }
    );
}
