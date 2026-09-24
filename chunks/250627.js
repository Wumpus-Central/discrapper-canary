n.d(t, { BB: () => A, Qi: () => h, az: () => p, bb: () => m, fZ: () => g });
var i = n(582128),
    l = n(17928);
n(608461);
var s = n(597643),
    a = n(164956),
    r = n(576705),
    o = n(967198),
    d = n(912702),
    c = n(871109),
    u = n(652215);
let m = (e) => {
    let t = (0, l.bG)([c.A], () => (null != e ? c.A.getGuildProductsForGuildFetchState(e) : c.e.FETCHED), [e]),
        n = (0, l.bG)([s.A], () => s.A.isConnected()),
        [a, r] = i.useState(!0);
    return (
        i.useEffect(() => {
            (a && (t === c.e.NOT_FETCHED || (t === c.e.FETCHED && c.A.isGuildProductsCacheExpired(e))) && n && d.GI(e),
                r(!n));
        }, [e, n, t, a]),
        { listingsLoaded: t === c.e.FETCHED && !a }
    );
};
function h(e, t) {
    let { requireCurrentGuild: n } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
        a = (0, l.bG)([s.A], () => s.A.isConnected()),
        r = (0, l.bG)([o.A], () => o.A.getGuildId());
    return (
        i.useEffect(() => {
            let i = c.A.getGuildProductFetchState(t);
            if ((!n || r === e) && a && i === c.e.NOT_FETCHED)
                try {
                    d.py(e, t);
                } catch (e) {}
        }, [e, t, a, r, n]),
        (0, l.bG)([c.A], () => c.A.getGuildProduct(t))
    );
}
function g(e) {
    let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, l.bG)([c.A, a.A], () =>
        c.A.getGuildProductsForGuild(e, { publishedOnly: t ?? !a.A.isViewingServerShop(e) }),
    );
}
function p(e) {
    return (0, l.bG)([c.A], () => (null == e ? void 0 : c.A.getGuildProduct(e)));
}
function A(e) {
    return (0, l.bG)([r.A], () => null != e && r.A.can(u.xBc.ADMINISTRATOR, e));
}
