e.d(n, {
    SO: function () {
        return g;
    },
    eD: function () {
        return f;
    },
    hO: function () {
        return _;
    },
    r: function () {
        return p;
    },
    ue: function () {
        return E;
    }
}),
    e(47120);
var i = e(192379),
    r = e(442837);
e(935369);
var l = e(38618),
    u = e(160404),
    o = e(496675),
    a = e(914010),
    s = e(495437),
    c = e(240864),
    d = e(981631);
let f = (t) => {
        let n = (0, r.e7)([c.Z], () => (null != t ? c.Z.getGuildProductsForGuildFetchState(t) : c.M.FETCHED), [t]),
            e = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [u, o] = i.useState(!0);
        return (
            i.useEffect(() => {
                u && (n === c.M.NOT_FETCHED || (n === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(t))) && e && s.EB(t), o(!e);
            }, [t, e, n, u]),
            { listingsLoaded: n === c.M.FETCHED && !u }
        );
    },
    _ = function (t, n) {
        let { requireCurrentGuild: e } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            u = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            o = (0, r.e7)([a.Z], () => a.Z.getGuildId());
        return (
            i.useEffect(() => {
                let i = c.Z.getGuildProductFetchState(n);
                if ((!e || o === t) && u && i === c.M.NOT_FETCHED)
                    try {
                        s.cf(t, n);
                    } catch (t) {}
            }, [t, n, u, o, e]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(n))
        );
    },
    E = function (t) {
        let { publishedOnly: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.e7)([c.Z, u.Z], () => c.Z.getGuildProductsForGuild(t, { publishedOnly: null != n ? n : !u.Z.isViewingServerShop(t) }));
    },
    p = (t) => (0, r.e7)([c.Z], () => (null == t ? void 0 : c.Z.getGuildProduct(t))),
    g = (t) => (0, r.e7)([o.Z], () => null != t && o.Z.can(d.Plq.ADMINISTRATOR, t));
