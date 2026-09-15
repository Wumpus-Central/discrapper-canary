let r, i;
t.d(n, { qg: () => T, Ts: () => W });
let o = new URL(t(146111), t.b),
    _ = Array(128).fill(void 0);
_.push(void 0, null, !0, !1);
let u = 0,
    c = null;
function a() {
    return ((null === c || 0 === c.byteLength) && (c = new Uint8Array(r.memory.buffer)), c);
}
let b =
        "u" > typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                  encode: () => {
                      throw Error("TextEncoder not available");
                  },
              },
    s =
        "function" == typeof b.encodeInto
            ? function (e, n) {
                  return b.encodeInto(e, n);
              }
            : function (e, n) {
                  let t = b.encode(e);
                  return (n.set(t), { read: e.length, written: t.length });
              };
function l(e, n, t) {
    if (void 0 === t) {
        let t = b.encode(e),
            r = n(t.length, 1) >>> 0;
        return (
            a()
                .subarray(r, r + t.length)
                .set(t),
            (u = t.length),
            r
        );
    }
    let r = e.length,
        i = n(r, 1) >>> 0,
        o = a(),
        _ = 0;
    for (; _ < r; _++) {
        let n = e.charCodeAt(_);
        if (n > 127) break;
        o[i + _] = n;
    }
    if (_ !== r) {
        (0 !== _ && (e = e.slice(_)), (i = t(i, r, (r = _ + 3 * e.length), 1) >>> 0));
        let n = s(e, a().subarray(i + _, i + r));
        ((_ += n.written), (i = t(i, r, _, 1) >>> 0));
    }
    return ((u = _), i);
}
let f = null;
function g() {
    return (
        (null === f || !0 === f.buffer.detached || (void 0 === f.buffer.detached && f.buffer !== r.memory.buffer)) &&
            (f = new DataView(r.memory.buffer)),
        f
    );
}
let d = _.length;
function w(e) {
    d === _.length && _.push(_.length + 1);
    let n = d;
    return ((d = _[n]), (_[n] = e), n);
}
function y(e, n) {
    try {
        return e.apply(this, n);
    } catch (e) {
        r.__wbindgen_export_2(w(e));
    }
}
function p(e) {
    let n = _[e];
    return (e < 132 || ((_[e] = d), (d = e)), n);
}
function m(e) {
    return null == e;
}
let h =
    "u" > typeof TextDecoder
        ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
        : {
              decode: () => {
                  throw Error("TextDecoder not available");
              },
          };
function v(e, n) {
    return ((e >>>= 0), h.decode(a().subarray(e, e + n)));
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
            let t = l(String(_[n]), r.__wbindgen_export_0, r.__wbindgen_export_1),
                i = u;
            (g().setInt32(e + 4, i, !0), g().setInt32(e + 0, t, !0));
        }),
        (e.wbg.__wbg_buffer_609cc3eee51ed158 = function (e) {
            return w(_[e].buffer);
        }),
        (e.wbg.__wbg_call_672a4d21634d4a24 = function () {
            return y(function (e, n) {
                return w(_[e].call(_[n]));
            }, arguments);
        }),
        (e.wbg.__wbg_done_769e5ede4b31c67b = function (e) {
            return _[e].done;
        }),
        (e.wbg.__wbg_entries_3265d4158b33e5dc = function (e) {
            return w(Object.entries(_[e]));
        }),
        (e.wbg.__wbg_get_67b2ba62fc30de12 = function () {
            return y(function (e, n) {
                return w(Reflect.get(_[e], _[n]));
            }, arguments);
        }),
        (e.wbg.__wbg_get_b9b93047fe3cf45b = function (e, n) {
            return w(_[e][n >>> 0]);
        }),
        (e.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function (e, n) {
            return w(_[e][_[n]]);
        }),
        (e.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function (e) {
            let n;
            try {
                n = _[e] instanceof ArrayBuffer;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (e.wbg.__wbg_instanceof_Map_f3469ce2244d2430 = function (e) {
            let n;
            try {
                n = _[e] instanceof Map;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (e.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function (e) {
            let n;
            try {
                n = _[e] instanceof Uint8Array;
            } catch (e) {
                n = !1;
            }
            return n;
        }),
        (e.wbg.__wbg_isArray_a1eab7e0d067391b = function (e) {
            return Array.isArray(_[e]);
        }),
        (e.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function (e) {
            return Number.isSafeInteger(_[e]);
        }),
        (e.wbg.__wbg_iterator_9a24c88df860dc65 = function () {
            return w(Symbol.iterator);
        }),
        (e.wbg.__wbg_length_a446193dc22c12f8 = function (e) {
            return _[e].length;
        }),
        (e.wbg.__wbg_length_e2d2a49132c1b256 = function (e) {
            return _[e].length;
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
            return w(new Uint8Array(_[e]));
        }),
        (e.wbg.__wbg_next_25feadfc0913fea9 = function (e) {
            return w(_[e].next);
        }),
        (e.wbg.__wbg_next_6574e1a8a62d1055 = function () {
            return y(function (e) {
                return w(_[e].next());
            }, arguments);
        }),
        (e.wbg.__wbg_set_37837023f3d740e8 = function (e, n, t) {
            _[e][n >>> 0] = p(t);
        }),
        (e.wbg.__wbg_set_3f1d0b984ed272ed = function (e, n, t) {
            _[e][p(n)] = p(t);
        }),
        (e.wbg.__wbg_set_65595bdd868b3009 = function (e, n, t) {
            _[e].set(_[n], t >>> 0);
        }),
        (e.wbg.__wbg_set_8fc6bf8a5b1071d1 = function (e, n, t) {
            return w(_[e].set(_[n], _[t]));
        }),
        (e.wbg.__wbg_value_cd1ffa7b1ab794f1 = function (e) {
            return w(_[e].value);
        }),
        (e.wbg.__wbindgen_as_number = function (e) {
            return +_[e];
        }),
        (e.wbg.__wbindgen_bigint_from_i64 = function (e) {
            return w(e);
        }),
        (e.wbg.__wbindgen_bigint_from_u64 = function (e) {
            return w(BigInt.asUintN(64, e));
        }),
        (e.wbg.__wbindgen_bigint_get_as_i64 = function (e, n) {
            let t = _[n],
                r = "bigint" == typeof t ? t : void 0;
            (g().setBigInt64(e + 8, m(r) ? BigInt(0) : r, !0), g().setInt32(e + 0, !m(r), !0));
        }),
        (e.wbg.__wbindgen_boolean_get = function (e) {
            let n = _[e];
            return "boolean" == typeof n ? +!!n : 2;
        }),
        (e.wbg.__wbindgen_debug_string = function (e, n) {
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
                    })(_[n]),
                    r.__wbindgen_export_0,
                    r.__wbindgen_export_1,
                ),
                i = u;
            (g().setInt32(e + 4, i, !0), g().setInt32(e + 0, t, !0));
        }),
        (e.wbg.__wbindgen_error_new = function (e, n) {
            return w(Error(v(e, n)));
        }),
        (e.wbg.__wbindgen_in = function (e, n) {
            return _[e] in _[n];
        }),
        (e.wbg.__wbindgen_is_bigint = function (e) {
            return "bigint" == typeof _[e];
        }),
        (e.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof _[e];
        }),
        (e.wbg.__wbindgen_is_null = function (e) {
            return null === _[e];
        }),
        (e.wbg.__wbindgen_is_object = function (e) {
            let n = _[e];
            return "object" == typeof n && null !== n;
        }),
        (e.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof _[e];
        }),
        (e.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === _[e];
        }),
        (e.wbg.__wbindgen_jsval_eq = function (e, n) {
            return _[e] === _[n];
        }),
        (e.wbg.__wbindgen_jsval_loose_eq = function (e, n) {
            return _[e] == _[n];
        }),
        (e.wbg.__wbindgen_memory = function () {
            return w(r.memory);
        }),
        (e.wbg.__wbindgen_number_get = function (e, n) {
            let t = _[n],
                r = "number" == typeof t ? t : void 0;
            (g().setFloat64(e + 8, m(r) ? 0 : r, !0), g().setInt32(e + 0, !m(r), !0));
        }),
        (e.wbg.__wbindgen_number_new = function (e) {
            return w(e);
        }),
        (e.wbg.__wbindgen_object_clone_ref = function (e) {
            return w(_[e]);
        }),
        (e.wbg.__wbindgen_object_drop_ref = function (e) {
            p(e);
        }),
        (e.wbg.__wbindgen_string_get = function (e, n) {
            let t = _[n],
                i = "string" == typeof t ? t : void 0;
            var o = m(i) ? 0 : l(i, r.__wbindgen_export_0, r.__wbindgen_export_1),
                c = u;
            (g().setInt32(e + 4, c, !0), g().setInt32(e + 0, o, !0));
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
"u" > typeof TextDecoder && h.decode();
function A(e, n) {
    return ((r = e.exports), (I.__wbindgen_wasm_module = n), (f = null), (c = null), r);
}
async function I(e) {
    if (void 0 !== r) return r;
    (void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = new URL(t(146111), t.b)));
    let n = j();
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: i, module: o } = await x(await e, n);
    return A(i, o);
}
async function k() {
    return (i || (i = await WebAssembly.compileStreaming(fetch(o))), i);
}
async function S() {
    return I({ module_or_path: await k() });
}
let O = !1,
    E = null;
function W() {
    return O
        ? Promise.resolve()
        : (E ??= S().then(
              () => {
                  O = !0;
              },
              (e) => {
                  throw ((E = null), e);
              },
          ));
}
function T(e, n) {
    return (
        !(function () {
            if (O) return;
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
                (O = !0));
        })(),
        (function (e, n) {
            try {
                let o = r.__wbindgen_add_to_stack_pointer(-16),
                    _ = l(e, r.__wbindgen_export_0, r.__wbindgen_export_1),
                    c = u;
                r.parse(o, _, c, w(n), m(void 0) ? 0x100000001 : void 0 >>> 0);
                var t = g().getInt32(o + 0, !0),
                    i = g().getInt32(o + 4, !0);
                if (g().getInt32(o + 8, !0)) throw p(i);
                return p(t);
            } finally {
                r.__wbindgen_add_to_stack_pointer(16);
            }
        })(e, n)
    );
}
