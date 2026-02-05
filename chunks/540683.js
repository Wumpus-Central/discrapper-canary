n.d(t, { E: () => l });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2025-08_invite_role_assignment",
    label: "Invite Role Assignment",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable Invite Role Assignment", config: { enabled: !0 } }],
});
function l(e, t) {
    return i.useExperiment({ guildId: e, location: t });
}
