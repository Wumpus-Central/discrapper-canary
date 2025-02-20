n.d(t, {
    W: () => c,
    v: () => l
});
var r = n(442837),
    i = n(430824),
    o = n(496675),
    a = n(983736),
    s = n(981631);
function l(e) {
    let t = i.Z.getGuild(e);
    return null != t && t.hasFeature(s.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && o.Z.can(s.Plq.KICK_MEMBERS, t);
}
function c(e) {
    let t = (0, r.e7)([i.Z], () => i.Z.getGuild(e)),
        n = o.Z.can(s.Plq.KICK_MEMBERS, t) || o.Z.can(s.Plq.MANAGE_GUILD, t);
    return null != t && t.hasFeature(s.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, a.Dc)(t);
}
