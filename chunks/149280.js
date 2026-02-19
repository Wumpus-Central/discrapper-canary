n.d(i, { A: () => o });
var t = n(311907),
    l = n(554146),
    a = n(367727),
    r = n(317525),
    d = n(576705),
    s = n(937161),
    c = n(652215);
function o(e) {
    let i = (0, t.bG)([d.A], () => d.A.can(c.xBc.ADMINISTRATOR, e)),
        n = (0, t.bG)([r.A], () => null != e && r.A.getNumRoles(e.id) > 1),
        { enabled: o } = s.A.useExperiment({
            guildId: e?.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        u = e?.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        g = e?.features.has(c.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        A = (0, a.cN)(l.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, e?.id ?? c.dJq);
    return n && i && (!u || !g) && !A && !o;
}
