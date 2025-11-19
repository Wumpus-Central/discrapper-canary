n.d(t, {
    SO: () => m,
    eD: () => f,
    hO: () => _,
    r: () => h,
    ue: () => p,
}),
    n(388685);
var r = n(473749),
    i = n(442837);
n(935369);
var a = n(38618),
    o = n(160404),
    s = n(496675),
    l = n(914010),
    c = n(495437),
    u = n(240864),
    d = n(981631);
let f = (e) => {
        let t = (0, i.e7)([u.Z], () => (null != e ? u.Z.getGuildProductsForGuildFetchState(e) : u.M.FETCHED), [e]),
            n = (0, i.e7)([a.Z], () => a.Z.isConnected()),
            [o, s] = r.useState(!0);
        return (
            r.useEffect(() => {
                o &&
                    (t === u.M.NOT_FETCHED || (t === u.M.FETCHED && u.Z.isGuildProductsCacheExpired(e))) &&
                    n &&
                    c.EB(e),
                    s(!n);
            }, [e, n, t, o]),
            { listingsLoaded: t === u.M.FETCHED && !o }
        );
    },
    _ = function (e, t) {
        let { requireCurrentGuild: n } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            o = (0, i.e7)([a.Z], () => a.Z.isConnected()),
            s = (0, i.e7)([l.Z], () => l.Z.getGuildId());
        return (
            r.useEffect(() => {
                let r = u.Z.getGuildProductFetchState(t);
                if ((!n || s === e) && o && r === u.M.NOT_FETCHED)
                    try {
                        c.cf(e, t);
                    } catch (e) {}
            }, [e, t, o, s, n]),
            (0, i.e7)([u.Z], () => u.Z.getGuildProduct(t))
        );
    },
    p = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.e7)([u.Z, o.Z], () =>
            u.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e) }),
        );
    },
    h = (e) => (0, i.e7)([u.Z], () => (null == e ? void 0 : u.Z.getGuildProduct(e))),
    m = (e) => (0, i.e7)([s.Z], () => null != e && s.Z.can(d.Plq.ADMINISTRATOR, e));
