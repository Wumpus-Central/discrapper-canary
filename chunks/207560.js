"use strict";
n.d(t, { SJ: () => u, To: () => l, aX: () => s, d6: () => a, fk: () => c, u0: () => d, yv: () => o });
var i = n(17928),
    r = n(923495);
function a(e) {
    return r.A.isFeatureAgeGated(e);
}
function s(e) {
    return (0, i.bG)([r.A], () => r.A.isFeatureAgeGated(e));
}
function l(e) {
    return r.A.isSettingTeenByDefault(e);
}
function o(e) {
    return (0, i.bG)([r.A], () => r.A.isSettingTeenByDefault(e));
}
function d() {
    return r.A.hasAgeGatedFeatures();
}
function c() {
    return (0, i.bG)([r.A], () => r.A.hasAgeGatedFeatures());
}
function u() {
    return (0, i.bG)([r.A], () => r.A.hasTeenDefaults());
}
