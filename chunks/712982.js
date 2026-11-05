let r;
function i() {
    return {
        __proto__: null,
        "./discord_markdown_wasm_bg.js": {
            __proto__: null,
            __wbg_Error_30c8987f7c2ed4e2: function (e, t) {
                return o(Error(g(e >>> 0, t)));
            },
            __wbg_String_8564e559799eccda: function (e, t) {
                let n = f(String(u[t]), r.__wbindgen_export, r.__wbindgen_export2),
                    i = p;
                (_().setInt32(e + 4, i, !0), _().setInt32(e + 0, n, !0));
            },
            __wbg___wbindgen_is_string_90b56bc79aad6f6c: function (e) {
                return "string" == typeof u[e];
            },
            __wbg___wbindgen_throw_41e9ee4f547fc59a: function (e, t) {
                throw Error(g(e >>> 0, t));
            },
            __wbg_new_28744009d011f847: function () {
                return o(new Map());
            },
            __wbg_new_617a8cdb8bb1130e: function () {
                return o({});
            },
            __wbg_new_ee2291f50781bf1d: function () {
                return o([]);
            },
            __wbg_set_6ae97e73113c4f0b: function (e, t, n) {
                return o(u[e].set(u[t], u[n]));
            },
            __wbg_set_6be42768c690e380: function (e, t, n) {
                u[e][d(t)] = d(n);
            },
            __wbg_set_bea140a88be9b277: function (e, t, n) {
                u[e][t >>> 0] = d(n);
            },
            __wbindgen_generic_0000000000000001: function (e) {
                return o(e);
            },
            __wbindgen_generic_0000000000000002: function (e) {
                return o(e);
            },
            __wbindgen_generic_0000000000000003: function (e, t) {
                return o(g(e >>> 0, t));
            },
            __wbindgen_generic_0000000000000004: function (e) {
                return o(BigInt.asUintN(64, e));
            },
            __wbindgen_object_clone_ref: function (e) {
                return o(u[e]);
            },
            __wbindgen_object_drop_ref: function (e) {
                d(e);
            },
        },
    };
}
function o(e) {
    l === u.length && u.push(u.length + 1);
    let t = l;
    return ((l = u[t]), (u[t] = e), t);
}
let a = null;
function _() {
    return (
        (null === a || !0 === a.buffer.detached || (void 0 === a.buffer.detached && a.buffer !== r.memory.buffer)) &&
            (a = new DataView(r.memory.buffer)),
        a
    );
}
let s = null;
function c() {
    return ((null === s || 0 === s.byteLength) && (s = new Uint8Array(r.memory.buffer)), s);
}
let u = Array(1024).fill(void 0);
u.push(void 0, null, !0, !1);
let l = u.length;
function f(e, t, n) {
    if (void 0 === n) {
        let n = E.encode(e),
            r = t(n.length, 1) >>> 0;
        return (
            c()
                .subarray(r, r + n.length)
                .set(n),
            (p = n.length),
            r
        );
    }
    let r = e.length,
        i = t(r, 1) >>> 0,
        o = c(),
        a = 0;
    for (; a < r; a++) {
        let t = e.charCodeAt(a);
        if (t > 127) break;
        o[i + a] = t;
    }
    if (a !== r) {
        (0 !== a && (e = e.slice(a)), (i = n(i, r, (r = a + 3 * e.length), 1) >>> 0));
        let t = c().subarray(i + a, i + r);
        ((a += E.encodeInto(e, t).written), (i = n(i, r, a, 1) >>> 0));
    }
    return ((p = a), i);
}
function d(e) {
    let t = u[e];
    return (e < 1028 || ((u[e] = l), (l = e)), t);
}
let b = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
b.decode();
let w = 0;
function g(e, t) {
    return (
        (w += t) >= 0x7ff00000 && ((b = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (w = t)),
        b.decode(c().subarray(e, e + t))
    );
}
let E = new TextEncoder();
"encodeInto" in E ||
    (E.encodeInto = function (e, t) {
        let n = E.encode(e);
        return (t.set(n), { read: e.length, written: n.length });
    });
let p = 0;
function I(e, t) {
    return ((r = e.exports), (a = null), (s = null), r);
}
n.d(
    t,
    {},
    {
        Ay: async function (e) {
            if (void 0 !== r) return r;
            (void 0 !== e &&
                (Object.getPrototypeOf(e) === Object.prototype
                    ? ({ module_or_path: e } = e)
                    : console.warn(
                          "using deprecated parameters for the initialization function; pass a single object instead",
                      )),
                void 0 === e && (e = new URL(n(445181), n.b)));
            let t = i();
            ("string" == typeof e ||
                ("function" == typeof Request && e instanceof Request) ||
                ("function" == typeof URL && e instanceof URL)) &&
                (e = fetch(e));
            let { instance: o, module: a } = await (async function (e, t) {
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
            })(await e, t);
            return I(o, a);
        },
        IS: function (e, t, n) {
            try {
                let c = r.__wbindgen_add_to_stack_pointer(-16),
                    u = f(e, r.__wbindgen_export, r.__wbindgen_export2),
                    l = p;
                r.parseLossless(
                    c,
                    u,
                    l,
                    ((i = t), null == i) ? Number.MAX_SAFE_INTEGER : t >>> 0,
                    ((o = n), null == o) ? Number.MAX_SAFE_INTEGER : n >>> 0,
                );
                var i,
                    o,
                    a = _().getInt32(c + 0, !0),
                    s = _().getInt32(c + 4, !0);
                if (_().getInt32(c + 8, !0)) throw d(s);
                return d(a);
            } finally {
                r.__wbindgen_add_to_stack_pointer(16);
            }
        },
        QR: function (e) {
            if (void 0 !== r) return r;
            void 0 !== e &&
                (Object.getPrototypeOf(e) === Object.prototype
                    ? ({ module: e } = e)
                    : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
            let t = i();
            return (
                e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), I(new WebAssembly.Instance(e, t), e)
            );
        },
        qg: function (e, t, n) {
            try {
                let c = r.__wbindgen_add_to_stack_pointer(-16),
                    u = f(e, r.__wbindgen_export, r.__wbindgen_export2),
                    l = p;
                r.parse(
                    c,
                    u,
                    l,
                    ((i = t), null == i) ? Number.MAX_SAFE_INTEGER : t >>> 0,
                    ((o = n), null == o) ? Number.MAX_SAFE_INTEGER : n >>> 0,
                );
                var i,
                    o,
                    a = _().getInt32(c + 0, !0),
                    s = _().getInt32(c + 4, !0);
                if (_().getInt32(c + 8, !0)) throw d(s);
                return d(a);
            } finally {
                r.__wbindgen_add_to_stack_pointer(16);
            }
        },
    },
);
