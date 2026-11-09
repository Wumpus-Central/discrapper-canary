s(321073);
var n = s(582128),
    t = s(855986),
    r = s(52133),
    i = s(733391),
    u = s(435658),
    a = s(820847),
    c = s(802494),
    o = s(287809),
    d = s(67480);
function m(e, l) {
    return e.isFetching === l.isFetching && (0, r.v)(e.loadedSkuIds, l.loadedSkuIds);
}
function g(e, l) {
    let [s, g] = n.useState([]),
        h = e.length > 0 ? e.length : 4;
    n.useEffect(() => {
        for (let s of e) (0, i.Pp)(l, s);
    }, [e, l]);
    let { isFetching: p, loadedSkuIds: x } = (0, t.bG)(
            [d.A],
            () => {
                let l = [],
                    s = !1;
                for (let n of e) {
                    let e = d.A.get(n),
                        t = null == e && !d.A.didFetchingSkuFail(n);
                    ((s = d.A.isFetching(n) || t || s), null != e && l.push(n));
                }
                return { isFetching: s, loadedSkuIds: l };
            },
            [e],
            m,
        ),
        f = !p && x.length < h,
        k = o.default.getCurrentUser()?.id,
        I = n.useMemo(() => (f ? [l] : []), [f, l]),
        j = n.useMemo(() => (f && null != k ? [k] : []), [f, k]),
        { recommendations: v, status: y } = (0, c.XQ)({
            applicationIds: I,
            userIds: j,
            numItems: h,
            source: a.B.USER_PROFILE,
        }),
        C = n.useMemo(() => {
            if (p) return null;
            if (x.length >= h) return x;
            if ("loading" === y) return null;
            let l = new Set(e),
                s = v.map((e) => e.id).filter((e) => !l.has(e));
            return [...x, ...s].slice(0, h);
        }, [e, p, x, v, y, h]),
        _ = null != C && (0, r.v)(s, C);
    null != C && C.length > 0 && !_ && g(C);
    let N = null == C || _ ? s : C;
    return ((0, u.j)({ skuIds: N }), { skuIds: N, isLoading: null == C });
}
s.d(
    l,
    {},
    {
        l: g,
        u: function (e, l) {
            return g(e, l).skuIds;
        },
    },
);
