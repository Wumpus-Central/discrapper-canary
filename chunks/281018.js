var l = n(855986),
    i = n(311043),
    r = n(454908),
    a = n(287809),
    u = n(880405),
    d = n(5399),
    s = n(49491),
    o = n(611656),
    c = n(277450);
let m = [],
    h = [];
function p(e, t) {
    return (0, o.T_)(e) && !(0, s.b)(e, t) && (0, d.zu)(e);
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = null != e && !c.b.has(e),
                { data: n, isLoading: d, error: s } = (0, u.$M)(e, t),
                o = t && null != n ? n : m;
            (0, r.x)(o);
            let _ = (0, l.bG)(
                    [i.A],
                    () => o.some((e) => null == i.A.getGame(e) && !i.A.hasNoData(e) && !i.A.didFetchingFail(e)),
                    [o],
                ),
                f = (0, l.yK)(
                    [i.A, a.default],
                    () => {
                        let e = a.default.getCurrentUser()?.nsfwAllowed;
                        return o
                            .map((e) => i.A.getGame(e))
                            .filter((e) => null != e)
                            .filter((t) => p(t, e));
                    },
                    [o],
                );
            return t
                ? { isFetching: (null == s && null == n) || d || _, similarGames: f }
                : { isFetching: !1, similarGames: h };
        },
        n: p,
    },
);
