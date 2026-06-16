let n = (e) => new Promise((t) => setTimeout(t, e)),
    o = () => Promise.resolve();
async function i(e) {
    let { createPromise: t, webpackId: i, name: a } = e,
        u = 500,
        c = 0;
    for (;;)
        try {
            return performance.mark("importWithRetry:start", { detail: { webpackId: i, name: a } }), await t();
        } catch (e) {
            if ((console.log(e), i in r.c))
                throw (
                    (console.log(
                        "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
                    ),
                    e)
                );
            if (c >= 50) throw e;
            await n(u), await o(), (u = Math.min(5e3, 2 * u)), c++;
        }
}
function a(e) {
    console.warn(`[libdiscore] ${e}`);
}
async function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        o = null,
        i = e;
    for (;;)
        try {
            await Promise.resolve().then(r.bind(r, 5426));
            return;
        } catch (e) {
            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError) {
                var u;
                throw (
                    ((u = !0),
                    (window._libdiscoreUnsupportedBrowser = u),
                    a(`Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`),
                    e)
                );
            }
            if (((o = e), delete r.c[5426], 0 == --i)) throw o;
            a(`Failed to import libdiscore-wasm, retrying... (${i} attempts left), ${o.name}: ${o.message}`),
                await n(t);
        }
}
__OVERLAY__ ||
    (function () {
        let e = window._libdiscoreInitPromise ?? null;
        if (null != e) return e;
        {
            var t;
            let e = (async () => {
                var e;
                await u(),
                    (e = await i({ createPromise: () => r.e("14575").then(r.bind(r, 811059)), webpackId: 811059 })),
                    (window._libdiscoreWasm = e);
            })();
            return (t = e), (window._libdiscoreInitPromise = t), e;
        }
    })().catch((e) => {
        console.error("Failed to import libdiscore-wasm", e);
    });
