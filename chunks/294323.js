n.d(t, { A: () => _ });
var i = n(64700),
    l = n(311907),
    a = n(587895),
    s = n(429913),
    r = n(201718),
    o = n(339580),
    c = n(207803),
    d = n(633075),
    u = n(622543),
    h = n(576622),
    m = n(385113),
    A = n(369374),
    g = n(188951);
function _(e, t, n) {
    var _, p, f, E;
    let C,
        x,
        { enabled: S } = A.A.useConfig({ location: n ?? "use_user_application_widget_data" }),
        I = (function (e) {
            let { data: t, isLoading: n } = (0, c.FY)();
            return null == e ? [!1, null] : [n, t?.find((t) => t.applicationId === e) ?? null];
        })(S ? null : t),
        T =
            ((_ = S ? t : null),
            (0, g.A)(null != _ ? [_] : []),
            (0, l.yK)([m.A], () => {
                if (null == _) return [!1, null];
                let e = m.A.getConfig(_) ?? null,
                    t = m.A.getFetchState(_);
                return [(t === m.e.NOT_FETCHED || t === m.e.FETCHING) && null == e, e];
            }, [_])),
        [v, N] = S ? T : I,
        [y, b] =
            ((p = null != N ? t : null),
            (C = (0, s.h)(p)),
            [(0, l.bG)([a.A], () => null != p && a.A.isFetchingApplication(p), [p]) && null == C, C ?? null]),
        j = null != N && null != b,
        [R, M] =
            ((f = j ? e : null),
            (E = j ? t : null),
            (x = (0, l.bG)([o.A], () => null != f && o.A.getFetchState(f) === o.e.NOT_FETCHED, [f])),
            i.useEffect(() => {
                x && null != f && r.A.fetchUserApplicationIdentitiesWithProfiles(f);
            }, [x, f]),
            (0, l.yK)([o.A], () => {
                if (null == f || null == E) return [!1, null];
                let e = o.A.getUserIdentityByApplication(f, E) ?? null;
                return [(o.A.isFetchingUser(f) || o.A.getFetchState(f) === o.e.NOT_FETCHED) && null == e, e];
            }, [f, E])),
        [L, O] = (function (e) {
            let [t, n] = (0, l.yK)(
                    [u.A],
                    () => (null != e ? [u.A.isFetchingProfile(e), u.A.getUserProfile(e) ?? null] : [!1, null]),
                    [e],
                ),
                a = null != e && !t && null == n;
            return (
                i.useEffect(() => {
                    a && null != e && (0, h.A)(e);
                }, [a, e]),
                [(t || a) && null == n, n]
            );
        })(j ? e : null),
        D = v || y || R || L;
    return i.useMemo(
        () => ({
            isV2: S,
            isLoading: D,
            application: b,
            applicationWidgetConfig: N,
            userApplicationIdentity: M,
            profileApplicationWidget:
                O?.widgets?.find((e) => null != t && e instanceof d.R && e.applicationId === t) ?? null,
        }),
        [b, t, N, M, D, S, O],
    );
}
