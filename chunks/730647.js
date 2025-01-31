n.d(t, {
    f: () => u,
    l: () => c
}),
    n(411104);
var i = n(200651),
    l = n(192379),
    r = n(399606),
    s = n(38618),
    a = n(423117),
    o = n(289393);
let d = l.createContext(void 0);
function u(e) {
    let t = l.useContext(d);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: i } = t;
    return i(), n;
}
function c(e) {
    let { guildId: t, children: n, refetchOnMount: u, includeSoftDeleted: c, countryCode: h, dontFetchWhileTrue: g } = e,
        C = (0, r.e7)([s.Z], () => s.Z.isConnected()),
        f = (0, r.e7)([o.Z], () => (null != t ? o.Z.getSubscriptionGroupListingsForGuildFetchState(t) : o.M.FETCHED)),
        p = l.useRef(u),
        E = l.useCallback(() => {
            if (null == t || !C || !0 === g) return;
            let e = o.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (p.current || e === o.M.NOT_FETCHED) &&
                ((p.current = !1),
                a.FP(t, {
                    includeSoftDeleted: c,
                    countryCode: h
                }));
        }, [C, t, c, h, g]),
        v = l.useMemo(() => f === o.M.FETCHED && !0 !== p.current, [f, p]);
    return (0, i.jsx)(d.Provider, {
        value: {
            listingsLoaded: v,
            fetchGroupListingsForGuild: E
        },
        children: n
    });
}
