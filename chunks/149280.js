"use strict";
n.d(t, { A: () => _ });
var i = n(311907),
    r = n(554146),
    a = n(367727),
    s = n(317525),
    o = n(576705),
    l = n(937161),
    c = n(652215);
function _(e) {
    let t = (0, i.bG)([o.A], () => o.A.can(c.xBc.ADMINISTRATOR, e)),
        n = (0, i.bG)([s.A], () => null != e && s.A.getNumRoles(e.id) > 1),
        { enabled: _ } = l.A.useExperiment({
            guildId: e?.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        d = e?.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        u = e?.features.has(c.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        b = (0, a.cN)(r.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, e?.id ?? c.dJq);
    return n && t && (!d || !u) && !b && !_;
}
