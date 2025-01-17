r.d(n, {
    Z: function () {
        return _;
    },
    m: function () {
        return f;
    }
});
var i = r(789020);
var a = r(442837),
    s = r(160404),
    o = r(271383),
    l = r(70956),
    u = r(630388),
    c = r(372897);
function d(e, n, r) {
    var i;
    if (r.isFullServerPreview(e)) return !0;
    let a = n.getSelfMember(e);
    if (null == a) return !1;
    let s = n.getSelfMemberJoinedAt(e);
    return !(null == s || (0, u.yE)(null !== (i = a.flags) && void 0 !== i ? i : 0, c.q.COMPLETED_HOME_ACTIONS)) && Date.now() - s.getTime() < l.Z.Millis.WEEK;
}
function f(e) {
    return d(e, o.ZP, s.Z);
}
function _(e) {
    return (0, a.e7)([o.ZP, s.Z], () => d(e, o.ZP, s.Z));
}
