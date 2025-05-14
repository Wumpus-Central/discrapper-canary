r.d(n, { mX: () => u }), r(415506);
var e = r(252117);
function o(t) {
    console.warn('[libdiscore] '.concat(t));
}
async function i() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
        i = null,
        u = t;
    for (;;)
        try {
            await Promise.resolve().then(r.bind(r, 842321));
            return;
        } catch (t) {
            if (t instanceof ReferenceError || t instanceof WebAssembly.CompileError) {
                var c;
                throw ((c = !0), (window._libdiscoreUnsupportedBrowser = c), o('Unsupported browser, skipping libdiscore, error: ['.concat(t.name, '] ').concat(t.message)), t);
            }
            if (((i = t), delete r.c[842321], 0 == --u)) throw i;
            o('Failed to import libdiscore-wasm, retrying... ('.concat(u, ' attempts left), ').concat(i.name, ': ').concat(i.message)), await (0, e.o2)(n);
        }
}
function u() {
    var t, n;
    let o = null != (t = window._libdiscoreInitPromise) ? t : null;
    if (null != o) return o;
    {
        let t = (async () => {
            var t;
            await i(),
                (t = await (0, e.wE)({
                    createPromise: () => r.e('18639').then(r.bind(r, 718493)),
                    webpackId: 718493
                })),
                (window._libdiscoreWasm = t);
        })();
        return (n = t), (window._libdiscoreInitPromise = n), t;
    }
}
