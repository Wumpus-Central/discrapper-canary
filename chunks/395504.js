n.d(t, { WW: () => c, Xn: () => _, jN: () => d });
var i = n(17928),
    a = n(71393),
    r = n(576705),
    s = n(543465),
    l = n(287809),
    o = n(652215);
function d(e) {
    return (0, i.bG)([s.Ay, a.A, l.default], () => {
        let t = s.Ay.isOptInEnabled(e),
            n = a.A.getGuild(e)?.features.has(o.GuildFeatures.COMMUNITY) ?? !1,
            i = l.default.getCurrentUser()?.isStaff() ?? !1;
        return t && (n || i);
    });
}
function c(e) {
    let t = a.A.getGuild(e),
        n = l.default.getCurrentUser();
    return (
        null != e &&
        null != t &&
        null != n &&
        (t.features.has(o.GuildFeatures.COMMUNITY) || n.isStaff()) &&
        s.Ay.isOptInEnabled(e)
    );
}
function _(e) {
    return (0, i.bG)([a.A, r.A], () => {
        let t = a.A.getGuild(e),
            n = r.A.can(o.xBc.MANAGE_GUILD, t),
            i = r.A.can(o.xBc.MANAGE_ROLES, t),
            s = t?.features.has(o.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) ?? !1;
        return null != t && n && i && !s;
    });
}
