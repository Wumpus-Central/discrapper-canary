e.exports = (() => {
    "use strict";
    var e,
        t,
        r,
        n,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        p,
        h,
        m,
        v,
        y,
        g,
        b,
        w,
        _,
        S,
        x,
        E,
        k,
        C,
        T,
        M,
        P,
        A,
        I,
        O,
        D,
        R,
        L,
        F,
        N,
        j,
        B,
        K,
        $,
        V,
        U,
        z,
        W,
        H,
        G,
        q,
        Y,
        X,
        J,
        Q,
        Z,
        ee,
        et,
        er,
        en,
        ei,
        eo,
        ea,
        es,
        el,
        eu,
        ec,
        ef,
        ed,
        ep = [
            ,
            (e, t, r) => {
                r.r(t), r.d(t, { Animation: () => n.Animation });
                var n = r(2);
            },
            (e, t, r) => {
                r.r(t), r.d(t, { Animation: () => n });
                var n = (function () {
                    function e(e, t, r, n) {
                        (this.animation = e),
                            (this.artboard = t),
                            (this.playing = n),
                            (this.loopCount = 0),
                            (this.scrubTo = null),
                            (this.instance = new r.LinearAnimationInstance(e, t));
                    }
                    return (
                        Object.defineProperty(e.prototype, "name", {
                            get: function () {
                                return this.animation.name;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "time", {
                            get: function () {
                                return this.instance.time;
                            },
                            set: function (e) {
                                this.instance.time = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "loopValue", {
                            get: function () {
                                return this.animation.loopValue;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "needsScrub", {
                            get: function () {
                                return null !== this.scrubTo;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.advance = function (e) {
                            null === this.scrubTo
                                ? this.instance.advance(e)
                                : ((this.instance.time = 0),
                                  this.instance.advance(this.scrubTo),
                                  (this.scrubTo = null));
                        }),
                        (e.prototype.apply = function (e) {
                            this.instance.apply(e);
                        }),
                        (e.prototype.cleanup = function () {
                            this.instance.delete();
                        }),
                        e
                    );
                })();
            },
            (e, t, r) => {
                r.r(t), r.d(t, { RuntimeLoader: () => a });
                var n = r(4),
                    i = r(5),
                    o = function () {
                        return (o =
                            Object.assign ||
                            function (e) {
                                for (var t, r = 1, n = arguments.length; r < n; r++)
                                    for (var i in (t = arguments[r]))
                                        Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }).apply(this, arguments);
                    },
                    a = (function () {
                        function e() {}
                        return (
                            (e.notifyError = function (t) {
                                var r;
                                for (e.isLoading = !1; e.errorCallbackQueue.length > 0; )
                                    null == (r = e.errorCallbackQueue.shift()) || r(t);
                                e.callBackQueue = [];
                            }),
                            (e.loadRuntime = function () {
                                var t = e.wasmURL,
                                    r = e.wasmBinary;
                                e.enablePerfMarks && performance.mark("rive:wasm-init:start"),
                                    n
                                        .default(
                                            o(
                                                {
                                                    locateFile: function () {
                                                        return t;
                                                    },
                                                },
                                                r ? { wasmBinary: r } : {},
                                            ),
                                        )
                                        .then(function (t) {
                                            var r;
                                            for (
                                                e.enablePerfMarks &&
                                                    (performance.mark("rive:wasm-init:end"),
                                                    performance.measure(
                                                        "rive:wasm-init",
                                                        "rive:wasm-init:start",
                                                        "rive:wasm-init:end",
                                                    )),
                                                    e.runtime = t,
                                                    e.errorCallbackQueue = [];
                                                e.callBackQueue.length > 0;
                                            )
                                                null == (r = e.callBackQueue.shift()) || r(e.runtime);
                                        })
                                        .catch(function (r) {
                                            var n = {
                                                message: (null == r ? void 0 : r.message) || "Unknown error",
                                                type: (null == r ? void 0 : r.name) || "Error",
                                                wasmError:
                                                    r instanceof WebAssembly.CompileError ||
                                                    r instanceof WebAssembly.RuntimeError,
                                                originalError: r,
                                            };
                                            console.debug("Rive WASM load error details:", n);
                                            var i = e.wasmFallbackURL,
                                                o = null !== i && t.toLowerCase() === i.toLowerCase();
                                            if (null === i || o) {
                                                var a = o
                                                        ? "the configured WASM URL or its fallback (".concat(i, ")")
                                                        : t,
                                                    s = [
                                                        "Could not load Rive WASM file from ".concat(a, "."),
                                                        "Possible reasons:\n- Network connection is down\n- WebAssembly is not supported in this environment\n- The WASM file is corrupted or incompatible\n\nError details:",
                                                        "- Type: ".concat(n.type),
                                                        "- Message: ".concat(n.message),
                                                        "- WebAssembly-specific error: ".concat(n.wasmError),
                                                        "\nTo resolve, you may need to:\n1. Check your network connection\n2. Set a new WASM source via RuntimeLoader.setWasmUrl()\n3. Call RuntimeLoader.awaitInstance() again",
                                                    ].join("\n");
                                                console.error(s), e.notifyError(Error(s));
                                            } else
                                                console.warn(
                                                    "Failed to load WASM from "
                                                        .concat(t, " (")
                                                        .concat(n.message, "), trying fallback URL: ")
                                                        .concat(i),
                                                ),
                                                    (e.wasmBinary = null),
                                                    e.setWasmUrl(i),
                                                    e.loadRuntime();
                                        });
                            }),
                            (e.getInstance = function (t, r) {
                                e.isLoading || ((e.isLoading = !0), e.loadRuntime()),
                                    e.runtime
                                        ? t(e.runtime)
                                        : (e.callBackQueue.push(t), r && e.errorCallbackQueue.push(r));
                            }),
                            (e.awaitInstance = function () {
                                return new Promise(function (t, r) {
                                    return e.getInstance(t, r);
                                });
                            }),
                            (e.setWasmUrl = function (t) {
                                e.wasmURL = t;
                            }),
                            (e.getWasmUrl = function () {
                                return e.wasmURL;
                            }),
                            (e.setWasmFallbackUrl = function (t) {
                                e.wasmFallbackURL = t;
                            }),
                            (e.getWasmFallbackUrl = function () {
                                return e.wasmFallbackURL;
                            }),
                            (e.setWasmBinary = function (t) {
                                if (t instanceof ArrayBuffer || null === t) {
                                    e.wasmBinary = t;
                                    return;
                                }
                                console.error("setWasmBinary expects an ArrayBuffer or null");
                            }),
                            (e.getWasmBinary = function () {
                                return e.wasmBinary;
                            }),
                            (e.isLoading = !1),
                            (e.callBackQueue = []),
                            (e.wasmURL = "https://unpkg.com/".concat(i.name, "@").concat(i.version, "/rive.wasm")),
                            (e.wasmFallbackURL = "https://cdn.jsdelivr.net/npm/"
                                .concat(i.name, "@")
                                .concat(i.version, "/rive_fallback.wasm")),
                            (e.wasmBinary = null),
                            (e.errorCallbackQueue = []),
                            (e.enablePerfMarks = !1),
                            e
                        );
                    })();
            },
            (e, t, r) => {
                var n;
                r.r(t), r.d(t, { default: () => i });
                let i =
                    ((n = globalThis.document?.currentScript?.src),
                    async function (e = {}) {
                        let t, r;
                        var i,
                            o = !!globalThis.window,
                            a = !!globalThis.WorkerGlobalScope;
                        function s() {
                            function e(e) {
                                let o = n;
                                (r = t = 0),
                                    (n = new Map()),
                                    o.forEach((t) => {
                                        try {
                                            t(e);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }),
                                    this.mc(),
                                    i && i.Oc();
                            }
                            let t = 0,
                                r = 0,
                                n = new Map(),
                                i = null,
                                o = null;
                            (this.requestAnimationFrame = function (i) {
                                t ||= requestAnimationFrame(e.bind(this));
                                let o = ++r;
                                return n.set(o, i), o;
                            }),
                                (this.cancelAnimationFrame = function (e) {
                                    n.delete(e), t && 0 == n.size && (cancelAnimationFrame(t), (t = 0));
                                }),
                                (this.Mc = function (e) {
                                    o && (document.body.remove(o), (o = null)),
                                        e ||
                                            (((o = document.createElement("div")).style.backgroundColor = "black"),
                                            (o.style.position = "fixed"),
                                            (o.style.right = 0),
                                            (o.style.top = 0),
                                            (o.style.color = "white"),
                                            (o.style.padding = "4px"),
                                            (o.innerHTML = "RIVE FPS"),
                                            (e = function (e) {
                                                o.innerHTML = "RIVE FPS " + e.toFixed(1);
                                            }),
                                            document.body.appendChild(o)),
                                        (i = new (function () {
                                            let t = 0,
                                                r = 0;
                                            this.Oc = function () {
                                                var n = performance.now();
                                                r
                                                    ? (++t, 1e3 < (n -= r) && (e((1e3 * t) / n), (t = r = 0)))
                                                    : ((r = n), (t = 0));
                                            };
                                        })());
                                }),
                                (this.Jc = function () {
                                    o && (document.body.remove(o), (o = null)), (i = null);
                                }),
                                (this.mc = function () {});
                        }
                        function l(e) {
                            console.assert(!0);
                            let t = new Map(),
                                r = -1 / 0;
                            this.push = function (n) {
                                return (
                                    (n = (n + ((1 << e) - 1)) >> e),
                                    t.has(n) && clearTimeout(t.get(n)),
                                    t.set(
                                        n,
                                        setTimeout(function () {
                                            t.delete(n),
                                                0 == t.length
                                                    ? (r = -1 / 0)
                                                    : n == r && console.assert((r = Math.max(...t.keys())) < n);
                                        }, 1e3),
                                    ),
                                    (r = Math.max(n, r)) << e
                                );
                            };
                        }
                        let u = e.onRuntimeInitialized;
                        e.onRuntimeInitialized = function () {
                            u && u();
                            let t = e.decodeAudio;
                            e.decodeAudio = function (e, r) {
                                r((e = t(e)));
                            };
                            let r = e.decodeFont;
                            e.decodeFont = function (e, t) {
                                t((e = r(e)));
                            };
                            let n = e.setFallbackFontCb;
                            e.setFallbackFontCallback =
                                "function" == typeof n
                                    ? function (e) {
                                          n(e);
                                      }
                                    : function () {
                                          console.warn(
                                              "Module.setFallbackFontCallback called, but text support is not enabled in this build.",
                                          );
                                      };
                            let i = e.FileAssetLoader;
                            (e.ptrToAsset = (t) => {
                                let r = e.ptrToFileAsset(t);
                                return r.isImage
                                    ? e.ptrToImageAsset(t)
                                    : r.isFont
                                      ? e.ptrToFontAsset(t)
                                      : r.isAudio
                                        ? e.ptrToAudioAsset(t)
                                        : r;
                            }),
                                (e.CustomFileAssetLoader = i.extend("CustomFileAssetLoader", {
                                    __construct: function ({ loadContents: e }) {
                                        this.__parent.__construct.call(this), (this.Bc = e);
                                    },
                                    loadContents: function (t, r) {
                                        return (t = e.ptrToAsset(t)), this.Bc(t, r);
                                    },
                                })),
                                (e.CDNFileAssetLoader = i.extend("CDNFileAssetLoader", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this);
                                    },
                                    loadContents: function (t) {
                                        var r, n, i;
                                        let o = e.ptrToAsset(t);
                                        return (
                                            "" !== (t = o.cdnUuid) &&
                                            ((r = o.cdnBaseUrl + "/" + t),
                                            (n = (e) => {
                                                o.decode(new Uint8Array(e.response));
                                            }),
                                            ((i = new XMLHttpRequest()).responseType = "arraybuffer"),
                                            (i.onreadystatechange = function () {
                                                4 == i.readyState && 200 == i.status && n(i);
                                            }),
                                            i.open("GET", r, !0),
                                            i.send(null),
                                            !0)
                                        );
                                    },
                                })),
                                (e.FallbackFileAssetLoader = i.extend("FallbackFileAssetLoader", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this), (this.hc = []);
                                    },
                                    addLoader: function (e) {
                                        this.hc.push(e);
                                    },
                                    loadContents: function (e, t) {
                                        for (let r of this.hc) if (r.loadContents(e, t)) return !0;
                                        return !1;
                                    },
                                }));
                            let o = e.computeAlignment;
                            e.computeAlignment = function (e, t, r, n, i = 1) {
                                return o.call(this, e, t, r, n, i);
                            };
                        };
                        let c =
                                "createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(
                                    " ",
                                ),
                            f = new (function () {
                                function e() {
                                    if (!t) {
                                        let l;
                                        var e = document.createElement("canvas"),
                                            a = {
                                                alpha: 1,
                                                depth: 0,
                                                stencil: 0,
                                                antialias: 0,
                                                premultipliedAlpha: 1,
                                                preserveDrawingBuffer: 0,
                                                powerPreference: "high-performance",
                                                failIfMajorPerformanceCaveat: 0,
                                                enableExtensionsByDefault: 1,
                                                explicitSwapControl: 1,
                                                renderViaOffscreenBackBuffer: 1,
                                            };
                                        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                                            if (((l = e.getContext("webgl", a)), (r = 1), !l))
                                                return (
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
                                                );
                                        } else if ((l = e.getContext("webgl2", a))) r = 2;
                                        else {
                                            if (!(l = e.getContext("webgl", a)))
                                                return (
                                                    console.log("No WebGL support. Image mesh will not be drawn."), !1
                                                );
                                            r = 1;
                                        }
                                        function s(e, t, r) {
                                            if (
                                                ((t = l.createShader(t)),
                                                l.shaderSource(t, r),
                                                l.compileShader(t),
                                                0 < ((r = l.getShaderInfoLog(t)) || "").length)
                                            )
                                                throw r;
                                            l.attachShader(e, t);
                                        }
                                        if (
                                            ((n = Math.min(
                                                (l = new Proxy(l, {
                                                    get: (e, t) =>
                                                        e.isContextLost()
                                                            ? (u ||
                                                                  (console.error(
                                                                      "Cannot render the mesh because the GL Context was lost. Tried to invoke ",
                                                                      t,
                                                                  ),
                                                                  (u = !0)),
                                                              "function" == typeof e[t])
                                                                ? function () {}
                                                                : void 0
                                                            : "function" == typeof e[t]
                                                              ? function (...r) {
                                                                    return e[t].apply(e, r);
                                                                }
                                                              : e[t],
                                                    set(e, t, r) {
                                                        if (!e.isContextLost()) return (e[t] = r), !0;
                                                        u ||
                                                            (console.error(
                                                                "Cannot render the mesh because the GL Context was lost. Tried to set property " +
                                                                    t,
                                                            ),
                                                            (u = !0));
                                                    },
                                                })).getParameter(l.MAX_RENDERBUFFER_SIZE),
                                                l.getParameter(l.MAX_TEXTURE_SIZE),
                                            )),
                                            s(
                                                (e = l.createProgram()),
                                                l.VERTEX_SHADER,
                                                "attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }",
                                            ),
                                            s(
                                                e,
                                                l.FRAGMENT_SHADER,
                                                "precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }",
                                            ),
                                            l.bindAttribLocation(e, 0, "vertex"),
                                            l.bindAttribLocation(e, 1, "uv"),
                                            l.linkProgram(e),
                                            0 < ((a = l.getProgramInfoLog(e)) || "").trim().length)
                                        )
                                            throw a;
                                        (i = l.getUniformLocation(e, "mat")),
                                            (o = l.getUniformLocation(e, "translate")),
                                            l.useProgram(e),
                                            l.bindBuffer(l.ARRAY_BUFFER, l.createBuffer()),
                                            l.enableVertexAttribArray(0),
                                            l.enableVertexAttribArray(1),
                                            l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, l.createBuffer()),
                                            l.uniform1i(l.getUniformLocation(e, "image"), 0),
                                            l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
                                            (t = l);
                                    }
                                    return !0;
                                }
                                let t = null,
                                    r = 0,
                                    n = 0,
                                    i = null,
                                    o = null,
                                    a = 0,
                                    s = 0,
                                    u = !1;
                                e(),
                                    (this.ad = function () {
                                        return e(), n;
                                    }),
                                    (this.Ic = function (e) {
                                        t.deleteTexture && t.deleteTexture(e);
                                    }),
                                    (this.Hc = function (n) {
                                        if (!e()) return null;
                                        let i = t.createTexture();
                                        return i
                                            ? (t.bindTexture(t.TEXTURE_2D, i),
                                              t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n),
                                              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
                                              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
                                              t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
                                              2 == r
                                                  ? (t.texParameteri(
                                                        t.TEXTURE_2D,
                                                        t.TEXTURE_MIN_FILTER,
                                                        t.LINEAR_MIPMAP_LINEAR,
                                                    ),
                                                    t.generateMipmap(t.TEXTURE_2D))
                                                  : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
                                              i)
                                            : null;
                                    });
                                let c = new l(8),
                                    f = new l(8),
                                    d = new l(10),
                                    p = new l(10);
                                (this.Lc = function (r, n, l, u, h) {
                                    if (e()) {
                                        var m = c.push(r),
                                            v = f.push(n);
                                        if (t.canvas) {
                                            for (var y of ((t.canvas.width != m || t.canvas.height != v) &&
                                                ((t.canvas.width = m), (t.canvas.height = v)),
                                            t.viewport(0, v - n, r, n),
                                            t.disable(t.SCISSOR_TEST),
                                            t.clearColor(0, 0, 0, 0),
                                            t.clear(t.COLOR_BUFFER_BIT),
                                            t.enable(t.SCISSOR_TEST),
                                            l.sort((e, t) => t.tc - e.tc),
                                            (m = d.push(u)),
                                            a != m && (t.bufferData(t.ARRAY_BUFFER, 8 * m, t.DYNAMIC_DRAW), (a = m)),
                                            (m = 0),
                                            l))
                                                t.bufferSubData(t.ARRAY_BUFFER, m, y.Tb), (m += 4 * y.Tb.length);
                                            for (var g of (console.assert(m == 4 * u), l))
                                                t.bufferSubData(t.ARRAY_BUFFER, m, g.xc), (m += 4 * g.xc.length);
                                            for (var b of (console.assert(m == 8 * u),
                                            (m = p.push(h)),
                                            s != m &&
                                                (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * m, t.DYNAMIC_DRAW), (s = m)),
                                            (y = 0),
                                            l))
                                                t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, y, b.indices),
                                                    (y += 2 * b.indices.length);
                                            for (let e of (console.assert(y == 2 * h),
                                            (b = 0),
                                            (g = !0),
                                            (m = y = 0),
                                            l)) {
                                                e.image.Ib != b &&
                                                    (t.bindTexture(t.TEXTURE_2D, e.image.Hb || null), (b = e.image.Ib)),
                                                    e.ed
                                                        ? (t.scissor(e.Yb, v - e.Zb - e.fc, e.od, e.fc), (g = !0))
                                                        : g && (t.scissor(0, v - n, r, n), (g = !1)),
                                                    (l = 2 / r);
                                                let a = -2 / n;
                                                t.uniform4f(
                                                    i,
                                                    e.ib[0] * l * e.Ab,
                                                    e.ib[1] * a * e.Bb,
                                                    e.ib[2] * l * e.Ab,
                                                    e.ib[3] * a * e.Bb,
                                                ),
                                                    t.uniform2f(
                                                        o,
                                                        e.ib[4] * l * e.Ab + l * (e.Yb - e.bd * e.Ab) - 1,
                                                        e.ib[5] * a * e.Bb + a * (e.Zb - e.cd * e.Bb) + 1,
                                                    ),
                                                    t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, m),
                                                    t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, m + 4 * u),
                                                    t.drawElements(t.TRIANGLES, e.indices.length, t.UNSIGNED_SHORT, y),
                                                    (m += 4 * e.Tb.length),
                                                    (y += 2 * e.indices.length);
                                            }
                                            console.assert(m == 4 * u), console.assert(y == 2 * h);
                                        }
                                    }
                                }),
                                    (this.canvas = function () {
                                        return e() && t.canvas;
                                    });
                            })(),
                            d = e.onRuntimeInitialized;
                        e.onRuntimeInitialized = function () {
                            function t(e) {
                                switch (e) {
                                    case h.srcOver:
                                        return "source-over";
                                    case h.screen:
                                        return "screen";
                                    case h.overlay:
                                        return "overlay";
                                    case h.darken:
                                        return "darken";
                                    case h.lighten:
                                        return "lighten";
                                    case h.colorDodge:
                                        return "color-dodge";
                                    case h.colorBurn:
                                        return "color-burn";
                                    case h.hardLight:
                                        return "hard-light";
                                    case h.softLight:
                                        return "soft-light";
                                    case h.difference:
                                        return "difference";
                                    case h.exclusion:
                                        return "exclusion";
                                    case h.multiply:
                                        return "multiply";
                                    case h.hue:
                                        return "hue";
                                    case h.saturation:
                                        return "saturation";
                                    case h.color:
                                        return "color";
                                    case h.luminosity:
                                        return "luminosity";
                                }
                            }
                            function r(e) {
                                return (
                                    "rgba(" +
                                    ((0xff0000 & e) >>> 16) +
                                    "," +
                                    ((65280 & e) >>> 8) +
                                    "," +
                                    ((255 & e) >>> 0) +
                                    "," +
                                    ((0xff000000 & e) >>> 24) / 255 +
                                    ")"
                                );
                            }
                            function n() {
                                for (let e of (0 < E.length &&
                                    (f.Lc(x.drawWidth(), x.drawHeight(), E, k, C),
                                    (E = []),
                                    (C = k = 0),
                                    x.reset(512, 512)),
                                S)) {
                                    for (let t of e.Na) t();
                                    e.Na = [];
                                }
                                S.clear();
                            }
                            d && d();
                            var i = e.RenderPaintStyle;
                            let o = e.RenderPath,
                                a = e.RenderPaint,
                                l = e.Renderer,
                                u = e.StrokeCap,
                                p = e.StrokeJoin,
                                h = e.BlendMode,
                                m = i.fill,
                                v = i.stroke,
                                y = e.FillRule.evenOdd,
                                g = 1;
                            var b = e.RenderImage.extend("CanvasRenderImage", {
                                    __construct: function ({ ob: e, yb: t } = {}) {
                                        this.__parent.__construct.call(this),
                                            (this.Ib = g),
                                            (g = (g + 1) & 0x7fffffff || 1),
                                            (this.ob = e),
                                            (this.yb = t);
                                    },
                                    __destruct: function () {
                                        this.Hb && (f.Ic(this.Hb), URL.revokeObjectURL(this.Wb)),
                                            this.__parent.__destruct.call(this);
                                    },
                                    decode: function (e) {
                                        var t = this;
                                        t.yb && t.yb(t);
                                        var r = new Image();
                                        (t.Wb = URL.createObjectURL(new Blob([e], { type: "image/png" }))),
                                            (r.onload = function () {
                                                (t.Ac = r),
                                                    (t.Hb = f.Hc(r)),
                                                    t.size(r.width, r.height),
                                                    t.ob && t.ob(t);
                                            }),
                                            (r.src = t.Wb);
                                    },
                                }),
                                w = o.extend("CanvasRenderPath", {
                                    __construct: function () {
                                        this.__parent.__construct.call(this), (this.Ya = new Path2D());
                                    },
                                    rewind: function () {
                                        this.Ya = new Path2D();
                                    },
                                    addPath: function (e, t, r, n, i, o, a) {
                                        var s = this.Ya,
                                            l = s.addPath;
                                        e = e.Ya;
                                        let u = new DOMMatrix();
                                        (u.a = t),
                                            (u.b = r),
                                            (u.c = n),
                                            (u.d = i),
                                            (u.e = o),
                                            (u.f = a),
                                            l.call(s, e, u);
                                    },
                                    fillRule: function (e) {
                                        this.Vb = e;
                                    },
                                    moveTo: function (e, t) {
                                        this.Ya.moveTo(e, t);
                                    },
                                    lineTo: function (e, t) {
                                        this.Ya.lineTo(e, t);
                                    },
                                    cubicTo: function (e, t, r, n, i, o) {
                                        this.Ya.bezierCurveTo(e, t, r, n, i, o);
                                    },
                                    close: function () {
                                        this.Ya.closePath();
                                    },
                                }),
                                _ = a.extend("CanvasRenderPaint", {
                                    color: function (e) {
                                        this.Xb = r(e);
                                    },
                                    thickness: function (e) {
                                        this.Ec = e;
                                    },
                                    join: function (e) {
                                        switch (e) {
                                            case p.miter:
                                                this.Gb = "miter";
                                                break;
                                            case p.round:
                                                this.Gb = "round";
                                                break;
                                            case p.bevel:
                                                this.Gb = "bevel";
                                        }
                                    },
                                    cap: function (e) {
                                        switch (e) {
                                            case u.butt:
                                                this.Fb = "butt";
                                                break;
                                            case u.round:
                                                this.Fb = "round";
                                                break;
                                            case u.square:
                                                this.Fb = "square";
                                        }
                                    },
                                    style: function (e) {
                                        this.Dc = e;
                                    },
                                    blendMode: function (e) {
                                        this.zc = t(e);
                                    },
                                    clearGradient: function () {
                                        this.lb = null;
                                    },
                                    linearGradient: function (e, t, r, n) {
                                        this.lb = { uc: e, vc: t, bc: r, cc: n, Sb: [] };
                                    },
                                    radialGradient: function (e, t, r, n) {
                                        this.lb = { uc: e, vc: t, bc: r, cc: n, Sb: [], Zc: !0 };
                                    },
                                    addStop: function (e, t) {
                                        this.lb.Sb.push({ color: e, stop: t });
                                    },
                                    completeGradient: function () {},
                                    draw: function (e, t, n, i) {
                                        let o = this.Dc;
                                        var a = this.Xb,
                                            s = this.lb;
                                        let l = e.globalCompositeOperation,
                                            u = e.globalAlpha;
                                        if (((e.globalCompositeOperation = this.zc), (e.globalAlpha = i), null != s)) {
                                            a = s.uc;
                                            let t = s.vc,
                                                n = s.bc;
                                            var c = s.cc;
                                            (i = s.Sb),
                                                s.Zc
                                                    ? ((s = n - a),
                                                      (c -= t),
                                                      (a = e.createRadialGradient(
                                                          a,
                                                          t,
                                                          0,
                                                          a,
                                                          t,
                                                          Math.sqrt(s * s + c * c),
                                                      )))
                                                    : (a = e.createLinearGradient(a, t, n, c));
                                            for (let e = 0, t = i.length; e < t; e++)
                                                (s = i[e]), a.addColorStop(s.stop, r(s.color));
                                            (this.Xb = a), (this.lb = null);
                                        }
                                        switch (o) {
                                            case v:
                                                (e.strokeStyle = a),
                                                    (e.lineWidth = this.Ec),
                                                    (e.lineCap = this.Fb),
                                                    (e.lineJoin = this.Gb),
                                                    e.stroke(t);
                                                break;
                                            case m:
                                                (e.fillStyle = a), e.fill(t, n);
                                        }
                                        (e.globalCompositeOperation = l), (e.globalAlpha = u);
                                    },
                                });
                            let S = new Set(),
                                x = null,
                                E = [],
                                k = 0,
                                C = 0;
                            var T = (e.CanvasRenderer = l.extend("Renderer", {
                                __construct: function (e) {
                                    this.__parent.__construct.call(this),
                                        (this.Xa = [1, 0, 0, 1, 0, 0]),
                                        (this.Ka = [1]),
                                        (this.Ha = e.getContext("2d")),
                                        (this.Ub = e),
                                        (this.Na = []);
                                },
                                save: function () {
                                    this.Xa.push(...this.Xa.slice(this.Xa.length - 6)),
                                        this.Ka.push(this.Ka[this.Ka.length - 1]),
                                        this.Na.push(this.Ha.save.bind(this.Ha));
                                },
                                restore: function () {
                                    let e = this.Xa.length - 6;
                                    if (6 > e) throw "restore() called without matching save().";
                                    this.Xa.splice(e), this.Ka.pop(), this.Na.push(this.Ha.restore.bind(this.Ha));
                                },
                                transform: function (e, t, r, n, i, o) {
                                    let a = this.Xa,
                                        s = a.length - 6;
                                    a.splice(
                                        s,
                                        6,
                                        a[s] * e + a[s + 2] * t,
                                        a[s + 1] * e + a[s + 3] * t,
                                        a[s] * r + a[s + 2] * n,
                                        a[s + 1] * r + a[s + 3] * n,
                                        a[s] * i + a[s + 2] * o + a[s + 4],
                                        a[s + 1] * i + a[s + 3] * o + a[s + 5],
                                    ),
                                        this.Na.push(this.Ha.transform.bind(this.Ha, e, t, r, n, i, o));
                                },
                                rotate: function (e) {
                                    let t = Math.sin(e);
                                    (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                                },
                                modulateOpacity: function (e) {
                                    this.Ka[this.Ka.length - 1] *= e;
                                },
                                _drawPath: function (e, t) {
                                    this.Na.push(
                                        t.draw.bind(
                                            t,
                                            this.Ha,
                                            e.Ya,
                                            e.Vb === y ? "evenodd" : "nonzero",
                                            Math.max(0, this.Ka[this.Ka.length - 1]),
                                        ),
                                    );
                                },
                                _drawRiveImage: function (e, r, n, i) {
                                    var o = e.Ac;
                                    if (o) {
                                        var a = this.Ha,
                                            s = t(n),
                                            l = Math.max(0, i * this.Ka[this.Ka.length - 1]);
                                        this.Na.push(function () {
                                            (a.globalCompositeOperation = s),
                                                (a.globalAlpha = l),
                                                a.drawImage(o, 0, 0),
                                                (a.globalAlpha = 1);
                                        });
                                    }
                                },
                                _getMatrix: function (e) {
                                    let t = this.Xa,
                                        r = t.length - 6;
                                    for (let n = 0; 6 > n; ++n) e[n] = t[r + n];
                                },
                                _drawImageMesh: function (r, i, o, a, s, l, u, c, d, p, h, m, v, y) {
                                    let g, b, w;
                                    try {
                                        (g = e.HEAPF32.slice(s >> 2, (s >> 2) + l)),
                                            (b = e.HEAPF32.slice(u >> 2, (u >> 2) + c)),
                                            (w = e.HEAPU16.slice(d >> 1, (d >> 1) + p));
                                    } catch (e) {
                                        console.error(
                                            "[Rive] _drawImageMesh: failed to read mesh data from WASM heap. Mesh skipped for this frame.",
                                        );
                                        return;
                                    }
                                    (i = this.Ha.canvas.width),
                                        (s = this.Ha.canvas.height),
                                        (u = v - h),
                                        (c = y - m),
                                        (h = Math.max(h, 0)),
                                        (m = Math.max(m, 0));
                                    let _ = (v = Math.min(v, i)) - h,
                                        T = (y = Math.min(y, s)) - m;
                                    if (
                                        (console.assert(_ <= Math.min(u, i)),
                                        console.assert(T <= Math.min(c, s)),
                                        !(0 >= _ || 0 >= T))
                                    ) {
                                        (v = _ < u || T < c), (i = y = 1);
                                        var M = Math.ceil(_ * y),
                                            P = Math.ceil(T * i);
                                        (s = f.ad()),
                                            M > s && ((y *= s / M), (M = s)),
                                            P > s && ((i *= s / P), (P = s)),
                                            x || (x = new e.DynamicRectanizer(s)).reset(512, 512),
                                            0 > (s = x.addRect(M, P)) &&
                                                (n(), S.add(this), console.assert(0 <= (s = x.addRect(M, P))));
                                        var A = 65535 & s,
                                            I = s >> 16;
                                        E.push({
                                            ib: this.Xa.slice(this.Xa.length - 6),
                                            image: r,
                                            Yb: A,
                                            Zb: I,
                                            bd: h,
                                            cd: m,
                                            od: M,
                                            fc: P,
                                            Ab: y,
                                            Bb: i,
                                            Tb: g,
                                            xc: b,
                                            indices: w,
                                            ed: v,
                                            tc: (r.Ib << 1) | !!v,
                                        }),
                                            (k += l),
                                            (C += p);
                                        var O = this.Ha,
                                            D = t(o),
                                            R = Math.max(0, a * this.Ka[this.Ka.length - 1]);
                                        this.Na.push(function () {
                                            O.save(),
                                                O.resetTransform(),
                                                (O.globalCompositeOperation = D),
                                                (O.globalAlpha = R);
                                            let e = f.canvas();
                                            e && O.drawImage(e, A, I, M, P, h, m, _, T), O.restore();
                                        });
                                    }
                                },
                                _clipPath: function (e) {
                                    this.Na.push(this.Ha.clip.bind(this.Ha, e.Ya, e.Vb === y ? "evenodd" : "nonzero"));
                                },
                                clear: function () {
                                    S.add(this),
                                        this.Na.push(
                                            this.Ha.clearRect.bind(this.Ha, 0, 0, this.Ub.width, this.Ub.height),
                                        );
                                },
                                flush: function () {},
                                translate: function (e, t) {
                                    this.transform(1, 0, 0, 1, e, t);
                                },
                            }));
                            (e.makeRenderer = function (e) {
                                let t = new T(e),
                                    r = t.Ha;
                                return new Proxy(t, {
                                    get(e, n) {
                                        if ("function" == typeof e[n])
                                            return function (...t) {
                                                return e[n].apply(e, t);
                                            };
                                        if ("function" == typeof r[n]) {
                                            if (-1 < c.indexOf(n))
                                                throw Error(
                                                    "RiveException: Method call to '" +
                                                        n +
                                                        "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.",
                                                );
                                            return function (...e) {
                                                t.Na.push(r[n].bind(r, ...e));
                                            };
                                        }
                                        return e[n];
                                    },
                                    set(e, n, i) {
                                        if (n in r)
                                            return (
                                                t.Na.push(() => {
                                                    r[n] = i;
                                                }),
                                                !0
                                            );
                                    },
                                });
                            }),
                                (e.decodeImage = function (e, t) {
                                    new b({ ob: t }).decode(e);
                                }),
                                (e.renderFactory = {
                                    makeRenderPaint: function () {
                                        return new _();
                                    },
                                    makeRenderPath: function () {
                                        return new w();
                                    },
                                    makeRenderImage: function () {
                                        let e = P;
                                        return new b({
                                            yb: () => {
                                                e.total++;
                                            },
                                            ob: () => {
                                                if ((e.loaded++, e.loaded === e.total)) {
                                                    let t = e.ready;
                                                    t && (t(), (e.ready = null));
                                                }
                                            },
                                        });
                                    },
                                });
                            let M = e.load,
                                P = null;
                            e.load = function (t, r, n = !0) {
                                let i = new e.FallbackFileAssetLoader();
                                return (
                                    void 0 !== r && i.addLoader(r),
                                    n && ((r = new e.CDNFileAssetLoader()), i.addLoader(r)),
                                    new Promise(function (e) {
                                        let r = null;
                                        (P = {
                                            total: 0,
                                            loaded: 0,
                                            ready: function () {
                                                e(r);
                                            },
                                        }),
                                            (r = M(t, i)),
                                            0 == P.total && e(r);
                                    })
                                );
                            };
                            let A = e.RendererWrapper.prototype.align;
                            (e.RendererWrapper.prototype.align = function (e, t, r, n, i = 1) {
                                A.call(this, e, t, r, n, i);
                            }),
                                (e.requestAnimationFrame = (i = new s()).requestAnimationFrame.bind(i)),
                                (e.cancelAnimationFrame = i.cancelAnimationFrame.bind(i)),
                                (e.enableFPSCounter = i.Mc.bind(i)),
                                (e.disableFPSCounter = i.Jc),
                                (i.mc = n),
                                (e.resolveAnimationFrame = n),
                                (e.cleanup = function () {
                                    x && x.delete();
                                });
                        };
                        var p = "./this.program";
                        a && (n = self.location.href);
                        var h,
                            m,
                            v = "";
                        if (o || a) {
                            try {
                                v = new URL(".", n).href;
                            } catch {}
                            a &&
                                (m = (e) => {
                                    var t = new XMLHttpRequest();
                                    return (
                                        t.open("GET", e, !1),
                                        (t.responseType = "arraybuffer"),
                                        t.send(null),
                                        new Uint8Array(t.response)
                                    );
                                }),
                                (h = async (e) => {
                                    if (R(e))
                                        return new Promise((t, r) => {
                                            var n = new XMLHttpRequest();
                                            n.open("GET", e, !0),
                                                (n.responseType = "arraybuffer"),
                                                (n.onload = () => {
                                                    200 == n.status || (0 == n.status && n.response)
                                                        ? t(n.response)
                                                        : r(n.status);
                                                }),
                                                (n.onerror = r),
                                                n.send(null);
                                        });
                                    var t = await fetch(e, { credentials: "same-origin" });
                                    if (t.ok) return t.arrayBuffer();
                                    throw Error(t.status + " : " + t.url);
                                });
                        }
                        var y,
                            g,
                            b,
                            w,
                            _,
                            S,
                            x,
                            E,
                            k,
                            C,
                            T,
                            M,
                            P,
                            A,
                            I = console.log.bind(console),
                            O = console.error.bind(console),
                            D = !1,
                            R = (e) => e.startsWith("file://"),
                            L = !1;
                        function F() {
                            var t = t9.buffer;
                            (e.HEAP8 = _ = new Int8Array(t)),
                                (x = new Int16Array(t)),
                                (e.HEAPU8 = S = new Uint8Array(t)),
                                (e.HEAPU16 = E = new Uint16Array(t)),
                                (e.HEAP32 = k = new Int32Array(t)),
                                (e.HEAPU32 = C = new Uint32Array(t)),
                                (e.HEAPF32 = T = new Float32Array(t)),
                                (M = new Float64Array(t)),
                                (P = new BigInt64Array(t)),
                                (A = new BigUint64Array(t));
                        }
                        function N(t) {
                            throw (
                                (e.onAbort?.(t),
                                O((t = "Aborted(" + t + ")")),
                                (D = !0),
                                (t = new WebAssembly.RuntimeError(t + ". Build with -sASSERTIONS for more info.")),
                                w?.(t),
                                t)
                            );
                        }
                        async function j(e) {
                            if (!y)
                                try {
                                    var t = await h(e);
                                    return new Uint8Array(t);
                                } catch {}
                            if (e == tS && y) e = new Uint8Array(y);
                            else if (m) e = m(e);
                            else throw "both async and sync fetching of the wasm failed";
                            return e;
                        }
                        async function B(e, t) {
                            try {
                                var r = await j(e);
                                return await WebAssembly.instantiate(r, t);
                            } catch (e) {
                                O(`failed to asynchronously prepare wasm: ${e}`), N(e);
                            }
                        }
                        async function K(e) {
                            if (!y && !R(tS))
                                try {
                                    var t = fetch(tS, { credentials: "same-origin" });
                                    return await WebAssembly.instantiateStreaming(t, e);
                                } catch (e) {
                                    O(`wasm streaming compile failed: ${e}`),
                                        O("falling back to ArrayBuffer instantiation");
                                }
                            return B(tS, e);
                        }
                        class $ {
                            name = "ExitStatus";
                            constructor(e) {
                                (this.message = `Program terminated with exit(${e})`), (this.status = e);
                            }
                        }
                        var V = (t) => {
                                for (; 0 < t.length; ) t.shift()(e);
                            },
                            U = [],
                            z = [],
                            W = () => {
                                var t = e.preRun.shift();
                                z.push(t);
                            },
                            H = !0,
                            G = () => {
                                var e = k[eK >> 2];
                                return (eK += 4), e;
                            },
                            q = (e, t) => {
                                for (var r = 0, n = e.length - 1; 0 <= n; n--) {
                                    var i = e[n];
                                    "." === i
                                        ? e.splice(n, 1)
                                        : ".." === i
                                          ? (e.splice(n, 1), r++)
                                          : r && (e.splice(n, 1), r--);
                                }
                                if (t) for (; r; r--) e.unshift("..");
                                return e;
                            },
                            Y = (e) => {
                                var t = "/" === e.charAt(0),
                                    r = "/" === e.slice(-1);
                                return (
                                    (e = q(
                                        e.split("/").filter((e) => !!e),
                                        !t,
                                    ).join("/")) ||
                                        t ||
                                        (e = "."),
                                    e && r && (e += "/"),
                                    (t ? "/" : "") + e
                                );
                            },
                            X = (e) => {
                                var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                                    .exec(e)
                                    .slice(1);
                                return ((e = t[0]), (t = t[1]), e || t) ? e + (t &&= t.slice(0, -1)) : ".";
                            },
                            J = (e) => {
                                (J = (e) => crypto.getRandomValues(e))(e);
                            },
                            Q = globalThis.TextDecoder && new TextDecoder(),
                            Z = (e, t, r, n) => {
                                if (((r = t + r), n)) return r;
                                for (; e[t] && !(t >= r); ) ++t;
                                return t;
                            },
                            ee = (e, t = 0, r, n) => {
                                if (16 < (r = Z(e, t, r, n)) - t && e.buffer && Q) return Q.decode(e.subarray(t, r));
                                for (n = ""; t < r; ) {
                                    var i = e[t++];
                                    if (128 & i) {
                                        var o = 63 & e[t++];
                                        if (192 == (224 & i)) n += String.fromCharCode(((31 & i) << 6) | o);
                                        else {
                                            var a = 63 & e[t++];
                                            65536 >
                                            (i =
                                                224 == (240 & i)
                                                    ? ((15 & i) << 12) | (o << 6) | a
                                                    : ((7 & i) << 18) | (o << 12) | (a << 6) | (63 & e[t++]))
                                                ? (n += String.fromCharCode(i))
                                                : ((i -= 65536),
                                                  (n += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i))));
                                        }
                                    } else n += String.fromCharCode(i);
                                }
                                return n;
                            },
                            et = [],
                            er = (e) => {
                                for (var t = 0, r = 0; r < e.length; ++r) {
                                    var n = e.charCodeAt(r);
                                    127 >= n
                                        ? t++
                                        : 2047 >= n
                                          ? (t += 2)
                                          : 55296 <= n && 57343 >= n
                                            ? ((t += 4), ++r)
                                            : (t += 3);
                                }
                                return t;
                            },
                            en = (e, t, r, n) => {
                                if (!(0 < n)) return 0;
                                var i = r;
                                n = r + n - 1;
                                for (var o = 0; o < e.length; ++o) {
                                    var a = e.codePointAt(o);
                                    if (127 >= a) {
                                        if (r >= n) break;
                                        t[r++] = a;
                                    } else if (2047 >= a) {
                                        if (r + 1 >= n) break;
                                        (t[r++] = 192 | (a >> 6)), (t[r++] = 128 | (63 & a));
                                    } else if (65535 >= a) {
                                        if (r + 2 >= n) break;
                                        (t[r++] = 224 | (a >> 12)),
                                            (t[r++] = 128 | ((a >> 6) & 63)),
                                            (t[r++] = 128 | (63 & a));
                                    } else {
                                        if (r + 3 >= n) break;
                                        (t[r++] = 240 | (a >> 18)),
                                            (t[r++] = 128 | ((a >> 12) & 63)),
                                            (t[r++] = 128 | ((a >> 6) & 63)),
                                            (t[r++] = 128 | (63 & a)),
                                            o++;
                                    }
                                }
                                return (t[r] = 0), r - i;
                            },
                            ei = [];
                        function eo(e, t) {
                            (ei[e] = { input: [], output: [], ab: t }), eA(e, ea);
                        }
                        var ea = {
                                open(e) {
                                    var t = ei[e.node.zb];
                                    if (!t) throw new ev(43);
                                    (e.Ca = t), (e.seekable = !1);
                                },
                                close(e) {
                                    e.Ca.ab.sb(e.Ca);
                                },
                                sb(e) {
                                    e.Ca.ab.sb(e.Ca);
                                },
                                read(e, t, r, n) {
                                    if (!e.Ca || !e.Ca.ab.ec) throw new ev(60);
                                    for (var i = 0, o = 0; o < n; o++) {
                                        try {
                                            var a = e.Ca.ab.ec(e.Ca);
                                        } catch (e) {
                                            throw new ev(29);
                                        }
                                        if (void 0 === a && 0 === i) throw new ev(6);
                                        if (null == a) break;
                                        i++, (t[r + o] = a);
                                    }
                                    return i && (e.node.gb = Date.now()), i;
                                },
                                write(e, t, r, n) {
                                    if (!e.Ca || !e.Ca.ab.Pb) throw new ev(60);
                                    try {
                                        for (var i = 0; i < n; i++) e.Ca.ab.Pb(e.Ca, t[r + i]);
                                    } catch (e) {
                                        throw new ev(29);
                                    }
                                    return n && (e.node.Ra = e.node.Oa = Date.now()), i;
                                },
                            },
                            es = {
                                Ua: null,
                                $a: () => es.createNode(null, "/", 16895, 0),
                                createNode(e, t, r, n) {
                                    if (24576 == (61440 & r) || 4096 == (61440 & r)) throw new ev(63);
                                    return (
                                        es.Ua ||
                                            (es.Ua = {
                                                dir: {
                                                    node: {
                                                        eb: es.za.eb,
                                                        Wa: es.za.Wa,
                                                        nb: es.za.nb,
                                                        wb: es.za.wb,
                                                        qc: es.za.qc,
                                                        wc: es.za.wc,
                                                        sc: es.za.sc,
                                                        Rb: es.za.Rb,
                                                        Db: es.za.Db,
                                                    },
                                                    stream: { Ta: es.xa.Ta },
                                                },
                                                file: {
                                                    node: { eb: es.za.eb, Wa: es.za.Wa },
                                                    stream: {
                                                        Ta: es.xa.Ta,
                                                        read: es.xa.read,
                                                        write: es.xa.write,
                                                        jc: es.xa.jc,
                                                        lc: es.xa.lc,
                                                    },
                                                },
                                                link: {
                                                    node: { eb: es.za.eb, Wa: es.za.Wa, pb: es.za.pb },
                                                    stream: {},
                                                },
                                                $b: { node: { eb: es.za.eb, Wa: es.za.Wa }, stream: eP },
                                            }),
                                        16384 == (61440 & (r = eS(e, t, r, n)).mode)
                                            ? ((r.za = es.Ua.dir.node), (r.xa = es.Ua.dir.stream), (r.ya = {}))
                                            : 32768 == (61440 & r.mode)
                                              ? ((r.za = es.Ua.file.node),
                                                (r.xa = es.Ua.file.stream),
                                                (r.Ga = 0),
                                                (r.ya = null))
                                              : 40960 == (61440 & r.mode)
                                                ? ((r.za = es.Ua.link.node), (r.xa = es.Ua.link.stream))
                                                : 8192 == (61440 & r.mode) &&
                                                  ((r.za = es.Ua.$b.node), (r.xa = es.Ua.$b.stream)),
                                        (r.gb = r.Ra = r.Oa = Date.now()),
                                        e && ((e.ya[t] = r), (e.gb = e.Ra = e.Oa = r.gb)),
                                        r
                                    );
                                },
                                Dd: (e) =>
                                    e.ya
                                        ? e.ya.subarray
                                            ? e.ya.subarray(0, e.Ga)
                                            : new Uint8Array(e.ya)
                                        : new Uint8Array(0),
                                za: {
                                    eb(e) {
                                        var t = {};
                                        return (
                                            (t.Ad = 8192 == (61440 & e.mode) ? e.id : 1),
                                            (t.Fd = e.id),
                                            (t.mode = e.mode),
                                            (t.Hd = 1),
                                            (t.uid = 0),
                                            (t.Ed = 0),
                                            (t.zb = e.zb),
                                            16384 == (61440 & e.mode)
                                                ? (t.size = 4096)
                                                : 32768 == (61440 & e.mode)
                                                  ? (t.size = e.Ga)
                                                  : 40960 == (61440 & e.mode)
                                                    ? (t.size = e.link.length)
                                                    : (t.size = 0),
                                            (t.gb = new Date(e.gb)),
                                            (t.Ra = new Date(e.Ra)),
                                            (t.Oa = new Date(e.Oa)),
                                            (t.Fc = 4096),
                                            (t.ud = Math.ceil(t.size / t.Fc)),
                                            t
                                        );
                                    },
                                    Wa(e, t) {
                                        for (var r of ["mode", "atime", "mtime", "ctime"])
                                            null != t[r] && (e[r] = t[r]);
                                        void 0 !== t.size &&
                                            ((t = t.size),
                                            e.Ga != t &&
                                                (0 == t
                                                    ? ((e.ya = null), (e.Ga = 0))
                                                    : ((r = e.ya),
                                                      (e.ya = new Uint8Array(t)),
                                                      r && e.ya.set(r.subarray(0, Math.min(t, e.Ga))),
                                                      (e.Ga = t))));
                                    },
                                    nb() {
                                        throw (
                                            (es.Jb ||
                                                ((es.Jb = new ev(44)), (es.Jb.stack = "<generic error, no stack>")),
                                            es.Jb)
                                        );
                                    },
                                    wb: (e, t, r, n) => es.createNode(e, t, r, n),
                                    qc(e, t, r) {
                                        try {
                                            var n = e_(t, r);
                                        } catch (e) {}
                                        if (n) {
                                            if (16384 == (61440 & e.mode)) for (var i in n.ya) throw new ev(55);
                                            if (ed[(i = ew(n.parent.id, n.name))] === n) ed[i] = n.jb;
                                            else
                                                for (i = ed[i]; i; ) {
                                                    if (i.jb === n) {
                                                        i.jb = n.jb;
                                                        break;
                                                    }
                                                    i = i.jb;
                                                }
                                        }
                                        delete e.parent.ya[e.name],
                                            (t.ya[r] = e),
                                            (e.name = r),
                                            (t.Oa = t.Ra = e.parent.Oa = e.parent.Ra = Date.now());
                                    },
                                    wc(e, t) {
                                        delete e.ya[t], (e.Oa = e.Ra = Date.now());
                                    },
                                    sc(e, t) {
                                        var r,
                                            n = e_(e, t);
                                        for (r in n.ya) throw new ev(55);
                                        delete e.ya[t], (e.Oa = e.Ra = Date.now());
                                    },
                                    Rb: (e) => [".", "..", ...Object.keys(e.ya)],
                                    Db: (e, t, r) => (((e = es.createNode(e, t, 41471, 0)).link = r), e),
                                    pb(e) {
                                        if (40960 != (61440 & e.mode)) throw new ev(28);
                                        return e.link;
                                    },
                                },
                                xa: {
                                    read(e, t, r, n, i) {
                                        var o = e.node.ya;
                                        if (i >= e.node.Ga) return 0;
                                        if (8 < (e = Math.min(e.node.Ga - i, n)) && o.subarray)
                                            t.set(o.subarray(i, i + e), r);
                                        else for (n = 0; n < e; n++) t[r + n] = o[i + n];
                                        return e;
                                    },
                                    write(e, t, r, n, i, o) {
                                        if ((t.buffer === _.buffer && (o = !1), !n)) return 0;
                                        if (
                                            (((e = e.node).Ra = e.Oa = Date.now()),
                                            t.subarray && (!e.ya || e.ya.subarray))
                                        ) {
                                            if (o) return (e.ya = t.subarray(r, r + n)), (e.Ga = n);
                                            if (0 === e.Ga && 0 === i) return (e.ya = t.slice(r, r + n)), (e.Ga = n);
                                            if (i + n <= e.Ga) return e.ya.set(t.subarray(r, r + n), i), n;
                                        }
                                        o = i + n;
                                        var a = e.ya ? e.ya.length : 0;
                                        if (
                                            (a >= o ||
                                                ((o = Math.max(o, (a * (1048576 > a ? 2 : 1.125)) >>> 0)),
                                                0 != a && (o = Math.max(o, 256)),
                                                (a = e.ya),
                                                (e.ya = new Uint8Array(o)),
                                                0 < e.Ga && e.ya.set(a.subarray(0, e.Ga), 0)),
                                            e.ya.subarray && t.subarray)
                                        )
                                            e.ya.set(t.subarray(r, r + n), i);
                                        else for (o = 0; o < n; o++) e.ya[i + o] = t[r + o];
                                        return (e.Ga = Math.max(e.Ga, i + n)), n;
                                    },
                                    Ta(e, t, r) {
                                        if (
                                            (1 === r
                                                ? (t += e.position)
                                                : 2 === r && 32768 == (61440 & e.node.mode) && (t += e.node.Ga),
                                            0 > t)
                                        )
                                            throw new ev(28);
                                        return t;
                                    },
                                    jc(e, t, r, n, i) {
                                        if (32768 != (61440 & e.node.mode)) throw new ev(43);
                                        if (((e = e.node.ya), 2 & i || !e || e.buffer !== _.buffer))
                                            throw ((n = !0), N(), (i = void 0), new ev(48));
                                        return (n = !1), (i = e.byteOffset), { Ba: i, td: n };
                                    },
                                    lc: (e, t, r, n) => (es.xa.write(e, t, 0, n, r, !1), 0),
                                },
                            },
                            el = null,
                            eu = {},
                            ec = [],
                            ef = 1,
                            ed = null,
                            ep = !1,
                            eh = !0,
                            em = {},
                            ev = class {
                                name = "ErrnoError";
                                constructor(e) {
                                    this.bb = e;
                                }
                            },
                            ey = class {
                                Eb = {};
                                node = null;
                                get flags() {
                                    return this.Eb.flags;
                                }
                                set flags(e) {
                                    this.Eb.flags = e;
                                }
                                get position() {
                                    return this.Eb.position;
                                }
                                set position(e) {
                                    this.Eb.position = e;
                                }
                            },
                            eg = class {
                                za = {};
                                xa = {};
                                xb = null;
                                constructor(e, t, r, n) {
                                    (e ||= this),
                                        (this.parent = e),
                                        (this.$a = e.$a),
                                        (this.id = ef++),
                                        (this.name = t),
                                        (this.mode = r),
                                        (this.zb = n),
                                        (this.gb = this.Ra = this.Oa = Date.now());
                                }
                                get read() {
                                    return 365 == (365 & this.mode);
                                }
                                set read(e) {
                                    e ? (this.mode |= 365) : (this.mode &= -366);
                                }
                                get write() {
                                    return 146 == (146 & this.mode);
                                }
                                set write(e) {
                                    e ? (this.mode |= 146) : (this.mode &= -147);
                                }
                            };
                        function eb(e, t = {}) {
                            if (!e) throw new ev(44);
                            t.Lb ?? (t.Lb = !0), "/" === e.charAt(0) || (e = "//" + e);
                            var r = 0;
                            e: for (; 40 > r; r++) {
                                e = e.split("/").filter((e) => !!e);
                                for (var n = el, i = "/", o = 0; o < e.length; o++) {
                                    var a = o === e.length - 1;
                                    if (a && t.parent) break;
                                    if ("." !== e[o])
                                        if (".." === e[o])
                                            if (((i = X(i)), n === n.parent)) {
                                                (e = i + "/" + e.slice(o + 1).join("/")), r--;
                                                continue e;
                                            } else n = n.parent;
                                        else {
                                            i = Y(i + "/" + e[o]);
                                            try {
                                                n = e_(n, e[o]);
                                            } catch (e) {
                                                if (44 === e?.bb && a && t.fd) return { path: i };
                                                throw e;
                                            }
                                            if (
                                                (n.xb && (!a || t.Lb) && (n = n.xb.root),
                                                40960 == (61440 & n.mode) && (!a || t.Kb))
                                            ) {
                                                if (!n.za.pb) throw new ev(52);
                                                "/" === (n = n.za.pb(n)).charAt(0) || (n = X(i) + "/" + n),
                                                    (e = n + "/" + e.slice(o + 1).join("/"));
                                                continue e;
                                            }
                                        }
                                }
                                return { path: i, node: n };
                            }
                            throw new ev(32);
                        }
                        function ew(e, t) {
                            for (var r = 0, n = 0; n < t.length; n++) r = ((r << 5) - r + t.charCodeAt(n)) | 0;
                            return ((e + r) >>> 0) % ed.length;
                        }
                        function e_(e, t) {
                            var r = 16384 == (61440 & e.mode) ? ((r = eE(e, "x")) ? r : 2 * !e.za.nb) : 54;
                            if (r) throw new ev(r);
                            for (r = ed[ew(e.id, t)]; r; r = r.jb) {
                                var n = r.name;
                                if (r.parent.id === e.id && n === t) return r;
                            }
                            return e.za.nb(e, t);
                        }
                        function eS(e, t, r, n) {
                            return (t = ew((e = new eg(e, t, r, n)).parent.id, e.name)), (e.jb = ed[t]), (ed[t] = e);
                        }
                        function ex(e) {
                            var t = ["r", "w", "rw"][3 & e];
                            return 512 & e && (t += "w"), t;
                        }
                        function eE(e, t) {
                            return eh
                                ? 0
                                : (t.includes("r") && !(292 & e.mode)) ||
                                    (t.includes("w") && !(146 & e.mode)) ||
                                    (t.includes("x") && !(73 & e.mode))
                                  ? 2
                                  : 0;
                        }
                        function ek(e, t) {
                            if (16384 != (61440 & e.mode)) return 54;
                            try {
                                return e_(e, t), 20;
                            } catch (e) {}
                            return eE(e, "wx");
                        }
                        function eC(e) {
                            if (!(e = ec[e])) throw new ev(8);
                            return e;
                        }
                        function eT(e, t = -1) {
                            if (((e = Object.assign(new ey(), e)), -1 == t))
                                e: {
                                    for (t = 0; 4096 >= t; t++) if (!ec[t]) break e;
                                    throw new ev(33);
                                }
                            return (e.cb = t), (ec[t] = e);
                        }
                        function eM(e, t) {
                            var r = void 0,
                                n = r ? null : e;
                            if (!(r ??= e.za.Wa)) throw new ev(63);
                            r(n, t);
                        }
                        var eP = {
                            open(e) {
                                (e.xa = eu[e.node.zb].xa), e.xa.open?.(e);
                            },
                            Ta() {
                                throw new ev(70);
                            },
                        };
                        function eA(e, t) {
                            eu[e] = { xa: t };
                        }
                        function eI(e, t) {
                            var r = "/" === t;
                            if (r && el) throw new ev(10);
                            if (!r && t) {
                                var n = eb(t, { Lb: !1 });
                                if (((t = n.path), (n = n.node).xb)) throw new ev(10);
                                if (16384 != (61440 & n.mode)) throw new ev(54);
                            }
                            (t = { type: e, Id: {}, kc: t, dd: [] }),
                                ((e = e.$a(t)).$a = t),
                                (t.root = e),
                                r ? (el = e) : n && ((n.xb = t), n.$a && n.$a.dd.push(t));
                        }
                        function eO(e, t, r) {
                            var n = eb(e, { parent: !0 }).node;
                            if (!(e = e && e.match(/([^\/]+|\/)\/*$/)[1])) throw new ev(28);
                            if ("." === e || ".." === e) throw new ev(20);
                            var i = ek(n, e);
                            if (i) throw new ev(i);
                            if (!n.za.wb) throw new ev(63);
                            return n.za.wb(n, e, t, r);
                        }
                        function eD(e) {
                            return eO(e, 16895, 0);
                        }
                        function eR(e, t, r) {
                            void 0 === r && ((r = t), (t = 438)), eO(e, 8192 | t, r);
                        }
                        function eL(e, t) {
                            if (
                                !((...e) => {
                                    for (var t = "", r = !1, n = e.length - 1; -1 <= n && !r; n--) {
                                        if ("string" != typeof (r = 0 <= n ? e[n] : "/"))
                                            throw TypeError("Arguments to path.resolve must be strings");
                                        if (!r) return "";
                                        (t = r + "/" + t), (r = "/" === r.charAt(0));
                                    }
                                    return (
                                        (t = q(
                                            t.split("/").filter((e) => !!e),
                                            !r,
                                        ).join("/")),
                                        (r ? "/" : "") + t || "."
                                    );
                                })(e)
                            )
                                throw new ev(44);
                            var r = eb(t, { parent: !0 }).node;
                            if (!r) throw new ev(44);
                            var n = ek(r, (t = t && t.match(/([^\/]+|\/)\/*$/)[1]));
                            if (n) throw new ev(n);
                            if (!r.za.Db) throw new ev(63);
                            r.za.Db(r, t, e);
                        }
                        function eF(t, r, n = 438) {
                            if ("" === t) throw new ev(44);
                            if ("string" == typeof r) {
                                var i = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r];
                                if (void 0 === i) throw Error(`Unknown file open mode: ${r}`);
                                r = i;
                            }
                            if (((n = 64 & r ? (4095 & n) | 32768 : 0), "object" == typeof t)) i = t;
                            else {
                                var o = t.endsWith("/");
                                (i = (t = eb(t, { Kb: !(131072 & r), fd: !0 })).node), (t = t.path);
                            }
                            var a = !1;
                            if (64 & r)
                                if (i) {
                                    if (128 & r) throw new ev(20);
                                } else {
                                    if (o) throw new ev(31);
                                    (i = eO(t, 511 | n, 0)), (a = !0);
                                }
                            if (!i) throw new ev(44);
                            if ((8192 == (61440 & i.mode) && (r &= -513), 65536 & r && 16384 != (61440 & i.mode)))
                                throw new ev(54);
                            if (
                                !a &&
                                (o = i
                                    ? 40960 == (61440 & i.mode)
                                        ? 32
                                        : 16384 == (61440 & i.mode) && ("r" !== ex(r) || 576 & r)
                                          ? 31
                                          : eE(i, ex(r))
                                    : 44)
                            )
                                throw new ev(o);
                            if (512 & r && !a) {
                                if (
                                    16384 ==
                                    (61440 & (o = "string" == typeof (o = i) ? eb(o, { Kb: !0 }).node : o).mode)
                                )
                                    throw new ev(31);
                                if (32768 != (61440 & o.mode)) throw new ev(28);
                                var s = eE(o, "w");
                                if (s) throw new ev(s);
                                eM(o, { size: 0, timestamp: Date.now() });
                            }
                            for (r &= -131713, o = i; ; ) {
                                if (o === o.parent) {
                                    o = o.$a.kc;
                                    var l = l ? ("/" !== o[o.length - 1] ? `${o}/${l}` : o + l) : o;
                                    break;
                                }
                                (l = l ? `${o.name}/${l}` : o.name), (o = o.parent);
                            }
                            return (
                                (l = eT({
                                    node: i,
                                    path: l,
                                    flags: r,
                                    seekable: !0,
                                    position: 0,
                                    xa: i.xa,
                                    nd: [],
                                    error: !1,
                                })).xa.open && l.xa.open(l),
                                a &&
                                    ((n &= 511),
                                    eM((i = "string" == typeof i ? eb(i, { Kb: !0 }).node : i), {
                                        mode: (4095 & n) | (-4096 & i.mode),
                                        Oa: Date.now(),
                                        Bd: void 0,
                                    })),
                                !e.logReadFiles || 1 & r || t in em || (em[t] = 1),
                                l
                            );
                        }
                        function eN(e, t, r) {
                            if (null === e.cb) throw new ev(8);
                            if (!e.seekable || !e.xa.Ta) throw new ev(70);
                            if (0 != r && 1 != r && 2 != r) throw new ev(28);
                            (e.position = e.xa.Ta(e, t, r)), (e.nd = []);
                        }
                        function ej(e, t, r) {
                            e = Y("/dev/" + e);
                            var n,
                                i = ((n = 0), t && (n |= 365), r && (n |= 146), n);
                            ej.ic ?? (ej.ic = 64);
                            var o = ej.ic++ << 8;
                            eA(o, {
                                open(e) {
                                    e.seekable = !1;
                                },
                                close() {
                                    r?.buffer?.length && r(10);
                                },
                                read(e, r, n, i) {
                                    for (var o = 0, a = 0; a < i; a++) {
                                        try {
                                            var s = t();
                                        } catch (e) {
                                            throw new ev(29);
                                        }
                                        if (void 0 === s && 0 === o) throw new ev(6);
                                        if (null == s) break;
                                        o++, (r[n + a] = s);
                                    }
                                    return o && (e.node.gb = Date.now()), o;
                                },
                                write(e, t, n, i) {
                                    for (var o = 0; o < i; o++)
                                        try {
                                            r(t[n + o]);
                                        } catch (e) {
                                            throw new ev(29);
                                        }
                                    return i && (e.node.Ra = e.node.Oa = Date.now()), o;
                                },
                            }),
                                eR(e, i, o);
                        }
                        var eB = {},
                            eK = void 0,
                            e$ = (e, t) => Object.defineProperty(t, "name", { value: e }),
                            eV = [],
                            eU = [0, 1, , 1, null, 1, !0, 1, !1, 1],
                            ez = class extends Error {
                                constructor(e) {
                                    super(e), (this.name = "BindingError");
                                }
                            },
                            eW = (e) => {
                                if (!e) throw new ez(`Cannot use deleted val. handle = ${e}`);
                                return eU[e];
                            },
                            eH = (e) => {
                                switch (e) {
                                    case void 0:
                                        return 2;
                                    case null:
                                        return 4;
                                    case !0:
                                        return 6;
                                    case !1:
                                        return 8;
                                    default:
                                        let t = eV.pop() || eU.length;
                                        return (eU[t] = e), (eU[t + 1] = 1), t;
                                }
                            };
                        class eG extends Error {}
                        var eq = (e) => {
                                for (var t = ""; ; ) {
                                    var r = S[e++];
                                    if (!r) return t;
                                    t += String.fromCharCode(r);
                                }
                            },
                            eY = {},
                            eX = (e, t) => {
                                if (void 0 === t) throw new ez("ptr should not be undefined");
                                for (; e.Ia; ) (t = e.qb(t)), (e = e.Ia);
                                return t;
                            },
                            eJ = {},
                            eQ = (e) => {
                                var t = eq((e = t1(e)));
                                return tZ(e), t;
                            },
                            eZ = (e, t) => {
                                var r = eJ[e];
                                if (void 0 === r) throw new ez((e = `${t} has unknown type ${eQ(e)}`));
                                return r;
                            },
                            e0 = () => {},
                            e1 = !1,
                            e2 = (e) =>
                                globalThis.FinalizationRegistry
                                    ? ((e1 = new FinalizationRegistry((e) => {
                                          (e = e.va),
                                              --e.count.value,
                                              0 === e.count.value && (e.Ja ? e.Pa.Va(e.Ja) : e.Da.wa.Va(e.Ba));
                                      })),
                                      (e2 = (e) => {
                                          var t = e.va;
                                          return t.Ja && e1.register(e, { va: t }, e), e;
                                      }),
                                      (e0 = (e) => {
                                          e1.unregister(e);
                                      }),
                                      e2(e))
                                    : ((e2 = (e) => e), e),
                            e3 = {},
                            e5 = (e) => {
                                for (; e.length; ) {
                                    var t = e.pop();
                                    e.pop()(t);
                                }
                            };
                        function e4(e) {
                            return this.Aa(C[e >> 2]);
                        }
                        var e6 = {},
                            e8 = {},
                            e7 = class extends Error {
                                constructor(e) {
                                    super(e), (this.name = "InternalError");
                                }
                            },
                            e9 = (e, t, r) => {
                                function n(t) {
                                    if ((t = r(t)).length !== e.length) throw new e7("Mismatched type converter count");
                                    for (var n = 0; n < e.length; ++n) te(e[n], t[n]);
                                }
                                e.forEach((e) => (e8[e] = t));
                                var i = Array(t.length),
                                    o = [],
                                    a = 0;
                                for (let [e, r] of t.entries())
                                    eJ.hasOwnProperty(r)
                                        ? (i[e] = eJ[r])
                                        : (o.push(r),
                                          e6.hasOwnProperty(r) || (e6[r] = []),
                                          e6[r].push(() => {
                                              (i[e] = eJ[r]), ++a === o.length && n(i);
                                          }));
                                0 === o.length && n(i);
                            };
                        function te(e, t, r = {}) {
                            return (function (e, t, r = {}) {
                                var n = t.name;
                                if (!e) throw new ez(`type "${n}" must have a positive integer typeid pointer`);
                                if (eJ.hasOwnProperty(e)) {
                                    if (r.Uc) return;
                                    throw new ez(`Cannot register type '${n}' twice`);
                                }
                                (eJ[e] = t),
                                    delete e8[e],
                                    e6.hasOwnProperty(e) && ((t = e6[e]), delete e6[e], t.forEach((e) => e()));
                            })(e, t, r);
                        }
                        var tt = (e, t, r) => {
                                switch (t) {
                                    case 1:
                                        return r ? (e) => _[e] : (e) => S[e];
                                    case 2:
                                        return r ? (e) => x[e >> 1] : (e) => E[e >> 1];
                                    case 4:
                                        return r ? (e) => k[e >> 2] : (e) => C[e >> 2];
                                    case 8:
                                        return r ? (e) => P[e >> 3] : (e) => A[e >> 3];
                                    default:
                                        throw TypeError(`invalid integer width (${t}): ${e}`);
                                }
                            },
                            tr = (e) => {
                                throw new ez(e.va.Da.wa.name + " instance already deleted");
                            },
                            tn = [];
                        function ti() {}
                        var to = {},
                            ta = (e, t, r) => {
                                if (void 0 === e[t].Fa) {
                                    var n = e[t];
                                    (e[t] = function (...n) {
                                        if (!e[t].Fa.hasOwnProperty(n.length))
                                            throw new ez(
                                                `Function '${r}' called with an invalid number of arguments (${n.length}) - expects one of (${e[t].Fa})!`,
                                            );
                                        return e[t].Fa[n.length].apply(this, n);
                                    }),
                                        (e[t].Fa = []),
                                        (e[t].Fa[n.Za] = n);
                                }
                            },
                            ts = (t, r, n) => {
                                if (e.hasOwnProperty(t)) {
                                    if (void 0 === n || (void 0 !== e[t].Fa && void 0 !== e[t].Fa[n]))
                                        throw new ez(`Cannot register public name '${t}' twice`);
                                    if ((ta(e, t, t), e[t].Fa.hasOwnProperty(n)))
                                        throw new ez(
                                            `Cannot register multiple overloads of a function with the same number of arguments (${n})!`,
                                        );
                                    e[t].Fa[n] = r;
                                } else (e[t] = r), (e[t].Za = n);
                            };
                        function tl(e, t, r, n, i, o, a, s) {
                            (this.name = e),
                                (this.constructor = t),
                                (this.Sa = r),
                                (this.Va = n),
                                (this.Ia = i),
                                (this.Pc = o),
                                (this.qb = a),
                                (this.Kc = s),
                                (this.oc = []);
                        }
                        var tu = (e, t, r) => {
                                for (; t !== r; ) {
                                    if (!t.qb)
                                        throw new ez(
                                            `Expected null or instance of ${r.name}, got an instance of ${t.name}`,
                                        );
                                    (e = t.qb(e)), (t = t.Ia);
                                }
                                return e;
                            },
                            tc = (e) => {
                                if (null === e) return "null";
                                var t = typeof e;
                                return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e;
                            };
                        function tf(e, t) {
                            if (null === t) {
                                if (this.Nb) throw new ez(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.va) throw new ez(`Cannot pass "${tc(t)}" as a ${this.name}`);
                            if (!t.va.Ba) throw new ez(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            return tu(t.va.Ba, t.va.Da.wa, this.wa);
                        }
                        function td(e, t) {
                            if (null === t) {
                                if (this.Nb) throw new ez(`null is not a valid ${this.name}`);
                                if (this.vb) {
                                    var r = this.Qb();
                                    return null !== e && e.push(this.Va, r), r;
                                }
                                return 0;
                            }
                            if (!t || !t.va) throw new ez(`Cannot pass "${tc(t)}" as a ${this.name}`);
                            if (!t.va.Ba) throw new ez(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (!this.ub && t.va.Da.ub)
                                throw new ez(
                                    `Cannot convert argument of type ${t.va.Pa ? t.va.Pa.name : t.va.Da.name} to parameter type ${this.name}`,
                                );
                            if (((r = tu(t.va.Ba, t.va.Da.wa, this.wa)), this.vb)) {
                                if (void 0 === t.va.Ja) throw new ez("Passing raw pointer to smart pointer is illegal");
                                switch (this.md) {
                                    case 0:
                                        if (t.va.Pa === this) r = t.va.Ja;
                                        else
                                            throw new ez(
                                                `Cannot convert argument of type ${t.va.Pa ? t.va.Pa.name : t.va.Da.name} to parameter type ${this.name}`,
                                            );
                                        break;
                                    case 1:
                                        r = t.va.Ja;
                                        break;
                                    case 2:
                                        if (t.va.Pa === this) r = t.va.Ja;
                                        else {
                                            var n = t.clone();
                                            (r = this.hd(
                                                r,
                                                eH(() => n.delete()),
                                            )),
                                                null !== e && e.push(this.Va, r);
                                        }
                                        break;
                                    default:
                                        throw new ez("Unsupported sharing policy");
                                }
                            }
                            return r;
                        }
                        function tp(e, t) {
                            if (null === t) {
                                if (this.Nb) throw new ez(`null is not a valid ${this.name}`);
                                return 0;
                            }
                            if (!t.va) throw new ez(`Cannot pass "${tc(t)}" as a ${this.name}`);
                            if (!t.va.Ba) throw new ez(`Cannot pass deleted object as a pointer of type ${this.name}`);
                            if (t.va.Da.ub)
                                throw new ez(
                                    `Cannot convert argument of type ${t.va.Da.name} to parameter type ${this.name}`,
                                );
                            return tu(t.va.Ba, t.va.Da.wa, this.wa);
                        }
                        var th = (e, t, r) =>
                                t === r ? e : void 0 === r.Ia || null === (e = th(e, t, r.Ia)) ? null : r.Kc(e),
                            tm = (e, t) => {
                                if (!t.Da || !t.Ba) throw new e7("makeClassHandle requires ptr and ptrType");
                                if (!!t.Pa != !!t.Ja) throw new e7("Both smartPtrType and smartPtr must be specified");
                                return (
                                    (t.count = { value: 1 }), e2(Object.create(e, { va: { value: t, writable: !0 } }))
                                );
                            };
                        function tv(e, t, r, n, i, o, a, s, l, u, c) {
                            (this.name = e),
                                (this.wa = t),
                                (this.Nb = r),
                                (this.ub = n),
                                (this.vb = i),
                                (this.gd = o),
                                (this.md = a),
                                (this.pc = s),
                                (this.Qb = l),
                                (this.hd = u),
                                (this.Va = c),
                                i || void 0 !== t.Ia ? (this.Ea = td) : ((this.Ea = n ? tf : tp), (this.La = null));
                        }
                        var ty = (t, r, n) => {
                                if (!e.hasOwnProperty(t)) throw new e7("Replacing nonexistent public symbol");
                                void 0 !== e[t].Fa && void 0 !== n ? (e[t].Fa[n] = r) : ((e[t] = r), (e[t].Za = n));
                            },
                            tg = (e, t) => {
                                e = eq(e);
                                var r = re.get(t);
                                if ("function" != typeof r)
                                    throw new ez(`unknown function pointer with signature ${e}: ${t}`);
                                return r;
                            };
                        class tb extends Error {}
                        var tw = (e, t) => {
                            var r = [],
                                n = {};
                            throw (
                                (t.forEach(function e(t) {
                                    n[t] || eJ[t] || (e8[t] ? e8[t].forEach(e) : (r.push(t), (n[t] = !0)));
                                }),
                                new tb(`${e}: ` + r.map(eQ).join([", "])))
                            );
                        };
                        function t_(e, t, r, n, i) {
                            var o = t.length;
                            if (2 > o)
                                throw new ez(
                                    "argTypes array size mismatch! Must at least get return value and 'this' types!",
                                );
                            var a = null !== t[1] && null !== r,
                                s = (function (e) {
                                    for (var t = 1; t < e.length; ++t)
                                        if (null !== e[t] && void 0 === e[t].La) return !0;
                                    return !1;
                                })(t),
                                l = !t[0].$c,
                                u = o - 2,
                                c = Array(u),
                                f = [],
                                d = [];
                            return e$(e, function (...e) {
                                if (((d.length = 0), (f.length = a ? 2 : 1), (f[0] = i), a)) {
                                    var r = t[1].Ea(d, this);
                                    f[1] = r;
                                }
                                for (var o = 0; o < u; ++o) (c[o] = t[o + 2].Ea(d, e[o])), f.push(c[o]);
                                if (((e = n(...f)), s)) e5(d);
                                else
                                    for (o = a ? 1 : 2; o < t.length; o++) {
                                        var p = 1 === o ? r : c[o - 2];
                                        null !== t[o].La && t[o].La(p);
                                    }
                                return l ? t[0].Aa(e) : void 0;
                            });
                        }
                        var tS,
                            tx,
                            tE = (e, t) => {
                                for (var r = [], n = 0; n < e; n++) r.push(C[(t + 4 * n) >> 2]);
                                return r;
                            },
                            tk = (e) => {
                                let t = (e = e.trim()).indexOf("(");
                                return -1 === t ? e : e.slice(0, t);
                            },
                            tC = (e, t, r) => {
                                if (!(e instanceof Object)) throw new ez(`${r} with invalid "this": ${e}`);
                                if (!(e instanceof t.wa.constructor))
                                    throw new ez(`${r} incompatible with "this" of type ${e.constructor.name}`);
                                if (!e.va.Ba)
                                    throw new ez(`cannot call emscripten binding method ${r} on deleted object`);
                                return tu(e.va.Ba, e.va.Da.wa, t.wa);
                            },
                            tT = (e) => {
                                9 < e && 0 == --eU[e + 1] && ((eU[e] = void 0), eV.push(e));
                            },
                            tM = {
                                name: "emscripten::val",
                                Aa: (e) => {
                                    var t = eW(e);
                                    return tT(e), t;
                                },
                                Ea: (e, t) => eH(t),
                                Ma: e4,
                                La: null,
                            },
                            tP = (e, t, r) => {
                                switch (t) {
                                    case 1:
                                        return r
                                            ? function (e) {
                                                  return this.Aa(_[e]);
                                              }
                                            : function (e) {
                                                  return this.Aa(S[e]);
                                              };
                                    case 2:
                                        return r
                                            ? function (e) {
                                                  return this.Aa(x[e >> 1]);
                                              }
                                            : function (e) {
                                                  return this.Aa(E[e >> 1]);
                                              };
                                    case 4:
                                        return r
                                            ? function (e) {
                                                  return this.Aa(k[e >> 2]);
                                              }
                                            : function (e) {
                                                  return this.Aa(C[e >> 2]);
                                              };
                                    default:
                                        throw TypeError(`invalid integer width (${t}): ${e}`);
                                }
                            },
                            tA = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0,
                            tI = (e, t, r) => {
                                if (((e >>= 1), 16 < (t = Z(E, e, t / 2, r)) - e && tA))
                                    return tA.decode(E.subarray(e, t));
                                for (r = ""; e < t; ++e) r += String.fromCharCode(E[e]);
                                return r;
                            },
                            tO = (e, t, r) => {
                                if (2 > (r ??= 0x7fffffff)) return 0;
                                r -= 2;
                                var n = t;
                                r = r < 2 * e.length ? r / 2 : e.length;
                                for (var i = 0; i < r; ++i) (x[t >> 1] = e.charCodeAt(i)), (t += 2);
                                return (x[t >> 1] = 0), t - n;
                            },
                            tD = (e) => 2 * e.length,
                            tR = (e, t, r) => {
                                var n = "";
                                e >>= 2;
                                for (var i = 0; !(i >= t / 4); i++) {
                                    var o = C[e + i];
                                    if (!o && !r) break;
                                    n += String.fromCodePoint(o);
                                }
                                return n;
                            },
                            tL = (e, t, r) => {
                                if (4 > (r ??= 0x7fffffff)) return 0;
                                var n = t;
                                r = n + r - 4;
                                for (var i = 0; i < e.length; ++i) {
                                    var o = e.codePointAt(i);
                                    if ((65535 < o && i++, (k[t >> 2] = o), (t += 4) + 4 > r)) break;
                                }
                                return (k[t >> 2] = 0), t - n;
                            },
                            tF = (e) => {
                                for (var t = 0, r = 0; r < e.length; ++r) 65535 < e.codePointAt(r) && r++, (t += 4);
                                return t;
                            },
                            tN = 0,
                            tj = [],
                            tB = {},
                            tK = (e) => {
                                var t = tB[e];
                                return void 0 === t ? eq(e) : t;
                            },
                            t$ = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
                            tV = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            tU = {},
                            tz = (e) => {
                                if (!(e instanceof $ || "unwind" == e)) throw e;
                            },
                            tW = (t) => {
                                throw ((g = t), H || 0 < tN || (e.onExit?.(t), (D = !0)), new $(t));
                            },
                            tH = [],
                            tG = {},
                            tq = () => {
                                if (!tx) {
                                    var e,
                                        t = {
                                            USER: "web_user",
                                            LOGNAME: "web_user",
                                            PATH: "/",
                                            PWD: "/",
                                            HOME: "/home/web_user",
                                            LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
                                            _: p || "./this.program",
                                        };
                                    for (e in tG) void 0 === tG[e] ? delete t[e] : (t[e] = tG[e]);
                                    var r = [];
                                    for (e in t) r.push(`${e}=${t[e]}`);
                                    tx = r;
                                }
                                return tx;
                            };
                        if (
                            ((ed = Array(4096)),
                            eI(es, "/"),
                            eD("/tmp"),
                            eD("/home"),
                            eD("/home/web_user"),
                            eD("/dev"),
                            eA(259, { read: () => 0, write: (e, t, r, n) => n, Ta: () => 0 }),
                            eR("/dev/null", 259),
                            eo(1280, {
                                ec() {
                                    e: {
                                        if (!et.length) {
                                            var e = null;
                                            if (
                                                (globalThis.window?.prompt &&
                                                    null !== (e = window.prompt("Input: ")) &&
                                                    (e += "\n"),
                                                !e)
                                            ) {
                                                var t = null;
                                                break e;
                                            }
                                            (t = Array(er(e) + 1)),
                                                (e = en(e, t, 0, t.length)),
                                                (t.length = e),
                                                (et = t);
                                        }
                                        t = et.shift();
                                    }
                                    return t;
                                },
                                Pb(e, t) {
                                    null === t || 10 === t
                                        ? (I(ee(e.output)), (e.output = []))
                                        : 0 != t && e.output.push(t);
                                },
                                sb(e) {
                                    0 < e.output?.length && (I(ee(e.output)), (e.output = []));
                                },
                                Wc: () => ({
                                    xd: 25856,
                                    zd: 5,
                                    wd: 191,
                                    yd: 35387,
                                    vd: [
                                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    ],
                                }),
                                Xc: () => 0,
                                Yc: () => [24, 80],
                            }),
                            eo(1536, {
                                Pb(e, t) {
                                    null === t || 10 === t
                                        ? (O(ee(e.output)), (e.output = []))
                                        : 0 != t && e.output.push(t);
                                },
                                sb(e) {
                                    0 < e.output?.length && (O(ee(e.output)), (e.output = []));
                                },
                            }),
                            eR("/dev/tty", 1280),
                            eR("/dev/tty1", 1536),
                            (tY = new Uint8Array(1024)),
                            (tX = 0),
                            ej("random", (tJ = () => (0 === tX && (J(tY), (tX = tY.byteLength)), tY[--tX]))),
                            ej("urandom", tJ),
                            eD("/dev/shm"),
                            eD("/dev/shm/tmp"),
                            eD("/proc"),
                            (tQ = eD("/proc/self")),
                            eD("/proc/self/fd"),
                            eI(
                                {
                                    $a() {
                                        var e = eS(tQ, "fd", 16895, 73);
                                        return (
                                            (e.xa = { Ta: es.xa.Ta }),
                                            (e.za = {
                                                nb(e, t) {
                                                    var r = eC((e = +t));
                                                    return ((e = {
                                                        parent: null,
                                                        $a: { kc: "fake" },
                                                        za: { pb: () => r.path },
                                                        id: e + 1,
                                                    }).parent = e);
                                                },
                                                Rb: () =>
                                                    Array.from(ec.entries())
                                                        .filter(([, e]) => e)
                                                        .map(([e]) => e.toString()),
                                            }),
                                            e
                                        );
                                    },
                                },
                                "/proc/self/fd",
                            ),
                            Object.assign((t = ti.prototype), {
                                isAliasOf: function (e) {
                                    if (!(this instanceof ti && e instanceof ti)) return !1;
                                    var t = this.va.Da.wa,
                                        r = this.va.Ba;
                                    e.va = e.va;
                                    var n = e.va.Da.wa;
                                    for (e = e.va.Ba; t.Ia; ) (r = t.qb(r)), (t = t.Ia);
                                    for (; n.Ia; ) (e = n.qb(e)), (n = n.Ia);
                                    return t === n && r === e;
                                },
                                clone: function () {
                                    if ((this.va.Ba || tr(this), this.va.kb)) return (this.va.count.value += 1), this;
                                    var e = e2,
                                        t = Object,
                                        r = t.create,
                                        n = Object.getPrototypeOf(this),
                                        i = this.va;
                                    return (
                                        (e = e(
                                            r.call(t, n, {
                                                va: {
                                                    value: {
                                                        count: i.count,
                                                        mb: i.mb,
                                                        kb: i.kb,
                                                        Ba: i.Ba,
                                                        Da: i.Da,
                                                        Ja: i.Ja,
                                                        Pa: i.Pa,
                                                    },
                                                },
                                            }),
                                        )),
                                        (e.va.count.value += 1),
                                        (e.va.mb = !1),
                                        e
                                    );
                                },
                                delete() {
                                    if ((this.va.Ba || tr(this), this.va.mb && !this.va.kb))
                                        throw new ez("Object already scheduled for deletion");
                                    e0(this);
                                    var e = this.va;
                                    --e.count.value,
                                        0 === e.count.value && (e.Ja ? e.Pa.Va(e.Ja) : e.Da.wa.Va(e.Ba)),
                                        this.va.kb || ((this.va.Ja = void 0), (this.va.Ba = void 0));
                                },
                                isDeleted: function () {
                                    return !this.va.Ba;
                                },
                                deleteLater: function () {
                                    if ((this.va.Ba || tr(this), this.va.mb && !this.va.kb))
                                        throw new ez("Object already scheduled for deletion");
                                    return tn.push(this), (this.va.mb = !0), this;
                                },
                            }),
                            (r = Symbol.dispose) && (t[r] = t.delete),
                            Object.assign(tv.prototype, {
                                Qc(e) {
                                    return this.pc && (e = this.pc(e)), e;
                                },
                                ac(e) {
                                    this.Va?.(e);
                                },
                                Ma: e4,
                                Aa: function (e) {
                                    function t() {
                                        return this.vb
                                            ? tm(this.wa.Sa, { Da: this.gd, Ba: r, Pa: this, Ja: e })
                                            : tm(this.wa.Sa, { Da: this, Ba: e });
                                    }
                                    var r = this.Qc(e);
                                    if (!r) return this.ac(e), null;
                                    var n = eY[eX(this.wa, r)];
                                    if (void 0 !== n)
                                        return 0 === n.va.count.value
                                            ? ((n.va.Ba = r), (n.va.Ja = e), n.clone())
                                            : ((n = n.clone()), this.ac(e), n);
                                    if (!(n = to[(n = this.wa.Pc(r))])) return t.call(this);
                                    n = this.ub ? n.Gc : n.pointerType;
                                    var i = th(r, this.wa, n.wa);
                                    return null === i
                                        ? t.call(this)
                                        : this.vb
                                          ? tm(n.wa.Sa, { Da: n, Ba: i, Pa: this, Ja: e })
                                          : tm(n.wa.Sa, { Da: n, Ba: i });
                                },
                            }),
                            e.noExitRuntime && (H = e.noExitRuntime),
                            e.print && (I = e.print),
                            e.printErr && (O = e.printErr),
                            e.wasmBinary && (y = e.wasmBinary),
                            e.thisProgram && (p = e.thisProgram),
                            e.preInit)
                        )
                            for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length; )
                                e.preInit.shift()();
                        var tY,
                            tX,
                            tJ,
                            tQ,
                            tZ,
                            t0,
                            t1,
                            t2,
                            t3,
                            t5,
                            t4,
                            t6,
                            t8,
                            t7,
                            t9,
                            re,
                            rt = {
                                236669: (e, t, r, n, i) => {
                                    if (
                                        "u" < typeof window ||
                                        void 0 === (window.AudioContext || window.webkitAudioContext)
                                    )
                                        return 0;
                                    if (void 0 === window.miniaudio) {
                                        (window.miniaudio = { referenceCount: 0 }),
                                            (window.miniaudio.device_type = {}),
                                            (window.miniaudio.device_type.playback = e),
                                            (window.miniaudio.device_type.capture = t),
                                            (window.miniaudio.device_type.duplex = r),
                                            (window.miniaudio.device_state = {}),
                                            (window.miniaudio.device_state.stopped = n),
                                            (window.miniaudio.device_state.started = i);
                                        let o = window.miniaudio;
                                        (o.devices = []),
                                            (o.track_device = function (e) {
                                                for (var t = 0; t < o.devices.length; ++t)
                                                    if (null == o.devices[t]) return (o.devices[t] = e), t;
                                                return o.devices.push(e), o.devices.length - 1;
                                            }),
                                            (o.untrack_device_by_index = function (e) {
                                                for (o.devices[e] = null; 0 < o.devices.length; )
                                                    if (null == o.devices[o.devices.length - 1]) o.devices.pop();
                                                    else break;
                                            }),
                                            (o.untrack_device = function (e) {
                                                for (var t = 0; t < o.devices.length; ++t)
                                                    if (o.devices[t] == e) return o.untrack_device_by_index(t);
                                            }),
                                            (o.get_device_by_index = function (e) {
                                                return o.devices[e];
                                            }),
                                            (o.unlock_event_types = ["touchend", "click"]),
                                            (o.unlock = function () {
                                                for (var e = 0; e < o.devices.length; ++e) {
                                                    var t = o.devices[e];
                                                    null != t &&
                                                        null != t.Qa &&
                                                        t.state === o.device_state.started &&
                                                        t.Qa.resume().then(
                                                            () => {
                                                                t2(t.nc);
                                                            },
                                                            (e) => {
                                                                console.error("Failed to resume audiocontext", e);
                                                            },
                                                        );
                                                }
                                                o.unlock_event_types.map(function (e) {
                                                    document.removeEventListener(e, o.unlock, !0);
                                                });
                                            }),
                                            o.unlock_event_types.map(function (e) {
                                                document.addEventListener(e, o.unlock, !0);
                                            });
                                    }
                                    return (window.miniaudio.referenceCount += 1), 1;
                                },
                                238847: () => {
                                    void 0 !== window.miniaudio &&
                                        (window.miniaudio.unlock_event_types.map(function (e) {
                                            document.removeEventListener(e, window.miniaudio.unlock, !0);
                                        }),
                                        --window.miniaudio.referenceCount,
                                        0 === window.miniaudio.referenceCount && delete window.miniaudio);
                                },
                                239151: () =>
                                    void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
                                239255: () => {
                                    try {
                                        var e = new (window.AudioContext || window.webkitAudioContext)(),
                                            t = e.sampleRate;
                                        return e.close(), t;
                                    } catch (e) {
                                        return 0;
                                    }
                                },
                                239426: (e, t, r, n, i, o) => {
                                    if (void 0 === window.miniaudio) return -1;
                                    var a = {},
                                        s = {};
                                    return (
                                        e == window.miniaudio.device_type.playback && 0 != r && (s.sampleRate = r),
                                        (a.Qa = new (window.AudioContext || window.webkitAudioContext)(s)),
                                        a.Qa.suspend(),
                                        (a.state = window.miniaudio.device_state.stopped),
                                        (r = 0),
                                        e != window.miniaudio.device_type.playback && (r = t),
                                        (a.fb = a.Qa.createScriptProcessor(n, r, t)),
                                        (a.fb.onaudioprocess = function (r) {
                                            if (
                                                ((null == a.tb || 0 == a.tb.length) &&
                                                    (a.tb = new Float32Array(T.buffer, i, n * t)),
                                                e == window.miniaudio.device_type.capture ||
                                                    e == window.miniaudio.device_type.duplex)
                                            ) {
                                                for (var s = 0; s < t; s += 1)
                                                    for (
                                                        var l = r.inputBuffer.getChannelData(s), u = a.tb, c = 0;
                                                        c < n;
                                                        c += 1
                                                    )
                                                        u[c * t + s] = l[c];
                                                t3(o, n, i);
                                            }
                                            if (
                                                e == window.miniaudio.device_type.playback ||
                                                e == window.miniaudio.device_type.duplex
                                            )
                                                for (t5(o, n, i), s = 0; s < r.outputBuffer.numberOfChannels; ++s)
                                                    for (
                                                        l = r.outputBuffer.getChannelData(s), u = a.tb, c = 0;
                                                        c < n;
                                                        c += 1
                                                    )
                                                        l[c] = u[c * t + s];
                                            else
                                                for (s = 0; s < r.outputBuffer.numberOfChannels; ++s)
                                                    r.outputBuffer.getChannelData(s).fill(0);
                                        }),
                                        (e != window.miniaudio.device_type.capture &&
                                            e != window.miniaudio.device_type.duplex) ||
                                            navigator.mediaDevices
                                                .getUserMedia({ audio: !0, video: !1 })
                                                .then(function (e) {
                                                    (a.Cb = a.Qa.createMediaStreamSource(e)),
                                                        a.Cb.connect(a.fb),
                                                        a.fb.connect(a.Qa.destination);
                                                })
                                                .catch(function (e) {
                                                    console.log("Failed to get user media: " + e);
                                                }),
                                        e == window.miniaudio.device_type.playback && a.fb.connect(a.Qa.destination),
                                        (a.nc = o),
                                        window.miniaudio.track_device(a)
                                    );
                                },
                                242303: (e) => window.miniaudio.get_device_by_index(e).Qa.sampleRate,
                                242376: (e) => {
                                    void 0 !== (e = window.miniaudio.get_device_by_index(e)).fb &&
                                        ((e.fb.onaudioprocess = function () {}), e.fb.disconnect(), (e.fb = void 0)),
                                        void 0 !== e.Cb && (e.Cb.disconnect(), (e.Cb = void 0)),
                                        e.Qa.close(),
                                        (e.Qa = void 0),
                                        (e.nc = void 0);
                                },
                                242776: (e) => {
                                    window.miniaudio.untrack_device_by_index(e);
                                },
                                242826: (e) => {
                                    (e = window.miniaudio.get_device_by_index(e)).Qa.resume(),
                                        (e.state = window.miniaudio.device_state.started);
                                },
                                242965: (e) => {
                                    (e = window.miniaudio.get_device_by_index(e)).Qa.suspend(),
                                        (e.state = window.miniaudio.device_state.stopped);
                                },
                            },
                            rr = {
                                s: function (e, t, r) {
                                    eK = r;
                                    try {
                                        var n = eC(e);
                                        switch (t) {
                                            case 0:
                                                var i = G();
                                                if (0 > i) break;
                                                for (; ec[i]; ) i++;
                                                return (function (e, t = -1) {
                                                    return (e = eT(e, t)), e.xa?.Cd?.(e), e;
                                                })(n, i).cb;
                                            case 1:
                                            case 2:
                                            case 13:
                                            case 14:
                                                return 0;
                                            case 3:
                                                return n.flags;
                                            case 4:
                                                return (i = G()), (n.flags |= i), 0;
                                            case 12:
                                                return (x[((i = G()) + 0) >> 1] = 2), 0;
                                        }
                                        return -28;
                                    } catch (e) {
                                        if (void 0 === eB || "ErrnoError" !== e.name) throw e;
                                        return -e.bb;
                                    }
                                },
                                L: function (e, t, r) {
                                    eK = r;
                                    try {
                                        var n = eC(e);
                                        switch (t) {
                                            case 21509:
                                            case 21510:
                                            case 21511:
                                            case 21512:
                                            case 21524:
                                            case 21515:
                                                return n.Ca ? 0 : -59;
                                            case 21505:
                                                if (!n.Ca) return -59;
                                                if (n.Ca.ab.Wc) {
                                                    e = [
                                                        3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0,
                                                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                                    ];
                                                    var i = G();
                                                    (k[i >> 2] = 25856),
                                                        (k[(i + 4) >> 2] = 5),
                                                        (k[(i + 8) >> 2] = 191),
                                                        (k[(i + 12) >> 2] = 35387);
                                                    for (var o = 0; 32 > o; o++) _[i + o + 17] = e[o] || 0;
                                                }
                                                return 0;
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                if (!n.Ca) return -59;
                                                if (n.Ca.ab.Xc)
                                                    for (i = G(), e = [], o = 0; 32 > o; o++) e.push(_[i + o + 17]);
                                                return 0;
                                            case 21519:
                                                if (!n.Ca) return -59;
                                                return (k[(i = G()) >> 2] = 0);
                                            case 21520:
                                                return n.Ca ? -28 : -59;
                                            case 21537:
                                            case 21531:
                                                if (((i = G()), !n.xa.Vc)) throw new ev(59);
                                                return n.xa.Vc(n, t, i);
                                            case 21523:
                                                if (!n.Ca) return -59;
                                                return (
                                                    n.Ca.ab.Yc &&
                                                        ((o = [24, 80]),
                                                        (x[(i = G()) >> 1] = o[0]),
                                                        (x[(i + 2) >> 1] = o[1])),
                                                    0
                                                );
                                            default:
                                                return -28;
                                        }
                                    } catch (e) {
                                        if (void 0 === eB || "ErrnoError" !== e.name) throw e;
                                        return -e.bb;
                                    }
                                },
                                M: function (e, t, r, n) {
                                    eK = n;
                                    try {
                                        var i = (t = t ? ee(S, t) : "");
                                        if ("/" === i.charAt(0)) t = i;
                                        else {
                                            var o = -100 === e ? "/" : eC(e).path;
                                            if (0 == i.length) throw new ev(44);
                                            t = o + "/" + i;
                                        }
                                        var a = n ? G() : 0;
                                        return eF(t, r, a).cb;
                                    } catch (e) {
                                        if (void 0 === eB || "ErrnoError" !== e.name) throw e;
                                        return -e.bb;
                                    }
                                },
                                P: () => N(""),
                                o: (e, t, r) => {
                                    (e = eq(e)), (t = eZ(t, "wrapper")), (r = eW(r));
                                    var n = t.wa,
                                        i = n.Sa,
                                        o = n.Ia.Sa,
                                        a = n.Ia.constructor;
                                    return (
                                        (e = e$(e, function (...e) {
                                            for (var t of n.Ia.oc)
                                                if (this[t] === o[t])
                                                    throw new eG(
                                                        `Pure virtual function ${t} must be implemented in JavaScript`,
                                                    );
                                            Object.defineProperty(this, "__parent", { value: i }),
                                                this.__construct(...e);
                                        })),
                                        (i.__construct = function (...e) {
                                            if (this === i) throw new ez("Pass correct 'this' to __construct");
                                            (e = a.implement(this, ...e)), e0(e);
                                            var t = e.va;
                                            if (
                                                (e.notifyOnDestruction(),
                                                (t.kb = !0),
                                                Object.defineProperties(this, { va: { value: t } }),
                                                e2(this),
                                                (e = eX(n, (e = t.Ba))),
                                                eY.hasOwnProperty(e))
                                            )
                                                throw new ez(`Tried to register registered instance: ${e}`);
                                            eY[e] = this;
                                        }),
                                        (i.__destruct = function () {
                                            if (this === i) throw new ez("Pass correct 'this' to __destruct");
                                            e0(this);
                                            var e = this.va.Ba;
                                            if (((e = eX(n, e)), eY.hasOwnProperty(e))) delete eY[e];
                                            else throw new ez(`Tried to unregister unregistered instance: ${e}`);
                                        }),
                                        (e.prototype = Object.create(i)),
                                        Object.assign(e.prototype, r),
                                        eH(e)
                                    );
                                },
                                _: (e) => {
                                    var t = e3[e];
                                    delete e3[e];
                                    var r = t.Qb,
                                        n = t.Va,
                                        i = t.dc;
                                    e9([e], i.map((e) => e.Tc).concat(i.map((e) => e.kd)), (e) => {
                                        var o,
                                            a,
                                            s = {};
                                        for ([o, a] of i.entries()) {
                                            let t = e[o],
                                                r = a.Rc,
                                                n = a.Sc,
                                                l = e[o + i.length],
                                                u = a.jd,
                                                c = a.ld;
                                            s[a.Nc] = {
                                                read: (e) => t.Aa(r(n, e)),
                                                write: (e, t) => {
                                                    var r = [];
                                                    u(c, e, l.Ea(r, t)), e5(r);
                                                },
                                                optional: t.optional,
                                            };
                                        }
                                        return [
                                            {
                                                name: t.name,
                                                Aa: (e) => {
                                                    var t,
                                                        r = {};
                                                    for (t in s) r[t] = s[t].read(e);
                                                    return n(e), r;
                                                },
                                                Ea: (e, t) => {
                                                    for (var i in s)
                                                        if (!(i in t || s[i].optional))
                                                            throw TypeError(`Missing field: "${i}"`);
                                                    var o = r();
                                                    for (i in s) s[i].write(o, t[i]);
                                                    return null !== e && e.push(n, o), o;
                                                },
                                                Ma: e4,
                                                La: n,
                                            },
                                        ];
                                    });
                                },
                                u: (e, t, r, n, i) => {
                                    t = eq(t);
                                    let o = (e) => e;
                                    if ((n = 0n === n)) {
                                        let e = 8 * r;
                                        i = (o = (t) => BigInt.asUintN(e, t))(i);
                                    }
                                    te(e, {
                                        name: t,
                                        Aa: o,
                                        Ea: (e, t) => ("number" == typeof t && (t = BigInt(t)), t),
                                        Ma: tt(t, r, !n),
                                        La: null,
                                    });
                                },
                                V: (e, t, r, n) => {
                                    te(e, {
                                        name: (t = eq(t)),
                                        Aa: function (e) {
                                            return !!e;
                                        },
                                        Ea: function (e, t) {
                                            return t ? r : n;
                                        },
                                        Ma: function (e) {
                                            return this.Aa(S[e]);
                                        },
                                        La: null,
                                    });
                                },
                                c: (e, t, r, n, i, o, a, s, l, u, c, f, d) => {
                                    (c = eq(c)), (o = tg(i, o)), (s &&= tg(a, s)), (u &&= tg(l, u)), (d = tg(f, d));
                                    var p,
                                        h,
                                        m =
                                            48 <= (h = (p = (p = c).replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0)) &&
                                            57 >= h
                                                ? `_${p}`
                                                : p;
                                    ts(m, function () {
                                        tw(`Cannot construct ${c} due to unbound types`, [n]);
                                    }),
                                        e9([e, t, r], n ? [n] : [], (t) => {
                                            if (((t = t[0]), n))
                                                var r,
                                                    i = t.wa,
                                                    a = i.Sa;
                                            else a = ti.prototype;
                                            var l = Object.create(a, {
                                                constructor: {
                                                    value: (t = e$(c, function (...e) {
                                                        if (Object.getPrototypeOf(this) !== l)
                                                            throw new ez(`Use 'new' to construct ${c}`);
                                                        if (void 0 === f.hb)
                                                            throw new ez(`${c} has no accessible constructor`);
                                                        var t = f.hb[e.length];
                                                        if (void 0 === t)
                                                            throw new ez(
                                                                `Tried to invoke ctor of ${c} with invalid number of parameters (${e.length}) - expected (${Object.keys(f.hb).toString()}) parameters instead!`,
                                                            );
                                                        return t.apply(this, e);
                                                    })),
                                                },
                                            });
                                            t.prototype = l;
                                            var f = new tl(c, t, l, d, i, o, s, u);
                                            return (
                                                f.Ia && ((r = f.Ia).rb ?? (r.rb = []), f.Ia.rb.push(f)),
                                                (i = new tv(c, f, !0, !1, !1)),
                                                (r = new tv(c + "*", f, !1, !1, !1)),
                                                (a = new tv(c + " const*", f, !1, !0, !1)),
                                                (to[e] = { pointerType: r, Gc: a }),
                                                ty(m, t),
                                                [i, r, a]
                                            );
                                        });
                                },
                                k: (e, t, r, n, i, o, a) => {
                                    var s = tE(r, n);
                                    (t = tk((t = eq(t)))),
                                        (o = tg(i, o)),
                                        e9([], [e], (e) => {
                                            function n() {
                                                tw(`Cannot call ${i} due to unbound types`, s);
                                            }
                                            e = e[0];
                                            var i = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]);
                                            var l = e.wa.constructor;
                                            return (
                                                void 0 === l[t]
                                                    ? ((n.Za = r - 1), (l[t] = n))
                                                    : (ta(l, t, i), (l[t].Fa[r - 1] = n)),
                                                e9([], s, (n) => {
                                                    if (
                                                        ((n = t_(i, [n[0], null].concat(n.slice(1)), null, o, a)),
                                                        void 0 === l[t].Fa
                                                            ? ((n.Za = r - 1), (l[t] = n))
                                                            : (l[t].Fa[r - 1] = n),
                                                        e.wa.rb)
                                                    )
                                                        for (let r of e.wa.rb)
                                                            r.constructor.hasOwnProperty(t) || (r.constructor[t] = n);
                                                    return [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                q: (e, t, r, n, i, o, a, s) => {
                                    (t = eq(t)),
                                        (o = tg(i, o)),
                                        e9([], [e], (e) => {
                                            e = e[0];
                                            var i = `${e.name}.${t}`,
                                                l = {
                                                    get() {
                                                        tw(`Cannot access ${i} due to unbound types`, [r]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (l.set = s
                                                    ? () => {
                                                          tw(`Cannot access ${i} due to unbound types`, [r]);
                                                      }
                                                    : () => {
                                                          throw new ez(`${i} is a read-only property`);
                                                      }),
                                                Object.defineProperty(e.wa.constructor, t, l),
                                                e9([], [r], (r) => {
                                                    r = r[0];
                                                    var i = { get: () => r.Aa(o(n)), enumerable: !0 };
                                                    return (
                                                        s &&
                                                            ((s = tg(a, s)),
                                                            (i.set = (e) => {
                                                                var t = [];
                                                                s(n, r.Ea(t, e)), e5(t);
                                                            })),
                                                        Object.defineProperty(e.wa.constructor, t, i),
                                                        []
                                                    );
                                                }),
                                                []
                                            );
                                        });
                                },
                                n: (e, t, r, n, i, o) => {
                                    var a = tE(t, r);
                                    (i = tg(n, i)),
                                        e9([], [e], (e) => {
                                            e = e[0];
                                            var r = `constructor ${e.name}`;
                                            if ((void 0 === e.wa.hb && (e.wa.hb = []), void 0 !== e.wa.hb[t - 1]))
                                                throw new ez(
                                                    `Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`,
                                                );
                                            return (
                                                (e.wa.hb[t - 1] = () => {
                                                    tw(`Cannot construct ${e.name} due to unbound types`, a);
                                                }),
                                                e9(
                                                    [],
                                                    a,
                                                    (n) => (
                                                        n.splice(1, 0, null),
                                                        (e.wa.hb[t - 1] = t_(r, n, null, i, o)),
                                                        []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                a: (e, t, r, n, i, o, a, s) => {
                                    var l = tE(r, n);
                                    (t = tk((t = eq(t)))),
                                        (o = tg(i, o)),
                                        e9([], [e], (e) => {
                                            function n() {
                                                tw(`Cannot call ${i} due to unbound types`, l);
                                            }
                                            e = e[0];
                                            var i = `${e.name}.${t}`;
                                            t.startsWith("@@") && (t = Symbol[t.substring(2)]), s && e.wa.oc.push(t);
                                            var u = e.wa.Sa,
                                                c = u[t];
                                            return (
                                                void 0 === c ||
                                                (void 0 === c.Fa && c.className !== e.name && c.Za === r - 2)
                                                    ? ((n.Za = r - 2), (n.className = e.name), (u[t] = n))
                                                    : (ta(u, t, i), (u[t].Fa[r - 2] = n)),
                                                e9(
                                                    [],
                                                    l,
                                                    (n) => (
                                                        (n = t_(i, n, e, o, a)),
                                                        void 0 === u[t].Fa
                                                            ? ((n.Za = r - 2), (u[t] = n))
                                                            : (u[t].Fa[r - 2] = n),
                                                        []
                                                    ),
                                                ),
                                                []
                                            );
                                        });
                                },
                                b: (e, t, r, n, i, o, a, s, l, u) => {
                                    (t = eq(t)),
                                        (i = tg(n, i)),
                                        e9([], [e], (e) => {
                                            e = e[0];
                                            var n = `${e.name}.${t}`,
                                                c = {
                                                    get() {
                                                        tw(`Cannot access ${n} due to unbound types`, [r, a]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0,
                                                };
                                            return (
                                                (c.set = l
                                                    ? () => tw(`Cannot access ${n} due to unbound types`, [r, a])
                                                    : () => {
                                                          throw new ez(n + " is a read-only property");
                                                      }),
                                                Object.defineProperty(e.wa.Sa, t, c),
                                                e9([], l ? [r, a] : [r], (r) => {
                                                    var a = r[0],
                                                        c = {
                                                            get() {
                                                                var t = tC(this, e, n + " getter");
                                                                return a.Aa(i(o, t));
                                                            },
                                                            enumerable: !0,
                                                        };
                                                    if (l) {
                                                        l = tg(s, l);
                                                        var f = r[1];
                                                        c.set = function (t) {
                                                            var r = tC(this, e, n + " setter"),
                                                                i = [];
                                                            l(u, r, f.Ea(i, t)), e5(i);
                                                        };
                                                    }
                                                    return Object.defineProperty(e.wa.Sa, t, c), [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                T: (e) => te(e, tM),
                                m: (t, r, n, i, o) => {
                                    switch (((r = eq(r)), (o = 0 === o ? "object" : 1 === o ? "number" : "string"))) {
                                        case "object":
                                            function a() {}
                                            (a.values = {}),
                                                te(t, {
                                                    name: r,
                                                    constructor: a,
                                                    valueType: o,
                                                    Aa: function (e) {
                                                        return this.constructor.values[e];
                                                    },
                                                    Ea: (e, t) => t.value,
                                                    Ma: tP(r, n, i),
                                                    La: null,
                                                }),
                                                ts(r, a);
                                            break;
                                        case "number":
                                            var s = {};
                                            te(t, {
                                                name: r,
                                                Ob: s,
                                                valueType: o,
                                                Aa: (e) => e,
                                                Ea: (e, t) => t,
                                                Ma: tP(r, n, i),
                                                La: null,
                                            }),
                                                ts(r, s),
                                                delete e[r].Za;
                                            break;
                                        case "string":
                                            te(t, {
                                                name: r,
                                                yc: {},
                                                rc: {},
                                                Ob: (s = {}),
                                                valueType: o,
                                                Aa: function (e) {
                                                    return this.rc[e];
                                                },
                                                Ea: function (e, t) {
                                                    return this.yc[t];
                                                },
                                                Ma: tP(r, n, i),
                                                La: null,
                                            }),
                                                ts(r, s),
                                                delete e[r].Za;
                                    }
                                },
                                d: (e, t, r) => {
                                    var n = eZ(e, "enum");
                                    switch (((t = eq(t)), n.valueType)) {
                                        case "object":
                                            (e = n.constructor),
                                                (n = Object.create(n.constructor.prototype, {
                                                    value: { value: r },
                                                    constructor: { value: e$(`${n.name}_${t}`, function () {}) },
                                                })),
                                                (e.values[r] = n),
                                                (e[t] = n);
                                            break;
                                        case "number":
                                            n.Ob[t] = r;
                                            break;
                                        case "string":
                                            (n.yc[t] = r), (n.rc[r] = t), (n.Ob[t] = t);
                                    }
                                },
                                t: (e, t, r) => {
                                    te(e, {
                                        name: (t = eq(t)),
                                        Aa: (e) => e,
                                        Ea: (e, t) => t,
                                        Ma: ((e, t) => {
                                            switch (t) {
                                                case 4:
                                                    return function (e) {
                                                        return this.Aa(T[e >> 2]);
                                                    };
                                                case 8:
                                                    return function (e) {
                                                        return this.Aa(M[e >> 3]);
                                                    };
                                                default:
                                                    throw TypeError(`invalid float width (${t}): ${e}`);
                                            }
                                        })(t, r),
                                        La: null,
                                    });
                                },
                                i: (e, t, r, n, i, o) => {
                                    var a = tE(t, r);
                                    (e = tk((e = eq(e)))),
                                        (i = tg(n, i)),
                                        ts(
                                            e,
                                            function () {
                                                tw(`Cannot call ${e} due to unbound types`, a);
                                            },
                                            t - 1,
                                        ),
                                        e9(
                                            [],
                                            a,
                                            (r) => (
                                                ty(e, t_(e, [r[0], null].concat(r.slice(1)), null, i, o), t - 1), []
                                            ),
                                        );
                                },
                                l: (e, t, r, n, i) => {
                                    t = eq(t);
                                    let o = (e) => e;
                                    if (0 === n) {
                                        var a = 32 - 8 * r;
                                        i = (o = (e) => (e << a) >>> a)(i);
                                    }
                                    te(e, { name: t, Aa: o, Ea: (e, t) => t, Ma: tt(t, r, 0 !== n), La: null });
                                },
                                h: (e, t, r) => {
                                    function n(e) {
                                        return new i(_.buffer, C[(e + 4) >> 2], C[e >> 2]);
                                    }
                                    var i = [
                                        Int8Array,
                                        Uint8Array,
                                        Int16Array,
                                        Uint16Array,
                                        Int32Array,
                                        Uint32Array,
                                        Float32Array,
                                        Float64Array,
                                        BigInt64Array,
                                        BigUint64Array,
                                    ][t];
                                    te(e, { name: (r = eq(r)), Aa: n, Ma: n }, { Uc: !0 });
                                },
                                U: (e, t) => {
                                    te(e, {
                                        name: (t = eq(t)),
                                        Aa(e) {
                                            var t = (t = e + 4) ? ee(S, t, C[e >> 2], !0) : "";
                                            return tZ(e), t;
                                        },
                                        Ea(e, t) {
                                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                            var r = "string" == typeof t;
                                            if (!(r || (ArrayBuffer.isView(t) && 1 == t.BYTES_PER_ELEMENT)))
                                                throw new ez("Cannot pass non-string to std::string");
                                            var n = r ? er(t) : t.length,
                                                i = t0(4 + n + 1),
                                                o = i + 4;
                                            return (
                                                (C[i >> 2] = n),
                                                r ? en(t, S, o, n + 1) : S.set(t, o),
                                                null !== e && e.push(tZ, i),
                                                i
                                            );
                                        },
                                        Ma: e4,
                                        La(e) {
                                            tZ(e);
                                        },
                                    });
                                },
                                p: (e, t, r) => {
                                    if (((r = eq(r)), 2 === t))
                                        var n = tI,
                                            i = tO,
                                            o = tD;
                                    else (n = tR), (i = tL), (o = tF);
                                    te(e, {
                                        name: r,
                                        Aa: (e) => {
                                            var r = n(e + 4, C[e >> 2] * t, !0);
                                            return tZ(e), r;
                                        },
                                        Ea: (e, n) => {
                                            if ("string" != typeof n)
                                                throw new ez(`Cannot pass non-string to C++ string type ${r}`);
                                            var a = o(n),
                                                s = t0(4 + a + t);
                                            return (
                                                (C[s >> 2] = a / t), i(n, s + 4, a + t), null !== e && e.push(tZ, s), s
                                            );
                                        },
                                        Ma: e4,
                                        La(e) {
                                            tZ(e);
                                        },
                                    });
                                },
                                aa: (e, t, r, n, i, o) => {
                                    e3[e] = { name: eq(t), Qb: tg(r, n), Va: tg(i, o), dc: [] };
                                },
                                $: (e, t, r, n, i, o, a, s, l, u) => {
                                    e3[e].dc.push({
                                        Nc: eq(t),
                                        Tc: r,
                                        Rc: tg(n, i),
                                        Sc: o,
                                        kd: a,
                                        jd: tg(s, l),
                                        ld: u,
                                    });
                                },
                                W: (e, t) => {
                                    te(e, { $c: !0, name: (t = eq(t)), Aa: () => {}, Ea: () => {} });
                                },
                                A: () => {
                                    (H = !1), (tN = 0);
                                },
                                y: () => {
                                    throw 1 / 0;
                                },
                                f: (e, t, r) => {
                                    var n,
                                        i,
                                        [o, ...a] = ((e, t) => {
                                            for (var r = Array(e), n = 0; n < e; ++n)
                                                r[n] = eZ(C[(t + 4 * n) >> 2], `parameter ${n}`);
                                            return r;
                                        })(e, t),
                                        s = o.Ea.bind(o),
                                        l = a.map((e) => e.Ma.bind(e)),
                                        u = Array(--e);
                                    return (
                                        (n = e$(
                                            (t = `methodCaller<(${a.map((e) => e.name)}) => ${o.name}>`),
                                            (t, n, i, o) => {
                                                for (var a = 0, c = 0; c < e; ++c) (u[c] = l[c](o + a)), (a += 8);
                                                switch (r) {
                                                    case 0:
                                                        var f = eW(t).apply(null, u);
                                                        break;
                                                    case 2:
                                                        f = Reflect.construct(eW(t), u);
                                                        break;
                                                    case 3:
                                                        f = u[0];
                                                        break;
                                                    case 1:
                                                        f = eW(t)[tK(n)](...u);
                                                }
                                                return (f = s((t = []), f)), t.length && (C[i >> 2] = eH(t)), f;
                                            },
                                        )),
                                        (i = tj.length),
                                        tj.push(n),
                                        i
                                    );
                                },
                                ca: tT,
                                X: (t) => eH(e[(t = tK(t))]),
                                Y: (e, t) => eH((e = eW(e))[(t = eW(t))]),
                                v: (e) => {
                                    9 < e && (eU[e + 1] += 1);
                                },
                                e: (e, t, r, n, i) => tj[e](t, r, n, i),
                                Z: () => eH([]),
                                ba: (e) => eH(tK(e)),
                                da: () => eH({}),
                                w: (e) => {
                                    e5(eW(e)), tT(e);
                                },
                                g: (e, t, r) => {
                                    (e = eW(e)), (t = eW(t)), (r = eW(r)), (e[t] = r);
                                },
                                F: function (e, t) {
                                    (e = new Date(
                                        1e3 * (e = -0x20000000000000 > e || 0x20000000000000 < e ? NaN : Number(e)),
                                    )),
                                        (k[t >> 2] = e.getUTCSeconds()),
                                        (k[(t + 4) >> 2] = e.getUTCMinutes()),
                                        (k[(t + 8) >> 2] = e.getUTCHours()),
                                        (k[(t + 12) >> 2] = e.getUTCDate()),
                                        (k[(t + 16) >> 2] = e.getUTCMonth()),
                                        (k[(t + 20) >> 2] = e.getUTCFullYear() - 1900),
                                        (k[(t + 24) >> 2] = e.getUTCDay()),
                                        (k[(t + 28) >> 2] =
                                            ((e.getTime() - Date.UTC(e.getUTCFullYear(), 0, 1, 0, 0, 0, 0)) / 864e5) |
                                            0);
                                },
                                G: function (e, t) {
                                    (e = new Date(
                                        1e3 * (e = -0x20000000000000 > e || 0x20000000000000 < e ? NaN : Number(e)),
                                    )),
                                        (k[t >> 2] = e.getSeconds()),
                                        (k[(t + 4) >> 2] = e.getMinutes()),
                                        (k[(t + 8) >> 2] = e.getHours()),
                                        (k[(t + 12) >> 2] = e.getDate()),
                                        (k[(t + 16) >> 2] = e.getMonth()),
                                        (k[(t + 20) >> 2] = e.getFullYear() - 1900),
                                        (k[(t + 24) >> 2] = e.getDay());
                                    var r = e.getFullYear();
                                    (k[(t + 28) >> 2] =
                                        ((0 != r % 4 || (0 == r % 100 && 0 != r % 400) ? tV : t$)[e.getMonth()] +
                                            e.getDate() -
                                            1) |
                                        0),
                                        (k[(t + 36) >> 2] = -(60 * e.getTimezoneOffset())),
                                        (r = new Date(e.getFullYear(), 6, 1).getTimezoneOffset());
                                    var n = new Date(e.getFullYear(), 0, 1).getTimezoneOffset();
                                    k[(t + 32) >> 2] = 0 | (r != n && e.getTimezoneOffset() == Math.min(n, r));
                                },
                                B: (e, t) => {
                                    if ((tU[e] && (clearTimeout(tU[e].id), delete tU[e]), !t)) return 0;
                                    var r = setTimeout(() => {
                                        delete tU[e];
                                        var t = () => t4(e, performance.now());
                                        if (!D)
                                            try {
                                                if ((t(), !(H || 0 < tN)))
                                                    try {
                                                        (g = t = g), tW(t);
                                                    } catch (e) {
                                                        tz(e);
                                                    }
                                            } catch (e) {
                                                tz(e);
                                            }
                                    }, t);
                                    return (tU[e] = { id: r, Kd: t }), 0;
                                },
                                H: (e, t, r, n) => {
                                    var i = new Date().getFullYear(),
                                        o = new Date(i, 0, 1).getTimezoneOffset();
                                    (i = new Date(i, 6, 1).getTimezoneOffset()),
                                        (C[e >> 2] = 60 * Math.max(o, i)),
                                        (k[t >> 2] = Number(o != i)),
                                        (e = (t = (e) => {
                                            var t = Math.abs(e);
                                            return `UTC${0 <= e ? "-" : "+"}${String(Math.floor(t / 60)).padStart(2, "0")}${String(t % 60).padStart(2, "0")}`;
                                        })(o)),
                                        (t = t(i)),
                                        i < o ? (en(e, S, r, 17), en(t, S, n, 17)) : (en(e, S, n, 17), en(t, S, r, 17));
                                },
                                O: function (e, t, r) {
                                    return 0 <= e && 3 >= e
                                        ? ((P[r >> 3] = BigInt(
                                              Math.round(1e6 * (0 === e ? Date.now() : performance.now())),
                                          )),
                                          0)
                                        : 28;
                                },
                                j: (e, t, r) => {
                                    tH.length = 0;
                                    for (var n; (n = S[t++]); ) {
                                        var i = 105 != n;
                                        (i &= 112 != n),
                                            (r += i && r % 8 ? 4 : 0),
                                            tH.push(
                                                112 == n
                                                    ? C[r >> 2]
                                                    : 106 == n
                                                      ? P[r >> 3]
                                                      : 105 == n
                                                        ? k[r >> 2]
                                                        : M[r >> 3],
                                            ),
                                            (r += i ? 8 : 4);
                                    }
                                    return rt[e](...tH);
                                },
                                N: () => Date.now(),
                                Q: () => performance.now(),
                                E: (e) => {
                                    var t = S.length;
                                    if (0x80000000 < (e >>>= 0)) return !1;
                                    for (var r = 1; 4 >= r; r *= 2) {
                                        var n = t * (1 + 0.2 / r);
                                        n = Math.min(n, e + 0x6000000);
                                        e: {
                                            n =
                                                ((Math.min(0x80000000, 65536 * Math.ceil(Math.max(e, n) / 65536)) -
                                                    t9.buffer.byteLength +
                                                    65535) /
                                                    65536) |
                                                0;
                                            try {
                                                t9.grow(n), F();
                                                var i = 1;
                                                break e;
                                            } catch (e) {}
                                            i = void 0;
                                        }
                                        if (i) return !0;
                                    }
                                    return !1;
                                },
                                C: (e, t) => {
                                    var r,
                                        n = 0,
                                        i = 0;
                                    for (r of tq()) {
                                        var o = t + n;
                                        (C[(e + i) >> 2] = o), (n += en(r, S, o, 1 / 0) + 1), (i += 4);
                                    }
                                    return 0;
                                },
                                D: (e, t) => {
                                    var r = tq();
                                    for (var n of ((C[e >> 2] = r.length), (e = 0), r)) e += er(n) + 1;
                                    return (C[t >> 2] = e), 0;
                                },
                                r: function (e) {
                                    try {
                                        var t = eC(e);
                                        if (null === t.cb) throw new ev(8);
                                        t.Mb && (t.Mb = null);
                                        try {
                                            t.xa.close && t.xa.close(t);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            ec[t.cb] = null;
                                        }
                                        return (t.cb = null), 0;
                                    } catch (e) {
                                        if (void 0 === eB || "ErrnoError" !== e.name) throw e;
                                        return e.bb;
                                    }
                                },
                                K: function (e, t, r, n) {
                                    try {
                                        e: {
                                            var i = eC(e);
                                            e = t;
                                            for (var o, a = (t = 0); a < r; a++) {
                                                var s = C[e >> 2],
                                                    l = C[(e + 4) >> 2];
                                                e += 8;
                                                var u = o,
                                                    c = _;
                                                if (0 > l || 0 > u) throw new ev(28);
                                                if (null === i.cb || 1 == (2097155 & i.flags)) throw new ev(8);
                                                if (16384 == (61440 & i.node.mode)) throw new ev(31);
                                                if (!i.xa.read) throw new ev(28);
                                                var f = void 0 !== u;
                                                if (f) {
                                                    if (!i.seekable) throw new ev(70);
                                                } else u = i.position;
                                                var d = i.xa.read(i, c, s, l, u);
                                                if ((f || (i.position += d), 0 > d)) {
                                                    var p = -1;
                                                    break e;
                                                }
                                                if (((t += d), d < l)) break;
                                                void 0 !== o && (o += d);
                                            }
                                            p = t;
                                        }
                                        return (C[n >> 2] = p), 0;
                                    } catch (e) {
                                        if (void 0 === eB || "ErrnoError" !== e.name) throw e;
                                        return e.bb;
                                    }
                                },
                                I: function (e, t, r, n) {
                                    t = -0x20000000000000 > t || 0x20000000000000 < t ? NaN : Number(t);
                                    try {
                                        if (isNaN(t)) return 61;
                                        var i = eC(e);
                                        return (
                                            eN(i, t, r),
                                            (P[n >> 3] = BigInt(i.position)),
                                            i.Mb && 0 === t && 0 === r && (i.Mb = null),
                                            0
                                        );
                                    } catch (e) {
                                        if (void 0 === eB || "ErrnoError" !== e.name) throw e;
                                        return e.bb;
                                    }
                                },
                                J: function (e, t, r, n) {
                                    try {
                                        e: {
                                            var i = eC(e);
                                            e = t;
                                            for (var o, a = (t = 0); a < r; a++) {
                                                var s = C[e >> 2],
                                                    l = C[(e + 4) >> 2];
                                                e += 8;
                                                var u = o,
                                                    c = _;
                                                if (0 > l || 0 > u) throw new ev(28);
                                                if (null === i.cb || 0 == (2097155 & i.flags)) throw new ev(8);
                                                if (16384 == (61440 & i.node.mode)) throw new ev(31);
                                                if (!i.xa.write) throw new ev(28);
                                                i.seekable && 1024 & i.flags && eN(i, 0, 2);
                                                var f = void 0 !== u;
                                                if (f) {
                                                    if (!i.seekable) throw new ev(70);
                                                } else u = i.position;
                                                var d = i.xa.write(i, c, s, l, u, void 0);
                                                if ((f || (i.position += d), 0 > d)) {
                                                    var p = -1;
                                                    break e;
                                                }
                                                if (((t += d), d < l)) break;
                                                void 0 !== o && (o += d);
                                            }
                                            p = t;
                                        }
                                        return (C[n >> 2] = p), 0;
                                    } catch (e) {
                                        if (void 0 === eB || "ErrnoError" !== e.name) throw e;
                                        return e.bb;
                                    }
                                },
                                x: function (e, t, r) {
                                    var n = t7();
                                    try {
                                        re.get(e)(t, r);
                                    } catch (e) {
                                        if ((t8(n), e !== e + 0)) throw e;
                                        t6(1, 0);
                                    }
                                },
                                R: function () {
                                    return -1 < navigator.platform.indexOf("Win");
                                },
                                z: tW,
                                S: function (t, r, n) {
                                    (r = e.HEAP8.subarray(r, r + n)),
                                        (n = new Uint8Array(n)).set(r),
                                        createImageBitmap(new Blob([n]))
                                            .then(function (r) {
                                                var n = new OffscreenCanvas(r.width, r.height).getContext("2d");
                                                n.drawImage(r, 0, 0);
                                                var i = (n = n.getImageData(0, 0, r.width, r.height)).data.length,
                                                    o = e.Cc(i);
                                                e.pd.set(n.data, o), e.rd(t, r.width, r.height, o, i);
                                            })
                                            .catch(function (r) {
                                                r = r.message || "decode failed";
                                                var n = e.Gd(r) + 1,
                                                    i = e.Cc(n);
                                                e.Jd(r, i, n), e.sd(t, i), e.qd(i);
                                            });
                                },
                            };
                        function rn() {
                            if (((e.calledRun = !0), !D)) {
                                if (((L = !0), !e.noFSInit && !ep)) {
                                    var t, r;
                                    (ep = !0),
                                        (t ??= e.stdin),
                                        (r ??= e.stdout),
                                        (n ??= e.stderr),
                                        t ? ej("stdin", t) : eL("/dev/tty", "/dev/stdin"),
                                        r ? ej("stdout", null, r) : eL("/dev/tty", "/dev/stdout"),
                                        n ? ej("stderr", null, n) : eL("/dev/tty1", "/dev/stderr"),
                                        eF("/dev/stdin", 0),
                                        eF("/dev/stdout", 1),
                                        eF("/dev/stderr", 1);
                                }
                                if ((i.fa(), (eh = !1), b?.(e), e.onRuntimeInitialized?.(), e.postRun))
                                    for (
                                        "function" == typeof e.postRun && (e.postRun = [e.postRun]);
                                        e.postRun.length;
                                    ) {
                                        var n = e.postRun.shift();
                                        U.push(n);
                                    }
                                V(U);
                            }
                        }
                        if (
                            ((i = await (async function () {
                                function t(t) {
                                    return (
                                        (tZ = (t = i = t.exports).ga),
                                        (t0 = t.ha),
                                        (t1 = t.ia),
                                        (e._wasm_image_decode_complete = t.ja),
                                        (e._wasm_image_decode_error = t.ka),
                                        (t2 = e._ma_device__on_notification_unlocked = t.la),
                                        (e._ma_malloc_emscripten = t.ma),
                                        (e._ma_free_emscripten = t.na),
                                        (t3 = e._ma_device_process_pcm_frames_capture__webaudio = t.oa),
                                        (t5 = e._ma_device_process_pcm_frames_playback__webaudio = t.pa),
                                        (t4 = t.ra),
                                        (t6 = t.sa),
                                        (t8 = t.ta),
                                        (t7 = t.ua),
                                        (t9 = t.ea),
                                        (re = t.qa),
                                        F(),
                                        i
                                    );
                                }
                                var r = { a: rr };
                                return e.instantiateWasm
                                    ? new Promise((n) => {
                                          e.instantiateWasm(r, (e, r) => {
                                              n(t(e, r));
                                          });
                                      })
                                    : ((tS ??= e.locateFile
                                          ? e.locateFile("canvas_advanced.wasm", v)
                                          : v + "canvas_advanced.wasm"),
                                      t((await K(r)).instance));
                            })()),
                            e.preRun)
                        )
                            for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length; ) W();
                        return (
                            V(z),
                            e.setStatus
                                ? (e.setStatus("Running..."),
                                  setTimeout(() => {
                                      setTimeout(() => e.setStatus(""), 1), rn();
                                  }, 1))
                                : rn(),
                            L
                                ? e
                                : new Promise((e, t) => {
                                      (b = e), (w = t);
                                  })
                        );
                    });
            },
            (e) => {
                e.exports = JSON.parse(
                    '{"name":"@rive-app/canvas","version":"2.40.0","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts","runtimeLoader.d.ts","utils","semantics"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}',
                );
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        AccessibilityOverlay: () => i.AccessibilityOverlay,
                        SemanticActionType: () => o.SemanticActionType,
                        SemanticMode: () => o.SemanticMode,
                        SemanticRole: () => o.SemanticRole,
                        SemanticState: () => o.SemanticState,
                        SemanticTrait: () => o.SemanticTrait,
                        SemanticTreeModel: () => n.SemanticTreeModel,
                        hasState: () => o.hasState,
                        hasTrait: () => o.hasTrait,
                        roleName: () => o.roleName,
                        stateNames: () => o.stateNames,
                        traitNames: () => o.traitNames,
                    });
                var n = r(7),
                    i = r(9),
                    o = r(8);
            },
            (e, t, r) => {
                r.r(t), r.d(t, { SemanticTreeModel: () => o });
                var n = r(8),
                    i = function (e, t, r) {
                        if (r || 2 == arguments.length)
                            for (var n, i = 0, o = t.length; i < o; i++)
                                (!n && i in t) || (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
                        return e.concat(n || Array.prototype.slice.call(t));
                    },
                    o = (function () {
                        function e() {
                            (this._nodesById = new Map()),
                                (this._roots = []),
                                (this._semanticVersion = 0),
                                (this._geometryVersion = 0),
                                (this._geometryChangedIds = new Set()),
                                (this._semanticChangedIds = new Set()),
                                (this._debug = !1);
                        }
                        return (
                            Object.defineProperty(e.prototype, "nodeCount", {
                                get: function () {
                                    return this._nodesById.size;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "semanticVersion", {
                                get: function () {
                                    return this._semanticVersion;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "geometryVersion", {
                                get: function () {
                                    return this._geometryVersion;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "geometryChangedIds", {
                                get: function () {
                                    return this._geometryChangedIds;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "semanticChangedIds", {
                                get: function () {
                                    return this._semanticChangedIds;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "roots", {
                                get: function () {
                                    return this._roots;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.nodeById = function (e) {
                                return this._nodesById.get(e);
                            }),
                            (e.prototype.siblingIndexOf = function (e) {
                                var t = this._nodesById.get(e);
                                if (!t) return -1;
                                if (t.parentId < 0) return this._roots.indexOf(e);
                                var r = this._nodesById.get(t.parentId);
                                return r ? r.children.indexOf(e) : -1;
                            }),
                            (e.prototype.detach = function (e) {
                                var t = this._nodesById.get(e);
                                if (t)
                                    if (t.parentId < 0) {
                                        var r = this._roots.indexOf(e);
                                        -1 !== r && this._roots.splice(r, 1);
                                    } else {
                                        var n = this._nodesById.get(t.parentId);
                                        if (n) {
                                            var r = n.children.indexOf(e);
                                            -1 !== r && n.children.splice(r, 1);
                                        }
                                    }
                            }),
                            (e.prototype.attach = function (e, t, r) {
                                var n = this._nodesById.get(e);
                                if (n)
                                    if (t < 0) {
                                        n.parentId = -1;
                                        var i,
                                            o,
                                            a = ((i = r), (o = this._roots.length), i < 0 ? 0 : i > o ? o : i);
                                        this._roots.splice(a, 0, e);
                                    } else {
                                        var s = this._nodesById.get(t);
                                        if (s) {
                                            n.parentId = t;
                                            var l,
                                                u,
                                                a = ((l = r), (u = s.children.length), l < 0 ? 0 : l > u ? u : l);
                                            s.children.splice(a, 0, e);
                                        } else (n.parentId = -1), this._roots.push(e);
                                    }
                            }),
                            (e.prototype.removeSubtree = function (e) {
                                var t = this._nodesById.get(e);
                                if (t) {
                                    for (var r = i([], t.children, !0), n = 0; n < r.length; n++) {
                                        var o = r[n];
                                        this.removeSubtree(o);
                                    }
                                    this.detach(e), this._nodesById.delete(e);
                                }
                            }),
                            (e.prototype.applyDiff = function (e) {
                                var t,
                                    r,
                                    n = this;
                                this._geometryChangedIds.clear(), this._semanticChangedIds.clear();
                                for (
                                    var i = !1,
                                        o = !1,
                                        f = function () {
                                            i = !0;
                                        },
                                        d = function (e) {
                                            (i = !0), n._semanticChangedIds.add(e);
                                        },
                                        p = function (e) {
                                            (o = !0), n._geometryChangedIds.add(e);
                                        },
                                        h = 0,
                                        m = e.removed;
                                    h < m.length;
                                    h++
                                ) {
                                    var v = m[h];
                                    this._nodesById.has(v) && (this.removeSubtree(v), f());
                                }
                                for (var y = 0, g = e.added; y < g.length; y++) {
                                    var b,
                                        w = g[y],
                                        _ = this._nodesById.get(w.id);
                                    _
                                        ? (s(_, w) && (u(_, w), d(w.id)), l(_, w) && (c(_, w), p(w.id)))
                                        : (this._nodesById.set(w.id, {
                                              id: (b = w).id,
                                              parentId: -1,
                                              role: b.role,
                                              label: b.label,
                                              value: b.value,
                                              hint: b.hint,
                                              stateFlags: b.stateFlags,
                                              traitFlags: b.traitFlags,
                                              headingLevel: b.headingLevel,
                                              minX: b.minX,
                                              minY: b.minY,
                                              maxX: b.maxX,
                                              maxY: b.maxY,
                                              children: [],
                                          }),
                                          d(w.id),
                                          p(w.id)),
                                        this.detach(w.id),
                                        this.attach(w.id, w.parentId, w.siblingIndex);
                                }
                                for (var S = 0, x = e.moved; S < x.length; S++) {
                                    var w = x[S],
                                        _ = this._nodesById.get(w.id);
                                    if (_) {
                                        var E = _.parentId !== w.parentId,
                                            k = this.siblingIndexOf(w.id);
                                        l(_, w) && (c(_, w), p(w.id)),
                                            this.detach(w.id),
                                            this.attach(w.id, w.parentId, w.siblingIndex),
                                            (E || this.siblingIndexOf(w.id) !== k) && f();
                                    }
                                }
                                for (var C = 0, T = e.childrenUpdated; C < T.length; C++) {
                                    var M = T[C];
                                    if (M.parentId < 0) {
                                        var P = M.childIds.filter(function (e) {
                                            return n._nodesById.has(e);
                                        });
                                        if (!a(this._roots, P)) {
                                            (this._roots.length = 0), (t = this._roots).push.apply(t, P);
                                            for (var A = 0, I = this._roots; A < I.length; A++) {
                                                var v = I[A],
                                                    O = this._nodesById.get(v);
                                                O && (O.parentId = -1);
                                            }
                                            f();
                                        }
                                    } else {
                                        var D = this._nodesById.get(M.parentId);
                                        if (!D) continue;
                                        var P = M.childIds.filter(function (e) {
                                            return n._nodesById.has(e);
                                        });
                                        if (!a(D.children, P)) {
                                            (D.children.length = 0), (r = D.children).push.apply(r, P);
                                            for (var R = 0, L = D.children; R < L.length; R++) {
                                                var v = L[R],
                                                    O = this._nodesById.get(v);
                                                O && (O.parentId = M.parentId);
                                            }
                                            f();
                                        }
                                    }
                                }
                                for (var F = 0, N = e.updatedSemantic; F < N.length; F++) {
                                    var w = N[F],
                                        _ = this._nodesById.get(w.id);
                                    _ && s(_, w) && (u(_, w), d(w.id));
                                }
                                for (var j = 0, B = e.updatedGeometry; j < B.length; j++) {
                                    var w = B[j],
                                        _ = this._nodesById.get(w.id);
                                    _ && l(_, w) && (c(_, w), p(w.id));
                                }
                                (i || o) &&
                                    (i && this._semanticVersion++,
                                    o && this._geometryVersion++,
                                    this._debug && this.logDiff(e, i, o));
                            }),
                            Object.defineProperty(e.prototype, "debug", {
                                set: function (e) {
                                    this._debug = e;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.logDiff = function (e, t, r) {
                                for (
                                    var i = [
                                            "[rive:semantics] semantic v".concat(this._semanticVersion) +
                                                (r ? " geometry v".concat(this._geometryVersion) : "") +
                                                (t ? "" : " (geometry-only)"),
                                        ],
                                        o = 0,
                                        a = e.removed;
                                    o < a.length;
                                    o++
                                ) {
                                    var s = a[o];
                                    i.push("  - removed #".concat(s));
                                }
                                for (var l = 0, u = e.added; l < u.length; l++) {
                                    var c = u[l];
                                    i.push(
                                        "  + added #".concat(c.id, " ").concat((0, n.roleName)(c.role)) +
                                            (c.label ? ' "'.concat(c.label, '"') : "") +
                                            " bounds:("
                                                .concat(c.minX.toFixed(1), ",")
                                                .concat(c.minY.toFixed(1), ")-(")
                                                .concat(c.maxX.toFixed(1), ",")
                                                .concat(c.maxY.toFixed(1), ")") +
                                            " states=[".concat((0, n.stateNames)(c.stateFlags), "]") +
                                            " traits=[".concat((0, n.traitNames)(c.traitFlags), "]"),
                                    );
                                }
                                for (var f = 0, d = e.moved; f < d.length; f++) {
                                    var c = d[f];
                                    i.push(
                                        "  ~ moved #"
                                            .concat(c.id, " \u2192 parent=")
                                            .concat(c.parentId, " idx=")
                                            .concat(c.siblingIndex) +
                                            " bounds:("
                                                .concat(c.minX.toFixed(1), ",")
                                                .concat(c.minY.toFixed(1), ")-(")
                                                .concat(c.maxX.toFixed(1), ",")
                                                .concat(c.maxY.toFixed(1), ")"),
                                    );
                                }
                                for (var p = 0, h = e.childrenUpdated; p < h.length; p++) {
                                    var m = h[p];
                                    i.push(
                                        "  \u2195 children of "
                                            .concat(m.parentId < 0 ? "root" : "#" + m.parentId, ": [")
                                            .concat(m.childIds.join(", "), "]"),
                                    );
                                }
                                for (var v = 0, y = e.updatedSemantic; v < y.length; v++) {
                                    var c = y[v];
                                    i.push(
                                        "  \u270E semantic #".concat(c.id, " ").concat((0, n.roleName)(c.role)) +
                                            (c.label ? ' "'.concat(c.label, '"') : "") +
                                            " states=[".concat((0, n.stateNames)(c.stateFlags), "]") +
                                            " traits=[".concat((0, n.traitNames)(c.traitFlags), "]"),
                                    );
                                }
                                for (var g = 0, b = e.updatedGeometry; g < b.length; g++) {
                                    var c = b[g];
                                    i.push(
                                        "  \u229E geometry #"
                                            .concat(c.id, " (")
                                            .concat(c.minX.toFixed(1), ",")
                                            .concat(c.minY.toFixed(1), ")-(")
                                            .concat(c.maxX.toFixed(1), ",")
                                            .concat(c.maxY.toFixed(1), ")"),
                                    );
                                }
                                console.log(i.join("\n"));
                            }),
                            (e.prototype.flattened = function () {
                                for (
                                    var e = this,
                                        t = [],
                                        r = function (n, i) {
                                            var o = e._nodesById.get(n);
                                            if (o) {
                                                t.push({ depth: i, node: o });
                                                for (var a = 0, s = o.children; a < s.length; a++) r(s[a], i + 1);
                                            }
                                        },
                                        n = 0,
                                        i = this._roots;
                                    n < i.length;
                                    n++
                                )
                                    r(i[n], 0);
                                return t;
                            }),
                            e
                        );
                    })();
                function a(e, t) {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                    return !0;
                }
                function s(e, t) {
                    return (
                        e.role !== t.role ||
                        e.label !== t.label ||
                        e.value !== t.value ||
                        e.hint !== t.hint ||
                        e.stateFlags !== t.stateFlags ||
                        e.traitFlags !== t.traitFlags ||
                        e.headingLevel !== t.headingLevel
                    );
                }
                function l(e, t) {
                    return e.minX !== t.minX || e.minY !== t.minY || e.maxX !== t.maxX || e.maxY !== t.maxY;
                }
                function u(e, t) {
                    (e.role = t.role),
                        (e.label = t.label),
                        (e.value = t.value),
                        (e.hint = t.hint),
                        (e.stateFlags = t.stateFlags),
                        (e.traitFlags = t.traitFlags),
                        (e.headingLevel = t.headingLevel);
                }
                function c(e, t) {
                    (e.minX = t.minX), (e.minY = t.minY), (e.maxX = t.maxX), (e.maxY = t.maxY);
                }
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        SemanticActionType: () => u,
                        SemanticMode: () => a,
                        SemanticRole: () => n,
                        SemanticState: () => i,
                        SemanticTrait: () => s,
                        hasState: () => o,
                        hasTrait: () => l,
                        roleName: () => y,
                        stateNames: () => g,
                        traitNames: () => b,
                    });
                var n = {
                        none: 0,
                        button: 1,
                        link: 2,
                        checkbox: 3,
                        switchControl: 4,
                        slider: 5,
                        textField: 6,
                        text: 7,
                        image: 8,
                        group: 9,
                        list: 10,
                        listItem: 11,
                        tab: 12,
                        tabList: 13,
                        dialog: 14,
                        alertDialog: 15,
                        radioGroup: 16,
                        radioButton: 17,
                    },
                    i = {
                        None: 0,
                        Expanded: 1,
                        Selected: 2,
                        Checked: 4,
                        Mixed: 8,
                        Toggled: 16,
                        Required: 32,
                        Disabled: 64,
                        Focused: 128,
                        Hidden: 256,
                        LiveRegion: 512,
                        ReadOnly: 1024,
                        Modal: 2048,
                        Obscured: 4096,
                        Multiline: 8192,
                    };
                function o(e, t) {
                    return (e & t) != 0;
                }
                var a = { Disabled: "disabled", Enabled: "enabled" },
                    s = {
                        None: 0,
                        Expandable: 1,
                        Selectable: 2,
                        Checkable: 4,
                        Toggleable: 8,
                        Requirable: 16,
                        Enablable: 32,
                        Focusable: 64,
                    };
                function l(e, t) {
                    return (e & t) != 0;
                }
                for (
                    var u = { tap: 0, increase: 1, decrease: 2 }, c = {}, f = 0, d = Object.entries(n);
                    f < d.length;
                    f++
                ) {
                    var p = d[f],
                        h = p[0];
                    c[p[1]] = h;
                }
                var m = Object.entries(i).filter(function (e) {
                        return 0 !== e[1];
                    }),
                    v = Object.entries(s).filter(function (e) {
                        return 0 !== e[1];
                    });
                function y(e) {
                    var t;
                    return null != (t = c[e]) ? t : "unknown(".concat(e, ")");
                }
                function g(e) {
                    if (0 === e) return "none";
                    for (var t = [], r = 0; r < m.length; r++) {
                        var n = m[r],
                            i = n[0];
                        e & n[1] && t.push(i);
                    }
                    return t.join(", ") || "none";
                }
                function b(e) {
                    if (0 === e) return "none";
                    for (var t = [], r = 0; r < v.length; r++) {
                        var n = v[r],
                            i = n[0];
                        e & n[1] && t.push(i);
                    }
                    return t.join(", ") || "none";
                }
            },
            (e, t, r) => {
                r.r(t), r.d(t, { AccessibilityOverlay: () => i });
                var n = r(8),
                    i = (function () {
                        function e(e) {
                            var t,
                                r = this;
                            (this.elements = new Map()),
                                (this.descElements = new Map()),
                                (this.lastSemanticVersion = -1),
                                (this.lastGeometryVersion = -1),
                                (this.pendingTextGeometry = []),
                                (this.textGeometryKeys = new WeakMap()),
                                (this.lastCanvasPositioning = { width: -1, height: -1, offsetTop: -1, offsetLeft: -1 }),
                                (this._geometryDirty = !0),
                                (this.isUpdating = !1),
                                (this.transformContainer = null),
                                (this._artboardBounds = { minX: 0, minY: 0, maxX: 0, maxY: 0 }),
                                (this.repositionTimer = null),
                                (this.canvasResizeObserver = null),
                                (this.parentResizeObserver = null),
                                (this.positionObserver = null),
                                (this._onWindowResize = function () {
                                    return r.scheduleReposition();
                                }),
                                (this.instanceId = e.instanceId),
                                (this.fireAction = e.fireAction),
                                (this.requestFocus = e.requestFocus),
                                (this.clearFocus = e.clearFocus),
                                (this.canvas = e.canvas),
                                (this.semanticsOptions = e.semanticsOptions),
                                (this.allowFocusInterrupt = null != (t = e.allowFocusInterrupt) && t),
                                (this.container = this.createContainer(e.canvas)),
                                this.attachPositionObservers();
                        }
                        return (
                            (e.prototype.getSemanticOverlayContainer = function () {
                                return this.container;
                            }),
                            (e.prototype.attachPositionObservers = function () {
                                var e = this;
                                (this.canvasResizeObserver = new ResizeObserver(function () {
                                    return e.scheduleReposition();
                                })),
                                    this.canvasResizeObserver.observe(this.canvas);
                                var t = this.canvas.parentElement;
                                t &&
                                    ((this.parentResizeObserver = new ResizeObserver(function () {
                                        return e.scheduleReposition();
                                    })),
                                    this.parentResizeObserver.observe(t)),
                                    window.addEventListener("resize", this._onWindowResize),
                                    this.observePosition();
                            }),
                            (e.prototype.observePosition = function () {
                                var e,
                                    t = this;
                                if (!("u" < typeof IntersectionObserver)) {
                                    null == (e = this.positionObserver) || e.disconnect(),
                                        (this.positionObserver = null);
                                    var r = this.canvas.getBoundingClientRect();
                                    if (r.width && r.height) {
                                        var n = [
                                                r.top,
                                                window.innerWidth - r.right,
                                                window.innerHeight - r.bottom,
                                                r.left,
                                            ]
                                                .map(function (e) {
                                                    return "".concat(-Math.round(e), "px");
                                                })
                                                .join(" "),
                                            i = !1;
                                        (this.positionObserver = new IntersectionObserver(
                                            function () {
                                                if (!i) {
                                                    i = !0;
                                                    return;
                                                }
                                                t.scheduleReposition();
                                            },
                                            { threshold: 1, rootMargin: n },
                                        )),
                                            this.positionObserver.observe(this.canvas);
                                    }
                                }
                            }),
                            (e.prototype.scheduleReposition = function () {
                                var e = this;
                                (this._geometryDirty = !0),
                                    null === this.repositionTimer &&
                                        (this.repositionTimer = setTimeout(function () {
                                            (e.repositionTimer = null), e.syncContainerGeometry(), e.observePosition();
                                        }, 500));
                            }),
                            (e.prototype.syncContainerGeometry = function () {
                                var e = this.canvas.getBoundingClientRect(),
                                    t = this.canvas.offsetTop,
                                    r = this.canvas.offsetLeft;
                                (e.width !== this.lastCanvasPositioning.width ||
                                    e.height !== this.lastCanvasPositioning.height ||
                                    t !== this.lastCanvasPositioning.offsetTop ||
                                    r !== this.lastCanvasPositioning.offsetLeft) &&
                                    ((this.container.style.top = t + "px"),
                                    (this.container.style.left = r + "px"),
                                    (this.container.style.width = e.width + "px"),
                                    (this.container.style.height = e.height + "px"),
                                    (this.container.tabIndex = -1),
                                    (this.lastCanvasPositioning.width = e.width),
                                    (this.lastCanvasPositioning.height = e.height),
                                    (this.lastCanvasPositioning.offsetTop = t),
                                    (this.lastCanvasPositioning.offsetLeft = r));
                            }),
                            (e.prototype.createContainer = function (e) {
                                var t,
                                    r,
                                    n = document.createElement("div");
                                (n.id = "rive-a11y-".concat(this.instanceId)),
                                    n.setAttribute("role", "region"),
                                    n.setAttribute(
                                        "aria-label",
                                        null != (r = null == (t = this.semanticsOptions) ? void 0 : t.riveCanvasLabel)
                                            ? r
                                            : "Rive animation",
                                    );
                                var i = e.getBoundingClientRect();
                                return (
                                    (n.style.cssText = [
                                        "position:absolute",
                                        "top:".concat(e.offsetTop, "px"),
                                        "left:".concat(e.offsetLeft, "px"),
                                        "width:".concat(i.width, "px"),
                                        "height:".concat(i.height, "px"),
                                        "overflow:hidden;pointer-events:none;opacity:0",
                                    ].join(";")),
                                    e.insertAdjacentElement("afterend", n),
                                    n
                                );
                            }),
                            (e.prototype.needsUpdate = function (e) {
                                var t = e.semanticVersion !== this.lastSemanticVersion,
                                    r = e.geometryVersion !== this.lastGeometryVersion,
                                    n = this._geometryDirty || !this.transformContainer;
                                return t || r || n
                                    ? { semanticChanged: t, nodeGeometryChanged: r, layoutChanged: n }
                                    : null;
                            }),
                            (e.prototype.update = function (e, t, r, n, i) {
                                var o = null != i ? i : this.needsUpdate(e);
                                !o && t && (o = { semanticChanged: !1, nodeGeometryChanged: !1, layoutChanged: !0 }),
                                    o && this.performUpdate(e, t, r, n, o);
                            }),
                            (e.prototype.performUpdate = function (e, t, r, n, i) {
                                var o,
                                    a = i.semanticChanged,
                                    s = i.nodeGeometryChanged,
                                    l = e.semanticVersion - this.lastSemanticVersion > 1;
                                if (
                                    ((this.lastSemanticVersion = e.semanticVersion),
                                    (this.lastGeometryVersion = e.geometryVersion),
                                    (this.isUpdating = !0),
                                    (this._artboardBounds = n),
                                    t &&
                                        (this.syncContainerGeometry(),
                                        this.syncTransformContainer(t, r, n),
                                        (this._geometryDirty = !1)),
                                    a)
                                ) {
                                    var u = null != (o = this.transformContainer) ? o : this.container,
                                        c = new Set();
                                    this.rebuildChildren(u, e.roots, e, 0, 0, c, l);
                                    var f = [];
                                    this.elements.forEach(function (e, t) {
                                        c.has(t) || f.push(t);
                                    });
                                    for (var d = 0; d < f.length; d++) {
                                        var p = f[d],
                                            h = this.elements.get(p);
                                        h && h.parentNode && h.parentNode.removeChild(h), this.elements.delete(p);
                                        var m = this.descElements.get(p);
                                        m && m.parentNode && m.parentNode.removeChild(m), this.descElements.delete(p);
                                    }
                                } else s && this.updateGeometryForChangedNodes(e);
                                this.flushTextGeometry(), (this.isUpdating = !1);
                            }),
                            (e.prototype.destroy = function () {
                                var e, t, r;
                                null !== this.repositionTimer &&
                                    (clearTimeout(this.repositionTimer), (this.repositionTimer = null)),
                                    window.removeEventListener("resize", this._onWindowResize),
                                    null == (e = this.canvasResizeObserver) || e.disconnect(),
                                    null == (t = this.parentResizeObserver) || t.disconnect(),
                                    null == (r = this.positionObserver) || r.disconnect(),
                                    this.container.parentNode && this.container.parentNode.removeChild(this.container),
                                    this.elements.clear(),
                                    this.descElements.clear(),
                                    (this.pendingTextGeometry.length = 0);
                            }),
                            (e.prototype.rebuildChildren = function (e, t, r, i, o, a, s) {
                                for (var l = 0; l < t.length; l++) {
                                    var u = t[l],
                                        c = r.nodeById(u);
                                    if (c) {
                                        a.add(u);
                                        var f = this.elements.get(u),
                                            d = !f;
                                        f || ((f = this.createElement(c)), this.elements.set(u, f)),
                                            (d || s || r.semanticChangedIds.has(u)) && this.applyAttributes(f, c),
                                            this.applyPosition(f, c, i, o);
                                        var p = e.children[l];
                                        if (
                                            (p !== f && (p ? e.insertBefore(f, p) : e.appendChild(f)),
                                            (0, n.hasTrait)(c.traitFlags, n.SemanticTrait.Focusable) &&
                                                (0, n.hasState)(c.stateFlags, n.SemanticState.Focused))
                                        ) {
                                            var h = document.activeElement,
                                                m = null == h ? void 0 : h.closest('[aria-modal="true"]'),
                                                v = !!m && this.container.contains(m) && !m.contains(f);
                                            h !== f && !v && this.canMoveFocus() && f.focus();
                                        }
                                        c.children.length > 0 &&
                                            this.rebuildChildren(f, c.children, r, c.minX, c.minY, a, s),
                                            d && this.autoFocusDialogOnAppear(f, c, r);
                                    }
                                }
                            }),
                            (e.prototype.updateGeometryForChangedNodes = function (e) {
                                for (var t, r, n = 0, i = Array.from(e.geometryChangedIds); n < i.length; n++) {
                                    var o = i[n],
                                        a = e.nodeById(o);
                                    if (a) {
                                        var s = 0,
                                            l = 0,
                                            u = null != (t = this.transformContainer) ? t : this.container;
                                        if (a.parentId >= 0) {
                                            var c = e.nodeById(a.parentId);
                                            c &&
                                                ((s = c.minX),
                                                (l = c.minY),
                                                (u = null != (r = this.elements.get(a.parentId)) ? r : u));
                                        }
                                        this.updateNodeGeometrySubtree(e, o, s, l, u);
                                    }
                                }
                            }),
                            (e.prototype.updateNodeGeometrySubtree = function (e, t, r, n, i) {
                                var o = e.nodeById(t);
                                if (o) {
                                    var a = this.elements.get(t);
                                    if (a) {
                                        this.applyPosition(a, o, r, n);
                                        for (var s = 0, l = o.children; s < l.length; s++) {
                                            var u = l[s];
                                            this.updateNodeGeometrySubtree(e, u, o.minX, o.minY, a);
                                        }
                                    }
                                }
                            }),
                            (e.prototype.canMoveFocus = function () {
                                var e = document.activeElement;
                                return e === this.canvas || this.container.contains(e) || this.allowFocusInterrupt;
                            }),
                            (e.prototype.autoFocusDialogOnAppear = function (e, t, r) {
                                if (y(t.role, t.stateFlags) && this.canMoveFocus()) {
                                    var n,
                                        i = document.activeElement;
                                    if (!(i && i !== e && e.contains(i))) {
                                        var o = null != (n = this.routeDefaultFocusTarget(t, r)) ? n : e;
                                        o.hasAttribute("tabindex") || o.setAttribute("tabindex", "-1"),
                                            document.activeElement !== o && o.focus({ preventScroll: !0 });
                                    }
                                }
                            }),
                            (e.prototype.routeDefaultFocusTarget = function (e, t) {
                                for (var r, i = 0, o = e.children; i < o.length; i++) {
                                    var a = o[i],
                                        s = t.nodeById(a);
                                    if (s) {
                                        var l,
                                            u = this.elements.get(a);
                                        if (
                                            u &&
                                            (v((l = s).role) ||
                                                (0, n.hasTrait)(l.traitFlags, n.SemanticTrait.Focusable))
                                        )
                                            return u;
                                        if (s.children.length > 0 || !s.label) {
                                            var c = this.routeDefaultFocusTarget(s, t);
                                            if (c) return c;
                                            continue;
                                        }
                                        if (u) return null != (r = u.querySelector(":scope > span")) ? r : u;
                                    }
                                }
                                return null;
                            }),
                            Object.defineProperty(e.prototype, "nodeIdPrefix", {
                                get: function () {
                                    return "rive-".concat(this.instanceId, "-sem-");
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.nodeIdFromElement = function (e) {
                                if (!e.id.startsWith(this.nodeIdPrefix)) return null;
                                var t = e.id.slice(this.nodeIdPrefix.length);
                                if (!t) return null;
                                var r = Number(t);
                                return Number.isNaN(r) ? null : r;
                            }),
                            (e.prototype.createElement = function (e) {
                                var t = (function (e) {
                                        switch (e) {
                                            case n.SemanticRole.link:
                                                return "a";
                                            case n.SemanticRole.text:
                                            default:
                                                return "div";
                                        }
                                    })(e.role),
                                    r = document.createElement(t);
                                if (
                                    ((r.id = "".concat(this.nodeIdPrefix).concat(e.id)),
                                    (r.style.cssText = f),
                                    e.role === n.SemanticRole.text)
                                ) {
                                    var i = document.createElement("span");
                                    (i.style.cssText = d), r.appendChild(i);
                                }
                                return this.attachActionHandlers(r, e), r;
                            }),
                            (e.prototype.attachRovingNav = function (e, t) {
                                var r = this;
                                e.addEventListener("keydown", function (i) {
                                    var o = null;
                                    if (
                                        ("ArrowRight" === i.key || "ArrowDown" === i.key
                                            ? (o = "next")
                                            : "ArrowLeft" === i.key || "ArrowUp" === i.key
                                              ? (o = "prev")
                                              : t.includeHomeEnd && "Home" === i.key
                                                ? (o = "first")
                                                : t.includeHomeEnd && "End" === i.key && (o = "last"),
                                        o)
                                    ) {
                                        i.preventDefault();
                                        var a = t.members(),
                                            s = a.indexOf(e);
                                        if (!(s < 0)) {
                                            var l = a.length,
                                                u =
                                                    "next" === o
                                                        ? a[(s + 1) % l]
                                                        : "prev" === o
                                                          ? a[(s - 1 + l) % l]
                                                          : "first" === o
                                                            ? a[0]
                                                            : a[l - 1];
                                            if (u && u !== e) {
                                                u.focus();
                                                var c = r.nodeIdFromElement(u);
                                                null !== c && r.fireAction(c, n.SemanticActionType.tap);
                                            }
                                        }
                                    }
                                });
                            }),
                            (e.prototype.attachActionHandlers = function (e, t) {
                                var r = this,
                                    i = t.role,
                                    o = t.id;
                                if (
                                    (function (e) {
                                        switch (e) {
                                            case n.SemanticRole.button:
                                            case n.SemanticRole.link:
                                            case n.SemanticRole.checkbox:
                                            case n.SemanticRole.switchControl:
                                            case n.SemanticRole.tab:
                                            case n.SemanticRole.radioButton:
                                                return !0;
                                            default:
                                                return !1;
                                        }
                                    })(i)
                                ) {
                                    e.addEventListener("click", function () {
                                        r.fireAction(o, n.SemanticActionType.tap);
                                    });
                                    var a = i === n.SemanticRole.link ? ["Enter"] : ["Enter", " "];
                                    e.addEventListener("keydown", function (e) {
                                        a.includes(e.key) &&
                                            (e.preventDefault(), r.fireAction(o, n.SemanticActionType.tap));
                                    });
                                }
                                i === n.SemanticRole.slider &&
                                    e.addEventListener("keydown", function (e) {
                                        "ArrowRight" === e.key || "ArrowUp" === e.key
                                            ? (e.preventDefault(), r.fireAction(o, n.SemanticActionType.increase))
                                            : ("ArrowLeft" === e.key || "ArrowDown" === e.key) &&
                                              (e.preventDefault(), r.fireAction(o, n.SemanticActionType.decrease));
                                    }),
                                    i === n.SemanticRole.tab &&
                                        this.attachRovingNav(e, {
                                            includeHomeEnd: !0,
                                            members: function () {
                                                var t = e.parentElement;
                                                return t
                                                    ? Array.from(t.children).filter(function (e) {
                                                          return (
                                                              e instanceof HTMLElement &&
                                                              "tab" === e.getAttribute("role")
                                                          );
                                                      })
                                                    : [];
                                            },
                                        }),
                                    i === n.SemanticRole.radioButton &&
                                        this.attachRovingNav(e, {
                                            includeHomeEnd: !1,
                                            members: function () {
                                                var t,
                                                    r =
                                                        null != (t = e.closest('[role="radiogroup"]'))
                                                            ? t
                                                            : e.parentElement;
                                                return r ? Array.from(r.querySelectorAll('[role="radio"]')) : [];
                                            },
                                        }),
                                    (0, n.hasTrait)(t.traitFlags, n.SemanticTrait.Focusable) &&
                                        e.addEventListener("focus", function () {
                                            r.requestFocus(o);
                                        });
                            }),
                            (e.prototype.applyAttributes = function (e, t) {
                                var r,
                                    i,
                                    f,
                                    d = t.role,
                                    g = t.stateFlags,
                                    b = t.traitFlags,
                                    w = (function (e) {
                                        switch (e) {
                                            case n.SemanticRole.none:
                                                return "group";
                                            case n.SemanticRole.button:
                                                return "button";
                                            case n.SemanticRole.link:
                                                return null;
                                            case n.SemanticRole.checkbox:
                                                return "checkbox";
                                            case n.SemanticRole.switchControl:
                                                return "switch";
                                            case n.SemanticRole.slider:
                                                return "slider";
                                            case n.SemanticRole.textField:
                                                return "textbox";
                                            case n.SemanticRole.image:
                                                return "img";
                                            case n.SemanticRole.group:
                                                return "group";
                                            case n.SemanticRole.list:
                                                return "list";
                                            case n.SemanticRole.listItem:
                                                return "listitem";
                                            case n.SemanticRole.tab:
                                                return "tab";
                                            case n.SemanticRole.tabList:
                                                return "tablist";
                                            case n.SemanticRole.dialog:
                                                return "dialog";
                                            case n.SemanticRole.alertDialog:
                                                return "alertdialog";
                                            case n.SemanticRole.radioGroup:
                                                return "radiogroup";
                                            case n.SemanticRole.radioButton:
                                                return "radio";
                                            case n.SemanticRole.text:
                                            default:
                                                return null;
                                        }
                                    })(d);
                                if (
                                    (w ? p(e, "role", w) : h(e, "role"),
                                    d === n.SemanticRole.link && p(e, "role", "link"),
                                    v(d) ||
                                    (0, n.hasTrait)(b, n.SemanticTrait.Focusable) ||
                                    d === n.SemanticRole.listItem
                                        ? p(e, "tabindex", "-1")
                                        : h(e, "tabindex"),
                                    t.label ? p(e, "aria-label", t.label) : h(e, "aria-label"),
                                    d === n.SemanticRole.slider)
                                ) {
                                    if (t.value) {
                                        var _ = parseFloat(t.value);
                                        Number.isFinite(_) ? p(e, "aria-valuenow", String(_)) : h(e, "aria-valuenow"),
                                            p(e, "aria-valuetext", t.value);
                                    } else h(e, "aria-valuenow"), h(e, "aria-valuetext");
                                    p(e, "aria-orientation", "horizontal"),
                                        m(e, "aria-readonly", (0, n.hasState)(g, n.SemanticState.ReadOnly));
                                } else
                                    h(e, "aria-valuenow"),
                                        h(e, "aria-valuetext"),
                                        h(e, "aria-orientation"),
                                        h(e, "aria-readonly");
                                if (t.hint) {
                                    var S = "rive-".concat(this.instanceId, "-desc-").concat(t.id),
                                        x = this.descElements.get(t.id);
                                    x ||
                                        (((x = document.createElement("span")).id = S),
                                        (x.style.cssText = c),
                                        this.container.appendChild(x),
                                        this.descElements.set(t.id, x)),
                                        x.textContent !== t.hint && (x.textContent = t.hint),
                                        p(e, "aria-describedby", S);
                                } else {
                                    h(e, "aria-describedby");
                                    var E = this.descElements.get(t.id);
                                    E && (E.parentNode && E.parentNode.removeChild(E), this.descElements.delete(t.id));
                                }
                                if (d === n.SemanticRole.text) {
                                    var k = null != (r = e.querySelector(":scope > span")) ? r : e,
                                        C = null != (i = t.label) ? i : "";
                                    k.textContent !== C && (k.textContent = C),
                                        h(e, "aria-label"),
                                        t.headingLevel > 0
                                            ? (p(e, "role", "heading"), p(e, "aria-level", String(t.headingLevel)))
                                            : h(e, "aria-level");
                                }
                                (0, n.hasTrait)(b, n.SemanticTrait.Expandable) && o.has(d)
                                    ? m(e, "aria-expanded", (0, n.hasState)(g, n.SemanticState.Expanded))
                                    : h(e, "aria-expanded"),
                                    d === n.SemanticRole.tab ||
                                    ((0, n.hasTrait)(b, n.SemanticTrait.Selectable) && a.has(d))
                                        ? m(e, "aria-selected", (0, n.hasState)(g, n.SemanticState.Selected))
                                        : h(e, "aria-selected"),
                                    (0, n.hasTrait)(b, n.SemanticTrait.Checkable) && s.has(d)
                                        ? (0, n.hasState)(g, n.SemanticState.Mixed) &&
                                          d !== n.SemanticRole.switchControl
                                            ? p(e, "aria-checked", "mixed")
                                            : m(e, "aria-checked", (0, n.hasState)(g, n.SemanticState.Checked))
                                        : h(e, "aria-checked"),
                                    (0, n.hasTrait)(b, n.SemanticTrait.Toggleable)
                                        ? (l.has(d)
                                              ? m(e, "aria-pressed", (0, n.hasState)(g, n.SemanticState.Toggled))
                                              : h(e, "aria-pressed"),
                                          d === n.SemanticRole.switchControl &&
                                              m(e, "aria-checked", (0, n.hasState)(g, n.SemanticState.Toggled)))
                                        : h(e, "aria-pressed"),
                                    (0, n.hasTrait)(b, n.SemanticTrait.Requirable) && u.has(d)
                                        ? m(e, "aria-required", (0, n.hasState)(g, n.SemanticState.Required))
                                        : h(e, "aria-required"),
                                    (0, n.hasTrait)(b, n.SemanticTrait.Enablable)
                                        ? m(e, "aria-disabled", (0, n.hasState)(g, n.SemanticState.Disabled))
                                        : h(e, "aria-disabled");
                                var T = d === n.SemanticRole.image && !t.label;
                                if (
                                    ((0, n.hasState)(g, n.SemanticState.Hidden) ||
                                    (0, n.hasState)(g, n.SemanticState.Obscured) ||
                                    T
                                        ? p(e, "aria-hidden", "true")
                                        : h(e, "aria-hidden"),
                                    (0, n.hasState)(g, n.SemanticState.LiveRegion)
                                        ? p(e, "aria-live", "polite")
                                        : h(e, "aria-live"),
                                    d === n.SemanticRole.textField)
                                ) {
                                    if (
                                        (m(e, "aria-readonly", (0, n.hasState)(g, n.SemanticState.ReadOnly)),
                                        m(e, "aria-multiline", (0, n.hasState)(g, n.SemanticState.Multiline)),
                                        0 === t.children.length)
                                    ) {
                                        var M = null != (f = t.value) ? f : "";
                                        e.textContent !== M && (e.textContent = M);
                                    }
                                } else h(e, "aria-multiline");
                                y(d, g) ? p(e, "aria-modal", "true") : h(e, "aria-modal");
                            }),
                            (e.prototype.applyPosition = function (e, t, r, i) {
                                var o = this._artboardBounds,
                                    a = Math.max(t.minX, o.minX),
                                    s = Math.max(t.minY, o.minY),
                                    l = Math.min(t.maxX, o.maxX),
                                    u = Math.min(t.maxY, o.maxY),
                                    c = Math.round(Math.max(0, l - a)) + "px",
                                    f = Math.round(Math.max(0, u - s)) + "px",
                                    d = Math.round(a - r) + "px",
                                    p = Math.round(s - i) + "px";
                                e.style.left !== d && (e.style.left = d),
                                    e.style.top !== p && (e.style.top = p),
                                    e.style.width !== c && (e.style.width = c),
                                    e.style.height !== f && (e.style.height = f),
                                    e.style.transform && (e.style.transform = ""),
                                    t.role === n.SemanticRole.text && this.pendingTextGeometry.push(e);
                            }),
                            (e.prototype.flushTextGeometry = function () {
                                if (0 !== this.pendingTextGeometry.length) {
                                    for (var e, t = [], r = 0, n = this.pendingTextGeometry; r < n.length; r++) {
                                        var i = n[r],
                                            o = null != (e = i.querySelector(":scope > span")) ? e : i,
                                            a = ""
                                                .concat(i.style.width, "|")
                                                .concat(i.style.height, "|")
                                                .concat(o.textContent);
                                        this.textGeometryKeys.get(i) !== a &&
                                            ((o.style.width = "auto"),
                                            (o.style.height = "auto"),
                                            (o.style.transformOrigin = "0 0"),
                                            (o.style.transform = ""),
                                            t.push({ host: i, span: o, key: a }));
                                    }
                                    this.pendingTextGeometry.length = 0;
                                    for (
                                        var s = t.map(function (e) {
                                                var t = e.host,
                                                    r = e.span,
                                                    n = t.getBoundingClientRect(),
                                                    i = r.getBoundingClientRect();
                                                if (i.width > 0 && i.height > 0) {
                                                    var o = n.width / i.width,
                                                        a = n.height / i.height;
                                                    return "scale(".concat(o, ", ").concat(a, ")");
                                                }
                                                return "none";
                                            }),
                                            l = 0;
                                        l < t.length;
                                        l++
                                    ) {
                                        var u = t[l],
                                            i = u.host,
                                            o = u.span,
                                            a = u.key;
                                        (o.style.transform = s[l]), this.textGeometryKeys.set(i, a);
                                    }
                                }
                            }),
                            (e.prototype.syncTransformContainer = function (e, t, r) {
                                if (!this.transformContainer) {
                                    var n = document.createElement("div");
                                    (n.style.cssText =
                                        "position:absolute;top:0;left:0;overflow:visible;pointer-events:none;transform-origin:0 0"),
                                        this.container.appendChild(n),
                                        (this.transformContainer = n);
                                }
                                var i = r.maxX - r.minX,
                                    o = r.maxY - r.minY;
                                (this.transformContainer.style.width = Math.round(i) + "px"),
                                    (this.transformContainer.style.height = Math.round(o) + "px");
                                var a = 1 / (t || 1),
                                    s = e.xx * a,
                                    l = e.xy * a,
                                    u = e.yx * a,
                                    c = e.yy * a,
                                    f = e.tx * a,
                                    d = e.ty * a;
                                this.transformContainer.style.transform = "matrix("
                                    .concat(s, ",")
                                    .concat(l, ",")
                                    .concat(u, ",")
                                    .concat(c, ",")
                                    .concat(f, ",")
                                    .concat(d, ")");
                            }),
                            e
                        );
                    })(),
                    o = new Set([
                        n.SemanticRole.button,
                        n.SemanticRole.link,
                        n.SemanticRole.checkbox,
                        n.SemanticRole.switchControl,
                        n.SemanticRole.tab,
                    ]),
                    a = new Set([n.SemanticRole.tab]),
                    s = new Set([n.SemanticRole.checkbox, n.SemanticRole.radioButton, n.SemanticRole.switchControl]),
                    l = new Set([n.SemanticRole.button]),
                    u = new Set([n.SemanticRole.checkbox, n.SemanticRole.textField, n.SemanticRole.radioGroup]),
                    c = "position:absolute;width:1px;height:1px;overflow:hidden;pointer-events:none;left:-9999px",
                    f =
                        "position:absolute;pointer-events:none;box-sizing:border-box;overflow:visible;margin:0;padding:0;transform-origin: 0px 0px 0px;border:none;background:transparent;color:transparent",
                    d = "display:inline-block;white-space:nowrap;pointer-events:none";
                function p(e, t, r) {
                    e.getAttribute(t) !== r && e.setAttribute(t, r);
                }
                function h(e, t) {
                    e.hasAttribute(t) && e.removeAttribute(t);
                }
                function m(e, t, r) {
                    p(e, t, r ? "true" : "false");
                }
                function v(e) {
                    switch (e) {
                        case n.SemanticRole.button:
                        case n.SemanticRole.link:
                        case n.SemanticRole.checkbox:
                        case n.SemanticRole.switchControl:
                        case n.SemanticRole.slider:
                        case n.SemanticRole.tab:
                        case n.SemanticRole.radioButton:
                        case n.SemanticRole.textField:
                            return !0;
                        default:
                            return !1;
                    }
                }
                function y(e, t) {
                    return (
                        e === n.SemanticRole.alertDialog ||
                        (e === n.SemanticRole.dialog && (0, n.hasState)(t, n.SemanticState.Modal))
                    );
                }
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        AudioAssetWrapper: () => a.AudioAssetWrapper,
                        AudioWrapper: () => a.AudioWrapper,
                        BLANK_URL: () => o.BLANK_URL,
                        CustomFileAssetLoaderWrapper: () => a.CustomFileAssetLoaderWrapper,
                        FileAssetWrapper: () => a.FileAssetWrapper,
                        FileFinalizer: () => a.FileFinalizer,
                        FocusSessionState: () => i.FocusSessionState,
                        FontAssetWrapper: () => a.FontAssetWrapper,
                        FontWrapper: () => a.FontWrapper,
                        ImageAssetWrapper: () => a.ImageAssetWrapper,
                        ImageWrapper: () => a.ImageWrapper,
                        KeyboardInteractions: () => i.KeyboardInteractions,
                        RiveFont: () => s.RiveFont,
                        createFinalization: () => a.createFinalization,
                        finalizationRegistry: () => a.finalizationRegistry,
                        registerTouchInteractions: () => n.registerTouchInteractions,
                        sanitizeUrl: () => o.sanitizeUrl,
                    });
                var n = r(11),
                    i = r(12),
                    o = r(13),
                    a = r(14),
                    s = r(15);
            },
            (e, t, r) => {
                r.r(t), r.d(t, { registerTouchInteractions: () => a });
                var n = void 0,
                    i = function (e, t, r) {
                        var n,
                            i = [];
                        if (t)
                            for (var o = 0; o < e.length; o++) {
                                var a = e[o];
                                i.push({ clientX: a.clientX, clientY: a.clientY, identifier: a.identifier });
                            }
                        else {
                            var s =
                                null !== r
                                    ? null !=
                                      (n = Array.from(e).find(function (e) {
                                          return e.identifier === r;
                                      }))
                                        ? n
                                        : null
                                    : e[0];
                            s && i.push({ clientX: s.clientX, clientY: s.clientY, identifier: s.identifier });
                        }
                        return i;
                    },
                    o = function (e, t, r, n) {
                        var o;
                        return (null == (o = e.changedTouches) ? void 0 : o.length)
                            ? (!t && ["touchstart", "touchmove"].includes(e.type) && e.preventDefault(),
                              i(e.changedTouches, r, n))
                            : [{ clientX: e.clientX, clientY: e.clientY, identifier: 0 }];
                    },
                    a = function (e) {
                        var t = e.canvas,
                            r = e.artboard,
                            i = e.stateMachines,
                            a = void 0 === i ? [] : i,
                            s = e.renderer,
                            l = e.rive,
                            u = e.fit,
                            c = e.alignment,
                            f = e.isTouchScrollEnabled,
                            d = void 0 !== f && f,
                            p = e.dispatchPointerExit,
                            h = void 0 === p || p,
                            m = e.enableMultiTouch,
                            v = void 0 !== m && m,
                            y = e.layoutScaleFactor,
                            g = void 0 === y ? 1 : y,
                            b = e.advanceAndDrain,
                            w = e.listenOnDocumentBody,
                            _ = e.eventCapture;
                        if (!t || !a.length || !s || !l || !r || "u" < typeof window) return null;
                        var S = null,
                            x = !1,
                            E = null,
                            k = function () {
                                E = null;
                            },
                            C = function (e) {
                                if (x && e instanceof MouseEvent) {
                                    "mouseup" == e.type && (x = !1);
                                    return;
                                }
                                (x = d && "touchend" === e.type && "touchstart" === S), (S = e.type);
                                var n,
                                    i = t.getBoundingClientRect();
                                if (!v && "touchstart" === e.type && null === E) {
                                    var s = null == (n = e.changedTouches) ? void 0 : n[0];
                                    s && (E = s.identifier);
                                }
                                var f = o(e, d, v, v ? null : E),
                                    p = l.computeAlignment(
                                        u,
                                        c,
                                        { minX: 0, minY: 0, maxX: i.width, maxY: i.height },
                                        r.bounds,
                                        g,
                                    ),
                                    m = new l.Mat2D();
                                p.invert(m);
                                var y = [];
                                switch (
                                    (f.forEach(function (t) {
                                        var r = t.clientX,
                                            n = t.clientY;
                                        if (r || n) {
                                            var o = r - i.left,
                                                a = n - i.top;
                                            if (
                                                (o >= 0 && o <= i.width && a >= 0 && a <= i.height) ||
                                                ["mouseleave", "mouseout"].includes(e.type)
                                            ) {
                                                var s = new l.Vec2D(o, a),
                                                    u = l.mapXY(m, s),
                                                    c = u.x(),
                                                    f = u.y();
                                                (t.transformedX = c),
                                                    (t.transformedY = f),
                                                    u.delete(),
                                                    s.delete(),
                                                    y.push(t);
                                            }
                                        }
                                    }),
                                    m.delete(),
                                    p.delete(),
                                    e.type)
                                ) {
                                    case "mouseleave":
                                    case "mouseout":
                                        for (
                                            var w = function (e) {
                                                    h
                                                        ? y.forEach(function (t) {
                                                              e.pointerExit(
                                                                  t.transformedX < 0
                                                                      ? t.transformedX - 1e4
                                                                      : t.transformedX + 1e4,
                                                                  t.transformedY < 0
                                                                      ? t.transformedY - 1e4
                                                                      : t.transformedY + 1e4,
                                                                  t.identifier,
                                                              );
                                                          })
                                                        : y.forEach(function (t) {
                                                              e.pointerMove(
                                                                  t.transformedX,
                                                                  t.transformedY,
                                                                  t.identifier,
                                                              );
                                                          });
                                                },
                                                _ = 0;
                                            _ < a.length;
                                            _++
                                        ) {
                                            var k = a[_];
                                            w(k);
                                        }
                                        break;
                                    case "mouseenter":
                                    case "touchmove":
                                    case "mouseover":
                                    case "mousemove":
                                        for (
                                            var C = function (e) {
                                                    y.forEach(function (t) {
                                                        e.pointerMove(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                T = 0;
                                            T < a.length;
                                            T++
                                        ) {
                                            var k = a[T];
                                            C(k);
                                        }
                                        break;
                                    case "touchstart":
                                    case "mousedown":
                                        for (
                                            var M = function (e) {
                                                    y.forEach(function (t) {
                                                        e.pointerDown(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                P = 0;
                                            P < a.length;
                                            P++
                                        ) {
                                            var k = a[P];
                                            M(k);
                                        }
                                        b(0);
                                        break;
                                    case "touchend":
                                        for (
                                            var A = function (e) {
                                                    y.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier),
                                                            e.pointerExit(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                I = 0;
                                            I < a.length;
                                            I++
                                        ) {
                                            var k = a[I];
                                            A(k);
                                        }
                                        b(0),
                                            !v &&
                                                f.some(function (e) {
                                                    return e.identifier === E;
                                                }) &&
                                                (E = null);
                                        break;
                                    case "mouseup":
                                        for (
                                            var O = function (e) {
                                                    y.forEach(function (t) {
                                                        e.pointerUp(t.transformedX, t.transformedY, t.identifier);
                                                    });
                                                },
                                                D = 0;
                                            D < a.length;
                                            D++
                                        ) {
                                            var k = a[D];
                                            O(k);
                                        }
                                        b(0);
                                }
                            }.bind(n),
                            T = w ? t.ownerDocument.body : t;
                        return (
                            T.addEventListener("mouseover", C, _),
                            T.addEventListener("mouseenter", C, _),
                            T.addEventListener("mouseout", C, _),
                            T.addEventListener("mouseleave", C, _),
                            T.addEventListener("mousemove", C, _),
                            T.addEventListener("mousedown", C, _),
                            T.addEventListener("mouseup", C, _),
                            t.addEventListener("touchmove", C, { passive: d }),
                            t.addEventListener("touchstart", C, { passive: d }),
                            t.addEventListener("touchend", C),
                            t.addEventListener("touchcancel", k),
                            function () {
                                T.removeEventListener("mouseover", C, _),
                                    T.removeEventListener("mouseenter", C, _),
                                    T.removeEventListener("mouseout", C, _),
                                    T.removeEventListener("mouseleave", C, _),
                                    T.removeEventListener("mousemove", C, _),
                                    T.removeEventListener("mousedown", C, _),
                                    T.removeEventListener("mouseup", C, _),
                                    t.removeEventListener("touchmove", C),
                                    t.removeEventListener("touchstart", C),
                                    t.removeEventListener("touchend", C),
                                    t.removeEventListener("touchcancel", k);
                            }
                        );
                    };
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, { FocusSessionState: () => i, KeyboardInteractions: () => o }),
                    ((n = i || (i = {})).NotFocused = "notFocused"),
                    (n.EntryPending = "entryPending"),
                    (n.RiveFocused = "riveFocused");
                var n,
                    i,
                    o = (function () {
                        function e(e) {
                            var t,
                                r = e.canvas,
                                n = e.stateMachine,
                                o = e.hasFocusNodes,
                                a = e.getOverlayElement,
                                s = this;
                            (this.focusSessionState = i.NotFocused),
                                (this.canvasHasFocus = !1),
                                (this.focusDomainReleased = !1),
                                (this.currentOverlayElement = null),
                                (this.onCanvasFocus = function (e) {
                                    s.syncOverlayListener(),
                                        (s.canvasHasFocus = !0),
                                        (s.focusDomainReleased = !1),
                                        !s.hasFocusNodes ||
                                            s.mainSm.focusState().hasFocus ||
                                            ((s.focusSessionState = i.EntryPending),
                                            s.isKeyboardDrivenFocus() &&
                                                (s.cameFromBeforeCanvas(e.relatedTarget)
                                                    ? s.mainSm.focusNext()
                                                    : s.mainSm.focusPrevious()) &&
                                                (s.focusSessionState = i.RiveFocused));
                                }),
                                (this.onCanvasBlur = function (e) {
                                    (s.focusSessionState = i.NotFocused), (s.canvasHasFocus = !1);
                                }),
                                (this.onOverlayFocusIn = function (e) {
                                    s.isInOverlay(e.target) && (s.focusDomainReleased = !1);
                                }),
                                (this.onFocusDomainHostFocusIn = function (e) {
                                    s.syncOverlayListener();
                                }),
                                (this.onKeyDown = function (e) {
                                    s.syncOverlayListener(),
                                        s.focusDomainReleased ||
                                            (s.shouldRiveHandleKeyEvent(e) &&
                                                "Tab" === e.code &&
                                                s.hasFocusNodes &&
                                                ((e.shiftKey ? s.mainSm.focusPrevious() : s.mainSm.focusNext())
                                                    ? ((s.focusSessionState = i.RiveFocused), e.preventDefault())
                                                    : ((s.focusSessionState = i.NotFocused),
                                                      (s.focusDomainReleased = !0),
                                                      (s.canvasHasFocus = !1)),
                                                s.syncOverlayListener()));
                                }),
                                (this.canvas = r),
                                (this.mainSm = n),
                                (this.hasFocusNodes = o),
                                (this.getOverlayElement = a),
                                (this.focusDomainHost = null != (t = r.parentElement) ? t : document),
                                r.addEventListener("focus", this.onCanvasFocus),
                                r.addEventListener("blur", this.onCanvasBlur),
                                r.addEventListener("keydown", this.onKeyDown),
                                this.focusDomainHost.addEventListener("focusin", this.onFocusDomainHostFocusIn),
                                this.syncOverlayListener();
                        }
                        return (
                            (e.prototype.setFocusSessionState = function (e) {
                                this.focusSessionState = e;
                            }),
                            (e.prototype.notifyRiveFocused = function () {
                                this.focusSessionState = i.RiveFocused;
                            }),
                            (e.prototype.shouldRiveHandleKeyEvent = function (e) {
                                if (this.isInFocusDomain(document.activeElement) || this.isInOverlay(e.target))
                                    return !0;
                                var t = this.focusSessionState !== i.NotFocused,
                                    r = e.target === this.canvas;
                                return t && (this.canvasHasFocus || r);
                            }),
                            (e.prototype.isInFocusDomain = function (e) {
                                return e === this.canvas || this.isInOverlay(e);
                            }),
                            (e.prototype.isInOverlay = function (e) {
                                var t, r, n;
                                return (
                                    e instanceof Node &&
                                    null !=
                                        (n =
                                            null == (r = null == (t = this.getOverlayElement) ? void 0 : t.call(this))
                                                ? void 0
                                                : r.contains(e)) &&
                                    n
                                );
                            }),
                            (e.prototype.syncOverlayListener = function () {
                                var e,
                                    t,
                                    r,
                                    n,
                                    i,
                                    o,
                                    a =
                                        null != (t = null == (e = this.getOverlayElement) ? void 0 : e.call(this))
                                            ? t
                                            : null;
                                a !== this.currentOverlayElement &&
                                    (null == (r = this.currentOverlayElement) ||
                                        r.removeEventListener("focusin", this.onOverlayFocusIn),
                                    null == (n = this.currentOverlayElement) ||
                                        n.removeEventListener("keydown", this.onKeyDown, !0),
                                    (this.currentOverlayElement = a),
                                    null == (i = this.currentOverlayElement) ||
                                        i.addEventListener("focusin", this.onOverlayFocusIn),
                                    null == (o = this.currentOverlayElement) ||
                                        o.addEventListener("keydown", this.onKeyDown, !0));
                            }),
                            (e.prototype.isKeyboardDrivenFocus = function () {
                                try {
                                    return this.canvas.matches(":focus-visible");
                                } catch (e) {
                                    return !1;
                                }
                            }),
                            (e.prototype.cameFromBeforeCanvas = function (e) {
                                if (!e) return !0;
                                var t = this.canvas.compareDocumentPosition(e);
                                return (
                                    !!(t & Node.DOCUMENT_POSITION_PRECEDING) || !(t & Node.DOCUMENT_POSITION_FOLLOWING)
                                );
                            }),
                            (e.prototype.cleanup = function () {
                                var e, t;
                                this.canvas.removeEventListener("focus", this.onCanvasFocus),
                                    this.canvas.removeEventListener("blur", this.onCanvasBlur),
                                    this.canvas.removeEventListener("keydown", this.onKeyDown),
                                    this.focusDomainHost.removeEventListener("focusin", this.onFocusDomainHostFocusIn),
                                    null == (e = this.currentOverlayElement) ||
                                        e.removeEventListener("focusin", this.onOverlayFocusIn),
                                    null == (t = this.currentOverlayElement) ||
                                        t.removeEventListener("keydown", this.onKeyDown, !0);
                            }),
                            e
                        );
                    })();
            },
            (e, t, r) => {
                r.r(t), r.d(t, { BLANK_URL: () => u, sanitizeUrl: () => c });
                var n = /^([^\w]*)(javascript|data|vbscript)/im,
                    i = /&#(\w+)(^\w|;)?/g,
                    o = /&(newline|tab);/gi,
                    a = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                    s = /^.+(:|&colon;)/gim,
                    l = [".", "/"],
                    u = "about:blank";
                function c(e) {
                    if (!e) return u;
                    var t = e
                        .replace(a, "")
                        .replace(i, function (e, t) {
                            return String.fromCharCode(t);
                        })
                        .replace(o, "")
                        .replace(a, "")
                        .trim();
                    if (!t) return u;
                    if (l.indexOf(t[0]) > -1) return t;
                    var r = t.match(s);
                    if (!r) return t;
                    var c = r[0];
                    return n.test(c) ? u : t;
                }
            },
            (e, t, r) => {
                r.r(t),
                    r.d(t, {
                        AudioAssetWrapper: () => h,
                        AudioWrapper: () => u,
                        CustomFileAssetLoaderWrapper: () => f,
                        FileAssetWrapper: () => d,
                        FileFinalizer: () => o,
                        FontAssetWrapper: () => m,
                        FontWrapper: () => c,
                        ImageAssetWrapper: () => p,
                        ImageWrapper: () => l,
                        createFinalization: () => g,
                        finalizationRegistry: () => y,
                    });
                var n,
                    i =
                        ((n = function (e, t) {
                            return (n =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                                })(e, t);
                        }),
                        function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                            function r() {
                                this.constructor = e;
                            }
                            n(e, t),
                                (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
                        }),
                    o = (function () {
                        function e(e) {
                            (this.selfUnref = !1), (this._file = e);
                        }
                        return (
                            (e.prototype.unref = function () {
                                this._file && this._file.unref();
                            }),
                            e
                        );
                    })(),
                    a = (function () {
                        function e(e) {
                            this._finalizableObject = e;
                        }
                        return (
                            (e.prototype.unref = function () {
                                this._finalizableObject.unref();
                            }),
                            e
                        );
                    })(),
                    s = (function () {
                        function e() {
                            this.selfUnref = !1;
                        }
                        return (e.prototype.unref = function () {}), e;
                    })(),
                    l = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeImage = t), r;
                        }
                        return (
                            i(t, e),
                            Object.defineProperty(t.prototype, "nativeImage", {
                                get: function () {
                                    return this._nativeImage;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.unref = function () {
                                this.selfUnref && this._nativeImage.unref();
                            }),
                            t
                        );
                    })(s),
                    u = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeAudio = t), r;
                        }
                        return (
                            i(t, e),
                            Object.defineProperty(t.prototype, "nativeAudio", {
                                get: function () {
                                    return this._nativeAudio;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.unref = function () {
                                this.selfUnref && this._nativeAudio.unref();
                            }),
                            t
                        );
                    })(s),
                    c = (function (e) {
                        function t(t) {
                            var r = e.call(this) || this;
                            return (r._nativeFont = t), r;
                        }
                        return (
                            i(t, e),
                            Object.defineProperty(t.prototype, "nativeFont", {
                                get: function () {
                                    return this._nativeFont;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.unref = function () {
                                this.selfUnref && this._nativeFont.unref();
                            }),
                            t
                        );
                    })(s),
                    f = (function () {
                        function e(e, t) {
                            (this._assetLoaderCallback = t),
                                (this.assetLoader = new e.CustomFileAssetLoader({
                                    loadContents: this.loadContents.bind(this),
                                }));
                        }
                        return (
                            (e.prototype.loadContents = function (e, t) {
                                var r;
                                if (e.isImage) r = new p(e);
                                else if (e.isAudio) r = new h(e);
                                else {
                                    if (!e.isFont) return !1;
                                    r = new m(e);
                                }
                                return this._assetLoaderCallback(r, t);
                            }),
                            e
                        );
                    })(),
                    d = (function () {
                        function e(e) {
                            this._nativeFileAsset = e;
                        }
                        return (
                            (e.prototype.decode = function (e) {
                                this._nativeFileAsset.decode(e);
                            }),
                            Object.defineProperty(e.prototype, "name", {
                                get: function () {
                                    return this._nativeFileAsset.name;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "fileExtension", {
                                get: function () {
                                    return this._nativeFileAsset.fileExtension;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "uniqueFilename", {
                                get: function () {
                                    return this._nativeFileAsset.uniqueFilename;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isAudio", {
                                get: function () {
                                    return this._nativeFileAsset.isAudio;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isImage", {
                                get: function () {
                                    return this._nativeFileAsset.isImage;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "isFont", {
                                get: function () {
                                    return this._nativeFileAsset.isFont;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "cdnUuid", {
                                get: function () {
                                    return this._nativeFileAsset.cdnUuid;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "nativeFileAsset", {
                                get: function () {
                                    return this._nativeFileAsset;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            e
                        );
                    })(),
                    p = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            i(t, e),
                            (t.prototype.setRenderImage = function (e) {
                                this._nativeFileAsset.setRenderImage(e.nativeImage);
                            }),
                            t
                        );
                    })(d),
                    h = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            i(t, e),
                            (t.prototype.setAudioSource = function (e) {
                                this._nativeFileAsset.setAudioSource(e.nativeAudio);
                            }),
                            t
                        );
                    })(d),
                    m = (function (e) {
                        function t() {
                            return (null !== e && e.apply(this, arguments)) || this;
                        }
                        return (
                            i(t, e),
                            (t.prototype.setFont = function (e) {
                                this._nativeFileAsset.setFont(e.nativeFont);
                            }),
                            t
                        );
                    })(d),
                    v = (function () {
                        function e(e) {}
                        return (
                            (e.prototype.register = function (e) {
                                e.selfUnref = !0;
                            }),
                            (e.prototype.unregister = function (e) {}),
                            e
                        );
                    })(),
                    y = new ("u" > typeof FinalizationRegistry ? FinalizationRegistry : v)(function (e) {
                        null == e || e.unref();
                    }),
                    g = function (e, t) {
                        var r = new a(t);
                        y.register(e, r);
                    };
            },
            (e, t, r) => {
                r.r(t), r.d(t, { RiveFont: () => i });
                var n = r(3),
                    i = (function () {
                        function e() {}
                        return (
                            (e.setFallbackFontCallback = function (t) {
                                (e._fallbackFontCallback = null != t ? t : null), e._wireFallbackProc();
                            }),
                            (e._fontToPtr = function (e) {
                                if (null == e) return null;
                                var t,
                                    r = e.nativeFont,
                                    n = null == (t = null == r ? void 0 : r.ptr) ? void 0 : t.call(r);
                                return null != n ? n : null;
                            }),
                            (e._getFallbackPtr = function (t, r) {
                                return r < 0 || r >= t.length ? null : e._fontToPtr(t[r]);
                            }),
                            (e._wireFallbackProc = function () {
                                n.RuntimeLoader.getInstance(function (t) {
                                    var r = e._fallbackFontCallback;
                                    r
                                        ? t.setFallbackFontCallback(function (t, n, i) {
                                              var o = r(t, i);
                                              return o
                                                  ? Array.isArray(o)
                                                      ? e._getFallbackPtr(o, n)
                                                      : 0 === n
                                                        ? e._fontToPtr(o)
                                                        : null
                                                  : null;
                                          })
                                        : t.setFallbackFontCallback(null);
                                });
                            }),
                            (e._fallbackFontCallback = null),
                            e
                        );
                    })();
            },
        ],
        eh = {};
    function em(e) {
        var t = eh[e];
        if (void 0 !== t) return t.exports;
        var r = (eh[e] = { exports: {} });
        return ep[e](r, r.exports, em), r.exports;
    }
    (em.d = (e, t) => {
        for (var r in t) em.o(t, r) && !em.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
        (em.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (em.r = (e) => {
            "u" > typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        });
    var ev = {};
    return (
        em.r(ev),
        em.d(ev, {
            Alignment: () => t,
            DataEnum: () => G,
            DataType: () => l,
            DrawOptimizationOptions: () => r,
            EventType: () => o,
            Fit: () => e,
            Layout: () => E,
            LoopType: () => a,
            Rive: () => z,
            RiveEventType: () => i,
            RiveFile: () => U,
            RiveFont: () => p.RiveFont,
            RuntimeLoader: () => f.RuntimeLoader,
            SemanticMode: () => d.SemanticMode,
            StateMachineInput: () => C,
            StateMachineInputType: () => n,
            Testing: () => eu,
            ViewModel: () => H,
            ViewModelInstance: () => Y,
            ViewModelInstanceArtboard: () => ea,
            ViewModelInstanceAssetFont: () => eo,
            ViewModelInstanceAssetImage: () => ei,
            ViewModelInstanceBoolean: () => Z,
            ViewModelInstanceColor: () => en,
            ViewModelInstanceEnum: () => et,
            ViewModelInstanceList: () => er,
            ViewModelInstanceNumber: () => Q,
            ViewModelInstanceString: () => J,
            ViewModelInstanceTrigger: () => ee,
            ViewModelInstanceValue: () => X,
            decodeAudio: () => ec,
            decodeFont: () => ed,
            decodeImage: () => ef,
        }),
        (c = em(1)),
        (f = em(3)),
        (d = em(6)),
        (p = em(10)),
        (h = function (e, t) {
            return (h =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                })(e, t);
        }),
        (m = function (e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
                this.constructor = e;
            }
            h(e, t), (e.prototype = null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
        }),
        (v = function () {
            return (v =
                Object.assign ||
                function (e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }).apply(this, arguments);
        }),
        (y = function (e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
                function a(e) {
                    try {
                        l(n.next(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function s(e) {
                    try {
                        l(n.throw(e));
                    } catch (e) {
                        o(e);
                    }
                }
                function l(e) {
                    var t;
                    e.done
                        ? i(e.value)
                        : ((t = e.value) instanceof r
                              ? t
                              : new r(function (e) {
                                    e(t);
                                })
                          ).then(a, s);
                }
                l((n = n.apply(e, t || [])).next());
            });
        }),
        (g = function (e, t) {
            var r,
                n,
                i,
                o = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: [],
                },
                a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return (
                (a.next = s(0)),
                (a.throw = s(1)),
                (a.return = s(2)),
                "function" == typeof Symbol &&
                    (a[Symbol.iterator] = function () {
                        return this;
                    }),
                a
            );
            function s(s) {
                return function (l) {
                    var u = [s, l];
                    if (r) throw TypeError("Generator is already executing.");
                    for (; a && ((a = 0), u[0] && (o = 0)), o; )
                        try {
                            if (
                                ((r = 1),
                                n &&
                                    (i =
                                        2 & u[0]
                                            ? n.return
                                            : u[0]
                                              ? n.throw || ((i = n.return) && i.call(n), 0)
                                              : n.next) &&
                                    !(i = i.call(n, u[1])).done)
                            )
                                return i;
                            switch (((n = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                                case 0:
                                case 1:
                                    i = u;
                                    break;
                                case 4:
                                    return o.label++, { value: u[1], done: !1 };
                                case 5:
                                    o.label++, (n = u[1]), (u = [0]);
                                    continue;
                                case 7:
                                    (u = o.ops.pop()), o.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                                        (6 === u[0] || 2 === u[0])
                                    ) {
                                        o = 0;
                                        continue;
                                    }
                                    if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                                        o.label = u[1];
                                        break;
                                    }
                                    if (6 === u[0] && o.label < i[1]) {
                                        (o.label = i[1]), (i = u);
                                        break;
                                    }
                                    if (i && o.label < i[2]) {
                                        (o.label = i[2]), o.ops.push(u);
                                        break;
                                    }
                                    i[2] && o.ops.pop(), o.trys.pop();
                                    continue;
                            }
                            u = t.call(e, o);
                        } catch (e) {
                            (u = [6, e]), (n = 0);
                        } finally {
                            r = i = 0;
                        }
                    if (5 & u[0]) throw u[1];
                    return { value: u[0] ? u[1] : void 0, done: !0 };
                };
            }
        }),
        (b = function (e, t, r) {
            if (r || 2 == arguments.length)
                for (var n, i = 0, o = t.length; i < o; i++)
                    (!n && i in t) || (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
            return e.concat(n || Array.prototype.slice.call(t));
        }),
        (w = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.isHandledError = !0), t;
            }
            return m(t, e), t;
        })(Error)),
        ((_ = e || (e = {})).Cover = "cover"),
        (_.Contain = "contain"),
        (_.Fill = "fill"),
        (_.FitWidth = "fitWidth"),
        (_.FitHeight = "fitHeight"),
        (_.None = "none"),
        (_.ScaleDown = "scaleDown"),
        (_.Layout = "layout"),
        ((S = t || (t = {})).Center = "center"),
        (S.TopLeft = "topLeft"),
        (S.TopCenter = "topCenter"),
        (S.TopRight = "topRight"),
        (S.CenterLeft = "centerLeft"),
        (S.CenterRight = "centerRight"),
        (S.BottomLeft = "bottomLeft"),
        (S.BottomCenter = "bottomCenter"),
        (S.BottomRight = "bottomRight"),
        ((x = r || (r = {})).AlwaysDraw = "alwaysDraw"),
        (x.DrawOnChanged = "drawOnChanged"),
        (E = (function () {
            function r(r) {
                var n, i, o, a, s, l, u;
                (this.fit = null != (n = null == r ? void 0 : r.fit) ? n : e.Contain),
                    (this.alignment = null != (i = null == r ? void 0 : r.alignment) ? i : t.Center),
                    (this.layoutScaleFactor = null != (o = null == r ? void 0 : r.layoutScaleFactor) ? o : 1),
                    (this.minX = null != (a = null == r ? void 0 : r.minX) ? a : 0),
                    (this.minY = null != (s = null == r ? void 0 : r.minY) ? s : 0),
                    (this.maxX = null != (l = null == r ? void 0 : r.maxX) ? l : 0),
                    (this.maxY = null != (u = null == r ? void 0 : r.maxY) ? u : 0);
            }
            return (
                (r.new = function (e) {
                    var t = e.fit,
                        n = e.alignment,
                        i = e.minX,
                        o = e.minY,
                        a = e.maxX,
                        s = e.maxY;
                    return (
                        console.warn("This function is deprecated: please use `new Layout({})` instead"),
                        new r({ fit: t, alignment: n, minX: i, minY: o, maxX: a, maxY: s })
                    );
                }),
                (r.prototype.copyWith = function (e) {
                    var t = e.fit,
                        n = e.alignment,
                        i = e.layoutScaleFactor,
                        o = e.minX,
                        a = e.minY,
                        s = e.maxX,
                        l = e.maxY;
                    return new r({
                        fit: null != t ? t : this.fit,
                        alignment: null != n ? n : this.alignment,
                        layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                        minX: null != o ? o : this.minX,
                        minY: null != a ? a : this.minY,
                        maxX: null != s ? s : this.maxX,
                        maxY: null != l ? l : this.maxY,
                    });
                }),
                (r.prototype.runtimeFit = function (t) {
                    var r;
                    return this.cachedRuntimeFit
                        ? this.cachedRuntimeFit
                        : ((r =
                              this.fit === e.Cover
                                  ? t.Fit.cover
                                  : this.fit === e.Contain
                                    ? t.Fit.contain
                                    : this.fit === e.Fill
                                      ? t.Fit.fill
                                      : this.fit === e.FitWidth
                                        ? t.Fit.fitWidth
                                        : this.fit === e.FitHeight
                                          ? t.Fit.fitHeight
                                          : this.fit === e.ScaleDown
                                            ? t.Fit.scaleDown
                                            : this.fit === e.Layout
                                              ? t.Fit.layout
                                              : t.Fit.none),
                          (this.cachedRuntimeFit = r),
                          r);
                }),
                (r.prototype.runtimeAlignment = function (e) {
                    var r;
                    return this.cachedRuntimeAlignment
                        ? this.cachedRuntimeAlignment
                        : ((r =
                              this.alignment === t.TopLeft
                                  ? e.Alignment.topLeft
                                  : this.alignment === t.TopCenter
                                    ? e.Alignment.topCenter
                                    : this.alignment === t.TopRight
                                      ? e.Alignment.topRight
                                      : this.alignment === t.CenterLeft
                                        ? e.Alignment.centerLeft
                                        : this.alignment === t.CenterRight
                                          ? e.Alignment.centerRight
                                          : this.alignment === t.BottomLeft
                                            ? e.Alignment.bottomLeft
                                            : this.alignment === t.BottomCenter
                                              ? e.Alignment.bottomCenter
                                              : this.alignment === t.BottomRight
                                                ? e.Alignment.bottomRight
                                                : e.Alignment.center),
                          (this.cachedRuntimeAlignment = r),
                          r);
                }),
                r
            );
        })()),
        ((k = n || (n = {}))[(k.Number = 56)] = "Number"),
        (k[(k.Trigger = 58)] = "Trigger"),
        (k[(k.Boolean = 59)] = "Boolean"),
        (C = (function () {
            function e(e, t) {
                (this.type = e), (this.runtimeInput = t);
            }
            return (
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this.runtimeInput.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "value", {
                    get: function () {
                        return this.runtimeInput.value;
                    },
                    set: function (e) {
                        this.runtimeInput.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.fire = function () {
                    this.type === n.Trigger && this.runtimeInput.fire();
                }),
                (e.prototype.delete = function () {
                    this.runtimeInput = null;
                }),
                e
            );
        })()),
        ((T = i || (i = {}))[(T.General = 128)] = "General"),
        (T[(T.OpenUrl = 131)] = "OpenUrl"),
        (P = (function (e) {
            function t(t, r) {
                var n = e.call(this, !1) || this;
                return (n.nativeArtboard = t), (n.file = r), n;
            }
            return m(t, e), t;
        })(
            (M = function (e) {
                (this.isBindableArtboard = !1), (this.isBindableArtboard = e);
            }),
        )),
        (A = (function (e) {
            function t(t) {
                var r = e.call(this, !0) || this;
                return (r.selfUnref = !1), (r.nativeArtboard = t), r;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "viewModel", {
                    set: function (e) {
                        this.nativeViewModel = e.nativeInstance;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.destroy = function () {
                    var e;
                    this.selfUnref && (this.nativeArtboard.unref(), null == (e = this.nativeViewModel) || e.unref());
                }),
                t
            );
        })(M)),
        (I = (function () {
            function e(e, t, r, n) {
                (this.stateMachine = e),
                    (this.playing = r),
                    (this.artboard = n),
                    (this.inputs = []),
                    (this.instance = new t.StateMachineInstance(e, n)),
                    this.initInputs(t);
            }
            return (
                Object.defineProperty(e.prototype, "hasFocusNodes", {
                    get: function () {
                        return this.instance.hasFocusNodes();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this.stateMachine.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "statesChanged", {
                    get: function () {
                        for (var e = [], t = 0; t < this.instance.stateChangedCount(); t++)
                            e.push(this.instance.stateChangedNameByIndex(t));
                        return e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.advance = function (e) {
                    this.instance.advance(e);
                }),
                (e.prototype.advanceAndApply = function (e) {
                    this.instance.advanceAndApply(e);
                }),
                (e.prototype.enableSemantics = function () {
                    this.instance.enableSemantics();
                }),
                (e.prototype.drainSemanticsDiff = function () {
                    return this.instance.drainSemanticsDiff();
                }),
                (e.prototype.fireSemanticAction = function (e, t) {
                    this.instance.fireSemanticAction(e, t);
                }),
                (e.prototype.focusSemanticNode = function (e) {
                    return this.instance.focusSemanticNode(e);
                }),
                (e.prototype.reportedEventCount = function () {
                    return this.instance.reportedEventCount();
                }),
                (e.prototype.reportedEventAt = function (e) {
                    return this.instance.reportedEventAt(e);
                }),
                (e.prototype.initInputs = function (e) {
                    for (var t = 0; t < this.instance.inputCount(); t++) {
                        var r = this.instance.input(t);
                        this.inputs.push(this.mapRuntimeInput(r, e));
                    }
                }),
                (e.prototype.mapRuntimeInput = function (e, t) {
                    return e.type === t.SMIInput.bool
                        ? new C(n.Boolean, e.asBool())
                        : e.type === t.SMIInput.number
                          ? new C(n.Number, e.asNumber())
                          : e.type === t.SMIInput.trigger
                            ? new C(n.Trigger, e.asTrigger())
                            : void 0;
                }),
                (e.prototype.cleanup = function () {
                    this.inputs.forEach(function (e) {
                        e.delete();
                    }),
                        (this.inputs.length = 0),
                        this.instance.delete();
                }),
                (e.prototype.bindViewModelInstance = function (e) {
                    null != e.runtimeInstance && this.instance.bindViewModelInstance(e.runtimeInstance);
                }),
                (e.prototype.focusState = function () {
                    return this.instance.focusState();
                }),
                (e.prototype.clearFocus = function () {
                    this.instance.clearFocus();
                }),
                e
            );
        })()),
        (O = (function () {
            function e(e, t, r, n, i) {
                void 0 === n && (n = []),
                    void 0 === i && (i = []),
                    (this.runtime = e),
                    (this.artboard = t),
                    (this.eventManager = r),
                    (this.animations = n),
                    (this.stateMachines = i);
            }
            return (
                (e.prototype.add = function (e, t, r, n) {
                    if ((void 0 === r && (r = !0), void 0 === n && (n = !1), 0 === (e = el(e)).length))
                        this.animations.forEach(function (e) {
                            return (e.playing = t);
                        }),
                            this.stateMachines.forEach(function (e) {
                                return (e.playing = t);
                            });
                    else
                        for (
                            var i = this.animations.map(function (e) {
                                    return e.name;
                                }),
                                a = this.stateMachines.map(function (e) {
                                    return e.name;
                                }),
                                s = 0;
                            s < e.length;
                            s++
                        ) {
                            var l = i.indexOf(e[s]),
                                u = a.indexOf(e[s]);
                            if (l >= 0 || u >= 0)
                                l >= 0 ? (this.animations[l].playing = t) : (this.stateMachines[u].playing = t);
                            else {
                                var f = this.artboard.animationByName(e[s]);
                                if (f) {
                                    var d = new c.Animation(f, this.artboard, this.runtime, t);
                                    d.advance(0), d.apply(1), this.animations.push(d);
                                } else {
                                    var p = this.artboard.stateMachineByName(e[s]);
                                    if (p) {
                                        var h = new I(p, this.runtime, t, this.artboard);
                                        n && h.enableSemantics(), this.stateMachines.push(h);
                                    }
                                }
                            }
                        }
                    return (
                        r &&
                            (t
                                ? this.eventManager.fire({ type: o.Play, data: this.playing })
                                : this.eventManager.fire({ type: o.Pause, data: this.paused })),
                        t ? this.playing : this.paused
                    );
                }),
                (e.prototype.initLinearAnimations = function (e, t, r) {
                    void 0 === r && (r = !1);
                    for (
                        var n = this.animations.map(function (e) {
                                return e.name;
                            }),
                            i = 0;
                        i < e.length;
                        i++
                    ) {
                        var o = n.indexOf(e[i]);
                        if (o >= 0) this.animations[o].playing = t;
                        else {
                            var a = this.artboard.animationByName(e[i]);
                            if (a) {
                                var s = new c.Animation(a, this.artboard, this.runtime, t);
                                s.advance(0), s.apply(1), this.animations.push(s);
                            } else if (r) throw new w("State Machine with name ".concat(e[i], " not found"));
                            else console.error("Animation with name ".concat(e[i], " not found."));
                        }
                    }
                }),
                (e.prototype.initStateMachines = function (e, t, r) {
                    for (
                        var n = this.stateMachines.map(function (e) {
                                return e.name;
                            }),
                            i = 0;
                        i < e.length;
                        i++
                    ) {
                        var o = n.indexOf(e[i]);
                        if (o >= 0) this.stateMachines[o].playing = t;
                        else {
                            var a = this.artboard.stateMachineByName(e[i]);
                            if (a) {
                                var s = new I(a, this.runtime, t, this.artboard);
                                r && s.enableSemantics(), this.stateMachines.push(s);
                            } else
                                console.warn(
                                    "State Machine with name ".concat(
                                        e[i],
                                        " not found. Falling back to find an animation with the same name.",
                                    ),
                                ),
                                    this.initLinearAnimations([e[i]], t, !0);
                        }
                    }
                }),
                (e.prototype.play = function (e) {
                    return this.add(e, !0);
                }),
                (e.prototype.advanceIfPaused = function () {
                    this.stateMachines.forEach(function (e) {
                        e.playing || e.advanceAndApply(0);
                    });
                }),
                (e.prototype.pause = function (e) {
                    return this.add(e, !1);
                }),
                (e.prototype.scrub = function (e, t) {
                    var r = this.animations.filter(function (t) {
                        return e.includes(t.name);
                    });
                    return (
                        r.forEach(function (e) {
                            return (e.scrubTo = t);
                        }),
                        r.map(function (e) {
                            return e.name;
                        })
                    );
                }),
                Object.defineProperty(e.prototype, "playing", {
                    get: function () {
                        return this.animations
                            .filter(function (e) {
                                return e.playing;
                            })
                            .map(function (e) {
                                return e.name;
                            })
                            .concat(
                                this.stateMachines
                                    .filter(function (e) {
                                        return e.playing;
                                    })
                                    .map(function (e) {
                                        return e.name;
                                    }),
                            );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "paused", {
                    get: function () {
                        return this.animations
                            .filter(function (e) {
                                return !e.playing;
                            })
                            .map(function (e) {
                                return e.name;
                            })
                            .concat(
                                this.stateMachines
                                    .filter(function (e) {
                                        return !e.playing;
                                    })
                                    .map(function (e) {
                                        return e.name;
                                    }),
                            );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.stop = function (e) {
                    var t = this;
                    e = el(e);
                    var r = [];
                    if (0 === e.length)
                        (r = this.animations
                            .map(function (e) {
                                return e.name;
                            })
                            .concat(
                                this.stateMachines.map(function (e) {
                                    return e.name;
                                }),
                            )),
                            this.animations.forEach(function (e) {
                                return e.cleanup();
                            }),
                            this.stateMachines.forEach(function (e) {
                                return e.cleanup();
                            }),
                            this.animations.splice(0, this.animations.length),
                            this.stateMachines.splice(0, this.stateMachines.length);
                    else {
                        var n = this.animations.filter(function (t) {
                            return e.includes(t.name);
                        });
                        n.forEach(function (e) {
                            e.cleanup(), t.animations.splice(t.animations.indexOf(e), 1);
                        });
                        var i = this.stateMachines.filter(function (t) {
                            return e.includes(t.name);
                        });
                        i.forEach(function (e) {
                            e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                        }),
                            (r = n
                                .map(function (e) {
                                    return e.name;
                                })
                                .concat(
                                    i.map(function (e) {
                                        return e.name;
                                    }),
                                ));
                    }
                    return this.eventManager.fire({ type: o.Stop, data: r }), r;
                }),
                Object.defineProperty(e.prototype, "isPlaying", {
                    get: function () {
                        return (
                            this.animations.reduce(function (e, t) {
                                return e || t.playing;
                            }, !1) ||
                            this.stateMachines.reduce(function (e, t) {
                                return e || t.playing;
                            }, !1)
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isPaused", {
                    get: function () {
                        return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "isStopped", {
                    get: function () {
                        return 0 === this.animations.length && 0 === this.stateMachines.length;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.atLeastOne = function (e, t, r) {
                    var n;
                    return (
                        void 0 === t && (t = !0),
                        void 0 === r && (r = !1),
                        0 === this.animations.length &&
                            0 === this.stateMachines.length &&
                            (this.artboard.animationCount() > 0
                                ? this.add([(n = this.artboard.animationByIndex(0).name)], e, t)
                                : this.artboard.stateMachineCount() > 0 &&
                                  this.add([(n = this.artboard.stateMachineByIndex(0).name)], e, t, r)),
                        n
                    );
                }),
                (e.prototype.handleLooping = function () {
                    for (
                        var e = 0,
                            t = this.animations.filter(function (e) {
                                return e.playing;
                            });
                        e < t.length;
                        e++
                    ) {
                        var r = t[e];
                        0 === r.loopValue && r.loopCount
                            ? ((r.loopCount = 0), this.stop(r.name))
                            : 1 === r.loopValue && r.loopCount
                              ? (this.eventManager.fire({ type: o.Loop, data: { animation: r.name, type: a.Loop } }),
                                (r.loopCount = 0))
                              : 2 === r.loopValue &&
                                r.loopCount > 1 &&
                                (this.eventManager.fire({
                                    type: o.Loop,
                                    data: { animation: r.name, type: a.PingPong },
                                }),
                                (r.loopCount = 0));
                    }
                }),
                (e.prototype.handleStateChanges = function () {
                    for (
                        var e = [],
                            t = 0,
                            r = this.stateMachines.filter(function (e) {
                                return e.playing;
                            });
                        t < r.length;
                        t++
                    ) {
                        var n = r[t];
                        e.push.apply(e, n.statesChanged);
                    }
                    e.length > 0 && this.eventManager.fire({ type: o.StateChange, data: e });
                }),
                (e.prototype.handleAdvancing = function (e) {
                    this.eventManager.fire({ type: o.Advance, data: e });
                }),
                e
            );
        })()),
        ((D = o || (o = {})).Load = "load"),
        (D.LoadError = "loaderror"),
        (D.Play = "play"),
        (D.Pause = "pause"),
        (D.Stop = "stop"),
        (D.Loop = "loop"),
        (D.Draw = "draw"),
        (D.Advance = "advance"),
        (D.StateChange = "statechange"),
        (D.RiveEvent = "riveevent"),
        (D.AudioStatusChange = "audiostatuschange"),
        ((R = a || (a = {})).OneShot = "oneshot"),
        (R.Loop = "loop"),
        (R.PingPong = "pingpong"),
        (L = (function () {
            function e(e) {
                void 0 === e && (e = []), (this.listeners = e);
            }
            return (
                (e.prototype.getListeners = function (e) {
                    return this.listeners.filter(function (t) {
                        return t.type === e;
                    });
                }),
                (e.prototype.add = function (e) {
                    this.listeners.includes(e) || this.listeners.push(e);
                }),
                (e.prototype.remove = function (e) {
                    for (var t = 0; t < this.listeners.length; t++) {
                        var r = this.listeners[t];
                        if (r.type === e.type && r.callback === e.callback) {
                            this.listeners.splice(t, 1);
                            break;
                        }
                    }
                }),
                (e.prototype.removeAll = function (e) {
                    var t = this;
                    e
                        ? this.listeners
                              .filter(function (t) {
                                  return t.type === e;
                              })
                              .forEach(function (e) {
                                  return t.remove(e);
                              })
                        : this.listeners.splice(0, this.listeners.length);
                }),
                (e.prototype.fire = function (e) {
                    this.getListeners(e.type).forEach(function (t) {
                        return t.callback(e);
                    });
                }),
                e
            );
        })()),
        (F = (function () {
            function e(e) {
                (this.eventManager = e), (this.queue = []);
            }
            return (
                (e.prototype.add = function (e) {
                    this.queue.push(e);
                }),
                (e.prototype.process = function () {
                    for (; this.queue.length > 0; ) {
                        var e = this.queue.shift();
                        (null == e ? void 0 : e.action) && e.action(),
                            (null == e ? void 0 : e.event) && this.eventManager.fire(e.event);
                    }
                }),
                e
            );
        })()),
        ((N = s || (s = {}))[(N.AVAILABLE = 0)] = "AVAILABLE"),
        (N[(N.UNAVAILABLE = 1)] = "UNAVAILABLE"),
        (j = new ((function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._started = !1), (t._enabled = !1), (t._status = s.UNAVAILABLE), t;
            }
            return (
                m(t, e),
                (t.prototype.delay = function (e) {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (t) {
                            return [
                                2,
                                new Promise(function (t) {
                                    return setTimeout(t, e);
                                }),
                            ];
                        });
                    });
                }),
                (t.prototype.timeout = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (e) {
                            return [
                                2,
                                new Promise(function (e, t) {
                                    return setTimeout(t, 50);
                                }),
                            ];
                        });
                    });
                }),
                (t.prototype.reportToListeners = function () {
                    this.fire({ type: o.AudioStatusChange }), this.removeAll();
                }),
                (t.prototype.enableAudio = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (e) {
                            return (
                                this._enabled ||
                                    ((this._enabled = !0), (this._status = s.AVAILABLE), this.reportToListeners()),
                                [2]
                            );
                        });
                    });
                }),
                (t.prototype.testAudio = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    if (this._status !== s.UNAVAILABLE || null === this._audioContext) return [3, 4];
                                    e.label = 1;
                                case 1:
                                    return (
                                        e.trys.push([1, 3, , 4]),
                                        [4, Promise.race([this._audioContext.resume(), this.timeout()])]
                                    );
                                case 2:
                                    return e.sent(), this.enableAudio(), [3, 4];
                                case 3:
                                    return e.sent(), [3, 4];
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype._establishAudio = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (e) {
                            switch (e.label) {
                                case 0:
                                    if (this._started) return [3, 5];
                                    if (((this._started = !0), "u" > typeof window)) return [3, 1];
                                    return this.enableAudio(), [3, 5];
                                case 1:
                                    (this._audioContext = new AudioContext()),
                                        this.listenForUserAction(),
                                        (e.label = 2);
                                case 2:
                                    if (this._status !== s.UNAVAILABLE) return [3, 5];
                                    return [4, this.testAudio()];
                                case 3:
                                    return e.sent(), [4, this.delay(1e3)];
                                case 4:
                                    return e.sent(), [3, 2];
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype.listenForUserAction = function () {
                    var e = this;
                    document.addEventListener(
                        "pointerdown",
                        function () {
                            return y(e, void 0, void 0, function () {
                                return g(this, function (e) {
                                    return this.enableAudio(), [2];
                                });
                            });
                        },
                        { once: !0 },
                    );
                }),
                (t.prototype.establishAudio = function () {
                    return y(this, void 0, void 0, function () {
                        return g(this, function (e) {
                            return this._establishAudio(), [2];
                        });
                    });
                }),
                Object.defineProperty(t.prototype, "systemVolume", {
                    get: function () {
                        return this._status === s.UNAVAILABLE ? (this.testAudio(), 0) : 1;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "status", {
                    get: function () {
                        return this._status;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                t
            );
        })(L))()),
        (B = (function () {
            function e() {}
            return (
                (e.prototype.observe = function () {}),
                (e.prototype.unobserve = function () {}),
                (e.prototype.disconnect = function () {}),
                e
            );
        })()),
        (K = globalThis.ResizeObserver || B),
        ($ = new ((function () {
            function e() {
                var e = this;
                (this._elementsMap = new Map()),
                    (this._onObservedEntry = function (t) {
                        var r = e._elementsMap.get(t.target);
                        null !== r
                            ? r.onResize(0 == t.target.clientWidth || 0 == t.target.clientHeight)
                            : e._resizeObserver.unobserve(t.target);
                    }),
                    (this._onObserved = function (t) {
                        t.forEach(e._onObservedEntry);
                    }),
                    (this._resizeObserver = new K(this._onObserved));
            }
            return (
                (e.prototype.add = function (e, t) {
                    var r = { onResize: t, element: e };
                    return this._elementsMap.set(e, r), this._resizeObserver.observe(e), r;
                }),
                (e.prototype.remove = function (e) {
                    this._resizeObserver.unobserve(e.element), this._elementsMap.delete(e.element);
                }),
                e
            );
        })())()),
        (V = 0),
        (U = (function () {
            function e(e) {
                (this.enableRiveAssetCDN = !0),
                    (this.enablePerfMarks = !1),
                    (this.referenceCount = 0),
                    (this.destroyed = !1),
                    (this.selfUnref = !1),
                    (this.bindableArtboards = []),
                    (this.src = e.src),
                    (this.buffer = e.buffer),
                    e.assetLoader && (this.assetLoader = e.assetLoader),
                    (this.enableRiveAssetCDN = "boolean" != typeof e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                    (this.enablePerfMarks = !!e.enablePerfMarks),
                    this.enablePerfMarks && (f.RuntimeLoader.enablePerfMarks = !0),
                    (this.eventManager = new L()),
                    e.onLoad && this.on(o.Load, e.onLoad),
                    e.onLoadError && this.on(o.LoadError, e.onLoadError);
            }
            return (
                (e.prototype.releaseFile = function () {
                    var e;
                    this.selfUnref && (null == (e = this.file) || e.unref()), (this.file = null);
                }),
                (e.prototype.releaseBindableArtboards = function () {
                    this.bindableArtboards.forEach(function (e) {
                        return e.destroy();
                    });
                }),
                (e.prototype.initData = function () {
                    return y(this, void 0, void 0, function () {
                        var t, r, n, i, a;
                        return g(this, function (s) {
                            switch (s.label) {
                                case 0:
                                    if (!(this.src && !this.buffer)) return [3, 4];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), (t = this), [4, es(this.src)];
                                case 2:
                                    return (t.buffer = s.sent()), [3, 4];
                                case 3:
                                    if ((r = s.sent()) instanceof Error) throw r;
                                    throw new w(e.fileLoadErrorMessage);
                                case 4:
                                    if (this.destroyed) return [2];
                                    return (
                                        this.assetLoader &&
                                            (n = new p.CustomFileAssetLoaderWrapper(this.runtime, this.assetLoader)
                                                .assetLoader),
                                        this.enablePerfMarks && performance.mark("rive:file-load:start"),
                                        (i = this),
                                        [4, this.runtime.load(new Uint8Array(this.buffer), n, this.enableRiveAssetCDN)]
                                    );
                                case 5:
                                    if (
                                        ((i.file = s.sent()),
                                        this.enablePerfMarks &&
                                            (performance.mark("rive:file-load:end"),
                                            performance.measure(
                                                "rive:file-load",
                                                "rive:file-load:start",
                                                "rive:file-load:end",
                                            )),
                                        (a = new p.FileFinalizer(this.file)),
                                        p.finalizationRegistry.register(this, a),
                                        this.destroyed)
                                    )
                                        return this.releaseFile(), [2];
                                    return (
                                        null !== this.file
                                            ? this.eventManager.fire({ type: o.Load, data: this })
                                            : this.fireLoadError(e.fileLoadErrorMessage),
                                        [2]
                                    );
                            }
                        });
                    });
                }),
                (e.prototype.loadRiveFileBytes = function () {
                    return y(this, void 0, void 0, function () {
                        var e;
                        return g(this, function (t) {
                            return (
                                this.enablePerfMarks && performance.mark("rive:fetch-riv:start"),
                                (e = this.src ? es(this.src) : Promise.resolve(this.buffer)),
                                this.enablePerfMarks &&
                                    this.src &&
                                    e.then(function () {
                                        performance.mark("rive:fetch-riv:end"),
                                            performance.measure(
                                                "rive:fetch-riv",
                                                "rive:fetch-riv:start",
                                                "rive:fetch-riv:end",
                                            );
                                    }),
                                [2, e]
                            );
                        });
                    });
                }),
                (e.prototype.loadRuntime = function () {
                    return y(this, void 0, void 0, function () {
                        var e;
                        return g(this, function (t) {
                            return (
                                this.enablePerfMarks && performance.mark("rive:await-wasm:start"),
                                (e = f.RuntimeLoader.awaitInstance()),
                                this.enablePerfMarks &&
                                    e.then(function () {
                                        performance.mark("rive:await-wasm:end"),
                                            performance.measure(
                                                "rive:await-wasm",
                                                "rive:await-wasm:start",
                                                "rive:await-wasm:end",
                                            );
                                    }),
                                [2, e]
                            );
                        });
                    });
                }),
                (e.prototype.init = function () {
                    return y(this, void 0, void 0, function () {
                        var t, r, n, i;
                        return g(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    if (!this.src && !this.buffer)
                                        return this.fireLoadError(e.missingErrorMessage), [2];
                                    o.label = 1;
                                case 1:
                                    return (
                                        o.trys.push([1, 4, , 5]),
                                        [4, Promise.all([this.loadRiveFileBytes(), this.loadRuntime()])]
                                    );
                                case 2:
                                    if (((r = (t = o.sent())[0]), (n = t[1]), this.destroyed)) return [2];
                                    return (
                                        (this.buffer = r),
                                        (this.runtime = n),
                                        this.enablePerfMarks && performance.mark("rive:init-data:start"),
                                        [4, this.initData()]
                                    );
                                case 3:
                                    return (
                                        o.sent(),
                                        this.enablePerfMarks &&
                                            (performance.mark("rive:init-data:end"),
                                            performance.measure(
                                                "rive:init-data",
                                                "rive:init-data:start",
                                                "rive:init-data:end",
                                            )),
                                        [3, 5]
                                    );
                                case 4:
                                    return (
                                        (i = o.sent()),
                                        this.fireLoadError(i instanceof Error ? i.message : e.fileLoadErrorMessage),
                                        [3, 5]
                                    );
                                case 5:
                                    return [2];
                            }
                        });
                    });
                }),
                (e.prototype.fireLoadError = function (e) {
                    throw (this.eventManager.fire({ type: o.LoadError, data: e }), new w(e));
                }),
                (e.prototype.on = function (e, t) {
                    this.eventManager.add({ type: e, callback: t });
                }),
                (e.prototype.off = function (e, t) {
                    this.eventManager.remove({ type: e, callback: t });
                }),
                (e.prototype.cleanup = function () {
                    (this.referenceCount -= 1),
                        this.referenceCount <= 0 &&
                            (this.removeAllRiveEventListeners(),
                            this.releaseFile(),
                            this.releaseBindableArtboards(),
                            (this.destroyed = !0));
                }),
                (e.prototype.removeAllRiveEventListeners = function (e) {
                    this.eventManager.removeAll(e);
                }),
                (e.prototype.getInstance = function () {
                    if (null !== this.file) return (this.referenceCount += 1), this.file;
                }),
                (e.prototype.destroyIfUnused = function () {
                    this.referenceCount <= 0 && this.cleanup();
                }),
                (e.prototype.createBindableArtboard = function (e) {
                    if (null != e) {
                        var t = new A(e);
                        return (0, p.createFinalization)(t, t.nativeArtboard), this.bindableArtboards.push(t), t;
                    }
                    return null;
                }),
                (e.prototype.getArtboard = function (e) {
                    var t = this.file.artboardByName(e);
                    if (null != t) return new P(t, this);
                }),
                (e.prototype.getBindableArtboard = function (e) {
                    var t = this.file.bindableArtboardByName(e);
                    return this.createBindableArtboard(t);
                }),
                (e.prototype.getDefaultBindableArtboard = function () {
                    var e = this.file.bindableArtboardDefault();
                    return this.createBindableArtboard(e);
                }),
                (e.prototype.internalBindableArtboardFromArtboard = function (e) {
                    var t = this.file.internalBindableArtboardFromArtboard(e);
                    return this.createBindableArtboard(t);
                }),
                (e.prototype.viewModelByName = function (e) {
                    var t = this.file.viewModelByName(e);
                    return null !== t ? new H(t) : null;
                }),
                (e.prototype.globalViewModelNames = function () {
                    return this.file.globalViewModelNames();
                }),
                (e.missingErrorMessage = "Rive source file or data buffer required"),
                (e.fileLoadErrorMessage = "The file failed to load"),
                e
            );
        })()),
        (z = (function () {
            function t(e) {
                var t,
                    n,
                    i,
                    a,
                    s = this;
                (this.loaded = !1),
                    (this.destroyed = !1),
                    (this._observed = null),
                    (this.readyForPlaying = !1),
                    (this.artboard = null),
                    (this.eventCleanup = null),
                    (this._keyboardInteractions = null),
                    (this.shouldDisableRiveListeners = !1),
                    (this.automaticallyHandleEvents = !1),
                    (this.dispatchPointerExit = !0),
                    (this.enableMultiTouch = !1),
                    (this.enableRiveAssetCDN = !0),
                    (this.semanticsMode = d.SemanticMode.Disabled),
                    (this.semanticsOptions = { riveCanvasLabel: "Rive animation" }),
                    (this._semanticsActive = !1),
                    (this._volume = 1),
                    (this._artboardWidth = void 0),
                    (this._artboardHeight = void 0),
                    (this._devicePixelRatioUsed = 1),
                    (this._hasZeroSize = !1),
                    (this._needsRedraw = !1),
                    (this._currentCanvasWidth = 0),
                    (this._currentCanvasHeight = 0),
                    (this._audioEventListener = null),
                    (this._boundDraw = null),
                    (this.eventTarget = e.eventTarget),
                    (this.eventCapture = null == e.eventCapture || e.eventCapture),
                    (this.listenOnDocumentBody = null != e.listenOnDocumentBody && e.listenOnDocumentBody),
                    null != e.eventTarget && (this.listenOnDocumentBody = !1),
                    (this._pageVisibilityHandler = null),
                    (this._explicitlyStoppedRendering = !1),
                    (this._viewModelInstance = null),
                    (this._globalViewModelInstances = new Map()),
                    (this._dataEnums = null),
                    (this._tabIndex = null),
                    (this._prevHasFocus = !1),
                    (this._focusOptions = { allowFocusInterrupt: !1 }),
                    (this._semanticTree = null),
                    (this._accessibilityOverlay = null),
                    (this._overlayTransformDirty = !0),
                    (this._instanceId = "".concat(V++)),
                    (this.drawOptimization = r.DrawOnChanged),
                    (this.enablePerfMarks = !1),
                    (this.durations = []),
                    (this.frameTimes = []),
                    (this.frameCount = 0),
                    (this.isTouchScrollEnabled = !1),
                    (this.onCanvasResize = function (e) {
                        var t = s._hasZeroSize !== e;
                        (s._hasZeroSize = e),
                            e
                                ? (s._layout.maxX && s._layout.maxY) || s.resizeToCanvas()
                                : t && s.resizeDrawingSurfaceToCanvas();
                    }),
                    (this.frameRequestId = null),
                    (this.renderSecondTimer = 0),
                    (this._boundDraw = this.draw.bind(this)),
                    "u" > typeof document &&
                        ((this._pageVisibilityHandler = this._onPageVisibilityChange.bind(this)),
                        document.addEventListener("visibilitychange", this._pageVisibilityHandler)),
                    (this.canvas = e.canvas),
                    e.canvas.constructor === HTMLCanvasElement &&
                        (this._observed = $.add(this.canvas, this.onCanvasResize)),
                    (this._currentCanvasWidth = this.canvas.width),
                    (this._currentCanvasHeight = this.canvas.height),
                    (this.src = e.src),
                    (this.buffer = e.buffer),
                    (this.riveFile = e.riveFile),
                    (this.layout = null != (t = e.layout) ? t : new E()),
                    (this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners),
                    (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                    (this.automaticallyHandleEvents = !!e.automaticallyHandleEvents),
                    (this.dispatchPointerExit =
                        !1 === e.dispatchPointerExit ? e.dispatchPointerExit : this.dispatchPointerExit),
                    (this.enableMultiTouch = !!e.enableMultiTouch),
                    (this.drawOptimization = null != (n = e.drawingOptions) ? n : this.drawOptimization),
                    (this.enableRiveAssetCDN = void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                    (this.enablePerfMarks = !!e.enablePerfMarks),
                    this.enablePerfMarks && (f.RuntimeLoader.enablePerfMarks = !0),
                    (this._focusOptions = null != (i = e.focusOptions) ? i : this._focusOptions),
                    (this._tabIndex = null != (a = e.tabIndex) ? a : null),
                    (this.eventManager = new L()),
                    e.onLoad && this.on(o.Load, e.onLoad),
                    e.onLoadError && this.on(o.LoadError, e.onLoadError),
                    e.onPlay && this.on(o.Play, e.onPlay),
                    e.onPause && this.on(o.Pause, e.onPause),
                    e.onStop && this.on(o.Stop, e.onStop),
                    e.onLoop && this.on(o.Loop, e.onLoop),
                    e.onStateChange && this.on(o.StateChange, e.onStateChange),
                    e.onAdvance && this.on(o.Advance, e.onAdvance),
                    e.onload && !e.onLoad && this.on(o.Load, e.onload),
                    e.onloaderror && !e.onLoadError && this.on(o.LoadError, e.onloaderror),
                    e.onplay && !e.onPlay && this.on(o.Play, e.onplay),
                    e.onpause && !e.onPause && this.on(o.Pause, e.onpause),
                    e.onstop && !e.onStop && this.on(o.Stop, e.onstop),
                    e.onloop && !e.onLoop && this.on(o.Loop, e.onloop),
                    e.onstatechange && !e.onStateChange && this.on(o.StateChange, e.onstatechange),
                    e.assetLoader && (this.assetLoader = e.assetLoader),
                    (this.taskQueue = new F(this.eventManager)),
                    this.init({
                        src: this.src,
                        buffer: this.buffer,
                        riveFile: this.riveFile,
                        autoplay: e.autoplay,
                        autoBind: e.autoBind,
                        animations: e.animations,
                        stateMachines: e.stateMachines,
                        artboard: e.artboard,
                        useOffscreenRenderer: e.useOffscreenRenderer,
                        tabIndex: e.tabIndex,
                        semanticsMode: e.semanticsMode,
                        semanticsOptions: e.semanticsOptions,
                    });
            }
            return (
                Object.defineProperty(t.prototype, "viewModelCount", {
                    get: function () {
                        return this.file.viewModelCount();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.new = function (e) {
                    return console.warn("This function is deprecated: please use `new Rive({})` instead"), new t(e);
                }),
                (t.prototype.enableSemantics = function () {
                    (this.semanticsMode = d.SemanticMode.Enabled), this.activateSemantics();
                }),
                (t.prototype.activateSemantics = function () {
                    this._semanticsActive ||
                        this.semanticsMode === d.SemanticMode.Disabled ||
                        ((this._semanticsActive = !0), this.syncSemanticsOnStateMachines());
                }),
                (t.prototype.syncSemanticsOnStateMachines = function () {
                    if (this._semanticsActive && this.animator)
                        for (var e = 0, t = this.animator.stateMachines; e < t.length; e++) t[e].enableSemantics();
                }),
                (t.prototype.cleanupSemantics = function () {
                    (this._semanticTree = null),
                        this._accessibilityOverlay &&
                            (this._accessibilityOverlay.destroy(), (this._accessibilityOverlay = null));
                }),
                (t.prototype.onSystemAudioChanged = function () {
                    this.volume = this._volume;
                }),
                (t.prototype.init = function (e) {
                    var r = this,
                        n = e.src,
                        i = e.buffer,
                        a = e.riveFile,
                        s = e.animations,
                        l = e.stateMachines,
                        u = e.artboard,
                        c = e.autoplay,
                        p = void 0 !== c && c,
                        h = e.useOffscreenRenderer,
                        m = void 0 !== h && h,
                        v = e.autoBind,
                        y = void 0 !== v && v,
                        g = e.tabIndex,
                        b = e.semanticsMode,
                        _ = e.semanticsOptions;
                    if (!this.destroyed) {
                        if (
                            ((this.src = n),
                            (this.buffer = i),
                            (this.riveFile = a),
                            (this._tabIndex = null != g ? g : null),
                            (this.semanticsMode = null != b ? b : d.SemanticMode.Disabled),
                            (this.semanticsOptions = null != _ ? _ : this.semanticsOptions),
                            !this.src && !this.buffer && !this.riveFile)
                        )
                            throw new w(t.missingErrorMessage);
                        var S = el(s),
                            x = el(l);
                        (this.loaded = !1),
                            (this.readyForPlaying = !1),
                            f.RuntimeLoader.awaitInstance()
                                .then(function (e) {
                                    if (!r.destroyed) {
                                        (r.runtime = e),
                                            r.removeRiveListeners(),
                                            r.cleanupSemantics(),
                                            r.deleteRiveRenderer(),
                                            r.enablePerfMarks && performance.mark("rive:make-renderer:start");
                                        try {
                                            if (((r.renderer = r.runtime.makeRenderer(r.canvas, m)), !r.renderer))
                                                throw Error("Renderer is null, cannot render Rive on the canvas.");
                                        } catch (e) {
                                            throw (
                                                (console.error(e),
                                                new w(
                                                    "Unable to create the renderer, your environment may not support WebGL. Try the @rive-app/canvas runtime as an alternative.",
                                                ))
                                            );
                                        }
                                        r.enablePerfMarks &&
                                            (performance.mark("rive:make-renderer:end"),
                                            performance.measure(
                                                "rive:make-renderer",
                                                "rive:make-renderer:start",
                                                "rive:make-renderer:end",
                                            )),
                                            r.canvas.width || r.canvas.height || r.resizeDrawingSurfaceToCanvas(),
                                            r
                                                .initData(u, S, x, p, y)
                                                .then(function (e) {
                                                    if (e) return r.setupRiveListeners();
                                                })
                                                .catch(function (e) {
                                                    console.error(e);
                                                });
                                    }
                                })
                                .catch(function (e) {
                                    r.eventManager.fire({ type: o.LoadError, data: e.message });
                                });
                    }
                }),
                (t.prototype.setupRiveListeners = function (e) {
                    var t = this;
                    if (
                        (this.eventCleanup && this.eventCleanup(),
                        this.cleanupKeyboardInteractions(),
                        !this.shouldDisableRiveListeners)
                    ) {
                        var r = this.animator.stateMachines
                                .filter(function (e) {
                                    return e.playing;
                                })
                                .filter(function (e) {
                                    return t.runtime.hasListeners(e.instance);
                                })
                                .map(function (e) {
                                    return e.instance;
                                }),
                            n = this.isTouchScrollEnabled,
                            i = this.dispatchPointerExit,
                            o = this.enableMultiTouch;
                        e && "isTouchScrollEnabled" in e && (n = e.isTouchScrollEnabled);
                        var a = this.canvas;
                        null != this.eventTarget && (a = this.eventTarget),
                            (this.eventCleanup = (0, p.registerTouchInteractions)({
                                canvas: a,
                                listenOnDocumentBody: this.listenOnDocumentBody,
                                eventCapture: this.eventCapture,
                                artboard: this.artboard,
                                stateMachines: r,
                                renderer: this.renderer,
                                rive: this.runtime,
                                fit: this._layout.runtimeFit(this.runtime),
                                alignment: this._layout.runtimeAlignment(this.runtime),
                                isTouchScrollEnabled: n,
                                dispatchPointerExit: i,
                                enableMultiTouch: o,
                                layoutScaleFactor: this._layout.layoutScaleFactor,
                                advanceAndDrain: this.advanceAndReportChanges.bind(this),
                            })),
                            this.ensureKeyboardInteractions();
                    }
                }),
                (t.prototype.ensureKeyboardInteractions = function () {
                    var e = this;
                    if (
                        !(this._keyboardInteractions || this.shouldDisableRiveListeners || "u" < typeof window) &&
                        this.canvas instanceof HTMLCanvasElement
                    ) {
                        var t = this.animator.stateMachines.find(function (e) {
                            return e.playing && e.hasFocusNodes;
                        });
                        if (t) {
                            var r = this.canvas.tabIndex;
                            (-1 === r || isNaN(r)) &&
                                (this.canvas.tabIndex = null !== this._tabIndex ? this._tabIndex : 0),
                                (this._keyboardInteractions = new p.KeyboardInteractions({
                                    canvas: this.canvas,
                                    stateMachine: t.instance,
                                    hasFocusNodes: !0,
                                    getOverlayElement: function () {
                                        var t, r;
                                        return null !=
                                            (r =
                                                null == (t = e._accessibilityOverlay)
                                                    ? void 0
                                                    : t.getSemanticOverlayContainer())
                                            ? r
                                            : null;
                                    },
                                }));
                        }
                    }
                }),
                (t.prototype.cleanupKeyboardInteractions = function () {
                    this._keyboardInteractions &&
                        (this._keyboardInteractions.cleanup(), (this._keyboardInteractions = null));
                }),
                (t.prototype.removeRiveListeners = function () {
                    this.eventCleanup && (this.eventCleanup(), (this.eventCleanup = null)),
                        this.cleanupKeyboardInteractions();
                }),
                (t.prototype.initializeAudio = function () {
                    var e,
                        t = this;
                    j.status == s.UNAVAILABLE &&
                        (this.file.hasAudio ||
                            ((null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                                null === this._audioEventListener)) &&
                        ((this._audioEventListener = {
                            type: o.AudioStatusChange,
                            callback: function () {
                                return t.onSystemAudioChanged();
                            },
                        }),
                        j.add(this._audioEventListener),
                        j.establishAudio());
                }),
                (t.prototype.initArtboardSize = function () {
                    this.artboard &&
                        ((this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width),
                        (this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height));
                }),
                (t.prototype.initData = function (e, t, r, n, i) {
                    return y(this, void 0, void 0, function () {
                        var a, s, l;
                        return g(this, function (u) {
                            switch (u.label) {
                                case 0:
                                    if ((u.trys.push([0, 3, , 4]), null != this.riveFile)) return [3, 2];
                                    return (
                                        (a = new U({
                                            src: this.src,
                                            buffer: this.buffer,
                                            enableRiveAssetCDN: this.enableRiveAssetCDN,
                                            assetLoader: this.assetLoader,
                                            enablePerfMarks: this.enablePerfMarks,
                                        })),
                                        (this.riveFile = a),
                                        [4, a.init()]
                                    );
                                case 1:
                                    if ((u.sent(), this.destroyed)) return a.destroyIfUnused(), [2, !1];
                                    u.label = 2;
                                case 2:
                                    (this.file = this.riveFile.getInstance()),
                                        this.initArtboard(e, t, r, n, i),
                                        this.initArtboardSize(),
                                        this.initializeAudio(),
                                        this.semanticsMode === d.SemanticMode.Enabled
                                            ? this.activateSemantics()
                                            : this._semanticsActive && this.syncSemanticsOnStateMachines();
                                    try {
                                        (this.loaded = !0),
                                            this.eventManager.fire({
                                                type: o.Load,
                                                data: null != (l = this.src) ? l : "buffer",
                                            });
                                    } catch (e) {
                                        console.error(e);
                                    }
                                    return (
                                        this.animator.advanceIfPaused(),
                                        (this.readyForPlaying = !0),
                                        this.taskQueue.process(),
                                        this.drawFrame(),
                                        [2, !0]
                                    );
                                case 3:
                                    var c;
                                    return (
                                        (s =
                                            (c = u.sent()) && c.isHandledError
                                                ? c.message
                                                : "Problem loading file; may be corrupt!"),
                                        this.eventManager.fire({ type: o.LoadError, data: s }),
                                        [2, Promise.reject(s)]
                                    );
                                case 4:
                                    return [2];
                            }
                        });
                    });
                }),
                (t.prototype.initArtboard = function (e, t, r, n, i) {
                    if (this.file) {
                        var a,
                            s = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                        if (!s) throw new w("Invalid artboard name or no default artboard");
                        if (
                            ((this.artboard = s),
                            (s.volume = this._volume * j.systemVolume),
                            (this.animator = new O(this.runtime, this.artboard, this.eventManager)),
                            t.length > 0 || r.length > 0
                                ? ((a = t.concat(r)),
                                  this.animator.initLinearAnimations(t, n),
                                  this.animator.initStateMachines(r, n, this._semanticsActive))
                                : (a = [this.animator.atLeastOne(n, !1, this._semanticsActive)]),
                            this.taskQueue.add({ event: { type: n ? o.Play : o.Pause, data: a } }),
                            i)
                        ) {
                            var l = this.file.defaultArtboardViewModel(s);
                            if (null !== l) {
                                var u = l.defaultInstance();
                                if (null !== u) {
                                    var c = new Y(u, null);
                                    (0, p.createFinalization)(c, c.runtimeInstance), this.setViewModelInstance(c);
                                }
                            }
                            for (var f = 0, d = this.file.globalViewModelNames(); f < d.length; f++) {
                                var h = d[f],
                                    m = this.file.viewModelByName(h);
                                if (null !== m) {
                                    var v = new H(m).defaultInstance();
                                    null !== v && this.setGlobalViewModelInstance(h, v);
                                }
                            }
                            this.bind();
                        }
                    }
                }),
                (t.prototype.drawFrame = function () {
                    var e, t;
                    (null == (e = null == document ? void 0 : document.timeline) ? void 0 : e.currentTime)
                        ? this.loaded &&
                          this.artboard &&
                          !this.frameRequestId &&
                          (this._boundDraw(document.timeline.currentTime),
                          null == (t = this.runtime) || t.resolveAnimationFrame())
                        : this.scheduleRendering();
                }),
                (t.prototype._canvasSizeChanged = function () {
                    var e = !1;
                    return (
                        this.canvas &&
                            (this.canvas.width !== this._currentCanvasWidth &&
                                ((this._currentCanvasWidth = this.canvas.width), (e = !0)),
                            this.canvas.height !== this._currentCanvasHeight &&
                                ((this._currentCanvasHeight = this.canvas.height), (e = !0))),
                        e
                    );
                }),
                (t.prototype.pollFocusState = function () {
                    if ((this.ensureKeyboardInteractions(), !this._keyboardInteractions)) {
                        this._prevHasFocus = !1;
                        return;
                    }
                    var e,
                        t,
                        r = this.animator.stateMachines.find(function (e) {
                            return e.playing && e.hasFocusNodes;
                        });
                    if (!r) {
                        this._prevHasFocus = !1;
                        return;
                    }
                    if (this.canvas instanceof HTMLCanvasElement) {
                        if (r.focusState().hasFocus) {
                            if ((this._keyboardInteractions.notifyRiveFocused(), !this._prevHasFocus)) {
                                var n =
                                    null == (e = this._accessibilityOverlay) ? void 0 : e.getSemanticOverlayContainer();
                                !(
                                    document.activeElement === this.canvas ||
                                    (null != (t = null == n ? void 0 : n.contains(document.activeElement)) && t)
                                ) &&
                                    this._focusOptions.allowFocusInterrupt &&
                                    this.canvas.focus(),
                                    (this._prevHasFocus = !0);
                            }
                            return;
                        }
                        (this._prevHasFocus = !1),
                            this._keyboardInteractions.focusSessionState === p.FocusSessionState.RiveFocused &&
                                this._keyboardInteractions.setFocusSessionState(p.FocusSessionState.NotFocused);
                    }
                }),
                (t.prototype.advanceAndReportChanges = function (e) {
                    for (
                        var t,
                            r,
                            n = this.animator.animations
                                .filter(function (e) {
                                    return e.playing || e.needsScrub;
                                })
                                .sort(function (e) {
                                    return e.needsScrub ? -1 : 1;
                                }),
                            a = 0;
                        a < n.length;
                        a++
                    ) {
                        var s = n[a];
                        s.advance(e), s.instance.didLoop && (s.loopCount += 1), s.apply(1);
                    }
                    for (
                        var l = this.animator.stateMachines.filter(function (e) {
                                return e.playing;
                            }),
                            u = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1,
                            c = 0;
                        c < l.length;
                        c++
                    ) {
                        var f = l[c],
                            h = f.reportedEventCount();
                        if (h)
                            for (var m = 0; m < h; m++) {
                                var v = f.reportedEventAt(m);
                                if (v)
                                    if (v.type === i.OpenUrl) {
                                        if (
                                            (this.eventManager.fire({ type: o.RiveEvent, data: v }),
                                            this.automaticallyHandleEvents)
                                        ) {
                                            var y = document.createElement("a"),
                                                g = v.url,
                                                b = v.target,
                                                w = (0, p.sanitizeUrl)(g);
                                            g && y.setAttribute("href", w),
                                                b && y.setAttribute("target", b),
                                                w && w !== p.BLANK_URL && y.click();
                                        }
                                    } else this.eventManager.fire({ type: o.RiveEvent, data: v });
                            }
                        if (
                            (u >= 0 && performance.mark("rive:sm-advance:start:f".concat(u)),
                            f.advanceAndApply(e),
                            u >= 0 &&
                                (performance.mark("rive:sm-advance:end:f".concat(u)),
                                performance.measure(
                                    "rive:sm-advance:f".concat(u),
                                    "rive:sm-advance:start:f".concat(u),
                                    "rive:sm-advance:end:f".concat(u),
                                )),
                            this._semanticsActive)
                        ) {
                            var _ = f.drainSemanticsDiff();
                            _ &&
                                (this._semanticTree || (this._semanticTree = new d.SemanticTreeModel()),
                                this._semanticTree.applyDiff(_));
                        }
                    }
                    if (
                        this._semanticsActive &&
                        this._semanticTree &&
                        l.length > 0 &&
                        this.canvas instanceof HTMLCanvasElement
                    ) {
                        if (!this._accessibilityOverlay) {
                            var S = l[0];
                            this._accessibilityOverlay = new d.AccessibilityOverlay({
                                canvas: this.canvas,
                                instanceId: this._instanceId,
                                semanticsOptions: this.semanticsOptions,
                                allowFocusInterrupt: this._focusOptions.allowFocusInterrupt,
                                fireAction: function (e, t) {
                                    S.fireSemanticAction(e, t);
                                },
                                requestFocus: function (e) {
                                    return S.focusSemanticNode(e);
                                },
                                clearFocus: function () {
                                    return S.instance.clearFocus();
                                },
                            });
                        }
                        var x = null == (t = this._accessibilityOverlay) ? void 0 : t.needsUpdate(this._semanticTree);
                        if (x || this._overlayTransformDirty) {
                            var E = null;
                            if ((null == x ? void 0 : x.layoutChanged) || this._overlayTransformDirty) {
                                var k = this._layout.runtimeFit(this.runtime),
                                    C = this._layout.runtimeAlignment(this.runtime);
                                (E = this.runtime.computeAlignment(
                                    k,
                                    C,
                                    {
                                        minX: this._layout.minX,
                                        minY: this._layout.minY,
                                        maxX: this._layout.maxX,
                                        maxY: this._layout.maxY,
                                    },
                                    this.artboard.bounds,
                                    this._devicePixelRatioUsed * this._layout.layoutScaleFactor,
                                )),
                                    (this._overlayTransformDirty = !1);
                            }
                            this._accessibilityOverlay.update(
                                this._semanticTree,
                                E,
                                this._devicePixelRatioUsed,
                                this.artboard.bounds,
                                x,
                            ),
                                null == E || E.delete();
                        }
                    }
                    0 == this.animator.stateMachines.length && this.artboard.advance(e),
                        this.animator.handleLooping(),
                        this.animator.handleStateChanges(),
                        this.animator.handleAdvancing(e),
                        this.pollFocusState(),
                        null == (r = this._viewModelInstance) || r.handleCallbacks(),
                        this._globalViewModelInstances.forEach(function (e) {
                            e && e.handleCallbacks();
                        });
                }),
                (t.prototype.draw = function (e, t) {
                    this.frameRequestId = null;
                    var n = performance.now(),
                        i = this.enablePerfMarks && this.frameCount < 3 ? this.frameCount : -1;
                    this.lastRenderTime || (this.lastRenderTime = e),
                        (this.renderSecondTimer += e - this.lastRenderTime),
                        this.renderSecondTimer > 5e3 && ((this.renderSecondTimer = 0), null == t || t());
                    var o = (e - this.lastRenderTime) / 1e3;
                    (this.lastRenderTime = e), this.advanceAndReportChanges(o);
                    var a = this.renderer;
                    !this._hasZeroSize &&
                        (this.drawOptimization == r.AlwaysDraw ||
                            this.artboard.didChange() ||
                            this._needsRedraw ||
                            this._canvasSizeChanged()) &&
                        (a.clear(),
                        a.save(),
                        i >= 0 && performance.mark("rive:align-renderer:start:f".concat(i)),
                        this.alignRenderer(),
                        i >= 0 &&
                            (performance.mark("rive:align-renderer:end:f".concat(i)),
                            performance.measure(
                                "rive:align-renderer:f".concat(i),
                                "rive:align-renderer:start:f".concat(i),
                                "rive:align-renderer:end:f".concat(i),
                            )),
                        i >= 0 && performance.mark("rive:artboard-draw:start:f".concat(i)),
                        this.artboard.draw(a),
                        i >= 0 &&
                            (performance.mark("rive:artboard-draw:end:f".concat(i)),
                            performance.measure(
                                "rive:artboard-draw:f".concat(i),
                                "rive:artboard-draw:start:f".concat(i),
                                "rive:artboard-draw:end:f".concat(i),
                            )),
                        a.restore(),
                        i >= 0 && performance.mark("rive:renderer-flush:start:f".concat(i)),
                        a.flush(),
                        i >= 0 &&
                            (performance.mark("rive:renderer-flush:end:f".concat(i)),
                            performance.measure(
                                "rive:renderer-flush:f".concat(i),
                                "rive:renderer-flush:start:f".concat(i),
                                "rive:renderer-flush:end:f".concat(i),
                            )),
                        (this._needsRedraw = !1)),
                        this.frameCount++;
                    var s = performance.now();
                    for (this.frameTimes.push(s), this.durations.push(s - n); this.frameTimes[0] <= s - 1e3; )
                        this.frameTimes.shift(), this.durations.shift();
                    this.animator.isPlaying
                        ? this.scheduleRendering()
                        : this.animator.isPaused
                          ? (this.lastRenderTime = 0)
                          : this.animator.isStopped && (this.lastRenderTime = 0);
                }),
                (t.prototype.alignRenderer = function () {
                    var e = this.renderer,
                        t = this.runtime,
                        r = this._layout,
                        n = this.artboard;
                    e.align(
                        r.runtimeFit(t),
                        r.runtimeAlignment(t),
                        { minX: r.minX, minY: r.minY, maxX: r.maxX, maxY: r.maxY },
                        n.bounds,
                        this._devicePixelRatioUsed * r.layoutScaleFactor,
                    );
                }),
                Object.defineProperty(t.prototype, "fps", {
                    get: function () {
                        return this.durations.length;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "frameTime", {
                    get: function () {
                        return 0 === this.durations.length
                            ? 0
                            : (
                                  this.durations.reduce(function (e, t) {
                                      return e + t;
                                  }, 0) / this.durations.length
                              ).toFixed(4);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.cleanup = function () {
                    var e, t, r, n;
                    (this.destroyed = !0),
                        this.stopRendering(),
                        null == (t = null == (e = this.renderer) ? void 0 : e.bindContext) || t.call(e),
                        this.cleanupInstances(),
                        null !== this._observed && $.remove(this._observed),
                        this.removeRiveListeners(),
                        this.file && (null == (r = this.riveFile) || r.cleanup(), (this.file = null)),
                        (this.riveFile = null),
                        this.deleteRiveRenderer(),
                        null !== this._audioEventListener &&
                            (j.remove(this._audioEventListener), (this._audioEventListener = null)),
                        this._pageVisibilityHandler &&
                            (document.removeEventListener("visibilitychange", this._pageVisibilityHandler),
                            (this._pageVisibilityHandler = null)),
                        null == (n = this._viewModelInstance) || n.cleanup(),
                        (this._viewModelInstance = null),
                        this._globalViewModelInstances.forEach(function (e) {
                            return e.cleanup();
                        }),
                        this._globalViewModelInstances.clear(),
                        (this._dataEnums = null);
                }),
                (t.prototype.deleteRiveRenderer = function () {
                    var e;
                    null == (e = this.renderer) || e.delete(), (this.renderer = null);
                }),
                (t.prototype.cleanupInstances = function () {
                    null !== this.eventCleanup && this.eventCleanup(),
                        this.cleanupKeyboardInteractions(),
                        this.cleanupSemantics(),
                        this.stop(),
                        this.artboard && (this.artboard.delete(), (this.artboard = null));
                }),
                (t.prototype.retrieveTextRun = function (e) {
                    if (!e) return void console.warn("No text run name provided");
                    if (!this.artboard) return void console.warn("Tried to access text run, but the Artboard is null");
                    var t,
                        r = this.artboard.textRun(e);
                    return (
                        r ||
                        void console.warn(
                            "Could not access a text run with name '"
                                .concat(e, "' in the '")
                                .concat(
                                    null == (t = this.artboard) ? void 0 : t.name,
                                    "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime.",
                                ),
                        )
                    );
                }),
                (t.prototype.getTextRunValue = function (e) {
                    var t = this.retrieveTextRun(e);
                    return t ? t.text : void 0;
                }),
                (t.prototype.setTextRunValue = function (e, t) {
                    var r = this.retrieveTextRun(e);
                    r && (r.text = t);
                }),
                (t.prototype.play = function (e, t) {
                    var r = this;
                    ((e = el(e)), this.readyForPlaying)
                        ? (this.animator.play(e),
                          this.syncSemanticsOnStateMachines(),
                          this.eventCleanup && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          this.setupRiveListeners(),
                          this.startRendering())
                        : this.taskQueue.add({
                              action: function () {
                                  return r.play(e, t);
                              },
                          });
                }),
                (t.prototype.pause = function (e) {
                    var t = this;
                    ((e = el(e)), this.readyForPlaying)
                        ? (this.eventCleanup && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          this.animator.pause(e))
                        : this.taskQueue.add({
                              action: function () {
                                  return t.pause(e);
                              },
                          });
                }),
                (t.prototype.scrub = function (e, t) {
                    var r = this;
                    ((e = el(e)), this.readyForPlaying)
                        ? (this.animator.scrub(e, t || 0), this.drawFrame())
                        : this.taskQueue.add({
                              action: function () {
                                  return r.scrub(e, t);
                              },
                          });
                }),
                (t.prototype.stop = function (e) {
                    var t = this;
                    ((e = el(e)), this.readyForPlaying)
                        ? (this.animator && this.animator.stop(e),
                          this.eventCleanup && this.eventCleanup(),
                          this.cleanupKeyboardInteractions(),
                          this.cleanupSemantics())
                        : this.taskQueue.add({
                              action: function () {
                                  return t.stop(e);
                              },
                          });
                }),
                (t.prototype.reset = function (e) {
                    var t,
                        r,
                        n = null == e ? void 0 : e.artboard,
                        i = el(null == e ? void 0 : e.animations),
                        o = el(null == e ? void 0 : e.stateMachines),
                        a = null != (t = null == e ? void 0 : e.autoplay) && t,
                        s = null != (r = null == e ? void 0 : e.autoBind) && r;
                    this.cleanupInstances(), this.initArtboard(n, i, o, a, s), this.taskQueue.process();
                }),
                (t.prototype.load = function (e) {
                    (this.file = null), this.stop(), this.init(e);
                }),
                Object.defineProperty(t.prototype, "layout", {
                    get: function () {
                        return this._layout;
                    },
                    set: function (e) {
                        (this._layout = e),
                            (this._overlayTransformDirty = !0),
                            (e.maxX && e.maxY) || this.resizeToCanvas(),
                            this.loaded && !this.animator.isPlaying && this.drawFrame();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.resizeToCanvas = function () {
                    (this._layout = this.layout.copyWith({
                        minX: 0,
                        minY: 0,
                        maxX: this.canvas.width,
                        maxY: this.canvas.height,
                    })),
                        (this._overlayTransformDirty = !0);
                }),
                (t.prototype.resizeDrawingSurfaceToCanvas = function (t) {
                    if (this.canvas instanceof HTMLCanvasElement && window) {
                        var r = this.canvas.getBoundingClientRect(),
                            n = r.width,
                            i = r.height,
                            o = t || window.devicePixelRatio || 1;
                        if (
                            ((this.devicePixelRatioUsed = o),
                            (this.canvas.width = o * n),
                            (this.canvas.height = o * i),
                            (this._needsRedraw = !0),
                            this.resizeToCanvas(),
                            this.layout.fit === e.Layout)
                        ) {
                            var a = this._layout.layoutScaleFactor;
                            (this.artboard.width = n / a), (this.artboard.height = i / a);
                        }
                        this.drawFrame();
                    }
                }),
                Object.defineProperty(t.prototype, "source", {
                    get: function () {
                        return this.src;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "activeArtboard", {
                    get: function () {
                        return this.artboard ? this.artboard.name : "";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "semanticTree", {
                    get: function () {
                        return this._semanticTree;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "accessibilityOverlay", {
                    get: function () {
                        return this._accessibilityOverlay;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "animationNames", {
                    get: function () {
                        if (!this.loaded || !this.artboard) return [];
                        for (var e = [], t = 0; t < this.artboard.animationCount(); t++)
                            e.push(this.artboard.animationByIndex(t).name);
                        return e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "stateMachineNames", {
                    get: function () {
                        if (!this.loaded || !this.artboard) return [];
                        for (var e = [], t = 0; t < this.artboard.stateMachineCount(); t++)
                            e.push(this.artboard.stateMachineByIndex(t).name);
                        return e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.stateMachineInputs = function (e) {
                    if (this.loaded) {
                        var t = this.animator.stateMachines.find(function (t) {
                            return t.name === e;
                        });
                        return null == t ? void 0 : t.inputs;
                    }
                }),
                (t.prototype.retrieveInputAtPath = function (e, t) {
                    if (!e) return void console.warn("No input name provided for path '".concat(t, "'"));
                    if (!this.artboard)
                        return void console.warn(
                            "Tried to access input: '"
                                .concat(e, "', at path: '")
                                .concat(t, "', but the Artboard is null"),
                        );
                    var r = this.artboard.inputByPath(e, t);
                    return (
                        r ||
                        void console.warn(
                            "Could not access an input with name: '".concat(e, "', at path:'").concat(t, "'"),
                        )
                    );
                }),
                (t.prototype.setBooleanStateAtPath = function (e, t, r) {
                    var i = this.retrieveInputAtPath(e, r);
                    i &&
                        (i.type === n.Boolean
                            ? (i.asBool().value = t)
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(r, "' is not a boolean"),
                              ));
                }),
                (t.prototype.setNumberStateAtPath = function (e, t, r) {
                    var i = this.retrieveInputAtPath(e, r);
                    i &&
                        (i.type === n.Number
                            ? (i.asNumber().value = t)
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(r, "' is not a number"),
                              ));
                }),
                (t.prototype.fireStateAtPath = function (e, t) {
                    var r = this.retrieveInputAtPath(e, t);
                    r &&
                        (r.type === n.Trigger
                            ? r.asTrigger().fire()
                            : console.warn(
                                  "Input with name: '".concat(e, "', at path:'").concat(t, "' is not a trigger"),
                              ));
                }),
                (t.prototype.retrieveTextAtPath = function (e, t) {
                    if (!e) return void console.warn("No text name provided for path '".concat(t, "'"));
                    if (!t) return void console.warn("No path provided for text '".concat(e, "'"));
                    if (!this.artboard)
                        return void console.warn(
                            "Tried to access text: '"
                                .concat(e, "', at path: '")
                                .concat(t, "', but the Artboard is null"),
                        );
                    var r = this.artboard.textByPath(e, t);
                    return (
                        r ||
                        void console.warn("Could not access text with name: '".concat(e, "', at path:'").concat(t, "'"))
                    );
                }),
                (t.prototype.getTextRunValueAtPath = function (e, t) {
                    var r = this.retrieveTextAtPath(e, t);
                    return r
                        ? r.text
                        : void console.warn("Could not get text with name: '".concat(e, "', at path:'").concat(t, "'"));
                }),
                (t.prototype.setTextRunValueAtPath = function (e, t, r) {
                    var n = this.retrieveTextAtPath(e, r);
                    n
                        ? (n.text = t)
                        : console.warn("Could not set text with name: '".concat(e, "', at path:'").concat(r, "'"));
                }),
                Object.defineProperty(t.prototype, "playingStateMachineNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.stateMachines
                                  .filter(function (e) {
                                      return e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "playingAnimationNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.animations
                                  .filter(function (e) {
                                      return e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "pausedAnimationNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.animations
                                  .filter(function (e) {
                                      return !e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "pausedStateMachineNames", {
                    get: function () {
                        return this.loaded
                            ? this.animator.stateMachines
                                  .filter(function (e) {
                                      return !e.playing;
                                  })
                                  .map(function (e) {
                                      return e.name;
                                  })
                            : [];
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "isPlaying", {
                    get: function () {
                        return this.animator.isPlaying;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "isPaused", {
                    get: function () {
                        return this.animator.isPaused;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "isStopped", {
                    get: function () {
                        var e, t;
                        return null == (t = null == (e = this.animator) ? void 0 : e.isStopped) || t;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "bounds", {
                    get: function () {
                        return this.artboard ? this.artboard.bounds : void 0;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.on = function (e, t) {
                    this.eventManager.add({ type: e, callback: t });
                }),
                (t.prototype.off = function (e, t) {
                    this.eventManager.remove({ type: e, callback: t });
                }),
                (t.prototype.unsubscribe = function (e, t) {
                    console.warn("This function is deprecated: please use `off()` instead."), this.off(e, t);
                }),
                (t.prototype.removeAllRiveEventListeners = function (e) {
                    this.eventManager.removeAll(e);
                }),
                (t.prototype.unsubscribeAll = function (e) {
                    console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead."),
                        this.removeAllRiveEventListeners(e);
                }),
                (t.prototype.stopRendering = function () {
                    (this._explicitlyStoppedRendering = !0),
                        this.loaded &&
                            this.frameRequestId &&
                            (this.runtime.cancelAnimationFrame
                                ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                                : cancelAnimationFrame(this.frameRequestId),
                            (this.frameRequestId = null));
                }),
                (t.prototype.startRendering = function () {
                    (this._explicitlyStoppedRendering = !1), this.drawFrame();
                }),
                (t.prototype.scheduleRendering = function () {
                    this.loaded &&
                        this.artboard &&
                        !this.frameRequestId &&
                        (this.runtime.requestAnimationFrame
                            ? (this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw))
                            : (this.frameRequestId = requestAnimationFrame(this._boundDraw)));
                }),
                (t.prototype._onPageVisibilityChange = function () {
                    var e, t;
                    document.hidden
                        ? (null !== this.frameRequestId &&
                              ((null == (e = this.runtime) ? void 0 : e.cancelAnimationFrame)
                                  ? this.runtime.cancelAnimationFrame(this.frameRequestId)
                                  : cancelAnimationFrame(this.frameRequestId),
                              (this.frameRequestId = null)),
                          (this.lastRenderTime = 0))
                        : (null == (t = this.animator) ? void 0 : t.isPlaying) &&
                          !this._explicitlyStoppedRendering &&
                          this.scheduleRendering();
                }),
                (t.prototype.enableFPSCounter = function (e) {
                    this.runtime.enableFPSCounter(e);
                }),
                (t.prototype.disableFPSCounter = function () {
                    this.runtime.disableFPSCounter();
                }),
                Object.defineProperty(t.prototype, "contents", {
                    get: function () {
                        if (this.loaded) {
                            for (var e = { artboards: [] }, t = 0; t < this.file.artboardCount(); t++) {
                                for (
                                    var r = this.file.artboardByIndex(t),
                                        n = { name: r.name, animations: [], stateMachines: [] },
                                        i = 0;
                                    i < r.animationCount();
                                    i++
                                ) {
                                    var o = r.animationByIndex(i);
                                    n.animations.push(o.name);
                                }
                                for (var a = 0; a < r.stateMachineCount(); a++) {
                                    for (
                                        var s = r.stateMachineByIndex(a),
                                            l = s.name,
                                            u = new this.runtime.StateMachineInstance(s, r),
                                            c = [],
                                            f = 0;
                                        f < u.inputCount();
                                        f++
                                    ) {
                                        var d = u.input(f);
                                        c.push({ name: d.name, type: d.type });
                                    }
                                    n.stateMachines.push({ name: l, inputs: c });
                                }
                                e.artboards.push(n);
                            }
                            return e;
                        }
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "volume", {
                    get: function () {
                        return (
                            this.artboard &&
                                this.artboard.volume !== this._volume &&
                                (this._volume = this.artboard.volume),
                            this._volume
                        );
                    },
                    set: function (e) {
                        (this._volume = e), this.artboard && (this.artboard.volume = e * j.systemVolume);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "artboardWidth", {
                    get: function () {
                        var e;
                        return this.artboard ? this.artboard.width : null != (e = this._artboardWidth) ? e : 0;
                    },
                    set: function (e) {
                        (this._artboardWidth = e), this.artboard && (this.artboard.width = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "artboardHeight", {
                    get: function () {
                        var e;
                        return this.artboard ? this.artboard.height : null != (e = this._artboardHeight) ? e : 0;
                    },
                    set: function (e) {
                        (this._artboardHeight = e), this.artboard && (this.artboard.height = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.resetArtboardSize = function () {
                    this.artboard
                        ? (this.artboard.resetArtboardSize(),
                          (this._artboardWidth = this.artboard.width),
                          (this._artboardHeight = this.artboard.height))
                        : ((this._artboardWidth = void 0), (this._artboardHeight = void 0));
                }),
                Object.defineProperty(t.prototype, "devicePixelRatioUsed", {
                    get: function () {
                        return this._devicePixelRatioUsed;
                    },
                    set: function (e) {
                        e !== this._devicePixelRatioUsed && (this._overlayTransformDirty = !0),
                            (this._devicePixelRatioUsed = e);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.bindViewModelInstance = function (e) {
                    e && (this.setViewModelInstance(e), this.bind());
                }),
                (t.prototype.setViewModelInstance = function (e) {
                    var t,
                        r = null == e ? void 0 : e.runtimeInstance;
                    this.artboard &&
                        !this.destroyed &&
                        e &&
                        r &&
                        (e.internalIncrementReferenceCount(),
                        null == (t = this._viewModelInstance) || t.cleanup(),
                        (this._viewModelInstance = e),
                        this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines.forEach(function (e) {
                                  return e.instance.setViewModelInstance(r);
                              })
                            : this.artboard.setViewModelInstance(r));
                }),
                (t.prototype.bind = function () {
                    this.artboard &&
                        !this.destroyed &&
                        (this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines.forEach(function (e) {
                                  return e.instance.bind();
                              })
                            : this.artboard.bind());
                }),
                Object.defineProperty(t.prototype, "viewModelInstance", {
                    get: function () {
                        return this._viewModelInstance;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.setGlobalViewModelInstance = function (e, t) {
                    var r,
                        n = null == t ? void 0 : t.runtimeInstance;
                    if (!this.artboard || this.destroyed || !n) return !1;
                    var i = !1;
                    return (
                        this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines.forEach(function (t) {
                                  t.instance.setGlobalViewModelInstance(e, n) && (i = !0);
                              })
                            : (i = this.artboard.setGlobalViewModelInstance(e, n)),
                        i &&
                            (t.internalIncrementReferenceCount(),
                            null == (r = this._globalViewModelInstances.get(e)) || r.cleanup(),
                            this._globalViewModelInstances.set(e, t)),
                        i
                    );
                }),
                (t.prototype.globalViewModelInstance = function (e) {
                    var t = this._globalViewModelInstances.get(e);
                    if (t) return t;
                    if (!this.artboard || this.destroyed) return null;
                    var r =
                        this.animator.stateMachines.length > 0
                            ? this.animator.stateMachines[0].instance.globalViewModelInstance(e)
                            : this.artboard.globalViewModelInstance(e);
                    if (null === r) return null;
                    var n = new Y(r, null);
                    return (
                        (0, p.createFinalization)(n, r),
                        n.internalIncrementReferenceCount(),
                        this._globalViewModelInstances.set(e, n),
                        n
                    );
                }),
                (t.prototype.globalViewModelNames = function () {
                    var e, t;
                    return null != (t = null == (e = this.file) ? void 0 : e.globalViewModelNames()) ? t : [];
                }),
                (t.prototype.viewModelByIndex = function (e) {
                    var t = this.file.viewModelByIndex(e);
                    return null !== t ? new H(t) : null;
                }),
                (t.prototype.viewModelByName = function (e) {
                    var t;
                    return null == (t = this.riveFile) ? void 0 : t.viewModelByName(e);
                }),
                (t.prototype.enums = function () {
                    if (null === this._dataEnums) {
                        var e = this.file.enums();
                        this._dataEnums = e.map(function (e) {
                            return new G(e);
                        });
                    }
                    return this._dataEnums;
                }),
                (t.prototype.defaultViewModel = function () {
                    if (this.artboard) {
                        var e = this.file.defaultArtboardViewModel(this.artboard);
                        if (e) return new H(e);
                    }
                    return null;
                }),
                (t.prototype.getArtboard = function (e) {
                    var t, r;
                    return null != (r = null == (t = this.riveFile) ? void 0 : t.getArtboard(e)) ? r : null;
                }),
                (t.prototype.getBindableArtboard = function (e) {
                    var t, r;
                    return null != (r = null == (t = this.riveFile) ? void 0 : t.getBindableArtboard(e)) ? r : null;
                }),
                (t.prototype.getDefaultBindableArtboard = function () {
                    var e, t;
                    return null != (t = null == (e = this.riveFile) ? void 0 : e.getDefaultBindableArtboard())
                        ? t
                        : null;
                }),
                (t.prototype.clearFocus = function () {
                    this.animator.stateMachines
                        .filter(function (e) {
                            return e.playing && e.hasFocusNodes;
                        })
                        .forEach(function (e) {
                            return e.clearFocus();
                        });
                }),
                (t.missingErrorMessage = "Rive source file or data buffer required"),
                (t.cleanupErrorMessage = "Attempt to use file after calling cleanup."),
                t
            );
        })()),
        ((W = l || (l = {})).none = "none"),
        (W.string = "string"),
        (W.number = "number"),
        (W.boolean = "boolean"),
        (W.color = "color"),
        (W.list = "list"),
        (W.enumType = "enumType"),
        (W.trigger = "trigger"),
        (W.viewModel = "viewModel"),
        (W.integer = "integer"),
        (W.listIndex = "listIndex"),
        (W.image = "image"),
        (W.artboard = "artboard"),
        (H = (function () {
            function e(e) {
                this._viewModel = e;
            }
            return (
                Object.defineProperty(e.prototype, "instanceCount", {
                    get: function () {
                        return this._viewModel.instanceCount;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this._viewModel.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.instanceByIndex = function (e) {
                    var t = this._viewModel.instanceByIndex(e);
                    if (null !== t) {
                        var r = new Y(t, null);
                        return (0, p.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (e.prototype.instanceByName = function (e) {
                    var t = this._viewModel.instanceByName(e);
                    if (null !== t) {
                        var r = new Y(t, null);
                        return (0, p.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (e.prototype.defaultInstance = function () {
                    var e = this._viewModel.defaultInstance();
                    if (null !== e) {
                        var t = new Y(e, null);
                        return (0, p.createFinalization)(t, e), t;
                    }
                    return null;
                }),
                (e.prototype.instance = function () {
                    var e = this._viewModel.instance();
                    if (null !== e) {
                        var t = new Y(e, null);
                        return (0, p.createFinalization)(t, e), t;
                    }
                    return null;
                }),
                Object.defineProperty(e.prototype, "properties", {
                    get: function () {
                        return this._viewModel.getProperties();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "instanceNames", {
                    get: function () {
                        return this._viewModel.getInstanceNames();
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                e
            );
        })()),
        (G = (function () {
            function e(e) {
                this._dataEnum = e;
            }
            return (
                Object.defineProperty(e.prototype, "name", {
                    get: function () {
                        return this._dataEnum.name;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "values", {
                    get: function () {
                        return this._dataEnum.values;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                e
            );
        })()),
        ((q = u || (u = {})).Number = "number"),
        (q.String = "string"),
        (q.Boolean = "boolean"),
        (q.Color = "color"),
        (q.Trigger = "trigger"),
        (q.Enum = "enum"),
        (q.List = "list"),
        (q.Image = "image"),
        (q.Font = "font"),
        (q.Artboard = "artboard"),
        (Y = (function () {
            function e(e, t) {
                (this._parents = []),
                    (this._children = []),
                    (this._viewModelInstances = new Map()),
                    (this._propertiesWithCallbacks = []),
                    (this._referenceCount = 0),
                    (this.selfUnref = !1),
                    (this._runtimeInstance = e),
                    null !== t && this._parents.push(t);
            }
            return (
                Object.defineProperty(e.prototype, "runtimeInstance", {
                    get: function () {
                        return this._runtimeInstance;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "nativeInstance", {
                    get: function () {
                        return this._runtimeInstance;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.handleCallbacks = function () {
                    0 !== this._propertiesWithCallbacks.length &&
                        (this._propertiesWithCallbacks.forEach(function (e) {
                            e.handleCallbacks();
                        }),
                        this._propertiesWithCallbacks.forEach(function (e) {
                            e.clearChanges();
                        })),
                        this._children.forEach(function (e) {
                            return e.handleCallbacks();
                        });
                }),
                (e.prototype.addParent = function (e) {
                    !this._parents.includes(e) &&
                        (this._parents.push(e),
                        (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) &&
                            e.addToViewModelCallbacks(this));
                }),
                (e.prototype.removeParent = function (e) {
                    var t = this._parents.indexOf(e);
                    -1 !== t && (this._parents[t].removeFromViewModelCallbacks(this), this._parents.splice(t, 1));
                }),
                (e.prototype.addToPropertyCallbacks = function (e) {
                    var t = this;
                    !this._propertiesWithCallbacks.includes(e) &&
                        (this._propertiesWithCallbacks.push(e),
                        this._propertiesWithCallbacks.length > 0 &&
                            this._parents.forEach(function (e) {
                                e.addToViewModelCallbacks(t);
                            }));
                }),
                (e.prototype.removeFromPropertyCallbacks = function (e) {
                    var t = this;
                    this._propertiesWithCallbacks.includes(e) &&
                        ((this._propertiesWithCallbacks = this._propertiesWithCallbacks.filter(function (t) {
                            return t !== e;
                        })),
                        0 === this._children.length &&
                            0 === this._propertiesWithCallbacks.length &&
                            this._parents.forEach(function (e) {
                                e.removeFromViewModelCallbacks(t);
                            }));
                }),
                (e.prototype.addToViewModelCallbacks = function (e) {
                    var t = this;
                    this._children.includes(e) ||
                        (this._children.push(e),
                        this._parents.forEach(function (e) {
                            e.addToViewModelCallbacks(t);
                        }));
                }),
                (e.prototype.removeFromViewModelCallbacks = function (e) {
                    var t = this;
                    this._children.includes(e) &&
                        ((this._children = this._children.filter(function (t) {
                            return t !== e;
                        })),
                        0 === this._children.length &&
                            0 === this._propertiesWithCallbacks.length &&
                            this._parents.forEach(function (e) {
                                e.removeFromViewModelCallbacks(t);
                            }));
                }),
                (e.prototype.clearCallbacks = function () {
                    this._propertiesWithCallbacks.forEach(function (e) {
                        e.clearCallbacks();
                    });
                }),
                (e.prototype.propertyFromPath = function (e, t) {
                    var r = e.split("/");
                    return this.propertyFromPathSegments(r, 0, t);
                }),
                (e.prototype.viewModelFromPathSegments = function (e, t) {
                    var r = this.internalViewModelInstance(e[t]);
                    if (null !== r)
                        if (t == e.length - 1) return r;
                        else return r.viewModelFromPathSegments(e, t++);
                    return null;
                }),
                (e.prototype.propertyFromPathSegments = function (e, t, r) {
                    if (t < e.length - 1) {
                        var n,
                            i,
                            o,
                            a,
                            s,
                            l,
                            c,
                            f,
                            d,
                            p,
                            h,
                            m,
                            v,
                            y,
                            g,
                            b,
                            w,
                            _,
                            S,
                            x,
                            E = this.internalViewModelInstance(e[t]);
                        return null !== E ? E.propertyFromPathSegments(e, t + 1, r) : null;
                    }
                    var k = null;
                    switch (r) {
                        case u.Number:
                            if (
                                null !==
                                (k =
                                    null != (i = null == (n = this._runtimeInstance) ? void 0 : n.number(e[t]))
                                        ? i
                                        : null)
                            )
                                return new Q(k, this);
                            break;
                        case u.String:
                            if (
                                null !==
                                (k =
                                    null != (a = null == (o = this._runtimeInstance) ? void 0 : o.string(e[t]))
                                        ? a
                                        : null)
                            )
                                return new J(k, this);
                            break;
                        case u.Boolean:
                            if (
                                null !==
                                (k =
                                    null != (l = null == (s = this._runtimeInstance) ? void 0 : s.boolean(e[t]))
                                        ? l
                                        : null)
                            )
                                return new Z(k, this);
                            break;
                        case u.Color:
                            if (
                                null !==
                                (k =
                                    null != (f = null == (c = this._runtimeInstance) ? void 0 : c.color(e[t]))
                                        ? f
                                        : null)
                            )
                                return new en(k, this);
                            break;
                        case u.Trigger:
                            if (
                                null !==
                                (k =
                                    null != (p = null == (d = this._runtimeInstance) ? void 0 : d.trigger(e[t]))
                                        ? p
                                        : null)
                            )
                                return new ee(k, this);
                            break;
                        case u.Enum:
                            if (
                                null !==
                                (k =
                                    null != (m = null == (h = this._runtimeInstance) ? void 0 : h.enum(e[t]))
                                        ? m
                                        : null)
                            )
                                return new et(k, this);
                            break;
                        case u.List:
                            if (
                                null !==
                                (k =
                                    null != (y = null == (v = this._runtimeInstance) ? void 0 : v.list(e[t]))
                                        ? y
                                        : null)
                            )
                                return new er(k, this);
                            break;
                        case u.Image:
                            if (
                                null !==
                                (k =
                                    null != (b = null == (g = this._runtimeInstance) ? void 0 : g.image(e[t]))
                                        ? b
                                        : null)
                            )
                                return new ei(k, this);
                            break;
                        case u.Font:
                            if (
                                null !==
                                (k =
                                    null != (_ = null == (w = this._runtimeInstance) ? void 0 : w.font(e[t]))
                                        ? _
                                        : null)
                            )
                                return new eo(k, this);
                            break;
                        case u.Artboard:
                            if (
                                null !==
                                (k =
                                    null != (x = null == (S = this._runtimeInstance) ? void 0 : S.artboard(e[t]))
                                        ? x
                                        : null)
                            )
                                return new ea(k, this);
                    }
                    return null;
                }),
                (e.prototype.internalViewModelInstance = function (t) {
                    if (this._viewModelInstances.has(t)) return this._viewModelInstances.get(t);
                    var r,
                        n = null == (r = this._runtimeInstance) ? void 0 : r.viewModel(t);
                    if (null !== n) {
                        var i = new e(n, this);
                        return (
                            (0, p.createFinalization)(i, n),
                            i.internalIncrementReferenceCount(),
                            this._viewModelInstances.set(t, i),
                            i
                        );
                    }
                    return null;
                }),
                (e.prototype.number = function (e) {
                    return this.propertyFromPath(e, u.Number);
                }),
                (e.prototype.string = function (e) {
                    return this.propertyFromPath(e, u.String);
                }),
                (e.prototype.boolean = function (e) {
                    return this.propertyFromPath(e, u.Boolean);
                }),
                (e.prototype.color = function (e) {
                    return this.propertyFromPath(e, u.Color);
                }),
                (e.prototype.trigger = function (e) {
                    return this.propertyFromPath(e, u.Trigger);
                }),
                (e.prototype.enum = function (e) {
                    return this.propertyFromPath(e, u.Enum);
                }),
                (e.prototype.list = function (e) {
                    return this.propertyFromPath(e, u.List);
                }),
                (e.prototype.image = function (e) {
                    return this.propertyFromPath(e, u.Image);
                }),
                (e.prototype.font = function (e) {
                    return this.propertyFromPath(e, u.Font);
                }),
                (e.prototype.artboard = function (e) {
                    return this.propertyFromPath(e, u.Artboard);
                }),
                (e.prototype.viewModel = function (e) {
                    var t = e.split("/"),
                        r = t.length > 1 ? this.viewModelFromPathSegments(t.slice(0, t.length - 1), 0) : this;
                    return null != r ? r.internalViewModelInstance(t[t.length - 1]) : null;
                }),
                (e.prototype.internalReplaceViewModel = function (e, t) {
                    var r;
                    if (null !== t.runtimeInstance) {
                        var n =
                            (null == (r = this._runtimeInstance) ? void 0 : r.replaceViewModel(e, t.runtimeInstance)) ||
                            !1;
                        if (n) {
                            t.internalIncrementReferenceCount();
                            var i = this.internalViewModelInstance(e);
                            null !== i &&
                                (i.removeParent(this),
                                this._children.includes(i) &&
                                    (this._children = this._children.filter(function (e) {
                                        return e !== i;
                                    })),
                                i.cleanup()),
                                this._viewModelInstances.set(e, t),
                                t.addParent(this);
                        }
                        return n;
                    }
                    return !1;
                }),
                (e.prototype.replaceViewModel = function (e, t) {
                    var r,
                        n = e.split("/"),
                        i = n.length > 1 ? this.viewModelFromPathSegments(n.slice(0, n.length - 1), 0) : this;
                    return null != (r = null == i ? void 0 : i.internalReplaceViewModel(n[n.length - 1], t)) && r;
                }),
                (e.prototype.incrementReferenceCount = function () {
                    var e;
                    this._referenceCount++, null == (e = this._runtimeInstance) || e.incrementReferenceCount();
                }),
                (e.prototype.decrementReferenceCount = function () {
                    var e;
                    this._referenceCount--, null == (e = this._runtimeInstance) || e.decrementReferenceCount();
                }),
                Object.defineProperty(e.prototype, "properties", {
                    get: function () {
                        var e;
                        return (
                            (null == (e = this._runtimeInstance)
                                ? void 0
                                : e.getProperties().map(function (e) {
                                      return v({}, e);
                                  })) || []
                        );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(e.prototype, "viewModelName", {
                    get: function () {
                        var e, t;
                        return null != (t = null == (e = this._runtimeInstance) ? void 0 : e.getViewModelName())
                            ? t
                            : "";
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (e.prototype.internalIncrementReferenceCount = function () {
                    this._referenceCount++;
                }),
                (e.prototype.cleanup = function () {
                    var e,
                        t = this;
                    if ((this._referenceCount--, this._referenceCount <= 0)) {
                        this.selfUnref && (null == (e = this._runtimeInstance) || e.unref()),
                            (this._runtimeInstance = null),
                            this.clearCallbacks(),
                            (this._propertiesWithCallbacks = []),
                            this._viewModelInstances.forEach(function (e) {
                                e.cleanup();
                            }),
                            this._viewModelInstances.clear();
                        var r = b([], this._children, !0);
                        this._children.length = 0;
                        var n = b([], this._parents, !0);
                        (this._parents.length = 0),
                            r.forEach(function (e) {
                                e.removeParent(t);
                            }),
                            n.forEach(function (e) {
                                e.removeFromViewModelCallbacks(t);
                            });
                    }
                }),
                e
            );
        })()),
        (J = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(
            (X = (function () {
                function e(e, t) {
                    (this.callbacks = []), (this._viewModelInstanceValue = e), (this._parentViewModel = t);
                }
                return (
                    (e.prototype.on = function (e) {
                        0 === this.callbacks.length && this._viewModelInstanceValue.clearChanges(),
                            this.callbacks.includes(e) ||
                                (this.callbacks.push(e), this._parentViewModel.addToPropertyCallbacks(this));
                    }),
                    (e.prototype.off = function (e) {
                        e
                            ? (this.callbacks = this.callbacks.filter(function (t) {
                                  return t !== e;
                              }))
                            : (this.callbacks.length = 0),
                            0 === this.callbacks.length && this._parentViewModel.removeFromPropertyCallbacks(this);
                    }),
                    (e.prototype.internalHandleCallback = function (e) {}),
                    (e.prototype.handleCallbacks = function () {
                        var e = this;
                        this._viewModelInstanceValue.hasChanged &&
                            this.callbacks.forEach(function (t) {
                                e.internalHandleCallback(t);
                            });
                    }),
                    (e.prototype.clearChanges = function () {
                        this._viewModelInstanceValue.clearChanges();
                    }),
                    (e.prototype.clearCallbacks = function () {
                        this.callbacks.length = 0;
                    }),
                    Object.defineProperty(e.prototype, "name", {
                        get: function () {
                            return this._viewModelInstanceValue.name;
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    e
                );
            })()),
        )),
        (Q = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(X)),
        (Z = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(X)),
        (ee = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                (t.prototype.trigger = function () {
                    return this._viewModelInstanceValue.trigger();
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(X)),
        (et = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "valueIndex", {
                    get: function () {
                        return this._viewModelInstanceValue.valueIndex;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.valueIndex = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "values", {
                    get: function () {
                        return this._viewModelInstanceValue.values;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(X)),
        (er = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "length", {
                    get: function () {
                        return this._viewModelInstanceValue.size;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.addInstance = function (e) {
                    null != e.runtimeInstance &&
                        (this._viewModelInstanceValue.addInstance(e.runtimeInstance),
                        e.addParent(this._parentViewModel));
                }),
                (t.prototype.addInstanceAt = function (e, t) {
                    return (
                        !!(
                            null != e.runtimeInstance &&
                            this._viewModelInstanceValue.addInstanceAt(e.runtimeInstance, t)
                        ) && (e.addParent(this._parentViewModel), !0)
                    );
                }),
                (t.prototype.removeInstance = function (e) {
                    null != e.runtimeInstance &&
                        (this._viewModelInstanceValue.removeInstance(e.runtimeInstance),
                        e.removeParent(this._parentViewModel));
                }),
                (t.prototype.removeInstanceAt = function (e) {
                    this._viewModelInstanceValue.removeInstanceAt(e);
                }),
                (t.prototype.instanceAt = function (e) {
                    var t = this._viewModelInstanceValue.instanceAt(e);
                    if (null != t) {
                        var r = new Y(t, this._parentViewModel);
                        return (0, p.createFinalization)(r, t), r;
                    }
                    return null;
                }),
                (t.prototype.swap = function (e, t) {
                    this._viewModelInstanceValue.swap(e, t);
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(X)),
        (en = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._viewModelInstanceValue.value;
                    },
                    set: function (e) {
                        this._viewModelInstanceValue.value = e;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.rgb = function (e, t, r) {
                    this._viewModelInstanceValue.rgb(e, t, r);
                }),
                (t.prototype.rgba = function (e, t, r, n) {
                    this._viewModelInstanceValue.argb(n, e, t, r);
                }),
                (t.prototype.argb = function (e, t, r, n) {
                    this._viewModelInstanceValue.argb(e, t, r, n);
                }),
                (t.prototype.alpha = function (e) {
                    this._viewModelInstanceValue.alpha(e);
                }),
                (t.prototype.opacity = function (e) {
                    this._viewModelInstanceValue.alpha(Math.round(255 * Math.max(0, Math.min(1, e))));
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e(this.value);
                }),
                t
            );
        })(X)),
        (ei = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    set: function (e) {
                        var t;
                        this._viewModelInstanceValue.value(null != (t = null == e ? void 0 : e.nativeImage) ? t : null);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(X)),
        (eo = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    set: function (e) {
                        var t;
                        this._viewModelInstanceValue.value(null != (t = null == e ? void 0 : e.nativeFont) ? t : null);
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(X)),
        (ea = (function (e) {
            function t(t, r) {
                return e.call(this, t, r) || this;
            }
            return (
                m(t, e),
                Object.defineProperty(t.prototype, "value", {
                    set: function (e) {
                        var t, r, n;
                        (n = e.isBindableArtboard ? e : e.file.internalBindableArtboardFromArtboard(e.nativeArtboard)),
                            this._viewModelInstanceValue.value(
                                null != (t = null == n ? void 0 : n.nativeArtboard) ? t : null,
                            ),
                            (null == n ? void 0 : n.nativeViewModel) &&
                                this._viewModelInstanceValue.viewModelInstance(
                                    null != (r = null == n ? void 0 : n.nativeViewModel) ? r : null,
                                );
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                (t.prototype.internalHandleCallback = function (e) {
                    e();
                }),
                t
            );
        })(X)),
        (es = function (e) {
            return y(void 0, void 0, void 0, function () {
                var t;
                return g(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, fetch(new Request(e))];
                        case 1:
                            if (!(t = r.sent()).ok)
                                throw Error("Failed to fetch the Rive file: HTTP ".concat(t.status));
                            return [4, t.arrayBuffer()];
                        case 2:
                            return [2, r.sent()];
                    }
                });
            });
        }),
        (el = function (e) {
            return "string" == typeof e ? [e] : e instanceof Array ? e : [];
        }),
        (eu = { EventManager: L, TaskQueueManager: F }),
        (ec = function (e) {
            return y(void 0, void 0, void 0, function () {
                var t, r;
                return g(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return f.RuntimeLoader.getInstance(function (r) {
                                        r.decodeAudio(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new p.AudioWrapper(t)),
                                p.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        (ef = function (e) {
            return y(void 0, void 0, void 0, function () {
                var t, r;
                return g(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return f.RuntimeLoader.getInstance(function (r) {
                                        r.decodeImage(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new p.ImageWrapper(t)),
                                p.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        (ed = function (e) {
            return y(void 0, void 0, void 0, function () {
                var t, r;
                return g(this, function (n) {
                    switch (n.label) {
                        case 0:
                            return [
                                4,
                                new Promise(function (t) {
                                    return f.RuntimeLoader.getInstance(function (r) {
                                        r.decodeFont(e, t);
                                    });
                                }),
                            ];
                        case 1:
                            return (
                                (t = n.sent()),
                                (r = new p.FontWrapper(t)),
                                p.finalizationRegistry.register(r, t),
                                [2, r]
                            );
                    }
                });
            });
        }),
        ev
    );
})();
