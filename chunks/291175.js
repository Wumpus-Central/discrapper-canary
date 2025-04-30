n.d(t, {
    RZ: () => l,
    fv: () => o,
    gn: () => s
});
var r = n(913527),
    i = n.n(r),
    a = n(474936);
let o = (e) => a.vK[e],
    s = (e) => (null == o(e) ? null : e),
    l = (e, t) => {
        if (null == t) return null;
        let n = o(e);
        if (null == n) return null;
        let r = i()(t);
        return r.add(n.tenureReqNumMonths, 'months'), r.add(1, 'days'), r.toDate();
    };
