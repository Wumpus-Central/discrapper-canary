n.d(t, { BB: () => g, Qi: () => m, az: () => p, bb: () => _, fZ: () => h });
var i = n(64700),
    l = n(17928);
n(608461);
var a = n(366853),
    r = n(164956),
    s = n(576705),
    o = n(967198),
    c = n(912702),
    d = n(871109),
    u = n(652215);
let _ = (e) => {
        let t = (0, l.bG)([d.A], () => (null != e ? d.A.getGuildProductsForGuildFetchState(e) : d.e.FETCHED), [e]),
            n = (0, l.bG)([a.A], () => a.A.isConnected()),
            [r, s] = i.useState(!0);
        return (
            i.useEffect(() => {
                r &&
                    (t === d.e.NOT_FETCHED || (t === d.e.FETCHED && d.A.isGuildProductsCacheExpired(e))) &&
                    n &&
                    c.GI(e),
                    s(!n);
            }, [e, n, t, r]),
            { listingsLoaded: t === d.e.FETCHED && !r }
        );
    },
    m = function (e, t) {
        let { requireCurrentGuild: n } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { requireCurrentGuild: !0 },
            r = (0, l.bG)([a.A], () => a.A.isConnected()),
            s = (0, l.bG)([o.A], () => o.A.getGuildId());
        return (
            i.useEffect(() => {
                let i = d.A.getGuildProductFetchState(t);
                if ((!n || s === e) && r && i === d.e.NOT_FETCHED)
                    try {
                        c.py(e, t);
                    } catch (e) {}
            }, [e, t, r, s, n]),
            (0, l.bG)([d.A], () => d.A.getGuildProduct(t))
        );
    },
    h = function (e) {
        let { publishedOnly: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.bG)([d.A, r.A], () =>
            d.A.getGuildProductsForGuild(e, { publishedOnly: t ?? !r.A.isViewingServerShop(e) }),
        );
    },
    p = (e) => (0, l.bG)([d.A], () => (null == e ? void 0 : d.A.getGuildProduct(e))),
    g = (e) => (0, l.bG)([s.A], () => null != e && s.A.can(u.xBc.ADMINISTRATOR, e));
