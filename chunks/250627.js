n.d(t, { BB: () => g, Qi: () => _, az: () => p, bb: () => m, fZ: () => h });
var i = n(64700),
    l = n(311907);
n(608461);
var a = n(142120),
    s = n(164956),
    r = n(576705),
    o = n(967198),
    d = n(912702),
    c = n(871109),
    u = n(652215);
let m = (e) => {
        let t = (0, l.bG)([c.A], () => (null != e ? c.A.getGuildProductsForGuildFetchState(e) : c.e.FETCHED), [e]),
            n = (0, l.bG)([a.A], () => a.A.isConnected()),
            [s, r] = i.useState(!0);
        return (
            i.useEffect(() => {
                s &&
                    (t === c.e.NOT_FETCHED || (t === c.e.FETCHED && c.A.isGuildProductsCacheExpired(e))) &&
                    n &&
                    d.GI(e),
                    r(!n);
            }, [e, n, t, s]),
            { listingsLoaded: t === c.e.FETCHED && !s }
        );
    },
    _ = function (e, t) {
        let { requireCurrentGuild: n } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            s = (0, l.bG)([a.A], () => a.A.isConnected()),
            r = (0, l.bG)([o.A], () => o.A.getGuildId());
        return (
            i.useEffect(() => {
                let i = c.A.getGuildProductFetchState(t);
                if ((!n || r === e) && s && i === c.e.NOT_FETCHED)
                    try {
                        d.py(e, t);
                    } catch (e) {}
            }, [e, t, s, r, n]),
            (0, l.bG)([c.A], () => c.A.getGuildProduct(t))
        );
    },
    h = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.bG)([c.A, s.A], () =>
            c.A.getGuildProductsForGuild(e, { publishedOnly: t ?? !s.A.isViewingServerShop(e) }),
        );
    },
    p = (e) => (0, l.bG)([c.A], () => (null == e ? void 0 : c.A.getGuildProduct(e))),
    g = (e) => (0, l.bG)([r.A], () => null != e && r.A.can(u.xBc.ADMINISTRATOR, e));
