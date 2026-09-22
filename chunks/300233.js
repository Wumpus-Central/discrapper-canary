r.d(n, { H: () => d, X: () => u });
var t = r(477900),
    l = r(582128),
    i = r(702841),
    s = r(597643),
    o = r(579908),
    a = r(636194);
let c = l.createContext(void 0);
function u(e) {
    let n = l.useContext(c);
    if (null == n)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: r, fetchGroupListingsForGuild: t } = n;
    return (
        l.useEffect(() => {
            t();
        }, [t]),
        r
    );
}
function d(e) {
    let {
            guildId: n,
            children: r,
            refetchOnMount: u,
            includeSoftDeleted: d,
            countryCode: h,
            dontFetchWhileTrue: m,
        } = e,
        x = (0, i.bG)([s.A], () => s.A.isConnected()),
        E = (0, i.bG)([a.A], () => (null != n ? a.A.getSubscriptionGroupListingsForGuildFetchState(n) : a.e.FETCHED)),
        [f, g] = l.useState(!0 === u),
        p = l.useCallback(() => {
            if (null == n || !x || !0 === m) return;
            let e = a.A.getSubscriptionGroupListingsForGuildFetchState(n);
            (f || e === a.e.NOT_FETCHED) && (g(!1), o.WA(n, { includeSoftDeleted: d, countryCode: h }));
        }, [x, n, d, h, m, f]),
        A = E === a.e.FETCHED && !f;
    return (0, t.jsx)(c.Provider, { value: { listingsLoaded: A, fetchGroupListingsForGuild: p }, children: r });
}
