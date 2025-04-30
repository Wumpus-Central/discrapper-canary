n.d(t, { Z: () => l });
var r = n(378364);
function i() {
    return o() && r.Z.experiment.getCurrentConfig({ location: 'holiday_events_is_eligible' }, { autoTrackExposure: !1 }).enabled;
}
function a() {
    let { enabled: e } = r.Z.experiment.useExperiment({ location: 'holiday_events_use_eligible' }, { autoTrackExposure: !1 });
    return o() && e;
}
function o() {
    let e = Date.now();
    return e >= r.Z.startTimeMs && e <= r.Z.endTimeMs;
}
function s() {
    return i() && r.Z.soundpack ? r.Z.soundpack : null;
}
let l = {
    subscribe: function (e) {
        return r.Z.experiment.subscribe({ location: 'holiday_events_subscribe' }, e);
    },
    isEligible: i,
    useHolidaySoundpack: function () {
        return a() && r.Z.soundpack && null != r.Z.soundpackLabel
            ? {
                  soundpack: r.Z.soundpack,
                  soundpackLabel: r.Z.soundpackLabel
              }
            : null;
    },
    useIsEligible: a,
    getAppSpinnerSources: function () {
        return o() ? r.Z.appSpinnerSources : null;
    },
    getLoadingTips: function () {
        var e;
        return o() ? (null == (e = r.Z.getLoadingTips) ? void 0 : e.call(r.Z)) : null;
    },
    getHolidaySoundpack: s
};
