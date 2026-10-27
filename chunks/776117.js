let r, i;
n.d(t, {
    w4: () => S,
    qg: () => L,
    tJ: () =>
        function* e(t) {
            for (let n of t)
                switch ((yield n, n.type)) {
                    case "paragraph":
                    case "strikethrough":
                    case "underline":
                    case "italic":
                    case "bold":
                    case "quote":
                        yield* e(n.value);
                        break;
                    case "spoiler":
                    case "heading":
                    case "small":
                        yield* e(n.value.content);
                        break;
                    case "list":
                        for (let t of n.value.items) yield* e(t.content);
                        break;
                    case "link":
                        n.text && (yield* e(n.text));
                }
        },
    Ts: () => M,
});
let o = new URL(n(136089), n.b);
function _() {
    return {
        __proto__: null,
        "./discord_markdown_wasm_bg.js": {
            __proto__: null,
            __wbg_Error_30c8987f7c2ed4e2: function (e, t) {
                return a(Error(m(e >>> 0, t)));
            },
            __wbg_Number_14af1003b8dd5ead: function (e) {
                return Number(d[e]);
            },
            __wbg_String_8564e559799eccda: function (e, t) {
                let n = w(String(d[t]), r.__wbindgen_export, r.__wbindgen_export2),
                    i = I;
                (c().setInt32(e + 4, i, !0), c().setInt32(e + 0, n, !0));
            },
            __wbg___wbindgen_bigint_get_as_i64_a2383202b9353e4c: function (e, t) {
                let n = d[t],
                    r = "bigint" == typeof n ? n : void 0;
                (c().setBigInt64(e + 8, g(r) ? BigInt(0) : r, !0), c().setInt32(e + 0, !g(r), !0));
            },
            __wbg___wbindgen_boolean_get_5b446f51afd21013: function (e) {
                let t = d[e],
                    n = "boolean" == typeof t ? t : void 0;
                return g(n) ? 0xffffff : +!!n;
            },
            __wbg___wbindgen_debug_string_4687d8d8c2017d52: function (e, t) {
                let n = w(
                        (function e(t) {
                            let n,
                                r = typeof t;
                            if ("number" == r || "boolean" == r || null == t) return `${t}`;
                            if ("string" == r) return `"${t}"`;
                            if ("symbol" == r) {
                                let e = t.description;
                                return null == e ? "Symbol" : `Symbol(${e})`;
                            }
                            if ("function" == r) {
                                let e = t.name;
                                return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function";
                            }
                            if (Array.isArray(t)) {
                                let n = t.length,
                                    r = "[";
                                n > 0 && (r += e(t[0]));
                                for (let i = 1; i < n; i++) r += ", " + e(t[i]);
                                return r + "]";
                            }
                            let i = /\[object ([^\]]+)\]/.exec(toString.call(t));
                            if (!i || !(i.length > 1)) return toString.call(t);
                            if ("Object" == (n = i[1]))
                                try {
                                    return "Object(" + JSON.stringify(t) + ")";
                                } catch (e) {
                                    return "Object";
                                }
                            return t instanceof Error
                                ? `${t.name}: ${t.message}
${t.stack}`
                                : n;
                        })(d[t]),
                        r.__wbindgen_export,
                        r.__wbindgen_export2,
                    ),
                    i = I;
                (c().setInt32(e + 4, i, !0), c().setInt32(e + 0, n, !0));
            },
            __wbg___wbindgen_in_92f62ee1427d9e49: function (e, t) {
                return d[e] in d[t];
            },
            __wbg___wbindgen_is_bigint_b123553bed3bb382: function (e) {
                return "bigint" == typeof d[e];
            },
            __wbg___wbindgen_is_function_1f9d30630b8b1d3d: function (e) {
                return "function" == typeof d[e];
            },
            __wbg___wbindgen_is_object_3c45d4f2dde4e749: function (e) {
                let t = d[e];
                return "object" == typeof t && null !== t;
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function (e) {
                return "string" == typeof d[e];
            },
            __wbg___wbindgen_is_undefined_8865fb403f8fe9d8: function (e) {
                return void 0 === d[e];
            },
            __wbg___wbindgen_jsval_eq_02babf21faa37971: function (e, t) {
                return d[e] === d[t];
            },
            __wbg___wbindgen_jsval_loose_eq_677f21e468d6b461: function (e, t) {
                return d[e] == d[t];
            },
            __wbg___wbindgen_number_get_2e0e7dee9f701a71: function (e, t) {
                let n = d[t],
                    r = "number" == typeof n ? n : void 0;
                (c().setFloat64(e + 8, g(r) ? 0 : r, !0), c().setInt32(e + 0, !g(r), !0));
            },
            __wbg___wbindgen_string_get_0380ccaa2f57f0d9: function (e, t) {
                let n = d[t],
                    i = "string" == typeof n ? n : void 0;
                var o = g(i) ? 0 : w(i, r.__wbindgen_export, r.__wbindgen_export2),
                    _ = I;
                (c().setInt32(e + 4, _, !0), c().setInt32(e + 0, o, !0));
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function (e, t) {
                throw Error(m(e >>> 0, t));
            },
            __wbg_call_6137034ef55c9d0f: function () {
                return f(function (e, t) {
                    return a(d[e].call(d[t]));
                }, arguments);
            },
            __wbg_done_b41a1d26cdb37fb6: function (e) {
                return d[e].done;
            },
            __wbg_entries_fb6397112b1de25f: function (e) {
                return a(Object.entries(d[e]));
            },
            __wbg_get_658f6698067d9515: function () {
                return f(function (e, t) {
                    return a(Reflect.get(d[e], d[t]));
                }, arguments);
            },
            __wbg_get_6c896e0571ddae51: function (e, t) {
                return a(d[e][t >>> 0]);
            },
            __wbg_get_unchecked_288889d017702237: function (e, t) {
                return a(d[e][t >>> 0]);
            },
            __wbg_get_with_ref_key_6412cf3094599694: function (e, t) {
                return a(d[e][d[t]]);
            },
            __wbg_instanceof_ArrayBuffer_a99f175873e5d9b8: function (e) {
                let t;
                try {
                    t = d[e] instanceof ArrayBuffer;
                } catch (e) {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Map_b2611749102d7ba3: function (e) {
                let t;
                try {
                    t = d[e] instanceof Map;
                } catch (e) {
                    t = !1;
                }
                return t;
            },
            __wbg_instanceof_Uint8Array_828cef2aaacafc31: function (e) {
                let t;
                try {
                    t = d[e] instanceof Uint8Array;
                } catch (e) {
                    t = !1;
                }
                return t;
            },
            __wbg_isArray_e15a2ff68ffdbef2: function (e) {
                return Array.isArray(d[e]);
            },
            __wbg_isSafeInteger_717808ad6a54bd9e: function (e) {
                return Number.isSafeInteger(d[e]);
            },
            __wbg_iterator_e3c31c892080e444: function () {
                return a(Symbol.iterator);
            },
            __wbg_length_7f3c00c40364105e: function (e) {
                return d[e].length;
            },
            __wbg_length_d4bdea10311bd9cf: function (e) {
                return d[e].length;
            },
            __wbg_new_1dbf7428bba60a42: function (e) {
                return a(new Uint8Array(d[e]));
            },
            __wbg_new_28744009d011f847: function () {
                return a(new Map());
            },
            __wbg_new_617a8cdb8bb1130e: function () {
                return a({});
            },
            __wbg_new_ee2291f50781bf1d: function () {
                return a([]);
            },
            __wbg_next_33784799010f1bbe: function (e) {
                return a(d[e].next);
            },
            __wbg_next_f4aac29c42af995c: function () {
                return f(function (e) {
                    return a(d[e].next());
                }, arguments);
            },
            __wbg_prototypesetcall_bc27214492979395: function (e, t, n) {
                var r, i;
                Uint8Array.prototype.set.call(((r = e), (i = t), (r >>>= 0), l().subarray(r / 1, r / 1 + i)), d[n]);
            },
            __wbg_set_6ae97e73113c4f0b: function (e, t, n) {
                return a(d[e].set(d[t], d[n]));
            },
            __wbg_set_6be42768c690e380: function (e, t, n) {
                d[e][p(t)] = p(n);
            },
            __wbg_set_bea140a88be9b277: function (e, t, n) {
                d[e][t >>> 0] = p(n);
            },
            __wbg_value_f3c585ee8f5ba40c: function (e) {
                return a(d[e].value);
            },
            __wbindgen_generic_0000000000000001: function (e) {
                return a(e);
            },
            __wbindgen_generic_0000000000000002: function (e) {
                return a(e);
            },
            __wbindgen_generic_0000000000000003: function (e, t) {
                return a(m(e >>> 0, t));
            },
            __wbindgen_generic_0000000000000004: function (e) {
                return a(BigInt.asUintN(64, e));
            },
            __wbindgen_object_clone_ref: function (e) {
                return a(d[e]);
            },
            __wbindgen_object_drop_ref: function (e) {
                p(e);
            },
        },
    };
}
function a(e) {
    b === d.length && d.push(d.length + 1);
    let t = b;
    return ((b = d[t]), (d[t] = e), t);
}
let s = null;
function c() {
    return (
        (null === s || !0 === s.buffer.detached || (void 0 === s.buffer.detached && s.buffer !== r.memory.buffer)) &&
            (s = new DataView(r.memory.buffer)),
        s
    );
}
let u = null;
function l() {
    return ((null === u || 0 === u.byteLength) && (u = new Uint8Array(r.memory.buffer)), u);
}
function f(e, t) {
    try {
        return e.apply(this, t);
    } catch (e) {
        r.__wbindgen_export3(a(e));
    }
}
let d = Array(1024).fill(void 0);
d.push(void 0, null, !0, !1);
let b = d.length;
function g(e) {
    return null == e;
}
function w(e, t, n) {
    if (void 0 === n) {
        let n = E.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            l()
                .subarray(r, r + n.length)
                .set(n),
            (I = n.length),
            r
        );
    }
    let r = e.length,
        i = t(r, 1) >>> 0,
        o = l(),
        _ = 0;
    for (; _ < r; _++) {
        let t = e.charCodeAt(_);
        if (t > 127) break;
        o[i + _] = t;
    }
    if (_ !== r) {
        (0 !== _ && (e = e.slice(_)), (i = n(i, r, (r = _ + 3 * e.length), 1) >>> 0));
        let t = l().subarray(i + _, i + r);
        ((_ += E.encodeInto(e, t).written), (i = n(i, r, _, 1) >>> 0));
    }
    return ((I = _), i);
}
function p(e) {
    let t = d[e];
    return (e < 1028 || ((d[e] = b), (b = e)), t);
}
let y = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
y.decode();
let h = 0;
function m(e, t) {
    return (
        (h += t) >= 0x7ff00000 && ((y = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (h = t)),
        y.decode(l().subarray(e, e + t))
    );
}
let E = new TextEncoder();
"encodeInto" in E ||
    (E.encodeInto = function (e, t) {
        let n = E.encode(e);
        return (t.set(n), { read: e.length, written: n.length });
    });
let I = 0;
function v(e, t) {
    return ((r = e.exports), (s = null), (u = null), r);
}
async function x(e, t) {
    if ("function" == typeof Response && e instanceof Response) {
        if (!e.ok) throw Error(`failed to fetch Wasm: ${e.status} ${e.statusText} fetching '${e.url}'`);
        if ("function" == typeof WebAssembly.instantiateStreaming)
            try {
                return await WebAssembly.instantiateStreaming(e, t);
            } catch (t) {
                if (
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
async function O(e) {
    if (void 0 !== r) return r;
    (void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = new URL(n(136089), n.b)));
    let t = _();
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: i, module: o } = await x(await e, t);
    return v(i, o);
}
async function A() {
    return (i || (i = await WebAssembly.compileStreaming(fetch(o))), i);
}
async function N() {
    return O({ module_or_path: await A() });
}
let S = Object.freeze({
        CUSTOM_EMOJI: 1,
        COLON_EMOJI: 2,
        UNICODE_EMOJI: 4,
        MASKED_LINK: 8,
        DETECTED_LINK: 16,
        AUTO_LINK: 32,
        CONTACT_LINK: 64,
        USER_MENTION: 128,
        CHANNEL_MENTION: 256,
        ROLE_MENTION: 512,
        GAME_MENTION: 1024,
        COMMAND_MENTION: 2048,
        EVERYONE_MENTION: 4096,
        HERE_MENTION: 8192,
        STATIC_MENTION: 16384,
        TIMESTAMP: 32768,
        CODE_BLOCK: 65536,
        CODE: 131072,
        DOUBLE_CODE: 262144,
        BOLD: 524288,
        ASTERISK_ITALIC: 1048576,
        UNDERSCORE_ITALIC: 2097152,
        UNDERLINE: 4194304,
        STRIKETHROUGH: 8388608,
        SPOILER: 0x1000000,
        HEADING: 0x2000000,
        LIST: 0x4000000,
        QUOTE: 0x8000000,
        MULTILINE_QUOTE: 0x10000000,
        SMALL: 0x20000000,
        DEV_LINKS: 0x40000000,
        EMOJI: 7,
        LINKS: 120,
        MENTIONS: 32640,
        CODE_SPANS: 393216,
        ITALIC: 3145728,
        QUOTES: 0x18000000,
        ALL: 0x7fffffff,
    }),
    T = !1,
    j = null;
function M() {
    return T
        ? Promise.resolve()
        : (j ??= N().then(
              () => {
                  T = !0;
              },
              (e) => {
                  throw ((j = null), e);
              },
          ));
}
function L(e, t) {
    return (
        !(function () {
            if (T) return;
            let e = (i || (i = null), i);
            if (!e)
                throw Error(
                    "@discord/markdown-wasm is not initialised. Await init() once before parsing, or hand already-compiled wasm to initSync().",
                );
            (!(function (e) {
                var t = { module: e };
                if (void 0 !== r) return;
                void 0 !== t &&
                    (Object.getPrototypeOf(t) === Object.prototype
                        ? ({ module: t } = t)
                        : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
                let n = _();
                (t instanceof WebAssembly.Module || (t = new WebAssembly.Module(t)),
                    v(new WebAssembly.Instance(t, n), t));
            })(e),
                (T = !0));
        })(),
        (function (e, t) {
            try {
                let o = r.__wbindgen_add_to_stack_pointer(-16),
                    _ = w(e, r.__wbindgen_export, r.__wbindgen_export2),
                    a = I;
                r.parse(
                    o,
                    _,
                    a,
                    g(t) ? Number.MAX_SAFE_INTEGER : t >>> 0,
                    g(void 0) ? Number.MAX_SAFE_INTEGER : void 0 >>> 0,
                );
                var n = c().getInt32(o + 0, !0),
                    i = c().getInt32(o + 4, !0);
                if (c().getInt32(o + 8, !0)) throw p(i);
                return p(n);
            } finally {
                r.__wbindgen_add_to_stack_pointer(16);
            }
        })(e, t)
    );
}
