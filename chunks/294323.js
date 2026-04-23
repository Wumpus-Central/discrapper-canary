n.d(t, { A: () => g });
var i = n(64700),
    l = n(311907),
    a = n(587895),
    r = n(429913),
    s = n(201718),
    o = n(339580),
    d = n(207803),
    c = n(633075),
    u = n(622543),
    _ = n(576622),
    f = n(385113),
    m = n(369374),
    p = n(188951);
function g(e, t, n) {
    var g, h, A, x;
    let v,
        I,
        { enabled: E } = m.A.useConfig({ location: n ?? "use_user_application_widget_data" }),
        C = (function (e) {
            let { data: t, isLoading: n } = (0, d.FY)();
            return null == e ? [!1, null] : [n, t?.find((t) => t.applicationId === e) ?? null];
        })(E ? null : t),
        j =
            ((g = E ? t : null),
            (0, p.A)(null != g ? [g] : []),
            (0, l.yK)([f.A], () => {
                if (null == g) return [!1, null];
                let e = f.A.getConfig(g) ?? null,
                    t = f.A.getFetchState(g);
                return [(t === f.e.NOT_FETCHED || t === f.e.FETCHING) && null == e, e];
            }, [g])),
        [N, y] = E ? j : C,
        [b, S] =
            ((h = null != y ? t : null),
            (v = (0, r.h)(h)),
            [(0, l.bG)([a.A], () => null != h && a.A.isFetchingApplication(h), [h]) && null == v, v ?? null]),
        w = null != y && null != S,
        [T, k] =
            ((A = w ? e : null),
            (x = w ? t : null),
            (I = (0, l.bG)([o.A], () => null != A && o.A.getFetchState(A) === o.e.NOT_FETCHED, [A])),
            i.useEffect(() => {
                I && null != A && s.A.fetchUserApplicationIdentitiesWithProfiles(A);
            }, [I, A]),
            (0, l.yK)([o.A], () => {
                if (null == A || null == x) return [!1, null];
                let e = o.A.getUserIdentityByApplication(A, x) ?? null;
                return [(o.A.isFetchingUser(A) || o.A.getFetchState(A) === o.e.NOT_FETCHED) && null == e, e];
            }, [A, x])),
        [R, L] = (function (e) {
            let [t, n] = (0, l.yK)(
                    [u.A],
                    () => (null != e ? [u.A.isFetchingProfile(e), u.A.getUserProfile(e) ?? null] : [!1, null]),
                    [e],
                ),
                a = null != e && !t && null == n;
            return (
                i.useEffect(() => {
                    a && null != e && (0, _.A)(e);
                }, [a, e]),
                [(t || a) && null == n, n]
            );
        })(w ? e : null),
        D = N || b || T || R;
    return i.useMemo(
        () => ({
            isV2: E,
            isLoading: D,
            application: S,
            applicationWidgetConfig: y,
            userApplicationIdentity: k,
            profileApplicationWidget:
                L?.widgets?.find((e) => null != t && e instanceof c.R && e.applicationId === t) ?? null,
        }),
        [S, t, y, k, D, E, L],
    );
}
