t.d(n, { J: () => r });
function r(e, n, t, r) {
    let { enabled: o } = e.useExperiment({ location: r }, { autoTrackExposure: !1 });
    return !!t.config.features.includes(n) && (e.trackExposure({ location: r }), o);
}
