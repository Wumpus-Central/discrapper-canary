n.d(t, {
    f: () => d,
    l: () => f,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(399606),
    o = n(38618),
    s = n(423117),
    l = n(289393);
let c = i.createContext(void 0);
function u(e, t) {
    return i.useMemo(() => e === l.M.FETCHED && !0 !== t.current, [e, t]);
}
function d(e) {
    let t = i.useContext(c);
    if (null == t)
        throw Error(
            "".concat(
                null != e ? e : "useGroupListingsFetchContext",
                " must be used within a GroupListingsFetchContextProvider",
            ),
        );
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return r(), n;
}
function f(e) {
    let {
            guildId: t,
            children: n,
            refetchOnMount: d,
            includeSoftDeleted: f,
            countryCode: _,
            dontFetchWhileTrue: p,
        } = e,
        h = (0, a.e7)([o.Z], () => o.Z.isConnected()),
        m = (0, a.e7)([l.Z], () => (null != t ? l.Z.getSubscriptionGroupListingsForGuildFetchState(t) : l.M.FETCHED)),
        g = i.useRef(d),
        E = i.useCallback(() => {
            if (null == t || !h || !0 === p) return;
            let e = l.Z.getSubscriptionGroupListingsForGuildFetchState(t);
            (g.current || e === l.M.NOT_FETCHED) &&
                ((g.current = !1),
                s.FP(t, {
                    includeSoftDeleted: f,
                    countryCode: _,
                }));
        }, [h, t, f, _, p]),
        b = u(m, g);
    return (0, r.jsx)(c.Provider, {
        value: {
            listingsLoaded: b,
            fetchGroupListingsForGuild: E,
        },
        children: n,
    });
}
