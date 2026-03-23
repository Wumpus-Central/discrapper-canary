"use strict";
n.d(t, { SJ: () => d, To: () => o, aX: () => a, d6: () => s, fk: () => c, u0: () => u, yv: () => l });
var r = n(311907),
    i = n(81428);
function s(e) {
    return i.A.isFeatureAgeGated(e);
}
function a(e) {
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
    return (0, r.bG)([i.A], () => i.A.hasTeenDefaults());
}
