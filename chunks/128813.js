n.d(t, {
    Qw: () => u,
    ZP: () => f,
    mX: () => o,
    oC: () => l
}),
    n(415506);
var r = n(252117);
function i(e) {
    console.warn('[libdiscore] '.concat(e));
}
async function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        a = null,
        o = e;
    for (;;)
        try {
            await Promise.resolve().then(n.bind(n, 842321));
            return;
        } catch (e) {
            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError) throw (s(!0), i('Unsupported browser, skipping libdiscore, error: ['.concat(e.name, '] ').concat(e.message)), e);
            if (((a = e), delete n.c[842321], 0 == --o)) throw a;
            i('Failed to import libdiscore-wasm, retrying... ('.concat(o, ' attempts left), ').concat(a.name, ': ').concat(a.message)), await (0, r.o2)(t);
        }
}
function o() {
    let e = d();
    if (null != e) return e;
    {
        let e = (async () => {
            await a(),
                c(
                    await (0, r.wE)({
                        createPromise: () => n.e('18639').then(n.bind(n, 718493)),
                        webpackId: 718493
                    })
                );
        })();
        return _(e), e;
    }
}
function s(e) {
    window._libdiscoreUnsupportedBrowser = e;
}
function l() {
    return !0 === window._libdiscoreUnsupportedBrowser;
}
function c(e) {
    window._libdiscoreWasm = e;
}
function u() {
    if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
    throw Error('libdiscoreWasm is not initialized');
}
function d() {
    var e;
    return null != (e = window._libdiscoreInitPromise) ? e : null;
}
function _(e) {
    window._libdiscoreInitPromise = e;
}
let f = u;
