n.r(t), n.d(t, { collectNonHeapMetrics: () => s, initWasmTracking: () => a }), n(321073);
let i = [],
    r = !1;
function a() {
    if (r) return;
    function e(e) {
        for (let t in e) e[t] instanceof WebAssembly.Memory && i.push(new WeakRef(e[t]));
    }
    r = !0;
    let t = WebAssembly.instantiate;
    if (
        ((WebAssembly.instantiate = async function () {
            for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            let a = await t(...i);
            try {
                "instance" in a && null != a.instance ? e(a.instance.exports) : "exports" in a && e(a.exports);
            } catch {}
            return a;
        }),
        "function" == typeof WebAssembly.instantiateStreaming)
    ) {
        let t = WebAssembly.instantiateStreaming;
        WebAssembly.instantiateStreaming = async function () {
            for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            let a = await t(...i);
            try {
                e(a.instance.exports);
            } catch {}
            return a;
        };
    }
}
function s() {
    return {
        wasm_memory_bytes: (function () {
            let e = 0;
            for (let t = i.length - 1; t >= 0; t--) {
                let n = i[t].deref();
                null == n ? i.splice(t, 1) : (e += n.buffer.byteLength);
            }
            return e;
        })(),
    };
}
