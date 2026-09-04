let r;
t.d(n, { Ay: () => j, qg: () => m });
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let o = 0,
    _ = null;
function u() {
    return (null === _ || 0 === _.byteLength) && (_ = new Uint8Array(r.memory.buffer)), _;
}
let a =
        "u" > typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                  encode: () => {
                      throw Error("TextEncoder not available");
                  },
              },
    c =
        "function" == typeof a.encodeInto
            ? function (e, n) {
                  return a.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = a.encode(e);
                  return n.set(t), { read: e.length, written: t.length };
              };
function b(e, n, t) {
    if (void 0 === t) {
        let t = a.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            u()
                .subarray(r, r + t.length)
                .set(t),
            (o = t.length),
            r
        );
    }
    let r = e.length,
        i = n(r, 1) >>> 0,
        _ = u(),
        b = 0;
    for (; b < r; b++) {
        let n = e.charCodeAt(b);
        if (n > 127) break;
        _[i + b] = n;
    }
    if (b !== r) {
        0 !== b && (e = e.slice(b)), (i = t(i, r, (r = b + 3 * e.length), 1) >>> 0);
        let n = c(e, u().subarray(i + b, i + r));
        (b += n.written), (i = t(i, r, b, 1) >>> 0);
    }
    return (o = b), i;
}
let s = null;
function f() {
    return (
        (null === s || !0 === s.buffer.detached || (void 0 === s.buffer.detached && s.buffer !== r.memory.buffer)) &&
            (s = new DataView(r.memory.buffer)),
        s
    );
}
let l = i.length;
function g(e) {
    l === i.length && i.push(i.length + 1);
    let n = l;
    return (l = i[n]), (i[n] = e), n;
}
function d(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_2(g(e));
    }
}
function w(e) {
    let n = i[e];
    return e < 132 || ((i[e] = l), (l = e)), n;
}
function y(e) {
    return null == e;
}
let p =
    "u" > typeof TextDecoder
        ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
        : {
              decode: () => {
                  throw Error("TextDecoder not available");
              },
          };
function h(e, n) {
    return (e >>>= 0), p.decode(u().subarray(e, e + n));
}
function m(e, n, t) {
    try {
        let u = r.__wbindgen_add_to_stack_pointer(-16),
            a = b(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            c = o;
        r.parse(u, a, c, g(n), y(t) ? 0x100000001 : t >>> 0);
        var i = f().getInt32(u + 0, !0),
            _ = f().getInt32(u + 4, !0);
        if (f().getInt32(u + 8, !0)) throw w(_);
        return w(i);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
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
async function v(e) {
    let n;
    if (void 0 !== r) return r;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = new URL(t(424932), t.b));
    let u =
        (((n = {}).wbg = {}),
        (n.wbg.__wbg_String_8f0eb39a4a4c2f66 = function (e, n) {
            let t = b(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
                _ = o;
            f().setInt32(e + 4, _, !0), f().setInt32(e + 0, t, !0);
        }),
        (n.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
            return g(i[e].buffer);
        }),
        (n.wbg.__wbg_call_672a4d21634d4a24 = function () {
            return d(function (e, n) {
                return g(i[e].call(i[n]));
            }, arguments);
        }),
        (n.wbg.__wbg_done_769e5ede4b31c67b = function (e) {
            return i[e].done;
        }),
        (n.wbg.__wbg_entries_3265d4158b33e5dc = function (e) {
            return g(Object.entries(i[e]));
        }),
        (n.wbg.__wbg_get_67b2ba62fc30de12 = function () {
            return d(function (e, n) {
                return g(Reflect.get(i[e], i[n]));
            }, arguments);
        }),
        (n.wbg.__wbg_get_b9b93047fe3cf45b = function (e, n) {
            return g(i[e][n >>> 0]);
        }),
        (n.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function (e, n) {
            return g(i[e][i[n]]);
        }),
        (n.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function (e) {
            let n;
            try {
                n = i[e] instanceof ArrayBuffer;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (n.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function (e) {
            let n;
            try {
                n = i[e] instanceof Map;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (n.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function (e) {
            let n;
            try {
                n = i[e] instanceof Uint8Array;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (n.wbg.__wbg_isArray_a1eab7e0d067391b = function (e) {
            return Array.isArray(i[e]);
        }),
        (n.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function (e) {
            return Number.isSafeInteger(i[e]);
        }),
        (n.wbg.__wbg_iterator_9a24c88df860dc65 = function () {
            return g(Symbol.iterator);
        }),
        (n.wbg.__wbg_length_a446193dc22c12f8 = function (e) {
            return i[e].length;
        }),
        (n.wbg.__wbg_length_e2d2a49132c1b256 = function (e) {
            return i[e].length;
        }),
        (n.wbg.__wbg_new_405e22f390576ce2 = function () {
            return g({});
        }),
        (n.wbg.__wbg_new_5e0be73521bc8c17 = function () {
            return g(new Map());
        }),
        (n.wbg.__wbg_new_78feb108b6472713 = function () {
            return g([]);
        }),
        (n.wbg.__wbg_new_a12002a7f91c75be = function (e) {
            return g(new Uint8Array(i[e]));
        }),
        (n.wbg.__wbg_next_25feadfc0913fea9 = function (e) {
            return g(i[e].next);
        }),
        (n.wbg.__wbg_next_6574e1a8a62d1055 = function () {
            return d(function (e) {
                return g(i[e].next());
            }, arguments);
        }),
        (n.wbg.__wbg_set_37837023f3d740e8 = function (e, n, t) {
            i[e][n >>> 0] = w(t);
        }),
        (n.wbg.__wbg_set_3f1d0b984ed272ed = function (e, n, t) {
            i[e][w(n)] = w(t);
        }),
        (n.wbg.__wbg_set_65595bdd868b3009 = function (e, n, t) {
            i[e].set(i[n], t >>> 0);
        }),
        (n.wbg.__wbg_set_8fc6bf8a5b1071d1 = function (e, n, t) {
            return g(i[e].set(i[n], i[t]));
        }),
        (n.wbg.__wbg_value_cd1ffa7b1ab794f1 = function (e) {
            return g(i[e].value);
        }),
        (n.wbg.__wbindgen_as_number = function (e) {
            return +i[e];
        }),
        (n.wbg.__wbindgen_bigint_from_i64 = function (e) {
            return g(e);
        }),
        (n.wbg.__wbindgen_bigint_from_u64 = function (e) {
            return g(BigInt.asUintN(64, e));
        }),
        (n.wbg.__wbindgen_bigint_get_as_i64 = function (e, n) {
            let t = i[n],
                r = "bigint" == typeof t ? t : void 0;
            f().setBigInt64(e + 8, y(r) ? BigInt(0) : r, !0), f().setInt32(e + 0, !y(r), !0);
        }),
        (n.wbg.__wbindgen_boolean_get = function (e) {
            let n = i[e];
            return "boolean" == typeof n ? +!!n : 2;
        }),
        (n.wbg.__wbindgen_debug_string = function (e, n) {
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
                    })(i[n]),
                    r.__wbindgen_export_0,
                    r.__wbindgen_export_1,
                ),
                _ = o;
            f().setInt32(e + 4, _, !0), f().setInt32(e + 0, t, !0);
        }),
        (n.wbg.__wbindgen_error_new = function (e, n) {
            return g(Error(h(e, n)));
        }),
        (n.wbg.__wbindgen_in = function (e, n) {
            return i[e] in i[n];
        }),
        (n.wbg.__wbindgen_is_bigint = function (e) {
            return "bigint" == typeof i[e];
        }),
        (n.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof i[e];
        }),
        (n.wbg.__wbindgen_is_null = function (e) {
            return null === i[e];
        }),
        (n.wbg.__wbindgen_is_object = function (e) {
            let n = i[e];
            return "object" == typeof n && null !== n;
        }),
        (n.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof i[e];
        }),
        (n.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === i[e];
        }),
        (n.wbg.__wbindgen_jsval_eq = function (e, n) {
            return i[e] === i[n];
        }),
        (n.wbg.__wbindgen_jsval_loose_eq = function (e, n) {
            return i[e] == i[n];
        }),
        (n.wbg.__wbindgen_memory = function () {
            return g(r.memory);
        }),
        (n.wbg.__wbindgen_number_get = function (e, n) {
            let t = i[n],
                r = "number" == typeof t ? t : void 0;
            f().setFloat64(e + 8, y(r) ? 0 : r, !0), f().setInt32(e + 0, !y(r), !0);
        }),
        (n.wbg.__wbindgen_number_new = function (e) {
            return g(e);
        }),
        (n.wbg.__wbindgen_object_clone_ref = function (e) {
            return g(i[e]);
        }),
        (n.wbg.__wbindgen_object_drop_ref = function (e) {
            w(e);
        }),
        (n.wbg.__wbindgen_string_get = function (e, n) {
            let t = i[n],
                _ = "string" == typeof t ? t : void 0;
            var u = y(_) ? 0 : b(_, r.__wbindgen_export_0, r.__wbindgen_export_1),
                a = o;
            f().setInt32(e + 4, a, !0), f().setInt32(e + 0, u, !0);
        }),
        (n.wbg.__wbindgen_string_new = function (e, n) {
            return g(h(e, n));
        }),
        (n.wbg.__wbindgen_throw = function (e, n) {
            throw Error(h(e, n));
        }),
        n);
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: a, module: c } = await x(await e, u);
    return (r = a.exports), (v.__wbindgen_wasm_module = c), (s = null), (_ = null), r;
}
"u" > typeof TextDecoder && p.decode();
let j = v;
