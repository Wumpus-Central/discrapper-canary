t.d(n, { Z: () => u });
var r = t(442837),
    i = t(704215),
    a = t(409513),
    o = t(605236),
    c = t(485386),
    l = t(496675),
    s = t(981631);
function u(e) {
    var n, t, u;
    let d = (0, r.e7)([l.Z], () => l.Z.can(s.Plq.ADMINISTRATOR, e)),
        h = (0, r.e7)([c.Z], () => null != e && c.Z.getNumRoles(e.id) > 0),
        { enabled: g } = a.Z.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        f = null != (n = null == e ? void 0 : e.features.has(s.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        _ =
            null !=
                (t =
                    null == e
                        ? void 0
                        : e.features.has(s.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        p = g ? i.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        v = (0, o.OA)(p, null != (u = null == e ? void 0 : e.id) ? u : s.lds);
    return h && d && (!f || (!_ && g)) && !v;
}
