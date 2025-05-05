n.d(t, {
    RZ: () => l,
    fv: () => a,
    gn: () => s
});
var r = n(913527),
    i = n.n(r),
    o = n(474936);
let a = (e) => o.vK[e],
    s = (e) => (null == a(e) ? null : e),
    l = (e, t) => {
        if (null == t) return null;
        let n = a(e);
        if (null == n) return null;
        let r = i()(t);
        return r.add(n.tenureReqNumMonths, 'months'), r.add(1, 'days'), r.toDate();
    };
