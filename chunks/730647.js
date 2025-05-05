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
    let { guildId: t, children: n, refetchOnMount: s, includeSoftDeleted: d, countryCode: p, dontFetchWhileTrue: E } = e,
        f = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        _ = (0, l.e7)([u.Z], () => (null != t ? u.Z.getSubscriptionGroupListingsForGuildFetchState(t) : u.M.FETCHED)),
        S = i.useRef(s),
        O = i.useCallback(() => {
            if (null == t || !f || !0 === E) return;
            let e = u.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (S.current || e === u.M.NOT_FETCHED) &&
                ((S.current = !1),
                a.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: p
                }));
        }, [f, t, d, p, E]),
        I = i.useMemo(() => _ === u.M.FETCHED && !0 !== S.current, [_, S]);
    return (0, r.jsx)(c.Provider, {
        value: {
            listingsLoaded: I,
            fetchGroupListingsForGuild: O
        },
        children: n
    });
}
