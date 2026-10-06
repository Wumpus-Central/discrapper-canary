l.d(n, { H: () => d, X: () => o });
var t = l(477900),
    r = l(582128),
    i = l(702841),
    a = l(595528),
    s = l(579908),
    u = l(636194);
let c = r.createContext(void 0);
function o(e) {
    let n = r.useContext(c);
    if (null == n)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: l, fetchGroupListingsForGuild: t } = n;
    return (
        r.useEffect(() => {
            t();
        }, [t]),
        l
    );
}
function d(e) {
    let {
            guildId: n,
            children: l,
            refetchOnMount: o,
            includeSoftDeleted: d,
            countryCode: m,
            dontFetchWhileTrue: h,
        } = e,
        f = (0, i.bG)([a.A], () => a.A.isConnected()),
        E = (0, i.bG)([u.A], () => (null != n ? u.A.getSubscriptionGroupListingsForGuildFetchState(n) : u.e.FETCHED)),
        [A, N] = r.useState(!0 === o),
        p = r.useCallback(() => {
            if (null == n || !f || !0 === h) return;
            let e = u.A.getSubscriptionGroupListingsForGuildFetchState(n);
            (A || e === u.e.NOT_FETCHED) && (N(!1), s.WA(n, { includeSoftDeleted: d, countryCode: m }));
        }, [f, n, d, m, h, A]),
        g = E === u.e.FETCHED && !A;
    return (0, t.jsx)(c.Provider, { value: { listingsLoaded: g, fetchGroupListingsForGuild: p }, children: l });
}
