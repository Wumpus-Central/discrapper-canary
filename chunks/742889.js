n.d(t, { K: () => s }), n(997841);
var r = n(797258),
    i = n(630388),
    a = n(535246),
    o = n(981631);
function s(e) {
    var t, n;
    if (!a.l.getConfig({ location: "isActivityRemoteJoinable" }).enableRemoteJoin) return !1;
    let s = e.application_id;
    if (null == s || !(0, i.yE)(null != (t = e.flags) ? t : 0, o.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) return !1;
    let l = r.Z.getRemoteApplicationActivity(s);
    return null != l && (0, i.yE)(null != (n = l.flags) ? n : 0, o.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN);
}
