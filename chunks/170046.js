n.d(t, { N: () => i });
let r = (0, n(818083).B)({
        kind: 'user',
        id: '2025-03_nameplate_new_release',
        label: 'Nameplate New Release Experiment',
        defaultConfig: { showNewReleaseBadge: !1 },
        treatments: [
            {
                id: 1,
                label: 'Show new release badge',
                config: { showNewReleaseBadge: !0 }
            }
        ]
    }),
    i = (e) => {
        let { showNewReleaseBadge: t } = r.useExperiment({ location: e }, { autoTrackExposure: !1 });
        return t;
    };
