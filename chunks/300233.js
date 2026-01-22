n.d(t, {
    H: () => f,
    X: () => d,
}),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(142120),
    o = n(579908),
    l = n(636194);
let c = i.createContext(void 0);

function u(e, t) {
    return i.useMemo(() => e === l.e.FETCHED && !0 !== t.current, [e, t]);
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
            countryCode: p,
            dontFetchWhileTrue: _,
        } = e,
        h = (0, a.bG)([s.A], () => s.A.isConnected()),
        m = (0, a.bG)([l.A], () => (null != t ? l.A.getSubscriptionGroupListingsForGuildFetchState(t) : l.e.FETCHED)),
        g = i.useRef(d),
        E = i.useCallback(() => {
            if (null == t || !h || !0 === _) return;
            let e = l.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (g.current || e === l.e.NOT_FETCHED) &&
                ((g.current = !1),
                o.WA(t, {
                    includeSoftDeleted: f,
                    countryCode: p,
                }));
        }, [h, t, f, p, _]),
        b = u(m, g);
    return (0, r.jsx)(c.Provider, {
        value: {
            listingsLoaded: b,
            fetchGroupListingsForGuild: E,
        },
        children: n,
    });
}
