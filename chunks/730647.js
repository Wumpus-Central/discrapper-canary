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
        f = (0, r.e7)([s.Z], () => s.Z.isConnected()),
        C = (0, r.e7)([o.Z], () => (null != t ? o.Z.getSubscriptionGroupListingsForGuildFetchState(t) : o.M.FETCHED)),
        p = l.useRef(u),
        v = l.useCallback(() => {
            if (null == t || !f || !0 === g) return;
            let e = o.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (p.current || e === o.M.NOT_FETCHED) &&
                ((p.current = !1),
                a.FP(t, {
                    includeSoftDeleted: c,
                    countryCode: h
                }));
        }, [f, t, c, h, g]),
        E = l.useMemo(() => C === o.M.FETCHED && !0 !== p.current, [C, p]);
    return (0, i.jsx)(d.Provider, {
        value: {
            listingsLoaded: E,
            fetchGroupListingsForGuild: v
        },
        children: n
    });
}
