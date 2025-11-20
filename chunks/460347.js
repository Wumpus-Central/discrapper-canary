n.d(t, {
    Z: () => d,
    m: () => u,
}),
    n(997841);
var r = n(95015),
    i = n(442837),
    a = n(160404),
    o = n(271383),
    s = n(70956),
    l = n(372897);
function c(e, t, n) {
    var i;
    if (n.isFullServerPreview(e)) return !0;
    let a = t.getSelfMember(e);
    if (null == a) return !1;
    let o = t.getSelfMemberJoinedAt(e);
    return (
        !(null == o || (0, r.yE)(null != (i = a.flags) ? i : 0, l.q.COMPLETED_HOME_ACTIONS)) &&
        Date.now() - o.getTime() < s.Z.Millis.WEEK
    );
}
function u(e) {
    return c(e, o.ZP, a.Z);
}
function d(e) {
    return (0, i.e7)([o.ZP, a.Z], () => c(e, o.ZP, a.Z));
}
