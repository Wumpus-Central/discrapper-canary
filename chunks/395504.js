"use strict";
n.d(t, { WW: () => c, Xn: () => d, jN: () => u });
var r = n(311907),
    i = n(71393),
    a = n(576705),
    s = n(543465),
    o = n(287809),
    l = n(652215);
function u(e) {
    return (0, r.bG)([s.Ay, i.A, o.default], () => {
        let t = s.Ay.isOptInEnabled(e),
            n = i.A.getGuild(e)?.features.has(l.GuildFeatures.COMMUNITY) ?? !1,
            r = o.default.getCurrentUser()?.isStaff() ?? !1;
        return t && (n || r);
    });
}
function c(e) {
    let t = i.A.getGuild(e),
        n = o.default.getCurrentUser();
    return (
        null != e &&
        null != t &&
        null != n &&
        (t.features.has(l.GuildFeatures.COMMUNITY) || n.isStaff()) &&
        s.Ay.isOptInEnabled(e)
    );
}
function d(e) {
    return (0, r.bG)([i.A, a.A], () => {
        let t = i.A.getGuild(e),
            n = a.A.can(l.xBc.MANAGE_GUILD, t),
            r = a.A.can(l.xBc.MANAGE_ROLES, t),
            s = t?.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) ?? !1;
        return null != t && n && r && !s;
    });
}
