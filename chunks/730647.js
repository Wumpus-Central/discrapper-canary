n.d(t, {
    f: () => d,
    l: () => c
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(399606),
    o = n(38618),
    s = n(423117),
    a = n(289393);
let u = r.createContext(void 0);
function d(e) {
    let t = r.useContext(u);
    if (null == t) throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: i } = t;
    return i(), n;
}
function c(e) {
    let { guildId: t, children: n, refetchOnMount: d, includeSoftDeleted: c, countryCode: h, dontFetchWhileTrue: f } = e,
        p = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        g = (0, l.e7)([a.Z], () => (null != t ? a.Z.getSubscriptionGroupListingsForGuildFetchState(t) : a.M.FETCHED)),
        v = r.useRef(d),
        C = r.useCallback(() => {
            if (null == t || !p || !0 === f) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (v.current || e === a.M.NOT_FETCHED) &&
                ((v.current = !1),
                s.FP(t, {
                    includeSoftDeleted: c,
                    countryCode: h
                }));
        }, [p, t, c, h, f]),
        E = r.useMemo(() => g === a.M.FETCHED && !0 !== v.current, [g, v]);
    return (0, i.jsx)(u.Provider, {
        value: {
            listingsLoaded: E,
            fetchGroupListingsForGuild: C
        },
        children: n
    });
}
