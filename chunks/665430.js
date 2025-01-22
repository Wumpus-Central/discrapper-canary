r.d(n, {
    pF: function () {
        return s;
    }
});
var i = r(818083);
r(528264), r(46140);
let a = (0, i.B)({
        id: '2024-07_quests_mobile_ga',
        kind: 'user',
        label: 'Quests Mobile GA',
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
    o = (e) => {
        let { location: n } = e;
        return a.getCurrentConfig({ location: n }, { autoTrackExposure: !1 }).enabled;
    },
    s = (e) => {
        let { location: n } = e;
        return a.useExperiment({ location: n }, { autoTrackExposure: !1 }).enabled;
    };
