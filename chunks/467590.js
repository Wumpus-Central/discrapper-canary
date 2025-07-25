n.d(t, {
    $R: () => u,
    AG: () => l,
    Md: () => a,
    PJ: () => o,
    PW: () => f,
    Ub: () => d,
    X6: () => i.X,
    oC: () => r.oC,
    pf: () => s,
    rs: () => c
});
var r = n(128813),
    i = n(511495);
function a() {
    return (0, r.ZP)().ExperimentCacher;
}
function o(e) {
    var t;
    return null != (t = (0, r.ZP)().BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}
function s(e) {
    (0, r.ZP)().BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function l() {
    return 'libdiscore logs are part of the main app logs';
}
function c(e, t) {
    return (0, r.ZP)().rustMultiply(e, t);
}
function u() {
    (0, r.ZP)().crash();
}
function d(e) {
    return (0, r.ZP)().generateLaunchSignature(e);
}
function f() {
    return null;
}
