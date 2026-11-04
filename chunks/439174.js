var i = n(536637),
    r = n.n(i),
    a = n(682901);
function s(e) {
    return a.VD[e];
}
function l(e, t) {
    if (null == t) return null;
    let n = s(e);
    if (null == n) return null;
    let i = r()(t);
    return (i.add(n.tenureReqNumMonths, "months"), i.add(1, "days"), i.toDate());
}
n.d(
    t,
    {},
    {
        UO: function (e) {
            if (null == e) return null;
            let t = new Date().getTime();
            for (let n = a.sp.length - 1; n >= 0; n--) {
                let i = a.sp[n],
                    r = l(i, e);
                if (null != r && t >= r.getTime()) return i;
            }
            return null;
        },
        Xr: l,
        cZ: function (e) {
            return null == s(e) ? null : e;
        },
        e0: s,
    },
);
