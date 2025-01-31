n.d(t, { Z: () => r });
let i = (0, n(818083).B)({
        kind: 'user',
        id: '2024-08_soundboard_refresh',
        label: 'Soundboard UI Refresh',
        defaultConfig: { refreshEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable the updated soundboard picker UI',
                config: { refreshEnabled: !0 }
            }
        ]
    }),
    r = (e) => {
        let { location: t, autoTrackExposure: n = !0, trackExposureOptions: r = {} } = e;
        return i.useExperiment(
            { location: t },
            {
                autoTrackExposure: n,
                trackExposureOptions: r
            }
        );
    };
