n.d(t, {
    $R: () => c,
    AG: () => s,
    PJ: () => o,
    X6: () => i.X,
    oC: () => r.oC,
    pf: () => a,
    rs: () => l
});
var r = n(128813),
    i = n(511495);
function o(e) {
    var t;
    return null != (t = (0, r.ZP)().BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}
function a(e) {
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
