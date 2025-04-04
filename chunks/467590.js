n.d(t, {
    $R: () => b,
    AG: () => g,
    PJ: () => h,
    eW: () => p,
    pf: () => m,
    rs: () => E,
    u2: () => _
}),
    n(411104);
var r = n(608787),
    i = n(259443);
let o = null,
    a = null,
    s = new i.Yd('libdiscore');
function l(e) {
    s.error(e);
}
function c(e) {
    s.warn(e);
}
function u(e) {
    s.info(e);
}
function d(e) {
    s.verbose(e);
}
function f(e) {
    s.trace(e);
}
function _() {
    return null !== o;
}
function p() {
    if (null == a)
        return (a = (async () => {
            let e = await (0, r.wE)({
                createPromise: () => n.e('18639').then(n.bind(n, 718493)),
                webpackId: 718493
            });
            e.installLogCallback(l, c, u, d, f), await e.initLibdiscore(), (o = e);
        })());
    throw Error('initLibdiscore called multiple times');
}
function h(e) {
    var t;
    return null === o ? null : null != (t = o.BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}
function m(e) {
    null !== o && o.BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function g() {
    return 'libdiscore logs are part of the main app logs';
}
function E(e, t) {
    if (null === o) throw Error('libdiscore not initialized');
    return o.rustMultiply(e, t);
}
function b() {
    if (null === o) throw Error('libdiscore not initialized');
    o.crash();
}
