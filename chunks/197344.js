n.d(t, { Z: () => l });
var i = n(378364);
function r() {
    return s() && i.Z.experiment.getCurrentConfig({ location: 'holiday_events_is_eligible' }, { autoTrackExposure: !1 }).enabled;
}
function a() {
    let { enabled: e } = i.Z.experiment.useExperiment({ location: 'holiday_events_use_eligible' }, { autoTrackExposure: !1 });
    return s() && e;
}
function s() {
    let e = Date.now();
    return e >= i.Z.startTimeMs && e <= i.Z.endTimeMs;
}
function o() {
    return r() && i.Z.soundpack ? i.Z.soundpack : null;
}
let l = {
    subscribe: function (e) {
        return i.Z.experiment.subscribe({ location: 'holiday_events_subscribe' }, e);
    },
    isEligible: r,
    useHolidaySoundpack: function () {
        return a() && i.Z.soundpack && null != i.Z.soundpackLabel
            ? {
                  soundpack: i.Z.soundpack,
                  soundpackLabel: i.Z.soundpackLabel
              }
            : null;
    },
    useIsEligible: a,
    getAppSpinnerSources: function () {
        return s() ? i.Z.appSpinnerSources : null;
    },
    getLoadingTips: function () {
        var e;
        return s() ? (null === (e = i.Z.getLoadingTips) || void 0 === e ? void 0 : e.call(i.Z)) : null;
    },
    getHolidaySoundpack: o
};
