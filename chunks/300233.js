n.d(t, { H: () => d, X: () => c });
var r = n(477900),
    l = n(582128),
    i = n(702841),
    o = n(617710),
    u = n(579908),
    s = n(636194);
let a = l.createContext(void 0);
function c(e) {
    let t = l.useContext(a);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return (
        l.useEffect(() => {
            r();
        }, [r]),
        n
    );
}
function d(e) {
    let {
            guildId: t,
            children: n,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: E,
            dontFetchWhileTrue: C,
        } = e,
        h = (0, i.bG)([o.A], () => o.A.isConnected()),
        S = (0, i.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        [_, I] = l.useState(!0 === c),
        p = l.useCallback(() => {
            if (null == t || !h || !0 === C) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (_ || e === s.e.NOT_FETCHED) && (I(!1), u.WA(t, { includeSoftDeleted: d, countryCode: E }));
        }, [h, t, d, E, C, _]),
        A = S === s.e.FETCHED && !_;
    return (0, r.jsx)(a.Provider, { value: { listingsLoaded: A, fetchGroupListingsForGuild: p }, children: n });
}
