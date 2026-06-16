"use strict";
n.d(t, { H: () => d, X: () => c });
var i = n(627968),
    r = n(64700),
    s = n(702841),
    a = n(617710),
    o = n(579908),
    l = n(636194);
let u = r.createContext(void 0);
function c(e) {
    let t = r.useContext(u);
    if (null == t)
        throw Error(`${e ?? "useGroupListingsFetchContext"} must be used within a GroupListingsFetchContextProvider`);
    let { listingsLoaded: n, fetchGroupListingsForGuild: i } = t;
    return (
        r.useEffect(() => {
            i();
        }, [i]),
        n
    );
}
function d(e) {
    let {
            guildId: t,
            children: n,
            refetchOnMount: c,
            includeSoftDeleted: d,
            countryCode: _,
            dontFetchWhileTrue: h,
        } = e,
        f = (0, s.bG)([a.A], () => a.A.isConnected()),
        p = (0, s.bG)([l.A], () => (null != t ? l.A.getSubscriptionGroupListingsForGuildFetchState(t) : l.e.FETCHED)),
        [E, m] = r.useState(!0 === c),
        g = r.useCallback(() => {
            if (null == t || !f || !0 === h) return;
            let e = l.A.getSubscriptionGroupListingsForGuildFetchState(t);
            (E || e === l.e.NOT_FETCHED) && (m(!1), o.WA(t, { includeSoftDeleted: d, countryCode: _ }));
        }, [f, t, d, _, h, E]),
        A = p === l.e.FETCHED && !E;
    return (0, i.jsx)(u.Provider, { value: { listingsLoaded: A, fetchGroupListingsForGuild: g }, children: n });
}
