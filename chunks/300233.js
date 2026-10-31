n.d(t, { H: () => d, X: () => c });
var l = n(477900),
    o = n(582128),
    i = n(702841),
    r = n(403010),
    a = n(579908),
    s = n(636194);
let u = o.createContext(void 0);
function c(e) {
    let t = o.useContext(u);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: n, fetchGroupListingsForGuild: l } = t;
    return (
        o.useEffect(() => {
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
            dontFetchWhileTrue: p,
        } = e,
        h = (0, i.bG)([r.A], () => r.A.isConnected()),
        m = (0, i.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        [f, E] = o.useState(!0 === c),
        _ = o.useCallback(() => {
            if (null == t || !h || !0 === p) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (f || e === s.e.NOT_FETCHED) && (E(!1), a.WA(t, { includeSoftDeleted: d, countryCode: C }));
        }, [h, t, d, C, p, f]),
        y = m === s.e.FETCHED && !f,
        g = o.useMemo(() => ({ listingsLoaded: y, fetchGroupListingsForGuild: _ }), [y, _]);
    return (0, l.jsx)(u.Provider, { value: g, children: n });
}
