n.d(t, {
    l: () => c,
}),
    n(938796);
var r = n(665260),
    i = n(134861),
    l = n(528767),
    a = n(723702),
    s = n(182892),
    o = n(652215);

function c(e) {
    var t, n, c;
    if (null == e) return null;
    let u = e.application_id;
    if (null == u || !(0, r.Lt)(null != (t = e.flags) ? t : 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN))
        return null;
    let d = l.A.getRemoteApplicationActivity(u);
    return null == d ||
        (function (e) {
            let { platform: t } = e;
            return (
                !!(0, s.e)(e) ||
                ((0, a.isAndroid)()
                    ? t === o.yTV.ANDROID
                    : (0, a.isIOS)()
                      ? t === o.yTV.IOS
                      : (0, a.isWeb)()
                        ? t === o.yTV.DESKTOP
                        : !!(0, a.isDesktop)() &&
                          null != e.application_id &&
                          i.A.isConnected(e.application_id) &&
                          t === o.yTV.DESKTOP)
            );
        })(d)
        ? null
        : (0, r.Lt)(null != (n = d.flags) ? n : 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN) &&
            null != (c = d.platform)
          ? c
          : null;
}
