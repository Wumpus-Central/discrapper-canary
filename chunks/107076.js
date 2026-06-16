let r;
t.d(n, { Ay: () => v, qg: () => h });
let i = Array(128).fill(void 0);
i.push(void 0, null, !0, !1);
let o = 0,
    u = null;
function a() {
    return (null === u || 0 === u.byteLength) && (u = new Uint8Array(r.memory.buffer)), u;
}
let c =
        "u" > typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                  encode: () => {
                      throw Error("TextEncoder not available");
                  },
              },
    _ =
        "function" == typeof c.encodeInto
            ? function (e, n) {
                  return c.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = c.encode(e);
                  return n.set(t), { read: e.length, written: t.length };
              };
function l(e, n, t) {
    if (void 0 === t) {
        let t = c.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            a()
                .subarray(r, r + t.length)
                .set(t),
            (o = t.length),
            r
        );
    }
    let r = e.length,
        i = n(r, 1) >>> 0,
        u = a(),
        l = 0;
    for (; l < r; l++) {
        let n = e.charCodeAt(l);
        if (n > 127) break;
        u[i + l] = n;
    }
    if (l !== r) {
        0 !== l && (e = e.slice(l)), (i = t(i, r, (r = l + 3 * e.length), 1) >>> 0);
        let n = _(e, a().subarray(i + l, i + r));
        (l += n.written), (i = t(i, r, l, 1) >>> 0);
    }
    return (o = l), i;
}
let s = null;
function b() {
    return (
        (null === s || !0 === s.buffer.detached || (void 0 === s.buffer.detached && s.buffer !== r.memory.buffer)) &&
            (s = new DataView(r.memory.buffer)),
        s
    );
}
let f = i.length;
function d(e) {
    f === i.length && i.push(i.length + 1);
    let n = f;
    return (f = i[n]), (i[n] = e), n;
}
function g(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_2(d(e));
    }
}
function w(e) {
    let n = i[e];
    return e < 132 || ((i[e] = f), (f = e)), n;
}
let y =
    "u" > typeof TextDecoder
        ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
        : {
              decode: () => {
                  throw Error("TextDecoder not available");
              },
          };
function p(e, n) {
    return (e >>>= 0), y.decode(a().subarray(e, e + n));
}
function h(e, n) {
    try {
        let u = r.__wbindgen_add_to_stack_pointer(-16),
            a = l(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
            c = o;
        r.parse(u, a, c, d(n));
        var t = b().getInt32(u + 0, !0),
            i = b().getInt32(u + 4, !0);
        if (b().getInt32(u + 8, !0)) throw w(i);
        return w(t);
    } finally {
        r.__wbindgen_add_to_stack_pointer(16);
    }
}
async function m(e, n) {
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
async function x(e) {
    let n;
    if (void 0 !== r) return r;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = new URL(t(487179), t.b));
    let a =
        (((n = {}).wbg = {}),
        (n.wbg.__wbg_String_8f0eb39a4a4c2f66 = function (e, n) {
            let t = l(String(i[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
                u = o;
            b().setInt32(e + 4, u, !0), b().setInt32(e + 0, t, !0);
        }),
        (n.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
            return d(i[e].buffer);
        }),
        (n.wbg.__wbg_call_672a4d21634d4a24 = function () {
            return g(function (e, n) {
                return d(i[e].call(i[n]));
            }, arguments);
        }),
        (n.wbg.__wbg_done_769e5ede4b31c67b = function (e) {
            return i[e].done;
        }),
        (n.wbg.__wbg_entries_3265d4158b33e5dc = function (e) {
            return d(Object.entries(i[e]));
        }),
        (n.wbg.__wbg_get_67b2ba62fc30de12 = function () {
            return g(function (e, n) {
                return d(Reflect.get(i[e], i[n]));
            }, arguments);
        }),
        (n.wbg.__wbg_get_b9b93047fe3cf45b = function (e, n) {
            return d(i[e][n >>> 0]);
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
        (n.wbg.__wbg_iterator_9a24c88df860dc65 = function () {
            return d(Symbol.iterator);
        }),
        (n.wbg.__wbg_length_a446193dc22c12f8 = function (e) {
            return i[e].length;
        }),
        (n.wbg.__wbg_length_e2d2a49132c1b256 = function (e) {
            return i[e].length;
        }),
        (n.wbg.__wbg_new_405e22f390576ce2 = function () {
            return d({});
        }),
        (n.wbg.__wbg_new_5e0be73521bc8c17 = function () {
            return d(new Map());
        }),
        (n.wbg.__wbg_new_78feb108b6472713 = function () {
            return d([]);
        }),
        (n.wbg.__wbg_new_a12002a7f91c75be = function (e) {
            return d(new Uint8Array(i[e]));
        }),
        (n.wbg.__wbg_next_25feadfc0913fea9 = function (e) {
            return d(i[e].next);
        }),
        (n.wbg.__wbg_next_6574e1a8a62d1055 = function () {
            return g(function (e) {
                return d(i[e].next());
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
            return d(i[e].set(i[n], i[t]));
        }),
        (n.wbg.__wbg_value_cd1ffa7b1ab794f1 = function (e) {
            return d(i[e].value);
        }),
        (n.wbg.__wbindgen_bigint_from_u64 = function (e) {
            return d(BigInt.asUintN(64, e));
        }),
        (n.wbg.__wbindgen_boolean_get = function (e) {
            let n = i[e];
            return "boolean" == typeof n ? +!!n : 2;
        }),
        (n.wbg.__wbindgen_debug_string = function (e, n) {
            let t = l(
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
                u = o;
            b().setInt32(e + 4, u, !0), b().setInt32(e + 0, t, !0);
        }),
        (n.wbg.__wbindgen_error_new = function (e, n) {
            return d(Error(p(e, n)));
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
        (n.wbg.__wbindgen_jsval_loose_eq = function (e, n) {
            return i[e] == i[n];
        }),
        (n.wbg.__wbindgen_memory = function () {
            return d(r.memory);
        }),
        (n.wbg.__wbindgen_number_get = function (e, n) {
            let t = i[n],
                r = "number" == typeof t ? t : void 0;
            b().setFloat64(e + 8, null == r ? 0 : r, !0), b().setInt32(e + 0, null != r, !0);
        }),
        (n.wbg.__wbindgen_number_new = function (e) {
            return d(e);
        }),
        (n.wbg.__wbindgen_object_clone_ref = function (e) {
            return d(i[e]);
        }),
        (n.wbg.__wbindgen_object_drop_ref = function (e) {
            w(e);
        }),
        (n.wbg.__wbindgen_string_get = function (e, n) {
            let t = i[n],
                u = "string" == typeof t ? t : void 0;
            var a = null == u ? 0 : l(u, r.__wbindgen_export_0, r.__wbindgen_export_1),
                c = o;
            b().setInt32(e + 4, c, !0), b().setInt32(e + 0, a, !0);
        }),
        (n.wbg.__wbindgen_string_new = function (e, n) {
            return d(p(e, n));
        }),
        (n.wbg.__wbindgen_throw = function (e, n) {
            throw Error(p(e, n));
        }),
        n);
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: c, module: _ } = await m(await e, a);
    return (r = c.exports), (x.__wbindgen_wasm_module = _), (s = null), (u = null), r;
}
"u" > typeof TextDecoder && y.decode();
let v = x;
