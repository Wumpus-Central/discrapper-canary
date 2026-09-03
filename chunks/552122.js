n.d(t, { A: () => l });
var i = n(417146);
function r() {
    let e = i.A.getIsExperimentEligible();
    return s() && e;
}
function a() {
    let e = i.A.useIsExperimentEligible();
    return s() && e;
}
function s() {
    let e = Date.now();
    return e >= i.A.startTimeMs && e <= i.A.endTimeMs;
}
let l = {
    isEligible: r,
    useHolidaySoundpack: function () {
        return a() && null != i.A.soundpack && null != i.A.soundpackLabel
            ? { soundpack: i.A.soundpack, soundpackLabel: i.A.soundpackLabel }
            : null;
    },
    useIsEligible: a,
    getAppSpinnerSources: function () {
        return s() ? i.A.appSpinnerSources : null;
    },
    getLoadingTips: function () {
        return s() ? i.A.getLoadingTips?.() : null;
    },
    getHolidaySoundpack: function () {
        return r() && null != i.A.soundpack ? i.A.soundpack : null;
    },
};
