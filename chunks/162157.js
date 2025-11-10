n.d(t, {
    BT: () => d,
    N8: () => c,
    al: () => l,
});
var r = n(442837);
n(467319);
var i = n(496675),
    a = n(533244),
    o = n(487419),
    s = n(981631);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
    return (
        t.can(s.Plq.BAN_MEMBERS, e) ||
        t.can(s.Plq.KICK_MEMBERS, e) ||
        t.can(s.Plq.MODERATE_MEMBERS, e) ||
        t.can(s.Plq.MANAGE_GUILD, e)
    );
}
function c(e) {
    let t = (0, r.e7)([i.Z], () => l(e, i.Z), [e]),
        n = (0, r.e7)([o.Z], () => (null != e ? o.Z.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, a.i9)(n)) && t;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
    return t.can(s.Plq.MANAGE_GUILD, e);
}
function d(e) {
    return (0, r.e7)([i.Z], () => u(e, i.Z), [e]);
}
