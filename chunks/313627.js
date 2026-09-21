n.d(t, { Uq: () => _, mN: () => d, tT: () => u });
var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(256497),
    l = n(593673),
    o = n(652215);
function d(e) {
    return (0, i.bG)([a.A], () => null != e && a.A.can(o.xBc.MANAGE_GUILD, e), [e]);
}
function c(e) {
    let t = e.guildSpaceSettings;
    return null != t && t.enabled && t.publish_status === l.B.PUBLISHED;
}
function u(e, t) {
    return null != e && !!(0, s.aA)(e.id, t) && ((null != e && a.A.can(o.xBc.MANAGE_GUILD, e)) || c(e));
}
function _(e, t) {
    let n = (0, s.fX)(e ?? void 0, t),
        a = (0, i.bG)([r.A], () => r.A.getGuild(e), [e]),
        l = d(a);
    return null != a && !!n && (l || c(a));
}
