n.d(t, { J: () => r });
function r(e, t, n, r) {
    let { enabled: o } = e.useExperiment({ location: r }, { autoTrackExposure: !1 });
    return !!n.config.features.includes(t) && (e.trackExposure({ location: r }), o);
}
