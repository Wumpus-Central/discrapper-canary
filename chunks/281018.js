var l = n(855986),
    i = n(311043),
    r = n(454908),
    a = n(287809),
    u = n(880405),
    d = n(201989),
    s = n(5399),
    o = n(277450);
let c = [],
    m = [];
function h(e, t) {
    return (0, d.R)(e, t) && (0, s.zu)(e);
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = null != e && !o.b.has(e),
                { data: n, isLoading: d, error: s } = (0, u.$M)(e, t),
                p = t && null != n ? n : c;
            (0, r.x)(p);
            let _ = (0, l.bG)(
                    [i.A],
                    () => p.some((e) => null == i.A.getGame(e) && !i.A.hasNoData(e) && !i.A.didFetchingFail(e)),
                    [p],
                ),
                f = (0, l.yK)(
                    [i.A, a.default],
                    () => {
                        let e = a.default.getCurrentUser()?.nsfwAllowed;
                        return p
                            .map((e) => i.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => h(t, e));
                    },
                    [p],
                );
            return t
                ? { isFetching: (null == s && null == n) || d || _, similarGames: f }
                : { isFetching: !1, similarGames: m };
        },
        n: h,
    },
);
