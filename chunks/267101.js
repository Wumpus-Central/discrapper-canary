(n.d(t, {
    SO: () => h,
    eD: () => p,
    hO: () => m,
    r: () => g,
    ue: () => f
}),
    n(388685));
var r = n(73800),
    i = n(442837);
n(935369);
var l = n(38618),
    a = n(160404),
    o = n(496675),
    s = n(914010),
    c = n(495437),
    u = n(240864),
    d = n(981631);
let p = (e) => {
        let t = (0, i.e7)([u.Z], () => (null != e ? u.Z.getGuildProductsForGuildFetchState(e) : u.M.FETCHED), [e]),
            n = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            [a, o] = r.useState(!0);
        return (
            r.useEffect(() => {
                (a && (t === u.M.NOT_FETCHED || (t === u.M.FETCHED && u.Z.isGuildProductsCacheExpired(e))) && n && c.EB(e), o(!n));
            }, [e, n, t, a]),
            { listingsLoaded: t === u.M.FETCHED && !a }
        );
    },
    m = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            a = (0, i.e7)([l.Z], () => l.Z.isConnected()),
            o = (0, i.e7)([s.Z], () => s.Z.getGuildId());
        return (
            r.useEffect(() => {
                let r = u.Z.getGuildProductFetchState(t);
                if ((!n || o === e) && a && r === u.M.NOT_FETCHED)
                    try {
                        c.cf(e, t);
                    } catch (e) {}
            }, [e, t, a, o, n]),
            (0, i.e7)([u.Z], () => u.Z.getGuildProduct(t))
        );
    },
    f = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.e7)([u.Z, a.Z], () => u.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !a.Z.isViewingServerShop(e) }));
    },
    g = (e) => (0, i.e7)([u.Z], () => (null == e ? void 0 : u.Z.getGuildProduct(e))),
    h = (e) => (0, i.e7)([o.Z], () => null != e && o.Z.can(d.Plq.ADMINISTRATOR, e));
