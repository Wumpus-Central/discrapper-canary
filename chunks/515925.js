n.d(t, {
    G1: () => o,
    Ih: () => s,
    Oy: () => d,
    kk: () => l,
    t7: () => E,
    tR: () => _,
    uU: () => I,
    uc: () => u,
    xd: () => r.x,
    xy: () => c,
});
var i = n(31436),
    r = n(279234);
let a = null;
function s() {
    return (0, i.Ay)().ExperimentCacher;
}
function _(e) {
    return (0, i.Ay)().BlockedDomainsStore.isBlockedDomain(e) ?? null;
}
function l(e) {
    (0, i.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function o() {
    return "libdiscore logs are part of the main app logs";
}
function E(e, t) {
    return (0, i.Ay)().rustMultiply(e, t);
}
function d() {
    (0, i.Ay)().crash();
}
function c(e) {
    return (0, i.Ay)().generateLaunchSignature(e);
}
function u() {
    if (null != a) return a;
    try {
        return (a = new ((0, i.Ay)().FluxApi)());
    } catch {
        return null;
    }
}
function I() {
    return null;
}
