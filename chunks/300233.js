i.d(t, { H: () => d, X: () => c });
var n = i(627968),
    l = i(64700),
    s = i(702841),
    r = i(617710),
    a = i(579908),
    u = i(636194);
let o = l.createContext(void 0);
function c(e) {
    let t = l.useContext(o);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: i, fetchGroupListingsForGuild: n } = t;
    return (
        l.useEffect(() => {
            n();
        }, [n]),
        i
    );
}
function d(e) {
    let {
            guildId: t,
            children: i,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: f,
            dontFetchWhileTrue: A,
        } = e,
        g = (0, s.bG)([r.A], () => r.A.isConnected()),
        h = (0, s.bG)([u.A], () => (null != t ? u.A.getSubscriptionGroupListingsForGuildFetchState(t) : u.e.FETCHED)),
        [p, b] = l.useState(!0 === c),
        m = l.useCallback(() => {
            if (null == t || !g || !0 === A) return;
            let e = u.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (p || e === u.e.NOT_FETCHED) && (b(!1), a.WA(t, { includeSoftDeleted: d, countryCode: f }));
        }, [g, t, d, f, A, p]),
        S = h === u.e.FETCHED && !p;
    return (0, n.jsx)(o.Provider, { value: { listingsLoaded: S, fetchGroupListingsForGuild: m }, children: i });
}
