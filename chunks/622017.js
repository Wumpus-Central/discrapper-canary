var i = s(582128),
    n = s(855986),
    a = s(73153),
    l = s(233317);
s.d(
    t,
    {},
    {
        A: function (e) {
            let { useCachedData: t = !1, fetch: s = !0 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
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
                (0, i.useEffect)(() => {
                    !s ||
                        (t && l.A.hasFetchedMembers()) ||
                        (null != e && a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERS_REQUEST", subscriptionId: e }));
                }, [s, e, t]),
                { premiumGroupMembers: r, isLoading: c || o }
            );
        },
    },
);
