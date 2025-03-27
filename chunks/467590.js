n.d(t, {
    AG: () => h,
    PJ: () => _,
    eW: () => f,
    pf: () => p,
    rs: () => m,
    u2: () => d
}),
    n(411104);
var r = n(259443);
let i = null,
    o = new r.Yd('libdiscore');
function a(e) {
    o.error(e);
}
function s(e) {
    o.warn(e);
}
function l(e) {
    o.info(e);
}
function c(e) {
    o.verbose(e);
}
function u(e) {
    o.trace(e);
}
function d() {
    return null !== i;
}
function f() {
    if (null !== i) throw Error('libdiscore already initialized');
    return n
        .e('63614')
        .then(n.bind(n, 718493))
        .then(async (e) => {
            e.installLogCallback(a, s, l, c, u), await e.initLibdiscore(), (i = e);
        })
        .catch((e) => {
            throw e;
        });
}
function _(e) {
    var t;
    return null === i ? null : null !== (t = i.BlockedDomainsStore.isBlockedDomain(e)) && void 0 !== t ? t : null;
}
function p() {
    null !== i && i.BlockedDomainsStore.startFetchingBlockedDomains();
}
function h() {
    return 'libdiscore logs are part of the main app logs';
}
function m(e, t) {
    if (null === i) throw Error('libdiscore not initialized');
    return i.rustMultiply(e, t);
}
