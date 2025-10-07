n.d(t, { z: () => d }), n(997841);
var r = n(757266),
    i = n(797258),
    a = n(630388),
    o = n(358085),
    s = n(535246),
    l = n(212517),
    c = n(981631);
function u(e) {
    let { platform: t } = e;
    return (
        !!(0, l.D)(e) ||
        ((0, o.isAndroid)()
            ? t === c.M7m.ANDROID
            : (0, o.isIOS)()
              ? t === c.M7m.IOS
              : (0, o.isWeb)()
                ? t === c.M7m.DESKTOP
                : !!(0, o.isDesktop)() &&
                  null != e.application_id &&
                  r.Z.isConnected(e.application_id) &&
                  t === c.M7m.DESKTOP)
    );
}
function d(e) {
    var t, n, r;
    if (!(0, s.v)() || null == e) return null;
    let o = e.application_id;
    if (null == o || !(0, a.yE)(null != (t = e.flags) ? t : 0, c.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN))
        return null;
    let l = i.Z.getRemoteApplicationActivity(o);
    return null == l || u(l)
        ? null
        : (0, a.yE)(null != (n = l.flags) ? n : 0, c.xjy.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) &&
            null != (r = l.platform)
          ? r
          : null;
}
