"use strict";
n.d(t, { A: () => _ });
var a = n(311907),
    i = n(554146),
    r = n(367727),
    c = n(317525),
    o = n(576705),
    s = n(937161),
    l = n(652215);
function _(e) {
    let t = (0, a.bG)([o.A], () => o.A.can(l.xBc.ADMINISTRATOR, e)),
        n = (0, a.bG)([c.A], () => null != e && c.A.getNumRoles(e.id) > 1),
        { enabled: _ } = s.A.useExperiment({
            guildId: e?.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        d = e?.features.has(l.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        u = e?.features.has(l.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        g = (0, r.cN)(i.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, e?.id ?? l.dJq);
    return n && t && (!d || !u) && !g && !_;
}
