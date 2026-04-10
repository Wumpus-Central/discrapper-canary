n.d(t, { A: () => p });
var i = n(64700),
    l = n(311907),
    s = n(587895),
    a = n(429913),
    r = n(201718),
    o = n(339580),
    c = n(207803),
    d = n(633075),
    u = n(622543),
    h = n(576622),
    m = n(385113),
    A = n(369374),
    g = n(188951);
function p(e, t, n) {
    var p, f, _, E;
    let x,
        C,
        { enabled: S } = A.A.useConfig({ location: n ?? "use_user_application_widget_data" }),
        I = (function (e) {
            let { data: t, isLoading: n } = (0, c.FY)();
            return null == e ? [!1, null] : [n, t?.find((t) => t.applicationId === e) ?? null];
        })(S ? null : t),
        T =
            ((p = S ? t : null),
            (0, g.A)(null != p ? [p] : []),
            (0, l.yK)([m.A], () => {
                if (null == p) return [!1, null];
                let e = m.A.getConfig(p) ?? null,
                    t = m.A.getFetchState(p);
                return [t === m.e.NOT_FETCHED || t === m.e.FETCHING, e];
            }, [p])),
        [N, v] = S ? T : I,
        [y, b] =
            ((f = null != v ? t : null),
            (x = (0, a.h)(f)),
            [(0, l.bG)([s.A], () => null != f && s.A.isFetchingApplication(f), [f]), x ?? null]),
        [j, R] =
            ((_ = null != b ? e : null),
            (E = null != b ? t : null),
            (C = (0, l.bG)([o.A], () => null != _ && o.A.getFetchState(_) === o.e.NOT_FETCHED, [_])),
            i.useEffect(() => {
                C && null != _ && r.A.fetchUserApplicationIdentitiesWithProfiles(_);
            }, [C, _]),
            (0, l.yK)([o.A], () => {
                if (null == _ || null == E) return [!1, null];
                let e = o.A.getUserIdentityByApplication(_, E) ?? null;
                return [o.A.isFetchingUser(_) || o.A.getFetchState(_) === o.e.NOT_FETCHED, e];
            }, [_, E])),
        [M, O] = (function (e) {
            let [t, n] = (0, l.yK)(
                    [u.A],
                    () => (null != e ? [u.A.isFetchingProfile(e), u.A.getUserProfile(e) ?? null] : [!1, null]),
                    [e],
                ),
                s = null != e && !t && null == n;
            return (
                i.useEffect(() => {
                    s && null != e && (0, h.A)(e);
                }, [s, e]),
                [t || s, n]
            );
        })(null != R ? e : null),
        D = N || y || j || M;
    return i.useMemo(() => {
        let e = O?.widgets ?? [];
        return {
            isV2: S,
            isLoading: D,
            hasApplicationWidgetOnUserProfile:
                null != v &&
                null != b &&
                null != R &&
                e.some((e) => null != t && e instanceof d.R && e.applicationId === t),
            application: b,
            applicationWidgetConfig: v,
            userApplicationIdentity: R,
        };
    }, [b, t, v, R, D, S, O]);
}
