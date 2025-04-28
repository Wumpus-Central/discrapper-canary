n.d(t, {
    $R: () => c,
    AG: () => s,
    PJ: () => a,
    X6: () => i.X,
    oC: () => r.oC,
    pf: () => o,
    rs: () => l
});
var r = n(128813),
    i = n(511495);
function a(e) {
    var t;
    return null != (t = (0, r.ZP)().BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}
function o(e) {
    (0, r.ZP)().BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function s() {
    return 'libdiscore logs are part of the main app logs';
}
function l(e, t) {
    return (0, r.ZP)().rustMultiply(e, t);
}
function c() {
    (0, r.ZP)().crash();
}
