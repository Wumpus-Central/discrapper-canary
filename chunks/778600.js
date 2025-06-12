let r;
a.d(e, { m: () => w });
var _,
    n,
    o,
    i = a(507690),
    c = a(151122);
function E(t, e, a = 1 / 0, r = 0) {
    return !t || t.nodeType !== t.ELEMENT_NODE || r > a ? -1 : e(t) ? r : E(t.parentNode, e, a, r + 1);
}
function s(t, e) {
    return (a) => {
        if (null === a) return !1;
        try {
            if (t) {
                if ('string' == typeof t) {
                    if (a.matches(`.${t}`)) return !0;
                } else if (
                    (function (t, e) {
                        for (let a = t.classList.length; a--; ) {
                            let r = t.classList[a];
                            if (e.test(r)) return !0;
                        }
                        return !1;
                    })(a, t)
                )
                    return !0;
            }
            if (e && a.matches(e)) return !0;
            return !1;
        } catch (t) {
            return !1;
        }
    };
}
((_ = o || (o = {}))[(_.Document = 0)] = 'Document'), (_[(_.DocumentType = 1)] = 'DocumentType'), (_[(_.Element = 2)] = 'Element'), (_[(_.Text = 3)] = 'Text'), (_[(_.CDATA = 4)] = 'CDATA'), (_[(_.Comment = 5)] = 'Comment');
let l = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
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
        }
    };
function u(t, e, a, r, _ = window) {
    let n = _.Object.getOwnPropertyDescriptor(t, e);
    return (
        _.Object.defineProperty(
            t,
            e,
            r
                ? a
                : {
                      set(t) {
                          L(() => {
                              a.set.call(this, t);
                          }, 0),
                              n && n.set && n.set.call(this, t);
                      }
                  }
        ),
        () => u(t, e, n || {}, !0)
    );
}
function R(t, e, a) {
    try {
        if (!(e in t)) return () => {};
        let r = t[e],
            _ = a(r);
        return (
            'function' == typeof _ &&
                ((_.prototype = _.prototype || {}),
                Object.defineProperties(_, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })),
            (t[e] = _),
            () => {
                t[e] = r;
            }
        );
    } catch (t) {
        return () => {};
    }
}
function A(t, e, a, r, _) {
    if (!t) return !1;
    let n = t ? (t.nodeType === t.ELEMENT_NODE ? t : t.parentElement) : null;
    if (!n) return !1;
    let o = s(e, a);
    if (!_) {
        let t = r && n.matches(r);
        return o(n) && !t;
    }
    let i = E(n, o),
        c = -1;
    return !(i < 0) && (r && (c = E(n, s(null, r))), (i > -1 && c < 0) || i < c);
}
'undefined' != typeof window && window.Proxy && window.Reflect && (I = new Proxy(I, { get: (t, e, a) => ('map' === e && console.error(l), Reflect.get(t, e, a)) })), /[1-9][0-9]{12}/.test(Date.now().toString());
let T = {};
function N(t) {
    let e = T[t];
    if (e) return e;
    let a = window.document,
        r = window[t];
    if (a && 'function' == typeof a.createElement)
        try {
            let e = a.createElement('iframe');
            (e.hidden = !0), a.head.appendChild(e);
            let _ = e.contentWindow;
            _ && _[t] && (r = _[t]), a.head.removeChild(e);
        } catch (t) {}
    return (T[t] = r.bind(window));
}
function d(...t) {
    return N('requestAnimationFrame')(...t);
}
function L(...t) {
    return N('setTimeout')(...t);
}
var p = (((n = p || {})[(n['2D'] = 0)] = '2D'), (n[(n.WebGL = 1)] = 'WebGL'), (n[(n.WebGL2 = 2)] = 'WebGL2'), n);
let f = (t) =>
    r
        ? (...e) => {
              try {
                  return t(...e);
              } catch (t) {
                  if (r && !0 === r(t)) return () => {};
                  throw t;
              }
          }
        : t;
for (var O = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', h = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256), D = 0; D < O.length; D++) h[O.charCodeAt(D)] = D;
var P = function (t) {
    var e,
        a = new Uint8Array(t),
        r = a.length,
        _ = '';
    for (e = 0; e < r; e += 3) (_ += O[a[e] >> 2]), (_ += O[((3 & a[e]) << 4) | (a[e + 1] >> 4)]), (_ += O[((15 & a[e + 1]) << 2) | (a[e + 2] >> 6)]), (_ += O[63 & a[e + 2]]);
    return r % 3 == 2 ? (_ = _.substring(0, _.length - 1) + '=') : r % 3 == 1 && (_ = _.substring(0, _.length - 2) + '=='), _;
};
let g = new Map(),
    C = (t, e, a) => {
        let r;
        if (!t || !(m(t, e) || 'object' == typeof t)) return;
        let _ = t.constructor.name,
            n = ((r = g.get(a)) || ((r = new Map()), g.set(a, r)), r.has(_) || r.set(_, []), r.get(_)),
            o = n.indexOf(t);
        return -1 === o && ((o = n.length), n.push(t)), o;
    },
    y = (t, e, a) =>
        t.map((t) =>
            (function t(e, a, r) {
                if (e instanceof Array) return e.map((e) => t(e, a, r));
                if (null === e);
                else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray)
                    return {
                        rr_type: e.constructor.name,
                        args: [Object.values(e)]
                    };
                else if (e instanceof ArrayBuffer)
                    return {
                        rr_type: e.constructor.name,
                        base64: P(e)
                    };
                else if (e instanceof DataView)
                    return {
                        rr_type: e.constructor.name,
                        args: [t(e.buffer, a, r), e.byteOffset, e.byteLength]
                    };
                else if (e instanceof HTMLImageElement) {
                    let t = e.constructor.name,
                        { src: a } = e;
                    return {
                        rr_type: t,
                        src: a
                    };
                } else if (e instanceof HTMLCanvasElement)
                    return {
                        rr_type: 'HTMLImageElement',
                        src: e.toDataURL()
                    };
                else if (e instanceof ImageData)
                    return {
                        rr_type: e.constructor.name,
                        args: [t(e.data, a, r), e.width, e.height]
                    };
                else if (m(e, a) || 'object' == typeof e)
                    return {
                        rr_type: e.constructor.name,
                        index: C(e, a, r)
                    };
                return e;
            })(t, e, a)
        ),
    m = (t, e) => !!['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'].filter((t) => 'function' == typeof e[t]).find((a) => t instanceof e[a]);
function v(t, e, a, r, _) {
    let n = [];
    try {
        let o = R(t.HTMLCanvasElement.prototype, 'getContext', function (t) {
            return function (n, ...o) {
                if (!A(this, e, a, r, !0)) {
                    let t = 'experimental-webgl' === n ? 'webgl' : n;
                    if (('__context' in this || (this.__context = t), _ && ['webgl', 'webgl2'].includes(t)))
                        if (o[0] && 'object' == typeof o[0]) {
                            let t = o[0];
                            t.preserveDrawingBuffer || (t.preserveDrawingBuffer = !0);
                        } else o.splice(0, 1, { preserveDrawingBuffer: !0 });
                }
                return t.apply(this, [n, ...o]);
            };
        });
        n.push(o);
    } catch (t) {
        console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return () => {
        n.forEach((t) => t());
    };
}
function U(t, e, a, r, _, n, o, i) {
    let c = [];
    for (let o of Object.getOwnPropertyNames(t))
        if (!['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(o))
            try {
                if ('function' != typeof t[o]) continue;
                let E = R(t, o, function (t) {
                    return function (...c) {
                        let E = t.apply(this, c);
                        if ((C(E, i, this), 'tagName' in this.canvas && !A(this.canvas, r, _, n, !0))) {
                            let t = y(c, i, this),
                                r = {
                                    type: e,
                                    property: o,
                                    args: t
                                };
                            a(this.canvas, r);
                        }
                        return E;
                    };
                });
                c.push(E);
            } catch (_) {
                let r = u(t, o, {
                    set(t) {
                        a(this.canvas, {
                            type: e,
                            property: o,
                            args: [t],
                            setter: !0
                        });
                    }
                });
                c.push(r);
            }
    return c;
}
class S {
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
            (0, i.x)([this, 'access', (t) => t.worker, 'optionalAccess', (t) => t.terminate, 'call', (t) => t()]),
            (this.worker = null),
            (this.snapshotInProgressMap = new Map()),
            ((this.options.recordCanvas && 'number' == typeof this.options.sampling) || this.options.enableManualSnapshot) && (this.worker = this.initFPSWorker());
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
                invokeId: null
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
                ((this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(t) || this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e);
            });
        let { sampling: e = 'all', win: a, blockClass: _, blockSelector: n, unblockSelector: o, maxCanvasSize: i, recordCanvas: c, dataURLOptions: E, errorHandler: s } = t;
        if (((this.mutationCb = t.mutationCb), (this.mirror = t.mirror), (this.options = t), s && (r = s), ((c && 'number' == typeof e) || t.enableManualSnapshot) && (this.worker = this.initFPSWorker()), this.addWindow(a), t.enableManualSnapshot)) return;
        f(() => {
            c && 'all' === e && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), c && 'number' == typeof e && this.initCanvasFPSObserver(e, _, n, o, i, { dataURLOptions: E });
        })();
    }
    addWindow(t) {
        let { sampling: e = 'all', blockClass: a, blockSelector: r, unblockSelector: _, recordCanvas: n, enableManualSnapshot: o } = this.options;
        if (!this.windowsSet.has(t)) {
            if (o) {
                this.windowsSet.add(t), this.windows.push(new WeakRef(t));
                return;
            }
            f(() => {
                if ((n && 'all' === e && this.initCanvasMutationObserver(t, a, r, _), n && 'number' == typeof e)) {
                    let e = v(t, a, r, _, !0);
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
                let t = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
                return URL.createObjectURL(t);
            })()
        );
        return (
            (t.onmessage = (t) => {
                let e = t.data,
                    { id: a } = e;
                if ((this.snapshotInProgressMap.set(a, !1), !('base64' in e))) return;
                let { base64: r, type: _, width: n, height: o } = e;
                this.mutationCb({
                    id: a,
                    type: p['2D'],
                    commands: [
                        {
                            property: 'clearRect',
                            args: [0, 0, n, o]
                        },
                        {
                            property: 'drawImage',
                            args: [
                                {
                                    rr_type: 'ImageBitmap',
                                    args: [
                                        {
                                            rr_type: 'Blob',
                                            data: [
                                                {
                                                    rr_type: 'ArrayBuffer',
                                                    base64: r
                                                }
                                            ],
                                            type: _
                                        }
                                    ]
                                },
                                0,
                                0,
                                n,
                                o
                            ]
                        }
                    ]
                });
            }),
            t
        );
    }
    initCanvasFPSObserver(t, e, a, r, _, n) {
        let o = this.takeSnapshot(!1, t, e, a, r, _, n.dataURLOptions);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(o);
        });
    }
    initCanvasMutationObserver(t, e, a, r) {
        let _ = v(t, e, a, r, !1),
            n = (function (t, e, a, r, _) {
                let n = [];
                for (let o of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype))
                    try {
                        if ('function' != typeof e.CanvasRenderingContext2D.prototype[o]) continue;
                        let i = R(e.CanvasRenderingContext2D.prototype, o, function (n) {
                            return function (...i) {
                                return (
                                    A(this.canvas, a, r, _, !0) ||
                                        L(() => {
                                            let a = y(i, e, this);
                                            t(this.canvas, {
                                                type: p['2D'],
                                                property: o,
                                                args: a
                                            });
                                        }, 0),
                                    n.apply(this, i)
                                );
                            };
                        });
                        n.push(i);
                    } catch (r) {
                        let a = u(e.CanvasRenderingContext2D.prototype, o, {
                            set(e) {
                                t(this.canvas, {
                                    type: p['2D'],
                                    property: o,
                                    args: [e],
                                    setter: !0
                                });
                            }
                        });
                        n.push(a);
                    }
                return () => {
                    n.forEach((t) => t());
                };
            })(this.processMutation.bind(this), t, e, a, r),
            o = (function (t, e, a, r, _, n) {
                let o = [];
                return (
                    o.push(...U(e.WebGLRenderingContext.prototype, p.WebGL, t, a, r, _, n, e)),
                    void 0 !== e.WebGL2RenderingContext && o.push(...U(e.WebGL2RenderingContext.prototype, p.WebGL2, t, a, r, _, n, e)),
                    () => {
                        o.forEach((t) => t());
                    }
                );
            })(this.processMutation.bind(this), t, e, a, r, this.mirror);
        this.restoreHandlers.push(() => {
            _(), n(), o();
        });
    }
    snapshot(t) {
        let { options: e } = this,
            a = this.takeSnapshot(!0, 'all' === e.sampling ? 2 : e.sampling || 2, e.blockClass, e.blockSelector, e.unblockSelector, e.maxCanvasSize, e.dataURLOptions, t);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(a);
        });
    }
    takeSnapshot(t, e, a, r, _, n, o, c) {
        let E,
            s = 1000 / e,
            l = 0,
            I = (t) => {
                if (t) return [t];
                let e = [],
                    n = (t) => {
                        t.querySelectorAll('canvas').forEach((t) => {
                            A(t, a, r, _, !0) || e.push(t);
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
            u = (e) => {
                if (this.windows.length) {
                    if (l && e - l < s) return void d(u);
                    (l = e),
                        I(c).forEach((e) => {
                            if (!this.mirror.hasNode(e)) return;
                            let a = this.mirror.getId(e);
                            if (!this.snapshotInProgressMap.get(a) && e.width && e.height) {
                                if ((this.snapshotInProgressMap.set(a, !0), !t && ['webgl', 'webgl2'].includes(e.__context))) {
                                    let t = e.getContext(e.__context);
                                    !1 === (0, i.x)([t, 'optionalAccess', (t) => t.getContextAttributes, 'call', (t) => t(), 'optionalAccess', (t) => t.preserveDrawingBuffer]) && t.clear(t.COLOR_BUFFER_BIT);
                                }
                                createImageBitmap(e)
                                    .then((t) => {
                                        (0, i.x)([
                                            this,
                                            'access',
                                            (t) => t.worker,
                                            'optionalAccess',
                                            (t) => t.postMessage,
                                            'call',
                                            (r) =>
                                                r(
                                                    {
                                                        id: a,
                                                        bitmap: t,
                                                        width: e.width,
                                                        height: e.height,
                                                        dataURLOptions: o,
                                                        maxCanvasSize: n
                                                    },
                                                    [t]
                                                )
                                        ]);
                                    })
                                    .catch((t) => {
                                        f(() => {
                                            throw t;
                                        })();
                                    });
                            }
                        }),
                        d(u);
                }
            };
        return d(u);
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
            let a = this.mirror.getId(e);
            this.flushPendingCanvasMutationFor(e, a);
        }),
            d(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(t, e) {
        if (this.frozen || this.locked) return;
        let a = this.pendingCanvasMutations.get(t);
        if (!a || -1 === e) return;
        let r = a.map((t) => {
                let { type: e, ...a } = t;
                return a;
            }),
            { type: _ } = a[0];
        this.mutationCb({
            id: e,
            type: _,
            commands: r
        }),
            this.pendingCanvasMutations.delete(t);
    }
}
let G = {
        low: {
            sampling: { canvas: 1 },
            dataURLOptions: {
                type: 'image/webp',
                quality: 0.25
            }
        },
        medium: {
            sampling: { canvas: 2 },
            dataURLOptions: {
                type: 'image/webp',
                quality: 0.4
            }
        },
        high: {
            sampling: { canvas: 4 },
            dataURLOptions: {
                type: 'image/webp',
                quality: 0.5
            }
        }
    },
    w = (0, c._I)((t = {}) => {
        let e,
            [a, r] = t.maxCanvasSize || [],
            _ = {
                quality: t.quality || 'medium',
                enableManualSnapshot: t.enableManualSnapshot,
                maxCanvasSize: [a ? Math.min(a, 1280) : 1280, r ? Math.min(r, 1280) : 1280]
            },
            n = new Promise((t) => (e = t));
        return {
            name: 'ReplayCanvas',
            getOptions() {
                let { quality: t, enableManualSnapshot: a, maxCanvasSize: r } = _;
                return {
                    enableManualSnapshot: a,
                    recordCanvas: !0,
                    getCanvasManager: (t) => {
                        let _ = new S({
                            ...t,
                            enableManualSnapshot: a,
                            maxCanvasSize: r,
                            errorHandler: (t) => {
                                try {
                                    'object' == typeof t && (t.__rrweb__ = !0);
                                } catch (t) {}
                            }
                        });
                        return e(_), _;
                    },
                    ...(G[t || 'medium'] || G.medium)
                };
            },
            async snapshot(t) {
                (await n).snapshot(t);
            }
        };
    });
