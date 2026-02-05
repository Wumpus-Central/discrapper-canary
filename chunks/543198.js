n.r(r),
    n.d(r, { default: () => t }),
    n(323874),
    n(14289),
    n(35956),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073);
let t = async function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var r,
        t,
        a,
        i,
        o,
        s,
        u,
        c,
        f,
        l,
        d,
        b,
        h,
        m,
        p,
        w,
        v,
        g,
        A,
        y = "";
    try {
        y = new URL(
            ".",
            "file:///ci/build/discord/discord/discord_app/modules/image_cropping/web/webp/libwebp/webp_wasm.js",
        ).href;
    } catch {}
    r = async (e) => {
        var r = await fetch(e, { credentials: "same-origin" });
        if (r.ok) return r.arrayBuffer();
        throw Error(r.status + " : " + r.url);
    };
    var P = console.log.bind(console),
        _ = console.error.bind(console),
        W = !1,
        I = !1;
    function E() {
        var r = g.buffer;
        (e.HEAP8 = s = new Int8Array(r)),
            (e.HEAP16 = c = new Int16Array(r)),
            (e.HEAPU8 = u = new Uint8Array(r)),
            (e.HEAPU16 = new Uint16Array(r)),
            (e.HEAP32 = f = new Int32Array(r)),
            (e.HEAPU32 = l = new Uint32Array(r)),
            (e.HEAPF32 = d = new Float32Array(r)),
            (e.HEAPF64 = b = new Float64Array(r)),
            (h = new BigInt64Array(r)),
            new BigUint64Array(r);
    }
    function R(r) {
        e.onAbort?.(r), _((r = "Aborted(" + r + ")")), (W = !0), (r += ". Build with -sASSERTIONS for more info.");
        var n = new WebAssembly.RuntimeError(r);
        throw (o?.(n), n);
    }
    async function k(e) {
        if (!a)
            try {
                var n = await r(e);
                return new Uint8Array(n);
            } catch {}
        if (e == m && a) return new Uint8Array(a);
        if (t) return t(e);
        throw "both async and sync fetching of the wasm failed";
    }
    async function C(e, r) {
        try {
            var n = await k(e);
            return await WebAssembly.instantiate(n, r);
        } catch (e) {
            _(`failed to asynchronously prepare wasm: ${e}`), R(e);
        }
    }
    async function S(e, r, n) {
        if (!e)
            try {
                var t = fetch(r, { credentials: "same-origin" });
                return await WebAssembly.instantiateStreaming(t, n);
            } catch (e) {
                _(`wasm streaming compile failed: ${e}`), _("falling back to ArrayBuffer instantiation");
            }
        return C(r, n);
    }
    async function U() {
        function r(r, n) {
            var t;
            return (
                (e._WebPConfigInitInternal = (t = A = r.exports).f),
                (e._WebPPictureInitInternal = t.g),
                (e._WebPPictureAlloc = t.h),
                (e._WebPPictureFree = t.i),
                (e._WebPPictureImportRGBA = t.j),
                (e._WebPEncode = t.k),
                (e._WebPFree = t.l),
                (e._WebPAnimDecoderOptionsInitInternal = t.m),
                (e._WebPAnimDecoderNewInternal = t.n),
                (e._WebPAnimDecoderDelete = t.o),
                (e._WebPAnimDecoderGetInfo = t.p),
                (e._WebPAnimDecoderGetNext = t.q),
                (e._WebPAnimDecoderHasMoreFrames = t.r),
                (e._WebPAnimEncoderOptionsInitInternal = t.s),
                (e._WebPAnimEncoderNewInternal = t.t),
                (e._WebPAnimEncoderDelete = t.u),
                (e._WebPAnimEncoderAdd = t.v),
                (e._WebPAnimEncoderAssemble = t.w),
                (e._WebPAnimEncoderGetError = t.x),
                (e._malloc = t.y),
                (e._free = t.z),
                (p = t.A),
                (w = t.B),
                (v = t.C),
                (g = t.d),
                t.__indirect_function_table,
                E(),
                A
            );
        }
        var t = { a: q };
        return e.instantiateWasm
            ? new Promise((n, a) => {
                  e.instantiateWasm(t, (e, t) => {
                      n(r(e, t));
                  });
              })
            : ((m ??= (function () {
                  if (e.locateFile) {
                      var r;
                      return (r = "webp_wasm.wasm"), e.locateFile ? e.locateFile(r, y) : y + r;
                  }
                  return new URL(n(14927), n.b).href;
              })()),
              r((await S(a, m, t)).instance));
    }
    var x = (r) => {
            for (; r.length > 0; ) r.shift()(e);
        },
        F = [],
        B = (e) => F.push(e),
        D = [],
        H = (e) => D.push(e),
        T = () => v(),
        M = (e, r) => Math.ceil(e / r) * r,
        G = (e) => {
            var r = g.buffer.byteLength;
            try {
                return g.grow(((e - r + 65535) / 65536) | 0), E(), 1;
            } catch (e) {}
        },
        N = [null, [], []],
        V = globalThis.TextDecoder && new TextDecoder(),
        $ = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                t = arguments.length > 3 ? arguments[3] : void 0;
            var a = ((e, r, n, t) => {
                var a = r + n;
                if (t) return a;
                for (; e[r] && !(r >= a); ) ++r;
                return r;
            })(e, r, n, t);
            if (a - r > 16 && e.buffer && V) return V.decode(e.subarray(r, a));
            for (var i = ""; r < a; ) {
                var o = e[r++];
                if (!(128 & o)) {
                    i += String.fromCharCode(o);
                    continue;
                }
                var s = 63 & e[r++];
                if ((224 & o) == 192) {
                    i += String.fromCharCode(((31 & o) << 6) | s);
                    continue;
                }
                var u = 63 & e[r++];
                if (
                    (o =
                        (240 & o) == 224
                            ? ((15 & o) << 12) | (s << 6) | u
                            : ((7 & o) << 18) | (s << 12) | (u << 6) | (63 & e[r++])) < 65536
                )
                    i += String.fromCharCode(o);
                else {
                    var c = o - 65536;
                    i += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                }
            }
            return i;
        },
        L = (e, r) => {
            var n = N[e];
            0 === r || 10 === r ? ((1 === e ? P : _)($(n)), (n.length = 0)) : n.push(r);
        },
        O = (e, r, n) => (e ? $(u, e, r, n) : ""),
        j = (r) => e["_" + r],
        z = (e, r, n, t, a) => {
            var i = {
                    string: (e) => {
                        var r,
                            n,
                            t,
                            a = 0;
                        return (
                            null != e &&
                                0 !== e &&
                                ((n =
                                    ((e) => {
                                        for (var r = 0, n = 0; n < e.length; ++n) {
                                            var t = e.charCodeAt(n);
                                            t <= 127
                                                ? r++
                                                : t <= 2047
                                                  ? (r += 2)
                                                  : t >= 55296 && t <= 57343
                                                    ? ((r += 4), ++n)
                                                    : (r += 3);
                                        }
                                        return r;
                                    })((r = e)) + 1),
                                (t = w(n)),
                                ((e, r, n, t) => {
                                    if (t > 0) {
                                        for (var a = n + t - 1, i = 0; i < e.length; ++i) {
                                            var o = e.codePointAt(i);
                                            if (o <= 127) {
                                                if (n >= a) break;
                                                r[n++] = o;
                                            } else if (o <= 2047) {
                                                if (n + 1 >= a) break;
                                                (r[n++] = 192 | (o >> 6)), (r[n++] = 128 | (63 & o));
                                            } else if (o <= 65535) {
                                                if (n + 2 >= a) break;
                                                (r[n++] = 224 | (o >> 12)),
                                                    (r[n++] = 128 | ((o >> 6) & 63)),
                                                    (r[n++] = 128 | (63 & o));
                                            } else {
                                                if (n + 3 >= a) break;
                                                (r[n++] = 240 | (o >> 18)),
                                                    (r[n++] = 128 | ((o >> 12) & 63)),
                                                    (r[n++] = 128 | ((o >> 6) & 63)),
                                                    (r[n++] = 128 | (63 & o)),
                                                    i++;
                                            }
                                        }
                                        return (r[n] = 0);
                                    }
                                })(r, u, t, n),
                                (a = t)),
                            a
                        );
                    },
                    array: (e) => {
                        let r;
                        var n = ((r = e.length), w(r));
                        return s.set(e, n), n;
                    },
                },
                o = j(e),
                c = [],
                f = 0;
            if (t)
                for (var l = 0; l < t.length; l++) {
                    var d = i[n[l]];
                    d ? (0 === f && (f = T()), (c[l] = d(t[l]))) : (c[l] = t[l]);
                }
            var b = o(...c);
            return (function (e) {
                return 0 !== f && p(f), "string" === r ? O(e) : "boolean" === r ? !!e : e;
            })(b);
        };
    if (
        (e.noExitRuntime && e.noExitRuntime,
        e.print && (P = e.print),
        e.printErr && (_ = e.printErr),
        e.wasmBinary && (a = e.wasmBinary),
        e.arguments && e.arguments,
        e.thisProgram && e.thisProgram,
        e.preInit)
    )
        for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0; ) e.preInit.shift()();
    (e.ccall = z),
        (e.cwrap = (e, r, n, t) => {
            var a = !n || n.every((e) => "number" === e || "boolean" === e);
            return "string" !== r && a && !t
                ? j(e)
                : function () {
                      for (var a = arguments.length, i = Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                      return z(e, r, n, i, t);
                  };
        }),
        (e.setValue = function (e, r) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "i8";
            switch ((n.endsWith("*") && (n = "*"), n)) {
                case "i1":
                case "i8":
                    s[e] = r;
                    break;
                case "i16":
                    c[e >> 1] = r;
                    break;
                case "i32":
                    f[e >> 2] = r;
                    break;
                case "i64":
                    h[e >> 3] = BigInt(r);
                    break;
                case "float":
                    d[e >> 2] = r;
                    break;
                case "double":
                    b[e >> 3] = r;
                    break;
                case "*":
                    l[e >> 2] = r;
                    break;
                default:
                    R(`invalid type for setValue: ${n}`);
            }
        }),
        (e.getValue = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i8";
            switch ((r.endsWith("*") && (r = "*"), r)) {
                case "i1":
                case "i8":
                    return s[e];
                case "i16":
                    return c[e >> 1];
                case "i32":
                    return f[e >> 2];
                case "i64":
                    return h[e >> 3];
                case "float":
                    return d[e >> 2];
                case "double":
                    return b[e >> 3];
                case "*":
                    return l[e >> 2];
                default:
                    R(`invalid type for getValue: ${r}`);
            }
        }),
        (e.UTF8ToString = O);
    var q = {
        c: (e) => {
            var r = u.length;
            if ((e >>>= 0) > 0x80000000) return !1;
            for (var n = 1; n <= 4; n *= 2) {
                var t = r * (1 + 0.2 / n);
                if (((t = Math.min(t, e + 0x6000000)), G(Math.min(0x80000000, M(Math.max(e, t), 65536))))) return !0;
            }
            return !1;
        },
        b: (e) => 52,
        a: (e, r, n, t) => {
            for (var a = 0, i = 0; i < n; i++) {
                var o = l[r >> 2],
                    s = l[(r + 4) >> 2];
                r += 8;
                for (var c = 0; c < s; c++) L(e, u[o + c]);
                a += s;
            }
            return (l[t >> 2] = a), 0;
        },
    };
    if (((A = await U()), e.preRun))
        for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; ) H(e.preRun.shift());
    function J() {
        if (((e.calledRun = !0), !W)) {
            if (((I = !0), A.e(), i?.(e), e.onRuntimeInitialized?.(), e.postRun))
                for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length; )
                    B(e.postRun.shift());
            x(F);
        }
    }
    return (
        x(D),
        e.setStatus
            ? (e.setStatus("Running..."),
              setTimeout(() => {
                  setTimeout(() => e.setStatus(""), 1), J();
              }, 1))
            : J(),
        I
            ? e
            : new Promise((e, r) => {
                  (i = e), (o = r);
              })
    );
};
