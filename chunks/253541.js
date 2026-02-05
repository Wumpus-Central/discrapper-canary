n.d(t, { B2: () => a, dz: () => l });
let i = (0, n(600975).C)({
    kind: "user",
    id: "2025-05_flamingo_prefetch",
    label: "Flamingo Prefetch (Download Experiments)",
    defaultConfig: { isPrefetchEnabled: !1, isDownloadIconEnabled: !1 },
    treatments: [
        { id: 1, label: "Prefetch (Download on Popout)", config: { isPrefetchEnabled: !0, isDownloadIconEnabled: !1 } },
        { id: 2, label: "Download Icon", config: { isPrefetchEnabled: !1, isDownloadIconEnabled: !0 } },
    ],
});
function l(e) {
    let { location: t, autoTrackExposure: n } = e,
        { isPrefetchEnabled: l } = i.useExperiment({ location: t }, { autoTrackExposure: n, disable: __OVERLAY__ });
    return l;
}
function a(e) {
    let { location: t, autoTrackExposure: n, disable: l } = e,
        { isDownloadIconEnabled: a } = i.useExperiment(
            { location: t },
            { autoTrackExposure: n, disable: __OVERLAY__ || l },
        );
    return a;
}
