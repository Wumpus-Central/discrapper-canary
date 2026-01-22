n.d(t, {
    Ay: () => f,
    Bf: () => s,
    vZ: () => c,
}),
    n(65821);
var r = n(841117);

function i(e) {
    console.warn("[libdiscore] ".concat(e));
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
                throw (
                    (o(!0),
                    i("Unsupported browser, skipping libdiscore, error: [".concat(e.name, "] ").concat(e.message)),
                    e)
                );
            if (((a = e), delete n.c[5426], 0 == --s)) throw a;
            i(
                "Failed to import libdiscore-wasm, retrying... ("
                    .concat(s, " attempts left), ")
                    .concat(a.name, ": ")
                    .concat(a.message),
            ),
                await (0, r.eU)(t);
        }
}

function s() {
    let e = u();
    if (null != e) return e;
    {
        let e = (async () => {
            await a(),
                l(
                    await (0, r.sq)({
                        createPromise: () => n.e("14575").then(n.bind(n, 811059)),
                        webpackId: 811059,
                    }),
                );
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
