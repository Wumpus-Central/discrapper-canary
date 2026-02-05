r.d(t, { A: () => n });
let s = (0, r(600975).C)({
    kind: "user",
    id: "2024-12_participants_panel",
    label: "Participants Panel",
    defaultConfig: { hasParticipantsPanel: !1 },
    treatments: [{ id: 1, label: "Participants panel in VC and GDM", config: { hasParticipantsPanel: !0 } }],
});
function n(e) {
    return s.useExperiment(e);
}
