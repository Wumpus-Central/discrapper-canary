n.d(t, {
    B2: () => i,
    dz: () => r,
});
let l = (0, n(600975).C)({
    kind: "user",
    id: "2025-05_flamingo_prefetch",
    label: "Flamingo Prefetch (Download Experiments)",
    defaultConfig: {
        isPrefetchEnabled: !1,
        isDownloadIconEnabled: !1,
    },
    treatments: [
        {
            id: 1,
            label: "Prefetch (Download on Popout)",
            config: {
                isPrefetchEnabled: !0,
                isDownloadIconEnabled: !1,
            },
        },
        {
            id: 2,
            label: "Download Icon",
            config: {
                isPrefetchEnabled: !1,
                isDownloadIconEnabled: !0,
            },
        },
    ],
});

function r(e) {
    let { location: t, autoTrackExposure: n } = e,
        { isPrefetchEnabled: r } = l.useExperiment(
            {
                location: t,
            },
            {
                autoTrackExposure: n,
                disable: __OVERLAY__,
            },
        );
    return r;
}

function i(e) {
    let { location: t, autoTrackExposure: n, disable: r } = e,
        { isDownloadIconEnabled: i } = l.useExperiment(
            {
                location: t,
            },
            {
                autoTrackExposure: n,
                disable: __OVERLAY__ || r,
            },
        );
    return i;
}
