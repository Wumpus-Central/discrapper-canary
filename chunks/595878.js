n.d(t, {
    AK: () => s,
    cG: () => r,
    dR: () => a,
    mK: () => o,
    oY: () => l
});
var i = n(290031);
function r(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = i.OW.useExperiment({ location: t }, { autoTrackExposure: !1 }),
        { enabled: r } = i.Hd.useExperiment({ location: t });
    return n || r;
}
function a(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = i.OW.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }),
        { enabled: r } = i.Hd.getCurrentConfig({ location: t });
    return n || r;
}
function s(e) {
    let { location: t } = e,
        { enabled: n } = i.sg.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return n;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = i.fR.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return n;
}
function l(e) {
    let { location: t } = e,
        { enabled: n } = i.Hd.useExperiment({ location: t });
    return n;
}
