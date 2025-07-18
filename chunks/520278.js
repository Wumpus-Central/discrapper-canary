r.d(t, { J: () => n });
function n(e, t, r, n) {
    let { enabled: s } = e.useExperiment({ location: n }, { autoTrackExposure: !1 });
    return !!r.config.features.includes(t) && (e.trackExposure({ location: n }), s);
}
