n.d(t, {
    Ek: () => o,
    ZP: () => l,
    gV: () => s
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'guild',
    id: '2025-02_skill_trees',
    label: 'Skill Trees',
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function o(e, t) {
    return a.useExperiment(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
function s(e, t) {
    return a.getCurrentConfig(
        {
            guildId: e,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
let l = a;
