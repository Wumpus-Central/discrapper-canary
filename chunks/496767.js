n.d(t, { W: () => d, h: () => o });
var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(709977),
    l = n(652215);
function o(e) {
    let t = r.A.getGuild(e);
    return (
        null != t &&
        t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        a.A.can(l.xBc.KICK_MEMBERS, t)
    );
}
function d(e) {
    let t = (0, i.bG)([r.A], () => r.A.getGuild(e));
    return (
        null != t &&
        t.features.has(l.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        a.A.can(l.xBc.KICK_MEMBERS, t) &&
        (0, s.Qd)(t)
    );
}
