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
            countryCode: h,
            dontFetchWhileTrue: C,
        } = e,
        p = (0, i.bG)([o.A], () => o.A.isConnected()),
        m = (0, i.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        [E, A] = l.useState(!0 === c),
        f = l.useCallback(() => {
            if (null == t || !p || !0 === C) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (E || e === s.e.NOT_FETCHED) && (A(!1), a.WA(t, { includeSoftDeleted: d, countryCode: h }));
        }, [p, t, d, h, C, E]),
        S = m === s.e.FETCHED && !E;
    return (0, r.jsx)(u.Provider, { value: { listingsLoaded: S, fetchGroupListingsForGuild: f }, children: n });
}
