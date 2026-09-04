n.d(t, { H: () => d, X: () => c });
var r = n(477900),
    l = n(582128),
    i = n(702841),
    o = n(597643),
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
            countryCode: C,
            dontFetchWhileTrue: h,
        } = e,
        E = (0, i.bG)([o.A], () => o.A.isConnected()),
        m = (0, i.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        [p, _] = l.useState(!0 === c),
        f = l.useCallback(() => {
            if (null == t || !E || !0 === h) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (p || e === s.e.NOT_FETCHED) && (_(!1), a.WA(t, { includeSoftDeleted: d, countryCode: C }));
        }, [E, t, d, C, h, p]),
        S = m === s.e.FETCHED && !p;
    return (0, r.jsx)(u.Provider, { value: { listingsLoaded: S, fetchGroupListingsForGuild: f }, children: n });
}
