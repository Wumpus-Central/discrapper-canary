"use strict";
n.d(t, { q: () => c });
var i = n(111956),
    r = n.n(i),
    s = n(22574),
    a = n(243264),
    o = n(929396),
    l = n(471677);
let u = r()(
    (e) => {
        l.YK.fetchMany([e]);
    },
    l.fo,
    { leading: !0, maxWait: l.Mg },
);
function c(e, t) {
    let { enabled: n } = s.A.getConfig({ location: t });
    if (!n) return null;
    let i = (0, o.C7)(e);
    return null == i || (u(i), a.A.didFetchFail(i)) ? null : (a.A.getClosestResults(i) ?? []);
}
