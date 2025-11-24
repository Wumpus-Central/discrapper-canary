n.d(t, { z: () => u }), n(997841);
var r = n(95015),
    i = n(757266),
    a = n(797258),
    o = n(358085),
    s = n(212517),
    l = n(981631);
function c(e) {
    let { platform: t } = e;
    return (
        !!(0, s.D)(e) ||
        ((0, o.isAndroid)()
            ? t === l.M7m.ANDROID
            : (0, o.isIOS)()
              ? t === l.M7m.IOS
              : (0, o.isWeb)()
                ? t === l.M7m.DESKTOP
                : !!(0, o.isDesktop)() &&
                  null != e.application_id &&
                  i.Z.isConnected(e.application_id) &&
                  t === l.M7m.DESKTOP)
    );
}
function u(e) {
    var t, n, i;
    if (null == e) return null;
    let o = e.application_id;
    if (null == o || !(0, r.yE)(null != (t = e.flags) ? t : 0, l.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN))
        return null;
    let s = a.Z.getRemoteApplicationActivity(o);
    return null == s || c(s)
        ? null
        : (0, r.yE)(null != (n = s.flags) ? n : 0, l.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) &&
            null != (i = s.platform)
          ? i
          : null;
}
