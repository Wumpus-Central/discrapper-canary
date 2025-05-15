n.d(t, {
    cG: () => i,
    dR: () => o,
    oY: () => a
});
var r = n(290031);
function i(e) {
    let { location: t } = e,
        { enabled: n } = r.H.useExperiment({ location: t });
    return n;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = r.H.getCurrentConfig({ location: t });
    return n;
}
function a(e) {
    let { location: t } = e,
        { enabled: n } = r.H.useExperiment({ location: t });
    return n;
}
