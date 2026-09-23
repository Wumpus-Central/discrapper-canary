let r, i;
t.d(n, { qg: () => W, Ts: () => O });
let o = new URL(t(493560), t.b),
    a = Array(128).fill(void 0);
a.push(void 0, null, !0, !1);
let s = 0,
    u = null;
function c() {
    return ((null === u || 0 === u.byteLength) && (u = new Uint8Array(r.memory.buffer)), u);
}
let _ =
        "u" > typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                  encode: () => {
                      throw Error("TextEncoder not available");
                  },
              },
    l =
        "function" == typeof _.encodeInto
            ? function (e, n) {
                  return _.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = _.encode(e);
                  return (n.set(t), { read: e.length, written: t.length });
              };
function b(e, n, t) {
    if (void 0 === t) {
        let t = _.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            c()
                .subarray(r, r + t.length)
                .set(t),
            (s = t.length),
            r
        );
    }
    let r = e.length,
        i = n(r, 1) >>> 0,
        o = c(),
        a = 0;
    for (; a < r; a++) {
        let n = e.charCodeAt(a);
        if (n > 127) break;
        o[i + a] = n;
    }
    if (a !== r) {
        (0 !== a && (e = e.slice(a)), (i = t(i, r, (r = a + 3 * e.length), 1) >>> 0));
        let n = l(e, c().subarray(i + a, i + r));
        ((a += n.written), (i = t(i, r, a, 1) >>> 0));
    }
    return ((s = a), i);
}
let f = null;
function d() {
    return (
        (null === f || !0 === f.buffer.detached || (void 0 === f.buffer.detached && f.buffer !== r.memory.buffer)) &&
            (f = new DataView(r.memory.buffer)),
        f
    );
}
let g = a.length;
function w(e) {
    g === a.length && a.push(a.length + 1);
    let n = g;
    return ((g = a[n]), (a[n] = e), n);
}
function p(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_2(w(e));
    }
}
function y(e) {
    let n = a[e];
    return (e < 132 || ((a[e] = g), (g = e)), n);
}
function h(e) {
    return null == e;
}
let m =
    "u" > typeof TextDecoder
        ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
        : {
              decode: () => {
                  throw Error("TextDecoder not available");
              },
          };
function v(e, n) {
    return ((e >>>= 0), m.decode(c().subarray(e, e + n)));
}
async function x(e, n) {
    if ("function" == typeof Response && e instanceof Response) {
        if ("function" == typeof WebAssembly.instantiateStreaming)
            try {
                return await WebAssembly.instantiateStreaming(e, n);
            } catch (n) {
                if ("application/wasm" != e.headers.get("Content-Type"))
                    console.warn(
                        "`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                        n,
                    );
                else throw n;
            }
        let t = await e.arrayBuffer();
        return await WebAssembly.instantiate(t, n);
    }
    {
        let t = await WebAssembly.instantiate(e, n);
        return t instanceof WebAssembly.Instance ? { instance: t, module: e } : t;
    }
}
function j() {
    let e = {};
    return (
        (e.wbg = {}),
        (e.wbg.__wbg_String_8f0eb39a4a4c2f66 = function (e, n) {
            let t = b(String(a[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
                i = s;
            (d().setInt32(e + 4, i, !0), d().setInt32(e + 0, t, !0));
        }),
        (e.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
            return w(a[e].buffer);
        }),
        (e.wbg.__wbg_call_672a4d21634d4a24 = function () {
            return p(function (e, n) {
                return w(a[e].call(a[n]));
            }, arguments);
        }),
        (e.wbg.__wbg_done_769e5ede4b31c67b = function (e) {
            return a[e].done;
        }),
        (e.wbg.__wbg_entries_3265d4158b33e5dc = function (e) {
            return w(Object.entries(a[e]));
        }),
        (e.wbg.__wbg_get_67b2ba62fc30de12 = function () {
            return p(function (e, n) {
                return w(Reflect.get(a[e], a[n]));
            }, arguments);
        }),
        (e.wbg.__wbg_get_b9b93047fe3cf45b = function (e, n) {
            return w(a[e][n >>> 0]);
        }),
        (e.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function (e, n) {
            return w(a[e][a[n]]);
        }),
        (e.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function (e) {
            let n;
            try {
                n = a[e] instanceof ArrayBuffer;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (e.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function (e) {
            let n;
            try {
                n = a[e] instanceof Map;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (e.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function (e) {
            let n;
            try {
                n = a[e] instanceof Uint8Array;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (e.wbg.__wbg_isArray_a1eab7e0d067391b = function (e) {
            return Array.isArray(a[e]);
        }),
        (e.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function (e) {
            return Number.isSafeInteger(a[e]);
        }),
        (e.wbg.__wbg_iterator_9a24c88df860dc65 = function () {
            return w(Symbol.iterator);
        }),
        (e.wbg.__wbg_length_a446193dc22c12f8 = function (e) {
            return a[e].length;
        }),
        (e.wbg.__wbg_length_e2d2a49132c1b256 = function (e) {
            return a[e].length;
        }),
        (e.wbg.__wbg_new_405e22f390576ce2 = function () {
            return w({});
        }),
        (e.wbg.__wbg_new_5e0be73521bc8c17 = function () {
            return w(new Map());
        }),
        (e.wbg.__wbg_new_78feb108b6472713 = function () {
            return w([]);
        }),
        (e.wbg.__wbg_new_a12002a7f91c75be = function (e) {
            return w(new Uint8Array(a[e]));
        }),
        (e.wbg.__wbg_next_25feadfc0913fea9 = function (e) {
            return w(a[e].next);
        }),
        (e.wbg.__wbg_next_6574e1a8a62d1055 = function () {
            return p(function (e) {
                return w(a[e].next());
            }, arguments);
        }),
        (e.wbg.__wbg_set_37837023f3d740e8 = function (e, n, t) {
            a[e][n >>> 0] = y(t);
        }),
        (e.wbg.__wbg_set_3f1d0b984ed272ed = function (e, n, t) {
            a[e][y(n)] = y(t);
        }),
        (e.wbg.__wbg_set_65595bdd868b3009 = function (e, n, t) {
            a[e].set(a[n], t >>> 0);
        }),
        (e.wbg.__wbg_set_8fc6bf8a5b1071d1 = function (e, n, t) {
            return w(a[e].set(a[n], a[t]));
        }),
        (e.wbg.__wbg_value_cd1ffa7b1ab794f1 = function (e) {
            return w(a[e].value);
        }),
        (e.wbg.__wbindgen_as_number = function (e) {
            return +a[e];
        }),
        (e.wbg.__wbindgen_bigint_from_i64 = function (e) {
            return w(e);
        }),
        (e.wbg.__wbindgen_bigint_from_u64 = function (e) {
            return w(BigInt.asUintN(64, e));
        }),
        (e.wbg.__wbindgen_bigint_get_as_i64 = function (e, n) {
            let t = a[n],
                r = "bigint" == typeof t ? t : void 0;
            (d().setBigInt64(e + 8, h(r) ? BigInt(0) : r, !0), d().setInt32(e + 0, !h(r), !0));
        }),
        (e.wbg.__wbindgen_boolean_get = function (e) {
            let n = a[e];
            return "boolean" == typeof n ? +!!n : 2;
        }),
        (e.wbg.__wbindgen_debug_string = function (e, n) {
            let t = b(
                    (function e(n) {
                        let t,
                            r = typeof n;
                        if ("number" == r || "boolean" == r || null == n) return `${n}`;
                        if ("string" == r) return `"${n}"`;
                        if ("symbol" == r) {
                            let e = n.description;
                            return null == e ? "Symbol" : `Symbol(${e})`;
                        }
                        if ("function" == r) {
                            let e = n.name;
                            return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                        }
                        if (Array.isArray(n)) {
                            let t = n.length,
                                r = "[";
                            t > 0 && (r += e(n[0]));
                            for (let i = 1; i < t; i++) r += ", " + e(n[i]);
                            return r + "]";
                        }
                        let i = /\[object ([^\]]+)\]/.exec(toString.call(n));
                        if (!i || !(i.length > 1)) return toString.call(n);
                        if ("Object" == (t = i[1]))
                            try {
                                return "Object(" + JSON.stringify(n) + ")";
                            } catch (e) {
                                return "Object";
                            }
                        return n instanceof Error
                            ? `${n.name}: ${n.message}
${n.stack}`
                            : t;
                    })(a[n]),
                    r.__wbindgen_export_0,
                    r.__wbindgen_export_1,
                ),
                i = s;
            (d().setInt32(e + 4, i, !0), d().setInt32(e + 0, t, !0));
        }),
        (e.wbg.__wbindgen_error_new = function (e, n) {
            return w(Error(v(e, n)));
        }),
        (e.wbg.__wbindgen_in = function (e, n) {
            return a[e] in a[n];
        }),
        (e.wbg.__wbindgen_is_bigint = function (e) {
            return "bigint" == typeof a[e];
        }),
        (e.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof a[e];
        }),
        (e.wbg.__wbindgen_is_null = function (e) {
            return null === a[e];
        }),
        (e.wbg.__wbindgen_is_object = function (e) {
            let n = a[e];
            return "object" == typeof n && null !== n;
        }),
        (e.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof a[e];
        }),
        (e.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === a[e];
        }),
        (e.wbg.__wbindgen_jsval_eq = function (e, n) {
            return a[e] === a[n];
        }),
        (e.wbg.__wbindgen_jsval_loose_eq = function (e, n) {
            return a[e] == a[n];
        }),
        (e.wbg.__wbindgen_memory = function () {
            return w(r.memory);
        }),
        (e.wbg.__wbindgen_number_get = function (e, n) {
            let t = a[n],
                r = "number" == typeof t ? t : void 0;
            (d().setFloat64(e + 8, h(r) ? 0 : r, !0), d().setInt32(e + 0, !h(r), !0));
        }),
        (e.wbg.__wbindgen_number_new = function (e) {
            return w(e);
        }),
        (e.wbg.__wbindgen_object_clone_ref = function (e) {
            return w(a[e]);
        }),
        (e.wbg.__wbindgen_object_drop_ref = function (e) {
            y(e);
        }),
        (e.wbg.__wbindgen_string_get = function (e, n) {
            let t = a[n],
                i = "string" == typeof t ? t : void 0;
            var o = h(i) ? 0 : b(i, r.__wbindgen_export_0, r.__wbindgen_export_1),
                u = s;
            (d().setInt32(e + 4, u, !0), d().setInt32(e + 0, o, !0));
        }),
        (e.wbg.__wbindgen_string_new = function (e, n) {
            return w(v(e, n));
        }),
        (e.wbg.__wbindgen_throw = function (e, n) {
            throw Error(v(e, n));
        }),
        e
    );
}
"u" > typeof TextDecoder && m.decode();
function A(e, n) {
    return ((r = e.exports), (E.__wbindgen_wasm_module = n), (f = null), (u = null), r);
}
async function E(e) {
    if (void 0 !== r) return r;
    (void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = new URL(t(493560), t.b)));
    let n = j();
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: i, module: o } = await x(await e, n);
    return A(i, o);
}
async function I() {
    return (i || (i = await WebAssembly.compileStreaming(fetch(o))), i);
}
async function k() {
    return E({ module_or_path: await I() });
}
let S = !1,
    B = null;
function O() {
    return S
        ? Promise.resolve()
        : (B ??= k().then(
              () => {
                  S = !0;
              },
              (e) => {
                  throw ((B = null), e);
              },
          ));
}
function W(e, n) {
    return (
        !(function () {
            if (S) return;
            let e = (i || (i = null), i);
            if (!e)
                throw Error(
                    "@discord/markdown-wasm/sync is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
                );
            (!(function (e) {
                var n = { module: e };
                if (void 0 !== r) return;
                void 0 !== n &&
                    (Object.getPrototypeOf(n) === Object.prototype
                        ? ({ module: n } = n)
                        : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
                let t = j();
                (n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)),
                    A(new WebAssembly.Instance(n, t), n));
            })(e),
                (S = !0));
        })(),
        (function (e, n) {
            try {
                let o = r.__wbindgen_add_to_stack_pointer(-16),
                    a = b(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
                    u = s;
                r.parse(o, a, u, w(n), h(void 0) ? 0x100000001 : void 0 >>> 0);
                var t = d().getInt32(o + 0, !0),
                    i = d().getInt32(o + 4, !0);
                if (d().getInt32(o + 8, !0)) throw y(i);
                return y(t);
            } finally {
                r.__wbindgen_add_to_stack_pointer(16);
            }
        })(e, n)
    );
}
