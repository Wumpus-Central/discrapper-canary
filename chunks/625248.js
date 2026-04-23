n.d(t, { l: () => d }), n(938796);
var i = n(665260),
    l = n(574381),
    a = n(134861),
    s = n(528767),
    r = n(182892),
    o = n(652215);
function d(e) {
    if (null == e) return null;
    let t = e.application_id;
    if (null == t || !(0, i.Lt)(e.flags ?? 0, o.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
    let n = s.A.getRemoteApplicationActivity(t);
    return null == n ||
        (0, r.e)(n) ||
        (null != n.application_id &&
            (a.A.isConnected(n.application_id) ||
                (function (e) {
                    let { platform: t } = e;
                    return (0, l.m0)() ? t === o.yTV.ANDROID : !!(0, l.un)() && t === o.yTV.IOS;
                })(n)))
        ? null
        : (0, i.Lt)(n.flags ?? 0, o.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
          ? (n.platform ?? null)
          : null;
}
