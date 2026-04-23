"use strict";
n.d(t, { SJ: () => u, To: () => o, aX: () => a, d6: () => s, fk: () => _, u0: () => d, yv: () => l });
var i = n(17928),
    r = n(923495);
function s(e) {
    return r.A.isFeatureAgeGated(e);
}
function a(e) {
    return (0, i.bG)([r.A], () => r.A.isFeatureAgeGated(e));
}
function o(e) {
    return r.A.isSettingTeenByDefault(e);
}
function l(e) {
    return (0, i.bG)([r.A], () => r.A.isSettingTeenByDefault(e));
}
function d() {
    return r.A.hasAgeGatedFeatures();
}
function _() {
    return (0, i.bG)([r.A], () => r.A.hasAgeGatedFeatures());
}
function u() {
    return (0, i.bG)([r.A], () => r.A.hasTeenDefaults());
}
