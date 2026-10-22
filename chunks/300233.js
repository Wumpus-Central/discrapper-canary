n.d(t, { H: () => d, X: () => c });
var l = n(477900),
    o = n(582128),
    r = n(702841),
    i = n(276602),
    a = n(579908),
    u = n(636194);
let s = o.createContext(void 0);
function c(e) {
    let t = o.useContext(s);
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
            dontFetchWhileTrue: h,
        } = e,
        p = (0, r.bG)([i.A], () => i.A.isConnected()),
        m = (0, r.bG)([u.A], () => (null != t ? u.A.getSubscriptionGroupListingsForGuildFetchState(t) : u.e.FETCHED)),
        [E, _] = o.useState(!0 === c),
        f = o.useCallback(() => {
            if (null == t || !p || !0 === h) return;
            let e = u.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (E || e === u.e.NOT_FETCHED) && (_(!1), a.WA(t, { includeSoftDeleted: d, countryCode: C }));
        }, [p, t, d, C, h, E]),
        y = m === u.e.FETCHED && !E,
        A = o.useMemo(() => ({ listingsLoaded: y, fetchGroupListingsForGuild: f }), [y, f]);
    return (0, l.jsx)(s.Provider, { value: A, children: n });
}
