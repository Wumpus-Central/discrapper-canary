let a;
_.d(e, { m: () => W });
var r,
    n,
    o,
    E = _(507690),
    i = _(151122);
function c(t, e, _ = 1 / 0, a = 0) {
    return !t || t.nodeType !== t.ELEMENT_NODE || a > _ ? -1 : e(t) ? a : c(t.parentNode, e, _, a + 1);
}
function s(t, e) {
    return (_) => {
        if (null === _) return !1;
        try {
            if (t) {
                if ("string" == typeof t) {
                    if (_.matches(`.${t}`)) return !0;
                } else if (
                    (function (t, e) {
                        for (let _ = t.classList.length; _--; ) {
                            let a = t.classList[_];
                            if (e.test(a)) return !0;
                        }
                        return !1;
                    })(_, t)
                )
                    return !0;
            }
            if (e && _.matches(e)) return !0;
            return !1;
        } catch (t) {
            return !1;
        }
    };
}
((r = o || (o = {}))[(r.Document = 0)] = "Document"),
    (r[(r.DocumentType = 1)] = "DocumentType"),
    (r[(r.Element = 2)] = "Element"),
    (r[(r.Text = 3)] = "Text"),
    (r[(r.CDATA = 4)] = "CDATA"),
    (r[(r.Comment = 5)] = "Comment");
let l =
        "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
    I = {
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
function R(t, e, _, a, r = window) {
    let n = r.Object.getOwnPropertyDescriptor(t, e);
    return (
        r.Object.defineProperty(
            t,
            e,
            a
                ? _
                : {
                      set(t) {
                          f(() => {
                              _.set.call(this, t);
                          }, 0),
                              n && n.set && n.set.call(this, t);
                      },
                  },
        ),
        () => R(t, e, n || {}, !0)
    );
}
function N(t, e, _) {
    try {
        if (!(e in t)) return () => {};
        let a = t[e],
            r = _(a);
        return (
            "function" == typeof r &&
                ((r.prototype = r.prototype || {}),
                Object.defineProperties(r, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: a,
                    },
                })),
            (t[e] = r),
            () => {
                t[e] = a;
            }
        );
    } catch (t) {
        return () => {};
    }
}
function A(t, e, _, a, r) {
    if (!t) return !1;
    let n = t ? (t.nodeType === t.ELEMENT_NODE ? t : t.parentElement) : null;
    if (!n) return !1;
    let o = s(e, _);
    if (!r) {
        let t = a && n.matches(a);
        return o(n) && !t;
    }
    let E = c(n, o),
        i = -1;
    return !(E < 0) && (a && (i = c(n, s(null, a))), (E > -1 && i < 0) || E < i);
}
"undefined" != typeof window &&
    window.Proxy &&
    window.Reflect &&
    (I = new Proxy(I, { get: (t, e, _) => ("map" === e && console.error(l), Reflect.get(t, e, _)) })),
    /[1-9][0-9]{12}/.test(Date.now().toString());
let u = {};
function T(t) {
    let e = u[t];
    if (e) return e;
    let _ = window.document,
        a = window[t];
    if (_ && "function" == typeof _.createElement)
        try {
            let e = _.createElement("iframe");
            (e.hidden = !0), _.head.appendChild(e);
            let r = e.contentWindow;
            r && r[t] && (a = r[t]), _.head.removeChild(e);
        } catch (t) {}
    return (u[t] = a.bind(window));
}
function d(...t) {
    return T("requestAnimationFrame")(...t);
}
function f(...t) {
    return T("setTimeout")(...t);
}
var O = (((n = O || {})[(n["2D"] = 0)] = "2D"), (n[(n.WebGL = 1)] = "WebGL"), (n[(n.WebGL2 = 2)] = "WebGL2"), n);
let L = (t) =>
    a
        ? (...e) => {
              try {
                  return t(...e);
              } catch (t) {
                  if (a && !0 === a(t)) return () => {};
                  throw t;
              }
          }
        : t;
for (
    var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        C = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
        P = 0;
    P < p.length;
    P++
)
    C[p.charCodeAt(P)] = P;
var h = function (t) {
    var e,
        _ = new Uint8Array(t),
        a = _.length,
        r = "";
    for (e = 0; e < a; e += 3)
        (r += p[_[e] >> 2]),
            (r += p[((3 & _[e]) << 4) | (_[e + 1] >> 4)]),
            (r += p[((15 & _[e + 1]) << 2) | (_[e + 2] >> 6)]),
            (r += p[63 & _[e + 2]]);
    return (
        a % 3 == 2 ? (r = r.substring(0, r.length - 1) + "=") : a % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="),
        r
    );
};
let D = new Map(),
    S = (t, e, _) => {
        let a;
        if (!t || !(y(t, e) || "object" == typeof t)) return;
        let r = t.constructor.name,
            n = ((a = D.get(_)) || ((a = new Map()), D.set(_, a)), a.has(r) || a.set(r, []), a.get(r)),
            o = n.indexOf(t);
        return -1 === o && ((o = n.length), n.push(t)), o;
    },
    g = (t, e, _) =>
        t.map((t) =>
            (function t(e, _, a) {
                if (e instanceof Array) return e.map((e) => t(e, _, a));
                if (null === e);
                else if (
                    e instanceof Float32Array ||
                    e instanceof Float64Array ||
                    e instanceof Int32Array ||
                    e instanceof Uint32Array ||
                    e instanceof Uint8Array ||
                    e instanceof Uint16Array ||
                    e instanceof Int16Array ||
                    e instanceof Int8Array ||
                    e instanceof Uint8ClampedArray
                )
                    return {
                        rr_type: e.constructor.name,
                        args: [Object.values(e)],
                    };
                else if (e instanceof ArrayBuffer)
                    return {
                        rr_type: e.constructor.name,
                        base64: h(e),
                    };
                else if (e instanceof DataView)
                    return {
                        rr_type: e.constructor.name,
                        args: [t(e.buffer, _, a), e.byteOffset, e.byteLength],
                    };
                else if (e instanceof HTMLImageElement) {
                    let t = e.constructor.name,
                        { src: _ } = e;
                    return {
                        rr_type: t,
                        src: _,
                    };
                } else if (e instanceof HTMLCanvasElement)
                    return {
                        rr_type: "HTMLImageElement",
                        src: e.toDataURL(),
                    };
                else if (e instanceof ImageData)
                    return {
                        rr_type: e.constructor.name,
                        args: [t(e.data, _, a), e.width, e.height],
                    };
                else if (y(e, _) || "object" == typeof e)
                    return {
                        rr_type: e.constructor.name,
                        index: S(e, _, a),
                    };
                return e;
            })(t, e, _),
        ),
    y = (t, e) =>
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
            .filter((t) => "function" == typeof e[t])
            .find((_) => t instanceof e[_]);
function m(t, e, _, a, r) {
    let n = [];
    try {
        let o = N(t.HTMLCanvasElement.prototype, "getContext", function (t) {
            return function (n, ...o) {
                if (!A(this, e, _, a, !0)) {
                    let t = "experimental-webgl" === n ? "webgl" : n;
                    if (("__context" in this || (this.__context = t), r && ["webgl", "webgl2"].includes(t)))
                        if (o[0] && "object" == typeof o[0]) {
                            let t = o[0];
                            t.preserveDrawingBuffer || (t.preserveDrawingBuffer = !0);
                        } else o.splice(0, 1, { preserveDrawingBuffer: !0 });
                }
                return t.apply(this, [n, ...o]);
            };
        });
        n.push(o);
    } catch (t) {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext");
    }
    return () => {
        n.forEach((t) => t());
    };
}
function G(t, e, _, a, r, n, o, E) {
    let i = [];
    for (let o of Object.getOwnPropertyNames(t))
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(o))
            try {
                if ("function" != typeof t[o]) continue;
                let c = N(t, o, function (t) {
                    return function (...i) {
                        let c = t.apply(this, i);
                        if ((S(c, E, this), "tagName" in this.canvas && !A(this.canvas, a, r, n, !0))) {
                            let t = g(i, E, this),
                                a = {
                                    type: e,
                                    property: o,
                                    args: t,
                                };
                            _(this.canvas, a);
                        }
                        return c;
                    };
                });
                i.push(c);
            } catch (r) {
                let a = R(t, o, {
                    set(t) {
                        _(this.canvas, {
                            type: e,
                            property: o,
                            args: [t],
                            setter: !0,
                        });
                    },
                });
                i.push(a);
            }
    return i;
}
class v {
    reset() {
        this.pendingCanvasMutations.clear(),
            this.restoreHandlers.forEach((t) => {
                try {
                    t();
                } catch (t) {}
            }),
            (this.restoreHandlers = []),
            (this.windowsSet = new WeakSet()),
            (this.windows = []),
            (this.shadowDoms = new Set()),
            (0, E.x)([this, "access", (t) => t.worker, "optionalAccess", (t) => t.terminate, "call", (t) => t()]),
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
    constructor(t) {
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
            (this.processMutation = (t, e) => {
                ((this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) ||
                    !this.rafStamps.invokeId) &&
                    (this.rafStamps.invokeId = this.rafStamps.latestId),
                    this.pendingCanvasMutations.has(t) || this.pendingCanvasMutations.set(t, []),
                    this.pendingCanvasMutations.get(t).push(e);
            });
        let {
            sampling: e = "all",
            win: _,
            blockClass: r,
            blockSelector: n,
            unblockSelector: o,
            maxCanvasSize: E,
            recordCanvas: i,
            dataURLOptions: c,
            errorHandler: s,
        } = t;
        if (
            ((this.mutationCb = t.mutationCb),
            (this.mirror = t.mirror),
            (this.options = t),
            s && (a = s),
            ((i && "number" == typeof e) || t.enableManualSnapshot) && (this.worker = this.initFPSWorker()),
            this.addWindow(_),
            t.enableManualSnapshot)
        )
            return;
        L(() => {
            i && "all" === e && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()),
                i && "number" == typeof e && this.initCanvasFPSObserver(e, r, n, o, E, { dataURLOptions: c });
        })();
    }
    addWindow(t) {
        let {
            sampling: e = "all",
            blockClass: _,
            blockSelector: a,
            unblockSelector: r,
            recordCanvas: n,
            enableManualSnapshot: o,
        } = this.options;
        if (!this.windowsSet.has(t)) {
            if (o) {
                this.windowsSet.add(t), this.windows.push(new WeakRef(t));
                return;
            }
            L(() => {
                if ((n && "all" === e && this.initCanvasMutationObserver(t, _, a, r), n && "number" == typeof e)) {
                    let e = m(t, _, a, r, !0);
                    this.restoreHandlers.push(() => {
                        e();
                    });
                }
            })(),
                this.windowsSet.add(t),
                this.windows.push(new WeakRef(t));
        }
    }
    addShadowRoot(t) {
        this.shadowDoms.add(new WeakRef(t));
    }
    resetShadowRoots() {
        this.shadowDoms = new Set();
    }
    initFPSWorker() {
        let t = new Worker(
            (function () {
                let t = new Blob([
                    'for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};',
                ]);
                return URL.createObjectURL(t);
            })(),
        );
        return (
            (t.onmessage = (t) => {
                let e = t.data,
                    { id: _ } = e;
                if ((this.snapshotInProgressMap.set(_, !1), !("base64" in e))) return;
                let { base64: a, type: r, width: n, height: o } = e;
                this.mutationCb({
                    id: _,
                    type: O["2D"],
                    commands: [
                        {
                            property: "clearRect",
                            args: [0, 0, n, o],
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
                                                    base64: a,
                                                },
                                            ],
                                            type: r,
                                        },
                                    ],
                                },
                                0,
                                0,
                                n,
                                o,
                            ],
                        },
                    ],
                });
            }),
            t
        );
    }
    initCanvasFPSObserver(t, e, _, a, r, n) {
        let o = this.takeSnapshot(!1, t, e, _, a, r, n.dataURLOptions);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(o);
        });
    }
    initCanvasMutationObserver(t, e, _, a) {
        let r = m(t, e, _, a, !1),
            n = (function (t, e, _, a, r) {
                let n = [];
                for (let o of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype))
                    try {
                        if ("function" != typeof e.CanvasRenderingContext2D.prototype[o]) continue;
                        let E = N(e.CanvasRenderingContext2D.prototype, o, function (n) {
                            return function (...E) {
                                return (
                                    A(this.canvas, _, a, r, !0) ||
                                        f(() => {
                                            let _ = g(E, e, this);
                                            t(this.canvas, {
                                                type: O["2D"],
                                                property: o,
                                                args: _,
                                            });
                                        }, 0),
                                    n.apply(this, E)
                                );
                            };
                        });
                        n.push(E);
                    } catch (a) {
                        let _ = R(e.CanvasRenderingContext2D.prototype, o, {
                            set(e) {
                                t(this.canvas, {
                                    type: O["2D"],
                                    property: o,
                                    args: [e],
                                    setter: !0,
                                });
                            },
                        });
                        n.push(_);
                    }
                return () => {
                    n.forEach((t) => t());
                };
            })(this.processMutation.bind(this), t, e, _, a),
            o = (function (t, e, _, a, r, n) {
                let o = [];
                return (
                    o.push(...G(e.WebGLRenderingContext.prototype, O.WebGL, t, _, a, r, n, e)),
                    void 0 !== e.WebGL2RenderingContext &&
                        o.push(...G(e.WebGL2RenderingContext.prototype, O.WebGL2, t, _, a, r, n, e)),
                    () => {
                        o.forEach((t) => t());
                    }
                );
            })(this.processMutation.bind(this), t, e, _, a, this.mirror);
        this.restoreHandlers.push(() => {
            r(), n(), o();
        });
    }
    snapshot(t) {
        let { options: e } = this,
            _ = this.takeSnapshot(
                !0,
                "all" === e.sampling ? 2 : e.sampling || 2,
                e.blockClass,
                e.blockSelector,
                e.unblockSelector,
                e.maxCanvasSize,
                e.dataURLOptions,
                t,
            );
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(_);
        });
    }
    takeSnapshot(t, e, _, a, r, n, o, i) {
        let c = 1000 / e,
            s = 0,
            l = (t) => {
                if (t) return [t];
                let e = [],
                    n = (t) => {
                        t.querySelectorAll("canvas").forEach((t) => {
                            A(t, _, a, r, !0) || e.push(t);
                        });
                    };
                for (let t of this.windows) {
                    let e = t.deref();
                    e && n(e.document);
                }
                for (let t of this.shadowDoms) {
                    let e = t.deref();
                    e && n(e);
                }
                return e;
            },
            I = (e) => {
                if (this.windows.length) {
                    if (s && e - s < c) return void d(I);
                    (s = e),
                        l(i).forEach((e) => {
                            if (!this.mirror.hasNode(e)) return;
                            let _ = this.mirror.getId(e);
                            if (!this.snapshotInProgressMap.get(_) && e.width && e.height) {
                                if (
                                    (this.snapshotInProgressMap.set(_, !0),
                                    !t && ["webgl", "webgl2"].includes(e.__context))
                                ) {
                                    let t = e.getContext(e.__context);
                                    !1 ===
                                        (0, E.x)([
                                            t,
                                            "optionalAccess",
                                            (t) => t.getContextAttributes,
                                            "call",
                                            (t) => t(),
                                            "optionalAccess",
                                            (t) => t.preserveDrawingBuffer,
                                        ]) && t.clear(t.COLOR_BUFFER_BIT);
                                }
                                createImageBitmap(e)
                                    .then((t) => {
                                        (0, E.x)([
                                            this,
                                            "access",
                                            (t) => t.worker,
                                            "optionalAccess",
                                            (t) => t.postMessage,
                                            "call",
                                            (a) =>
                                                a(
                                                    {
                                                        id: _,
                                                        bitmap: t,
                                                        width: e.width,
                                                        height: e.height,
                                                        dataURLOptions: o,
                                                        maxCanvasSize: n,
                                                    },
                                                    [t],
                                                ),
                                        ]);
                                    })
                                    .catch((t) => {
                                        L(() => {
                                            throw t;
                                        })();
                                    });
                            }
                        }),
                        d(I);
                }
            };
        return d(I);
    }
    startPendingCanvasMutationFlusher() {
        d(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        let t = (e) => {
            (this.rafStamps.latestId = e), d(t);
        };
        d(t);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((t, e) => {
            let _ = this.mirror.getId(e);
            this.flushPendingCanvasMutationFor(e, _);
        }),
            d(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(t, e) {
        if (this.frozen || this.locked) return;
        let _ = this.pendingCanvasMutations.get(t);
        if (!_ || -1 === e) return;
        let a = _.map((t) => {
                let { type: e, ..._ } = t;
                return _;
            }),
            { type: r } = _[0];
        this.mutationCb({
            id: e,
            type: r,
            commands: a,
        }),
            this.pendingCanvasMutations.delete(t);
    }
}
let U = {
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
    W = (0, i._I)((t = {}) => {
        let e,
            [_, a] = t.maxCanvasSize || [],
            r = {
                quality: t.quality || "medium",
                enableManualSnapshot: t.enableManualSnapshot,
                maxCanvasSize: [_ ? Math.min(_, 1280) : 1280, a ? Math.min(a, 1280) : 1280],
            },
            n = new Promise((t) => (e = t));
        return {
            name: "ReplayCanvas",
            getOptions() {
                let { quality: t, enableManualSnapshot: _, maxCanvasSize: a } = r;
                return {
                    enableManualSnapshot: _,
                    recordCanvas: !0,
                    getCanvasManager: (t) => {
                        let r = new v({
                            ...t,
                            enableManualSnapshot: _,
                            maxCanvasSize: a,
                            errorHandler: (t) => {
                                try {
                                    "object" == typeof t && (t.__rrweb__ = !0);
                                } catch (t) {}
                            },
                        });
                        return e(r), r;
                    },
                    ...(U[t || "medium"] || U.medium),
                };
            },
            async snapshot(t) {
                (await n).snapshot(t);
            },
        };
    });
