var l = n(477900),
    i = n(582128),
    o = n(164636),
    r = n(225123),
    a = n(579908),
    s = n(636194);
let u = i.createContext(void 0);
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
                    dontFetchWhileTrue: h,
                } = e,
                p = (0, o.bG)([r.A], () => r.A.isConnected()),
                m = (0, o.bG)([s.A], () =>
                    null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED,
                ),
                [f, E] = i.useState(!0 === c),
                _ = i.useCallback(() => {
                    if (null == t || !p || !0 === h) return;
                    let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
                    (f || e === s.e.NOT_FETCHED) && (E(!1), a.WA(t, { includeSoftDeleted: d, countryCode: C }));
                }, [p, t, d, C, h, f]),
                y = m === s.e.FETCHED && !f,
                g = i.useMemo(() => ({ listingsLoaded: y, fetchGroupListingsForGuild: _ }), [y, _]);
            return (0, l.jsx)(u.Provider, { value: g, children: n });
        },
        X: function (e) {
            let t = i.useContext(u);
            if (null == t)
                throw Error(
                    `${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`,
                );
            let { listingsLoaded: n, fetchGroupListingsForGuild: l } = t;
            return (
                i.useEffect(() => {
                    l();
                }, [l]),
                n
            );
        },
    },
);
