n.d(t, { H: () => d, X: () => c });
var r = n(477900),
    l = n(582128),
    i = n(702841),
    s = n(597643),
    u = n(579908),
    o = n(636194);
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
            dontFetchWhileTrue: h,
        } = e,
        A = (0, i.bG)([s.A], () => s.A.isConnected()),
        f = (0, i.bG)([o.A], () => (null != t ? o.A.getSubscriptionGroupListingsForGuildFetchState(t) : o.e.FETCHED)),
        [g, _] = l.useState(!0 === c),
        C = l.useCallback(() => {
            if (null == t || !A || !0 === h) return;
            let e = o.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (g || e === o.e.NOT_FETCHED) && (_(!1), u.WA(t, { includeSoftDeleted: d, countryCode: E }));
        }, [A, t, d, E, h, g]),
        S = f === o.e.FETCHED && !g;
    return (0, r.jsx)(a.Provider, { value: { listingsLoaded: S, fetchGroupListingsForGuild: C }, children: n });
}
