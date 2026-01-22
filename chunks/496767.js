n.d(t, {
    W: () => c,
    h: () => l,
});
var r = n(311907),
    i = n(71393),
    a = n(576705),
    s = n(709977),
    o = n(652215);

function l(e) {
    let t = i.A.getGuild(e);
    return (
        null != t &&
        t.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) &&
        a.A.can(o.xBc.KICK_MEMBERS, t)
    );
}

function c(e) {
    let t = (0, r.bG)([i.A], () => i.A.getGuild(e)),
        n = a.A.can(o.xBc.KICK_MEMBERS, t) || a.A.can(o.xBc.MANAGE_GUILD, t);
    return null != t && t.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && n && (0, s.Qd)(t);
}
