n.d(t, { W: () => d, h: () => o });
var i = n(17928),
    a = n(71393),
    r = n(576705),
    s = n(709977),
    l = n(652215);
function o(e) {
    let t = a.A.getGuild(e);
    return (
        null != t &&
        t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        r.A.can(l.xBc.KICK_MEMBERS, t)
    );
}
function d(e) {
    let t = (0, i.bG)([a.A], () => a.A.getGuild(e)),
        n = r.A.can(l.xBc.KICK_MEMBERS, t) || r.A.can(l.xBc.MANAGE_GUILD, t);
    return null != t && t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, s.Qd)(t);
}
