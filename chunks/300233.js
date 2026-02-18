n.d(t, { H: () => d, X: () => c });
var r = n(627968),
    l = n(64700),
    i = n(417597),
    a = n(142120),
    o = n(579908),
    s = n(636194);
let u = l.createContext(void 0);
function c(e) {
    let t = l.useContext(u);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return r(), n;
}
function d(e) {
    let {
            guildId: t,
            children: n,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: h,
            dontFetchWhileTrue: p,
        } = e,
        f = (0, i.bG)([a.A], () => a.A.isConnected()),
        m = (0, i.bG)([s.A], () => (null != t ? s.A.getSubscriptionGroupListingsForGuildFetchState(t) : s.e.FETCHED)),
        g = l.useRef(c),
        E = l.useCallback(() => {
            if (null == t || !f || !0 === p) return;
            let e = s.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (g.current || e === s.e.NOT_FETCHED) &&
                ((g.current = !1), o.WA(t, { includeSoftDeleted: d, countryCode: h }));
        }, [f, t, d, h, p]),
        _ = l.useMemo(() => m === s.e.FETCHED && !0 !== g.current, [m, g]);
    return (0, r.jsx)(u.Provider, { value: { listingsLoaded: _, fetchGroupListingsForGuild: E }, children: n });
}
