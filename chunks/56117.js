n.d(t, {
    Ec: () => i,
    H: () => o,
    uK: () => l
});
var r = n(670081);
let l = (0, n(818083).B)({
        id: '2025-05_external_dialog_quests',
        kind: 'user',
        label: 'Quests External Dialog',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: { enabled: !1 }
            },
            {
                id: 1,
                label: 'Enabled',
                config: { enabled: !0 }
            }
        ]
    }),
    o = () => {
        let { enabled: e } = l.useExperiment({ location: 'Quest External Dialog' }, { autoTrackExposure: !1 });
        return e;
    },
    i = (e) => e.config.features.includes(r.S.EXTERNAL_DIALOG);
