n.d(t, {
    f: function () {
        return d;
    },
    l: function () {
        return c;
    }
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
    var t, n;
    let { guildId: d, children: c, refetchOnMount: h, includeSoftDeleted: f, countryCode: g, dontFetchWhileTrue: C } = e,
        p = (0, l.e7)([o.Z], () => o.Z.isConnected()),
        E = (0, l.e7)([a.Z], () => (null != d ? a.Z.getSubscriptionGroupListingsForGuildFetchState(d) : a.M.FETCHED)),
        _ = r.useRef(h),
        I = r.useCallback(() => {
            if (null == d || !p || !0 === C) return;
            let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(d);
            (_.current || e === a.M.NOT_FETCHED) &&
                ((_.current = !1),
                s.FP(d, {
                    includeSoftDeleted: f,
                    countryCode: g
                }));
        }, [p, d, f, g, C]);
    let S = ((t = E), (n = _), r.useMemo(() => t === a.M.FETCHED && !0 !== n.current, [t, n]));
    return (0, i.jsx)(u.Provider, {
        value: {
            listingsLoaded: S,
            fetchGroupListingsForGuild: I
        },
        children: c
    });
}
