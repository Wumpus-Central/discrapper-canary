"use strict";
n.d(t, { Z: () => u });
var r = n(64700),
    i = n(311907),
    s = n(287809),
    a = n(430363),
    o = n(4149),
    l = n(823854);
function u(e) {
    let { customStatusActivity: t, statusOwnerId: n, location: u } = e,
        c = r.useMemo(() => (null == t ? null : (0, o.a)(t)), [t]),
        d = null == c || null == n ? null : n === c.senderId ? c.targetId : c.senderId,
        _ = (0, i.bG)([s.default], () => (null != d ? s.default.getUser(d) : null), [d]),
        f = (0, i.bG)([l.A], () => (null == n ? null : l.A.getProgressForUserId(n)), [n]);
    return (0, a.Uk)(u)
        ? { presence: c, progress: f, statusTextOverride: (_?.globalName ?? _?.username, null) }
        : { presence: null, progress: null, statusTextOverride: null };
}
