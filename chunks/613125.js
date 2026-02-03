n.d(t, {
    Z: () => u,
});
var r = n(64700),
    i = n(311907),
    a = n(287809),
    o = n(430363),
    s = n(4149),
    l = n(823854);

function c(e) {
    return null;
}

function u(e) {
    var t, n;
    let { customStatusActivity: u, statusOwnerId: d, location: f } = e,
        p = r.useMemo(() => (null == u ? null : (0, s.a)(u)), [u]),
        _ = null == p || null == d ? null : d === p.senderId ? p.targetId : p.senderId,
        h = (0, i.bG)([a.default], () => (null != _ ? a.default.getUser(_) : null), [_]),
        m = (0, i.bG)([l.A], () => (null == d ? null : l.A.getProgressForUserId(d)), [d]);
    if (!(0, o.Uk)(f))
        return {
            presence: null,
            progress: null,
            statusTextOverride: null,
        };
    let g = c({
        activity: u,
        presence: p,
        statusOwnerId: d,
        otherUserName:
            null != (t = null != (n = null == h ? void 0 : h.globalName) ? n : null == h ? void 0 : h.username)
                ? t
                : null,
        progress: m,
    });
    return {
        presence: p,
        progress: m,
        statusTextOverride: g,
    };
}
