n.d(t, { Ay: () => c, mG: () => E, tJ: () => o, tx: () => d });
var i = n(17928),
    r = n(734057),
    a = n(696451),
    s = n(994500),
    _ = n(427262),
    l = n(985018);
function o(e, t, n) {
    if (null == n) return null;
    if (null != e) return a.Ay.getNick(e, n.id);
    if (null != t) {
        let e = r.A.getChannel(t);
        if (e?.isPrivate()) return s.A.getNickname(n.id);
    }
    return null;
}
function E(e, t, n) {
    return null == n ? l.intl.string(l.t.sKdZ6U) : (o(e, t, n) ?? _.Ay.getName(n));
}
function d(e, t, n) {
    return (0, i.bG)([a.Ay, r.A, s.A], () => E(e, t, n));
}
let c = { getNickname: o, getName: E, useName: d };
