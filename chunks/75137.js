n.d(t, { U: () => a });
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
    kind: 'user',
    id: '2024-12_quests_nitro_permadecos',
    label: 'Quests Nitro Permadecos',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: i.NZ.TREATMENT_1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function a() {
    return o.getCurrentConfig({ location: 'quest_nitro_permadecos' }, { autoTrackExposure: !1 }).enabled;
}
