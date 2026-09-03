n.d(t, { Ay: () => _, mG: () => c, tJ: () => d, tx: () => u });
var i = n(17928),
    r = n(734057),
    a = n(696451),
    s = n(994500),
    l = n(427262),
    o = n(375708);
function d(e, t, n) {
    if (null == n) return null;
    if (null != e) return a.Ay.getNick(e, n.id);
    if (null != t) {
        let e = r.A.getChannel(t);
        if (e?.isPrivate()) return s.A.getNickname(n.id);
    }
    return null;
}
function c(e, t, n) {
    return null == n ? o.intl.string(o.t.sKdZ6U) : (d(e, t, n) ?? l.Ay.getName(n));
}
function u(e, t, n) {
    return (0, i.bG)([a.Ay, r.A, s.A], () => c(e, t, n));
}
let _ = { getNickname: d, getName: c, useName: u };
