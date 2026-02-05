"use strict";
n.d(t, {
    G1: () => u,
    Ih: () => s,
    Oy: () => d,
    kk: () => l,
    t7: () => c,
    tR: () => o,
    uU: () => p,
    uc: () => f,
    xd: () => i.x,
    xy: () => _,
});
var r = n(31436),
    i = n(279234);
let a = null;
function s() {
    return (0, r.Ay)().ExperimentCacher;
}
function o(e) {
    return (0, r.Ay)().BlockedDomainsStore.isBlockedDomain(e) ?? null;
}
function l(e) {
    (0, r.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function u() {
    return "libdiscore logs are part of the main app logs";
}
function c(e, t) {
    return (0, r.Ay)().rustMultiply(e, t);
}
function d() {
    (0, r.Ay)().crash();
}
function _(e) {
    return (0, r.Ay)().generateLaunchSignature(e);
}
function f() {
    if (null != a) return a;
    try {
        return (a = new ((0, r.Ay)().FluxApi)());
    } catch {
        return null;
    }
}
function p() {
    return null;
}
