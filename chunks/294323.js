e.d(n, { A: () => g });
var t = e(582128),
    u = e(17928),
    i = e(587895),
    r = e(429913),
    A = e(201718),
    c = e(339580),
    s = e(633075),
    p = e(321191),
    o = e(903209),
    a = e(385113),
    f = e(352003);
function g(l, n) {
    var e, g, h;
    let d,
        E,
        [F, C] =
            ((0, f.A)(null != n ? [n] : []),
            (0, u.yK)([a.A], () => {
                if (null == n) return [!1, null];
                let l = a.A.getConfig(n) ?? null,
                    e = a.A.getFetchState(n);
                return [(e === a.e.NOT_FETCHED || e === a.e.FETCHING) && null == l, l];
            }, [n])),
        [T, y] =
            ((e = null != C ? n : null),
            (d = (0, r.h)(e)),
            [(0, u.bG)([i.A], () => null != e && i.A.isFetchingApplication(e), [e]) && null == d, d ?? null]),
        _ = null != C && null != y,
        [b, k] =
            ((g = _ ? l : null),
            (h = _ ? n : null),
            (E = (0, u.bG)([c.A], () => null != g && c.A.getFetchState(g) === c.e.NOT_FETCHED, [g])),
            t.useEffect(() => {
                E && null != g && A.A.fetchUserApplicationIdentitiesWithProfiles(g);
            }, [E, g]),
            (0, u.yK)([c.A], () => {
                if (null == g || null == h) return [!1, null];
                let l = c.A.getUserIdentityByApplication(g, h) ?? null;
                return [(c.A.isFetchingUser(g) || c.A.getFetchState(g) === c.e.NOT_FETCHED) && null == l, l];
            }, [g, h])),
        [H, I] = (function (l) {
            let [n, e] = (0, u.yK)(
                    [p.A],
                    () => (null != l ? [p.A.isFetchingProfile(l), p.A.getUserProfile(l) ?? null] : [!1, null]),
                    [l],
                ),
                i = null != l && !n && null == e;
            return (
                t.useEffect(() => {
                    i && null != l && (0, o.A)(l);
                }, [i, l]),
                [(n || i) && null == e, e]
            );
        })(_ ? l : null),
        N = F || T || b || H;
    return t.useMemo(
        () => ({
            isLoading: N,
            application: y,
            applicationWidgetConfig: C,
            userApplicationIdentity: k,
            profileApplicationWidget: I?.widgets?.find((l) => (0, s.E)(l, n)) ?? null,
        }),
        [y, n, C, k, N, I],
    );
}
