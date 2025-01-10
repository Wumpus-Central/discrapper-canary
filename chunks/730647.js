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
    var e, n;
    let { guildId: c, children: d, refetchOnMount: f, includeSoftDeleted: _, countryCode: E, dontFetchWhileTrue: p } = t,
        g = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        S = (0, l.e7)([a.Z], () => (null != c ? a.Z.getSubscriptionGroupListingsForGuildFetchState(c) : a.M.FETCHED)),
        m = r.useRef(f),
        I = r.useCallback(() => {
            if (null == c || !g || !0 === p) return;
            let t = a.Z.getSubscriptionGroupListingsForGuildFetchState(c);
            (m.current || t === a.M.NOT_FETCHED) &&
                ((m.current = !1),
                u.FP(c, {
                    includeSoftDeleted: _,
                    countryCode: E
                }));
        }, [g, c, _, E, p]);
    let h = ((e = S), (n = m), r.useMemo(() => e === a.M.FETCHED && !0 !== n.current, [e, n]));
    return (0, i.jsx)(s.Provider, {
        value: {
            listingsLoaded: h,
            fetchGroupListingsForGuild: I
        },
        children: d
    });
}
