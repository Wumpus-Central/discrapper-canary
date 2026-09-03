n.d(t, { Ay: () => o, Bf: () => s, vZ: () => l });
var i = n(841117);
function r(e) {
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
            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError) {
                var l;
                throw (
                    ((l = !0),
                    (window._libdiscoreUnsupportedBrowser = l),
                    r(`Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`),
                    e)
                );
            }
            if (((a = e), delete n.c[5426], 0 == --s)) throw a;
            r(`Failed to import libdiscore-wasm, retrying... (${s} attempts left), ${a.name}: ${a.message}`),
                await (0, i.eU)(t);
        }
}
function s() {
    let e = window._libdiscoreInitPromise ?? null;
    if (null != e) return e;
    {
        var t;
        let e = (async () => {
            var e;
            await a(),
                (e = await (0, i.sq)({
                    createPromise: () => n.e("914575").then(n.bind(n, 811059)),
                    webpackId: 811059,
                })),
                (window._libdiscoreWasm = e);
        })();
        return (t = e), (window._libdiscoreInitPromise = t), e;
    }
}
function l() {
    if (void 0 !== window._libdiscoreWasm) return window._libdiscoreWasm;
    throw Error("libdiscoreWasm is not initialized");
}
let o = l;
