n.d(t, {
    J_: () => a,
    R6: () => l
});
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
        kind: 'user',
        id: i.fL,
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
    o = (0, r.B)({
        kind: 'guild',
        id: i.nz,
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
    a = (e) => {
        let t = 'guild trigger debug',
            n = 'user trigger debug';
        o.useExperiment(
            {
                location: t,
                guildId: e
            },
            { autoTrackExposure: !1 }
        ),
            o.trackExposure({
                location: t,
                guildId: e
            }),
            l.useExperiment({ location: n }, { autoTrackExposure: !1 }),
            l.trackExposure({ location: n });
    };
