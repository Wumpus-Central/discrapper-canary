r.d(n, {
    _T: function () {
        return f;
    },
    y: function () {
        return c;
    }
});
var i = r(442837),
    a = r(592125),
    o = r(271383),
    s = r(699516),
    l = r(51144),
    u = r(388032);
function c(e, n, r) {
    if (null == r) return null;
    if (null != e) return o.ZP.getNick(e, r.id);
    if (null != n) {
        let e = a.Z.getChannel(n);
        if (null == e ? void 0 : e.isPrivate()) return s.Z.getNickname(r.id);
    }
    return null;
}
function d(e, n, r) {
    var i;
    return null == r ? u.intl.string(u.t.sKdZ6e) : null !== (i = c(e, n, r)) && void 0 !== i ? i : l.ZP.getName(r);
}
function f(e, n, r) {
    return (0, i.e7)([o.ZP, a.Z, s.Z], () => d(e, n, r));
}
n.ZP = {
    getNickname: c,
    getName: d,
    useName: f
};
