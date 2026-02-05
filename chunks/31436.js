"use strict";
n.d(t, { Ay: () => _, Bf: () => s, vZ: () => u });
var r = n(841117);
function i(e) {
    console.warn(`[libdiscore] ${e}`);
}
async function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        a = null,
        s = e;
    for (;;)
        try {
            await Promise.resolve().then(n.bind(n, 5426));
            return;
        } catch (e) {
            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError)
                throw (o(!0), i(`Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`), e);
            if (((a = e), delete n.c[5426], 0 == --s)) throw a;
            i(`Failed to import libdiscore-wasm, retrying... (${s} attempts left), ${a.name}: ${a.message}`),
                await (0, r.eU)(t);
        }
}
function s() {
    let e = c();
    if (null != e) return e;
    {
        let e = (async () => {
            await a(),
                l(await (0, r.sq)({ createPromise: () => n.e("14575").then(n.bind(n, 811059)), webpackId: 811059 }));
        })();
        return d(e), e;
    }
}
function o(e) {
    window._libdiscoreUnsupportedBrowser = e;
}
function l(e) {
    window._libdiscoreWasm = e;
}
function u() {
    if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
    throw Error("libdiscoreWasm is not initialized");
}
function c() {
    return window._libdiscoreInitPromise ?? null;
}
function d(e) {
    window._libdiscoreInitPromise = e;
}
let _ = u;
