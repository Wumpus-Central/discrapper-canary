n.d(t, {
    SO: () => O,
    eD: () => p,
    hO: () => f,
    r: () => _,
    ue: () => E
}),
    n(47120);
var r = n(192379),
    i = n(442837);
n(935369);
var l = n(38618),
    o = n(160404),
    a = n(496675),
    u = n(914010),
    s = n(495437),
    c = n(240864),
    d = n(981631);
let p = (e) => {
        let t = (0, i.e7)([c.Z], () => (null != e ? c.Z.getGuildProductsForGuildFetchState(e) : c.M.FETCHED), [e]),
            n = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            [o, a] = r.useState(!0);
        return (
            r.useEffect(() => {
                o && (t === c.M.NOT_FETCHED || (t === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(e))) && n && s.EB(e), a(!n);
            }, [e, n, t, o]),
            { listingsLoaded: t === c.M.FETCHED && !o }
        );
    },
    f = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            o = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            a = (0, i.e7)([u.Z], () => u.Z.getGuildId());
        return (
            r.useEffect(() => {
                let r = c.Z.getGuildProductFetchState(t);
                if ((!n || a === e) && o && r === c.M.NOT_FETCHED)
                    try {
                        s.cf(e, t);
                    } catch (e) {}
            }, [e, t, o, a, n]),
            (0, i.e7)([c.Z], () => c.Z.getGuildProduct(t))
        );
    },
    E = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.e7)([c.Z, o.Z], () => c.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e) }));
    },
    _ = (e) => (0, i.e7)([c.Z], () => (null == e ? void 0 : c.Z.getGuildProduct(e))),
    O = (e) => (0, i.e7)([a.Z], () => null != e && a.Z.can(d.Plq.ADMINISTRATOR, e));
