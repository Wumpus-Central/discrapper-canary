!(function (t, n) {
    e.exports = n();
})(0, () =>
    (() => {
        var e = [
                ,
                (e, t, n) => {
                    n.r(t), n.d(t, { default: () => r });
                    let r = (() => {
                        var e = 'undefined' != typeof document && document.currentScript ? document.currentScript.src : void 0;
                        return function (t = {}) {
                            var n,
                                r,
                                i,
                                o = t;
                            function a() {
                                function e(e) {
                                    let o = r;
                                    (n = t = 0),
                                        (r = new Map()),
                                        o.forEach((t) => {
                                            try {
                                                t(e);
                                            } catch (e) {
                                                console.error(e);
                                            }
                                        }),
                                        this.ob(),
                                        i && i.Tb();
                                }
                                let t = 0,
                                    n = 0,
                                    r = new Map(),
                                    i = null,
                                    o = null;
                                (this.requestAnimationFrame = function (i) {
                                    t || (t = requestAnimationFrame(e.bind(this)));
                                    let o = ++n;
                                    return r.set(o, i), o;
                                }),
                                    (this.cancelAnimationFrame = function (e) {
                                        r.delete(e), t && 0 == r.size && (cancelAnimationFrame(t), (t = 0));
                                    }),
                                    (this.Rb = function (e) {
                                        o && (document.body.remove(o), (o = null)),
                                            e ||
                                                (((o = document.createElement('div')).style.backgroundColor = 'black'),
                                                (o.style.position = 'fixed'),
                                                (o.style.right = 0),
                                                (o.style.top = 0),
                                                (o.style.color = 'white'),
                                                (o.style.padding = '4px'),
                                                (o.innerHTML = 'RIVE FPS'),
                                                (e = function (e) {
                                                    o.innerHTML = 'RIVE FPS ' + e.toFixed(1);
                                                }),
                                                document.body.appendChild(o)),
                                            (i = new (function () {
                                                let t = 0,
                                                    n = 0;
                                                this.Tb = function () {
                                                    var r = performance.now();
                                                    n ? (++t, 1000 < (r -= n) && (e((1000 * t) / r), (t = n = 0))) : ((n = r), (t = 0));
                                                };
                                            })());
                                    }),
                                    (this.Ob = function () {
                                        o && (document.body.remove(o), (o = null)), (i = null);
                                    }),
                                    (this.ob = function () {});
                            }
                            function s(e) {
                                console.assert(!0);
                                let t = new Map(),
                                    n = -1 / 0;
                                this.push = function (r) {
                                    return (
                                        (r = (r + ((1 << e) - 1)) >> e),
                                        t.has(r) && clearTimeout(t.get(r)),
                                        t.set(
                                            r,
                                            setTimeout(function () {
                                                t.delete(r), 0 == t.length ? (n = -1 / 0) : r == n && console.assert((n = Math.max(...t.keys())) < r);
                                            }, 1000)
                                        ),
                                        (n = Math.max(r, n)) << e
                                    );
                                };
                            }
                            o.ready = new Promise((e, t) => {
                                (r = e), (i = t);
                            });
                            let l = o.onRuntimeInitialized;
                            o.onRuntimeInitialized = function () {
                                l && l();
                                let e = o.decodeAudio;
                                o.decodeAudio = function (t, n) {
                                    n((t = e(t)));
                                };
                                let t = o.decodeFont;
                                o.decodeFont = function (e, n) {
                                    n((e = t(e)));
                                };
                                let n = o.FileAssetLoader;
                                (o.ptrToAsset = (e) => {
                                    let t = o.ptrToFileAsset(e);
                                    return t.isImage ? o.ptrToImageAsset(e) : t.isFont ? o.ptrToFontAsset(e) : t.isAudio ? o.ptrToAudioAsset(e) : t;
                                }),
                                    (o.CustomFileAssetLoader = n.extend('CustomFileAssetLoader', {
                                        __construct: function ({ loadContents: e }) {
                                            this.__parent.__construct.call(this), (this.Gb = e);
                                        },
                                        loadContents: function (e, t) {
                                            return (e = o.ptrToAsset(e)), this.Gb(e, t);
                                        }
                                    })),
                                    (o.CDNFileAssetLoader = n.extend('CDNFileAssetLoader', {
                                        __construct: function () {
                                            this.__parent.__construct.call(this);
                                        },
                                        loadContents: function (e) {
                                            let t = o.ptrToAsset(e);
                                            return (
                                                '' !== (e = t.cdnUuid) &&
                                                (!(function (e, t) {
                                                    var n = new XMLHttpRequest();
                                                    (n.responseType = 'arraybuffer'),
                                                        (n.onreadystatechange = function () {
                                                            4 == n.readyState && 200 == n.status && t(n);
                                                        }),
                                                        n.open('GET', e, !0),
                                                        n.send(null);
                                                })(t.cdnBaseUrl + '/' + e, (e) => {
                                                    t.decode(new Uint8Array(e.response));
                                                }),
                                                !0)
                                            );
                                        }
                                    })),
                                    (o.FallbackFileAssetLoader = n.extend('FallbackFileAssetLoader', {
                                        __construct: function () {
                                            this.__parent.__construct.call(this), (this.kb = []);
                                        },
                                        addLoader: function (e) {
                                            this.kb.push(e);
                                        },
                                        loadContents: function (e, t) {
                                            for (let n of this.kb) if (n.loadContents(e, t)) return !0;
                                            return !1;
                                        }
                                    }));
                                let r = o.computeAlignment;
                                o.computeAlignment = function (e, t, n, i, o = 1) {
                                    return r.call(this, e, t, n, i, o);
                                };
                            };
                            let c = 'createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText'.split(' '),
                                u = new (function () {
                                    function e() {
                                        if (!t) {
                                            let l;
                                            var e = document.createElement('canvas'),
                                                a = {
                                                    alpha: 1,
                                                    depth: 0,
                                                    stencil: 0,
                                                    antialias: 0,
                                                    premultipliedAlpha: 1,
                                                    preserveDrawingBuffer: 0,
                                                    powerPreference: 'high-performance',
                                                    failIfMajorPerformanceCaveat: 0,
                                                    enableExtensionsByDefault: 1,
                                                    explicitSwapControl: 1,
                                                    renderViaOffscreenBackBuffer: 1
                                                };
                                            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                                                if (((l = e.getContext('webgl', a)), (n = 1), !l)) return console.log('No WebGL support. Image mesh will not be drawn.'), !1;
                                            } else if ((l = e.getContext('webgl2', a))) n = 2;
                                            else {
                                                if (!(l = e.getContext('webgl', a))) return console.log('No WebGL support. Image mesh will not be drawn.'), !1;
                                                n = 1;
                                            }
                                            function s(e, t, n) {
                                                if (((t = l.createShader(t)), l.shaderSource(t, n), l.compileShader(t), 0 < ((n = l.getShaderInfoLog(t)) || '').length)) throw n;
                                                l.attachShader(e, t);
                                            }
                                            if (
                                                ((r = Math.min(
                                                    (l = new Proxy(l, {
                                                        get: (e, t) =>
                                                            e.isContextLost()
                                                                ? (c || (console.error('Cannot render the mesh because the GL Context was lost. Tried to invoke ', t), (c = !0)), 'function' == typeof e[t])
                                                                    ? function () {}
                                                                    : void 0
                                                                : 'function' == typeof e[t]
                                                                  ? function (...n) {
                                                                        return e[t].apply(e, n);
                                                                    }
                                                                  : e[t],
                                                        set(e, t, n) {
                                                            if (!e.isContextLost()) return (e[t] = n), !0;
                                                            c || (console.error('Cannot render the mesh because the GL Context was lost. Tried to set property ' + t), (c = !0));
                                                        }
                                                    })).getParameter(l.MAX_RENDERBUFFER_SIZE),
                                                    l.getParameter(l.MAX_TEXTURE_SIZE)
                                                )),
                                                s((e = l.createProgram()), l.VERTEX_SHADER, 'attribute vec2 vertex;\n                attribute vec2 uv;\n                uniform vec4 mat;\n                uniform vec2 translate;\n                varying vec2 st;\n                void main() {\n                    st = uv;\n                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);\n                }'),
                                                s(e, l.FRAGMENT_SHADER, 'precision highp float;\n                uniform sampler2D image;\n                varying vec2 st;\n                void main() {\n                    gl_FragColor = texture2D(image, st);\n                }'),
                                                l.bindAttribLocation(e, 0, 'vertex'),
                                                l.bindAttribLocation(e, 1, 'uv'),
                                                l.linkProgram(e),
                                                0 < ((a = l.getProgramInfoLog(e)) || '').trim().length)
                                            )
                                                throw a;
                                            (i = l.getUniformLocation(e, 'mat')), (o = l.getUniformLocation(e, 'translate')), l.useProgram(e), l.bindBuffer(l.ARRAY_BUFFER, l.createBuffer()), l.enableVertexAttribArray(0), l.enableVertexAttribArray(1), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, l.createBuffer()), l.uniform1i(l.getUniformLocation(e, 'image'), 0), l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), (t = l);
                                        }
                                        return !0;
                                    }
                                    let t = null,
                                        n = 0,
                                        r = 0,
                                        i = null,
                                        o = null,
                                        a = 0,
                                        l = 0,
                                        c = !1;
                                    e(),
                                        (this.hc = function () {
                                            return e(), r;
                                        }),
                                        (this.Mb = function (e) {
                                            t.deleteTexture && t.deleteTexture(e);
                                        }),
                                        (this.Lb = function (r) {
                                            if (!e()) return null;
                                            let i = t.createTexture();
                                            return i ? (t.bindTexture(t.TEXTURE_2D, i), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), 2 == n ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR_MIPMAP_LINEAR), t.generateMipmap(t.TEXTURE_2D)) : t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), i) : null;
                                        });
                                    let u = new s(8),
                                        d = new s(8),
                                        f = new s(10),
                                        _ = new s(10);
                                    (this.Qb = function (n, r, s, c, p) {
                                        if (e()) {
                                            var h = u.push(n),
                                                m = d.push(r);
                                            if (t.canvas) {
                                                for (var g of ((t.canvas.width != h || t.canvas.height != m) && ((t.canvas.width = h), (t.canvas.height = m)), t.viewport(0, m - r, n, r), t.disable(t.SCISSOR_TEST), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.enable(t.SCISSOR_TEST), s.sort((e, t) => t.wb - e.wb), (h = f.push(c)), a != h && (t.bufferData(t.ARRAY_BUFFER, 8 * h, t.DYNAMIC_DRAW), (a = h)), (h = 0), s)) t.bufferSubData(t.ARRAY_BUFFER, h, g.Ta), (h += 4 * g.Ta.length);
                                                for (var E of (console.assert(h == 4 * c), s)) t.bufferSubData(t.ARRAY_BUFFER, h, E.Db), (h += 4 * E.Db.length);
                                                for (var b of (console.assert(h == 8 * c), (h = _.push(p)), l != h && (t.bufferData(t.ELEMENT_ARRAY_BUFFER, 2 * h, t.DYNAMIC_DRAW), (l = h)), (g = 0), s)) t.bufferSubData(t.ELEMENT_ARRAY_BUFFER, g, b.indices), (g += 2 * b.indices.length);
                                                for (let e of (console.assert(g == 2 * p), (b = 0), (E = !0), (h = g = 0), s)) {
                                                    e.image.Ka != b && (t.bindTexture(t.TEXTURE_2D, e.image.Ja || null), (b = e.image.Ka)), e.mc ? (t.scissor(e.Ya, m - e.Za - e.jb, e.Ac, e.jb), (E = !0)) : E && (t.scissor(0, m - r, n, r), (E = !1)), (s = 2 / n);
                                                    let a = -2 / r;
                                                    t.uniform4f(i, e.ha[0] * s * e.Ba, e.ha[1] * a * e.Ca, e.ha[2] * s * e.Ba, e.ha[3] * a * e.Ca), t.uniform2f(o, e.ha[4] * s * e.Ba + s * (e.Ya - e.ic * e.Ba) - 1, e.ha[5] * a * e.Ca + a * (e.Za - e.jc * e.Ca) + 1), t.vertexAttribPointer(0, 2, t.FLOAT, !1, 0, h), t.vertexAttribPointer(1, 2, t.FLOAT, !1, 0, h + 4 * c), t.drawElements(t.TRIANGLES, e.indices.length, t.UNSIGNED_SHORT, g), (h += 4 * e.Ta.length), (g += 2 * e.indices.length);
                                                }
                                                console.assert(h == 4 * c), console.assert(g == 2 * p);
                                            }
                                        }
                                    }),
                                        (this.canvas = function () {
                                            return e() && t.canvas;
                                        });
                                })(),
                                d = o.onRuntimeInitialized;
                            o.onRuntimeInitialized = function () {
                                function e(e) {
                                    switch (e) {
                                        case p.srcOver:
                                            return 'source-over';
                                        case p.screen:
                                            return 'screen';
                                        case p.overlay:
                                            return 'overlay';
                                        case p.darken:
                                            return 'darken';
                                        case p.lighten:
                                            return 'lighten';
                                        case p.colorDodge:
                                            return 'color-dodge';
                                        case p.colorBurn:
                                            return 'color-burn';
                                        case p.hardLight:
                                            return 'hard-light';
                                        case p.softLight:
                                            return 'soft-light';
                                        case p.difference:
                                            return 'difference';
                                        case p.exclusion:
                                            return 'exclusion';
                                        case p.multiply:
                                            return 'multiply';
                                        case p.hue:
                                            return 'hue';
                                        case p.saturation:
                                            return 'saturation';
                                        case p.color:
                                            return 'color';
                                        case p.luminosity:
                                            return 'luminosity';
                                    }
                                }
                                function t(e) {
                                    return 'rgba(' + ((16711680 & e) >>> 16) + ',' + ((65280 & e) >>> 8) + ',' + ((255 & e) >>> 0) + ',' + ((4278190080 & e) >>> 24) / 255 + ')';
                                }
                                function n() {
                                    for (let e of (0 < S.length && (u.Qb(I.drawWidth(), I.drawHeight(), S, T, N), (S = []), (N = T = 0), I.reset(512, 512)), O)) {
                                        for (let t of e.H) t();
                                        e.H = [];
                                    }
                                    O.clear();
                                }
                                d && d();
                                var r = o.RenderPaintStyle;
                                let i = o.RenderPath,
                                    s = o.RenderPaint,
                                    l = o.Renderer,
                                    f = o.StrokeCap,
                                    _ = o.StrokeJoin,
                                    p = o.BlendMode,
                                    h = r.fill,
                                    m = r.stroke,
                                    g = o.FillRule.evenOdd,
                                    E = 1;
                                var b = o.RenderImage.extend('CanvasRenderImage', {
                                        __construct: function ({ la: e, xa: t } = {}) {
                                            this.__parent.__construct.call(this), (this.Ka = E), (E = (E + 1) & 2147483647 || 1), (this.la = e), (this.xa = t);
                                        },
                                        __destruct: function () {
                                            this.Ja && (u.Mb(this.Ja), URL.revokeObjectURL(this.Wa)), this.__parent.__destruct.call(this);
                                        },
                                        decode: function (e) {
                                            var t = this;
                                            t.xa && t.xa(t);
                                            var n = new Image();
                                            (t.Wa = URL.createObjectURL(new Blob([e], { type: 'image/png' }))),
                                                (n.onload = function () {
                                                    (t.Fb = n), (t.Ja = u.Lb(n)), t.size(n.width, n.height), t.la && t.la(t);
                                                }),
                                                (n.src = t.Wa);
                                        }
                                    }),
                                    y = i.extend('CanvasRenderPath', {
                                        __construct: function () {
                                            this.__parent.__construct.call(this), (this.T = new Path2D());
                                        },
                                        rewind: function () {
                                            this.T = new Path2D();
                                        },
                                        addPath: function (e, t, n, r, i, o, a) {
                                            var s = this.T,
                                                l = s.addPath;
                                            e = e.T;
                                            let c = new DOMMatrix();
                                            (c.a = t), (c.b = n), (c.c = r), (c.d = i), (c.e = o), (c.f = a), l.call(s, e, c);
                                        },
                                        fillRule: function (e) {
                                            this.Va = e;
                                        },
                                        moveTo: function (e, t) {
                                            this.T.moveTo(e, t);
                                        },
                                        lineTo: function (e, t) {
                                            this.T.lineTo(e, t);
                                        },
                                        cubicTo: function (e, t, n, r, i, o) {
                                            this.T.bezierCurveTo(e, t, n, r, i, o);
                                        },
                                        close: function () {
                                            this.T.closePath();
                                        }
                                    }),
                                    v = s.extend('CanvasRenderPaint', {
                                        color: function (e) {
                                            this.Xa = t(e);
                                        },
                                        thickness: function (e) {
                                            this.Ib = e;
                                        },
                                        join: function (e) {
                                            switch (e) {
                                                case _.miter:
                                                    this.Ia = 'miter';
                                                    break;
                                                case _.round:
                                                    this.Ia = 'round';
                                                    break;
                                                case _.bevel:
                                                    this.Ia = 'bevel';
                                            }
                                        },
                                        cap: function (e) {
                                            switch (e) {
                                                case f.butt:
                                                    this.Ha = 'butt';
                                                    break;
                                                case f.round:
                                                    this.Ha = 'round';
                                                    break;
                                                case f.square:
                                                    this.Ha = 'square';
                                            }
                                        },
                                        style: function (e) {
                                            this.Hb = e;
                                        },
                                        blendMode: function (t) {
                                            this.Eb = e(t);
                                        },
                                        clearGradient: function () {
                                            this.ja = null;
                                        },
                                        linearGradient: function (e, t, n, r) {
                                            this.ja = {
                                                yb: e,
                                                zb: t,
                                                bb: n,
                                                cb: r,
                                                Ra: []
                                            };
                                        },
                                        radialGradient: function (e, t, n, r) {
                                            this.ja = {
                                                yb: e,
                                                zb: t,
                                                bb: n,
                                                cb: r,
                                                Ra: [],
                                                ec: !0
                                            };
                                        },
                                        addStop: function (e, t) {
                                            this.ja.Ra.push({
                                                color: e,
                                                stop: t
                                            });
                                        },
                                        completeGradient: function () {},
                                        draw: function (e, n, r) {
                                            let i = this.Hb;
                                            var o = this.Xa,
                                                a = this.ja;
                                            if (((e.globalCompositeOperation = this.Eb), null != a)) {
                                                o = a.yb;
                                                var s = a.zb;
                                                let n = a.bb;
                                                var l = a.cb;
                                                let r = a.Ra;
                                                a.ec ? ((a = n - o), (l -= s), (o = e.createRadialGradient(o, s, 0, o, s, Math.sqrt(a * a + l * l)))) : (o = e.createLinearGradient(o, s, n, l));
                                                for (let e = 0, n = r.length; e < n; e++) (s = r[e]), o.addColorStop(s.stop, t(s.color));
                                                (this.Xa = o), (this.ja = null);
                                            }
                                            switch (i) {
                                                case m:
                                                    (e.strokeStyle = o), (e.lineWidth = this.Ib), (e.lineCap = this.Ha), (e.lineJoin = this.Ia), e.stroke(n);
                                                    break;
                                                case h:
                                                    (e.fillStyle = o), e.fill(n, r);
                                            }
                                        }
                                    });
                                let O = new Set(),
                                    I = null,
                                    S = [],
                                    T = 0,
                                    N = 0;
                                var A = (o.CanvasRenderer = l.extend('Renderer', {
                                    __construct: function (e) {
                                        this.__parent.__construct.call(this), (this.S = [1, 0, 0, 1, 0, 0]), (this.C = e.getContext('2d')), (this.Ua = e), (this.H = []);
                                    },
                                    save: function () {
                                        this.S.push(...this.S.slice(this.S.length - 6)), this.H.push(this.C.save.bind(this.C));
                                    },
                                    restore: function () {
                                        let e = this.S.length - 6;
                                        if (6 > e) throw 'restore() called without matching save().';
                                        this.S.splice(e), this.H.push(this.C.restore.bind(this.C));
                                    },
                                    transform: function (e, t, n, r, i, o) {
                                        let a = this.S,
                                            s = a.length - 6;
                                        a.splice(s, 6, a[s] * e + a[s + 2] * t, a[s + 1] * e + a[s + 3] * t, a[s] * n + a[s + 2] * r, a[s + 1] * n + a[s + 3] * r, a[s] * i + a[s + 2] * o + a[s + 4], a[s + 1] * i + a[s + 3] * o + a[s + 5]), this.H.push(this.C.transform.bind(this.C, e, t, n, r, i, o));
                                    },
                                    rotate: function (e) {
                                        let t = Math.sin(e);
                                        (e = Math.cos(e)), this.transform(e, t, -t, e, 0, 0);
                                    },
                                    _drawPath: function (e, t) {
                                        this.H.push(t.draw.bind(t, this.C, e.T, e.Va === g ? 'evenodd' : 'nonzero'));
                                    },
                                    _drawRiveImage: function (t, n, r) {
                                        var i = t.Fb;
                                        if (i) {
                                            var o = this.C,
                                                a = e(n);
                                            this.H.push(function () {
                                                (o.globalCompositeOperation = a), (o.globalAlpha = r), o.drawImage(i, 0, 0), (o.globalAlpha = 1);
                                            });
                                        }
                                    },
                                    _getMatrix: function (e) {
                                        let t = this.S,
                                            n = t.length - 6;
                                        for (let r = 0; 6 > r; ++r) e[r] = t[n + r];
                                    },
                                    _drawImageMesh: function (t, r, i, a, s, l, c, d, f, _) {
                                        var p = this.C.canvas.width,
                                            h = this.C.canvas.height;
                                        let m = f - c,
                                            g = _ - d;
                                        (c = Math.max(c, 0)), (d = Math.max(d, 0));
                                        let E = (f = Math.min(f, p)) - c,
                                            b = (_ = Math.min(_, h)) - d;
                                        if ((console.assert(E <= Math.min(m, p)), console.assert(b <= Math.min(g, h)), !(0 >= E || 0 >= b))) {
                                            (f = E < m || b < g), (p = _ = 1);
                                            var y = Math.ceil(E * _),
                                                v = Math.ceil(b * p);
                                            (h = u.hc()), y > h && ((_ *= h / y), (y = h)), v > h && ((p *= h / v), (v = h)), I || (I = new o.DynamicRectanizer(h)).reset(512, 512), 0 > (h = I.addRect(y, v)) && (n(), O.add(this), console.assert(0 <= (h = I.addRect(y, v))));
                                            var A = 65535 & h,
                                                C = h >> 16;
                                            S.push({
                                                ha: this.S.slice(this.S.length - 6),
                                                image: t,
                                                Ya: A,
                                                Za: C,
                                                ic: c,
                                                jc: d,
                                                Ac: y,
                                                jb: v,
                                                Ba: _,
                                                Ca: p,
                                                Ta: new Float32Array(a),
                                                Db: new Float32Array(s),
                                                indices: new Uint16Array(l),
                                                mc: f,
                                                wb: (t.Ka << 1) | +!!f
                                            }),
                                                (T += a.length),
                                                (N += l.length);
                                            var R = this.C,
                                                P = e(r);
                                            this.H.push(function () {
                                                R.save(), R.resetTransform(), (R.globalCompositeOperation = P), (R.globalAlpha = i);
                                                let e = u.canvas();
                                                e && R.drawImage(e, A, C, y, v, c, d, E, b), R.restore();
                                            });
                                        }
                                    },
                                    _clipPath: function (e) {
                                        this.H.push(this.C.clip.bind(this.C, e.T, e.Va === g ? 'evenodd' : 'nonzero'));
                                    },
                                    clear: function () {
                                        O.add(this), this.H.push(this.C.clearRect.bind(this.C, 0, 0, this.Ua.width, this.Ua.height));
                                    },
                                    flush: function () {},
                                    translate: function (e, t) {
                                        this.transform(1, 0, 0, 1, e, t);
                                    }
                                }));
                                (o.makeRenderer = function (e) {
                                    let t = new A(e),
                                        n = t.C;
                                    return new Proxy(t, {
                                        get(e, r) {
                                            if ('function' == typeof e[r])
                                                return function (...t) {
                                                    return e[r].apply(e, t);
                                                };
                                            if ('function' == typeof n[r]) {
                                                if (-1 < c.indexOf(r)) throw Error("RiveException: Method call to '" + r + "()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");
                                                return function (...e) {
                                                    t.H.push(n[r].bind(n, ...e));
                                                };
                                            }
                                            return e[r];
                                        },
                                        set(e, r, i) {
                                            if (r in n)
                                                return (
                                                    t.H.push(() => {
                                                        n[r] = i;
                                                    }),
                                                    !0
                                                );
                                        }
                                    });
                                }),
                                    (o.decodeImage = function (e, t) {
                                        new b({ la: t }).decode(e);
                                    }),
                                    (o.renderFactory = {
                                        makeRenderPaint: function () {
                                            return new v();
                                        },
                                        makeRenderPath: function () {
                                            return new y();
                                        },
                                        makeRenderImage: function () {
                                            let e = R;
                                            return new b({
                                                xa: () => {
                                                    e.total++;
                                                },
                                                la: () => {
                                                    if ((e.loaded++, e.loaded === e.total)) {
                                                        let t = e.ready;
                                                        t && (t(), (e.ready = null));
                                                    }
                                                }
                                            });
                                        }
                                    });
                                let C = o.load,
                                    R = null;
                                o.load = function (e, t, n = !0) {
                                    let r = new o.FallbackFileAssetLoader();
                                    return (
                                        void 0 !== t && r.addLoader(t),
                                        n && ((t = new o.CDNFileAssetLoader()), r.addLoader(t)),
                                        new Promise(function (t) {
                                            let n = null;
                                            (R = {
                                                total: 0,
                                                loaded: 0,
                                                ready: function () {
                                                    t(n);
                                                }
                                            }),
                                                (n = C(e, r)),
                                                0 == R.total && t(n);
                                        })
                                    );
                                };
                                let P = o.RendererWrapper.prototype.align;
                                (o.RendererWrapper.prototype.align = function (e, t, n, r, i = 1) {
                                    P.call(this, e, t, n, r, i);
                                }),
                                    (o.requestAnimationFrame = (r = new a()).requestAnimationFrame.bind(r)),
                                    (o.cancelAnimationFrame = r.cancelAnimationFrame.bind(r)),
                                    (o.enableFPSCounter = r.Rb.bind(r)),
                                    (o.disableFPSCounter = r.Ob),
                                    (r.ob = n),
                                    (o.resolveAnimationFrame = n),
                                    (o.cleanup = function () {
                                        I && I.delete();
                                    });
                            };
                            var f,
                                _,
                                p = Object.assign({}, o),
                                h = './this.program',
                                m = 'object' == typeof window,
                                g = 'function' == typeof importScripts,
                                E = '';
                            (m || g) &&
                                (g ? (E = self.location.href) : 'undefined' != typeof document && document.currentScript && (E = document.currentScript.src),
                                e && (E = e),
                                (E = 0 !== E.indexOf('blob:') ? E.substr(0, E.replace(/[?#].*/, '').lastIndexOf('/') + 1) : ''),
                                g &&
                                    (_ = (e) => {
                                        var t = new XMLHttpRequest();
                                        return t.open('GET', e, !1), (t.responseType = 'arraybuffer'), t.send(null), new Uint8Array(t.response);
                                    }),
                                (f = (e, t, n) => {
                                    var r = new XMLHttpRequest();
                                    r.open('GET', e, !0),
                                        (r.responseType = 'arraybuffer'),
                                        (r.onload = () => {
                                            200 == r.status || (0 == r.status && r.response) ? t(r.response) : n();
                                        }),
                                        (r.onerror = n),
                                        r.send(null);
                                }));
                            var b = o.print || console.log.bind(console),
                                y = o.printErr || console.error.bind(console);
                            Object.assign(o, p), (p = null), o.thisProgram && (h = o.thisProgram), o.wasmBinary && (v = o.wasmBinary), o.noExitRuntime, 'object' != typeof WebAssembly && F('no native wasm support detected');
                            var v,
                                O,
                                I,
                                S,
                                T,
                                N,
                                A,
                                C,
                                R,
                                P,
                                w,
                                D = !1;
                            function L() {
                                var e = O.buffer;
                                (o.HEAP8 = S = new Int8Array(e)), (o.HEAP16 = N = new Int16Array(e)), (o.HEAP32 = C = new Int32Array(e)), (o.HEAPU8 = T = new Uint8Array(e)), (o.HEAPU16 = A = new Uint16Array(e)), (o.HEAPU32 = R = new Uint32Array(e)), (o.HEAPF32 = P = new Float32Array(e)), (o.HEAPF64 = w = new Float64Array(e));
                            }
                            var x,
                                M = [],
                                k = [],
                                j = [];
                            function U() {
                                var e = o.preRun.shift();
                                M.unshift(e);
                            }
                            var G = 0,
                                B = null,
                                V = null;
                            function F(e) {
                                throw (o.onAbort && o.onAbort(e), y((e = 'Aborted(' + e + ')')), (D = !0), (e = new WebAssembly.RuntimeError(e + '. Build with -sASSERTIONS for more info.')), i(e), e);
                            }
                            function Z(e) {
                                return e.startsWith('data:application/octet-stream;base64,');
                            }
                            if (!Z((q = 'canvas_advanced.wasm'))) {
                                var H = q;
                                q = o.locateFile ? o.locateFile(H, E) : E + H;
                            }
                            function W(e) {
                                if (e == q && v) return new Uint8Array(v);
                                if (_) return _(e);
                                throw 'both async and sync fetching of the wasm failed';
                            }
                            function Y(e) {
                                if (!v && (m || g)) {
                                    if ('function' == typeof fetch && !e.startsWith('file://'))
                                        return fetch(e, { credentials: 'same-origin' })
                                            .then((t) => {
                                                if (!t.ok) throw "failed to load wasm binary file at '" + e + "'";
                                                return t.arrayBuffer();
                                            })
                                            .catch(() => W(e));
                                    if (f)
                                        return new Promise((t, n) => {
                                            f(e, (e) => t(new Uint8Array(e)), n);
                                        });
                                }
                                return Promise.resolve().then(() => W(e));
                            }
                            function K(e, t, n) {
                                return Y(e)
                                    .then((e) => WebAssembly.instantiate(e, t))
                                    .then((e) => e)
                                    .then(n, (e) => {
                                        y('failed to asynchronously prepare wasm: ' + e), F(e);
                                    });
                            }
                            function z(e, t) {
                                var n = q;
                                return v || 'function' != typeof WebAssembly.instantiateStreaming || Z(n) || n.startsWith('file://') || 'function' != typeof fetch
                                    ? K(n, e, t)
                                    : fetch(n, { credentials: 'same-origin' }).then((r) =>
                                          WebAssembly.instantiateStreaming(r, e).then(t, function (r) {
                                              return y('wasm streaming compile failed: ' + r), y('falling back to ArrayBuffer instantiation'), K(n, e, t);
                                          })
                                      );
                            }
                            var q,
                                Q,
                                X,
                                J = {
                                    449468: (e, t, n, r, i) => {
                                        if ('undefined' == typeof window || void 0 === (window.AudioContext || window.webkitAudioContext)) return 0;
                                        if (void 0 === window.h) {
                                            (window.h = { Aa: 0 }), (window.h.I = {}), (window.h.I.ya = e), (window.h.I.capture = t), (window.h.I.La = n), (window.h.ga = {}), (window.h.ga.stopped = r), (window.h.ga.xb = i);
                                            let o = window.h;
                                            (o.D = []),
                                                (o.yc = function (e) {
                                                    for (var t = 0; t < o.D.length; ++t) if (null == o.D[t]) return (o.D[t] = e), t;
                                                    return o.D.push(e), o.D.length - 1;
                                                }),
                                                (o.Cb = function (e) {
                                                    for (o.D[e] = null; 0 < o.D.length; )
                                                        if (null == o.D[o.D.length - 1]) o.D.pop();
                                                        else break;
                                                }),
                                                (o.Sc = function (e) {
                                                    for (var t = 0; t < o.D.length; ++t) if (o.D[t] == e) return o.Cb(t);
                                                }),
                                                (o.ra = function (e) {
                                                    return o.D[e];
                                                }),
                                                (o.Bb = ['touchend', 'click']),
                                                (o.unlock = function () {
                                                    for (var e = 0; e < o.D.length; ++e) {
                                                        var t = o.D[e];
                                                        null != t &&
                                                            null != t.J &&
                                                            t.state === o.ga.xb &&
                                                            t.J.resume().then(
                                                                () => {
                                                                    nv(t.pb);
                                                                },
                                                                (e) => {
                                                                    console.error('Failed to resume audiocontext', e);
                                                                }
                                                            );
                                                    }
                                                    o.Bb.map(function (e) {
                                                        document.removeEventListener(e, o.unlock, !0);
                                                    });
                                                }),
                                                o.Bb.map(function (e) {
                                                    document.addEventListener(e, o.unlock, !0);
                                                });
                                        }
                                        return (window.h.Aa += 1), 1;
                                    },
                                    451646: () => {
                                        void 0 !== window.h && (--window.h.Aa, 0 === window.h.Aa && delete window.h);
                                    },
                                    451810: () => void 0 !== navigator.mediaDevices && void 0 !== navigator.mediaDevices.getUserMedia,
                                    451914: () => {
                                        try {
                                            var e = new (window.AudioContext || window.webkitAudioContext)(),
                                                t = e.sampleRate;
                                            return e.close(), t;
                                        } catch (e) {
                                            return 0;
                                        }
                                    },
                                    452085: (e, t, n, r, i, o) => {
                                        if (void 0 === window.h) return -1;
                                        var a = {},
                                            s = {};
                                        return (
                                            e == window.h.I.ya && 0 != n && (s.sampleRate = n),
                                            (a.J = new (window.AudioContext || window.webkitAudioContext)(s)),
                                            a.J.suspend(),
                                            (a.state = window.h.ga.stopped),
                                            (n = 0),
                                            e != window.h.I.ya && (n = t),
                                            (a.Z = a.J.createScriptProcessor(r, n, t)),
                                            (a.Z.onaudioprocess = function (n) {
                                                if (((null == a.sa || 0 == a.sa.length) && (a.sa = new Float32Array(P.buffer, i, r * t)), e == window.h.I.capture || e == window.h.I.La)) {
                                                    for (var s = 0; s < t; s += 1) for (var l = n.inputBuffer.getChannelData(s), c = a.sa, u = 0; u < r; u += 1) c[u * t + s] = l[u];
                                                    nO(o, r, i);
                                                }
                                                if (e == window.h.I.ya || e == window.h.I.La) for (nI(o, r, i), s = 0; s < n.outputBuffer.numberOfChannels; ++s) for (l = n.outputBuffer.getChannelData(s), c = a.sa, u = 0; u < r; u += 1) l[u] = c[u * t + s];
                                                else for (s = 0; s < n.outputBuffer.numberOfChannels; ++s) n.outputBuffer.getChannelData(s).fill(0);
                                            }),
                                            (e != window.h.I.capture && e != window.h.I.La) ||
                                                navigator.mediaDevices
                                                    .getUserMedia({
                                                        audio: !0,
                                                        video: !1
                                                    })
                                                    .then(function (e) {
                                                        (a.Da = a.J.createMediaStreamSource(e)), a.Da.connect(a.Z), a.Z.connect(a.J.destination);
                                                    })
                                                    .catch(function (e) {
                                                        console.log('Failed to get user media: ' + e);
                                                    }),
                                            e == window.h.I.ya && a.Z.connect(a.J.destination),
                                            (a.pb = o),
                                            window.h.yc(a)
                                        );
                                    },
                                    454962: (e) => window.h.ra(e).J.sampleRate,
                                    455035: (e) => {
                                        void 0 !== (e = window.h.ra(e)).Z && ((e.Z.onaudioprocess = function () {}), e.Z.disconnect(), (e.Z = void 0)), void 0 !== e.Da && (e.Da.disconnect(), (e.Da = void 0)), e.J.close(), (e.J = void 0), (e.pb = void 0);
                                    },
                                    455435: (e) => {
                                        window.h.Cb(e);
                                    },
                                    455485: (e) => {
                                        (e = window.h.ra(e)).J.resume(), (e.state = window.h.ga.xb);
                                    },
                                    455624: (e) => {
                                        (e = window.h.ra(e)).J.suspend(), (e.state = window.h.ga.stopped);
                                    }
                                },
                                $ = (e) => {
                                    for (; 0 < e.length; ) e.shift()(o);
                                },
                                ee = (e, t) => {
                                    for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                                        var i = e[r];
                                        '.' === i ? e.splice(r, 1) : '..' === i ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--);
                                    }
                                    if (t) for (; n; n--) e.unshift('..');
                                    return e;
                                },
                                et = (e) => {
                                    var t = '/' === e.charAt(0),
                                        n = '/' === e.substr(-1);
                                    return (
                                        (e = ee(
                                            e.split('/').filter((e) => !!e),
                                            !t
                                        ).join('/')) ||
                                            t ||
                                            (e = '.'),
                                        e && n && (e += '/'),
                                        (t ? '/' : '') + e
                                    );
                                },
                                en = (e) => {
                                    var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1);
                                    return ((e = t[0]), (t = t[1]), e || t) ? (t && (t = t.substr(0, t.length - 1)), e + t) : '.';
                                },
                                er = (e) => {
                                    if ('/' === e) return '/';
                                    var t = (e = (e = et(e)).replace(/\/$/, '')).lastIndexOf('/');
                                    return -1 === t ? e : e.substr(t + 1);
                                },
                                ei = () => {
                                    if ('object' == typeof crypto && 'function' == typeof crypto.getRandomValues) return (e) => crypto.getRandomValues(e);
                                    F('initRandomDevice');
                                },
                                eo = (e) => (eo = ei())(e);
                            function ea() {
                                for (var e = '', t = !1, n = arguments.length - 1; -1 <= n && !t; n--) {
                                    if (((t = 0 <= n ? arguments[n] : '/'), 'string' != typeof t)) throw TypeError('Arguments to path.resolve must be strings');
                                    if (!t) return '';
                                    (e = t + '/' + e), (t = '/' === t.charAt(0));
                                }
                                return (
                                    (e = ee(
                                        e.split('/').filter((e) => !!e),
                                        !t
                                    ).join('/')),
                                    (t ? '/' : '') + e || '.'
                                );
                            }
                            var es = 'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0,
                                el = (e, t, n) => {
                                    var r = t + n;
                                    for (n = t; e[n] && !(n >= r); ) ++n;
                                    if (16 < n - t && e.buffer && es) return es.decode(e.subarray(t, n));
                                    for (r = ''; t < n; ) {
                                        var i = e[t++];
                                        if (128 & i) {
                                            var o = 63 & e[t++];
                                            if (192 == (224 & i)) r += String.fromCharCode(((31 & i) << 6) | o);
                                            else {
                                                var a = 63 & e[t++];
                                                65536 > (i = 224 == (240 & i) ? ((15 & i) << 12) | (o << 6) | a : ((7 & i) << 18) | (o << 12) | (a << 6) | (63 & e[t++])) ? (r += String.fromCharCode(i)) : ((i -= 65536), (r += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i))));
                                            }
                                        } else r += String.fromCharCode(i);
                                    }
                                    return r;
                                },
                                ec = [],
                                eu = (e) => {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var r = e.charCodeAt(n);
                                        127 >= r ? t++ : 2047 >= r ? (t += 2) : 55296 <= r && 57343 >= r ? ((t += 4), ++n) : (t += 3);
                                    }
                                    return t;
                                },
                                ed = (e, t, n, r) => {
                                    if (!(0 < r)) return 0;
                                    var i = n;
                                    r = n + r - 1;
                                    for (var o = 0; o < e.length; ++o) {
                                        var a = e.charCodeAt(o);
                                        if ((55296 <= a && 57343 >= a && (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++o))), 127 >= a)) {
                                            if (n >= r) break;
                                            t[n++] = a;
                                        } else {
                                            if (2047 >= a) {
                                                if (n + 1 >= r) break;
                                                t[n++] = 192 | (a >> 6);
                                            } else {
                                                if (65535 >= a) {
                                                    if (n + 2 >= r) break;
                                                    t[n++] = 224 | (a >> 12);
                                                } else {
                                                    if (n + 3 >= r) break;
                                                    (t[n++] = 240 | (a >> 18)), (t[n++] = 128 | ((a >> 12) & 63));
                                                }
                                                t[n++] = 128 | ((a >> 6) & 63);
                                            }
                                            t[n++] = 128 | (63 & a);
                                        }
                                    }
                                    return (t[n] = 0), n - i;
                                };
                            function ef(e, t) {
                                var n = Array(eu(e) + 1);
                                return (e = ed(e, n, 0, n.length)), t && (n.length = e), n;
                            }
                            var e_ = [];
                            function ep(e, t) {
                                (e_[e] = {
                                    input: [],
                                    F: [],
                                    V: t
                                }),
                                    eW(e, eh);
                            }
                            var eh = {
                                    open: function (e) {
                                        var t = e_[e.node.za];
                                        if (!t) throw new ew(43);
                                        (e.s = t), (e.seekable = !1);
                                    },
                                    close: function (e) {
                                        e.s.V.qa(e.s);
                                    },
                                    qa: function (e) {
                                        e.s.V.qa(e.s);
                                    },
                                    read: function (e, t, n, r) {
                                        if (!e.s || !e.s.V.ib) throw new ew(60);
                                        for (var i = 0, o = 0; o < r; o++) {
                                            try {
                                                var a = e.s.V.ib(e.s);
                                            } catch (e) {
                                                throw new ew(29);
                                            }
                                            if (void 0 === a && 0 === i) throw new ew(6);
                                            if (null == a) break;
                                            i++, (t[n + o] = a);
                                        }
                                        return i && (e.node.timestamp = Date.now()), i;
                                    },
                                    write: function (e, t, n, r) {
                                        if (!e.s || !e.s.V.Oa) throw new ew(60);
                                        try {
                                            for (var i = 0; i < r; i++) e.s.V.Oa(e.s, t[n + i]);
                                        } catch (e) {
                                            throw new ew(29);
                                        }
                                        return r && (e.node.timestamp = Date.now()), i;
                                    }
                                },
                                em = {
                                    ib: function () {
                                        e: {
                                            if (!ec.length) {
                                                var e = null;
                                                if (('undefined' != typeof window && 'function' == typeof window.prompt ? null !== (e = window.prompt('Input: ')) && (e += '\n') : 'function' == typeof readline && null !== (e = readline()) && (e += '\n'), !e)) {
                                                    e = null;
                                                    break e;
                                                }
                                                ec = ef(e, !0);
                                            }
                                            e = ec.shift();
                                        }
                                        return e;
                                    },
                                    Oa: function (e, t) {
                                        null === t || 10 === t ? (b(el(e.F, 0)), (e.F = [])) : 0 != t && e.F.push(t);
                                    },
                                    qa: function (e) {
                                        e.F && 0 < e.F.length && (b(el(e.F, 0)), (e.F = []));
                                    },
                                    bc: function () {
                                        return {
                                            Fc: 25856,
                                            Hc: 5,
                                            Ec: 191,
                                            Gc: 35387,
                                            Dc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                                        };
                                    },
                                    cc: function () {
                                        return 0;
                                    },
                                    dc: function () {
                                        return [24, 80];
                                    }
                                },
                                eg = {
                                    Oa: function (e, t) {
                                        null === t || 10 === t ? (y(el(e.F, 0)), (e.F = [])) : 0 != t && e.F.push(t);
                                    },
                                    qa: function (e) {
                                        e.F && 0 < e.F.length && (y(el(e.F, 0)), (e.F = []));
                                    }
                                };
                            function eE(e, t) {
                                var n = e.j ? e.j.length : 0;
                                n >= t || ((t = Math.max(t, (n * (1048576 > n ? 2 : 1.125)) >>> 0)), 0 != n && (t = Math.max(t, 256)), (n = e.j), (e.j = new Uint8Array(t)), 0 < e.v && e.j.set(n.subarray(0, e.v), 0));
                            }
                            var eb = {
                                O: null,
                                U: () => eb.createNode(null, '/', 16895, 0),
                                createNode(e, t, n, r) {
                                    if (24576 == (61440 & n) || 4096 == (61440 & n)) throw new ew(63);
                                    return (
                                        eb.O ||
                                            (eb.O = {
                                                dir: {
                                                    node: {
                                                        Y: eb.l.Y,
                                                        P: eb.l.P,
                                                        ka: eb.l.ka,
                                                        va: eb.l.va,
                                                        ub: eb.l.ub,
                                                        Ab: eb.l.Ab,
                                                        vb: eb.l.vb,
                                                        sb: eb.l.sb,
                                                        Ea: eb.l.Ea
                                                    },
                                                    stream: { ba: eb.m.ba }
                                                },
                                                file: {
                                                    node: {
                                                        Y: eb.l.Y,
                                                        P: eb.l.P
                                                    },
                                                    stream: {
                                                        ba: eb.m.ba,
                                                        read: eb.m.read,
                                                        write: eb.m.write,
                                                        pa: eb.m.pa,
                                                        lb: eb.m.lb,
                                                        nb: eb.m.nb
                                                    }
                                                },
                                                link: {
                                                    node: {
                                                        Y: eb.l.Y,
                                                        P: eb.l.P,
                                                        ma: eb.l.ma
                                                    },
                                                    stream: {}
                                                },
                                                $a: {
                                                    node: {
                                                        Y: eb.l.Y,
                                                        P: eb.l.P
                                                    },
                                                    stream: eH
                                                }
                                            }),
                                        16384 == (61440 & (n = ej(e, t, n, r)).mode) ? ((n.l = eb.O.dir.node), (n.m = eb.O.dir.stream), (n.j = {})) : 32768 == (61440 & n.mode) ? ((n.l = eb.O.file.node), (n.m = eb.O.file.stream), (n.v = 0), (n.j = null)) : 40960 == (61440 & n.mode) ? ((n.l = eb.O.link.node), (n.m = eb.O.link.stream)) : 8192 == (61440 & n.mode) && ((n.l = eb.O.$a.node), (n.m = eb.O.$a.stream)),
                                        (n.timestamp = Date.now()),
                                        e && ((e.j[t] = n), (e.timestamp = n.timestamp)),
                                        n
                                    );
                                },
                                Kc: (e) => (e.j ? (e.j.subarray ? e.j.subarray(0, e.v) : new Uint8Array(e.j)) : new Uint8Array(0)),
                                l: {
                                    Y(e) {
                                        var t = {};
                                        return (t.Jc = 8192 == (61440 & e.mode) ? e.id : 1), (t.Mc = e.id), (t.mode = e.mode), (t.Oc = 1), (t.uid = 0), (t.Lc = 0), (t.za = e.za), 16384 == (61440 & e.mode) ? (t.size = 4096) : 32768 == (61440 & e.mode) ? (t.size = e.v) : 40960 == (61440 & e.mode) ? (t.size = e.link.length) : (t.size = 0), (t.Bc = new Date(e.timestamp)), (t.Nc = new Date(e.timestamp)), (t.Ic = new Date(e.timestamp)), (t.Jb = 4096), (t.Cc = Math.ceil(t.size / t.Jb)), t;
                                    },
                                    P(e, t) {
                                        if ((void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && ((t = t.size), e.v != t)))
                                            if (0 == t) (e.j = null), (e.v = 0);
                                            else {
                                                var n = e.j;
                                                (e.j = new Uint8Array(t)), n && e.j.set(n.subarray(0, Math.min(t, e.v))), (e.v = t);
                                            }
                                    },
                                    ka() {
                                        throw eD[44];
                                    },
                                    va: (e, t, n, r) => eb.createNode(e, t, n, r),
                                    ub(e, t, n) {
                                        if (16384 == (61440 & e.mode)) {
                                            try {
                                                var r = ek(t, n);
                                            } catch (e) {}
                                            if (r) for (var i in r.j) throw new ew(55);
                                        }
                                        delete e.parent.j[e.name], (e.parent.timestamp = Date.now()), (e.name = n), (t.j[n] = e), (t.timestamp = e.parent.timestamp), (e.parent = t);
                                    },
                                    Ab(e, t) {
                                        delete e.j[t], (e.timestamp = Date.now());
                                    },
                                    vb(e, t) {
                                        var n,
                                            r = ek(e, t);
                                        for (n in r.j) throw new ew(55);
                                        delete e.j[t], (e.timestamp = Date.now());
                                    },
                                    sb(e) {
                                        var t,
                                            n = ['.', '..'];
                                        for (t in e.j) e.j.hasOwnProperty(t) && n.push(t);
                                        return n;
                                    },
                                    Ea: (e, t, n) => (((e = eb.createNode(e, t, 41471, 0)).link = n), e),
                                    ma(e) {
                                        if (40960 != (61440 & e.mode)) throw new ew(28);
                                        return e.link;
                                    }
                                },
                                m: {
                                    read(e, t, n, r, i) {
                                        var o = e.node.j;
                                        if (i >= e.node.v) return 0;
                                        if (8 < (e = Math.min(e.node.v - i, r)) && o.subarray) t.set(o.subarray(i, i + e), n);
                                        else for (r = 0; r < e; r++) t[n + r] = o[i + r];
                                        return e;
                                    },
                                    write(e, t, n, r, i, o) {
                                        if ((t.buffer === S.buffer && (o = !1), !r)) return 0;
                                        if ((((e = e.node).timestamp = Date.now()), t.subarray && (!e.j || e.j.subarray))) {
                                            if (o) return (e.j = t.subarray(n, n + r)), (e.v = r);
                                            if (0 === e.v && 0 === i) return (e.j = t.slice(n, n + r)), (e.v = r);
                                            if (i + r <= e.v) return e.j.set(t.subarray(n, n + r), i), r;
                                        }
                                        if ((eE(e, i + r), e.j.subarray && t.subarray)) e.j.set(t.subarray(n, n + r), i);
                                        else for (o = 0; o < r; o++) e.j[i + o] = t[n + o];
                                        return (e.v = Math.max(e.v, i + r)), r;
                                    },
                                    ba(e, t, n) {
                                        if ((1 === n ? (t += e.position) : 2 === n && 32768 == (61440 & e.node.mode) && (t += e.node.v), 0 > t)) throw new ew(28);
                                        return t;
                                    },
                                    pa(e, t, n) {
                                        eE(e.node, t + n), (e.node.v = Math.max(e.node.v, t + n));
                                    },
                                    lb(e, t, n, r, i) {
                                        if (32768 != (61440 & e.node.mode)) throw new ew(43);
                                        if (((e = e.node.j), 2 & i || e.buffer !== S.buffer)) throw ((0 < n || n + t < e.length) && (e = e.subarray ? e.subarray(n, n + t) : Array.prototype.slice.call(e, n, n + t)), (n = !0), F(), (t = void 0), new ew(48));
                                        return (
                                            (n = !1),
                                            (t = e.byteOffset),
                                            {
                                                o: t,
                                                M: n
                                            }
                                        );
                                    },
                                    nb: (e, t, n, r) => (eb.m.write(e, t, 0, r, n, !1), 0)
                                }
                            };
                            function ey(e, t) {
                                var n = 0;
                                return e && (n |= 365), t && (n |= 146), n;
                            }
                            var ev,
                                eO,
                                eI,
                                eS,
                                eT = null,
                                eN = {},
                                eA = [],
                                eC = 1,
                                eR = null,
                                eP = !0,
                                ew = null,
                                eD = {},
                                eL = (e, t = {}) => {
                                    if (!(e = ea(e)))
                                        return {
                                            path: '',
                                            node: null
                                        };
                                    if (
                                        8 <
                                        (t = Object.assign(
                                            {
                                                gb: !0,
                                                Qa: 0
                                            },
                                            t
                                        )).Qa
                                    )
                                        throw new ew(32);
                                    e = e.split('/').filter((e) => !!e);
                                    for (var n = eT, r = '/', i = 0; i < e.length; i++) {
                                        var o = i === e.length - 1;
                                        if (o && t.parent) break;
                                        if (((n = ek(n, e[i])), (r = et(r + '/' + e[i])), n.wa && (!o || (o && t.gb)) && (n = n.wa.root), !o || t.fb)) {
                                            for (o = 0; 40960 == (61440 & n.mode); ) if (((n = eQ(r)), (n = eL((r = ea(en(r), n)), { Qa: t.Qa + 1 }).node), 40 < o++)) throw new ew(32);
                                        }
                                    }
                                    return {
                                        path: r,
                                        node: n
                                    };
                                },
                                ex = (e) => {
                                    for (var t; ; ) {
                                        if (e === e.parent) return (e = e.U.mb), t ? ('/' !== e[e.length - 1] ? `${e}/${t}` : e + t) : e;
                                        (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                                    }
                                },
                                eM = (e, t) => {
                                    for (var n = 0, r = 0; r < t.length; r++) n = ((n << 5) - n + t.charCodeAt(r)) | 0;
                                    return ((e + n) >>> 0) % eR.length;
                                },
                                ek = (e, t) => {
                                    var n;
                                    if ((n = (n = eG(e, 'x')) ? n : 2 * !e.l.ka)) throw new ew(n, e);
                                    for (n = eR[eM(e.id, t)]; n; n = n.lc) {
                                        var r = n.name;
                                        if (n.parent.id === e.id && r === t) return n;
                                    }
                                    return e.l.ka(e, t);
                                },
                                ej = (e, t, n, r) => ((t = eM((e = new nh(e, t, n, r)).parent.id, e.name)), (e.lc = eR[t]), (eR[t] = e)),
                                eU = (e) => {
                                    var t = ['r', 'w', 'rw'][3 & e];
                                    return 512 & e && (t += 'w'), t;
                                },
                                eG = (e, t) => (eP ? 0 : (t.includes('r') && !(292 & e.mode)) || (t.includes('w') && !(146 & e.mode)) || (t.includes('x') && !(73 & e.mode)) ? 2 : 0),
                                eB = (e, t) => {
                                    try {
                                        return ek(e, t), 20;
                                    } catch (e) {}
                                    return eG(e, 'wx');
                                },
                                eV = () => {
                                    for (var e = 0; 4096 >= e; e++) if (!eA[e]) return e;
                                    throw new ew(33);
                                },
                                eF = (e) => {
                                    if (!(e = eA[e])) throw new ew(8);
                                    return e;
                                },
                                eZ = (e, t = -1) => (
                                    eI ||
                                        (((eI = function () {
                                            this.h = {};
                                        }).prototype = {}),
                                        Object.defineProperties(eI.prototype, {
                                            object: {
                                                get() {
                                                    return this.node;
                                                },
                                                set(e) {
                                                    this.node = e;
                                                }
                                            },
                                            flags: {
                                                get() {
                                                    return this.h.flags;
                                                },
                                                set(e) {
                                                    this.h.flags = e;
                                                }
                                            },
                                            position: {
                                                get() {
                                                    return this.h.position;
                                                },
                                                set(e) {
                                                    this.h.position = e;
                                                }
                                            }
                                        })),
                                    (e = Object.assign(new eI(), e)),
                                    -1 == t && (t = eV()),
                                    (e.X = t),
                                    (eA[t] = e)
                                ),
                                eH = {
                                    open: (e) => {
                                        (e.m = eN[e.node.za].m), e.m.open && e.m.open(e);
                                    },
                                    ba: () => {
                                        throw new ew(70);
                                    }
                                },
                                eW = (e, t) => {
                                    eN[e] = { m: t };
                                },
                                eY = (e, t) => {
                                    var n = '/' === t,
                                        r = !t;
                                    if (n && eT) throw new ew(10);
                                    if (!n && !r) {
                                        var i = eL(t, { gb: !1 });
                                        if (((t = i.path), (i = i.node).wa)) throw new ew(10);
                                        if (16384 != (61440 & i.mode)) throw new ew(54);
                                    }
                                    (t = {
                                        type: e,
                                        Qc: {},
                                        mb: t,
                                        kc: []
                                    }),
                                        ((e = e.U(t)).U = t),
                                        (t.root = e),
                                        n ? (eT = e) : i && ((i.wa = t), i.U && i.U.kc.push(t));
                                },
                                eK = (e, t, n) => {
                                    var r = eL(e, { parent: !0 }).node;
                                    if (!(e = er(e)) || '.' === e || '..' === e) throw new ew(28);
                                    var i = eB(r, e);
                                    if (i) throw new ew(i);
                                    if (!r.l.va) throw new ew(63);
                                    return r.l.va(r, e, t, n);
                                },
                                ez = (e, t, n) => {
                                    void 0 === n && ((n = t), (t = 438)), eK(e, 8192 | t, n);
                                },
                                eq = (e, t) => {
                                    if (!ea(e)) throw new ew(44);
                                    var n = eL(t, { parent: !0 }).node;
                                    if (!n) throw new ew(44);
                                    var r = eB(n, (t = er(t)));
                                    if (r) throw new ew(r);
                                    if (!n.l.Ea) throw new ew(63);
                                    n.l.Ea(n, t, e);
                                },
                                eQ = (e) => {
                                    if (!(e = eL(e).node)) throw new ew(44);
                                    if (!e.l.ma) throw new ew(28);
                                    return ea(ex(e.parent), e.l.ma(e));
                                },
                                eX = (e, t, n) => {
                                    if ('' === e) throw new ew(44);
                                    if ('string' == typeof t) {
                                        var r = {
                                            r: 0,
                                            'r+': 2,
                                            w: 577,
                                            'w+': 578,
                                            a: 1089,
                                            'a+': 1090
                                        }[t];
                                        if (void 0 === r) throw Error(`Unknown file open mode: ${t}`);
                                        t = r;
                                    }
                                    if (((n = 64 & t ? ((void 0 === n ? 438 : n) & 4095) | 32768 : 0), 'object' == typeof e)) var i = e;
                                    else {
                                        e = et(e);
                                        try {
                                            i = eL(e, { fb: !(131072 & t) }).node;
                                        } catch (e) {}
                                    }
                                    if (((r = !1), 64 & t))
                                        if (i) {
                                            if (128 & t) throw new ew(20);
                                        } else (i = eK(e, n, 0)), (r = !0);
                                    if (!i) throw new ew(44);
                                    if ((8192 == (61440 & i.mode) && (t &= -513), 65536 & t && 16384 != (61440 & i.mode))) throw new ew(54);
                                    if (!r && (n = i ? (40960 == (61440 & i.mode) ? 32 : 16384 == (61440 & i.mode) && ('r' !== eU(t) || 512 & t) ? 31 : eG(i, eU(t))) : 44)) throw new ew(n);
                                    if (512 & t && !r) {
                                        if (!(n = 'string' == typeof (n = i) ? eL(n, { fb: !0 }).node : n).l.P) throw new ew(63);
                                        if (16384 == (61440 & n.mode)) throw new ew(31);
                                        if (32768 != (61440 & n.mode)) throw new ew(28);
                                        if ((r = eG(n, 'w'))) throw new ew(r);
                                        n.l.P(n, {
                                            size: 0,
                                            timestamp: Date.now()
                                        });
                                    }
                                    return (
                                        (t &= -131713),
                                        (i = eZ({
                                            node: i,
                                            path: ex(i),
                                            flags: t,
                                            seekable: !0,
                                            position: 0,
                                            m: i.m,
                                            zc: [],
                                            error: !1
                                        })).m.open && i.m.open(i),
                                        !o.logReadFiles || 1 & t || (eS || (eS = {}), e in eS || (eS[e] = 1)),
                                        i
                                    );
                                },
                                eJ = (e, t, n) => {
                                    if (null === e.X) throw new ew(8);
                                    if (!e.seekable || !e.m.ba) throw new ew(70);
                                    if (0 != n && 1 != n && 2 != n) throw new ew(28);
                                    (e.position = e.m.ba(e, t, n)), (e.zc = []);
                                },
                                e$ = () => {
                                    ew ||
                                        (((ew = function (e, t) {
                                            (this.name = 'ErrnoError'),
                                                (this.node = t),
                                                (this.pc = function (e) {
                                                    this.aa = e;
                                                }),
                                                this.pc(e),
                                                (this.message = 'FS error');
                                        }).prototype = Error()),
                                        (ew.prototype.constructor = ew),
                                        [44].forEach((e) => {
                                            (eD[e] = new ew(e)), (eD[e].stack = '<generic error, no stack>');
                                        }));
                                },
                                e0 = (e, t, n) => {
                                    e = et('/dev/' + e);
                                    var r = ey(!!t, !!n);
                                    eO || (eO = 64);
                                    var i = (eO++ << 8) | 0;
                                    eW(i, {
                                        open: (e) => {
                                            e.seekable = !1;
                                        },
                                        close: () => {
                                            n && n.buffer && n.buffer.length && n(10);
                                        },
                                        read: (e, n, r, i) => {
                                            for (var o = 0, a = 0; a < i; a++) {
                                                try {
                                                    var s = t();
                                                } catch (e) {
                                                    throw new ew(29);
                                                }
                                                if (void 0 === s && 0 === o) throw new ew(6);
                                                if (null == s) break;
                                                o++, (n[r + a] = s);
                                            }
                                            return o && (e.node.timestamp = Date.now()), o;
                                        },
                                        write: (e, t, r, i) => {
                                            for (var o = 0; o < i; o++)
                                                try {
                                                    n(t[r + o]);
                                                } catch (e) {
                                                    throw new ew(29);
                                                }
                                            return i && (e.node.timestamp = Date.now()), o;
                                        }
                                    }),
                                        ez(e, r, i);
                                },
                                e1 = {},
                                e2 = void 0;
                            function e3() {
                                return C[((e2 += 4) - 4) >> 2];
                            }
                            function e4(e) {
                                if (void 0 === e) return '_unknown';
                                var t = (e = e.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0);
                                return 48 <= t && 57 >= t ? `_${e}` : e;
                            }
                            function e5(e, t) {
                                return {
                                    [(e = e4(e))]: function () {
                                        return t.apply(this, arguments);
                                    }
                                }[e];
                            }
                            function e6() {
                                (this.M = [void 0]), (this.hb = []);
                            }
                            var e8 = new e6(),
                                e7 = void 0;
                            function e9(e) {
                                throw new e7(e);
                            }
                            var te = (e) => (e || e9('Cannot use deleted val. handle = ' + e), e8.get(e).value),
                                tt = (e) => {
                                    switch (e) {
                                        case void 0:
                                            return 1;
                                        case null:
                                            return 2;
                                        case !0:
                                            return 3;
                                        case !1:
                                            return 4;
                                        default:
                                            return e8.pa({
                                                tb: 1,
                                                value: e
                                            });
                                    }
                                };
                            function tn(e) {
                                var t = Error,
                                    n = e5(e, function (t) {
                                        (this.name = e), (this.message = t), void 0 !== (t = Error(t).stack) && (this.stack = this.toString() + '\n' + t.replace(/^Error(:[^\n]*)?\n/, ''));
                                    });
                                return (
                                    (n.prototype = Object.create(t.prototype)),
                                    (n.prototype.constructor = n),
                                    (n.prototype.toString = function () {
                                        return void 0 === this.message ? this.name : `${this.name}: ${this.message}`;
                                    }),
                                    n
                                );
                            }
                            var tr = void 0,
                                ti = void 0;
                            function to(e) {
                                for (var t = ''; T[e]; ) t += ti[T[e++]];
                                return t;
                            }
                            var ta = [];
                            function ts() {
                                for (; ta.length; ) {
                                    var e = ta.pop();
                                    (e.g.fa = !1), e.delete();
                                }
                            }
                            var tl = void 0,
                                tc = {};
                            function tu(e, t) {
                                for (void 0 === t && e9('ptr should not be undefined'); e.A; ) (t = e.na(t)), (e = e.A);
                                return t;
                            }
                            var td = {};
                            function tf(e) {
                                var t = to((e = nT(e)));
                                return nb(e), t;
                            }
                            function t_(e, t) {
                                var n = td[e];
                                return void 0 === n && e9(t + ' has unknown type ' + tf(e)), n;
                            }
                            function tp() {}
                            var th = !1;
                            function tm(e) {
                                --e.count.value, 0 === e.count.value && (e.G ? e.L.W(e.G) : e.u.i.W(e.o));
                            }
                            function tg(e, t, n) {
                                return t === n ? e : void 0 === n.A || null === (e = tg(e, t, n.A)) ? null : n.Pb(e);
                            }
                            var tE = {};
                            function tb(e, t) {
                                return tc[(t = tu(e, t))];
                            }
                            var ty = void 0;
                            function tv(e) {
                                throw new ty(e);
                            }
                            function tO(e, t) {
                                return (t.u && t.o) || tv('makeClassHandle requires ptr and ptrType'), !!t.L != !!t.G && tv('Both smartPtrType and smartPtr must be specified'), (t.count = { value: 1 }), tI(Object.create(e, { g: { value: t } }));
                            }
                            function tI(e) {
                                return 'undefined' == typeof FinalizationRegistry
                                    ? ((tI = (e) => e), e)
                                    : ((th = new FinalizationRegistry((e) => {
                                          tm(e.g);
                                      })),
                                      (tI = (e) => {
                                          var t = e.g;
                                          return t.G && th.register(e, { g: t }, e), e;
                                      }),
                                      (tp = (e) => {
                                          th.unregister(e);
                                      }),
                                      tI(e));
                            }
                            var tS = {};
                            function tT(e) {
                                for (; e.length; ) {
                                    var t = e.pop();
                                    e.pop()(t);
                                }
                            }
                            function tN(e) {
                                return this.fromWireType(C[e >> 2]);
                            }
                            var tA = {},
                                tC = {};
                            function tR(e, t, n) {
                                function r(t) {
                                    (t = n(t)).length !== e.length && tv('Mismatched type converter count');
                                    for (var r = 0; r < e.length; ++r) tD(e[r], t[r]);
                                }
                                e.forEach(function (e) {
                                    tC[e] = t;
                                });
                                var i = Array(t.length),
                                    o = [],
                                    a = 0;
                                t.forEach((e, t) => {
                                    td.hasOwnProperty(e)
                                        ? (i[t] = td[e])
                                        : (o.push(e),
                                          tA.hasOwnProperty(e) || (tA[e] = []),
                                          tA[e].push(() => {
                                              (i[t] = td[e]), ++a === o.length && r(i);
                                          }));
                                }),
                                    0 === o.length && r(i);
                            }
                            function tP(e) {
                                switch (e) {
                                    case 1:
                                        return 0;
                                    case 2:
                                        return 1;
                                    case 4:
                                        return 2;
                                    case 8:
                                        return 3;
                                    default:
                                        throw TypeError(`Unknown type size: ${e}`);
                                }
                            }
                            function tw(e, t, n = {}) {
                                var r = t.name;
                                if ((e || e9(`type "${r}" must have a positive integer typeid pointer`), td.hasOwnProperty(e))) {
                                    if (n.$b) return;
                                    e9(`Cannot register type '${r}' twice`);
                                }
                                (td[e] = t), delete tC[e], tA.hasOwnProperty(e) && ((t = tA[e]), delete tA[e], t.forEach((e) => e()));
                            }
                            function tD(e, t, n = {}) {
                                if (!('argPackAdvance' in t)) throw TypeError('registerType registeredInstance requires argPackAdvance');
                                tw(e, t, n);
                            }
                            function tL(e) {
                                e9(e.g.u.i.name + ' instance already deleted');
                            }
                            function tx() {}
                            function tM(e, t, n) {
                                if (void 0 === e[t].B) {
                                    var r = e[t];
                                    (e[t] = function () {
                                        return e[t].B.hasOwnProperty(arguments.length) || e9(`Function '${n}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[t].B})!`), e[t].B[arguments.length].apply(this, arguments);
                                    }),
                                        (e[t].B = []),
                                        (e[t].B[r.ea] = r);
                                }
                            }
                            function tk(e, t, n) {
                                o.hasOwnProperty(e) ? ((void 0 === n || (void 0 !== o[e].B && void 0 !== o[e].B[n])) && e9(`Cannot register public name '${e}' twice`), tM(o, e, e), o.hasOwnProperty(n) && e9(`Cannot register multiple overloads of a function with the same number of arguments (${n})!`), (o[e].B[n] = t)) : ((o[e] = t), void 0 !== n && (o[e].Pc = n));
                            }
                            function tj(e, t, n, r, i, o, a, s) {
                                (this.name = e), (this.constructor = t), (this.N = n), (this.W = r), (this.A = i), (this.Ub = o), (this.na = a), (this.Pb = s), (this.qb = []);
                            }
                            function tU(e, t, n) {
                                for (; t !== n; ) t.na || e9(`Expected null or instance of ${n.name}, got an instance of ${t.name}`), (e = t.na(e)), (t = t.A);
                                return e;
                            }
                            function tG(e, t) {
                                return null === t ? (this.Na && e9(`null is not a valid ${this.name}`), 0) : (t.g || e9(`Cannot pass "${t1(t)}" as a ${this.name}`), t.g.o || e9(`Cannot pass deleted object as a pointer of type ${this.name}`), tU(t.g.o, t.g.u.i, this.i));
                            }
                            function tB(e, t) {
                                if (null === t) {
                                    if ((this.Na && e9(`null is not a valid ${this.name}`), this.ua)) {
                                        var n = this.Pa();
                                        return null !== e && e.push(this.W, n), n;
                                    }
                                    return 0;
                                }
                                if ((t.g || e9(`Cannot pass "${t1(t)}" as a ${this.name}`), t.g.o || e9(`Cannot pass deleted object as a pointer of type ${this.name}`), !this.ta && t.g.u.ta && e9(`Cannot convert argument of type ${t.g.L ? t.g.L.name : t.g.u.name} to parameter type ${this.name}`), (n = tU(t.g.o, t.g.u.i, this.i)), this.ua))
                                    switch ((void 0 === t.g.G && e9('Passing raw pointer to smart pointer is illegal'), this.tc)) {
                                        case 0:
                                            t.g.L === this ? (n = t.g.G) : e9(`Cannot convert argument of type ${t.g.L ? t.g.L.name : t.g.u.name} to parameter type ${this.name}`);
                                            break;
                                        case 1:
                                            n = t.g.G;
                                            break;
                                        case 2:
                                            if (t.g.L === this) n = t.g.G;
                                            else {
                                                var r = t.clone();
                                                (n = this.oc(
                                                    n,
                                                    tt(function () {
                                                        r.delete();
                                                    })
                                                )),
                                                    null !== e && e.push(this.W, n);
                                            }
                                            break;
                                        default:
                                            e9('Unsupporting sharing policy');
                                    }
                                return n;
                            }
                            function tV(e, t) {
                                return null === t ? (this.Na && e9(`null is not a valid ${this.name}`), 0) : (t.g || e9(`Cannot pass "${t1(t)}" as a ${this.name}`), t.g.o || e9(`Cannot pass deleted object as a pointer of type ${this.name}`), t.g.u.ta && e9(`Cannot convert argument of type ${t.g.u.name} to parameter type ${this.name}`), tU(t.g.o, t.g.u.i, this.i));
                            }
                            function tF(e, t, n, r) {
                                (this.name = e), (this.i = t), (this.Na = n), (this.ta = r), (this.ua = !1), (this.W = this.oc = this.Pa = this.rb = this.tc = this.nc = void 0), void 0 !== t.A ? (this.toWireType = tB) : ((this.toWireType = r ? tG : tV), (this.K = null));
                            }
                            function tZ(e, t, n) {
                                o.hasOwnProperty(e) || tv('Replacing nonexistant public symbol'), void 0 !== o[e].B && void 0 !== n ? (o[e].B[n] = t) : ((o[e] = t), (o[e].ea = n));
                            }
                            var tH = [],
                                tW = (e) => {
                                    var t = tH[e];
                                    return t || (e >= tH.length && (tH.length = e + 1), (tH[e] = t = x.get(e))), t;
                                },
                                tY = (e, t) => {
                                    var n = [];
                                    return function () {
                                        if (((n.length = 0), Object.assign(n, arguments), e.includes('j'))) {
                                            var r = o['dynCall_' + e];
                                            r = n && n.length ? r.apply(null, [t].concat(n)) : r.call(null, t);
                                        } else r = tW(t).apply(null, n);
                                        return r;
                                    };
                                };
                            function tK(e, t) {
                                var n = (e = to(e)).includes('j') ? tY(e, t) : tW(t);
                                return 'function' != typeof n && e9(`unknown function pointer with signature ${e}: ${t}`), n;
                            }
                            var tz = void 0;
                            function tq(e, t) {
                                function n(e) {
                                    i[e] || td[e] || (tC[e] ? tC[e].forEach(n) : (r.push(e), (i[e] = !0)));
                                }
                                var r = [],
                                    i = {};
                                throw (t.forEach(n), new tz(`${e}: ` + r.map(tf).join([', '])));
                            }
                            function tQ(e, t, n, r, i) {
                                var o = t.length;
                                2 > o && e9("argTypes array size mismatch! Must at least get return value and 'this' types!");
                                var a = null !== t[1] && null !== n,
                                    s = !1;
                                for (n = 1; n < t.length; ++n)
                                    if (null !== t[n] && void 0 === t[n].K) {
                                        s = !0;
                                        break;
                                    }
                                var l = 'void' !== t[0].name,
                                    c = o - 2,
                                    u = Array(c),
                                    d = [],
                                    f = [];
                                return function () {
                                    if ((arguments.length !== c && e9(`function ${e} called with ${arguments.length} arguments, expected ${c} args!`), (f.length = 0), (d.length = a ? 2 : 1), (d[0] = i), a)) {
                                        var n = t[1].toWireType(f, this);
                                        d[1] = n;
                                    }
                                    for (var o = 0; o < c; ++o) (u[o] = t[o + 2].toWireType(f, arguments[o])), d.push(u[o]);
                                    if (((o = r.apply(null, d)), s)) tT(f);
                                    else
                                        for (var _ = a ? 1 : 2; _ < t.length; _++) {
                                            var p = 1 === _ ? n : u[_ - 2];
                                            null !== t[_].K && t[_].K(p);
                                        }
                                    return l ? t[0].fromWireType(o) : void 0;
                                };
                            }
                            function tX(e, t) {
                                for (var n = [], r = 0; r < e; r++) n.push(R[(t + 4 * r) >> 2]);
                                return n;
                            }
                            function tJ(e, t, n) {
                                return e instanceof Object || e9(`${n} with invalid "this": ${e}`), e instanceof t.i.constructor || e9(`${n} incompatible with "this" of type ${e.constructor.name}`), e.g.o || e9(`cannot call emscripten binding method ${n} on deleted object`), tU(e.g.o, e.g.u.i, t.i);
                            }
                            function t$(e) {
                                e >= e8.h && 0 == --e8.get(e).tb && e8.Zb(e);
                            }
                            function t0(e, t, n) {
                                switch (t) {
                                    case 0:
                                        return function (e) {
                                            return this.fromWireType((n ? S : T)[e]);
                                        };
                                    case 1:
                                        return function (e) {
                                            return this.fromWireType((n ? N : A)[e >> 1]);
                                        };
                                    case 2:
                                        return function (e) {
                                            return this.fromWireType((n ? C : R)[e >> 2]);
                                        };
                                    default:
                                        throw TypeError('Unknown integer type: ' + e);
                                }
                            }
                            function t1(e) {
                                if (null === e) return 'null';
                                var t = typeof e;
                                return 'object' === t || 'array' === t || 'function' === t ? e.toString() : '' + e;
                            }
                            function t2(e, t) {
                                switch (t) {
                                    case 2:
                                        return function (e) {
                                            return this.fromWireType(P[e >> 2]);
                                        };
                                    case 3:
                                        return function (e) {
                                            return this.fromWireType(w[e >> 3]);
                                        };
                                    default:
                                        throw TypeError('Unknown float type: ' + e);
                                }
                            }
                            function t3(e, t, n) {
                                switch (t) {
                                    case 0:
                                        return n
                                            ? function (e) {
                                                  return S[e];
                                              }
                                            : function (e) {
                                                  return T[e];
                                              };
                                    case 1:
                                        return n
                                            ? function (e) {
                                                  return N[e >> 1];
                                              }
                                            : function (e) {
                                                  return A[e >> 1];
                                              };
                                    case 2:
                                        return n
                                            ? function (e) {
                                                  return C[e >> 2];
                                              }
                                            : function (e) {
                                                  return R[e >> 2];
                                              };
                                    default:
                                        throw TypeError('Unknown integer type: ' + e);
                                }
                            }
                            var t4 = 'undefined' != typeof TextDecoder ? new TextDecoder('utf-16le') : void 0,
                                t5 = (e, t) => {
                                    for (var n = e >> 1, r = n + t / 2; !(n >= r) && A[n]; ) ++n;
                                    if (32 < (n <<= 1) - e && t4) return t4.decode(T.subarray(e, n));
                                    for (r = 0, n = ''; !(r >= t / 2); ++r) {
                                        var i = N[(e + 2 * r) >> 1];
                                        if (0 == i) break;
                                        n += String.fromCharCode(i);
                                    }
                                    return n;
                                },
                                t6 = (e, t, n) => {
                                    if ((void 0 === n && (n = 2147483647), 2 > n)) return 0;
                                    n -= 2;
                                    var r = t;
                                    n = n < 2 * e.length ? n / 2 : e.length;
                                    for (var i = 0; i < n; ++i) (N[t >> 1] = e.charCodeAt(i)), (t += 2);
                                    return (N[t >> 1] = 0), t - r;
                                },
                                t8 = (e) => 2 * e.length,
                                t7 = (e, t) => {
                                    for (var n = 0, r = ''; !(n >= t / 4); ) {
                                        var i = C[(e + 4 * n) >> 2];
                                        if (0 == i) break;
                                        ++n, 65536 <= i ? ((i -= 65536), (r += String.fromCharCode(55296 | (i >> 10), 56320 | (1023 & i)))) : (r += String.fromCharCode(i));
                                    }
                                    return r;
                                },
                                t9 = (e, t, n) => {
                                    if ((void 0 === n && (n = 2147483647), 4 > n)) return 0;
                                    var r = t;
                                    n = r + n - 4;
                                    for (var i = 0; i < e.length; ++i) {
                                        var o = e.charCodeAt(i);
                                        if ((55296 <= o && 57343 >= o && (o = (65536 + ((1023 & o) << 10)) | (1023 & e.charCodeAt(++i))), (C[t >> 2] = o), (t += 4) + 4 > n)) break;
                                    }
                                    return (C[t >> 2] = 0), t - r;
                                },
                                ne = (e) => {
                                    for (var t = 0, n = 0; n < e.length; ++n) {
                                        var r = e.charCodeAt(n);
                                        55296 <= r && 57343 >= r && ++n, (t += 4);
                                    }
                                    return t;
                                },
                                nt = {};
                            function nn(e) {
                                var t = nt[e];
                                return void 0 === t ? to(e) : t;
                            }
                            var nr = [];
                            function ni(e) {
                                var t = nr.length;
                                return nr.push(e), t;
                            }
                            function no(e, t) {
                                for (var n = Array(e), r = 0; r < e; ++r) n[r] = t_(R[(t + 4 * r) >> 2], 'parameter ' + r);
                                return n;
                            }
                            var na,
                                ns = [],
                                nl = [],
                                nc = {},
                                nu = () => {
                                    if (!na) {
                                        var e,
                                            t = {
                                                USER: 'web_user',
                                                LOGNAME: 'web_user',
                                                PATH: '/',
                                                PWD: '/',
                                                HOME: '/home/web_user',
                                                LANG: (('object' == typeof navigator && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8',
                                                _: h || './this.program'
                                            };
                                        for (e in nc) void 0 === nc[e] ? delete t[e] : (t[e] = nc[e]);
                                        var n = [];
                                        for (e in t) n.push(`${e}=${t[e]}`);
                                        na = n;
                                    }
                                    return na;
                                },
                                nd = (e) => 0 == e % 4 && (0 != e % 100 || 0 == e % 400),
                                nf = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                                n_ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                                np = (e, t, n, r) => {
                                    function i(e, t, n) {
                                        for (e = 'number' == typeof e ? e.toString() : e || ''; e.length < t; ) e = n[0] + e;
                                        return e;
                                    }
                                    function o(e, t) {
                                        return i(e, t, '0');
                                    }
                                    function a(e, t) {
                                        var n;
                                        function r(e) {
                                            return 0 > e ? -1 : +(0 < e);
                                        }
                                        return 0 === (n = r(e.getFullYear() - t.getFullYear())) && 0 === (n = r(e.getMonth() - t.getMonth())) && (n = r(e.getDate() - t.getDate())), n;
                                    }
                                    function s(e) {
                                        switch (e.getDay()) {
                                            case 0:
                                                return new Date(e.getFullYear() - 1, 11, 29);
                                            case 1:
                                                return e;
                                            case 2:
                                                return new Date(e.getFullYear(), 0, 3);
                                            case 3:
                                                return new Date(e.getFullYear(), 0, 2);
                                            case 4:
                                                return new Date(e.getFullYear(), 0, 1);
                                            case 5:
                                                return new Date(e.getFullYear() - 1, 11, 31);
                                            case 6:
                                                return new Date(e.getFullYear() - 1, 11, 30);
                                        }
                                    }
                                    function l(e) {
                                        var t = e.ca;
                                        for (e = new Date(new Date(e.da + 1900, 0, 1).getTime()); 0 < t; ) {
                                            var n = e.getMonth(),
                                                r = (nd(e.getFullYear()) ? nf : n_)[n];
                                            if (t > r - e.getDate()) (t -= r - e.getDate() + 1), e.setDate(1), 11 > n ? e.setMonth(n + 1) : (e.setMonth(0), e.setFullYear(e.getFullYear() + 1));
                                            else {
                                                e.setDate(e.getDate() + t);
                                                break;
                                            }
                                        }
                                        return (n = new Date(e.getFullYear() + 1, 0, 4)), (t = s(new Date(e.getFullYear(), 0, 4))), (n = s(n)), 0 >= a(t, e) ? (0 >= a(n, e) ? e.getFullYear() + 1 : e.getFullYear()) : e.getFullYear() - 1;
                                    }
                                    var c = C[(r + 40) >> 2];
                                    for (var u in ((r = {
                                        wc: C[r >> 2],
                                        vc: C[(r + 4) >> 2],
                                        Fa: C[(r + 8) >> 2],
                                        Sa: C[(r + 12) >> 2],
                                        Ga: C[(r + 16) >> 2],
                                        da: C[(r + 20) >> 2],
                                        R: C[(r + 24) >> 2],
                                        ca: C[(r + 28) >> 2],
                                        Rc: C[(r + 32) >> 2],
                                        uc: C[(r + 36) >> 2],
                                        xc: c && c ? el(T, c) : ''
                                    }),
                                    (n = n ? el(T, n) : ''),
                                    (c = {
                                        '%c': '%a %b %d %H:%M:%S %Y',
                                        '%D': '%m/%d/%y',
                                        '%F': '%Y-%m-%d',
                                        '%h': '%b',
                                        '%r': '%I:%M:%S %p',
                                        '%R': '%H:%M',
                                        '%T': '%H:%M:%S',
                                        '%x': '%m/%d/%y',
                                        '%X': '%H:%M:%S',
                                        '%Ec': '%c',
                                        '%EC': '%C',
                                        '%Ex': '%m/%d/%y',
                                        '%EX': '%H:%M:%S',
                                        '%Ey': '%y',
                                        '%EY': '%Y',
                                        '%Od': '%d',
                                        '%Oe': '%e',
                                        '%OH': '%H',
                                        '%OI': '%I',
                                        '%Om': '%m',
                                        '%OM': '%M',
                                        '%OS': '%S',
                                        '%Ou': '%u',
                                        '%OU': '%U',
                                        '%OV': '%V',
                                        '%Ow': '%w',
                                        '%OW': '%W',
                                        '%Oy': '%y'
                                    })))
                                        n = n.replace(RegExp(u, 'g'), c[u]);
                                    var d = 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
                                        f = 'January February March April May June July August September October November December'.split(' ');
                                    for (u in ((c = {
                                        '%a': (e) => d[e.R].substring(0, 3),
                                        '%A': (e) => d[e.R],
                                        '%b': (e) => f[e.Ga].substring(0, 3),
                                        '%B': (e) => f[e.Ga],
                                        '%C': (e) => o(((e.da + 1900) / 100) | 0, 2),
                                        '%d': (e) => o(e.Sa, 2),
                                        '%e': (e) => i(e.Sa, 2, ' '),
                                        '%g': (e) => l(e).toString().substring(2),
                                        '%G': (e) => l(e),
                                        '%H': (e) => o(e.Fa, 2),
                                        '%I': (e) => (0 == (e = e.Fa) ? (e = 12) : 12 < e && (e -= 12), o(e, 2)),
                                        '%j': (e) => {
                                            for (var t = 0, n = 0; n <= e.Ga - 1; t += (nd(e.da + 1900) ? nf : n_)[n++]);
                                            return o(e.Sa + t, 3);
                                        },
                                        '%m': (e) => o(e.Ga + 1, 2),
                                        '%M': (e) => o(e.vc, 2),
                                        '%n': () => '\n',
                                        '%p': (e) => (0 <= e.Fa && 12 > e.Fa ? 'AM' : 'PM'),
                                        '%S': (e) => o(e.wc, 2),
                                        '%t': () => '\t',
                                        '%u': (e) => e.R || 7,
                                        '%U': (e) => o(Math.floor((e.ca + 7 - e.R) / 7), 2),
                                        '%V': (e) => {
                                            var t = Math.floor((e.ca + 7 - ((e.R + 6) % 7)) / 7);
                                            if ((2 >= (e.R + 371 - e.ca - 2) % 7 && t++, t)) 53 == t && (4 == (n = (e.R + 371 - e.ca) % 7) || (3 == n && nd(e.da)) || (t = 1));
                                            else {
                                                t = 52;
                                                var n = (e.R + 7 - e.ca - 1) % 7;
                                                (4 == n || (5 == n && nd((e.da % 400) - 1))) && t++;
                                            }
                                            return o(t, 2);
                                        },
                                        '%w': (e) => e.R,
                                        '%W': (e) => o(Math.floor((e.ca + 7 - ((e.R + 6) % 7)) / 7), 2),
                                        '%y': (e) => (e.da + 1900).toString().substring(2),
                                        '%Y': (e) => e.da + 1900,
                                        '%z': (e) => {
                                            var t = 0 <= (e = e.uc);
                                            return (t ? '+' : '-') + String('0000' + (((e = Math.abs(e) / 60) / 60) * 100 + (e % 60))).slice(-4);
                                        },
                                        '%Z': (e) => e.xc,
                                        '%%': () => '%'
                                    }),
                                    (n = n.replace(/%%/g, '\0\0')),
                                    c))
                                        n.includes(u) && (n = n.replace(RegExp(u, 'g'), c[u](r)));
                                    return (u = ef((n = n.replace(/\0\0/g, '%')), !1)).length > t ? 0 : (S.set(u, e), u.length - 1);
                                };
                            function nh(e, t, n, r) {
                                e || (e = this), (this.parent = e), (this.U = e.U), (this.wa = null), (this.id = eC++), (this.name = t), (this.mode = n), (this.l = {}), (this.m = {}), (this.za = r);
                            }
                            Object.defineProperties(nh.prototype, {
                                read: {
                                    get: function () {
                                        return 365 == (365 & this.mode);
                                    },
                                    set: function (e) {
                                        e ? (this.mode |= 365) : (this.mode &= -366);
                                    }
                                },
                                write: {
                                    get: function () {
                                        return 146 == (146 & this.mode);
                                    },
                                    set: function (e) {
                                        e ? (this.mode |= 146) : (this.mode &= -147);
                                    }
                                }
                            }),
                                e$(),
                                (eR = Array(4096)),
                                eY(eb, '/'),
                                eK('/tmp', 16895, 0),
                                eK('/home', 16895, 0),
                                eK('/home/web_user', 16895, 0),
                                (() => {
                                    eK('/dev', 16895, 0),
                                        eW(259, {
                                            read: () => 0,
                                            write: (e, t, n, r) => r
                                        }),
                                        ez('/dev/null', 259),
                                        ep(1280, em),
                                        ep(1536, eg),
                                        ez('/dev/tty', 1280),
                                        ez('/dev/tty1', 1536);
                                    var e = new Uint8Array(1024),
                                        t = 0,
                                        n = () => (0 === t && (t = eo(e).byteLength), e[--t]);
                                    e0('random', n), e0('urandom', n), eK('/dev/shm', 16895, 0), eK('/dev/shm/tmp', 16895, 0);
                                })(),
                                (() => {
                                    eK('/proc', 16895, 0);
                                    var e = eK('/proc/self', 16895, 0);
                                    eK('/proc/self/fd', 16895, 0),
                                        eY(
                                            {
                                                U: () => {
                                                    var t = ej(e, 'fd', 16895, 73);
                                                    return (
                                                        (t.l = {
                                                            ka: (e, t) => {
                                                                var n = eF(+t);
                                                                return ((e = {
                                                                    parent: null,
                                                                    U: { mb: 'fake' },
                                                                    l: { ma: () => n.path }
                                                                }).parent = e);
                                                            }
                                                        }),
                                                        t
                                                    );
                                                }
                                            },
                                            '/proc/self/fd'
                                        );
                                })(),
                                Object.assign(e6.prototype, {
                                    get(e) {
                                        return this.M[e];
                                    },
                                    has(e) {
                                        return void 0 !== this.M[e];
                                    },
                                    pa(e) {
                                        var t = this.hb.pop() || this.M.length;
                                        return (this.M[t] = e), t;
                                    },
                                    Zb(e) {
                                        (this.M[e] = void 0), this.hb.push(e);
                                    }
                                }),
                                (e7 = o.BindingError =
                                    class extends Error {
                                        constructor(e) {
                                            super(e), (this.name = 'BindingError');
                                        }
                                    }),
                                e8.M.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }),
                                (e8.h = e8.M.length),
                                (o.count_emval_handles = function () {
                                    for (var e = 0, t = e8.h; t < e8.M.length; ++t) void 0 !== e8.M[t] && ++e;
                                    return e;
                                }),
                                (tr = o.PureVirtualError = tn('PureVirtualError'));
                            for (var nm = Array(256), ng = 0; 256 > ng; ++ng) nm[ng] = String.fromCharCode(ng);
                            (ti = nm),
                                (o.getInheritedInstanceCount = function () {
                                    return Object.keys(tc).length;
                                }),
                                (o.getLiveInheritedInstances = function () {
                                    var e,
                                        t = [];
                                    for (e in tc) tc.hasOwnProperty(e) && t.push(tc[e]);
                                    return t;
                                }),
                                (o.flushPendingDeletes = ts),
                                (o.setDelayFunction = function (e) {
                                    (tl = e), ta.length && tl && tl(ts);
                                }),
                                (ty = o.InternalError =
                                    class extends Error {
                                        constructor(e) {
                                            super(e), (this.name = 'InternalError');
                                        }
                                    }),
                                (tx.prototype.isAliasOf = function (e) {
                                    if (!(this instanceof tx && e instanceof tx)) return !1;
                                    var t = this.g.u.i,
                                        n = this.g.o,
                                        r = e.g.u.i;
                                    for (e = e.g.o; t.A; ) (n = t.na(n)), (t = t.A);
                                    for (; r.A; ) (e = r.na(e)), (r = r.A);
                                    return t === r && n === e;
                                }),
                                (tx.prototype.clone = function () {
                                    if ((this.g.o || tL(this), this.g.ia)) return (this.g.count.value += 1), this;
                                    var e = tI,
                                        t = Object,
                                        n = t.create,
                                        r = Object.getPrototypeOf(this),
                                        i = this.g;
                                    return (
                                        (e = e(
                                            n.call(t, r, {
                                                g: {
                                                    value: {
                                                        count: i.count,
                                                        fa: i.fa,
                                                        ia: i.ia,
                                                        o: i.o,
                                                        u: i.u,
                                                        G: i.G,
                                                        L: i.L
                                                    }
                                                }
                                            })
                                        )),
                                        (e.g.count.value += 1),
                                        (e.g.fa = !1),
                                        e
                                    );
                                }),
                                (tx.prototype.delete = function () {
                                    this.g.o || tL(this), this.g.fa && !this.g.ia && e9('Object already scheduled for deletion'), tp(this), tm(this.g), this.g.ia || ((this.g.G = void 0), (this.g.o = void 0));
                                }),
                                (tx.prototype.isDeleted = function () {
                                    return !this.g.o;
                                }),
                                (tx.prototype.deleteLater = function () {
                                    return this.g.o || tL(this), this.g.fa && !this.g.ia && e9('Object already scheduled for deletion'), ta.push(this), 1 === ta.length && tl && tl(ts), (this.g.fa = !0), this;
                                }),
                                (tF.prototype.Vb = function (e) {
                                    return this.rb && (e = this.rb(e)), e;
                                }),
                                (tF.prototype.ab = function (e) {
                                    this.W && this.W(e);
                                }),
                                (tF.prototype.argPackAdvance = 8),
                                (tF.prototype.readValueFromPointer = tN),
                                (tF.prototype.deleteObject = function (e) {
                                    null !== e && e.delete();
                                }),
                                (tF.prototype.fromWireType = function (e) {
                                    function t() {
                                        return this.ua
                                            ? tO(this.i.N, {
                                                  u: this.nc,
                                                  o: n,
                                                  L: this,
                                                  G: e
                                              })
                                            : tO(this.i.N, {
                                                  u: this,
                                                  o: e
                                              });
                                    }
                                    var n = this.Vb(e);
                                    if (!n) return this.ab(e), null;
                                    var r = tb(this.i, n);
                                    if (void 0 !== r) return 0 === r.g.count.value ? ((r.g.o = n), (r.g.G = e), r.clone()) : ((r = r.clone()), this.ab(e), r);
                                    if (!(r = tE[(r = this.i.Ub(n))])) return t.call(this);
                                    r = this.ta ? r.Kb : r.pointerType;
                                    var i = tg(n, this.i, r.i);
                                    return null === i
                                        ? t.call(this)
                                        : this.ua
                                          ? tO(r.i.N, {
                                                u: r,
                                                o: i,
                                                L: this,
                                                G: e
                                            })
                                          : tO(r.i.N, {
                                                u: r,
                                                o: i
                                            });
                                }),
                                (tz = o.UnboundTypeError = tn('UnboundTypeError'));
                            var nE = {
                                __syscall_fcntl64: function (e, t, n) {
                                    e2 = n;
                                    try {
                                        var r = eF(e);
                                        switch (t) {
                                            case 0:
                                                var i = e3();
                                                return 0 > i ? -28 : eZ(r, i).X;
                                            case 1:
                                            case 2:
                                            case 6:
                                            case 7:
                                                return 0;
                                            case 3:
                                                return r.flags;
                                            case 4:
                                                return (i = e3()), (r.flags |= i), 0;
                                            case 5:
                                                return (N[((i = e3()) + 0) >> 1] = 2), 0;
                                            case 16:
                                            case 8:
                                            default:
                                                return -28;
                                            case 9:
                                                return (C[nS() >> 2] = 28), -1;
                                        }
                                    } catch (e) {
                                        if (void 0 === e1 || 'ErrnoError' !== e.name) throw e;
                                        return -e.aa;
                                    }
                                },
                                __syscall_ioctl: function (e, t, n) {
                                    e2 = n;
                                    try {
                                        var r = eF(e);
                                        switch (t) {
                                            case 21509:
                                            case 21510:
                                            case 21511:
                                            case 21512:
                                            case 21524:
                                            case 21515:
                                                return r.s ? 0 : -59;
                                            case 21505:
                                                if (!r.s) return -59;
                                                if (r.s.V.bc) {
                                                    t = [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                                    var i = e3();
                                                    (C[i >> 2] = 25856), (C[(i + 4) >> 2] = 5), (C[(i + 8) >> 2] = 191), (C[(i + 12) >> 2] = 35387);
                                                    for (var o = 0; 32 > o; o++) S[(i + o + 17) >> 0] = t[o] || 0;
                                                }
                                                return 0;
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                if (!r.s) return -59;
                                                if (r.s.V.cc) for (i = e3(), t = [], o = 0; 32 > o; o++) t.push(S[(i + o + 17) >> 0]);
                                                return 0;
                                            case 21519:
                                                if (!r.s) return -59;
                                                return (C[(i = e3()) >> 2] = 0);
                                            case 21520:
                                                return r.s ? -28 : -59;
                                            case 21531:
                                                if (((i = e3()), !r.m.ac)) throw new ew(59);
                                                return r.m.ac(r, t, i);
                                            case 21523:
                                                if (!r.s) return -59;
                                                return r.s.V.dc && ((o = [24, 80]), (N[(i = e3()) >> 1] = o[0]), (N[(i + 2) >> 1] = o[1])), 0;
                                            default:
                                                return -28;
                                        }
                                    } catch (e) {
                                        if (void 0 === e1 || 'ErrnoError' !== e.name) throw e;
                                        return -e.aa;
                                    }
                                },
                                __syscall_openat: function (e, t, n, r) {
                                    e2 = r;
                                    try {
                                        var i = (t = t ? el(T, t) : '');
                                        if ('/' === i.charAt(0)) t = i;
                                        else {
                                            var o = -100 === e ? '/' : eF(e).path;
                                            if (0 == i.length) throw new ew(44);
                                            t = et(o + '/' + i);
                                        }
                                        var a = r ? e3() : 0;
                                        return eX(t, n, a).X;
                                    } catch (e) {
                                        if (void 0 === e1 || 'ErrnoError' !== e.name) throw e;
                                        return -e.aa;
                                    }
                                },
                                _embind_create_inheriting_constructor: function (e, t, n) {
                                    (e = to(e)), (t = t_(t, 'wrapper')), (n = te(n));
                                    var r = [].slice,
                                        i = t.i,
                                        o = i.N,
                                        a = i.A.N,
                                        s = i.A.constructor;
                                    for (var l in ((e = e5(e, function () {
                                        i.A.qb.forEach(
                                            function (e) {
                                                if (this[e] === a[e]) throw new tr(`Pure virtual function ${e} must be implemented in JavaScript`);
                                            }.bind(this)
                                        ),
                                            Object.defineProperty(this, '__parent', { value: o }),
                                            this.__construct.apply(this, r.call(arguments));
                                    })),
                                    (o.__construct = function () {
                                        this === o && e9("Pass correct 'this' to __construct");
                                        var e = s.implement.apply(void 0, [this].concat(r.call(arguments)));
                                        tp(e);
                                        var t = e.g;
                                        e.notifyOnDestruction(), (t.ia = !0), Object.defineProperties(this, { g: { value: t } }), tI(this), (e = tu(i, (e = t.o))), tc.hasOwnProperty(e) ? e9(`Tried to register registered instance: ${e}`) : (tc[e] = this);
                                    }),
                                    (o.__destruct = function () {
                                        this === o && e9("Pass correct 'this' to __destruct"), tp(this);
                                        var e = this.g.o;
                                        (e = tu(i, e)), tc.hasOwnProperty(e) ? delete tc[e] : e9(`Tried to unregister unregistered instance: ${e}`);
                                    }),
                                    (e.prototype = Object.create(o)),
                                    n))
                                        e.prototype[l] = n[l];
                                    return tt(e);
                                },
                                _embind_finalize_value_object: function (e) {
                                    var t = tS[e];
                                    delete tS[e];
                                    var n = t.Pa,
                                        r = t.W,
                                        i = t.eb;
                                    tR([e], i.map((e) => e.Yb).concat(i.map((e) => e.rc)), (e) => {
                                        var o = {};
                                        return (
                                            i.forEach((t, n) => {
                                                var r = e[n],
                                                    a = t.Wb,
                                                    s = t.Xb,
                                                    l = e[n + i.length],
                                                    c = t.qc,
                                                    u = t.sc;
                                                o[t.Sb] = {
                                                    read: (e) => r.fromWireType(a(s, e)),
                                                    write: (e, t) => {
                                                        var n = [];
                                                        c(u, e, l.toWireType(n, t)), tT(n);
                                                    }
                                                };
                                            }),
                                            [
                                                {
                                                    name: t.name,
                                                    fromWireType: function (e) {
                                                        var t,
                                                            n = {};
                                                        for (t in o) n[t] = o[t].read(e);
                                                        return r(e), n;
                                                    },
                                                    toWireType: function (e, t) {
                                                        for (var i in o) if (!(i in t)) throw TypeError(`Missing field: "${i}"`);
                                                        var a = n();
                                                        for (i in o) o[i].write(a, t[i]);
                                                        return null !== e && e.push(r, a), a;
                                                    },
                                                    argPackAdvance: 8,
                                                    readValueFromPointer: tN,
                                                    K: r
                                                }
                                            ]
                                        );
                                    });
                                },
                                _embind_register_bigint: function () {},
                                _embind_register_bool: function (e, t, n, r, i) {
                                    var o = tP(n);
                                    tD(e, {
                                        name: (t = to(t)),
                                        fromWireType: function (e) {
                                            return !!e;
                                        },
                                        toWireType: function (e, t) {
                                            return t ? r : i;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function (e) {
                                            if (1 === n) var r = S;
                                            else if (2 === n) r = N;
                                            else if (4 === n) r = C;
                                            else throw TypeError('Unknown boolean type size: ' + t);
                                            return this.fromWireType(r[e >> o]);
                                        },
                                        K: null
                                    });
                                },
                                _embind_register_class: function (e, t, n, r, i, o, a, s, l, c, u, d, f) {
                                    (u = to(u)), (o = tK(i, o)), s && (s = tK(a, s)), c && (c = tK(l, c)), (f = tK(d, f));
                                    var _ = e4(u);
                                    tk(_, function () {
                                        tq(`Cannot construct ${u} due to unbound types`, [r]);
                                    }),
                                        tR([e, t, n], r ? [r] : [], function (t) {
                                            if (((t = t[0]), r))
                                                var n = t.i,
                                                    i = n.N;
                                            else i = tx.prototype;
                                            var a = Object.create(i, {
                                                constructor: {
                                                    value: (t = e5(_, function () {
                                                        if (Object.getPrototypeOf(this) !== a) throw new e7("Use 'new' to construct " + u);
                                                        if (void 0 === l.$) throw new e7(u + ' has no accessible constructor');
                                                        var e = l.$[arguments.length];
                                                        if (void 0 === e) throw new e7(`Tried to invoke ctor of ${u} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(l.$).toString()}) parameters instead!`);
                                                        return e.apply(this, arguments);
                                                    }))
                                                }
                                            });
                                            t.prototype = a;
                                            var l = new tj(u, t, a, f, n, o, s, c);
                                            l.A && (void 0 === l.A.oa && (l.A.oa = []), l.A.oa.push(l)), (n = new tF(u, l, !0, !1)), (i = new tF(u + '*', l, !1, !1));
                                            var d = new tF(u + ' const*', l, !1, !0);
                                            return (
                                                (tE[e] = {
                                                    pointerType: i,
                                                    Kb: d
                                                }),
                                                tZ(_, t),
                                                [n, i, d]
                                            );
                                        });
                                },
                                _embind_register_class_class_function: function (e, t, n, r, i, o, a) {
                                    var s = tX(n, r);
                                    (t = to(t)),
                                        (o = tK(i, o)),
                                        tR([], [e], function (e) {
                                            function r() {
                                                tq(`Cannot call ${i} due to unbound types`, s);
                                            }
                                            e = e[0];
                                            var i = `${e.name}.${t}`;
                                            t.startsWith('@@') && (t = Symbol[t.substring(2)]);
                                            var l = e.i.constructor;
                                            return (
                                                void 0 === l[t] ? ((r.ea = n - 1), (l[t] = r)) : (tM(l, t, i), (l[t].B[n - 1] = r)),
                                                tR([], s, function (r) {
                                                    if (((r = tQ(i, [r[0], null].concat(r.slice(1)), null, o, a)), void 0 === l[t].B ? ((r.ea = n - 1), (l[t] = r)) : (l[t].B[n - 1] = r), e.i.oa)) for (let n of e.i.oa) n.constructor.hasOwnProperty(t) || (n.constructor[t] = r);
                                                    return [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_class_property: function (e, t, n, r, i, o, a, s) {
                                    (t = to(t)),
                                        (o = tK(i, o)),
                                        tR([], [e], function (e) {
                                            e = e[0];
                                            var i = `${e.name}.${t}`,
                                                l = {
                                                    get() {
                                                        tq(`Cannot access ${i} due to unbound types`, [n]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0
                                                };
                                            return (
                                                (l.set = s
                                                    ? () => {
                                                          tq(`Cannot access ${i} due to unbound types`, [n]);
                                                      }
                                                    : () => {
                                                          e9(`${i} is a read-only property`);
                                                      }),
                                                Object.defineProperty(e.i.constructor, t, l),
                                                tR([], [n], function (n) {
                                                    n = n[0];
                                                    var i = {
                                                        get: () => n.fromWireType(o(r)),
                                                        enumerable: !0
                                                    };
                                                    return (
                                                        s &&
                                                            ((s = tK(a, s)),
                                                            (i.set = (e) => {
                                                                var t = [];
                                                                s(r, n.toWireType(t, e)), tT(t);
                                                            })),
                                                        Object.defineProperty(e.i.constructor, t, i),
                                                        []
                                                    );
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_constructor: function (e, t, n, r, i, o) {
                                    var a = tX(t, n);
                                    (i = tK(r, i)),
                                        tR([], [e], function (e) {
                                            e = e[0];
                                            var n = `constructor ${e.name}`;
                                            if ((void 0 === e.i.$ && (e.i.$ = []), void 0 !== e.i.$[t - 1])) throw new e7(`Cannot register multiple constructors with identical number of parameters (${t - 1}) for class '${e.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
                                            return (
                                                (e.i.$[t - 1] = () => {
                                                    tq(`Cannot construct ${e.name} due to unbound types`, a);
                                                }),
                                                tR([], a, function (r) {
                                                    return r.splice(1, 0, null), (e.i.$[t - 1] = tQ(n, r, null, i, o)), [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_function: function (e, t, n, r, i, o, a, s) {
                                    var l = tX(n, r);
                                    (t = to(t)),
                                        (o = tK(i, o)),
                                        tR([], [e], function (e) {
                                            function r() {
                                                tq(`Cannot call ${i} due to unbound types`, l);
                                            }
                                            e = e[0];
                                            var i = `${e.name}.${t}`;
                                            t.startsWith('@@') && (t = Symbol[t.substring(2)]), s && e.i.qb.push(t);
                                            var c = e.i.N,
                                                u = c[t];
                                            return (
                                                void 0 === u || (void 0 === u.B && u.className !== e.name && u.ea === n - 2) ? ((r.ea = n - 2), (r.className = e.name), (c[t] = r)) : (tM(c, t, i), (c[t].B[n - 2] = r)),
                                                tR([], l, function (r) {
                                                    return (r = tQ(i, r, e, o, a)), void 0 === c[t].B ? ((r.ea = n - 2), (c[t] = r)) : (c[t].B[n - 2] = r), [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_class_property: function (e, t, n, r, i, o, a, s, l, c) {
                                    (t = to(t)),
                                        (i = tK(r, i)),
                                        tR([], [e], function (e) {
                                            e = e[0];
                                            var r = `${e.name}.${t}`,
                                                u = {
                                                    get() {
                                                        tq(`Cannot access ${r} due to unbound types`, [n, a]);
                                                    },
                                                    enumerable: !0,
                                                    configurable: !0
                                                };
                                            return (
                                                (u.set = l
                                                    ? () => {
                                                          tq(`Cannot access ${r} due to unbound types`, [n, a]);
                                                      }
                                                    : () => {
                                                          e9(r + ' is a read-only property');
                                                      }),
                                                Object.defineProperty(e.i.N, t, u),
                                                tR([], l ? [n, a] : [n], function (n) {
                                                    var a = n[0],
                                                        u = {
                                                            get() {
                                                                var t = tJ(this, e, r + ' getter');
                                                                return a.fromWireType(i(o, t));
                                                            },
                                                            enumerable: !0
                                                        };
                                                    if (l) {
                                                        l = tK(s, l);
                                                        var d = n[1];
                                                        u.set = function (t) {
                                                            var n = tJ(this, e, r + ' setter'),
                                                                i = [];
                                                            l(c, n, d.toWireType(i, t)), tT(i);
                                                        };
                                                    }
                                                    return Object.defineProperty(e.i.N, t, u), [];
                                                }),
                                                []
                                            );
                                        });
                                },
                                _embind_register_emval: function (e, t) {
                                    tD(e, {
                                        name: (t = to(t)),
                                        fromWireType: function (e) {
                                            var t = te(e);
                                            return t$(e), t;
                                        },
                                        toWireType: function (e, t) {
                                            return tt(t);
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tN,
                                        K: null
                                    });
                                },
                                _embind_register_enum: function (e, t, n, r) {
                                    function i() {}
                                    (n = tP(n)),
                                        (t = to(t)),
                                        (i.values = {}),
                                        tD(e, {
                                            name: t,
                                            constructor: i,
                                            fromWireType: function (e) {
                                                return this.constructor.values[e];
                                            },
                                            toWireType: function (e, t) {
                                                return t.value;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: t0(t, n, r),
                                            K: null
                                        }),
                                        tk(t, i);
                                },
                                _embind_register_enum_value: function (e, t, n) {
                                    var r = t_(e, 'enum');
                                    (t = to(t)),
                                        (e = r.constructor),
                                        (r = Object.create(r.constructor.prototype, {
                                            value: { value: n },
                                            constructor: {
                                                value: e5(`${r.name}_${t}`, function () {})
                                            }
                                        })),
                                        (e.values[n] = r),
                                        (e[t] = r);
                                },
                                _embind_register_float: function (e, t, n) {
                                    (n = tP(n)),
                                        tD(e, {
                                            name: (t = to(t)),
                                            fromWireType: function (e) {
                                                return e;
                                            },
                                            toWireType: function (e, t) {
                                                return t;
                                            },
                                            argPackAdvance: 8,
                                            readValueFromPointer: t2(t, n),
                                            K: null
                                        });
                                },
                                _embind_register_function: function (e, t, n, r, i, o) {
                                    var a = tX(t, n);
                                    (e = to(e)),
                                        (i = tK(r, i)),
                                        tk(
                                            e,
                                            function () {
                                                tq(`Cannot call ${e} due to unbound types`, a);
                                            },
                                            t - 1
                                        ),
                                        tR([], a, function (n) {
                                            return tZ(e, tQ(e, [n[0], null].concat(n.slice(1)), null, i, o), t - 1), [];
                                        });
                                },
                                _embind_register_integer: function (e, t, n, r, i) {
                                    (t = to(t)), -1 === i && (i = 4294967295), (i = tP(n));
                                    var o = (e) => e;
                                    if (0 === r) {
                                        var a = 32 - 8 * n;
                                        o = (e) => (e << a) >>> a;
                                    }
                                    (n = t.includes('unsigned')
                                        ? function (e, t) {
                                              return t >>> 0;
                                          }
                                        : function (e, t) {
                                              return t;
                                          }),
                                        tD(e, {
                                            name: t,
                                            fromWireType: o,
                                            toWireType: n,
                                            argPackAdvance: 8,
                                            readValueFromPointer: t3(t, i, 0 !== r),
                                            K: null
                                        });
                                },
                                _embind_register_memory_view: function (e, t, n) {
                                    function r(e) {
                                        e >>= 2;
                                        var t = R;
                                        return new i(t.buffer, t[e + 1], t[e]);
                                    }
                                    var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][t];
                                    tD(
                                        e,
                                        {
                                            name: (n = to(n)),
                                            fromWireType: r,
                                            argPackAdvance: 8,
                                            readValueFromPointer: r
                                        },
                                        { $b: !0 }
                                    );
                                },
                                _embind_register_std_string: function (e, t) {
                                    var n = 'std::string' === (t = to(t));
                                    tD(e, {
                                        name: t,
                                        fromWireType: function (e) {
                                            var t = R[e >> 2],
                                                r = e + 4;
                                            if (n)
                                                for (var i = r, o = 0; o <= t; ++o) {
                                                    var a = r + o;
                                                    if (o == t || 0 == T[a]) {
                                                        if (((i = i ? el(T, i, a - i) : ''), void 0 === s)) var s = i;
                                                        else (s += '\0'), (s += i);
                                                        i = a + 1;
                                                    }
                                                }
                                            else {
                                                for (o = 0, s = Array(t); o < t; ++o) s[o] = String.fromCharCode(T[r + o]);
                                                s = s.join('');
                                            }
                                            return nb(e), s;
                                        },
                                        toWireType: function (e, t) {
                                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                            var r = 'string' == typeof t;
                                            r || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || e9('Cannot pass non-string to std::string');
                                            var i = n && r ? eu(t) : t.length,
                                                o = ny(4 + i + 1),
                                                a = o + 4;
                                            if (((R[o >> 2] = i), n && r)) ed(t, T, a, i + 1);
                                            else if (r)
                                                for (r = 0; r < i; ++r) {
                                                    var s = t.charCodeAt(r);
                                                    255 < s && (nb(a), e9('String has UTF-16 code units that do not fit in 8 bits')), (T[a + r] = s);
                                                }
                                            else for (r = 0; r < i; ++r) T[a + r] = t[r];
                                            return null !== e && e.push(nb, o), o;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tN,
                                        K: function (e) {
                                            nb(e);
                                        }
                                    });
                                },
                                _embind_register_std_wstring: function (e, t, n) {
                                    if (((n = to(n)), 2 === t))
                                        var r = t5,
                                            i = t6,
                                            o = t8,
                                            a = () => A,
                                            s = 1;
                                    else 4 === t && ((r = t7), (i = t9), (o = ne), (a = () => R), (s = 2));
                                    tD(e, {
                                        name: n,
                                        fromWireType: function (e) {
                                            for (var n, i = R[e >> 2], o = a(), l = e + 4, c = 0; c <= i; ++c) {
                                                var u = e + 4 + c * t;
                                                (c == i || 0 == o[u >> s]) && ((l = r(l, u - l)), void 0 === n ? (n = l) : ((n += '\0'), (n += l)), (l = u + t));
                                            }
                                            return nb(e), n;
                                        },
                                        toWireType: function (e, r) {
                                            'string' != typeof r && e9(`Cannot pass non-string to C++ string type ${n}`);
                                            var a = o(r),
                                                l = ny(4 + a + t);
                                            return (R[l >> 2] = a >> s), i(r, l + 4, a + t), null !== e && e.push(nb, l), l;
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: tN,
                                        K: function (e) {
                                            nb(e);
                                        }
                                    });
                                },
                                _embind_register_value_object: function (e, t, n, r, i, o) {
                                    tS[e] = {
                                        name: to(t),
                                        Pa: tK(n, r),
                                        W: tK(i, o),
                                        eb: []
                                    };
                                },
                                _embind_register_value_object_field: function (e, t, n, r, i, o, a, s, l, c) {
                                    tS[e].eb.push({
                                        Sb: to(t),
                                        Yb: n,
                                        Wb: tK(r, i),
                                        Xb: o,
                                        rc: a,
                                        qc: tK(s, l),
                                        sc: c
                                    });
                                },
                                _embind_register_void: function (e, t) {
                                    tD(e, {
                                        fc: !0,
                                        name: (t = to(t)),
                                        argPackAdvance: 0,
                                        fromWireType: function () {},
                                        toWireType: function () {}
                                    });
                                },
                                _emscripten_get_now_is_monotonic: () => !0,
                                _emval_as: function (e, t, n) {
                                    (e = te(e)), (t = t_(t, 'emval::as'));
                                    var r = [],
                                        i = tt(r);
                                    return (R[n >> 2] = i), t.toWireType(r, e);
                                },
                                _emval_call_method: function (e, t, n, r, i) {
                                    (e = nr[e]), (t = te(t)), (n = nn(n));
                                    var o = [];
                                    return (R[r >> 2] = tt(o)), e(t, n, o, i);
                                },
                                _emval_call_void_method: function (e, t, n, r) {
                                    (e = nr[e]), e((t = te(t)), (n = nn(n)), null, r);
                                },
                                _emval_decref: t$,
                                _emval_get_method_caller: function (e, t) {
                                    var n = no(e, t),
                                        r = n[0],
                                        i =
                                            ns[
                                                (t =
                                                    r.name +
                                                    '_$' +
                                                    n
                                                        .slice(1)
                                                        .map(function (e) {
                                                            return e.name;
                                                        })
                                                        .join('_') +
                                                    '$')
                                            ];
                                    if (void 0 !== i) return i;
                                    var o = Array(e - 1);
                                    return (
                                        (i = ni((t, i, a, s) => {
                                            for (var l = 0, c = 0; c < e - 1; ++c) (o[c] = n[c + 1].readValueFromPointer(s + l)), (l += n[c + 1].argPackAdvance);
                                            for (c = 0, t = t[i].apply(t, o); c < e - 1; ++c) n[c + 1].Nb && n[c + 1].Nb(o[c]);
                                            if (!r.fc) return r.toWireType(a, t);
                                        })),
                                        (ns[t] = i)
                                    );
                                },
                                _emval_get_module_property: function (e) {
                                    return tt(o[(e = nn(e))]);
                                },
                                _emval_get_property: function (e, t) {
                                    return tt((e = te(e))[(t = te(t))]);
                                },
                                _emval_incref: function (e) {
                                    4 < e && (e8.get(e).tb += 1);
                                },
                                _emval_new_array: function () {
                                    return tt([]);
                                },
                                _emval_new_cstring: function (e) {
                                    return tt(nn(e));
                                },
                                _emval_new_object: function () {
                                    return tt({});
                                },
                                _emval_run_destructors: function (e) {
                                    tT(te(e)), t$(e);
                                },
                                _emval_set_property: function (e, t, n) {
                                    (e = te(e)), (t = te(t)), (n = te(n)), (e[t] = n);
                                },
                                _emval_take_value: function (e, t) {
                                    return tt((e = (e = t_(e, '_emval_take_value')).readValueFromPointer(t)));
                                },
                                abort: () => {
                                    F('');
                                },
                                emscripten_asm_const_int: (e, t, n) => {
                                    var r;
                                    for (nl.length = 0, n >>= 2; (r = T[t++]); ) (n += (105 != r) & n), nl.push(105 == r ? C[n] : w[n++ >> 1]), ++n;
                                    return J[e].apply(null, nl);
                                },
                                emscripten_date_now: function () {
                                    return Date.now();
                                },
                                emscripten_get_now: () => performance.now(),
                                emscripten_memcpy_big: (e, t, n) => T.copyWithin(e, t, t + n),
                                emscripten_resize_heap: (e) => {
                                    var t = T.length;
                                    if (2147483648 < (e >>>= 0)) return !1;
                                    for (var n = 1; 4 >= n; n *= 2) {
                                        var r = t * (1 + 0.2 / n);
                                        r = Math.min(r, e + 100663296);
                                        var i = Math;
                                        r = Math.max(e, r);
                                        e: {
                                            i = (i.min.call(i, 2147483648, r + ((65536 - (r % 65536)) % 65536)) - O.buffer.byteLength + 65535) >>> 16;
                                            try {
                                                O.grow(i), L();
                                                var o = 1;
                                                break e;
                                            } catch (e) {}
                                            o = void 0;
                                        }
                                        if (o) return !0;
                                    }
                                    return !1;
                                },
                                environ_get: (e, t) => {
                                    var n = 0;
                                    return (
                                        nu().forEach(function (r, i) {
                                            var o = t + n;
                                            for (i = R[(e + 4 * i) >> 2] = o, o = 0; o < r.length; ++o) S[i++ >> 0] = r.charCodeAt(o);
                                            (S[i >> 0] = 0), (n += r.length + 1);
                                        }),
                                        0
                                    );
                                },
                                environ_sizes_get: (e, t) => {
                                    var n = nu();
                                    R[e >> 2] = n.length;
                                    var r = 0;
                                    return (
                                        n.forEach(function (e) {
                                            r += e.length + 1;
                                        }),
                                        (R[t >> 2] = r),
                                        0
                                    );
                                },
                                fd_close: function (e) {
                                    try {
                                        var t = eF(e);
                                        if (null === t.X) throw new ew(8);
                                        t.Ma && (t.Ma = null);
                                        try {
                                            t.m.close && t.m.close(t);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            eA[t.X] = null;
                                        }
                                        return (t.X = null), 0;
                                    } catch (e) {
                                        if (void 0 === e1 || 'ErrnoError' !== e.name) throw e;
                                        return e.aa;
                                    }
                                },
                                fd_read: function (e, t, n, r) {
                                    try {
                                        e: {
                                            var i = eF(e);
                                            e = t;
                                            for (var o, a = (t = 0); a < n; a++) {
                                                var s = R[e >> 2],
                                                    l = R[(e + 4) >> 2];
                                                e += 8;
                                                var c = i,
                                                    u = s,
                                                    d = l,
                                                    f = o,
                                                    _ = S;
                                                if (0 > d || 0 > f) throw new ew(28);
                                                if (null === c.X || 1 == (2097155 & c.flags)) throw new ew(8);
                                                if (16384 == (61440 & c.node.mode)) throw new ew(31);
                                                if (!c.m.read) throw new ew(28);
                                                var p = void 0 !== f;
                                                if (p) {
                                                    if (!c.seekable) throw new ew(70);
                                                } else f = c.position;
                                                var h = c.m.read(c, _, u, d, f);
                                                p || (c.position += h);
                                                var m = h;
                                                if (0 > m) {
                                                    var g = -1;
                                                    break e;
                                                }
                                                if (((t += m), m < l)) break;
                                                void 0 !== o && (o += m);
                                            }
                                            g = t;
                                        }
                                        return (R[r >> 2] = g), 0;
                                    } catch (e) {
                                        if (void 0 === e1 || 'ErrnoError' !== e.name) throw e;
                                        return e.aa;
                                    }
                                },
                                fd_seek: function (e, t, n, r, i) {
                                    t = (n + 2097152) >>> 0 < 4194305 - !!t ? (t >>> 0) + 4294967296 * n : NaN;
                                    try {
                                        if (isNaN(t)) return 61;
                                        var o = eF(e);
                                        return eJ(o, t, r), (X = [o.position >>> 0, ((Q = o.position), 1 <= +Math.abs(Q) ? (0 < Q ? +Math.floor(Q / 4294967296) >>> 0 : ~~+Math.ceil((Q - +(~~Q >>> 0)) / 4294967296) >>> 0) : 0)]), (C[i >> 2] = X[0]), (C[(i + 4) >> 2] = X[1]), o.Ma && 0 === t && 0 === r && (o.Ma = null), 0;
                                    } catch (e) {
                                        if (void 0 === e1 || 'ErrnoError' !== e.name) throw e;
                                        return e.aa;
                                    }
                                },
                                fd_write: function (e, t, n, r) {
                                    try {
                                        e: {
                                            var i = eF(e);
                                            e = t;
                                            for (var o, a = (t = 0); a < n; a++) {
                                                var s = R[e >> 2],
                                                    l = R[(e + 4) >> 2];
                                                e += 8;
                                                var c = i,
                                                    u = s,
                                                    d = l,
                                                    f = o,
                                                    _ = S;
                                                if (0 > d || 0 > f) throw new ew(28);
                                                if (null === c.X || 0 == (2097155 & c.flags)) throw new ew(8);
                                                if (16384 == (61440 & c.node.mode)) throw new ew(31);
                                                if (!c.m.write) throw new ew(28);
                                                c.seekable && 1024 & c.flags && eJ(c, 0, 2);
                                                var p = void 0 !== f;
                                                if (p) {
                                                    if (!c.seekable) throw new ew(70);
                                                } else f = c.position;
                                                var h = c.m.write(c, _, u, d, f, void 0);
                                                p || (c.position += h);
                                                var m = h;
                                                if (0 > m) {
                                                    var g = -1;
                                                    break e;
                                                }
                                                (t += m), void 0 !== o && (o += m);
                                            }
                                            g = t;
                                        }
                                        return (R[r >> 2] = g), 0;
                                    } catch (e) {
                                        if (void 0 === e1 || 'ErrnoError' !== e.name) throw e;
                                        return e.aa;
                                    }
                                },
                                strftime_l: (e, t, n, r) => np(e, t, n, r)
                            };
                            !(function () {
                                function e(e) {
                                    if (((O = (I = e = e.exports).memory), L(), (x = I.__indirect_function_table), k.unshift(I.__wasm_call_ctors), G--, o.monitorRunDependencies && o.monitorRunDependencies(G), 0 == G && (null !== B && (clearInterval(B), (B = null)), V))) {
                                        var t = V;
                                        (V = null), t();
                                    }
                                    return e;
                                }
                                var t = {
                                    env: nE,
                                    wasi_snapshot_preview1: nE
                                };
                                if ((G++, o.monitorRunDependencies && o.monitorRunDependencies(G), o.instantiateWasm))
                                    try {
                                        return o.instantiateWasm(t, e);
                                    } catch (e) {
                                        y('Module.instantiateWasm callback failed with error: ' + e), i(e);
                                    }
                                z(t, function (t) {
                                    e(t.instance);
                                }).catch(i);
                            })();
                            var nb = (e) => (nb = I.free)(e),
                                ny = (e) => (ny = I.malloc)(e),
                                nv = (o._ma_device__on_notification_unlocked = (e) => (nv = o._ma_device__on_notification_unlocked = I.ma_device__on_notification_unlocked)(e));
                            (o._ma_malloc_emscripten = (e, t) => (o._ma_malloc_emscripten = I.ma_malloc_emscripten)(e, t)), (o._ma_free_emscripten = (e, t) => (o._ma_free_emscripten = I.ma_free_emscripten)(e, t));
                            var nO = (o._ma_device_process_pcm_frames_capture__webaudio = (e, t, n) => (nO = o._ma_device_process_pcm_frames_capture__webaudio = I.ma_device_process_pcm_frames_capture__webaudio)(e, t, n)),
                                nI = (o._ma_device_process_pcm_frames_playback__webaudio = (e, t, n) => (nI = o._ma_device_process_pcm_frames_playback__webaudio = I.ma_device_process_pcm_frames_playback__webaudio)(e, t, n)),
                                nS = () => (nS = I.__errno_location)(),
                                nT = (e) => (nT = I.__getTypeName)(e);
                            function nN() {
                                function e() {
                                    if (!n && ((n = !0), (o.calledRun = !0), !D)) {
                                        if ((o.noFSInit || ev || ((ev = !0), e$(), (o.stdin = o.stdin), (o.stdout = o.stdout), (o.stderr = o.stderr), o.stdin ? e0('stdin', o.stdin) : eq('/dev/tty', '/dev/stdin'), o.stdout ? e0('stdout', null, o.stdout) : eq('/dev/tty', '/dev/stdout'), o.stderr ? e0('stderr', null, o.stderr) : eq('/dev/tty1', '/dev/stderr'), eX('/dev/stdin', 0), eX('/dev/stdout', 1), eX('/dev/stderr', 1)), (eP = !1), $(k), r(o), o.onRuntimeInitialized && o.onRuntimeInitialized(), o.postRun))
                                            for ('function' == typeof o.postRun && (o.postRun = [o.postRun]); o.postRun.length; ) {
                                                var e = o.postRun.shift();
                                                j.unshift(e);
                                            }
                                        $(j);
                                    }
                                }
                                if (!(0 < G)) {
                                    if (o.preRun) for ('function' == typeof o.preRun && (o.preRun = [o.preRun]); o.preRun.length; ) U();
                                    $(M),
                                        0 < G ||
                                            (o.setStatus
                                                ? (o.setStatus('Running...'),
                                                  setTimeout(function () {
                                                      setTimeout(function () {
                                                          o.setStatus('');
                                                      }, 1),
                                                          e();
                                                  }, 1))
                                                : e());
                                }
                            }
                            if (
                                ((o.__embind_initialize_bindings = () => (o.__embind_initialize_bindings = I._embind_initialize_bindings)()),
                                (o.dynCall_iiji = (e, t, n, r, i) => (o.dynCall_iiji = I.dynCall_iiji)(e, t, n, r, i)),
                                (o.dynCall_jiji = (e, t, n, r, i) => (o.dynCall_jiji = I.dynCall_jiji)(e, t, n, r, i)),
                                (o.dynCall_iiiji = (e, t, n, r, i, a) => (o.dynCall_iiiji = I.dynCall_iiiji)(e, t, n, r, i, a)),
                                (o.dynCall_iij = (e, t, n, r) => (o.dynCall_iij = I.dynCall_iij)(e, t, n, r)),
                                (o.dynCall_jii = (e, t, n) => (o.dynCall_jii = I.dynCall_jii)(e, t, n)),
                                (o.dynCall_viijii = (e, t, n, r, i, a, s) => (o.dynCall_viijii = I.dynCall_viijii)(e, t, n, r, i, a, s)),
                                (o.dynCall_iiiiij = (e, t, n, r, i, a, s) => (o.dynCall_iiiiij = I.dynCall_iiiiij)(e, t, n, r, i, a, s)),
                                (o.dynCall_iiiiijj = (e, t, n, r, i, a, s, l, c) => (o.dynCall_iiiiijj = I.dynCall_iiiiijj)(e, t, n, r, i, a, s, l, c)),
                                (o.dynCall_iiiiiijj = (e, t, n, r, i, a, s, l, c, u) => (o.dynCall_iiiiiijj = I.dynCall_iiiiiijj)(e, t, n, r, i, a, s, l, c, u)),
                                (V = function e() {
                                    n || nN(), n || (V = e);
                                }),
                                o.preInit)
                            )
                                for ('function' == typeof o.preInit && (o.preInit = [o.preInit]); 0 < o.preInit.length; ) o.preInit.pop()();
                            return nN(), t.ready;
                        };
                    })();
                },
                (e) => {
                    e.exports = JSON.parse('{"name":"@rive-app/canvas","version":"2.26.7","description":"Rive\'s canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}');
                },
                (e, t, n) => {
                    n.r(t), n.d(t, { Animation: () => r.Animation });
                    var r = n(4);
                },
                (e, t, n) => {
                    n.r(t), n.d(t, { Animation: () => r });
                    var r = (function () {
                        function e(e, t, n, r) {
                            (this.animation = e), (this.artboard = t), (this.playing = r), (this.loopCount = 0), (this.scrubTo = null), (this.instance = new n.LinearAnimationInstance(e, t));
                        }
                        return (
                            Object.defineProperty(e.prototype, 'name', {
                                get: function () {
                                    return this.animation.name;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'time', {
                                get: function () {
                                    return this.instance.time;
                                },
                                set: function (e) {
                                    this.instance.time = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'loopValue', {
                                get: function () {
                                    return this.animation.loopValue;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'needsScrub', {
                                get: function () {
                                    return null !== this.scrubTo;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (e.prototype.advance = function (e) {
                                null === this.scrubTo ? this.instance.advance(e) : ((this.instance.time = 0), this.instance.advance(this.scrubTo), (this.scrubTo = null));
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
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            BLANK_URL: () => i.BLANK_URL,
                            registerTouchInteractions: () => r.registerTouchInteractions,
                            sanitizeUrl: () => i.sanitizeUrl
                        });
                    var r = n(6),
                        i = n(7);
                },
                (e, t, n) => {
                    n.r(t), n.d(t, { registerTouchInteractions: () => o });
                    var r = void 0,
                        i = function (e, t) {
                            var n, r;
                            return ['touchstart', 'touchmove'].indexOf(e.type) > -1 && (null == (n = e.touches) ? void 0 : n.length)
                                ? (t || e.preventDefault(),
                                  {
                                      clientX: e.touches[0].clientX,
                                      clientY: e.touches[0].clientY
                                  })
                                : 'touchend' === e.type && (null == (r = e.changedTouches) ? void 0 : r.length)
                                  ? {
                                        clientX: e.changedTouches[0].clientX,
                                        clientY: e.changedTouches[0].clientY
                                    }
                                  : {
                                        clientX: e.clientX,
                                        clientY: e.clientY
                                    };
                        },
                        o = function (e) {
                            var t = e.canvas,
                                n = e.artboard,
                                o = e.stateMachines,
                                a = void 0 === o ? [] : o,
                                s = e.renderer,
                                l = e.rive,
                                c = e.fit,
                                u = e.alignment,
                                d = e.isTouchScrollEnabled,
                                f = void 0 !== d && d,
                                _ = e.layoutScaleFactor,
                                p = void 0 === _ ? 1 : _;
                            if (!t || !a.length || !s || !l || !n || 'undefined' == typeof window) return null;
                            var h = null,
                                m = !1,
                                g = function (e) {
                                    if (m && e instanceof MouseEvent) {
                                        'mouseup' == e.type && (m = !1);
                                        return;
                                    }
                                    (m = f && 'touchend' === e.type && 'touchstart' === h), (h = e.type);
                                    var t = e.currentTarget.getBoundingClientRect(),
                                        r = i(e, f),
                                        o = r.clientX,
                                        s = r.clientY;
                                    if (o || s) {
                                        var d = o - t.left,
                                            _ = s - t.top,
                                            g = l.computeAlignment(
                                                c,
                                                u,
                                                {
                                                    minX: 0,
                                                    minY: 0,
                                                    maxX: t.width,
                                                    maxY: t.height
                                                },
                                                n.bounds,
                                                p
                                            ),
                                            E = new l.Mat2D();
                                        g.invert(E);
                                        var b = new l.Vec2D(d, _),
                                            y = l.mapXY(E, b),
                                            v = y.x(),
                                            O = y.y();
                                        switch ((y.delete(), E.delete(), b.delete(), g.delete(), e.type)) {
                                            case 'mouseout':
                                                for (var I = 0, S = a; I < S.length; I++) {
                                                    var T = S[I];
                                                    T.pointerMove(v, O);
                                                }
                                                break;
                                            case 'touchmove':
                                            case 'mouseover':
                                            case 'mousemove':
                                                for (var N = 0, A = a; N < A.length; N++) {
                                                    var T = A[N];
                                                    T.pointerMove(v, O);
                                                }
                                                break;
                                            case 'touchstart':
                                            case 'mousedown':
                                                for (var C = 0, R = a; C < R.length; C++) {
                                                    var T = R[C];
                                                    T.pointerDown(v, O);
                                                }
                                                break;
                                            case 'touchend':
                                            case 'mouseup':
                                                for (var P = 0, w = a; P < w.length; P++) {
                                                    var T = w[P];
                                                    T.pointerUp(v, O);
                                                }
                                        }
                                    }
                                }.bind(r);
                            return (
                                t.addEventListener('mouseover', g),
                                t.addEventListener('mouseout', g),
                                t.addEventListener('mousemove', g),
                                t.addEventListener('mousedown', g),
                                t.addEventListener('mouseup', g),
                                t.addEventListener('touchmove', g, { passive: f }),
                                t.addEventListener('touchstart', g, { passive: f }),
                                t.addEventListener('touchend', g),
                                function () {
                                    t.removeEventListener('mouseover', g), t.removeEventListener('mouseout', g), t.removeEventListener('mousemove', g), t.removeEventListener('mousedown', g), t.removeEventListener('mouseup', g), t.removeEventListener('touchmove', g), t.removeEventListener('touchstart', g), t.removeEventListener('touchend', g);
                                }
                            );
                        };
                },
                (e, t, n) => {
                    n.r(t),
                        n.d(t, {
                            BLANK_URL: () => c,
                            sanitizeUrl: () => f
                        });
                    var r = /^([^\w]*)(javascript|data|vbscript)/im,
                        i = /&#(\w+)(^\w|;)?/g,
                        o = /&(newline|tab);/gi,
                        a = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,
                        s = /^.+(:|&colon;)/gim,
                        l = ['.', '/'],
                        c = 'about:blank';
                    function u(e) {
                        return l.indexOf(e[0]) > -1;
                    }
                    function d(e) {
                        return e.replace(a, '').replace(i, function (e, t) {
                            return String.fromCharCode(t);
                        });
                    }
                    function f(e) {
                        if (!e) return c;
                        var t = d(e).replace(o, '').replace(a, '').trim();
                        if (!t) return c;
                        if (u(t)) return t;
                        var n = t.match(s);
                        if (!n) return t;
                        var i = n[0];
                        return r.test(i) ? c : t;
                    }
                }
            ],
            t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var o = (t[r] = { exports: {} });
            return e[r](o, o.exports, n), o.exports;
        }
        (() => {
            n.d = (e, t) => {
                for (var r in t)
                    n.o(t, r) &&
                        !n.o(e, r) &&
                        Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r]
                        });
            };
        })(),
            (() => {
                n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
            })(),
            (() => {
                n.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
                };
            })();
        var r = {};
        return (
            (() => {
                n.r(r),
                    n.d(r, {
                        Alignment: () => t,
                        DataEnum: () => M,
                        EventType: () => a,
                        Fit: () => e,
                        Layout: () => v,
                        LoopType: () => s,
                        Rive: () => L,
                        RiveEventType: () => o,
                        RiveFile: () => D,
                        RuntimeLoader: () => O,
                        StateMachineInput: () => I,
                        StateMachineInputType: () => i,
                        Testing: () => Y,
                        ViewModel: () => x,
                        ViewModelInstance: () => k,
                        ViewModelInstanceBoolean: () => B,
                        ViewModelInstanceColor: () => Z,
                        ViewModelInstanceEnum: () => F,
                        ViewModelInstanceNumber: () => G,
                        ViewModelInstanceString: () => U,
                        ViewModelInstanceTrigger: () => V,
                        ViewModelInstanceValue: () => j,
                        decodeAudio: () => K,
                        decodeFont: () => q,
                        decodeImage: () => z
                    });
                var e,
                    t,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    u = n(1),
                    d = n(2),
                    f = n(3),
                    _ = n(5),
                    p = (function () {
                        var e = function (t, n) {
                            return (e =
                                Object.setPrototypeOf ||
                                ({ __proto__: [] } instanceof Array &&
                                    function (e, t) {
                                        e.__proto__ = t;
                                    }) ||
                                function (e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                                })(t, n);
                        };
                        return function (t, n) {
                            if ('function' != typeof n && null !== n) throw TypeError('Class extends value ' + String(n) + ' is not a constructor or null');
                            function r() {
                                this.constructor = t;
                            }
                            e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                        };
                    })(),
                    h = function () {
                        return (h =
                            Object.assign ||
                            function (e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e;
                            }).apply(this, arguments);
                    },
                    m = function (e, t, n, r) {
                        function i(e) {
                            return e instanceof n
                                ? e
                                : new n(function (t) {
                                      t(e);
                                  });
                        }
                        return new (n || (n = Promise))(function (n, o) {
                            function a(e) {
                                try {
                                    l(r.next(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function s(e) {
                                try {
                                    l(r.throw(e));
                                } catch (e) {
                                    o(e);
                                }
                            }
                            function l(e) {
                                e.done ? n(e.value) : i(e.value).then(a, s);
                            }
                            l((r = r.apply(e, t || [])).next());
                        });
                    },
                    g = function (e, t) {
                        var n,
                            r,
                            i,
                            o = {
                                label: 0,
                                sent: function () {
                                    if (1 & i[0]) throw i[1];
                                    return i[1];
                                },
                                trys: [],
                                ops: []
                            },
                            a = Object.create(('function' == typeof Iterator ? Iterator : Object).prototype);
                        return (
                            (a.next = s(0)),
                            (a.throw = s(1)),
                            (a.return = s(2)),
                            'function' == typeof Symbol &&
                                (a[Symbol.iterator] = function () {
                                    return this;
                                }),
                            a
                        );
                        function s(e) {
                            return function (t) {
                                return l([e, t]);
                            };
                        }
                        function l(s) {
                            if (n) throw TypeError('Generator is already executing.');
                            for (; a && ((a = 0), s[0] && (o = 0)), o; )
                                try {
                                    if (((n = 1), r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done)) return i;
                                    switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                                        case 0:
                                        case 1:
                                            i = s;
                                            break;
                                        case 4:
                                            return (
                                                o.label++,
                                                {
                                                    value: s[1],
                                                    done: !1
                                                }
                                            );
                                        case 5:
                                            o.label++, (r = s[1]), (s = [0]);
                                            continue;
                                        case 7:
                                            (s = o.ops.pop()), o.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                                o = 0;
                                                continue;
                                            }
                                            if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                                                o.label = s[1];
                                                break;
                                            }
                                            if (6 === s[0] && o.label < i[1]) {
                                                (o.label = i[1]), (i = s);
                                                break;
                                            }
                                            if (i && o.label < i[2]) {
                                                (o.label = i[2]), o.ops.push(s);
                                                break;
                                            }
                                            i[2] && o.ops.pop(), o.trys.pop();
                                            continue;
                                    }
                                    s = t.call(e, o);
                                } catch (e) {
                                    (s = [6, e]), (r = 0);
                                } finally {
                                    n = i = 0;
                                }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            };
                        }
                    },
                    E = function (e, t, n) {
                        if (n || 2 == arguments.length) for (var r, i = 0, o = t.length; i < o; i++) (!r && i in t) || (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
                        return e.concat(r || Array.prototype.slice.call(t));
                    },
                    b = (function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this;
                            return (t.isHandledError = !0), t;
                        }
                        return p(t, e), t;
                    })(Error),
                    y = function (e) {
                        return e && e.isHandledError ? e.message : 'Problem loading file; may be corrupt!';
                    };
                !(function (e) {
                    (e.Cover = 'cover'), (e.Contain = 'contain'), (e.Fill = 'fill'), (e.FitWidth = 'fitWidth'), (e.FitHeight = 'fitHeight'), (e.None = 'none'), (e.ScaleDown = 'scaleDown'), (e.Layout = 'layout');
                })(e || (e = {})),
                    (function (e) {
                        (e.Center = 'center'), (e.TopLeft = 'topLeft'), (e.TopCenter = 'topCenter'), (e.TopRight = 'topRight'), (e.CenterLeft = 'centerLeft'), (e.CenterRight = 'centerRight'), (e.BottomLeft = 'bottomLeft'), (e.BottomCenter = 'bottomCenter'), (e.BottomRight = 'bottomRight');
                    })(t || (t = {}));
                var v = (function () {
                        function n(n) {
                            var r, i, o, a, s, l, c;
                            (this.fit = null != (r = null == n ? void 0 : n.fit) ? r : e.Contain), (this.alignment = null != (i = null == n ? void 0 : n.alignment) ? i : t.Center), (this.layoutScaleFactor = null != (o = null == n ? void 0 : n.layoutScaleFactor) ? o : 1), (this.minX = null != (a = null == n ? void 0 : n.minX) ? a : 0), (this.minY = null != (s = null == n ? void 0 : n.minY) ? s : 0), (this.maxX = null != (l = null == n ? void 0 : n.maxX) ? l : 0), (this.maxY = null != (c = null == n ? void 0 : n.maxY) ? c : 0);
                        }
                        return (
                            (n.new = function (e) {
                                var t = e.fit,
                                    r = e.alignment,
                                    i = e.minX,
                                    o = e.minY,
                                    a = e.maxX,
                                    s = e.maxY;
                                return (
                                    console.warn('This function is deprecated: please use `new Layout({})` instead'),
                                    new n({
                                        fit: t,
                                        alignment: r,
                                        minX: i,
                                        minY: o,
                                        maxX: a,
                                        maxY: s
                                    })
                                );
                            }),
                            (n.prototype.copyWith = function (e) {
                                var t = e.fit,
                                    r = e.alignment,
                                    i = e.layoutScaleFactor,
                                    o = e.minX,
                                    a = e.minY,
                                    s = e.maxX,
                                    l = e.maxY;
                                return new n({
                                    fit: null != t ? t : this.fit,
                                    alignment: null != r ? r : this.alignment,
                                    layoutScaleFactor: null != i ? i : this.layoutScaleFactor,
                                    minX: null != o ? o : this.minX,
                                    minY: null != a ? a : this.minY,
                                    maxX: null != s ? s : this.maxX,
                                    maxY: null != l ? l : this.maxY
                                });
                            }),
                            (n.prototype.runtimeFit = function (t) {
                                var n;
                                return this.cachedRuntimeFit ? this.cachedRuntimeFit : ((n = this.fit === e.Cover ? t.Fit.cover : this.fit === e.Contain ? t.Fit.contain : this.fit === e.Fill ? t.Fit.fill : this.fit === e.FitWidth ? t.Fit.fitWidth : this.fit === e.FitHeight ? t.Fit.fitHeight : this.fit === e.ScaleDown ? t.Fit.scaleDown : this.fit === e.Layout ? t.Fit.layout : t.Fit.none), (this.cachedRuntimeFit = n), n);
                            }),
                            (n.prototype.runtimeAlignment = function (e) {
                                var n;
                                return this.cachedRuntimeAlignment ? this.cachedRuntimeAlignment : ((n = this.alignment === t.TopLeft ? e.Alignment.topLeft : this.alignment === t.TopCenter ? e.Alignment.topCenter : this.alignment === t.TopRight ? e.Alignment.topRight : this.alignment === t.CenterLeft ? e.Alignment.centerLeft : this.alignment === t.CenterRight ? e.Alignment.centerRight : this.alignment === t.BottomLeft ? e.Alignment.bottomLeft : this.alignment === t.BottomCenter ? e.Alignment.bottomCenter : this.alignment === t.BottomRight ? e.Alignment.bottomRight : e.Alignment.center), (this.cachedRuntimeAlignment = n), n);
                            }),
                            n
                        );
                    })(),
                    O = (function () {
                        function e() {}
                        return (
                            (e.loadRuntime = function () {
                                u.default({
                                    locateFile: function () {
                                        return e.wasmURL;
                                    }
                                })
                                    .then(function (t) {
                                        var n;
                                        for (e.runtime = t; e.callBackQueue.length > 0; ) null == (n = e.callBackQueue.shift()) || n(e.runtime);
                                    })
                                    .catch(function (t) {
                                        var n = {
                                            message: (null == t ? void 0 : t.message) || 'Unknown error',
                                            type: (null == t ? void 0 : t.name) || 'Error',
                                            wasmError: t instanceof WebAssembly.CompileError || t instanceof WebAssembly.RuntimeError,
                                            originalError: t
                                        };
                                        console.debug('Rive WASM load error details:', n);
                                        var r = 'https://cdn.jsdelivr.net/npm/'.concat(d.name, '@').concat(d.version, '/rive_fallback.wasm');
                                        e.wasmURL.toLowerCase() !== r ? (console.warn('Failed to load WASM from '.concat(e.wasmURL, ' (').concat(n.message, '), trying jsdelivr as a backup')), e.setWasmUrl(r), e.loadRuntime()) : console.error(['Could not load Rive WASM file from '.concat(e.wasmURL, ' or ').concat(r, '.'), 'Possible reasons:', '- Network connection is down', '- WebAssembly is not supported in this environment', '- The WASM file is corrupted or incompatible', '\nError details:', '- Type: '.concat(n.type), '- Message: '.concat(n.message), '- WebAssembly-specific error: '.concat(n.wasmError), '\nTo resolve, you may need to:', '1. Check your network connection', '2. Set a new WASM source via RuntimeLoader.setWasmUrl()', '3. Call RuntimeLoader.loadRuntime() again'].join('\n'));
                                    });
                            }),
                            (e.getInstance = function (t) {
                                e.isLoading || ((e.isLoading = !0), e.loadRuntime()), e.runtime ? t(e.runtime) : e.callBackQueue.push(t);
                            }),
                            (e.awaitInstance = function () {
                                return new Promise(function (t) {
                                    return e.getInstance(function (e) {
                                        return t(e);
                                    });
                                });
                            }),
                            (e.setWasmUrl = function (t) {
                                e.wasmURL = t;
                            }),
                            (e.getWasmUrl = function () {
                                return e.wasmURL;
                            }),
                            (e.isLoading = !1),
                            (e.callBackQueue = []),
                            (e.wasmURL = 'https://unpkg.com/'.concat(d.name, '@').concat(d.version, '/rive.wasm')),
                            e
                        );
                    })();
                !(function (e) {
                    (e[(e.Number = 56)] = 'Number'), (e[(e.Trigger = 58)] = 'Trigger'), (e[(e.Boolean = 59)] = 'Boolean');
                })(i || (i = {}));
                var I = (function () {
                    function e(e, t) {
                        (this.type = e), (this.runtimeInput = t);
                    }
                    return (
                        Object.defineProperty(e.prototype, 'name', {
                            get: function () {
                                return this.runtimeInput.name;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.runtimeInput.value;
                            },
                            set: function (e) {
                                this.runtimeInput.value = e;
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        (e.prototype.fire = function () {
                            this.type === i.Trigger && this.runtimeInput.fire();
                        }),
                        (e.prototype.delete = function () {
                            this.runtimeInput = null;
                        }),
                        e
                    );
                })();
                !(function (e) {
                    (e[(e.General = 128)] = 'General'), (e[(e.OpenUrl = 131)] = 'OpenUrl');
                })(o || (o = {}));
                var S = (function () {
                        function e(e, t, n, r) {
                            (this.stateMachine = e), (this.playing = n), (this.artboard = r), (this.inputs = []), (this.instance = new t.StateMachineInstance(e, r)), this.initInputs(t);
                        }
                        return (
                            Object.defineProperty(e.prototype, 'name', {
                                get: function () {
                                    return this.stateMachine.name;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'statesChanged', {
                                get: function () {
                                    for (var e = [], t = 0; t < this.instance.stateChangedCount(); t++) e.push(this.instance.stateChangedNameByIndex(t));
                                    return e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (e.prototype.advance = function (e) {
                                this.instance.advance(e);
                            }),
                            (e.prototype.advanceAndApply = function (e) {
                                this.instance.advanceAndApply(e);
                            }),
                            (e.prototype.reportedEventCount = function () {
                                return this.instance.reportedEventCount();
                            }),
                            (e.prototype.reportedEventAt = function (e) {
                                return this.instance.reportedEventAt(e);
                            }),
                            (e.prototype.initInputs = function (e) {
                                for (var t = 0; t < this.instance.inputCount(); t++) {
                                    var n = this.instance.input(t);
                                    this.inputs.push(this.mapRuntimeInput(n, e));
                                }
                            }),
                            (e.prototype.mapRuntimeInput = function (e, t) {
                                return e.type === t.SMIInput.bool ? new I(i.Boolean, e.asBool()) : e.type === t.SMIInput.number ? new I(i.Number, e.asNumber()) : e.type === t.SMIInput.trigger ? new I(i.Trigger, e.asTrigger()) : void 0;
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
                            e
                        );
                    })(),
                    T = (function () {
                        function e(e, t, n, r, i) {
                            void 0 === r && (r = []), void 0 === i && (i = []), (this.runtime = e), (this.artboard = t), (this.eventManager = n), (this.animations = r), (this.stateMachines = i);
                        }
                        return (
                            (e.prototype.add = function (e, t, n) {
                                if ((void 0 === n && (n = !0), 0 === (e = W(e)).length))
                                    this.animations.forEach(function (e) {
                                        return (e.playing = t);
                                    }),
                                        this.stateMachines.forEach(function (e) {
                                            return (e.playing = t);
                                        });
                                else
                                    for (
                                        var r = this.animations.map(function (e) {
                                                return e.name;
                                            }),
                                            i = this.stateMachines.map(function (e) {
                                                return e.name;
                                            }),
                                            o = 0;
                                        o < e.length;
                                        o++
                                    ) {
                                        var s = r.indexOf(e[o]),
                                            l = i.indexOf(e[o]);
                                        if (s >= 0 || l >= 0) s >= 0 ? (this.animations[s].playing = t) : (this.stateMachines[l].playing = t);
                                        else {
                                            var c = this.artboard.animationByName(e[o]);
                                            if (c) {
                                                var u = new f.Animation(c, this.artboard, this.runtime, t);
                                                u.advance(0), u.apply(1), this.animations.push(u);
                                            } else {
                                                var d = this.artboard.stateMachineByName(e[o]);
                                                if (d) {
                                                    var _ = new S(d, this.runtime, t, this.artboard);
                                                    this.stateMachines.push(_);
                                                }
                                            }
                                        }
                                    }
                                return (
                                    n &&
                                        (t
                                            ? this.eventManager.fire({
                                                  type: a.Play,
                                                  data: this.playing
                                              })
                                            : this.eventManager.fire({
                                                  type: a.Pause,
                                                  data: this.paused
                                              })),
                                    t ? this.playing : this.paused
                                );
                            }),
                            (e.prototype.initLinearAnimations = function (e, t) {
                                for (
                                    var n = this.animations.map(function (e) {
                                            return e.name;
                                        }),
                                        r = 0;
                                    r < e.length;
                                    r++
                                ) {
                                    var i = n.indexOf(e[r]);
                                    if (i >= 0) this.animations[i].playing = t;
                                    else {
                                        var o = this.artboard.animationByName(e[r]);
                                        if (o) {
                                            var a = new f.Animation(o, this.artboard, this.runtime, t);
                                            a.advance(0), a.apply(1), this.animations.push(a);
                                        }
                                    }
                                }
                            }),
                            (e.prototype.initStateMachines = function (e, t) {
                                for (
                                    var n = this.stateMachines.map(function (e) {
                                            return e.name;
                                        }),
                                        r = 0;
                                    r < e.length;
                                    r++
                                ) {
                                    var i = n.indexOf(e[r]);
                                    if (i >= 0) this.stateMachines[i].playing = t;
                                    else {
                                        var o = this.artboard.stateMachineByName(e[r]);
                                        if (o) {
                                            var a = new S(o, this.runtime, t, this.artboard);
                                            this.stateMachines.push(a), t || a.advanceAndApply(0);
                                        } else this.initLinearAnimations([e[r]], t);
                                    }
                                }
                            }),
                            (e.prototype.play = function (e) {
                                return this.add(e, !0);
                            }),
                            (e.prototype.pause = function (e) {
                                return this.add(e, !1);
                            }),
                            (e.prototype.scrub = function (e, t) {
                                var n = this.animations.filter(function (t) {
                                    return e.includes(t.name);
                                });
                                return (
                                    n.forEach(function (e) {
                                        return (e.scrubTo = t);
                                    }),
                                    n.map(function (e) {
                                        return e.name;
                                    })
                                );
                            }),
                            Object.defineProperty(e.prototype, 'playing', {
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
                                                })
                                        );
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'paused', {
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
                                                })
                                        );
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (e.prototype.stop = function (e) {
                                var t = this;
                                e = W(e);
                                var n = [];
                                if (0 === e.length)
                                    (n = this.animations
                                        .map(function (e) {
                                            return e.name;
                                        })
                                        .concat(
                                            this.stateMachines.map(function (e) {
                                                return e.name;
                                            })
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
                                    var r = this.animations.filter(function (t) {
                                        return e.includes(t.name);
                                    });
                                    r.forEach(function (e) {
                                        e.cleanup(), t.animations.splice(t.animations.indexOf(e), 1);
                                    });
                                    var i = this.stateMachines.filter(function (t) {
                                        return e.includes(t.name);
                                    });
                                    i.forEach(function (e) {
                                        e.cleanup(), t.stateMachines.splice(t.stateMachines.indexOf(e), 1);
                                    }),
                                        (n = r
                                            .map(function (e) {
                                                return e.name;
                                            })
                                            .concat(
                                                i.map(function (e) {
                                                    return e.name;
                                                })
                                            ));
                                }
                                return (
                                    this.eventManager.fire({
                                        type: a.Stop,
                                        data: n
                                    }),
                                    n
                                );
                            }),
                            Object.defineProperty(e.prototype, 'isPlaying', {
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
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'isPaused', {
                                get: function () {
                                    return !this.isPlaying && (this.animations.length > 0 || this.stateMachines.length > 0);
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'isStopped', {
                                get: function () {
                                    return 0 === this.animations.length && 0 === this.stateMachines.length;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (e.prototype.atLeastOne = function (e, t) {
                                var n;
                                return void 0 === t && (t = !0), 0 === this.animations.length && 0 === this.stateMachines.length && (this.artboard.animationCount() > 0 ? this.add([(n = this.artboard.animationByIndex(0).name)], e, t) : this.artboard.stateMachineCount() > 0 && this.add([(n = this.artboard.stateMachineByIndex(0).name)], e, t)), n;
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
                                    var n = t[e];
                                    0 === n.loopValue && n.loopCount
                                        ? ((n.loopCount = 0), this.stop(n.name))
                                        : 1 === n.loopValue && n.loopCount
                                          ? (this.eventManager.fire({
                                                type: a.Loop,
                                                data: {
                                                    animation: n.name,
                                                    type: s.Loop
                                                }
                                            }),
                                            (n.loopCount = 0))
                                          : 2 === n.loopValue &&
                                            n.loopCount > 1 &&
                                            (this.eventManager.fire({
                                                type: a.Loop,
                                                data: {
                                                    animation: n.name,
                                                    type: s.PingPong
                                                }
                                            }),
                                            (n.loopCount = 0));
                                }
                            }),
                            (e.prototype.handleStateChanges = function () {
                                for (
                                    var e = [],
                                        t = 0,
                                        n = this.stateMachines.filter(function (e) {
                                            return e.playing;
                                        });
                                    t < n.length;
                                    t++
                                ) {
                                    var r = n[t];
                                    e.push.apply(e, r.statesChanged);
                                }
                                e.length > 0 &&
                                    this.eventManager.fire({
                                        type: a.StateChange,
                                        data: e
                                    });
                            }),
                            (e.prototype.handleAdvancing = function (e) {
                                this.eventManager.fire({
                                    type: a.Advance,
                                    data: e
                                });
                            }),
                            e
                        );
                    })();
                !(function (e) {
                    (e.Load = 'load'), (e.LoadError = 'loaderror'), (e.Play = 'play'), (e.Pause = 'pause'), (e.Stop = 'stop'), (e.Loop = 'loop'), (e.Draw = 'draw'), (e.Advance = 'advance'), (e.StateChange = 'statechange'), (e.RiveEvent = 'riveevent'), (e.AudioStatusChange = 'audiostatuschange');
                })(a || (a = {})),
                    (function (e) {
                        (e.OneShot = 'oneshot'), (e.Loop = 'loop'), (e.PingPong = 'pingpong');
                    })(s || (s = {}));
                var N = (function () {
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
                                    var n = this.listeners[t];
                                    if (n.type === e.type && n.callback === e.callback) {
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
                    })(),
                    A = (function () {
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
                                    (null == e ? void 0 : e.action) && e.action(), (null == e ? void 0 : e.event) && this.eventManager.fire(e.event);
                                }
                            }),
                            e
                        );
                    })();
                !(function (e) {
                    (e[(e.AVAILABLE = 0)] = 'AVAILABLE'), (e[(e.UNAVAILABLE = 1)] = 'UNAVAILABLE');
                })(l || (l = {}));
                var C = new ((function (e) {
                        function t() {
                            var t = (null !== e && e.apply(this, arguments)) || this;
                            return (t._started = !1), (t._enabled = !1), (t._status = l.UNAVAILABLE), t;
                        }
                        return (
                            p(t, e),
                            (t.prototype.delay = function (e) {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (t) {
                                        return [
                                            2,
                                            new Promise(function (t) {
                                                return setTimeout(t, e);
                                            })
                                        ];
                                    });
                                });
                            }),
                            (t.prototype.timeout = function () {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (e) {
                                        return [
                                            2,
                                            new Promise(function (e, t) {
                                                return setTimeout(t, 50);
                                            })
                                        ];
                                    });
                                });
                            }),
                            (t.prototype.reportToListeners = function () {
                                this.fire({ type: a.AudioStatusChange }), this.removeAll();
                            }),
                            (t.prototype.enableAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (e) {
                                        return this._enabled || ((this._enabled = !0), (this._status = l.AVAILABLE), this.reportToListeners()), [2];
                                    });
                                });
                            }),
                            (t.prototype.testAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    var e;
                                    return g(this, function (t) {
                                        switch (t.label) {
                                            case 0:
                                                if (this._status !== l.UNAVAILABLE || null === this._audioContext) return [3, 4];
                                                t.label = 1;
                                            case 1:
                                                return t.trys.push([1, 3, , 4]), [4, Promise.race([this._audioContext.resume(), this.timeout()])];
                                            case 2:
                                                return t.sent(), this.enableAudio(), [3, 4];
                                            case 3:
                                                return (e = t.sent()), [3, 4];
                                            case 4:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype._establishAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                if (this._started) return [3, 5];
                                                if (((this._started = !0), 'undefined' != typeof window)) return [3, 1];
                                                return this.enableAudio(), [3, 5];
                                            case 1:
                                                (this._audioContext = new AudioContext()), this.listenForUserAction(), (e.label = 2);
                                            case 2:
                                                if (this._status !== l.UNAVAILABLE) return [3, 5];
                                                return [4, this.testAudio()];
                                            case 3:
                                                return e.sent(), [4, this.delay(1000)];
                                            case 4:
                                                return e.sent(), [3, 2];
                                            case 5:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype.listenForUserAction = function () {
                                var e = this,
                                    t = function () {
                                        return m(e, void 0, void 0, function () {
                                            return g(this, function (e) {
                                                return this.enableAudio(), [2];
                                            });
                                        });
                                    };
                                document.addEventListener('pointerdown', t, { once: !0 });
                            }),
                            (t.prototype.establishAudio = function () {
                                return m(this, void 0, void 0, function () {
                                    return g(this, function (e) {
                                        return this._establishAudio(), [2];
                                    });
                                });
                            }),
                            Object.defineProperty(t.prototype, 'systemVolume', {
                                get: function () {
                                    return this._status === l.UNAVAILABLE ? (this.testAudio(), 0) : 1;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'status', {
                                get: function () {
                                    return this._status;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            t
                        );
                    })(N))(),
                    R = (function () {
                        function e() {}
                        return (e.prototype.observe = function () {}), (e.prototype.unobserve = function () {}), (e.prototype.disconnect = function () {}), e;
                    })(),
                    P = globalThis.ResizeObserver || R,
                    w = new ((function () {
                        function e() {
                            var e = this;
                            (this._elementsMap = new Map()),
                                (this._onObservedEntry = function (t) {
                                    var n = e._elementsMap.get(t.target);
                                    null !== n ? n.onResize(0 == t.target.clientWidth || 0 == t.target.clientHeight) : e._resizeObserver.unobserve(t.target);
                                }),
                                (this._onObserved = function (t) {
                                    t.forEach(e._onObservedEntry);
                                }),
                                (this._resizeObserver = new P(this._onObserved));
                        }
                        return (
                            (e.prototype.add = function (e, t) {
                                var n = {
                                    onResize: t,
                                    element: e
                                };
                                return this._elementsMap.set(e, n), this._resizeObserver.observe(e), n;
                            }),
                            (e.prototype.remove = function (e) {
                                this._resizeObserver.unobserve(e.element), this._elementsMap.delete(e.element);
                            }),
                            e
                        );
                    })())(),
                    D = (function () {
                        function e(e) {
                            (this.enableRiveAssetCDN = !0), (this.referenceCount = 0), (this.destroyed = !1), (this.src = e.src), (this.buffer = e.buffer), e.assetLoader && (this.assetLoader = e.assetLoader), (this.enableRiveAssetCDN = 'boolean' != typeof e.enableRiveAssetCDN || e.enableRiveAssetCDN), (this.eventManager = new N()), e.onLoad && this.on(a.Load, e.onLoad), e.onLoadError && this.on(a.LoadError, e.onLoadError);
                        }
                        return (
                            (e.prototype.initData = function () {
                                return m(this, void 0, void 0, function () {
                                    var t, n, r, i;
                                    return g(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                if (!this.src) return [3, 2];
                                                return (t = this), [4, H(this.src)];
                                            case 1:
                                                (t.buffer = o.sent()), (o.label = 2);
                                            case 2:
                                                if (this.destroyed) return [2];
                                                return this.assetLoader && (n = new this.runtime.CustomFileAssetLoader({ loadContents: this.assetLoader })), (r = this), [4, this.runtime.load(new Uint8Array(this.buffer), n, this.enableRiveAssetCDN)];
                                            case 3:
                                                if (((r.file = o.sent()), this.destroyed)) return null == (i = this.file) || i.delete(), (this.file = null), [2];
                                                if (null !== this.file)
                                                    this.eventManager.fire({
                                                        type: a.Load,
                                                        data: this
                                                    });
                                                else
                                                    throw (
                                                        (this.eventManager.fire({
                                                            type: a.LoadError,
                                                            data: null
                                                        }),
                                                        Error(e.fileLoadErrorMessage))
                                                    );
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.init = function () {
                                return m(this, void 0, void 0, function () {
                                    var t;
                                    return g(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                if (!this.src && !this.buffer) throw Error(e.missingErrorMessage);
                                                return (t = this), [4, O.awaitInstance()];
                                            case 1:
                                                if (((t.runtime = n.sent()), this.destroyed)) return [2];
                                                return [4, this.initData()];
                                            case 2:
                                                return n.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (e.prototype.on = function (e, t) {
                                this.eventManager.add({
                                    type: e,
                                    callback: t
                                });
                            }),
                            (e.prototype.off = function (e, t) {
                                this.eventManager.remove({
                                    type: e,
                                    callback: t
                                });
                            }),
                            (e.prototype.cleanup = function () {
                                var e;
                                (this.referenceCount -= 1), this.referenceCount <= 0 && (this.removeAllRiveEventListeners(), null == (e = this.file) || e.delete(), (this.file = null), (this.destroyed = !0));
                            }),
                            (e.prototype.removeAllRiveEventListeners = function (e) {
                                this.eventManager.removeAll(e);
                            }),
                            (e.prototype.getInstance = function () {
                                if (null !== this.file) return (this.referenceCount += 1), this.file;
                            }),
                            (e.missingErrorMessage = 'Rive source file or data buffer required'),
                            (e.fileLoadErrorMessage = 'The file failed to load'),
                            e
                        );
                    })(),
                    L = (function () {
                        function t(e) {
                            var t,
                                n = this;
                            (this.loaded = !1),
                                (this.destroyed = !1),
                                (this._observed = null),
                                (this.readyForPlaying = !1),
                                (this.artboard = null),
                                (this.eventCleanup = null),
                                (this.shouldDisableRiveListeners = !1),
                                (this.automaticallyHandleEvents = !1),
                                (this.enableRiveAssetCDN = !0),
                                (this._volume = 1),
                                (this._artboardWidth = void 0),
                                (this._artboardHeight = void 0),
                                (this._devicePixelRatioUsed = 1),
                                (this._hasZeroSize = !1),
                                (this._audioEventListener = null),
                                (this._boundDraw = null),
                                (this._viewModelInstance = null),
                                (this._dataEnums = null),
                                (this.durations = []),
                                (this.frameTimes = []),
                                (this.frameCount = 0),
                                (this.isTouchScrollEnabled = !1),
                                (this.onCanvasResize = function (e) {
                                    var t = n._hasZeroSize !== e;
                                    (n._hasZeroSize = e), e ? (n._layout.maxX && n._layout.maxY) || n.resizeToCanvas() : t && n.resizeDrawingSurfaceToCanvas();
                                }),
                                (this.renderSecondTimer = 0),
                                (this._boundDraw = this.draw.bind(this)),
                                (this.canvas = e.canvas),
                                e.canvas.constructor === HTMLCanvasElement && (this._observed = w.add(this.canvas, this.onCanvasResize)),
                                (this.src = e.src),
                                (this.buffer = e.buffer),
                                (this.riveFile = e.riveFile),
                                (this.layout = null != (t = e.layout) ? t : new v()),
                                (this.shouldDisableRiveListeners = !!e.shouldDisableRiveListeners),
                                (this.isTouchScrollEnabled = !!e.isTouchScrollEnabled),
                                (this.automaticallyHandleEvents = !!e.automaticallyHandleEvents),
                                (this.enableRiveAssetCDN = void 0 === e.enableRiveAssetCDN || e.enableRiveAssetCDN),
                                (this.eventManager = new N()),
                                e.onLoad && this.on(a.Load, e.onLoad),
                                e.onLoadError && this.on(a.LoadError, e.onLoadError),
                                e.onPlay && this.on(a.Play, e.onPlay),
                                e.onPause && this.on(a.Pause, e.onPause),
                                e.onStop && this.on(a.Stop, e.onStop),
                                e.onLoop && this.on(a.Loop, e.onLoop),
                                e.onStateChange && this.on(a.StateChange, e.onStateChange),
                                e.onAdvance && this.on(a.Advance, e.onAdvance),
                                e.onload && !e.onLoad && this.on(a.Load, e.onload),
                                e.onloaderror && !e.onLoadError && this.on(a.LoadError, e.onloaderror),
                                e.onplay && !e.onPlay && this.on(a.Play, e.onplay),
                                e.onpause && !e.onPause && this.on(a.Pause, e.onpause),
                                e.onstop && !e.onStop && this.on(a.Stop, e.onstop),
                                e.onloop && !e.onLoop && this.on(a.Loop, e.onloop),
                                e.onstatechange && !e.onStateChange && this.on(a.StateChange, e.onstatechange),
                                e.assetLoader && (this.assetLoader = e.assetLoader),
                                (this.taskQueue = new A(this.eventManager)),
                                this.init({
                                    src: this.src,
                                    buffer: this.buffer,
                                    riveFile: this.riveFile,
                                    autoplay: e.autoplay,
                                    autoBind: e.autoBind,
                                    animations: e.animations,
                                    stateMachines: e.stateMachines,
                                    artboard: e.artboard,
                                    useOffscreenRenderer: e.useOffscreenRenderer
                                });
                        }
                        return (
                            Object.defineProperty(t.prototype, 'viewModelCount', {
                                get: function () {
                                    return this.file.viewModelCount();
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.new = function (e) {
                                return console.warn('This function is deprecated: please use `new Rive({})` instead'), new t(e);
                            }),
                            (t.prototype.onSystemAudioChanged = function () {
                                this.volume = this._volume;
                            }),
                            (t.prototype.init = function (e) {
                                var n = this,
                                    r = e.src,
                                    i = e.buffer,
                                    o = e.riveFile,
                                    a = e.animations,
                                    s = e.stateMachines,
                                    l = e.artboard,
                                    c = e.autoplay,
                                    u = void 0 !== c && c,
                                    d = e.useOffscreenRenderer,
                                    f = void 0 !== d && d,
                                    _ = e.autoBind,
                                    p = void 0 !== _ && _;
                                if (!this.destroyed) {
                                    if (((this.src = r), (this.buffer = i), (this.riveFile = o), !this.src && !this.buffer && !this.riveFile)) throw new b(t.missingErrorMessage);
                                    var h = W(a),
                                        m = W(s);
                                    (this.loaded = !1),
                                        (this.readyForPlaying = !1),
                                        O.awaitInstance()
                                            .then(function (e) {
                                                n.destroyed ||
                                                    ((n.runtime = e),
                                                    n.removeRiveListeners(),
                                                    n.deleteRiveRenderer(),
                                                    (n.renderer = n.runtime.makeRenderer(n.canvas, f)),
                                                    n.canvas.width || n.canvas.height || n.resizeDrawingSurfaceToCanvas(),
                                                    n
                                                        .initData(l, h, m, u, p)
                                                        .then(function () {
                                                            return n.setupRiveListeners();
                                                        })
                                                        .catch(function (e) {
                                                            console.error(e);
                                                        }));
                                            })
                                            .catch(function (e) {
                                                console.error(e);
                                            });
                                }
                            }),
                            (t.prototype.setupRiveListeners = function (e) {
                                var t = this;
                                if ((this.eventCleanup && this.eventCleanup(), !this.shouldDisableRiveListeners)) {
                                    var n = (this.animator.stateMachines || [])
                                            .filter(function (e) {
                                                return e.playing && t.runtime.hasListeners(e.instance);
                                            })
                                            .map(function (e) {
                                                return e.instance;
                                            }),
                                        r = this.isTouchScrollEnabled;
                                    e && 'isTouchScrollEnabled' in e && (r = e.isTouchScrollEnabled),
                                        (this.eventCleanup = (0, _.registerTouchInteractions)({
                                            canvas: this.canvas,
                                            artboard: this.artboard,
                                            stateMachines: n,
                                            renderer: this.renderer,
                                            rive: this.runtime,
                                            fit: this._layout.runtimeFit(this.runtime),
                                            alignment: this._layout.runtimeAlignment(this.runtime),
                                            isTouchScrollEnabled: r,
                                            layoutScaleFactor: this._layout.layoutScaleFactor
                                        }));
                                }
                            }),
                            (t.prototype.removeRiveListeners = function () {
                                this.eventCleanup && (this.eventCleanup(), (this.eventCleanup = null));
                            }),
                            (t.prototype.initializeAudio = function () {
                                var e,
                                    t = this;
                                C.status == l.UNAVAILABLE &&
                                    (null == (e = this.artboard) ? void 0 : e.hasAudio) &&
                                    null === this._audioEventListener &&
                                    ((this._audioEventListener = {
                                        type: a.AudioStatusChange,
                                        callback: function () {
                                            return t.onSystemAudioChanged();
                                        }
                                    }),
                                    C.add(this._audioEventListener),
                                    C.establishAudio());
                            }),
                            (t.prototype.initArtboardSize = function () {
                                this.artboard && ((this._artboardWidth = this.artboard.width = this._artboardWidth || this.artboard.width), (this._artboardHeight = this.artboard.height = this._artboardHeight || this.artboard.height));
                            }),
                            (t.prototype.initData = function (e, n, r, i, o) {
                                return m(this, void 0, void 0, function () {
                                    var s, l;
                                    return g(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                if ((c.trys.push([0, 3, , 4]), null != this.riveFile)) return [3, 2];
                                                return (
                                                    (this.riveFile = new D({
                                                        src: this.src,
                                                        buffer: this.buffer,
                                                        enableRiveAssetCDN: this.enableRiveAssetCDN,
                                                        assetLoader: this.assetLoader
                                                    })),
                                                    [4, this.riveFile.init()]
                                                );
                                            case 1:
                                                c.sent(), (c.label = 2);
                                            case 2:
                                                if (!this.riveFile) throw new b(t.cleanupErrorMessage);
                                                return (
                                                    (this.file = this.riveFile.getInstance()),
                                                    this.initArtboard(e, n, r, i, o),
                                                    this.initArtboardSize(),
                                                    this.initializeAudio(),
                                                    (this.loaded = !0),
                                                    this.eventManager.fire({
                                                        type: a.Load,
                                                        data: null != (l = this.src) ? l : 'buffer'
                                                    }),
                                                    (this.readyForPlaying = !0),
                                                    this.taskQueue.process(),
                                                    this.drawFrame(),
                                                    [2, Promise.resolve()]
                                                );
                                            case 3:
                                                return (
                                                    console.warn((s = y(c.sent()))),
                                                    this.eventManager.fire({
                                                        type: a.LoadError,
                                                        data: s
                                                    }),
                                                    [2, Promise.reject(s)]
                                                );
                                            case 4:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype.initArtboard = function (e, t, n, r, i) {
                                if (this.file) {
                                    var o,
                                        s = e ? this.file.artboardByName(e) : this.file.defaultArtboard();
                                    if (!s) {
                                        var l = 'Invalid artboard name or no default artboard';
                                        console.warn(l),
                                            this.eventManager.fire({
                                                type: a.LoadError,
                                                data: l
                                            });
                                        return;
                                    }
                                    if (((this.artboard = s), (s.volume = this._volume * C.systemVolume), 1 > this.artboard.animationCount())) {
                                        var l = 'Artboard has no animations';
                                        throw (
                                            (this.eventManager.fire({
                                                type: a.LoadError,
                                                data: l
                                            }),
                                            l)
                                        );
                                    }
                                    if (
                                        ((this.animator = new T(this.runtime, this.artboard, this.eventManager)),
                                        t.length > 0 || n.length > 0 ? ((o = t.concat(n)), this.animator.initLinearAnimations(t, r), this.animator.initStateMachines(n, r)) : (o = [this.animator.atLeastOne(r, !1)]),
                                        this.taskQueue.add({
                                            event: {
                                                type: r ? a.Play : a.Pause,
                                                data: o
                                            }
                                        }),
                                        i)
                                    ) {
                                        var c = this.file.defaultArtboardViewModel(s);
                                        if (null !== c) {
                                            var u = c.defaultInstance();
                                            if (null !== u) {
                                                var d = new k(u, null);
                                                this.bindViewModelInstance(d);
                                            }
                                        }
                                    }
                                }
                            }),
                            (t.prototype.drawFrame = function () {
                                var e, t;
                                (null == (e = null == document ? void 0 : document.timeline) ? void 0 : e.currentTime) ? this.loaded && this.artboard && !this.frameRequestId && (this._boundDraw(document.timeline.currentTime), null == (t = this.runtime) || t.resolveAnimationFrame()) : this.startRendering();
                            }),
                            (t.prototype.draw = function (e, t) {
                                this.frameRequestId = null;
                                var n,
                                    r = performance.now();
                                this.lastRenderTime || (this.lastRenderTime = e), (this.renderSecondTimer += e - this.lastRenderTime), this.renderSecondTimer > 5000 && ((this.renderSecondTimer = 0), null == t || t());
                                var i = (e - this.lastRenderTime) / 1000;
                                this.lastRenderTime = e;
                                for (
                                    var s = this.animator.animations
                                            .filter(function (e) {
                                                return e.playing || e.needsScrub;
                                            })
                                            .sort(function (e) {
                                                return e.needsScrub ? -1 : 1;
                                            }),
                                        l = 0,
                                        c = s;
                                    l < c.length;
                                    l++
                                ) {
                                    var u = c[l];
                                    u.advance(i), u.instance.didLoop && (u.loopCount += 1), u.apply(1);
                                }
                                for (
                                    var d = this.animator.stateMachines.filter(function (e) {
                                            return e.playing;
                                        }),
                                        f = 0,
                                        p = d;
                                    f < p.length;
                                    f++
                                ) {
                                    var h = p[f],
                                        m = h.reportedEventCount();
                                    if (m)
                                        for (var g = 0; g < m; g++) {
                                            var E = h.reportedEventAt(g);
                                            if (E)
                                                if (E.type === o.OpenUrl) {
                                                    if (
                                                        (this.eventManager.fire({
                                                            type: a.RiveEvent,
                                                            data: E
                                                        }),
                                                        this.automaticallyHandleEvents)
                                                    ) {
                                                        var b = document.createElement('a'),
                                                            y = E,
                                                            v = y.url,
                                                            O = y.target,
                                                            I = (0, _.sanitizeUrl)(v);
                                                        v && b.setAttribute('href', I), O && b.setAttribute('target', O), I && I !== _.BLANK_URL && b.click();
                                                    }
                                                } else
                                                    this.eventManager.fire({
                                                        type: a.RiveEvent,
                                                        data: E
                                                    });
                                        }
                                    h.advanceAndApply(i);
                                }
                                0 == this.animator.stateMachines.length && this.artboard.advance(i);
                                var S = this.renderer;
                                S.clear(), S.save(), this.alignRenderer(), this._hasZeroSize || this.artboard.draw(S), S.restore(), S.flush(), this.animator.handleLooping(), this.animator.handleStateChanges(), this.animator.handleAdvancing(i), this.frameCount++;
                                var T = performance.now();
                                for (this.frameTimes.push(T), this.durations.push(T - r); this.frameTimes[0] <= T - 1000; ) this.frameTimes.shift(), this.durations.shift();
                                null == (n = this._viewModelInstance) || n.handleCallbacks(), this.animator.isPlaying ? this.startRendering() : this.animator.isPaused ? (this.lastRenderTime = 0) : this.animator.isStopped && (this.lastRenderTime = 0);
                            }),
                            (t.prototype.alignRenderer = function () {
                                var e = this,
                                    t = e.renderer,
                                    n = e.runtime,
                                    r = e._layout,
                                    i = e.artboard;
                                t.align(
                                    r.runtimeFit(n),
                                    r.runtimeAlignment(n),
                                    {
                                        minX: r.minX,
                                        minY: r.minY,
                                        maxX: r.maxX,
                                        maxY: r.maxY
                                    },
                                    i.bounds,
                                    this._devicePixelRatioUsed * r.layoutScaleFactor
                                );
                            }),
                            Object.defineProperty(t.prototype, 'fps', {
                                get: function () {
                                    return this.durations.length;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'frameTime', {
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
                                configurable: !0
                            }),
                            (t.prototype.cleanup = function () {
                                var e, t;
                                (this.destroyed = !0), this.stopRendering(), this.cleanupInstances(), null !== this._observed && w.remove(this._observed), this.removeRiveListeners(), this.file && (null == (e = this.riveFile) || e.cleanup(), (this.file = null)), (this.riveFile = null), this.deleteRiveRenderer(), null !== this._audioEventListener && (C.remove(this._audioEventListener), (this._audioEventListener = null)), null == (t = this._viewModelInstance) || t.cleanup(), (this._viewModelInstance = null), (this._dataEnums = null);
                            }),
                            (t.prototype.deleteRiveRenderer = function () {
                                var e;
                                null == (e = this.renderer) || e.delete(), (this.renderer = null);
                            }),
                            (t.prototype.cleanupInstances = function () {
                                null !== this.eventCleanup && this.eventCleanup(), this.stop(), this.artboard && (this.artboard.delete(), (this.artboard = null));
                            }),
                            (t.prototype.retrieveTextRun = function (e) {
                                if (!e) return void console.warn('No text run name provided');
                                if (!this.artboard) return void console.warn('Tried to access text run, but the Artboard is null');
                                var t,
                                    n = this.artboard.textRun(e);
                                return n || void console.warn("Could not access a text run with name '".concat(e, "' in the '").concat(null == (t = this.artboard) ? void 0 : t.name, "' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));
                            }),
                            (t.prototype.getTextRunValue = function (e) {
                                var t = this.retrieveTextRun(e);
                                return t ? t.text : void 0;
                            }),
                            (t.prototype.setTextRunValue = function (e, t) {
                                var n = this.retrieveTextRun(e);
                                n && (n.text = t);
                            }),
                            (t.prototype.play = function (e, t) {
                                var n = this;
                                if (((e = W(e)), !this.readyForPlaying))
                                    return void this.taskQueue.add({
                                        action: function () {
                                            return n.play(e, t);
                                        }
                                    });
                                this.animator.play(e), this.eventCleanup && this.eventCleanup(), this.setupRiveListeners(), this.startRendering();
                            }),
                            (t.prototype.pause = function (e) {
                                var t = this;
                                if (((e = W(e)), !this.readyForPlaying))
                                    return void this.taskQueue.add({
                                        action: function () {
                                            return t.pause(e);
                                        }
                                    });
                                this.eventCleanup && this.eventCleanup(), this.animator.pause(e);
                            }),
                            (t.prototype.scrub = function (e, t) {
                                var n = this;
                                if (((e = W(e)), !this.readyForPlaying))
                                    return void this.taskQueue.add({
                                        action: function () {
                                            return n.scrub(e, t);
                                        }
                                    });
                                this.animator.scrub(e, t || 0), this.drawFrame();
                            }),
                            (t.prototype.stop = function (e) {
                                var t = this;
                                if (((e = W(e)), !this.readyForPlaying))
                                    return void this.taskQueue.add({
                                        action: function () {
                                            return t.stop(e);
                                        }
                                    });
                                this.animator && this.animator.stop(e), this.eventCleanup && this.eventCleanup();
                            }),
                            (t.prototype.reset = function (e) {
                                var t,
                                    n,
                                    r = null == e ? void 0 : e.artboard,
                                    i = W(null == e ? void 0 : e.animations),
                                    o = W(null == e ? void 0 : e.stateMachines),
                                    a = null != (t = null == e ? void 0 : e.autoplay) && t,
                                    s = null != (n = null == e ? void 0 : e.autoBind) && n;
                                this.cleanupInstances(), this.initArtboard(r, i, o, a, s), this.taskQueue.process();
                            }),
                            (t.prototype.load = function (e) {
                                (this.file = null), this.stop(), this.init(e);
                            }),
                            Object.defineProperty(t.prototype, 'layout', {
                                get: function () {
                                    return this._layout;
                                },
                                set: function (e) {
                                    (this._layout = e), (e.maxX && e.maxY) || this.resizeToCanvas(), this.loaded && !this.animator.isPlaying && this.drawFrame();
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.resizeToCanvas = function () {
                                this._layout = this.layout.copyWith({
                                    minX: 0,
                                    minY: 0,
                                    maxX: this.canvas.width,
                                    maxY: this.canvas.height
                                });
                            }),
                            (t.prototype.resizeDrawingSurfaceToCanvas = function (t) {
                                if (this.canvas instanceof HTMLCanvasElement && window) {
                                    var n = this.canvas.getBoundingClientRect(),
                                        r = n.width,
                                        i = n.height,
                                        o = t || window.devicePixelRatio || 1;
                                    if (((this.devicePixelRatioUsed = o), (this.canvas.width = o * r), (this.canvas.height = o * i), this.resizeToCanvas(), this.drawFrame(), this.layout.fit === e.Layout)) {
                                        var a = this._layout.layoutScaleFactor;
                                        (this.artboard.width = r / a), (this.artboard.height = i / a);
                                    }
                                }
                            }),
                            Object.defineProperty(t.prototype, 'source', {
                                get: function () {
                                    return this.src;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'activeArtboard', {
                                get: function () {
                                    return this.artboard ? this.artboard.name : '';
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'animationNames', {
                                get: function () {
                                    if (!this.loaded || !this.artboard) return [];
                                    for (var e = [], t = 0; t < this.artboard.animationCount(); t++) e.push(this.artboard.animationByIndex(t).name);
                                    return e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'stateMachineNames', {
                                get: function () {
                                    if (!this.loaded || !this.artboard) return [];
                                    for (var e = [], t = 0; t < this.artboard.stateMachineCount(); t++) e.push(this.artboard.stateMachineByIndex(t).name);
                                    return e;
                                },
                                enumerable: !1,
                                configurable: !0
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
                                if (!this.artboard) return void console.warn("Tried to access input: '".concat(e, "', at path: '").concat(t, "', but the Artboard is null"));
                                var n = this.artboard.inputByPath(e, t);
                                return n || void console.warn("Could not access an input with name: '".concat(e, "', at path:'").concat(t, "'"));
                            }),
                            (t.prototype.setBooleanStateAtPath = function (e, t, n) {
                                var r = this.retrieveInputAtPath(e, n);
                                r && (r.type === i.Boolean ? (r.asBool().value = t) : console.warn("Input with name: '".concat(e, "', at path:'").concat(n, "' is not a boolean")));
                            }),
                            (t.prototype.setNumberStateAtPath = function (e, t, n) {
                                var r = this.retrieveInputAtPath(e, n);
                                r && (r.type === i.Number ? (r.asNumber().value = t) : console.warn("Input with name: '".concat(e, "', at path:'").concat(n, "' is not a number")));
                            }),
                            (t.prototype.fireStateAtPath = function (e, t) {
                                var n = this.retrieveInputAtPath(e, t);
                                n && (n.type === i.Trigger ? n.asTrigger().fire() : console.warn("Input with name: '".concat(e, "', at path:'").concat(t, "' is not a trigger")));
                            }),
                            (t.prototype.retrieveTextAtPath = function (e, t) {
                                if (!e) return void console.warn("No text name provided for path '".concat(t, "'"));
                                if (!t) return void console.warn("No path provided for text '".concat(e, "'"));
                                if (!this.artboard) return void console.warn("Tried to access text: '".concat(e, "', at path: '").concat(t, "', but the Artboard is null"));
                                var n = this.artboard.textByPath(e, t);
                                return n || void console.warn("Could not access text with name: '".concat(e, "', at path:'").concat(t, "'"));
                            }),
                            (t.prototype.getTextRunValueAtPath = function (e, t) {
                                var n = this.retrieveTextAtPath(e, t);
                                return n ? n.text : void console.warn("Could not get text with name: '".concat(e, "', at path:'").concat(t, "'"));
                            }),
                            (t.prototype.setTextRunValueAtPath = function (e, t, n) {
                                var r = this.retrieveTextAtPath(e, n);
                                if (!r) return void console.warn("Could not set text with name: '".concat(e, "', at path:'").concat(n, "'"));
                                r.text = t;
                            }),
                            Object.defineProperty(t.prototype, 'playingStateMachineNames', {
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
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'playingAnimationNames', {
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
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'pausedAnimationNames', {
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
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'pausedStateMachineNames', {
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
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'isPlaying', {
                                get: function () {
                                    return this.animator.isPlaying;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'isPaused', {
                                get: function () {
                                    return this.animator.isPaused;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'isStopped', {
                                get: function () {
                                    return this.animator.isStopped;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'bounds', {
                                get: function () {
                                    return this.artboard ? this.artboard.bounds : void 0;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.on = function (e, t) {
                                this.eventManager.add({
                                    type: e,
                                    callback: t
                                });
                            }),
                            (t.prototype.off = function (e, t) {
                                this.eventManager.remove({
                                    type: e,
                                    callback: t
                                });
                            }),
                            (t.prototype.unsubscribe = function (e, t) {
                                console.warn('This function is deprecated: please use `off()` instead.'), this.off(e, t);
                            }),
                            (t.prototype.removeAllRiveEventListeners = function (e) {
                                this.eventManager.removeAll(e);
                            }),
                            (t.prototype.unsubscribeAll = function (e) {
                                console.warn('This function is deprecated: please use `removeAllRiveEventListeners()` instead.'), this.removeAllRiveEventListeners(e);
                            }),
                            (t.prototype.stopRendering = function () {
                                this.loaded && this.frameRequestId && (this.runtime.cancelAnimationFrame ? this.runtime.cancelAnimationFrame(this.frameRequestId) : cancelAnimationFrame(this.frameRequestId), (this.frameRequestId = null));
                            }),
                            (t.prototype.startRendering = function () {
                                this.loaded && this.artboard && !this.frameRequestId && (this.runtime.requestAnimationFrame ? (this.frameRequestId = this.runtime.requestAnimationFrame(this._boundDraw)) : (this.frameRequestId = requestAnimationFrame(this._boundDraw)));
                            }),
                            (t.prototype.enableFPSCounter = function (e) {
                                this.runtime.enableFPSCounter(e);
                            }),
                            (t.prototype.disableFPSCounter = function () {
                                this.runtime.disableFPSCounter();
                            }),
                            Object.defineProperty(t.prototype, 'contents', {
                                get: function () {
                                    if (this.loaded) {
                                        for (var e = { artboards: [] }, t = 0; t < this.file.artboardCount(); t++) {
                                            for (
                                                var n = this.file.artboardByIndex(t),
                                                    r = {
                                                        name: n.name,
                                                        animations: [],
                                                        stateMachines: []
                                                    },
                                                    i = 0;
                                                i < n.animationCount();
                                                i++
                                            ) {
                                                var o = n.animationByIndex(i);
                                                r.animations.push(o.name);
                                            }
                                            for (var a = 0; a < n.stateMachineCount(); a++) {
                                                for (var s = n.stateMachineByIndex(a), l = s.name, c = new this.runtime.StateMachineInstance(s, n), u = [], d = 0; d < c.inputCount(); d++) {
                                                    var f = c.input(d);
                                                    u.push({
                                                        name: f.name,
                                                        type: f.type
                                                    });
                                                }
                                                r.stateMachines.push({
                                                    name: l,
                                                    inputs: u
                                                });
                                            }
                                            e.artboards.push(r);
                                        }
                                        return e;
                                    }
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'volume', {
                                get: function () {
                                    return this.artboard && this.artboard.volume !== this._volume && (this._volume = this.artboard.volume), this._volume;
                                },
                                set: function (e) {
                                    (this._volume = e), this.artboard && (this.artboard.volume = e * C.systemVolume);
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'artboardWidth', {
                                get: function () {
                                    var e;
                                    return this.artboard ? this.artboard.width : null != (e = this._artboardWidth) ? e : 0;
                                },
                                set: function (e) {
                                    (this._artboardWidth = e), this.artboard && (this.artboard.width = e);
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'artboardHeight', {
                                get: function () {
                                    var e;
                                    return this.artboard ? this.artboard.height : null != (e = this._artboardHeight) ? e : 0;
                                },
                                set: function (e) {
                                    (this._artboardHeight = e), this.artboard && (this.artboard.height = e);
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.resetArtboardSize = function () {
                                this.artboard ? (this.artboard.resetArtboardSize(), (this._artboardWidth = this.artboard.width), (this._artboardHeight = this.artboard.height)) : ((this._artboardWidth = void 0), (this._artboardHeight = void 0));
                            }),
                            Object.defineProperty(t.prototype, 'devicePixelRatioUsed', {
                                get: function () {
                                    return this._devicePixelRatioUsed;
                                },
                                set: function (e) {
                                    this._devicePixelRatioUsed = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.bindViewModelInstance = function (e) {
                                var t;
                                this.artboard &&
                                    !this.destroyed &&
                                    e &&
                                    e.runtimeInstance &&
                                    (e.internalIncrementReferenceCount(),
                                    null == (t = this._viewModelInstance) || t.cleanup(),
                                    (this._viewModelInstance = e),
                                    this.animator.stateMachines.length > 0
                                        ? this.animator.stateMachines.forEach(function (t) {
                                              return t.bindViewModelInstance(e);
                                          })
                                        : this.artboard.bindViewModelInstance(e.runtimeInstance));
                            }),
                            Object.defineProperty(t.prototype, 'viewModelInstance', {
                                get: function () {
                                    return this._viewModelInstance;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.viewModelByIndex = function (e) {
                                var t = this.file.viewModelByIndex(e);
                                return null !== t ? new x(t) : null;
                            }),
                            (t.prototype.viewModelByName = function (e) {
                                var t = this.file.viewModelByName(e);
                                return null !== t ? new x(t) : null;
                            }),
                            (t.prototype.enums = function () {
                                if (null === this._dataEnums) {
                                    var e = this.file.enums();
                                    this._dataEnums = e.map(function (e) {
                                        return new M(e);
                                    });
                                }
                                return this._dataEnums;
                            }),
                            (t.prototype.defaultViewModel = function () {
                                if (this.artboard) {
                                    var e = this.file.defaultArtboardViewModel(this.artboard);
                                    if (e) return new x(e);
                                }
                                return null;
                            }),
                            (t.missingErrorMessage = 'Rive source file or data buffer required'),
                            (t.cleanupErrorMessage = 'Attempt to use file after calling cleanup.'),
                            t
                        );
                    })(),
                    x = (function () {
                        function e(e) {
                            this._viewModel = e;
                        }
                        return (
                            Object.defineProperty(e.prototype, 'instanceCount', {
                                get: function () {
                                    return this._viewModel.instanceCount;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'name', {
                                get: function () {
                                    return this._viewModel.name;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (e.prototype.instanceByIndex = function (e) {
                                var t = this._viewModel.instanceByIndex(e);
                                return null !== t ? new k(t, null) : null;
                            }),
                            (e.prototype.instanceByName = function (e) {
                                var t = this._viewModel.instanceByName(e);
                                return null !== t ? new k(t, null) : null;
                            }),
                            (e.prototype.defaultInstance = function () {
                                var e = this._viewModel.defaultInstance();
                                return null !== e ? new k(e, null) : null;
                            }),
                            (e.prototype.instance = function () {
                                var e = this._viewModel.instance();
                                return null !== e ? new k(e, null) : null;
                            }),
                            Object.defineProperty(e.prototype, 'properties', {
                                get: function () {
                                    return this._viewModel.getProperties();
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'instanceNames', {
                                get: function () {
                                    return this._viewModel.getInstanceNames();
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            e
                        );
                    })(),
                    M = (function () {
                        function e(e) {
                            this._dataEnum = e;
                        }
                        return (
                            Object.defineProperty(e.prototype, 'name', {
                                get: function () {
                                    return this._dataEnum.name;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(e.prototype, 'values', {
                                get: function () {
                                    return this._dataEnum.values;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            e
                        );
                    })();
                !(function (e) {
                    (e.Number = 'number'), (e.String = 'string'), (e.Boolean = 'boolean'), (e.Color = 'color'), (e.Trigger = 'trigger'), (e.Enum = 'enum');
                })(c || (c = {}));
                var k = (function () {
                        function e(e, t) {
                            (this._parents = []), (this._children = []), (this._viewModelInstances = new Map()), (this._propertiesWithCallbacks = []), (this._referenceCount = 0), (this._runtimeInstance = e), null !== t && this._parents.push(t);
                        }
                        return (
                            Object.defineProperty(e.prototype, 'runtimeInstance', {
                                get: function () {
                                    return this._runtimeInstance;
                                },
                                enumerable: !1,
                                configurable: !0
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
                                this._parents.push(e), (this._propertiesWithCallbacks.length > 0 || this._children.length > 0) && e.addToViewModelCallbacks(this);
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
                                var n = e.split('/');
                                return this.propertyFromPathSegments(n, 0, t);
                            }),
                            (e.prototype.viewModelFromPathSegments = function (e, t) {
                                var n = this.internalViewModelInstance(e[t]);
                                if (null !== n)
                                    if (t == e.length - 1) return n;
                                    else return n.viewModelFromPathSegments(e, t++);
                                return null;
                            }),
                            (e.prototype.propertyFromPathSegments = function (e, t, n) {
                                if (t < e.length - 1) {
                                    var r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        l,
                                        u,
                                        d,
                                        f,
                                        _,
                                        p,
                                        h,
                                        m = this.internalViewModelInstance(e[t]);
                                    return null !== m ? m.propertyFromPathSegments(e, t + 1, n) : null;
                                }
                                var g = null;
                                switch (n) {
                                    case c.Number:
                                        if (null !== (g = null != (i = null == (r = this._runtimeInstance) ? void 0 : r.number(e[t])) ? i : null)) return new G(g, this);
                                        break;
                                    case c.String:
                                        if (null !== (g = null != (a = null == (o = this._runtimeInstance) ? void 0 : o.string(e[t])) ? a : null)) return new U(g, this);
                                        break;
                                    case c.Boolean:
                                        if (null !== (g = null != (l = null == (s = this._runtimeInstance) ? void 0 : s.boolean(e[t])) ? l : null)) return new B(g, this);
                                        break;
                                    case c.Color:
                                        if (null !== (g = null != (d = null == (u = this._runtimeInstance) ? void 0 : u.color(e[t])) ? d : null)) return new Z(g, this);
                                        break;
                                    case c.Trigger:
                                        if (null !== (g = null != (_ = null == (f = this._runtimeInstance) ? void 0 : f.trigger(e[t])) ? _ : null)) return new V(g, this);
                                        break;
                                    case c.Enum:
                                        if (null !== (g = null != (h = null == (p = this._runtimeInstance) ? void 0 : p.enum(e[t])) ? h : null)) return new F(g, this);
                                }
                                return null;
                            }),
                            (e.prototype.internalViewModelInstance = function (t) {
                                if (this._viewModelInstances.has(t)) return this._viewModelInstances.get(t);
                                var n,
                                    r = null == (n = this._runtimeInstance) ? void 0 : n.viewModel(t);
                                if (null !== r) {
                                    var i = new e(r, this);
                                    return i.internalIncrementReferenceCount(), this._viewModelInstances.set(t, i), i;
                                }
                                return null;
                            }),
                            (e.prototype.number = function (e) {
                                return this.propertyFromPath(e, c.Number);
                            }),
                            (e.prototype.string = function (e) {
                                return this.propertyFromPath(e, c.String);
                            }),
                            (e.prototype.boolean = function (e) {
                                return this.propertyFromPath(e, c.Boolean);
                            }),
                            (e.prototype.color = function (e) {
                                return this.propertyFromPath(e, c.Color);
                            }),
                            (e.prototype.trigger = function (e) {
                                return this.propertyFromPath(e, c.Trigger);
                            }),
                            (e.prototype.enum = function (e) {
                                return this.propertyFromPath(e, c.Enum);
                            }),
                            (e.prototype.viewModel = function (e) {
                                var t = e.split('/'),
                                    n = t.length > 1 ? this.viewModelFromPathSegments(t.slice(0, t.length - 1), 0) : this;
                                return null != n ? n.internalViewModelInstance(t[t.length - 1]) : null;
                            }),
                            (e.prototype.internalReplaceViewModel = function (e, t) {
                                var n;
                                if (null !== t.runtimeInstance) {
                                    var r = (null == (n = this._runtimeInstance) ? void 0 : n.replaceViewModel(e, t.runtimeInstance)) || !1;
                                    if (r) {
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
                                    return r;
                                }
                                return !1;
                            }),
                            (e.prototype.replaceViewModel = function (e, t) {
                                var n,
                                    r = e.split('/'),
                                    i = r.length > 1 ? this.viewModelFromPathSegments(r.slice(0, r.length - 1), 0) : this;
                                return null != (n = null == i ? void 0 : i.internalReplaceViewModel(r[r.length - 1], t)) && n;
                            }),
                            (e.prototype.incrementReferenceCount = function () {
                                var e;
                                this._referenceCount++, null == (e = this._runtimeInstance) || e.incrementReferenceCount();
                            }),
                            (e.prototype.decrementReferenceCount = function () {
                                var e;
                                this._referenceCount--, null == (e = this._runtimeInstance) || e.decrementReferenceCount();
                            }),
                            Object.defineProperty(e.prototype, 'properties', {
                                get: function () {
                                    var e;
                                    return (
                                        (null == (e = this._runtimeInstance)
                                            ? void 0
                                            : e.getProperties().map(function (e) {
                                                  return h({}, e);
                                              })) || []
                                    );
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (e.prototype.internalIncrementReferenceCount = function () {
                                this._referenceCount++;
                            }),
                            (e.prototype.cleanup = function () {
                                var e = this;
                                if ((this._referenceCount--, this._referenceCount <= 0)) {
                                    (this._runtimeInstance = null),
                                        this.clearCallbacks(),
                                        (this._propertiesWithCallbacks = []),
                                        this._viewModelInstances.forEach(function (e) {
                                            e.cleanup();
                                        }),
                                        this._viewModelInstances.clear();
                                    var t = E([], this._children, !0);
                                    this._children.length = 0;
                                    var n = E([], this._parents, !0);
                                    (this._parents.length = 0),
                                        t.forEach(function (t) {
                                            t.removeParent(e);
                                        }),
                                        n.forEach(function (t) {
                                            t.removeFromViewModelCallbacks(e);
                                        });
                                }
                            }),
                            e
                        );
                    })(),
                    j = (function () {
                        function e(e, t) {
                            (this.callbacks = []), (this._viewModelInstanceValue = e), (this._parentViewModel = t);
                        }
                        return (
                            (e.prototype.on = function (e) {
                                0 === this.callbacks.length && this._viewModelInstanceValue.clearChanges(), this.callbacks.includes(e) || (this.callbacks.push(e), this._parentViewModel.addToPropertyCallbacks(this));
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
                            Object.defineProperty(e.prototype, 'name', {
                                get: function () {
                                    return this._viewModelInstanceValue.name;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            e
                        );
                    })(),
                    U = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            Object.defineProperty(t.prototype, 'value', {
                                get: function () {
                                    return this._viewModelInstanceValue.value;
                                },
                                set: function (e) {
                                    this._viewModelInstanceValue.value = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.internalHandleCallback = function (e) {
                                e(this.value);
                            }),
                            t
                        );
                    })(j),
                    G = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            Object.defineProperty(t.prototype, 'value', {
                                get: function () {
                                    return this._viewModelInstanceValue.value;
                                },
                                set: function (e) {
                                    this._viewModelInstanceValue.value = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.internalHandleCallback = function (e) {
                                e(this.value);
                            }),
                            t
                        );
                    })(j),
                    B = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            Object.defineProperty(t.prototype, 'value', {
                                get: function () {
                                    return this._viewModelInstanceValue.value;
                                },
                                set: function (e) {
                                    this._viewModelInstanceValue.value = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.internalHandleCallback = function (e) {
                                e(this.value);
                            }),
                            t
                        );
                    })(j),
                    V = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            (t.prototype.trigger = function () {
                                return this._viewModelInstanceValue.trigger();
                            }),
                            (t.prototype.internalHandleCallback = function (e) {
                                e();
                            }),
                            t
                        );
                    })(j),
                    F = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            Object.defineProperty(t.prototype, 'value', {
                                get: function () {
                                    return this._viewModelInstanceValue.value;
                                },
                                set: function (e) {
                                    this._viewModelInstanceValue.value = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'valueIndex', {
                                get: function () {
                                    return this._viewModelInstanceValue.valueIndex;
                                },
                                set: function (e) {
                                    this._viewModelInstanceValue.valueIndex = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            Object.defineProperty(t.prototype, 'values', {
                                get: function () {
                                    return this._viewModelInstanceValue.values;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.internalHandleCallback = function (e) {
                                e(this.value);
                            }),
                            t
                        );
                    })(j),
                    Z = (function (e) {
                        function t(t, n) {
                            return e.call(this, t, n) || this;
                        }
                        return (
                            p(t, e),
                            Object.defineProperty(t.prototype, 'value', {
                                get: function () {
                                    return this._viewModelInstanceValue.value;
                                },
                                set: function (e) {
                                    this._viewModelInstanceValue.value = e;
                                },
                                enumerable: !1,
                                configurable: !0
                            }),
                            (t.prototype.rgb = function (e, t, n) {
                                this._viewModelInstanceValue.rgb(e, t, n);
                            }),
                            (t.prototype.rgba = function (e, t, n, r) {
                                this._viewModelInstanceValue.argb(r, e, t, n);
                            }),
                            (t.prototype.argb = function (e, t, n, r) {
                                this._viewModelInstanceValue.argb(e, t, n, r);
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
                    })(j),
                    H = function (e) {
                        return m(void 0, void 0, void 0, function () {
                            return g(this, function (t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, fetch(new Request(e))];
                                    case 1:
                                        return [4, t.sent().arrayBuffer()];
                                    case 2:
                                        return [2, t.sent()];
                                }
                            });
                        });
                    },
                    W = function (e) {
                        return 'string' == typeof e ? [e] : e instanceof Array ? e : [];
                    },
                    Y = {
                        EventManager: N,
                        TaskQueueManager: A
                    },
                    K = function (e) {
                        return new Promise(function (t) {
                            return O.getInstance(function (n) {
                                n.decodeAudio(e, t);
                            });
                        });
                    },
                    z = function (e) {
                        return new Promise(function (t) {
                            return O.getInstance(function (n) {
                                n.decodeImage(e, t);
                            });
                        });
                    },
                    q = function (e) {
                        return new Promise(function (t) {
                            return O.getInstance(function (n) {
                                n.decodeFont(e, t);
                            });
                        });
                    };
            })(),
            r
        );
    })()
);
