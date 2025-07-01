(n.d(t, {
    f: () => u,
    l: () => d
}),
    n(415506));
var r = n(255367),
    i = n(73800),
    l = n(399606),
    a = n(38618),
    o = n(423117),
    s = n(289393);
let c = i.createContext(void 0);
function u(e) {
    let t = i.useContext(c);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return (r(), n);
}
function d(e) {
    let { guildId: t, children: n, refetchOnMount: u, includeSoftDeleted: d, countryCode: p, dontFetchWhileTrue: m } = e,
        f = (0, l.e7)([a.Z], () => a.Z.isConnected()),
        g = (0, l.e7)([s.Z], () => (null != t ? s.Z.getSubscriptionGroupListingsForGuildFetchState(t) : s.M.FETCHED)),
        _ = i.useRef(u),
        h = i.useCallback(() => {
            if (null == t || !f || !0 === m) return;
            let e = s.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (_.current || e === s.M.NOT_FETCHED) &&
                ((_.current = !1),
                o.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: p
                }));
        }, [f, t, d, p, m]),
        b = i.useMemo(() => g === s.M.FETCHED && !0 !== _.current, [g, _]);
    return (0, r.jsx)(c.Provider, {
        value: {
            listingsLoaded: b,
            fetchGroupListingsForGuild: h
        },
        children: n
    });
}
