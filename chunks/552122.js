"use strict";
n.d(t, { A: () => l });
var r = n(223567);
function i() {
    let e = r.A.getIsExperimentEligible();
    return a() && e;
}
function s() {
    let e = r.A.useIsExperimentEligible();
    return a() && e;
}
function a() {
    let e = Date.now();
    return e >= r.A.startTimeMs && e <= r.A.endTimeMs;
}
function o() {
    return i() && r.A.soundpack ? r.A.soundpack : null;
}
let l = {
    isEligible: i,
    useHolidaySoundpack: function () {
        return s() && r.A.soundpack && null != r.A.soundpackLabel
            ? { soundpack: r.A.soundpack, soundpackLabel: r.A.soundpackLabel }
            : null;
    },
    useIsEligible: s,
    getAppSpinnerSources: function () {
        return a() ? r.A.appSpinnerSources : null;
    },
    getLoadingTips: function () {
        return a() ? r.A.getLoadingTips?.() : null;
    },
    getHolidaySoundpack: o,
};
