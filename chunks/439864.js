"use strict";
n.d(t, { q: () => d });
var i = n(111956),
    r = n.n(i),
    a = n(243264),
    s = n(929396),
    l = n(471677);
let o = r()(
    (e) => {
        l.YK.fetchMany([e]);
    },
    l.fo,
    { leading: !0, maxWait: l.Mg },
);
function d(e) {
    let t = (0, s.C7)(e);
    return null == t ? null : (o(t), (a.A.getClosestResults(t) ?? []).filter(s.qS));
}
