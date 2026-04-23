n.d(t, { A: () => f });
var i = n(64700),
    a = n(17928),
    r = n(587895),
    l = n(429913),
    s = n(201718),
    o = n(339580),
    d = n(207803),
    c = n(633075),
    u = n(841595),
    h = n(576622),
    m = n(385113),
    p = n(369374),
    g = n(188951);
function f(e, t, n) {
    var f, _, x, A;
    let E,
        S,
        { enabled: I } = p.A.useConfig({ location: n ?? "use_user_application_widget_data" }),
        v = (function (e) {
            let { data: t, isLoading: n } = (0, d.FY)();
            return null == e ? [!1, null] : [n, t?.find((t) => t.applicationId === e) ?? null];
        })(I ? null : t),
        b =
            ((f = I ? t : null),
            (0, g.A)(null != f ? [f] : []),
            (0, a.yK)([m.A], () => {
                if (null == f) return [!1, null];
                let e = m.A.getConfig(f) ?? null,
                    t = m.A.getFetchState(f);
                return [(t === m.e.NOT_FETCHED || t === m.e.FETCHING) && null == e, e];
            }, [f])),
        [C, T] = I ? b : v,
        [y, j] =
            ((_ = null != T ? t : null),
            (E = (0, l.h)(_)),
            [(0, a.bG)([r.A], () => null != _ && r.A.isFetchingApplication(_), [_]) && null == E, E ?? null]),
        w = null != T && null != j,
        [N, R] =
            ((x = w ? e : null),
            (A = w ? t : null),
            (S = (0, a.bG)([o.A], () => null != x && o.A.getFetchState(x) === o.e.NOT_FETCHED, [x])),
            i.useEffect(() => {
                S && null != x && s.A.fetchUserApplicationIdentitiesWithProfiles(x);
            }, [S, x]),
            (0, a.yK)([o.A], () => {
                if (null == x || null == A) return [!1, null];
                let e = o.A.getUserIdentityByApplication(x, A) ?? null;
                return [(o.A.isFetchingUser(x) || o.A.getFetchState(x) === o.e.NOT_FETCHED) && null == e, e];
            }, [x, A])),
        [M, O] = (function (e) {
            let [t, n] = (0, a.yK)(
                    [u.A],
                    () => (null != e ? [u.A.isFetchingProfile(e), u.A.getUserProfile(e) ?? null] : [!1, null]),
                    [e],
                ),
                r = null != e && !t && null == n;
            return (
                i.useEffect(() => {
                    r && null != e && (0, h.A)(e);
                }, [r, e]),
                [(t || r) && null == n, n]
            );
        })(w ? e : null),
        k = C || y || N || M;
    return i.useMemo(
        () => ({
            isV2: I,
            isLoading: k,
            application: j,
            applicationWidgetConfig: T,
            userApplicationIdentity: R,
            profileApplicationWidget:
                O?.widgets?.find((e) => null != t && e instanceof c.R && e.applicationId === t) ?? null,
        }),
        [j, t, T, R, k, I, O],
    );
}
