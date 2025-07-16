a.d(t, {
    D: () => s,
    Y: () => o
});
var n = a(442837),
    r = a(818083),
    l = a(496675),
    i = a(981631);
let s = (0, r.B)({
    kind: 'guild',
    id: '2025-06_guild_pin_permission',
    label: 'Guild Pin Permission',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Allows use of the Pin Messages permission',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    let t = (0, n.e7)([l.Z], () => l.Z.can(i.Plq.ADMINISTRATOR, e)),
        a = s.useExperiment({
            guildId: null == e ? void 0 : e.id,
            location: 'useIsPinPermissionMigrationAvailableToCurrentUser'
        }).enabled,
        r = null == e ? void 0 : e.features.has(i.oNc.PIN_PERMISSION_MIGRATION_COMPLETE);
    return t && a && !r;
}
