n.d(t, { A: () => g });
var l = n(64700),
    i = n(17928),
    s = n(587895),
    r = n(429913),
    a = n(201718),
    o = n(339580),
    u = n(633075),
    c = n(321191),
    d = n(903209),
    m = n(385113),
    p = n(352003);
function g(e, t) {
    var n, g, h;
    let f,
        A,
        [x, E] =
            ((0, p.A)(null != t ? [t] : []),
            (0, i.yK)([m.A], () => {
                if (null == t) return [!1, null];
                let e = m.A.getConfig(t) ?? null,
                    n = m.A.getFetchState(t);
                return [(n === m.e.NOT_FETCHED || n === m.e.FETCHING) && null == e, e];
            }, [t])),
        [v, C] =
            ((n = null != E ? t : null),
            (f = (0, r.h)(n)),
            [(0, i.bG)([s.A], () => null != n && s.A.isFetchingApplication(n), [n]) && null == f, f ?? null]),
        I = null != E && null != C,
        [j, S] =
            ((g = I ? e : null),
            (h = I ? t : null),
            (A = (0, i.bG)([o.A], () => null != g && o.A.getFetchState(g) === o.e.NOT_FETCHED, [g])),
            l.useEffect(() => {
                A && null != g && a.A.fetchUserApplicationIdentitiesWithProfiles(g);
            }, [A, g]),
            (0, i.yK)([o.A], () => {
                if (null == g || null == h) return [!1, null];
                let e = o.A.getUserIdentityByApplication(g, h) ?? null;
                return [(o.A.isFetchingUser(g) || o.A.getFetchState(g) === o.e.NOT_FETCHED) && null == e, e];
            }, [g, h])),
        [_, N] = (function (e) {
            let [t, n] = (0, i.yK)(
                    [c.A],
                    () => (null != e ? [c.A.isFetchingProfile(e), c.A.getUserProfile(e) ?? null] : [!1, null]),
                    [e],
                ),
                s = null != e && !t && null == n;
            return (
                l.useEffect(() => {
                    s && null != e && (0, d.A)(e);
                }, [s, e]),
                [(t || s) && null == n, n]
            );
        })(I ? e : null),
        b = x || v || j || _;
    return l.useMemo(
        () => ({
            isLoading: b,
            application: C,
            applicationWidgetConfig: E,
            userApplicationIdentity: S,
            profileApplicationWidget:
                N?.widgets?.find((e) => null != t && e instanceof u.R && e.applicationId === t) ?? null,
        }),
        [C, t, E, S, b, N],
    );
}
