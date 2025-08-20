function r(e, t, n, r) {
    let { enabled: i } = e.useExperiment({ location: r }, { autoTrackExposure: !1 });
    return !!n.config.features.includes(t) && (e.trackExposure({ location: r }), i);
}
n.d(t, { J: () => r });
