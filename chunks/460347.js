n.d(t, {
    Z: () => d,
    m: () => u
}),
    n(789020);
var r = n(442837),
    i = n(160404),
    o = n(271383),
    a = n(70956),
    s = n(630388),
    l = n(372897);
function c(e, t, n) {
    var r;
    if (n.isFullServerPreview(e)) return !0;
    let i = t.getSelfMember(e);
    if (null == i) return !1;
    let o = t.getSelfMemberJoinedAt(e);
    return !(null == o || (0, s.yE)(null != (r = i.flags) ? r : 0, l.q.COMPLETED_HOME_ACTIONS)) && Date.now() - o.getTime() < a.Z.Millis.WEEK;
}
function u(e) {
    return c(e, o.ZP, i.Z);
}
function d(e) {
    return (0, r.e7)([o.ZP, i.Z], () => c(e, o.ZP, i.Z));
}
