n.d(t, {
    Qw: () => c,
    ZP: () => f,
    mX: () => o,
}),
    n(415506);
var r = n(252117);
function i(e) {
    console.warn("[libdiscore] ".concat(e));
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
            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError)
                throw (
                    (s(!0),
                    i("Unsupported browser, skipping libdiscore, error: [".concat(e.name, "] ").concat(e.message)),
                    e)
                );
            if (((a = e), delete n.c[842321], 0 == --o)) throw a;
            i(
                "Failed to import libdiscore-wasm, retrying... ("
                    .concat(o, " attempts left), ")
                    .concat(a.name, ": ")
                    .concat(a.message),
            ),
                await (0, r.o2)(t);
        }
}
function o() {
    let e = u();
    if (null != e) return e;
    {
        let e = (async () => {
            await a(),
                l(
                    await (0, r.wE)({
                        createPromise: () => n.e("18639").then(n.bind(n, 718493)),
                        webpackId: 718493,
                    }),
                );
        })();
        return d(e), e;
    }
}
function s(e) {
    window._libdiscoreUnsupportedBrowser = e;
}
function l(e) {
    window._libdiscoreWasm = e;
}
function c() {
    if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
    throw Error("libdiscoreWasm is not initialized");
}
function u() {
    var e;
    return null != (e = window._libdiscoreInitPromise) ? e : null;
}
function d(e) {
    window._libdiscoreInitPromise = e;
}
let f = c;
