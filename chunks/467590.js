n.d(t, {
    $R: () => O,
    AG: () => b,
    PJ: () => g,
    eW: () => m,
    pf: () => E,
    rs: () => y,
    u2: () => _
}),
    n(415506);
var r = n(608787),
    i = n(259443);
let a = null,
    o = null,
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
    return null !== a;
}
function p(e) {
    return new Promise((t) => setTimeout(t, e));
}
async function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        r = null,
        i = e;
    for (;;)
        try {
            await Promise.resolve().then(n.bind(n, 842321));
            return;
        } catch (e) {
            if (((r = e), delete n.c[842321], 0 == --i)) throw r;
            s.warn('Failed to import libdiscore-wasm, retrying... ('.concat(i, ' attempts left), ').concat(r.name, ': ').concat(r.message)), await p(t);
        }
}
function m() {
    if (null == o)
        return (o = (async () => {
            await h();
            let e = await (0, r.wE)({
                createPromise: () => n.e('18639').then(n.bind(n, 718493)),
                webpackId: 718493
            });
            e.installLogCallback(l, c, u, d, f), await e.initLibdiscore(), (a = e);
        })());
    throw Error('initLibdiscore called multiple times');
}
function g(e) {
    var t;
    return null === a ? null : null != (t = a.BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}
function E(e) {
    null !== a && a.BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function b() {
    return 'libdiscore logs are part of the main app logs';
}
function y(e, t) {
    if (null === a) throw Error('libdiscore not initialized');
    return a.rustMultiply(e, t);
}
function O() {
    if (null === a) throw Error('libdiscore not initialized');
    a.crash();
}
