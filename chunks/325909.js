n.d(t, { o: () => d, p: () => c });
var i = n(17928),
    r = n(280450),
    a = n(470710),
    s = n(734057),
    l = n(994500),
    o = n(652215);
function d(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getChannel(t)),
        a = (0, i.bG)([r.default], () => r.default.getId() === e.id),
        d = (0, i.bG)([l.A], () => l.A.isFriend(e.id)),
        c = n?.type,
        u = null != c && o.kvI.CALLABLE.has(c);
    return d && !a && !e.bot && !e.system && !e.isProvisional && u;
}
function c(e) {
    if (!o.kvI.CALLABLE.has(e.type)) return !1;
    let t = a.A.getCall(e.id);
    return null != t && null != t.messageId && !a.A.isCallUnavailable(e.id);
}
