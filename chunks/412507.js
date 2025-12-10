let n;
r.d(t, { m: () => G });
var a,
    i,
    o,
    _ = r(990681),
    s = r(688560);
function c(e, t, r = 1 / 0, n = 0) {
    return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : c(e.parentNode, t, r, n + 1);
}
function E(e, t) {
    return (r) => {
        if (null === r) return !1;
        try {
            if (e) {
                if ("string" == typeof e) {
                    if (r.matches(`.${e}`)) return !0;
                } else if (
                    (function (e, t) {
                        for (let r = e.classList.length; r--; ) {
                            let n = e.classList[r];
                            if (t.test(n)) return !0;
                        }
                        return !1;
                    })(r, e)
                )
                    return !0;
            }
            if (t && r.matches(t)) return !0;
            return !1;
        } catch (e) {
            return !1;
        }
    };
}
((a = o || (o = {}))[(a.Document = 0)] = "Document"),
    (a[(a.DocumentType = 1)] = "DocumentType"),
    (a[(a.Element = 2)] = "Element"),
    (a[(a.Text = 3)] = "Text"),
    (a[(a.CDATA = 4)] = "CDATA"),
    (a[(a.Comment = 5)] = "Comment");
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
function d(e, t, r, n, a = window) {
    let i = a.Object.getOwnPropertyDescriptor(e, t);
    return (
        a.Object.defineProperty(
            e,
            t,
            n
                ? r
                : {
                      set(e) {
                          f(() => {
                              r.set.call(this, e);
                          }, 0),
                              i && i.set && i.set.call(this, e);
                      },
                  },
        ),
        () => d(e, t, i || {}, !0)
    );
}
function I(e, t, r) {
    try {
        if (!(t in e)) return () => {};
        let n = e[t],
            a = r(n);
        return (
            "function" == typeof a &&
                ((a.prototype = a.prototype || {}),
                Object.defineProperties(a, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: n,
                    },
                })),
            (e[t] = a),
            () => {
                e[t] = n;
            }
        );
    } catch (e) {
        return () => {};
    }
}
function p(e, t, r, n, a) {
    if (!e) return !1;
    let i = e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
    if (!i) return !1;
    let o = E(t, r);
    if (!a) {
        let e = n && i.matches(n);
        return o(i) && !e;
    }
    let _ = c(i, o),
        s = -1;
    return !(_ < 0) && (n && (s = c(i, E(null, n))), (_ > -1 && s < 0) || _ < s);
}
"undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (u = new Proxy(u, { get: (e, t, r) => ("map" === t && console.error(l), Reflect.get(e, t, r)) })),
    /[1-9][0-9]{12}/.test(Date.now().toString());
let R = {};
function T(e) {
    let t = R[e];
    if (t) return t;
    let r = window.document,
        n = window[e];
    if (r && "function" == typeof r.createElement)
        try {
            let t = r.createElement("iframe");
            (t.hidden = !0), r.head.appendChild(t);
            let a = t.contentWindow;
            a && a[e] && (n = a[e]), r.head.removeChild(t);
        } catch (e) {}
    return (R[e] = n.bind(window));
}
function A(...e) {
    return T("requestAnimationFrame")(...e);
}
function f(...e) {
    return T("setTimeout")(...e);
}
var N = (((i = N || {})[(i["2D"] = 0)] = "2D"), (i[(i.WebGL = 1)] = "WebGL"), (i[(i.WebGL2 = 2)] = "WebGL2"), i);
let O = (e) =>
    n
        ? (...t) => {
              try {
                  return e(...t);
              } catch (e) {
                  if (n && !0 === n(e)) return () => {};
                  throw e;
              }
          }
        : e;
for (
    var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        S = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
        D = 0;
    D < h.length;
    D++
)
    S[h.charCodeAt(D)] = D;
var C = function (e) {
    var t,
        r = new Uint8Array(e),
        n = r.length,
        a = "";
    for (t = 0; t < n; t += 3)
        (a += h[r[t] >> 2]),
            (a += h[((3 & r[t]) << 4) | (r[t + 1] >> 4)]),
            (a += h[((15 & r[t + 1]) << 2) | (r[t + 2] >> 6)]),
            (a += h[63 & r[t + 2]]);
    return (
        n % 3 == 2 ? (a = a.substring(0, a.length - 1) + "=") : n % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="),
        a
    );
};
let L = new Map(),
    g = (e, t, r) => {
        let n;
        if (!e || !(y(e, t) || "object" == typeof e)) return;
        let a = e.constructor.name,
            i = ((n = L.get(r)) || ((n = new Map()), L.set(r, n)), n.has(a) || n.set(a, []), n.get(a)),
            o = i.indexOf(e);
        return -1 === o && ((o = i.length), i.push(e)), o;
    },
    m = (e, t, r) =>
        e.map((e) =>
            (function e(t, r, n) {
                if (t instanceof Array) return t.map((t) => e(t, r, n));
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
                        base64: C(t),
                    };
                else if (t instanceof DataView)
                    return {
                        rr_type: t.constructor.name,
                        args: [e(t.buffer, r, n), t.byteOffset, t.byteLength],
                    };
                else if (t instanceof HTMLImageElement) {
                    let e = t.constructor.name,
                        { src: r } = t;
                    return {
                        rr_type: e,
                        src: r,
                    };
                } else if (t instanceof HTMLCanvasElement)
                    return {
                        rr_type: "HTMLImageElement",
                        src: t.toDataURL(),
                    };
                else if (t instanceof ImageData)
                    return {
                        rr_type: t.constructor.name,
                        args: [e(t.data, r, n), t.width, t.height],
                    };
                else if (y(t, r) || "object" == typeof t)
                    return {
                        rr_type: t.constructor.name,
                        index: g(t, r, n),
                    };
                return t;
            })(e, t, r),
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
            .find((r) => e instanceof t[r]);
function P(e, t, r, n, a) {
    let i = [];
    try {
        let o = I(e.HTMLCanvasElement.prototype, "getContext", function (e) {
            return function (i, ...o) {
                if (!p(this, t, r, n, !0)) {
                    let e = "experimental-webgl" === i ? "webgl" : i;
                    if (("__context" in this || (this.__context = e), a && ["webgl", "webgl2"].includes(e)))
                        if (o[0] && "object" == typeof o[0]) {
                            let e = o[0];
                            e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0);
                        } else o.splice(0, 1, { preserveDrawingBuffer: !0 });
                }
                return e.apply(this, [i, ...o]);
            };
        });
        i.push(o);
    } catch (e) {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return () => {
        i.forEach((e) => e());
    };
}
function v(e, t, r, n, a, i, o, _) {
    let s = [];
    for (let o of Object.getOwnPropertyNames(e))
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(o))
            try {
                if ("function" != typeof e[o]) continue;
                let c = I(e, o, function (e) {
                    return function (...s) {
                        let c = e.apply(this, s);
                        if ((g(c, _, this), "tagName" in this.canvas && !p(this.canvas, n, a, i, !0))) {
                            let e = m(s, _, this),
                                n = {
                                    type: t,
                                    property: o,
                                    args: e,
                                };
                            r(this.canvas, n);
                        }
                        return c;
                    };
                });
                s.push(c);
            } catch (a) {
                let n = d(e, o, {
                    set(e) {
                        r(this.canvas, {
                            type: t,
                            property: o,
                            args: [e],
                            setter: !0,
                        });
                    },
                });
                s.push(n);
            }
    return s;
}
class M {
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
            win: r,
            blockClass: a,
            blockSelector: i,
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
            E && (n = E),
            ((s && "number" == typeof t) || e.enableManualSnapshot) && (this.worker = this.initFPSWorker()),
            this.addWindow(r),
            e.enableManualSnapshot)
        )
            return;
        O(() => {
            s && "all" === t && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()),
                s && "number" == typeof t && this.initCanvasFPSObserver(t, a, i, o, _, { dataURLOptions: c });
        })();
    }
    addWindow(e) {
        let {
            sampling: t = "all",
            blockClass: r,
            blockSelector: n,
            unblockSelector: a,
            recordCanvas: i,
            enableManualSnapshot: o,
        } = this.options;
        if (!this.windowsSet.has(e)) {
            if (o) {
                this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                return;
            }
            O(() => {
                if ((i && "all" === t && this.initCanvasMutationObserver(e, r, n, a), i && "number" == typeof t)) {
                    let t = P(e, r, n, a, !0);
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
                    { id: r } = t;
                if ((this.snapshotInProgressMap.set(r, !1), !("base64" in t))) return;
                let { base64: n, type: a, width: i, height: o } = t;
                this.mutationCb({
                    id: r,
                    type: N["2D"],
                    commands: [
                        {
                            property: "clearRect",
                            args: [0, 0, i, o],
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
                                                    base64: n,
                                                },
                                            ],
                                            type: a,
                                        },
                                    ],
                                },
                                0,
                                0,
                                i,
                                o,
                            ],
                        },
                    ],
                });
            }),
            e
        );
    }
    initCanvasFPSObserver(e, t, r, n, a, i) {
        let o = this.takeSnapshot(!1, e, t, r, n, a, i.dataURLOptions);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(o);
        });
    }
    initCanvasMutationObserver(e, t, r, n) {
        let a = P(e, t, r, n, !1),
            i = (function (e, t, r, n, a) {
                let i = [];
                for (let o of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype))
                    try {
                        if ("function" != typeof t.CanvasRenderingContext2D.prototype[o]) continue;
                        let _ = I(t.CanvasRenderingContext2D.prototype, o, function (i) {
                            return function (..._) {
                                return (
                                    p(this.canvas, r, n, a, !0) ||
                                        f(() => {
                                            let r = m(_, t, this);
                                            e(this.canvas, {
                                                type: N["2D"],
                                                property: o,
                                                args: r,
                                            });
                                        }, 0),
                                    i.apply(this, _)
                                );
                            };
                        });
                        i.push(_);
                    } catch (n) {
                        let r = d(t.CanvasRenderingContext2D.prototype, o, {
                            set(t) {
                                e(this.canvas, {
                                    type: N["2D"],
                                    property: o,
                                    args: [t],
                                    setter: !0,
                                });
                            },
                        });
                        i.push(r);
                    }
                return () => {
                    i.forEach((e) => e());
                };
            })(this.processMutation.bind(this), e, t, r, n),
            o = (function (e, t, r, n, a, i) {
                let o = [];
                return (
                    o.push(...v(t.WebGLRenderingContext.prototype, N.WebGL, e, r, n, a, i, t)),
                    void 0 !== t.WebGL2RenderingContext &&
                        o.push(...v(t.WebGL2RenderingContext.prototype, N.WebGL2, e, r, n, a, i, t)),
                    () => {
                        o.forEach((e) => e());
                    }
                );
            })(this.processMutation.bind(this), e, t, r, n, this.mirror);
        this.restoreHandlers.push(() => {
            a(), i(), o();
        });
    }
    snapshot(e) {
        let { options: t } = this,
            r = this.takeSnapshot(
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
            cancelAnimationFrame(r);
        });
    }
    takeSnapshot(e, t, r, n, a, i, o, s) {
        let c = 1000 / t,
            E = 0,
            l = (e) => {
                if (e) return [e];
                let t = [],
                    i = (e) => {
                        e.querySelectorAll("canvas").forEach((e) => {
                            p(e, r, n, a, !0) || t.push(e);
                        });
                    };
                for (let e of this.windows) {
                    let t = e.deref();
                    t && i(t.document);
                }
                for (let e of this.shadowDoms) {
                    let t = e.deref();
                    t && i(t);
                }
                return t;
            },
            u = (t) => {
                if (this.windows.length) {
                    if (E && t - E < c) return void A(u);
                    (E = t),
                        l(s).forEach((t) => {
                            if (!this.mirror.hasNode(t)) return;
                            let r = this.mirror.getId(t);
                            if (!this.snapshotInProgressMap.get(r) && t.width && t.height) {
                                if (
                                    (this.snapshotInProgressMap.set(r, !0),
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
                                            (n) =>
                                                n(
                                                    {
                                                        id: r,
                                                        bitmap: e,
                                                        width: t.width,
                                                        height: t.height,
                                                        dataURLOptions: o,
                                                        maxCanvasSize: i,
                                                    },
                                                    [e],
                                                ),
                                        ]);
                                    })
                                    .catch((e) => {
                                        O(() => {
                                            throw e;
                                        })();
                                    });
                            }
                        }),
                        e || A(u);
                }
            };
        return A(u);
    }
    startPendingCanvasMutationFlusher() {
        A(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        let e = (t) => {
            (this.rafStamps.latestId = t), A(e);
        };
        A(e);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((e, t) => {
            let r = this.mirror.getId(t);
            this.flushPendingCanvasMutationFor(t, r);
        }),
            A(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(e, t) {
        if (this.frozen || this.locked) return;
        let r = this.pendingCanvasMutations.get(e);
        if (!r || -1 === t) return;
        let n = r.map((e) => {
                let { type: t, ...r } = e;
                return r;
            }),
            { type: a } = r[0];
        this.mutationCb({
            id: t,
            type: a,
            commands: n,
        }),
            this.pendingCanvasMutations.delete(e);
    }
}
let w = {
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
    G = (0, s._I)((e = {}) => {
        let t,
            [r, n] = e.maxCanvasSize || [],
            a = {
                quality: e.quality || "medium",
                enableManualSnapshot: e.enableManualSnapshot,
                maxCanvasSize: [r ? Math.min(r, 1280) : 1280, n ? Math.min(n, 1280) : 1280],
            },
            i = new Promise((e) => (t = e));
        return {
            name: "ReplayCanvas",
            getOptions() {
                let { quality: e, enableManualSnapshot: r, maxCanvasSize: n } = a;
                return {
                    enableManualSnapshot: r,
                    recordCanvas: !0,
                    getCanvasManager: (e) => {
                        let a = new M({
                            ...e,
                            enableManualSnapshot: r,
                            maxCanvasSize: n,
                            errorHandler: (e) => {
                                try {
                                    "object" == typeof e && (e.__rrweb__ = !0);
                                } catch (e) {}
                            },
                        });
                        return t(a), a;
                    },
                    ...(w[e || "medium"] || w.medium),
                };
            },
            async snapshot(e) {
                (await i).snapshot(e);
            },
        };
    });
