let r;
a.d(e, { m: () => M });
var n,
    _,
    o,
    i = a(507690),
    c = a(151122);
function s(t, e, a = 1 / 0, r = 0) {
    return !t || t.nodeType !== t.ELEMENT_NODE || r > a ? -1 : e(t) ? r : s(t.parentNode, e, a, r + 1);
}
function E(t, e) {
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
((n = o || (o = {}))[(n.Document = 0)] = 'Document'), (n[(n.DocumentType = 1)] = 'DocumentType'), (n[(n.Element = 2)] = 'Element'), (n[(n.Text = 3)] = 'Text'), (n[(n.CDATA = 4)] = 'CDATA'), (n[(n.Comment = 5)] = 'Comment');
let l = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.',
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
        }
    };
function I(t, e, a, r, n = window) {
    let _ = n.Object.getOwnPropertyDescriptor(t, e);
    return (
        n.Object.defineProperty(
            t,
            e,
            r
                ? a
                : {
                      set(t) {
                          N(() => {
                              a.set.call(this, t);
                          }, 0),
                              _ && _.set && _.set.call(this, t);
                      }
                  }
        ),
        () => I(t, e, _ || {}, !0)
    );
}
function R(t, e, a) {
    try {
        if (!(e in t)) return () => {};
        let r = t[e],
            n = a(r);
        return (
            'function' == typeof n &&
                ((n.prototype = n.prototype || {}),
                Object.defineProperties(n, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })),
            (t[e] = n),
            () => {
                t[e] = r;
            }
        );
    } catch (t) {
        return () => {};
    }
}
function d(t, e, a, r, n) {
    if (!t) return !1;
    let _ = t ? (t.nodeType === t.ELEMENT_NODE ? t : t.parentElement) : null;
    if (!_) return !1;
    let o = E(e, a);
    if (!n) {
        let t = r && _.matches(r);
        return o(_) && !t;
    }
    let i = s(_, o),
        c = -1;
    return !(i < 0) && (r && (c = s(_, E(null, r))), (i > -1 && c < 0) || i < c);
}
'undefined' != typeof window && window.Proxy && window.Reflect && (u = new Proxy(u, { get: (t, e, a) => ('map' === e && console.error(l), Reflect.get(t, e, a)) })), /[1-9][0-9]{12}/.test(Date.now().toString());
let A = {};
function f(t) {
    let e = A[t];
    if (e) return e;
    let a = window.document,
        r = window[t];
    if (a && 'function' == typeof a.createElement)
        try {
            let e = a.createElement('iframe');
            (e.hidden = !0), a.head.appendChild(e);
            let n = e.contentWindow;
            n && n[t] && (r = n[t]), a.head.removeChild(e);
        } catch (t) {}
    return (A[t] = r.bind(window));
}
function p(...t) {
    return f('requestAnimationFrame')(...t);
}
function N(...t) {
    return f('setTimeout')(...t);
}
var T = (((_ = T || {})[(_['2D'] = 0)] = '2D'), (_[(_.WebGL = 1)] = 'WebGL'), (_[(_.WebGL2 = 2)] = 'WebGL2'), _);
let L = (t) =>
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
for (var h = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', O = 'undefined' == typeof Uint8Array ? [] : new Uint8Array(256), D = 0; D < h.length; D++) O[h.charCodeAt(D)] = D;
var g = function (t) {
    var e,
        a = new Uint8Array(t),
        r = a.length,
        n = '';
    for (e = 0; e < r; e += 3) (n += h[a[e] >> 2]), (n += h[((3 & a[e]) << 4) | (a[e + 1] >> 4)]), (n += h[((15 & a[e + 1]) << 2) | (a[e + 2] >> 6)]), (n += h[63 & a[e + 2]]);
    return r % 3 == 2 ? (n = n.substring(0, n.length - 1) + '=') : r % 3 == 1 && (n = n.substring(0, n.length - 2) + '=='), n;
};
let P = new Map(),
    m = (t, e, a) => {
        let r;
        if (!t || !(v(t, e) || 'object' == typeof t)) return;
        let n = t.constructor.name,
            _ = ((r = P.get(a)) || ((r = new Map()), P.set(a, r)), r.has(n) || r.set(n, []), r.get(n)),
            o = _.indexOf(t);
        return -1 === o && ((o = _.length), _.push(t)), o;
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
                        base64: g(e)
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
                else if (v(e, a) || 'object' == typeof e)
                    return {
                        rr_type: e.constructor.name,
                        index: m(e, a, r)
                    };
                return e;
            })(t, e, a)
        ),
    v = (t, e) => !!['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'].filter((t) => 'function' == typeof e[t]).find((a) => t instanceof e[a]);
function C(t, e, a, r, n) {
    let _ = [];
    try {
        let o = R(t.HTMLCanvasElement.prototype, 'getContext', function (t) {
            return function (_, ...o) {
                if (!d(this, e, a, r, !0)) {
                    let t = 'experimental-webgl' === _ ? 'webgl' : _;
                    if (('__context' in this || (this.__context = t), n && ['webgl', 'webgl2'].includes(t)))
                        if (o[0] && 'object' == typeof o[0]) {
                            let t = o[0];
                            t.preserveDrawingBuffer || (t.preserveDrawingBuffer = !0);
                        } else o.splice(0, 1, { preserveDrawingBuffer: !0 });
                }
                return t.apply(this, [_, ...o]);
            };
        });
        _.push(o);
    } catch (t) {
        console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return () => {
        _.forEach((t) => t());
    };
}
function S(t, e, a, r, n, _, o, i) {
    let c = [];
    for (let o of Object.getOwnPropertyNames(t))
        if (!['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'].includes(o))
            try {
                if ('function' != typeof t[o]) continue;
                let s = R(t, o, function (t) {
                    return function (...c) {
                        let s = t.apply(this, c);
                        if ((m(s, i, this), 'tagName' in this.canvas && !d(this.canvas, r, n, _, !0))) {
                            let t = y(c, i, this),
                                r = {
                                    type: e,
                                    property: o,
                                    args: t
                                };
                            a(this.canvas, r);
                        }
                        return s;
                    };
                });
                c.push(s);
            } catch (n) {
                let r = I(t, o, {
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
class G {
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
        let { sampling: e = 'all', win: a, blockClass: n, blockSelector: _, unblockSelector: o, maxCanvasSize: i, recordCanvas: c, dataURLOptions: s, errorHandler: E } = t;
        if (((this.mutationCb = t.mutationCb), (this.mirror = t.mirror), (this.options = t), E && (r = E), ((c && 'number' == typeof e) || t.enableManualSnapshot) && (this.worker = this.initFPSWorker()), this.addWindow(a), t.enableManualSnapshot)) return;
        L(() => {
            c && 'all' === e && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), c && 'number' == typeof e && this.initCanvasFPSObserver(e, n, _, o, i, { dataURLOptions: s });
        })();
    }
    addWindow(t) {
        let { sampling: e = 'all', blockClass: a, blockSelector: r, unblockSelector: n, recordCanvas: _, enableManualSnapshot: o } = this.options;
        if (!this.windowsSet.has(t)) {
            if (o) {
                this.windowsSet.add(t), this.windows.push(new WeakRef(t));
                return;
            }
            L(() => {
                if ((_ && 'all' === e && this.initCanvasMutationObserver(t, a, r, n), _ && 'number' == typeof e)) {
                    let e = C(t, a, r, n, !0);
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
                let { base64: r, type: n, width: _, height: o } = e;
                this.mutationCb({
                    id: a,
                    type: T['2D'],
                    commands: [
                        {
                            property: 'clearRect',
                            args: [0, 0, _, o]
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
                                            type: n
                                        }
                                    ]
                                },
                                0,
                                0,
                                _,
                                o
                            ]
                        }
                    ]
                });
            }),
            t
        );
    }
    initCanvasFPSObserver(t, e, a, r, n, _) {
        let o = this.takeSnapshot(!1, t, e, a, r, n, _.dataURLOptions);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(o);
        });
    }
    initCanvasMutationObserver(t, e, a, r) {
        let n = C(t, e, a, r, !1),
            _ = (function (t, e, a, r, n) {
                let _ = [];
                for (let o of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype))
                    try {
                        if ('function' != typeof e.CanvasRenderingContext2D.prototype[o]) continue;
                        let i = R(e.CanvasRenderingContext2D.prototype, o, function (_) {
                            return function (...i) {
                                return (
                                    d(this.canvas, a, r, n, !0) ||
                                        N(() => {
                                            let a = y(i, e, this);
                                            t(this.canvas, {
                                                type: T['2D'],
                                                property: o,
                                                args: a
                                            });
                                        }, 0),
                                    _.apply(this, i)
                                );
                            };
                        });
                        _.push(i);
                    } catch (r) {
                        let a = I(e.CanvasRenderingContext2D.prototype, o, {
                            set(e) {
                                t(this.canvas, {
                                    type: T['2D'],
                                    property: o,
                                    args: [e],
                                    setter: !0
                                });
                            }
                        });
                        _.push(a);
                    }
                return () => {
                    _.forEach((t) => t());
                };
            })(this.processMutation.bind(this), t, e, a, r),
            o = (function (t, e, a, r, n, _) {
                let o = [];
                return (
                    o.push(...S(e.WebGLRenderingContext.prototype, T.WebGL, t, a, r, n, _, e)),
                    void 0 !== e.WebGL2RenderingContext && o.push(...S(e.WebGL2RenderingContext.prototype, T.WebGL2, t, a, r, n, _, e)),
                    () => {
                        o.forEach((t) => t());
                    }
                );
            })(this.processMutation.bind(this), t, e, a, r, this.mirror);
        this.restoreHandlers.push(() => {
            n(), _(), o();
        });
    }
    snapshot(t) {
        let { options: e } = this,
            a = this.takeSnapshot(!0, 'all' === e.sampling ? 2 : e.sampling || 2, e.blockClass, e.blockSelector, e.unblockSelector, e.maxCanvasSize, e.dataURLOptions, t);
        this.restoreHandlers.push(() => {
            cancelAnimationFrame(a);
        });
    }
    takeSnapshot(t, e, a, r, n, _, o, c) {
        let s,
            E = 1000 / e,
            l = 0,
            u = (t) => {
                if (t) return [t];
                let e = [],
                    _ = (t) => {
                        t.querySelectorAll('canvas').forEach((t) => {
                            d(t, a, r, n, !0) || e.push(t);
                        });
                    };
                for (let t of this.windows) {
                    let e = t.deref();
                    e && _(e.document);
                }
                for (let t of this.shadowDoms) {
                    let e = t.deref();
                    e && _(e);
                }
                return e;
            },
            I = (e) => {
                if (this.windows.length) {
                    if (l && e - l < E) return void p(I);
                    (l = e),
                        u(c).forEach((e) => {
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
                                                        maxCanvasSize: _
                                                    },
                                                    [t]
                                                )
                                        ]);
                                    })
                                    .catch((t) => {
                                        L(() => {
                                            throw t;
                                        })();
                                    });
                            }
                        }),
                        p(I);
                }
            };
        return p(I);
    }
    startPendingCanvasMutationFlusher() {
        p(() => this.flushPendingCanvasMutations());
    }
    startRAFTimestamping() {
        let t = (e) => {
            (this.rafStamps.latestId = e), p(t);
        };
        p(t);
    }
    flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach((t, e) => {
            let a = this.mirror.getId(e);
            this.flushPendingCanvasMutationFor(e, a);
        }),
            p(() => this.flushPendingCanvasMutations());
    }
    flushPendingCanvasMutationFor(t, e) {
        if (this.frozen || this.locked) return;
        let a = this.pendingCanvasMutations.get(t);
        if (!a || -1 === e) return;
        let r = a.map((t) => {
                let { type: e, ...a } = t;
                return a;
            }),
            { type: n } = a[0];
        this.mutationCb({
            id: e,
            type: n,
            commands: r
        }),
            this.pendingCanvasMutations.delete(t);
    }
}
let b = {
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
    M = (0, c._I)((t = {}) => {
        let e,
            [a, r] = t.maxCanvasSize || [],
            n = {
                quality: t.quality || 'medium',
                enableManualSnapshot: t.enableManualSnapshot,
                maxCanvasSize: [a ? Math.min(a, 1280) : 1280, r ? Math.min(r, 1280) : 1280]
            },
            _ = new Promise((t) => (e = t));
        return {
            name: 'ReplayCanvas',
            getOptions() {
                let { quality: t, enableManualSnapshot: a, maxCanvasSize: r } = n;
                return {
                    enableManualSnapshot: a,
                    recordCanvas: !0,
                    getCanvasManager: (t) => {
                        let n = new G({
                            ...t,
                            enableManualSnapshot: a,
                            maxCanvasSize: r,
                            errorHandler: (t) => {
                                try {
                                    'object' == typeof t && (t.__rrweb__ = !0);
                                } catch (t) {}
                            }
                        });
                        return e(n), n;
                    },
                    ...(b[t || 'medium'] || b.medium)
                };
            },
            async snapshot(t) {
                (await _).snapshot(t);
            }
        };
    });
