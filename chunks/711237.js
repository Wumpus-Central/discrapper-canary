n.d(t, {
    J_: function () {
        return s;
    },
    R6: function () {
        return l;
    }
});
var i = n(818083),
    r = n(987338);
let l = (0, i.B)({
        kind: 'user',
        id: r.fL,
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
        id: r.nz,
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
            l.useExperiment({ location: n }, { autoTrackExposure: !1 }),
            l.trackExposure({ location: n });
    };
