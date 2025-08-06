n.d(t, {
    D: () => c,
    o: () => u,
});
var r = n(442837),
    i = n(704215),
    o = n(605236),
    a = n(818083),
    s = n(496675),
    l = n(981631);
let c = (0, a.B)({
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
function u(e) {
    var t;
    let n = (0, r.e7)([s.Z], () => s.Z.can(l.Plq.ADMINISTRATOR, e)),
        a = c.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: "useIsPinPermissionMigrationNotificationAvailable",
        }).enabled,
        u = null == e ? void 0 : e.features.has(l.oNc.PIN_PERMISSION_MIGRATION_COMPLETE),
        d = (0, o.OA)(
            i.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION,
            null != (t = null == e ? void 0 : e.id) ? t : l.lds,
        );
    return n && a && !u && !d;
}
