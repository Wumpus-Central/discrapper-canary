n.d(t, { U: () => s });
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'user',
    id: '2024-12_quests_nitro_permadecos',
    label: 'Quests Nitro Permadecos',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: r.NZ.TREATMENT_1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function s() {
    return a.getCurrentConfig({ location: 'quest_nitro_permadecos' }, { autoTrackExposure: !1 }).enabled;
}
