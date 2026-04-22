n.d(t, { Z: () => u });
var r = n(64700),
    l = n(311907),
    i = n(287809),
    a = n(430363),
    s = n(4149),
    o = n(823854);
function u(e) {
    let { customStatusActivity: t, statusOwnerId: n, location: u } = e,
        c = r.useMemo(() => (null == t ? null : (0, s.a)(t)), [t]),
        d = null == c || null == n ? null : n === c.senderId ? c.targetId : c.senderId,
        _ = (0, l.bG)([i.default], () => (null != d ? i.default.getUser(d) : null), [d]),
        p = (0, l.bG)([o.A], () => (null == n ? null : o.A.getProgressForUserId(n)), [n]);
    return (0, a.Uk)(u)
        ? { presence: c, progress: p, statusTextOverride: (_?.globalName ?? _?.username, null) }
        : { presence: null, progress: null, statusTextOverride: null };
}
