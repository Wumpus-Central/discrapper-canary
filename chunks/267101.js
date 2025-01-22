n.d(t, {
    SO: function () {
        return p;
    },
    eD: function () {
        return h;
    },
    hO: function () {
        return f;
    },
    r: function () {
        return C;
    },
    ue: function () {
        return g;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837);
n(935369);
var l = n(38618),
    o = n(160404),
    s = n(496675),
    a = n(914010),
    u = n(495437),
    d = n(240864),
    c = n(981631);
let h = (e) => {
        let t = (0, r.e7)([d.Z], () => (null != e ? d.Z.getGuildProductsForGuildFetchState(e) : d.M.FETCHED), [e]),
            n = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            [o, s] = i.useState(!0);
        return (
            i.useEffect(() => {
                o && (t === d.M.NOT_FETCHED || (t === d.M.FETCHED && d.Z.isGuildProductsCacheExpired(e))) && n && u.EB(e), s(!n);
            }, [e, n, t, o]),
            { listingsLoaded: t === d.M.FETCHED && !o }
        );
    },
    f = function (e, t) {
        let { requireCurrentGuild: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            o = (0, r.e7)([l.Z], () => l.Z.isConnected()),
            s = (0, r.e7)([a.Z], () => a.Z.getGuildId());
        return (
            i.useEffect(() => {
                let i = d.Z.getGuildProductFetchState(t);
                if ((!n || s === e) && o && i === d.M.NOT_FETCHED)
                    try {
                        u.cf(e, t);
                    } catch (e) {}
            }, [e, t, o, s, n]),
            (0, r.e7)([d.Z], () => d.Z.getGuildProduct(t))
        );
    },
    g = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.e7)([d.Z, o.Z], () => d.Z.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !o.Z.isViewingServerShop(e) }));
    },
    C = (e) => (0, r.e7)([d.Z], () => (null == e ? void 0 : d.Z.getGuildProduct(e))),
    p = (e) => (0, r.e7)([s.Z], () => null != e && s.Z.can(c.Plq.ADMINISTRATOR, e));
