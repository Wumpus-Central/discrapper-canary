"use strict";
n.d(t, { WW: () => c, Xn: () => d, jN: () => u });
var i = n(17928),
    r = n(71393),
    s = n(576705),
    a = n(543465),
    o = n(287809),
    l = n(652215);
function u(e) {
    return (0, i.bG)([a.Ay, r.A, o.default], () => {
        let t = a.Ay.isOptInEnabled(e),
            n = r.A.getGuild(e)?.features.has(l.GuildFeatures.COMMUNITY) ?? !1,
            i = o.default.getCurrentUser()?.isStaff() ?? !1;
        return t && (n || i);
    });
}
function c(e) {
    let t = r.A.getGuild(e),
        n = o.default.getCurrentUser();
    return (
        null != e &&
        null != t &&
        null != n &&
        (t.features.has(l.GuildFeatures.COMMUNITY) || n.isStaff()) &&
        a.Ay.isOptInEnabled(e)
    );
}
function d(e) {
    return (0, i.bG)([r.A, s.A], () => {
        let t = r.A.getGuild(e),
            n = s.A.can(l.xBc.MANAGE_GUILD, t),
            i = s.A.can(l.xBc.MANAGE_ROLES, t),
            a = t?.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) ?? !1;
        return null != t && n && i && !a;
    });
}
