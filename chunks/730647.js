n.d(t, {
    f: () => c,
    l: () => d
}),
    n(415506);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    o = n(38618),
    a = n(423117),
    u = n(289393);
let s = i.createContext(void 0);
function c(e) {
    let t = i.useContext(s);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return r(), n;
}
function d(e) {
    let { guildId: t, children: n, refetchOnMount: c, includeSoftDeleted: d, countryCode: p, dontFetchWhileTrue: f } = e,
        E = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        _ = (0, l.e7)([u.Z], () => (null != t ? u.Z.getSubscriptionGroupListingsForGuildFetchState(t) : u.M.FETCHED)),
        S = i.useRef(c),
        O = i.useCallback(() => {
            if (null == t || !E || !0 === f) return;
            let e = u.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (S.current || e === u.M.NOT_FETCHED) &&
                ((S.current = !1),
                a.FP(t, {
                    includeSoftDeleted: d,
                    countryCode: p
                }));
        }, [E, t, d, p, f]),
        I = i.useMemo(() => _ === u.M.FETCHED && !0 !== S.current, [_, S]);
    return (0, r.jsx)(s.Provider, {
        value: {
            listingsLoaded: I,
            fetchGroupListingsForGuild: O
        },
        children: n
    });
}
