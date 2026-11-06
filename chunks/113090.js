var i = s(582128),
    n = s(855986),
    a = s(73153),
    l = s(233317);
s.d(
    t,
    {},
    {
        A: function () {
            let { useCachedData: e = !1, fetch: t = !0 } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { premiumGroupMembership: s, isFetchingMembership: r } = (0, n.cf)([l.A], () => ({
                    premiumGroupMembership: l.A.getMembership(),
                    isFetchingMembership: l.A.isFetchingMembership(),
                }));
            return (
                (0, i.useEffect)(() => {
                    !t ||
                        (e && l.A.hasFetchedMembership()) ||
                        a.h.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_REQUEST" });
                }, [t, e]),
                { premiumGroupMembership: s, isLoading: r }
            );
        },
    },
);
