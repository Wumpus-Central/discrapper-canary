n.d(t, {
    SO: () => S,
    eD: () => p,
    hO: () => E,
    r: () => _,
    ue: () => f
}),
    n(388685);
var r = n(73800),
    i = n(442837);
n(935369);
var l = n(38618),
    o = n(160404),
    a = n(496675),
    u = n(914010),
    c = n(495437),
    s = n(240864),
    d = n(981631);
let p = (e) => {
        let t = (0, i.e7)([s.Z], () => (null != e ? s.Z.getGuildProductsForGuildFetchState(e) : s.M.FETCHED), [e]),
            n = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            [o, a] = r.useState(!0);
        return (
            r.useEffect(() => {
                o && (t === s.M.NOT_FETCHED || (t === s.M.FETCHED && s.Z.isGuildProductsCacheExpired(e))) && n && c.EB(e), a(!n);
            }, [e, n, t, o]),
            { listingsLoaded: t === s.M.FETCHED && !o }
        );
    },
    E = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            o = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            a = (0, i.e7)([u.Z], () => u.Z.getGuildId());
        return (
            r.useEffect(() => {
                let r = s.Z.getGuildProductFetchState(t);
                if ((!n || a === e) && o && r === s.M.NOT_FETCHED)
                    try {
                        c.cf(e, t);
                    } catch (e) {}
            }, [e, t, o, a, n]),
            (0, i.e7)([s.Z], () => s.Z.getGuildProduct(t))
        );
    },
    f = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.e7)([s.Z, o.Z], () => s.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e) }));
    },
    _ = (e) => (0, i.e7)([s.Z], () => (null == e ? void 0 : s.Z.getGuildProduct(e))),
    S = (e) => (0, i.e7)([a.Z], () => null != e && a.Z.can(d.Plq.ADMINISTRATOR, e));
