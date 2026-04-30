"use strict";
n.d(t, {
    G1: () => u,
    Ih: () => a,
    Oy: () => d,
    kk: () => l,
    t7: () => c,
    tR: () => o,
    uU: () => h,
    uc: () => f,
    xd: () => r.x,
    xy: () => _,
});
var i = n(31436),
    r = n(279234);
let s = null;
function a() {
    return (0, i.Ay)().ExperimentCacher;
}
function o(e) {
    return (0, i.Ay)().BlockedDomainsStore.isBlockedDomain(e) ?? null;
}
function l(e) {
    (0, i.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function u() {
    return "libdiscore logs are part of the main app logs";
}
function c(e, t) {
    return (0, i.Ay)().rustMultiply(e, t);
}
function d() {
    (0, i.Ay)().crash();
}
function _(e) {
    return (0, i.Ay)().generateLaunchSignature(e);
}
function f() {
    if (null != s) return s;
    try {
        return (s = new ((0, i.Ay)().FluxApi)());
    } catch {
        return null;
    }
}
function h() {
    return null;
}
