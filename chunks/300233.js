t.d(n, { H: () => d, X: () => c });
var r = t(477900),
    l = t(582128),
    i = t(702841),
    s = t(597643),
    o = t(579908),
    a = t(636194);
let u = l.createContext(void 0);
function c(e) {
    let n = l.useContext(u);
    if (null == n)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: t, fetchGroupListingsForGuild: r } = n;
    return (
        l.useEffect(() => {
            r();
        }, [r]),
        t
    );
}
function d(e) {
    let {
            guildId: n,
            children: t,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: h,
            dontFetchWhileTrue: E,
        } = e,
        m = (0, i.bG)([s.A], () => s.A.isConnected()),
        C = (0, i.bG)([a.A], () => (null != n ? a.A.getSubscriptionGroupListingsForGuildFetchState(n) : a.e.FETCHED)),
        [f, A] = l.useState(!0 === c),
        x = l.useCallback(() => {
            if (null == n || !m || !0 === E) return;
            let e = a.A.getSubscriptionGroupListingsForGuildFetchState(n);
            (f || e === a.e.NOT_FETCHED) && (A(!1), o.WA(n, { includeSoftDeleted: d, countryCode: h }));
        }, [m, n, d, h, E, f]),
        N = C === a.e.FETCHED && !f;
    return (0, r.jsx)(u.Provider, { value: { listingsLoaded: N, fetchGroupListingsForGuild: x }, children: t });
}
