n.d(t, {
    ZP: () => f,
    _T: () => d,
    oY: () => u,
    y: () => c
});
var r = n(442837),
    i = n(592125),
    o = n(271383),
    a = n(699516),
    s = n(51144),
    l = n(388032);
function c(e, t, n) {
    if (null == n) return null;
    if (null != e) return o.ZP.getNick(e, n.id);
    if (null != t) {
        let e = i.Z.getChannel(t);
        if (null == e ? void 0 : e.isPrivate()) return a.Z.getNickname(n.id);
    }
    return null;
}
function u(e, t, n) {
    var r;
    return null == n ? l.NW.string(l.t.sKdZ6e) : null != (r = c(e, t, n)) ? r : s.ZP.getName(n);
}
function d(e, t, n) {
    return (0, r.e7)([o.ZP, i.Z, a.Z], () => u(e, t, n));
}
let f = {
    getNickname: c,
    getName: u,
    useName: d
};
