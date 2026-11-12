var l = t(477900),
    n = t(582128),
    r = t(164636),
    s = t(225123),
    i = t(579908),
    u = t(636194);
let o = n.createContext(void 0);
t.d(
    a,
    {},
    {
        H: function (e) {
            let {
                    guildId: a,
                    children: t,
                    refetchOnMount: c,
                    includeSoftDeleted: h,
                    countryCode: d,
                    dontFetchWhileTrue: m,
                } = e,
                p = (0, r.bG)([s.A], () => s.A.isConnected()),
                A = (0, r.bG)([u.A], () =>
                    null != a ? u.A.getSubscriptionGroupListingsForGuildFetchState(a) : u.e.FETCHED,
                ),
                [E, y] = n.useState(!0 === c),
                C = n.useCallback(() => {
                    if (null == a || !p || !0 === m) return;
                    let e = u.A.getSubscriptionGroupListingsForGuildFetchState(a);
                    (E || e === u.e.NOT_FETCHED) && (y(!1), i.WA(a, { includeSoftDeleted: h, countryCode: d }));
                }, [p, a, h, d, m, E]),
                P = A === u.e.FETCHED && !E,
                g = n.useMemo(() => ({ listingsLoaded: P, fetchGroupListingsForGuild: C }), [P, C]);
            return (0, l.jsx)(o.Provider, { value: g, children: t });
        },
        X: function (e) {
            let a = n.useContext(o);
            if (null == a)
                throw Error(
                    `${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`,
                );
            let { listingsLoaded: t, fetchGroupListingsForGuild: l } = a;
            return (
                n.useEffect(() => {
                    l();
                }, [l]),
                t
            );
        },
    },
);
