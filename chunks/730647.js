n.d(t, {
    f: () => s,
    l: () => d
}),
    n(415506);
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(38618),
    a = n(423117),
    u = n(289393);
let c = i.createContext(void 0);
function s(e) {
    let t = i.useContext(c);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return r(), n;
}
function d(e) {
    let { guildId: t, children: n, refetchOnMount: s, includeSoftDeleted: d, countryCode: p, dontFetchWhileTrue: f } = e,
        E = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        O = (0, l.e7)([u.Z], () => (null != t ? u.Z.getSubscriptionGroupListingsForGuildFetchState(t) : u.M.FETCHED)),
        _ = i.useRef(s),
        S = i.useCallback(() => {
            if (null == t || !E || !0 === f) return;
            let e = u.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (_.current || e === u.M.NOT_FETCHED) &&
                ((_.current = !1),
                a.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: p
                }));
        }, [E, t, d, p, f]),
        g = i.useMemo(() => O === u.M.FETCHED && !0 !== _.current, [O, _]);
    return (0, r.jsx)(c.Provider, {
        value: {
            listingsLoaded: g,
            fetchGroupListingsForGuild: S
        },
        children: n
    });
}
