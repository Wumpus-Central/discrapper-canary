n.d(e, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    l = n(399606),
    o = n(38618),
    u = n(423117),
    a = n(289393);
let s = r.createContext(void 0);
function c(t) {
    let e = r.useContext(s);
    if (null == e) throw Error(''.concat(null != t ? t : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: n, fetchGroupListingsForGuild: i } = e;
    return i(), n;
}
function d(t) {
    let { guildId: e, children: n, refetchOnMount: c, includeSoftDeleted: d, countryCode: f, dontFetchWhileTrue: _ } = t,
        E = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        p = (0, l.e7)([a.Z], () => (null != e ? a.Z.getSubscriptionGroupListingsForGuildFetchState(e) : a.M.FETCHED)),
        m = r.useRef(c),
        g = r.useCallback(() => {
            if (null == e || !E || !0 === _) return;
            let t = a.Z.getSubscriptionGroupListingsForGuildFetchState(e);
            (m.current || t === a.M.NOT_FETCHED) &&
                ((m.current = !1),
                u.FP(e, {
                    includeSoftDeleted: d,
                    countryCode: f
                }));
        }, [E, e, d, f, _]),
        I = r.useMemo(() => p === a.M.FETCHED && !0 !== m.current, [p, m]);
    return (0, i.jsx)(s.Provider, {
        value: {
            listingsLoaded: I,
            fetchGroupListingsForGuild: g
        },
        children: n
    });
}
