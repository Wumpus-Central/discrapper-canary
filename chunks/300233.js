"use strict";
n.d(t, { H: () => _, X: () => d });
var r = n(627968),
    i = n(64700),
    a = n(417597),
    s = n(142120),
    o = n(579908),
    l = n(636194);
let u = i.createContext(void 0);
function c(e, t) {
    return i.useMemo(() => e === l.e.FETCHED && !0 !== t.current, [e, t]);
}
function d(e) {
    let t = i.useContext(u);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: n, fetchGroupListingsForGuild: r } = t;
    return r(), n;
}
function _(e) {
    let {
            guildId: t,
            children: n,
            refetchOnMount: d,
            includeSoftDeleted: _,
            countryCode: f,
            dontFetchWhileTrue: p,
        } = e,
        h = (0, a.bG)([s.A], () => s.A.isConnected()),
        m = (0, a.bG)([l.A], () => (null != t ? l.A.getSubscriptionGroupListingsForGuildFetchState(t) : l.e.FETCHED)),
        g = i.useRef(d),
        E = i.useCallback(() => {
            if (null == t || !h || !0 === p) return;
            let e = l.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (g.current || e === l.e.NOT_FETCHED) &&
                ((g.current = !1), o.WA(t, { includeSoftDeleted: _, countryCode: f }));
        }, [h, t, _, f, p]),
        A = c(m, g);
    return (0, r.jsx)(u.Provider, { value: { listingsLoaded: A, fetchGroupListingsForGuild: E }, children: n });
}
