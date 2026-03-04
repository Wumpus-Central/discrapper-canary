t.d(n, { A: () => o });
var i = t(311907),
    l = t(554146),
    s = t(367727),
    a = t(317525),
    r = t(576705),
    u = t(937161),
    c = t(652215);
function o(e) {
    let n = (0, i.bG)([r.A], () => r.A.can(c.xBc.ADMINISTRATOR, e)),
        t = (0, i.bG)([a.A], () => null != e && a.A.getNumRoles(e.id) > 1),
        { enabled: o } = u.A.useExperiment({
            guildId: e?.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        E = e?.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        _ = e?.features.has(c.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE) ?? !1,
        A = (0, s.cN)(l.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION, e?.id ?? c.dJq);
    return t && n && (!E || !_) && !A && !o;
}
