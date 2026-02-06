"use strict";
n.d(t, { Z: () => c });
var r = n(64700),
    i = n(311907),
    a = n(287809),
    s = n(430363),
    o = n(4149),
    l = n(823854);
function u(e) {
    return null;
}
function c(e) {
    let { customStatusActivity: t, statusOwnerId: n, location: c } = e,
        d = r.useMemo(() => (null == t ? null : (0, o.a)(t)), [t]),
        _ = null == d || null == n ? null : n === d.senderId ? d.targetId : d.senderId,
        f = (0, i.bG)([a.default], () => (null != _ ? a.default.getUser(_) : null), [_]),
        p = (0, i.bG)([l.A], () => (null == n ? null : l.A.getProgressForUserId(n)), [n]);
    if (!(0, s.Uk)(c)) return { presence: null, progress: null, statusTextOverride: null };
    let h = u({
        activity: t,
        presence: d,
        statusOwnerId: n,
        otherUserName: f?.globalName ?? f?.username ?? null,
        progress: p,
    });
    return { presence: d, progress: p, statusTextOverride: h };
}
