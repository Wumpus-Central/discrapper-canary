n.d(t, { H: () => d, X: () => c });
var l = n(477900),
    r = n(582128),
    i = n(702841),
    o = n(597643),
    u = n(579908),
    s = n(636194);
let a = r.createContext(void 0);
function c(e) {
    let t = r.useContext(a);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: n, fetchGroupListingsForGuild: l } = t;
    return (
        r.useEffect(() => {
            l();
        }, [l]),
        n
    );
}
function d(e) {
    let {
            guildId: t,
            children: n,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: C,
            dontFetchWhileTrue: E,
        } = e,
        h = (0, i.bG)([o.A], () => o.A.isConnected()),
        _ = (0, i.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        [A, p] = r.useState(!0 === c),
        f = r.useCallback(() => {
            if (null == t || !h || !0 === E) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (A || e === s.e.NOT_FETCHED) && (p(!1), u.WA(t, { includeSoftDeleted: d, countryCode: C }));
        }, [h, t, d, C, E, A]),
        S = _ === s.e.FETCHED && !A;
    return (0, l.jsx)(a.Provider, { value: { listingsLoaded: S, fetchGroupListingsForGuild: f }, children: n });
}
