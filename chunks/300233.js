n.d(t, { H: () => d, X: () => c });
var r = n(477900),
    l = n(582128),
    o = n(702841),
    i = n(597643),
    a = n(579908),
    s = n(636194);
let u = l.createContext(void 0);
function c(e) {
    let t = l.useContext(u);
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
            countryCode: h,
            dontFetchWhileTrue: C,
        } = e,
        m = (0, o.bG)([i.A], () => i.A.isConnected()),
        p = (0, o.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        [f, g] = l.useState(!0 === c),
        E = l.useCallback(() => {
            if (null == t || !m || !0 === C) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (f || e === s.e.NOT_FETCHED) && (g(!1), a.WA(t, { includeSoftDeleted: d, countryCode: h }));
        }, [m, t, d, h, C, f]),
        S = p === s.e.FETCHED && !f;
    return (0, r.jsx)(u.Provider, { value: { listingsLoaded: S, fetchGroupListingsForGuild: E }, children: n });
}
