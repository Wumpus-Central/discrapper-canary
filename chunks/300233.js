n.d(t, { H: () => d, X: () => c });
var l = n(627968),
    r = n(64700),
    i = n(702841),
    a = n(617710),
    o = n(579908),
    s = n(636194);
let u = r.createContext(void 0);
function c(e) {
    let t = r.useContext(u);
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
            countryCode: m,
            dontFetchWhileTrue: E,
        } = e,
        p = (0, i.bG)([a.A], () => a.A.isConnected()),
        C = (0, i.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        [_, h] = r.useState(!0 === c),
        A = r.useCallback(() => {
            if (null == t || !p || !0 === E) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (_ || e === s.e.NOT_FETCHED) && (h(!1), o.WA(t, { includeSoftDeleted: d, countryCode: m }));
        }, [p, t, d, m, E, _]),
        N = C === s.e.FETCHED && !_;
    return (0, l.jsx)(u.Provider, { value: { listingsLoaded: N, fetchGroupListingsForGuild: A }, children: n });
}
