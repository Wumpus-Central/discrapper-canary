(n(323874),
    n(14289),
    n(35956),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(321073),
    n.d(
        r,
        {},
        {
            default: async function () {
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
                    A = "";
                try {
                    A = new URL(
                        ".",
                        "file:///ci/build/discord/discord/discord_app/modules/image_cropping/web/webp/libwebp/webp_wasm.js",
                    ).href;
                } catch {}
                var y = console.log.bind(console),
                    P = console.error.bind(console),
                    _ = !1,
                    W = !1;
                function I() {
                    var r = v.buffer;
                    ((e.HEAP8 = o = new Int8Array(r)),
                        (e.HEAP16 = u = new Int16Array(r)),
                        (e.HEAPU8 = s = new Uint8Array(r)),
                        (e.HEAPU16 = new Uint16Array(r)),
                        (e.HEAP32 = c = new Int32Array(r)),
                        (e.HEAPU32 = f = new Uint32Array(r)),
                        (e.HEAPF32 = l = new Float32Array(r)),
                        (e.HEAPF64 = d = new Float64Array(r)),
                        (b = new BigInt64Array(r)),
                        new BigUint64Array(r));
                }
                function E(r) {
                    (e.onAbort?.(r),
                        P((r = "Aborted(" + r + ")")),
                        (_ = !0),
                        (r += ". Build with -sASSERTIONS for more info."));
                    var n = new WebAssembly.RuntimeError(r);
                    throw (i?.(n), n);
                }
                var R = (r) => {
                        for (; r.length > 0;) r.shift()(e);
                    },
                    k = [],
                    C = (e) => k.push(e),
                    S = [],
                    U = (e) => S.push(e),
                    x = () => w(),
                    F = (e, r) => Math.ceil(e / r) * r,
                    B = (e) => {
                        var r = v.buffer.byteLength;
                        try {
                            return (v.grow(((e - r + 65535) / 65536) | 0), I(), 1);
                        } catch (e) {}
                    },
                    D = [null, [], []],
                    H = globalThis.TextDecoder && new TextDecoder(),
                    T = function (e) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            t = arguments.length > 3 ? arguments[3] : void 0;
                        var a = ((e, r, n, t) => {
                            var a = r + n;
                            if (t) return a;
                            for (; e[r] && !(r >= a);) ++r;
                            return r;
                        })(e, r, n, t);
                        if (a - r > 16 && e.buffer && H) return H.decode(e.subarray(r, a));
                        for (var i = ""; r < a;) {
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
                    M = (e, r) => {
                        var n = D[e];
                        0 === r || 10 === r ? ((1 === e ? y : P)(T(n)), (n.length = 0)) : n.push(r);
                    },
                    G = (e, r, n) => (e ? T(s, e, r, n) : ""),
                    N = (r) => e["_" + r],
                    V = (e, r, n, t, a) => {
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
                                            (t = p(n)),
                                            ((e, r, n, t) => {
                                                if (t > 0) {
                                                    for (var a = n + t - 1, i = 0; i < e.length; ++i) {
                                                        var o = e.codePointAt(i);
                                                        if (o <= 127) {
                                                            if (n >= a) break;
                                                            r[n++] = o;
                                                        } else if (o <= 2047) {
                                                            if (n + 1 >= a) break;
                                                            ((r[n++] = 192 | (o >> 6)), (r[n++] = 128 | (63 & o)));
                                                        } else if (o <= 65535) {
                                                            if (n + 2 >= a) break;
                                                            ((r[n++] = 224 | (o >> 12)),
                                                                (r[n++] = 128 | ((o >> 6) & 63)),
                                                                (r[n++] = 128 | (63 & o)));
                                                        } else {
                                                            if (n + 3 >= a) break;
                                                            ((r[n++] = 240 | (o >> 18)),
                                                                (r[n++] = 128 | ((o >> 12) & 63)),
                                                                (r[n++] = 128 | ((o >> 6) & 63)),
                                                                (r[n++] = 128 | (63 & o)),
                                                                i++);
                                                        }
                                                    }
                                                    return (r[n] = 0);
                                                }
                                            })(r, s, t, n),
                                            (a = t)),
                                        a
                                    );
                                },
                                array: (e) => {
                                    let r;
                                    var n = ((r = e.length), p(r));
                                    return (o.set(e, n), n);
                                },
                            },
                            u = N(e),
                            c = [],
                            f = 0;
                        if (t)
                            for (var l = 0; l < t.length; l++) {
                                var d = i[n[l]];
                                d ? (0 === f && (f = x()), (c[l] = d(t[l]))) : (c[l] = t[l]);
                            }
                        var b = u(...c);
                        return (function (e) {
                            return (0 !== f && m(f), "string" === r ? G(e) : "boolean" === r ? !!e : e);
                        })(b);
                    };
                if (
                    (e.noExitRuntime && e.noExitRuntime,
                    e.print && (y = e.print),
                    e.printErr && (P = e.printErr),
                    e.wasmBinary && (t = e.wasmBinary),
                    e.arguments && e.arguments,
                    e.thisProgram && e.thisProgram,
                    e.preInit)
                )
                    for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0;)
                        e.preInit.shift()();
                ((e.ccall = V),
                    (e.cwrap = (e, r, n, t) => {
                        var a = !n || n.every((e) => "number" === e || "boolean" === e);
                        return "string" !== r && a && !t
                            ? N(e)
                            : function () {
                                  for (var a = arguments.length, i = Array(a), o = 0; o < a; o++) i[o] = arguments[o];
                                  return V(e, r, n, i, t);
                              };
                    }),
                    (e.setValue = function (e, r) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "i8";
                        switch ((n.endsWith("*") && (n = "*"), n)) {
                            case "i1":
                            case "i8":
                                o[e] = r;
                                break;
                            case "i16":
                                u[e >> 1] = r;
                                break;
                            case "i32":
                                c[e >> 2] = r;
                                break;
                            case "i64":
                                b[e >> 3] = BigInt(r);
                                break;
                            case "float":
                                l[e >> 2] = r;
                                break;
                            case "double":
                                d[e >> 3] = r;
                                break;
                            case "*":
                                f[e >> 2] = r;
                                break;
                            default:
                                E(`invalid type for setValue: ${n}`);
                        }
                    }),
                    (e.getValue = function (e) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i8";
                        switch ((r.endsWith("*") && (r = "*"), r)) {
                            case "i1":
                            case "i8":
                                return o[e];
                            case "i16":
                                return u[e >> 1];
                            case "i32":
                                return c[e >> 2];
                            case "i64":
                                return b[e >> 3];
                            case "float":
                                return l[e >> 2];
                            case "double":
                                return d[e >> 3];
                            case "*":
                                return f[e >> 2];
                            default:
                                E(`invalid type for getValue: ${r}`);
                        }
                    }),
                    (e.UTF8ToString = G));
                var $ = {
                    c: (e) => {
                        var r = s.length;
                        if ((e >>>= 0) > 0x80000000) return !1;
                        for (var n = 1; n <= 4; n *= 2) {
                            var t = r * (1 + 0.2 / n);
                            if (((t = Math.min(t, e + 0x6000000)), B(Math.min(0x80000000, F(Math.max(e, t), 65536)))))
                                return !0;
                        }
                        return !1;
                    },
                    b: (e) => 52,
                    a: (e, r, n, t) => {
                        for (var a = 0, i = 0; i < n; i++) {
                            var o = f[r >> 2],
                                u = f[(r + 4) >> 2];
                            r += 8;
                            for (var c = 0; c < u; c++) M(e, s[o + c]);
                            a += u;
                        }
                        return ((f[t >> 2] = a), 0);
                    },
                };
                if (
                    ((g = await (async function () {
                        function a(r, n) {
                            var t;
                            return (
                                (e._WebPConfigInitInternal = (t = g = r.exports).f),
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
                                (m = t.A),
                                (p = t.B),
                                (w = t.C),
                                (v = t.d),
                                t.__indirect_function_table,
                                I(),
                                g
                            );
                        }
                        var i = { a: $ };
                        return e.instantiateWasm
                            ? new Promise((r, n) => {
                                  e.instantiateWasm(i, (e, n) => {
                                      r(a(e, n));
                                  });
                              })
                            : ((h ??= (function () {
                                  if (e.locateFile) {
                                      var r;
                                      return ((r = "webp_wasm.wasm"), e.locateFile ? e.locateFile(r, A) : A + r);
                                  }
                                  return new URL(n(14927), n.b).href;
                              })()),
                              a(
                                  (
                                      await (async function (e, n, a) {
                                          if (!e)
                                              try {
                                                  var i = fetch(n, { credentials: "same-origin" });
                                                  return await WebAssembly.instantiateStreaming(i, a);
                                              } catch (e) {
                                                  (P(`wasm streaming compile failed: ${e}`),
                                                      P("falling back to ArrayBuffer instantiation"));
                                              }
                                          return (async function (e, n) {
                                              try {
                                                  var a = await (async function (e) {
                                                      if (!t)
                                                          try {
                                                              var n = await (async (e) => {
                                                                  var r = await fetch(e, {
                                                                      credentials: "same-origin",
                                                                  });
                                                                  if (r.ok) return r.arrayBuffer();
                                                                  throw Error(r.status + " : " + r.url);
                                                              })(e);
                                                              return new Uint8Array(n);
                                                          } catch {}
                                                      if (e == h && t) return new Uint8Array(t);
                                                      if (r) return r(e);
                                                      throw "both async and sync fetching of the wasm failed";
                                                  })(e);
                                                  return await WebAssembly.instantiate(a, n);
                                              } catch (e) {
                                                  (P(`failed to asynchronously prepare wasm: ${e}`), E(e));
                                              }
                                          })(n, a);
                                      })(t, h, i)
                                  ).instance,
                              ));
                    })()),
                    e.preRun)
                )
                    for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;)
                        U(e.preRun.shift());
                function L() {
                    if (((e.calledRun = !0), !_)) {
                        if (((W = !0), g.e(), a?.(e), e.onRuntimeInitialized?.(), e.postRun))
                            for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;)
                                C(e.postRun.shift());
                        R(k);
                    }
                }
                return (
                    R(S),
                    e.setStatus
                        ? (e.setStatus("Running..."),
                          setTimeout(() => {
                              (setTimeout(() => e.setStatus(""), 1), L());
                          }, 1))
                        : L(),
                    W
                        ? e
                        : new Promise((e, r) => {
                              ((a = e), (i = r));
                          })
                );
            },
        },
    ));
