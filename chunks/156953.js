n.d(t, { J: () => i });
let l = (0, n(818083).B)({
    kind: "guild",
    id: "2025-08_invite_role_assignment",
    label: "Invite Role Assignment",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Invite Role Assignment",
            config: { enabled: !0 },
        },
    ],
});
function i(e, t) {
    return l.useExperiment({
        guildId: e,
        location: t,
    });
}
