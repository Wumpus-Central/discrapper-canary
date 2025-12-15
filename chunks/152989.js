e.r(r),
    e.d(r, { default: () => t }),
    e(190126),
    e(368063),
    e(65234),
    e(111804),
    e(490233),
    e(97749),
    e(388685),
    e(415506),
    e(66299),
    e(227481),
    e(730884),
    e(20464),
    e(341884),
    e(364341),
    e(629680),
    e(505025),
    e(918970),
    e(121784),
    e(644351),
    e(146733),
    e(189980),
    e(410992),
    e(82823),
    e(491343),
    e(259475),
    e(17294),
    e(733314),
    e(539854),
    e(980754);
let t = async function () {
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var r,
        t,
        i,
        a,
        o,
        u,
        c,
        s,
        f,
        l,
        h,
        b,
        d,
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
    } catch (n) {}
    r = async (n) => {
        var r = await fetch(n, { credentials: "same-origin" });
        if (r.ok) return r.arrayBuffer();
        throw Error(r.status + " : " + r.url);
    };
    var P = console.log.bind(console),
        _ = console.error.bind(console),
        I = !1,
        W = !1;
    function E() {
        var r = w.buffer;
        (n.HEAP8 = u = new Int8Array(r)),
            (n.HEAP16 = s = new Int16Array(r)),
            (n.HEAPU8 = c = new Uint8Array(r)),
            (n.HEAPU16 = new Uint16Array(r)),
            (n.HEAP32 = f = new Int32Array(r)),
            (n.HEAPU32 = l = new Uint32Array(r)),
            (n.HEAPF32 = h = new Float32Array(r)),
            (n.HEAPF64 = b = new Float64Array(r)),
            (d = new BigInt64Array(r)),
            new BigUint64Array(r);
    }
    function R(r) {
        null == (e = n.onAbort) || e.call(n, r),
            _((r = "Aborted(" + r + ")")),
            (I = !0),
            (r += ". Build with -sASSERTIONS for more info.");
        var e,
            t = new WebAssembly.RuntimeError(r);
        throw (null == o || o(t), t);
    }
    async function k(n) {
        if (!i)
            try {
                var e = await r(n);
                return new Uint8Array(e);
            } catch (n) {}
        if (n == m && i) return new Uint8Array(i);
        if (t) return t(n);
        throw "both async and sync fetching of the wasm failed";
    }
    async function U(n, r) {
        try {
            var e = await k(n);
            return await WebAssembly.instantiate(e, r);
        } catch (n) {
            _("failed to asynchronously prepare wasm: ".concat(n)), R(n);
        }
    }
    async function C(n, r, e) {
        if (!n)
            try {
                var t = fetch(r, { credentials: "same-origin" });
                return await WebAssembly.instantiateStreaming(t, e);
            } catch (n) {
                _("wasm streaming compile failed: ".concat(n)), _("falling back to ArrayBuffer instantiation");
            }
        return U(r, e);
    }
    async function F() {
        function r(r, e) {
            var t;
            return (
                (n._WebPConfigInitInternal = (t = A = r.exports).f),
                (n._WebPPictureInitInternal = t.g),
                (n._WebPPictureAlloc = t.h),
                (n._WebPPictureFree = t.i),
                (n._WebPPictureImportRGBA = t.j),
                (n._WebPEncode = t.k),
                (n._WebPFree = t.l),
                (n._WebPAnimDecoderOptionsInitInternal = t.m),
                (n._WebPAnimDecoderNewInternal = t.n),
                (n._WebPAnimDecoderDelete = t.o),
                (n._WebPAnimDecoderGetInfo = t.p),
                (n._WebPAnimDecoderGetNext = t.q),
                (n._WebPAnimDecoderHasMoreFrames = t.r),
                (n._WebPAnimEncoderOptionsInitInternal = t.s),
                (n._WebPAnimEncoderNewInternal = t.t),
                (n._WebPAnimEncoderDelete = t.u),
                (n._WebPAnimEncoderAdd = t.v),
                (n._WebPAnimEncoderAssemble = t.w),
                (n._WebPAnimEncoderGetError = t.x),
                (n._malloc = t.y),
                (n._free = t.z),
                (p = t.A),
                (g = t.B),
                (v = t.C),
                (w = t.d),
                t.__indirect_function_table,
                E(),
                A
            );
        }
        var t = { a: K };
        return n.instantiateWasm
            ? new Promise((e, i) => {
                  n.instantiateWasm(t, (n, t) => {
                      e(r(n, t));
                  });
              })
            : (null != m ||
                  (m = (function () {
                      if (n.locateFile) {
                          var r;
                          return (r = "webp_wasm.wasm"), n.locateFile ? n.locateFile(r, y) : y + r;
                      }
                      return new URL(e(432362), e.b).href;
                  })()),
              r((await C(i, m, t)).instance));
    }
    var S = (r) => {
            for (; r.length > 0; ) r.shift()(n);
        },
        x = [],
        B = (n) => x.push(n),
        D = [],
        T = (n) => D.push(n),
        H = () => v(),
        M = (n, r) => Math.ceil(n / r) * r,
        G = (n) => {
            var r = w.buffer.byteLength;
            try {
                return w.grow(((n - r + 65535) / 65536) | 0), E(), 1;
            } catch (n) {}
        },
        N = [null, [], []],
        V = globalThis.TextDecoder && new TextDecoder(),
        L = function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                e = arguments.length > 2 ? arguments[2] : void 0,
                t = arguments.length > 3 ? arguments[3] : void 0;
            var i = ((n, r, e, t) => {
                var i = r + e;
                if (t) return i;
                for (; n[r] && !(r >= i); ) ++r;
                return r;
            })(n, r, e, t);
            if (i - r > 16 && n.buffer && V) return V.decode(n.subarray(r, i));
            for (var a = ""; r < i; ) {
                var o = n[r++];
                if (!(128 & o)) {
                    a += String.fromCharCode(o);
                    continue;
                }
                var u = 63 & n[r++];
                if ((224 & o) == 192) {
                    a += String.fromCharCode(((31 & o) << 6) | u);
                    continue;
                }
                var c = 63 & n[r++];
                if (
                    (o =
                        (240 & o) == 224
                            ? ((15 & o) << 12) | (u << 6) | c
                            : ((7 & o) << 18) | (u << 12) | (c << 6) | (63 & n[r++])) < 65536
                )
                    a += String.fromCharCode(o);
                else {
                    var s = o - 65536;
                    a += String.fromCharCode(55296 | (s >> 10), 56320 | (1023 & s));
                }
            }
            return a;
        },
        O = (n, r) => {
            var e = N[n];
            0 === r || 10 === r ? ((1 === n ? P : _)(L(e)), (e.length = 0)) : e.push(r);
        },
        j = (n, r, e) => (n ? L(c, n, r, e) : ""),
        z = (r) => n["_" + r],
        q = (n) => g(n),
        J = (n, r, e, t, i) => {
            var a = {
                    string: (n) => {
                        var r,
                            e,
                            t,
                            i = 0;
                        return (
                            null != n &&
                                0 !== n &&
                                ((t = q(
                                    (e =
                                        ((n) => {
                                            for (var r = 0, e = 0; e < n.length; ++e) {
                                                var t = n.charCodeAt(e);
                                                t <= 127
                                                    ? r++
                                                    : t <= 2047
                                                      ? (r += 2)
                                                      : t >= 55296 && t <= 57343
                                                        ? ((r += 4), ++e)
                                                        : (r += 3);
                                            }
                                            return r;
                                        })((r = n)) + 1),
                                )),
                                ((n, r, e, t) => {
                                    if (t > 0) {
                                        for (var i = e + t - 1, a = 0; a < n.length; ++a) {
                                            var o = n.codePointAt(a);
                                            if (o <= 127) {
                                                if (e >= i) break;
                                                r[e++] = o;
                                            } else if (o <= 2047) {
                                                if (e + 1 >= i) break;
                                                (r[e++] = 192 | (o >> 6)), (r[e++] = 128 | (63 & o));
                                            } else if (o <= 65535) {
                                                if (e + 2 >= i) break;
                                                (r[e++] = 224 | (o >> 12)),
                                                    (r[e++] = 128 | ((o >> 6) & 63)),
                                                    (r[e++] = 128 | (63 & o));
                                            } else {
                                                if (e + 3 >= i) break;
                                                (r[e++] = 240 | (o >> 18)),
                                                    (r[e++] = 128 | ((o >> 12) & 63)),
                                                    (r[e++] = 128 | ((o >> 6) & 63)),
                                                    (r[e++] = 128 | (63 & o)),
                                                    a++;
                                            }
                                        }
                                        return (r[e] = 0);
                                    }
                                })(r, c, t, e),
                                (i = t)),
                            i
                        );
                    },
                    array: (n) => {
                        var r = q(n.length);
                        return u.set(n, r), r;
                    },
                },
                o = z(n),
                s = [],
                f = 0;
            if (t)
                for (var l = 0; l < t.length; l++) {
                    var h = a[e[l]];
                    h ? (0 === f && (f = H()), (s[l] = h(t[l]))) : (s[l] = t[l]);
                }
            var b = o(...s);
            return (function (n) {
                return 0 !== f && p(f), "string" === r ? j(n) : "boolean" === r ? !!n : n;
            })(b);
        };
    if (
        (n.noExitRuntime && n.noExitRuntime,
        n.print && (P = n.print),
        n.printErr && (_ = n.printErr),
        n.wasmBinary && (i = n.wasmBinary),
        n.arguments && n.arguments,
        n.thisProgram && n.thisProgram,
        n.preInit)
    )
        for ("function" == typeof n.preInit && (n.preInit = [n.preInit]); n.preInit.length > 0; ) n.preInit.shift()();
    (n.ccall = J),
        (n.cwrap = (n, r, e, t) => {
            var i = !e || e.every((n) => "number" === n || "boolean" === n);
            return "string" !== r && i && !t
                ? z(n)
                : function () {
                      for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                      return J(n, r, e, a, t);
                  };
        }),
        (n.setValue = function (n, r) {
            let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "i8";
            switch ((e.endsWith("*") && (e = "*"), e)) {
                case "i1":
                case "i8":
                    u[n] = r;
                    break;
                case "i16":
                    s[n >> 1] = r;
                    break;
                case "i32":
                    f[n >> 2] = r;
                    break;
                case "i64":
                    d[n >> 3] = BigInt(r);
                    break;
                case "float":
                    h[n >> 2] = r;
                    break;
                case "double":
                    b[n >> 3] = r;
                    break;
                case "*":
                    l[n >> 2] = r;
                    break;
                default:
                    R("invalid type for setValue: ".concat(e));
            }
        }),
        (n.getValue = function (n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i8";
            switch ((r.endsWith("*") && (r = "*"), r)) {
                case "i1":
                case "i8":
                    return u[n];
                case "i16":
                    return s[n >> 1];
                case "i32":
                    return f[n >> 2];
                case "i64":
                    return d[n >> 3];
                case "float":
                    return h[n >> 2];
                case "double":
                    return b[n >> 3];
                case "*":
                    return l[n >> 2];
                default:
                    R("invalid type for getValue: ".concat(r));
            }
        }),
        (n.UTF8ToString = j);
    var K = {
        c: (n) => {
            var r = c.length;
            if ((n >>>= 0) > 2147483648) return !1;
            for (var e = 1; e <= 4; e *= 2) {
                var t = r * (1 + 0.2 / e);
                if (((t = Math.min(t, n + 100663296)), G(Math.min(2147483648, M(Math.max(n, t), 65536))))) return !0;
            }
            return !1;
        },
        b: (n) => 52,
        a: (n, r, e, t) => {
            for (var i = 0, a = 0; a < e; a++) {
                var o = l[r >> 2],
                    u = l[(r + 4) >> 2];
                r += 8;
                for (var s = 0; s < u; s++) O(n, c[o + s]);
                i += u;
            }
            return (l[t >> 2] = i), 0;
        },
    };
    if (((A = await F()), n.preRun))
        for ("function" == typeof n.preRun && (n.preRun = [n.preRun]); n.preRun.length; ) T(n.preRun.shift());
    function Q() {
        var r;
        if (((n.calledRun = !0), !I)) {
            if (((W = !0), A.e(), null == a || a(n), null == (r = n.onRuntimeInitialized) || r.call(n), n.postRun))
                for ("function" == typeof n.postRun && (n.postRun = [n.postRun]); n.postRun.length; )
                    B(n.postRun.shift());
            S(x);
        }
    }
    return (
        S(D),
        n.setStatus
            ? (n.setStatus("Running..."),
              setTimeout(() => {
                  setTimeout(() => n.setStatus(""), 1), Q();
              }, 1))
            : Q(),
        W
            ? n
            : new Promise((n, r) => {
                  (a = n), (o = r);
              })
    );
};
