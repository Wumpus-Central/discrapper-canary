n.d(t, {
    $R: () => y,
    AG: () => E,
    PJ: () => m,
    eW: () => h,
    pf: () => g,
    rs: () => b,
    u2: () => f
}),
    n(415506);
var r = n(259443);
let i = null,
    o = null,
    a = new r.Yd('libdiscore');
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
    return null !== i;
}
function _(e) {
    return new Promise((t) => setTimeout(t, e));
}
async function p() {
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
            a.warn('Failed to import libdiscore-wasm, retrying... ('.concat(i, ' attempts left), ').concat(r.name, ': ').concat(r.message)), await _(t);
        }
}
function h() {
    if (null == o)
        return (o = (async () => {
            await p();
            let e = await n.e('63614').then(n.bind(n, 718493));
            e.installLogCallback(s, l, c, u, d), await e.initLibdiscore(), (i = e);
        })());
    throw Error('initLibdiscore called multiple times');
}
function m(e) {
    var t;
    return null === i ? null : null != (t = i.BlockedDomainsStore.isBlockedDomain(e)) ? t : null;
}
function g(e) {
    null !== i && i.BlockedDomainsStore.startFetchingBlockedDomains(e);
}
function E() {
    return 'libdiscore logs are part of the main app logs';
}
function b(e, t) {
    if (null === i) throw Error('libdiscore not initialized');
    return i.rustMultiply(e, t);
}
function y() {
    if (null === i) throw Error('libdiscore not initialized');
    i.crash();
}
