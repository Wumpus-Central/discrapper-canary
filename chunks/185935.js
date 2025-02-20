n.d(t, { Z: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-12_participants_panel',
    label: 'Participants Panel',
    defaultConfig: { hasParticipantsPanel: !1 },
    treatments: [
        {
            id: 1,
            label: 'Participants panel in VC and GDM',
            config: { hasParticipantsPanel: !0 }
        }
    ]
});
function i(e) {
    return r.useExperiment(e);
}
