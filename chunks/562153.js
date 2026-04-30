n.d(t, { Ay: () => E, mG: () => c, tJ: () => d, tx: () => _ });
var i = n(17928),
    a = n(734057),
    r = n(696451),
    s = n(994500),
    l = n(427262),
    o = n(985018);
function d(e, t, n) {
    if (null == n) return null;
    if (null != e) return r.Ay.getNick(e, n.id);
    if (null != t) {
        let e = a.A.getChannel(t);
        if (e?.isPrivate()) return s.A.getNickname(n.id);
    }
    return null;
}
function c(e, t, n) {
    return null == n ? o.intl.string(o.t.sKdZ6U) : (d(e, t, n) ?? l.Ay.getName(n));
}
function _(e, t, n) {
    return (0, i.bG)([r.Ay, a.A, s.A], () => c(e, t, n));
}
let E = { getNickname: d, getName: c, useName: _ };
