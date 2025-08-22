n.d(t, {
    D: () => c,
    o: () => d,
});
var a = n(442837),
    r = n(704215),
    l = n(605236),
    i = n(818083),
    s = n(496675),
    o = n(981631);
let c = (0, i.B)({
    kind: "guild",
    id: "2025-06_guild_pin_permission",
    label: "Guild Pin Permission",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Allows use of the Pin Messages permission",
            config: { enabled: !0 },
        },
    ],
});
function d(e) {
    var t;
    let n = (0, a.e7)([s.Z], () => s.Z.can(o.Plq.ADMINISTRATOR, e)),
        i = c.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPinPermissionMigrationNotificationAvailable",
        }).enabled,
        d = null == e ? void 0 : e.features.has(o.oNc.PIN_PERMISSION_MIGRATION_COMPLETE),
        u = (0, l.OA)(
            r.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
            null != (t = null == e ? void 0 : e.id) ? t : o.lds,
        );
    return n && i && !d && !u;
}
