let r = (e) => new Promise((t) => setTimeout(t, e)),
    _ = () => Promise.resolve();
function i(e) {
    console.warn(`[libdiscore] ${e}`);
}
__OVERLAY__ ||
    (function () {
        let e = window._libdiscoreInitPromise ?? null;
        if (null != e) return e;
        {
            var t;
            let e = (async () => {
                var e;
                (await (async function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                        _ = null,
                        o = e;
                    for (;;)
                        try {
                            await Promise.resolve().then(n.bind(n, 797916));
                            return;
                        } catch (e) {
                            if (e instanceof ReferenceError || e instanceof WebAssembly.CompileError) {
                                var c;
                                throw (
                                    (c = !0),
                                    (window._libdiscoreUnsupportedBrowser = c),
                                    i(`Unsupported browser, skipping libdiscore, error: [${e.name}] ${e.message}`),
                                    e
                                );
                            }
                            if (((_ = e), delete n.c[797916], 0 == --o)) throw _;
                            (i(
                                `Failed to import libdiscore-wasm, retrying... (${o} attempts left), ${_.name}: ${_.message}`,
                            ),
                                await r(t));
                        }
                })(),
                    (e = await (async function (e) {
                        let { createPromise: t, webpackId: i, name: o } = e,
                            c = 500,
                            u = 0;
                        for (;;)
                            try {
                                return (
                                    performance.mark("importWithRetry:start", { detail: { webpackId: i, name: o } }),
                                    await t()
                                );
                            } catch (e) {
                                if ((console.log(e), i in n.c))
                                    throw (
                                        console.log(
                                            "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
                                        ),
                                        e
                                    );
                                if (u >= 50) throw e;
                                (await r(c), await _(), (c = Math.min(5e3, 2 * c)), u++);
                            }
                    })({ createPromise: () => n.e(914575).then(n.bind(n, 811059)), webpackId: 811059 })),
                    (window._libdiscoreWasm = e));
            })();
            return ((t = e), (window._libdiscoreInitPromise = t), e);
        }
    })().catch((e) => {
        console.error("Failed to import libdiscore-wasm", e);
    });
