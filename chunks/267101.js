n.d(t, {
    SO: () => C,
    eD: () => h,
    hO: () => g,
    r: () => p,
    ue: () => f
}),
    n(47120);
var i = n(192379),
    l = n(442837);
n(935369);
var r = n(38618),
    s = n(160404),
    a = n(496675),
    o = n(914010),
    d = n(495437),
    u = n(240864),
    c = n(981631);
let h = (e) => {
        let t = (0, l.e7)([u.Z], () => (null != e ? u.Z.getGuildProductsForGuildFetchState(e) : u.M.FETCHED), [e]),
            n = (0, l.e7)([r.Z], () => r.Z.isConnected()),
            [s, a] = i.useState(!0);
        return (
            i.useEffect(() => {
                s && (t === u.M.NOT_FETCHED || (t === u.M.FETCHED && u.Z.isGuildProductsCacheExpired(e))) && n && d.EB(e), a(!n);
            }, [e, n, t, s]),
            { listingsLoaded: t === u.M.FETCHED && !s }
        );
    },
    g = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            s = (0, l.e7)([r.Z], () => r.Z.isConnected()),
            a = (0, l.e7)([o.Z], () => o.Z.getGuildId());
        return (
            i.useEffect(() => {
                let i = u.Z.getGuildProductFetchState(t);
                if ((!n || a === e) && s && i === u.M.NOT_FETCHED)
                    try {
                        d.cf(e, t);
                    } catch (e) {}
            }, [e, t, s, a, n]),
            (0, l.e7)([u.Z], () => u.Z.getGuildProduct(t))
        );
    },
    f = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.e7)([u.Z, s.Z], () => u.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !s.Z.isViewingServerShop(e) }));
    },
    p = (e) => (0, l.e7)([u.Z], () => (null == e ? void 0 : u.Z.getGuildProduct(e))),
    C = (e) => (0, l.e7)([a.Z], () => null != e && a.Z.can(c.Plq.ADMINISTRATOR, e));
