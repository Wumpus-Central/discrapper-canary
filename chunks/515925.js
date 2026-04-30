n.d(t, {
    G1: () => d,
    Ih: () => s,
    Oy: () => _,
    kk: () => o,
    t7: () => c,
    tR: () => l,
    uU: () => A,
    uc: () => u,
    xd: () => a.x,
    xy: () => E,
});
var i = n(31436),
    a = n(279234);
let r = null;
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
function _() {
    (0, i.Ay)().crash();
}
function E(e) {
    return (0, i.Ay)().generateLaunchSignature(e);
}
function u() {
    if (null != r) return r;
    try {
        return (r = new ((0, i.Ay)().FluxApi)());
    } catch {
        return null;
    }
}
function A() {
    return null;
}
