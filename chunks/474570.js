"use strict";
n.r(t), n.d(t, { collectNonHeapMetrics: () => a, initWasmTracking: () => s }), n(321073);
let i = [],
    r = !1;
function s() {
    if (r) return;
    r = !0;
    let e = (e) => {
            for (let t in e) e[t] instanceof WebAssembly.Memory && i.push(new WeakRef(e[t]));
        },
        t = WebAssembly.instantiate;
    if (
        ((WebAssembly.instantiate = async function () {
            for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            let s = await t(...i);
            try {
                "instance" in s && null != s.instance ? e(s.instance.exports) : "exports" in s && e(s.exports);
            } catch {}
            return s;
        }),
        "function" == typeof WebAssembly.instantiateStreaming)
    ) {
        let t = WebAssembly.instantiateStreaming;
        WebAssembly.instantiateStreaming = async function () {
            for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
            let s = await t(...i);
            try {
                e(s.instance.exports);
            } catch {}
            return s;
        };
    }
}
function a() {
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
