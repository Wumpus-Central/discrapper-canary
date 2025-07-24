r.d(t, { Z: () => s });
let n = (0, r(818083).B)({
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
function s(e) {
    return n.useExperiment(e);
}
