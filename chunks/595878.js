n.d(t, {
    cG: () => i,
    dR: () => o,
    oY: () => a
});
var r = n(290031);
function i(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = r.O.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        { enabled: i } = r.H.useExperiment({ location: t });
    return n || i;
}
function o(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = r.O.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }),
        { enabled: i } = r.H.getCurrentConfig({ location: t });
    return n || i;
}
function a(e) {
    let { location: t } = e,
        { enabled: n } = r.H.useExperiment({ location: t });
    return n;
}
