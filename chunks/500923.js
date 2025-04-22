'undefined' != typeof navigator &&
    (function (e, t) {
        module.exports = t();
    })(0, function () {
        var svgNS = 'http://www.w3.org/2000/svg',
            locationHref = '',
            _useWebWorker = !1,
            initialDefaultFrame = -999999,
            setWebWorker = function (e) {
                _useWebWorker = !!e;
            },
            getWebWorker = function () {
                return _useWebWorker;
            },
            setLocationHref = function (e) {
                locationHref = e;
            },
            getLocationHref = function () {
                return locationHref;
            };
        function createTag(e) {
            return document.createElement(e);
        }
        function extendPrototype(e, t) {
            var n,
                r,
                i = e.length;
            for (n = 0; n < i; n += 1) for (var a in (r = e[n].prototype)) Object.prototype.hasOwnProperty.call(r, a) && (t.prototype[a] = r[a]);
        }
        function getDescriptor(e, t) {
            return Object.getOwnPropertyDescriptor(e, t);
        }
        function createProxyFunction(e) {
            function t() {}
            return (t.prototype = e), t;
        }
        var audioControllerFactory = (function () {
                function e(e) {
                    (this.audios = []), (this.audioFactory = e), (this._volume = 1), (this._isMuted = !1);
                }
                return (
                    (e.prototype = {
                        addAudio: function (e) {
                            this.audios.push(e);
                        },
                        pause: function () {
                            var e,
                                t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].pause();
                        },
                        resume: function () {
                            var e,
                                t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].resume();
                        },
                        setRate: function (e) {
                            var t,
                                n = this.audios.length;
                            for (t = 0; t < n; t += 1) this.audios[t].setRate(e);
                        },
                        createAudio: function (e) {
                            return this.audioFactory
                                ? this.audioFactory(e)
                                : window.Howl
                                  ? new window.Howl({ src: [e] })
                                  : {
                                        isPlaying: !1,
                                        play: function () {
                                            this.isPlaying = !0;
                                        },
                                        seek: function () {
                                            this.isPlaying = !1;
                                        },
                                        playing: function () {},
                                        rate: function () {},
                                        setVolume: function () {}
                                    };
                        },
                        setAudioFactory: function (e) {
                            this.audioFactory = e;
                        },
                        setVolume: function (e) {
                            (this._volume = e), this._updateVolume();
                        },
                        mute: function () {
                            (this._isMuted = !0), this._updateVolume();
                        },
                        unmute: function () {
                            (this._isMuted = !1), this._updateVolume();
                        },
                        getVolume: function () {
                            return this._volume;
                        },
                        _updateVolume: function () {
                            var e,
                                t = this.audios.length;
                            for (e = 0; e < t; e += 1) this.audios[e].volume(this._volume * +!this._isMuted);
                        }
                    }),
                    function () {
                        return new e();
                    }
                );
            })(),
            createTypedArray = (function () {
                function e(e, t) {
                    var n,
                        r = 0,
                        i = [];
                    switch (e) {
                        case 'int16':
                        case 'uint8c':
                            n = 1;
                            break;
                        default:
                            n = 1.1;
                    }
                    for (r = 0; r < t; r += 1) i.push(n);
                    return i;
                }
                function t(t, n) {
                    return 'float32' === t ? new Float32Array(n) : 'int16' === t ? new Int16Array(n) : 'uint8c' === t ? new Uint8ClampedArray(n) : e(t, n);
                }
                return 'function' == typeof Uint8ClampedArray && 'function' == typeof Float32Array ? t : e;
            })();
        function createSizedArray(e) {
            return Array.apply(null, { length: e });
        }
        function _typeof$6(e) {
            return (_typeof$6 =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        var subframeEnabled = !0,
            expressionsPlugin = null,
            expressionsInterfaces = null,
            idPrefix$1 = '',
            isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
            _shouldRoundValues = !1,
            bmPow = Math.pow,
            bmSqrt = Math.sqrt,
            bmFloor = Math.floor,
            bmMax = Math.max,
            bmMin = Math.min,
            BMMath = {};
        function ProjectInterface$1() {
            return {};
        }
        !(function () {
            var e,
                t = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'],
                n = t.length;
            for (e = 0; e < n; e += 1) BMMath[t[e]] = Math[t[e]];
        })(),
            (BMMath.random = Math.random),
            (BMMath.abs = function (e) {
                if ('object' === _typeof$6(e) && e.length) {
                    var t,
                        n = createSizedArray(e.length),
                        r = e.length;
                    for (t = 0; t < r; t += 1) n[t] = Math.abs(e[t]);
                    return n;
                }
                return Math.abs(e);
            });
        var defaultCurveSegments = 150,
            degToRads = Math.PI / 180,
            roundCorner = 0.5519;
        function roundValues(e) {
            _shouldRoundValues = !!e;
        }
        function bmRnd(e) {
            return _shouldRoundValues ? Math.round(e) : e;
        }
        function styleDiv(e) {
            (e.style.position = 'absolute'), (e.style.top = 0), (e.style.left = 0), (e.style.display = 'block'), (e.style.transformOrigin = '0 0'), (e.style.webkitTransformOrigin = '0 0'), (e.style.backfaceVisibility = 'visible'), (e.style.webkitBackfaceVisibility = 'visible'), (e.style.transformStyle = 'preserve-3d'), (e.style.webkitTransformStyle = 'preserve-3d'), (e.style.mozTransformStyle = 'preserve-3d');
        }
        function BMEnterFrameEvent(e, t, n, r) {
            (this.type = e), (this.currentTime = t), (this.totalTime = n), (this.direction = r < 0 ? -1 : 1);
        }
        function BMCompleteEvent(e, t) {
            (this.type = e), (this.direction = t < 0 ? -1 : 1);
        }
        function BMCompleteLoopEvent(e, t, n, r) {
            (this.type = e), (this.currentLoop = n), (this.totalLoops = t), (this.direction = r < 0 ? -1 : 1);
        }
        function BMSegmentStartEvent(e, t, n) {
            (this.type = e), (this.firstFrame = t), (this.totalFrames = n);
        }
        function BMDestroyEvent(e, t) {
            (this.type = e), (this.target = t);
        }
        function BMRenderFrameErrorEvent(e, t) {
            (this.type = 'renderFrameError'), (this.nativeError = e), (this.currentTime = t);
        }
        function BMConfigErrorEvent(e) {
            (this.type = 'configError'), (this.nativeError = e);
        }
        function BMAnimationConfigErrorEvent(e, t) {
            (this.type = e), (this.nativeError = t);
        }
        var createElementID = (function () {
            var e = 0;
            return function () {
                return (e += 1), idPrefix$1 + '__lottie_element_' + e;
            };
        })();
        function HSVtoRGB(e, t, n) {
            var r, i, a, o, s, l, c, u;
            switch (((o = Math.floor(6 * e)), (s = 6 * e - o), (l = n * (1 - t)), (c = n * (1 - s * t)), (u = n * (1 - (1 - s) * t)), o % 6)) {
                case 0:
                    (r = n), (i = u), (a = l);
                    break;
                case 1:
                    (r = c), (i = n), (a = l);
                    break;
                case 2:
                    (r = l), (i = n), (a = u);
                    break;
                case 3:
                    (r = l), (i = c), (a = n);
                    break;
                case 4:
                    (r = u), (i = l), (a = n);
                    break;
                case 5:
                    (r = n), (i = l), (a = c);
            }
            return [r, i, a];
        }
        function RGBtoHSV(e, t, n) {
            var r,
                i = Math.max(e, t, n),
                a = Math.min(e, t, n),
                o = i - a,
                s = 0 === i ? 0 : o / i,
                l = i / 255;
            switch (i) {
                case a:
                    r = 0;
                    break;
                case e:
                    r = (t - n + 6 * (t < n) * o) / (6 * o);
                    break;
                case t:
                    r = (n - e + 2 * o) / (6 * o);
                    break;
                case n:
                    r = (e - t + 4 * o) / (6 * o);
            }
            return [r, s, l];
        }
        function addSaturationToRGB(e, t) {
            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (n[1] += t), n[1] > 1 ? (n[1] = 1) : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2]);
        }
        function addBrightnessToRGB(e, t) {
            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (n[2] += t), n[2] > 1 ? (n[2] = 1) : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2]);
        }
        function addHueToRGB(e, t) {
            var n = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (n[0] += t / 360), n[0] > 1 ? (n[0] -= 1) : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2]);
        }
        var rgbToHex = (function () {
                var e,
                    t,
                    n = [];
                for (e = 0; e < 256; e += 1) (t = e.toString(16)), (n[e] = 1 === t.length ? '0' + t : t);
                return function (e, t, r) {
                    return e < 0 && (e = 0), t < 0 && (t = 0), r < 0 && (r = 0), '#' + n[e] + n[t] + n[r];
                };
            })(),
            setSubframeEnabled = function (e) {
                subframeEnabled = !!e;
            },
            getSubframeEnabled = function () {
                return subframeEnabled;
            },
            setExpressionsPlugin = function (e) {
                expressionsPlugin = e;
            },
            getExpressionsPlugin = function () {
                return expressionsPlugin;
            },
            setExpressionInterfaces = function (e) {
                expressionsInterfaces = e;
            },
            getExpressionInterfaces = function () {
                return expressionsInterfaces;
            },
            setDefaultCurveSegments = function (e) {
                defaultCurveSegments = e;
            },
            getDefaultCurveSegments = function () {
                return defaultCurveSegments;
            },
            setIdPrefix = function (e) {
                idPrefix$1 = e;
            },
            getIdPrefix = function () {
                return idPrefix$1;
            };
        function createNS(e) {
            return document.createElementNS(svgNS, e);
        }
        function _typeof$5(e) {
            return (_typeof$5 =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        var dataManager = (function () {
                var e,
                    t,
                    n = 1,
                    r = [],
                    i = {
                        onmessage: function () {},
                        postMessage: function (t) {
                            e({ data: t });
                        }
                    },
                    a = {
                        postMessage: function (e) {
                            i.onmessage({ data: e });
                        }
                    };
                function o(t) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var n = new Blob(['var _workerSelf = self; self.onmessage = ', t.toString()], { type: 'text/javascript' });
                        return new Worker(URL.createObjectURL(n));
                    }
                    return (e = t), i;
                }
                function s() {
                    t ||
                        ((t = o(function (e) {
                            function t() {
                                function e(t, n) {
                                    var o,
                                        s,
                                        l,
                                        c,
                                        u,
                                        d,
                                        _ = t.length;
                                    for (s = 0; s < _; s += 1)
                                        if ('ks' in (o = t[s]) && !o.completed) {
                                            if (((o.completed = !0), o.hasMask)) {
                                                var p = o.masksProperties;
                                                for (l = 0, c = p.length; l < c; l += 1)
                                                    if (p[l].pt.k.i) a(p[l].pt.k);
                                                    else for (u = 0, d = p[l].pt.k.length; u < d; u += 1) p[l].pt.k[u].s && a(p[l].pt.k[u].s[0]), p[l].pt.k[u].e && a(p[l].pt.k[u].e[0]);
                                            }
                                            0 === o.ty ? ((o.layers = r(o.refId, n)), e(o.layers, n)) : 4 === o.ty ? i(o.shapes) : 5 === o.ty && f(o);
                                        }
                                }
                                function t(t, n) {
                                    if (t) {
                                        var i = 0,
                                            a = t.length;
                                        for (i = 0; i < a; i += 1) 1 === t[i].t && ((t[i].data.layers = r(t[i].data.refId, n)), e(t[i].data.layers, n));
                                    }
                                }
                                function n(e, t) {
                                    for (var n = 0, r = t.length; n < r; ) {
                                        if (t[n].id === e) return t[n];
                                        n += 1;
                                    }
                                    return null;
                                }
                                function r(e, t) {
                                    var r = n(e, t);
                                    return r ? (r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : ((r.layers.__used = !0), r.layers)) : null;
                                }
                                function i(e) {
                                    var t, n, r;
                                    for (t = e.length - 1; t >= 0; t -= 1)
                                        if ('sh' === e[t].ty)
                                            if (e[t].ks.k.i) a(e[t].ks.k);
                                            else for (n = 0, r = e[t].ks.k.length; n < r; n += 1) e[t].ks.k[n].s && a(e[t].ks.k[n].s[0]), e[t].ks.k[n].e && a(e[t].ks.k[n].e[0]);
                                        else 'gr' === e[t].ty && i(e[t].it);
                                }
                                function a(e) {
                                    var t,
                                        n = e.i.length;
                                    for (t = 0; t < n; t += 1) (e.i[t][0] += e.v[t][0]), (e.i[t][1] += e.v[t][1]), (e.o[t][0] += e.v[t][0]), (e.o[t][1] += e.v[t][1]);
                                }
                                function o(e, t) {
                                    var n = t ? t.split('.') : [100, 100, 100];
                                    return e[0] > n[0] || (!(n[0] > e[0]) && (e[1] > n[1] || (!(n[1] > e[1]) && (e[2] > n[2] || (!(n[2] > e[2]) && null)))));
                                }
                                var s = (function () {
                                        var e = [4, 4, 14];
                                        function t(e) {
                                            var t = e.t.d;
                                            e.t.d = {
                                                k: [
                                                    {
                                                        s: t,
                                                        t: 0
                                                    }
                                                ]
                                            };
                                        }
                                        function n(e) {
                                            var n,
                                                r = e.length;
                                            for (n = 0; n < r; n += 1) 5 === e[n].ty && t(e[n]);
                                        }
                                        return function (t) {
                                            if (o(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })(),
                                    l = (function () {
                                        var e = [4, 7, 99];
                                        return function (t) {
                                            if (t.chars && !o(e, t.v)) {
                                                var n,
                                                    r = t.chars.length;
                                                for (n = 0; n < r; n += 1) {
                                                    var a = t.chars[n];
                                                    a.data &&
                                                        a.data.shapes &&
                                                        (i(a.data.shapes),
                                                        (a.data.ip = 0),
                                                        (a.data.op = 99999),
                                                        (a.data.st = 0),
                                                        (a.data.sr = 1),
                                                        (a.data.ks = {
                                                            p: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            s: {
                                                                k: [100, 100],
                                                                a: 0
                                                            },
                                                            a: {
                                                                k: [0, 0],
                                                                a: 0
                                                            },
                                                            r: {
                                                                k: 0,
                                                                a: 0
                                                            },
                                                            o: {
                                                                k: 100,
                                                                a: 0
                                                            }
                                                        }),
                                                        t.chars[n].t ||
                                                            (a.data.shapes.push({ ty: 'no' }),
                                                            a.data.shapes[0].it.push({
                                                                p: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                s: {
                                                                    k: [100, 100],
                                                                    a: 0
                                                                },
                                                                a: {
                                                                    k: [0, 0],
                                                                    a: 0
                                                                },
                                                                r: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                o: {
                                                                    k: 100,
                                                                    a: 0
                                                                },
                                                                sk: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                sa: {
                                                                    k: 0,
                                                                    a: 0
                                                                },
                                                                ty: 'tr'
                                                            })));
                                                }
                                            }
                                        };
                                    })(),
                                    c = (function () {
                                        var e = [5, 7, 15];
                                        function t(e) {
                                            var t = e.t.p;
                                            'number' == typeof t.a &&
                                                (t.a = {
                                                    a: 0,
                                                    k: t.a
                                                }),
                                                'number' == typeof t.p &&
                                                    (t.p = {
                                                        a: 0,
                                                        k: t.p
                                                    }),
                                                'number' == typeof t.r &&
                                                    (t.r = {
                                                        a: 0,
                                                        k: t.r
                                                    });
                                        }
                                        function n(e) {
                                            var n,
                                                r = e.length;
                                            for (n = 0; n < r; n += 1) 5 === e[n].ty && t(e[n]);
                                        }
                                        return function (t) {
                                            if (o(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })(),
                                    u = (function () {
                                        var e = [4, 1, 9];
                                        function t(e) {
                                            var n,
                                                r,
                                                i,
                                                a = e.length;
                                            for (n = 0; n < a; n += 1)
                                                if ('gr' === e[n].ty) t(e[n].it);
                                                else if ('fl' === e[n].ty || 'st' === e[n].ty)
                                                    if (e[n].c.k && e[n].c.k[0].i) for (r = 0, i = e[n].c.k.length; r < i; r += 1) e[n].c.k[r].s && ((e[n].c.k[r].s[0] /= 255), (e[n].c.k[r].s[1] /= 255), (e[n].c.k[r].s[2] /= 255), (e[n].c.k[r].s[3] /= 255)), e[n].c.k[r].e && ((e[n].c.k[r].e[0] /= 255), (e[n].c.k[r].e[1] /= 255), (e[n].c.k[r].e[2] /= 255), (e[n].c.k[r].e[3] /= 255));
                                                    else (e[n].c.k[0] /= 255), (e[n].c.k[1] /= 255), (e[n].c.k[2] /= 255), (e[n].c.k[3] /= 255);
                                        }
                                        function n(e) {
                                            var n,
                                                r = e.length;
                                            for (n = 0; n < r; n += 1) 4 === e[n].ty && t(e[n].shapes);
                                        }
                                        return function (t) {
                                            if (o(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })(),
                                    d = (function () {
                                        var e = [4, 4, 18];
                                        function t(e) {
                                            var n, r, i;
                                            for (n = e.length - 1; n >= 0; n -= 1)
                                                if ('sh' === e[n].ty)
                                                    if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
                                                    else for (r = 0, i = e[n].ks.k.length; r < i; r += 1) e[n].ks.k[r].s && (e[n].ks.k[r].s[0].c = e[n].closed), e[n].ks.k[r].e && (e[n].ks.k[r].e[0].c = e[n].closed);
                                                else 'gr' === e[n].ty && t(e[n].it);
                                        }
                                        function n(e) {
                                            var n,
                                                r,
                                                i,
                                                a,
                                                o,
                                                s,
                                                l = e.length;
                                            for (r = 0; r < l; r += 1) {
                                                if ((n = e[r]).hasMask) {
                                                    var c = n.masksProperties;
                                                    for (i = 0, a = c.length; i < a; i += 1)
                                                        if (c[i].pt.k.i) c[i].pt.k.c = c[i].cl;
                                                        else for (o = 0, s = c[i].pt.k.length; o < s; o += 1) c[i].pt.k[o].s && (c[i].pt.k[o].s[0].c = c[i].cl), c[i].pt.k[o].e && (c[i].pt.k[o].e[0].c = c[i].cl);
                                                }
                                                4 === n.ty && t(n.shapes);
                                            }
                                        }
                                        return function (t) {
                                            if (o(e, t.v) && (n(t.layers), t.assets)) {
                                                var r,
                                                    i = t.assets.length;
                                                for (r = 0; r < i; r += 1) t.assets[r].layers && n(t.assets[r].layers);
                                            }
                                        };
                                    })();
                                function f(e) {
                                    0 === e.t.a.length && e.t.p;
                                }
                                var _ = {};
                                return (
                                    (_.completeData = function (n) {
                                        n.__complete || (u(n), s(n), l(n), c(n), d(n), e(n.layers, n.assets), t(n.chars, n.assets), (n.__complete = !0));
                                    }),
                                    (_.checkColors = u),
                                    (_.checkChars = l),
                                    (_.checkPathProperties = c),
                                    (_.checkShapes = d),
                                    (_.completeLayers = e),
                                    _
                                );
                            }
                            if (
                                (a.dataManager || (a.dataManager = t()),
                                a.assetLoader ||
                                    (a.assetLoader = (function () {
                                        function e(e) {
                                            var t = e.getResponseHeader('content-type');
                                            return (t && 'json' === e.responseType && -1 !== t.indexOf('json')) || (e.response && 'object' === _typeof$5(e.response)) ? e.response : e.response && 'string' == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : null;
                                        }
                                        return {
                                            load: function (t, n, r, i) {
                                                var a,
                                                    o = new XMLHttpRequest();
                                                try {
                                                    o.responseType = 'json';
                                                } catch (e) {}
                                                o.onreadystatechange = function () {
                                                    if (4 === o.readyState)
                                                        if (200 === o.status) r((a = e(o)));
                                                        else
                                                            try {
                                                                (a = e(o)), r(a);
                                                            } catch (e) {
                                                                i && i(e);
                                                            }
                                                };
                                                try {
                                                    o.open('GET', t, !0);
                                                } catch (e) {
                                                    o.open('GET', n + '/' + t, !0);
                                                }
                                                o.send();
                                            }
                                        };
                                    })()),
                                'loadAnimation' === e.data.type)
                            )
                                a.assetLoader.load(
                                    e.data.path,
                                    e.data.fullPath,
                                    function (t) {
                                        a.dataManager.completeData(t),
                                            a.postMessage({
                                                id: e.data.id,
                                                payload: t,
                                                status: 'success'
                                            });
                                    },
                                    function () {
                                        a.postMessage({
                                            id: e.data.id,
                                            status: 'error'
                                        });
                                    }
                                );
                            else if ('complete' === e.data.type) {
                                var n = e.data.animation;
                                a.dataManager.completeData(n),
                                    a.postMessage({
                                        id: e.data.id,
                                        payload: n,
                                        status: 'success'
                                    });
                            } else
                                'loadData' === e.data.type &&
                                    a.assetLoader.load(
                                        e.data.path,
                                        e.data.fullPath,
                                        function (t) {
                                            a.postMessage({
                                                id: e.data.id,
                                                payload: t,
                                                status: 'success'
                                            });
                                        },
                                        function () {
                                            a.postMessage({
                                                id: e.data.id,
                                                status: 'error'
                                            });
                                        }
                                    );
                        })).onmessage = function (e) {
                            var t = e.data,
                                n = t.id,
                                i = r[n];
                            (r[n] = null), 'success' === t.status ? i.onComplete(t.payload) : i.onError && i.onError();
                        });
                }
                function l(e, t) {
                    var i = 'processId_' + (n += 1);
                    return (
                        (r[i] = {
                            onComplete: e,
                            onError: t
                        }),
                        i
                    );
                }
                return {
                    loadAnimation: function (e, n, r) {
                        s();
                        var i = l(n, r);
                        t.postMessage({
                            type: 'loadAnimation',
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: i
                        });
                    },
                    loadData: function (e, n, r) {
                        s();
                        var i = l(n, r);
                        t.postMessage({
                            type: 'loadData',
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: i
                        });
                    },
                    completeAnimation: function (e, n, r) {
                        s();
                        var i = l(n, r);
                        t.postMessage({
                            type: 'complete',
                            animation: e,
                            id: i
                        });
                    }
                };
            })(),
            ImagePreloader = (function () {
                var e = (function () {
                    var e = createTag('canvas');
                    (e.width = 1), (e.height = 1);
                    var t = e.getContext('2d');
                    return (t.fillStyle = 'rgba(0,0,0,0)'), t.fillRect(0, 0, 1, 1), e;
                })();
                function t() {
                    (this.loadedAssets += 1), this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                }
                function n() {
                    (this.loadedFootagesCount += 1), this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                }
                function r(e, t, n) {
                    var r = '';
                    if (e.e) r = e.p;
                    else if (t) {
                        var i = e.p;
                        -1 !== i.indexOf('images/') && (i = i.split('/')[1]), (r = t + i);
                    } else r = n + (e.u ? e.u : '') + e.p;
                    return r;
                }
                function i(e) {
                    var t = 0,
                        n = setInterval(
                            function () {
                                (e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(n)), (t += 1);
                            }.bind(this),
                            50
                        );
                }
                function a(e) {
                    var t = { assetData: e },
                        n = r(e, this.assetsPath, this.path);
                    return (
                        dataManager.loadData(
                            n,
                            function (e) {
                                (t.img = e), this._footageLoaded();
                            }.bind(this),
                            function () {
                                (t.img = {}), this._footageLoaded();
                            }.bind(this)
                        ),
                        t
                    );
                }
                function o() {
                    (this._imageLoaded = t.bind(this)), (this._footageLoaded = n.bind(this)), (this.testImageLoaded = i.bind(this)), (this.createFootageData = a.bind(this)), (this.assetsPath = ''), (this.path = ''), (this.totalImages = 0), (this.totalFootages = 0), (this.loadedAssets = 0), (this.loadedFootagesCount = 0), (this.imagesLoadedCb = null), (this.images = []);
                }
                return (
                    (o.prototype = {
                        loadAssets: function (e, t) {
                            this.imagesLoadedCb = t;
                            var n,
                                r = e.length;
                            for (n = 0; n < r; n += 1) e[n].layers || (e[n].t && 'seq' !== e[n].t ? 3 === e[n].t && ((this.totalFootages += 1), this.images.push(this.createFootageData(e[n]))) : ((this.totalImages += 1), this.images.push(this._createImageData(e[n]))));
                        },
                        setAssetsPath: function (e) {
                            this.assetsPath = e || '';
                        },
                        setPath: function (e) {
                            this.path = e || '';
                        },
                        loadedImages: function () {
                            return this.totalImages === this.loadedAssets;
                        },
                        loadedFootages: function () {
                            return this.totalFootages === this.loadedFootagesCount;
                        },
                        destroy: function () {
                            (this.imagesLoadedCb = null), (this.images.length = 0);
                        },
                        getAsset: function (e) {
                            for (var t = 0, n = this.images.length; t < n; ) {
                                if (this.images[t].assetData === e) return this.images[t].img;
                                t += 1;
                            }
                            return null;
                        },
                        createImgData: function (t) {
                            var n = r(t, this.assetsPath, this.path),
                                i = createTag('img');
                            (i.crossOrigin = 'anonymous'),
                                i.addEventListener('load', this._imageLoaded, !1),
                                i.addEventListener(
                                    'error',
                                    function () {
                                        (a.img = e), this._imageLoaded();
                                    }.bind(this),
                                    !1
                                ),
                                (i.src = n);
                            var a = {
                                img: i,
                                assetData: t
                            };
                            return a;
                        },
                        createImageData: function (t) {
                            var n = r(t, this.assetsPath, this.path),
                                i = createNS('image');
                            isSafari ? this.testImageLoaded(i) : i.addEventListener('load', this._imageLoaded, !1),
                                i.addEventListener(
                                    'error',
                                    function () {
                                        (a.img = e), this._imageLoaded();
                                    }.bind(this),
                                    !1
                                ),
                                i.setAttributeNS('http://www.w3.org/1999/xlink', 'href', n),
                                this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                            var a = {
                                img: i,
                                assetData: t
                            };
                            return a;
                        },
                        imageLoaded: t,
                        footageLoaded: n,
                        setCacheType: function (e, t) {
                            'svg' === e ? ((this._elementHelper = t), (this._createImageData = this.createImageData.bind(this))) : (this._createImageData = this.createImgData.bind(this));
                        }
                    }),
                    o
                );
            })();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function (e, t) {
                if (this._cbs[e]) for (var n = this._cbs[e], r = 0; r < n.length; r += 1) n[r](t);
            },
            addEventListener: function (e, t) {
                return (
                    this._cbs[e] || (this._cbs[e] = []),
                    this._cbs[e].push(t),
                    function () {
                        this.removeEventListener(e, t);
                    }.bind(this)
                );
            },
            removeEventListener: function (e, t) {
                if (t) {
                    if (this._cbs[e]) {
                        for (var n = 0, r = this._cbs[e].length; n < r; ) this._cbs[e][n] === t && (this._cbs[e].splice(n, 1), (n -= 1), (r -= 1)), (n += 1);
                        this._cbs[e].length || (this._cbs[e] = null);
                    }
                } else this._cbs[e] = null;
            }
        };
        var markerParser = (function () {
                function e(e) {
                    for (var t, n = e.split('\r\n'), r = {}, i = 0, a = 0; a < n.length; a += 1) 2 === (t = n[a].split(':')).length && ((r[t[0]] = t[1].trim()), (i += 1));
                    if (0 === i) throw Error();
                    return r;
                }
                return function (t) {
                    for (var n = [], r = 0; r < t.length; r += 1) {
                        var i = t[r],
                            a = {
                                time: i.tm,
                                duration: i.dr
                            };
                        try {
                            a.payload = JSON.parse(t[r].cm);
                        } catch (n) {
                            try {
                                a.payload = e(t[r].cm);
                            } catch (e) {
                                a.payload = { name: t[r].cm };
                            }
                        }
                        n.push(a);
                    }
                    return n;
                };
            })(),
            ProjectInterface = (function () {
                function e(e) {
                    this.compositions.push(e);
                }
                return function () {
                    function t(e) {
                        for (var t = 0, n = this.compositions.length; t < n; ) {
                            if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
                            t += 1;
                        }
                        return null;
                    }
                    return (t.compositions = []), (t.currentFrame = 0), (t.registerComposition = e), t;
                };
            })(),
            renderers = {},
            registerRenderer = function (e, t) {
                renderers[e] = t;
            };
        function getRenderer(e) {
            return renderers[e];
        }
        function getRegisteredRenderer() {
            if (renderers.canvas) return 'canvas';
            for (var e in renderers) if (renderers[e]) return e;
            return '';
        }
        function _typeof$4(e) {
            return (_typeof$4 =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        var AnimationItem = function () {
            (this._cbs = []), (this.name = ''), (this.path = ''), (this.isLoaded = !1), (this.currentFrame = 0), (this.currentRawFrame = 0), (this.firstFrame = 0), (this.totalFrames = 0), (this.frameRate = 0), (this.frameMult = 0), (this.playSpeed = 1), (this.playDirection = 1), (this.playCount = 0), (this.animationData = {}), (this.assets = []), (this.isPaused = !0), (this.autoplay = !1), (this.loop = !0), (this.renderer = null), (this.animationID = createElementID()), (this.assetsPath = ''), (this.timeCompleted = 0), (this.segmentPos = 0), (this.isSubframeEnabled = getSubframeEnabled()), (this.segments = []), (this._idle = !0), (this._completedLoop = !1), (this.projectInterface = ProjectInterface()), (this.imagePreloader = new ImagePreloader()), (this.audioController = audioControllerFactory()), (this.markers = []), (this.configAnimation = this.configAnimation.bind(this)), (this.onSetupError = this.onSetupError.bind(this)), (this.onSegmentComplete = this.onSegmentComplete.bind(this)), (this.drawnFrameEvent = new BMEnterFrameEvent('drawnFrame', 0, 0, 0)), (this.expressionsPlugin = getExpressionsPlugin());
        };
        extendPrototype([BaseEvent], AnimationItem),
            (AnimationItem.prototype.setParams = function (e) {
                (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
                var t = 'svg';
                e.animType ? (t = e.animType) : e.renderer && (t = e.renderer);
                var n = getRenderer(t);
                (this.renderer = new n(this, e.rendererSettings)), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), (this.animType = t), '' === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop ? (this.loop = !0) : !1 === e.loop ? (this.loop = !1) : (this.loop = parseInt(e.loop, 10)), (this.autoplay = !('autoplay' in e) || e.autoplay), (this.name = e.name ? e.name : ''), (this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, 'autoloadSegments') || e.autoloadSegments), (this.assetsPath = e.assetsPath), (this.initialSegment = e.initialSegment), e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (-1 !== e.path.lastIndexOf('\\') ? (this.path = e.path.substr(0, e.path.lastIndexOf('\\') + 1)) : (this.path = e.path.substr(0, e.path.lastIndexOf('/') + 1)), (this.fileName = e.path.substr(e.path.lastIndexOf('/') + 1)), (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'))), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError));
            }),
            (AnimationItem.prototype.onSetupError = function () {
                this.trigger('data_failed');
            }),
            (AnimationItem.prototype.setupAnimation = function (e) {
                dataManager.completeAnimation(e, this.configAnimation);
            }),
            (AnimationItem.prototype.setData = function (e, t) {
                t && 'object' !== _typeof$4(t) && (t = JSON.parse(t));
                var n = {
                        wrapper: e,
                        animationData: t
                    },
                    r = e.attributes;
                (n.path = r.getNamedItem('data-animation-path') ? r.getNamedItem('data-animation-path').value : r.getNamedItem('data-bm-path') ? r.getNamedItem('data-bm-path').value : r.getNamedItem('bm-path') ? r.getNamedItem('bm-path').value : ''), (n.animType = r.getNamedItem('data-anim-type') ? r.getNamedItem('data-anim-type').value : r.getNamedItem('data-bm-type') ? r.getNamedItem('data-bm-type').value : r.getNamedItem('bm-type') ? r.getNamedItem('bm-type').value : r.getNamedItem('data-bm-renderer') ? r.getNamedItem('data-bm-renderer').value : r.getNamedItem('bm-renderer') ? r.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas');
                var i = r.getNamedItem('data-anim-loop') ? r.getNamedItem('data-anim-loop').value : r.getNamedItem('data-bm-loop') ? r.getNamedItem('data-bm-loop').value : r.getNamedItem('bm-loop') ? r.getNamedItem('bm-loop').value : '';
                'false' === i ? (n.loop = !1) : 'true' === i ? (n.loop = !0) : '' !== i && (n.loop = parseInt(i, 10)), (n.autoplay = 'false' !== (r.getNamedItem('data-anim-autoplay') ? r.getNamedItem('data-anim-autoplay').value : r.getNamedItem('data-bm-autoplay') ? r.getNamedItem('data-bm-autoplay').value : !r.getNamedItem('bm-autoplay') || r.getNamedItem('bm-autoplay').value)), (n.name = r.getNamedItem('data-name') ? r.getNamedItem('data-name').value : r.getNamedItem('data-bm-name') ? r.getNamedItem('data-bm-name').value : r.getNamedItem('bm-name') ? r.getNamedItem('bm-name').value : ''), 'false' === (r.getNamedItem('data-anim-prerender') ? r.getNamedItem('data-anim-prerender').value : r.getNamedItem('data-bm-prerender') ? r.getNamedItem('data-bm-prerender').value : r.getNamedItem('bm-prerender') ? r.getNamedItem('bm-prerender').value : '') && (n.prerender = !1), n.path ? this.setParams(n) : this.trigger('destroy');
            }),
            (AnimationItem.prototype.includeLayers = function (e) {
                e.op > this.animationData.op && ((this.animationData.op = e.op), (this.totalFrames = Math.floor(e.op - this.animationData.ip)));
                var t,
                    n,
                    r = this.animationData.layers,
                    i = r.length,
                    a = e.layers,
                    o = a.length;
                for (n = 0; n < o; n += 1)
                    for (t = 0; t < i; ) {
                        if (r[t].id === a[n].id) {
                            r[t] = a[n];
                            break;
                        }
                        t += 1;
                    }
                if (((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)) for (t = 0, i = e.assets.length; t < i; t += 1) this.animationData.assets.push(e.assets[t]);
                (this.animationData.__complete = !1), dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
            }),
            (AnimationItem.prototype.onSegmentComplete = function (e) {
                this.animationData = e;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.loadNextSegment();
            }),
            (AnimationItem.prototype.loadNextSegment = function () {
                var e = this.animationData.segments;
                if (!e || 0 === e.length || !this.autoloadSegments) {
                    this.trigger('data_ready'), (this.timeCompleted = this.totalFrames);
                    return;
                }
                var t = e.shift();
                this.timeCompleted = t.time * this.frameRate;
                var n = this.path + this.fileName + '_' + this.segmentPos + '.json';
                (this.segmentPos += 1),
                    dataManager.loadData(
                        n,
                        this.includeLayers.bind(this),
                        function () {
                            this.trigger('data_failed');
                        }.bind(this)
                    );
            }),
            (AnimationItem.prototype.loadSegments = function () {
                this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
            }),
            (AnimationItem.prototype.imagesLoaded = function () {
                this.trigger('loaded_images'), this.checkLoaded();
            }),
            (AnimationItem.prototype.preloadImages = function () {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
            }),
            (AnimationItem.prototype.configAnimation = function (e) {
                if (this.renderer)
                    try {
                        (this.animationData = e), this.initialSegment ? ((this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0])), (this.firstFrame = Math.round(this.initialSegment[0]))) : ((this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip)), (this.firstFrame = Math.round(this.animationData.ip))), this.renderer.configAnimation(e), e.assets || (e.assets = []), (this.assets = this.animationData.assets), (this.frameRate = this.animationData.fr), (this.frameMult = this.animationData.fr / 1000), this.renderer.searchExtraCompositions(e.assets), (this.markers = markerParser(e.markers || [])), this.trigger('config_ready'), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
                    } catch (e) {
                        this.triggerConfigError(e);
                    }
            }),
            (AnimationItem.prototype.waitForFontsLoaded = function () {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }),
            (AnimationItem.prototype.checkLoaded = function () {
                if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || 'canvas' !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                    this.isLoaded = !0;
                    var e = getExpressionsPlugin();
                    e && e.initExpressions(this),
                        this.renderer.initItems(),
                        setTimeout(
                            function () {
                                this.trigger('DOMLoaded');
                            }.bind(this),
                            0
                        ),
                        this.gotoFrame(),
                        this.autoplay && this.play();
                }
            }),
            (AnimationItem.prototype.resize = function (e, t) {
                var n = 'number' == typeof e ? e : void 0,
                    r = 'number' == typeof t ? t : void 0;
                this.renderer.updateContainerSize(n, r);
            }),
            (AnimationItem.prototype.setSubframe = function (e) {
                this.isSubframeEnabled = !!e;
            }),
            (AnimationItem.prototype.gotoFrame = function () {
                (this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger('enterFrame'), this.renderFrame(), this.trigger('drawnFrame');
            }),
            (AnimationItem.prototype.renderFrame = function () {
                if (!1 !== this.isLoaded && this.renderer)
                    try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                    } catch (e) {
                        this.triggerRenderFrameError(e);
                    }
            }),
            (AnimationItem.prototype.play = function (e) {
                (!e || this.name === e) && !0 === this.isPaused && ((this.isPaused = !1), this.trigger('_play'), this.audioController.resume(), this._idle && ((this._idle = !1), this.trigger('_active')));
            }),
            (AnimationItem.prototype.pause = function (e) {
                (e && this.name !== e) || (!1 === this.isPaused && ((this.isPaused = !0), this.trigger('_pause'), (this._idle = !0), this.trigger('_idle'), this.audioController.pause()));
            }),
            (AnimationItem.prototype.togglePause = function (e) {
                (e && this.name !== e) || (!0 === this.isPaused ? this.play() : this.pause());
            }),
            (AnimationItem.prototype.stop = function (e) {
                (e && this.name !== e) || (this.pause(), (this.playCount = 0), (this._completedLoop = !1), this.setCurrentRawFrameValue(0));
            }),
            (AnimationItem.prototype.getMarkerData = function (e) {
                for (var t, n = 0; n < this.markers.length; n += 1) if ((t = this.markers[n]).payload && t.payload.name === e) return t;
                return null;
            }),
            (AnimationItem.prototype.goToAndStop = function (e, t, n) {
                if (!n || this.name === n) {
                    var r = Number(e);
                    if (isNaN(r)) {
                        var i = this.getMarkerData(e);
                        i && this.goToAndStop(i.time, !0);
                    } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
                    this.pause();
                }
            }),
            (AnimationItem.prototype.goToAndPlay = function (e, t, n) {
                if (!n || this.name === n) {
                    var r = Number(e);
                    if (isNaN(r)) {
                        var i = this.getMarkerData(e);
                        i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0));
                    } else this.goToAndStop(r, t, n);
                    this.play();
                }
            }),
            (AnimationItem.prototype.advanceTime = function (e) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var t = this.currentRawFrame + e * this.frameModifier,
                        n = !1;
                    t >= this.totalFrames - 1 && this.frameModifier > 0 ? (this.loop && this.playCount !== this.loop ? (t >= this.totalFrames ? ((this.playCount += 1), this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), (this._completedLoop = !0), this.trigger('loopComplete'))) : this.setCurrentRawFrameValue(t)) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || ((n = !0), (t = this.totalFrames - 1))) : t < 0 ? this.checkSegments(t % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + (t % this.totalFrames)), this._completedLoop ? this.trigger('loopComplete') : (this._completedLoop = !0)) : ((n = !0), (t = 0))) : this.setCurrentRawFrameValue(t), n && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger('complete'));
                }
            }),
            (AnimationItem.prototype.adjustSegment = function (e, t) {
                (this.playCount = 0), e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), (this.totalFrames = e[0] - e[1]), (this.timeCompleted = this.totalFrames), (this.firstFrame = e[1]), this.setCurrentRawFrameValue(this.totalFrames - 0.001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), (this.totalFrames = e[1] - e[0]), (this.timeCompleted = this.totalFrames), (this.firstFrame = e[0]), this.setCurrentRawFrameValue(0.001 + t)), this.trigger('segmentStart');
            }),
            (AnimationItem.prototype.setSegment = function (e, t) {
                var n = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < e ? (n = e) : this.currentRawFrame + this.firstFrame > t && (n = t - e)), (this.firstFrame = e), (this.totalFrames = t - e), (this.timeCompleted = this.totalFrames), -1 !== n && this.goToAndStop(n, !0);
            }),
            (AnimationItem.prototype.playSegments = function (e, t) {
                if ((t && (this.segments.length = 0), 'object' === _typeof$4(e[0]))) {
                    var n,
                        r = e.length;
                    for (n = 0; n < r; n += 1) this.segments.push(e[n]);
                } else this.segments.push(e);
                this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
            }),
            (AnimationItem.prototype.resetSegments = function (e) {
                (this.segments.length = 0), this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0);
            }),
            (AnimationItem.prototype.checkSegments = function (e) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0);
            }),
            (AnimationItem.prototype.destroy = function (e) {
                (!e || this.name === e) && this.renderer && (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger('destroy'), (this._cbs = null), (this.onEnterFrame = null), (this.onLoopComplete = null), (this.onComplete = null), (this.onSegmentStart = null), (this.onDestroy = null), (this.renderer = null), (this.expressionsPlugin = null), (this.imagePreloader = null), (this.projectInterface = null));
            }),
            (AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
                (this.currentRawFrame = e), this.gotoFrame();
            }),
            (AnimationItem.prototype.setSpeed = function (e) {
                (this.playSpeed = e), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setDirection = function (e) {
                (this.playDirection = e < 0 ? -1 : 1), this.updaFrameModifier();
            }),
            (AnimationItem.prototype.setLoop = function (e) {
                this.loop = e;
            }),
            (AnimationItem.prototype.setVolume = function (e, t) {
                (t && this.name !== t) || this.audioController.setVolume(e);
            }),
            (AnimationItem.prototype.getVolume = function () {
                return this.audioController.getVolume();
            }),
            (AnimationItem.prototype.mute = function (e) {
                (e && this.name !== e) || this.audioController.mute();
            }),
            (AnimationItem.prototype.unmute = function (e) {
                (e && this.name !== e) || this.audioController.unmute();
            }),
            (AnimationItem.prototype.updaFrameModifier = function () {
                (this.frameModifier = this.frameMult * this.playSpeed * this.playDirection), this.audioController.setRate(this.playSpeed * this.playDirection);
            }),
            (AnimationItem.prototype.getPath = function () {
                return this.path;
            }),
            (AnimationItem.prototype.getAssetsPath = function (e) {
                var t = '';
                if (e.e) t = e.p;
                else if (this.assetsPath) {
                    var n = e.p;
                    -1 !== n.indexOf('images/') && (n = n.split('/')[1]), (t = this.assetsPath + n);
                } else t = this.path + (e.u ? e.u : '') + e.p;
                return t;
            }),
            (AnimationItem.prototype.getAssetData = function (e) {
                for (var t = 0, n = this.assets.length; t < n; ) {
                    if (e === this.assets[t].id) return this.assets[t];
                    t += 1;
                }
                return null;
            }),
            (AnimationItem.prototype.hide = function () {
                this.renderer.hide();
            }),
            (AnimationItem.prototype.show = function () {
                this.renderer.show();
            }),
            (AnimationItem.prototype.getDuration = function (e) {
                return e ? this.totalFrames : this.totalFrames / this.frameRate;
            }),
            (AnimationItem.prototype.updateDocumentData = function (e, t, n) {
                try {
                    this.renderer.getElementByPath(e).updateDocumentData(t, n);
                } catch (e) {}
            }),
            (AnimationItem.prototype.trigger = function (e) {
                if (this._cbs && this._cbs[e])
                    switch (e) {
                        case 'enterFrame':
                            this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case 'drawnFrame':
                            (this.drawnFrameEvent.currentTime = this.currentFrame), (this.drawnFrameEvent.totalTime = this.totalFrames), (this.drawnFrameEvent.direction = this.frameModifier), this.triggerEvent(e, this.drawnFrameEvent);
                            break;
                        case 'loopComplete':
                            this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
                            break;
                        case 'complete':
                            this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                            break;
                        case 'segmentStart':
                            this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
                            break;
                        case 'destroy':
                            this.triggerEvent(e, new BMDestroyEvent(e, this));
                            break;
                        default:
                            this.triggerEvent(e);
                    }
                'enterFrame' === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), 'loopComplete' === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), 'complete' === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), 'segmentStart' === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), 'destroy' === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this));
            }),
            (AnimationItem.prototype.triggerRenderFrameError = function (e) {
                var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
                this.triggerEvent('error', t), this.onError && this.onError.call(this, t);
            }),
            (AnimationItem.prototype.triggerConfigError = function (e) {
                var t = new BMConfigErrorEvent(e, this.currentFrame);
                this.triggerEvent('error', t), this.onError && this.onError.call(this, t);
            });
        var animationManager = (function () {
                var e = {},
                    t = [],
                    n = 0,
                    r = 0,
                    i = 0,
                    a = !0,
                    o = !1;
                function s(e) {
                    for (var n = 0, i = e.target; n < r; ) t[n].animation === i && (t.splice(n, 1), (n -= 1), (r -= 1), i.isPaused || d()), (n += 1);
                }
                function l(e, n) {
                    if (!e) return null;
                    for (var i = 0; i < r; ) {
                        if (t[i].elem === e && null !== t[i].elem) return t[i].animation;
                        i += 1;
                    }
                    var a = new AnimationItem();
                    return f(a, e), a.setData(e, n), a;
                }
                function c() {
                    var e,
                        n = t.length,
                        r = [];
                    for (e = 0; e < n; e += 1) r.push(t[e].animation);
                    return r;
                }
                function u() {
                    (i += 1), A();
                }
                function d() {
                    i -= 1;
                }
                function f(e, n) {
                    e.addEventListener('destroy', s),
                        e.addEventListener('_active', u),
                        e.addEventListener('_idle', d),
                        t.push({
                            elem: n,
                            animation: e
                        }),
                        (r += 1);
                }
                function _(e) {
                    var t = new AnimationItem();
                    return f(t, null), t.setParams(e), t;
                }
                function p(e, n) {
                    var i;
                    for (i = 0; i < r; i += 1) t[i].animation.setSpeed(e, n);
                }
                function h(e, n) {
                    var i;
                    for (i = 0; i < r; i += 1) t[i].animation.setDirection(e, n);
                }
                function m(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.play(e);
                }
                function g(e) {
                    var s,
                        l = e - n;
                    for (s = 0; s < r; s += 1) t[s].animation.advanceTime(l);
                    (n = e), i && !o ? window.requestAnimationFrame(g) : (a = !0);
                }
                function E(e) {
                    (n = e), window.requestAnimationFrame(g);
                }
                function b(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.pause(e);
                }
                function y(e, n, i) {
                    var a;
                    for (a = 0; a < r; a += 1) t[a].animation.goToAndStop(e, n, i);
                }
                function v(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.stop(e);
                }
                function O(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.togglePause(e);
                }
                function I(e) {
                    var n;
                    for (n = r - 1; n >= 0; n -= 1) t[n].animation.destroy(e);
                }
                function S(e, t, n) {
                    var r,
                        i = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin'))),
                        a = i.length;
                    for (r = 0; r < a; r += 1) n && i[r].setAttribute('data-bm-type', n), l(i[r], e);
                    if (t && 0 === a) {
                        n || (n = 'svg');
                        var o = document.getElementsByTagName('body')[0];
                        o.innerText = '';
                        var s = createTag('div');
                        (s.style.width = '100%'), (s.style.height = '100%'), s.setAttribute('data-bm-type', n), o.appendChild(s), l(s, e);
                    }
                }
                function T() {
                    var e;
                    for (e = 0; e < r; e += 1) t[e].animation.resize();
                }
                function A() {
                    !o && i && a && (window.requestAnimationFrame(E), (a = !1));
                }
                function N() {
                    o = !0;
                }
                function C() {
                    (o = !1), A();
                }
                function R(e, n) {
                    var i;
                    for (i = 0; i < r; i += 1) t[i].animation.setVolume(e, n);
                }
                function P(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.mute(e);
                }
                function w(e) {
                    var n;
                    for (n = 0; n < r; n += 1) t[n].animation.unmute(e);
                }
                return (e.registerAnimation = l), (e.loadAnimation = _), (e.setSpeed = p), (e.setDirection = h), (e.play = m), (e.pause = b), (e.stop = v), (e.togglePause = O), (e.searchAnimations = S), (e.resize = T), (e.goToAndStop = y), (e.destroy = I), (e.freeze = N), (e.unfreeze = C), (e.setVolume = R), (e.mute = P), (e.unmute = w), (e.getRegisteredAnimations = c), e;
            })(),
            BezierFactory = (function () {
                var e = {};
                e.getBezierEasing = n;
                var t = {};
                function n(e, n, r, i, a) {
                    var o = a || ('bez_' + e + '_' + n + '_' + r + '_' + i).replace(/\./g, 'p');
                    if (t[o]) return t[o];
                    var s = new g([e, n, r, i]);
                    return (t[o] = s), s;
                }
                var r = 4,
                    i = 0.001,
                    a = 1e-7,
                    o = 10,
                    s = 11,
                    l = 0.1,
                    c = 'function' == typeof Float32Array;
                function u(e, t) {
                    return 1 - 3 * t + 3 * e;
                }
                function d(e, t) {
                    return 3 * t - 6 * e;
                }
                function f(e) {
                    return 3 * e;
                }
                function _(e, t, n) {
                    return ((u(t, n) * e + d(t, n)) * e + f(t)) * e;
                }
                function p(e, t, n) {
                    return 3 * u(t, n) * e * e + 2 * d(t, n) * e + f(t);
                }
                function h(e, t, n, r, i) {
                    var s,
                        l,
                        c = 0;
                    do (s = _((l = t + (n - t) / 2), r, i) - e) > 0 ? (n = l) : (t = l);
                    while (Math.abs(s) > a && ++c < o);
                    return l;
                }
                function m(e, t, n, i) {
                    for (var a = 0; a < r; ++a) {
                        var o = p(t, n, i);
                        if (0 === o) break;
                        var s = _(t, n, i) - e;
                        t -= s / o;
                    }
                    return t;
                }
                function g(e) {
                    (this._p = e), (this._mSampleValues = c ? new Float32Array(s) : Array(s)), (this._precomputed = !1), (this.get = this.get.bind(this));
                }
                return (
                    (g.prototype = {
                        get: function (e) {
                            var t = this._p[0],
                                n = this._p[1],
                                r = this._p[2],
                                i = this._p[3];
                            return (this._precomputed || this._precompute(), t === n && r === i) ? e : 0 === e ? 0 : 1 === e ? 1 : _(this._getTForX(e), n, i);
                        },
                        _precompute: function () {
                            var e = this._p[0],
                                t = this._p[1],
                                n = this._p[2],
                                r = this._p[3];
                            (this._precomputed = !0), (e !== t || n !== r) && this._calcSampleValues();
                        },
                        _calcSampleValues: function () {
                            for (var e = this._p[0], t = this._p[2], n = 0; n < s; ++n) this._mSampleValues[n] = _(n * l, e, t);
                        },
                        _getTForX: function (e) {
                            for (var t = this._p[0], n = this._p[2], r = this._mSampleValues, a = 0, o = 1, c = s - 1; o !== c && r[o] <= e; ++o) a += l;
                            var u = a + ((e - r[--o]) / (r[o + 1] - r[o])) * l,
                                d = p(u, t, n);
                            return d >= i ? m(e, u, t, n) : 0 === d ? u : h(e, a, a + l, t, n);
                        }
                    }),
                    e
                );
            })(),
            pooling = (function () {
                return {
                    double: function (e) {
                        return e.concat(createSizedArray(e.length));
                    }
                };
            })(),
            poolFactory = (function () {
                return function (e, t, n) {
                    var r = 0,
                        i = e,
                        a = createSizedArray(i);
                    return {
                        newElement: function () {
                            var e;
                            return r ? ((r -= 1), (e = a[r])) : (e = t()), e;
                        },
                        release: function (e) {
                            r === i && ((a = pooling.double(a)), (i *= 2)), n && n(e), (a[r] = e), (r += 1);
                        }
                    };
                };
            })(),
            bezierLengthPool = (function () {
                return poolFactory(8, function () {
                    return {
                        addedLength: 0,
                        percents: createTypedArray('float32', getDefaultCurveSegments()),
                        lengths: createTypedArray('float32', getDefaultCurveSegments())
                    };
                });
            })(),
            segmentsLengthPool = (function () {
                return poolFactory(
                    8,
                    function () {
                        return {
                            lengths: [],
                            totalLength: 0
                        };
                    },
                    function (e) {
                        var t,
                            n = e.lengths.length;
                        for (t = 0; t < n; t += 1) bezierLengthPool.release(e.lengths[t]);
                        e.lengths.length = 0;
                    }
                );
            })();
        function bezFunction() {
            var e = Math;
            function t(e, t, n, r, i, a) {
                var o = e * r + t * i + n * a - i * r - a * e - n * t;
                return o > -0.001 && o < 0.001;
            }
            function n(n, r, i, a, o, s, l, c, u) {
                if (0 === i && 0 === s && 0 === u) return t(n, r, a, o, l, c);
                var d,
                    f = e.sqrt(e.pow(a - n, 2) + e.pow(o - r, 2) + e.pow(s - i, 2)),
                    _ = e.sqrt(e.pow(l - n, 2) + e.pow(c - r, 2) + e.pow(u - i, 2)),
                    p = e.sqrt(e.pow(l - a, 2) + e.pow(c - o, 2) + e.pow(u - s, 2));
                return (d = f > _ ? (f > p ? f - _ - p : p - _ - f) : p > _ ? p - _ - f : _ - f - p) > -0.0001 && d < 0.0001;
            }
            var r = (function () {
                return function (e, t, n, r) {
                    var i,
                        a,
                        o,
                        s,
                        l,
                        c,
                        u = getDefaultCurveSegments(),
                        d = 0,
                        f = [],
                        _ = [],
                        p = bezierLengthPool.newElement();
                    for (i = 0, o = n.length; i < u; i += 1) {
                        for (a = 0, l = i / (u - 1), c = 0; a < o; a += 1) (s = bmPow(1 - l, 3) * e[a] + 3 * bmPow(1 - l, 2) * l * n[a] + 3 * (1 - l) * bmPow(l, 2) * r[a] + bmPow(l, 3) * t[a]), (f[a] = s), null !== _[a] && (c += bmPow(f[a] - _[a], 2)), (_[a] = f[a]);
                        c && (d += c = bmSqrt(c)), (p.percents[i] = l), (p.lengths[i] = d);
                    }
                    return (p.addedLength = d), p;
                };
            })();
            function i(e) {
                var t,
                    n = segmentsLengthPool.newElement(),
                    i = e.c,
                    a = e.v,
                    o = e.o,
                    s = e.i,
                    l = e._length,
                    c = n.lengths,
                    u = 0;
                for (t = 0; t < l - 1; t += 1) (c[t] = r(a[t], a[t + 1], o[t], s[t + 1])), (u += c[t].addedLength);
                return i && l && ((c[t] = r(a[t], a[0], o[t], s[0])), (u += c[t].addedLength)), (n.totalLength = u), n;
            }
            function a(e) {
                (this.segmentLength = 0), (this.points = Array(e));
            }
            function o(e, t) {
                (this.partialLength = e), (this.point = t);
            }
            var s = (function () {
                var e = {};
                return function (n, r, i, s) {
                    var l = (n[0] + '_' + n[1] + '_' + r[0] + '_' + r[1] + '_' + i[0] + '_' + i[1] + '_' + s[0] + '_' + s[1]).replace(/\./g, 'p');
                    if (!e[l]) {
                        var c,
                            u,
                            d,
                            f,
                            _,
                            p,
                            h,
                            m = getDefaultCurveSegments(),
                            g = 0,
                            E = null;
                        2 === n.length && (n[0] !== r[0] || n[1] !== r[1]) && t(n[0], n[1], r[0], r[1], n[0] + i[0], n[1] + i[1]) && t(n[0], n[1], r[0], r[1], r[0] + s[0], r[1] + s[1]) && (m = 2);
                        var b = new a(m);
                        for (c = 0, d = i.length; c < m; c += 1) {
                            for (u = 0, h = createSizedArray(d), _ = c / (m - 1), p = 0; u < d; u += 1) (f = bmPow(1 - _, 3) * n[u] + 3 * bmPow(1 - _, 2) * _ * (n[u] + i[u]) + 3 * (1 - _) * bmPow(_, 2) * (r[u] + s[u]) + bmPow(_, 3) * r[u]), (h[u] = f), null !== E && (p += bmPow(h[u] - E[u], 2));
                            (g += p = bmSqrt(p)), (b.points[c] = new o(p, h)), (E = h);
                        }
                        (b.segmentLength = g), (e[l] = b);
                    }
                    return e[l];
                };
            })();
            function l(e, t) {
                var n = t.percents,
                    r = t.lengths,
                    i = n.length,
                    a = bmFloor((i - 1) * e),
                    o = e * t.addedLength,
                    s = 0;
                if (a === i - 1 || 0 === a || o === r[a]) return n[a];
                for (var l = r[a] > o ? -1 : 1, c = !0; c; )
                    if ((r[a] <= o && r[a + 1] > o ? ((s = (o - r[a]) / (r[a + 1] - r[a])), (c = !1)) : (a += l), a < 0 || a >= i - 1)) {
                        if (a === i - 1) return n[a];
                        c = !1;
                    }
                return n[a] + (n[a + 1] - n[a]) * s;
            }
            function c(t, n, r, i, a, o) {
                var s = l(a, o),
                    c = 1 - s;
                return [e.round((c * c * c * t[0] + (s * c * c + c * s * c + c * c * s) * r[0] + (s * s * c + c * s * s + s * c * s) * i[0] + s * s * s * n[0]) * 1000) / 1000, e.round((c * c * c * t[1] + (s * c * c + c * s * c + c * c * s) * r[1] + (s * s * c + c * s * s + s * c * s) * i[1] + s * s * s * n[1]) * 1000) / 1000];
            }
            var u = createTypedArray('float32', 8);
            return {
                getSegmentsLength: i,
                getNewSegment: function (t, n, r, i, a, o, s) {
                    a < 0 ? (a = 0) : a > 1 && (a = 1);
                    var c,
                        d = l(a, s),
                        f = l((o = o > 1 ? 1 : o), s),
                        _ = t.length,
                        p = 1 - d,
                        h = 1 - f,
                        m = p * p * p,
                        g = d * p * p * 3,
                        E = d * d * p * 3,
                        b = d * d * d,
                        y = p * p * h,
                        v = d * p * h + p * d * h + p * p * f,
                        O = d * d * h + p * d * f + d * p * f,
                        I = d * d * f,
                        S = p * h * h,
                        T = d * h * h + p * f * h + p * h * f,
                        A = d * f * h + p * f * f + d * h * f,
                        N = d * f * f,
                        C = h * h * h,
                        R = f * h * h + h * f * h + h * h * f,
                        P = f * f * h + h * f * f + f * h * f,
                        w = f * f * f;
                    for (c = 0; c < _; c += 1) (u[4 * c] = e.round((m * t[c] + g * r[c] + E * i[c] + b * n[c]) * 1000) / 1000), (u[4 * c + 1] = e.round((y * t[c] + v * r[c] + O * i[c] + I * n[c]) * 1000) / 1000), (u[4 * c + 2] = e.round((S * t[c] + T * r[c] + A * i[c] + N * n[c]) * 1000) / 1000), (u[4 * c + 3] = e.round((C * t[c] + R * r[c] + P * i[c] + w * n[c]) * 1000) / 1000);
                    return u;
                },
                getPointInSegment: c,
                buildBezierData: s,
                pointOnLine2D: t,
                pointOnLine3D: n
            };
        }
        var bez = bezFunction(),
            initFrame = initialDefaultFrame,
            mathAbs = Math.abs;
        function interpolateValue(e, t) {
            var n,
                r,
                i,
                a,
                o,
                s = this.offsetTime;
            'multidimensional' === this.propType && (m = createTypedArray('float32', this.pv.length));
            for (var l = t.lastIndex, c = l, u = this.keyframes.length - 1, d = !0; d; ) {
                if (((g = this.keyframes[c]), (E = this.keyframes[c + 1]), c === u - 1 && e >= E.t - s)) {
                    g.h && (g = E), (l = 0);
                    break;
                }
                if (E.t - s > e) {
                    l = c;
                    break;
                }
                c < u - 1 ? (c += 1) : ((l = 0), (d = !1));
            }
            b = this.keyframesMetadata[c] || {};
            var f = E.t - s,
                _ = g.t - s;
            if (g.to) {
                b.bezierData || (b.bezierData = bez.buildBezierData(g.s, E.s || g.e, g.to, g.ti));
                var p = b.bezierData;
                if (e >= f || e < _) {
                    var h = e >= f ? p.points.length - 1 : 0;
                    for (y = 0, v = p.points[h].point.length; y < v; y += 1) m[y] = p.points[h].point[y];
                } else {
                    b.__fnct ? (S = b.__fnct) : (b.__fnct = S = BezierFactory.getBezierEasing(g.o.x, g.o.y, g.i.x, g.i.y, g.n).get);
                    var m,
                        g,
                        E,
                        b,
                        y,
                        v,
                        O,
                        I,
                        S,
                        T,
                        A,
                        N = S((e - _) / (f - _)),
                        C = p.segmentLength * N,
                        R = t.lastFrame < e && t._lastKeyframeIndex === c ? t._lastAddedLength : 0;
                    for (I = t.lastFrame < e && t._lastKeyframeIndex === c ? t._lastPoint : 0, d = !0, O = p.points.length; d; ) {
                        if (((R += p.points[I].partialLength), 0 === C || 0 === N || I === p.points.length - 1)) {
                            for (y = 0, v = p.points[I].point.length; y < v; y += 1) m[y] = p.points[I].point[y];
                            break;
                        }
                        if (C >= R && C < R + p.points[I + 1].partialLength) {
                            for (y = 0, A = (C - R) / p.points[I + 1].partialLength, v = p.points[I].point.length; y < v; y += 1) m[y] = p.points[I].point[y] + (p.points[I + 1].point[y] - p.points[I].point[y]) * A;
                            break;
                        }
                        I < O - 1 ? (I += 1) : (d = !1);
                    }
                    (t._lastPoint = I), (t._lastAddedLength = R - p.points[I].partialLength), (t._lastKeyframeIndex = c);
                }
            } else if (((u = g.s.length), (T = E.s || g.e), this.sh && 1 !== g.h)) e >= f ? ((m[0] = T[0]), (m[1] = T[1]), (m[2] = T[2])) : e <= _ ? ((m[0] = g.s[0]), (m[1] = g.s[1]), (m[2] = g.s[2])) : quaternionToEuler(m, slerp(createQuaternion(g.s), createQuaternion(T), (e - _) / (f - _)));
            else for (c = 0; c < u; c += 1) 1 !== g.h && (e >= f ? (N = 1) : e < _ ? (N = 0) : (g.o.x.constructor === Array ? (b.__fnct || (b.__fnct = []), b.__fnct[c] ? (S = b.__fnct[c]) : ((n = void 0 === g.o.x[c] ? g.o.x[0] : g.o.x[c]), (r = void 0 === g.o.y[c] ? g.o.y[0] : g.o.y[c]), (i = void 0 === g.i.x[c] ? g.i.x[0] : g.i.x[c]), (a = void 0 === g.i.y[c] ? g.i.y[0] : g.i.y[c]), (S = BezierFactory.getBezierEasing(n, r, i, a).get), (b.__fnct[c] = S))) : b.__fnct ? (S = b.__fnct) : ((n = g.o.x), (r = g.o.y), (i = g.i.x), (a = g.i.y), (S = BezierFactory.getBezierEasing(n, r, i, a).get), (g.keyframeMetadata = S)), (N = S((e - _) / (f - _))))), (T = E.s || g.e), (o = 1 === g.h ? g.s[c] : g.s[c] + (T[c] - g.s[c]) * N), 'multidimensional' === this.propType ? (m[c] = o) : (m = o);
            return (t.lastIndex = l), m;
        }
        function slerp(e, t, n) {
            var r,
                i,
                a,
                o,
                s,
                l = [],
                c = e[0],
                u = e[1],
                d = e[2],
                f = e[3],
                _ = t[0],
                p = t[1],
                h = t[2],
                m = t[3];
            return (i = c * _ + u * p + d * h + f * m) < 0 && ((i = -i), (_ = -_), (p = -p), (h = -h), (m = -m)), 1 - i > 0.000001 ? ((a = Math.sin((r = Math.acos(i)))), (o = Math.sin((1 - n) * r) / a), (s = Math.sin(n * r) / a)) : ((o = 1 - n), (s = n)), (l[0] = o * c + s * _), (l[1] = o * u + s * p), (l[2] = o * d + s * h), (l[3] = o * f + s * m), l;
        }
        function quaternionToEuler(e, t) {
            var n = t[0],
                r = t[1],
                i = t[2],
                a = t[3],
                o = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i),
                s = Math.asin(2 * n * r + 2 * i * a),
                l = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i);
            (e[0] = o / degToRads), (e[1] = s / degToRads), (e[2] = l / degToRads);
        }
        function createQuaternion(e) {
            var t = e[0] * degToRads,
                n = e[1] * degToRads,
                r = e[2] * degToRads,
                i = Math.cos(t / 2),
                a = Math.cos(n / 2),
                o = Math.cos(r / 2),
                s = Math.sin(t / 2),
                l = Math.sin(n / 2),
                c = Math.sin(r / 2),
                u = i * a * o - s * l * c;
            return [s * l * o + i * a * c, s * a * o + i * l * c, i * l * o - s * a * c, u];
        }
        function getValueAtCurrentTime() {
            var e = this.comp.renderedFrame - this.offsetTime,
                t = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(e === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= n && e >= n) || (this._caching.lastFrame < t && e < t))))) {
                this._caching.lastFrame >= e && ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
                var r = this.interpolateValue(e, this._caching);
                this.pv = r;
            }
            return (this._caching.lastFrame = e), this.pv;
        }
        function setVValue(e) {
            var t;
            if ('unidimensional' === this.propType) (t = e * this.mult), mathAbs(this.v - t) > 0.00001 && ((this.v = t), (this._mdf = !0));
            else for (var n = 0, r = this.v.length; n < r; ) (t = e[n] * this.mult), mathAbs(this.v[n] - t) > 0.00001 && ((this.v[n] = t), (this._mdf = !0)), (n += 1);
        }
        function processEffectsSequence() {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                if (this.lock) return void this.setVValue(this.pv);
                (this.lock = !0), (this._mdf = this._isFirstFrame);
                var e,
                    t = this.effectsSequence.length,
                    n = this.kf ? this.pv : this.data.k;
                for (e = 0; e < t; e += 1) n = this.effectsSequence[e](n);
                this.setVValue(n), (this._isFirstFrame = !1), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
            }
        }
        function addEffect(e) {
            this.effectsSequence.push(e), this.container.addDynamicProperty(this);
        }
        function ValueProperty(e, t, n, r) {
            (this.propType = 'unidimensional'), (this.mult = n || 1), (this.data = t), (this.v = n ? t.k * n : t.k), (this.pv = t.k), (this._mdf = !1), (this.elem = e), (this.container = r), (this.comp = e.comp), (this.k = !1), (this.kf = !1), (this.vel = 0), (this.effectsSequence = []), (this._isFirstFrame = !0), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.addEffect = addEffect);
        }
        function MultiDimensionalProperty(e, t, n, r) {
            (this.propType = 'multidimensional'), (this.mult = n || 1), (this.data = t), (this._mdf = !1), (this.elem = e), (this.container = r), (this.comp = e.comp), (this.k = !1), (this.kf = !1), (this.frameId = -1);
            var i,
                a = t.k.length;
            for (i = 0, this.v = createTypedArray('float32', a), this.pv = createTypedArray('float32', a), this.vel = createTypedArray('float32', a); i < a; i += 1) (this.v[i] = t.k[i] * this.mult), (this.pv[i] = t.k[i]);
            (this._isFirstFrame = !0), (this.effectsSequence = []), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.addEffect = addEffect);
        }
        function KeyframedValueProperty(e, t, n, r) {
            (this.propType = 'unidimensional'),
                (this.keyframes = t.k),
                (this.keyframesMetadata = []),
                (this.offsetTime = e.data.st),
                (this.frameId = -1),
                (this._caching = {
                    lastFrame: initFrame,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                }),
                (this.k = !0),
                (this.kf = !0),
                (this.data = t),
                (this.mult = n || 1),
                (this.elem = e),
                (this.container = r),
                (this.comp = e.comp),
                (this.v = initFrame),
                (this.pv = initFrame),
                (this._isFirstFrame = !0),
                (this.getValue = processEffectsSequence),
                (this.setVValue = setVValue),
                (this.interpolateValue = interpolateValue),
                (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
                (this.addEffect = addEffect);
        }
        function KeyframedMultidimensionalProperty(e, t, n, r) {
            this.propType = 'multidimensional';
            var i,
                a,
                o,
                s,
                l,
                c = t.k.length;
            for (i = 0; i < c - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && ((a = t.k[i].s), (o = t.k[i + 1].s), (s = t.k[i].to), (l = t.k[i].ti), ((2 === a.length && (a[0] !== o[0] || a[1] !== o[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], a[0] + s[0], a[1] + s[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], o[0] + l[0], o[1] + l[1])) || (3 === a.length && (a[0] !== o[0] || a[1] !== o[1] || a[2] !== o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], a[0] + s[0], a[1] + s[1], a[2] + s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], o[0] + l[0], o[1] + l[1], o[2] + l[2]))) && ((t.k[i].to = null), (t.k[i].ti = null)), a[0] === o[0] && a[1] === o[1] && 0 === s[0] && 0 === s[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || (a[2] === o[2] && 0 === s[2] && 0 === l[2])) && ((t.k[i].to = null), (t.k[i].ti = null)));
            (this.effectsSequence = [getValueAtCurrentTime.bind(this)]), (this.data = t), (this.keyframes = t.k), (this.keyframesMetadata = []), (this.offsetTime = e.data.st), (this.k = !0), (this.kf = !0), (this._isFirstFrame = !0), (this.mult = n || 1), (this.elem = e), (this.container = r), (this.comp = e.comp), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.interpolateValue = interpolateValue), (this.frameId = -1);
            var u = t.k[0].s.length;
            for (i = 0, this.v = createTypedArray('float32', u), this.pv = createTypedArray('float32', u); i < u; i += 1) (this.v[i] = initFrame), (this.pv[i] = initFrame);
            (this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray('float32', u)
            }),
                (this.addEffect = addEffect);
        }
        var PropertyFactory = (function () {
            return {
                getProp: function (e, t, n, r, i) {
                    var a;
                    if ((t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length))
                        if ('number' == typeof t.k[0]) a = new MultiDimensionalProperty(e, t, r, i);
                        else
                            switch (n) {
                                case 0:
                                    a = new KeyframedValueProperty(e, t, r, i);
                                    break;
                                case 1:
                                    a = new KeyframedMultidimensionalProperty(e, t, r, i);
                            }
                    else a = new ValueProperty(e, t, r, i);
                    return a.effectsSequence.length && i.addDynamicProperty(a), a;
                }
            };
        })();
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function (e) {
                -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), (this._isAnimated = !0));
            },
            iterateDynamicProperties: function () {
                this._mdf = !1;
                var e,
                    t = this.dynamicProperties.length;
                for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function (e) {
                (this.container = e), (this.dynamicProperties = []), (this._mdf = !1), (this._isAnimated = !1);
            }
        };
        var pointPool = (function () {
            return poolFactory(8, function () {
                return createTypedArray('float32', 2);
            });
        })();
        function ShapePath() {
            (this.c = !1), (this._length = 0), (this._maxLength = 8), (this.v = createSizedArray(this._maxLength)), (this.o = createSizedArray(this._maxLength)), (this.i = createSizedArray(this._maxLength));
        }
        (ShapePath.prototype.setPathData = function (e, t) {
            (this.c = e), this.setLength(t);
            for (var n = 0; n < t; ) (this.v[n] = pointPool.newElement()), (this.o[n] = pointPool.newElement()), (this.i[n] = pointPool.newElement()), (n += 1);
        }),
            (ShapePath.prototype.setLength = function (e) {
                for (; this._maxLength < e; ) this.doubleArrayLength();
                this._length = e;
            }),
            (ShapePath.prototype.doubleArrayLength = function () {
                (this.v = this.v.concat(createSizedArray(this._maxLength))), (this.i = this.i.concat(createSizedArray(this._maxLength))), (this.o = this.o.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2);
            }),
            (ShapePath.prototype.setXYAt = function (e, t, n, r, i) {
                var a;
                switch (((this._length = Math.max(this._length, r + 1)), this._length >= this._maxLength && this.doubleArrayLength(), n)) {
                    case 'v':
                        a = this.v;
                        break;
                    case 'i':
                        a = this.i;
                        break;
                    case 'o':
                        a = this.o;
                        break;
                    default:
                        a = [];
                }
                (a[r] && (!a[r] || i)) || (a[r] = pointPool.newElement()), (a[r][0] = e), (a[r][1] = t);
            }),
            (ShapePath.prototype.setTripleAt = function (e, t, n, r, i, a, o, s) {
                this.setXYAt(e, t, 'v', o, s), this.setXYAt(n, r, 'o', o, s), this.setXYAt(i, a, 'i', o, s);
            }),
            (ShapePath.prototype.reverse = function () {
                var e,
                    t = new ShapePath();
                t.setPathData(this.c, this._length);
                var n = this.v,
                    r = this.o,
                    i = this.i,
                    a = 0;
                this.c && (t.setTripleAt(n[0][0], n[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), (a = 1));
                var o = this._length - 1,
                    s = this._length;
                for (e = a; e < s; e += 1) t.setTripleAt(n[o][0], n[o][1], i[o][0], i[o][1], r[o][0], r[o][1], e, !1), (o -= 1);
                return t;
            }),
            (ShapePath.prototype.length = function () {
                return this._length;
            });
        var shapePool = (function () {
            function e(e) {
                var n,
                    r = t.newElement(),
                    i = void 0 === e._length ? e.v.length : e._length;
                for (r.setLength(i), r.c = e.c, n = 0; n < i; n += 1) r.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], n);
                return r;
            }
            var t = poolFactory(
                4,
                function () {
                    return new ShapePath();
                },
                function (e) {
                    var t,
                        n = e._length;
                    for (t = 0; t < n; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), (e.v[t] = null), (e.i[t] = null), (e.o[t] = null);
                    (e._length = 0), (e.c = !1);
                }
            );
            return (t.clone = e), t;
        })();
        function ShapeCollection() {
            (this._length = 0), (this._maxLength = 4), (this.shapes = createSizedArray(this._maxLength));
        }
        (ShapeCollection.prototype.addShape = function (e) {
            this._length === this._maxLength && ((this.shapes = this.shapes.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2)), (this.shapes[this._length] = e), (this._length += 1);
        }),
            (ShapeCollection.prototype.releaseShapes = function () {
                var e;
                for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
                this._length = 0;
            });
        var shapeCollectionPool = (function () {
                var e = {
                        newShapeCollection: i,
                        release: a
                    },
                    t = 0,
                    n = 4,
                    r = createSizedArray(4);
                function i() {
                    var e;
                    return t ? ((t -= 1), (e = r[t])) : (e = new ShapeCollection()), e;
                }
                function a(e) {
                    var i,
                        a = e._length;
                    for (i = 0; i < a; i += 1) shapePool.release(e.shapes[i]);
                    (e._length = 0), t === n && ((r = pooling.double(r)), (n *= 2)), (r[t] = e), (t += 1);
                }
                return e;
            })(),
            ShapePropertyFactory = (function () {
                var e = -999999;
                function t(e, t, n) {
                    var r = n.lastIndex,
                        i = this.keyframes;
                    if (e < i[0].t - this.offsetTime) (a = i[0].s[0]), (s = !0), (r = 0);
                    else if (e >= i[i.length - 1].t - this.offsetTime) (a = i[i.length - 1].s ? i[i.length - 1].s[0] : i[i.length - 2].e[0]), (s = !0);
                    else {
                        for (var a, o, s, l, c, u, d, f, _, p, h, m, g, E = r, b = i.length - 1, y = !0; y && ((p = i[E]), !((h = i[E + 1]).t - this.offsetTime > e)); ) E < b - 1 ? (E += 1) : (y = !1);
                        (m = this.keyframesMetadata[E] || {}), (s = 1 === p.h), (r = E), s || (e >= h.t - this.offsetTime ? (f = 1) : e < p.t - this.offsetTime ? (f = 0) : (m.__fnct ? (g = m.__fnct) : (m.__fnct = g = BezierFactory.getBezierEasing(p.o.x, p.o.y, p.i.x, p.i.y).get), (f = g((e - (p.t - this.offsetTime)) / (h.t - this.offsetTime - (p.t - this.offsetTime))))), (o = h.s ? h.s[0] : p.e[0])), (a = p.s[0]);
                    }
                    for (l = 0, u = t._length, d = a.i[0].length, n.lastIndex = r; l < u; l += 1) for (c = 0; c < d; c += 1) (_ = s ? a.i[l][c] : a.i[l][c] + (o.i[l][c] - a.i[l][c]) * f), (t.i[l][c] = _), (_ = s ? a.o[l][c] : a.o[l][c] + (o.o[l][c] - a.o[l][c]) * f), (t.o[l][c] = _), (_ = s ? a.v[l][c] : a.v[l][c] + (o.v[l][c] - a.v[l][c]) * f), (t.v[l][c] = _);
                }
                function n() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        n = this.keyframes[0].t - this.offsetTime,
                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        i = this._caching.lastFrame;
                    return (i !== e && ((i < n && t < n) || (i > r && t > r))) || ((this._caching.lastIndex = i < t ? this._caching.lastIndex : 0), this.interpolateShape(t, this.pv, this._caching)), (this._caching.lastFrame = t), this.pv;
                }
                function r() {
                    this.paths = this.localShapeCollection;
                }
                function i(e, t) {
                    if (e._length !== t._length || e.c !== t.c) return !1;
                    var n,
                        r = e._length;
                    for (n = 0; n < r; n += 1) if (e.v[n][0] !== t.v[n][0] || e.v[n][1] !== t.v[n][1] || e.o[n][0] !== t.o[n][0] || e.o[n][1] !== t.o[n][1] || e.i[n][0] !== t.i[n][0] || e.i[n][1] !== t.i[n][1]) return !1;
                    return !0;
                }
                function a(e) {
                    i(this.v, e) || ((this.v = shapePool.clone(e)), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), (this._mdf = !0), (this.paths = this.localShapeCollection));
                }
                function o() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (!this.effectsSequence.length) {
                            this._mdf = !1;
                            return;
                        }
                        if (this.lock) return void this.setVValue(this.pv);
                        (this.lock = !0), (this._mdf = !1), (e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k);
                        var e,
                            t,
                            n = this.effectsSequence.length;
                        for (t = 0; t < n; t += 1) e = this.effectsSequence[t](e);
                        this.setVValue(e), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                    }
                }
                function s(e, t, n) {
                    (this.propType = 'shape'), (this.comp = e.comp), (this.container = e), (this.elem = e), (this.data = t), (this.k = !1), (this.kf = !1), (this._mdf = !1);
                    var i = 3 === n ? t.pt.k : t.ks.k;
                    (this.v = shapePool.clone(i)), (this.pv = shapePool.clone(this.v)), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), (this.paths = this.localShapeCollection), this.paths.addShape(this.v), (this.reset = r), (this.effectsSequence = []);
                }
                function l(e) {
                    this.effectsSequence.push(e), this.container.addDynamicProperty(this);
                }
                function c(t, i, a) {
                    (this.propType = 'shape'), (this.comp = t.comp), (this.elem = t), (this.container = t), (this.offsetTime = t.data.st), (this.keyframes = 3 === a ? i.pt.k : i.ks.k), (this.keyframesMetadata = []), (this.k = !0), (this.kf = !0);
                    var o = this.keyframes[0].s[0].i.length;
                    (this.v = shapePool.newElement()),
                        this.v.setPathData(this.keyframes[0].s[0].c, o),
                        (this.pv = shapePool.clone(this.v)),
                        (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.paths.addShape(this.v),
                        (this.lastFrame = e),
                        (this.reset = r),
                        (this._caching = {
                            lastFrame: e,
                            lastIndex: 0
                        }),
                        (this.effectsSequence = [n.bind(this)]);
                }
                (s.prototype.interpolateShape = t), (s.prototype.getValue = o), (s.prototype.setVValue = a), (s.prototype.addEffect = l), (c.prototype.getValue = o), (c.prototype.interpolateShape = t), (c.prototype.setVValue = a), (c.prototype.addEffect = l);
                var u = (function () {
                        var e = roundCorner;
                        function t(e, t) {
                            (this.v = shapePool.newElement()), this.v.setPathData(!0, 4), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), (this.paths = this.localShapeCollection), this.localShapeCollection.addShape(this.v), (this.d = t.d), (this.elem = e), (this.comp = e.comp), (this.frameId = -1), this.initDynamicPropertyContainer(e), (this.p = PropertyFactory.getProp(e, t.p, 1, 0, this)), (this.s = PropertyFactory.getProp(e, t.s, 1, 0, this)), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertEllToPath());
                        }
                        return (
                            (t.prototype = {
                                reset: r,
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                                },
                                convertEllToPath: function () {
                                    var t = this.p.v[0],
                                        n = this.p.v[1],
                                        r = this.s.v[0] / 2,
                                        i = this.s.v[1] / 2,
                                        a = 3 !== this.d,
                                        o = this.v;
                                    (o.v[0][0] = t), (o.v[0][1] = n - i), (o.v[1][0] = a ? t + r : t - r), (o.v[1][1] = n), (o.v[2][0] = t), (o.v[2][1] = n + i), (o.v[3][0] = a ? t - r : t + r), (o.v[3][1] = n), (o.i[0][0] = a ? t - r * e : t + r * e), (o.i[0][1] = n - i), (o.i[1][0] = a ? t + r : t - r), (o.i[1][1] = n - i * e), (o.i[2][0] = a ? t + r * e : t - r * e), (o.i[2][1] = n + i), (o.i[3][0] = a ? t - r : t + r), (o.i[3][1] = n + i * e), (o.o[0][0] = a ? t + r * e : t - r * e), (o.o[0][1] = n - i), (o.o[1][0] = a ? t + r : t - r), (o.o[1][1] = n + i * e), (o.o[2][0] = a ? t - r * e : t + r * e), (o.o[2][1] = n + i), (o.o[3][0] = a ? t - r : t + r), (o.o[3][1] = n - i * e);
                                }
                            }),
                            extendPrototype([DynamicPropertyContainer], t),
                            t
                        );
                    })(),
                    d = (function () {
                        function e(e, t) {
                            (this.v = shapePool.newElement()), this.v.setPathData(!0, 0), (this.elem = e), (this.comp = e.comp), (this.data = t), (this.frameId = -1), (this.d = t.d), this.initDynamicPropertyContainer(e), 1 === t.sy ? ((this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this)), (this.is = PropertyFactory.getProp(e, t.is, 0, 0.01, this)), (this.convertToPath = this.convertStarToPath)) : (this.convertToPath = this.convertPolygonToPath), (this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this)), (this.p = PropertyFactory.getProp(e, t.p, 1, 0, this)), (this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this)), (this.or = PropertyFactory.getProp(e, t.or, 0, 0, this)), (this.os = PropertyFactory.getProp(e, t.os, 0, 0.01, this)), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), this.localShapeCollection.addShape(this.v), (this.paths = this.localShapeCollection), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertToPath());
                        }
                        return (
                            (e.prototype = {
                                reset: r,
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                                },
                                convertStarToPath: function () {
                                    var e,
                                        t,
                                        n,
                                        r,
                                        i = 2 * Math.floor(this.pt.v),
                                        a = (2 * Math.PI) / i,
                                        o = !0,
                                        s = this.or.v,
                                        l = this.ir.v,
                                        c = this.os.v,
                                        u = this.is.v,
                                        d = (2 * Math.PI * s) / (2 * i),
                                        f = (2 * Math.PI * l) / (2 * i),
                                        _ = -Math.PI / 2;
                                    _ += this.r.v;
                                    var p = 3 === this.data.d ? -1 : 1;
                                    for (e = 0, this.v._length = 0; e < i; e += 1) {
                                        (t = o ? s : l), (n = o ? c : u), (r = o ? d : f);
                                        var h = t * Math.cos(_),
                                            m = t * Math.sin(_),
                                            g = 0 === h && 0 === m ? 0 : m / Math.sqrt(h * h + m * m),
                                            E = 0 === h && 0 === m ? 0 : -h / Math.sqrt(h * h + m * m);
                                        (h += +this.p.v[0]), (m += +this.p.v[1]), this.v.setTripleAt(h, m, h - g * r * n * p, m - E * r * n * p, h + g * r * n * p, m + E * r * n * p, e, !0), (o = !o), (_ += a * p);
                                    }
                                },
                                convertPolygonToPath: function () {
                                    var e,
                                        t = Math.floor(this.pt.v),
                                        n = (2 * Math.PI) / t,
                                        r = this.or.v,
                                        i = this.os.v,
                                        a = (2 * Math.PI * r) / (4 * t),
                                        o = -(0.5 * Math.PI),
                                        s = 3 === this.data.d ? -1 : 1;
                                    for (o += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                                        var l = r * Math.cos(o),
                                            c = r * Math.sin(o),
                                            u = 0 === l && 0 === c ? 0 : c / Math.sqrt(l * l + c * c),
                                            d = 0 === l && 0 === c ? 0 : -l / Math.sqrt(l * l + c * c);
                                        (l += +this.p.v[0]), (c += +this.p.v[1]), this.v.setTripleAt(l, c, l - u * a * i * s, c - d * a * i * s, l + u * a * i * s, c + d * a * i * s, e, !0), (o += n * s);
                                    }
                                    (this.paths.length = 0), (this.paths[0] = this.v);
                                }
                            }),
                            extendPrototype([DynamicPropertyContainer], e),
                            e
                        );
                    })(),
                    f = (function () {
                        function e(e, t) {
                            (this.v = shapePool.newElement()), (this.v.c = !0), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), this.localShapeCollection.addShape(this.v), (this.paths = this.localShapeCollection), (this.elem = e), (this.comp = e.comp), (this.frameId = -1), (this.d = t.d), this.initDynamicPropertyContainer(e), (this.p = PropertyFactory.getProp(e, t.p, 1, 0, this)), (this.s = PropertyFactory.getProp(e, t.s, 1, 0, this)), (this.r = PropertyFactory.getProp(e, t.r, 0, 0, this)), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertRectToPath());
                        }
                        return (
                            (e.prototype = {
                                convertRectToPath: function () {
                                    var e = this.p.v[0],
                                        t = this.p.v[1],
                                        n = this.s.v[0] / 2,
                                        r = this.s.v[1] / 2,
                                        i = bmMin(n, r, this.r.v),
                                        a = i * (1 - roundCorner);
                                    (this.v._length = 0), 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + i, e + n, t - r + a, 0, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - a, e + n, t + r - i, 1, !0), 0 !== i ? (this.v.setTripleAt(e + n - i, t + r, e + n - i, t + r, e + n - a, t + r, 2, !0), this.v.setTripleAt(e - n + i, t + r, e - n + a, t + r, e - n + i, t + r, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - i, e - n, t + r - a, 4, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + a, e - n, t - r + i, 5, !0), this.v.setTripleAt(e - n + i, t - r, e - n + i, t - r, e - n + a, t - r, 6, !0), this.v.setTripleAt(e + n - i, t - r, e + n - a, t - r, e + n - i, t - r, 7, !0)) : (this.v.setTripleAt(e - n, t + r, e - n + a, t + r, e - n, t + r, 2), this.v.setTripleAt(e - n, t - r, e - n, t - r + a, e - n, t - r, 3))) : (this.v.setTripleAt(e + n, t - r + i, e + n, t - r + a, e + n, t - r + i, 0, !0), 0 !== i ? (this.v.setTripleAt(e + n - i, t - r, e + n - i, t - r, e + n - a, t - r, 1, !0), this.v.setTripleAt(e - n + i, t - r, e - n + a, t - r, e - n + i, t - r, 2, !0), this.v.setTripleAt(e - n, t - r + i, e - n, t - r + i, e - n, t - r + a, 3, !0), this.v.setTripleAt(e - n, t + r - i, e - n, t + r - a, e - n, t + r - i, 4, !0), this.v.setTripleAt(e - n + i, t + r, e - n + i, t + r, e - n + a, t + r, 5, !0), this.v.setTripleAt(e + n - i, t + r, e + n - a, t + r, e + n - i, t + r, 6, !0), this.v.setTripleAt(e + n, t + r - i, e + n, t + r - i, e + n, t + r - a, 7, !0)) : (this.v.setTripleAt(e - n, t - r, e - n + a, t - r, e - n, t - r, 1, !0), this.v.setTripleAt(e - n, t + r, e - n, t + r - a, e - n, t + r, 2, !0), this.v.setTripleAt(e + n, t + r, e + n - a, t + r, e + n, t + r, 3, !0)));
                                },
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                                },
                                reset: r
                            }),
                            extendPrototype([DynamicPropertyContainer], e),
                            e
                        );
                    })();
                function _() {
                    return s;
                }
                function p() {
                    return c;
                }
                var h = {};
                return (
                    (h.getShapeProp = function (e, t, n) {
                        var r;
                        return 3 === n || 4 === n ? (r = (3 === n ? t.pt : t.ks).k.length ? new c(e, t, n) : new s(e, t, n)) : 5 === n ? (r = new f(e, t)) : 6 === n ? (r = new u(e, t)) : 7 === n && (r = new d(e, t)), r.k && e.addDynamicProperty(r), r;
                    }),
                    (h.getConstructorFunction = _),
                    (h.getKeyframedConstructorFunction = p),
                    h
                );
            })(),
            Matrix = (function () {
                var e = Math.cos,
                    t = Math.sin,
                    n = Math.tan,
                    r = Math.round;
                function i() {
                    return (this.props[0] = 1), (this.props[1] = 0), (this.props[2] = 0), (this.props[3] = 0), (this.props[4] = 0), (this.props[5] = 1), (this.props[6] = 0), (this.props[7] = 0), (this.props[8] = 0), (this.props[9] = 0), (this.props[10] = 1), (this.props[11] = 0), (this.props[12] = 0), (this.props[13] = 0), (this.props[14] = 0), (this.props[15] = 1), this;
                }
                function a(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function o(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(1, 0, 0, 0, 0, r, -i, 0, 0, i, r, 0, 0, 0, 0, 1);
                }
                function s(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(r, 0, i, 0, 0, 1, 0, 0, -i, 0, r, 0, 0, 0, 0, 1);
                }
                function l(n) {
                    if (0 === n) return this;
                    var r = e(n),
                        i = t(n);
                    return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function c(e, t) {
                    return this._t(1, t, e, 1, 0, 0);
                }
                function u(e, t) {
                    return this.shear(n(e), n(t));
                }
                function d(r, i) {
                    var a = e(i),
                        o = t(i);
                    return this._t(a, o, 0, 0, -o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -o, 0, 0, o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function f(e, t, n) {
                    return (n || 0 === n || (n = 1), 1 === e && 1 === t && 1 === n) ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
                }
                function _(e, t, n, r, i, a, o, s, l, c, u, d, f, _, p, h) {
                    return (this.props[0] = e), (this.props[1] = t), (this.props[2] = n), (this.props[3] = r), (this.props[4] = i), (this.props[5] = a), (this.props[6] = o), (this.props[7] = s), (this.props[8] = l), (this.props[9] = c), (this.props[10] = u), (this.props[11] = d), (this.props[12] = f), (this.props[13] = _), (this.props[14] = p), (this.props[15] = h), this;
                }
                function p(e, t, n) {
                    return ((n = n || 0), 0 !== e || 0 !== t || 0 !== n) ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1) : this;
                }
                function h(e, t, n, r, i, a, o, s, l, c, u, d, f, _, p, h) {
                    var m = this.props;
                    if (1 === e && 0 === t && 0 === n && 0 === r && 0 === i && 1 === a && 0 === o && 0 === s && 0 === l && 0 === c && 1 === u && 0 === d) return (m[12] = m[12] * e + m[15] * f), (m[13] = m[13] * a + m[15] * _), (m[14] = m[14] * u + m[15] * p), (m[15] *= h), (this._identityCalculated = !1), this;
                    var g = m[0],
                        E = m[1],
                        b = m[2],
                        y = m[3],
                        v = m[4],
                        O = m[5],
                        I = m[6],
                        S = m[7],
                        T = m[8],
                        A = m[9],
                        N = m[10],
                        C = m[11],
                        R = m[12],
                        P = m[13],
                        w = m[14],
                        D = m[15];
                    return (m[0] = g * e + E * i + b * l + y * f), (m[1] = g * t + E * a + b * c + y * _), (m[2] = g * n + E * o + b * u + y * p), (m[3] = g * r + E * s + b * d + y * h), (m[4] = v * e + O * i + I * l + S * f), (m[5] = v * t + O * a + I * c + S * _), (m[6] = v * n + O * o + I * u + S * p), (m[7] = v * r + O * s + I * d + S * h), (m[8] = T * e + A * i + N * l + C * f), (m[9] = T * t + A * a + N * c + C * _), (m[10] = T * n + A * o + N * u + C * p), (m[11] = T * r + A * s + N * d + C * h), (m[12] = R * e + P * i + w * l + D * f), (m[13] = R * t + P * a + w * c + D * _), (m[14] = R * n + P * o + w * u + D * p), (m[15] = R * r + P * s + w * d + D * h), (this._identityCalculated = !1), this;
                }
                function m(e) {
                    var t = e.props;
                    return this.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
                }
                function g() {
                    return this._identityCalculated || ((this._identity = 1 === this.props[0] && 0 === this.props[1] && 0 === this.props[2] && 0 === this.props[3] && 0 === this.props[4] && 1 === this.props[5] && 0 === this.props[6] && 0 === this.props[7] && 0 === this.props[8] && 0 === this.props[9] && 1 === this.props[10] && 0 === this.props[11] && 0 === this.props[12] && 0 === this.props[13] && 0 === this.props[14] && 1 === this.props[15]), (this._identityCalculated = !0)), this._identity;
                }
                function E(e) {
                    for (var t = 0; t < 16; ) {
                        if (e.props[t] !== this.props[t]) return !1;
                        t += 1;
                    }
                    return !0;
                }
                function b(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
                    return e;
                }
                function y(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) this.props[t] = e[t];
                }
                function v(e, t, n) {
                    return {
                        x: e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12],
                        y: e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13],
                        z: e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]
                    };
                }
                function O(e, t, n) {
                    return e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12];
                }
                function I(e, t, n) {
                    return e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13];
                }
                function S(e, t, n) {
                    return e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14];
                }
                function T() {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        t = this.props[5] / e,
                        n = -this.props[1] / e,
                        r = -this.props[4] / e,
                        i = this.props[0] / e,
                        a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                        o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                        s = new Matrix();
                    return (s.props[0] = t), (s.props[1] = n), (s.props[4] = r), (s.props[5] = i), (s.props[12] = a), (s.props[13] = o), s;
                }
                function A(e) {
                    return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0);
                }
                function N(e) {
                    var t,
                        n = e.length,
                        r = [];
                    for (t = 0; t < n; t += 1) r[t] = A(e[t]);
                    return r;
                }
                function C(e, t, n) {
                    var r = createTypedArray('float32', 6);
                    if (this.isIdentity()) (r[0] = e[0]), (r[1] = e[1]), (r[2] = t[0]), (r[3] = t[1]), (r[4] = n[0]), (r[5] = n[1]);
                    else {
                        var i = this.props[0],
                            a = this.props[1],
                            o = this.props[4],
                            s = this.props[5],
                            l = this.props[12],
                            c = this.props[13];
                        (r[0] = e[0] * i + e[1] * o + l), (r[1] = e[0] * a + e[1] * s + c), (r[2] = t[0] * i + t[1] * o + l), (r[3] = t[0] * a + t[1] * s + c), (r[4] = n[0] * i + n[1] * o + l), (r[5] = n[0] * a + n[1] * s + c);
                    }
                    return r;
                }
                function R(e, t, n) {
                    var r;
                    return this.isIdentity() ? [e, t, n] : [e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]];
                }
                function P(e, t) {
                    if (this.isIdentity()) return e + ',' + t;
                    var n = this.props;
                    return Math.round((e * n[0] + t * n[4] + n[12]) * 100) / 100 + ',' + Math.round((e * n[1] + t * n[5] + n[13]) * 100) / 100;
                }
                function w() {
                    for (var e = 0, t = this.props, n = 'matrix3d(', i = 10000; e < 16; ) (n += r(t[e] * i) / i), (n += 15 === e ? ')' : ','), (e += 1);
                    return n;
                }
                function D(e) {
                    var t = 10000;
                    return (e < 0.000001 && e > 0) || (e > -0.000001 && e < 0) ? r(e * t) / t : e;
                }
                function L() {
                    var e = this.props;
                    return 'matrix(' + D(e[0]) + ',' + D(e[1]) + ',' + D(e[4]) + ',' + D(e[5]) + ',' + D(e[12]) + ',' + D(e[13]) + ')';
                }
                return function () {
                    (this.reset = i), (this.rotate = a), (this.rotateX = o), (this.rotateY = s), (this.rotateZ = l), (this.skew = u), (this.skewFromAxis = d), (this.shear = c), (this.scale = f), (this.setTransform = _), (this.translate = p), (this.transform = h), (this.multiply = m), (this.applyToPoint = v), (this.applyToX = O), (this.applyToY = I), (this.applyToZ = S), (this.applyToPointArray = R), (this.applyToTriplePoints = C), (this.applyToPointStringified = P), (this.toCSS = w), (this.to2dCSS = L), (this.clone = b), (this.cloneFromProps = y), (this.equals = E), (this.inversePoints = N), (this.inversePoint = A), (this.getInverseMatrix = T), (this._t = this.transform), (this.isIdentity = g), (this._identity = !0), (this._identityCalculated = !1), (this.props = createTypedArray('float32', 16)), this.reset();
                };
            })();
        function _typeof$3(e) {
            return (_typeof$3 =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        var lottie = {},
            standalone = '__[STANDALONE]__',
            animationData = '__[ANIMATIONDATA]__',
            renderer = '';
        function setLocation(e) {
            setLocationHref(e);
        }
        function searchAnimations() {
            !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
        }
        function setSubframeRendering(e) {
            setSubframeEnabled(e);
        }
        function setPrefix(e) {
            setIdPrefix(e);
        }
        function loadAnimation(e) {
            return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e);
        }
        function setQuality(e) {
            if ('string' == typeof e)
                switch (e) {
                    case 'high':
                        setDefaultCurveSegments(200);
                        break;
                    default:
                    case 'medium':
                        setDefaultCurveSegments(50);
                        break;
                    case 'low':
                        setDefaultCurveSegments(10);
                }
            else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
            getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0);
        }
        function inBrowser() {
            return 'undefined' != typeof navigator;
        }
        function installPlugin(e, t) {
            'expressions' === e && setExpressionsPlugin(t);
        }
        function getFactory(e) {
            switch (e) {
                case 'propertyFactory':
                    return PropertyFactory;
                case 'shapePropertyFactory':
                    return ShapePropertyFactory;
                case 'matrix':
                    return Matrix;
                default:
                    return null;
            }
        }
        function checkReady() {
            'complete' === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
        }
        function getQueryVariable(e) {
            for (var t = queryString.split('&'), n = 0; n < t.length; n += 1) {
                var r = t[n].split('=');
                if (decodeURIComponent(r[0]) == e) return decodeURIComponent(r[1]);
            }
            return null;
        }
        (lottie.play = animationManager.play), (lottie.pause = animationManager.pause), (lottie.setLocationHref = setLocation), (lottie.togglePause = animationManager.togglePause), (lottie.setSpeed = animationManager.setSpeed), (lottie.setDirection = animationManager.setDirection), (lottie.stop = animationManager.stop), (lottie.searchAnimations = searchAnimations), (lottie.registerAnimation = animationManager.registerAnimation), (lottie.loadAnimation = loadAnimation), (lottie.setSubframeRendering = setSubframeRendering), (lottie.resize = animationManager.resize), (lottie.goToAndStop = animationManager.goToAndStop), (lottie.destroy = animationManager.destroy), (lottie.setQuality = setQuality), (lottie.inBrowser = inBrowser), (lottie.installPlugin = installPlugin), (lottie.freeze = animationManager.freeze), (lottie.unfreeze = animationManager.unfreeze), (lottie.setVolume = animationManager.setVolume), (lottie.mute = animationManager.mute), (lottie.unmute = animationManager.unmute), (lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations), (lottie.useWebWorker = setWebWorker), (lottie.setIDPrefix = setPrefix), (lottie.__getFactory = getFactory), (lottie.version = '5.12.2');
        var queryString = '';
        if (standalone) {
            var scripts = document.getElementsByTagName('script'),
                index = scripts.length - 1,
                myScript = scripts[index] || { src: '' };
            (queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, '') : ''), (renderer = getQueryVariable('renderer'));
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            'object' === _typeof$3(exports) || ('function' == typeof define && define.amd) || (window.bodymovin = lottie);
        } catch (err) {}
        var ShapeModifiers = (function () {
            var e = {},
                t = {};
            function n(e, n, r) {
                return new t[e](n, r);
            }
            return (
                (e.registerModifier = function e(e, n) {
                    t[e] || (t[e] = n);
                }),
                (e.getModifier = n),
                e
            );
        })();
        function ShapeModifier() {}
        function TrimModifier() {}
        function PuckerAndBloatModifier() {}
        (ShapeModifier.prototype.initModifierProperties = function () {}),
            (ShapeModifier.prototype.addShapeToModifier = function () {}),
            (ShapeModifier.prototype.addShape = function (e) {
                if (!this.closed) {
                    e.sh.container.addDynamicProperty(e.sh);
                    var t = {
                        shape: e.sh,
                        data: e,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated();
                }
            }),
            (ShapeModifier.prototype.init = function (e, t) {
                (this.shapes = []), (this.elem = e), this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), (this.frameId = initialDefaultFrame), (this.closed = !1), (this.k = !1), this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (ShapeModifier.prototype.processKeys = function () {
                this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties());
            }),
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            (TrimModifier.prototype.initModifierProperties = function (e, t) {
                (this.s = PropertyFactory.getProp(e, t.s, 0, 0.01, this)), (this.e = PropertyFactory.getProp(e, t.e, 0, 0.01, this)), (this.o = PropertyFactory.getProp(e, t.o, 0, 0, this)), (this.sValue = 0), (this.eValue = 0), (this.getValue = this.processKeys), (this.m = t.m), (this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length);
            }),
            (TrimModifier.prototype.addShapeToModifier = function (e) {
                e.pathsData = [];
            }),
            (TrimModifier.prototype.calculateShapeEdges = function (e, t, n, r, i) {
                var a,
                    o,
                    s,
                    l = [];
                t <= 1
                    ? l.push({
                          s: e,
                          e: t
                      })
                    : e >= 1
                      ? l.push({
                            s: e - 1,
                            e: t - 1
                        })
                      : (l.push({
                            s: e,
                            e: 1
                        }),
                        l.push({
                            s: 0,
                            e: t - 1
                        }));
                var c = [],
                    u = l.length;
                for (a = 0; a < u; a += 1) (o = l[a]).e * i < r || o.s * i > r + n || ((s = o.s * i <= r ? 0 : (o.s * i - r) / n), c.push([s, o.e * i >= r + n ? 1 : (o.e * i - r) / n]));
                return c.length || c.push([0, 0]), c;
            }),
            (TrimModifier.prototype.releasePathsData = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) segmentsLengthPool.release(e[t]);
                return (e.length = 0), e;
            }),
            (TrimModifier.prototype.processShapes = function (e) {
                if (this._mdf || e) {
                    var t = (this.o.v % 360) / 360;
                    if ((t < 0 && (t += 1), (a = this.s.v > 1 ? 1 + t : this.s.v < 0 ? 0 + t : this.s.v + t) > (o = this.e.v > 1 ? 1 + t : this.e.v < 0 ? 0 + t : this.e.v + t))) {
                        var n = a;
                        (a = o), (o = n);
                    }
                    (a = 0.0001 * Math.round(10000 * a)), (o = 0.0001 * Math.round(10000 * o)), (this.sValue = a), (this.eValue = o);
                } else (a = this.sValue), (o = this.eValue);
                var r = this.shapes.length,
                    i = 0;
                if (o === a) for (l = 0; l < r; l += 1) this.shapes[l].localShapeCollection.releaseShapes(), (this.shapes[l].shape._mdf = !0), (this.shapes[l].shape.paths = this.shapes[l].localShapeCollection), this._mdf && (this.shapes[l].pathsData.length = 0);
                else if ((1 !== o || 0 !== a) && (0 !== o || 1 !== a)) {
                    var a,
                        o,
                        s,
                        l,
                        c,
                        u,
                        d,
                        f,
                        _,
                        p,
                        h,
                        m,
                        g = [];
                    for (l = 0; l < r; l += 1)
                        if ((p = this.shapes[l]).shape._mdf || this._mdf || e || 2 === this.m) {
                            if (((u = (s = p.shape.paths)._length), (_ = 0), !p.shape._mdf && p.pathsData.length)) _ = p.totalShapeLength;
                            else {
                                for (c = 0, d = this.releasePathsData(p.pathsData); c < u; c += 1) (f = bez.getSegmentsLength(s.shapes[c])), d.push(f), (_ += f.totalLength);
                                (p.totalShapeLength = _), (p.pathsData = d);
                            }
                            (i += _), (p.shape._mdf = !0);
                        } else p.shape.paths = p.localShapeCollection;
                    var E = a,
                        b = o,
                        y = 0;
                    for (l = r - 1; l >= 0; l -= 1)
                        if ((p = this.shapes[l]).shape._mdf) {
                            for ((h = p.localShapeCollection).releaseShapes(), 2 === this.m && r > 1 ? ((m = this.calculateShapeEdges(a, o, p.totalShapeLength, y, i)), (y += p.totalShapeLength)) : (m = [[E, b]]), u = m.length, c = 0; c < u; c += 1) {
                                (E = m[c][0]),
                                    (b = m[c][1]),
                                    (g.length = 0),
                                    b <= 1
                                        ? g.push({
                                              s: p.totalShapeLength * E,
                                              e: p.totalShapeLength * b
                                          })
                                        : E >= 1
                                          ? g.push({
                                                s: p.totalShapeLength * (E - 1),
                                                e: p.totalShapeLength * (b - 1)
                                            })
                                          : (g.push({
                                                s: p.totalShapeLength * E,
                                                e: p.totalShapeLength
                                            }),
                                            g.push({
                                                s: 0,
                                                e: p.totalShapeLength * (b - 1)
                                            }));
                                var v = this.addShapes(p, g[0]);
                                if (g[0].s !== g[0].e) {
                                    if (g.length > 1)
                                        if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
                                            var O = v.pop();
                                            this.addPaths(v, h), (v = this.addShapes(p, g[1], O));
                                        } else this.addPaths(v, h), (v = this.addShapes(p, g[1]));
                                    this.addPaths(v, h);
                                }
                            }
                            p.shape.paths = h;
                        }
                } else if (this._mdf) for (l = 0; l < r; l += 1) (this.shapes[l].pathsData.length = 0), (this.shapes[l].shape._mdf = !0);
            }),
            (TrimModifier.prototype.addPaths = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) t.addShape(e[n]);
            }),
            (TrimModifier.prototype.addSegment = function (e, t, n, r, i, a, o) {
                i.setXYAt(t[0], t[1], 'o', a), i.setXYAt(n[0], n[1], 'i', a + 1), o && i.setXYAt(e[0], e[1], 'v', a), i.setXYAt(r[0], r[1], 'v', a + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function (e, t, n, r) {
                t.setXYAt(e[1], e[5], 'o', n), t.setXYAt(e[2], e[6], 'i', n + 1), r && t.setXYAt(e[0], e[4], 'v', n), t.setXYAt(e[3], e[7], 'v', n + 1);
            }),
            (TrimModifier.prototype.addShapes = function (e, t, n) {
                var r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    c,
                    u,
                    d = e.pathsData,
                    f = e.shape.paths.shapes,
                    _ = e.shape.paths._length,
                    p = 0,
                    h = [],
                    m = !0;
                for (n ? ((s = n._length), (u = n._length)) : ((n = shapePool.newElement()), (s = 0), (u = 0)), h.push(n), r = 0; r < _; r += 1) {
                    for (i = 1, l = d[r].lengths, n.c = f[r].c, a = f[r].c ? l.length : l.length + 1; i < a; i += 1)
                        if (p + (o = l[i - 1]).addedLength < t.s) (p += o.addedLength), (n.c = !1);
                        else if (p > t.e) {
                            n.c = !1;
                            break;
                        } else t.s <= p && t.e >= p + o.addedLength ? (this.addSegment(f[r].v[i - 1], f[r].o[i - 1], f[r].i[i], f[r].v[i], n, s, m), (m = !1)) : ((c = bez.getNewSegment(f[r].v[i - 1], f[r].v[i], f[r].o[i - 1], f[r].i[i], (t.s - p) / o.addedLength, (t.e - p) / o.addedLength, l[i - 1])), this.addSegmentFromArray(c, n, s, m), (m = !1), (n.c = !1)), (p += o.addedLength), (s += 1);
                    if (f[r].c && l.length) {
                        if (((o = l[i - 1]), p <= t.e)) {
                            var g = l[i - 1].addedLength;
                            t.s <= p && t.e >= p + g ? (this.addSegment(f[r].v[i - 1], f[r].o[i - 1], f[r].i[0], f[r].v[0], n, s, m), (m = !1)) : ((c = bez.getNewSegment(f[r].v[i - 1], f[r].v[0], f[r].o[i - 1], f[r].i[0], (t.s - p) / g, (t.e - p) / g, l[i - 1])), this.addSegmentFromArray(c, n, s, m), (m = !1), (n.c = !1));
                        } else n.c = !1;
                        (p += o.addedLength), (s += 1);
                    }
                    if ((n._length && (n.setXYAt(n.v[u][0], n.v[u][1], 'i', u), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], 'o', n._length - 1)), p > t.e)) break;
                    r < _ - 1 && ((n = shapePool.newElement()), (m = !0), h.push(n), (s = 0));
                }
                return h;
            }),
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            (PuckerAndBloatModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)), (this._isAnimated = !!this.amount.effectsSequence.length);
            }),
            (PuckerAndBloatModifier.prototype.processPath = function (e, t) {
                var n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l = t / 100,
                    c = [0, 0],
                    u = e._length,
                    d = 0;
                for (d = 0; d < u; d += 1) (c[0] += e.v[d][0]), (c[1] += e.v[d][1]);
                (c[0] /= u), (c[1] /= u);
                var f = shapePool.newElement();
                for (d = 0, f.c = e.c; d < u; d += 1) (n = e.v[d][0] + (c[0] - e.v[d][0]) * l), (r = e.v[d][1] + (c[1] - e.v[d][1]) * l), (i = e.o[d][0] + -((c[0] - e.o[d][0]) * l)), (a = e.o[d][1] + -((c[1] - e.o[d][1]) * l)), (o = e.i[d][0] + -((c[0] - e.i[d][0]) * l)), (s = e.i[d][1] + -((c[1] - e.i[d][1]) * l)), f.setTripleAt(n, r, i, a, o, s, d);
                return f;
            }),
            (PuckerAndBloatModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s = this.shapes.length,
                    l = this.amount.v;
                if (0 !== l)
                    for (n = 0; n < s; n += 1) {
                        if (((o = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) o.addShape(this.processPath(t[r], l));
                        a.shape.paths = a.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            });
        var TransformPropertyFactory = (function () {
            var e = [0, 0];
            function t(e) {
                this._addDynamicProperty(e), this.elem.addDynamicProperty(e), (this._isDirty = !0);
            }
            function n(e, t, n) {
                if (
                    ((this.elem = e),
                    (this.frameId = -1),
                    (this.propType = 'transform'),
                    (this.data = t),
                    (this.v = new Matrix()),
                    (this.pre = new Matrix()),
                    (this.appliedTransformations = 0),
                    this.initDynamicPropertyContainer(n || e),
                    t.p && t.p.s
                        ? ((this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this)), (this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this)), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this)))
                        : (this.p = PropertyFactory.getProp(
                              e,
                              t.p || {
                                  k: [0, 0, 0]
                              },
                              1,
                              0,
                              this
                          )),
                    t.rx)
                ) {
                    if (((this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this)), (this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this)), (this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this)), t.or.k[0].ti)) {
                        var r,
                            i = t.or.k.length;
                        for (r = 0; r < i; r += 1) (t.or.k[r].to = null), (t.or.k[r].ti = null);
                    }
                    (this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this)), (this.or.sh = !0);
                } else this.r = PropertyFactory.getProp(e, t.r || { k: 0 }, 0, degToRads, this);
                t.sk && ((this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this)), (this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this))),
                    (this.a = PropertyFactory.getProp(
                        e,
                        t.a || {
                            k: [0, 0, 0]
                        },
                        1,
                        0,
                        this
                    )),
                    (this.s = PropertyFactory.getProp(
                        e,
                        t.s || {
                            k: [100, 100, 100]
                        },
                        1,
                        0.01,
                        this
                    )),
                    t.o
                        ? (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, e))
                        : (this.o = {
                              _mdf: !1,
                              v: 1
                          }),
                    (this._isDirty = !0),
                    this.dynamicProperties.length || this.getValue(!0);
            }
            return (
                (n.prototype = {
                    applyToMatrix: function (e) {
                        var t = this._mdf;
                        this.iterateDynamicProperties(), (this._mdf = this._mdf || t), this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? (this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0)) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    },
                    getValue: function (t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if ((this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)), this.iterateDynamicProperties(), this._mdf || t)) {
                                var n;
                                if ((this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented)) {
                                    if (((n = this.elem.globalData.frameRate), this.p && this.p.keyframes && this.p.getValueAtTime)) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? ((r = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / n, 0)), (i = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0))) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? ((r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0)), (i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / n, 0))) : ((r = this.p.pv), (i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / n, this.p.offsetTime)));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        var r = [],
                                            i = [],
                                            a = this.px,
                                            o = this.py;
                                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? ((r[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / n, 0)), (r[1] = o.getValueAtTime((o.keyframes[0].t + 0.01) / n, 0)), (i[0] = a.getValueAtTime(a.keyframes[0].t / n, 0)), (i[1] = o.getValueAtTime(o.keyframes[0].t / n, 0))) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? ((r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / n, 0)), (r[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / n, 0)), (i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / n, 0)), (i[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - 0.01) / n, 0))) : ((r = [a.pv, o.pv]), (i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - 0.01) / n, a.offsetTime)), (i[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - 0.01) / n, o.offsetTime)));
                                    } else r = i = e;
                                    this.v.rotate(-Math.atan2(r[1] - i[1], r[0] - i[0]));
                                }
                                this.data.p && this.data.p.s ? (this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0)) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                            }
                            this.frameId = this.elem.globalData.frameId;
                        }
                    },
                    precalculateMatrix: function () {
                        if (((this.appliedTransformations = 0), this.pre.reset(), !this.a.effectsSequence.length)) {
                            if ((this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), (this.appliedTransformations = 1), !this.s.effectsSequence.length)) {
                                if ((this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), (this.appliedTransformations = 2), this.sk))
                                    if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                    else this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
                                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4)) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), (this.appliedTransformations = 4));
                            }
                        }
                    },
                    autoOrient: function () {}
                }),
                extendPrototype([DynamicPropertyContainer], n),
                (n.prototype.addDynamicProperty = t),
                (n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                    getTransformProperty: function (e, t, r) {
                        return new n(e, t, r);
                    }
                }
            );
        })();
        function RepeaterModifier() {}
        function RoundCornersModifier() {}
        function floatEqual(e, t) {
            return 100000 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t));
        }
        function floatZero(e) {
            return 0.00001 >= Math.abs(e);
        }
        function lerp(e, t, n) {
            return e * (1 - n) + t * n;
        }
        function lerpPoint(e, t, n) {
            return [lerp(e[0], t[0], n), lerp(e[1], t[1], n)];
        }
        function quadRoots(e, t, n) {
            if (0 === e) return [];
            var r = t * t - 4 * e * n;
            if (r < 0) return [];
            var i = -t / (2 * e);
            if (0 === r) return [i];
            var a = Math.sqrt(r) / (2 * e);
            return [i - a, i + a];
        }
        function polynomialCoefficients(e, t, n, r) {
            return [-e + 3 * t - 3 * n + r, 3 * e - 6 * t + 3 * n, -3 * e + 3 * t, e];
        }
        function singlePoint(e) {
            return new PolynomialBezier(e, e, e, e, !1);
        }
        function PolynomialBezier(e, t, n, r, i) {
            i && pointEqual(e, t) && (t = lerpPoint(e, r, 1 / 3)), i && pointEqual(n, r) && (n = lerpPoint(e, r, 2 / 3));
            var a = polynomialCoefficients(e[0], t[0], n[0], r[0]),
                o = polynomialCoefficients(e[1], t[1], n[1], r[1]);
            (this.a = [a[0], o[0]]), (this.b = [a[1], o[1]]), (this.c = [a[2], o[2]]), (this.d = [a[3], o[3]]), (this.points = [e, t, n, r]);
        }
        function extrema(e, t) {
            var n = e.points[0][t],
                r = e.points[e.points.length - 1][t];
            if (n > r) {
                var i = r;
                (r = n), (n = i);
            }
            for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), o = 0; o < a.length; o += 1)
                if (a[o] > 0 && a[o] < 1) {
                    var s = e.point(a[o])[t];
                    s < n ? (n = s) : s > r && (r = s);
                }
            return {
                min: n,
                max: r
            };
        }
        function intersectData(e, t, n) {
            var r = e.boundingBox();
            return {
                cx: r.cx,
                cy: r.cy,
                width: r.width,
                height: r.height,
                bez: e,
                t: (t + n) / 2,
                t1: t,
                t2: n
            };
        }
        function splitData(e) {
            var t = e.bez.split(0.5);
            return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)];
        }
        function boxIntersect(e, t) {
            return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height;
        }
        function intersectsImpl(e, t, n, r, i, a) {
            if (boxIntersect(e, t)) {
                if (n >= a || (e.width <= r && e.height <= r && t.width <= r && t.height <= r)) return void i.push([e.t, t.t]);
                var o = splitData(e),
                    s = splitData(t);
                intersectsImpl(o[0], s[0], n + 1, r, i, a), intersectsImpl(o[0], s[1], n + 1, r, i, a), intersectsImpl(o[1], s[0], n + 1, r, i, a), intersectsImpl(o[1], s[1], n + 1, r, i, a);
            }
        }
        function crossProduct(e, t) {
            return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
        }
        function lineIntersection(e, t, n, r) {
            var i = [e[0], e[1], 1],
                a = [t[0], t[1], 1],
                o = [n[0], n[1], 1],
                s = [r[0], r[1], 1],
                l = crossProduct(crossProduct(i, a), crossProduct(o, s));
            return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]];
        }
        function polarOffset(e, t, n) {
            return [e[0] + Math.cos(t) * n, e[1] - Math.sin(t) * n];
        }
        function pointDistance(e, t) {
            return Math.hypot(e[0] - t[0], e[1] - t[1]);
        }
        function pointEqual(e, t) {
            return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1]);
        }
        function ZigZagModifier() {}
        function setPoint(e, t, n, r, i, a, o) {
            var s = n - Math.PI / 2,
                l = n + Math.PI / 2,
                c = t[0] + Math.cos(n) * r * i,
                u = t[1] - Math.sin(n) * r * i;
            e.setTripleAt(c, u, c + Math.cos(s) * a, u - Math.sin(s) * a, c + Math.cos(l) * o, u - Math.sin(l) * o, e.length());
        }
        function getPerpendicularVector(e, t) {
            var n = [t[0] - e[0], t[1] - e[1]],
                r = -(0.5 * Math.PI);
            return [Math.cos(r) * n[0] - Math.sin(r) * n[1], Math.sin(r) * n[0] + Math.cos(r) * n[1]];
        }
        function getProjectingAngle(e, t) {
            var n = 0 === t ? e.length() - 1 : t - 1,
                r = (t + 1) % e.length(),
                i = getPerpendicularVector(e.v[n], e.v[r]);
            return Math.atan2(0, 1) - Math.atan2(i[1], i[0]);
        }
        function zigZagCorner(e, t, n, r, i, a, o) {
            var s = getProjectingAngle(t, n),
                l = t.v[n % t._length],
                c = t.v[0 === n ? t._length - 1 : n - 1],
                u = t.v[(n + 1) % t._length],
                d = 2 === a ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0,
                f = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0;
            setPoint(e, t.v[n % t._length], s, o, r, f / ((i + 1) * 2), d / ((i + 1) * 2), a);
        }
        function zigZagSegment(e, t, n, r, i, a) {
            for (var o = 0; o < r; o += 1) {
                var s = (o + 1) / (r + 1),
                    l = 2 === i ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
                    c = t.normalAngle(s);
                setPoint(e, t.point(s), c, a, n, l / ((r + 1) * 2), l / ((r + 1) * 2), i), (a = -a);
            }
            return a;
        }
        function linearOffset(e, t, n) {
            var r = Math.atan2(t[0] - e[0], t[1] - e[1]);
            return [polarOffset(e, r, n), polarOffset(t, r, n)];
        }
        function offsetSegment(e, t) {
            (n = (s = linearOffset(e.points[0], e.points[1], t))[0]), (r = s[1]), (i = (s = linearOffset(e.points[1], e.points[2], t))[0]), (a = s[1]), (o = (s = linearOffset(e.points[2], e.points[3], t))[0]);
            var n,
                r,
                i,
                a,
                o,
                s,
                l = s[1],
                c = lineIntersection(n, r, i, a);
            null === c && (c = r);
            var u = lineIntersection(o, l, i, a);
            return null === u && (u = o), new PolynomialBezier(n, c, u, l);
        }
        function joinLines(e, t, n, r, i) {
            var a = t.points[3],
                o = n.points[0];
            if (3 === r || pointEqual(a, o)) return a;
            if (2 === r) {
                var s = -t.tangentAngle(1),
                    l = -n.tangentAngle(0) + Math.PI,
                    c = lineIntersection(a, polarOffset(a, s + Math.PI / 2, 100), o, polarOffset(o, s + Math.PI / 2, 100)),
                    u = c ? pointDistance(c, a) : pointDistance(a, o) / 2,
                    d = polarOffset(a, s, 2 * u * roundCorner);
                return e.setXYAt(d[0], d[1], 'o', e.length() - 1), (d = polarOffset(o, l, 2 * u * roundCorner)), e.setTripleAt(o[0], o[1], o[0], o[1], d[0], d[1], e.length()), o;
            }
            var f = pointEqual(a, t.points[2]) ? t.points[0] : t.points[2],
                _ = pointEqual(o, n.points[1]) ? n.points[3] : n.points[1],
                p = lineIntersection(f, a, o, _);
            return p && pointDistance(p, a) < i ? (e.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], e.length()), p) : a;
        }
        function getIntersection(e, t) {
            var n = e.intersections(t);
            return (n.length && floatEqual(n[0][0], 1) && n.shift(), n.length) ? n[0] : null;
        }
        function pruneSegmentIntersection(e, t) {
            var n = e.slice(),
                r = t.slice(),
                i = getIntersection(e[e.length - 1], t[0]);
            return (i && ((n[e.length - 1] = e[e.length - 1].split(i[0])[0]), (r[0] = t[0].split(i[1])[1])), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1]))) ? [[e[0].split(i[0])[0]], [t[t.length - 1].split(i[1])[1]]] : [n, r];
        }
        function pruneIntersections(e) {
            for (var t, n = 1; n < e.length; n += 1) (t = pruneSegmentIntersection(e[n - 1], e[n])), (e[n - 1] = t[0]), (e[n] = t[1]);
            return e.length > 1 && ((t = pruneSegmentIntersection(e[e.length - 1], e[0])), (e[e.length - 1] = t[0]), (e[0] = t[1])), e;
        }
        function offsetSegmentSplit(e, t) {
            var n,
                r,
                i,
                a,
                o = e.inflectionPoints();
            if (0 === o.length) return [offsetSegment(e, t)];
            if (1 === o.length || floatEqual(o[1], 1)) return (n = (i = e.split(o[0]))[0]), (r = i[1]), [offsetSegment(n, t), offsetSegment(r, t)];
            n = (i = e.split(o[0]))[0];
            var s = (o[1] - o[0]) / (1 - o[0]);
            return (a = (i = i[1].split(s))[0]), (r = i[1]), [offsetSegment(n, t), offsetSegment(a, t), offsetSegment(r, t)];
        }
        function OffsetPathModifier() {}
        function getFontProperties(e) {
            for (var t = e.fStyle ? e.fStyle.split(' ') : [], n = 'normal', r = 'normal', i = t.length, a = 0; a < i; a += 1)
                switch (t[a].toLowerCase()) {
                    case 'italic':
                        r = 'italic';
                        break;
                    case 'bold':
                        n = '700';
                        break;
                    case 'black':
                        n = '900';
                        break;
                    case 'medium':
                        n = '500';
                        break;
                    case 'regular':
                    case 'normal':
                        n = '400';
                        break;
                    case 'light':
                    case 'thin':
                        n = '200';
                }
            return {
                style: r,
                weight: e.fWeight || n
            };
        }
        extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.c = PropertyFactory.getProp(e, t.c, 0, null, this)), (this.o = PropertyFactory.getProp(e, t.o, 0, null, this)), (this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this)), (this.so = PropertyFactory.getProp(e, t.tr.so, 0, 0.01, this)), (this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, 0.01, this)), (this.data = t), this.dynamicProperties.length || this.getValue(!0), (this._isAnimated = !!this.dynamicProperties.length), (this.pMatrix = new Matrix()), (this.rMatrix = new Matrix()), (this.sMatrix = new Matrix()), (this.tMatrix = new Matrix()), (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function (e, t, n, r, i, a) {
                var o = a ? -1 : 1,
                    s = r.s.v[0] + (1 - r.s.v[0]) * (1 - i),
                    l = r.s.v[1] + (1 - r.s.v[1]) * (1 - i);
                e.translate(r.p.v[0] * o * i, r.p.v[1] * o * i, r.p.v[2]), t.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), t.rotate(-r.r.v * o * i), t.translate(r.a.v[0], r.a.v[1], r.a.v[2]), n.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), n.scale(a ? 1 / s : s, a ? 1 / l : l), n.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function (e, t, n, r) {
                for (this.elem = e, this.arr = t, this.pos = n, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[n]); n > 0; ) (n -= 1), this._elements.unshift(t[n]);
                this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (RepeaterModifier.prototype.resetElements = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) (e[t]._processed = !1), 'gr' === e[t].ty && this.resetElements(e[t].it);
            }),
            (RepeaterModifier.prototype.cloneElements = function (e) {
                var t = JSON.parse(JSON.stringify(e));
                return this.resetElements(t), t;
            }),
            (RepeaterModifier.prototype.changeGroupRender = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) (e[n]._render = t), 'gr' === e[n].ty && this.changeGroupRender(e[n].it, t);
            }),
            (RepeaterModifier.prototype.processShapes = function (e) {
                var t = !1;
                if (this._mdf || e) {
                    var n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        l,
                        c,
                        u = Math.ceil(this.c.v);
                    if (this._groups.length < u) {
                        for (; this._groups.length < u; ) {
                            var d = {
                                it: this.cloneElements(this._elements),
                                ty: 'gr'
                            };
                            d.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: 'Transform',
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [
                                        {
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        },
                                        {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }
                                    ]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: 'tr'
                            }),
                                this.arr.splice(0, 0, d),
                                this._groups.splice(0, 0, d),
                                (this._currentCopies += 1);
                        }
                        this.elem.reloadShapes(), (t = !0);
                    }
                    for (i = 0, o = 0; i <= this._groups.length - 1; i += 1) {
                        if (((s = o < u), (this._groups[i]._render = s), this.changeGroupRender(this._groups[i].it, s), !s)) {
                            var f = this.elemsData[i].it,
                                _ = f[f.length - 1];
                            0 !== _.transform.op.v ? ((_.transform.op._mdf = !0), (_.transform.op.v = 0)) : (_.transform.op._mdf = !1);
                        }
                        o += 1;
                    }
                    this._currentCopies = u;
                    var p = this.o.v,
                        h = p % 1,
                        m = p > 0 ? Math.floor(p) : Math.ceil(p),
                        g = this.pMatrix.props,
                        E = this.rMatrix.props,
                        b = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var y = 0;
                    if (p > 0) {
                        for (; y < m; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (y += 1);
                        h && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, h, !1), (y += h));
                    } else if (p < 0) {
                        for (; y > m; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), (y -= 1);
                        h && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -h, !0), (y -= h));
                    }
                    for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, o = this._currentCopies; o; ) {
                        if (((c = (r = (n = this.elemsData[i].it)[n.length - 1].transform.mProps.v.props).length), (n[n.length - 1].transform.mProps._mdf = !0), (n[n.length - 1].transform.op._mdf = !0), (n[n.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1))), 0 !== y)) {
                            for (((0 !== i && 1 === a) || (i !== this._currentCopies - 1 && -1 === a)) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13], E[14], E[15]), this.matrix.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), l = 0; l < c; l += 1) r[l] = this.matrix.props[l];
                            this.matrix.reset();
                        } else for (this.matrix.reset(), l = 0; l < c; l += 1) r[l] = this.matrix.props[l];
                        (y += 1), (o -= 1), (i += a);
                    }
                } else for (o = this._currentCopies, i = 0, a = 1; o; ) (r = (n = this.elemsData[i].it)[n.length - 1].transform.mProps.v.props), (n[n.length - 1].transform.mProps._mdf = !1), (n[n.length - 1].transform.op._mdf = !1), (o -= 1), (i += a);
                return t;
            }),
            (RepeaterModifier.prototype.addShape = function () {}),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.rd = PropertyFactory.getProp(e, t.r, 0, null, this)), (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function (e, t) {
                var n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    c,
                    u,
                    d,
                    f,
                    _,
                    p,
                    h = shapePool.newElement();
                h.c = e.c;
                var m = e._length,
                    g = 0;
                for (n = 0; n < m; n += 1) (r = e.v[n]), (a = e.o[n]), (i = e.i[n]), r[0] === a[0] && r[1] === a[1] && r[0] === i[0] && r[1] === i[1] ? ((0 !== n && n !== m - 1) || e.c ? ((o = 0 === n ? e.v[m - 1] : e.v[n - 1]), (l = (s = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(s / 2, t) / s : 0), (c = _ = r[0] + (o[0] - r[0]) * l), (u = p = r[1] - (r[1] - o[1]) * l), (d = c - (c - r[0]) * roundCorner), (f = u - (u - r[1]) * roundCorner), h.setTripleAt(c, u, d, f, _, p, g), (g += 1), (o = n === m - 1 ? e.v[0] : e.v[n + 1]), (l = (s = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(s / 2, t) / s : 0), (c = d = r[0] + (o[0] - r[0]) * l), (u = f = r[1] + (o[1] - r[1]) * l), (_ = c - (c - r[0]) * roundCorner), (p = u - (u - r[1]) * roundCorner), h.setTripleAt(c, u, d, f, _, p, g)) : h.setTripleAt(r[0], r[1], a[0], a[1], i[0], i[1], g)) : h.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], g), (g += 1);
                return h;
            }),
            (RoundCornersModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s = this.shapes.length,
                    l = this.rd.v;
                if (0 !== l)
                    for (n = 0; n < s; n += 1) {
                        if (((o = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) o.addShape(this.processPath(t[r], l));
                        a.shape.paths = a.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            }),
            (PolynomialBezier.prototype.point = function (e) {
                return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]];
            }),
            (PolynomialBezier.prototype.derivative = function (e) {
                return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]];
            }),
            (PolynomialBezier.prototype.tangentAngle = function (e) {
                var t = this.derivative(e);
                return Math.atan2(t[1], t[0]);
            }),
            (PolynomialBezier.prototype.normalAngle = function (e) {
                var t = this.derivative(e);
                return Math.atan2(t[0], t[1]);
            }),
            (PolynomialBezier.prototype.inflectionPoints = function () {
                var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(e)) return [];
                var t = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / e,
                    n = t * t - ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / e;
                if (n < 0) return [];
                var r = Math.sqrt(n);
                return floatZero(r)
                    ? r > 0 && r < 1
                        ? [t]
                        : []
                    : [t - r, t + r].filter(function (e) {
                          return e > 0 && e < 1;
                      });
            }),
            (PolynomialBezier.prototype.split = function (e) {
                if (e <= 0) return [singlePoint(this.points[0]), this];
                if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                var t = lerpPoint(this.points[0], this.points[1], e),
                    n = lerpPoint(this.points[1], this.points[2], e),
                    r = lerpPoint(this.points[2], this.points[3], e),
                    i = lerpPoint(t, n, e),
                    a = lerpPoint(n, r, e),
                    o = lerpPoint(i, a, e);
                return [new PolynomialBezier(this.points[0], t, i, o, !0), new PolynomialBezier(o, a, r, this.points[3], !0)];
            }),
            (PolynomialBezier.prototype.bounds = function () {
                return {
                    x: extrema(this, 0),
                    y: extrema(this, 1)
                };
            }),
            (PolynomialBezier.prototype.boundingBox = function () {
                var e = this.bounds();
                return {
                    left: e.x.min,
                    right: e.x.max,
                    top: e.y.min,
                    bottom: e.y.max,
                    width: e.x.max - e.x.min,
                    height: e.y.max - e.y.min,
                    cx: (e.x.max + e.x.min) / 2,
                    cy: (e.y.max + e.y.min) / 2
                };
            }),
            (PolynomialBezier.prototype.intersections = function (e, t, n) {
                void 0 === t && (t = 2), void 0 === n && (n = 7);
                var r = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, r, n), r;
            }),
            (PolynomialBezier.shapeSegment = function (e, t) {
                var n = (t + 1) % e.length();
                return new PolynomialBezier(e.v[t], e.o[t], e.i[n], e.v[n], !0);
            }),
            (PolynomialBezier.shapeSegmentInverted = function (e, t) {
                var n = (t + 1) % e.length();
                return new PolynomialBezier(e.v[n], e.i[n], e.o[t], e.v[t], !0);
            }),
            extendPrototype([ShapeModifier], ZigZagModifier),
            (ZigZagModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this)), (this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this)), (this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this)), (this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length);
            }),
            (ZigZagModifier.prototype.processPath = function (e, t, n, r) {
                var i = e._length,
                    a = shapePool.newElement();
                if (((a.c = e.c), e.c || (i -= 1), 0 === i)) return a;
                var o = -1,
                    s = PolynomialBezier.shapeSegment(e, 0);
                zigZagCorner(a, e, 0, t, n, r, o);
                for (var l = 0; l < i; l += 1) (o = zigZagSegment(a, s, t, n, r, -o)), (s = l !== i - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % i) : null), zigZagCorner(a, e, l + 1, t, n, r, o);
                return a;
            }),
            (ZigZagModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s = this.shapes.length,
                    l = this.amplitude.v,
                    c = Math.max(0, Math.round(this.frequency.v)),
                    u = this.pointsType.v;
                if (0 !== l)
                    for (n = 0; n < s; n += 1) {
                        if (((o = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) o.addShape(this.processPath(t[r], l, c, u));
                        a.shape.paths = a.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            }),
            extendPrototype([ShapeModifier], OffsetPathModifier),
            (OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)), (this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this)), (this.lineJoin = t.lj), (this._isAnimated = 0 !== this.amount.effectsSequence.length);
            }),
            (OffsetPathModifier.prototype.processPath = function (e, t, n, r) {
                var i,
                    a,
                    o,
                    s = shapePool.newElement();
                s.c = e.c;
                var l = e.length();
                e.c || (l -= 1);
                var c = [];
                for (i = 0; i < l; i += 1) (o = PolynomialBezier.shapeSegment(e, i)), c.push(offsetSegmentSplit(o, t));
                if (!e.c) for (i = l - 1; i >= 0; i -= 1) (o = PolynomialBezier.shapeSegmentInverted(e, i)), c.push(offsetSegmentSplit(o, t));
                c = pruneIntersections(c);
                var u = null,
                    d = null;
                for (i = 0; i < c.length; i += 1) {
                    var f = c[i];
                    for (d && (u = joinLines(s, d, f[0], n, r)), d = f[f.length - 1], a = 0; a < f.length; a += 1) (o = f[a]), u && pointEqual(o.points[0], u) ? s.setXYAt(o.points[1][0], o.points[1][1], 'o', s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), (u = o.points[3]);
                }
                return c.length && joinLines(s, d, c[0][0], n, r), s;
            }),
            (OffsetPathModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s = this.shapes.length,
                    l = this.amount.v,
                    c = this.miterLimit.v,
                    u = this.lineJoin;
                if (0 !== l)
                    for (n = 0; n < s; n += 1) {
                        if (((o = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) o.addShape(this.processPath(t[r], l, u, c));
                        a.shape.paths = a.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            });
        var FontManager = (function () {
            var e = 5000,
                t = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: { shapes: [] }
                },
                n = [];
            n = n.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var r = 127988,
                i = 917631,
                a = 917601,
                o = 917626,
                s = 65039,
                l = 8205,
                c = 127462,
                u = 127487,
                d = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'];
            function f(e) {
                var t,
                    n = e.split(','),
                    r = n.length,
                    i = [];
                for (t = 0; t < r; t += 1) 'sans-serif' !== n[t] && 'monospace' !== n[t] && i.push(n[t]);
                return i.join(',');
            }
            function _(e, t) {
                var n = createTag('span');
                n.setAttribute('aria-hidden', !0), (n.style.fontFamily = t);
                var r = createTag('span');
                (r.innerText = 'giItT1WQy@!-/#'), (n.style.position = 'absolute'), (n.style.left = '-10000px'), (n.style.top = '-10000px'), (n.style.fontSize = '300px'), (n.style.fontVariant = 'normal'), (n.style.fontStyle = 'normal'), (n.style.fontWeight = 'normal'), (n.style.letterSpacing = '0'), n.appendChild(r), document.body.appendChild(n);
                var i = r.offsetWidth;
                return (
                    (r.style.fontFamily = f(e) + ', ' + t),
                    {
                        node: r,
                        w: i,
                        parent: n
                    }
                );
            }
            function p() {
                var t,
                    n,
                    r,
                    i = this.fonts.length,
                    a = i;
                for (t = 0; t < i; t += 1) this.fonts[t].loaded ? (a -= 1) : 'n' === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? (this.fonts[t].loaded = !0) : ((n = this.fonts[t].monoCase.node), (r = this.fonts[t].monoCase.w), n.offsetWidth !== r ? ((a -= 1), (this.fonts[t].loaded = !0)) : ((n = this.fonts[t].sansCase.node), (r = this.fonts[t].sansCase.w), n.offsetWidth !== r && ((a -= 1), (this.fonts[t].loaded = !0))), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                0 !== a && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function h(e, t) {
                var n,
                    r = document.body && t ? 'svg' : 'canvas',
                    i = getFontProperties(e);
                if ('svg' === r) {
                    var a = createNS('text');
                    (a.style.fontSize = '100px'), a.setAttribute('font-family', e.fFamily), a.setAttribute('font-style', i.style), a.setAttribute('font-weight', i.weight), (a.textContent = '1'), e.fClass ? ((a.style.fontFamily = 'inherit'), a.setAttribute('class', e.fClass)) : (a.style.fontFamily = e.fFamily), t.appendChild(a), (n = a);
                } else {
                    var o = new OffscreenCanvas(500, 500).getContext('2d');
                    (o.font = i.style + ' ' + i.weight + ' 100px ' + e.fFamily), (n = o);
                }
                return {
                    measureText: function (e) {
                        return 'svg' === r ? ((n.textContent = e), n.getComputedTextLength()) : n.measureText(e).width;
                    }
                };
            }
            function m(e, t) {
                if (!e) {
                    this.isLoaded = !0;
                    return;
                }
                if (this.chars) {
                    (this.isLoaded = !0), (this.fonts = e.list);
                    return;
                }
                if (!document.body) {
                    (this.isLoaded = !0),
                        e.list.forEach(function (e) {
                            (e.helper = h(e)), (e.cache = {});
                        }),
                        (this.fonts = e.list);
                    return;
                }
                var n = e.list,
                    r = n.length,
                    i = r;
                for (a = 0; a < r; a += 1) {
                    var a,
                        o,
                        s,
                        l = !0;
                    if (((n[a].loaded = !1), (n[a].monoCase = _(n[a].fFamily, 'monospace')), (n[a].sansCase = _(n[a].fFamily, 'sans-serif')), n[a].fPath)) {
                        if ('p' === n[a].fOrigin || 3 === n[a].origin) {
                            if (((o = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[a].fFamily + '"], style[f-origin="3"][f-family="' + n[a].fFamily + '"]')).length > 0 && (l = !1), l)) {
                                var c = createTag('style');
                                c.setAttribute('f-forigin', n[a].fOrigin), c.setAttribute('f-origin', n[a].origin), c.setAttribute('f-family', n[a].fFamily), (c.type = 'text/css'), (c.innerText = '@font-face {font-family: ' + n[a].fFamily + "; font-style: normal; src: url('" + n[a].fPath + "');}"), t.appendChild(c);
                            }
                        } else if ('g' === n[a].fOrigin || 1 === n[a].origin) {
                            for (s = 0, o = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'); s < o.length; s += 1) -1 !== o[s].href.indexOf(n[a].fPath) && (l = !1);
                            if (l) {
                                var u = createTag('link');
                                u.setAttribute('f-forigin', n[a].fOrigin), u.setAttribute('f-origin', n[a].origin), (u.type = 'text/css'), (u.rel = 'stylesheet'), (u.href = n[a].fPath), document.body.appendChild(u);
                            }
                        } else if ('t' === n[a].fOrigin || 2 === n[a].origin) {
                            for (s = 0, o = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'); s < o.length; s += 1) n[a].fPath === o[s].src && (l = !1);
                            if (l) {
                                var d = createTag('link');
                                d.setAttribute('f-forigin', n[a].fOrigin), d.setAttribute('f-origin', n[a].origin), d.setAttribute('rel', 'stylesheet'), d.setAttribute('href', n[a].fPath), t.appendChild(d);
                            }
                        }
                    } else (n[a].loaded = !0), (i -= 1);
                    (n[a].helper = h(n[a], t)), (n[a].cache = {}), this.fonts.push(n[a]);
                }
                0 === i ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function g(e) {
                if (e) {
                    this.chars || (this.chars = []);
                    var t,
                        n,
                        r,
                        i = e.length,
                        a = this.chars.length;
                    for (t = 0; t < i; t += 1) {
                        for (n = 0, r = !1; n < a; ) this.chars[n].style === e[t].style && this.chars[n].fFamily === e[t].fFamily && this.chars[n].ch === e[t].ch && (r = !0), (n += 1);
                        r || (this.chars.push(e[t]), (a += 1));
                    }
                }
            }
            function E(e, n, r) {
                for (var i = 0, a = this.chars.length; i < a; ) {
                    if (this.chars[i].ch === e && this.chars[i].style === n && this.chars[i].fFamily === r) return this.chars[i];
                    i += 1;
                }
                return (('string' == typeof e && 13 !== e.charCodeAt(0)) || !e) && console && console.warn && !this._warned && ((this._warned = !0), console.warn('Missing character from exported characters list: ', e, n, r)), t;
            }
            function b(e, t, n) {
                var r = this.getFontByName(t),
                    i = e;
                if (!r.cache[i]) {
                    var a = r.helper;
                    if (' ' === e) {
                        var o = a.measureText('|' + e + '|'),
                            s = a.measureText('||');
                        r.cache[i] = (o - s) / 100;
                    } else r.cache[i] = a.measureText(e) / 100;
                }
                return r.cache[i] * n;
            }
            function y(e) {
                for (var t = 0, n = this.fonts.length; t < n; ) {
                    if (this.fonts[t].fName === e) return this.fonts[t];
                    t += 1;
                }
                return this.fonts[0];
            }
            function v(e) {
                var t = 0,
                    n = e.charCodeAt(0);
                if (n >= 55296 && n <= 56319) {
                    var r = e.charCodeAt(1);
                    r >= 56320 && r <= 57343 && (t = (n - 55296) * 1024 + r - 56320 + 65536);
                }
                return t;
            }
            function O(e) {
                return e === l;
            }
            function I(e) {
                return e === s;
            }
            function S(e) {
                var t = v(e);
                return !!(t >= c) && !!(t <= u);
            }
            function T(e) {
                return S(e.substr(0, 2)) && S(e.substr(2, 2));
            }
            function A(e) {
                return -1 !== n.indexOf(e);
            }
            function N(e, t) {
                var n = v(e.substr(t, 2));
                if (n !== r) return !1;
                var s = 0;
                for (t += 2; s < 5; ) {
                    if ((n = v(e.substr(t, 2))) < a || n > o) return !1;
                    (s += 1), (t += 2);
                }
                return v(e.substr(t, 2)) === i;
            }
            function C() {
                this.isLoaded = !0;
            }
            var R = function () {
                (this.fonts = []), (this.chars = null), (this.typekitLoaded = 0), (this.isLoaded = !1), (this._warned = !1), (this.initTime = Date.now()), (this.setIsLoadedBinded = this.setIsLoaded.bind(this)), (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
            };
            return (
                (R.isModifier = function (e, t) {
                    var n = e.toString(16) + t.toString(16);
                    return -1 !== d.indexOf(n);
                }),
                (R.isZeroWidthJoiner = O),
                (R.isFlagEmoji = T),
                (R.isRegionalCode = S),
                (R.isCombinedCharacter = A),
                (R.isRegionalFlag = N),
                (R.isVariationSelector = I),
                (R.BLACK_FLAG_CODE_POINT = r),
                (R.prototype = {
                    addChars: g,
                    addFonts: m,
                    getCharData: E,
                    getFontByName: y,
                    measureText: b,
                    checkLoadedFonts: p,
                    setIsLoaded: C
                }),
                R
            );
        })();
        function SlotManager(e) {
            this.animationData = e;
        }
        function slotFactory(e) {
            return new SlotManager(e);
        }
        function RenderableElement() {}
        (SlotManager.prototype.getProp = function (e) {
            return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e;
        }),
            (RenderableElement.prototype = {
                initRenderable: function () {
                    (this.isInRange = !1), (this.hidden = !1), (this.isTransparent = !1), (this.renderableComponents = []);
                },
                addRenderableComponent: function (e) {
                    -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e);
                },
                removeRenderableComponent: function (e) {
                    -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
                },
                prepareRenderableFrame: function (e) {
                    this.checkLayerLimits(e);
                },
                checkTransparency: function () {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && ((this.isTransparent = !0), this.hide()) : this.isTransparent && ((this.isTransparent = !1), this.show());
                },
                checkLayerLimits: function (e) {
                    this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && ((this.globalData._mdf = !0), (this._mdf = !0), (this.isInRange = !0), this.show()) : !1 !== this.isInRange && ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
                },
                renderRenderable: function () {
                    var e,
                        t = this.renderableComponents.length;
                    for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
                },
                sourceRectAtTime: function () {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    };
                },
                getLayerSize: function () {
                    return 5 === this.data.ty
                        ? {
                              w: this.data.textData.width,
                              h: this.data.textData.height
                          }
                        : {
                              w: this.data.width,
                              h: this.data.height
                          };
                }
            });
        var getBlendMode = (function () {
            var e = {
                0: 'source-over',
                1: 'multiply',
                2: 'screen',
                3: 'overlay',
                4: 'darken',
                5: 'lighten',
                6: 'color-dodge',
                7: 'color-burn',
                8: 'hard-light',
                9: 'soft-light',
                10: 'difference',
                11: 'exclusion',
                12: 'hue',
                13: 'saturation',
                14: 'color',
                15: 'luminosity'
            };
            return function (t) {
                return e[t] || '';
            };
        })();
        function SliderEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function AngleEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function ColorEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 1, 0, n);
        }
        function PointEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 1, 0, n);
        }
        function LayerIndexEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function MaskIndexEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function CheckboxEffect(e, t, n) {
            this.p = PropertyFactory.getProp(t, e.v, 0, 0, n);
        }
        function NoValueEffect() {
            this.p = {};
        }
        function EffectsManager(e, t) {
            var n,
                r,
                i = e.ef || [];
            this.effectElements = [];
            var a = i.length;
            for (n = 0; n < a; n += 1) (r = new GroupEffect(i[n], t)), this.effectElements.push(r);
        }
        function GroupEffect(e, t) {
            this.init(e, t);
        }
        function BaseElement() {}
        function FrameElement() {}
        function FootageElement(e, t, n) {
            this.initFrame(), this.initRenderable(), (this.assetData = t.getAssetData(e.refId)), (this.footageData = t.imageLoader.getAsset(this.assetData)), this.initBaseData(e, t, n);
        }
        function AudioElement(e, t, n) {
            this.initFrame(), this.initRenderable(), (this.assetData = t.getAssetData(e.refId)), this.initBaseData(e, t, n), (this._isPlaying = !1), (this._canPlay = !1);
            var r = this.globalData.getAssetsPath(this.assetData);
            (this.audio = this.globalData.audioController.createAudio(r)), (this._currentTime = 0), this.globalData.audioController.addAudio(this), (this._volumeMultiplier = 1), (this._volume = 1), (this._previousVolume = null), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 }), (this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : { k: [100] }, 1, 0.01, this));
        }
        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function (e, t) {
                (this.data = e), (this.effectElements = []), this.initDynamicPropertyContainer(t);
                var n,
                    r,
                    i = this.data.ef.length,
                    a = this.data.ef;
                for (n = 0; n < i; n += 1) {
                    switch (((r = null), a[n].ty)) {
                        case 0:
                            r = new SliderEffect(a[n], t, this);
                            break;
                        case 1:
                            r = new AngleEffect(a[n], t, this);
                            break;
                        case 2:
                            r = new ColorEffect(a[n], t, this);
                            break;
                        case 3:
                            r = new PointEffect(a[n], t, this);
                            break;
                        case 4:
                        case 7:
                            r = new CheckboxEffect(a[n], t, this);
                            break;
                        case 10:
                            r = new LayerIndexEffect(a[n], t, this);
                            break;
                        case 11:
                            r = new MaskIndexEffect(a[n], t, this);
                            break;
                        case 5:
                            r = new EffectsManager(a[n], t, this);
                            break;
                        default:
                            r = new NoValueEffect(a[n], t, this);
                    }
                    r && this.effectElements.push(r);
                }
            }),
            (BaseElement.prototype = {
                checkMasks: function () {
                    if (!this.data.hasMask) return !1;
                    for (var e = 0, t = this.data.masksProperties.length; e < t; ) {
                        if ('n' !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
                        e += 1;
                    }
                    return !1;
                },
                initExpressions: function () {
                    var e = getExpressionInterfaces();
                    if (e) {
                        var t = e('layer'),
                            n = e('effects'),
                            r = e('shape'),
                            i = e('text'),
                            a = e('comp');
                        (this.layerInterface = t(this)), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var o = n.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(o), 0 === this.data.ty || this.data.xt ? (this.compInterface = a(this)) : 4 === this.data.ty ? ((this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface)), (this.layerInterface.content = this.layerInterface.shapeInterface)) : 5 === this.data.ty && ((this.layerInterface.textInterface = i(this)), (this.layerInterface.text = this.layerInterface.textInterface));
                    }
                },
                setBlendMode: function () {
                    var e = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style['mix-blend-mode'] = e;
                },
                initBaseData: function (e, t, n) {
                    (this.globalData = t), (this.comp = n), (this.data = e), (this.layerId = createElementID()), this.data.sr || (this.data.sr = 1), (this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties));
                },
                getType: function () {
                    return this.type;
                },
                sourceRectAtTime: function () {}
            }),
            (FrameElement.prototype = {
                initFrame: function () {
                    (this._isFirstFrame = !1), (this.dynamicProperties = []), (this._mdf = !1);
                },
                prepareProperties: function (e, t) {
                    var n,
                        r = this.dynamicProperties.length;
                    for (n = 0; n < r; n += 1) (t || (this._isParent && 'transform' === this.dynamicProperties[n].propType)) && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
                },
                addDynamicProperty: function (e) {
                    -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e);
                }
            }),
            (FootageElement.prototype.prepareFrame = function () {}),
            extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
            (FootageElement.prototype.getBaseElement = function () {
                return null;
            }),
            (FootageElement.prototype.renderFrame = function () {}),
            (FootageElement.prototype.destroy = function () {}),
            (FootageElement.prototype.initExpressions = function () {
                var e = getExpressionInterfaces();
                if (e) {
                    var t = e('footage');
                    this.layerInterface = t(this);
                }
            }),
            (FootageElement.prototype.getFootageData = function () {
                return this.footageData;
            }),
            (AudioElement.prototype.prepareFrame = function (e) {
                if ((this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder)) this._currentTime = e / this.data.sr;
                else {
                    var t = this.tm.v;
                    this._currentTime = t;
                }
                this._volume = this.lv.v[0];
                var n = this._volume * this._volumeMultiplier;
                this._previousVolume !== n && ((this._previousVolume = n), this.audio.volume(n));
            }),
            extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
            (AudioElement.prototype.renderFrame = function () {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), (this._isPlaying = !0)));
            }),
            (AudioElement.prototype.show = function () {}),
            (AudioElement.prototype.hide = function () {
                this.audio.pause(), (this._isPlaying = !1);
            }),
            (AudioElement.prototype.pause = function () {
                this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
            }),
            (AudioElement.prototype.resume = function () {
                this._canPlay = !0;
            }),
            (AudioElement.prototype.setRate = function (e) {
                this.audio.rate(e);
            }),
            (AudioElement.prototype.volume = function (e) {
                (this._volumeMultiplier = e), (this._previousVolume = e * this._volume), this.audio.volume(this._previousVolume);
            }),
            (AudioElement.prototype.getBaseElement = function () {
                return null;
            }),
            (AudioElement.prototype.destroy = function () {}),
            (AudioElement.prototype.sourceRectAtTime = function () {}),
            (AudioElement.prototype.initExpressions = function () {}),
            (BaseRenderer.prototype.checkLayers = function (e) {
                var t,
                    n,
                    r = this.layers.length;
                for (this.completeLayers = !0, t = r - 1; t >= 0; t -= 1) !this.elements[t] && (n = this.layers[t]).ip - n.st <= e - this.layers[t].st && n.op - n.st > e - this.layers[t].st && this.buildItem(t), (this.completeLayers = !!this.elements[t] && this.completeLayers);
                this.checkPendingElements();
            }),
            (BaseRenderer.prototype.createItem = function (e) {
                switch (e.ty) {
                    case 2:
                        return this.createImage(e);
                    case 0:
                        return this.createComp(e);
                    case 1:
                        return this.createSolid(e);
                    case 3:
                    default:
                        return this.createNull(e);
                    case 4:
                        return this.createShape(e);
                    case 5:
                        return this.createText(e);
                    case 6:
                        return this.createAudio(e);
                    case 13:
                        return this.createCamera(e);
                    case 15:
                        return this.createFootage(e);
                }
            }),
            (BaseRenderer.prototype.createCamera = function () {
                throw Error("You're using a 3d camera. Try the html renderer.");
            }),
            (BaseRenderer.prototype.createAudio = function (e) {
                return new AudioElement(e, this.globalData, this);
            }),
            (BaseRenderer.prototype.createFootage = function (e) {
                return new FootageElement(e, this.globalData, this);
            }),
            (BaseRenderer.prototype.buildAllItems = function () {
                var e,
                    t = this.layers.length;
                for (e = 0; e < t; e += 1) this.buildItem(e);
                this.checkPendingElements();
            }),
            (BaseRenderer.prototype.includeLayers = function (e) {
                this.completeLayers = !1;
                var t,
                    n,
                    r = e.length,
                    i = this.layers.length;
                for (t = 0; t < r; t += 1)
                    for (n = 0; n < i; ) {
                        if (this.layers[n].id === e[t].id) {
                            this.layers[n] = e[t];
                            break;
                        }
                        n += 1;
                    }
            }),
            (BaseRenderer.prototype.setProjectInterface = function (e) {
                this.globalData.projectInterface = e;
            }),
            (BaseRenderer.prototype.initItems = function () {
                this.globalData.progressiveLoad || this.buildAllItems();
            }),
            (BaseRenderer.prototype.buildElementParenting = function (e, t, n) {
                for (var r = this.elements, i = this.layers, a = 0, o = i.length; a < o; ) i[a].ind == t && (r[a] && !0 !== r[a] ? (n.push(r[a]), r[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(e, i[a].parent, n) : e.setHierarchy(n)) : (this.buildItem(a), this.addPendingElement(e))), (a += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function (e) {
                this.pendingElements.push(e);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1)
                    if (e[t].xt) {
                        var r = this.createComp(e[t]);
                        r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
                    }
            }),
            (BaseRenderer.prototype.getElementById = function (e) {
                var t,
                    n = this.elements.length;
                for (t = 0; t < n; t += 1) if (this.elements[t].data.ind === e) return this.elements[t];
                return null;
            }),
            (BaseRenderer.prototype.getElementByPath = function (e) {
                var t = e.shift();
                if ('number' == typeof t) n = this.elements[t];
                else {
                    var n,
                        r,
                        i = this.elements.length;
                    for (r = 0; r < i; r += 1)
                        if (this.elements[r].data.nm === t) {
                            n = this.elements[r];
                            break;
                        }
                }
                return 0 === e.length ? n : n.getElementByPath(e);
            }),
            (BaseRenderer.prototype.setupGlobalData = function (e, t) {
                (this.globalData.fontManager = new FontManager()),
                    (this.globalData.slotManager = slotFactory(e)),
                    this.globalData.fontManager.addChars(e.chars),
                    this.globalData.fontManager.addFonts(e.fonts, t),
                    (this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem)),
                    (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem)),
                    (this.globalData.imageLoader = this.animationItem.imagePreloader),
                    (this.globalData.audioController = this.animationItem.audioController),
                    (this.globalData.frameId = 0),
                    (this.globalData.frameRate = e.fr),
                    (this.globalData.nm = e.nm),
                    (this.globalData.compSize = {
                        w: e.w,
                        h: e.h
                    });
            });
        var effectTypes = { TRANSFORM_EFFECT: 'transformEFfect' };
        function TransformElement() {}
        function MaskElement(e, t, n) {
            (this.data = e), (this.element = t), (this.globalData = n), (this.storedData = []), (this.masksProperties = this.data.masksProperties || []), (this.maskElement = null);
            var r = this.globalData.defs,
                i = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(i)), (this.solidPath = '');
            var a = this.masksProperties,
                o = 0,
                s = [],
                l = createElementID(),
                c = 'clipPath',
                u = 'clip-path';
            for (d = 0; d < i; d += 1)
                if (((('a' !== a[d].mode && 'n' !== a[d].mode) || a[d].inv || 100 !== a[d].o.k || a[d].o.x) && ((c = 'mask'), (u = 'mask')), ('s' === a[d].mode || 'i' === a[d].mode) && 0 === o ? ((p = createNS('rect')).setAttribute('fill', '#ffffff'), p.setAttribute('width', this.element.comp.data.w || 0), p.setAttribute('height', this.element.comp.data.h || 0), s.push(p)) : (p = null), (f = createNS('path')), 'n' === a[d].mode))
                    (this.viewData[d] = {
                        op: PropertyFactory.getProp(this.element, a[d].o, 0, 0.01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, a[d], 3),
                        elem: f,
                        lastPath: ''
                    }),
                        r.appendChild(f);
                else {
                    if (
                        ((o += 1),
                        f.setAttribute('fill', 's' === a[d].mode ? '#000000' : '#ffffff'),
                        f.setAttribute('clip-rule', 'nonzero'),
                        0 !== a[d].x.k ? ((c = 'mask'), (u = 'mask'), (g = PropertyFactory.getProp(this.element, a[d].x, 0, null, this.element)), (E = createElementID()), (h = createNS('filter')).setAttribute('id', E), (m = createNS('feMorphology')).setAttribute('operator', 'erode'), m.setAttribute('in', 'SourceGraphic'), m.setAttribute('radius', '0'), h.appendChild(m), r.appendChild(h), f.setAttribute('stroke', 's' === a[d].mode ? '#000000' : '#ffffff')) : ((m = null), (g = null)),
                        (this.storedData[d] = {
                            elem: f,
                            x: g,
                            expan: m,
                            lastPath: '',
                            lastOperator: '',
                            filterId: E,
                            lastRadius: 0
                        }),
                        'i' === a[d].mode)
                    ) {
                        var d,
                            f,
                            _,
                            p,
                            h,
                            m,
                            g,
                            E,
                            b = s.length,
                            y = createNS('g');
                        for (_ = 0; _ < b; _ += 1) y.appendChild(s[_]);
                        var v = createNS('mask');
                        v.setAttribute('mask-type', 'alpha'), v.setAttribute('id', l + '_' + o), v.appendChild(f), r.appendChild(v), y.setAttribute('mask', 'url(' + getLocationHref() + '#' + l + '_' + o + ')'), (s.length = 0), s.push(y);
                    } else s.push(f);
                    a[d].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        (this.viewData[d] = {
                            elem: f,
                            lastPath: '',
                            op: PropertyFactory.getProp(this.element, a[d].o, 0, 0.01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, a[d], 3),
                            invRect: p
                        }),
                        this.viewData[d].prop.k || this.drawPath(a[d], this.viewData[d].prop.v, this.viewData[d]);
                }
            for (d = 0, this.maskElement = createNS(c), i = s.length; d < i; d += 1) this.maskElement.appendChild(s[d]);
            o > 0 && (this.maskElement.setAttribute('id', l), this.element.maskedElement.setAttribute(u, 'url(' + getLocationHref() + '#' + l + ')'), r.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
        }
        (TransformElement.prototype = {
            initTransform: function () {
                var e = new Matrix();
                (this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 },
                    _matMdf: !1,
                    _localMatMdf: !1,
                    _opMdf: !1,
                    mat: e,
                    localMat: e,
                    localOpacity: 1
                }),
                    this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty;
            },
            renderTransform: function () {
                if (((this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame), (this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame), this.hierarchy)) {
                    var e,
                        t = this.finalTransform.mat,
                        n = 0,
                        r = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; n < r; ) {
                            if (this.hierarchy[n].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break;
                            }
                            n += 1;
                        }
                    if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), n = 0; n < r; n += 1) t.multiply(this.hierarchy[n].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function () {
                if (this.localTransforms) {
                    var e = 0,
                        t = this.localTransforms.length;
                    if (((this.finalTransform._localMatMdf = this.finalTransform._matMdf), !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)) for (; e < t; ) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && ((this.finalTransform.localOpacity = this.finalTransform.mProp.o.v), (this.finalTransform._opMdf = !0)), (e += 1);
                    if (this.finalTransform._localMatMdf) {
                        var n = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(n), e = 1; e < t; e += 1) {
                            var r = this.localTransforms[e].matrix;
                            n.multiply(r);
                        }
                        n.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var i = this.finalTransform.localOpacity;
                        for (e = 0; e < t; e += 1) i *= 0.01 * this.localTransforms[e].opacity;
                        this.finalTransform.localOpacity = i;
                    }
                }
            },
            searchEffectTransforms: function () {
                if (this.renderableEffectsManager) {
                    var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (e.length) {
                        (this.localTransforms = []), (this.finalTransform.localMat = new Matrix());
                        var t = 0,
                            n = e.length;
                        for (t = 0; t < n; t += 1) this.localTransforms.push(e[t]);
                    }
                }
            },
            globalToLocal: function (e) {
                var t,
                    n,
                    r = [];
                r.push(this.finalTransform);
                for (var i = !0, a = this.comp; i; ) a.finalTransform ? (a.data.hasMask && r.splice(0, 0, a.finalTransform), (a = a.comp)) : (i = !1);
                var o = r.length;
                for (t = 0; t < o; t += 1) (n = r[t].mat.applyToPointArray(0, 0, 0)), (e = [e[0] - n[0], e[1] - n[1], 0]);
                return e;
            },
            mHelper: new Matrix()
        }),
            (MaskElement.prototype.getMaskProperty = function (e) {
                return this.viewData[e].prop;
            }),
            (MaskElement.prototype.renderFrame = function (e) {
                var t,
                    n = this.element.finalTransform.mat,
                    r = this.masksProperties.length;
                for (t = 0; t < r; t += 1)
                    if (((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute('fill-opacity', this.viewData[t].op.v), 'n' !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute('transform', n.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e)))) {
                        var i = this.storedData[t].expan;
                        this.storedData[t].x.v < 0 ? ('erode' !== this.storedData[t].lastOperator && ((this.storedData[t].lastOperator = 'erode'), this.storedData[t].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[t].filterId + ')')), i.setAttribute('radius', -this.storedData[t].x.v)) : ('dilate' !== this.storedData[t].lastOperator && ((this.storedData[t].lastOperator = 'dilate'), this.storedData[t].elem.setAttribute('filter', null)), this.storedData[t].elem.setAttribute('stroke-width', 2 * this.storedData[t].x.v));
                    }
            }),
            (MaskElement.prototype.getMaskelement = function () {
                return this.maskElement;
            }),
            (MaskElement.prototype.createLayerSolidPath = function () {
                var e = 'M0,0 ';
                return e + (' h' + this.globalData.compSize.w + ' v' + this.globalData.compSize.h + ' h-' + this.globalData.compSize.w + (' v-' + this.globalData.compSize.h) + ' ');
            }),
            (MaskElement.prototype.drawPath = function (e, t, n) {
                var r,
                    i,
                    a = ' M' + t.v[0][0] + ',' + t.v[0][1];
                for (r = 1, i = t._length; r < i; r += 1) a += ' C' + t.o[r - 1][0] + ',' + t.o[r - 1][1] + ' ' + t.i[r][0] + ',' + t.i[r][1] + ' ' + t.v[r][0] + ',' + t.v[r][1];
                if ((t.c && i > 1 && (a += ' C' + t.o[r - 1][0] + ',' + t.o[r - 1][1] + ' ' + t.i[0][0] + ',' + t.i[0][1] + ' ' + t.v[0][0] + ',' + t.v[0][1]), n.lastPath !== a)) {
                    var o = '';
                    n.elem && (t.c && (o = e.inv ? this.solidPath + a : a), n.elem.setAttribute('d', o)), (n.lastPath = a);
                }
            }),
            (MaskElement.prototype.destroy = function () {
                (this.element = null), (this.globalData = null), (this.maskElement = null), (this.data = null), (this.masksProperties = null);
            });
        var filtersFactory = (function () {
                var e = {};
                function t() {
                    var e = createNS('feColorMatrix');
                    return e.setAttribute('type', 'matrix'), e.setAttribute('color-interpolation-filters', 'sRGB'), e.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'), e;
                }
                return (
                    (e.createFilter = function e(e, t) {
                        var n = createNS('filter');
                        return n.setAttribute('id', e), !0 !== t && (n.setAttribute('filterUnits', 'objectBoundingBox'), n.setAttribute('x', '0%'), n.setAttribute('y', '0%'), n.setAttribute('width', '100%'), n.setAttribute('height', '100%')), n;
                    }),
                    (e.createAlphaToLuminanceFilter = t),
                    e
                );
            })(),
            featureSupport = (function () {
                var e = {
                    maskType: !0,
                    svgLumaHidden: !0,
                    offscreenCanvas: 'undefined' != typeof OffscreenCanvas
                };
                return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e;
            })(),
            registeredEffects$1 = {},
            idPrefix = 'filter_result_';
        function SVGEffects(e) {
            var t,
                n,
                r = 'SourceGraphic',
                i = e.data.ef ? e.data.ef.length : 0,
                a = createElementID(),
                o = filtersFactory.createFilter(a, !0),
                s = 0;
            for (t = 0, this.filters = []; t < i; t += 1) {
                n = null;
                var l = e.data.ef[t].ty;
                registeredEffects$1[l] && ((n = new registeredEffects$1[l].effect(o, e.effectsManager.effectElements[t], e, idPrefix + s, r)), (r = idPrefix + s), registeredEffects$1[l].countsAsEffect && (s += 1)), n && this.filters.push(n);
            }
            s && (e.globalData.defs.appendChild(o), e.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + a + ')')), this.filters.length && e.addRenderableComponent(this);
        }
        function registerEffect$1(e, t, n) {
            registeredEffects$1[e] = {
                effect: t,
                countsAsEffect: n
            };
        }
        function SVGBaseElement() {}
        function HierarchyElement() {}
        function RenderableDOMElement() {}
        function IImageElement(e, t, n) {
            (this.assetData = t.getAssetData(e.refId)),
                this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)),
                this.initElement(e, t, n),
                (this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                });
        }
        function ProcessedElement(e, t) {
            (this.elem = e), (this.pos = t);
        }
        function IShapeElement() {}
        (SVGEffects.prototype.renderFrame = function (e) {
            var t,
                n = this.filters.length;
            for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
        }),
            (SVGEffects.prototype.getEffects = function (e) {
                var t,
                    n = this.filters.length,
                    r = [];
                for (t = 0; t < n; t += 1) this.filters[t].type === e && r.push(this.filters[t]);
                return r;
            }),
            (SVGBaseElement.prototype = {
                initRendererElement: function () {
                    this.layerElement = createNS('g');
                },
                createContainerElements: function () {
                    (this.matteElement = createNS('g')), (this.transformedElement = this.layerElement), (this.maskedElement = this.layerElement), (this._sizeChanged = !1);
                    var e = null;
                    if (this.data.td) {
                        this.matteMasks = {};
                        var t = createNS('g');
                        t.setAttribute('id', this.layerId), t.appendChild(this.layerElement), (e = t), this.globalData.defs.appendChild(t);
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), (e = this.matteElement), (this.baseElement = this.matteElement)) : (this.baseElement = this.layerElement);
                    if ((this.data.ln && this.layerElement.setAttribute('id', this.data.ln), this.data.cl && this.layerElement.setAttribute('class', this.data.cl), 0 === this.data.ty && !this.data.hd)) {
                        var n = createNS('clipPath'),
                            r = createNS('path');
                        r.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
                        var i = createElementID();
                        if ((n.setAttribute('id', i), n.appendChild(r), this.globalData.defs.appendChild(n), this.checkMasks())) {
                            var a = createNS('g');
                            a.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + i + ')'), a.appendChild(this.layerElement), (this.transformedElement = a), e ? e.appendChild(this.transformedElement) : (this.baseElement = this.transformedElement);
                        } else this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + i + ')');
                    }
                    0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function () {
                    this.finalTransform._localMatMdf && this.transformedElement.setAttribute('transform', this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute('opacity', this.finalTransform.localOpacity);
                },
                destroyBaseElement: function () {
                    (this.layerElement = null), (this.matteElement = null), this.maskManager.destroy();
                },
                getBaseElement: function () {
                    return this.data.hd ? null : this.baseElement;
                },
                createRenderableComponents: function () {
                    (this.maskManager = new MaskElement(this.data, this, this.globalData)), (this.renderableEffectsManager = new SVGEffects(this)), this.searchEffectTransforms();
                },
                getMatte: function (e) {
                    if ((this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e])) {
                        var t,
                            n,
                            r,
                            i,
                            a = this.layerId + '_' + e;
                        if (1 === e || 3 === e) {
                            var o = createNS('mask');
                            o.setAttribute('id', a), o.setAttribute('mask-type', 3 === e ? 'luminance' : 'alpha'), (r = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), o.appendChild(r), this.globalData.defs.appendChild(o), featureSupport.maskType || 1 !== e || (o.setAttribute('mask-type', 'luminance'), (t = createElementID()), (n = filtersFactory.createFilter(t)), this.globalData.defs.appendChild(n), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS('g')).appendChild(r), o.appendChild(i), i.setAttribute('filter', 'url(' + getLocationHref() + '#' + t + ')'));
                        } else if (2 === e) {
                            var s = createNS('mask');
                            s.setAttribute('id', a), s.setAttribute('mask-type', 'alpha');
                            var l = createNS('g');
                            s.appendChild(l), (t = createElementID()), (n = filtersFactory.createFilter(t));
                            var c = createNS('feComponentTransfer');
                            c.setAttribute('in', 'SourceGraphic'), n.appendChild(c);
                            var u = createNS('feFuncA');
                            u.setAttribute('type', 'table'), u.setAttribute('tableValues', '1.0 0.0'), c.appendChild(u), this.globalData.defs.appendChild(n);
                            var d = createNS('rect');
                            d.setAttribute('width', this.comp.data.w), d.setAttribute('height', this.comp.data.h), d.setAttribute('x', '0'), d.setAttribute('y', '0'), d.setAttribute('fill', '#ffffff'), d.setAttribute('opacity', '0'), l.setAttribute('filter', 'url(' + getLocationHref() + '#' + t + ')'), l.appendChild(d), (r = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), l.appendChild(r), featureSupport.maskType || (s.setAttribute('mask-type', 'luminance'), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS('g')), l.appendChild(d), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(s);
                        }
                        this.matteMasks[e] = a;
                    }
                    return this.matteMasks[e];
                },
                setMatte: function (e) {
                    this.matteElement && this.matteElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + e + ')');
                }
            }),
            (HierarchyElement.prototype = {
                initHierarchy: function () {
                    (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
                },
                setHierarchy: function (e) {
                    this.hierarchy = e;
                },
                setAsParent: function () {
                    this._isParent = !0;
                },
                checkParenting: function () {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
                }
            }),
            (function () {
                extendPrototype(
                    [
                        RenderableElement,
                        createProxyFunction({
                            initElement: function (e, t, n) {
                                this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                            },
                            hide: function () {
                                this.hidden || (this.isInRange && !this.isTransparent) || (((this.baseElement || this.layerElement).style.display = 'none'), (this.hidden = !0));
                            },
                            show: function () {
                                this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = 'block'), (this.hidden = !1), (this._isFirstFrame = !0));
                            },
                            renderFrame: function () {
                                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                            },
                            renderInnerContent: function () {},
                            prepareFrame: function (e) {
                                (this._mdf = !1), this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency();
                            },
                            destroy: function () {
                                (this.innerElem = null), this.destroyBaseElement();
                            }
                        })
                    ],
                    RenderableDOMElement
                );
            })(),
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
            (IImageElement.prototype.createContent = function () {
                var e = this.globalData.getAssetsPath(this.assetData);
                (this.innerElem = createNS('image')), this.innerElem.setAttribute('width', this.assetData.w + 'px'), this.innerElem.setAttribute('height', this.assetData.h + 'px'), this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', e), this.layerElement.appendChild(this.innerElem);
            }),
            (IImageElement.prototype.sourceRectAtTime = function () {
                return this.sourceRect;
            }),
            (IShapeElement.prototype = {
                addShapeToModifiers: function (e) {
                    var t,
                        n = this.shapeModifiers.length;
                    for (t = 0; t < n; t += 1) this.shapeModifiers[t].addShape(e);
                },
                isShapeInAnimatedModifiers: function (e) {
                    for (var t = 0, n = this.shapeModifiers.length; t < n; ) if (this.shapeModifiers[t].isAnimatedWithShape(e)) return !0;
                    return !1;
                },
                renderModifiers: function () {
                    if (this.shapeModifiers.length) {
                        var e,
                            t = this.shapes.length;
                        for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                        for (t = this.shapeModifiers.length, e = t - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
                    }
                },
                searchProcessedElement: function (e) {
                    for (var t = this.processedElements, n = 0, r = t.length; n < r; ) {
                        if (t[n].elem === e) return t[n].pos;
                        n += 1;
                    }
                    return 0;
                },
                addProcessedElement: function (e, t) {
                    for (var n = this.processedElements, r = n.length; r; )
                        if (n[(r -= 1)].elem === e) {
                            n[r].pos = t;
                            return;
                        }
                    n.push(new ProcessedElement(e, t));
                },
                prepareFrame: function (e) {
                    this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
                }
            });
        var lineCapEnum = {
                1: 'butt',
                2: 'round',
                3: 'square'
            },
            lineJoinEnum = {
                1: 'miter',
                2: 'round',
                3: 'bevel'
            };
        function SVGShapeData(e, t, n) {
            (this.caches = []), (this.styles = []), (this.transformers = e), (this.lStr = ''), (this.sh = n), (this.lvl = t), (this._isAnimated = !!n.k);
            for (var r = 0, i = e.length; r < i; ) {
                if (e[r].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                r += 1;
            }
        }
        function SVGStyleData(e, t) {
            (this.data = e), (this.type = e.ty), (this.d = ''), (this.lvl = t), (this._mdf = !1), (this.closed = !0 === e.hd), (this.pElem = createNS('path')), (this.msElem = null);
        }
        function DashProperty(e, t, n, r) {
            (this.elem = e), (this.frameId = -1), (this.dataProps = createSizedArray(t.length)), (this.renderer = n), (this.k = !1), (this.dashStr = ''), (this.dashArray = createTypedArray('float32', t.length ? t.length - 1 : 0)), (this.dashoffset = createTypedArray('float32', 1)), this.initDynamicPropertyContainer(r);
            var i,
                a,
                o = t.length || 0;
            for (i = 0; i < o; i += 1)
                (a = PropertyFactory.getProp(e, t[i].v, 0, 0, this)),
                    (this.k = a.k || this.k),
                    (this.dataProps[i] = {
                        n: t[i].n,
                        p: a
                    });
            this.k || this.getValue(!0), (this._isAnimated = this.k);
        }
        function SVGStrokeStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)), (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)), (this.d = new DashProperty(e, t.d || {}, 'svg', this)), (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)), (this.style = n), (this._isAnimated = !!this._isAnimated);
        }
        function SVGFillStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)), (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)), (this.style = n);
        }
        function SVGNoStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.style = n);
        }
        function GradientProperty(e, t, n) {
            (this.data = t), (this.c = createTypedArray('uint8c', 4 * t.p));
            var r = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
            (this.o = createTypedArray('float32', r)), (this._cmdf = !1), (this._omdf = !1), (this._collapsable = this.checkCollapsable()), (this._hasOpacity = r), this.initDynamicPropertyContainer(n), (this.prop = PropertyFactory.getProp(e, t.k, 1, null, this)), (this.k = this.prop.k), this.getValue(!0);
        }
        function SVGGradientFillStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), this.initGradientData(e, t, n);
        }
        function SVGGradientStrokeStyleData(e, t, n) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)), (this.d = new DashProperty(e, t.d || {}, 'svg', this)), this.initGradientData(e, t, n), (this._isAnimated = !!this._isAnimated);
        }
        function ShapeGroupData() {
            (this.it = []), (this.prevViewData = []), (this.gr = createNS('g'));
        }
        function SVGTransformData(e, t, n) {
            (this.transform = {
                mProps: e,
                op: t,
                container: n
            }),
                (this.elements = []),
                (this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length);
        }
        (SVGShapeData.prototype.setAsAnimated = function () {
            this._isAnimated = !0;
        }),
            (SVGStyleData.prototype.reset = function () {
                (this.d = ''), (this._mdf = !1);
            }),
            (DashProperty.prototype.getValue = function (e) {
                if ((this.elem.globalData.frameId !== this.frameId || e) && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), (this._mdf = this._mdf || e), this._mdf)) {
                    var t = 0,
                        n = this.dataProps.length;
                    for ('svg' === this.renderer && (this.dashStr = ''), t = 0; t < n; t += 1) 'o' !== this.dataProps[t].n ? ('svg' === this.renderer ? (this.dashStr += ' ' + this.dataProps[t].p.v) : (this.dashArray[t] = this.dataProps[t].p.v)) : (this.dashoffset[0] = this.dataProps[t].p.v);
                }
            }),
            extendPrototype([DynamicPropertyContainer], DashProperty),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
            (GradientProperty.prototype.comparePoints = function (e, t) {
                for (var n = 0, r = this.o.length / 2; n < r; ) {
                    if (Math.abs(e[4 * n] - e[4 * t + 2 * n]) > 0.01) return !1;
                    n += 1;
                }
                return !0;
            }),
            (GradientProperty.prototype.checkCollapsable = function () {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s)
                    for (var e = 0, t = this.data.k.k.length; e < t; ) {
                        if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                        e += 1;
                    }
                else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0;
            }),
            (GradientProperty.prototype.getValue = function (e) {
                if ((this.prop.getValue(), (this._mdf = !1), (this._cmdf = !1), (this._omdf = !1), this.prop._mdf || e)) {
                    var t,
                        n,
                        r,
                        i = 4 * this.data.p;
                    for (t = 0; t < i; t += 1) (n = t % 4 == 0 ? 100 : 255), (r = Math.round(this.prop.v[t] * n)), this.c[t] !== r && ((this.c[t] = r), (this._cmdf = !e));
                    if (this.o.length) for (i = this.prop.v.length, t = 4 * this.data.p; t < i; t += 1) (n = t % 2 == 0 ? 100 : 1), (r = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t]), this.o[t - 4 * this.data.p] !== r && ((this.o[t - 4 * this.data.p] = r), (this._omdf = !e));
                    this._mdf = !e;
                }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty),
            (SVGGradientFillStyleData.prototype.initGradientData = function (e, t, n) {
                (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)), (this.s = PropertyFactory.getProp(e, t.s, 1, null, this)), (this.e = PropertyFactory.getProp(e, t.e, 1, null, this)), (this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, 0.01, this)), (this.a = PropertyFactory.getProp(e, t.a || { k: 0 }, 0, degToRads, this)), (this.g = new GradientProperty(e, t.g, this)), (this.style = n), (this.stops = []), this.setGradientData(n.pElem, t), this.setGradientOpacity(t, n), (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
                var n,
                    r,
                    i,
                    a = createElementID(),
                    o = createNS(1 === t.t ? 'linearGradient' : 'radialGradient');
                o.setAttribute('id', a), o.setAttribute('spreadMethod', 'pad'), o.setAttribute('gradientUnits', 'userSpaceOnUse');
                var s = [];
                for (r = 0, i = 4 * t.g.p; r < i; r += 4) (n = createNS('stop')), o.appendChild(n), s.push(n);
                e.setAttribute('gf' === t.ty ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + a + ')'), (this.gf = o), (this.cst = s);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, t) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var n,
                        r,
                        i,
                        a = createNS('mask'),
                        o = createNS('path');
                    a.appendChild(o);
                    var s = createElementID(),
                        l = createElementID();
                    a.setAttribute('id', l);
                    var c = createNS(1 === e.t ? 'linearGradient' : 'radialGradient');
                    c.setAttribute('id', s), c.setAttribute('spreadMethod', 'pad'), c.setAttribute('gradientUnits', 'userSpaceOnUse'), (i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
                    var u = this.stops;
                    for (r = 4 * e.g.p; r < i; r += 2) (n = createNS('stop')).setAttribute('stop-color', 'rgb(255,255,255)'), c.appendChild(n), u.push(n);
                    o.setAttribute('gf' === e.ty ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + s + ')'), 'gs' === e.ty && (o.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]), o.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]), 1 === e.lj && o.setAttribute('stroke-miterlimit', e.ml)), (this.of = c), (this.ms = a), (this.ost = u), (this.maskId = l), (t.msElem = o);
                }
            }),
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function (e, t, n, r) {
                if (0 === t) return '';
                var i,
                    a = e.o,
                    o = e.i,
                    s = e.v,
                    l = ' M' + r.applyToPointStringified(s[0][0], s[0][1]);
                for (i = 1; i < t; i += 1) l += ' C' + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + ' ' + r.applyToPointStringified(o[i][0], o[i][1]) + ' ' + r.applyToPointStringified(s[i][0], s[i][1]);
                return n && t && (l += ' C' + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + ' ' + r.applyToPointStringified(o[0][0], o[0][1]) + ' ' + r.applyToPointStringified(s[0][0], s[0][1]) + 'z'), l;
            },
            SVGElementsRenderer = (function () {
                var e = new Matrix(),
                    t = new Matrix();
                function n(e, t, n) {
                    (n || t.transform.op._mdf) && t.transform.container.setAttribute('opacity', t.transform.op.v), (n || t.transform.mProps._mdf) && t.transform.container.setAttribute('transform', t.transform.mProps.v.to2dCSS());
                }
                function r() {}
                function i(n, r, i) {
                    var a,
                        o,
                        s,
                        l,
                        c,
                        u,
                        d,
                        f,
                        _,
                        p,
                        h = r.styles.length,
                        m = r.lvl;
                    for (u = 0; u < h; u += 1) {
                        if (((l = r.sh._mdf || i), r.styles[u].lvl < m)) {
                            for (f = t.reset(), _ = m - r.styles[u].lvl, p = r.transformers.length - 1; !l && _ > 0; ) (l = r.transformers[p].mProps._mdf || l), (_ -= 1), (p -= 1);
                            if (l) for (_ = m - r.styles[u].lvl, p = r.transformers.length - 1; _ > 0; ) f.multiply(r.transformers[p].mProps.v), (_ -= 1), (p -= 1);
                        } else f = e;
                        if (((o = (d = r.sh.paths)._length), l)) {
                            for (a = 0, s = ''; a < o; a += 1) (c = d.shapes[a]) && c._length && (s += buildShapeString(c, c._length, c.c, f));
                            r.caches[u] = s;
                        } else s = r.caches[u];
                        (r.styles[u].d += !0 === n.hd ? '' : s), (r.styles[u]._mdf = l || r.styles[u]._mdf);
                    }
                }
                function a(e, t, n) {
                    var r = t.style;
                    (t.c._mdf || n) && r.pElem.setAttribute('fill', 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n) && r.pElem.setAttribute('fill-opacity', t.o.v);
                }
                function o(e, t, n) {
                    s(e, t, n), l(e, t, n);
                }
                function s(e, t, n) {
                    var r,
                        i,
                        a,
                        o,
                        s,
                        l = t.gf,
                        c = t.g._hasOpacity,
                        u = t.s.v,
                        d = t.e.v;
                    if (t.o._mdf || n) {
                        var f = 'gf' === e.ty ? 'fill-opacity' : 'stroke-opacity';
                        t.style.pElem.setAttribute(f, t.o.v);
                    }
                    if (t.s._mdf || n) {
                        var _ = 1 === e.t ? 'x1' : 'cx',
                            p = 'x1' === _ ? 'y1' : 'cy';
                        l.setAttribute(_, u[0]), l.setAttribute(p, u[1]), c && !t.g._collapsable && (t.of.setAttribute(_, u[0]), t.of.setAttribute(p, u[1]));
                    }
                    if (t.g._cmdf || n) {
                        r = t.cst;
                        var h = t.g.c;
                        for (i = 0, a = r.length; i < a; i += 1) (o = r[i]).setAttribute('offset', h[4 * i] + '%'), o.setAttribute('stop-color', 'rgb(' + h[4 * i + 1] + ',' + h[4 * i + 2] + ',' + h[4 * i + 3] + ')');
                    }
                    if (c && (t.g._omdf || n)) {
                        var m = t.g.o;
                        for (i = 0, a = (r = t.g._collapsable ? t.cst : t.ost).length; i < a; i += 1) (o = r[i]), t.g._collapsable || o.setAttribute('offset', m[2 * i] + '%'), o.setAttribute('stop-opacity', m[2 * i + 1]);
                    }
                    if (1 === e.t) (t.e._mdf || n) && (l.setAttribute('x2', d[0]), l.setAttribute('y2', d[1]), c && !t.g._collapsable && (t.of.setAttribute('x2', d[0]), t.of.setAttribute('y2', d[1])));
                    else if (((t.s._mdf || t.e._mdf || n) && ((s = Math.sqrt(Math.pow(u[0] - d[0], 2) + Math.pow(u[1] - d[1], 2))), l.setAttribute('r', s), c && !t.g._collapsable && t.of.setAttribute('r', s)), t.e._mdf || t.h._mdf || t.a._mdf || n)) {
                        s || (s = Math.sqrt(Math.pow(u[0] - d[0], 2) + Math.pow(u[1] - d[1], 2)));
                        var g = Math.atan2(d[1] - u[1], d[0] - u[0]),
                            E = t.h.v;
                        E >= 1 ? (E = 0.99) : E <= -1 && (E = -0.99);
                        var b = s * E,
                            y = Math.cos(g + t.a.v) * b + u[0],
                            v = Math.sin(g + t.a.v) * b + u[1];
                        l.setAttribute('fx', y), l.setAttribute('fy', v), c && !t.g._collapsable && (t.of.setAttribute('fx', y), t.of.setAttribute('fy', v));
                    }
                }
                function l(e, t, n) {
                    var r = t.style,
                        i = t.d;
                    i && (i._mdf || n) && i.dashStr && (r.pElem.setAttribute('stroke-dasharray', i.dashStr), r.pElem.setAttribute('stroke-dashoffset', i.dashoffset[0])), t.c && (t.c._mdf || n) && r.pElem.setAttribute('stroke', 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n) && r.pElem.setAttribute('stroke-opacity', t.o.v), (t.w._mdf || n) && (r.pElem.setAttribute('stroke-width', t.w.v), r.msElem && r.msElem.setAttribute('stroke-width', t.w.v));
                }
                return {
                    createRenderFunction: function (e) {
                        switch (e.ty) {
                            case 'fl':
                                return a;
                            case 'gf':
                                return s;
                            case 'gs':
                                return o;
                            case 'st':
                                return l;
                            case 'sh':
                            case 'el':
                            case 'rc':
                            case 'sr':
                                return i;
                            case 'tr':
                                return n;
                            case 'no':
                                return r;
                            default:
                                return null;
                        }
                    }
                };
            })();
        function SVGShapeElement(e, t, n) {
            (this.shapes = []), (this.shapesData = e.shapes), (this.stylesList = []), (this.shapeModifiers = []), (this.itemsData = []), (this.processedElements = []), (this.animatedContents = []), this.initElement(e, t, n), (this.prevViewData = []);
        }
        function LetterProps(e, t, n, r, i, a) {
            (this.o = e),
                (this.sw = t),
                (this.sc = n),
                (this.fc = r),
                (this.m = i),
                (this.p = a),
                (this._mdf = {
                    o: !0,
                    sw: !!t,
                    sc: !!n,
                    fc: !!r,
                    m: !0,
                    p: !0
                });
        }
        function TextProperty(e, t) {
            (this._frameId = initialDefaultFrame),
                (this.pv = ''),
                (this.v = ''),
                (this.kf = !1),
                (this._isFirstFrame = !0),
                (this._mdf = !1),
                t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)),
                (this.data = t),
                (this.elem = e),
                (this.comp = this.elem.comp),
                (this.keysIndex = 0),
                (this.canResize = !1),
                (this.minimumFontSize = 1),
                (this.effectsSequence = []),
                (this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: '',
                    fStyle: '',
                    fWeight: '',
                    fc: '',
                    j: '',
                    justifyOffset: '',
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: '',
                    of: '',
                    s: '',
                    sc: '',
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                }),
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() || this.completeTextData(this.currentData);
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
            (SVGShapeElement.prototype.initSecondaryElement = function () {}),
            (SVGShapeElement.prototype.identityMatrix = new Matrix()),
            (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
            (SVGShapeElement.prototype.createContent = function () {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
            }),
            (SVGShapeElement.prototype.filterUniqueShapes = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.shapes.length,
                    a = this.stylesList.length,
                    o = [],
                    s = !1;
                for (n = 0; n < a; n += 1) {
                    for (e = 0, r = this.stylesList[n], s = !1, o.length = 0; e < i; e += 1) -1 !== (t = this.shapes[e]).styles.indexOf(r) && (o.push(t), (s = t._isAnimated || s));
                    o.length > 1 && s && this.setShapesAsAnimated(o);
                }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) e[t].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function (e, t) {
                var n,
                    r = new SVGStyleData(e, t),
                    i = r.pElem;
                return 'st' === e.ty ? (n = new SVGStrokeStyleData(this, e, r)) : 'fl' === e.ty ? (n = new SVGFillStyleData(this, e, r)) : 'gf' === e.ty || 'gs' === e.ty ? ((n = new ('gf' === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, r)), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), i.setAttribute('mask', 'url(' + getLocationHref() + '#' + n.maskId + ')'))) : 'no' === e.ty && (n = new SVGNoStyleData(this, e, r)), ('st' === e.ty || 'gs' === e.ty) && (i.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]), i.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]), i.setAttribute('fill-opacity', '0'), 1 === e.lj && i.setAttribute('stroke-miterlimit', e.ml)), 2 === e.r && i.setAttribute('fill-rule', 'evenodd'), e.ln && i.setAttribute('id', e.ln), e.cl && i.setAttribute('class', e.cl), e.bm && (i.style['mix-blend-mode'] = getBlendMode(e.bm)), this.stylesList.push(r), this.addToAnimatedContents(e, n), n;
            }),
            (SVGShapeElement.prototype.createGroupElement = function (e) {
                var t = new ShapeGroupData();
                return e.ln && t.gr.setAttribute('id', e.ln), e.cl && t.gr.setAttribute('class', e.cl), e.bm && (t.gr.style['mix-blend-mode'] = getBlendMode(e.bm)), t;
            }),
            (SVGShapeElement.prototype.createTransformElement = function (e, t) {
                var n = TransformPropertyFactory.getTransformProperty(this, e, this),
                    r = new SVGTransformData(n, n.o, t);
                return this.addToAnimatedContents(e, r), r;
            }),
            (SVGShapeElement.prototype.createShapeElement = function (e, t, n) {
                var r = 4;
                'rc' === e.ty ? (r = 5) : 'el' === e.ty ? (r = 6) : 'sr' === e.ty && (r = 7);
                var i = new SVGShapeData(t, n, ShapePropertyFactory.getShapeProp(this, e, r, this));
                return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(e, i), i;
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
                for (var n = 0, r = this.animatedContents.length; n < r; ) {
                    if (this.animatedContents[n].element === t) return;
                    n += 1;
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(e),
                    element: t,
                    data: e
                });
            }),
            (SVGShapeElement.prototype.setElementStyles = function (e) {
                var t,
                    n = e.styles,
                    r = this.stylesList.length;
                for (t = 0; t < r; t += 1) this.stylesList[t].closed || n.push(this.stylesList[t]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var e,
                    t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function (e, t, n, r, i, a, o) {
                var s,
                    l,
                    c,
                    u,
                    d,
                    f,
                    _ = [].concat(a),
                    p = e.length - 1,
                    h = [],
                    m = [];
                for (s = p; s >= 0; s -= 1) {
                    if (((f = this.searchProcessedElement(e[s])) ? (t[s] = n[f - 1]) : (e[s]._render = o), 'fl' === e[s].ty || 'st' === e[s].ty || 'gf' === e[s].ty || 'gs' === e[s].ty || 'no' === e[s].ty)) f ? (t[s].style.closed = !1) : (t[s] = this.createStyleElement(e[s], i)), e[s]._render && t[s].style.pElem.parentNode !== r && r.appendChild(t[s].style.pElem), h.push(t[s].style);
                    else if ('gr' === e[s].ty) {
                        if (f) for (l = 0, c = t[s].it.length; l < c; l += 1) t[s].prevViewData[l] = t[s].it[l];
                        else t[s] = this.createGroupElement(e[s]);
                        this.searchShapes(e[s].it, t[s].it, t[s].prevViewData, t[s].gr, i + 1, _, o), e[s]._render && t[s].gr.parentNode !== r && r.appendChild(t[s].gr);
                    } else 'tr' === e[s].ty ? (f || (t[s] = this.createTransformElement(e[s], r)), (u = t[s].transform), _.push(u)) : 'sh' === e[s].ty || 'rc' === e[s].ty || 'el' === e[s].ty || 'sr' === e[s].ty ? (f || (t[s] = this.createShapeElement(e[s], _, i)), this.setElementStyles(t[s])) : 'tm' === e[s].ty || 'rd' === e[s].ty || 'ms' === e[s].ty || 'pb' === e[s].ty || 'zz' === e[s].ty || 'op' === e[s].ty ? (f ? ((d = t[s]).closed = !1) : ((d = ShapeModifiers.getModifier(e[s].ty)).init(this, e[s]), (t[s] = d), this.shapeModifiers.push(d)), m.push(d)) : 'rp' === e[s].ty && (f ? ((d = t[s]).closed = !0) : ((d = ShapeModifiers.getModifier(e[s].ty)), (t[s] = d), d.init(this, e, s, t), this.shapeModifiers.push(d), (o = !1)), m.push(d));
                    this.addProcessedElement(e[s], s + 1);
                }
                for (s = 0, p = h.length; s < p; s += 1) h[s].closed = !0;
                for (s = 0, p = m.length; s < p; s += 1) m[s].closed = !0;
            }),
            (SVGShapeElement.prototype.renderInnerContent = function () {
                this.renderModifiers();
                var e,
                    t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].reset();
                for (this.renderShape(), e = 0; e < t; e += 1) (this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute('d', this.stylesList[e].d), (this.stylesList[e].d = 'M0 0' + this.stylesList[e].d)), this.stylesList[e].pElem.setAttribute('d', this.stylesList[e].d || 'M0 0'));
            }),
            (SVGShapeElement.prototype.renderShape = function () {
                var e,
                    t,
                    n = this.animatedContents.length;
                for (e = 0; e < n; e += 1) (t = this.animatedContents[e]), (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame);
            }),
            (SVGShapeElement.prototype.destroy = function () {
                this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
            }),
            (LetterProps.prototype.update = function (e, t, n, r, i, a) {
                (this._mdf.o = !1), (this._mdf.sw = !1), (this._mdf.sc = !1), (this._mdf.fc = !1), (this._mdf.m = !1), (this._mdf.p = !1);
                var o = !1;
                return this.o !== e && ((this.o = e), (this._mdf.o = !0), (o = !0)), this.sw !== t && ((this.sw = t), (this._mdf.sw = !0), (o = !0)), this.sc !== n && ((this.sc = n), (this._mdf.sc = !0), (o = !0)), this.fc !== r && ((this.fc = r), (this._mdf.fc = !0), (o = !0)), this.m !== i && ((this.m = i), (this._mdf.m = !0), (o = !0)), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && ((this.p = a), (this._mdf.p = !0), (o = !0)), o;
            }),
            (TextProperty.prototype.defaultBoxWidth = [0, 0]),
            (TextProperty.prototype.copyData = function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
            }),
            (TextProperty.prototype.setCurrentData = function (e) {
                e.__complete || this.completeTextData(e), (this.currentData = e), (this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth), (this._mdf = !0);
            }),
            (TextProperty.prototype.searchProperty = function () {
                return this.searchKeyframes();
            }),
            (TextProperty.prototype.searchKeyframes = function () {
                return (this.kf = this.data.d.k.length > 1), this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
            }),
            (TextProperty.prototype.addEffect = function (e) {
                this.effectsSequence.push(e), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.getValue = function (e) {
                if ((this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) || e) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var t,
                        n = this.currentData,
                        r = this.keysIndex;
                    if (this.lock) return void this.setCurrentData(this.currentData);
                    (this.lock = !0), (this._mdf = !1);
                    var i = this.effectsSequence.length,
                        a = e || this.data.d.k[this.keysIndex].s;
                    for (t = 0; t < i; t += 1) a = r !== this.keysIndex ? this.effectsSequence[t](a, a.t) : this.effectsSequence[t](this.currentData, a.t);
                    n !== a && this.setCurrentData(a), (this.v = this.currentData), (this.pv = this.v), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                }
            }),
            (TextProperty.prototype.getKeyframeValue = function () {
                for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, n = 0, r = e.length; n <= r - 1 && n !== r - 1 && !(e[n + 1].t > t); ) n += 1;
                return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s;
            }),
            (TextProperty.prototype.buildFinalText = function (e) {
                for (var t, n, r = [], i = 0, a = e.length, o = !1, s = !1, l = ''; i < a; ) (o = s), (s = !1), (t = e.charCodeAt(i)), (l = e.charAt(i)), FontManager.isCombinedCharacter(t) ? (o = !0) : t >= 55296 && t <= 56319 ? (FontManager.isRegionalFlag(e, i) ? (l = e.substr(i, 14)) : (n = e.charCodeAt(i + 1)) >= 56320 && n <= 57343 && (FontManager.isModifier(t, n) ? ((l = e.substr(i, 2)), (o = !0)) : (l = FontManager.isFlagEmoji(e.substr(i, 4)) ? e.substr(i, 4) : e.substr(i, 2)))) : t > 56319 ? ((n = e.charCodeAt(i + 1)), FontManager.isVariationSelector(t) && (o = !0)) : FontManager.isZeroWidthJoiner(t) && ((o = !0), (s = !0)), o ? ((r[r.length - 1] += l), (o = !1)) : r.push(l), (i += l.length);
                return r;
            }),
            (TextProperty.prototype.completeTextData = function (e) {
                e.__complete = !0;
                var t = this.elem.globalData.fontManager,
                    n = this.data,
                    r = [],
                    i = 0,
                    a = n.m.g,
                    o = 0,
                    s = 0,
                    l = 0,
                    c = [],
                    u = 0,
                    d = 0,
                    f = t.getFontByName(e.f),
                    _ = 0,
                    p = getFontProperties(f);
                (e.fWeight = p.weight), (e.fStyle = p.style), (e.finalSize = e.s), (e.finalText = this.buildFinalText(e.t)), (g = e.finalText.length), (e.finalLineHeight = e.lh);
                var h = (e.tr / 1000) * e.finalSize;
                if (e.sz)
                    for (var m, g, E, b, y, v, O, I, S, T, A = !0, N = e.sz[0], C = e.sz[1]; A; ) {
                        (T = this.buildFinalText(e.t)), (S = 0), (u = 0), (g = T.length), (h = (e.tr / 1000) * e.finalSize);
                        var R = -1;
                        for (m = 0; m < g; m += 1) (I = T[m].charCodeAt(0)), (E = !1), ' ' === T[m] ? (R = m) : (13 === I || 3 === I) && ((u = 0), (E = !0), (S += e.finalLineHeight || 1.2 * e.finalSize)), t.chars ? ((O = t.getCharData(T[m], f.fStyle, f.fFamily)), (_ = E ? 0 : (O.w * e.finalSize) / 100)) : (_ = t.measureText(T[m], e.f, e.finalSize)), u + _ > N && ' ' !== T[m] ? (-1 === R ? (g += 1) : (m = R), (S += e.finalLineHeight || 1.2 * e.finalSize), T.splice(m, +(R === m), '\r'), (R = -1), (u = 0)) : ((u += _), (u += h));
                        (S += (f.ascent * e.finalSize) / 100), this.canResize && e.finalSize > this.minimumFontSize && C < S ? ((e.finalSize -= 1), (e.finalLineHeight = (e.finalSize * e.lh) / e.s)) : ((e.finalText = T), (g = e.finalText.length), (A = !1));
                    }
                (u = -h), (_ = 0);
                var P = 0;
                for (m = 0; m < g; m += 1)
                    if (
                        ((E = !1),
                        13 === (I = (L = e.finalText[m]).charCodeAt(0)) || 3 === I ? ((P = 0), c.push(u), (d = u > d ? u : d), (u = -2 * h), (b = ''), (E = !0), (l += 1)) : (b = L),
                        t.chars ? ((O = t.getCharData(L, f.fStyle, t.getFontByName(e.f).fFamily)), (_ = E ? 0 : (O.w * e.finalSize) / 100)) : (_ = t.measureText(b, e.f, e.finalSize)),
                        ' ' === L ? (P += _ + h) : ((u += _ + h + P), (P = 0)),
                        r.push({
                            l: _,
                            an: _,
                            add: o,
                            n: E,
                            anIndexes: [],
                            val: b,
                            line: l,
                            animatorJustifyOffset: 0
                        }),
                        2 == a)
                    ) {
                        if (((o += _), '' === b || ' ' === b || m === g - 1)) {
                            for (('' === b || ' ' === b) && (o -= _); s <= m; ) (r[s].an = o), (r[s].ind = i), (r[s].extra = _), (s += 1);
                            (i += 1), (o = 0);
                        }
                    } else if (3 == a) {
                        if (((o += _), '' === b || m === g - 1)) {
                            for ('' === b && (o -= _); s <= m; ) (r[s].an = o), (r[s].ind = i), (r[s].extra = _), (s += 1);
                            (o = 0), (i += 1);
                        }
                    } else (r[i].ind = i), (r[i].extra = 0), (i += 1);
                if (((e.l = r), (d = u > d ? u : d), c.push(u), e.sz)) (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
                else
                    switch (((e.boxWidth = d), e.j)) {
                        case 1:
                            e.justifyOffset = -e.boxWidth;
                            break;
                        case 2:
                            e.justifyOffset = -e.boxWidth / 2;
                            break;
                        default:
                            e.justifyOffset = 0;
                    }
                e.lineWidths = c;
                var w = n.a;
                v = w.length;
                var D = [];
                for (y = 0; y < v; y += 1) {
                    for ((x = w[y]).a.sc && (e.strokeColorAnim = !0), x.a.sw && (e.strokeWidthAnim = !0), (x.a.fc || x.a.fh || x.a.fs || x.a.fb) && (e.fillColorAnim = !0), j = 0, k = x.s.b, m = 0; m < g; m += 1) ((M = r[m]).anIndexes[y] = j), ((1 == k && '' !== M.val) || (2 == k && '' !== M.val && ' ' !== M.val) || (3 == k && (M.n || ' ' == M.val || m == g - 1)) || (4 == k && (M.n || m == g - 1))) && (1 === x.s.rn && D.push(j), (j += 1));
                    n.a[y].s.totalChars = j;
                    var L,
                        x,
                        M,
                        k,
                        j,
                        U,
                        G = -1;
                    if (1 === x.s.rn) for (m = 0; m < g; m += 1) G != (M = r[m]).anIndexes[y] && ((G = M.anIndexes[y]), (U = D.splice(Math.floor(Math.random() * D.length), 1)[0])), (M.anIndexes[y] = U);
                }
                (e.yOffset = e.finalLineHeight || 1.2 * e.finalSize), (e.ls = e.ls || 0), (e.ascent = (f.ascent * e.finalSize) / 100);
            }),
            (TextProperty.prototype.updateDocumentData = function (e, t) {
                t = void 0 === t ? this.keysIndex : t;
                var n = this.copyData({}, this.data.d.k[t].s);
                (n = this.copyData(n, e)), (this.data.d.k[t].s = n), this.recalculate(t), this.setCurrentData(n), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.recalculate = function (e) {
                var t = this.data.d.k[e].s;
                (t.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(t);
            }),
            (TextProperty.prototype.canResizeFont = function (e) {
                (this.canResize = e), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.setMinimumFontSize = function (e) {
                (this.minimumFontSize = Math.floor(e) || 1), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            });
        var TextSelectorProp = (function () {
            var e = Math.max,
                t = Math.min,
                n = Math.floor;
            function r(e, t) {
                (this._currentTextLength = -1), (this.k = !1), (this.data = t), (this.elem = e), (this.comp = e.comp), (this.finalS = 0), (this.finalE = 0), this.initDynamicPropertyContainer(e), (this.s = PropertyFactory.getProp(e, t.s || { k: 0 }, 0, 0, this)), 'e' in t ? (this.e = PropertyFactory.getProp(e, t.e, 0, 0, this)) : (this.e = { v: 100 }), (this.o = PropertyFactory.getProp(e, t.o || { k: 0 }, 0, 0, this)), (this.xe = PropertyFactory.getProp(e, t.xe || { k: 0 }, 0, 0, this)), (this.ne = PropertyFactory.getProp(e, t.ne || { k: 0 }, 0, 0, this)), (this.sm = PropertyFactory.getProp(e, t.sm || { k: 100 }, 0, 0, this)), (this.a = PropertyFactory.getProp(e, t.a, 0, 0.01, this)), this.dynamicProperties.length || this.getValue();
            }
            return (
                (r.prototype = {
                    getMult: function (r) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var i = 0,
                            a = 0,
                            o = 1,
                            s = 1;
                        this.ne.v > 0 ? (i = this.ne.v / 100) : (a = -this.ne.v / 100), this.xe.v > 0 ? (o = 1 - this.xe.v / 100) : (s = 1 + this.xe.v / 100);
                        var l = BezierFactory.getBezierEasing(i, a, o, s).get,
                            c = 0,
                            u = this.finalS,
                            d = this.finalE,
                            f = this.data.sh;
                        if (2 === f) c = l((c = d === u ? +(r >= d) : e(0, t(0.5 / (d - u) + (r - u) / (d - u), 1))));
                        else if (3 === f) c = l((c = d === u ? (r >= d ? 0 : 1) : 1 - e(0, t(0.5 / (d - u) + (r - u) / (d - u), 1))));
                        else if (4 === f) d === u ? (c = 0) : (c = e(0, t(0.5 / (d - u) + (r - u) / (d - u), 1))) < 0.5 ? (c *= 2) : (c = 1 - 2 * (c - 0.5)), (c = l(c));
                        else if (5 === f) {
                            if (d === u) c = 0;
                            else {
                                var _ = d - u,
                                    p = -_ / 2 + (r = t(e(0, r + 0.5 - u), d - u)),
                                    h = _ / 2;
                                c = Math.sqrt(1 - (p * p) / (h * h));
                            }
                            c = l(c);
                        } else 6 === f ? (c = l((c = d === u ? 0 : (1 + Math.cos(Math.PI + (2 * Math.PI * (r = t(e(0, r + 0.5 - u), d - u))) / (d - u))) / 2))) : (r >= n(u) && (c = r - u < 0 ? e(0, t(t(d, 1) - (u - r), 1)) : e(0, t(d - r, 1))), (c = l(c)));
                        if (100 !== this.sm.v) {
                            var m = 0.01 * this.sm.v;
                            0 === m && (m = 1e-8);
                            var g = 0.5 - 0.5 * m;
                            c < g ? (c = 0) : (c = (c - g) / m) > 1 && (c = 1);
                        }
                        return c * this.a.v;
                    },
                    getValue: function (e) {
                        this.iterateDynamicProperties(), (this._mdf = e || this._mdf), (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0), e && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            n = this.o.v / t,
                            r = this.s.v / t + n,
                            i = this.e.v / t + n;
                        if (r > i) {
                            var a = r;
                            (r = i), (i = a);
                        }
                        (this.finalS = r), (this.finalE = i);
                    }
                }),
                extendPrototype([DynamicPropertyContainer], r),
                {
                    getTextSelectorProp: function (e, t, n) {
                        return new r(e, t, n);
                    }
                }
            );
        })();
        function TextAnimatorDataProperty(e, t, n) {
            var r = { propType: !1 },
                i = PropertyFactory.getProp,
                a = t.a;
            (this.a = {
                r: a.r ? i(e, a.r, 0, degToRads, n) : r,
                rx: a.rx ? i(e, a.rx, 0, degToRads, n) : r,
                ry: a.ry ? i(e, a.ry, 0, degToRads, n) : r,
                sk: a.sk ? i(e, a.sk, 0, degToRads, n) : r,
                sa: a.sa ? i(e, a.sa, 0, degToRads, n) : r,
                s: a.s ? i(e, a.s, 1, 0.01, n) : r,
                a: a.a ? i(e, a.a, 1, 0, n) : r,
                o: a.o ? i(e, a.o, 0, 0.01, n) : r,
                p: a.p ? i(e, a.p, 1, 0, n) : r,
                sw: a.sw ? i(e, a.sw, 0, 0, n) : r,
                sc: a.sc ? i(e, a.sc, 1, 0, n) : r,
                fc: a.fc ? i(e, a.fc, 1, 0, n) : r,
                fh: a.fh ? i(e, a.fh, 0, 0, n) : r,
                fs: a.fs ? i(e, a.fs, 0, 0.01, n) : r,
                fb: a.fb ? i(e, a.fb, 0, 0.01, n) : r,
                t: a.t ? i(e, a.t, 0, 0, n) : r
            }),
                (this.s = TextSelectorProp.getTextSelectorProp(e, t.s, n)),
                (this.s.t = t.s.t);
        }
        function TextAnimatorProperty(e, t, n) {
            (this._isFirstFrame = !0), (this._hasMaskedPath = !1), (this._frameId = -1), (this._textData = e), (this._renderType = t), (this._elem = n), (this._animatorsData = createSizedArray(this._textData.a.length)), (this._pathData = {}), (this._moreOptions = { alignment: {} }), (this.renderedLetters = []), (this.lettersChangedFlag = !1), this.initDynamicPropertyContainer(n);
        }
        function ITextElement() {}
        (TextAnimatorProperty.prototype.searchProperties = function () {
            var e,
                t,
                n = this._textData.a.length,
                r = PropertyFactory.getProp;
            for (e = 0; e < n; e += 1) (t = this._textData.a[e]), (this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this));
            this._textData.p && 'm' in this._textData.p
                ? ((this._pathData = {
                      a: r(this._elem, this._textData.p.a, 0, 0, this),
                      f: r(this._elem, this._textData.p.f, 0, 0, this),
                      l: r(this._elem, this._textData.p.l, 0, 0, this),
                      r: r(this._elem, this._textData.p.r, 0, 0, this),
                      p: r(this._elem, this._textData.p.p, 0, 0, this),
                      m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                  }),
                  (this._hasMaskedPath = !0))
                : (this._hasMaskedPath = !1),
                (this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this));
        }),
            (TextAnimatorProperty.prototype.getMeasures = function (e, t) {
                if (((this.lettersChangedFlag = t), this._mdf || this._isFirstFrame || t || (this._hasMaskedPath && this._pathData.m._mdf))) {
                    this._isFirstFrame = !1;
                    var n,
                        r,
                        i,
                        a,
                        o,
                        s,
                        l,
                        c,
                        u,
                        d,
                        f,
                        _,
                        p,
                        h,
                        m,
                        g,
                        E,
                        b,
                        y = this._moreOptions.alignment.v,
                        v = this._animatorsData,
                        O = this._textData,
                        I = this.mHelper,
                        S = this._renderType,
                        T = this.renderedLetters.length,
                        A = e.l;
                    if (this._hasMaskedPath) {
                        if (((Y = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                            var N,
                                C,
                                R,
                                P,
                                w,
                                D,
                                L,
                                x,
                                M,
                                k,
                                j,
                                U,
                                G,
                                B,
                                V,
                                F,
                                Z,
                                H,
                                Y,
                                W,
                                K = Y.v;
                            for (
                                this._pathData.r.v && (K = K.reverse()),
                                    w = {
                                        tLength: 0,
                                        segments: []
                                    },
                                    P = K._length - 1,
                                    F = 0,
                                    R = 0;
                                R < P;
                                R += 1
                            )
                                (W = bez.buildBezierData(K.v[R], K.v[R + 1], [K.o[R][0] - K.v[R][0], K.o[R][1] - K.v[R][1]], [K.i[R + 1][0] - K.v[R + 1][0], K.i[R + 1][1] - K.v[R + 1][1]])), (w.tLength += W.segmentLength), w.segments.push(W), (F += W.segmentLength);
                            (R = P), Y.v.c && ((W = bez.buildBezierData(K.v[R], K.v[0], [K.o[R][0] - K.v[R][0], K.o[R][1] - K.v[R][1]], [K.i[0][0] - K.v[0][0], K.i[0][1] - K.v[0][1]])), (w.tLength += W.segmentLength), w.segments.push(W), (F += W.segmentLength)), (this._pathData.pi = w);
                        }
                        if (((w = this._pathData.pi), (D = this._pathData.f.v), (j = 0), (k = 1), (x = 0), (M = !0), (B = w.segments), D < 0 && Y.v.c)) for (w.tLength < Math.abs(D) && (D = -Math.abs(D) % w.tLength), j = B.length - 1, k = (G = B[j].points).length - 1; D < 0; ) (D += G[k].partialLength), (k -= 1) < 0 && ((j -= 1), (k = (G = B[j].points).length - 1));
                        (U = (G = B[j].points)[k - 1]), (V = (L = G[k]).partialLength);
                    }
                    (P = A.length), (N = 0), (C = 0);
                    var z = 1.2 * e.finalSize * 0.714,
                        q = !0;
                    a = v.length;
                    var Q = -1,
                        X = D,
                        J = j,
                        $ = k,
                        ee = -1,
                        et = '',
                        en = this.defaultPropsArray;
                    if (2 === e.j || 1 === e.j) {
                        var er = 0,
                            ei = 0,
                            ea = 2 === e.j ? -0.5 : -1,
                            eo = 0,
                            es = !0;
                        for (R = 0; R < P; R += 1)
                            if (A[R].n) {
                                for (er && (er += ei); eo < R; ) (A[eo].animatorJustifyOffset = er), (eo += 1);
                                (er = 0), (es = !0);
                            } else {
                                for (i = 0; i < a; i += 1) (n = v[i].a).t.propType && (es && 2 === e.j && (ei += n.t.v * ea), (s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)).length ? (er += n.t.v * s[0] * ea) : (er += n.t.v * s * ea));
                                es = !1;
                            }
                        for (er && (er += ei); eo < R; ) (A[eo].animatorJustifyOffset = er), (eo += 1);
                    }
                    for (R = 0; R < P; R += 1) {
                        if ((I.reset(), (d = 1), A[R].n)) (N = 0), (C += e.yOffset), (C += +!!q), (D = X), (q = !1), this._hasMaskedPath && ((j = J), (k = $), (U = (G = B[j].points)[k - 1]), (V = (L = G[k]).partialLength), (x = 0)), (et = ''), (E = ''), (m = ''), (b = ''), (en = this.defaultPropsArray);
                        else {
                            if (this._hasMaskedPath) {
                                if (ee !== A[R].line) {
                                    switch (e.j) {
                                        case 1:
                                            D += F - e.lineWidths[A[R].line];
                                            break;
                                        case 2:
                                            D += (F - e.lineWidths[A[R].line]) / 2;
                                    }
                                    ee = A[R].line;
                                }
                                Q !== A[R].ind && (A[Q] && (D += A[Q].extra), (D += A[R].an / 2), (Q = A[R].ind)), (D += y[0] * A[R].an * 0.005);
                                var el = 0;
                                for (i = 0; i < a; i += 1) (n = v[i].a).p.propType && ((s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)).length ? (el += n.p.v[0] * s[0]) : (el += n.p.v[0] * s)), n.a.propType && ((s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)).length ? (el += n.a.v[0] * s[0]) : (el += n.a.v[0] * s));
                                for (M = !0, this._pathData.a.v && (D = 0.5 * A[0].an + ((F - this._pathData.f.v - 0.5 * A[0].an - 0.5 * A[A.length - 1].an) * Q) / (P - 1) + this._pathData.f.v); M; ) x + V >= D + el || !G ? ((Z = (D + el - x) / L.partialLength), (c = U.point[0] + (L.point[0] - U.point[0]) * Z), (u = U.point[1] + (L.point[1] - U.point[1]) * Z), I.translate(-y[0] * A[R].an * 0.005, -(0.01 * (y[1] * z))), (M = !1)) : G && ((x += L.partialLength), (k += 1) >= G.length && ((k = 0), B[(j += 1)] ? (G = B[j].points) : Y.v.c ? ((k = 0), (G = B[(j = 0)].points)) : ((x -= L.partialLength), (G = null))), G && ((U = L), (V = (L = G[k]).partialLength)));
                                (l = A[R].an / 2 - A[R].add), I.translate(-l, 0, 0);
                            } else (l = A[R].an / 2 - A[R].add), I.translate(-l, 0, 0), I.translate(-y[0] * A[R].an * 0.005, -y[1] * z * 0.01, 0);
                            for (i = 0; i < a; i += 1) (n = v[i].a).t.propType && ((s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)), (0 !== N || 0 !== e.j) && (this._hasMaskedPath ? (s.length ? (D += n.t.v * s[0]) : (D += n.t.v * s)) : s.length ? (N += n.t.v * s[0]) : (N += n.t.v * s)));
                            for (e.strokeWidthAnim && (_ = e.sw || 0), e.strokeColorAnim && (f = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (p = [e.fc[0], e.fc[1], e.fc[2]]), i = 0; i < a; i += 1) (n = v[i].a).a.propType && ((s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)).length ? I.translate(-n.a.v[0] * s[0], -n.a.v[1] * s[1], n.a.v[2] * s[2]) : I.translate(-n.a.v[0] * s, -n.a.v[1] * s, n.a.v[2] * s));
                            for (i = 0; i < a; i += 1) (n = v[i].a).s.propType && ((s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)).length ? I.scale(1 + (n.s.v[0] - 1) * s[0], 1 + (n.s.v[1] - 1) * s[1], 1) : I.scale(1 + (n.s.v[0] - 1) * s, 1 + (n.s.v[1] - 1) * s, 1));
                            for (i = 0; i < a; i += 1) {
                                if (((n = v[i].a), (s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)), n.sk.propType && (s.length ? I.skewFromAxis(-n.sk.v * s[0], n.sa.v * s[1]) : I.skewFromAxis(-n.sk.v * s, n.sa.v * s)), n.r.propType && (s.length ? I.rotateZ(-n.r.v * s[2]) : I.rotateZ(-n.r.v * s)), n.ry.propType && (s.length ? I.rotateY(n.ry.v * s[1]) : I.rotateY(n.ry.v * s)), n.rx.propType && (s.length ? I.rotateX(n.rx.v * s[0]) : I.rotateX(n.rx.v * s)), n.o.propType && (s.length ? (d += (n.o.v * s[0] - d) * s[0]) : (d += (n.o.v * s - d) * s)), e.strokeWidthAnim && n.sw.propType && (s.length ? (_ += n.sw.v * s[0]) : (_ += n.sw.v * s)), e.strokeColorAnim && n.sc.propType)) for (h = 0; h < 3; h += 1) s.length ? (f[h] += (n.sc.v[h] - f[h]) * s[0]) : (f[h] += (n.sc.v[h] - f[h]) * s);
                                if (e.fillColorAnim && e.fc) {
                                    if (n.fc.propType) for (h = 0; h < 3; h += 1) s.length ? (p[h] += (n.fc.v[h] - p[h]) * s[0]) : (p[h] += (n.fc.v[h] - p[h]) * s);
                                    n.fh.propType && (p = s.length ? addHueToRGB(p, n.fh.v * s[0]) : addHueToRGB(p, n.fh.v * s)), n.fs.propType && (p = s.length ? addSaturationToRGB(p, n.fs.v * s[0]) : addSaturationToRGB(p, n.fs.v * s)), n.fb.propType && (p = s.length ? addBrightnessToRGB(p, n.fb.v * s[0]) : addBrightnessToRGB(p, n.fb.v * s));
                                }
                            }
                            for (i = 0; i < a; i += 1) (n = v[i].a).p.propType && ((s = (r = v[i].s).getMult(A[R].anIndexes[i], O.a[i].s.totalChars)), this._hasMaskedPath ? (s.length ? I.translate(0, n.p.v[1] * s[0], -n.p.v[2] * s[1]) : I.translate(0, n.p.v[1] * s, -n.p.v[2] * s)) : s.length ? I.translate(n.p.v[0] * s[0], n.p.v[1] * s[1], -n.p.v[2] * s[2]) : I.translate(n.p.v[0] * s, n.p.v[1] * s, -n.p.v[2] * s));
                            if ((e.strokeWidthAnim && (m = _ < 0 ? 0 : _), e.strokeColorAnim && (g = 'rgb(' + Math.round(255 * f[0]) + ',' + Math.round(255 * f[1]) + ',' + Math.round(255 * f[2]) + ')'), e.fillColorAnim && e.fc && (E = 'rgb(' + Math.round(255 * p[0]) + ',' + Math.round(255 * p[1]) + ',' + Math.round(255 * p[2]) + ')'), this._hasMaskedPath)) {
                                if ((I.translate(0, -e.ls), I.translate(0, y[1] * z * 0.01 + C, 0), this._pathData.p.v)) {
                                    var ec = (180 * Math.atan((H = (L.point[1] - U.point[1]) / (L.point[0] - U.point[0])))) / Math.PI;
                                    L.point[0] < U.point[0] && (ec += 180), I.rotate((-ec * Math.PI) / 180);
                                }
                                I.translate(c, u, 0), (D -= y[0] * A[R].an * 0.005), A[R + 1] && Q !== A[R + 1].ind && ((D += A[R].an / 2), (D += 0.001 * e.tr * e.finalSize));
                            } else {
                                switch ((I.translate(N, C, 0), e.ps && I.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j)) {
                                    case 1:
                                        I.translate(A[R].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[A[R].line]), 0, 0);
                                        break;
                                    case 2:
                                        I.translate(A[R].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[A[R].line]) / 2, 0, 0);
                                }
                                I.translate(0, -e.ls), I.translate(l, 0, 0), I.translate(y[0] * A[R].an * 0.005, y[1] * z * 0.01, 0), (N += A[R].l + 0.001 * e.tr * e.finalSize);
                            }
                            'html' === S ? (et = I.toCSS()) : 'svg' === S ? (et = I.to2dCSS()) : (en = [I.props[0], I.props[1], I.props[2], I.props[3], I.props[4], I.props[5], I.props[6], I.props[7], I.props[8], I.props[9], I.props[10], I.props[11], I.props[12], I.props[13], I.props[14], I.props[15]]), (b = d);
                        }
                        T <= R ? ((o = new LetterProps(b, m, g, E, et, en)), this.renderedLetters.push(o), (T += 1), (this.lettersChangedFlag = !0)) : ((o = this.renderedLetters[R]), (this.lettersChangedFlag = o.update(b, m, g, E, et, en) || this.lettersChangedFlag));
                    }
                }
            }),
            (TextAnimatorProperty.prototype.getValue = function () {
                this._elem.globalData.frameId !== this._frameId && ((this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties());
            }),
            (TextAnimatorProperty.prototype.mHelper = new Matrix()),
            (TextAnimatorProperty.prototype.defaultPropsArray = []),
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            (ITextElement.prototype.initElement = function (e, t, n) {
                (this.lettersChangedFlag = !0), this.initFrame(), this.initBaseData(e, t, n), (this.textProperty = new TextProperty(this, e.t, this.dynamicProperties)), (this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this)), this.initTransform(e, t, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
            }),
            (ITextElement.prototype.prepareFrame = function (e) {
                (this._mdf = !1), this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
            }),
            (ITextElement.prototype.createPathShape = function (e, t) {
                var n,
                    r,
                    i = t.length,
                    a = '';
                for (n = 0; n < i; n += 1) 'sh' === t[n].ty && (a += buildShapeString((r = t[n].ks.k), r.i.length, !0, e));
                return a;
            }),
            (ITextElement.prototype.updateDocumentData = function (e, t) {
                this.textProperty.updateDocumentData(e, t);
            }),
            (ITextElement.prototype.canResizeFont = function (e) {
                this.textProperty.canResizeFont(e);
            }),
            (ITextElement.prototype.setMinimumFontSize = function (e) {
                this.textProperty.setMinimumFontSize(e);
            }),
            (ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, n, r, i) {
                switch ((e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j)) {
                    case 1:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]), 0, 0);
                        break;
                    case 2:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]) / 2, 0, 0);
                }
                t.translate(r, i, 0);
            }),
            (ITextElement.prototype.buildColor = function (e) {
                return 'rgb(' + Math.round(255 * e[0]) + ',' + Math.round(255 * e[1]) + ',' + Math.round(255 * e[2]) + ')';
            }),
            (ITextElement.prototype.emptyProp = new LetterProps()),
            (ITextElement.prototype.destroy = function () {}),
            (ITextElement.prototype.validateText = function () {
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), (this.textProperty._isFirstFrame = !1), (this.textProperty._mdf = !1));
            });
        var emptyShapeData = { shapes: [] };
        function SVGTextLottieElement(e, t, n) {
            (this.textSpans = []), (this.renderType = 'svg'), this.initElement(e, t, n);
        }
        function ISolidElement(e, t, n) {
            this.initElement(e, t, n);
        }
        function NullElement(e, t, n) {
            this.initFrame(), this.initBaseData(e, t, n), this.initFrame(), this.initTransform(e, t, n), this.initHierarchy();
        }
        function SVGRendererBase() {}
        function ICompElement() {}
        function SVGCompElement(e, t, n) {
            (this.layers = e.layers), (this.supports3d = !0), (this.completeLayers = !1), (this.pendingElements = []), (this.elements = this.layers ? createSizedArray(this.layers.length) : []), this.initElement(e, t, n), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 });
        }
        function SVGRenderer(e, t) {
            (this.animationItem = e), (this.layers = null), (this.renderedFrame = -1), (this.svgElement = createNS('svg'));
            var n = '';
            if (t && t.title) {
                var r = createNS('title'),
                    i = createElementID();
                r.setAttribute('id', i), (r.textContent = t.title), this.svgElement.appendChild(r), (n += i);
            }
            if (t && t.description) {
                var a = createNS('desc'),
                    o = createElementID();
                a.setAttribute('id', o), (a.textContent = t.description), this.svgElement.appendChild(a), (n += ' ' + o);
            }
            n && this.svgElement.setAttribute('aria-labelledby', n);
            var s = createNS('defs');
            this.svgElement.appendChild(s);
            var l = createNS('g');
            this.svgElement.appendChild(l),
                (this.layerElement = l),
                (this.renderConfig = {
                    preserveAspectRatio: (t && t.preserveAspectRatio) || 'xMidYMid meet',
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || 'xMidYMid slice',
                    contentVisibility: (t && t.contentVisibility) || 'visible',
                    progressiveLoad: (t && t.progressiveLoad) || !1,
                    hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                    viewBoxOnly: (t && t.viewBoxOnly) || !1,
                    viewBoxSize: (t && t.viewBoxSize) || !1,
                    className: (t && t.className) || '',
                    id: (t && t.id) || '',
                    focusable: t && t.focusable,
                    filterSize: {
                        width: (t && t.filterSize && t.filterSize.width) || '100%',
                        height: (t && t.filterSize && t.filterSize.height) || '100%',
                        x: (t && t.filterSize && t.filterSize.x) || '0%',
                        y: (t && t.filterSize && t.filterSize.y) || '0%'
                    },
                    width: t && t.width,
                    height: t && t.height,
                    runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
                }),
                (this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: s,
                    renderConfig: this.renderConfig
                }),
                (this.elements = []),
                (this.pendingElements = []),
                (this.destroyed = !1),
                (this.rendererType = 'svg');
        }
        function ShapeTransformManager() {
            (this.sequences = {}), (this.sequenceList = []), (this.transform_key_count = 0);
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
            (SVGTextLottieElement.prototype.createContent = function () {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS('text'));
            }),
            (SVGTextLottieElement.prototype.buildTextContents = function (e) {
                for (var t = 0, n = e.length, r = [], i = ''; t < n; ) '\r' === e[t] || '\x03' === e[t] ? (r.push(i), (i = '')) : (i += e[t]), (t += 1);
                return r.push(i), r;
            }),
            (SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
                if (e.shapes && e.shapes.length) {
                    var n = e.shapes[0];
                    if (n.it) {
                        var r = n.it[n.it.length - 1];
                        r.s && ((r.s.k[0] = t), (r.s.k[1] = t));
                    }
                }
                return e;
            }),
            (SVGTextLottieElement.prototype.buildNewText = function () {
                this.addDynamicProperty(this);
                var e = this.textProperty.currentData;
                (this.renderedLetters = createSizedArray(e ? e.l.length : 0)), e.fc ? this.layerElement.setAttribute('fill', this.buildColor(e.fc)) : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'), e.sc && (this.layerElement.setAttribute('stroke', this.buildColor(e.sc)), this.layerElement.setAttribute('stroke-width', e.sw)), this.layerElement.setAttribute('font-size', e.finalSize);
                var t = this.globalData.fontManager.getFontByName(e.f);
                if (t.fClass) this.layerElement.setAttribute('class', t.fClass);
                else {
                    this.layerElement.setAttribute('font-family', t.fFamily);
                    var n = e.fWeight,
                        r = e.fStyle;
                    this.layerElement.setAttribute('font-style', r), this.layerElement.setAttribute('font-weight', n);
                }
                this.layerElement.setAttribute('aria-label', e.t);
                var i = e.l || [],
                    a = !!this.globalData.fontManager.chars;
                m = i.length;
                var o = this.mHelper,
                    s = '',
                    l = this.data.singleShape,
                    c = 0,
                    u = 0,
                    d = !0,
                    f = 0.001 * e.tr * e.finalSize;
                if (!l || a || e.sz) {
                    var _ = this.textSpans.length;
                    for (h = 0; h < m; h += 1) {
                        if (
                            (this.textSpans[h] ||
                                (this.textSpans[h] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }),
                            !a || !l || 0 === h)
                        ) {
                            if (((g = _ > h ? this.textSpans[h].span : createNS(a ? 'g' : 'text')), _ <= h)) {
                                if ((g.setAttribute('stroke-linecap', 'butt'), g.setAttribute('stroke-linejoin', 'round'), g.setAttribute('stroke-miterlimit', '4'), (this.textSpans[h].span = g), a)) {
                                    var p = createNS('g');
                                    g.appendChild(p), (this.textSpans[h].childSpan = p);
                                }
                                (this.textSpans[h].span = g), this.layerElement.appendChild(g);
                            }
                            g.style.display = 'inherit';
                        }
                        if ((o.reset(), l && (i[h].n && ((c = -f), (u += e.yOffset), (u += +!!d), (d = !1)), this.applyTextPropertiesToMatrix(e, o, i[h].line, c, u), (c += i[h].l || 0), (c += f)), a)) {
                            if (1 === (E = this.globalData.fontManager.getCharData(e.finalText[h], t.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)).t) b = new SVGCompElement(E.data, this.globalData, this);
                            else {
                                var h,
                                    m,
                                    g,
                                    E,
                                    b,
                                    y = emptyShapeData;
                                E.data && E.data.shapes && (y = this.buildShapeData(E.data, e.finalSize)), (b = new SVGShapeElement(y, this.globalData, this));
                            }
                            if (this.textSpans[h].glyph) {
                                var v = this.textSpans[h].glyph;
                                this.textSpans[h].childSpan.removeChild(v.layerElement), v.destroy();
                            }
                            (this.textSpans[h].glyph = b), (b._debug = !0), b.prepareFrame(0), b.renderFrame(), this.textSpans[h].childSpan.appendChild(b.layerElement), 1 === E.t && this.textSpans[h].childSpan.setAttribute('transform', 'scale(' + e.finalSize / 100 + ',' + e.finalSize / 100 + ')');
                        } else l && g.setAttribute('transform', 'translate(' + o.props[12] + ',' + o.props[13] + ')'), (g.textContent = i[h].val), g.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
                    }
                    l && g && g.setAttribute('d', s);
                } else {
                    var O = this.textContainer,
                        I = 'start';
                    switch (e.j) {
                        case 1:
                            I = 'end';
                            break;
                        case 2:
                            I = 'middle';
                            break;
                        default:
                            I = 'start';
                    }
                    O.setAttribute('text-anchor', I), O.setAttribute('letter-spacing', f);
                    var S = this.buildTextContents(e.finalText);
                    for (h = 0, m = S.length, u = e.ps ? e.ps[1] + e.ascent : 0; h < m; h += 1)
                        ((g = this.textSpans[h].span || createNS('tspan')).textContent = S[h]),
                            g.setAttribute('x', 0),
                            g.setAttribute('y', u),
                            (g.style.display = 'inherit'),
                            O.appendChild(g),
                            this.textSpans[h] ||
                                (this.textSpans[h] = {
                                    span: null,
                                    glyph: null
                                }),
                            (this.textSpans[h].span = g),
                            (u += e.finalLineHeight);
                    this.layerElement.appendChild(O);
                }
                for (; h < this.textSpans.length; ) (this.textSpans[h].span.style.display = 'none'), (h += 1);
                this._sizeChanged = !0;
            }),
            (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
                if ((this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged)) {
                    this._sizeChanged = !1;
                    var e = this.layerElement.getBBox();
                    this.bbox = {
                        top: e.y,
                        left: e.x,
                        width: e.width,
                        height: e.height
                    };
                }
                return this.bbox;
            }),
            (SVGTextLottieElement.prototype.getValue = function () {
                var e,
                    t,
                    n = this.textSpans.length;
                for (e = 0, this.renderedFrame = this.comp.renderedFrame; e < n; e += 1) (t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0));
            }),
            (SVGTextLottieElement.prototype.renderInnerContent = function () {
                if ((this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag))) {
                    this._sizeChanged = !0;
                    var e,
                        t,
                        n,
                        r,
                        i,
                        a = this.textAnimator.renderedLetters,
                        o = this.textProperty.currentData.l;
                    for (e = 0, t = o.length; e < t; e += 1) !o[e].n && ((n = a[e]), (r = this.textSpans[e].span), (i = this.textSpans[e].glyph) && i.renderFrame(), n._mdf.m && r.setAttribute('transform', n.m), n._mdf.o && r.setAttribute('opacity', n.o), n._mdf.sw && r.setAttribute('stroke-width', n.sw), n._mdf.sc && r.setAttribute('stroke', n.sc), n._mdf.fc && r.setAttribute('fill', n.fc));
                }
            }),
            extendPrototype([IImageElement], ISolidElement),
            (ISolidElement.prototype.createContent = function () {
                var e = createNS('rect');
                e.setAttribute('width', this.data.sw), e.setAttribute('height', this.data.sh), e.setAttribute('fill', this.data.sc), this.layerElement.appendChild(e);
            }),
            (NullElement.prototype.prepareFrame = function (e) {
                this.prepareProperties(e, !0);
            }),
            (NullElement.prototype.renderFrame = function () {}),
            (NullElement.prototype.getBaseElement = function () {
                return null;
            }),
            (NullElement.prototype.destroy = function () {}),
            (NullElement.prototype.sourceRectAtTime = function () {}),
            (NullElement.prototype.hide = function () {}),
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
            extendPrototype([BaseRenderer], SVGRendererBase),
            (SVGRendererBase.prototype.createNull = function (e) {
                return new NullElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createShape = function (e) {
                return new SVGShapeElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createText = function (e) {
                return new SVGTextLottieElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createImage = function (e) {
                return new IImageElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.createSolid = function (e) {
                return new ISolidElement(e, this.globalData, this);
            }),
            (SVGRendererBase.prototype.configAnimation = function (e) {
                this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'), this.svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink'), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize) : this.svgElement.setAttribute('viewBox', '0 0 ' + e.w + ' ' + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute('width', e.w), this.svgElement.setAttribute('height', e.h), (this.svgElement.style.width = '100%'), (this.svgElement.style.height = '100%'), (this.svgElement.style.transform = 'translate3d(0,0,0)'), (this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility)), this.renderConfig.width && this.svgElement.setAttribute('width', this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute('height', this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute('class', this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute('id', this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute('focusable', this.renderConfig.focusable), this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var t = this.globalData.defs;
                this.setupGlobalData(e, t), (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad), (this.data = e);
                var n = createNS('clipPath'),
                    r = createNS('rect');
                r.setAttribute('width', e.w), r.setAttribute('height', e.h), r.setAttribute('x', 0), r.setAttribute('y', 0);
                var i = createElementID();
                n.setAttribute('id', i), n.appendChild(r), this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + i + ')'), t.appendChild(n), (this.layers = e.layers), (this.elements = createSizedArray(e.layers.length));
            }),
            (SVGRendererBase.prototype.destroy = function () {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), (this.layerElement = null), (this.globalData.defs = null);
                var e,
                    t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (SVGRendererBase.prototype.updateContainerSize = function () {}),
            (SVGRendererBase.prototype.findIndexByInd = function (e) {
                var t = 0,
                    n = this.layers.length;
                for (t = 0; t < n; t += 1) if (this.layers[t].ind === e) return t;
                return -1;
            }),
            (SVGRendererBase.prototype.buildItem = function (e) {
                var t = this.elements;
                if (!t[e] && 99 !== this.layers[e].ty) {
                    t[e] = !0;
                    var n = this.createItem(this.layers[e]);
                    if (((t[e] = n), getExpressionsPlugin() && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, e), this.layers[e].tt)) {
                        var r = 'tp' in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
                        if (-1 === r) return;
                        if (this.elements[r] && !0 !== this.elements[r]) {
                            var i = t[r].getMatte(this.layers[e].tt);
                            n.setMatte(i);
                        } else this.buildItem(r), this.addPendingElement(n);
                    }
                }
            }),
            (SVGRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) {
                    var e = this.pendingElements.pop();
                    if ((e.checkParenting(), e.data.tt))
                        for (var t = 0, n = this.elements.length; t < n; ) {
                            if (this.elements[t] === e) {
                                var r = 'tp' in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                                    i = this.elements[r].getMatte(this.layers[t].tt);
                                e.setMatte(i);
                                break;
                            }
                            t += 1;
                        }
                }
            }),
            (SVGRendererBase.prototype.renderFrame = function (e) {
                if (this.renderedFrame !== e && !this.destroyed) {
                    null === e ? (e = this.renderedFrame) : (this.renderedFrame = e), (this.globalData.frameNum = e), (this.globalData.frameId += 1), (this.globalData.projectInterface.currentFrame = e), (this.globalData._mdf = !1);
                    var t,
                        n = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), t = n - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
                    if (this.globalData._mdf) for (t = 0; t < n; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
                }
            }),
            (SVGRendererBase.prototype.appendElementInPos = function (e, t) {
                var n,
                    r = e.getBaseElement();
                if (r) {
                    for (var i = 0; i < t; ) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (n = this.elements[i].getBaseElement()), (i += 1);
                    n ? this.layerElement.insertBefore(r, n) : this.layerElement.appendChild(r);
                }
            }),
            (SVGRendererBase.prototype.hide = function () {
                this.layerElement.style.display = 'none';
            }),
            (SVGRendererBase.prototype.show = function () {
                this.layerElement.style.display = 'block';
            }),
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
            (ICompElement.prototype.initElement = function (e, t, n) {
                this.initFrame(), this.initBaseData(e, t, n), this.initTransform(e, t, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !t.progressiveLoad) && this.buildAllItems(), this.hide();
            }),
            (ICompElement.prototype.prepareFrame = function (e) {
                if (((this._mdf = !1), this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt)) {
                    if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
                    else {
                        var t,
                            n = this.tm.v;
                        n === this.data.op && (n = this.data.op - 1), (this.renderedFrame = n);
                    }
                    var r = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), t = r - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && (this.elements[t].prepareFrame(this.renderedFrame - this.layers[t].st), this.elements[t]._mdf && (this._mdf = !0));
                }
            }),
            (ICompElement.prototype.renderInnerContent = function () {
                var e,
                    t = this.layers.length;
                for (e = 0; e < t; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }),
            (ICompElement.prototype.setElements = function (e) {
                this.elements = e;
            }),
            (ICompElement.prototype.getElements = function () {
                return this.elements;
            }),
            (ICompElement.prototype.destroyElements = function () {
                var e,
                    t = this.layers.length;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
            }),
            (ICompElement.prototype.destroy = function () {
                this.destroyElements(), this.destroyBaseElement();
            }),
            extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
            (SVGCompElement.prototype.createComp = function (e) {
                return new SVGCompElement(e, this.globalData, this);
            }),
            extendPrototype([SVGRendererBase], SVGRenderer),
            (SVGRenderer.prototype.createComp = function (e) {
                return new SVGCompElement(e, this.globalData, this);
            }),
            (ShapeTransformManager.prototype = {
                addTransformSequence: function (e) {
                    var t,
                        n = e.length,
                        r = '_';
                    for (t = 0; t < n; t += 1) r += e[t].transform.key + '_';
                    var i = this.sequences[r];
                    return (
                        i ||
                            ((i = {
                                transforms: [].concat(e),
                                finalTransform: new Matrix(),
                                _mdf: !1
                            }),
                            (this.sequences[r] = i),
                            this.sequenceList.push(i)),
                        i
                    );
                },
                processSequence: function (e, t) {
                    for (var n = 0, r = e.transforms.length, i = t; n < r && !t; ) {
                        if (e.transforms[n].transform.mProps._mdf) {
                            i = !0;
                            break;
                        }
                        n += 1;
                    }
                    if (i) for (e.finalTransform.reset(), n = r - 1; n >= 0; n -= 1) e.finalTransform.multiply(e.transforms[n].transform.mProps.v);
                    e._mdf = i;
                },
                processSequences: function (e) {
                    var t,
                        n = this.sequenceList.length;
                    for (t = 0; t < n; t += 1) this.processSequence(this.sequenceList[t], e);
                },
                getNewKey: function () {
                    return (this.transform_key_count += 1), '_' + this.transform_key_count;
                }
            });
        var lumaLoader = function () {
            var e = '__lottie_element_luma_buffer',
                t = null,
                n = null,
                r = null;
            function i() {
                var t = createNS('svg'),
                    n = createNS('filter'),
                    r = createNS('feColorMatrix');
                return n.setAttribute('id', e), r.setAttribute('type', 'matrix'), r.setAttribute('color-interpolation-filters', 'sRGB'), r.setAttribute('values', '0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0'), n.appendChild(r), t.appendChild(n), t.setAttribute('id', e + '_svg'), featureSupport.svgLumaHidden && (t.style.display = 'none'), t;
            }
            function a() {
                t || ((r = i()), document.body.appendChild(r), ((n = (t = createTag('canvas')).getContext('2d')).filter = 'url(#' + e + ')'), (n.fillStyle = 'rgba(0,0,0,0)'), n.fillRect(0, 0, 1, 1));
            }
            function o(r) {
                return t || a(), (t.width = r.width), (t.height = r.height), (n.filter = 'url(#' + e + ')'), t;
            }
            return {
                load: a,
                get: o
            };
        };
        function createCanvas(e, t) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
            var n = createTag('canvas');
            return (n.width = e), (n.height = t), n;
        }
        var assetLoader = (function () {
                return {
                    loadLumaCanvas: lumaLoader.load,
                    getLumaCanvas: lumaLoader.get,
                    createCanvas: createCanvas
                };
            })(),
            registeredEffects = {};
        function CVEffects(e) {
            var t,
                n,
                r = e.data.ef ? e.data.ef.length : 0;
            for (t = 0, this.filters = []; t < r; t += 1) {
                n = null;
                var i = e.data.ef[t].ty;
                registeredEffects[i] && (n = new registeredEffects[i].effect(e.effectsManager.effectElements[t], e)), n && this.filters.push(n);
            }
            this.filters.length && e.addRenderableComponent(this);
        }
        function registerEffect(e, t) {
            registeredEffects[e] = { effect: t };
        }
        function CVMaskElement(e, t) {
            (this.data = e), (this.element = t), (this.masksProperties = this.data.masksProperties || []), (this.viewData = createSizedArray(this.masksProperties.length));
            var n,
                r = this.masksProperties.length,
                i = !1;
            for (n = 0; n < r; n += 1) 'n' !== this.masksProperties[n].mode && (i = !0), (this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3));
            (this.hasMasks = i), i && this.element.addRenderableComponent(this);
        }
        function CVBaseElement() {}
        (CVEffects.prototype.renderFrame = function (e) {
            var t,
                n = this.filters.length;
            for (t = 0; t < n; t += 1) this.filters[t].renderFrame(e);
        }),
            (CVEffects.prototype.getEffects = function (e) {
                var t,
                    n = this.filters.length,
                    r = [];
                for (t = 0; t < n; t += 1) this.filters[t].type === e && r.push(this.filters[t]);
                return r;
            }),
            (CVMaskElement.prototype.renderFrame = function () {
                if (this.hasMasks) {
                    var e = this.element.finalTransform.mat,
                        t = this.element.canvasContext,
                        n = this.masksProperties.length;
                    for (t.beginPath(), r = 0; r < n; r += 1)
                        if ('n' !== this.masksProperties[r].mode) {
                            this.masksProperties[r].inv && (t.moveTo(0, 0), t.lineTo(this.element.globalData.compSize.w, 0), t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), t.lineTo(0, this.element.globalData.compSize.h), t.lineTo(0, 0)), (o = this.viewData[r].v), (i = e.applyToPointArray(o.v[0][0], o.v[0][1], 0)), t.moveTo(i[0], i[1]);
                            var r,
                                i,
                                a,
                                o,
                                s,
                                l = o._length;
                            for (s = 1; s < l; s += 1) (a = e.applyToTriplePoints(o.o[s - 1], o.i[s], o.v[s])), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                            (a = e.applyToTriplePoints(o.o[s - 1], o.i[0], o.v[0])), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                        }
                    this.element.globalData.renderer.save(!0), t.clip();
                }
            }),
            (CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty),
            (CVMaskElement.prototype.destroy = function () {
                this.element = null;
            });
        var operationsMap = {
            1: 'source-in',
            2: 'source-out',
            3: 'source-in',
            4: 'source-out'
        };
        function CVShapeData(e, t, n, r) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var i,
                a,
                o = 4;
            'rc' === t.ty ? (o = 5) : 'el' === t.ty ? (o = 6) : 'sr' === t.ty && (o = 7), (this.sh = ShapePropertyFactory.getShapeProp(e, t, o, e));
            var s = n.length;
            for (i = 0; i < s; i += 1)
                n[i].closed ||
                    ((a = {
                        transforms: r.addTransformSequence(n[i].transforms),
                        trNodes: []
                    }),
                    this.styledShapes.push(a),
                    n[i].elements.push(a));
        }
        function CVShapeElement(e, t, n) {
            (this.shapes = []), (this.shapesData = e.shapes), (this.stylesList = []), (this.itemsData = []), (this.prevViewData = []), (this.shapeModifiers = []), (this.processedElements = []), (this.transformsManager = new ShapeTransformManager()), this.initElement(e, t, n);
        }
        function CVTextElement(e, t, n) {
            (this.textSpans = []),
                (this.yOffset = 0),
                (this.fillColorAnim = !1),
                (this.strokeColorAnim = !1),
                (this.strokeWidthAnim = !1),
                (this.stroke = !1),
                (this.fill = !1),
                (this.justifyOffset = 0),
                (this.currentRender = null),
                (this.renderType = 'canvas'),
                (this.values = {
                    fill: 'rgba(0,0,0,0)',
                    stroke: 'rgba(0,0,0,0)',
                    sWidth: 0,
                    fValue: ''
                }),
                this.initElement(e, t, n);
        }
        function CVImageElement(e, t, n) {
            (this.assetData = t.getAssetData(e.refId)), (this.img = t.imageLoader.getAsset(this.assetData)), this.initElement(e, t, n);
        }
        function CVSolidElement(e, t, n) {
            this.initElement(e, t, n);
        }
        function CanvasRendererBase() {}
        function CanvasContext() {
            (this.opacity = -1), (this.transform = createTypedArray('float32', 16)), (this.fillStyle = ''), (this.strokeStyle = ''), (this.lineWidth = ''), (this.lineCap = ''), (this.lineJoin = ''), (this.miterLimit = ''), (this.id = Math.random());
        }
        function CVContextData() {
            (this.stack = []), (this.cArrPos = 0), (this.cTr = new Matrix());
            var e,
                t = 15;
            for (e = 0; e < t; e += 1) {
                var n = new CanvasContext();
                this.stack[e] = n;
            }
            (this._length = t), (this.nativeContext = null), (this.transformMat = new Matrix()), (this.currentOpacity = 1), (this.currentFillStyle = ''), (this.appliedFillStyle = ''), (this.currentStrokeStyle = ''), (this.appliedStrokeStyle = ''), (this.currentLineWidth = ''), (this.appliedLineWidth = ''), (this.currentLineCap = ''), (this.appliedLineCap = ''), (this.currentLineJoin = ''), (this.appliedLineJoin = ''), (this.appliedMiterLimit = ''), (this.currentMiterLimit = '');
        }
        function CVCompElement(e, t, n) {
            (this.completeLayers = !1), (this.layers = e.layers), (this.pendingElements = []), (this.elements = createSizedArray(this.layers.length)), this.initElement(e, t, n), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 });
        }
        function CanvasRenderer(e, t) {
            (this.animationItem = e),
                (this.renderConfig = {
                    clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
                    context: (t && t.context) || null,
                    progressiveLoad: (t && t.progressiveLoad) || !1,
                    preserveAspectRatio: (t && t.preserveAspectRatio) || 'xMidYMid meet',
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || 'xMidYMid slice',
                    contentVisibility: (t && t.contentVisibility) || 'visible',
                    className: (t && t.className) || '',
                    id: (t && t.id) || '',
                    runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
                }),
                (this.renderConfig.dpr = (t && t.dpr) || 1),
                this.animationItem.wrapper && (this.renderConfig.dpr = (t && t.dpr) || window.devicePixelRatio || 1),
                (this.renderedFrame = -1),
                (this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                }),
                (this.contextData = new CVContextData()),
                (this.elements = []),
                (this.pendingElements = []),
                (this.transformMat = new Matrix()),
                (this.completeLayers = !1),
                (this.rendererType = 'canvas'),
                this.renderConfig.clearCanvas && ((this.ctxTransform = this.contextData.transform.bind(this.contextData)), (this.ctxOpacity = this.contextData.opacity.bind(this.contextData)), (this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData)), (this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData)), (this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData)), (this.ctxLineCap = this.contextData.lineCap.bind(this.contextData)), (this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData)), (this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData)), (this.ctxFill = this.contextData.fill.bind(this.contextData)), (this.ctxFillRect = this.contextData.fillRect.bind(this.contextData)), (this.ctxStroke = this.contextData.stroke.bind(this.contextData)), (this.save = this.contextData.save.bind(this.contextData)));
        }
        function HBaseElement() {}
        function HSolidElement(e, t, n) {
            this.initElement(e, t, n);
        }
        function HShapeElement(e, t, n) {
            (this.shapes = []),
                (this.shapesData = e.shapes),
                (this.stylesList = []),
                (this.shapeModifiers = []),
                (this.itemsData = []),
                (this.processedElements = []),
                (this.animatedContents = []),
                (this.shapesContainer = createNS('g')),
                this.initElement(e, t, n),
                (this.prevViewData = []),
                (this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                });
        }
        function HTextElement(e, t, n) {
            (this.textSpans = []),
                (this.textPaths = []),
                (this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }),
                (this.renderType = 'svg'),
                (this.isMasked = !1),
                this.initElement(e, t, n);
        }
        function HCameraElement(e, t, n) {
            this.initFrame(), this.initBaseData(e, t, n), this.initHierarchy();
            var r = PropertyFactory.getProp;
            if (((this.pe = r(this, e.pe, 0, 0, this)), e.ks.p.s ? ((this.px = r(this, e.ks.p.x, 1, 0, this)), (this.py = r(this, e.ks.p.y, 1, 0, this)), (this.pz = r(this, e.ks.p.z, 1, 0, this))) : (this.p = r(this, e.ks.p, 1, 0, this)), e.ks.a && (this.a = r(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to)) {
                var i,
                    a = e.ks.or.k.length;
                for (i = 0; i < a; i += 1) (e.ks.or.k[i].to = null), (e.ks.or.k[i].ti = null);
            }
            (this.or = r(this, e.ks.or, 1, degToRads, this)), (this.or.sh = !0), (this.rx = r(this, e.ks.rx, 0, degToRads, this)), (this.ry = r(this, e.ks.ry, 0, degToRads, this)), (this.rz = r(this, e.ks.rz, 0, degToRads, this)), (this.mat = new Matrix()), (this._prevMat = new Matrix()), (this._isFirstFrame = !0), (this.finalTransform = { mProp: this });
        }
        function HImageElement(e, t, n) {
            (this.assetData = t.getAssetData(e.refId)), this.initElement(e, t, n);
        }
        function HybridRendererBase(e, t) {
            (this.animationItem = e),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                    className: (t && t.className) || '',
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || 'xMidYMid slice',
                    hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                    filterSize: {
                        width: (t && t.filterSize && t.filterSize.width) || '400%',
                        height: (t && t.filterSize && t.filterSize.height) || '400%',
                        x: (t && t.filterSize && t.filterSize.x) || '-100%',
                        y: (t && t.filterSize && t.filterSize.y) || '-100%'
                    }
                }),
                (this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }),
                (this.pendingElements = []),
                (this.elements = []),
                (this.threeDElements = []),
                (this.destroyed = !1),
                (this.camera = null),
                (this.supports3d = !0),
                (this.rendererType = 'html');
        }
        function HCompElement(e, t, n) {
            (this.layers = e.layers), (this.supports3d = !e.hasMask), (this.completeLayers = !1), (this.pendingElements = []), (this.elements = this.layers ? createSizedArray(this.layers.length) : []), this.initElement(e, t, n), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 });
        }
        function HybridRenderer(e, t) {
            (this.animationItem = e),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                    className: (t && t.className) || '',
                    imagePreserveAspectRatio: (t && t.imagePreserveAspectRatio) || 'xMidYMid slice',
                    hideOnTransparent: !(t && !1 === t.hideOnTransparent),
                    filterSize: {
                        width: (t && t.filterSize && t.filterSize.width) || '400%',
                        height: (t && t.filterSize && t.filterSize.height) || '400%',
                        x: (t && t.filterSize && t.filterSize.x) || '-100%',
                        y: (t && t.filterSize && t.filterSize.y) || '-100%'
                    },
                    runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
                }),
                (this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                }),
                (this.pendingElements = []),
                (this.elements = []),
                (this.threeDElements = []),
                (this.destroyed = !1),
                (this.camera = null),
                (this.supports3d = !0),
                (this.rendererType = 'html');
        }
        (CVBaseElement.prototype = {
            createElements: function () {},
            initRendererElement: function () {},
            createContainerElements: function () {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var e = this.globalData.canvasContext,
                        t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(t);
                    var n = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(n), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
                }
                (this.canvasContext = this.globalData.canvasContext), (this.transformCanvas = this.globalData.transformCanvas), (this.renderableEffectsManager = new CVEffects(this)), this.searchEffectTransforms();
            },
            createContent: function () {},
            setBlendMode: function () {
                var e = this.globalData;
                if (e.blendMode !== this.data.bm) {
                    e.blendMode = this.data.bm;
                    var t = getBlendMode(this.data.bm);
                    e.canvasContext.globalCompositeOperation = t;
                }
            },
            createRenderableComponents: function () {
                (this.maskManager = new CVMaskElement(this.data, this)), (this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT));
            },
            hideElement: function () {
                this.hidden || (this.isInRange && !this.isTransparent) || (this.hidden = !0);
            },
            showElement: function () {
                this.isInRange && !this.isTransparent && ((this.hidden = !1), (this._isFirstFrame = !0), (this.maskManager._isFirstFrame = !0));
            },
            clearCanvas: function (e) {
                e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
            },
            prepareLayer: function () {
                if (this.data.tt >= 1) {
                    var e = this.buffers[0].getContext('2d');
                    this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), (this.currentTransform = this.canvasContext.getTransform()), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                }
            },
            exitLayer: function () {
                if (this.data.tt >= 1) {
                    var e = this.buffers[1],
                        t = e.getContext('2d');
                    if ((this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById('tp' in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy)) {
                        var n = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                        n.getContext('2d').drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(n, 0, 0);
                    }
                    (this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt]), this.canvasContext.drawImage(e, 0, 0), (this.canvasContext.globalCompositeOperation = 'destination-over'), this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), (this.canvasContext.globalCompositeOperation = 'source-over');
                }
            },
            renderFrame: function (e) {
                if (!this.hidden && !this.data.hd && (1 !== this.data.td || e)) {
                    this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                    var t = 0 === this.data.ty;
                    this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
                }
            },
            destroy: function () {
                (this.canvasContext = null), (this.data = null), (this.globalData = null), this.maskManager.destroy();
            },
            mHelper: new Matrix()
        }),
            (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
            (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
            (CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated),
            extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
            (CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement),
            (CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            }),
            (CVShapeElement.prototype.dashResetter = []),
            (CVShapeElement.prototype.createContent = function () {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
            }),
            (CVShapeElement.prototype.createStyleElement = function (e, t) {
                var n = {
                        data: e,
                        type: e.ty,
                        preTransforms: this.transformsManager.addTransformSequence(t),
                        transforms: [],
                        elements: [],
                        closed: !0 === e.hd
                    },
                    r = {};
                return 'fl' === e.ty || 'st' === e.ty ? ((r.c = PropertyFactory.getProp(this, e.c, 1, 255, this)), r.c.k || (n.co = 'rgb(' + bmFloor(r.c.v[0]) + ',' + bmFloor(r.c.v[1]) + ',' + bmFloor(r.c.v[2]) + ')')) : ('gf' === e.ty || 'gs' === e.ty) && ((r.s = PropertyFactory.getProp(this, e.s, 1, null, this)), (r.e = PropertyFactory.getProp(this, e.e, 1, null, this)), (r.h = PropertyFactory.getProp(this, e.h || { k: 0 }, 0, 0.01, this)), (r.a = PropertyFactory.getProp(this, e.a || { k: 0 }, 0, degToRads, this)), (r.g = new GradientProperty(this, e.g, this))), (r.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this)), 'st' === e.ty || 'gs' === e.ty ? ((n.lc = lineCapEnum[e.lc || 2]), (n.lj = lineJoinEnum[e.lj || 2]), 1 == e.lj && (n.ml = e.ml), (r.w = PropertyFactory.getProp(this, e.w, 0, null, this)), r.w.k || (n.wi = r.w.v), e.d && ((r.d = new DashProperty(this, e.d, 'canvas', this)), r.d.k || ((n.da = r.d.dashArray), (n.do = r.d.dashoffset[0])))) : (n.r = 2 === e.r ? 'evenodd' : 'nonzero'), this.stylesList.push(n), (r.style = n), r;
            }),
            (CVShapeElement.prototype.createGroupElement = function () {
                return {
                    it: [],
                    prevViewData: []
                };
            }),
            (CVShapeElement.prototype.createTransformElement = function (e) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, e.o, 0, 0.01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
                    }
                };
            }),
            (CVShapeElement.prototype.createShapeElement = function (e) {
                var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
                return this.shapes.push(t), this.addShapeToModifiers(t), t;
            }),
            (CVShapeElement.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var e,
                    t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
            }),
            (CVShapeElement.prototype.addTransformToStyleList = function (e) {
                var t,
                    n = this.stylesList.length;
                for (t = 0; t < n; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e);
            }),
            (CVShapeElement.prototype.removeTransformFromStyleList = function () {
                var e,
                    t = this.stylesList.length;
                for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop();
            }),
            (CVShapeElement.prototype.closeStyles = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) e[t].closed = !0;
            }),
            (CVShapeElement.prototype.searchShapes = function (e, t, n, r, i) {
                var a,
                    o,
                    s,
                    l,
                    c,
                    u,
                    d = e.length - 1,
                    f = [],
                    _ = [],
                    p = [].concat(i);
                for (a = d; a >= 0; a -= 1) {
                    if (((l = this.searchProcessedElement(e[a])) ? (t[a] = n[l - 1]) : (e[a]._shouldRender = r), 'fl' === e[a].ty || 'st' === e[a].ty || 'gf' === e[a].ty || 'gs' === e[a].ty)) l ? (t[a].style.closed = !1) : (t[a] = this.createStyleElement(e[a], p)), f.push(t[a].style);
                    else if ('gr' === e[a].ty) {
                        if (l) for (o = 0, s = t[a].it.length; o < s; o += 1) t[a].prevViewData[o] = t[a].it[o];
                        else t[a] = this.createGroupElement(e[a]);
                        this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, r, p);
                    } else 'tr' === e[a].ty ? (l || ((u = this.createTransformElement(e[a])), (t[a] = u)), p.push(t[a]), this.addTransformToStyleList(t[a])) : 'sh' === e[a].ty || 'rc' === e[a].ty || 'el' === e[a].ty || 'sr' === e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : 'tm' === e[a].ty || 'rd' === e[a].ty || 'pb' === e[a].ty || 'zz' === e[a].ty || 'op' === e[a].ty ? (l ? ((c = t[a]).closed = !1) : ((c = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), (t[a] = c), this.shapeModifiers.push(c)), _.push(c)) : 'rp' === e[a].ty && (l ? ((c = t[a]).closed = !0) : ((c = ShapeModifiers.getModifier(e[a].ty)), (t[a] = c), c.init(this, e, a, t), this.shapeModifiers.push(c), (r = !1)), _.push(c));
                    this.addProcessedElement(e[a], a + 1);
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(f), d = _.length, a = 0; a < d; a += 1) _[a].closed = !0;
            }),
            (CVShapeElement.prototype.renderInnerContent = function () {
                (this.transformHelper.opacity = 1), (this.transformHelper._opMdf = !1), this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
            }),
            (CVShapeElement.prototype.renderShapeTransform = function (e, t) {
                (e._opMdf || t.op._mdf || this._isFirstFrame) && ((t.opacity = e.opacity), (t.opacity *= t.op.v), (t._opMdf = !0));
            }),
            (CVShapeElement.prototype.drawLayer = function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    c = this.stylesList.length,
                    u = this.globalData.renderer,
                    d = this.globalData.canvasContext;
                for (e = 0; e < c; e += 1)
                    if (!((('st' === (s = (l = this.stylesList[e]).type) || 'gs' === s) && 0 === l.wi) || !l.data._shouldRender || 0 === l.coOp || 0 === this.globalData.currentGlobalAlpha)) {
                        for (u.save(), a = l.elements, 'st' === s || 'gs' === s ? (u.ctxStrokeStyle('st' === s ? l.co : l.grd), u.ctxLineWidth(l.wi), u.ctxLineCap(l.lc), u.ctxLineJoin(l.lj), u.ctxMiterLimit(l.ml || 0)) : u.ctxFillStyle('fl' === s ? l.co : l.grd), u.ctxOpacity(l.coOp), 'st' !== s && 'gs' !== s && d.beginPath(), u.ctxTransform(l.preTransforms.finalTransform.props), n = a.length, t = 0; t < n; t += 1) {
                            for (('st' === s || 'gs' === s) && (d.beginPath(), l.da && (d.setLineDash(l.da), (d.lineDashOffset = l.do))), i = (o = a[t].trNodes).length, r = 0; r < i; r += 1) 'm' === o[r].t ? d.moveTo(o[r].p[0], o[r].p[1]) : 'c' === o[r].t ? d.bezierCurveTo(o[r].pts[0], o[r].pts[1], o[r].pts[2], o[r].pts[3], o[r].pts[4], o[r].pts[5]) : d.closePath();
                            ('st' === s || 'gs' === s) && (u.ctxStroke(), l.da && d.setLineDash(this.dashResetter));
                        }
                        'st' !== s && 'gs' !== s && this.globalData.renderer.ctxFill(l.r), u.restore();
                    }
            }),
            (CVShapeElement.prototype.renderShape = function (e, t, n, r) {
                var i,
                    a,
                    o = t.length - 1;
                for (a = e, i = o; i >= 0; i -= 1) 'tr' === t[i].ty ? ((a = n[i].transform), this.renderShapeTransform(e, a)) : 'sh' === t[i].ty || 'el' === t[i].ty || 'rc' === t[i].ty || 'sr' === t[i].ty ? this.renderPath(t[i], n[i]) : 'fl' === t[i].ty ? this.renderFill(t[i], n[i], a) : 'st' === t[i].ty ? this.renderStroke(t[i], n[i], a) : 'gf' === t[i].ty || 'gs' === t[i].ty ? this.renderGradientFill(t[i], n[i], a) : 'gr' === t[i].ty ? this.renderShape(a, t[i].it, n[i].it) : t[i].ty;
                r && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function (e, t) {
                if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                    var n,
                        r,
                        i,
                        a = e.trNodes,
                        o = t.paths,
                        s = o._length;
                    a.length = 0;
                    var l = e.transforms.finalTransform;
                    for (i = 0; i < s; i += 1) {
                        var c = o.shapes[i];
                        if (c && c.v) {
                            for (n = 1, r = c._length; n < r; n += 1)
                                1 === n &&
                                    a.push({
                                        t: 'm',
                                        p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                    }),
                                    a.push({
                                        t: 'c',
                                        pts: l.applyToTriplePoints(c.o[n - 1], c.i[n], c.v[n])
                                    });
                            1 === r &&
                                a.push({
                                    t: 'm',
                                    p: l.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                }),
                                c.c &&
                                    r &&
                                    (a.push({
                                        t: 'c',
                                        pts: l.applyToTriplePoints(c.o[n - 1], c.i[0], c.v[0])
                                    }),
                                    a.push({ t: 'z' }));
                        }
                    }
                    e.trNodes = a;
                }
            }),
            (CVShapeElement.prototype.renderPath = function (e, t) {
                if (!0 !== e.hd && e._shouldRender) {
                    var n,
                        r = t.styledShapes.length;
                    for (n = 0; n < r; n += 1) this.renderStyledShape(t.styledShapes[n], t.sh);
                }
            }),
            (CVShapeElement.prototype.renderFill = function (e, t, n) {
                var r = t.style;
                (t.c._mdf || this._isFirstFrame) && (r.co = 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function (e, t, n) {
                var r = t.style;
                if (!r.grd || t.g._mdf || t.s._mdf || t.e._mdf || (1 !== e.t && (t.h._mdf || t.a._mdf))) {
                    var i,
                        a,
                        o = this.globalData.canvasContext,
                        s = t.s.v,
                        l = t.e.v;
                    if (1 === e.t) i = o.createLinearGradient(s[0], s[1], l[0], l[1]);
                    else {
                        var c = Math.sqrt(Math.pow(s[0] - l[0], 2) + Math.pow(s[1] - l[1], 2)),
                            u = Math.atan2(l[1] - s[1], l[0] - s[0]),
                            d = t.h.v;
                        d >= 1 ? (d = 0.99) : d <= -1 && (d = -0.99);
                        var f = c * d,
                            _ = Math.cos(u + t.a.v) * f + s[0],
                            p = Math.sin(u + t.a.v) * f + s[1];
                        i = o.createRadialGradient(_, p, 0, s[0], s[1], c);
                    }
                    var h = e.g.p,
                        m = t.g.c,
                        g = 1;
                    for (a = 0; a < h; a += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * a + 1]), i.addColorStop(m[4 * a] / 100, 'rgba(' + m[4 * a + 1] + ',' + m[4 * a + 2] + ',' + m[4 * a + 3] + ',' + g + ')');
                    r.grd = i;
                }
                r.coOp = t.o.v * n.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function (e, t, n) {
                var r = t.style,
                    i = t.d;
                i && (i._mdf || this._isFirstFrame) && ((r.da = i.dashArray), (r.do = i.dashoffset[0])), (t.c._mdf || this._isFirstFrame) && (r.co = 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = t.o.v * n.opacity), (t.w._mdf || this._isFirstFrame) && (r.wi = t.w.v);
            }),
            (CVShapeElement.prototype.destroy = function () {
                (this.shapesData = null), (this.globalData = null), (this.canvasContext = null), (this.stylesList.length = 0), (this.itemsData.length = 0);
            }),
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
            (CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d')),
            (CVTextElement.prototype.buildNewText = function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    c,
                    u,
                    d,
                    f = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(f.l ? f.l.length : 0);
                var _ = !1;
                f.fc ? ((_ = !0), (this.values.fill = this.buildColor(f.fc))) : (this.values.fill = 'rgba(0,0,0,0)'), (this.fill = _);
                var p = !1;
                f.sc && ((p = !0), (this.values.stroke = this.buildColor(f.sc)), (this.values.sWidth = f.sw));
                var h = this.globalData.fontManager.getFontByName(f.f),
                    m = f.l,
                    g = this.mHelper;
                (this.stroke = p), (this.values.fValue = f.finalSize + 'px ' + this.globalData.fontManager.getFontByName(f.f).fFamily), (t = f.finalText.length);
                var E = this.data.singleShape,
                    b = 0.001 * f.tr * f.finalSize,
                    y = 0,
                    v = 0,
                    O = !0,
                    I = 0;
                for (e = 0; e < t; e += 1) {
                    (r = ((n = this.globalData.fontManager.getCharData(f.finalText[e], h.fStyle, this.globalData.fontManager.getFontByName(f.f).fFamily)) && n.data) || {}), g.reset(), E && m[e].n && ((y = -b), (v += f.yOffset), (v += +!!O), (O = !1)), (l = (o = r.shapes ? r.shapes[0].it : []).length), g.scale(f.finalSize / 100, f.finalSize / 100), E && this.applyTextPropertiesToMatrix(f, g, m[e].line, y, v), (u = createSizedArray(l - 1));
                    var S = 0;
                    for (s = 0; s < l; s += 1)
                        if ('sh' === o[s].ty) {
                            for (i = 1, a = o[s].ks.k.i.length, c = o[s].ks.k, d = []; i < a; i += 1) 1 === i && d.push(g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), d.push(g.applyToX(c.o[i - 1][0], c.o[i - 1][1], 0), g.applyToY(c.o[i - 1][0], c.o[i - 1][1], 0), g.applyToX(c.i[i][0], c.i[i][1], 0), g.applyToY(c.i[i][0], c.i[i][1], 0), g.applyToX(c.v[i][0], c.v[i][1], 0), g.applyToY(c.v[i][0], c.v[i][1], 0));
                            d.push(g.applyToX(c.o[i - 1][0], c.o[i - 1][1], 0), g.applyToY(c.o[i - 1][0], c.o[i - 1][1], 0), g.applyToX(c.i[0][0], c.i[0][1], 0), g.applyToY(c.i[0][0], c.i[0][1], 0), g.applyToX(c.v[0][0], c.v[0][1], 0), g.applyToY(c.v[0][0], c.v[0][1], 0)), (u[S] = d), (S += 1);
                        }
                    E && ((y += m[e].l), (y += b)), this.textSpans[I] ? (this.textSpans[I].elem = u) : (this.textSpans[I] = { elem: u }), (I += 1);
                }
            }),
            (CVTextElement.prototype.renderInnerContent = function () {
                this.validateText(), (this.canvasContext.font = this.values.fValue), this.globalData.renderer.ctxLineCap('butt'), this.globalData.renderer.ctxLineJoin('miter'), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var e,
                    t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    s,
                    l,
                    c = this.textAnimator.renderedLetters,
                    u = this.textProperty.currentData.l;
                t = u.length;
                var d = null,
                    f = null,
                    _ = null,
                    p = this.globalData.renderer;
                for (e = 0; e < t; e += 1)
                    if (!u[e].n) {
                        if (((o = c[e]) && (p.save(), p.ctxTransform(o.p), p.ctxOpacity(o.o)), this.fill)) {
                            for (o && o.fc ? d !== o.fc && (p.ctxFillStyle(o.fc), (d = o.fc)) : d !== this.values.fill && ((d = this.values.fill), p.ctxFillStyle(this.values.fill)), r = (s = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1) for (a = (l = s[n]).length, this.globalData.canvasContext.moveTo(l[0], l[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(l[i], l[i + 1], l[i + 2], l[i + 3], l[i + 4], l[i + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxFill();
                        }
                        if (this.stroke) {
                            for (o && o.sw ? _ !== o.sw && ((_ = o.sw), p.ctxLineWidth(o.sw)) : _ !== this.values.sWidth && ((_ = this.values.sWidth), p.ctxLineWidth(this.values.sWidth)), o && o.sc ? f !== o.sc && ((f = o.sc), p.ctxStrokeStyle(o.sc)) : f !== this.values.stroke && ((f = this.values.stroke), p.ctxStrokeStyle(this.values.stroke)), r = (s = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1) for (a = (l = s[n]).length, this.globalData.canvasContext.moveTo(l[0], l[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(l[i], l[i + 1], l[i + 2], l[i + 3], l[i + 4], l[i + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxStroke();
                        }
                        o && this.globalData.renderer.restore();
                    }
            }),
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
            (CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement),
            (CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
            (CVImageElement.prototype.createContent = function () {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var e,
                        t,
                        n = createTag('canvas');
                    (n.width = this.assetData.w), (n.height = this.assetData.h);
                    var r = n.getContext('2d'),
                        i = this.img.width,
                        a = this.img.height,
                        o = i / a,
                        s = this.assetData.w / this.assetData.h,
                        l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    (o > s && 'xMidYMid slice' === l) || (o < s && 'xMidYMid slice' !== l) ? (e = (t = a) * s) : (t = (e = i) / s), r.drawImage(this.img, (i - e) / 2, (a - t) / 2, e, t, 0, 0, this.assetData.w, this.assetData.h), (this.img = n);
                }
            }),
            (CVImageElement.prototype.renderInnerContent = function () {
                this.canvasContext.drawImage(this.img, 0, 0);
            }),
            (CVImageElement.prototype.destroy = function () {
                this.img = null;
            }),
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
            (CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement),
            (CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
            (CVSolidElement.prototype.renderInnerContent = function () {
                this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
            }),
            extendPrototype([BaseRenderer], CanvasRendererBase),
            (CanvasRendererBase.prototype.createShape = function (e) {
                return new CVShapeElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createText = function (e) {
                return new CVTextElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createImage = function (e) {
                return new CVImageElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createSolid = function (e) {
                return new CVSolidElement(e, this.globalData, this);
            }),
            (CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
            (CanvasRendererBase.prototype.ctxTransform = function (e) {
                (1 !== e[0] || 0 !== e[1] || 0 !== e[4] || 1 !== e[5] || 0 !== e[12] || 0 !== e[13]) && this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13]);
            }),
            (CanvasRendererBase.prototype.ctxOpacity = function (e) {
                this.canvasContext.globalAlpha *= e < 0 ? 0 : e;
            }),
            (CanvasRendererBase.prototype.ctxFillStyle = function (e) {
                this.canvasContext.fillStyle = e;
            }),
            (CanvasRendererBase.prototype.ctxStrokeStyle = function (e) {
                this.canvasContext.strokeStyle = e;
            }),
            (CanvasRendererBase.prototype.ctxLineWidth = function (e) {
                this.canvasContext.lineWidth = e;
            }),
            (CanvasRendererBase.prototype.ctxLineCap = function (e) {
                this.canvasContext.lineCap = e;
            }),
            (CanvasRendererBase.prototype.ctxLineJoin = function (e) {
                this.canvasContext.lineJoin = e;
            }),
            (CanvasRendererBase.prototype.ctxMiterLimit = function (e) {
                this.canvasContext.miterLimit = e;
            }),
            (CanvasRendererBase.prototype.ctxFill = function (e) {
                this.canvasContext.fill(e);
            }),
            (CanvasRendererBase.prototype.ctxFillRect = function (e, t, n, r) {
                this.canvasContext.fillRect(e, t, n, r);
            }),
            (CanvasRendererBase.prototype.ctxStroke = function () {
                this.canvasContext.stroke();
            }),
            (CanvasRendererBase.prototype.reset = function () {
                if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
                this.contextData.reset();
            }),
            (CanvasRendererBase.prototype.save = function () {
                this.canvasContext.save();
            }),
            (CanvasRendererBase.prototype.restore = function (e) {
                if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
                e && (this.globalData.blendMode = 'source-over'), this.contextData.restore(e);
            }),
            (CanvasRendererBase.prototype.configAnimation = function (e) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag('canvas');
                    var t = this.animationItem.container.style;
                    (t.width = '100%'), (t.height = '100%');
                    var n = '0px 0px 0px';
                    (t.transformOrigin = n), (t.mozTransformOrigin = n), (t.webkitTransformOrigin = n), (t['-webkit-transform'] = n), (t.contentVisibility = this.renderConfig.contentVisibility), this.animationItem.wrapper.appendChild(this.animationItem.container), (this.canvasContext = this.animationItem.container.getContext('2d')), this.renderConfig.className && this.animationItem.container.setAttribute('class', this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute('id', this.renderConfig.id);
                } else this.canvasContext = this.renderConfig.context;
                this.contextData.setContext(this.canvasContext),
                    (this.data = e),
                    (this.layers = e.layers),
                    (this.transformCanvas = {
                        w: e.w,
                        h: e.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }),
                    this.setupGlobalData(e, document.body),
                    (this.globalData.canvasContext = this.canvasContext),
                    (this.globalData.renderer = this),
                    (this.globalData.isDashed = !1),
                    (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                    (this.globalData.transformCanvas = this.transformCanvas),
                    (this.elements = createSizedArray(e.layers.length)),
                    this.updateContainerSize();
            }),
            (CanvasRendererBase.prototype.updateContainerSize = function (e, t) {
                if ((this.reset(), e ? ((n = e), (r = t), (this.canvasContext.canvas.width = n), (this.canvasContext.canvas.height = r)) : (this.animationItem.wrapper && this.animationItem.container ? ((n = this.animationItem.wrapper.offsetWidth), (r = this.animationItem.wrapper.offsetHeight)) : ((n = this.canvasContext.canvas.width), (r = this.canvasContext.canvas.height)), (this.canvasContext.canvas.width = n * this.renderConfig.dpr), (this.canvasContext.canvas.height = r * this.renderConfig.dpr)), -1 !== this.renderConfig.preserveAspectRatio.indexOf('meet') || -1 !== this.renderConfig.preserveAspectRatio.indexOf('slice'))) {
                    var n,
                        r,
                        i,
                        a,
                        o = this.renderConfig.preserveAspectRatio.split(' '),
                        s = o[1] || 'meet',
                        l = o[0] || 'xMidYMid',
                        c = l.substr(0, 4),
                        u = l.substr(4);
                    (i = n / r), ((a = this.transformCanvas.w / this.transformCanvas.h) > i && 'meet' === s) || (a < i && 'slice' === s) ? ((this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = n / (this.transformCanvas.w / this.renderConfig.dpr))) : ((this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr)), (this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr))), 'xMid' === c && ((a < i && 'meet' === s) || (a > i && 'slice' === s)) ? (this.transformCanvas.tx = ((n - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2) * this.renderConfig.dpr) : 'xMax' === c && ((a < i && 'meet' === s) || (a > i && 'slice' === s)) ? (this.transformCanvas.tx = (n - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr) : (this.transformCanvas.tx = 0), 'YMid' === u && ((a > i && 'meet' === s) || (a < i && 'slice' === s)) ? (this.transformCanvas.ty = ((r - this.transformCanvas.h * (n / this.transformCanvas.w)) / 2) * this.renderConfig.dpr) : 'YMax' === u && ((a > i && 'meet' === s) || (a < i && 'slice' === s)) ? (this.transformCanvas.ty = (r - this.transformCanvas.h * (n / this.transformCanvas.w)) * this.renderConfig.dpr) : (this.transformCanvas.ty = 0);
                } else 'none' === this.renderConfig.preserveAspectRatio ? ((this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr))) : ((this.transformCanvas.sx = this.renderConfig.dpr), (this.transformCanvas.sy = this.renderConfig.dpr)), (this.transformCanvas.tx = 0), (this.transformCanvas.ty = 0);
                (this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1]), this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
            }),
            (CanvasRendererBase.prototype.destroy = function () {
                var e;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.globalData.canvasContext = null), (this.animationItem.container = null), (this.destroyed = !0);
            }),
            (CanvasRendererBase.prototype.renderFrame = function (e, t) {
                if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) {
                    (this.renderedFrame = e), (this.globalData.frameNum = e - this.animationItem._isFirstFrame), (this.globalData.frameId += 1), (this.globalData._mdf = !this.renderConfig.clearCanvas || t), (this.globalData.projectInterface.currentFrame = e);
                    var n,
                        r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), n = r - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(e - this.layers[n].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = r - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore();
                    }
                }
            }),
            (CanvasRendererBase.prototype.buildItem = function (e) {
                var t = this.elements;
                if (!t[e] && 99 !== this.layers[e].ty) {
                    var n = this.createItem(this.layers[e], this, this.globalData);
                    (t[e] = n), n.initExpressions();
                }
            }),
            (CanvasRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
            }),
            (CanvasRendererBase.prototype.hide = function () {
                this.animationItem.container.style.display = 'none';
            }),
            (CanvasRendererBase.prototype.show = function () {
                this.animationItem.container.style.display = 'block';
            }),
            (CVContextData.prototype.duplicate = function () {
                var e = 2 * this._length,
                    t = 0;
                for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext();
                this._length = e;
            }),
            (CVContextData.prototype.reset = function () {
                (this.cArrPos = 0), this.cTr.reset(), (this.stack[this.cArrPos].opacity = 1);
            }),
            (CVContextData.prototype.restore = function (e) {
                this.cArrPos -= 1;
                var t,
                    n = this.stack[this.cArrPos],
                    r = n.transform,
                    i = this.cTr.props;
                for (t = 0; t < 16; t += 1) i[t] = r[t];
                if (e) {
                    this.nativeContext.restore();
                    var a = this.stack[this.cArrPos + 1];
                    (this.appliedFillStyle = a.fillStyle), (this.appliedStrokeStyle = a.strokeStyle), (this.appliedLineWidth = a.lineWidth), (this.appliedLineCap = a.lineCap), (this.appliedLineJoin = a.lineJoin), (this.appliedMiterLimit = a.miterLimit);
                }
                this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (e || (-1 !== n.opacity && this.currentOpacity !== n.opacity)) && ((this.nativeContext.globalAlpha = n.opacity), (this.currentOpacity = n.opacity)), (this.currentFillStyle = n.fillStyle), (this.currentStrokeStyle = n.strokeStyle), (this.currentLineWidth = n.lineWidth), (this.currentLineCap = n.lineCap), (this.currentLineJoin = n.lineJoin), (this.currentMiterLimit = n.miterLimit);
            }),
            (CVContextData.prototype.save = function (e) {
                e && this.nativeContext.save();
                var t,
                    n = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var r = this.stack[this.cArrPos];
                for (t = 0; t < 16; t += 1) r.transform[t] = n[t];
                this.cArrPos += 1;
                var i = this.stack[this.cArrPos];
                (i.opacity = r.opacity), (i.fillStyle = r.fillStyle), (i.strokeStyle = r.strokeStyle), (i.lineWidth = r.lineWidth), (i.lineCap = r.lineCap), (i.lineJoin = r.lineJoin), (i.miterLimit = r.miterLimit);
            }),
            (CVContextData.prototype.setOpacity = function (e) {
                this.stack[this.cArrPos].opacity = e;
            }),
            (CVContextData.prototype.setContext = function (e) {
                this.nativeContext = e;
            }),
            (CVContextData.prototype.fillStyle = function (e) {
                this.stack[this.cArrPos].fillStyle !== e && ((this.currentFillStyle = e), (this.stack[this.cArrPos].fillStyle = e));
            }),
            (CVContextData.prototype.strokeStyle = function (e) {
                this.stack[this.cArrPos].strokeStyle !== e && ((this.currentStrokeStyle = e), (this.stack[this.cArrPos].strokeStyle = e));
            }),
            (CVContextData.prototype.lineWidth = function (e) {
                this.stack[this.cArrPos].lineWidth !== e && ((this.currentLineWidth = e), (this.stack[this.cArrPos].lineWidth = e));
            }),
            (CVContextData.prototype.lineCap = function (e) {
                this.stack[this.cArrPos].lineCap !== e && ((this.currentLineCap = e), (this.stack[this.cArrPos].lineCap = e));
            }),
            (CVContextData.prototype.lineJoin = function (e) {
                this.stack[this.cArrPos].lineJoin !== e && ((this.currentLineJoin = e), (this.stack[this.cArrPos].lineJoin = e));
            }),
            (CVContextData.prototype.miterLimit = function (e) {
                this.stack[this.cArrPos].miterLimit !== e && ((this.currentMiterLimit = e), (this.stack[this.cArrPos].miterLimit = e));
            }),
            (CVContextData.prototype.transform = function (e) {
                this.transformMat.cloneFromProps(e);
                var t = this.cTr;
                this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
                var n = t.props;
                this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13]);
            }),
            (CVContextData.prototype.opacity = function (e) {
                var t = this.stack[this.cArrPos].opacity;
                (t *= e < 0 ? 0 : e), this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && ((this.nativeContext.globalAlpha = e), (this.currentOpacity = e)), (this.stack[this.cArrPos].opacity = t));
            }),
            (CVContextData.prototype.fill = function (e) {
                this.appliedFillStyle !== this.currentFillStyle && ((this.appliedFillStyle = this.currentFillStyle), (this.nativeContext.fillStyle = this.appliedFillStyle)), this.nativeContext.fill(e);
            }),
            (CVContextData.prototype.fillRect = function (e, t, n, r) {
                this.appliedFillStyle !== this.currentFillStyle && ((this.appliedFillStyle = this.currentFillStyle), (this.nativeContext.fillStyle = this.appliedFillStyle)), this.nativeContext.fillRect(e, t, n, r);
            }),
            (CVContextData.prototype.stroke = function () {
                this.appliedStrokeStyle !== this.currentStrokeStyle && ((this.appliedStrokeStyle = this.currentStrokeStyle), (this.nativeContext.strokeStyle = this.appliedStrokeStyle)), this.appliedLineWidth !== this.currentLineWidth && ((this.appliedLineWidth = this.currentLineWidth), (this.nativeContext.lineWidth = this.appliedLineWidth)), this.appliedLineCap !== this.currentLineCap && ((this.appliedLineCap = this.currentLineCap), (this.nativeContext.lineCap = this.appliedLineCap)), this.appliedLineJoin !== this.currentLineJoin && ((this.appliedLineJoin = this.currentLineJoin), (this.nativeContext.lineJoin = this.appliedLineJoin)), this.appliedMiterLimit !== this.currentMiterLimit && ((this.appliedMiterLimit = this.currentMiterLimit), (this.nativeContext.miterLimit = this.appliedMiterLimit)), this.nativeContext.stroke();
            }),
            extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
            (CVCompElement.prototype.renderInnerContent = function () {
                var e,
                    t = this.canvasContext;
                for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }),
            (CVCompElement.prototype.destroy = function () {
                var e;
                for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
                (this.layers = null), (this.elements = null);
            }),
            (CVCompElement.prototype.createComp = function (e) {
                return new CVCompElement(e, this.globalData, this);
            }),
            extendPrototype([CanvasRendererBase], CanvasRenderer),
            (CanvasRenderer.prototype.createComp = function (e) {
                return new CVCompElement(e, this.globalData, this);
            }),
            (HBaseElement.prototype = {
                checkBlendMode: function () {},
                initRendererElement: function () {
                    (this.baseElement = createTag(this.data.tg || 'div')), this.data.hasMask ? ((this.svgElement = createNS('svg')), (this.layerElement = createNS('g')), (this.maskedElement = this.layerElement), this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : (this.layerElement = this.baseElement), styleDiv(this.baseElement);
                },
                createContainerElements: function () {
                    (this.renderableEffectsManager = new CVEffects(this)), (this.transformedElement = this.baseElement), (this.maskedElement = this.layerElement), this.data.ln && this.layerElement.setAttribute('id', this.data.ln), this.data.cl && this.layerElement.setAttribute('class', this.data.cl), 0 !== this.data.bm && this.setBlendMode();
                },
                renderElement: function () {
                    var e = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var t = this.finalTransform.mat.toCSS();
                        (e.transform = t), (e.webkitTransform = t);
                    }
                    this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
                },
                renderFrame: function () {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                },
                destroy: function () {
                    (this.layerElement = null), (this.transformedElement = null), this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), (this.maskManager = null));
                },
                createRenderableComponents: function () {
                    this.maskManager = new MaskElement(this.data, this, this.globalData);
                },
                addEffects: function () {},
                setMatte: function () {}
            }),
            (HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement),
            (HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy),
            (HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting),
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
            (HSolidElement.prototype.createContent = function () {
                var e;
                this.data.hasMask ? ((e = createNS('rect')).setAttribute('width', this.data.sw), e.setAttribute('height', this.data.sh), e.setAttribute('fill', this.data.sc), this.svgElement.setAttribute('width', this.data.sw), this.svgElement.setAttribute('height', this.data.sh)) : (((e = createTag('div')).style.width = this.data.sw + 'px'), (e.style.height = this.data.sh + 'px'), (e.style.backgroundColor = this.data.sc)), this.layerElement.appendChild(e);
            }),
            extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
            (HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent),
            (HShapeElement.prototype.createContent = function () {
                var e;
                if (((this.baseElement.style.fontSize = 0), this.data.hasMask)) this.layerElement.appendChild(this.shapesContainer), (e = this.svgElement);
                else {
                    e = createNS('svg');
                    var t = this.comp.data ? this.comp.data : this.globalData.compSize;
                    e.setAttribute('width', t.w), e.setAttribute('height', t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e);
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), (this.shapeCont = e);
            }),
            (HShapeElement.prototype.getTransformedPoint = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) t = e[n].mProps.v.applyToPointArray(t[0], t[1], 0);
                return t;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
                var n,
                    r,
                    i,
                    a,
                    o,
                    s = e.sh.v,
                    l = e.transformers,
                    c = s._length;
                if (!(c <= 1)) {
                    for (n = 0; n < c - 1; n += 1) (r = this.getTransformedPoint(l, s.v[n])), (i = this.getTransformedPoint(l, s.o[n])), (a = this.getTransformedPoint(l, s.i[n + 1])), (o = this.getTransformedPoint(l, s.v[n + 1])), this.checkBounds(r, i, a, o, t);
                    s.c && ((r = this.getTransformedPoint(l, s.v[n])), (i = this.getTransformedPoint(l, s.o[n])), (a = this.getTransformedPoint(l, s.i[0])), (o = this.getTransformedPoint(l, s.v[0])), this.checkBounds(r, i, a, o, t));
                }
            }),
            (HShapeElement.prototype.checkBounds = function (e, t, n, r, i) {
                this.getBoundsOfCurve(e, t, n, r);
                var a = this.shapeBoundingBox;
                (i.x = bmMin(a.left, i.x)), (i.xMax = bmMax(a.right, i.xMax)), (i.y = bmMin(a.top, i.y)), (i.yMax = bmMax(a.bottom, i.yMax));
            }),
            (HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }),
            (HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            }),
            (HShapeElement.prototype.getBoundsOfCurve = function (e, t, n, r) {
                for (
                    var i,
                        a,
                        o,
                        s,
                        l,
                        c,
                        u,
                        d = [
                            [e[0], r[0]],
                            [e[1], r[1]]
                        ],
                        f = 0;
                    f < 2;
                    ++f
                )
                    (a = 6 * e[f] - 12 * t[f] + 6 * n[f]), (i = -3 * e[f] + 9 * t[f] - 9 * n[f] + 3 * r[f]), (o = 3 * t[f] - 3 * e[f]), (a |= 0), (o |= 0), (0 == (i |= 0) && 0 === a) || (0 === i ? (s = -o / a) > 0 && s < 1 && d[f].push(this.calculateF(s, e, t, n, r, f)) : (l = a * a - 4 * o * i) >= 0 && ((c = (-a + bmSqrt(l)) / (2 * i)) > 0 && c < 1 && d[f].push(this.calculateF(c, e, t, n, r, f)), (u = (-a - bmSqrt(l)) / (2 * i)) > 0 && u < 1 && d[f].push(this.calculateF(u, e, t, n, r, f))));
                (this.shapeBoundingBox.left = bmMin.apply(null, d[0])), (this.shapeBoundingBox.top = bmMin.apply(null, d[1])), (this.shapeBoundingBox.right = bmMax.apply(null, d[0])), (this.shapeBoundingBox.bottom = bmMax.apply(null, d[1]));
            }),
            (HShapeElement.prototype.calculateF = function (e, t, n, r, i, a) {
                return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * n[a] + 3 * (1 - e) * bmPow(e, 2) * r[a] + bmPow(e, 3) * i[a];
            }),
            (HShapeElement.prototype.calculateBoundingBox = function (e, t) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) e[n] && e[n].sh ? this.calculateShapeBoundingBox(e[n], t) : e[n] && e[n].it ? this.calculateBoundingBox(e[n].it, t) : e[n] && e[n].style && e[n].w && this.expandStrokeBoundingBox(e[n].w, t);
            }),
            (HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
                var n = 0;
                if (e.keyframes) {
                    for (var r = 0; r < e.keyframes.length; r += 1) {
                        var i = e.keyframes[r].s;
                        i > n && (n = i);
                    }
                    n *= e.mult;
                } else n = e.v * e.mult;
                (t.x -= n), (t.xMax += n), (t.y -= n), (t.yMax += n);
            }),
            (HShapeElement.prototype.currentBoxContains = function (e) {
                return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height;
            }),
            (HShapeElement.prototype.renderInnerContent = function () {
                if ((this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf))) {
                    var e = this.tempBoundingBox,
                        t = 999999;
                    if (((e.x = 999999), (e.xMax = -t), (e.y = t), (e.yMax = -t), this.calculateBoundingBox(this.itemsData, e), (e.width = e.xMax < e.x ? 0 : e.xMax - e.x), (e.height = e.yMax < e.y ? 0 : e.yMax - e.y), !this.currentBoxContains(e))) {
                        var n = !1;
                        if ((this.currentBBox.w !== e.width && ((this.currentBBox.w = e.width), this.shapeCont.setAttribute('width', e.width), (n = !0)), this.currentBBox.h !== e.height && ((this.currentBBox.h = e.height), this.shapeCont.setAttribute('height', e.height), (n = !0)), n || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y)) {
                            (this.currentBBox.w = e.width), (this.currentBBox.h = e.height), (this.currentBBox.x = e.x), (this.currentBBox.y = e.y), this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
                            var r = this.shapeCont.style,
                                i = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                            (r.transform = i), (r.webkitTransform = i);
                        }
                    }
                }
            }),
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
            (HTextElement.prototype.createContent = function () {
                if (((this.isMasked = this.checkMasks()), this.isMasked)) {
                    (this.renderType = 'svg'), (this.compW = this.comp.data.w), (this.compH = this.comp.data.h), this.svgElement.setAttribute('width', this.compW), this.svgElement.setAttribute('height', this.compH);
                    var e = createNS('g');
                    this.maskedElement.appendChild(e), (this.innerElem = e);
                } else (this.renderType = 'html'), (this.innerElem = this.layerElement);
                this.checkParenting();
            }),
            (HTextElement.prototype.buildNewText = function () {
                var e = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
                var t = this.innerElem.style,
                    n = e.fc ? this.buildColor(e.fc) : 'rgba(0,0,0,0)';
                (t.fill = n), (t.color = n), e.sc && ((t.stroke = this.buildColor(e.sc)), (t.strokeWidth = e.sw + 'px'));
                var r = this.globalData.fontManager.getFontByName(e.f);
                if (!this.globalData.fontManager.chars)
                    if (((t.fontSize = e.finalSize + 'px'), (t.lineHeight = e.finalSize + 'px'), r.fClass)) this.innerElem.className = r.fClass;
                    else {
                        t.fontFamily = r.fFamily;
                        var i = e.fWeight;
                        (t.fontStyle = e.fStyle), (t.fontWeight = i);
                    }
                var a = e.l;
                u = a.length;
                var o = this.mHelper,
                    s = '',
                    l = 0;
                for (c = 0; c < u; c += 1) {
                    if ((this.globalData.fontManager.chars ? (this.textPaths[l] ? (d = this.textPaths[l]) : ((d = createNS('path')).setAttribute('stroke-linecap', lineCapEnum[1]), d.setAttribute('stroke-linejoin', lineJoinEnum[2]), d.setAttribute('stroke-miterlimit', '4')), this.isMasked || (this.textSpans[l] ? (_ = (f = this.textSpans[l]).children[0]) : (((f = createTag('div')).style.lineHeight = 0), (_ = createNS('svg')).appendChild(d), styleDiv(f)))) : this.isMasked ? (d = this.textPaths[l] ? this.textPaths[l] : createNS('text')) : this.textSpans[l] ? ((f = this.textSpans[l]), (d = this.textPaths[l])) : (styleDiv((f = createTag('span'))), styleDiv((d = createTag('span'))), f.appendChild(d)), this.globalData.fontManager.chars)) {
                        var c,
                            u,
                            d,
                            f,
                            _,
                            p,
                            h,
                            m = this.globalData.fontManager.getCharData(e.finalText[c], r.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
                        if (((h = m ? m.data : null), o.reset(), h && h.shapes && h.shapes.length && ((p = h.shapes[0].it), o.scale(e.finalSize / 100, e.finalSize / 100), (s = this.createPathShape(o, p)), d.setAttribute('d', s)), this.isMasked)) this.innerElem.appendChild(d);
                        else {
                            if ((this.innerElem.appendChild(f), h && h.shapes)) {
                                document.body.appendChild(_);
                                var g = _.getBBox();
                                _.setAttribute('width', g.width + 2), _.setAttribute('height', g.height + 2), _.setAttribute('viewBox', g.x - 1 + ' ' + (g.y - 1) + ' ' + (g.width + 2) + ' ' + (g.height + 2));
                                var E = _.style,
                                    b = 'translate(' + (g.x - 1) + 'px,' + (g.y - 1) + 'px)';
                                (E.transform = b), (E.webkitTransform = b), (a[c].yOffset = g.y - 1);
                            } else _.setAttribute('width', 1), _.setAttribute('height', 1);
                            f.appendChild(_);
                        }
                    } else if (((d.textContent = a[c].val), d.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'), this.isMasked)) this.innerElem.appendChild(d);
                    else {
                        this.innerElem.appendChild(f);
                        var y = d.style,
                            v = 'translate3d(0,' + -e.finalSize / 1.2 + 'px,0)';
                        (y.transform = v), (y.webkitTransform = v);
                    }
                    this.isMasked ? (this.textSpans[l] = d) : (this.textSpans[l] = f), (this.textSpans[l].style.display = 'block'), (this.textPaths[l] = d), (l += 1);
                }
                for (; l < this.textSpans.length; ) (this.textSpans[l].style.display = 'none'), (l += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function () {
                if ((this.validateText(), this.data.singleShape)) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH);
                        var e,
                            t,
                            n,
                            r,
                            i,
                            a = this.svgElement.style,
                            o = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
                        (a.transform = o), (a.webkitTransform = o);
                    }
                }
                if ((this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var s = 0,
                        l = this.textAnimator.renderedLetters,
                        c = this.textProperty.currentData.l;
                    for (e = 0, t = c.length; e < t; e += 1) c[e].n ? (s += 1) : ((r = this.textSpans[e]), (i = this.textPaths[e]), (n = l[s]), (s += 1), n._mdf.m && (this.isMasked ? r.setAttribute('transform', n.m) : ((r.style.webkitTransform = n.m), (r.style.transform = n.m))), (r.style.opacity = n.o), n.sw && n._mdf.sw && i.setAttribute('stroke-width', n.sw), n.sc && n._mdf.sc && i.setAttribute('stroke', n.sc), n.fc && n._mdf.fc && (i.setAttribute('fill', n.fc), (i.style.color = n.fc)));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var u = this.innerElem.getBBox();
                        this.currentBBox.w !== u.width && ((this.currentBBox.w = u.width), this.svgElement.setAttribute('width', u.width)), this.currentBBox.h !== u.height && ((this.currentBBox.h = u.height), this.svgElement.setAttribute('height', u.height));
                        var d = 1;
                        if (this.currentBBox.w !== u.width + 2 * d || this.currentBBox.h !== u.height + 2 * d || this.currentBBox.x !== u.x - d || this.currentBBox.y !== u.y - d) {
                            (this.currentBBox.w = u.width + 2 * d), (this.currentBBox.h = u.height + 2 * d), (this.currentBBox.x = u.x - d), (this.currentBBox.y = u.y - d), this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h), (a = this.svgElement.style);
                            var f = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                            (a.transform = f), (a.webkitTransform = f);
                        }
                    }
                }
            }),
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            (HCameraElement.prototype.setup = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.comp.threeDElements.length;
                for (e = 0; e < i; e += 1)
                    if ('3d' === (t = this.comp.threeDElements[e]).type) {
                        (n = t.perspectiveElem.style), (r = t.container.style);
                        var a = this.pe.v + 'px',
                            o = '0px 0px 0px',
                            s = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                        (n.perspective = a), (n.webkitPerspective = a), (r.transformOrigin = o), (r.mozTransformOrigin = o), (r.webkitTransformOrigin = o), (n.transform = s), (n.webkitTransform = s);
                    }
            }),
            (HCameraElement.prototype.createElements = function () {}),
            (HCameraElement.prototype.hide = function () {}),
            (HCameraElement.prototype.renderFrame = function () {
                var e = this._isFirstFrame;
                if (this.hierarchy) for (n = 0, r = this.hierarchy.length; n < r; n += 1) e = this.hierarchy[n].finalTransform.mProp._mdf || e;
                if (e || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
                    if ((this.mat.reset(), this.hierarchy))
                        for (n = r = this.hierarchy.length - 1; n >= 0; n -= 1) {
                            var t = this.hierarchy[n].finalTransform.mProp;
                            this.mat.translate(-t.p.v[0], -t.p.v[1], t.p.v[2]), this.mat.rotateX(-t.or.v[0]).rotateY(-t.or.v[1]).rotateZ(t.or.v[2]), this.mat.rotateX(-t.rx.v).rotateY(-t.ry.v).rotateZ(t.rz.v), this.mat.scale(1 / t.s.v[0], 1 / t.s.v[1], 1 / t.s.v[2]), this.mat.translate(t.a.v[0], t.a.v[1], t.a.v[2]);
                        }
                    if ((this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a)) {
                        var n,
                            r,
                            i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]],
                            a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                            o = [i[0] / a, i[1] / a, i[2] / a],
                            s = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
                            l = Math.atan2(o[1], s),
                            c = Math.atan2(o[0], -o[2]);
                        this.mat.rotateY(c).rotateX(-l);
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var u = !this._prevMat.equals(this.mat);
                    if ((u || this.pe._mdf) && this.comp.threeDElements) {
                        for (n = 0, r = this.comp.threeDElements.length; n < r; n += 1)
                            if ('3d' === (d = this.comp.threeDElements[n]).type) {
                                if (u) {
                                    var d,
                                        f,
                                        _,
                                        p = this.mat.toCSS();
                                    ((_ = d.container.style).transform = p), (_.webkitTransform = p);
                                }
                                this.pe._mdf && (((f = d.perspectiveElem.style).perspective = this.pe.v + 'px'), (f.webkitPerspective = this.pe.v + 'px'));
                            }
                        this.mat.clone(this._prevMat);
                    }
                }
                this._isFirstFrame = !1;
            }),
            (HCameraElement.prototype.prepareFrame = function (e) {
                this.prepareProperties(e, !0);
            }),
            (HCameraElement.prototype.destroy = function () {}),
            (HCameraElement.prototype.getBaseElement = function () {
                return null;
            }),
            extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
            (HImageElement.prototype.createContent = function () {
                var e = this.globalData.getAssetsPath(this.assetData),
                    t = new Image();
                this.data.hasMask ? ((this.imageElem = createNS('image')), this.imageElem.setAttribute('width', this.assetData.w + 'px'), this.imageElem.setAttribute('height', this.assetData.h + 'px'), this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute('width', this.assetData.w), this.baseElement.setAttribute('height', this.assetData.h)) : this.layerElement.appendChild(t), (t.crossOrigin = 'anonymous'), (t.src = e), this.data.ln && this.baseElement.setAttribute('id', this.data.ln);
            }),
            extendPrototype([BaseRenderer], HybridRendererBase),
            (HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem),
            (HybridRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
            }),
            (HybridRendererBase.prototype.appendElementInPos = function (e, t) {
                var n = e.getBaseElement();
                if (n) {
                    var r = this.layers[t];
                    if (r.ddd && this.supports3d) this.addTo3dContainer(n, t);
                    else if (this.threeDElements) this.addTo3dContainer(n, t);
                    else {
                        for (var i, a, o = 0; o < t; ) this.elements[o] && !0 !== this.elements[o] && this.elements[o].getBaseElement && ((a = this.elements[o]), (i = (this.layers[o].ddd ? this.getThreeDContainerByPos(o) : a.getBaseElement()) || i)), (o += 1);
                        i ? (r.ddd && this.supports3d) || this.layerElement.insertBefore(n, i) : (r.ddd && this.supports3d) || this.layerElement.appendChild(n);
                    }
                }
            }),
            (HybridRendererBase.prototype.createShape = function (e) {
                return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createText = function (e) {
                return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createCamera = function (e) {
                return (this.camera = new HCameraElement(e, this.globalData, this)), this.camera;
            }),
            (HybridRendererBase.prototype.createImage = function (e) {
                return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createSolid = function (e) {
                return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this);
            }),
            (HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
            (HybridRendererBase.prototype.getThreeDContainerByPos = function (e) {
                for (var t = 0, n = this.threeDElements.length; t < n; ) {
                    if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
                    t += 1;
                }
                return null;
            }),
            (HybridRendererBase.prototype.createThreeDContainer = function (e, t) {
                var n,
                    r,
                    i = createTag('div');
                styleDiv(i);
                var a = createTag('div');
                if ((styleDiv(a), '3d' === t)) {
                    ((n = i.style).width = this.globalData.compSize.w + 'px'), (n.height = this.globalData.compSize.h + 'px');
                    var o = '50% 50%';
                    (n.webkitTransformOrigin = o), (n.mozTransformOrigin = o), (n.transformOrigin = o);
                    var s = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                    ((r = a.style).transform = s), (r.webkitTransform = s);
                }
                i.appendChild(a);
                var l = {
                    container: a,
                    perspectiveElem: i,
                    startPos: e,
                    endPos: e,
                    type: t
                };
                return this.threeDElements.push(l), l;
            }),
            (HybridRendererBase.prototype.build3dContainers = function () {
                var e,
                    t,
                    n = this.layers.length,
                    r = '';
                for (e = 0; e < n; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? '3d' !== r && ((r = '3d'), (t = this.createThreeDContainer(e, '3d'))) : '2d' !== r && ((r = '2d'), (t = this.createThreeDContainer(e, '2d'))), (t.endPos = Math.max(t.endPos, e));
                for (e = (n = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem);
            }),
            (HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
                for (var n = 0, r = this.threeDElements.length; n < r; ) {
                    if (t <= this.threeDElements[n].endPos) {
                        for (var i, a = this.threeDElements[n].startPos; a < t; ) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), (a += 1);
                        i ? this.threeDElements[n].container.insertBefore(e, i) : this.threeDElements[n].container.appendChild(e);
                        break;
                    }
                    n += 1;
                }
            }),
            (HybridRendererBase.prototype.configAnimation = function (e) {
                var t = createTag('div'),
                    n = this.animationItem.wrapper,
                    r = t.style;
                (r.width = e.w + 'px'), (r.height = e.h + 'px'), (this.resizerElem = t), styleDiv(t), (r.transformStyle = 'flat'), (r.mozTransformStyle = 'flat'), (r.webkitTransformStyle = 'flat'), this.renderConfig.className && t.setAttribute('class', this.renderConfig.className), n.appendChild(t), (r.overflow = 'hidden');
                var i = createNS('svg');
                i.setAttribute('width', '1'), i.setAttribute('height', '1'), styleDiv(i), this.resizerElem.appendChild(i);
                var a = createNS('defs');
                i.appendChild(a), (this.data = e), this.setupGlobalData(e, i), (this.globalData.defs = a), (this.layers = e.layers), (this.layerElement = this.resizerElem), this.build3dContainers(), this.updateContainerSize();
            }),
            (HybridRendererBase.prototype.destroy = function () {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), (this.animationItem.container = null), (this.globalData.defs = null);
                var e,
                    t = this.layers ? this.layers.length : 0;
                for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (HybridRendererBase.prototype.updateContainerSize = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.animationItem.wrapper.offsetWidth,
                    a = this.animationItem.wrapper.offsetHeight,
                    o = i / a;
                this.globalData.compSize.w / this.globalData.compSize.h > o ? ((e = i / this.globalData.compSize.w), (t = i / this.globalData.compSize.w), (n = 0), (r = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2)) : ((e = a / this.globalData.compSize.h), (t = a / this.globalData.compSize.h), (n = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2), (r = 0));
                var s = this.resizerElem.style;
                (s.webkitTransform = 'matrix3d(' + e + ',0,0,0,0,' + t + ',0,0,0,0,1,0,' + n + ',' + r + ',0,1)'), (s.transform = s.webkitTransform);
            }),
            (HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame),
            (HybridRendererBase.prototype.hide = function () {
                this.resizerElem.style.display = 'none';
            }),
            (HybridRendererBase.prototype.show = function () {
                this.resizerElem.style.display = 'block';
            }),
            (HybridRendererBase.prototype.initItems = function () {
                if ((this.buildAllItems(), this.camera)) this.camera.setup();
                else {
                    var e,
                        t = this.globalData.compSize.w,
                        n = this.globalData.compSize.h,
                        r = this.threeDElements.length;
                    for (e = 0; e < r; e += 1) {
                        var i = this.threeDElements[e].perspectiveElem.style;
                        (i.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2)) + 'px'), (i.perspective = i.webkitPerspective);
                    }
                }
            }),
            (HybridRendererBase.prototype.searchExtraCompositions = function (e) {
                var t,
                    n = e.length,
                    r = createTag('div');
                for (t = 0; t < n; t += 1)
                    if (e[t].xt) {
                        var i = this.createComp(e[t], r, this.globalData.comp, null);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
                    }
            }),
            extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
            (HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function () {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute('width', this.data.w), this.svgElement.setAttribute('height', this.data.h), (this.transformedElement = this.baseElement)) : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function (e, t) {
                for (var n, r = 0; r < t; ) this.elements[r] && this.elements[r].getBaseElement && (n = this.elements[r].getBaseElement()), (r += 1);
                n ? this.layerElement.insertBefore(e, n) : this.layerElement.appendChild(e);
            }),
            (HCompElement.prototype.createComp = function (e) {
                return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this);
            }),
            extendPrototype([HybridRendererBase], HybridRenderer),
            (HybridRenderer.prototype.createComp = function (e) {
                return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this);
            });
        var CompExpressionInterface = (function () {
            return function (e) {
                function t(t) {
                    for (var n = 0, r = e.layers.length; n < r; ) {
                        if (e.layers[n].nm === t || e.layers[n].ind === t) return e.elements[n].layerInterface;
                        n += 1;
                    }
                    return null;
                }
                return Object.defineProperty(t, '_name', { value: e.data.nm }), (t.layer = t), (t.pixelAspect = 1), (t.height = e.data.h || e.globalData.compSize.h), (t.width = e.data.w || e.globalData.compSize.w), (t.pixelAspect = 1), (t.frameDuration = 1 / e.globalData.frameRate), (t.displayStartTime = 0), (t.numLayers = e.layers.length), t;
            };
        })();
        function _typeof$2(e) {
            return (_typeof$2 =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        function seedRandom(e, t) {
            var n,
                r = this,
                i = 256,
                a = 6,
                o = 52,
                s = 'random',
                l = t.pow(i, a),
                c = t.pow(2, o),
                u = 2 * c,
                d = i - 1;
            function f(n, r, o) {
                var d = [],
                    f = m(h((r = !0 === r ? { entropy: !0 } : r || {}).entropy ? [n, E(e)] : null === n ? g() : n, 3), d),
                    b = new _(d),
                    y = function () {
                        for (var e = b.g(a), t = l, n = 0; e < c; ) (e = (e + n) * i), (t *= i), (n = b.g(1));
                        for (; e >= u; ) (e /= 2), (t /= 2), (n >>>= 1);
                        return (e + n) / t;
                    };
                return (
                    (y.int32 = function () {
                        return 0 | b.g(4);
                    }),
                    (y.quick = function () {
                        return b.g(4) / 4294967296;
                    }),
                    (y.double = y),
                    m(E(b.S), e),
                    (
                        r.pass ||
                        o ||
                        function (e, n, r, i) {
                            return (i &&
                                (i.S && p(i, b),
                                (e.state = function () {
                                    return p(b, {});
                                })),
                            r)
                                ? ((t[s] = e), n)
                                : e;
                        }
                    )(y, f, 'global' in r ? r.global : this == t, r.state)
                );
            }
            function _(e) {
                var t,
                    n = e.length,
                    r = this,
                    a = 0,
                    o = (r.i = r.j = 0),
                    s = (r.S = []);
                for (n || (e = [n++]); a < i; ) s[a] = a++;
                for (a = 0; a < i; a++) (s[a] = s[(o = d & (o + e[a % n] + (t = s[a])))]), (s[o] = t);
                r.g = function (e) {
                    for (var t, n = 0, a = r.i, o = r.j, s = r.S; e--; ) (t = s[(a = d & (a + 1))]), (n = n * i + s[d & ((s[a] = s[(o = d & (o + t))]) + (s[o] = t))]);
                    return (r.i = a), (r.j = o), n;
                };
            }
            function p(e, t) {
                return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
            }
            function h(e, t) {
                var n,
                    r = [],
                    i = _typeof$2(e);
                if (t && 'object' == i)
                    for (n in e)
                        try {
                            r.push(h(e[n], t - 1));
                        } catch (e) {}
                return r.length ? r : 'string' == i ? e : e + '\0';
            }
            function m(e, t) {
                for (var n, r = e + '', i = 0; i < r.length; ) t[d & i] = d & ((n ^= 19 * t[d & i]) + r.charCodeAt(i++));
                return E(t);
            }
            function g() {
                try {
                    if (n) return E(n.randomBytes(i));
                    var t = new Uint8Array(i);
                    return (r.crypto || r.msCrypto).getRandomValues(t), E(t);
                } catch (t) {
                    var a = r.navigator,
                        o = a && a.plugins;
                    return [+new Date(), r, o, r.screen, E(e)];
                }
            }
            function E(e) {
                return String.fromCharCode.apply(0, e);
            }
            (t['seed' + s] = f), m(t.random(), e);
        }
        function initialize$2(e) {
            seedRandom([], e);
        }
        var propTypes = { SHAPE: 'shape' };
        function _typeof$1(e) {
            return (_typeof$1 =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        var ExpressionManager = (function () {
                var ob = {},
                    Math = BMMath,
                    window = null,
                    document = null,
                    XMLHttpRequest = null,
                    fetch = null,
                    frames = null,
                    _lottieGlobal = {};
                function resetFrame() {
                    _lottieGlobal = {};
                }
                function $bm_isInstanceOfArray(e) {
                    return e.constructor === Array || e.constructor === Float32Array;
                }
                function isNumerable(e, t) {
                    return 'number' === e || t instanceof Number || 'boolean' === e || 'string' === e;
                }
                function $bm_neg(e) {
                    var t = _typeof$1(e);
                    if ('number' === t || e instanceof Number || 'boolean' === t) return -e;
                    if ($bm_isInstanceOfArray(e)) {
                        var n,
                            r = e.length,
                            i = [];
                        for (n = 0; n < r; n += 1) i[n] = -e[n];
                        return i;
                    }
                    return e.propType ? e.v : -e;
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get,
                    easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get,
                    easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;
                function sum(e, t) {
                    var n = _typeof$1(e),
                        r = _typeof$1(t);
                    if ((isNumerable(n, e) && isNumerable(r, t)) || 'string' === n || 'string' === r) return e + t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0)), (e[0] += t), e;
                    if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return ((t = t.slice(0))[0] = e + t[0]), t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var i = 0, a = e.length, o = t.length, s = []; i < a || i < o; ) ('number' == typeof e[i] || e[i] instanceof Number) && ('number' == typeof t[i] || t[i] instanceof Number) ? (s[i] = e[i] + t[i]) : (s[i] = void 0 === t[i] ? e[i] : e[i] || t[i]), (i += 1);
                        return s;
                    }
                    return 0;
                }
                var add = sum;
                function sub(e, t) {
                    var n = _typeof$1(e),
                        r = _typeof$1(t);
                    if (isNumerable(n, e) && isNumerable(r, t)) return 'string' === n && (e = parseInt(e, 10)), 'string' === r && (t = parseInt(t, 10)), e - t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(r, t)) return (e = e.slice(0)), (e[0] -= t), e;
                    if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return ((t = t.slice(0))[0] = e - t[0]), t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var i = 0, a = e.length, o = t.length, s = []; i < a || i < o; ) ('number' == typeof e[i] || e[i] instanceof Number) && ('number' == typeof t[i] || t[i] instanceof Number) ? (s[i] = e[i] - t[i]) : (s[i] = void 0 === t[i] ? e[i] : e[i] || t[i]), (i += 1);
                        return s;
                    }
                    return 0;
                }
                function mul(e, t) {
                    var n,
                        r,
                        i,
                        a = _typeof$1(e),
                        o = _typeof$1(t);
                    if (isNumerable(a, e) && isNumerable(o, t)) return e * t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(o, t)) {
                        for (r = 0, n = createTypedArray('float32', (i = e.length)); r < i; r += 1) n[r] = e[r] * t;
                        return n;
                    }
                    if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                        for (r = 0, n = createTypedArray('float32', (i = t.length)); r < i; r += 1) n[r] = e * t[r];
                        return n;
                    }
                    return 0;
                }
                function div(e, t) {
                    var n,
                        r,
                        i,
                        a = _typeof$1(e),
                        o = _typeof$1(t);
                    if (isNumerable(a, e) && isNumerable(o, t)) return e / t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(o, t)) {
                        for (r = 0, n = createTypedArray('float32', (i = e.length)); r < i; r += 1) n[r] = e[r] / t;
                        return n;
                    }
                    if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                        for (r = 0, n = createTypedArray('float32', (i = t.length)); r < i; r += 1) n[r] = e / t[r];
                        return n;
                    }
                    return 0;
                }
                function mod(e, t) {
                    return 'string' == typeof e && (e = parseInt(e, 10)), 'string' == typeof t && (t = parseInt(t, 10)), e % t;
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;
                function clamp(e, t, n) {
                    if (t > n) {
                        var r = n;
                        (n = t), (t = r);
                    }
                    return Math.min(Math.max(e, t), n);
                }
                function radiansToDegrees(e) {
                    return e / degToRads;
                }
                var radians_to_degrees = radiansToDegrees;
                function degreesToRadians(e) {
                    return e * degToRads;
                }
                var degrees_to_radians = radiansToDegrees,
                    helperLengthArray = [0, 0, 0, 0, 0, 0];
                function length(e, t) {
                    if ('number' == typeof e || e instanceof Number) return (t = t || 0), Math.abs(e - t);
                    t || (t = helperLengthArray);
                    var n,
                        r = Math.min(e.length, t.length),
                        i = 0;
                    for (n = 0; n < r; n += 1) i += Math.pow(t[n] - e[n], 2);
                    return Math.sqrt(i);
                }
                function normalize(e) {
                    return div(e, length(e));
                }
                function rgbToHsl(e) {
                    var t,
                        n,
                        r = e[0],
                        i = e[1],
                        a = e[2],
                        o = Math.max(r, i, a),
                        s = Math.min(r, i, a),
                        l = (o + s) / 2;
                    if (o === s) (t = 0), (n = 0);
                    else {
                        var c = o - s;
                        switch (((n = l > 0.5 ? c / (2 - o - s) : c / (o + s)), o)) {
                            case r:
                                t = (i - a) / c + 6 * (i < a);
                                break;
                            case i:
                                t = (a - r) / c + 2;
                                break;
                            case a:
                                t = (r - i) / c + 4;
                        }
                        t /= 6;
                    }
                    return [t, n, l, e[3]];
                }
                function hue2rgb(e, t, n) {
                    return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
                }
                function hslToRgb(e) {
                    var t,
                        n,
                        r,
                        i = e[0],
                        a = e[1],
                        o = e[2];
                    if (0 === a) (t = o), (r = o), (n = o);
                    else {
                        var s = o < 0.5 ? o * (1 + a) : o + a - o * a,
                            l = 2 * o - s;
                        (t = hue2rgb(l, s, i + 1 / 3)), (n = hue2rgb(l, s, i)), (r = hue2rgb(l, s, i - 1 / 3));
                    }
                    return [t, n, r, e[3]];
                }
                function linear(e, t, n, r, i) {
                    if (((void 0 === r || void 0 === i) && ((r = t), (i = n), (t = 0), (n = 1)), n < t)) {
                        var a,
                            o = n;
                        (n = t), (t = o);
                    }
                    if (e <= t) return r;
                    if (e >= n) return i;
                    var s = n === t ? 0 : (e - t) / (n - t);
                    if (!r.length) return r + (i - r) * s;
                    var l = r.length,
                        c = createTypedArray('float32', l);
                    for (a = 0; a < l; a += 1) c[a] = r[a] + (i[a] - r[a]) * s;
                    return c;
                }
                function random(e, t) {
                    if ((void 0 === t && (void 0 === e ? ((e = 0), (t = 1)) : ((t = e), (e = void 0))), t.length)) {
                        var n,
                            r = t.length;
                        e || (e = createTypedArray('float32', r));
                        var i = createTypedArray('float32', r),
                            a = BMMath.random();
                        for (n = 0; n < r; n += 1) i[n] = e[n] + a * (t[n] - e[n]);
                        return i;
                    }
                    return void 0 === e && (e = 0), e + BMMath.random() * (t - e);
                }
                function createPath(e, t, n, r) {
                    var i,
                        a,
                        o,
                        s = e.length,
                        l = shapePool.newElement();
                    l.setPathData(!!r, s);
                    var c = [0, 0];
                    for (i = 0; i < s; i += 1) (a = t && t[i] ? t[i] : c), (o = n && n[i] ? n[i] : c), l.setTripleAt(e[i][0], e[i][1], o[0] + e[i][0], o[1] + e[i][1], a[0] + e[i][0], a[1] + e[i][1], i, !0);
                    return l;
                }
                function initiateExpression(elem, data, property) {
                    function noOp(e) {
                        return e;
                    }
                    if (!elem.globalData.renderConfig.runExpressions) return noOp;
                    var transform,
                        $bm_transform,
                        content,
                        effect,
                        loopIn,
                        loop_in,
                        loopOut,
                        loop_out,
                        smooth,
                        toWorld,
                        fromWorld,
                        fromComp,
                        toComp,
                        fromCompToSurface,
                        position,
                        rotation,
                        anchorPoint,
                        scale,
                        thisLayer,
                        thisComp,
                        mask,
                        valueAtTime,
                        velocityAtTime,
                        scoped_bm_rt,
                        time,
                        velocity,
                        value,
                        text,
                        textIndex,
                        textTotal,
                        selectorValue,
                        parent,
                        val = data.x,
                        needsVelocity = /velocity(?![\w\d])/.test(val),
                        _needsRandom = -1 !== val.indexOf('random'),
                        elemType = elem.data.ty,
                        thisProperty = property;
                    (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                        Object.defineProperty(thisProperty, 'value', {
                            get: function () {
                                return thisProperty.v;
                            }
                        }),
                        (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                        (elem.comp.displayStartTime = 0);
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                        outPoint = elem.data.op / elem.comp.globalData.frameRate,
                        width = elem.data.sw ? elem.data.sw : 0,
                        height = elem.data.sh ? elem.data.sh : 0,
                        name = elem.data.nm,
                        expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0],
                        numKeys = property.kf ? data.k.length : 0,
                        active = !this.data || !0 !== this.data.hd,
                        wiggle = function (e, t) {
                            var n,
                                r,
                                i = this.pv.length ? this.pv.length : 1,
                                a = createTypedArray('float32', i);
                            e = 5;
                            var o = Math.floor(time * e);
                            for (n = 0, r = 0; n < o; ) {
                                for (r = 0; r < i; r += 1) a[r] += -t + 2 * t * BMMath.random();
                                n += 1;
                            }
                            var s = time * e,
                                l = s - Math.floor(s),
                                c = createTypedArray('float32', i);
                            if (i > 1) {
                                for (r = 0; r < i; r += 1) c[r] = this.pv[r] + a[r] + (-t + 2 * t * BMMath.random()) * l;
                                return c;
                            }
                            return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l;
                        }.bind(this);
                    function loopInDuration(e, t) {
                        return loopIn(e, t, !0);
                    }
                    function loopOutDuration(e, t) {
                        return loopOut(e, t, !0);
                    }
                    thisProperty.loopIn && (loop_in = loopIn = thisProperty.loopIn.bind(thisProperty)), thisProperty.loopOut && (loop_out = loopOut = thisProperty.loopOut.bind(thisProperty)), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                    function lookAt(e, t) {
                        var n = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                            r = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
                        return [-Math.atan2(n[1], n[2]) / degToRads, r, 0];
                    }
                    function easeOut(e, t, n, r, i) {
                        return applyEase(easeOutBez, e, t, n, r, i);
                    }
                    function easeIn(e, t, n, r, i) {
                        return applyEase(easeInBez, e, t, n, r, i);
                    }
                    function ease(e, t, n, r, i) {
                        return applyEase(easeInOutBez, e, t, n, r, i);
                    }
                    function applyEase(e, t, n, r, i, a) {
                        void 0 === i ? ((i = n), (a = r)) : (t = (t - n) / (r - n)), t > 1 ? (t = 1) : t < 0 && (t = 0);
                        var o = e(t);
                        if ($bm_isInstanceOfArray(i)) {
                            var s,
                                l = i.length,
                                c = createTypedArray('float32', l);
                            for (s = 0; s < l; s += 1) c[s] = (a[s] - i[s]) * o + i[s];
                            return c;
                        }
                        return (a - i) * o + i;
                    }
                    function nearestKey(e) {
                        var t,
                            n,
                            r,
                            i = data.k.length;
                        if (data.k.length && 'number' != typeof data.k[0])
                            if (((n = -1), (e *= elem.comp.globalData.frameRate) < data.k[0].t)) (n = 1), (r = data.k[0].t);
                            else {
                                for (t = 0; t < i - 1; t += 1)
                                    if (e === data.k[t].t) {
                                        (n = t + 1), (r = data.k[t].t);
                                        break;
                                    } else if (e > data.k[t].t && e < data.k[t + 1].t) {
                                        e - data.k[t].t > data.k[t + 1].t - e ? ((n = t + 2), (r = data.k[t + 1].t)) : ((n = t + 1), (r = data.k[t].t));
                                        break;
                                    }
                                -1 === n && ((n = t + 1), (r = data.k[t].t));
                            }
                        else (n = 0), (r = 0);
                        var a = {};
                        return (a.index = n), (a.time = r / elem.comp.globalData.frameRate), a;
                    }
                    function key(e) {
                        if (!data.k.length || 'number' == typeof data.k[0]) throw Error('The property has no keyframe at index ' + e);
                        e -= 1;
                        var t,
                            n,
                            r = {
                                time: data.k[e].t / elem.comp.globalData.frameRate,
                                value: []
                            },
                            i = Object.prototype.hasOwnProperty.call(data.k[e], 's') ? data.k[e].s : data.k[e - 1].e;
                        for (t = 0, n = i.length; t < n; t += 1) (r[t] = i[t]), (r.value[t] = i[t]);
                        return r;
                    }
                    function framesToTime(e, t) {
                        return t || (t = elem.comp.globalData.frameRate), e / t;
                    }
                    function timeToFrames(e, t) {
                        return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t;
                    }
                    function seedRandom(e) {
                        BMMath.seedrandom(randSeed + e);
                    }
                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime();
                    }
                    function substring(e, t) {
                        return 'string' == typeof value ? (void 0 === t ? value.substring(e) : value.substring(e, t)) : '';
                    }
                    function substr(e, t) {
                        return 'string' == typeof value ? (void 0 === t ? value.substr(e) : value.substr(e, t)) : '';
                    }
                    function posterizeTime(e) {
                        (time = 0 === e ? 0 : Math.floor(time * e) / e), (value = valueAtTime(time));
                    }
                    var index = elem.data.ind,
                        hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                        randSeed = Math.floor(1000000 * Math.random()),
                        globalData = elem.globalData;
                    function executeExpression(e) {
                        return ((value = e), this.frameExpressionId === elem.globalData.frameId && 'textSelector' !== this.propType) ? value : ('textSelector' === this.propType && ((textIndex = this.textIndex), (textTotal = this.textTotal), (selectorValue = this.selectorValue)), thisLayer || ((text = elem.layerInterface.text), (thisLayer = elem.layerInterface), (thisComp = elem.comp.compInterface), (toWorld = thisLayer.toWorld.bind(thisLayer)), (fromWorld = thisLayer.fromWorld.bind(thisLayer)), (fromComp = thisLayer.fromComp.bind(thisLayer)), (toComp = thisLayer.toComp.bind(thisLayer)), (mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null), (fromCompToSurface = fromComp)), !transform && (($bm_transform = transform = elem.layerInterface('ADBE Transform Group')), transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer('ADBE Root Vectors Group')), effect || (effect = thisLayer(4)), (hasParent = !!(elem.hierarchy && elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), (time = this.comp.renderedFrame / this.comp.globalData.frameRate), _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), (this.frameExpressionId = elem.globalData.frameId), (scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt));
                    }
                    return (executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData]), executeExpression;
                }
                return (ob.initiateExpression = initiateExpression), (ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal]), (ob.resetFrame = resetFrame), ob;
            })(),
            Expressions = (function () {
                var e = {};
                return (
                    (e.initExpressions = function e(e) {
                        var t = 0,
                            n = [];
                        function r() {
                            t += 1;
                        }
                        function i() {
                            0 == (t -= 1) && o();
                        }
                        function a(e) {
                            -1 === n.indexOf(e) && n.push(e);
                        }
                        function o() {
                            var e,
                                t = n.length;
                            for (e = 0; e < t; e += 1) n[e].release();
                            n.length = 0;
                        }
                        (e.renderer.compInterface = CompExpressionInterface(e.renderer)), e.renderer.globalData.projectInterface.registerComposition(e.renderer), (e.renderer.globalData.pushExpression = r), (e.renderer.globalData.popExpression = i), (e.renderer.globalData.registerExpressionProperty = a);
                    }),
                    (e.resetFrame = ExpressionManager.resetFrame),
                    e
                );
            })(),
            MaskManagerInterface = (function () {
                function e(e, t) {
                    (this._mask = e), (this._data = t);
                }
                return (
                    Object.defineProperty(e.prototype, 'maskPath', {
                        get: function () {
                            return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                        }
                    }),
                    Object.defineProperty(e.prototype, 'maskOpacity', {
                        get: function () {
                            return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                        }
                    }),
                    function (t) {
                        var n,
                            r = createSizedArray(t.viewData.length),
                            i = t.viewData.length;
                        for (n = 0; n < i; n += 1) r[n] = new e(t.viewData[n], t.masksProperties[n]);
                        return function (e) {
                            for (n = 0; n < i; ) {
                                if (t.masksProperties[n].nm === e) return r[n];
                                n += 1;
                            }
                            return null;
                        };
                    }
                );
            })(),
            ExpressionPropertyInterface = (function () {
                var e = {
                        pv: 0,
                        v: 0,
                        mult: 1
                    },
                    t = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };
                function n(e, t, n) {
                    Object.defineProperty(e, 'velocity', {
                        get: function () {
                            return t.getVelocityAtTime(t.comp.currentFrame);
                        }
                    }),
                        (e.numKeys = t.keyframes ? t.keyframes.length : 0),
                        (e.key = function (r) {
                            if (!e.numKeys) return 0;
                            var i = '';
                            i = 's' in t.keyframes[r - 1] ? t.keyframes[r - 1].s : 'e' in t.keyframes[r - 2] ? t.keyframes[r - 2].e : t.keyframes[r - 2].s;
                            var a = 'unidimensional' === n ? new Number(i) : Object.assign({}, i);
                            return (a.time = t.keyframes[r - 1].t / t.elem.comp.globalData.frameRate), (a.value = 'unidimensional' === n ? i[0] : i), a;
                        }),
                        (e.valueAtTime = t.getValueAtTime),
                        (e.speedAtTime = t.getSpeedAtTime),
                        (e.velocityAtTime = t.getVelocityAtTime),
                        (e.propertyGroup = t.propertyGroup);
                }
                function r(t) {
                    (t && 'pv' in t) || (t = e);
                    var r = 1 / t.mult,
                        i = t.pv * r,
                        a = new Number(i);
                    return (
                        (a.value = i),
                        n(a, t, 'unidimensional'),
                        function () {
                            return t.k && t.getValue(), (i = t.v * r), a.value !== i && (((a = new Number(i)).value = i), n(a, t, 'unidimensional')), a;
                        }
                    );
                }
                function i(e) {
                    (e && 'pv' in e) || (e = t);
                    var r = 1 / e.mult,
                        i = (e.data && e.data.l) || e.pv.length,
                        a = createTypedArray('float32', i),
                        o = createTypedArray('float32', i);
                    return (
                        (a.value = o),
                        n(a, e, 'multidimensional'),
                        function () {
                            e.k && e.getValue();
                            for (var t = 0; t < i; t += 1) (o[t] = e.v[t] * r), (a[t] = o[t]);
                            return a;
                        }
                    );
                }
                function a() {
                    return e;
                }
                return function (e) {
                    return e ? ('unidimensional' === e.propType ? r(e) : i(e)) : a;
                };
            })(),
            TransformExpressionInterface = (function () {
                return function (e) {
                    var t, n, r, i;
                    function a(e) {
                        switch (e) {
                            case 'scale':
                            case 'Scale':
                            case 'ADBE Scale':
                            case 6:
                                return a.scale;
                            case 'rotation':
                            case 'Rotation':
                            case 'ADBE Rotation':
                            case 'ADBE Rotate Z':
                            case 10:
                                return a.rotation;
                            case 'ADBE Rotate X':
                                return a.xRotation;
                            case 'ADBE Rotate Y':
                                return a.yRotation;
                            case 'position':
                            case 'Position':
                            case 'ADBE Position':
                            case 2:
                                return a.position;
                            case 'ADBE Position_0':
                                return a.xPosition;
                            case 'ADBE Position_1':
                                return a.yPosition;
                            case 'ADBE Position_2':
                                return a.zPosition;
                            case 'anchorPoint':
                            case 'AnchorPoint':
                            case 'Anchor Point':
                            case 'ADBE AnchorPoint':
                            case 1:
                                return a.anchorPoint;
                            case 'opacity':
                            case 'Opacity':
                            case 11:
                                return a.opacity;
                            default:
                                return null;
                        }
                    }
                    return (
                        Object.defineProperty(a, 'rotation', { get: ExpressionPropertyInterface(e.r || e.rz) }),
                        Object.defineProperty(a, 'zRotation', { get: ExpressionPropertyInterface(e.rz || e.r) }),
                        Object.defineProperty(a, 'xRotation', { get: ExpressionPropertyInterface(e.rx) }),
                        Object.defineProperty(a, 'yRotation', { get: ExpressionPropertyInterface(e.ry) }),
                        Object.defineProperty(a, 'scale', { get: ExpressionPropertyInterface(e.s) }),
                        e.p ? (i = ExpressionPropertyInterface(e.p)) : ((t = ExpressionPropertyInterface(e.px)), (n = ExpressionPropertyInterface(e.py)), e.pz && (r = ExpressionPropertyInterface(e.pz))),
                        Object.defineProperty(a, 'position', {
                            get: function () {
                                return e.p ? i() : [t(), n(), r ? r() : 0];
                            }
                        }),
                        Object.defineProperty(a, 'xPosition', { get: ExpressionPropertyInterface(e.px) }),
                        Object.defineProperty(a, 'yPosition', { get: ExpressionPropertyInterface(e.py) }),
                        Object.defineProperty(a, 'zPosition', { get: ExpressionPropertyInterface(e.pz) }),
                        Object.defineProperty(a, 'anchorPoint', { get: ExpressionPropertyInterface(e.a) }),
                        Object.defineProperty(a, 'opacity', { get: ExpressionPropertyInterface(e.o) }),
                        Object.defineProperty(a, 'skew', { get: ExpressionPropertyInterface(e.sk) }),
                        Object.defineProperty(a, 'skewAxis', { get: ExpressionPropertyInterface(e.sa) }),
                        Object.defineProperty(a, 'orientation', { get: ExpressionPropertyInterface(e.or) }),
                        a
                    );
                };
            })(),
            LayerExpressionInterface = (function () {
                function e(e) {
                    var t = new Matrix();
                    return void 0 !== e ? this._elem.finalTransform.mProp.getValueAtTime(e).clone(t) : this._elem.finalTransform.mProp.applyToMatrix(t), t;
                }
                function t(e, t) {
                    var n = this.getMatrix(t);
                    return (n.props[12] = 0), (n.props[13] = 0), (n.props[14] = 0), this.applyPoint(n, e);
                }
                function n(e, t) {
                    var n = this.getMatrix(t);
                    return this.applyPoint(n, e);
                }
                function r(e, t) {
                    var n = this.getMatrix(t);
                    return (n.props[12] = 0), (n.props[13] = 0), (n.props[14] = 0), this.invertPoint(n, e);
                }
                function i(e, t) {
                    var n = this.getMatrix(t);
                    return this.invertPoint(n, e);
                }
                function a(e, t) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n,
                            r = this._elem.hierarchy.length;
                        for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.applyToPointArray(t[0], t[1], t[2] || 0);
                }
                function o(e, t) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n,
                            r = this._elem.hierarchy.length;
                        for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.inversePoint(t);
                }
                function s(e) {
                    var t = new Matrix();
                    if ((t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length)) {
                        var n,
                            r = this._elem.hierarchy.length;
                        for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t);
                    }
                    return t.inversePoint(e);
                }
                function l() {
                    return [1, 1, 1, 1];
                }
                return function (c) {
                    function u(e) {
                        f.mask = new MaskManagerInterface(e, c);
                    }
                    function d(e) {
                        f.effect = e;
                    }
                    function f(e) {
                        switch (e) {
                            case 'ADBE Root Vectors Group':
                            case 'Contents':
                            case 2:
                                return f.shapeInterface;
                            case 1:
                            case 6:
                            case 'Transform':
                            case 'transform':
                            case 'ADBE Transform Group':
                                return _;
                            case 4:
                            case 'ADBE Effect Parade':
                            case 'effects':
                            case 'Effects':
                                return f.effect;
                            case 'ADBE Text Properties':
                                return f.textInterface;
                            default:
                                return null;
                        }
                    }
                    (f.getMatrix = e), (f.invertPoint = o), (f.applyPoint = a), (f.toWorld = n), (f.toWorldVec = t), (f.fromWorld = i), (f.fromWorldVec = r), (f.toComp = n), (f.fromComp = s), (f.sampleImage = l), (f.sourceRectAtTime = c.sourceRectAtTime.bind(c)), (f._elem = c);
                    var _ = TransformExpressionInterface(c.finalTransform.mProp),
                        p = getDescriptor(_, 'anchorPoint');
                    return (
                        Object.defineProperties(f, {
                            hasParent: {
                                get: function () {
                                    return c.hierarchy.length;
                                }
                            },
                            parent: {
                                get: function () {
                                    return c.hierarchy[0].layerInterface;
                                }
                            },
                            rotation: getDescriptor(_, 'rotation'),
                            scale: getDescriptor(_, 'scale'),
                            position: getDescriptor(_, 'position'),
                            opacity: getDescriptor(_, 'opacity'),
                            anchorPoint: p,
                            anchor_point: p,
                            transform: {
                                get: function () {
                                    return _;
                                }
                            },
                            active: {
                                get: function () {
                                    return c.isInRange;
                                }
                            }
                        }),
                        (f.startTime = c.data.st),
                        (f.index = c.data.ind),
                        (f.source = c.data.refId),
                        (f.height = 0 === c.data.ty ? c.data.h : 100),
                        (f.width = 0 === c.data.ty ? c.data.w : 100),
                        (f.inPoint = c.data.ip / c.comp.globalData.frameRate),
                        (f.outPoint = c.data.op / c.comp.globalData.frameRate),
                        (f._name = c.data.nm),
                        (f.registerMaskInterface = u),
                        (f.registerEffectsInterface = d),
                        f
                    );
                };
            })(),
            propertyGroupFactory = (function () {
                return function (e, t) {
                    return function (n) {
                        return (n = void 0 === n ? 1 : n) <= 0 ? e : t(n - 1);
                    };
                };
            })(),
            PropertyInterface = (function () {
                return function (e, t) {
                    var n = { _name: e };
                    return function (e) {
                        return (e = void 0 === e ? 1 : e) <= 0 ? n : t(e - 1);
                    };
                };
            })(),
            EffectsExpressionInterface = (function () {
                function e(n, r, i, a) {
                    function o(e) {
                        for (var t = n.ef, r = 0, i = t.length; r < i; ) {
                            if (e === t[r].nm || e === t[r].mn || e === t[r].ix) {
                                if (5 === t[r].ty) return c[r];
                                return c[r]();
                            }
                            r += 1;
                        }
                        throw Error();
                    }
                    var s,
                        l = propertyGroupFactory(o, i),
                        c = [],
                        u = n.ef.length;
                    for (s = 0; s < u; s += 1) 5 === n.ef[s].ty ? c.push(e(n.ef[s], r.effectElements[s], r.effectElements[s].propertyGroup, a)) : c.push(t(r.effectElements[s], n.ef[s].ty, a, l));
                    return (
                        'ADBE Color Control' === n.mn &&
                            Object.defineProperty(o, 'color', {
                                get: function () {
                                    return c[0]();
                                }
                            }),
                        Object.defineProperties(o, {
                            numProperties: {
                                get: function () {
                                    return n.np;
                                }
                            },
                            _name: { value: n.nm },
                            propertyGroup: { value: l }
                        }),
                        (o.enabled = 0 !== n.en),
                        (o.active = o.enabled),
                        o
                    );
                }
                function t(e, t, n, r) {
                    var i = ExpressionPropertyInterface(e.p);
                    function a() {
                        return 10 === t ? n.comp.compInterface(e.p.v) : i();
                    }
                    return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface('', r)), a;
                }
                return {
                    createEffectsInterface: function (t, n) {
                        if (t.effectsManager) {
                            var r,
                                i = [],
                                a = t.data.ef,
                                o = t.effectsManager.effectElements.length;
                            for (r = 0; r < o; r += 1) i.push(e(a[r], t.effectsManager.effectElements[r], n, t));
                            var s = t.data.ef || [],
                                l = function (e) {
                                    for (r = 0, o = s.length; r < o; ) {
                                        if (e === s[r].nm || e === s[r].mn || e === s[r].ix) return i[r];
                                        r += 1;
                                    }
                                    return null;
                                };
                            return (
                                Object.defineProperty(l, 'numProperties', {
                                    get: function () {
                                        return s.length;
                                    }
                                }),
                                l
                            );
                        }
                        return null;
                    }
                };
            })(),
            ShapePathInterface = (function () {
                return function (e, t, n) {
                    var r = t.sh;
                    function i(e) {
                        return 'Shape' === e || 'shape' === e || 'Path' === e || 'path' === e || 'ADBE Vector Shape' === e || 2 === e ? i.path : null;
                    }
                    var a = propertyGroupFactory(i, n);
                    return (
                        r.setGroupProperty(PropertyInterface('Path', a)),
                        Object.defineProperties(i, {
                            path: {
                                get: function () {
                                    return r.k && r.getValue(), r;
                                }
                            },
                            shape: {
                                get: function () {
                                    return r.k && r.getValue(), r;
                                }
                            },
                            _name: { value: e.nm },
                            ix: { value: e.ix },
                            propertyIndex: { value: e.ix },
                            mn: { value: e.mn },
                            propertyGroup: { value: n }
                        }),
                        i
                    );
                };
            })(),
            ShapeExpressionInterface = (function () {
                function e(e, t, l) {
                    var p,
                        h = [],
                        m = e ? e.length : 0;
                    for (p = 0; p < m; p += 1) 'gr' === e[p].ty ? h.push(n(e[p], t[p], l)) : 'fl' === e[p].ty ? h.push(r(e[p], t[p], l)) : 'st' === e[p].ty ? h.push(o(e[p], t[p], l)) : 'tm' === e[p].ty ? h.push(s(e[p], t[p], l)) : 'tr' === e[p].ty || ('el' === e[p].ty ? h.push(c(e[p], t[p], l)) : 'sr' === e[p].ty ? h.push(u(e[p], t[p], l)) : 'sh' === e[p].ty ? h.push(ShapePathInterface(e[p], t[p], l)) : 'rc' === e[p].ty ? h.push(d(e[p], t[p], l)) : 'rd' === e[p].ty ? h.push(f(e[p], t[p], l)) : 'rp' === e[p].ty ? h.push(_(e[p], t[p], l)) : 'gf' === e[p].ty ? h.push(i(e[p], t[p], l)) : h.push(a(e[p], t[p], l)));
                    return h;
                }
                function t(t, n, r) {
                    var i,
                        a = function (e) {
                            for (var t = 0, n = i.length; t < n; ) {
                                if (i[t]._name === e || i[t].mn === e || i[t].propertyIndex === e || i[t].ix === e || i[t].ind === e) return i[t];
                                t += 1;
                            }
                            return 'number' == typeof e ? i[e - 1] : null;
                        };
                    (a.propertyGroup = propertyGroupFactory(a, r)), (i = e(t.it, n.it, a.propertyGroup)), (a.numProperties = i.length);
                    var o = l(t.it[t.it.length - 1], n.it[n.it.length - 1], a.propertyGroup);
                    return (a.transform = o), (a.propertyIndex = t.cix), (a._name = t.nm), a;
                }
                function n(e, n, r) {
                    var i = function (e) {
                        switch (e) {
                            case 'ADBE Vectors Group':
                            case 'Contents':
                            case 2:
                                return i.content;
                            default:
                                return i.transform;
                        }
                    };
                    i.propertyGroup = propertyGroupFactory(i, r);
                    var a = t(e, n, i.propertyGroup),
                        o = l(e.it[e.it.length - 1], n.it[n.it.length - 1], i.propertyGroup);
                    return (
                        (i.content = a),
                        (i.transform = o),
                        Object.defineProperty(i, '_name', {
                            get: function () {
                                return e.nm;
                            }
                        }),
                        (i.numProperties = e.np),
                        (i.propertyIndex = e.ix),
                        (i.nm = e.nm),
                        (i.mn = e.mn),
                        i
                    );
                }
                function r(e, t, n) {
                    function r(e) {
                        return 'Color' === e || 'color' === e ? r.color : 'Opacity' === e || 'opacity' === e ? r.opacity : null;
                    }
                    return (
                        Object.defineProperties(r, {
                            color: { get: ExpressionPropertyInterface(t.c) },
                            opacity: { get: ExpressionPropertyInterface(t.o) },
                            _name: { value: e.nm },
                            mn: { value: e.mn }
                        }),
                        t.c.setGroupProperty(PropertyInterface('Color', n)),
                        t.o.setGroupProperty(PropertyInterface('Opacity', n)),
                        r
                    );
                }
                function i(e, t, n) {
                    function r(e) {
                        return 'Start Point' === e || 'start point' === e ? r.startPoint : 'End Point' === e || 'end point' === e ? r.endPoint : 'Opacity' === e || 'opacity' === e ? r.opacity : null;
                    }
                    return (
                        Object.defineProperties(r, {
                            startPoint: { get: ExpressionPropertyInterface(t.s) },
                            endPoint: { get: ExpressionPropertyInterface(t.e) },
                            opacity: { get: ExpressionPropertyInterface(t.o) },
                            type: {
                                get: function () {
                                    return 'a';
                                }
                            },
                            _name: { value: e.nm },
                            mn: { value: e.mn }
                        }),
                        t.s.setGroupProperty(PropertyInterface('Start Point', n)),
                        t.e.setGroupProperty(PropertyInterface('End Point', n)),
                        t.o.setGroupProperty(PropertyInterface('Opacity', n)),
                        r
                    );
                }
                function a() {
                    return function () {
                        return null;
                    };
                }
                function o(e, t, n) {
                    var r,
                        i = propertyGroupFactory(c, n),
                        a = propertyGroupFactory(l, i);
                    function o(n) {
                        Object.defineProperty(l, e.d[n].nm, { get: ExpressionPropertyInterface(t.d.dataProps[n].p) });
                    }
                    var s = e.d ? e.d.length : 0,
                        l = {};
                    for (r = 0; r < s; r += 1) o(r), t.d.dataProps[r].p.setGroupProperty(a);
                    function c(e) {
                        return 'Color' === e || 'color' === e ? c.color : 'Opacity' === e || 'opacity' === e ? c.opacity : 'Stroke Width' === e || 'stroke width' === e ? c.strokeWidth : null;
                    }
                    return (
                        Object.defineProperties(c, {
                            color: { get: ExpressionPropertyInterface(t.c) },
                            opacity: { get: ExpressionPropertyInterface(t.o) },
                            strokeWidth: { get: ExpressionPropertyInterface(t.w) },
                            dash: {
                                get: function () {
                                    return l;
                                }
                            },
                            _name: { value: e.nm },
                            mn: { value: e.mn }
                        }),
                        t.c.setGroupProperty(PropertyInterface('Color', i)),
                        t.o.setGroupProperty(PropertyInterface('Opacity', i)),
                        t.w.setGroupProperty(PropertyInterface('Stroke Width', i)),
                        c
                    );
                }
                function s(e, t, n) {
                    function r(t) {
                        return t === e.e.ix || 'End' === t || 'end' === t ? r.end : t === e.s.ix ? r.start : t === e.o.ix ? r.offset : null;
                    }
                    var i = propertyGroupFactory(r, n);
                    return (
                        (r.propertyIndex = e.ix),
                        t.s.setGroupProperty(PropertyInterface('Start', i)),
                        t.e.setGroupProperty(PropertyInterface('End', i)),
                        t.o.setGroupProperty(PropertyInterface('Offset', i)),
                        (r.propertyIndex = e.ix),
                        (r.propertyGroup = n),
                        Object.defineProperties(r, {
                            start: { get: ExpressionPropertyInterface(t.s) },
                            end: { get: ExpressionPropertyInterface(t.e) },
                            offset: { get: ExpressionPropertyInterface(t.o) },
                            _name: { value: e.nm }
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function l(e, t, n) {
                    function r(t) {
                        return e.a.ix === t || 'Anchor Point' === t ? r.anchorPoint : e.o.ix === t || 'Opacity' === t ? r.opacity : e.p.ix === t || 'Position' === t ? r.position : e.r.ix === t || 'Rotation' === t || 'ADBE Vector Rotation' === t ? r.rotation : e.s.ix === t || 'Scale' === t ? r.scale : (e.sk && e.sk.ix === t) || 'Skew' === t ? r.skew : (e.sa && e.sa.ix === t) || 'Skew Axis' === t ? r.skewAxis : null;
                    }
                    var i = propertyGroupFactory(r, n);
                    return (
                        t.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', i)),
                        t.transform.mProps.p.setGroupProperty(PropertyInterface('Position', i)),
                        t.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', i)),
                        t.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', i)),
                        t.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', i)),
                        t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', i)), t.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', i))),
                        t.transform.op.setGroupProperty(PropertyInterface('Opacity', i)),
                        Object.defineProperties(r, {
                            opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) },
                            position: { get: ExpressionPropertyInterface(t.transform.mProps.p) },
                            anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) },
                            scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) },
                            rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) },
                            skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) },
                            skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) },
                            _name: { value: e.nm }
                        }),
                        (r.ty = 'tr'),
                        (r.mn = e.mn),
                        (r.propertyGroup = n),
                        r
                    );
                }
                function c(e, t, n) {
                    function r(t) {
                        return e.p.ix === t ? r.position : e.s.ix === t ? r.size : null;
                    }
                    var i = propertyGroupFactory(r, n);
                    r.propertyIndex = e.ix;
                    var a = 'tm' === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        a.s.setGroupProperty(PropertyInterface('Size', i)),
                        a.p.setGroupProperty(PropertyInterface('Position', i)),
                        Object.defineProperties(r, {
                            size: { get: ExpressionPropertyInterface(a.s) },
                            position: { get: ExpressionPropertyInterface(a.p) },
                            _name: { value: e.nm }
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function u(e, t, n) {
                    function r(t) {
                        return e.p.ix === t ? r.position : e.r.ix === t ? r.rotation : e.pt.ix === t ? r.points : e.or.ix === t || 'ADBE Vector Star Outer Radius' === t ? r.outerRadius : e.os.ix === t ? r.outerRoundness : e.ir && (e.ir.ix === t || 'ADBE Vector Star Inner Radius' === t) ? r.innerRadius : e.is && e.is.ix === t ? r.innerRoundness : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        a = 'tm' === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        (r.propertyIndex = e.ix),
                        a.or.setGroupProperty(PropertyInterface('Outer Radius', i)),
                        a.os.setGroupProperty(PropertyInterface('Outer Roundness', i)),
                        a.pt.setGroupProperty(PropertyInterface('Points', i)),
                        a.p.setGroupProperty(PropertyInterface('Position', i)),
                        a.r.setGroupProperty(PropertyInterface('Rotation', i)),
                        e.ir && (a.ir.setGroupProperty(PropertyInterface('Inner Radius', i)), a.is.setGroupProperty(PropertyInterface('Inner Roundness', i))),
                        Object.defineProperties(r, {
                            position: { get: ExpressionPropertyInterface(a.p) },
                            rotation: { get: ExpressionPropertyInterface(a.r) },
                            points: { get: ExpressionPropertyInterface(a.pt) },
                            outerRadius: { get: ExpressionPropertyInterface(a.or) },
                            outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                            innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                            innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                            _name: { value: e.nm }
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function d(e, t, n) {
                    function r(t) {
                        return e.p.ix === t ? r.position : e.r.ix === t ? r.roundness : e.s.ix === t || 'Size' === t || 'ADBE Vector Rect Size' === t ? r.size : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        a = 'tm' === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        (r.propertyIndex = e.ix),
                        a.p.setGroupProperty(PropertyInterface('Position', i)),
                        a.s.setGroupProperty(PropertyInterface('Size', i)),
                        a.r.setGroupProperty(PropertyInterface('Rotation', i)),
                        Object.defineProperties(r, {
                            position: { get: ExpressionPropertyInterface(a.p) },
                            roundness: { get: ExpressionPropertyInterface(a.r) },
                            size: { get: ExpressionPropertyInterface(a.s) },
                            _name: { value: e.nm }
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function f(e, t, n) {
                    function r(t) {
                        return e.r.ix === t || 'Round Corners 1' === t ? r.radius : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        a = t;
                    return (
                        (r.propertyIndex = e.ix),
                        a.rd.setGroupProperty(PropertyInterface('Radius', i)),
                        Object.defineProperties(r, {
                            radius: { get: ExpressionPropertyInterface(a.rd) },
                            _name: { value: e.nm }
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                function _(e, t, n) {
                    function r(t) {
                        return e.c.ix === t || 'Copies' === t ? r.copies : e.o.ix === t || 'Offset' === t ? r.offset : null;
                    }
                    var i = propertyGroupFactory(r, n),
                        a = t;
                    return (
                        (r.propertyIndex = e.ix),
                        a.c.setGroupProperty(PropertyInterface('Copies', i)),
                        a.o.setGroupProperty(PropertyInterface('Offset', i)),
                        Object.defineProperties(r, {
                            copies: { get: ExpressionPropertyInterface(a.c) },
                            offset: { get: ExpressionPropertyInterface(a.o) },
                            _name: { value: e.nm }
                        }),
                        (r.mn = e.mn),
                        r
                    );
                }
                return function (t, n, r) {
                    var i;
                    function a(e) {
                        if ('number' == typeof e) return 0 === (e = void 0 === e ? 1 : e) ? r : i[e - 1];
                        for (var t = 0, n = i.length; t < n; ) {
                            if (i[t]._name === e) return i[t];
                            t += 1;
                        }
                        return null;
                    }
                    return (
                        (a.propertyGroup = propertyGroupFactory(a, function () {
                            return r;
                        })),
                        (i = e(t, n, a.propertyGroup)),
                        (a.numProperties = i.length),
                        (a._name = 'Contents'),
                        a
                    );
                };
            })(),
            TextExpressionInterface = (function () {
                return function (e) {
                    var t;
                    function n(e) {
                        return 'ADBE Text Document' === e ? n.sourceText : null;
                    }
                    return (
                        Object.defineProperty(n, 'sourceText', {
                            get: function () {
                                e.textProperty.getValue();
                                var n = e.textProperty.currentData.t;
                                return (
                                    (t && n === t.value) ||
                                        (((t = new String(n)).value = n || new String(n)),
                                        Object.defineProperty(t, 'style', {
                                            get: function () {
                                                return { fillColor: e.textProperty.currentData.fc };
                                            }
                                        })),
                                    t
                                );
                            }
                        }),
                        n
                    );
                };
            })();
        function _typeof(e) {
            return (_typeof =
                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                      })(e);
        }
        var FootageInterface = (function () {
                var e = function (e) {
                        var t = '',
                            n = e.getFootageData();
                        function r(e) {
                            if (n[e]) return ((t = e), (n = n[e]), 'object' === _typeof(n)) ? r : n;
                            var i = e.indexOf(t);
                            return -1 !== i ? (((n = n[parseInt(e.substr(i + t.length), 10)]), 'object' === _typeof(n)) ? r : n) : '';
                        }
                        return function () {
                            return (t = ''), (n = e.getFootageData()), r;
                        };
                    },
                    t = function (t) {
                        function n(e) {
                            return 'Outline' === e ? n.outlineInterface() : null;
                        }
                        return (n._name = 'Outline'), (n.outlineInterface = e(t)), n;
                    };
                return function (e) {
                    function n(e) {
                        return 'Data' === e ? n.dataInterface : null;
                    }
                    return (n._name = 'Data'), (n.dataInterface = t(e)), n;
                };
            })(),
            interfaces = {
                layer: LayerExpressionInterface,
                effects: EffectsExpressionInterface,
                comp: CompExpressionInterface,
                shape: ShapeExpressionInterface,
                text: TextExpressionInterface,
                footage: FootageInterface
            };
        function getInterface(e) {
            return interfaces[e] || null;
        }
        var expressionHelpers = (function () {
            return {
                searchExpressions: function (e, t, n) {
                    t.x && ((n.k = !0), (n.x = !0), (n.initiateExpression = ExpressionManager.initiateExpression), n.effectsSequence.push(n.initiateExpression(e, t, n).bind(n)));
                },
                getSpeedAtTime: function (e) {
                    var t,
                        n = -0.01,
                        r = this.getValueAtTime(e),
                        i = this.getValueAtTime(e + n),
                        a = 0;
                    if (r.length) {
                        for (t = 0; t < r.length; t += 1) a += Math.pow(i[t] - r[t], 2);
                        a = 100 * Math.sqrt(a);
                    } else a = 0;
                    return a;
                },
                getVelocityAtTime: function (e) {
                    if (void 0 !== this.vel) return this.vel;
                    var t,
                        n,
                        r = -0.001,
                        i = this.getValueAtTime(e),
                        a = this.getValueAtTime(e + r);
                    if (i.length) for (n = 0, t = createTypedArray('float32', i.length); n < i.length; n += 1) t[n] = (a[n] - i[n]) / r;
                    else t = (a - i) / r;
                    return t;
                },
                getValueAtTime: function (e) {
                    return (e *= this.elem.globalData.frameRate), (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && ((this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0), (this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime)), (this._cachingAtTime.lastFrame = e)), this._cachingAtTime.value;
                },
                getStaticValueAtTime: function () {
                    return this.pv;
                },
                setGroupProperty: function (e) {
                    this.propertyGroup = e;
                }
            };
        })();
        function addPropertyDecorator() {
            function e(e, t, n) {
                if (!this.k || !this.keyframes) return this.pv;
                e = e ? e.toLowerCase() : '';
                var r,
                    i,
                    a,
                    o,
                    s,
                    l = this.comp.renderedFrame,
                    c = this.keyframes,
                    u = c[c.length - 1].t;
                if (l <= u) return this.pv;
                if ((n ? ((r = t ? Math.abs(u - this.elem.comp.globalData.frameRate * t) : Math.max(0, u - this.elem.data.ip)), (i = u - r)) : ((!t || t > c.length - 1) && (t = c.length - 1), (r = u - (i = c[c.length - 1 - t].t))), 'pingpong' === e)) {
                    if (Math.floor((l - i) / r) % 2 != 0) return this.getValueAtTime((r - ((l - i) % r) + i) / this.comp.globalData.frameRate, 0);
                } else if ('offset' === e) {
                    var d = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime((((l - i) % r) + i) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((l - i) / r);
                    if (this.pv.length) {
                        for (a = 0, o = (s = Array(d.length)).length; a < o; a += 1) s[a] = (f[a] - d[a]) * p + _[a];
                        return s;
                    }
                    return (f - d) * p + _;
                } else if ('continue' === e) {
                    var h = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                        m = this.getValueAtTime((u - 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (a = 0, o = (s = Array(h.length)).length; a < o; a += 1) s[a] = h[a] + ((h[a] - m[a]) * ((l - u) / this.comp.globalData.frameRate)) / 0.0005;
                        return s;
                    }
                    return h + ((l - u) / 0.001) * (h - m);
                }
                return this.getValueAtTime((((l - i) % r) + i) / this.comp.globalData.frameRate, 0);
            }
            function t(e, t, n) {
                if (!this.k) return this.pv;
                e = e ? e.toLowerCase() : '';
                var r,
                    i,
                    a,
                    o,
                    s,
                    l = this.comp.renderedFrame,
                    c = this.keyframes,
                    u = c[0].t;
                if (l >= u) return this.pv;
                if ((n ? ((r = t ? Math.abs(this.elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - u)), (i = u + r)) : ((!t || t > c.length - 1) && (t = c.length - 1), (r = (i = c[t].t) - u)), 'pingpong' === e)) {
                    if (Math.floor((u - l) / r) % 2 == 0) return this.getValueAtTime((((u - l) % r) + u) / this.comp.globalData.frameRate, 0);
                } else if ('offset' === e) {
                    var d = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime((r - ((u - l) % r) + u) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((u - l) / r) + 1;
                    if (this.pv.length) {
                        for (a = 0, o = (s = Array(d.length)).length; a < o; a += 1) s[a] = _[a] - (f[a] - d[a]) * p;
                        return s;
                    }
                    return _ - (f - d) * p;
                } else if ('continue' === e) {
                    var h = this.getValueAtTime(u / this.comp.globalData.frameRate, 0),
                        m = this.getValueAtTime((u + 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (a = 0, o = (s = Array(h.length)).length; a < o; a += 1) s[a] = h[a] + ((h[a] - m[a]) * (u - l)) / 0.001;
                        return s;
                    }
                    return h + ((h - m) * (u - l)) / 0.001;
                }
                return this.getValueAtTime((r - (((u - l) % r) + u)) / this.comp.globalData.frameRate, 0);
            }
            function n(e, t) {
                if (!this.k || ((e = 0.5 * (e || 0.4)), (t = Math.floor(t || 5)) <= 1)) return this.pv;
                var n,
                    r,
                    i = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    a = i - e,
                    o = i + e,
                    s = t > 1 ? (o - a) / (t - 1) : 1,
                    l = 0,
                    c = 0;
                for (n = this.pv.length ? createTypedArray('float32', this.pv.length) : 0; l < t; ) {
                    if (((r = this.getValueAtTime(a + l * s)), this.pv.length)) for (c = 0; c < this.pv.length; c += 1) n[c] += r[c];
                    else n += r;
                    l += 1;
                }
                if (this.pv.length) for (c = 0; c < this.pv.length; c += 1) n[c] /= t;
                else n /= t;
                return n;
            }
            function r(e) {
                this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
                var t = this._transformCachingAtTime.v;
                if ((t.cloneFromProps(this.pre.props), this.appliedTransformations < 1)) {
                    var n = this.a.getValueAtTime(e);
                    t.translate(-n[0] * this.a.mult, -n[1] * this.a.mult, n[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var r = this.s.getValueAtTime(e);
                    t.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var i = this.sk.getValueAtTime(e),
                        a = this.sa.getValueAtTime(e);
                    t.skewFromAxis(-i * this.sk.mult, a * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var o = this.r.getValueAtTime(e);
                    t.rotate(-o * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var s = this.rz.getValueAtTime(e),
                        l = this.ry.getValueAtTime(e),
                        c = this.rx.getValueAtTime(e),
                        u = this.or.getValueAtTime(e);
                    t.rotateZ(-s * this.rz.mult)
                        .rotateY(l * this.ry.mult)
                        .rotateX(c * this.rx.mult)
                        .rotateZ(-u[2] * this.or.mult)
                        .rotateY(u[1] * this.or.mult)
                        .rotateX(u[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var d = this.px.getValueAtTime(e),
                        f = this.py.getValueAtTime(e);
                    if (this.data.p.z) {
                        var _ = this.pz.getValueAtTime(e);
                        t.translate(d * this.px.mult, f * this.py.mult, -_ * this.pz.mult);
                    } else t.translate(d * this.px.mult, f * this.py.mult, 0);
                } else {
                    var p = this.p.getValueAtTime(e);
                    t.translate(p[0] * this.p.mult, p[1] * this.p.mult, -p[2] * this.p.mult);
                }
                return t;
            }
            function i() {
                return this.v.clone(new Matrix());
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (e, t, n) {
                var o = a(e, t, n);
                return o.dynamicProperties.length ? (o.getValueAtTime = r.bind(o)) : (o.getValueAtTime = i.bind(o)), (o.setGroupProperty = expressionHelpers.setGroupProperty), o;
            };
            var o = PropertyFactory.getProp;
            function s(e) {
                return (
                    this._cachingAtTime ||
                        (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }),
                    (e *= this.elem.globalData.frameRate),
                    (e -= this.offsetTime) !== this._cachingAtTime.lastTime && ((this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0), (this._cachingAtTime.lastTime = e), this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                    this._cachingAtTime.shapeValue
                );
            }
            PropertyFactory.getProp = function (r, i, a, s, l) {
                var c = o(r, i, a, s, l);
                c.kf ? (c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c)) : (c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c)), (c.setGroupProperty = expressionHelpers.setGroupProperty), (c.loopOut = e), (c.loopIn = t), (c.smooth = n), (c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c)), (c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c)), (c.numKeys = 1 === i.a ? i.k.length : 0), (c.propertyIndex = i.ix);
                var u = 0;
                return (
                    0 !== a && (u = createTypedArray('float32', 1 === i.a ? i.k[0].s.length : i.k.length)),
                    (c._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: u
                    }),
                    expressionHelpers.searchExpressions(r, i, c),
                    c.k && l.addDynamicProperty(c),
                    c
                );
            };
            var l = ShapePropertyFactory.getConstructorFunction(),
                c = ShapePropertyFactory.getKeyframedConstructorFunction();
            function u() {}
            (u.prototype = {
                vertices: function (e, t) {
                    this.k && this.getValue();
                    var n,
                        r = this.v;
                    void 0 !== t && (r = this.getValueAtTime(t, 0));
                    var i = r._length,
                        a = r[e],
                        o = r.v,
                        s = createSizedArray(i);
                    for (n = 0; n < i; n += 1) 'i' === e || 'o' === e ? (s[n] = [a[n][0] - o[n][0], a[n][1] - o[n][1]]) : (s[n] = [a[n][0], a[n][1]]);
                    return s;
                },
                points: function (e) {
                    return this.vertices('v', e);
                },
                inTangents: function (e) {
                    return this.vertices('i', e);
                },
                outTangents: function (e) {
                    return this.vertices('o', e);
                },
                isClosed: function () {
                    return this.v.c;
                },
                pointOnPath: function (e, t) {
                    var n,
                        r = this.v;
                    void 0 !== t && (r = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                    for (var i = this._segmentsLength, a = i.lengths, o = i.totalLength * e, s = 0, l = a.length, c = 0; s < l; ) {
                        if (c + a[s].addedLength > o) {
                            var u = s,
                                d = r.c && s === l - 1 ? 0 : s + 1,
                                f = (o - c) / a[s].addedLength;
                            n = bez.getPointInSegment(r.v[u], r.v[d], r.o[u], r.i[d], f, a[s]);
                            break;
                        }
                        (c += a[s].addedLength), (s += 1);
                    }
                    return n || (n = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), n;
                },
                vectorOnPath: function (e, t, n) {
                    1 == e ? (e = this.v.c) : 0 == e && (e = 0.999);
                    var r = this.pointOnPath(e, t),
                        i = this.pointOnPath(e + 0.001, t),
                        a = i[0] - r[0],
                        o = i[1] - r[1],
                        s = Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
                    return 0 === s ? [0, 0] : 'tangent' === n ? [a / s, o / s] : [-o / s, a / s];
                },
                tangentOnPath: function (e, t) {
                    return this.vectorOnPath(e, t, 'tangent');
                },
                normalOnPath: function (e, t) {
                    return this.vectorOnPath(e, t, 'normal');
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }),
                extendPrototype([u], l),
                extendPrototype([u], c),
                (c.prototype.getValueAtTime = s),
                (c.prototype.initiateExpression = ExpressionManager.initiateExpression);
            var d = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (e, t, n, r, i) {
                var a = d(e, t, n, r, i);
                return (a.propertyIndex = t.ix), (a.lock = !1), 3 === n ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === n && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a;
            };
        }
        function initialize$1() {
            addPropertyDecorator();
        }
        function addDecorator() {
            function e() {
                return this.data.d.x ? ((this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this)), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
            }
            (TextProperty.prototype.getExpressionValue = function (e, t) {
                var n = this.calculateExpression(t);
                if (e.t !== n) {
                    var r = {};
                    return this.copyData(r, e), (r.t = n.toString()), (r.__complete = !1), r;
                }
                return e;
            }),
                (TextProperty.prototype.searchProperty = function () {
                    var e = this.searchKeyframes(),
                        t = this.searchExpressions();
                    return (this.kf = e || t), this.kf;
                }),
                (TextProperty.prototype.searchExpressions = e);
        }
        function initialize() {
            addDecorator();
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function (e, t) {
                var n,
                    r,
                    i = createNS('feMerge');
                for (i.setAttribute('result', e), r = 0; r < t.length; r += 1) (n = createNS('feMergeNode')).setAttribute('in', t[r]), i.appendChild(n), i.appendChild(n);
                return i;
            }
        };
        var linearFilterValue = '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0';
        function SVGTintFilter(e, t, n, r, i) {
            this.filterManager = t;
            var a = createNS('feColorMatrix');
            a.setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'linearRGB'), a.setAttribute('values', linearFilterValue + ' 1 0'), (this.linearFilter = a), a.setAttribute('result', r + '_tint_1'), e.appendChild(a), (a = createNS('feColorMatrix')).setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), a.setAttribute('result', r + '_tint_2'), e.appendChild(a), (this.matrixFilter = a);
            var o = this.createMergeNode(r, [i, r + '_tint_1', r + '_tint_2']);
            e.appendChild(o);
        }
        function SVGFillFilter(e, t, n, r) {
            this.filterManager = t;
            var i = createNS('feColorMatrix');
            i.setAttribute('type', 'matrix'), i.setAttribute('color-interpolation-filters', 'sRGB'), i.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), i.setAttribute('result', r), e.appendChild(i), (this.matrixFilter = i);
        }
        function SVGStrokeEffect(e, t, n) {
            (this.initialized = !1), (this.filterManager = t), (this.elem = n), (this.paths = []);
        }
        function SVGTritoneFilter(e, t, n, r) {
            this.filterManager = t;
            var i = createNS('feColorMatrix');
            i.setAttribute('type', 'matrix'), i.setAttribute('color-interpolation-filters', 'linearRGB'), i.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'), e.appendChild(i);
            var a = createNS('feComponentTransfer');
            a.setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('result', r), (this.matrixFilter = a);
            var o = createNS('feFuncR');
            o.setAttribute('type', 'table'), a.appendChild(o), (this.feFuncR = o);
            var s = createNS('feFuncG');
            s.setAttribute('type', 'table'), a.appendChild(s), (this.feFuncG = s);
            var l = createNS('feFuncB');
            l.setAttribute('type', 'table'), a.appendChild(l), (this.feFuncB = l), e.appendChild(a);
        }
        function SVGProLevelsFilter(e, t, n, r) {
            this.filterManager = t;
            var i = this.filterManager.effectElements,
                a = createNS('feComponentTransfer');
            (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc('feFuncR', a)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc('feFuncG', a)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc('feFuncB', a)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc('feFuncA', a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute('color-interpolation-filters', 'sRGB'), e.appendChild(a)), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && ((a = createNS('feComponentTransfer')).setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('result', r), e.appendChild(a), (this.feFuncRComposed = this.createFeFunc('feFuncR', a)), (this.feFuncGComposed = this.createFeFunc('feFuncG', a)), (this.feFuncBComposed = this.createFeFunc('feFuncB', a)));
        }
        function SVGDropShadowEffect(e, t, n, r, i) {
            var a = t.container.globalData.renderConfig.filterSize,
                o = t.data.fs || a;
            e.setAttribute('x', o.x || a.x), e.setAttribute('y', o.y || a.y), e.setAttribute('width', o.width || a.width), e.setAttribute('height', o.height || a.height), (this.filterManager = t);
            var s = createNS('feGaussianBlur');
            s.setAttribute('in', 'SourceAlpha'), s.setAttribute('result', r + '_drop_shadow_1'), s.setAttribute('stdDeviation', '0'), (this.feGaussianBlur = s), e.appendChild(s);
            var l = createNS('feOffset');
            l.setAttribute('dx', '25'), l.setAttribute('dy', '0'), l.setAttribute('in', r + '_drop_shadow_1'), l.setAttribute('result', r + '_drop_shadow_2'), (this.feOffset = l), e.appendChild(l);
            var c = createNS('feFlood');
            c.setAttribute('flood-color', '#00ff00'), c.setAttribute('flood-opacity', '1'), c.setAttribute('result', r + '_drop_shadow_3'), (this.feFlood = c), e.appendChild(c);
            var u = createNS('feComposite');
            u.setAttribute('in', r + '_drop_shadow_3'), u.setAttribute('in2', r + '_drop_shadow_2'), u.setAttribute('operator', 'in'), u.setAttribute('result', r + '_drop_shadow_4'), e.appendChild(u);
            var d = this.createMergeNode(r, [r + '_drop_shadow_4', i]);
            e.appendChild(d);
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter),
            (SVGTintFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        n = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute('values', linearFilterValue + ' ' + r + ' 0'), this.matrixFilter.setAttribute('values', n[0] - t[0] + ' 0 0 0 ' + t[0] + ' ' + (n[1] - t[1]) + ' 0 0 0 ' + t[1] + ' ' + (n[2] - t[2]) + ' 0 0 0 ' + t[2] + ' 0 0 0 1 0');
                }
            }),
            (SVGFillFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[2].p.v,
                        n = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute('values', '0 0 0 0 ' + t[0] + ' 0 0 0 0 ' + t[1] + ' 0 0 0 0 ' + t[2] + ' 0 0 0 ' + n + ' 0');
                }
            }),
            (SVGStrokeEffect.prototype.initialize = function () {
                var e,
                    t,
                    n,
                    r,
                    i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? ((r = this.elem.maskManager.masksProperties.length), (n = 0)) : (r = (n = this.filterManager.effectElements[0].p.v - 1) + 1), (t = createNS('g')).setAttribute('fill', 'none'), t.setAttribute('stroke-linecap', 'round'), t.setAttribute('stroke-dashoffset', 1); n < r; n += 1)
                    (e = createNS('path')),
                        t.appendChild(e),
                        this.paths.push({
                            p: e,
                            m: n
                        });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var a = createNS('mask'),
                        o = createElementID();
                    a.setAttribute('id', o), a.setAttribute('mask-type', 'alpha'), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
                    var s = createNS('g');
                    for (s.setAttribute('mask', 'url(' + getLocationHref() + '#' + o + ')'); i[0]; ) s.appendChild(i[0]);
                    this.elem.layerElement.appendChild(s), (this.masker = a), t.setAttribute('stroke', '#fff');
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v) for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length; ) this.elem.layerElement.removeChild(i[0]);
                    this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute('mask'), t.setAttribute('stroke', '#fff');
                }
                (this.initialized = !0), (this.pathMasker = t);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function (e) {
                this.initialized || this.initialize();
                var t = this.paths.length;
                for (n = 0; n < t; n += 1)
                    if (-1 !== this.paths[n].m && ((r = this.elem.maskManager.viewData[this.paths[n].m]), (i = this.paths[n].p), (e || this.filterManager._mdf || r.prop._mdf) && i.setAttribute('d', r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var n,
                                r,
                                i,
                                a,
                                o,
                                s = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                l = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                c = i.getTotalLength();
                            a = '0 0 0 ' + c * s + ' ';
                            var u = Math.floor((c * (l - s)) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01));
                            for (o = 0; o < u; o += 1) a += '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
                            a += '0 ' + 10 * c + ' 0 0';
                        } else a = '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
                        i.setAttribute('stroke-dasharray', a);
                    }
                if (((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute('stroke-width', 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf))) {
                    var d = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(255 * d[0]) + ',' + bmFloor(255 * d[1]) + ',' + bmFloor(255 * d[2]) + ')');
                }
            }),
            (SVGTritoneFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        n = this.filterManager.effectElements[1].p.v,
                        r = this.filterManager.effectElements[2].p.v,
                        i = r[0] + ' ' + n[0] + ' ' + t[0],
                        a = r[1] + ' ' + n[1] + ' ' + t[1],
                        o = r[2] + ' ' + n[2] + ' ' + t[2];
                    this.feFuncR.setAttribute('tableValues', i), this.feFuncG.setAttribute('tableValues', a), this.feFuncB.setAttribute('tableValues', o);
                }
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
                var n = createNS(e);
                return n.setAttribute('type', 'table'), t.appendChild(n), n;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function (e, t, n, r, i) {
                for (var a, o, s = 0, l = 256, c = Math.min(e, t), u = Math.max(e, t), d = Array.call(null, { length: 256 }), f = 0, _ = i - r, p = t - e; s <= 256; ) (o = (a = s / 256) <= c ? (p < 0 ? i : r) : a >= u ? (p < 0 ? r : i) : r + _ * Math.pow((a - e) / p, 1 / n)), (d[f] = o), (f += 1), (s += 256 / (l - 1));
                return d.join(' ');
            }),
            (SVGProLevelsFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t,
                        n = this.filterManager.effectElements;
                    this.feFuncRComposed && (e || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) && ((t = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v)), this.feFuncRComposed.setAttribute('tableValues', t), this.feFuncGComposed.setAttribute('tableValues', t), this.feFuncBComposed.setAttribute('tableValues', t)), this.feFuncR && (e || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) && ((t = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v)), this.feFuncR.setAttribute('tableValues', t)), this.feFuncG && (e || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) && ((t = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v)), this.feFuncG.setAttribute('tableValues', t)), this.feFuncB && (e || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) && ((t = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v)), this.feFuncB.setAttribute('tableValues', t)), this.feFuncA && (e || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) && ((t = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v)), this.feFuncA.setAttribute('tableValues', t));
                }
            }),
            extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
            (SVGDropShadowEffect.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    if (((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf)) {
                        var t = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])));
                    }
                    if (((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf)) {
                        var n = this.filterManager.effectElements[3].p.v,
                            r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            i = n * Math.cos(r),
                            a = n * Math.sin(r);
                        this.feOffset.setAttribute('dx', i), this.feOffset.setAttribute('dy', a);
                    }
                }
            });
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(e, t, n) {
            (this.initialized = !1), (this.filterManager = t), (this.filterElem = e), (this.elem = n), (n.matteElement = createNS('g')), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), (n.baseElement = n.matteElement);
        }
        function SVGGaussianBlurEffect(e, t, n, r) {
            e.setAttribute('x', '-100%'), e.setAttribute('y', '-100%'), e.setAttribute('width', '300%'), e.setAttribute('height', '300%'), (this.filterManager = t);
            var i = createNS('feGaussianBlur');
            i.setAttribute('result', r), e.appendChild(i), (this.feGaussianBlur = i);
        }
        function TransformEffect() {}
        function SVGTransformEffect(e, t) {
            this.init(t);
        }
        function CVTransformEffect(e) {
            this.init(e);
        }
        return (
            (SVGMatte3Effect.prototype.findSymbol = function (e) {
                for (var t = 0, n = _svgMatteSymbols.length; t < n; ) {
                    if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
                    t += 1;
                }
                return null;
            }),
            (SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
                var n,
                    r = e.layerElement.parentNode;
                if (r) {
                    for (var i = r.children, a = 0, o = i.length; a < o && i[a] !== e.layerElement; ) a += 1;
                    a <= o - 2 && (n = i[a + 1]);
                    var s = createNS('use');
                    s.setAttribute('href', '#' + t), n ? r.insertBefore(s, n) : r.appendChild(s);
                }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
                if (!this.findSymbol(t)) {
                    var n = createElementID(),
                        r = createNS('mask');
                    r.setAttribute('id', t.layerId), r.setAttribute('mask-type', 'alpha'), _svgMatteSymbols.push(t);
                    var i = e.globalData.defs;
                    i.appendChild(r);
                    var a = createNS('symbol');
                    a.setAttribute('id', n), this.replaceInParent(t, n), a.appendChild(t.layerElement), i.appendChild(a);
                    var o = createNS('use');
                    o.setAttribute('href', '#' + n), r.appendChild(o), (t.data.hd = !1), t.show();
                }
                e.setMatte(t.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
                for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, n = 0, r = t.length; n < r; ) t[n] && t[n].data.ind === e && this.setElementAsMask(this.elem, t[n]), (n += 1);
                this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
                this.initialized || this.initialize();
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = 0.3,
                        n = this.filterManager.effectElements[0].p.v * t,
                        r = this.filterManager.effectElements[1].p.v,
                        i = 3 == r ? 0 : n,
                        a = 2 == r ? 0 : n;
                    this.feGaussianBlur.setAttribute('stdDeviation', i + ' ' + a);
                    var o = 1 == this.filterManager.effectElements[2].p.v ? 'wrap' : 'duplicate';
                    this.feGaussianBlur.setAttribute('edgeMode', o);
                }
            }),
            (TransformEffect.prototype.init = function (e) {
                (this.effectsManager = e), (this.type = effectTypes.TRANSFORM_EFFECT), (this.matrix = new Matrix()), (this.opacity = -1), (this._mdf = !1), (this._opMdf = !1);
            }),
            (TransformEffect.prototype.renderFrame = function (e) {
                if (((this._opMdf = !1), (this._mdf = !1), e || this.effectsManager._mdf)) {
                    var t = this.effectsManager.effectElements,
                        n = t[0].p.v,
                        r = t[1].p.v,
                        i = 1 === t[2].p.v,
                        a = t[3].p.v,
                        o = i ? a : t[4].p.v,
                        s = t[5].p.v,
                        l = t[6].p.v,
                        c = t[7].p.v;
                    this.matrix.reset(), this.matrix.translate(-n[0], -n[1], n[2]), this.matrix.scale(0.01 * o, 0.01 * a, 1), this.matrix.rotate(-c * degToRads), this.matrix.skewFromAxis(-s * degToRads, (l + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), (this._mdf = !0), this.opacity !== t[8].p.v && ((this.opacity = t[8].p.v), (this._opMdf = !0));
                }
            }),
            extendPrototype([TransformEffect], SVGTransformEffect),
            extendPrototype([TransformEffect], CVTransformEffect),
            registerRenderer('canvas', CanvasRenderer),
            registerRenderer('html', HybridRenderer),
            registerRenderer('svg', SVGRenderer),
            ShapeModifiers.registerModifier('tm', TrimModifier),
            ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier),
            ShapeModifiers.registerModifier('rp', RepeaterModifier),
            ShapeModifiers.registerModifier('rd', RoundCornersModifier),
            ShapeModifiers.registerModifier('zz', ZigZagModifier),
            ShapeModifiers.registerModifier('op', OffsetPathModifier),
            setExpressionsPlugin(Expressions),
            setExpressionInterfaces(getInterface),
            initialize$1(),
            initialize(),
            registerEffect$1(20, SVGTintFilter, !0),
            registerEffect$1(21, SVGFillFilter, !0),
            registerEffect$1(22, SVGStrokeEffect, !1),
            registerEffect$1(23, SVGTritoneFilter, !0),
            registerEffect$1(24, SVGProLevelsFilter, !0),
            registerEffect$1(25, SVGDropShadowEffect, !0),
            registerEffect$1(28, SVGMatte3Effect, !1),
            registerEffect$1(29, SVGGaussianBlurEffect, !0),
            registerEffect$1(35, SVGTransformEffect, !1),
            registerEffect(35, CVTransformEffect),
            lottie
        );
    });
