n.d(t, { l: () => d }), n(938796);
var i = n(665260),
    r = n(574381),
    l = n(134861),
    a = n(528767),
    s = n(182892),
    o = n(652215);
function d(e) {
    if (null == e) return null;
    let t = e.application_id;
    if (null == t || !(0, i.Lt)(e.flags ?? 0, o.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)) return null;
    let n = a.A.getRemoteApplicationActivity(t);
    return null == n ||
        (0, s.e)(n) ||
        (null != n.application_id &&
            (l.A.isConnected(n.application_id) ||
                (function (e) {
                    let { platform: t } = e;
                    return (0, r.m0)() ? t === o.yTV.ANDROID : !!(0, r.un)() && t === o.yTV.IOS;
                })(n)))
        ? null
        : (0, i.Lt)(n.flags ?? 0, o.jUm.SUPPORTS_REMOTE_ACTIVITY_ACTION_JOIN)
          ? (n.platform ?? null)
          : null;
}
