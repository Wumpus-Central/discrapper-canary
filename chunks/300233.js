var l = n(477900),
    o = n(582128),
    i = n(164636),
    r = n(225123),
    u = n(579908),
    a = n(636194);
let s = o.createContext(void 0);
n.d(
    t,
    {},
    {
        H: function (e) {
            let {
                    guildId: t,
                    children: n,
                    refetchOnMount: c,
                    includeSoftDeleted: d,
                    countryCode: C,
                    dontFetchWhileTrue: p,
                } = e,
                h = (0, i.bG)([r.A], () => r.A.isConnected()),
                m = (0, i.bG)([a.A], () =>
                    null != t ? a.A.getSubscriptionGroupListingsForGuildFetchState(t) : a.e.FETCHED,
                ),
                [f, E] = o.useState(!0 === c),
                _ = o.useCallback(() => {
                    if (null == t || !h || !0 === p) return;
                    let e = a.A.getSubscriptionGroupListingsForGuildFetchState(t);
                    (f || e === a.e.NOT_FETCHED) && (E(!1), u.WA(t, { includeSoftDeleted: d, countryCode: C }));
                }, [h, t, d, C, p, f]),
                A = m === a.e.FETCHED && !f,
                g = o.useMemo(() => ({ listingsLoaded: A, fetchGroupListingsForGuild: _ }), [A, _]);
            return (0, l.jsx)(s.Provider, { value: g, children: n });
        },
        X: function (e) {
            let t = o.useContext(s);
            if (null == t)
                throw Error(
                    `${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`,
                );
            let { listingsLoaded: n, fetchGroupListingsForGuild: l } = t;
            return (
                o.useEffect(() => {
                    l();
                }, [l]),
                n
            );
        },
    },
);
