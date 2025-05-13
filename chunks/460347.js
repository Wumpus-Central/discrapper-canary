n.d(t, {
    Z: () => d,
    m: () => u
}),
    n(997841);
var r = n(442837),
    i = n(160404),
    a = n(271383),
    o = n(70956),
    s = n(630388),
    l = n(372897);
function c(e, t, n) {
    var r;
    if (n.isFullServerPreview(e)) return !0;
    let i = t.getSelfMember(e);
    if (null == i) return !1;
    let a = t.getSelfMemberJoinedAt(e);
    return !(null == a || (0, s.yE)(null != (r = i.flags) ? r : 0, l.q.COMPLETED_HOME_ACTIONS)) && Date.now() - a.getTime() < o.Z.Millis.WEEK;
}
function u(e) {
    return c(e, a.ZP, i.Z);
}
function d(e) {
    return (0, r.e7)([a.ZP, i.Z], () => c(e, a.ZP, i.Z));
}
