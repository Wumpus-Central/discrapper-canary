n.d(t, {
    J_: () => s,
    R6: () => r
});
var i = n(818083),
    l = n(987338);
let r = (0, i.B)({
        kind: 'user',
        id: l.fL,
        label: 'Trigger Debugging User AA Experiment',
        defaultConfig: { inUse: !1 },
        treatments: [
            {
                id: 1,
                label: 'On',
                config: { inUse: !0 }
            }
        ]
    }),
    a = (0, i.B)({
        kind: 'guild',
        id: l.nz,
        label: 'Trigger Debugging Guild AA Experiment',
        defaultConfig: { inUse: !1 },
        treatments: [
            {
                id: 1,
                label: 'On',
                config: { inUse: !0 }
            }
        ]
    }),
    s = (e) => {
        let t = 'guild trigger debug',
            n = 'user trigger debug';
        a.useExperiment(
            {
                location: t,
                guildId: e
            },
            { autoTrackExposure: !1 }
        ),
            a.trackExposure({
                location: t,
                guildId: e
            }),
            r.useExperiment({ location: n }, { autoTrackExposure: !1 }),
            r.trackExposure({ location: n });
    };
