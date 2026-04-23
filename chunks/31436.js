n.d(t, { Ay: () => s, Bf: () => l, vZ: () => o });
var r = n(841117);
function i(e) {
    console.warn(`[libdiscore] ${e}`);
}
async function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        a = null,
        l = e;
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
                    i(`Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`),
                    e)
                );
            }
            if (((a = e), delete n.c[5426], 0 == --l)) throw a;
            i(`Failed to import libdiscore-wasm, retrying... (${l} attempts left), ${a.name}: ${a.message}`),
                await (0, r.eU)(t);
        }
}
function l() {
    let e = window._libdiscoreInitPromise ?? null;
    if (null != e) return e;
    {
        var t;
        let e = (async () => {
            var e;
            await a(),
                (e = await (0, r.sq)({ createPromise: () => n.e("14575").then(n.bind(n, 811059)), webpackId: 811059 })),
                (window._libdiscoreWasm = e);
        })();
        return (t = e), (window._libdiscoreInitPromise = t), e;
    }
}
function o() {
    if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
    throw Error("libdiscoreWasm is not initialized");
}
let s = o;
