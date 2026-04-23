"use strict";
n.d(t, { Ay: () => _, mG: () => c, tJ: () => u, tx: () => d });
var r = n(311907),
    i = n(734057),
    s = n(696451),
    a = n(994500),
    o = n(427262),
    l = n(985018);
function u(e, t, n) {
    if (null == n) return null;
    if (null != e) return s.Ay.getNick(e, n.id);
    if (null != t) {
        let e = i.A.getChannel(t);
        if (e?.isPrivate()) return a.A.getNickname(n.id);
    }
    return null;
}
function c(e, t, n) {
    return null == n ? l.intl.string(l.t.sKdZ6U) : (u(e, t, n) ?? o.Ay.getName(n));
}
function d(e, t, n) {
    return (0, r.bG)([s.Ay, i.A, a.A], () => c(e, t, n));
}
let _ = { getNickname: u, getName: c, useName: d };
