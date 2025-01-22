var i = r(378364);
function a() {
    return s() && i.Z.experiment.getCurrentConfig({ location: 'holiday_events_is_eligible' }, { autoTrackExposure: !1 }).enabled;
}
function o() {
    let { enabled: e } = i.Z.experiment.useExperiment({ location: 'holiday_events_use_eligible' }, { autoTrackExposure: !1 });
    return s() && e;
}
function s() {
    let e = Date.now();
    return e >= i.Z.startTimeMs && e <= i.Z.endTimeMs;
}
function l() {
    var e;
    return s() ? (null === (e = i.Z.getLoadingTips) || void 0 === e ? void 0 : e.call(i.Z)) : null;
}
function u() {
    return s() ? i.Z.appSpinnerSources : null;
}
function c(e) {
    return i.Z.experiment.subscribe({ location: 'holiday_events_subscribe' }, e);
}
function d() {
    return a() && i.Z.soundpack ? i.Z.soundpack : null;
}
function f() {
    return o() && i.Z.soundpack && null != i.Z.soundpackLabel
        ? {
              soundpack: i.Z.soundpack,
              soundpackLabel: i.Z.soundpackLabel
          }
        : null;
}
n.Z = {
    subscribe: c,
    isEligible: a,
    useHolidaySoundpack: f,
    useIsEligible: o,
    getAppSpinnerSources: u,
    getLoadingTips: l,
    getHolidaySoundpack: d
};
