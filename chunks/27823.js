let n = (e) => new Promise((r) => setTimeout(r, e)),
    o = () => Promise.resolve();
async function i(e) {
    let { createPromise: r, webpackId: i } = e,
        a = 500,
        s = 0;
    for (;;)
        try {
            return await r();
        } catch (e) {
            if ((console.log(e), i in t.c))
                throw (
                    (console.log(
                        "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
                    ),
                    e)
                );
            if (s >= 50) throw e;
            await n(a), await o(), (a = Math.min(5e3, 2 * a)), s++;
        }
}
function a(e) {
    console.warn(`[libdiscore] ${e}`);
}
async function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        o = null,
        i = e;
    for (;;)
        try {
            await Promise.resolve().then(t.bind(t, 5426));
            return;
        } catch (e) {
            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError) {
                var s;
                throw (
                    ((s = !0),
                    (window._libdiscoreUnsupportedBrowser = s),
                    a(`Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`),
                    e)
                );
            }
            if (((o = e), delete t.c[5426], 0 == --i)) throw o;
            a(`Failed to import libdiscore-wasm, retrying... (${i} attempts left), ${o.name}: ${o.message}`),
                await n(r);
        }
}
__OVERLAY__ ||
    (function () {
        let e = window._libdiscoreInitPromise ?? null;
        if (null != e) return e;
        {
            var r;
            let e = (async () => {
                var e;
                await s(),
                    (e = await i({ createPromise: () => t.e("14575").then(t.bind(t, 811059)), webpackId: 811059 })),
                    (window._libdiscoreWasm = e);
            })();
            return (r = e), (window._libdiscoreInitPromise = r), e;
        }
    })().catch((e) => {
        console.error("Failed to import libdiscore-wasm", e);
    });
