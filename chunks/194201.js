t.d(n, { Z: () => d });
var r = t(442837),
    i = t(704215),
    a = t(409513),
    o = t(605236),
    c = t(485386),
    l = t(496675),
    s = t(110259),
    u = t(981631);
function d(e) {
    var n, t, d;
    let f = (0, r.e7)([l.Z], () => l.Z.can(u.Plq.ADMINISTRATOR, e)),
        g = (0, r.e7)([c.Z], () => null != e && c.Z.getNumRoles(e.id) > 1),
        { enabled: h } = s.Z.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        { enabled: b } = a.Z.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        I = null != (n = null == e ? void 0 : e.features.has(u.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && n,
        v =
            null !=
                (t =
                    null == e
                        ? void 0
                        : e.features.has(u.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && t,
        p = b ? i.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        S = (0, o.OA)(p, null != (d = null == e ? void 0 : e.id) ? d : u.lds);
    return g && f && (!I || (!v && b)) && !S && !h;
}
