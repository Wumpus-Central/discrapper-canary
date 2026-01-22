n.d(t, {
    BB: () => m,
    Qi: () => p,
    az: () => h,
    bb: () => f,
    fZ: () => _,
}),
    n(896048);
var r = n(64700),
    i = n(311907);
n(608461);
var a = n(142120),
    s = n(164956),
    o = n(576705),
    l = n(967198),
    c = n(912702),
    u = n(871109),
    d = n(652215);
let f = (e) => {
        let t = (0, i.bG)([u.A], () => (null != e ? u.A.getGuildProductsForGuildFetchState(e) : u.e.FETCHED), [e]),
            n = (0, i.bG)([a.A], () => a.A.isConnected()),
            [s, o] = r.useState(!0);
        return (
            r.useEffect(() => {
                s &&
                    (t === u.e.NOT_FETCHED || (t === u.e.FETCHED && u.A.isGuildProductsCacheExpired(e))) &&
                    n &&
                    c.GI(e),
                    o(!n);
            }, [e, n, t, s]),
            { listingsLoaded: t === u.e.FETCHED && !s }
        );
    },
    p = function (e, t) {
        let { requireCurrentGuild: n } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            s = (0, i.bG)([a.A], () => a.A.isConnected()),
            o = (0, i.bG)([l.A], () => l.A.getGuildId());
        return (
            r.useEffect(() => {
                let r = u.A.getGuildProductFetchState(t);
                if ((!n || o === e) && s && r === u.e.NOT_FETCHED)
                    try {
                        c.py(e, t);
                    } catch (e) {}
            }, [e, t, s, o, n]),
            (0, i.bG)([u.A], () => u.A.getGuildProduct(t))
        );
    },
    _ = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, i.bG)([u.A, s.A], () =>
            u.A.getGuildProductsForGuild(e, { publishedOnly: null != t ? t : !s.A.isViewingServerShop(e) }),
        );
    },
    h = (e) => (0, i.bG)([u.A], () => (null == e ? void 0 : u.A.getGuildProduct(e))),
    m = (e) => (0, i.bG)([o.A], () => null != e && o.A.can(d.xBc.ADMINISTRATOR, e));
