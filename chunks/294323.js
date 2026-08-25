n.d(t, { A: () => g });
var l = n(582128),
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
    var n, g, f;
    let h,
        A,
        [x, v] =
            ((0, p.A)(null != t ? [t] : []),
            (0, i.yK)([m.A], () => {
                if (null == t) return [!1, null];
                let e = m.A.getConfig(t) ?? null,
                    n = m.A.getFetchState(t);
                return [(n === m.e.NOT_FETCHED || n === m.e.FETCHING) && null == e, e];
            }, [t])),
        [E, C] =
            ((n = null != v ? t : null),
            (h = (0, r.h)(n)),
            [(0, i.bG)([s.A], () => null != n && s.A.isFetchingApplication(n), [n]) && null == h, h ?? null]),
        I = null != v && null != C,
        [S, j] =
            ((g = I ? e : null),
            (f = I ? t : null),
            (A = (0, i.bG)([o.A], () => null != g && o.A.getFetchState(g) === o.e.NOT_FETCHED, [g])),
            l.useEffect(() => {
                A && null != g && a.A.fetchUserApplicationIdentitiesWithProfiles(g);
            }, [A, g]),
            (0, i.yK)([o.A], () => {
                if (null == g || null == f) return [!1, null];
                let e = o.A.getUserIdentityByApplication(g, f) ?? null;
                return [(o.A.isFetchingUser(g) || o.A.getFetchState(g) === o.e.NOT_FETCHED) && null == e, e];
            }, [g, f])),
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
        b = x || E || S || _;
    return l.useMemo(
        () => ({
            isLoading: b,
            application: C,
            applicationWidgetConfig: v,
            userApplicationIdentity: j,
            profileApplicationWidget: N?.widgets?.find((e) => (0, u.E)(e, t)) ?? null,
        }),
        [C, t, v, j, b, N],
    );
}
