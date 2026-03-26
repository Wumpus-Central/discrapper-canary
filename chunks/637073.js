"use strict";
n.d(t, { Zb: () => u, ds: () => l });
var r = n(311907),
    i = n(496431),
    s = n(366999),
    a = n(287809);
n(816733), n(474090), n(694080), n(788868);
let o = 36e5;
function l() {
    return (0, r.bG)([a.default], () => {
        let e = a.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function u(e) {
    let t = (0, i.A)(e.toDate(), o);
    return Math.max(1, (0, s.Vb)(t).days);
}
