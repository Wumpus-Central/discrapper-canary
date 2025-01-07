r.d(n, {
    U: function () {
        return o;
    }
});
var i = r(818083),
    a = r(987338);
let s = (0, i.B)({
    kind: 'user',
    id: '2024-12_quests_nitro_permadecos',
    label: 'Quests Nitro Permadecos',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: a.NZ.TREATMENT_1,
            label: 'Enabled',
            config: { enabled: !0 }
        }
    ]
});
function o() {
    return s.getCurrentConfig({ location: 'quest_nitro_permadecos' }, { autoTrackExposure: !1 }).enabled;
}
