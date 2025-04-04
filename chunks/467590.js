n.d(t, {
    AG: () => m,
    PJ: () => p,
    eW: () => _,
    pf: () => h,
    rs: () => g,
    u2: () => f
}),
    n(411104);
var r = n(608787),
    i = n(259443);
let o = null,
    a = new i.Yd('libdiscore');
function s(e) {
    a.error(e);
}
function l(e) {
    a.warn(e);
}
function c(e) {
    a.info(e);
}
function u(e) {
    a.verbose(e);
}
function d(e) {
    a.trace(e);
}
function f() {
    return null !== o;
}
async function _() {
    if (null !== o) throw Error('libdiscore already initialized');
    (o = await (0, r.wE)({
        createPromise: () => n.e('18639').then(n.bind(n, 718493)),
        webpackId: 718493
    })).installLogCallback(s, l, c, u, d),
        await o.initLibdiscore();
}
function p(e) {
    var t;
    return null === o ? null : null != (t = o.BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}
function h(e) {
    null !== o && o.BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function m() {
    return 'libdiscore logs are part of the main app logs';
}
function g(e, t) {
    if (null === o) throw Error('libdiscore not initialized');
    return o.rustMultiply(e, t);
}
