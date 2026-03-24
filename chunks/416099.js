let _;
n.r(t),
    n.d(t, {
        HighlightConfig: () => r,
        default: () => H,
        highlight: () => i,
        highlightWithConfig: () => o,
        initSync: () => k,
        isLanguageAvailable: () => a,
    });
class r {
    __destroy_into_raw() {
        let e = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), c.unregister(this), e;
    }
    free() {
        let e = this.__destroy_into_raw();
        _.__wbg_highlightconfig_free(e, 0);
    }
    constructor() {
        const e = _.highlightconfig_new();
        return (this.__wbg_ptr = e >>> 0), c.register(this, this.__wbg_ptr, this), this;
    }
    setHtmlFormatClassNames() {
        _.highlightconfig_setHtmlFormatClassNames(this.__wbg_ptr);
    }
    setHtmlFormatClassNamesWithPrefix(e) {
        let t = y(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            n = W;
        _.highlightconfig_setHtmlFormatClassNamesWithPrefix(this.__wbg_ptr, t, n);
    }
    setHtmlFormatCustomElements() {
        _.highlightconfig_setHtmlFormatCustomElements(this.__wbg_ptr);
    }
    setHtmlFormatCustomElementsWithPrefix(e) {
        let t = y(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            n = W;
        _.highlightconfig_setHtmlFormatCustomElementsWithPrefix(this.__wbg_ptr, t, n);
    }
    setMaxInjectionDepth(e) {
        _.highlightconfig_setMaxInjectionDepth(this.__wbg_ptr, e);
    }
}
function i(e, t) {
    let n = y(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
        r = W,
        i = y(t, _.__wbindgen_malloc, _.__wbindgen_realloc),
        o = W;
    return _.highlight(n, r, i, o);
}
function o(e, t, n) {
    let i = y(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
        o = W,
        a = y(t, _.__wbindgen_malloc, _.__wbindgen_realloc),
        l = W;
    var s = n,
        c = r;
    if (!(s instanceof c)) throw Error(`expected instance of ${c.name}`);
    var u = n.__destroy_into_raw();
    return _.highlightWithConfig(i, o, a, l, u);
}
function a(e) {
    let t = y(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
        n = W;
    return 0 !== _.isLanguageAvailable(t, n);
}
function l() {
    return {
        __proto__: null,
        "./arborium_host_bg.js": {
            __proto__: null,
            __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: function (e) {
                let t = "boolean" == typeof e ? e : void 0;
                return p(t) ? 0xffffff : +!!t;
            },
            __wbg___wbindgen_is_function_3c846841762788c1: function (e) {
                return "function" == typeof e;
            },
            __wbg___wbindgen_is_null_0b605fc6b167c56f: function (e) {
                return null === e;
            },
            __wbg___wbindgen_is_undefined_52709e72fb9f179c: function (e) {
                return void 0 === e;
            },
            __wbg___wbindgen_number_get_34bb9d9dcfa21373: function (e, t) {
                let n = "number" == typeof t ? t : void 0;
                g().setFloat64(e + 8, p(n) ? 0 : n, !0), g().setInt32(e + 0, !p(n), !0);
            },
            __wbg___wbindgen_string_get_395e606bd0ee4427: function (e, t) {
                let n = "string" == typeof t ? t : void 0;
                var r = p(n) ? 0 : y(n, _.__wbindgen_malloc, _.__wbindgen_realloc),
                    i = W;
                g().setInt32(e + 4, i, !0), g().setInt32(e + 0, r, !0);
            },
            __wbg___wbindgen_throw_6ddd609b62940d55: function (e, t) {
                throw Error(d(e, t));
            },
            __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function (e) {
                e._wbg_cb_unref();
            },
            __wbg_call_2d781c1f4d5c0ef8: function () {
                return m(function (e, t, n) {
                    return e.call(t, n);
                }, arguments);
            },
            __wbg_from_4bdf88943703fd48: function (e) {
                return Array.from(e);
            },
            __wbg_get_3ef1eba1850ade27: function () {
                return m(function (e, t) {
                    return Reflect.get(e, t);
                }, arguments);
            },
            __wbg_get_a8ee5c45dabc1b3b: function (e, t) {
                return e[t >>> 0];
            },
            __wbg_isLanguageAvailable_0c7bc97cdedd9041: function (e, t) {
                return arboriumHost.isLanguageAvailable(d(e, t));
            },
            __wbg_length_b3416cf66a5452c8: function (e) {
                return e.length;
            },
            __wbg_loadGrammar_c5e7001e6b435062: function () {
                return m(function (e, t) {
                    return arboriumHost.loadGrammar(d(e, t));
                }, arguments);
            },
            __wbg_new_typed_aaaeaf29cf802876: function (e, t) {
                try {
                    var n = { a: e, b: t };
                    return new Promise((e, t) => {
                        let r = n.a;
                        n.a = 0;
                        try {
                            var i, o, a, l;
                            return (
                                (i = r),
                                (o = n.b),
                                (a = e),
                                (l = t),
                                void _.wasm_bindgen__convert__closures_____invoke__hd4680ea21377bdcc(i, o, a, l)
                            );
                        } finally {
                            n.a = r;
                        }
                    });
                } finally {
                    n.a = n.b = 0;
                }
            },
            __wbg_parse_ce02579ee3e01a8d: function (e, t, n) {
                return arboriumHost.parse(e >>> 0, d(t, n));
            },
            __wbg_queueMicrotask_0c399741342fb10f: function (e) {
                return e.queueMicrotask;
            },
            __wbg_queueMicrotask_a082d78ce798393e: function (e) {
                queueMicrotask(e);
            },
            __wbg_resolve_ae8d83246e5bcc12: function (e) {
                return Promise.resolve(e);
            },
            __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function () {
                let e = "u" < typeof global ? null : global;
                return p(e) ? 0 : u(e);
            },
            __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function () {
                let e = "u" < typeof globalThis ? null : globalThis;
                return p(e) ? 0 : u(e);
            },
            __wbg_static_accessor_SELF_f207c857566db248: function () {
                let e = "u" < typeof self ? null : self;
                return p(e) ? 0 : u(e);
            },
            __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function () {
                let e = "u" < typeof window ? null : window;
                return p(e) ? 0 : u(e);
            },
            __wbg_then_098abe61755d12f6: function (e, t) {
                return e.then(t);
            },
            __wbg_then_9e335f6dd892bc11: function (e, t, n) {
                return e.then(t, n);
            },
            __wbindgen_cast_0000000000000001: function (e, t) {
                var n, r, i, o;
                let a, l;
                return (
                    (n = e),
                    (r = t),
                    (i = _.wasm_bindgen__closure__destroy__hf4b5e92d38978907),
                    (o = s),
                    (a = { a: n, b: r, cnt: 1, dtor: i }),
                    ((l = (...e) => {
                        a.cnt++;
                        let t = a.a;
                        a.a = 0;
                        try {
                            return o(t, a.b, ...e);
                        } finally {
                            (a.a = t), l._wbg_cb_unref();
                        }
                    })._wbg_cb_unref = () => {
                        0 == --a.cnt && (a.dtor(a.a, a.b), (a.a = 0), f.unregister(a));
                    }),
                    f.register(l, a, a),
                    l
                );
            },
            __wbindgen_cast_0000000000000002: function (e, t) {
                return d(e, t);
            },
            __wbindgen_init_externref_table: function () {
                let e = _.__wbindgen_externrefs,
                    t = e.grow(4);
                e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, !0), e.set(t + 3, !1);
            },
        },
    };
}
function s(e, t, n) {
    let r = _.wasm_bindgen__convert__closures_____invoke__haec7b660a6511385(e, t, n);
    if (r[1]) {
        var i;
        let e;
        throw ((i = r[0]), (e = _.__wbindgen_externrefs.get(i)), _.__externref_table_dealloc(i), e);
    }
}
Symbol.dispose && (r.prototype[Symbol.dispose] = r.prototype.free);
let c =
    "u" < typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => _.__wbg_highlightconfig_free(e >>> 0, 1));
function u(e) {
    let t = _.__externref_table_alloc();
    return _.__wbindgen_externrefs.set(t, e), t;
}
let f =
        "u" < typeof FinalizationRegistry
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((e) => e.dtor(e.a, e.b)),
    b = null;
function g() {
    return (
        (null === b || !0 === b.buffer.detached || (void 0 === b.buffer.detached && b.buffer !== _.memory.buffer)) &&
            (b = new DataView(_.memory.buffer)),
        b
    );
}
function d(e, t) {
    var n, _;
    return (
        (n = e >>>= 0),
        (x += _ = t) >= 0x7ff00000 && ((v = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })).decode(), (x = _)),
        v.decode(h().subarray(n, n + _))
    );
}
let w = null;
function h() {
    return (null === w || 0 === w.byteLength) && (w = new Uint8Array(_.memory.buffer)), w;
}
function m(e, t) {
    try {
        return e.apply(this, t);
    } catch (t) {
        let e = u(t);
        _.__wbindgen_exn_store(e);
    }
}
function p(e) {
    return null == e;
}
function y(e, t, n) {
    if (void 0 === n) {
        let n = A.encode(e),
            _ = t(n.length, 1) >>> 0;
        return (
            h()
                .subarray(_, _ + n.length)
                .set(n),
            (W = n.length),
            _
        );
    }
    let _ = e.length,
        r = t(_, 1) >>> 0,
        i = h(),
        o = 0;
    for (; o < _; o++) {
        let t = e.charCodeAt(o);
        if (t > 127) break;
        i[r + o] = t;
    }
    if (o !== _) {
        0 !== o && (e = e.slice(o)), (r = n(r, _, (_ = o + 3 * e.length), 1) >>> 0);
        let t = h().subarray(r + o, r + _);
        (o += A.encodeInto(e, t).written), (r = n(r, _, o, 1) >>> 0);
    }
    return (W = o), r;
}
let v = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
v.decode();
let x = 0,
    A = new TextEncoder();
"encodeInto" in A ||
    (A.encodeInto = function (e, t) {
        let n = A.encode(e);
        return t.set(n), { read: e.length, written: n.length };
    });
let W = 0;
function C(e, t) {
    return (_ = e.exports), (b = null), (w = null), _.__wbindgen_start(), _;
}
async function F(e, t) {
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
function k(e) {
    if (void 0 !== _) return _;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module: e } = e)
            : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    let t = l();
    return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)), C(new WebAssembly.Instance(e, t), e);
}
async function H(e) {
    if (void 0 !== _) return _;
    void 0 !== e &&
        (Object.getPrototypeOf(e) === Object.prototype
            ? ({ module_or_path: e } = e)
            : console.warn(
                  "using deprecated parameters for the initialization function; pass a single object instead",
              )),
        void 0 === e && (e = void 0);
    let t = l();
    ("string" == typeof e ||
        ("function" == typeof Request && e instanceof Request) ||
        ("function" == typeof URL && e instanceof URL)) &&
        (e = fetch(e));
    let { instance: n, module: r } = await F(await e, t);
    return C(n, r);
}
