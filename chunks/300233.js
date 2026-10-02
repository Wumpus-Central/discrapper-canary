l.d(n, { H: () => d, X: () => c });
var t = l(477900),
    r = l(582128),
    i = l(702841),
    u = l(595528),
    s = l(579908),
    a = l(636194);
let o = r.createContext(void 0);
function c(e) {
    let n = r.useContext(o);
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
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: m,
            dontFetchWhileTrue: E,
        } = e,
        h = (0, i.bG)([u.A], () => u.A.isConnected()),
        f = (0, i.bG)([a.A], () => (null != n ? a.A.getSubscriptionGroupListingsForGuildFetchState(n) : a.e.FETCHED)),
        [N, A] = r.useState(!0 === c),
        C = r.useCallback(() => {
            if (null == n || !h || !0 === E) return;
            let e = a.A.getSubscriptionGroupListingsForGuildFetchState(n);
            (N || e === a.e.NOT_FETCHED) && (A(!1), s.WA(n, { includeSoftDeleted: d, countryCode: m }));
        }, [h, n, d, m, E, N]),
        p = f === a.e.FETCHED && !N;
    return (0, t.jsx)(o.Provider, { value: { listingsLoaded: p, fetchGroupListingsForGuild: C }, children: l });
}
