let r;
n.d(t, { m: () => w });
var i,
    a,
    o,
    _ = n(990681),
    s = n(688560);
function c(e, t, n = 1 / 0, r = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || r > n ? -1 : t(e) ? r : c(e.parentNode, t, n, r + 1);
}
function E(e, t) {
    return (n) => {
        if (null === n) return !1;
        try {
            if (e) {
                if ("string" == typeof e) {
                    if (n.matches(`.${e}`)) return !0;
                } else if (
                    (function (e, t) {
                        for (let n = e.classList.length; n--; ) {
                            let r = e.classList[n];
                            if (t.test(r)) return !0;
                        }
                        return !1;
                    })(n, e)
                )
                    return !0;
            }
            if (t && n.matches(t)) return !0;
            return !1;
        } catch (e) {
            return !1;
        }
    };
}
((i = o || (o = {}))[(i.Document = 0)] = "Document"),
    (i[(i.DocumentType = 1)] = "DocumentType"),
    (i[(i.Element = 2)] = "Element"),
    (i[(i.Text = 3)] = "Text"),
    (i[(i.CDATA = 4)] = "CDATA"),
    (i[(i.Comment = 5)] = "Comment");
let l =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    u = {
        map: {},
        getId: () => (console.error(l), -1),
        getNode: () => (console.error(l), null),
        removeNodeFromMap() {
            console.error(l);
        },
        has: () => (console.error(l), !1),
        reset() {
            console.error(l);
        },
    };
function d(e, t, n, r, i = window) {
    let a = i.Object.getOwnPropertyDescriptor(e, t);
    return (
        i.Object.defineProperty(
            e,
            t,
            r
                ? n
                : {
                      set(e) {
                          A(() => {
                              n.set.call(this, e);
                          }, 0),
                              a && a.set && a.set.call(this, e);
                      },
                  },
        ),
        () => d(e, t, a || {}, !0)
    );
}
function p(e, t, n) {
    try {
        if (!(t in e)) return () => {};
        let r = e[t],
            i = n(r);
        return (
            "function" == typeof i &&
                ((i.prototype = i.prototype || {}),
                Object.defineProperties(i, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r,
                    },
                })),
            (e[t] = i),
            () => {
                e[t] = r;
            }
        );
    } catch (e) {
        return () => {};
    }
}
function f(e, t, n, r, i) {
    if (!e) return !1;
    let a = e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
    if (!a) return !1;
    let o = E(t, n);
    if (!i) {
        let e = r && a.matches(r);
        return o(a) && !e;
    }
    let _ = c(a, o),
        s = -1;
    return !(_ < 0) && (r && (s = c(a, E(null, r))), (_ > -1 && s < 0) || _ < s);
}
"undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (u = new Proxy(u, { get: (e, t, n) => ("map" === t && console.error(l), Reflect.get(e, t, n)) })),
    /[1-9][0-9]{12}/.test(Date.now().toString());
let I = {};
function T(e) {
    let t = I[e];
    if (t) return t;
    let n = window.document,
        r = window[e];
    if (n && "function" == typeof n.createElement)
        try {
            let t = n.createElement("iframe");
            (t.hidden = !0), n.head.appendChild(t);
            let i = t.contentWindow;
            i && i[e] && (r = i[e]), n.head.removeChild(t);
        } catch (e) {}
    return (I[e] = r.bind(window));
}
function R(...e) {
    return T("requestAnimationFrame")(...e);
}
function A(...e) {
    return T("setTimeout")(...e);
}
var N = (((a = N || {})[(a["2D"] = 0)] = "2D"), (a[(a.WebGL = 1)] = "WebGL"), (a[(a.WebGL2 = 2)] = "WebGL2"), a);
let h = (e) =>
    r
        ? (...t) => {
              try {
                  return e(...t);
              } catch (e) {
                  if (r && !0 === r(e)) return () => {};
                  throw e;
              }
          }
        : e;
for (
    var O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        S = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
        L = 0;
    L < O.length;
    L++
)
    S[O.charCodeAt(L)] = L;
var g = function (e) {
    var t,
        n = new Uint8Array(e),
        r = n.length,
        i = "";
    for (t = 0; t < r; t += 3)
        (i += O[n[t] >> 2]),
            (i += O[((3 & n[t]) << 4) | (n[t + 1] >> 4)]),
            (i += O[((15 & n[t + 1]) << 2) | (n[t + 2] >> 6)]),
            (i += O[63 & n[t + 2]]);
    return (
        r % 3 == 2 ? (i = i.substring(0, i.length - 1) + "=") : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
        i
    );
};
let m = new Map(),
    D = (e, t, n) => {
        let r;
        if (!e || !(y(e, t) || "object" == typeof e)) return;
        let i = e.constructor.name,
            a = ((r = m.get(n)) || ((r = new Map()), m.set(n, r)), r.has(i) || r.set(i, []), r.get(i)),
            o = a.indexOf(e);
        return -1 === o && ((o = a.length), a.push(e)), o;
    },
    C = (e, t, n) =>
        e.map((e) =>
            (function e(t, n, r) {
                if (t instanceof Array) return t.map((t) => e(t, n, r));
                if (null === t);
                else if (
                    t instanceof Float32Array ||
                    t instanceof Float64Array ||
                    t instanceof Int32Array ||
                    t instanceof Uint32Array ||
                    t instanceof Uint8Array ||
                    t instanceof Uint16Array ||
                    t instanceof Int16Array ||
                    t instanceof Int8Array ||
                    t instanceof Uint8ClampedArray
                )
                    return {
                        rr_type: t.constructor.name,
                        args: [Object.values(t)],
                    };
                else if (t instanceof ArrayBuffer)
                    return {
                        rr_type: t.constructor.name,
                        base64: g(t),
                    };
                else if (t instanceof DataView)
                    return {
                        rr_type: t.constructor.name,
                        args: [e(t.buffer, n, r), t.byteOffset, t.byteLength],
                    };
                else if (t instanceof HTMLImageElement) {
                    let e = t.constructor.name,
                        { src: n } = t;
                    return {
                        rr_type: e,
                        src: n,
                    };
                } else if (t instanceof HTMLCanvasElement)
                    return {
                        rr_type: "HTMLImageElement",
                        src: t.toDataURL(),
                    };
                else if (t instanceof ImageData)
                    return {
                        rr_type: t.constructor.name,
                        args: [e(t.data, n, r), t.width, t.height],
                    };
                else if (y(t, n) || "object" == typeof t)
                    return {
                        rr_type: t.constructor.name,
                        index: D(t, n, r),
                    };
                return t;
            })(e, t, n),
        ),
    y = (e, t) =>
        !![
            "WebGLActiveInfo",
            "WebGLBuffer",
            "WebGLFramebuffer",
            "WebGLProgram",
            "WebGLRenderbuffer",
            "WebGLShader",
            "WebGLShaderPrecisionFormat",
            "WebGLTexture",
            "WebGLUniformLocation",
            "WebGLVertexArrayObject",
            "WebGLVertexArrayObjectOES",
        ]
            .filter((e) => "function" == typeof t[e])
            .find((n) => e instanceof t[n]);
function P(e, t, n, r, i) {
    let a = [];
    try {
        let o = p(e.HTMLCanvasElement.prototype, "getContext", function (e) {
            return function (a, ...o) {
                if (!f(this, t, n, r, !0)) {
                    let e = "experimental-webgl" === a ? "webgl" : a;
                    if (("__context" in this || (this.__context = e), i && ["webgl", "webgl2"].includes(e)))
                        if (o[0] && "object" == typeof o[0]) {
                            let e = o[0];
                            e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0);
                        } else o.splice(0, 1, { preserveDrawingBuffer: !0 });
                }
                return e.apply(this, [a, ...o]);
            };
        });
        a.push(o);
    } catch (e) {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return () => {
        a.forEach((e) => e());
    };
}
function v(e, t, n, r, i, a, o, _) {
    let s = [];
    for (let o of Object.getOwnPropertyNames(e))
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(o))
            try {
                if ("function" != typeof e[o]) continue;
                let c = p(e, o, function (e) {
                    return function (...s) {
                        let c = e.apply(this, s);
                        if ((D(c, _, this), "tagName" in this.canvas && !f(this.canvas, r, i, a, !0))) {
                            let e = C(s, _, this),
                                r = {
                                    type: t,
                                    property: o,
                                    args: e,
                                };
                            n(this.canvas, r);
                        }
                        return c;
                    };
                });
                s.push(c);
            } catch (i) {
                let r = d(e, o, {
                    set(e) {
                        n(this.canvas, {
                            type: t,
                            property: o,
                            args: [e],
                            setter: !0,
                        });
                    },
                });
                s.push(r);
            }
    return s;
}
class b {
    reset() {
        this.pendingCanvasMutations.clear(),
            this.restoreHandlers.forEach((e) => {
                try {
                    e();
                } catch (e) {}
            }),
            (this.restoreHandlers = []),
            (this.windowsSet = new WeakSet()),
            (this.windows = []),
            (this.shadowDoms = new Set()),
            (0, _.x)([this, "access", (e) => e.worker, "optionalAccess", (e) => e.terminate, "call", (e) => e()]),
            (this.worker = null),
            (this.snapshotInProgressMap = new Map()),
            ((this.options.recordCanvas && "number" == typeof this.options.sampling) ||
                this.options.enableManualSnapshot) &&
                (this.worker = this.initFPSWorker());
    }
    freeze() {
        this.frozen = !0;
    }
    unfreeze() {
        this.frozen = !1;
    }
    lock() {
        this.locked = !0;
    }
    unlock() {
        this.locked = !1;
    }
    constructor(e) {
        (this.pendingCanvasMutations = new Map()),
            (this.rafStamps = {
                latestId: 0,
                invokeId: null,
            }),
            (this.shadowDoms = new Set()),
            (this.windowsSet = new WeakSet()),
            (this.windows = []),
            (this.restoreHandlers = []),
            (this.frozen = !1),
            (this.locked = !1),
            (this.snapshotInProgressMap = new Map()),
            (this.worker = null),
            (this.processMutation = (e, t) => {
                ((this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) ||
                    !this.rafStamps.invokeId) &&
                    (this.rafStamps.invokeId = this.rafStamps.latestId),
                    this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []),
                    this.pendingCanvasMutations.get(e).push(t);
            });
        let {
            sampling: t = "all",
            win: n,
            blockClass: i,
            blockSelector: a,
            unblockSelector: o,
            maxCanvasSize: _,
            recordCanvas: s,
            dataURLOptions: c,
            errorHandler: E,
        } = e;
        if (
            ((this.mutationCb = e.mutationCb),
            (this.mirror = e.mirror),
            (this.options = e),
            E && (r = E),
            ((s && "number" == typeof t) || e.enableManualSnapshot) && (this.worker = this.initFPSWorker()),
            this.addWindow(n),
            e.enableManualSnapshot)
        )
            return;
        h(() => {
            s && "all" === t && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()),
                s && "number" == typeof t && this.initCanvasFPSObserver(t, i, a, o, _, { dataURLOptions: c });
        })();
    }
    addWindow(e) {
        let {
            sampling: t = "all",
            blockClass: n,
            blockSelector: r,
            unblockSelector: i,
            recordCanvas: a,
            enableManualSnapshot: o,
        } = this.options;
        if (!this.windowsSet.has(e)) {
            if (o) {
                this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                return;
            }
            h(() => {
                if ((a && "all" === t && this.initCanvasMutationObserver(e, n, r, i), a && "number" == typeof t)) {
                    let t = P(e, n, r, i, !0);
                    this.restoreHandlers.push(() => {
                        t();
                    });
                }
            })(),
                this.windowsSet.add(e),
                this.windows.push(new WeakRef(e));
        }
    }
    addShadowRoot(e) {
        this.shadowDoms.add(new WeakRef(e));
    }
    resetShadowRoots() {
        this.shadowDoms = new Set();
    }
    initFPSWorker() {
        let e = new Worker(
            (function () {
                let e = new Blob([
                    'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};',
                ]);
                return URL.createObjectURL(e);
            })(),
        );
        return (
            (e.onmessage = (e) => {
                let t = e.data,
                    { id: n } = t;
                if ((this.snapshotInProgressMap.set(n, !1), !("base64" in t))) return;
                let { base64: r, type: i, width: a, height: o } = t;
                this.mutationCb({
                    id: n,
                    type: N["2D"],
                    commands: [
                        {
                            property: "clearRect",
                            args: [0, 0, a, o],
                        },
                        {
                            property: "drawImage",
                            args: [
                                {
                                    rr_type: "ImageBitmap",
                                    args: [
                                        {
                                            rr_type: "Blob",
                                            data: [
                                                {
                                                    rr_type: "ArrayBuffer",
                                                    base64: r,
                                                },
                                            ],
                                            type: i,
                                        },
                                    ],
                                },
                                0,
                                0,
                                a,
                                o,
                            ],
                        },
                    ],
                });
            }),
            e
        );
    }
    initCanvasFPSObserver(e, t, n, r, i, a) {
        let o = this.takeSnapshot(!1, e, t, n, r, i, a.dataURLOptions);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(o);
        });
    }
    initCanvasMutationObserver(e, t, n, r) {
        let i = P(e, t, n, r, !1),
            a = (function (e, t, n, r, i) {
                let a = [];
                for (let o of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype))
                    try {
                        if ("function" != typeof t.CanvasRenderingContext2D.prototype[o]) continue;
                        let _ = p(t.CanvasRenderingContext2D.prototype, o, function (a) {
                            return function (..._) {
                                return (
                                    f(this.canvas, n, r, i, !0) ||
                                        A(() => {
                                            let n = C(_, t, this);
                                            e(this.canvas, {
                                                type: N["2D"],
                                                property: o,
                                                args: n,
                                            });
                                        }, 0),
                                    a.apply(this, _)
                                );
                            };
                        });
                        a.push(_);
                    } catch (r) {
                        let n = d(t.CanvasRenderingContext2D.prototype, o, {
                            set(t) {
                                e(this.canvas, {
                                    type: N["2D"],
                                    property: o,
                                    args: [t],
                                    setter: !0,
                                });
                            },
                        });
                        a.push(n);
                    }
                return () => {
                    a.forEach((e) => e());
                };
            })(this.processMutation.bind(this), e, t, n, r),
            o = (function (e, t, n, r, i, a) {
                let o = [];
                return (
                    o.push(...v(t.WebGLRenderingContext.prototype, N.WebGL, e, n, r, i, a, t)),
                    void 0 !== t.WebGL2RenderingContext &&
                        o.push(...v(t.WebGL2RenderingContext.prototype, N.WebGL2, e, n, r, i, a, t)),
                    () => {
                        o.forEach((e) => e());
                    }
                );
            })(this.processMutation.bind(this), e, t, n, r, this.mirror);
        this.restoreHandlers.push(() => {
            i(), a(), o();
        });
    }
    snapshot(e) {
        let { options: t } = this,
            n = this.takeSnapshot(
                !0,
                "all" === t.sampling ? 2 : t.sampling || 2,
                t.blockClass,
                t.blockSelector,
                t.unblockSelector,
                t.maxCanvasSize,
                t.dataURLOptions,
                e,
            );
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(n);
        });
    }
    takeSnapshot(e, t, n, r, i, a, o, s) {
        let c = 1000 / t,
            E = 0,
            l = (e) => {
                if (e) return [e];
                let t = [],
                    a = (e) => {
                        e.querySelectorAll("canvas").forEach((e) => {
                            f(e, n, r, i, !0) || t.push(e);
                        });
                    };
                for (let e of this.windows) {
                    let t = e.deref();
                    t && a(t.document);
                }
                for (let e of this.shadowDoms) {
                    let t = e.deref();
                    t && a(t);
                }
                return t;
            },
            u = (t) => {
                if (this.windows.length) {
                    if (E && t - E < c) return void R(u);
                    (E = t),
                        l(s).forEach((t) => {
                            if (!this.mirror.hasNode(t)) return;
                            let n = this.mirror.getId(t);
                            if (!this.snapshotInProgressMap.get(n) && t.width && t.height) {
                                if (
                                    (this.snapshotInProgressMap.set(n, !0),
                                    !e && ["webgl", "webgl2"].includes(t.__context))
                                ) {
                                    let e = t.getContext(t.__context);
                                    !1 ===
                                        (0, _.x)([
                                            e,
                                            "optionalAccess",
                                            (e) => e.getContextAttributes,
                                            "call",
                                            (e) => e(),
                                            "optionalAccess",
                                            (e) => e.preserveDrawingBuffer,
                                        ]) && e.clear(e.COLOR_BUFFER_BIT);
                                }
                                createImageBitmap(t)
                                    .then((e) => {
                                        (0, _.x)([
                                            this,
                                            "access",
                                            (e) => e.worker,
                                            "optionalAccess",
                                            (e) => e.postMessage,
                                            "call",
                                            (r) =>
                                                r(
                                                    {
                                                        id: n,
                                                        bitmap: e,
                                                        width: t.width,
                                                        height: t.height,
                                                        dataURLOptions: o,
                                                        maxCanvasSize: a,
                                                    },
                                                    [e],
                                                ),
                                        ]);
                                    })
                                    .catch((e) => {
                                        h(() => {
                                            throw e;
                                        })();
                                    });
                            }
                        }),
                        e || R(u);
                }
            };
        return R(u);
    }
    startPendingCanvasMutationFlusher() {
        R(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        let e = (t) => {
            (this.rafStamps.latestId = t), R(e);
        };
        R(e);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((e, t) => {
            let n = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, n);
        }),
            R(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(e, t) {
        if (this.frozen || this.locked) return;
        let n = this.pendingCanvasMutations.get(e);
        if (!n || -1 === t) return;
        let r = n.map((e) => {
                let { type: t, ...n } = e;
                return n;
            }),
            { type: i } = n[0];
        this.mutationCb({
            id: t,
            type: i,
            commands: r,
        }),
            this.pendingCanvasMutations.delete(e);
    }
}
let M = {
        low: {
            sampling: { canvas: 1 },
            dataURLOptions: {
                type: "image/webp",
                quality: 0.25,
            },
        },
        medium: {
            sampling: { canvas: 2 },
            dataURLOptions: {
                type: "image/webp",
                quality: 0.4,
            },
        },
        high: {
            sampling: { canvas: 4 },
            dataURLOptions: {
                type: "image/webp",
                quality: 0.5,
            },
        },
    },
    w = (0, s._I)((e = {}) => {
        let t,
            [n, r] = e.maxCanvasSize || [],
            i = {
                quality: e.quality || "medium",
                enableManualSnapshot: e.enableManualSnapshot,
                maxCanvasSize: [n ? Math.min(n, 1280) : 1280, r ? Math.min(r, 1280) : 1280],
            },
            a = new Promise((e) => (t = e));
        return {
            name: "ReplayCanvas",
            getOptions() {
                let { quality: e, enableManualSnapshot: n, maxCanvasSize: r } = i;
                return {
                    enableManualSnapshot: n,
                    recordCanvas: !0,
                    getCanvasManager: (e) => {
                        let i = new b({
                            ...e,
                            enableManualSnapshot: n,
                            maxCanvasSize: r,
                            errorHandler: (e) => {
                                try {
                                    "object" == typeof e && (e.__rrweb__ = !0);
                                } catch (e) {}
                            },
                        });
                        return t(i), i;
                    },
                    ...(M[e || "medium"] || M.medium),
                };
            },
            async snapshot(e) {
                (await a).snapshot(e);
            },
        };
    });
