n.d(e, {
    SO: function () {
        return m;
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
    n(47120);
var i = n(192379),
    r = n(442837);
n(935369);
var l = n(38618),
    o = n(160404),
    u = n(496675),
    a = n(914010),
    s = n(495437),
    c = n(240864),
    d = n(981631);
let f = (t) => {
        let e = (0, r.e7)([c.Z], () => (null != t ? c.Z.getGuildProductsForGuildFetchState(t) : c.M.FETCHED), [t]),
            n = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, u] = i.useState(!0);
        return (
            i.useEffect(() => {
                o && (e === c.M.NOT_FETCHED || (e === c.M.FETCHED && c.Z.isGuildProductsCacheExpired(t))) && n && s.EB(t), u(!n);
            }, [t, n, e, o]),
            { listingsLoaded: e === c.M.FETCHED && !o }
        );
    },
    _ = function (t, e) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            u = (0, r.e7)([a.Z], () => a.Z.getGuildId());
        return (
            i.useEffect(() => {
                let i = c.Z.getGuildProductFetchState(e);
                if ((!n || u === t) && o && i === c.M.NOT_FETCHED)
                    try {
                        s.cf(t, e);
                    } catch (t) {}
            }, [t, e, o, u, n]),
            (0, r.e7)([c.Z], () => c.Z.getGuildProduct(e))
        );
    },
    E = function (t) {
        let { publishedOnly: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.e7)([c.Z, o.Z], () => c.Z.getGuildProductsForGuild(t, { publishedOnly: null != e ? e : !o.Z.isViewingServerShop(t) }));
    },
    p = (t) => (0, r.e7)([c.Z], () => (null == t ? void 0 : c.Z.getGuildProduct(t))),
    m = (t) => (0, r.e7)([u.Z], () => null != t && u.Z.can(d.Plq.ADMINISTRATOR, t));
