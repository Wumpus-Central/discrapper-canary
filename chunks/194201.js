t.d(n, { Z: () => u });
var r = t(442837),
    i = t(704215),
    o = t(409513),
    a = t(605236),
    c = t(485386),
    s = t(496675),
    l = t(981631);
function u(e) {
    var n, t, u;
    let d = (0, r.e7)([s.Z], () => s.Z.can(l.Plq.ADMINISTRATOR, e)),
        h = (0, r.e7)([c.Z], () => null != e && c.Z.getNumRoles(e.id) > 1),
        { enabled: g } = o.Z.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        f = null != (n = null == e ? void 0 : e.features.has(l.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        v =
            null !=
                (t =
                    null == e
                        ? void 0
                        : e.features.has(l.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        p = g ? i.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        _ = (0, a.OA)(p, null != (u = null == e ? void 0 : e.id) ? u : l.lds);
    return h && d && (!f || (!v && g)) && !_;
}
