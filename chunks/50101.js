n.d(t, {
    Ek: () => s,
    ZP: () => l,
    gV: () => o
});
var i = n(818083),
    r = n(987338);
let a = (0, i.B)({
    kind: 'guild',
    id: '2025-02_skill_trees',
    label: 'Skill Trees',
    commonTriggerPoint: r.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function s(e, t) {
    return a.useExperiment(
        {
            guildId: null == e ? void 0 : e.id,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
function o(e, t) {
    return a.getCurrentConfig(
        {
            guildId: null == e ? void 0 : e.id,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
let l = a;
