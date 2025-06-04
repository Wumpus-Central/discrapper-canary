n.d(t, {
    $R: () => u,
    AG: () => l,
    I3: () => d,
    Md: () => o,
    PJ: () => a,
    X6: () => i.X,
    oC: () => r.oC,
    pf: () => s,
    rs: () => c
});
var r = n(128813),
    i = n(511495);
function o() {
    return (0, r.ZP)().ExperimentCacher;
}
function a(e) {
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
function d() {
    return (0, r.ZP)().NoteStore;
}
