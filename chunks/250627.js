n.d(t, { BB: () => A, Qi: () => h, az: () => p, bb: () => m, fZ: () => g });
var i = n(64700),
    l = n(17928);
n(608461);
var s = n(617710),
    r = n(164956),
    a = n(576705),
    o = n(967198),
    d = n(912702),
    c = n(871109),
    u = n(652215);
let m = (e) => {
        let t = (0, l.bG)([c.A], () => (null != e ? c.A.getGuildProductsForGuildFetchState(e) : c.e.FETCHED), [e]),
            n = (0, l.bG)([s.A], () => s.A.isConnected()),
            [r, a] = i.useState(!0);
        return (
            i.useEffect(() => {
                r &&
                    (t === c.e.NOT_FETCHED || (t === c.e.FETCHED && c.A.isGuildProductsCacheExpired(e))) &&
                    n &&
                    d.GI(e),
                    a(!n);
            }, [e, n, t, r]),
            { listingsLoaded: t === c.e.FETCHED && !r }
        );
    },
    h = function (e, t) {
        let { requireCurrentGuild: n } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            r = (0, l.bG)([s.A], () => s.A.isConnected()),
            a = (0, l.bG)([o.A], () => o.A.getGuildId());
        return (
            i.useEffect(() => {
                let i = c.A.getGuildProductFetchState(t);
                if ((!n || a === e) && r && i === c.e.NOT_FETCHED)
                    try {
                        d.py(e, t);
                    } catch (e) {}
            }, [e, t, r, a, n]),
            (0, l.bG)([c.A], () => c.A.getGuildProduct(t))
        );
    },
    g = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.bG)([c.A, r.A], () =>
            c.A.getGuildProductsForGuild(e, { publishedOnly: t ?? !r.A.isViewingServerShop(e) }),
        );
    },
    p = (e) => (0, l.bG)([c.A], () => (null == e ? void 0 : c.A.getGuildProduct(e))),
    A = (e) => (0, l.bG)([a.A], () => null != e && a.A.can(u.xBc.ADMINISTRATOR, e));
