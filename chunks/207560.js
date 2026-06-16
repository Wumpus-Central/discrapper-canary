"use strict";
n.d(t, { SJ: () => d, To: () => o, aX: () => a, d6: () => s, fk: () => c, u0: () => u, yv: () => l });
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
function u() {
    return r.A.hasAgeGatedFeatures();
}
function c() {
    return (0, i.bG)([r.A], () => r.A.hasAgeGatedFeatures());
}
function d() {
    return (0, i.bG)([r.A], () => r.A.hasTeenDefaults());
}
