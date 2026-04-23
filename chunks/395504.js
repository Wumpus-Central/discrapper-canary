n.d(t, { WW: () => E, Xn: () => d, jN: () => o });
var i = n(17928),
    r = n(71393),
    a = n(576705),
    s = n(543465),
    _ = n(287809),
    l = n(652215);
function o(e) {
    return (0, i.bG)([s.Ay, r.A, _.default], () => {
        let t = s.Ay.isOptInEnabled(e),
            n = r.A.getGuild(e)?.features.has(l.GuildFeatures.COMMUNITY) ?? !1,
            i = _.default.getCurrentUser()?.isStaff() ?? !1;
        return t && (n || i);
    });
}
function E(e) {
    let t = r.A.getGuild(e),
        n = _.default.getCurrentUser();
    return (
        null != e &&
        null != t &&
        null != n &&
        (t.features.has(l.GuildFeatures.COMMUNITY) || n.isStaff()) &&
        s.Ay.isOptInEnabled(e)
    );
}
function d(e) {
    return (0, i.bG)([r.A, a.A], () => {
        let t = r.A.getGuild(e),
            n = a.A.can(l.xBc.MANAGE_GUILD, t),
            i = a.A.can(l.xBc.MANAGE_ROLES, t),
            s = t?.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) ?? !1;
        return null != t && n && i && !s;
    });
}
