e.d(n, {
    f: function () {
        return c;
    },
    l: function () {
        return d;
    }
}),
    e(411104);
var i = e(200651),
    r = e(192379),
    l = e(399606),
    u = e(38618),
    o = e(423117),
    a = e(289393);
let s = r.createContext(void 0);
function c(t) {
    let n = r.useContext(s);
    if (null == n) throw Error(''.concat(null != t ? t : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
    let { listingsLoaded: e, fetchGroupListingsForGuild: i } = n;
    return i(), e;
}
function d(t) {
    var n, e;
    let { guildId: c, children: d, refetchOnMount: f, includeSoftDeleted: _, countryCode: E, dontFetchWhileTrue: p } = t,
        g = (0, l.e7)([u.Z], () => u.Z.isConnected()),
        S = (0, l.e7)([a.Z], () => (null != c ? a.Z.getSubscriptionGroupListingsForGuildFetchState(c) : a.M.FETCHED)),
        m = r.useRef(f),
        C = r.useCallback(() => {
            if (null == c || !g || !0 === p) return;
            let t = a.Z.getSubscriptionGroupListingsForGuildFetchState(c);
            (m.current || t === a.M.NOT_FETCHED) &&
                ((m.current = !1),
                o.FP(c, {
                    includeSoftDeleted: _,
                    countryCode: E
                }));
        }, [g, c, _, E, p]);
    let I = ((n = S), (e = m), r.useMemo(() => n === a.M.FETCHED && !0 !== e.current, [n, e]));
    return (0, i.jsx)(s.Provider, {
        value: {
            listingsLoaded: I,
            fetchGroupListingsForGuild: C
        },
        children: d
    });
}
