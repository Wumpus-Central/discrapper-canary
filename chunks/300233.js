n.d(t, { H: () => u, X: () => d });
var i = n(627968),
    l = n(64700),
    a = n(702841),
    r = n(366853),
    s = n(579908),
    o = n(636194);
let c = l.createContext(void 0);
function d(e) {
    let t = l.useContext(c);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: n, fetchGroupListingsForGuild: i } = t;
    return (
        l.useEffect(() => {
            i();
        }, [i]),
        n
    );
}
function u(e) {
    let {
            guildId: t,
            children: n,
            refetchOnMount: d,
            includeSoftDeleted: u,
            countryCode: _,
            dontFetchWhileTrue: m,
        } = e,
        h = (0, a.bG)([r.A], () => r.A.isConnected()),
        p = (0, a.bG)([o.A], () => (null != t ? o.A.getSubscriptionGroupListingsForGuildFetchState(t) : o.e.FETCHED)),
        [g, f] = l.useState(!0 === d),
        x = l.useCallback(() => {
            if (null == t || !h || !0 === m) return;
            let e = o.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (g || e === o.e.NOT_FETCHED) && (f(!1), s.WA(t, { includeSoftDeleted: u, countryCode: _ }));
        }, [h, t, u, _, m, g]),
        A = p === o.e.FETCHED && !g;
    return (0, i.jsx)(c.Provider, { value: { listingsLoaded: A, fetchGroupListingsForGuild: x }, children: n });
}
