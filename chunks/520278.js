n.d(t, { J: () => r });
function r(e, t, n, r) {
    let { enabled: s } = e.useExperiment({ location: r }, { autoTrackExposure: !1 });
    return !!n.config.features.includes(t) && (e.trackExposure({ location: r }), s);
}
