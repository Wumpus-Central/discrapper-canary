n.d(t, {
    Z: () => d,
    m: () => c
}),
    n(789020);
var i = n(442837),
    r = n(160404),
    a = n(271383),
    s = n(70956),
    o = n(630388),
    l = n(372897);
function u(e, t, n) {
    var i;
    if (n.isFullServerPreview(e)) return !0;
    let r = t.getSelfMember(e);
    if (null == r) return !1;
    let a = t.getSelfMemberJoinedAt(e);
    return !(null == a || (0, o.yE)(null !== (i = r.flags) && void 0 !== i ? i : 0, l.q.COMPLETED_HOME_ACTIONS)) && Date.now() - a.getTime() < s.Z.Millis.WEEK;
}
function c(e) {
    return u(e, a.ZP, r.Z);
}
function d(e) {
    return (0, i.e7)([a.ZP, r.Z], () => u(e, a.ZP, r.Z));
}
