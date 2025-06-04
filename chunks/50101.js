n.d(t, {
    Ek: () => l,
    ZP: () => u,
    gV: () => c
});
var r = n(818083),
    i = n(981631),
    a = n(987338),
    o = n(647086);
let s = (0, r.B)({
    kind: 'guild',
    id: '2025-02_skill_trees',
    label: 'Skill Trees',
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function l(e, t) {
    let n = null != e && e !== o._ && e !== i.I_8;
    return s.useExperiment(
        {
            guildId: e,
            location: t
        },
        {
            disable: !n,
            autoTrackExposure: !1
        }
    ).enabled;
}
function c(e, t) {
    return (
        null != e &&
        e !== o._ &&
        e !== i.I_8 &&
        s.getCurrentConfig(
            {
                guildId: e,
                location: t
            },
            { autoTrackExposure: !1 }
        ).enabled
    );
}
let u = s;
