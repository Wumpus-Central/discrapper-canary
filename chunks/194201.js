t.d(n, { Z: () => c });
var l = t(442837),
    i = t(704215),
    r = t(409513),
    s = t(605236),
    u = t(485386),
    o = t(496675),
    a = t(981631);
function c(e) {
    var n, t, c;
    let d = (0, l.e7)([o.Z], () => o.Z.can(a.Plq.ADMINISTRATOR, e)),
        E = (0, l.e7)([u.Z], () => null != e && u.Z.getNumRoles(e.id) > 1),
        { enabled: I } = r.Z.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        _ = null != (n = null == e ? void 0 : e.features.has(a.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        S =
            null !=
                (t =
                    null == e
                        ? void 0
                        : e.features.has(a.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        N = I ? i.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        O = (0, s.OA)(N, null != (c = null == e ? void 0 : e.id) ? c : a.lds);
    return E && d && (!_ || (!S && I)) && !O;
}
