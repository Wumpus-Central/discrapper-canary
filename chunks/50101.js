n.d(t, {
    Ek: () => u,
    ZP: () => d,
    gV: () => c
});
var i = n(442837),
    r = n(818083),
    a = n(496675),
    s = n(987338),
    o = n(231338);
let l = (0, r.B)({
    kind: 'guild',
    id: '2025-02_skill_trees',
    label: 'Skill Trees',
    commonTriggerPoint: s.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function u(e, t) {
    let n = l.useExperiment(
        {
            guildId: null == e ? void 0 : e.id,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
    return (0, i.e7)([a.Z], () => a.Z.can(o.Pl.ADMINISTRATOR, e)) && n;
}
function c(e, t) {
    let n = l.getCurrentConfig(
        {
            guildId: null == e ? void 0 : e.id,
            location: t
        },
        { autoTrackExposure: !1 }
    ).enabled;
    return a.Z.can(o.Pl.ADMINISTRATOR, e) && n;
}
let d = l;
