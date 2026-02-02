n.d(t, {
    G1: () => c,
    Ih: () => o,
    Oy: () => d,
    kk: () => l,
    t7: () => u,
    tR: () => s,
    uU: () => _,
    uc: () => p,
    xd: () => i.x,
    xy: () => f,
});
var r = n(31436),
    i = n(279234);
let a = null;

function o() {
    return (0, r.Ay)().ExperimentCacher;
}

function s(e) {
    var t;
    return null != (t = (0, r.Ay)().BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}

function l(e) {
    (0, r.Ay)().BlockedDomainsStore.startFetchingBlockedDomains(e);
}

function c() {
    return "libdiscore logs are part of the main app logs";
}

function u(e, t) {
    return (0, r.Ay)().rustMultiply(e, t);
}

function d() {
    (0, r.Ay)().crash();
}

function f(e) {
    return (0, r.Ay)().generateLaunchSignature(e);
}

function p() {
    if (null != a) return a;
    try {
        return (a = new ((0, r.Ay)().FluxApi)());
    } catch (e) {
        return null;
    }
}

function _() {
    return null;
}
