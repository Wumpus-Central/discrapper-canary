r.d(n, {
    Z: function () {
        return p;
    },
    m: function () {
        return f;
    }
});
var i = r(789020);
var a = r(442837),
    o = r(160404),
    s = r(271383),
    l = r(70956),
    u = r(630388),
    c = r(372897);
function d(e, n, r) {
    var i;
    if (r.isFullServerPreview(e)) return !0;
    let a = n.getSelfMember(e);
    if (null == a) return !1;
    let o = n.getSelfMemberJoinedAt(e);
    return !(null == o || (0, u.yE)(null !== (i = a.flags) && void 0 !== i ? i : 0, c.q.COMPLETED_HOME_ACTIONS)) && Date.now() - o.getTime() < l.Z.Millis.WEEK;
}
function f(e) {
    return d(e, s.ZP, o.Z);
}
function p(e) {
    return (0, a.e7)([s.ZP, o.Z], () => d(e, s.ZP, o.Z));
}
