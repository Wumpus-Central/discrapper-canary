n.d(t, {
    W: () => u,
    v: () => l
});
var i = n(442837),
    r = n(430824),
    a = n(496675),
    s = n(983736),
    o = n(981631);
function l(e) {
    let t = r.Z.getGuild(e);
    return null != t && t.hasFeature(o.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && a.Z.can(o.Plq.KICK_MEMBERS, t);
}
function u(e) {
    let t = (0, i.e7)([r.Z], () => r.Z.getGuild(e)),
        n = a.Z.can(o.Plq.KICK_MEMBERS, t) || a.Z.can(o.Plq.MANAGE_GUILD, t);
    return null != t && t.hasFeature(o.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, s.Dc)(t);
}
