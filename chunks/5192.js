n.d(t, {
    ZP: () => f,
    _T: () => d,
    y: () => u
});
var i = n(442837),
    r = n(592125),
    a = n(271383),
    s = n(699516),
    o = n(51144),
    l = n(388032);
function u(e, t, n) {
    if (null == n) return null;
    if (null != e) return a.ZP.getNick(e, n.id);
    if (null != t) {
        let e = r.Z.getChannel(t);
        if (null == e ? void 0 : e.isPrivate()) return s.Z.getNickname(n.id);
    }
    return null;
}
function c(e, t, n) {
    var i;
    return null == n ? l.intl.string(l.t.sKdZ6e) : null !== (i = u(e, t, n)) && void 0 !== i ? i : o.ZP.getName(n);
}
function d(e, t, n) {
    return (0, i.e7)([a.ZP, r.Z, s.Z], () => c(e, t, n));
}
let f = {
    getNickname: u,
    getName: c,
    useName: d
};
