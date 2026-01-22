n.r(r),
    n.d(r, { default: () => t }),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(65821),
    n(927092),
    n(212978),
    n(24457),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(440738),
    n(201528),
    n(298793),
    n(777220),
    n(834879),
    n(648691),
    n(797484),
    n(321073),
    n(734808);
let t = async function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var r,
        t,
        i,
        a,
        o,
        u,
        c,
        s,
        l,
        f,
        h,
        d,
        b,
        m,
        p,
        g,
        v,
        w,
        A,
        y = "";
    try {
        y = new URL(
            ".",
            "file:///ci/build/discord/discord/discord_app/modules/image_cropping/web/webp/libwebp/webp_wasm.js",
        ).href;
    } catch (e) {}
    r = async (e) => {
        var r = await fetch(e, { credentials: "same-origin" });
        if (r.ok) return r.arrayBuffer();
        throw Error(r.status + " : " + r.url);
    };
    var P = console.log.bind(console),
        _ = console.error.bind(console),
        I = !1,
        W = !1;
    function E() {
        var r = w.buffer;
        (e.HEAP8 = u = new Int8Array(r)),
            (e.HEAP16 = s = new Int16Array(r)),
            (e.HEAPU8 = c = new Uint8Array(r)),
            (e.HEAPU16 = new Uint16Array(r)),
            (e.HEAP32 = l = new Int32Array(r)),
            (e.HEAPU32 = f = new Uint32Array(r)),
            (e.HEAPF32 = h = new Float32Array(r)),
            (e.HEAPF64 = d = new Float64Array(r)),
            (b = new BigInt64Array(r)),
            new BigUint64Array(r);
    }
    function R(r) {
        null == (n = e.onAbort) || n.call(e, r),
            _((r = "Aborted(" + r + ")")),
            (I = !0),
            (r += ". Build with -sASSERTIONS for more info.");
        var n,
            t = new WebAssembly.RuntimeError(r);
        throw (null == o || o(t), t);
    }
    async function k(e) {
        if (!i)
            try {
                var n = await r(e);
                return new Uint8Array(n);
            } catch (e) {}
        if (e == m && i) return new Uint8Array(i);
        if (t) return t(e);
        throw "both async and sync fetching of the wasm failed";
    }
    async function U(e, r) {
        try {
            var n = await k(e);
            return await WebAssembly.instantiate(n, r);
        } catch (e) {
            _("failed to asynchronously prepare wasm: ".concat(e)), R(e);
        }
    }
    async function C(e, r, n) {
        if (!e)
            try {
                var t = fetch(r, { credentials: "same-origin" });
                return await WebAssembly.instantiateStreaming(t, n);
            } catch (e) {
                _("wasm streaming compile failed: ".concat(e)), _("falling back to ArrayBuffer instantiation");
            }
        return U(r, n);
    }
    async function F() {
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
                (g = t.B),
                (v = t.C),
                (w = t.d),
                t.__indirect_function_table,
                E(),
                A
            );
        }
        var t = { a: J };
        return e.instantiateWasm
            ? new Promise((n, i) => {
                  e.instantiateWasm(t, (e, t) => {
                      n(r(e, t));
                  });
              })
            : (null != m ||
                  (m = (function () {
                      if (e.locateFile) {
                          var r;
                          return (r = "webp_wasm.wasm"), e.locateFile ? e.locateFile(r, y) : y + r;
                      }
                      return new URL(n(14927), n.b).href;
                  })()),
              r((await C(i, m, t)).instance));
    }
    var S = (r) => {
            for (; r.length > 0; ) r.shift()(e);
        },
        x = [],
        B = (e) => x.push(e),
        D = [],
        T = (e) => D.push(e),
        H = () => v(),
        M = (e, r) => Math.ceil(e / r) * r,
        G = (e) => {
            var r = w.buffer.byteLength;
            try {
                return w.grow(((e - r + 65535) / 65536) | 0), E(), 1;
            } catch (e) {}
        },
        N = [null, [], []],
        V = globalThis.TextDecoder && new TextDecoder(),
        L = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 ? arguments[2] : void 0,
                t = arguments.length > 3 ? arguments[3] : void 0;
            var i = ((e, r, n, t) => {
                var i = r + n;
                if (t) return i;
                for (; e[r] && !(r >= i); ) ++r;
                return r;
            })(e, r, n, t);
            if (i - r > 16 && e.buffer && V) return V.decode(e.subarray(r, i));
            for (var a = ""; r < i; ) {
                var o = e[r++];
                if (!(128 & o)) {
                    a += String.fromCharCode(o);
                    continue;
                }
                var u = 63 & e[r++];
                if ((224 & o) == 192) {
                    a += String.fromCharCode(((31 & o) << 6) | u);
                    continue;
                }
                var c = 63 & e[r++];
                if (
                    (o =
                        (240 & o) == 224
                            ? ((15 & o) << 12) | (u << 6) | c
                            : ((7 & o) << 18) | (u << 12) | (c << 6) | (63 & e[r++])) < 65536
                )
                    a += String.fromCharCode(o);
                else {
                    var s = o - 65536;
                    a += String.fromCharCode(55296 | (s >> 10), 56320 | (1023 & s));
                }
            }
            return a;
        },
        O = (e, r) => {
            var n = N[e];
            0 === r || 10 === r ? ((1 === e ? P : _)(L(n)), (n.length = 0)) : n.push(r);
        },
        j = (e, r, n) => (e ? L(c, e, r, n) : ""),
        z = (r) => e["_" + r],
        q = (e, r, n, t, i) => {
            var a = {
                    string: (e) => {
                        var r,
                            n,
                            t,
                            i = 0;
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
                                (t = g(n)),
                                ((e, r, n, t) => {
                                    if (t > 0) {
                                        for (var i = n + t - 1, a = 0; a < e.length; ++a) {
                                            var o = e.codePointAt(a);
                                            if (o <= 127) {
                                                if (n >= i) break;
                                                r[n++] = o;
                                            } else if (o <= 2047) {
                                                if (n + 1 >= i) break;
                                                (r[n++] = 192 | (o >> 6)), (r[n++] = 128 | (63 & o));
                                            } else if (o <= 65535) {
                                                if (n + 2 >= i) break;
                                                (r[n++] = 224 | (o >> 12)),
                                                    (r[n++] = 128 | ((o >> 6) & 63)),
                                                    (r[n++] = 128 | (63 & o));
                                            } else {
                                                if (n + 3 >= i) break;
                                                (r[n++] = 240 | (o >> 18)),
                                                    (r[n++] = 128 | ((o >> 12) & 63)),
                                                    (r[n++] = 128 | ((o >> 6) & 63)),
                                                    (r[n++] = 128 | (63 & o)),
                                                    a++;
                                            }
                                        }
                                        return (r[n] = 0);
                                    }
                                })(r, c, t, n),
                                (i = t)),
                            i
                        );
                    },
                    array: (e) => {
                        let r;
                        var n = ((r = e.length), g(r));
                        return u.set(e, n), n;
                    },
                },
                o = z(e),
                s = [],
                l = 0;
            if (t)
                for (var f = 0; f < t.length; f++) {
                    var h = a[n[f]];
                    h ? (0 === l && (l = H()), (s[f] = h(t[f]))) : (s[f] = t[f]);
                }
            var d = o(...s);
            return (function (e) {
                return 0 !== l && p(l), "string" === r ? j(e) : "boolean" === r ? !!e : e;
            })(d);
        };
    if (
        (e.noExitRuntime && e.noExitRuntime,
        e.print && (P = e.print),
        e.printErr && (_ = e.printErr),
        e.wasmBinary && (i = e.wasmBinary),
        e.arguments && e.arguments,
        e.thisProgram && e.thisProgram,
        e.preInit)
    )
        for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0; ) e.preInit.shift()();
    (e.ccall = q),
        (e.cwrap = (e, r, n, t) => {
            var i = !n || n.every((e) => "number" === e || "boolean" === e);
            return "string" !== r && i && !t
                ? z(e)
                : function () {
                      for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                      return q(e, r, n, a, t);
                  };
        }),
        (e.setValue = function (e, r) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "i8";
            switch ((n.endsWith("*") && (n = "*"), n)) {
                case "i1":
                case "i8":
                    u[e] = r;
                    break;
                case "i16":
                    s[e >> 1] = r;
                    break;
                case "i32":
                    l[e >> 2] = r;
                    break;
                case "i64":
                    b[e >> 3] = BigInt(r);
                    break;
                case "float":
                    h[e >> 2] = r;
                    break;
                case "double":
                    d[e >> 3] = r;
                    break;
                case "*":
                    f[e >> 2] = r;
                    break;
                default:
                    R("invalid type for setValue: ".concat(n));
            }
        }),
        (e.getValue = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i8";
            switch ((r.endsWith("*") && (r = "*"), r)) {
                case "i1":
                case "i8":
                    return u[e];
                case "i16":
                    return s[e >> 1];
                case "i32":
                    return l[e >> 2];
                case "i64":
                    return b[e >> 3];
                case "float":
                    return h[e >> 2];
                case "double":
                    return d[e >> 3];
                case "*":
                    return f[e >> 2];
                default:
                    R("invalid type for getValue: ".concat(r));
            }
        }),
        (e.UTF8ToString = j);
    var J = {
        c: (e) => {
            var r = c.length;
            if ((e >>>= 0) > 2147483648) return !1;
            for (var n = 1; n <= 4; n *= 2) {
                var t = r * (1 + 0.2 / n);
                if (((t = Math.min(t, e + 100663296)), G(Math.min(2147483648, M(Math.max(e, t), 65536))))) return !0;
            }
            return !1;
        },
        b: (e) => 52,
        a: (e, r, n, t) => {
            for (var i = 0, a = 0; a < n; a++) {
                var o = f[r >> 2],
                    u = f[(r + 4) >> 2];
                r += 8;
                for (var s = 0; s < u; s++) O(e, c[o + s]);
                i += u;
            }
            return (f[t >> 2] = i), 0;
        },
    };
    if (((A = await F()), e.preRun))
        for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; ) T(e.preRun.shift());
    function K() {
        var r;
        if (((e.calledRun = !0), !I)) {
            if (((W = !0), A.e(), null == a || a(e), null == (r = e.onRuntimeInitialized) || r.call(e), e.postRun))
                for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length; )
                    B(e.postRun.shift());
            S(x);
        }
    }
    return (
        S(D),
        e.setStatus
            ? (e.setStatus("Running..."),
              setTimeout(() => {
                  setTimeout(() => e.setStatus(""), 1), K();
              }, 1))
            : K(),
        W
            ? e
            : new Promise((e, r) => {
                  (a = e), (o = r);
              })
    );
};
