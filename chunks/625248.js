n.d(t, { l: () => d }), n(938796);
var i = n(665260),
    l = n(134861),
    a = n(528767),
    r = n(723702),
    s = n(182892),
    o = n(652215);
function d(e) {
    if (null == e) return null;
    let t = e.application_id;
    if (null == t || !(0, i.Lt)(e.flags ?? 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)) return null;
    let n = a.A.getRemoteApplicationActivity(t);
    return null == n ||
        (function (e) {
            let { platform: t } = e;
            return (
                !!(0, s.e)(e) ||
                ((0, r.isAndroid)()
                    ? t === o.yTV.ANDROID
                    : (0, r.isIOS)()
                      ? t === o.yTV.IOS
                      : (0, r.isWeb)()
                        ? t === o.yTV.DESKTOP
                        : !!(0, r.isDesktop)() &&
                          null != e.application_id &&
                          l.A.isConnected(e.application_id) &&
                          t === o.yTV.DESKTOP)
            );
        })(n)
        ? null
        : (0, i.Lt)(n.flags ?? 0, o.jUm.SUPPORTS_GATEWAY_ACTIVITY_ACTION_JOIN)
          ? (n.platform ?? null)
          : null;
}
