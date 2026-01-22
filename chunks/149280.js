t.d(n, {
    A: () => d,
});
var l = t(311907),
    r = t(554146),
    i = t(386849),
    a = t(367727),
    s = t(317525),
    c = t(576705),
    o = t(937161),
    u = t(652215);

function d(e) {
    var n, t, d;
    let _ = (0, l.bG)([c.A], () => c.A.can(u.xBc.ADMINISTRATOR, e)),
        E = (0, l.bG)([s.A], () => null != e && s.A.getNumRoles(e.id) > 1),
        { enabled: I } = o.A.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        { enabled: A } = i.A.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        b = null != (n = null == e ? void 0 : e.features.has(u.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        f =
            null !=
                (t =
                    null == e
                        ? void 0
                        : e.features.has(u.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        S = A ? r.M.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : r.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        N = (0, a.cN)(S, null != (d = null == e ? void 0 : e.id) ? d : u.dJq);
    return E && _ && (!b || (!f && A)) && !N && !I;
}
