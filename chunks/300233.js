t.d(n, { H: () => d, X: () => o });
var l = t(477900),
    r = t(582128),
    i = t(702841),
    a = t(595528),
    s = t(579908),
    u = t(636194);
let c = r.createContext(void 0);
function o(e) {
    let n = r.useContext(c);
    if (null == n)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: t, fetchGroupListingsForGuild: l } = n;
    return (
        r.useEffect(() => {
            l();
        }, [l]),
        t
    );
}
function d(e) {
    let {
            guildId: n,
            children: t,
            refetchOnMount: o,
            includeSoftDeleted: d,
            countryCode: m,
            dontFetchWhileTrue: h,
        } = e,
        E = (0, i.bG)([a.A], () => a.A.isConnected()),
        f = (0, i.bG)([u.A], () => (null != n ? u.A.getSubscriptionGroupListingsForGuildFetchState(n) : u.e.FETCHED)),
        [A, p] = r.useState(!0 === o),
        N = r.useCallback(() => {
            if (null == n || !E || !0 === h) return;
            let e = u.A.getSubscriptionGroupListingsForGuildFetchState(n);
            (A || e === u.e.NOT_FETCHED) && (p(!1), s.WA(n, { includeSoftDeleted: d, countryCode: m }));
        }, [E, n, d, m, h, A]),
        g = f === u.e.FETCHED && !A;
    return (0, l.jsx)(c.Provider, { value: { listingsLoaded: g, fetchGroupListingsForGuild: N }, children: t });
}
