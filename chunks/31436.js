"use strict";
n.d(t, { Ay: () => l, Bf: () => a, vZ: () => o });
var i = n(841117);
function r(e) {
    console.warn(`[libdiscore] ${e}`);
}
async function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        s = null,
        a = e;
    for (;;)
        try {
            await Promise.resolve().then(n.bind(n, 5426));
            return;
        } catch (e) {
            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError) {
                var o;
                throw (
                    ((o = !0),
                    (window._libdiscoreUnsupportedBrowser = o),
                    r(`Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`),
                    e)
                );
            }
            if (((s = e), delete n.c[5426], 0 == --a)) throw s;
            r(`Failed to import libdiscore-wasm, retrying... (${a} attempts left), ${s.name}: ${s.message}`),
                await (0, i.eU)(t);
        }
}
function a() {
    let e = window._libdiscoreInitPromise ?? null;
    if (null != e) return e;
    {
        var t;
        let e = (async () => {
            var e;
            await s(),
                (e = await (0, i.sq)({ createPromise: () => n.e("14575").then(n.bind(n, 811059)), webpackId: 811059 })),
                (window._libdiscoreWasm = e);
        })();
        return (t = e), (window._libdiscoreInitPromise = t), e;
    }
}
function o() {
    if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
    throw Error("libdiscoreWasm is not initialized");
}
let l = o;
