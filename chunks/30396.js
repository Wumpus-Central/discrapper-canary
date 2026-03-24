let r;
function i(e) {
    r.cancel(e);
}
function o() {
    return r.create_session() >>> 0;
}
function a(e) {
    r.free_session(e);
}
function _() {
    try {
        let i = r.__wbindgen_add_to_stack_pointer(-16);
        r.injection_languages(i);
        var e = g().getInt32(i + 0, !0),
            t = g().getInt32(i + 4, !0),
            n = (function (e, t) {
                e >>>= 0;
                let n = g(),
                    r = [];
                for (let i = e; i < e + 4 * t; i += 4) r.push(v(n.getUint32(i, !0)));
                return r;
            })(e, t).slice();
        return r.__wbindgen_export(e, 4 * t, 4), n;
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
function s() {
    let e, t;
    try {
        let o = r.__wbindgen_add_to_stack_pointer(-16);
        r.language_id(o);
        var n = g().getInt32(o + 0, !0),
            i = g().getInt32(o + 4, !0);
        return (e = n), (t = i), p(n, i);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_export(e, t, 1);
    }
}
function c(e) {
    try {
        let i = r.__wbindgen_add_to_stack_pointer(-16);
        r.parse(i, e);
        var t = g().getInt32(i + 0, !0),
            n = g().getInt32(i + 4, !0);
        if (g().getInt32(i + 8, !0)) throw v(n);
        return v(t);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
function u(e) {
    try {
        let i = r.__wbindgen_add_to_stack_pointer(-16);
        r.parse_utf16(i, e);
        var t = g().getInt32(i + 0, !0),
            n = g().getInt32(i + 4, !0);
        if (g().getInt32(i + 8, !0)) throw v(n);
        return v(t);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
function l(e, t) {
    let n = (function (e, t, n) {
            if (void 0 === n) {
                let n = A.encode(e),
                    r = t(n.length, 1) >>> 0;
                return (
                    y()
                        .subarray(r, r + n.length)
                        .set(n),
                    (j = n.length),
                    r
                );
            }
            let r = e.length,
                i = t(r, 1) >>> 0,
                o = y(),
                a = 0;
            for (; a < r; a++) {
                let t = e.charCodeAt(a);
                if (t > 127) break;
                o[i + a] = t;
            }
            if (a !== r) {
                0 !== a && (e = e.slice(a)), (i = n(i, r, (r = a + 3 * e.length), 1) >>> 0);
                let t = y().subarray(i + a, i + r);
                (a += A.encodeInto(e, t).written), (i = n(i, r, a, 1) >>> 0);
            }
            return (j = a), i;
        })(t, r.__wbindgen_export2, r.__wbindgen_export3),
        i = j;
    r.set_text(e, n, i);
}
function f() {
    return {
        __proto__: null,
        "./arborium_thrift_plugin_bg.js": {
            __proto__: null,
            __wbg___wbindgen_throw_6ddd609b62940d55: function (e, t) {
                throw Error(p(e, t));
            },
            __wbg_new_a70fbab9066b301f: function () {
                return d([]);
            },
            __wbg_new_ab79df5bd7c26067: function () {
                return d({});
            },
            __wbg_set_282384002438957f: function (e, t, n) {
                h[e][t >>> 0] = v(n);
            },
            __wbg_set_6be42768c690e380: function (e, t, n) {
                h[e][v(t)] = v(n);
            },
            __wbindgen_cast_0000000000000001: function (e) {
                return d(e);
            },
            __wbindgen_cast_0000000000000002: function (e, t) {
                return d(p(e, t));
            },
            __wbindgen_object_clone_ref: function (e) {
                return d(h[e]);
            },
            __wbindgen_object_drop_ref: function (e) {
                v(e);
            },
        },
    };
}
function d(e) {
    m === h.length && h.push(h.length + 1);
    let t = m;
    return (m = h[t]), (h[t] = e), t;
}
n.r(t),
    n.d(t, {
        cancel: () => i,
        create_session: () => o,
        default: () => M,
        free_session: () => a,
        initSync: () => O,
        injection_languages: () => _,
        language_id: () => s,
        parse: () => c,
        parse_utf16: () => u,
        set_text: () => l,
    });
let b = null;
function g() {
    return (
        (null === b || !0 === b.buffer.detached || (void 0 === b.buffer.detached && b.buffer !== r.memory.buffer)) &&
            (b = new DataView(r.memory.buffer)),
        b
    );
}
function p(e, t) {
    var n, r;
    return (
        (n = e >>>= 0),
        (k += r = t) >= 0x7ff00000 && ((I = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (k = r)),
        I.decode(y().subarray(n, n + r))
    );
}
let w = null;
function y() {
    return (null === w || 0 === w.byteLength) && (w = new Uint8Array(r.memory.buffer)), w;
}
let h = Array(1024).fill(void 0);
h.push(void 0, null, !0, !1);
let m = h.length;
function v(e) {
    let t = h[e];
    return e < 1028 || ((h[e] = m), (m = e)), t;
}
let I = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
I.decode();
let k = 0,
    A = new TextEncoder();
"encodeInto" in A ||
    (A.encodeInto = function (e, t) {
        let n = A.encode(e);
        return t.set(n), { read: e.length, written: n.length };
    });
let j = 0;
function x(e, t) {
    return (r = e.exports), (b = null), (w = null), r;
}
async function W(e, t) {
    if ("function" == typeof Response && e instanceof Response) {
        if ("function" == typeof WebAssembly.instantiateStreaming)
            try {
                return await WebAssembly.instantiateStreaming(e, t);
            } catch (t) {
                if (
                    e.ok &&
                    (function (e) {
                        switch (e) {
                            case "basic":
                            case "cors":
                            case "default":
                                return !0;
                        }
                        return !1;
                    })(e.type) &&
                    "application/wasm" !== e.headers.get("Content-Type")
                )
                    console.warn(
                        "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                        t,
                    );
                else throw t;
            }
        let n = await e.arrayBuffer();
        return await WebAssembly.instantiate(n, t);
    }
    {
        let n = await WebAssembly.instantiate(e, t);
        return n instanceof WebAssembly.Instance ? { instance: n, module: e } : n;
    }
}
function O(e) {
    if (void 0 !== r) return r;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module: e } = e)
            : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    let t = f();
    return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), x(new WebAssembly.Instance(e, t), e);
}
async function M(e) {
    if (void 0 !== r) return r;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = void 0);
    let t = f();
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: n, module: i } = await W(await e, t);
    return x(n, i);
}
