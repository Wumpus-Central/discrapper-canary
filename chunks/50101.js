n.d(t, {
    Ek: () => a,
    ZP: () => l,
    gV: () => s
});
var r = n(818083),
    i = n(987338);
let o = (0, r.B)({
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
function a(e, t) {
    return o.useExperiment(
        {
            guildId: null == e ? void 0 : e.id,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
function s(e, t) {
    return o.getCurrentConfig(
        {
            guildId: null == e ? void 0 : e.id,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
}
let l = o;
