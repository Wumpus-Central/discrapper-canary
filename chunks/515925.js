"use strict";
n.d(t, {
    G1: () => d,
    Ih: () => s,
    Oy: () => u,
    kk: () => o,
    t7: () => c,
    tR: () => l,
    uU: () => A,
    uc: () => E,
    xd: () => r.x,
    xy: () => _,
});
var i = n(31436),
    r = n(279234);
let a = null;
function s() {
    return (0, i.Ay)().ExperimentCacher;
}
function l(e) {
    return (0, i.Ay)().BlockedDomainsStore.isBlockedDomain(e) ?? null;
}
function o(e) {
    (0, i.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function d() {
    return "libdiscore logs are part of the main app logs";
}
function c(e, t) {
    return (0, i.Ay)().rustMultiply(e, t);
}
function u() {
    (0, i.Ay)().crash();
}
function _(e) {
    return (0, i.Ay)().generateLaunchSignature(e);
}
function E() {
    if (null != a) return a;
    try {
        return (a = new ((0, i.Ay)().FluxApi)());
    } catch {
        return null;
    }
}
function A() {
    return null;
}
