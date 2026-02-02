t.d(n, {
    A: () => u,
});
var r = t(311907),
    i = t(554146),
    a = t(367727),
    o = t(317525),
    l = t(576705),
    s = t(937161),
    c = t(652215);

function u(e) {
    var n, t, u;
    let _ = (0, r.bG)([l.A], () => l.A.can(c.xBc.ADMINISTRATOR, e)),
        d = (0, r.bG)([o.A], () => null != e && o.A.getNumRoles(e.id) > 1),
        { enabled: b } = s.A.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        m = null != (n = null == e ? void 0 : e.features.has(c.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        f =
            null !=
                (t =
                    null == e
                        ? void 0
                        : e.features.has(c.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        g = (0, a.cN)(
            i.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION,
            null != (u = null == e ? void 0 : e.id) ? u : c.dJq,
        );
    return d && _ && (!m || !f) && !g && !b;
}
