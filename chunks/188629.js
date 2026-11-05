n.d(t, { A: () => _, n: () => p });
var l = n(855986),
    i = n(311043),
    r = n(454908),
    a = n(287809),
    u = n(880405),
    d = n(49491),
    s = n(611656),
    o = n(5399),
    c = n(277450);
let m = [],
    h = [];
function p(e, t) {
    return null != e && (0, s.T_)(e) && !(0, d.b)(e, t) && (0, o.zu)(e);
}
function _(e) {
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
}
