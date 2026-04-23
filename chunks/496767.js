n.d(t, { W: () => o, h: () => l });
var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(709977),
    _ = n(652215);
function l(e) {
    let t = r.A.getGuild(e);
    return (
        null != t &&
        t.features.has(_.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        a.A.can(_.xBc.KICK_MEMBERS, t)
    );
}
function o(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuild(e)),
        n = a.A.can(_.xBc.KICK_MEMBERS, t) || a.A.can(_.xBc.MANAGE_GUILD, t);
    return null != t && t.features.has(_.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, s.Qd)(t);
}
