n.d(t, { Z: () => d });
var i = n(442837),
    r = n(704215),
    a = n(409513),
    l = n(605236),
    o = n(485386),
    c = n(496675),
    s = n(981631);
function d(e) {
    var t, n, d;
    let u = (0, i.e7)([c.Z], () => c.Z.can(s.Plq.ADMINISTRATOR, e)),
        g = (0, i.e7)([o.Z], () => null != e && o.Z.getNumRoles(e.id) > 1),
        { enabled: b } = a.Z.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPermissionMigrationNotificationAvailable",
        }),
        f = null != (t = null == e ? void 0 : e.features.has(s.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE)) && t,
        p =
            null !=
                (n =
                    null == e
                        ? void 0
                        : e.features.has(s.GuildFeatures.BYPASS_SLOWMODE_PERMISSION_MIGRATION_COMPLETE)) && n,
        h = b ? r.z.GUILD_JOINT_PERMISSION_MIGRATION_NOTIFICATION : r.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
        j = (0, l.OA)(h, null != (d = null == e ? void 0 : e.id) ? d : s.lds);
    return g && u && (!f || (!p && b)) && !j;
}
