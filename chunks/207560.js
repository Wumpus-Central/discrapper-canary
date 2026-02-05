"use strict";
n.d(t, { SJ: () => _, TR: () => d, To: () => o, aX: () => s, d6: () => a, fk: () => c, u0: () => u, yv: () => l });
var r = n(311907),
    i = n(81428);
function a(e) {
    return i.A.isFeatureAgeGated(e);
}
function s(e) {
    return (0, r.bG)([i.A], () => i.A.isFeatureAgeGated(e));
}
function o(e) {
    return i.A.isSettingTeenByDefault(e);
}
function l(e) {
    return (0, r.bG)([i.A], () => i.A.isSettingTeenByDefault(e));
}
function u() {
    return i.A.hasAgeGatedFeatures();
}
function c() {
    return (0, r.bG)([i.A], () => i.A.hasAgeGatedFeatures());
}
function d() {
    return i.A.hasTeenDefaults();
}
function _() {
    return (0, r.bG)([i.A], () => i.A.hasTeenDefaults());
}
