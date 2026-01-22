n.d(t, {
    Xr: () => l,
    cZ: () => o,
    e0: () => s,
});
var r = n(989349),
    i = n.n(r),
    a = n(788868);
let s = (e) => a.VD[e],
    o = (e) => (null == s(e) ? null : e),
    l = (e, t) => {
        if (null == t) return null;
        let n = s(e);
        if (null == n) return null;
        let r = i()(t);
        return r.add(n.tenureReqNumMonths, "months"), r.add(1, "days"), r.toDate();
    };
