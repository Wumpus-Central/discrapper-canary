t.d(a, { H: () => h, X: () => c });
var l = t(477900),
    n = t(582128),
    r = t(702841),
    i = t(595528),
    s = t(579908),
    u = t(636194);
let o = n.createContext(void 0);
function c(e) {
    let a = n.useContext(o);
    if (null == a)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: t, fetchGroupListingsForGuild: l } = a;
    return (
        n.useEffect(() => {
            l();
        }, [l]),
        t
    );
}
function h(e) {
    let {
            guildId: a,
            children: t,
            refetchOnMount: c,
            includeSoftDeleted: h,
            countryCode: d,
            dontFetchWhileTrue: m,
        } = e,
        A = (0, r.bG)([i.A], () => i.A.isConnected()),
        E = (0, r.bG)([u.A], () => (null != a ? u.A.getSubscriptionGroupListingsForGuildFetchState(a) : u.e.FETCHED)),
        [p, C] = n.useState(!0 === c),
        y = n.useCallback(() => {
            if (null == a || !A || !0 === m) return;
            let e = u.A.getSubscriptionGroupListingsForGuildFetchState(a);
            (p || e === u.e.NOT_FETCHED) && (C(!1), s.WA(a, { includeSoftDeleted: h, countryCode: d }));
        }, [A, a, h, d, m, p]),
        f = E === u.e.FETCHED && !p,
        g = n.useMemo(() => ({ listingsLoaded: f, fetchGroupListingsForGuild: y }), [f, y]);
    return (0, l.jsx)(o.Provider, { value: g, children: t });
}
