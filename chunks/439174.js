"use strict";
n.d(t, { Xr: () => l, cZ: () => o, e0: () => a });
var i = n(989349),
    r = n.n(i),
    s = n(788868);
let a = (e) => s.VD[e],
    o = (e) => (null == a(e) ? null : e),
    l = (e, t) => {
        if (null == t) return null;
        let n = a(e);
        if (null == n) return null;
        let i = r()(t);
        return i.add(n.tenureReqNumMonths, "months"), i.add(1, "days"), i.toDate();
    };
