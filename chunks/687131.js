n.d(t, { z: () => u }), n(997841);
var r = n(797258),
    i = n(630388),
    a = n(358085),
    o = n(535246),
    s = n(212517),
    l = n(981631);
function c(e) {
    let { platform: t } = e;
    return (
        !!(0, s.Dp)(e) ||
        ((0, a.isAndroid)()
            ? t === l.M7m.ANDROID
            : (0, a.isIOS)()
              ? t === l.M7m.IOS
              : !!((0, a.isDesktop)() || (0, a.isWeb)()) && t === l.M7m.DESKTOP)
    );
}
function u(e) {
    var t, n, a;
    if (!(0, o.v)() || null == e) return null;
    let s = e.application_id;
    if (null == s || !(0, i.yE)(null != (t = e.flags) ? t : 0, l.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN))
        return null;
    let u = r.Z.getRemoteApplicationActivity(s);
    return null == u || c(u)
        ? null
        : (0, i.yE)(null != (n = u.flags) ? n : 0, l.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) &&
            null != (a = u.platform)
          ? a
          : null;
}
