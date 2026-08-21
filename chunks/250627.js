n.d(t, { BB: () => A, Qi: () => h, az: () => p, bb: () => m, fZ: () => g });
var i = n(582128),
    l = n(17928);
n(608461);
var s = n(493560),
    a = n(164956),
    r = n(576705),
    o = n(967198),
    c = n(912702),
    d = n(871109),
    u = n(652215);
let m = (e) => {
    let t = (0, l.bG)([d.A], () => (null != e ? d.A.getGuildProductsForGuildFetchState(e) : d.e.FETCHED), [e]),
        n = (0, l.bG)([s.A], () => s.A.isConnected()),
        [a, r] = i.useState(!0);
    return (
        i.useEffect(() => {
            a && (t === d.e.NOT_FETCHED || (t === d.e.FETCHED && d.A.isGuildProductsCacheExpired(e))) && n && c.GI(e),
                r(!n);
        }, [e, n, t, a]),
        { listingsLoaded: t === d.e.FETCHED && !a }
    );
};
function h(e, t) {
    let { requireCurrentGuild: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
        a = (0, l.bG)([s.A], () => s.A.isConnected()),
        r = (0, l.bG)([o.A], () => o.A.getGuildId());
    return (
        i.useEffect(() => {
            let i = d.A.getGuildProductFetchState(t);
            if ((!n || r === e) && a && i === d.e.NOT_FETCHED)
                try {
                    c.py(e, t);
                } catch (e) {}
        }, [e, t, a, r, n]),
        (0, l.bG)([d.A], () => d.A.getGuildProduct(t))
    );
}
function g(e) {
    let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, l.bG)([d.A, a.A], () =>
        d.A.getGuildProductsForGuild(e, { publishedOnly: t ?? !a.A.isViewingServerShop(e) }),
    );
}
function p(e) {
    return (0, l.bG)([d.A], () => (null == e ? void 0 : d.A.getGuildProduct(e)));
}
function A(e) {
    return (0, l.bG)([r.A], () => null != e && r.A.can(u.xBc.ADMINISTRATOR, e));
}
