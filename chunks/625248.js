n.d(t, {
    l: () => u,
}),
    n(938796);
var r = n(665260),
    i = n(134861),
    a = n(528767),
    s = n(723702),
    o = n(182892),
    l = n(652215);

function c(e) {
    let { platform: t } = e;
    return (
        !!(0, o.e)(e) ||
        ((0, s.isAndroid)()
            ? t === l.yTV.ANDROID
            : (0, s.isIOS)()
              ? t === l.yTV.IOS
              : (0, s.isWeb)()
                ? t === l.yTV.DESKTOP
                : !!(0, s.isDesktop)() &&
                  null != e.application_id &&
                  i.A.isConnected(e.application_id) &&
                  t === l.yTV.DESKTOP)
    );
}

function u(e) {
    var t, n, i;
    if (null == e) return null;
    let s = e.application_id;
    if (null == s || !(0, r.Lt)(null != (t = e.flags) ? t : 0, l.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN))
        return null;
    let o = a.A.getRemoteApplicationActivity(s);
    return null == o || c(o)
        ? null
        : (0, r.Lt)(null != (n = o.flags) ? n : 0, l.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) &&
            null != (i = o.platform)
          ? i
          : null;
}
