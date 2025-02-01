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
                i,
                r = e.length;
            for (n = 0; n < r; n += 1) for (var a in (i = e[n].prototype)) Object.prototype.hasOwnProperty.call(i, a) && (t.prototype[a] = i[a]);
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
                            for (e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
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
                        i = 0,
                        r = [];
                    switch (e) {
                        case 'int16':
                        case 'uint8c':
                            n = 1;
                            break;
                        default:
                            n = 1.1;
                    }
                    for (i = 0; i < t; i += 1) r.push(n);
                    return r;
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
                        i = e.length;
                    for (t = 0; t < i; t += 1) n[t] = Math.abs(e[t]);
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
        function BMEnterFrameEvent(e, t, n, i) {
            (this.type = e), (this.currentTime = t), (this.totalTime = n), (this.direction = i < 0 ? -1 : 1);
        }
        function BMCompleteEvent(e, t) {
            (this.type = e), (this.direction = t < 0 ? -1 : 1);
        }
        function BMCompleteLoopEvent(e, t, n, i) {
            (this.type = e), (this.currentLoop = n), (this.totalLoops = t), (this.direction = i < 0 ? -1 : 1);
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
            var i, r, a, s, o, l, u, c;
            switch (((s = Math.floor(6 * e)), (o = 6 * e - s), (l = n * (1 - t)), (u = n * (1 - o * t)), (c = n * (1 - (1 - o) * t)), s % 6)) {
                case 0:
                    (i = n), (r = c), (a = l);
                    break;
                case 1:
                    (i = u), (r = n), (a = l);
                    break;
                case 2:
                    (i = l), (r = n), (a = c);
                    break;
                case 3:
                    (i = l), (r = u), (a = n);
                    break;
                case 4:
                    (i = c), (r = l), (a = n);
                    break;
                case 5:
                    (i = n), (r = l), (a = u);
            }
            return [i, r, a];
        }
        function RGBtoHSV(e, t, n) {
            var i,
                r = Math.max(e, t, n),
                a = Math.min(e, t, n),
                s = r - a,
                o = 0 === r ? 0 : s / r,
                l = r / 255;
            switch (r) {
                case a:
                    i = 0;
                    break;
                case e:
                    i = (t - n + s * (t < n ? 6 : 0)) / (6 * s);
                    break;
                case t:
                    i = (n - e + 2 * s) / (6 * s);
                    break;
                case n:
                    i = (e - t + 4 * s) / (6 * s);
            }
            return [i, o, l];
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
                return function (e, t, i) {
                    return e < 0 && (e = 0), t < 0 && (t = 0), i < 0 && (i = 0), '#' + n[e] + n[t] + n[i];
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
                    i = [],
                    r = {
                        onmessage: function () {},
                        postMessage: function (t) {
                            e({ data: t });
                        }
                    },
                    a = {
                        postMessage: function (e) {
                            r.onmessage({ data: e });
                        }
                    };
                function s(t) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var n = new Blob(['var _workerSelf = self; self.onmessage = ', t.toString()], { type: 'text/javascript' });
                        return new Worker(URL.createObjectURL(n));
                    }
                    return (e = t), r;
                }
                function o() {
                    t ||
                        ((t = s(function (e) {
                            function t() {
                                function e(t, n) {
                                    var s,
                                        o,
                                        l,
                                        u,
                                        c,
                                        d,
                                        f = t.length;
                                    for (o = 0; o < f; o += 1)
                                        if ('ks' in (s = t[o]) && !s.completed) {
                                            if (((s.completed = !0), s.hasMask)) {
                                                var p = s.masksProperties;
                                                for (l = 0, u = p.length; l < u; l += 1)
                                                    if (p[l].pt.k.i) a(p[l].pt.k);
                                                    else for (c = 0, d = p[l].pt.k.length; c < d; c += 1) p[l].pt.k[c].s && a(p[l].pt.k[c].s[0]), p[l].pt.k[c].e && a(p[l].pt.k[c].e[0]);
                                            }
                                            0 === s.ty ? ((s.layers = i(s.refId, n)), e(s.layers, n)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && _(s);
                                        }
                                }
                                function t(t, n) {
                                    if (t) {
                                        var r = 0,
                                            a = t.length;
                                        for (r = 0; r < a; r += 1) 1 === t[r].t && ((t[r].data.layers = i(t[r].data.refId, n)), e(t[r].data.layers, n));
                                    }
                                }
                                function n(e, t) {
                                    for (var n = 0, i = t.length; n < i; ) {
                                        if (t[n].id === e) return t[n];
                                        n += 1;
                                    }
                                    return null;
                                }
                                function i(e, t) {
                                    var i = n(e, t);
                                    return i ? (i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : ((i.layers.__used = !0), i.layers)) : null;
                                }
                                function r(e) {
                                    var t, n, i;
                                    for (t = e.length - 1; t >= 0; t -= 1)
                                        if ('sh' === e[t].ty) {
                                            if (e[t].ks.k.i) a(e[t].ks.k);
                                            else for (n = 0, i = e[t].ks.k.length; n < i; n += 1) e[t].ks.k[n].s && a(e[t].ks.k[n].s[0]), e[t].ks.k[n].e && a(e[t].ks.k[n].e[0]);
                                        } else 'gr' === e[t].ty && r(e[t].it);
                                }
                                function a(e) {
                                    var t,
                                        n = e.i.length;
                                    for (t = 0; t < n; t += 1) (e.i[t][0] += e.v[t][0]), (e.i[t][1] += e.v[t][1]), (e.o[t][0] += e.v[t][0]), (e.o[t][1] += e.v[t][1]);
                                }
                                function s(e, t) {
                                    var n = t ? t.split('.') : [100, 100, 100];
                                    return e[0] > n[0] || (!(n[0] > e[0]) && (e[1] > n[1] || (!(n[1] > e[1]) && (e[2] > n[2] || (!(n[2] > e[2]) && null)))));
                                }
                                var o = (function () {
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
                                                i = e.length;
                                            for (n = 0; n < i; n += 1) 5 === e[n].ty && t(e[n]);
                                        }
                                        return function (t) {
                                            if (s(e, t.v) && (n(t.layers), t.assets)) {
                                                var i,
                                                    r = t.assets.length;
                                                for (i = 0; i < r; i += 1) t.assets[i].layers && n(t.assets[i].layers);
                                            }
                                        };
                                    })(),
                                    l = (function () {
                                        var e = [4, 7, 99];
                                        return function (t) {
                                            if (t.chars && !s(e, t.v)) {
                                                var n,
                                                    i = t.chars.length;
                                                for (n = 0; n < i; n += 1) {
                                                    var a = t.chars[n];
                                                    a.data &&
                                                        a.data.shapes &&
                                                        (r(a.data.shapes),
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
                                    u = (function () {
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
                                                i = e.length;
                                            for (n = 0; n < i; n += 1) 5 === e[n].ty && t(e[n]);
                                        }
                                        return function (t) {
                                            if (s(e, t.v) && (n(t.layers), t.assets)) {
                                                var i,
                                                    r = t.assets.length;
                                                for (i = 0; i < r; i += 1) t.assets[i].layers && n(t.assets[i].layers);
                                            }
                                        };
                                    })(),
                                    c = (function () {
                                        var e = [4, 1, 9];
                                        function t(e) {
                                            var n,
                                                i,
                                                r,
                                                a = e.length;
                                            for (n = 0; n < a; n += 1)
                                                if ('gr' === e[n].ty) t(e[n].it);
                                                else if ('fl' === e[n].ty || 'st' === e[n].ty) {
                                                    if (e[n].c.k && e[n].c.k[0].i) for (i = 0, r = e[n].c.k.length; i < r; i += 1) e[n].c.k[i].s && ((e[n].c.k[i].s[0] /= 255), (e[n].c.k[i].s[1] /= 255), (e[n].c.k[i].s[2] /= 255), (e[n].c.k[i].s[3] /= 255)), e[n].c.k[i].e && ((e[n].c.k[i].e[0] /= 255), (e[n].c.k[i].e[1] /= 255), (e[n].c.k[i].e[2] /= 255), (e[n].c.k[i].e[3] /= 255));
                                                    else (e[n].c.k[0] /= 255), (e[n].c.k[1] /= 255), (e[n].c.k[2] /= 255), (e[n].c.k[3] /= 255);
                                                }
                                        }
                                        function n(e) {
                                            var n,
                                                i = e.length;
                                            for (n = 0; n < i; n += 1) 4 === e[n].ty && t(e[n].shapes);
                                        }
                                        return function (t) {
                                            if (s(e, t.v) && (n(t.layers), t.assets)) {
                                                var i,
                                                    r = t.assets.length;
                                                for (i = 0; i < r; i += 1) t.assets[i].layers && n(t.assets[i].layers);
                                            }
                                        };
                                    })(),
                                    d = (function () {
                                        var e = [4, 4, 18];
                                        function t(e) {
                                            var n, i, r;
                                            for (n = e.length - 1; n >= 0; n -= 1)
                                                if ('sh' === e[n].ty) {
                                                    if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
                                                    else for (i = 0, r = e[n].ks.k.length; i < r; i += 1) e[n].ks.k[i].s && (e[n].ks.k[i].s[0].c = e[n].closed), e[n].ks.k[i].e && (e[n].ks.k[i].e[0].c = e[n].closed);
                                                } else 'gr' === e[n].ty && t(e[n].it);
                                        }
                                        function n(e) {
                                            var n,
                                                i,
                                                r,
                                                a,
                                                s,
                                                o,
                                                l = e.length;
                                            for (i = 0; i < l; i += 1) {
                                                if ((n = e[i]).hasMask) {
                                                    var u = n.masksProperties;
                                                    for (r = 0, a = u.length; r < a; r += 1)
                                                        if (u[r].pt.k.i) u[r].pt.k.c = u[r].cl;
                                                        else for (s = 0, o = u[r].pt.k.length; s < o; s += 1) u[r].pt.k[s].s && (u[r].pt.k[s].s[0].c = u[r].cl), u[r].pt.k[s].e && (u[r].pt.k[s].e[0].c = u[r].cl);
                                                }
                                                4 === n.ty && t(n.shapes);
                                            }
                                        }
                                        return function (t) {
                                            if (s(e, t.v) && (n(t.layers), t.assets)) {
                                                var i,
                                                    r = t.assets.length;
                                                for (i = 0; i < r; i += 1) t.assets[i].layers && n(t.assets[i].layers);
                                            }
                                        };
                                    })();
                                function f(n) {
                                    !n.__complete && (c(n), o(n), l(n), u(n), d(n), e(n.layers, n.assets), t(n.chars, n.assets), (n.__complete = !0));
                                }
                                function _(e) {
                                    0 === e.t.a.length && e.t.p;
                                }
                                var p = {};
                                return (p.completeData = f), (p.checkColors = c), (p.checkChars = l), (p.checkPathProperties = u), (p.checkShapes = d), (p.completeLayers = e), p;
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
                                            load: function (t, n, i, r) {
                                                var a,
                                                    s = new XMLHttpRequest();
                                                try {
                                                    s.responseType = 'json';
                                                } catch (e) {}
                                                s.onreadystatechange = function () {
                                                    if (4 === s.readyState) {
                                                        if (200 === s.status) i((a = e(s)));
                                                        else
                                                            try {
                                                                (a = e(s)), i(a);
                                                            } catch (e) {
                                                                r && r(e);
                                                            }
                                                    }
                                                };
                                                try {
                                                    s.open('GET', t, !0);
                                                } catch (e) {
                                                    s.open('GET', n + '/' + t, !0);
                                                }
                                                s.send();
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
                                r = i[n];
                            (i[n] = null), 'success' === t.status ? r.onComplete(t.payload) : r.onError && r.onError();
                        });
                }
                function l(e, t) {
                    var r = 'processId_' + (n += 1);
                    return (
                        (i[r] = {
                            onComplete: e,
                            onError: t
                        }),
                        r
                    );
                }
                return {
                    loadAnimation: function (e, n, i) {
                        o();
                        var r = l(n, i);
                        t.postMessage({
                            type: 'loadAnimation',
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: r
                        });
                    },
                    loadData: function (e, n, i) {
                        o();
                        var r = l(n, i);
                        t.postMessage({
                            type: 'loadData',
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: r
                        });
                    },
                    completeAnimation: function (e, n, i) {
                        o();
                        var r = l(n, i);
                        t.postMessage({
                            type: 'complete',
                            animation: e,
                            id: r
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
                function i(e, t, n) {
                    var i = '';
                    if (e.e) i = e.p;
                    else if (t) {
                        var r = e.p;
                        -1 !== r.indexOf('images/') && (r = r.split('/')[1]), (i = t + r);
                    } else i = n + (e.u ? e.u : '') + e.p;
                    return i;
                }
                function r(e) {
                    var t = 0,
                        n = setInterval(
                            function () {
                                (e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(n)), (t += 1);
                            }.bind(this),
                            50
                        );
                }
                function a(t) {
                    var n = i(t, this.assetsPath, this.path),
                        r = createNS('image');
                    isSafari ? this.testImageLoaded(r) : r.addEventListener('load', this._imageLoaded, !1),
                        r.addEventListener(
                            'error',
                            function () {
                                (a.img = e), this._imageLoaded();
                            }.bind(this),
                            !1
                        ),
                        r.setAttributeNS('http://www.w3.org/1999/xlink', 'href', n),
                        this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
                    var a = {
                        img: r,
                        assetData: t
                    };
                    return a;
                }
                function s(t) {
                    var n = i(t, this.assetsPath, this.path),
                        r = createTag('img');
                    (r.crossOrigin = 'anonymous'),
                        r.addEventListener('load', this._imageLoaded, !1),
                        r.addEventListener(
                            'error',
                            function () {
                                (a.img = e), this._imageLoaded();
                            }.bind(this),
                            !1
                        ),
                        (r.src = n);
                    var a = {
                        img: r,
                        assetData: t
                    };
                    return a;
                }
                function o(e) {
                    var t = { assetData: e },
                        n = i(e, this.assetsPath, this.path);
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
                function l(e, t) {
                    this.imagesLoadedCb = t;
                    var n,
                        i = e.length;
                    for (n = 0; n < i; n += 1) e[n].layers || (e[n].t && 'seq' !== e[n].t ? 3 === e[n].t && ((this.totalFootages += 1), this.images.push(this.createFootageData(e[n]))) : ((this.totalImages += 1), this.images.push(this._createImageData(e[n]))));
                }
                function u(e) {
                    this.path = e || '';
                }
                function c(e) {
                    this.assetsPath = e || '';
                }
                function d(e) {
                    for (var t = 0, n = this.images.length; t < n; ) {
                        if (this.images[t].assetData === e) return this.images[t].img;
                        t += 1;
                    }
                    return null;
                }
                function f() {
                    (this.imagesLoadedCb = null), (this.images.length = 0);
                }
                function _() {
                    return this.totalImages === this.loadedAssets;
                }
                function p() {
                    return this.totalFootages === this.loadedFootagesCount;
                }
                function h(e, t) {
                    'svg' === e ? ((this._elementHelper = t), (this._createImageData = this.createImageData.bind(this))) : (this._createImageData = this.createImgData.bind(this));
                }
                function m() {
                    (this._imageLoaded = t.bind(this)), (this._footageLoaded = n.bind(this)), (this.testImageLoaded = r.bind(this)), (this.createFootageData = o.bind(this)), (this.assetsPath = ''), (this.path = ''), (this.totalImages = 0), (this.totalFootages = 0), (this.loadedAssets = 0), (this.loadedFootagesCount = 0), (this.imagesLoadedCb = null), (this.images = []);
                }
                return (
                    (m.prototype = {
                        loadAssets: l,
                        setAssetsPath: c,
                        setPath: u,
                        loadedImages: _,
                        loadedFootages: p,
                        destroy: f,
                        getAsset: d,
                        createImgData: s,
                        createImageData: a,
                        imageLoaded: t,
                        footageLoaded: n,
                        setCacheType: h
                    }),
                    m
                );
            })();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function (e, t) {
                if (this._cbs[e]) for (var n = this._cbs[e], i = 0; i < n.length; i += 1) n[i](t);
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
                        for (var n = 0, i = this._cbs[e].length; n < i; ) this._cbs[e][n] === t && (this._cbs[e].splice(n, 1), (n -= 1), (i -= 1)), (n += 1);
                        this._cbs[e].length || (this._cbs[e] = null);
                    }
                } else this._cbs[e] = null;
            }
        };
        var markerParser = (function () {
                function e(e) {
                    for (var t, n = e.split('\r\n'), i = {}, r = 0, a = 0; a < n.length; a += 1) 2 === (t = n[a].split(':')).length && ((i[t[0]] = t[1].trim()), (r += 1));
                    if (0 === r) throw Error();
                    return i;
                }
                return function (t) {
                    for (var n = [], i = 0; i < t.length; i += 1) {
                        var r = t[i],
                            a = {
                                time: r.tm,
                                duration: r.dr
                            };
                        try {
                            a.payload = JSON.parse(t[i].cm);
                        } catch (n) {
                            try {
                                a.payload = e(t[i].cm);
                            } catch (e) {
                                a.payload = { name: t[i].cm };
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
                    i = e.attributes;
                (n.path = i.getNamedItem('data-animation-path') ? i.getNamedItem('data-animation-path').value : i.getNamedItem('data-bm-path') ? i.getNamedItem('data-bm-path').value : i.getNamedItem('bm-path') ? i.getNamedItem('bm-path').value : ''), (n.animType = i.getNamedItem('data-anim-type') ? i.getNamedItem('data-anim-type').value : i.getNamedItem('data-bm-type') ? i.getNamedItem('data-bm-type').value : i.getNamedItem('bm-type') ? i.getNamedItem('bm-type').value : i.getNamedItem('data-bm-renderer') ? i.getNamedItem('data-bm-renderer').value : i.getNamedItem('bm-renderer') ? i.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas');
                var r = i.getNamedItem('data-anim-loop') ? i.getNamedItem('data-anim-loop').value : i.getNamedItem('data-bm-loop') ? i.getNamedItem('data-bm-loop').value : i.getNamedItem('bm-loop') ? i.getNamedItem('bm-loop').value : '';
                'false' === r ? (n.loop = !1) : 'true' === r ? (n.loop = !0) : '' !== r && (n.loop = parseInt(r, 10));
                var a = i.getNamedItem('data-anim-autoplay') ? i.getNamedItem('data-anim-autoplay').value : i.getNamedItem('data-bm-autoplay') ? i.getNamedItem('data-bm-autoplay').value : !i.getNamedItem('bm-autoplay') || i.getNamedItem('bm-autoplay').value;
                (n.autoplay = 'false' !== a), (n.name = i.getNamedItem('data-name') ? i.getNamedItem('data-name').value : i.getNamedItem('data-bm-name') ? i.getNamedItem('data-bm-name').value : i.getNamedItem('bm-name') ? i.getNamedItem('bm-name').value : ''), 'false' === (i.getNamedItem('data-anim-prerender') ? i.getNamedItem('data-anim-prerender').value : i.getNamedItem('data-bm-prerender') ? i.getNamedItem('data-bm-prerender').value : i.getNamedItem('bm-prerender') ? i.getNamedItem('bm-prerender').value : '') && (n.prerender = !1), n.path ? this.setParams(n) : this.trigger('destroy');
            }),
            (AnimationItem.prototype.includeLayers = function (e) {
                e.op > this.animationData.op && ((this.animationData.op = e.op), (this.totalFrames = Math.floor(e.op - this.animationData.ip)));
                var t,
                    n,
                    i = this.animationData.layers,
                    r = i.length,
                    a = e.layers,
                    s = a.length;
                for (n = 0; n < s; n += 1)
                    for (t = 0; t < r; ) {
                        if (i[t].id === a[n].id) {
                            i[t] = a[n];
                            break;
                        }
                        t += 1;
                    }
                if (((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)) for (t = 0, r = e.assets.length; t < r; t += 1) this.animationData.assets.push(e.assets[t]);
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
                    i = 'number' == typeof t ? t : void 0;
                this.renderer.updateContainerSize(n, i);
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
                (!e || this.name === e) && !1 === this.isPaused && ((this.isPaused = !0), this.trigger('_pause'), (this._idle = !0), this.trigger('_idle'), this.audioController.pause());
            }),
            (AnimationItem.prototype.togglePause = function (e) {
                (!e || this.name === e) && (!0 === this.isPaused ? this.play() : this.pause());
            }),
            (AnimationItem.prototype.stop = function (e) {
                (!e || this.name === e) && (this.pause(), (this.playCount = 0), (this._completedLoop = !1), this.setCurrentRawFrameValue(0));
            }),
            (AnimationItem.prototype.getMarkerData = function (e) {
                for (var t, n = 0; n < this.markers.length; n += 1) if ((t = this.markers[n]).payload && t.payload.name === e) return t;
                return null;
            }),
            (AnimationItem.prototype.goToAndStop = function (e, t, n) {
                if (!n || this.name === n) {
                    if (isNaN(Number(e))) {
                        var i = this.getMarkerData(e);
                        i && this.goToAndStop(i.time, !0);
                    } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
                    this.pause();
                }
            }),
            (AnimationItem.prototype.goToAndPlay = function (e, t, n) {
                if (!n || this.name === n) {
                    var i = Number(e);
                    if (isNaN(i)) {
                        var r = this.getMarkerData(e);
                        r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0));
                    } else this.goToAndStop(i, t, n);
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
                        i = e.length;
                    for (n = 0; n < i; n += 1) this.segments.push(e[n]);
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
                (!t || this.name === t) && this.audioController.setVolume(e);
            }),
            (AnimationItem.prototype.getVolume = function () {
                return this.audioController.getVolume();
            }),
            (AnimationItem.prototype.mute = function (e) {
                (!e || this.name === e) && this.audioController.mute();
            }),
            (AnimationItem.prototype.unmute = function (e) {
                (!e || this.name === e) && this.audioController.unmute();
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
                    i = 0,
                    r = 0,
                    a = !0,
                    s = !1;
                function o(e) {
                    for (var n = 0, r = e.target; n < i; ) t[n].animation !== r || (t.splice(n, 1), (n -= 1), (i -= 1), r.isPaused || d()), (n += 1);
                }
                function l(e, n) {
                    if (!e) return null;
                    for (var r = 0; r < i; ) {
                        if (t[r].elem === e && null !== t[r].elem) return t[r].animation;
                        r += 1;
                    }
                    var a = new AnimationItem();
                    return f(a, e), a.setData(e, n), a;
                }
                function u() {
                    var e,
                        n = t.length,
                        i = [];
                    for (e = 0; e < n; e += 1) i.push(t[e].animation);
                    return i;
                }
                function c() {
                    (r += 1), N();
                }
                function d() {
                    r -= 1;
                }
                function f(e, n) {
                    e.addEventListener('destroy', o),
                        e.addEventListener('_active', c),
                        e.addEventListener('_idle', d),
                        t.push({
                            elem: n,
                            animation: e
                        }),
                        (i += 1);
                }
                function _(e) {
                    var t = new AnimationItem();
                    return f(t, null), t.setParams(e), t;
                }
                function p(e, n) {
                    var r;
                    for (r = 0; r < i; r += 1) t[r].animation.setSpeed(e, n);
                }
                function h(e, n) {
                    var r;
                    for (r = 0; r < i; r += 1) t[r].animation.setDirection(e, n);
                }
                function m(e) {
                    var n;
                    for (n = 0; n < i; n += 1) t[n].animation.play(e);
                }
                function g(e) {
                    var o,
                        l = e - n;
                    for (o = 0; o < i; o += 1) t[o].animation.advanceTime(l);
                    (n = e), r && !s ? window.requestAnimationFrame(g) : (a = !0);
                }
                function E(e) {
                    (n = e), window.requestAnimationFrame(g);
                }
                function v(e) {
                    var n;
                    for (n = 0; n < i; n += 1) t[n].animation.pause(e);
                }
                function y(e, n, r) {
                    var a;
                    for (a = 0; a < i; a += 1) t[a].animation.goToAndStop(e, n, r);
                }
                function I(e) {
                    var n;
                    for (n = 0; n < i; n += 1) t[n].animation.stop(e);
                }
                function T(e) {
                    var n;
                    for (n = 0; n < i; n += 1) t[n].animation.togglePause(e);
                }
                function b(e) {
                    var n;
                    for (n = i - 1; n >= 0; n -= 1) t[n].animation.destroy(e);
                }
                function S(e, t, n) {
                    var i,
                        r = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin'))),
                        a = r.length;
                    for (i = 0; i < a; i += 1) n && r[i].setAttribute('data-bm-type', n), l(r[i], e);
                    if (t && 0 === a) {
                        n || (n = 'svg');
                        var s = document.getElementsByTagName('body')[0];
                        s.innerText = '';
                        var o = createTag('div');
                        (o.style.width = '100%'), (o.style.height = '100%'), o.setAttribute('data-bm-type', n), s.appendChild(o), l(o, e);
                    }
                }
                function A() {
                    var e;
                    for (e = 0; e < i; e += 1) t[e].animation.resize();
                }
                function N() {
                    !s && r && a && (window.requestAnimationFrame(E), (a = !1));
                }
                function C() {
                    s = !0;
                }
                function R() {
                    (s = !1), N();
                }
                function O(e, n) {
                    var r;
                    for (r = 0; r < i; r += 1) t[r].animation.setVolume(e, n);
                }
                function D(e) {
                    var n;
                    for (n = 0; n < i; n += 1) t[n].animation.mute(e);
                }
                function x(e) {
                    var n;
                    for (n = 0; n < i; n += 1) t[n].animation.unmute(e);
                }
                return (e.registerAnimation = l), (e.loadAnimation = _), (e.setSpeed = p), (e.setDirection = h), (e.play = m), (e.pause = v), (e.stop = I), (e.togglePause = T), (e.searchAnimations = S), (e.resize = A), (e.goToAndStop = y), (e.destroy = b), (e.freeze = C), (e.unfreeze = R), (e.setVolume = O), (e.mute = D), (e.unmute = x), (e.getRegisteredAnimations = u), e;
            })(),
            BezierFactory = (function () {
                var e = {};
                e.getBezierEasing = n;
                var t = {};
                function n(e, n, i, r, a) {
                    var s = a || ('bez_' + e + '_' + n + '_' + i + '_' + r).replace(/\./g, 'p');
                    if (t[s]) return t[s];
                    var o = new g([e, n, i, r]);
                    return (t[s] = o), o;
                }
                var i = 4,
                    r = 0.001,
                    a = 1e-7,
                    s = 10,
                    o = 11,
                    l = 0.1,
                    u = 'function' == typeof Float32Array;
                function c(e, t) {
                    return 1 - 3 * t + 3 * e;
                }
                function d(e, t) {
                    return 3 * t - 6 * e;
                }
                function f(e) {
                    return 3 * e;
                }
                function _(e, t, n) {
                    return ((c(t, n) * e + d(t, n)) * e + f(t)) * e;
                }
                function p(e, t, n) {
                    return 3 * c(t, n) * e * e + 2 * d(t, n) * e + f(t);
                }
                function h(e, t, n, i, r) {
                    var o,
                        l,
                        u = 0;
                    do (o = _((l = t + (n - t) / 2), i, r) - e) > 0 ? (n = l) : (t = l);
                    while (Math.abs(o) > a && ++u < s);
                    return l;
                }
                function m(e, t, n, r) {
                    for (var a = 0; a < i; ++a) {
                        var s = p(t, n, r);
                        if (0 === s) break;
                        var o = _(t, n, r) - e;
                        t -= o / s;
                    }
                    return t;
                }
                function g(e) {
                    (this._p = e), (this._mSampleValues = u ? new Float32Array(o) : Array(o)), (this._precomputed = !1), (this.get = this.get.bind(this));
                }
                return (
                    (g.prototype = {
                        get: function (e) {
                            var t = this._p[0],
                                n = this._p[1],
                                i = this._p[2],
                                r = this._p[3];
                            return (this._precomputed || this._precompute(), t === n && i === r) ? e : 0 === e ? 0 : 1 === e ? 1 : _(this._getTForX(e), n, r);
                        },
                        _precompute: function () {
                            var e = this._p[0],
                                t = this._p[1],
                                n = this._p[2],
                                i = this._p[3];
                            (this._precomputed = !0), (e !== t || n !== i) && this._calcSampleValues();
                        },
                        _calcSampleValues: function () {
                            for (var e = this._p[0], t = this._p[2], n = 0; n < o; ++n) this._mSampleValues[n] = _(n * l, e, t);
                        },
                        _getTForX: function (e) {
                            for (var t = this._p[0], n = this._p[2], i = this._mSampleValues, a = 0, s = 1, u = o - 1; s !== u && i[s] <= e; ++s) a += l;
                            var c = a + ((e - i[--s]) / (i[s + 1] - i[s])) * l,
                                d = p(c, t, n);
                            return d >= r ? m(e, c, t, n) : 0 === d ? c : h(e, a, a + l, t, n);
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
                    var i = 0,
                        r = e,
                        a = createSizedArray(r);
                    return {
                        newElement: function () {
                            var e;
                            return i ? ((i -= 1), (e = a[i])) : (e = t()), e;
                        },
                        release: function (e) {
                            i === r && ((a = pooling.double(a)), (r *= 2)), n && n(e), (a[i] = e), (i += 1);
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
            function t(e, t, n, i, r, a) {
                var s = e * i + t * r + n * a - r * i - a * e - n * t;
                return s > -0.001 && s < 0.001;
            }
            function n(n, i, r, a, s, o, l, u, c) {
                if (0 === r && 0 === o && 0 === c) return t(n, i, a, s, l, u);
                var d,
                    f = e.sqrt(e.pow(a - n, 2) + e.pow(s - i, 2) + e.pow(o - r, 2)),
                    _ = e.sqrt(e.pow(l - n, 2) + e.pow(u - i, 2) + e.pow(c - r, 2)),
                    p = e.sqrt(e.pow(l - a, 2) + e.pow(u - s, 2) + e.pow(c - o, 2));
                return (d = f > _ ? (f > p ? f - _ - p : p - _ - f) : p > _ ? p - _ - f : _ - f - p) > -0.0001 && d < 0.0001;
            }
            var i = (function () {
                return function (e, t, n, i) {
                    var r,
                        a,
                        s,
                        o,
                        l,
                        u,
                        c = getDefaultCurveSegments(),
                        d = 0,
                        f = [],
                        _ = [],
                        p = bezierLengthPool.newElement();
                    for (r = 0, s = n.length; r < c; r += 1) {
                        for (a = 0, l = r / (c - 1), u = 0; a < s; a += 1) (o = bmPow(1 - l, 3) * e[a] + 3 * bmPow(1 - l, 2) * l * n[a] + 3 * (1 - l) * bmPow(l, 2) * i[a] + bmPow(l, 3) * t[a]), (f[a] = o), null !== _[a] && (u += bmPow(f[a] - _[a], 2)), (_[a] = f[a]);
                        u && (d += u = bmSqrt(u)), (p.percents[r] = l), (p.lengths[r] = d);
                    }
                    return (p.addedLength = d), p;
                };
            })();
            function r(e) {
                var t,
                    n = segmentsLengthPool.newElement(),
                    r = e.c,
                    a = e.v,
                    s = e.o,
                    o = e.i,
                    l = e._length,
                    u = n.lengths,
                    c = 0;
                for (t = 0; t < l - 1; t += 1) (u[t] = i(a[t], a[t + 1], s[t], o[t + 1])), (c += u[t].addedLength);
                return r && l && ((u[t] = i(a[t], a[0], s[t], o[0])), (c += u[t].addedLength)), (n.totalLength = c), n;
            }
            function a(e) {
                (this.segmentLength = 0), (this.points = Array(e));
            }
            function s(e, t) {
                (this.partialLength = e), (this.point = t);
            }
            var o = (function () {
                var e = {};
                return function (n, i, r, o) {
                    var l = (n[0] + '_' + n[1] + '_' + i[0] + '_' + i[1] + '_' + r[0] + '_' + r[1] + '_' + o[0] + '_' + o[1]).replace(/\./g, 'p');
                    if (!e[l]) {
                        var u,
                            c,
                            d,
                            f,
                            _,
                            p,
                            h,
                            m = getDefaultCurveSegments(),
                            g = 0,
                            E = null;
                        2 === n.length && (n[0] !== i[0] || n[1] !== i[1]) && t(n[0], n[1], i[0], i[1], n[0] + r[0], n[1] + r[1]) && t(n[0], n[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (m = 2);
                        var v = new a(m);
                        for (u = 0, d = r.length; u < m; u += 1) {
                            for (c = 0, h = createSizedArray(d), _ = u / (m - 1), p = 0; c < d; c += 1) (f = bmPow(1 - _, 3) * n[c] + 3 * bmPow(1 - _, 2) * _ * (n[c] + r[c]) + 3 * (1 - _) * bmPow(_, 2) * (i[c] + o[c]) + bmPow(_, 3) * i[c]), (h[c] = f), null !== E && (p += bmPow(h[c] - E[c], 2));
                            (g += p = bmSqrt(p)), (v.points[u] = new s(p, h)), (E = h);
                        }
                        (v.segmentLength = g), (e[l] = v);
                    }
                    return e[l];
                };
            })();
            function l(e, t) {
                var n = t.percents,
                    i = t.lengths,
                    r = n.length,
                    a = bmFloor((r - 1) * e),
                    s = e * t.addedLength,
                    o = 0;
                if (a === r - 1 || 0 === a || s === i[a]) return n[a];
                for (var l = i[a] > s ? -1 : 1, u = !0; u; )
                    if ((i[a] <= s && i[a + 1] > s ? ((o = (s - i[a]) / (i[a + 1] - i[a])), (u = !1)) : (a += l), a < 0 || a >= r - 1)) {
                        if (a === r - 1) return n[a];
                        u = !1;
                    }
                return n[a] + (n[a + 1] - n[a]) * o;
            }
            function u(t, n, i, r, a, s) {
                var o = l(a, s),
                    u = 1 - o;
                return [e.round((u * u * u * t[0] + (o * u * u + u * o * u + u * u * o) * i[0] + (o * o * u + u * o * o + o * u * o) * r[0] + o * o * o * n[0]) * 1000) / 1000, e.round((u * u * u * t[1] + (o * u * u + u * o * u + u * u * o) * i[1] + (o * o * u + u * o * o + o * u * o) * r[1] + o * o * o * n[1]) * 1000) / 1000];
            }
            var c = createTypedArray('float32', 8);
            return {
                getSegmentsLength: r,
                getNewSegment: function (t, n, i, r, a, s, o) {
                    a < 0 ? (a = 0) : a > 1 && (a = 1);
                    var u,
                        d = l(a, o),
                        f = l((s = s > 1 ? 1 : s), o),
                        _ = t.length,
                        p = 1 - d,
                        h = 1 - f,
                        m = p * p * p,
                        g = d * p * p * 3,
                        E = d * d * p * 3,
                        v = d * d * d,
                        y = p * p * h,
                        I = d * p * h + p * d * h + p * p * f,
                        T = d * d * h + p * d * f + d * p * f,
                        b = d * d * f,
                        S = p * h * h,
                        A = d * h * h + p * f * h + p * h * f,
                        N = d * f * h + p * f * f + d * h * f,
                        C = d * f * f,
                        R = h * h * h,
                        O = f * h * h + h * f * h + h * h * f,
                        D = f * f * h + h * f * f + f * h * f,
                        x = f * f * f;
                    for (u = 0; u < _; u += 1) (c[4 * u] = e.round((m * t[u] + g * i[u] + E * r[u] + v * n[u]) * 1000) / 1000), (c[4 * u + 1] = e.round((y * t[u] + I * i[u] + T * r[u] + b * n[u]) * 1000) / 1000), (c[4 * u + 2] = e.round((S * t[u] + A * i[u] + N * r[u] + C * n[u]) * 1000) / 1000), (c[4 * u + 3] = e.round((R * t[u] + O * i[u] + D * r[u] + x * n[u]) * 1000) / 1000);
                    return c;
                },
                getPointInSegment: u,
                buildBezierData: o,
                pointOnLine2D: t,
                pointOnLine3D: n
            };
        }
        var bez = bezFunction(),
            initFrame = initialDefaultFrame,
            mathAbs = Math.abs;
        function interpolateValue(e, t) {
            var n,
                i,
                r,
                a,
                s,
                o = this.offsetTime;
            'multidimensional' === this.propType && (m = createTypedArray('float32', this.pv.length));
            for (var l = t.lastIndex, u = l, c = this.keyframes.length - 1, d = !0; d; ) {
                if (((g = this.keyframes[u]), (E = this.keyframes[u + 1]), u === c - 1 && e >= E.t - o)) {
                    g.h && (g = E), (l = 0);
                    break;
                }
                if (E.t - o > e) {
                    l = u;
                    break;
                }
                u < c - 1 ? (u += 1) : ((l = 0), (d = !1));
            }
            v = this.keyframesMetadata[u] || {};
            var f = E.t - o,
                _ = g.t - o;
            if (g.to) {
                v.bezierData || (v.bezierData = bez.buildBezierData(g.s, E.s || g.e, g.to, g.ti));
                var p = v.bezierData;
                if (e >= f || e < _) {
                    var h = e >= f ? p.points.length - 1 : 0;
                    for (y = 0, I = p.points[h].point.length; y < I; y += 1) m[y] = p.points[h].point[y];
                } else {
                    v.__fnct ? (A = v.__fnct) : ((A = BezierFactory.getBezierEasing(g.o.x, g.o.y, g.i.x, g.i.y, g.n).get), (v.__fnct = A)), (T = A((e - _) / (f - _)));
                    var m,
                        g,
                        E,
                        v,
                        y,
                        I,
                        T,
                        b,
                        S,
                        A,
                        N,
                        C,
                        R = p.segmentLength * T,
                        O = t.lastFrame < e && t._lastKeyframeIndex === u ? t._lastAddedLength : 0;
                    for (S = t.lastFrame < e && t._lastKeyframeIndex === u ? t._lastPoint : 0, d = !0, b = p.points.length; d; ) {
                        if (((O += p.points[S].partialLength), 0 === R || 0 === T || S === p.points.length - 1)) {
                            for (y = 0, I = p.points[S].point.length; y < I; y += 1) m[y] = p.points[S].point[y];
                            break;
                        }
                        if (R >= O && R < O + p.points[S + 1].partialLength) {
                            for (y = 0, C = (R - O) / p.points[S + 1].partialLength, I = p.points[S].point.length; y < I; y += 1) m[y] = p.points[S].point[y] + (p.points[S + 1].point[y] - p.points[S].point[y]) * C;
                            break;
                        }
                        S < b - 1 ? (S += 1) : (d = !1);
                    }
                    (t._lastPoint = S), (t._lastAddedLength = O - p.points[S].partialLength), (t._lastKeyframeIndex = u);
                }
            } else if (((c = g.s.length), (N = E.s || g.e), this.sh && 1 !== g.h)) e >= f ? ((m[0] = N[0]), (m[1] = N[1]), (m[2] = N[2])) : e <= _ ? ((m[0] = g.s[0]), (m[1] = g.s[1]), (m[2] = g.s[2])) : quaternionToEuler(m, slerp(createQuaternion(g.s), createQuaternion(N), (e - _) / (f - _)));
            else for (u = 0; u < c; u += 1) 1 !== g.h && (e >= f ? (T = 1) : e < _ ? (T = 0) : (g.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[u] ? (A = v.__fnct[u]) : ((n = void 0 === g.o.x[u] ? g.o.x[0] : g.o.x[u]), (i = void 0 === g.o.y[u] ? g.o.y[0] : g.o.y[u]), (r = void 0 === g.i.x[u] ? g.i.x[0] : g.i.x[u]), (a = void 0 === g.i.y[u] ? g.i.y[0] : g.i.y[u]), (A = BezierFactory.getBezierEasing(n, i, r, a).get), (v.__fnct[u] = A))) : v.__fnct ? (A = v.__fnct) : ((n = g.o.x), (i = g.o.y), (r = g.i.x), (a = g.i.y), (A = BezierFactory.getBezierEasing(n, i, r, a).get), (g.keyframeMetadata = A)), (T = A((e - _) / (f - _))))), (N = E.s || g.e), (s = 1 === g.h ? g.s[u] : g.s[u] + (N[u] - g.s[u]) * T), 'multidimensional' === this.propType ? (m[u] = s) : (m = s);
            return (t.lastIndex = l), m;
        }
        function slerp(e, t, n) {
            var i,
                r,
                a,
                s,
                o,
                l = [],
                u = e[0],
                c = e[1],
                d = e[2],
                f = e[3],
                _ = t[0],
                p = t[1],
                h = t[2],
                m = t[3];
            return (r = u * _ + c * p + d * h + f * m) < 0 && ((r = -r), (_ = -_), (p = -p), (h = -h), (m = -m)), 1 - r > 0.000001 ? ((a = Math.sin((i = Math.acos(r)))), (s = Math.sin((1 - n) * i) / a), (o = Math.sin(n * i) / a)) : ((s = 1 - n), (o = n)), (l[0] = s * u + o * _), (l[1] = s * c + o * p), (l[2] = s * d + o * h), (l[3] = s * f + o * m), l;
        }
        function quaternionToEuler(e, t) {
            var n = t[0],
                i = t[1],
                r = t[2],
                a = t[3],
                s = Math.atan2(2 * i * a - 2 * n * r, 1 - 2 * i * i - 2 * r * r),
                o = Math.asin(2 * n * i + 2 * r * a),
                l = Math.atan2(2 * n * a - 2 * i * r, 1 - 2 * n * n - 2 * r * r);
            (e[0] = s / degToRads), (e[1] = o / degToRads), (e[2] = l / degToRads);
        }
        function createQuaternion(e) {
            var t = e[0] * degToRads,
                n = e[1] * degToRads,
                i = e[2] * degToRads,
                r = Math.cos(t / 2),
                a = Math.cos(n / 2),
                s = Math.cos(i / 2),
                o = Math.sin(t / 2),
                l = Math.sin(n / 2),
                u = Math.sin(i / 2),
                c = r * a * s - o * l * u;
            return [o * l * s + r * a * u, o * a * s + r * l * u, r * l * s - o * a * u, c];
        }
        function getValueAtCurrentTime() {
            var e = this.comp.renderedFrame - this.offsetTime,
                t = this.keyframes[0].t - this.offsetTime,
                n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(e === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= n && e >= n) || (this._caching.lastFrame < t && e < t))))) {
                this._caching.lastFrame >= e && ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
                var i = this.interpolateValue(e, this._caching);
                this.pv = i;
            }
            return (this._caching.lastFrame = e), this.pv;
        }
        function setVValue(e) {
            var t;
            if ('unidimensional' === this.propType) (t = e * this.mult), mathAbs(this.v - t) > 0.00001 && ((this.v = t), (this._mdf = !0));
            else for (var n = 0, i = this.v.length; n < i; ) (t = e[n] * this.mult), mathAbs(this.v[n] - t) > 0.00001 && ((this.v[n] = t), (this._mdf = !0)), (n += 1);
        }
        function processEffectsSequence() {
            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return;
                }
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
        function ValueProperty(e, t, n, i) {
            (this.propType = 'unidimensional'), (this.mult = n || 1), (this.data = t), (this.v = n ? t.k * n : t.k), (this.pv = t.k), (this._mdf = !1), (this.elem = e), (this.container = i), (this.comp = e.comp), (this.k = !1), (this.kf = !1), (this.vel = 0), (this.effectsSequence = []), (this._isFirstFrame = !0), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.addEffect = addEffect);
        }
        function MultiDimensionalProperty(e, t, n, i) {
            (this.propType = 'multidimensional'), (this.mult = n || 1), (this.data = t), (this._mdf = !1), (this.elem = e), (this.container = i), (this.comp = e.comp), (this.k = !1), (this.kf = !1), (this.frameId = -1);
            var r,
                a = t.k.length;
            for (r = 0, this.v = createTypedArray('float32', a), this.pv = createTypedArray('float32', a), this.vel = createTypedArray('float32', a); r < a; r += 1) (this.v[r] = t.k[r] * this.mult), (this.pv[r] = t.k[r]);
            (this._isFirstFrame = !0), (this.effectsSequence = []), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.addEffect = addEffect);
        }
        function KeyframedValueProperty(e, t, n, i) {
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
                (this.container = i),
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
        function KeyframedMultidimensionalProperty(e, t, n, i) {
            this.propType = 'multidimensional';
            var r,
                a,
                s,
                o,
                l,
                u = t.k.length;
            for (r = 0; r < u - 1; r += 1) t.k[r].to && t.k[r].s && t.k[r + 1] && t.k[r + 1].s && ((a = t.k[r].s), (s = t.k[r + 1].s), (o = t.k[r].to), (l = t.k[r].ti), ((2 === a.length && !(a[0] === s[0] && a[1] === s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1])) || (3 === a.length && !(a[0] === s[0] && a[1] === s[1] && a[2] === s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2]))) && ((t.k[r].to = null), (t.k[r].ti = null)), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || (a[2] === s[2] && 0 === o[2] && 0 === l[2])) && ((t.k[r].to = null), (t.k[r].ti = null)));
            (this.effectsSequence = [getValueAtCurrentTime.bind(this)]), (this.data = t), (this.keyframes = t.k), (this.keyframesMetadata = []), (this.offsetTime = e.data.st), (this.k = !0), (this.kf = !0), (this._isFirstFrame = !0), (this.mult = n || 1), (this.elem = e), (this.container = i), (this.comp = e.comp), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.interpolateValue = interpolateValue), (this.frameId = -1);
            var c = t.k[0].s.length;
            for (r = 0, this.v = createTypedArray('float32', c), this.pv = createTypedArray('float32', c); r < c; r += 1) (this.v[r] = initFrame), (this.pv[r] = initFrame);
            (this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray('float32', c)
            }),
                (this.addEffect = addEffect);
        }
        var PropertyFactory = (function () {
            return {
                getProp: function (e, t, n, i, r) {
                    var a;
                    if ((t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)) {
                        if ('number' == typeof t.k[0]) a = new MultiDimensionalProperty(e, t, i, r);
                        else
                            switch (n) {
                                case 0:
                                    a = new KeyframedValueProperty(e, t, i, r);
                                    break;
                                case 1:
                                    a = new KeyframedMultidimensionalProperty(e, t, i, r);
                            }
                    } else a = new ValueProperty(e, t, i, r);
                    return a.effectsSequence.length && r.addDynamicProperty(a), a;
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
            (ShapePath.prototype.setXYAt = function (e, t, n, i, r) {
                var a;
                switch (((this._length = Math.max(this._length, i + 1)), this._length >= this._maxLength && this.doubleArrayLength(), n)) {
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
                (a[i] && (!a[i] || r)) || (a[i] = pointPool.newElement()), (a[i][0] = e), (a[i][1] = t);
            }),
            (ShapePath.prototype.setTripleAt = function (e, t, n, i, r, a, s, o) {
                this.setXYAt(e, t, 'v', s, o), this.setXYAt(n, i, 'o', s, o), this.setXYAt(r, a, 'i', s, o);
            }),
            (ShapePath.prototype.reverse = function () {
                var e,
                    t = new ShapePath();
                t.setPathData(this.c, this._length);
                var n = this.v,
                    i = this.o,
                    r = this.i,
                    a = 0;
                this.c && (t.setTripleAt(n[0][0], n[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), (a = 1));
                var s = this._length - 1,
                    o = this._length;
                for (e = a; e < o; e += 1) t.setTripleAt(n[s][0], n[s][1], r[s][0], r[s][1], i[s][0], i[s][1], e, !1), (s -= 1);
                return t;
            }),
            (ShapePath.prototype.length = function () {
                return this._length;
            });
        var shapePool = (function () {
            function e(e) {
                var n,
                    i = t.newElement(),
                    r = void 0 === e._length ? e.v.length : e._length;
                for (i.setLength(r), i.c = e.c, n = 0; n < r; n += 1) i.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], n);
                return i;
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
                        newShapeCollection: r,
                        release: a
                    },
                    t = 0,
                    n = 4,
                    i = createSizedArray(4);
                function r() {
                    var e;
                    return t ? ((t -= 1), (e = i[t])) : (e = new ShapeCollection()), e;
                }
                function a(e) {
                    var r,
                        a = e._length;
                    for (r = 0; r < a; r += 1) shapePool.release(e.shapes[r]);
                    (e._length = 0), t === n && ((i = pooling.double(i)), (n *= 2)), (i[t] = e), (t += 1);
                }
                return e;
            })(),
            ShapePropertyFactory = (function () {
                var e = -999999;
                function t(e, t, n) {
                    var i = n.lastIndex,
                        r = this.keyframes;
                    if (e < r[0].t - this.offsetTime) (a = r[0].s[0]), (o = !0), (i = 0);
                    else if (e >= r[r.length - 1].t - this.offsetTime) (a = r[r.length - 1].s ? r[r.length - 1].s[0] : r[r.length - 2].e[0]), (o = !0);
                    else {
                        for (var a, s, o, l, u, c, d, f, _, p, h, m, g, E = i, v = r.length - 1, y = !0; y && ((p = r[E]), !((h = r[E + 1]).t - this.offsetTime > e)); ) E < v - 1 ? (E += 1) : (y = !1);
                        (m = this.keyframesMetadata[E] || {}), (o = 1 === p.h), (i = E), o || (e >= h.t - this.offsetTime ? (f = 1) : e < p.t - this.offsetTime ? (f = 0) : (m.__fnct ? (g = m.__fnct) : ((g = BezierFactory.getBezierEasing(p.o.x, p.o.y, p.i.x, p.i.y).get), (m.__fnct = g)), (f = g((e - (p.t - this.offsetTime)) / (h.t - this.offsetTime - (p.t - this.offsetTime))))), (s = h.s ? h.s[0] : p.e[0])), (a = p.s[0]);
                    }
                    for (l = 0, c = t._length, d = a.i[0].length, n.lastIndex = i; l < c; l += 1) for (u = 0; u < d; u += 1) (_ = o ? a.i[l][u] : a.i[l][u] + (s.i[l][u] - a.i[l][u]) * f), (t.i[l][u] = _), (_ = o ? a.o[l][u] : a.o[l][u] + (s.o[l][u] - a.o[l][u]) * f), (t.o[l][u] = _), (_ = o ? a.v[l][u] : a.v[l][u] + (s.v[l][u] - a.v[l][u]) * f), (t.v[l][u] = _);
                }
                function n() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        n = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        r = this._caching.lastFrame;
                    return (r !== e && ((r < n && t < n) || (r > i && t > i))) || ((this._caching.lastIndex = r < t ? this._caching.lastIndex : 0), this.interpolateShape(t, this.pv, this._caching)), (this._caching.lastFrame = t), this.pv;
                }
                function i() {
                    this.paths = this.localShapeCollection;
                }
                function r(e, t) {
                    if (e._length !== t._length || e.c !== t.c) return !1;
                    var n,
                        i = e._length;
                    for (n = 0; n < i; n += 1) if (e.v[n][0] !== t.v[n][0] || e.v[n][1] !== t.v[n][1] || e.o[n][0] !== t.o[n][0] || e.o[n][1] !== t.o[n][1] || e.i[n][0] !== t.i[n][0] || e.i[n][1] !== t.i[n][1]) return !1;
                    return !0;
                }
                function a(e) {
                    r(this.v, e) || ((this.v = shapePool.clone(e)), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), (this._mdf = !0), (this.paths = this.localShapeCollection));
                }
                function s() {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (!this.effectsSequence.length) {
                            this._mdf = !1;
                            return;
                        }
                        if (this.lock) {
                            this.setVValue(this.pv);
                            return;
                        }
                        (this.lock = !0), (this._mdf = !1), (e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k);
                        var e,
                            t,
                            n = this.effectsSequence.length;
                        for (t = 0; t < n; t += 1) e = this.effectsSequence[t](e);
                        this.setVValue(e), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                    }
                }
                function o(e, t, n) {
                    (this.propType = 'shape'), (this.comp = e.comp), (this.container = e), (this.elem = e), (this.data = t), (this.k = !1), (this.kf = !1), (this._mdf = !1);
                    var r = 3 === n ? t.pt.k : t.ks.k;
                    (this.v = shapePool.clone(r)), (this.pv = shapePool.clone(this.v)), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), (this.paths = this.localShapeCollection), this.paths.addShape(this.v), (this.reset = i), (this.effectsSequence = []);
                }
                function l(e) {
                    this.effectsSequence.push(e), this.container.addDynamicProperty(this);
                }
                function u(t, r, a) {
                    (this.propType = 'shape'), (this.comp = t.comp), (this.elem = t), (this.container = t), (this.offsetTime = t.data.st), (this.keyframes = 3 === a ? r.pt.k : r.ks.k), (this.keyframesMetadata = []), (this.k = !0), (this.kf = !0);
                    var s = this.keyframes[0].s[0].i.length;
                    (this.v = shapePool.newElement()),
                        this.v.setPathData(this.keyframes[0].s[0].c, s),
                        (this.pv = shapePool.clone(this.v)),
                        (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                        (this.paths = this.localShapeCollection),
                        this.paths.addShape(this.v),
                        (this.lastFrame = e),
                        (this.reset = i),
                        (this._caching = {
                            lastFrame: e,
                            lastIndex: 0
                        }),
                        (this.effectsSequence = [n.bind(this)]);
                }
                (o.prototype.interpolateShape = t), (o.prototype.getValue = s), (o.prototype.setVValue = a), (o.prototype.addEffect = l), (u.prototype.getValue = s), (u.prototype.interpolateShape = t), (u.prototype.setVValue = a), (u.prototype.addEffect = l);
                var c = (function () {
                        var e = roundCorner;
                        function t(e, t) {
                            (this.v = shapePool.newElement()), this.v.setPathData(!0, 4), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), (this.paths = this.localShapeCollection), this.localShapeCollection.addShape(this.v), (this.d = t.d), (this.elem = e), (this.comp = e.comp), (this.frameId = -1), this.initDynamicPropertyContainer(e), (this.p = PropertyFactory.getProp(e, t.p, 1, 0, this)), (this.s = PropertyFactory.getProp(e, t.s, 1, 0, this)), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertEllToPath());
                        }
                        return (
                            (t.prototype = {
                                reset: i,
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                                },
                                convertEllToPath: function () {
                                    var t = this.p.v[0],
                                        n = this.p.v[1],
                                        i = this.s.v[0] / 2,
                                        r = this.s.v[1] / 2,
                                        a = 3 !== this.d,
                                        s = this.v;
                                    (s.v[0][0] = t), (s.v[0][1] = n - r), (s.v[1][0] = a ? t + i : t - i), (s.v[1][1] = n), (s.v[2][0] = t), (s.v[2][1] = n + r), (s.v[3][0] = a ? t - i : t + i), (s.v[3][1] = n), (s.i[0][0] = a ? t - i * e : t + i * e), (s.i[0][1] = n - r), (s.i[1][0] = a ? t + i : t - i), (s.i[1][1] = n - r * e), (s.i[2][0] = a ? t + i * e : t - i * e), (s.i[2][1] = n + r), (s.i[3][0] = a ? t - i : t + i), (s.i[3][1] = n + r * e), (s.o[0][0] = a ? t + i * e : t - i * e), (s.o[0][1] = n - r), (s.o[1][0] = a ? t + i : t - i), (s.o[1][1] = n + r * e), (s.o[2][0] = a ? t - i * e : t + i * e), (s.o[2][1] = n + r), (s.o[3][0] = a ? t - i : t + i), (s.o[3][1] = n - r * e);
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
                                reset: i,
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                                },
                                convertStarToPath: function () {
                                    var e,
                                        t,
                                        n,
                                        i,
                                        r = 2 * Math.floor(this.pt.v),
                                        a = (2 * Math.PI) / r,
                                        s = !0,
                                        o = this.or.v,
                                        l = this.ir.v,
                                        u = this.os.v,
                                        c = this.is.v,
                                        d = (2 * Math.PI * o) / (2 * r),
                                        f = (2 * Math.PI * l) / (2 * r),
                                        _ = -Math.PI / 2;
                                    _ += this.r.v;
                                    var p = 3 === this.data.d ? -1 : 1;
                                    for (e = 0, this.v._length = 0; e < r; e += 1) {
                                        (t = s ? o : l), (n = s ? u : c), (i = s ? d : f);
                                        var h = t * Math.cos(_),
                                            m = t * Math.sin(_),
                                            g = 0 === h && 0 === m ? 0 : m / Math.sqrt(h * h + m * m),
                                            E = 0 === h && 0 === m ? 0 : -h / Math.sqrt(h * h + m * m);
                                        (h += +this.p.v[0]), (m += +this.p.v[1]), this.v.setTripleAt(h, m, h - g * i * n * p, m - E * i * n * p, h + g * i * n * p, m + E * i * n * p, e, !0), (s = !s), (_ += a * p);
                                    }
                                },
                                convertPolygonToPath: function () {
                                    var e,
                                        t = Math.floor(this.pt.v),
                                        n = (2 * Math.PI) / t,
                                        i = this.or.v,
                                        r = this.os.v,
                                        a = (2 * Math.PI * i) / (4 * t),
                                        s = -(0.5 * Math.PI),
                                        o = 3 === this.data.d ? -1 : 1;
                                    for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                                        var l = i * Math.cos(s),
                                            u = i * Math.sin(s),
                                            c = 0 === l && 0 === u ? 0 : u / Math.sqrt(l * l + u * u),
                                            d = 0 === l && 0 === u ? 0 : -l / Math.sqrt(l * l + u * u);
                                        (l += +this.p.v[0]), (u += +this.p.v[1]), this.v.setTripleAt(l, u, l - c * a * r * o, u - d * a * r * o, l + c * a * r * o, u + d * a * r * o, e, !0), (s += n * o);
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
                                        i = this.s.v[1] / 2,
                                        r = bmMin(n, i, this.r.v),
                                        a = r * (1 - roundCorner);
                                    (this.v._length = 0), 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + n, t - i + r, e + n, t - i + r, e + n, t - i + a, 0, !0), this.v.setTripleAt(e + n, t + i - r, e + n, t + i - a, e + n, t + i - r, 1, !0), 0 !== r ? (this.v.setTripleAt(e + n - r, t + i, e + n - r, t + i, e + n - a, t + i, 2, !0), this.v.setTripleAt(e - n + r, t + i, e - n + a, t + i, e - n + r, t + i, 3, !0), this.v.setTripleAt(e - n, t + i - r, e - n, t + i - r, e - n, t + i - a, 4, !0), this.v.setTripleAt(e - n, t - i + r, e - n, t - i + a, e - n, t - i + r, 5, !0), this.v.setTripleAt(e - n + r, t - i, e - n + r, t - i, e - n + a, t - i, 6, !0), this.v.setTripleAt(e + n - r, t - i, e + n - a, t - i, e + n - r, t - i, 7, !0)) : (this.v.setTripleAt(e - n, t + i, e - n + a, t + i, e - n, t + i, 2), this.v.setTripleAt(e - n, t - i, e - n, t - i + a, e - n, t - i, 3))) : (this.v.setTripleAt(e + n, t - i + r, e + n, t - i + a, e + n, t - i + r, 0, !0), 0 !== r ? (this.v.setTripleAt(e + n - r, t - i, e + n - r, t - i, e + n - a, t - i, 1, !0), this.v.setTripleAt(e - n + r, t - i, e - n + a, t - i, e - n + r, t - i, 2, !0), this.v.setTripleAt(e - n, t - i + r, e - n, t - i + r, e - n, t - i + a, 3, !0), this.v.setTripleAt(e - n, t + i - r, e - n, t + i - a, e - n, t + i - r, 4, !0), this.v.setTripleAt(e - n + r, t + i, e - n + r, t + i, e - n + a, t + i, 5, !0), this.v.setTripleAt(e + n - r, t + i, e + n - a, t + i, e + n - r, t + i, 6, !0), this.v.setTripleAt(e + n, t + i - r, e + n, t + i - r, e + n, t + i - a, 7, !0)) : (this.v.setTripleAt(e - n, t - i, e - n + a, t - i, e - n, t - i, 1, !0), this.v.setTripleAt(e - n, t + i, e - n, t + i - a, e - n, t + i, 2, !0), this.v.setTripleAt(e + n, t + i, e + n - a, t + i, e + n, t + i, 3, !0)));
                                },
                                getValue: function () {
                                    this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                                },
                                reset: i
                            }),
                            extendPrototype([DynamicPropertyContainer], e),
                            e
                        );
                    })();
                function _(e, t, n) {
                    var i;
                    return 3 === n || 4 === n ? (i = (3 === n ? t.pt : t.ks).k.length ? new u(e, t, n) : new o(e, t, n)) : 5 === n ? (i = new f(e, t)) : 6 === n ? (i = new c(e, t)) : 7 === n && (i = new d(e, t)), i.k && e.addDynamicProperty(i), i;
                }
                function p() {
                    return o;
                }
                function h() {
                    return u;
                }
                var m = {};
                return (m.getShapeProp = _), (m.getConstructorFunction = p), (m.getKeyframedConstructorFunction = h), m;
            })(),
            Matrix = (function () {
                var e = Math.cos,
                    t = Math.sin,
                    n = Math.tan,
                    i = Math.round;
                function r() {
                    return (this.props[0] = 1), (this.props[1] = 0), (this.props[2] = 0), (this.props[3] = 0), (this.props[4] = 0), (this.props[5] = 1), (this.props[6] = 0), (this.props[7] = 0), (this.props[8] = 0), (this.props[9] = 0), (this.props[10] = 1), (this.props[11] = 0), (this.props[12] = 0), (this.props[13] = 0), (this.props[14] = 0), (this.props[15] = 1), this;
                }
                function a(n) {
                    if (0 === n) return this;
                    var i = e(n),
                        r = t(n);
                    return this._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function s(n) {
                    if (0 === n) return this;
                    var i = e(n),
                        r = t(n);
                    return this._t(1, 0, 0, 0, 0, i, -r, 0, 0, r, i, 0, 0, 0, 0, 1);
                }
                function o(n) {
                    if (0 === n) return this;
                    var i = e(n),
                        r = t(n);
                    return this._t(i, 0, r, 0, 0, 1, 0, 0, -r, 0, i, 0, 0, 0, 0, 1);
                }
                function l(n) {
                    if (0 === n) return this;
                    var i = e(n),
                        r = t(n);
                    return this._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function u(e, t) {
                    return this._t(1, t, e, 1, 0, 0);
                }
                function c(e, t) {
                    return this.shear(n(e), n(t));
                }
                function d(i, r) {
                    var a = e(r),
                        s = t(r);
                    return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function f(e, t, n) {
                    return (n || 0 === n || (n = 1), 1 === e && 1 === t && 1 === n) ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1);
                }
                function _(e, t, n, i, r, a, s, o, l, u, c, d, f, _, p, h) {
                    return (this.props[0] = e), (this.props[1] = t), (this.props[2] = n), (this.props[3] = i), (this.props[4] = r), (this.props[5] = a), (this.props[6] = s), (this.props[7] = o), (this.props[8] = l), (this.props[9] = u), (this.props[10] = c), (this.props[11] = d), (this.props[12] = f), (this.props[13] = _), (this.props[14] = p), (this.props[15] = h), this;
                }
                function p(e, t, n) {
                    return ((n = n || 0), 0 !== e || 0 !== t || 0 !== n) ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, n, 1) : this;
                }
                function h(e, t, n, i, r, a, s, o, l, u, c, d, f, _, p, h) {
                    var m = this.props;
                    if (1 === e && 0 === t && 0 === n && 0 === i && 0 === r && 1 === a && 0 === s && 0 === o && 0 === l && 0 === u && 1 === c && 0 === d) return (m[12] = m[12] * e + m[15] * f), (m[13] = m[13] * a + m[15] * _), (m[14] = m[14] * c + m[15] * p), (m[15] *= h), (this._identityCalculated = !1), this;
                    var g = m[0],
                        E = m[1],
                        v = m[2],
                        y = m[3],
                        I = m[4],
                        T = m[5],
                        b = m[6],
                        S = m[7],
                        A = m[8],
                        N = m[9],
                        C = m[10],
                        R = m[11],
                        O = m[12],
                        D = m[13],
                        x = m[14],
                        L = m[15];
                    return (m[0] = g * e + E * r + v * l + y * f), (m[1] = g * t + E * a + v * u + y * _), (m[2] = g * n + E * s + v * c + y * p), (m[3] = g * i + E * o + v * d + y * h), (m[4] = I * e + T * r + b * l + S * f), (m[5] = I * t + T * a + b * u + S * _), (m[6] = I * n + T * s + b * c + S * p), (m[7] = I * i + T * o + b * d + S * h), (m[8] = A * e + N * r + C * l + R * f), (m[9] = A * t + N * a + C * u + R * _), (m[10] = A * n + N * s + C * c + R * p), (m[11] = A * i + N * o + C * d + R * h), (m[12] = O * e + D * r + x * l + L * f), (m[13] = O * t + D * a + x * u + L * _), (m[14] = O * n + D * s + x * c + L * p), (m[15] = O * i + D * o + x * d + L * h), (this._identityCalculated = !1), this;
                }
                function m(e) {
                    var t = e.props;
                    return this.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
                }
                function g() {
                    return this._identityCalculated || ((this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15])), (this._identityCalculated = !0)), this._identity;
                }
                function E(e) {
                    for (var t = 0; t < 16; ) {
                        if (e.props[t] !== this.props[t]) return !1;
                        t += 1;
                    }
                    return !0;
                }
                function v(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
                    return e;
                }
                function y(e) {
                    var t;
                    for (t = 0; t < 16; t += 1) this.props[t] = e[t];
                }
                function I(e, t, n) {
                    return {
                        x: e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12],
                        y: e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13],
                        z: e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]
                    };
                }
                function T(e, t, n) {
                    return e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12];
                }
                function b(e, t, n) {
                    return e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13];
                }
                function S(e, t, n) {
                    return e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14];
                }
                function A() {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        t = this.props[5] / e,
                        n = -this.props[1] / e,
                        i = -this.props[4] / e,
                        r = this.props[0] / e,
                        a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                        s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                        o = new Matrix();
                    return (o.props[0] = t), (o.props[1] = n), (o.props[4] = i), (o.props[5] = r), (o.props[12] = a), (o.props[13] = s), o;
                }
                function N(e) {
                    return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0);
                }
                function C(e) {
                    var t,
                        n = e.length,
                        i = [];
                    for (t = 0; t < n; t += 1) i[t] = N(e[t]);
                    return i;
                }
                function R(e, t, n) {
                    var i = createTypedArray('float32', 6);
                    if (this.isIdentity()) (i[0] = e[0]), (i[1] = e[1]), (i[2] = t[0]), (i[3] = t[1]), (i[4] = n[0]), (i[5] = n[1]);
                    else {
                        var r = this.props[0],
                            a = this.props[1],
                            s = this.props[4],
                            o = this.props[5],
                            l = this.props[12],
                            u = this.props[13];
                        (i[0] = e[0] * r + e[1] * s + l), (i[1] = e[0] * a + e[1] * o + u), (i[2] = t[0] * r + t[1] * s + l), (i[3] = t[0] * a + t[1] * o + u), (i[4] = n[0] * r + n[1] * s + l), (i[5] = n[0] * a + n[1] * o + u);
                    }
                    return i;
                }
                function O(e, t, n) {
                    var i;
                    return this.isIdentity() ? [e, t, n] : [e * this.props[0] + t * this.props[4] + n * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + n * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + n * this.props[10] + this.props[14]];
                }
                function D(e, t) {
                    if (this.isIdentity()) return e + ',' + t;
                    var n = this.props;
                    return Math.round((e * n[0] + t * n[4] + n[12]) * 100) / 100 + ',' + Math.round((e * n[1] + t * n[5] + n[13]) * 100) / 100;
                }
                function x() {
                    for (var e = 0, t = this.props, n = 'matrix3d(', r = 10000; e < 16; ) (n += i(t[e] * r) / r), (n += 15 === e ? ')' : ','), (e += 1);
                    return n;
                }
                function L(e) {
                    var t = 10000;
                    return (e < 0.000001 && e > 0) || (e > -0.000001 && e < 0) ? i(e * t) / t : e;
                }
                function P() {
                    var e = this.props;
                    return 'matrix(' + L(e[0]) + ',' + L(e[1]) + ',' + L(e[4]) + ',' + L(e[5]) + ',' + L(e[12]) + ',' + L(e[13]) + ')';
                }
                return function () {
                    (this.reset = r), (this.rotate = a), (this.rotateX = s), (this.rotateY = o), (this.rotateZ = l), (this.skew = c), (this.skewFromAxis = d), (this.shear = u), (this.scale = f), (this.setTransform = _), (this.translate = p), (this.transform = h), (this.multiply = m), (this.applyToPoint = I), (this.applyToX = T), (this.applyToY = b), (this.applyToZ = S), (this.applyToPointArray = O), (this.applyToTriplePoints = R), (this.applyToPointStringified = D), (this.toCSS = x), (this.to2dCSS = P), (this.clone = v), (this.cloneFromProps = y), (this.equals = E), (this.inversePoints = C), (this.inversePoint = N), (this.getInverseMatrix = A), (this._t = this.transform), (this.isIdentity = g), (this._identity = !0), (this._identityCalculated = !1), (this.props = createTypedArray('float32', 16)), this.reset();
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
                var i = t[n].split('=');
                if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1]);
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
            function n(e, n) {
                t[e] || (t[e] = n);
            }
            function i(e, n, i) {
                return new t[e](n, i);
            }
            return (e.registerModifier = n), (e.getModifier = i), e;
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
            (TrimModifier.prototype.calculateShapeEdges = function (e, t, n, i, r) {
                var a,
                    s,
                    o,
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
                var u = [],
                    c = l.length;
                for (a = 0; a < c; a += 1) (s = l[a]).e * r < i || s.s * r > i + n || ((o = s.s * r <= i ? 0 : (s.s * r - i) / n), u.push([o, s.e * r >= i + n ? 1 : (s.e * r - i) / n]));
                return u.length || u.push([0, 0]), u;
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
                    if ((t < 0 && (t += 1), (a = this.s.v > 1 ? 1 + t : this.s.v < 0 ? 0 + t : this.s.v + t) > (s = this.e.v > 1 ? 1 + t : this.e.v < 0 ? 0 + t : this.e.v + t))) {
                        var n = a;
                        (a = s), (s = n);
                    }
                    (a = 0.0001 * Math.round(10000 * a)), (s = 0.0001 * Math.round(10000 * s)), (this.sValue = a), (this.eValue = s);
                } else (a = this.sValue), (s = this.eValue);
                var i = this.shapes.length,
                    r = 0;
                if (s === a) for (l = 0; l < i; l += 1) this.shapes[l].localShapeCollection.releaseShapes(), (this.shapes[l].shape._mdf = !0), (this.shapes[l].shape.paths = this.shapes[l].localShapeCollection), this._mdf && (this.shapes[l].pathsData.length = 0);
                else if ((1 === s && 0 === a) || (0 === s && 1 === a)) {
                    if (this._mdf) for (l = 0; l < i; l += 1) (this.shapes[l].pathsData.length = 0), (this.shapes[l].shape._mdf = !0);
                } else {
                    var a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        f,
                        _,
                        p,
                        h,
                        m,
                        g = [];
                    for (l = 0; l < i; l += 1)
                        if ((p = this.shapes[l]).shape._mdf || this._mdf || e || 2 === this.m) {
                            if (((c = (o = p.shape.paths)._length), (_ = 0), !p.shape._mdf && p.pathsData.length)) _ = p.totalShapeLength;
                            else {
                                for (u = 0, d = this.releasePathsData(p.pathsData); u < c; u += 1) (f = bez.getSegmentsLength(o.shapes[u])), d.push(f), (_ += f.totalLength);
                                (p.totalShapeLength = _), (p.pathsData = d);
                            }
                            (r += _), (p.shape._mdf = !0);
                        } else p.shape.paths = p.localShapeCollection;
                    var E = a,
                        v = s,
                        y = 0;
                    for (l = i - 1; l >= 0; l -= 1)
                        if ((p = this.shapes[l]).shape._mdf) {
                            for ((h = p.localShapeCollection).releaseShapes(), 2 === this.m && i > 1 ? ((m = this.calculateShapeEdges(a, s, p.totalShapeLength, y, r)), (y += p.totalShapeLength)) : (m = [[E, v]]), c = m.length, u = 0; u < c; u += 1) {
                                (E = m[u][0]),
                                    (v = m[u][1]),
                                    (g.length = 0),
                                    v <= 1
                                        ? g.push({
                                              s: p.totalShapeLength * E,
                                              e: p.totalShapeLength * v
                                          })
                                        : E >= 1
                                          ? g.push({
                                                s: p.totalShapeLength * (E - 1),
                                                e: p.totalShapeLength * (v - 1)
                                            })
                                          : (g.push({
                                                s: p.totalShapeLength * E,
                                                e: p.totalShapeLength
                                            }),
                                            g.push({
                                                s: 0,
                                                e: p.totalShapeLength * (v - 1)
                                            }));
                                var I = this.addShapes(p, g[0]);
                                if (g[0].s !== g[0].e) {
                                    if (g.length > 1) {
                                        if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
                                            var T = I.pop();
                                            this.addPaths(I, h), (I = this.addShapes(p, g[1], T));
                                        } else this.addPaths(I, h), (I = this.addShapes(p, g[1]));
                                    }
                                    this.addPaths(I, h);
                                }
                            }
                            p.shape.paths = h;
                        }
                }
            }),
            (TrimModifier.prototype.addPaths = function (e, t) {
                var n,
                    i = e.length;
                for (n = 0; n < i; n += 1) t.addShape(e[n]);
            }),
            (TrimModifier.prototype.addSegment = function (e, t, n, i, r, a, s) {
                r.setXYAt(t[0], t[1], 'o', a), r.setXYAt(n[0], n[1], 'i', a + 1), s && r.setXYAt(e[0], e[1], 'v', a), r.setXYAt(i[0], i[1], 'v', a + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function (e, t, n, i) {
                t.setXYAt(e[1], e[5], 'o', n), t.setXYAt(e[2], e[6], 'i', n + 1), i && t.setXYAt(e[0], e[4], 'v', n), t.setXYAt(e[3], e[7], 'v', n + 1);
            }),
            (TrimModifier.prototype.addShapes = function (e, t, n) {
                var i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = e.pathsData,
                    f = e.shape.paths.shapes,
                    _ = e.shape.paths._length,
                    p = 0,
                    h = [],
                    m = !0;
                for (n ? ((o = n._length), (c = n._length)) : ((n = shapePool.newElement()), (o = 0), (c = 0)), h.push(n), i = 0; i < _; i += 1) {
                    for (r = 1, l = d[i].lengths, n.c = f[i].c, a = f[i].c ? l.length : l.length + 1; r < a; r += 1)
                        if (p + (s = l[r - 1]).addedLength < t.s) (p += s.addedLength), (n.c = !1);
                        else if (p > t.e) {
                            n.c = !1;
                            break;
                        } else t.s <= p && t.e >= p + s.addedLength ? (this.addSegment(f[i].v[r - 1], f[i].o[r - 1], f[i].i[r], f[i].v[r], n, o, m), (m = !1)) : ((u = bez.getNewSegment(f[i].v[r - 1], f[i].v[r], f[i].o[r - 1], f[i].i[r], (t.s - p) / s.addedLength, (t.e - p) / s.addedLength, l[r - 1])), this.addSegmentFromArray(u, n, o, m), (m = !1), (n.c = !1)), (p += s.addedLength), (o += 1);
                    if (f[i].c && l.length) {
                        if (((s = l[r - 1]), p <= t.e)) {
                            var g = l[r - 1].addedLength;
                            t.s <= p && t.e >= p + g ? (this.addSegment(f[i].v[r - 1], f[i].o[r - 1], f[i].i[0], f[i].v[0], n, o, m), (m = !1)) : ((u = bez.getNewSegment(f[i].v[r - 1], f[i].v[0], f[i].o[r - 1], f[i].i[0], (t.s - p) / g, (t.e - p) / g, l[r - 1])), this.addSegmentFromArray(u, n, o, m), (m = !1), (n.c = !1));
                        } else n.c = !1;
                        (p += s.addedLength), (o += 1);
                    }
                    if ((n._length && (n.setXYAt(n.v[c][0], n.v[c][1], 'i', c), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], 'o', n._length - 1)), p > t.e)) break;
                    i < _ - 1 && ((n = shapePool.newElement()), (m = !0), h.push(n), (o = 0));
                }
                return h;
            }),
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            (PuckerAndBloatModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)), (this._isAnimated = !!this.amount.effectsSequence.length);
            }),
            (PuckerAndBloatModifier.prototype.processPath = function (e, t) {
                var n,
                    i,
                    r,
                    a,
                    s,
                    o,
                    l = t / 100,
                    u = [0, 0],
                    c = e._length,
                    d = 0;
                for (d = 0; d < c; d += 1) (u[0] += e.v[d][0]), (u[1] += e.v[d][1]);
                (u[0] /= c), (u[1] /= c);
                var f = shapePool.newElement();
                for (d = 0, f.c = e.c; d < c; d += 1) (n = e.v[d][0] + (u[0] - e.v[d][0]) * l), (i = e.v[d][1] + (u[1] - e.v[d][1]) * l), (r = e.o[d][0] + -((u[0] - e.o[d][0]) * l)), (a = e.o[d][1] + -((u[1] - e.o[d][1]) * l)), (s = e.i[d][0] + -((u[0] - e.i[d][0]) * l)), (o = e.i[d][1] + -((u[1] - e.i[d][1]) * l)), f.setTripleAt(n, i, r, a, s, o, d);
                return f;
            }),
            (PuckerAndBloatModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    o = this.shapes.length,
                    l = this.amount.v;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((s = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, r = a.shape.paths._length, i = 0; i < r; i += 1) s.addShape(this.processPath(t[i], l));
                        a.shape.paths = a.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            });
        var TransformPropertyFactory = (function () {
            var e = [0, 0];
            function t(e) {
                var t = this._mdf;
                this.iterateDynamicProperties(), (this._mdf = this._mdf || t), this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? (this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0)) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function n(t) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if ((this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)), this.iterateDynamicProperties(), this._mdf || t)) {
                        var n;
                        if ((this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented)) {
                            if (((n = this.elem.globalData.frameRate), this.p && this.p.keyframes && this.p.getValueAtTime)) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? ((i = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / n, 0)), (r = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0))) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? ((i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0)), (r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / n, 0))) : ((i = this.p.pv), (r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / n, this.p.offsetTime)));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                (i = []), (r = []);
                                var i,
                                    r,
                                    a = this.px,
                                    s = this.py;
                                a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? ((i[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / n, 0)), (i[1] = s.getValueAtTime((s.keyframes[0].t + 0.01) / n, 0)), (r[0] = a.getValueAtTime(a.keyframes[0].t / n, 0)), (r[1] = s.getValueAtTime(s.keyframes[0].t / n, 0))) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? ((i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / n, 0)), (i[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0)), (r[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / n, 0)), (r[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - 0.01) / n, 0))) : ((i = [a.pv, s.pv]), (r[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - 0.01) / n, a.offsetTime)), (r[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - 0.01) / n, s.offsetTime)));
                            } else i = r = e;
                            this.v.rotate(-Math.atan2(i[1] - r[1], i[0] - r[0]));
                        }
                        this.data.p && this.data.p.s ? (this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0)) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            }
            function i() {
                if (((this.appliedTransformations = 0), this.pre.reset(), !this.a.effectsSequence.length)) {
                    if ((this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), (this.appliedTransformations = 1), !this.s.effectsSequence.length)) {
                        if ((this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), (this.appliedTransformations = 2), this.sk)) {
                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
                        }
                        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4)) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), (this.appliedTransformations = 4));
                    }
                }
            }
            function r() {}
            function a(e) {
                this._addDynamicProperty(e), this.elem.addDynamicProperty(e), (this._isDirty = !0);
            }
            function s(e, t, n) {
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
                        var i,
                            r = t.or.k.length;
                        for (i = 0; i < r; i += 1) (t.or.k[i].to = null), (t.or.k[i].ti = null);
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
                (s.prototype = {
                    applyToMatrix: t,
                    getValue: n,
                    precalculateMatrix: i,
                    autoOrient: r
                }),
                extendPrototype([DynamicPropertyContainer], s),
                (s.prototype.addDynamicProperty = a),
                (s.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                    getTransformProperty: function (e, t, n) {
                        return new s(e, t, n);
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
            var i = t * t - 4 * e * n;
            if (i < 0) return [];
            var r = -t / (2 * e);
            if (0 === i) return [r];
            var a = Math.sqrt(i) / (2 * e);
            return [r - a, r + a];
        }
        function polynomialCoefficients(e, t, n, i) {
            return [-e + 3 * t - 3 * n + i, 3 * e - 6 * t + 3 * n, -3 * e + 3 * t, e];
        }
        function singlePoint(e) {
            return new PolynomialBezier(e, e, e, e, !1);
        }
        function PolynomialBezier(e, t, n, i, r) {
            r && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), r && pointEqual(n, i) && (n = lerpPoint(e, i, 2 / 3));
            var a = polynomialCoefficients(e[0], t[0], n[0], i[0]),
                s = polynomialCoefficients(e[1], t[1], n[1], i[1]);
            (this.a = [a[0], s[0]]), (this.b = [a[1], s[1]]), (this.c = [a[2], s[2]]), (this.d = [a[3], s[3]]), (this.points = [e, t, n, i]);
        }
        function extrema(e, t) {
            var n = e.points[0][t],
                i = e.points[e.points.length - 1][t];
            if (n > i) {
                var r = i;
                (i = n), (n = r);
            }
            for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
                if (a[s] > 0 && a[s] < 1) {
                    var o = e.point(a[s])[t];
                    o < n ? (n = o) : o > i && (i = o);
                }
            return {
                min: n,
                max: i
            };
        }
        function intersectData(e, t, n) {
            var i = e.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
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
        function intersectsImpl(e, t, n, i, r, a) {
            if (boxIntersect(e, t)) {
                if (n >= a || (e.width <= i && e.height <= i && t.width <= i && t.height <= i)) {
                    r.push([e.t, t.t]);
                    return;
                }
                var s = splitData(e),
                    o = splitData(t);
                intersectsImpl(s[0], o[0], n + 1, i, r, a), intersectsImpl(s[0], o[1], n + 1, i, r, a), intersectsImpl(s[1], o[0], n + 1, i, r, a), intersectsImpl(s[1], o[1], n + 1, i, r, a);
            }
        }
        function crossProduct(e, t) {
            return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]];
        }
        function lineIntersection(e, t, n, i) {
            var r = [e[0], e[1], 1],
                a = [t[0], t[1], 1],
                s = [n[0], n[1], 1],
                o = [i[0], i[1], 1],
                l = crossProduct(crossProduct(r, a), crossProduct(s, o));
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
        function setPoint(e, t, n, i, r, a, s) {
            var o = n - Math.PI / 2,
                l = n + Math.PI / 2,
                u = t[0] + Math.cos(n) * i * r,
                c = t[1] - Math.sin(n) * i * r;
            e.setTripleAt(u, c, u + Math.cos(o) * a, c - Math.sin(o) * a, u + Math.cos(l) * s, c - Math.sin(l) * s, e.length());
        }
        function getPerpendicularVector(e, t) {
            var n = [t[0] - e[0], t[1] - e[1]],
                i = -(0.5 * Math.PI);
            return [Math.cos(i) * n[0] - Math.sin(i) * n[1], Math.sin(i) * n[0] + Math.cos(i) * n[1]];
        }
        function getProjectingAngle(e, t) {
            var n = 0 === t ? e.length() - 1 : t - 1,
                i = (t + 1) % e.length(),
                r = getPerpendicularVector(e.v[n], e.v[i]);
            return Math.atan2(0, 1) - Math.atan2(r[1], r[0]);
        }
        function zigZagCorner(e, t, n, i, r, a, s) {
            var o = getProjectingAngle(t, n),
                l = t.v[n % t._length],
                u = t.v[0 === n ? t._length - 1 : n - 1],
                c = t.v[(n + 1) % t._length],
                d = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0,
                f = 2 === a ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0;
            setPoint(e, t.v[n % t._length], o, s, i, f / ((r + 1) * 2), d / ((r + 1) * 2), a);
        }
        function zigZagSegment(e, t, n, i, r, a) {
            for (var s = 0; s < i; s += 1) {
                var o = (s + 1) / (i + 1),
                    l = 2 === r ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
                    u = t.normalAngle(o);
                setPoint(e, t.point(o), u, a, n, l / ((i + 1) * 2), l / ((i + 1) * 2), r), (a = -a);
            }
            return a;
        }
        function linearOffset(e, t, n) {
            var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
            return [polarOffset(e, i, n), polarOffset(t, i, n)];
        }
        function offsetSegment(e, t) {
            (n = (l = linearOffset(e.points[0], e.points[1], t))[0]), (i = l[1]), (r = (l = linearOffset(e.points[1], e.points[2], t))[0]), (a = l[1]), (s = (l = linearOffset(e.points[2], e.points[3], t))[0]), (o = l[1]);
            var n,
                i,
                r,
                a,
                s,
                o,
                l,
                u = lineIntersection(n, i, r, a);
            null === u && (u = i);
            var c = lineIntersection(s, o, r, a);
            return null === c && (c = s), new PolynomialBezier(n, u, c, o);
        }
        function joinLines(e, t, n, i, r) {
            var a = t.points[3],
                s = n.points[0];
            if (3 === i || pointEqual(a, s)) return a;
            if (2 === i) {
                var o = -t.tangentAngle(1),
                    l = -n.tangentAngle(0) + Math.PI,
                    u = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
                    c = u ? pointDistance(u, a) : pointDistance(a, s) / 2,
                    d = polarOffset(a, o, 2 * c * roundCorner);
                return e.setXYAt(d[0], d[1], 'o', e.length() - 1), (d = polarOffset(s, l, 2 * c * roundCorner)), e.setTripleAt(s[0], s[1], s[0], s[1], d[0], d[1], e.length()), s;
            }
            var f = pointEqual(a, t.points[2]) ? t.points[0] : t.points[2],
                _ = pointEqual(s, n.points[1]) ? n.points[3] : n.points[1],
                p = lineIntersection(f, a, s, _);
            return p && pointDistance(p, a) < r ? (e.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], e.length()), p) : a;
        }
        function getIntersection(e, t) {
            var n = e.intersections(t);
            return (n.length && floatEqual(n[0][0], 1) && n.shift(), n.length) ? n[0] : null;
        }
        function pruneSegmentIntersection(e, t) {
            var n = e.slice(),
                i = t.slice(),
                r = getIntersection(e[e.length - 1], t[0]);
            return (r && ((n[e.length - 1] = e[e.length - 1].split(r[0])[0]), (i[0] = t[0].split(r[1])[1])), e.length > 1 && t.length > 1 && (r = getIntersection(e[0], t[t.length - 1]))) ? [[e[0].split(r[0])[0]], [t[t.length - 1].split(r[1])[1]]] : [n, i];
        }
        function pruneIntersections(e) {
            for (var t, n = 1; n < e.length; n += 1) (t = pruneSegmentIntersection(e[n - 1], e[n])), (e[n - 1] = t[0]), (e[n] = t[1]);
            return e.length > 1 && ((t = pruneSegmentIntersection(e[e.length - 1], e[0])), (e[e.length - 1] = t[0]), (e[0] = t[1])), e;
        }
        function offsetSegmentSplit(e, t) {
            var n,
                i,
                r,
                a,
                s = e.inflectionPoints();
            if (0 === s.length) return [offsetSegment(e, t)];
            if (1 === s.length || floatEqual(s[1], 1)) return (n = (r = e.split(s[0]))[0]), (i = r[1]), [offsetSegment(n, t), offsetSegment(i, t)];
            n = (r = e.split(s[0]))[0];
            var o = (s[1] - s[0]) / (1 - s[0]);
            return (a = (r = r[1].split(o))[0]), (i = r[1]), [offsetSegment(n, t), offsetSegment(a, t), offsetSegment(i, t)];
        }
        function OffsetPathModifier() {}
        function getFontProperties(e) {
            for (var t = e.fStyle ? e.fStyle.split(' ') : [], n = 'normal', i = 'normal', r = t.length, a = 0; a < r; a += 1)
                switch (t[a].toLowerCase()) {
                    case 'italic':
                        i = 'italic';
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
                style: i,
                weight: e.fWeight || n
            };
        }
        extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.c = PropertyFactory.getProp(e, t.c, 0, null, this)), (this.o = PropertyFactory.getProp(e, t.o, 0, null, this)), (this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this)), (this.so = PropertyFactory.getProp(e, t.tr.so, 0, 0.01, this)), (this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, 0.01, this)), (this.data = t), this.dynamicProperties.length || this.getValue(!0), (this._isAnimated = !!this.dynamicProperties.length), (this.pMatrix = new Matrix()), (this.rMatrix = new Matrix()), (this.sMatrix = new Matrix()), (this.tMatrix = new Matrix()), (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function (e, t, n, i, r, a) {
                var s = a ? -1 : 1,
                    o = i.s.v[0] + (1 - i.s.v[0]) * (1 - r),
                    l = i.s.v[1] + (1 - i.s.v[1]) * (1 - r);
                e.translate(i.p.v[0] * s * r, i.p.v[1] * s * r, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * s * r), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), n.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), n.scale(a ? 1 / o : o, a ? 1 / l : l), n.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function (e, t, n, i) {
                for (this.elem = e, this.arr = t, this.pos = n, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[n]); n > 0; ) (n -= 1), this._elements.unshift(t[n]);
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
                    i = e.length;
                for (n = 0; n < i; n += 1) (e[n]._render = t), 'gr' === e[n].ty && this.changeGroupRender(e[n].it, t);
            }),
            (RepeaterModifier.prototype.processShapes = function (e) {
                var t = !1;
                if (this._mdf || e) {
                    var n,
                        i,
                        r,
                        a,
                        s,
                        o,
                        l,
                        u,
                        c = Math.ceil(this.c.v);
                    if (this._groups.length < c) {
                        for (; this._groups.length < c; ) {
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
                    for (r = 0, s = 0; r <= this._groups.length - 1; r += 1) {
                        if (((o = s < c), (this._groups[r]._render = o), this.changeGroupRender(this._groups[r].it, o), !o)) {
                            var f = this.elemsData[r].it,
                                _ = f[f.length - 1];
                            0 !== _.transform.op.v ? ((_.transform.op._mdf = !0), (_.transform.op.v = 0)) : (_.transform.op._mdf = !1);
                        }
                        s += 1;
                    }
                    this._currentCopies = c;
                    var p = this.o.v,
                        h = p % 1,
                        m = p > 0 ? Math.floor(p) : Math.ceil(p),
                        g = this.pMatrix.props,
                        E = this.rMatrix.props,
                        v = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var y = 0;
                    if (p > 0) {
                        for (; y < m; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (y += 1);
                        h && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, h, !1), (y += h));
                    } else if (p < 0) {
                        for (; y > m; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), (y -= 1);
                        h && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -h, !0), (y -= h));
                    }
                    for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s; ) {
                        if (((u = (i = (n = this.elemsData[r].it)[n.length - 1].transform.mProps.v.props).length), (n[n.length - 1].transform.mProps._mdf = !0), (n[n.length - 1].transform.op._mdf = !0), (n[n.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1))), 0 !== y)) {
                            for (((0 !== r && 1 === a) || (r !== this._currentCopies - 1 && -1 === a)) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13], E[14], E[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), l = 0; l < u; l += 1) i[l] = this.matrix.props[l];
                            this.matrix.reset();
                        } else for (this.matrix.reset(), l = 0; l < u; l += 1) i[l] = this.matrix.props[l];
                        (y += 1), (s -= 1), (r += a);
                    }
                } else for (s = this._currentCopies, r = 0, a = 1; s; ) (i = (n = this.elemsData[r].it)[n.length - 1].transform.mProps.v.props), (n[n.length - 1].transform.mProps._mdf = !1), (n[n.length - 1].transform.op._mdf = !1), (s -= 1), (r += a);
                return t;
            }),
            (RepeaterModifier.prototype.addShape = function () {}),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.rd = PropertyFactory.getProp(e, t.r, 0, null, this)), (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function (e, t) {
                var n,
                    i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    f,
                    _,
                    p,
                    h = shapePool.newElement();
                h.c = e.c;
                var m = e._length,
                    g = 0;
                for (n = 0; n < m; n += 1) (i = e.v[n]), (a = e.o[n]), (r = e.i[n]), i[0] === a[0] && i[1] === a[1] && i[0] === r[0] && i[1] === r[1] ? ((0 !== n && n !== m - 1) || e.c ? ((s = 0 === n ? e.v[m - 1] : e.v[n - 1]), (l = (o = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(o / 2, t) / o : 0), (u = _ = i[0] + (s[0] - i[0]) * l), (c = p = i[1] - (i[1] - s[1]) * l), (d = u - (u - i[0]) * roundCorner), (f = c - (c - i[1]) * roundCorner), h.setTripleAt(u, c, d, f, _, p, g), (g += 1), (s = n === m - 1 ? e.v[0] : e.v[n + 1]), (l = (o = Math.sqrt(Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2))) ? Math.min(o / 2, t) / o : 0), (u = d = i[0] + (s[0] - i[0]) * l), (c = f = i[1] + (s[1] - i[1]) * l), (_ = u - (u - i[0]) * roundCorner), (p = c - (c - i[1]) * roundCorner), h.setTripleAt(u, c, d, f, _, p, g)) : h.setTripleAt(i[0], i[1], a[0], a[1], r[0], r[1], g)) : h.setTripleAt(e.v[n][0], e.v[n][1], e.o[n][0], e.o[n][1], e.i[n][0], e.i[n][1], g), (g += 1);
                return h;
            }),
            (RoundCornersModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    o = this.shapes.length,
                    l = this.rd.v;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((s = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, r = a.shape.paths._length, i = 0; i < r; i += 1) s.addShape(this.processPath(t[i], l));
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
                var i = Math.sqrt(n);
                return floatZero(i)
                    ? i > 0 && i < 1
                        ? [t]
                        : []
                    : [t - i, t + i].filter(function (e) {
                          return e > 0 && e < 1;
                      });
            }),
            (PolynomialBezier.prototype.split = function (e) {
                if (e <= 0) return [singlePoint(this.points[0]), this];
                if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                var t = lerpPoint(this.points[0], this.points[1], e),
                    n = lerpPoint(this.points[1], this.points[2], e),
                    i = lerpPoint(this.points[2], this.points[3], e),
                    r = lerpPoint(t, n, e),
                    a = lerpPoint(n, i, e),
                    s = lerpPoint(r, a, e);
                return [new PolynomialBezier(this.points[0], t, r, s, !0), new PolynomialBezier(s, a, i, this.points[3], !0)];
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
                var i = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, i, n), i;
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
            (ZigZagModifier.prototype.processPath = function (e, t, n, i) {
                var r = e._length,
                    a = shapePool.newElement();
                if (((a.c = e.c), e.c || (r -= 1), 0 === r)) return a;
                var s = -1,
                    o = PolynomialBezier.shapeSegment(e, 0);
                zigZagCorner(a, e, 0, t, n, i, s);
                for (var l = 0; l < r; l += 1) (s = zigZagSegment(a, o, t, n, i, -s)), (o = l !== r - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % r) : null), zigZagCorner(a, e, l + 1, t, n, i, s);
                return a;
            }),
            (ZigZagModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    o = this.shapes.length,
                    l = this.amplitude.v,
                    u = Math.max(0, Math.round(this.frequency.v)),
                    c = this.pointsType.v;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((s = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, r = a.shape.paths._length, i = 0; i < r; i += 1) s.addShape(this.processPath(t[i], l, u, c));
                        a.shape.paths = a.localShapeCollection;
                    }
                this.dynamicProperties.length || (this._mdf = !1);
            }),
            extendPrototype([ShapeModifier], OffsetPathModifier),
            (OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
                (this.getValue = this.processKeys), (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)), (this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this)), (this.lineJoin = t.lj), (this._isAnimated = 0 !== this.amount.effectsSequence.length);
            }),
            (OffsetPathModifier.prototype.processPath = function (e, t, n, i) {
                var r,
                    a,
                    s,
                    o = shapePool.newElement();
                o.c = e.c;
                var l = e.length();
                e.c || (l -= 1);
                var u = [];
                for (r = 0; r < l; r += 1) (s = PolynomialBezier.shapeSegment(e, r)), u.push(offsetSegmentSplit(s, t));
                if (!e.c) for (r = l - 1; r >= 0; r -= 1) (s = PolynomialBezier.shapeSegmentInverted(e, r)), u.push(offsetSegmentSplit(s, t));
                u = pruneIntersections(u);
                var c = null,
                    d = null;
                for (r = 0; r < u.length; r += 1) {
                    var f = u[r];
                    for (d && (c = joinLines(o, d, f[0], n, i)), d = f[f.length - 1], a = 0; a < f.length; a += 1) (s = f[a]), c && pointEqual(s.points[0], c) ? o.setXYAt(s.points[1][0], s.points[1][1], 'o', o.length() - 1) : o.setTripleAt(s.points[0][0], s.points[0][1], s.points[1][0], s.points[1][1], s.points[0][0], s.points[0][1], o.length()), o.setTripleAt(s.points[3][0], s.points[3][1], s.points[3][0], s.points[3][1], s.points[2][0], s.points[2][1], o.length()), (c = s.points[3]);
                }
                return u.length && joinLines(o, d, u[0][0], n, i), o;
            }),
            (OffsetPathModifier.prototype.processShapes = function (e) {
                var t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    o = this.shapes.length,
                    l = this.amount.v,
                    u = this.miterLimit.v,
                    c = this.lineJoin;
                if (0 !== l)
                    for (n = 0; n < o; n += 1) {
                        if (((s = (a = this.shapes[n]).localShapeCollection), !(!a.shape._mdf && !this._mdf && !e))) for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, r = a.shape.paths._length, i = 0; i < r; i += 1) s.addShape(this.processPath(t[i], l, c, u));
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
            var i = 127988,
                r = 917631,
                a = 917601,
                s = 917626,
                o = 65039,
                l = 8205,
                u = 127462,
                c = 127487,
                d = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'];
            function f(e) {
                var t,
                    n = e.split(','),
                    i = n.length,
                    r = [];
                for (t = 0; t < i; t += 1) 'sans-serif' !== n[t] && 'monospace' !== n[t] && r.push(n[t]);
                return r.join(',');
            }
            function _(e, t) {
                var n = createTag('span');
                n.setAttribute('aria-hidden', !0), (n.style.fontFamily = t);
                var i = createTag('span');
                (i.innerText = 'giItT1WQy@!-/#'), (n.style.position = 'absolute'), (n.style.left = '-10000px'), (n.style.top = '-10000px'), (n.style.fontSize = '300px'), (n.style.fontVariant = 'normal'), (n.style.fontStyle = 'normal'), (n.style.fontWeight = 'normal'), (n.style.letterSpacing = '0'), n.appendChild(i), document.body.appendChild(n);
                var r = i.offsetWidth;
                return (
                    (i.style.fontFamily = f(e) + ', ' + t),
                    {
                        node: i,
                        w: r,
                        parent: n
                    }
                );
            }
            function p() {
                var t,
                    n,
                    i,
                    r = this.fonts.length,
                    a = r;
                for (t = 0; t < r; t += 1) this.fonts[t].loaded ? (a -= 1) : 'n' === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? (this.fonts[t].loaded = !0) : ((n = this.fonts[t].monoCase.node), (i = this.fonts[t].monoCase.w), n.offsetWidth !== i ? ((a -= 1), (this.fonts[t].loaded = !0)) : ((n = this.fonts[t].sansCase.node), (i = this.fonts[t].sansCase.w), n.offsetWidth !== i && ((a -= 1), (this.fonts[t].loaded = !0))), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                0 !== a && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function h(e, t) {
                var n,
                    i = document.body && t ? 'svg' : 'canvas',
                    r = getFontProperties(e);
                if ('svg' === i) {
                    var a = createNS('text');
                    (a.style.fontSize = '100px'), a.setAttribute('font-family', e.fFamily), a.setAttribute('font-style', r.style), a.setAttribute('font-weight', r.weight), (a.textContent = '1'), e.fClass ? ((a.style.fontFamily = 'inherit'), a.setAttribute('class', e.fClass)) : (a.style.fontFamily = e.fFamily), t.appendChild(a), (n = a);
                } else {
                    var s = new OffscreenCanvas(500, 500).getContext('2d');
                    (s.font = r.style + ' ' + r.weight + ' 100px ' + e.fFamily), (n = s);
                }
                return {
                    measureText: function (e) {
                        return 'svg' === i ? ((n.textContent = e), n.getComputedTextLength()) : n.measureText(e).width;
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
                    i = n.length,
                    r = i;
                for (a = 0; a < i; a += 1) {
                    var a,
                        s,
                        o,
                        l = !0;
                    if (((n[a].loaded = !1), (n[a].monoCase = _(n[a].fFamily, 'monospace')), (n[a].sansCase = _(n[a].fFamily, 'sans-serif')), n[a].fPath)) {
                        if ('p' === n[a].fOrigin || 3 === n[a].origin) {
                            if (((s = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[a].fFamily + '"], style[f-origin="3"][f-family="' + n[a].fFamily + '"]')).length > 0 && (l = !1), l)) {
                                var u = createTag('style');
                                u.setAttribute('f-forigin', n[a].fOrigin), u.setAttribute('f-origin', n[a].origin), u.setAttribute('f-family', n[a].fFamily), (u.type = 'text/css'), (u.innerText = '@font-face {font-family: ' + n[a].fFamily + "; font-style: normal; src: url('" + n[a].fPath + "');}"), t.appendChild(u);
                            }
                        } else if ('g' === n[a].fOrigin || 1 === n[a].origin) {
                            for (o = 0, s = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'); o < s.length; o += 1) -1 !== s[o].href.indexOf(n[a].fPath) && (l = !1);
                            if (l) {
                                var c = createTag('link');
                                c.setAttribute('f-forigin', n[a].fOrigin), c.setAttribute('f-origin', n[a].origin), (c.type = 'text/css'), (c.rel = 'stylesheet'), (c.href = n[a].fPath), document.body.appendChild(c);
                            }
                        } else if ('t' === n[a].fOrigin || 2 === n[a].origin) {
                            for (o = 0, s = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'); o < s.length; o += 1) n[a].fPath === s[o].src && (l = !1);
                            if (l) {
                                var d = createTag('link');
                                d.setAttribute('f-forigin', n[a].fOrigin), d.setAttribute('f-origin', n[a].origin), d.setAttribute('rel', 'stylesheet'), d.setAttribute('href', n[a].fPath), t.appendChild(d);
                            }
                        }
                    } else (n[a].loaded = !0), (r -= 1);
                    (n[a].helper = h(n[a], t)), (n[a].cache = {}), this.fonts.push(n[a]);
                }
                0 === r ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function g(e) {
                if (e) {
                    this.chars || (this.chars = []);
                    var t,
                        n,
                        i,
                        r = e.length,
                        a = this.chars.length;
                    for (t = 0; t < r; t += 1) {
                        for (n = 0, i = !1; n < a; ) this.chars[n].style === e[t].style && this.chars[n].fFamily === e[t].fFamily && this.chars[n].ch === e[t].ch && (i = !0), (n += 1);
                        i || (this.chars.push(e[t]), (a += 1));
                    }
                }
            }
            function E(e, n, i) {
                for (var r = 0, a = this.chars.length; r < a; ) {
                    if (this.chars[r].ch === e && this.chars[r].style === n && this.chars[r].fFamily === i) return this.chars[r];
                    r += 1;
                }
                return (('string' == typeof e && 13 !== e.charCodeAt(0)) || !e) && console && console.warn && !this._warned && ((this._warned = !0), console.warn('Missing character from exported characters list: ', e, n, i)), t;
            }
            function v(e, t, n) {
                var i = this.getFontByName(t),
                    r = e;
                if (!i.cache[r]) {
                    var a = i.helper;
                    if (' ' === e) {
                        var s = a.measureText('|' + e + '|'),
                            o = a.measureText('||');
                        i.cache[r] = (s - o) / 100;
                    } else i.cache[r] = a.measureText(e) / 100;
                }
                return i.cache[r] * n;
            }
            function y(e) {
                for (var t = 0, n = this.fonts.length; t < n; ) {
                    if (this.fonts[t].fName === e) return this.fonts[t];
                    t += 1;
                }
                return this.fonts[0];
            }
            function I(e) {
                var t = 0,
                    n = e.charCodeAt(0);
                if (n >= 55296 && n <= 56319) {
                    var i = e.charCodeAt(1);
                    i >= 56320 && i <= 57343 && (t = (n - 55296) * 1024 + i - 56320 + 65536);
                }
                return t;
            }
            function T(e, t) {
                var n = e.toString(16) + t.toString(16);
                return -1 !== d.indexOf(n);
            }
            function b(e) {
                return e === l;
            }
            function S(e) {
                return e === o;
            }
            function A(e) {
                var t = I(e);
                return !!(t >= u) && !!(t <= c);
            }
            function N(e) {
                return A(e.substr(0, 2)) && A(e.substr(2, 2));
            }
            function C(e) {
                return -1 !== n.indexOf(e);
            }
            function R(e, t) {
                var n = I(e.substr(t, 2));
                if (n !== i) return !1;
                var o = 0;
                for (t += 2; o < 5; ) {
                    if ((n = I(e.substr(t, 2))) < a || n > s) return !1;
                    (o += 1), (t += 2);
                }
                return I(e.substr(t, 2)) === r;
            }
            function O() {
                this.isLoaded = !0;
            }
            var D = function () {
                (this.fonts = []), (this.chars = null), (this.typekitLoaded = 0), (this.isLoaded = !1), (this._warned = !1), (this.initTime = Date.now()), (this.setIsLoadedBinded = this.setIsLoaded.bind(this)), (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
            };
            (D.isModifier = T), (D.isZeroWidthJoiner = b), (D.isFlagEmoji = N), (D.isRegionalCode = A), (D.isCombinedCharacter = C), (D.isRegionalFlag = R), (D.isVariationSelector = S), (D.BLACK_FLAG_CODE_POINT = i);
            var x = {
                addChars: g,
                addFonts: m,
                getCharData: E,
                getFontByName: y,
                measureText: v,
                checkLoadedFonts: p,
                setIsLoaded: O
            };
            return (D.prototype = x), D;
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
                i,
                r = e.ef || [];
            this.effectElements = [];
            var a = r.length;
            for (n = 0; n < a; n += 1) (i = new GroupEffect(r[n], t)), this.effectElements.push(i);
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
            var i = this.globalData.getAssetsPath(this.assetData);
            (this.audio = this.globalData.audioController.createAudio(i)), (this._currentTime = 0), this.globalData.audioController.addAudio(this), (this._volumeMultiplier = 1), (this._volume = 1), (this._previousVolume = null), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : { _placeholder: !0 }), (this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : { k: [100] }, 1, 0.01, this));
        }
        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function (e, t) {
                (this.data = e), (this.effectElements = []), this.initDynamicPropertyContainer(t);
                var n,
                    i,
                    r = this.data.ef.length,
                    a = this.data.ef;
                for (n = 0; n < r; n += 1) {
                    switch (((i = null), a[n].ty)) {
                        case 0:
                            i = new SliderEffect(a[n], t, this);
                            break;
                        case 1:
                            i = new AngleEffect(a[n], t, this);
                            break;
                        case 2:
                            i = new ColorEffect(a[n], t, this);
                            break;
                        case 3:
                            i = new PointEffect(a[n], t, this);
                            break;
                        case 4:
                        case 7:
                            i = new CheckboxEffect(a[n], t, this);
                            break;
                        case 10:
                            i = new LayerIndexEffect(a[n], t, this);
                            break;
                        case 11:
                            i = new MaskIndexEffect(a[n], t, this);
                            break;
                        case 5:
                            i = new EffectsManager(a[n], t, this);
                            break;
                        default:
                            i = new NoValueEffect(a[n], t, this);
                    }
                    i && this.effectElements.push(i);
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
                            i = e('shape'),
                            r = e('text'),
                            a = e('comp');
                        (this.layerInterface = t(this)), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var s = n.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? (this.compInterface = a(this)) : 4 === this.data.ty ? ((this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface)), (this.layerInterface.content = this.layerInterface.shapeInterface)) : 5 === this.data.ty && ((this.layerInterface.textInterface = r(this)), (this.layerInterface.text = this.layerInterface.textInterface));
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
                        i = this.dynamicProperties.length;
                    for (n = 0; n < i; n += 1) (t || (this._isParent && 'transform' === this.dynamicProperties[n].propType)) && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
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
                    i = this.layers.length;
                for (this.completeLayers = !0, t = i - 1; t >= 0; t -= 1) !this.elements[t] && (n = this.layers[t]).ip - n.st <= e - this.layers[t].st && n.op - n.st > e - this.layers[t].st && this.buildItem(t), (this.completeLayers = !!this.elements[t] && this.completeLayers);
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
                    i = e.length,
                    r = this.layers.length;
                for (t = 0; t < i; t += 1)
                    for (n = 0; n < r; ) {
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
                for (var i = this.elements, r = this.layers, a = 0, s = r.length; a < s; ) r[a].ind == t && (i[a] && !0 !== i[a] ? (n.push(i[a]), i[a].setAsParent(), void 0 !== r[a].parent ? this.buildElementParenting(e, r[a].parent, n) : e.setHierarchy(n)) : (this.buildItem(a), this.addPendingElement(e))), (a += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function (e) {
                this.pendingElements.push(e);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1)
                    if (e[t].xt) {
                        var i = this.createComp(e[t]);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
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
                        i,
                        r = this.elements.length;
                    for (i = 0; i < r; i += 1)
                        if (this.elements[i].data.nm === t) {
                            n = this.elements[i];
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
            var i = this.globalData.defs,
                r = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(r)), (this.solidPath = '');
            var a = this.masksProperties,
                s = 0,
                o = [],
                l = createElementID(),
                u = 'clipPath',
                c = 'clip-path';
            for (d = 0; d < r; d += 1)
                if (((('a' !== a[d].mode && 'n' !== a[d].mode) || a[d].inv || 100 !== a[d].o.k || a[d].o.x) && ((u = 'mask'), (c = 'mask')), ('s' === a[d].mode || 'i' === a[d].mode) && 0 === s ? ((h = createNS('rect')).setAttribute('fill', '#ffffff'), h.setAttribute('width', this.element.comp.data.w || 0), h.setAttribute('height', this.element.comp.data.h || 0), o.push(h)) : (h = null), (f = createNS('path')), 'n' === a[d].mode))
                    (this.viewData[d] = {
                        op: PropertyFactory.getProp(this.element, a[d].o, 0, 0.01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, a[d], 3),
                        elem: f,
                        lastPath: ''
                    }),
                        i.appendChild(f);
                else {
                    if (
                        ((s += 1),
                        f.setAttribute('fill', 's' === a[d].mode ? '#000000' : '#ffffff'),
                        f.setAttribute('clip-rule', 'nonzero'),
                        0 !== a[d].x.k ? ((u = 'mask'), (c = 'mask'), (E = PropertyFactory.getProp(this.element, a[d].x, 0, null, this.element)), (v = createElementID()), (m = createNS('filter')).setAttribute('id', v), (g = createNS('feMorphology')).setAttribute('operator', 'erode'), g.setAttribute('in', 'SourceGraphic'), g.setAttribute('radius', '0'), m.appendChild(g), i.appendChild(m), f.setAttribute('stroke', 's' === a[d].mode ? '#000000' : '#ffffff')) : ((g = null), (E = null)),
                        (this.storedData[d] = {
                            elem: f,
                            x: E,
                            expan: g,
                            lastPath: '',
                            lastOperator: '',
                            filterId: v,
                            lastRadius: 0
                        }),
                        'i' === a[d].mode)
                    ) {
                        p = o.length;
                        var d,
                            f,
                            _,
                            p,
                            h,
                            m,
                            g,
                            E,
                            v,
                            y = createNS('g');
                        for (_ = 0; _ < p; _ += 1) y.appendChild(o[_]);
                        var I = createNS('mask');
                        I.setAttribute('mask-type', 'alpha'), I.setAttribute('id', l + '_' + s), I.appendChild(f), i.appendChild(I), y.setAttribute('mask', 'url(' + getLocationHref() + '#' + l + '_' + s + ')'), (o.length = 0), o.push(y);
                    } else o.push(f);
                    a[d].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        (this.viewData[d] = {
                            elem: f,
                            lastPath: '',
                            op: PropertyFactory.getProp(this.element, a[d].o, 0, 0.01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, a[d], 3),
                            invRect: h
                        }),
                        this.viewData[d].prop.k || this.drawPath(a[d], this.viewData[d].prop.v, this.viewData[d]);
                }
            for (d = 0, this.maskElement = createNS(u), r = o.length; d < r; d += 1) this.maskElement.appendChild(o[d]);
            s > 0 && (this.maskElement.setAttribute('id', l), this.element.maskedElement.setAttribute(c, 'url(' + getLocationHref() + '#' + l + ')'), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
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
                        i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; n < i; ) {
                            if (this.hierarchy[n].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break;
                            }
                            n += 1;
                        }
                    if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), n = 0; n < i; n += 1) t.multiply(this.hierarchy[n].finalTransform.mProp.v);
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
                            var i = this.localTransforms[e].matrix;
                            n.multiply(i);
                        }
                        n.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var r = this.finalTransform.localOpacity;
                        for (e = 0; e < t; e += 1) r *= 0.01 * this.localTransforms[e].opacity;
                        this.finalTransform.localOpacity = r;
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
                    i = [];
                i.push(this.finalTransform);
                for (var r = !0, a = this.comp; r; ) a.finalTransform ? (a.data.hasMask && i.splice(0, 0, a.finalTransform), (a = a.comp)) : (r = !1);
                var s = i.length;
                for (t = 0; t < s; t += 1) (n = i[t].mat.applyToPointArray(0, 0, 0)), (e = [e[0] - n[0], e[1] - n[1], 0]);
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
                    i = this.masksProperties.length;
                for (t = 0; t < i; t += 1)
                    if (((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute('fill-opacity', this.viewData[t].op.v), 'n' !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute('transform', n.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e)))) {
                        var r = this.storedData[t].expan;
                        this.storedData[t].x.v < 0 ? ('erode' !== this.storedData[t].lastOperator && ((this.storedData[t].lastOperator = 'erode'), this.storedData[t].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[t].filterId + ')')), r.setAttribute('radius', -this.storedData[t].x.v)) : ('dilate' !== this.storedData[t].lastOperator && ((this.storedData[t].lastOperator = 'dilate'), this.storedData[t].elem.setAttribute('filter', null)), this.storedData[t].elem.setAttribute('stroke-width', 2 * this.storedData[t].x.v));
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
                var i,
                    r,
                    a = ' M' + t.v[0][0] + ',' + t.v[0][1];
                for (i = 1, r = t._length; i < r; i += 1) a += ' C' + t.o[i - 1][0] + ',' + t.o[i - 1][1] + ' ' + t.i[i][0] + ',' + t.i[i][1] + ' ' + t.v[i][0] + ',' + t.v[i][1];
                if ((t.c && r > 1 && (a += ' C' + t.o[i - 1][0] + ',' + t.o[i - 1][1] + ' ' + t.i[0][0] + ',' + t.i[0][1] + ' ' + t.v[0][0] + ',' + t.v[0][1]), n.lastPath !== a)) {
                    var s = '';
                    n.elem && (t.c && (s = e.inv ? this.solidPath + a : a), n.elem.setAttribute('d', s)), (n.lastPath = a);
                }
            }),
            (MaskElement.prototype.destroy = function () {
                (this.element = null), (this.globalData = null), (this.maskElement = null), (this.data = null), (this.masksProperties = null);
            });
        var filtersFactory = (function () {
                var e = {};
                function t(e, t) {
                    var n = createNS('filter');
                    return n.setAttribute('id', e), !0 !== t && (n.setAttribute('filterUnits', 'objectBoundingBox'), n.setAttribute('x', '0%'), n.setAttribute('y', '0%'), n.setAttribute('width', '100%'), n.setAttribute('height', '100%')), n;
                }
                function n() {
                    var e = createNS('feColorMatrix');
                    return e.setAttribute('type', 'matrix'), e.setAttribute('color-interpolation-filters', 'sRGB'), e.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'), e;
                }
                return (e.createFilter = t), (e.createAlphaToLuminanceFilter = n), e;
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
                i = 'SourceGraphic',
                r = e.data.ef ? e.data.ef.length : 0,
                a = createElementID(),
                s = filtersFactory.createFilter(a, !0),
                o = 0;
            for (t = 0, this.filters = []; t < r; t += 1) {
                n = null;
                var l = e.data.ef[t].ty;
                registeredEffects$1[l] && ((n = new registeredEffects$1[l].effect(s, e.effectsManager.effectElements[t], e, idPrefix + o, i)), (i = idPrefix + o), registeredEffects$1[l].countsAsEffect && (o += 1)), n && this.filters.push(n);
            }
            o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + a + ')')), this.filters.length && e.addRenderableComponent(this);
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
                    i = [];
                for (t = 0; t < n; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
                return i;
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
                            i = createNS('path');
                        i.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
                        var r = createElementID();
                        if ((n.setAttribute('id', r), n.appendChild(i), this.globalData.defs.appendChild(n), this.checkMasks())) {
                            var a = createNS('g');
                            a.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + r + ')'), a.appendChild(this.layerElement), (this.transformedElement = a), e ? e.appendChild(this.transformedElement) : (this.baseElement = this.transformedElement);
                        } else this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + r + ')');
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
                            i,
                            r,
                            a = this.layerId + '_' + e;
                        if (1 === e || 3 === e) {
                            var s = createNS('mask');
                            s.setAttribute('id', a), s.setAttribute('mask-type', 3 === e ? 'luminance' : 'alpha'), (i = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), s.appendChild(i), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== e || (s.setAttribute('mask-type', 'luminance'), (t = createElementID()), (n = filtersFactory.createFilter(t)), this.globalData.defs.appendChild(n), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS('g')).appendChild(i), s.appendChild(r), r.setAttribute('filter', 'url(' + getLocationHref() + '#' + t + ')'));
                        } else if (2 === e) {
                            var o = createNS('mask');
                            o.setAttribute('id', a), o.setAttribute('mask-type', 'alpha');
                            var l = createNS('g');
                            o.appendChild(l), (t = createElementID()), (n = filtersFactory.createFilter(t));
                            var u = createNS('feComponentTransfer');
                            u.setAttribute('in', 'SourceGraphic'), n.appendChild(u);
                            var c = createNS('feFuncA');
                            c.setAttribute('type', 'table'), c.setAttribute('tableValues', '1.0 0.0'), u.appendChild(c), this.globalData.defs.appendChild(n);
                            var d = createNS('rect');
                            d.setAttribute('width', this.comp.data.w), d.setAttribute('height', this.comp.data.h), d.setAttribute('x', '0'), d.setAttribute('y', '0'), d.setAttribute('fill', '#ffffff'), d.setAttribute('opacity', '0'), l.setAttribute('filter', 'url(' + getLocationHref() + '#' + t + ')'), l.appendChild(d), (i = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), l.appendChild(i), featureSupport.maskType || (o.setAttribute('mask-type', 'luminance'), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS('g')), l.appendChild(d), r.appendChild(this.layerElement), l.appendChild(r)), this.globalData.defs.appendChild(o);
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
                                !this.data.hd && !this.hidden && (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
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
                        for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
                    }
                },
                searchProcessedElement: function (e) {
                    for (var t = this.processedElements, n = 0, i = t.length; n < i; ) {
                        if (t[n].elem === e) return t[n].pos;
                        n += 1;
                    }
                    return 0;
                },
                addProcessedElement: function (e, t) {
                    for (var n = this.processedElements, i = n.length; i; )
                        if (n[(i -= 1)].elem === e) {
                            n[i].pos = t;
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
            for (var i = 0, r = e.length; i < r; ) {
                if (e[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i += 1;
            }
        }
        function SVGStyleData(e, t) {
            (this.data = e), (this.type = e.ty), (this.d = ''), (this.lvl = t), (this._mdf = !1), (this.closed = !0 === e.hd), (this.pElem = createNS('path')), (this.msElem = null);
        }
        function DashProperty(e, t, n, i) {
            (this.elem = e), (this.frameId = -1), (this.dataProps = createSizedArray(t.length)), (this.renderer = n), (this.k = !1), (this.dashStr = ''), (this.dashArray = createTypedArray('float32', t.length ? t.length - 1 : 0)), (this.dashoffset = createTypedArray('float32', 1)), this.initDynamicPropertyContainer(i);
            var r,
                a,
                s = t.length || 0;
            for (r = 0; r < s; r += 1)
                (a = PropertyFactory.getProp(e, t[r].v, 0, 0, this)),
                    (this.k = a.k || this.k),
                    (this.dataProps[r] = {
                        n: t[r].n,
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
            var i = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
            (this.o = createTypedArray('float32', i)), (this._cmdf = !1), (this._omdf = !1), (this._collapsable = this.checkCollapsable()), (this._hasOpacity = i), this.initDynamicPropertyContainer(n), (this.prop = PropertyFactory.getProp(e, t.k, 1, null, this)), (this.k = this.prop.k), this.getValue(!0);
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
                for (var n = 0, i = this.o.length / 2; n < i; ) {
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
                        i,
                        r = 4 * this.data.p;
                    for (t = 0; t < r; t += 1) (n = t % 4 == 0 ? 100 : 255), (i = Math.round(this.prop.v[t] * n)), this.c[t] !== i && ((this.c[t] = i), (this._cmdf = !e));
                    if (this.o.length) for (r = this.prop.v.length, t = 4 * this.data.p; t < r; t += 1) (n = t % 2 == 0 ? 100 : 1), (i = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t]), this.o[t - 4 * this.data.p] !== i && ((this.o[t - 4 * this.data.p] = i), (this._omdf = !e));
                    this._mdf = !e;
                }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty),
            (SVGGradientFillStyleData.prototype.initGradientData = function (e, t, n) {
                (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)), (this.s = PropertyFactory.getProp(e, t.s, 1, null, this)), (this.e = PropertyFactory.getProp(e, t.e, 1, null, this)), (this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, 0.01, this)), (this.a = PropertyFactory.getProp(e, t.a || { k: 0 }, 0, degToRads, this)), (this.g = new GradientProperty(e, t.g, this)), (this.style = n), (this.stops = []), this.setGradientData(n.pElem, t), this.setGradientOpacity(t, n), (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
                var n,
                    i,
                    r,
                    a = createElementID(),
                    s = createNS(1 === t.t ? 'linearGradient' : 'radialGradient');
                s.setAttribute('id', a), s.setAttribute('spreadMethod', 'pad'), s.setAttribute('gradientUnits', 'userSpaceOnUse');
                var o = [];
                for (i = 0, r = 4 * t.g.p; i < r; i += 4) (n = createNS('stop')), s.appendChild(n), o.push(n);
                e.setAttribute('gf' === t.ty ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + a + ')'), (this.gf = s), (this.cst = o);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, t) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var n,
                        i,
                        r,
                        a = createNS('mask'),
                        s = createNS('path');
                    a.appendChild(s);
                    var o = createElementID(),
                        l = createElementID();
                    a.setAttribute('id', l);
                    var u = createNS(1 === e.t ? 'linearGradient' : 'radialGradient');
                    u.setAttribute('id', o), u.setAttribute('spreadMethod', 'pad'), u.setAttribute('gradientUnits', 'userSpaceOnUse'), (r = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
                    var c = this.stops;
                    for (i = 4 * e.g.p; i < r; i += 2) (n = createNS('stop')).setAttribute('stop-color', 'rgb(255,255,255)'), u.appendChild(n), c.push(n);
                    s.setAttribute('gf' === e.ty ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + o + ')'), 'gs' === e.ty && (s.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]), s.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]), 1 === e.lj && s.setAttribute('stroke-miterlimit', e.ml)), (this.of = u), (this.ms = a), (this.ost = c), (this.maskId = l), (t.msElem = s);
                }
            }),
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function (e, t, n, i) {
                if (0 === t) return '';
                var r,
                    a = e.o,
                    s = e.i,
                    o = e.v,
                    l = ' M' + i.applyToPointStringified(o[0][0], o[0][1]);
                for (r = 1; r < t; r += 1) l += ' C' + i.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + ' ' + i.applyToPointStringified(s[r][0], s[r][1]) + ' ' + i.applyToPointStringified(o[r][0], o[r][1]);
                return n && t && (l += ' C' + i.applyToPointStringified(a[r - 1][0], a[r - 1][1]) + ' ' + i.applyToPointStringified(s[0][0], s[0][1]) + ' ' + i.applyToPointStringified(o[0][0], o[0][1]) + 'z'), l;
            },
            SVGElementsRenderer = (function () {
                var e = new Matrix(),
                    t = new Matrix();
                function n(e, t, n) {
                    (n || t.transform.op._mdf) && t.transform.container.setAttribute('opacity', t.transform.op.v), (n || t.transform.mProps._mdf) && t.transform.container.setAttribute('transform', t.transform.mProps.v.to2dCSS());
                }
                function i() {}
                function r(n, i, r) {
                    var a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        f,
                        _,
                        p,
                        h = i.styles.length,
                        m = i.lvl;
                    for (c = 0; c < h; c += 1) {
                        if (((l = i.sh._mdf || r), i.styles[c].lvl < m)) {
                            for (f = t.reset(), _ = m - i.styles[c].lvl, p = i.transformers.length - 1; !l && _ > 0; ) (l = i.transformers[p].mProps._mdf || l), (_ -= 1), (p -= 1);
                            if (l) for (_ = m - i.styles[c].lvl, p = i.transformers.length - 1; _ > 0; ) f.multiply(i.transformers[p].mProps.v), (_ -= 1), (p -= 1);
                        } else f = e;
                        if (((s = (d = i.sh.paths)._length), l)) {
                            for (a = 0, o = ''; a < s; a += 1) (u = d.shapes[a]) && u._length && (o += buildShapeString(u, u._length, u.c, f));
                            i.caches[c] = o;
                        } else o = i.caches[c];
                        (i.styles[c].d += !0 === n.hd ? '' : o), (i.styles[c]._mdf = l || i.styles[c]._mdf);
                    }
                }
                function a(e, t, n) {
                    var i = t.style;
                    (t.c._mdf || n) && i.pElem.setAttribute('fill', 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n) && i.pElem.setAttribute('fill-opacity', t.o.v);
                }
                function s(e, t, n) {
                    o(e, t, n), l(e, t, n);
                }
                function o(e, t, n) {
                    var i,
                        r,
                        a,
                        s,
                        o,
                        l = t.gf,
                        u = t.g._hasOpacity,
                        c = t.s.v,
                        d = t.e.v;
                    if (t.o._mdf || n) {
                        var f = 'gf' === e.ty ? 'fill-opacity' : 'stroke-opacity';
                        t.style.pElem.setAttribute(f, t.o.v);
                    }
                    if (t.s._mdf || n) {
                        var _ = 1 === e.t ? 'x1' : 'cx',
                            p = 'x1' === _ ? 'y1' : 'cy';
                        l.setAttribute(_, c[0]), l.setAttribute(p, c[1]), u && !t.g._collapsable && (t.of.setAttribute(_, c[0]), t.of.setAttribute(p, c[1]));
                    }
                    if (t.g._cmdf || n) {
                        i = t.cst;
                        var h = t.g.c;
                        for (r = 0, a = i.length; r < a; r += 1) (s = i[r]).setAttribute('offset', h[4 * r] + '%'), s.setAttribute('stop-color', 'rgb(' + h[4 * r + 1] + ',' + h[4 * r + 2] + ',' + h[4 * r + 3] + ')');
                    }
                    if (u && (t.g._omdf || n)) {
                        var m = t.g.o;
                        for (r = 0, a = (i = t.g._collapsable ? t.cst : t.ost).length; r < a; r += 1) (s = i[r]), t.g._collapsable || s.setAttribute('offset', m[2 * r] + '%'), s.setAttribute('stop-opacity', m[2 * r + 1]);
                    }
                    if (1 === e.t) (t.e._mdf || n) && (l.setAttribute('x2', d[0]), l.setAttribute('y2', d[1]), u && !t.g._collapsable && (t.of.setAttribute('x2', d[0]), t.of.setAttribute('y2', d[1])));
                    else if (((t.s._mdf || t.e._mdf || n) && ((o = Math.sqrt(Math.pow(c[0] - d[0], 2) + Math.pow(c[1] - d[1], 2))), l.setAttribute('r', o), u && !t.g._collapsable && t.of.setAttribute('r', o)), t.e._mdf || t.h._mdf || t.a._mdf || n)) {
                        o || (o = Math.sqrt(Math.pow(c[0] - d[0], 2) + Math.pow(c[1] - d[1], 2)));
                        var g = Math.atan2(d[1] - c[1], d[0] - c[0]),
                            E = t.h.v;
                        E >= 1 ? (E = 0.99) : E <= -1 && (E = -0.99);
                        var v = o * E,
                            y = Math.cos(g + t.a.v) * v + c[0],
                            I = Math.sin(g + t.a.v) * v + c[1];
                        l.setAttribute('fx', y), l.setAttribute('fy', I), u && !t.g._collapsable && (t.of.setAttribute('fx', y), t.of.setAttribute('fy', I));
                    }
                }
                function l(e, t, n) {
                    var i = t.style,
                        r = t.d;
                    r && (r._mdf || n) && r.dashStr && (i.pElem.setAttribute('stroke-dasharray', r.dashStr), i.pElem.setAttribute('stroke-dashoffset', r.dashoffset[0])), t.c && (t.c._mdf || n) && i.pElem.setAttribute('stroke', 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n) && i.pElem.setAttribute('stroke-opacity', t.o.v), (t.w._mdf || n) && (i.pElem.setAttribute('stroke-width', t.w.v), i.msElem && i.msElem.setAttribute('stroke-width', t.w.v));
                }
                return {
                    createRenderFunction: function (e) {
                        switch (e.ty) {
                            case 'fl':
                                return a;
                            case 'gf':
                                return o;
                            case 'gs':
                                return s;
                            case 'st':
                                return l;
                            case 'sh':
                            case 'el':
                            case 'rc':
                            case 'sr':
                                return r;
                            case 'tr':
                                return n;
                            case 'no':
                                return i;
                            default:
                                return null;
                        }
                    }
                };
            })();
        function SVGShapeElement(e, t, n) {
            (this.shapes = []), (this.shapesData = e.shapes), (this.stylesList = []), (this.shapeModifiers = []), (this.itemsData = []), (this.processedElements = []), (this.animatedContents = []), this.initElement(e, t, n), (this.prevViewData = []);
        }
        function LetterProps(e, t, n, i, r, a) {
            (this.o = e),
                (this.sw = t),
                (this.sc = n),
                (this.fc = i),
                (this.m = r),
                (this.p = a),
                (this._mdf = {
                    o: !0,
                    sw: !!t,
                    sc: !!n,
                    fc: !!i,
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
                    i,
                    r = this.shapes.length,
                    a = this.stylesList.length,
                    s = [],
                    o = !1;
                for (n = 0; n < a; n += 1) {
                    for (e = 0, i = this.stylesList[n], o = !1, s.length = 0; e < r; e += 1) -1 !== (t = this.shapes[e]).styles.indexOf(i) && (s.push(t), (o = t._isAnimated || o));
                    s.length > 1 && o && this.setShapesAsAnimated(s);
                }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
                var t,
                    n = e.length;
                for (t = 0; t < n; t += 1) e[t].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function (e, t) {
                var n,
                    i = new SVGStyleData(e, t),
                    r = i.pElem;
                return 'st' === e.ty ? (n = new SVGStrokeStyleData(this, e, i)) : 'fl' === e.ty ? (n = new SVGFillStyleData(this, e, i)) : 'gf' === e.ty || 'gs' === e.ty ? ((n = new ('gf' === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, i)), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), r.setAttribute('mask', 'url(' + getLocationHref() + '#' + n.maskId + ')'))) : 'no' === e.ty && (n = new SVGNoStyleData(this, e, i)), ('st' === e.ty || 'gs' === e.ty) && (r.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]), r.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]), r.setAttribute('fill-opacity', '0'), 1 === e.lj && r.setAttribute('stroke-miterlimit', e.ml)), 2 === e.r && r.setAttribute('fill-rule', 'evenodd'), e.ln && r.setAttribute('id', e.ln), e.cl && r.setAttribute('class', e.cl), e.bm && (r.style['mix-blend-mode'] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, n), n;
            }),
            (SVGShapeElement.prototype.createGroupElement = function (e) {
                var t = new ShapeGroupData();
                return e.ln && t.gr.setAttribute('id', e.ln), e.cl && t.gr.setAttribute('class', e.cl), e.bm && (t.gr.style['mix-blend-mode'] = getBlendMode(e.bm)), t;
            }),
            (SVGShapeElement.prototype.createTransformElement = function (e, t) {
                var n = TransformPropertyFactory.getTransformProperty(this, e, this),
                    i = new SVGTransformData(n, n.o, t);
                return this.addToAnimatedContents(e, i), i;
            }),
            (SVGShapeElement.prototype.createShapeElement = function (e, t, n) {
                var i = 4;
                'rc' === e.ty ? (i = 5) : 'el' === e.ty ? (i = 6) : 'sr' === e.ty && (i = 7);
                var r = new SVGShapeData(t, n, ShapePropertyFactory.getShapeProp(this, e, i, this));
                return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(e, r), r;
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
                for (var n = 0, i = this.animatedContents.length; n < i; ) {
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
                    i = this.stylesList.length;
                for (t = 0; t < i; t += 1) this.stylesList[t].closed || n.push(this.stylesList[t]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var e,
                    t = this.itemsData.length;
                for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function (e, t, n, i, r, a, s) {
                var o,
                    l,
                    u,
                    c,
                    d,
                    f,
                    _ = [].concat(a),
                    p = e.length - 1,
                    h = [],
                    m = [];
                for (o = p; o >= 0; o -= 1) {
                    if (((f = this.searchProcessedElement(e[o])) ? (t[o] = n[f - 1]) : (e[o]._render = s), 'fl' === e[o].ty || 'st' === e[o].ty || 'gf' === e[o].ty || 'gs' === e[o].ty || 'no' === e[o].ty)) f ? (t[o].style.closed = !1) : (t[o] = this.createStyleElement(e[o], r)), e[o]._render && t[o].style.pElem.parentNode !== i && i.appendChild(t[o].style.pElem), h.push(t[o].style);
                    else if ('gr' === e[o].ty) {
                        if (f) for (l = 0, u = t[o].it.length; l < u; l += 1) t[o].prevViewData[l] = t[o].it[l];
                        else t[o] = this.createGroupElement(e[o]);
                        this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, r + 1, _, s), e[o]._render && t[o].gr.parentNode !== i && i.appendChild(t[o].gr);
                    } else 'tr' === e[o].ty ? (f || (t[o] = this.createTransformElement(e[o], i)), (c = t[o].transform), _.push(c)) : 'sh' === e[o].ty || 'rc' === e[o].ty || 'el' === e[o].ty || 'sr' === e[o].ty ? (f || (t[o] = this.createShapeElement(e[o], _, r)), this.setElementStyles(t[o])) : 'tm' === e[o].ty || 'rd' === e[o].ty || 'ms' === e[o].ty || 'pb' === e[o].ty || 'zz' === e[o].ty || 'op' === e[o].ty ? (f ? ((d = t[o]).closed = !1) : ((d = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), (t[o] = d), this.shapeModifiers.push(d)), m.push(d)) : 'rp' === e[o].ty && (f ? ((d = t[o]).closed = !0) : ((d = ShapeModifiers.getModifier(e[o].ty)), (t[o] = d), d.init(this, e, o, t), this.shapeModifiers.push(d), (s = !1)), m.push(d));
                    this.addProcessedElement(e[o], o + 1);
                }
                for (o = 0, p = h.length; o < p; o += 1) h[o].closed = !0;
                for (o = 0, p = m.length; o < p; o += 1) m[o].closed = !0;
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
            (LetterProps.prototype.update = function (e, t, n, i, r, a) {
                (this._mdf.o = !1), (this._mdf.sw = !1), (this._mdf.sc = !1), (this._mdf.fc = !1), (this._mdf.m = !1), (this._mdf.p = !1);
                var s = !1;
                return this.o !== e && ((this.o = e), (this._mdf.o = !0), (s = !0)), this.sw !== t && ((this.sw = t), (this._mdf.sw = !0), (s = !0)), this.sc !== n && ((this.sc = n), (this._mdf.sc = !0), (s = !0)), this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (s = !0)), this.m !== r && ((this.m = r), (this._mdf.m = !0), (s = !0)), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && ((this.p = a), (this._mdf.p = !0), (s = !0)), s;
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
                        i = this.keysIndex;
                    if (this.lock) {
                        this.setCurrentData(this.currentData);
                        return;
                    }
                    (this.lock = !0), (this._mdf = !1);
                    var r = this.effectsSequence.length,
                        a = e || this.data.d.k[this.keysIndex].s;
                    for (t = 0; t < r; t += 1) a = i !== this.keysIndex ? this.effectsSequence[t](a, a.t) : this.effectsSequence[t](this.currentData, a.t);
                    n !== a && this.setCurrentData(a), (this.v = this.currentData), (this.pv = this.v), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                }
            }),
            (TextProperty.prototype.getKeyframeValue = function () {
                for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, n = 0, i = e.length; n <= i - 1 && n !== i - 1 && !(e[n + 1].t > t); ) n += 1;
                return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s;
            }),
            (TextProperty.prototype.buildFinalText = function (e) {
                for (var t, n, i = [], r = 0, a = e.length, s = !1, o = !1, l = ''; r < a; ) (s = o), (o = !1), (t = e.charCodeAt(r)), (l = e.charAt(r)), FontManager.isCombinedCharacter(t) ? (s = !0) : t >= 55296 && t <= 56319 ? (FontManager.isRegionalFlag(e, r) ? (l = e.substr(r, 14)) : (n = e.charCodeAt(r + 1)) >= 56320 && n <= 57343 && (FontManager.isModifier(t, n) ? ((l = e.substr(r, 2)), (s = !0)) : (l = FontManager.isFlagEmoji(e.substr(r, 4)) ? e.substr(r, 4) : e.substr(r, 2)))) : t > 56319 ? ((n = e.charCodeAt(r + 1)), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && ((s = !0), (o = !0)), s ? ((i[i.length - 1] += l), (s = !1)) : i.push(l), (r += l.length);
                return i;
            }),
            (TextProperty.prototype.completeTextData = function (e) {
                e.__complete = !0;
                var t = this.elem.globalData.fontManager,
                    n = this.data,
                    i = [],
                    r = 0,
                    a = n.m.g,
                    s = 0,
                    o = 0,
                    l = 0,
                    u = [],
                    c = 0,
                    d = 0,
                    f = t.getFontByName(e.f),
                    _ = 0,
                    p = getFontProperties(f);
                (e.fWeight = p.weight), (e.fStyle = p.style), (e.finalSize = e.s), (e.finalText = this.buildFinalText(e.t)), (g = e.finalText.length), (e.finalLineHeight = e.lh);
                var h = (e.tr / 1000) * e.finalSize;
                if (e.sz)
                    for (var m, g, E, v, y, I, T, b, S, A, N = !0, C = e.sz[0], R = e.sz[1]; N; ) {
                        (A = this.buildFinalText(e.t)), (S = 0), (c = 0), (g = A.length), (h = (e.tr / 1000) * e.finalSize);
                        var O = -1;
                        for (m = 0; m < g; m += 1) (b = A[m].charCodeAt(0)), (E = !1), ' ' === A[m] ? (O = m) : (13 === b || 3 === b) && ((c = 0), (E = !0), (S += e.finalLineHeight || 1.2 * e.finalSize)), t.chars ? ((T = t.getCharData(A[m], f.fStyle, f.fFamily)), (_ = E ? 0 : (T.w * e.finalSize) / 100)) : (_ = t.measureText(A[m], e.f, e.finalSize)), c + _ > C && ' ' !== A[m] ? (-1 === O ? (g += 1) : (m = O), (S += e.finalLineHeight || 1.2 * e.finalSize), A.splice(m, O === m ? 1 : 0, '\r'), (O = -1), (c = 0)) : ((c += _), (c += h));
                        (S += (f.ascent * e.finalSize) / 100), this.canResize && e.finalSize > this.minimumFontSize && R < S ? ((e.finalSize -= 1), (e.finalLineHeight = (e.finalSize * e.lh) / e.s)) : ((e.finalText = A), (g = e.finalText.length), (N = !1));
                    }
                (c = -h), (_ = 0);
                var D = 0;
                for (m = 0; m < g; m += 1)
                    if (
                        ((E = !1),
                        13 === (b = (P = e.finalText[m]).charCodeAt(0)) || 3 === b ? ((D = 0), u.push(c), (d = c > d ? c : d), (c = -2 * h), (v = ''), (E = !0), (l += 1)) : (v = P),
                        t.chars ? ((T = t.getCharData(P, f.fStyle, t.getFontByName(e.f).fFamily)), (_ = E ? 0 : (T.w * e.finalSize) / 100)) : (_ = t.measureText(v, e.f, e.finalSize)),
                        ' ' === P ? (D += _ + h) : ((c += _ + h + D), (D = 0)),
                        i.push({
                            l: _,
                            an: _,
                            add: s,
                            n: E,
                            anIndexes: [],
                            val: v,
                            line: l,
                            animatorJustifyOffset: 0
                        }),
                        2 == a)
                    ) {
                        if (((s += _), '' === v || ' ' === v || m === g - 1)) {
                            for (('' === v || ' ' === v) && (s -= _); o <= m; ) (i[o].an = s), (i[o].ind = r), (i[o].extra = _), (o += 1);
                            (r += 1), (s = 0);
                        }
                    } else if (3 == a) {
                        if (((s += _), '' === v || m === g - 1)) {
                            for ('' === v && (s -= _); o <= m; ) (i[o].an = s), (i[o].ind = r), (i[o].extra = _), (o += 1);
                            (s = 0), (r += 1);
                        }
                    } else (i[r].ind = r), (i[r].extra = 0), (r += 1);
                if (((e.l = i), (d = c > d ? c : d), u.push(c), e.sz)) (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
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
                e.lineWidths = u;
                var x = n.a;
                I = x.length;
                var L = [];
                for (y = 0; y < I; y += 1) {
                    for ((w = x[y]).a.sc && (e.strokeColorAnim = !0), w.a.sw && (e.strokeWidthAnim = !0), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (e.fillColorAnim = !0), U = 0, k = w.s.b, m = 0; m < g; m += 1) ((M = i[m]).anIndexes[y] = U), ((1 == k && '' !== M.val) || (2 == k && '' !== M.val && ' ' !== M.val) || (3 == k && (M.n || ' ' == M.val || m == g - 1)) || (4 == k && (M.n || m == g - 1))) && (1 === w.s.rn && L.push(U), (U += 1));
                    n.a[y].s.totalChars = U;
                    var P,
                        w,
                        M,
                        k,
                        U,
                        G,
                        B = -1;
                    if (1 === w.s.rn) for (m = 0; m < g; m += 1) B != (M = i[m]).anIndexes[y] && ((B = M.anIndexes[y]), (G = L.splice(Math.floor(Math.random() * L.length), 1)[0])), (M.anIndexes[y] = G);
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
            function i(e, t) {
                (this._currentTextLength = -1), (this.k = !1), (this.data = t), (this.elem = e), (this.comp = e.comp), (this.finalS = 0), (this.finalE = 0), this.initDynamicPropertyContainer(e), (this.s = PropertyFactory.getProp(e, t.s || { k: 0 }, 0, 0, this)), 'e' in t ? (this.e = PropertyFactory.getProp(e, t.e, 0, 0, this)) : (this.e = { v: 100 }), (this.o = PropertyFactory.getProp(e, t.o || { k: 0 }, 0, 0, this)), (this.xe = PropertyFactory.getProp(e, t.xe || { k: 0 }, 0, 0, this)), (this.ne = PropertyFactory.getProp(e, t.ne || { k: 0 }, 0, 0, this)), (this.sm = PropertyFactory.getProp(e, t.sm || { k: 100 }, 0, 0, this)), (this.a = PropertyFactory.getProp(e, t.a, 0, 0.01, this)), this.dynamicProperties.length || this.getValue();
            }
            return (
                (i.prototype = {
                    getMult: function (i) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var r = 0,
                            a = 0,
                            s = 1,
                            o = 1;
                        this.ne.v > 0 ? (r = this.ne.v / 100) : (a = -this.ne.v / 100), this.xe.v > 0 ? (s = 1 - this.xe.v / 100) : (o = 1 + this.xe.v / 100);
                        var l = BezierFactory.getBezierEasing(r, a, s, o).get,
                            u = 0,
                            c = this.finalS,
                            d = this.finalE,
                            f = this.data.sh;
                        if (2 === f) u = l((u = d === c ? (i >= d ? 1 : 0) : e(0, t(0.5 / (d - c) + (i - c) / (d - c), 1))));
                        else if (3 === f) u = l((u = d === c ? (i >= d ? 0 : 1) : 1 - e(0, t(0.5 / (d - c) + (i - c) / (d - c), 1))));
                        else if (4 === f) d === c ? (u = 0) : (u = e(0, t(0.5 / (d - c) + (i - c) / (d - c), 1))) < 0.5 ? (u *= 2) : (u = 1 - 2 * (u - 0.5)), (u = l(u));
                        else if (5 === f) {
                            if (d === c) u = 0;
                            else {
                                var _ = d - c,
                                    p = -_ / 2 + (i = t(e(0, i + 0.5 - c), d - c)),
                                    h = _ / 2;
                                u = Math.sqrt(1 - (p * p) / (h * h));
                            }
                            u = l(u);
                        } else 6 === f ? (u = l((u = d === c ? 0 : (1 + Math.cos(Math.PI + (2 * Math.PI * (i = t(e(0, i + 0.5 - c), d - c))) / (d - c))) / 2))) : (i >= n(c) && (u = i - c < 0 ? e(0, t(t(d, 1) - (c - i), 1)) : e(0, t(d - i, 1))), (u = l(u)));
                        if (100 !== this.sm.v) {
                            var m = 0.01 * this.sm.v;
                            0 === m && (m = 1e-8);
                            var g = 0.5 - 0.5 * m;
                            u < g ? (u = 0) : (u = (u - g) / m) > 1 && (u = 1);
                        }
                        return u * this.a.v;
                    },
                    getValue: function (e) {
                        this.iterateDynamicProperties(), (this._mdf = e || this._mdf), (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0), e && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            n = this.o.v / t,
                            i = this.s.v / t + n,
                            r = this.e.v / t + n;
                        if (i > r) {
                            var a = i;
                            (i = r), (r = a);
                        }
                        (this.finalS = i), (this.finalE = r);
                    }
                }),
                extendPrototype([DynamicPropertyContainer], i),
                {
                    getTextSelectorProp: function (e, t, n) {
                        return new i(e, t, n);
                    }
                }
            );
        })();
        function TextAnimatorDataProperty(e, t, n) {
            var i = { propType: !1 },
                r = PropertyFactory.getProp,
                a = t.a;
            (this.a = {
                r: a.r ? r(e, a.r, 0, degToRads, n) : i,
                rx: a.rx ? r(e, a.rx, 0, degToRads, n) : i,
                ry: a.ry ? r(e, a.ry, 0, degToRads, n) : i,
                sk: a.sk ? r(e, a.sk, 0, degToRads, n) : i,
                sa: a.sa ? r(e, a.sa, 0, degToRads, n) : i,
                s: a.s ? r(e, a.s, 1, 0.01, n) : i,
                a: a.a ? r(e, a.a, 1, 0, n) : i,
                o: a.o ? r(e, a.o, 0, 0.01, n) : i,
                p: a.p ? r(e, a.p, 1, 0, n) : i,
                sw: a.sw ? r(e, a.sw, 0, 0, n) : i,
                sc: a.sc ? r(e, a.sc, 1, 0, n) : i,
                fc: a.fc ? r(e, a.fc, 1, 0, n) : i,
                fh: a.fh ? r(e, a.fh, 0, 0, n) : i,
                fs: a.fs ? r(e, a.fs, 0, 0.01, n) : i,
                fb: a.fb ? r(e, a.fb, 0, 0.01, n) : i,
                t: a.t ? r(e, a.t, 0, 0, n) : i
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
                i = PropertyFactory.getProp;
            for (e = 0; e < n; e += 1) (t = this._textData.a[e]), (this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this));
            this._textData.p && 'm' in this._textData.p
                ? ((this._pathData = {
                      a: i(this._elem, this._textData.p.a, 0, 0, this),
                      f: i(this._elem, this._textData.p.f, 0, 0, this),
                      l: i(this._elem, this._textData.p.l, 0, 0, this),
                      r: i(this._elem, this._textData.p.r, 0, 0, this),
                      p: i(this._elem, this._textData.p.p, 0, 0, this),
                      m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                  }),
                  (this._hasMaskedPath = !0))
                : (this._hasMaskedPath = !1),
                (this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this));
        }),
            (TextAnimatorProperty.prototype.getMeasures = function (e, t) {
                if (((this.lettersChangedFlag = t), this._mdf || this._isFirstFrame || t || (this._hasMaskedPath && this._pathData.m._mdf))) {
                    this._isFirstFrame = !1;
                    var n,
                        i,
                        r,
                        a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        f,
                        _,
                        p,
                        h,
                        m,
                        g,
                        E,
                        v,
                        y = this._moreOptions.alignment.v,
                        I = this._animatorsData,
                        T = this._textData,
                        b = this.mHelper,
                        S = this._renderType,
                        A = this.renderedLetters.length,
                        N = e.l;
                    if (this._hasMaskedPath) {
                        if (((H = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                            var C,
                                R,
                                O,
                                D,
                                x,
                                L,
                                P,
                                w,
                                M,
                                k,
                                U,
                                G,
                                B,
                                Z,
                                F,
                                V,
                                j,
                                H,
                                Y,
                                W = H.v;
                            for (
                                this._pathData.r.v && (W = W.reverse()),
                                    x = {
                                        tLength: 0,
                                        segments: []
                                    },
                                    D = W._length - 1,
                                    V = 0,
                                    O = 0;
                                O < D;
                                O += 1
                            )
                                (Y = bez.buildBezierData(W.v[O], W.v[O + 1], [W.o[O][0] - W.v[O][0], W.o[O][1] - W.v[O][1]], [W.i[O + 1][0] - W.v[O + 1][0], W.i[O + 1][1] - W.v[O + 1][1]])), (x.tLength += Y.segmentLength), x.segments.push(Y), (V += Y.segmentLength);
                            (O = D), H.v.c && ((Y = bez.buildBezierData(W.v[O], W.v[0], [W.o[O][0] - W.v[O][0], W.o[O][1] - W.v[O][1]], [W.i[0][0] - W.v[0][0], W.i[0][1] - W.v[0][1]])), (x.tLength += Y.segmentLength), x.segments.push(Y), (V += Y.segmentLength)), (this._pathData.pi = x);
                        }
                        if (((x = this._pathData.pi), (L = this._pathData.f.v), (U = 0), (k = 1), (w = 0), (M = !0), (Z = x.segments), L < 0 && H.v.c)) for (x.tLength < Math.abs(L) && (L = -Math.abs(L) % x.tLength), U = Z.length - 1, k = (B = Z[U].points).length - 1; L < 0; ) (L += B[k].partialLength), (k -= 1) < 0 && ((U -= 1), (k = (B = Z[U].points).length - 1));
                        (G = (B = Z[U].points)[k - 1]), (F = (P = B[k]).partialLength);
                    }
                    (D = N.length), (C = 0), (R = 0);
                    var K = 1.2 * e.finalSize * 0.714,
                        z = !0;
                    a = I.length;
                    var q = -1,
                        Q = L,
                        X = U,
                        J = k,
                        $ = -1,
                        ee = '',
                        et = this.defaultPropsArray;
                    if (2 === e.j || 1 === e.j) {
                        var en = 0,
                            ei = 0,
                            er = 2 === e.j ? -0.5 : -1,
                            ea = 0,
                            es = !0;
                        for (O = 0; O < D; O += 1)
                            if (N[O].n) {
                                for (en && (en += ei); ea < O; ) (N[ea].animatorJustifyOffset = en), (ea += 1);
                                (en = 0), (es = !0);
                            } else {
                                for (r = 0; r < a; r += 1) (n = I[r].a).t.propType && (es && 2 === e.j && (ei += n.t.v * er), (o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)).length ? (en += n.t.v * o[0] * er) : (en += n.t.v * o * er));
                                es = !1;
                            }
                        for (en && (en += ei); ea < O; ) (N[ea].animatorJustifyOffset = en), (ea += 1);
                    }
                    for (O = 0; O < D; O += 1) {
                        if ((b.reset(), (d = 1), N[O].n)) (C = 0), (R += e.yOffset), (R += z ? 1 : 0), (L = Q), (z = !1), this._hasMaskedPath && ((U = X), (k = J), (G = (B = Z[U].points)[k - 1]), (F = (P = B[k]).partialLength), (w = 0)), (ee = ''), (E = ''), (m = ''), (v = ''), (et = this.defaultPropsArray);
                        else {
                            if (this._hasMaskedPath) {
                                if ($ !== N[O].line) {
                                    switch (e.j) {
                                        case 1:
                                            L += V - e.lineWidths[N[O].line];
                                            break;
                                        case 2:
                                            L += (V - e.lineWidths[N[O].line]) / 2;
                                    }
                                    $ = N[O].line;
                                }
                                q !== N[O].ind && (N[q] && (L += N[q].extra), (L += N[O].an / 2), (q = N[O].ind)), (L += y[0] * N[O].an * 0.005);
                                var eo = 0;
                                for (r = 0; r < a; r += 1) (n = I[r].a).p.propType && ((o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)).length ? (eo += n.p.v[0] * o[0]) : (eo += n.p.v[0] * o)), n.a.propType && ((o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)).length ? (eo += n.a.v[0] * o[0]) : (eo += n.a.v[0] * o));
                                for (M = !0, this._pathData.a.v && (L = 0.5 * N[0].an + ((V - this._pathData.f.v - 0.5 * N[0].an - 0.5 * N[N.length - 1].an) * q) / (D - 1) + this._pathData.f.v); M; ) w + F >= L + eo || !B ? ((j = (L + eo - w) / P.partialLength), (u = G.point[0] + (P.point[0] - G.point[0]) * j), (c = G.point[1] + (P.point[1] - G.point[1]) * j), b.translate(-y[0] * N[O].an * 0.005, -(0.01 * (y[1] * K))), (M = !1)) : B && ((w += P.partialLength), (k += 1) >= B.length && ((k = 0), Z[(U += 1)] ? (B = Z[U].points) : H.v.c ? ((k = 0), (B = Z[(U = 0)].points)) : ((w -= P.partialLength), (B = null))), B && ((G = P), (F = (P = B[k]).partialLength)));
                                (l = N[O].an / 2 - N[O].add), b.translate(-l, 0, 0);
                            } else (l = N[O].an / 2 - N[O].add), b.translate(-l, 0, 0), b.translate(-y[0] * N[O].an * 0.005, -y[1] * K * 0.01, 0);
                            for (r = 0; r < a; r += 1) (n = I[r].a).t.propType && ((o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)), (0 !== C || 0 !== e.j) && (this._hasMaskedPath ? (o.length ? (L += n.t.v * o[0]) : (L += n.t.v * o)) : o.length ? (C += n.t.v * o[0]) : (C += n.t.v * o)));
                            for (e.strokeWidthAnim && (_ = e.sw || 0), e.strokeColorAnim && (f = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (p = [e.fc[0], e.fc[1], e.fc[2]]), r = 0; r < a; r += 1) (n = I[r].a).a.propType && ((o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)).length ? b.translate(-n.a.v[0] * o[0], -n.a.v[1] * o[1], n.a.v[2] * o[2]) : b.translate(-n.a.v[0] * o, -n.a.v[1] * o, n.a.v[2] * o));
                            for (r = 0; r < a; r += 1) (n = I[r].a).s.propType && ((o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)).length ? b.scale(1 + (n.s.v[0] - 1) * o[0], 1 + (n.s.v[1] - 1) * o[1], 1) : b.scale(1 + (n.s.v[0] - 1) * o, 1 + (n.s.v[1] - 1) * o, 1));
                            for (r = 0; r < a; r += 1) {
                                if (((n = I[r].a), (o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)), n.sk.propType && (o.length ? b.skewFromAxis(-n.sk.v * o[0], n.sa.v * o[1]) : b.skewFromAxis(-n.sk.v * o, n.sa.v * o)), n.r.propType && (o.length ? b.rotateZ(-n.r.v * o[2]) : b.rotateZ(-n.r.v * o)), n.ry.propType && (o.length ? b.rotateY(n.ry.v * o[1]) : b.rotateY(n.ry.v * o)), n.rx.propType && (o.length ? b.rotateX(n.rx.v * o[0]) : b.rotateX(n.rx.v * o)), n.o.propType && (o.length ? (d += (n.o.v * o[0] - d) * o[0]) : (d += (n.o.v * o - d) * o)), e.strokeWidthAnim && n.sw.propType && (o.length ? (_ += n.sw.v * o[0]) : (_ += n.sw.v * o)), e.strokeColorAnim && n.sc.propType)) for (h = 0; h < 3; h += 1) o.length ? (f[h] += (n.sc.v[h] - f[h]) * o[0]) : (f[h] += (n.sc.v[h] - f[h]) * o);
                                if (e.fillColorAnim && e.fc) {
                                    if (n.fc.propType) for (h = 0; h < 3; h += 1) o.length ? (p[h] += (n.fc.v[h] - p[h]) * o[0]) : (p[h] += (n.fc.v[h] - p[h]) * o);
                                    n.fh.propType && (p = o.length ? addHueToRGB(p, n.fh.v * o[0]) : addHueToRGB(p, n.fh.v * o)), n.fs.propType && (p = o.length ? addSaturationToRGB(p, n.fs.v * o[0]) : addSaturationToRGB(p, n.fs.v * o)), n.fb.propType && (p = o.length ? addBrightnessToRGB(p, n.fb.v * o[0]) : addBrightnessToRGB(p, n.fb.v * o));
                                }
                            }
                            for (r = 0; r < a; r += 1) (n = I[r].a).p.propType && ((o = (i = I[r].s).getMult(N[O].anIndexes[r], T.a[r].s.totalChars)), this._hasMaskedPath ? (o.length ? b.translate(0, n.p.v[1] * o[0], -n.p.v[2] * o[1]) : b.translate(0, n.p.v[1] * o, -n.p.v[2] * o)) : o.length ? b.translate(n.p.v[0] * o[0], n.p.v[1] * o[1], -n.p.v[2] * o[2]) : b.translate(n.p.v[0] * o, n.p.v[1] * o, -n.p.v[2] * o));
                            if ((e.strokeWidthAnim && (m = _ < 0 ? 0 : _), e.strokeColorAnim && (g = 'rgb(' + Math.round(255 * f[0]) + ',' + Math.round(255 * f[1]) + ',' + Math.round(255 * f[2]) + ')'), e.fillColorAnim && e.fc && (E = 'rgb(' + Math.round(255 * p[0]) + ',' + Math.round(255 * p[1]) + ',' + Math.round(255 * p[2]) + ')'), this._hasMaskedPath)) {
                                if ((b.translate(0, -e.ls), b.translate(0, y[1] * K * 0.01 + R, 0), this._pathData.p.v)) {
                                    var el = (180 * Math.atan((P.point[1] - G.point[1]) / (P.point[0] - G.point[0]))) / Math.PI;
                                    P.point[0] < G.point[0] && (el += 180), b.rotate((-el * Math.PI) / 180);
                                }
                                b.translate(u, c, 0), (L -= y[0] * N[O].an * 0.005), N[O + 1] && q !== N[O + 1].ind && ((L += N[O].an / 2), (L += 0.001 * e.tr * e.finalSize));
                            } else {
                                switch ((b.translate(C, R, 0), e.ps && b.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j)) {
                                    case 1:
                                        b.translate(N[O].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[N[O].line]), 0, 0);
                                        break;
                                    case 2:
                                        b.translate(N[O].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[N[O].line]) / 2, 0, 0);
                                }
                                b.translate(0, -e.ls), b.translate(l, 0, 0), b.translate(y[0] * N[O].an * 0.005, y[1] * K * 0.01, 0), (C += N[O].l + 0.001 * e.tr * e.finalSize);
                            }
                            'html' === S ? (ee = b.toCSS()) : 'svg' === S ? (ee = b.to2dCSS()) : (et = [b.props[0], b.props[1], b.props[2], b.props[3], b.props[4], b.props[5], b.props[6], b.props[7], b.props[8], b.props[9], b.props[10], b.props[11], b.props[12], b.props[13], b.props[14], b.props[15]]), (v = d);
                        }
                        A <= O ? ((s = new LetterProps(v, m, g, E, ee, et)), this.renderedLetters.push(s), (A += 1), (this.lettersChangedFlag = !0)) : ((s = this.renderedLetters[O]), (this.lettersChangedFlag = s.update(v, m, g, E, ee, et) || this.lettersChangedFlag));
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
                    i,
                    r = t.length,
                    a = '';
                for (n = 0; n < r; n += 1) 'sh' === t[n].ty && (a += buildShapeString((i = t[n].ks.k), i.i.length, !0, e));
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
            (ITextElement.prototype.applyTextPropertiesToMatrix = function (e, t, n, i, r) {
                switch ((e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j)) {
                    case 1:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]), 0, 0);
                        break;
                    case 2:
                        t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[n]) / 2, 0, 0);
                }
                t.translate(i, r, 0);
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
                var i = createNS('title'),
                    r = createElementID();
                i.setAttribute('id', r), (i.textContent = t.title), this.svgElement.appendChild(i), (n += r);
            }
            if (t && t.description) {
                var a = createNS('desc'),
                    s = createElementID();
                a.setAttribute('id', s), (a.textContent = t.description), this.svgElement.appendChild(a), (n += ' ' + s);
            }
            n && this.svgElement.setAttribute('aria-labelledby', n);
            var o = createNS('defs');
            this.svgElement.appendChild(o);
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
                    defs: o,
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
                for (var t = 0, n = e.length, i = [], r = ''; t < n; ) '\r' === e[t] || '\x03' === e[t] ? (i.push(r), (r = '')) : (r += e[t]), (t += 1);
                return i.push(r), i;
            }),
            (SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
                if (e.shapes && e.shapes.length) {
                    var n = e.shapes[0];
                    if (n.it) {
                        var i = n.it[n.it.length - 1];
                        i.s && ((i.s.k[0] = t), (i.s.k[1] = t));
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
                        i = e.fStyle;
                    this.layerElement.setAttribute('font-style', i), this.layerElement.setAttribute('font-weight', n);
                }
                this.layerElement.setAttribute('aria-label', e.t);
                var r = e.l || [],
                    a = !!this.globalData.fontManager.chars;
                m = r.length;
                var s = this.mHelper,
                    o = '',
                    l = this.data.singleShape,
                    u = 0,
                    c = 0,
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
                        if ((s.reset(), l && (r[h].n && ((u = -f), (c += e.yOffset), (c += d ? 1 : 0), (d = !1)), this.applyTextPropertiesToMatrix(e, s, r[h].line, u, c), (u += r[h].l || 0), (u += f)), a)) {
                            if (1 === (E = this.globalData.fontManager.getCharData(e.finalText[h], t.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)).t) v = new SVGCompElement(E.data, this.globalData, this);
                            else {
                                var h,
                                    m,
                                    g,
                                    E,
                                    v,
                                    y = emptyShapeData;
                                E.data && E.data.shapes && (y = this.buildShapeData(E.data, e.finalSize)), (v = new SVGShapeElement(y, this.globalData, this));
                            }
                            if (this.textSpans[h].glyph) {
                                var I = this.textSpans[h].glyph;
                                this.textSpans[h].childSpan.removeChild(I.layerElement), I.destroy();
                            }
                            (this.textSpans[h].glyph = v), (v._debug = !0), v.prepareFrame(0), v.renderFrame(), this.textSpans[h].childSpan.appendChild(v.layerElement), 1 === E.t && this.textSpans[h].childSpan.setAttribute('transform', 'scale(' + e.finalSize / 100 + ',' + e.finalSize / 100 + ')');
                        } else l && g.setAttribute('transform', 'translate(' + s.props[12] + ',' + s.props[13] + ')'), (g.textContent = r[h].val), g.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
                    }
                    l && g && g.setAttribute('d', o);
                } else {
                    var T = this.textContainer,
                        b = 'start';
                    switch (e.j) {
                        case 1:
                            b = 'end';
                            break;
                        case 2:
                            b = 'middle';
                            break;
                        default:
                            b = 'start';
                    }
                    T.setAttribute('text-anchor', b), T.setAttribute('letter-spacing', f);
                    var S = this.buildTextContents(e.finalText);
                    for (h = 0, m = S.length, c = e.ps ? e.ps[1] + e.ascent : 0; h < m; h += 1)
                        ((g = this.textSpans[h].span || createNS('tspan')).textContent = S[h]),
                            g.setAttribute('x', 0),
                            g.setAttribute('y', c),
                            (g.style.display = 'inherit'),
                            T.appendChild(g),
                            this.textSpans[h] ||
                                (this.textSpans[h] = {
                                    span: null,
                                    glyph: null
                                }),
                            (this.textSpans[h].span = g),
                            (c += e.finalLineHeight);
                    this.layerElement.appendChild(T);
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
                        i,
                        r,
                        a = this.textAnimator.renderedLetters,
                        s = this.textProperty.currentData.l;
                    for (e = 0, t = s.length; e < t; e += 1) !s[e].n && ((n = a[e]), (i = this.textSpans[e].span), (r = this.textSpans[e].glyph) && r.renderFrame(), n._mdf.m && i.setAttribute('transform', n.m), n._mdf.o && i.setAttribute('opacity', n.o), n._mdf.sw && i.setAttribute('stroke-width', n.sw), n._mdf.sc && i.setAttribute('stroke', n.sc), n._mdf.fc && i.setAttribute('fill', n.fc));
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
                    i = createNS('rect');
                i.setAttribute('width', e.w), i.setAttribute('height', e.h), i.setAttribute('x', 0), i.setAttribute('y', 0);
                var r = createElementID();
                n.setAttribute('id', r), n.appendChild(i), this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + r + ')'), t.appendChild(n), (this.layers = e.layers), (this.elements = createSizedArray(e.layers.length));
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
                        var i = 'tp' in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
                        if (-1 === i) return;
                        if (this.elements[i] && !0 !== this.elements[i]) {
                            var r = t[i].getMatte(this.layers[e].tt);
                            n.setMatte(r);
                        } else this.buildItem(i), this.addPendingElement(n);
                    }
                }
            }),
            (SVGRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) {
                    var e = this.pendingElements.pop();
                    if ((e.checkParenting(), e.data.tt))
                        for (var t = 0, n = this.elements.length; t < n; ) {
                            if (this.elements[t] === e) {
                                var i = 'tp' in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                                    r = this.elements[i].getMatte(this.layers[t].tt);
                                e.setMatte(r);
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
                    i = e.getBaseElement();
                if (i) {
                    for (var r = 0; r < t; ) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (n = this.elements[r].getBaseElement()), (r += 1);
                    n ? this.layerElement.insertBefore(i, n) : this.layerElement.appendChild(i);
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
                    var i = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame), t = i - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && (this.elements[t].prepareFrame(this.renderedFrame - this.layers[t].st), this.elements[t]._mdf && (this._mdf = !0));
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
                        i = '_';
                    for (t = 0; t < n; t += 1) i += e[t].transform.key + '_';
                    var r = this.sequences[i];
                    return (
                        r ||
                            ((r = {
                                transforms: [].concat(e),
                                finalTransform: new Matrix(),
                                _mdf: !1
                            }),
                            (this.sequences[i] = r),
                            this.sequenceList.push(r)),
                        r
                    );
                },
                processSequence: function (e, t) {
                    for (var n = 0, i = e.transforms.length, r = t; n < i && !t; ) {
                        if (e.transforms[n].transform.mProps._mdf) {
                            r = !0;
                            break;
                        }
                        n += 1;
                    }
                    if (r) for (e.finalTransform.reset(), n = i - 1; n >= 0; n -= 1) e.finalTransform.multiply(e.transforms[n].transform.mProps.v);
                    e._mdf = r;
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
                i = null;
            function r() {
                var t = createNS('svg'),
                    n = createNS('filter'),
                    i = createNS('feColorMatrix');
                return n.setAttribute('id', e), i.setAttribute('type', 'matrix'), i.setAttribute('color-interpolation-filters', 'sRGB'), i.setAttribute('values', '0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0'), n.appendChild(i), t.appendChild(n), t.setAttribute('id', e + '_svg'), featureSupport.svgLumaHidden && (t.style.display = 'none'), t;
            }
            function a() {
                t || ((i = r()), document.body.appendChild(i), ((n = (t = createTag('canvas')).getContext('2d')).filter = 'url(#' + e + ')'), (n.fillStyle = 'rgba(0,0,0,0)'), n.fillRect(0, 0, 1, 1));
            }
            function s(i) {
                return t || a(), (t.width = i.width), (t.height = i.height), (n.filter = 'url(#' + e + ')'), t;
            }
            return {
                load: a,
                get: s
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
                i = e.data.ef ? e.data.ef.length : 0;
            for (t = 0, this.filters = []; t < i; t += 1) {
                n = null;
                var r = e.data.ef[t].ty;
                registeredEffects[r] && (n = new registeredEffects[r].effect(e.effectsManager.effectElements[t], e)), n && this.filters.push(n);
            }
            this.filters.length && e.addRenderableComponent(this);
        }
        function registerEffect(e, t) {
            registeredEffects[e] = { effect: t };
        }
        function CVMaskElement(e, t) {
            (this.data = e), (this.element = t), (this.masksProperties = this.data.masksProperties || []), (this.viewData = createSizedArray(this.masksProperties.length));
            var n,
                i = this.masksProperties.length,
                r = !1;
            for (n = 0; n < i; n += 1) 'n' !== this.masksProperties[n].mode && (r = !0), (this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3));
            (this.hasMasks = r), r && this.element.addRenderableComponent(this);
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
                    i = [];
                for (t = 0; t < n; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
                return i;
            }),
            (CVMaskElement.prototype.renderFrame = function () {
                if (this.hasMasks) {
                    var e = this.element.finalTransform.mat,
                        t = this.element.canvasContext,
                        n = this.masksProperties.length;
                    for (t.beginPath(), i = 0; i < n; i += 1)
                        if ('n' !== this.masksProperties[i].mode) {
                            this.masksProperties[i].inv && (t.moveTo(0, 0), t.lineTo(this.element.globalData.compSize.w, 0), t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), t.lineTo(0, this.element.globalData.compSize.h), t.lineTo(0, 0)), (s = this.viewData[i].v), (r = e.applyToPointArray(s.v[0][0], s.v[0][1], 0)), t.moveTo(r[0], r[1]);
                            var i,
                                r,
                                a,
                                s,
                                o,
                                l = s._length;
                            for (o = 1; o < l; o += 1) (a = e.applyToTriplePoints(s.o[o - 1], s.i[o], s.v[o])), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                            (a = e.applyToTriplePoints(s.o[o - 1], s.i[0], s.v[0])), t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
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
        function CVShapeData(e, t, n, i) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var r,
                a,
                s = 4;
            'rc' === t.ty ? (s = 5) : 'el' === t.ty ? (s = 6) : 'sr' === t.ty && (s = 7), (this.sh = ShapePropertyFactory.getShapeProp(e, t, s, e));
            var o = n.length;
            for (r = 0; r < o; r += 1)
                n[r].closed ||
                    ((a = {
                        transforms: i.addTransformSequence(n[r].transforms),
                        trNodes: []
                    }),
                    this.styledShapes.push(a),
                    n[r].elements.push(a));
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
            var i = PropertyFactory.getProp;
            if (((this.pe = i(this, e.pe, 0, 0, this)), e.ks.p.s ? ((this.px = i(this, e.ks.p.x, 1, 0, this)), (this.py = i(this, e.ks.p.y, 1, 0, this)), (this.pz = i(this, e.ks.p.z, 1, 0, this))) : (this.p = i(this, e.ks.p, 1, 0, this)), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to)) {
                var r,
                    a = e.ks.or.k.length;
                for (r = 0; r < a; r += 1) (e.ks.or.k[r].to = null), (e.ks.or.k[r].ti = null);
            }
            (this.or = i(this, e.ks.or, 1, degToRads, this)), (this.or.sh = !0), (this.rx = i(this, e.ks.rx, 0, degToRads, this)), (this.ry = i(this, e.ks.ry, 0, degToRads, this)), (this.rz = i(this, e.ks.rz, 0, degToRads, this)), (this.mat = new Matrix()), (this._prevMat = new Matrix()), (this._isFirstFrame = !0), (this.finalTransform = { mProp: this });
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
                    i = {};
                if (('fl' === e.ty || 'st' === e.ty ? ((i.c = PropertyFactory.getProp(this, e.c, 1, 255, this)), i.c.k || (n.co = 'rgb(' + bmFloor(i.c.v[0]) + ',' + bmFloor(i.c.v[1]) + ',' + bmFloor(i.c.v[2]) + ')')) : ('gf' === e.ty || 'gs' === e.ty) && ((i.s = PropertyFactory.getProp(this, e.s, 1, null, this)), (i.e = PropertyFactory.getProp(this, e.e, 1, null, this)), (i.h = PropertyFactory.getProp(this, e.h || { k: 0 }, 0, 0.01, this)), (i.a = PropertyFactory.getProp(this, e.a || { k: 0 }, 0, degToRads, this)), (i.g = new GradientProperty(this, e.g, this))), (i.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this)), 'st' === e.ty || 'gs' === e.ty)) {
                    if (((n.lc = lineCapEnum[e.lc || 2]), (n.lj = lineJoinEnum[e.lj || 2]), 1 == e.lj && (n.ml = e.ml), (i.w = PropertyFactory.getProp(this, e.w, 0, null, this)), i.w.k || (n.wi = i.w.v), e.d)) {
                        var r = new DashProperty(this, e.d, 'canvas', this);
                        (i.d = r), i.d.k || ((n.da = i.d.dashArray), (n.do = i.d.dashoffset[0]));
                    }
                } else n.r = 2 === e.r ? 'evenodd' : 'nonzero';
                return this.stylesList.push(n), (i.style = n), i;
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
            (CVShapeElement.prototype.searchShapes = function (e, t, n, i, r) {
                var a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d = e.length - 1,
                    f = [],
                    _ = [],
                    p = [].concat(r);
                for (a = d; a >= 0; a -= 1) {
                    if (((l = this.searchProcessedElement(e[a])) ? (t[a] = n[l - 1]) : (e[a]._shouldRender = i), 'fl' === e[a].ty || 'st' === e[a].ty || 'gf' === e[a].ty || 'gs' === e[a].ty)) l ? (t[a].style.closed = !1) : (t[a] = this.createStyleElement(e[a], p)), f.push(t[a].style);
                    else if ('gr' === e[a].ty) {
                        if (l) for (s = 0, o = t[a].it.length; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
                        else t[a] = this.createGroupElement(e[a]);
                        this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, i, p);
                    } else 'tr' === e[a].ty ? (l || ((c = this.createTransformElement(e[a])), (t[a] = c)), p.push(t[a]), this.addTransformToStyleList(t[a])) : 'sh' === e[a].ty || 'rc' === e[a].ty || 'el' === e[a].ty || 'sr' === e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : 'tm' === e[a].ty || 'rd' === e[a].ty || 'pb' === e[a].ty || 'zz' === e[a].ty || 'op' === e[a].ty ? (l ? ((u = t[a]).closed = !1) : ((u = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), (t[a] = u), this.shapeModifiers.push(u)), _.push(u)) : 'rp' === e[a].ty && (l ? ((u = t[a]).closed = !0) : ((u = ShapeModifiers.getModifier(e[a].ty)), (t[a] = u), u.init(this, e, a, t), this.shapeModifiers.push(u), (i = !1)), _.push(u));
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
                    i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u = this.stylesList.length,
                    c = this.globalData.renderer,
                    d = this.globalData.canvasContext;
                for (e = 0; e < u; e += 1)
                    if (!((('st' === (o = (l = this.stylesList[e]).type) || 'gs' === o) && 0 === l.wi) || !l.data._shouldRender || 0 === l.coOp || 0 === this.globalData.currentGlobalAlpha)) {
                        for (c.save(), a = l.elements, 'st' === o || 'gs' === o ? (c.ctxStrokeStyle('st' === o ? l.co : l.grd), c.ctxLineWidth(l.wi), c.ctxLineCap(l.lc), c.ctxLineJoin(l.lj), c.ctxMiterLimit(l.ml || 0)) : c.ctxFillStyle('fl' === o ? l.co : l.grd), c.ctxOpacity(l.coOp), 'st' !== o && 'gs' !== o && d.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), n = a.length, t = 0; t < n; t += 1) {
                            for (('st' === o || 'gs' === o) && (d.beginPath(), l.da && (d.setLineDash(l.da), (d.lineDashOffset = l.do))), r = (s = a[t].trNodes).length, i = 0; i < r; i += 1) 'm' === s[i].t ? d.moveTo(s[i].p[0], s[i].p[1]) : 'c' === s[i].t ? d.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : d.closePath();
                            ('st' === o || 'gs' === o) && (c.ctxStroke(), l.da && d.setLineDash(this.dashResetter));
                        }
                        'st' !== o && 'gs' !== o && this.globalData.renderer.ctxFill(l.r), c.restore();
                    }
            }),
            (CVShapeElement.prototype.renderShape = function (e, t, n, i) {
                var r,
                    a,
                    s = t.length - 1;
                for (a = e, r = s; r >= 0; r -= 1) 'tr' === t[r].ty ? ((a = n[r].transform), this.renderShapeTransform(e, a)) : 'sh' === t[r].ty || 'el' === t[r].ty || 'rc' === t[r].ty || 'sr' === t[r].ty ? this.renderPath(t[r], n[r]) : 'fl' === t[r].ty ? this.renderFill(t[r], n[r], a) : 'st' === t[r].ty ? this.renderStroke(t[r], n[r], a) : 'gf' === t[r].ty || 'gs' === t[r].ty ? this.renderGradientFill(t[r], n[r], a) : 'gr' === t[r].ty ? this.renderShape(a, t[r].it, n[r].it) : t[r].ty;
                i && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function (e, t) {
                if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
                    var n,
                        i,
                        r,
                        a = e.trNodes,
                        s = t.paths,
                        o = s._length;
                    a.length = 0;
                    var l = e.transforms.finalTransform;
                    for (r = 0; r < o; r += 1) {
                        var u = s.shapes[r];
                        if (u && u.v) {
                            for (n = 1, i = u._length; n < i; n += 1)
                                1 === n &&
                                    a.push({
                                        t: 'm',
                                        p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                                    }),
                                    a.push({
                                        t: 'c',
                                        pts: l.applyToTriplePoints(u.o[n - 1], u.i[n], u.v[n])
                                    });
                            1 === i &&
                                a.push({
                                    t: 'm',
                                    p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                                }),
                                u.c &&
                                    i &&
                                    (a.push({
                                        t: 'c',
                                        pts: l.applyToTriplePoints(u.o[n - 1], u.i[0], u.v[0])
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
                        i = t.styledShapes.length;
                    for (n = 0; n < i; n += 1) this.renderStyledShape(t.styledShapes[n], t.sh);
                }
            }),
            (CVShapeElement.prototype.renderFill = function (e, t, n) {
                var i = t.style;
                (t.c._mdf || this._isFirstFrame) && (i.co = 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * n.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function (e, t, n) {
                var i = t.style;
                if (!i.grd || t.g._mdf || t.s._mdf || t.e._mdf || (1 !== e.t && (t.h._mdf || t.a._mdf))) {
                    var r,
                        a,
                        s = this.globalData.canvasContext,
                        o = t.s.v,
                        l = t.e.v;
                    if (1 === e.t) r = s.createLinearGradient(o[0], o[1], l[0], l[1]);
                    else {
                        var u = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                            c = Math.atan2(l[1] - o[1], l[0] - o[0]),
                            d = t.h.v;
                        d >= 1 ? (d = 0.99) : d <= -1 && (d = -0.99);
                        var f = u * d,
                            _ = Math.cos(c + t.a.v) * f + o[0],
                            p = Math.sin(c + t.a.v) * f + o[1];
                        r = s.createRadialGradient(_, p, 0, o[0], o[1], u);
                    }
                    var h = e.g.p,
                        m = t.g.c,
                        g = 1;
                    for (a = 0; a < h; a += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * a + 1]), r.addColorStop(m[4 * a] / 100, 'rgba(' + m[4 * a + 1] + ',' + m[4 * a + 2] + ',' + m[4 * a + 3] + ',' + g + ')');
                    i.grd = r;
                }
                i.coOp = t.o.v * n.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function (e, t, n) {
                var i = t.style,
                    r = t.d;
                r && (r._mdf || this._isFirstFrame) && ((i.da = r.dashArray), (i.do = r.dashoffset[0])), (t.c._mdf || this._isFirstFrame) && (i.co = 'rgb(' + bmFloor(t.c.v[0]) + ',' + bmFloor(t.c.v[1]) + ',' + bmFloor(t.c.v[2]) + ')'), (t.o._mdf || n._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * n.opacity), (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v);
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
                    i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
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
                    v = 0.001 * f.tr * f.finalSize,
                    y = 0,
                    I = 0,
                    T = !0,
                    b = 0;
                for (e = 0; e < t; e += 1) {
                    (i = ((n = this.globalData.fontManager.getCharData(f.finalText[e], h.fStyle, this.globalData.fontManager.getFontByName(f.f).fFamily)) && n.data) || {}), g.reset(), E && m[e].n && ((y = -v), (I += f.yOffset), (I += T ? 1 : 0), (T = !1)), (l = (s = i.shapes ? i.shapes[0].it : []).length), g.scale(f.finalSize / 100, f.finalSize / 100), E && this.applyTextPropertiesToMatrix(f, g, m[e].line, y, I), (c = createSizedArray(l - 1));
                    var S = 0;
                    for (o = 0; o < l; o += 1)
                        if ('sh' === s[o].ty) {
                            for (r = 1, a = s[o].ks.k.i.length, u = s[o].ks.k, d = []; r < a; r += 1) 1 === r && d.push(g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), d.push(g.applyToX(u.o[r - 1][0], u.o[r - 1][1], 0), g.applyToY(u.o[r - 1][0], u.o[r - 1][1], 0), g.applyToX(u.i[r][0], u.i[r][1], 0), g.applyToY(u.i[r][0], u.i[r][1], 0), g.applyToX(u.v[r][0], u.v[r][1], 0), g.applyToY(u.v[r][0], u.v[r][1], 0));
                            d.push(g.applyToX(u.o[r - 1][0], u.o[r - 1][1], 0), g.applyToY(u.o[r - 1][0], u.o[r - 1][1], 0), g.applyToX(u.i[0][0], u.i[0][1], 0), g.applyToY(u.i[0][0], u.i[0][1], 0), g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), (c[S] = d), (S += 1);
                        }
                    E && ((y += m[e].l), (y += v)), this.textSpans[b] ? (this.textSpans[b].elem = c) : (this.textSpans[b] = { elem: c }), (b += 1);
                }
            }),
            (CVTextElement.prototype.renderInnerContent = function () {
                this.validateText(), (this.canvasContext.font = this.values.fValue), this.globalData.renderer.ctxLineCap('butt'), this.globalData.renderer.ctxLineJoin('miter'), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var e,
                    t,
                    n,
                    i,
                    r,
                    a,
                    s,
                    o,
                    l,
                    u = this.textAnimator.renderedLetters,
                    c = this.textProperty.currentData.l;
                t = c.length;
                var d = null,
                    f = null,
                    _ = null,
                    p = this.globalData.renderer;
                for (e = 0; e < t; e += 1)
                    if (!c[e].n) {
                        if (((s = u[e]) && (p.save(), p.ctxTransform(s.p), p.ctxOpacity(s.o)), this.fill)) {
                            for (s && s.fc ? d !== s.fc && (p.ctxFillStyle(s.fc), (d = s.fc)) : d !== this.values.fill && ((d = this.values.fill), p.ctxFillStyle(this.values.fill)), i = (o = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < i; n += 1) for (a = (l = o[n]).length, this.globalData.canvasContext.moveTo(l[0], l[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(l[r], l[r + 1], l[r + 2], l[r + 3], l[r + 4], l[r + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxFill();
                        }
                        if (this.stroke) {
                            for (s && s.sw ? _ !== s.sw && ((_ = s.sw), p.ctxLineWidth(s.sw)) : _ !== this.values.sWidth && ((_ = this.values.sWidth), p.ctxLineWidth(this.values.sWidth)), s && s.sc ? f !== s.sc && ((f = s.sc), p.ctxStrokeStyle(s.sc)) : f !== this.values.stroke && ((f = this.values.stroke), p.ctxStrokeStyle(this.values.stroke)), i = (o = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < i; n += 1) for (a = (l = o[n]).length, this.globalData.canvasContext.moveTo(l[0], l[1]), r = 2; r < a; r += 6) this.globalData.canvasContext.bezierCurveTo(l[r], l[r + 1], l[r + 2], l[r + 3], l[r + 4], l[r + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxStroke();
                        }
                        s && this.globalData.renderer.restore();
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
                    var i = n.getContext('2d'),
                        r = this.img.width,
                        a = this.img.height,
                        s = r / a,
                        o = this.assetData.w / this.assetData.h,
                        l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    (s > o && 'xMidYMid slice' === l) || (s < o && 'xMidYMid slice' !== l) ? (e = (t = a) * o) : (t = (e = r) / o), i.drawImage(this.img, (r - e) / 2, (a - t) / 2, e, t, 0, 0, this.assetData.w, this.assetData.h), (this.img = n);
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
            (CanvasRendererBase.prototype.ctxFillRect = function (e, t, n, i) {
                this.canvasContext.fillRect(e, t, n, i);
            }),
            (CanvasRendererBase.prototype.ctxStroke = function () {
                this.canvasContext.stroke();
            }),
            (CanvasRendererBase.prototype.reset = function () {
                if (!this.renderConfig.clearCanvas) {
                    this.canvasContext.restore();
                    return;
                }
                this.contextData.reset();
            }),
            (CanvasRendererBase.prototype.save = function () {
                this.canvasContext.save();
            }),
            (CanvasRendererBase.prototype.restore = function (e) {
                if (!this.renderConfig.clearCanvas) {
                    this.canvasContext.restore();
                    return;
                }
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
                if ((this.reset(), e ? ((n = e), (i = t), (this.canvasContext.canvas.width = n), (this.canvasContext.canvas.height = i)) : (this.animationItem.wrapper && this.animationItem.container ? ((n = this.animationItem.wrapper.offsetWidth), (i = this.animationItem.wrapper.offsetHeight)) : ((n = this.canvasContext.canvas.width), (i = this.canvasContext.canvas.height)), (this.canvasContext.canvas.width = n * this.renderConfig.dpr), (this.canvasContext.canvas.height = i * this.renderConfig.dpr)), -1 !== this.renderConfig.preserveAspectRatio.indexOf('meet') || -1 !== this.renderConfig.preserveAspectRatio.indexOf('slice'))) {
                    var n,
                        i,
                        r,
                        a,
                        s = this.renderConfig.preserveAspectRatio.split(' '),
                        o = s[1] || 'meet',
                        l = s[0] || 'xMidYMid',
                        u = l.substr(0, 4),
                        c = l.substr(4);
                    (r = n / i), ((a = this.transformCanvas.w / this.transformCanvas.h) > r && 'meet' === o) || (a < r && 'slice' === o) ? ((this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = n / (this.transformCanvas.w / this.renderConfig.dpr))) : ((this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr)), (this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr))), 'xMid' === u && ((a < r && 'meet' === o) || (a > r && 'slice' === o)) ? (this.transformCanvas.tx = ((n - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2) * this.renderConfig.dpr) : 'xMax' === u && ((a < r && 'meet' === o) || (a > r && 'slice' === o)) ? (this.transformCanvas.tx = (n - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr) : (this.transformCanvas.tx = 0), 'YMid' === c && ((a > r && 'meet' === o) || (a < r && 'slice' === o)) ? (this.transformCanvas.ty = ((i - this.transformCanvas.h * (n / this.transformCanvas.w)) / 2) * this.renderConfig.dpr) : 'YMax' === c && ((a > r && 'meet' === o) || (a < r && 'slice' === o)) ? (this.transformCanvas.ty = (i - this.transformCanvas.h * (n / this.transformCanvas.w)) * this.renderConfig.dpr) : (this.transformCanvas.ty = 0);
                } else 'none' === this.renderConfig.preserveAspectRatio ? ((this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr))) : ((this.transformCanvas.sx = this.renderConfig.dpr), (this.transformCanvas.sy = this.renderConfig.dpr)), (this.transformCanvas.tx = 0), (this.transformCanvas.ty = 0);
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
                        i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(e), n = i - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(e - this.layers[n].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = i - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
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
                    i = n.transform,
                    r = this.cTr.props;
                for (t = 0; t < 16; t += 1) r[t] = i[t];
                if (e) {
                    this.nativeContext.restore();
                    var a = this.stack[this.cArrPos + 1];
                    (this.appliedFillStyle = a.fillStyle), (this.appliedStrokeStyle = a.strokeStyle), (this.appliedLineWidth = a.lineWidth), (this.appliedLineCap = a.lineCap), (this.appliedLineJoin = a.lineJoin), (this.appliedMiterLimit = a.miterLimit);
                }
                this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (e || (-1 !== n.opacity && this.currentOpacity !== n.opacity)) && ((this.nativeContext.globalAlpha = n.opacity), (this.currentOpacity = n.opacity)), (this.currentFillStyle = n.fillStyle), (this.currentStrokeStyle = n.strokeStyle), (this.currentLineWidth = n.lineWidth), (this.currentLineCap = n.lineCap), (this.currentLineJoin = n.lineJoin), (this.currentMiterLimit = n.miterLimit);
            }),
            (CVContextData.prototype.save = function (e) {
                e && this.nativeContext.save();
                var t,
                    n = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var i = this.stack[this.cArrPos];
                for (t = 0; t < 16; t += 1) i.transform[t] = n[t];
                this.cArrPos += 1;
                var r = this.stack[this.cArrPos];
                (r.opacity = i.opacity), (r.fillStyle = i.fillStyle), (r.strokeStyle = i.strokeStyle), (r.lineWidth = i.lineWidth), (r.lineCap = i.lineCap), (r.lineJoin = i.lineJoin), (r.miterLimit = i.miterLimit);
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
            (CVContextData.prototype.fillRect = function (e, t, n, i) {
                this.appliedFillStyle !== this.currentFillStyle && ((this.appliedFillStyle = this.currentFillStyle), (this.nativeContext.fillStyle = this.appliedFillStyle)), this.nativeContext.fillRect(e, t, n, i);
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
                    !this.data.hd && !this.hidden && (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
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
                    i = e.length;
                for (n = 0; n < i; n += 1) t = e[n].mProps.v.applyToPointArray(t[0], t[1], 0);
                return t;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
                var n,
                    i,
                    r,
                    a,
                    s,
                    o = e.sh.v,
                    l = e.transformers,
                    u = o._length;
                if (!(u <= 1)) {
                    for (n = 0; n < u - 1; n += 1) (i = this.getTransformedPoint(l, o.v[n])), (r = this.getTransformedPoint(l, o.o[n])), (a = this.getTransformedPoint(l, o.i[n + 1])), (s = this.getTransformedPoint(l, o.v[n + 1])), this.checkBounds(i, r, a, s, t);
                    o.c && ((i = this.getTransformedPoint(l, o.v[n])), (r = this.getTransformedPoint(l, o.o[n])), (a = this.getTransformedPoint(l, o.i[0])), (s = this.getTransformedPoint(l, o.v[0])), this.checkBounds(i, r, a, s, t));
                }
            }),
            (HShapeElement.prototype.checkBounds = function (e, t, n, i, r) {
                this.getBoundsOfCurve(e, t, n, i);
                var a = this.shapeBoundingBox;
                (r.x = bmMin(a.left, r.x)), (r.xMax = bmMax(a.right, r.xMax)), (r.y = bmMin(a.top, r.y)), (r.yMax = bmMax(a.bottom, r.yMax));
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
            (HShapeElement.prototype.getBoundsOfCurve = function (e, t, n, i) {
                for (
                    var r,
                        a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d = [
                            [e[0], i[0]],
                            [e[1], i[1]]
                        ],
                        f = 0;
                    f < 2;
                    ++f
                )
                    (a = 6 * e[f] - 12 * t[f] + 6 * n[f]), (r = -3 * e[f] + 9 * t[f] - 9 * n[f] + 3 * i[f]), (s = 3 * t[f] - 3 * e[f]), (a |= 0), (s |= 0), (0 == (r |= 0) && 0 === a) || (0 === r ? (o = -s / a) > 0 && o < 1 && d[f].push(this.calculateF(o, e, t, n, i, f)) : (l = a * a - 4 * s * r) >= 0 && ((u = (-a + bmSqrt(l)) / (2 * r)) > 0 && u < 1 && d[f].push(this.calculateF(u, e, t, n, i, f)), (c = (-a - bmSqrt(l)) / (2 * r)) > 0 && c < 1 && d[f].push(this.calculateF(c, e, t, n, i, f))));
                (this.shapeBoundingBox.left = bmMin.apply(null, d[0])), (this.shapeBoundingBox.top = bmMin.apply(null, d[1])), (this.shapeBoundingBox.right = bmMax.apply(null, d[0])), (this.shapeBoundingBox.bottom = bmMax.apply(null, d[1]));
            }),
            (HShapeElement.prototype.calculateF = function (e, t, n, i, r, a) {
                return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * n[a] + 3 * (1 - e) * bmPow(e, 2) * i[a] + bmPow(e, 3) * r[a];
            }),
            (HShapeElement.prototype.calculateBoundingBox = function (e, t) {
                var n,
                    i = e.length;
                for (n = 0; n < i; n += 1) e[n] && e[n].sh ? this.calculateShapeBoundingBox(e[n], t) : e[n] && e[n].it ? this.calculateBoundingBox(e[n].it, t) : e[n] && e[n].style && e[n].w && this.expandStrokeBoundingBox(e[n].w, t);
            }),
            (HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
                var n = 0;
                if (e.keyframes) {
                    for (var i = 0; i < e.keyframes.length; i += 1) {
                        var r = e.keyframes[i].s;
                        r > n && (n = r);
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
                    if (((e.x = t), (e.xMax = -t), (e.y = t), (e.yMax = -t), this.calculateBoundingBox(this.itemsData, e), (e.width = e.xMax < e.x ? 0 : e.xMax - e.x), (e.height = e.yMax < e.y ? 0 : e.yMax - e.y), !this.currentBoxContains(e))) {
                        var n = !1;
                        if ((this.currentBBox.w !== e.width && ((this.currentBBox.w = e.width), this.shapeCont.setAttribute('width', e.width), (n = !0)), this.currentBBox.h !== e.height && ((this.currentBBox.h = e.height), this.shapeCont.setAttribute('height', e.height), (n = !0)), n || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y)) {
                            (this.currentBBox.w = e.width), (this.currentBBox.h = e.height), (this.currentBBox.x = e.x), (this.currentBBox.y = e.y), this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
                            var i = this.shapeCont.style,
                                r = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                            (i.transform = r), (i.webkitTransform = r);
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
                var i = this.globalData.fontManager.getFontByName(e.f);
                if (!this.globalData.fontManager.chars) {
                    if (((t.fontSize = e.finalSize + 'px'), (t.lineHeight = e.finalSize + 'px'), i.fClass)) this.innerElem.className = i.fClass;
                    else {
                        t.fontFamily = i.fFamily;
                        var r = e.fWeight,
                            a = e.fStyle;
                        (t.fontStyle = a), (t.fontWeight = r);
                    }
                }
                var s = e.l;
                d = s.length;
                var o = this.mHelper,
                    l = '',
                    u = 0;
                for (c = 0; c < d; c += 1) {
                    if ((this.globalData.fontManager.chars ? (this.textPaths[u] ? (f = this.textPaths[u]) : ((f = createNS('path')).setAttribute('stroke-linecap', lineCapEnum[1]), f.setAttribute('stroke-linejoin', lineJoinEnum[2]), f.setAttribute('stroke-miterlimit', '4')), this.isMasked || (this.textSpans[u] ? (p = (_ = this.textSpans[u]).children[0]) : (((_ = createTag('div')).style.lineHeight = 0), (p = createNS('svg')).appendChild(f), styleDiv(_)))) : this.isMasked ? (f = this.textPaths[u] ? this.textPaths[u] : createNS('text')) : this.textSpans[u] ? ((_ = this.textSpans[u]), (f = this.textPaths[u])) : (styleDiv((_ = createTag('span'))), styleDiv((f = createTag('span'))), _.appendChild(f)), this.globalData.fontManager.chars)) {
                        var c,
                            d,
                            f,
                            _,
                            p,
                            h,
                            m,
                            g = this.globalData.fontManager.getCharData(e.finalText[c], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
                        if (((m = g ? g.data : null), o.reset(), m && m.shapes && m.shapes.length && ((h = m.shapes[0].it), o.scale(e.finalSize / 100, e.finalSize / 100), (l = this.createPathShape(o, h)), f.setAttribute('d', l)), this.isMasked)) this.innerElem.appendChild(f);
                        else {
                            if ((this.innerElem.appendChild(_), m && m.shapes)) {
                                document.body.appendChild(p);
                                var E = p.getBBox();
                                p.setAttribute('width', E.width + 2), p.setAttribute('height', E.height + 2), p.setAttribute('viewBox', E.x - 1 + ' ' + (E.y - 1) + ' ' + (E.width + 2) + ' ' + (E.height + 2));
                                var v = p.style,
                                    y = 'translate(' + (E.x - 1) + 'px,' + (E.y - 1) + 'px)';
                                (v.transform = y), (v.webkitTransform = y), (s[c].yOffset = E.y - 1);
                            } else p.setAttribute('width', 1), p.setAttribute('height', 1);
                            _.appendChild(p);
                        }
                    } else if (((f.textContent = s[c].val), f.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'), this.isMasked)) this.innerElem.appendChild(f);
                    else {
                        this.innerElem.appendChild(_);
                        var I = f.style,
                            T = 'translate3d(0,' + -e.finalSize / 1.2 + 'px,0)';
                        (I.transform = T), (I.webkitTransform = T);
                    }
                    this.isMasked ? (this.textSpans[u] = f) : (this.textSpans[u] = _), (this.textSpans[u].style.display = 'block'), (this.textPaths[u] = f), (u += 1);
                }
                for (; u < this.textSpans.length; ) (this.textSpans[u].style.display = 'none'), (u += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function () {
                if ((this.validateText(), this.data.singleShape)) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH), (e = this.svgElement.style);
                        var e,
                            t,
                            n,
                            i,
                            r,
                            a,
                            s = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
                        (e.transform = s), (e.webkitTransform = s);
                    }
                }
                if ((this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var o = 0,
                        l = this.textAnimator.renderedLetters,
                        u = this.textProperty.currentData.l;
                    for (t = 0, n = u.length; t < n; t += 1) u[t].n ? (o += 1) : ((r = this.textSpans[t]), (a = this.textPaths[t]), (i = l[o]), (o += 1), i._mdf.m && (this.isMasked ? r.setAttribute('transform', i.m) : ((r.style.webkitTransform = i.m), (r.style.transform = i.m))), (r.style.opacity = i.o), i.sw && i._mdf.sw && a.setAttribute('stroke-width', i.sw), i.sc && i._mdf.sc && a.setAttribute('stroke', i.sc), i.fc && i._mdf.fc && (a.setAttribute('fill', i.fc), (a.style.color = i.fc)));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var c = this.innerElem.getBBox();
                        this.currentBBox.w !== c.width && ((this.currentBBox.w = c.width), this.svgElement.setAttribute('width', c.width)), this.currentBBox.h !== c.height && ((this.currentBBox.h = c.height), this.svgElement.setAttribute('height', c.height));
                        var d = 1;
                        if (this.currentBBox.w !== c.width + 2 * d || this.currentBBox.h !== c.height + 2 * d || this.currentBBox.x !== c.x - d || this.currentBBox.y !== c.y - d) {
                            (this.currentBBox.w = c.width + 2 * d), (this.currentBBox.h = c.height + 2 * d), (this.currentBBox.x = c.x - d), (this.currentBBox.y = c.y - d), this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h), (e = this.svgElement.style);
                            var f = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                            (e.transform = f), (e.webkitTransform = f);
                        }
                    }
                }
            }),
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            (HCameraElement.prototype.setup = function () {
                var e,
                    t,
                    n,
                    i,
                    r = this.comp.threeDElements.length;
                for (e = 0; e < r; e += 1)
                    if ('3d' === (t = this.comp.threeDElements[e]).type) {
                        (n = t.perspectiveElem.style), (i = t.container.style);
                        var a = this.pe.v + 'px',
                            s = '0px 0px 0px',
                            o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                        (n.perspective = a), (n.webkitPerspective = a), (i.transformOrigin = s), (i.mozTransformOrigin = s), (i.webkitTransformOrigin = s), (n.transform = o), (n.webkitTransform = o);
                    }
            }),
            (HCameraElement.prototype.createElements = function () {}),
            (HCameraElement.prototype.hide = function () {}),
            (HCameraElement.prototype.renderFrame = function () {
                var e = this._isFirstFrame;
                if (this.hierarchy) for (n = 0, i = this.hierarchy.length; n < i; n += 1) e = this.hierarchy[n].finalTransform.mProp._mdf || e;
                if (e || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
                    if ((this.mat.reset(), this.hierarchy))
                        for (n = i = this.hierarchy.length - 1; n >= 0; n -= 1) {
                            var t = this.hierarchy[n].finalTransform.mProp;
                            this.mat.translate(-t.p.v[0], -t.p.v[1], t.p.v[2]), this.mat.rotateX(-t.or.v[0]).rotateY(-t.or.v[1]).rotateZ(t.or.v[2]), this.mat.rotateX(-t.rx.v).rotateY(-t.ry.v).rotateZ(t.rz.v), this.mat.scale(1 / t.s.v[0], 1 / t.s.v[1], 1 / t.s.v[2]), this.mat.translate(t.a.v[0], t.a.v[1], t.a.v[2]);
                        }
                    if ((this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a)) {
                        var n,
                            i,
                            r,
                            a = Math.sqrt(Math.pow((r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
                            s = [r[0] / a, r[1] / a, r[2] / a],
                            o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                            l = Math.atan2(s[1], o),
                            u = Math.atan2(s[0], -s[2]);
                        this.mat.rotateY(u).rotateX(-l);
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var c = !this._prevMat.equals(this.mat);
                    if ((c || this.pe._mdf) && this.comp.threeDElements) {
                        for (n = 0, i = this.comp.threeDElements.length; n < i; n += 1)
                            if ('3d' === (d = this.comp.threeDElements[n]).type) {
                                if (c) {
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
                    var i = this.layers[t];
                    if (i.ddd && this.supports3d) this.addTo3dContainer(n, t);
                    else if (this.threeDElements) this.addTo3dContainer(n, t);
                    else {
                        for (var r, a, s = 0; s < t; ) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && ((a = this.elements[s]), (r = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || r)), (s += 1);
                        r ? (i.ddd && this.supports3d) || this.layerElement.insertBefore(n, r) : (i.ddd && this.supports3d) || this.layerElement.appendChild(n);
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
                    i,
                    r = createTag('div');
                styleDiv(r);
                var a = createTag('div');
                if ((styleDiv(a), '3d' === t)) {
                    ((n = r.style).width = this.globalData.compSize.w + 'px'), (n.height = this.globalData.compSize.h + 'px');
                    var s = '50% 50%';
                    (n.webkitTransformOrigin = s), (n.mozTransformOrigin = s), (n.transformOrigin = s);
                    var o = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                    ((i = a.style).transform = o), (i.webkitTransform = o);
                }
                r.appendChild(a);
                var l = {
                    container: a,
                    perspectiveElem: r,
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
                    i = '';
                for (e = 0; e < n; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? '3d' !== i && ((i = '3d'), (t = this.createThreeDContainer(e, '3d'))) : '2d' !== i && ((i = '2d'), (t = this.createThreeDContainer(e, '2d'))), (t.endPos = Math.max(t.endPos, e));
                for (e = (n = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem);
            }),
            (HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
                for (var n = 0, i = this.threeDElements.length; n < i; ) {
                    if (t <= this.threeDElements[n].endPos) {
                        for (var r, a = this.threeDElements[n].startPos; a < t; ) this.elements[a] && this.elements[a].getBaseElement && (r = this.elements[a].getBaseElement()), (a += 1);
                        r ? this.threeDElements[n].container.insertBefore(e, r) : this.threeDElements[n].container.appendChild(e);
                        break;
                    }
                    n += 1;
                }
            }),
            (HybridRendererBase.prototype.configAnimation = function (e) {
                var t = createTag('div'),
                    n = this.animationItem.wrapper,
                    i = t.style;
                (i.width = e.w + 'px'), (i.height = e.h + 'px'), (this.resizerElem = t), styleDiv(t), (i.transformStyle = 'flat'), (i.mozTransformStyle = 'flat'), (i.webkitTransformStyle = 'flat'), this.renderConfig.className && t.setAttribute('class', this.renderConfig.className), n.appendChild(t), (i.overflow = 'hidden');
                var r = createNS('svg');
                r.setAttribute('width', '1'), r.setAttribute('height', '1'), styleDiv(r), this.resizerElem.appendChild(r);
                var a = createNS('defs');
                r.appendChild(a), (this.data = e), this.setupGlobalData(e, r), (this.globalData.defs = a), (this.layers = e.layers), (this.layerElement = this.resizerElem), this.build3dContainers(), this.updateContainerSize();
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
                    i,
                    r = this.animationItem.wrapper.offsetWidth,
                    a = this.animationItem.wrapper.offsetHeight,
                    s = r / a;
                this.globalData.compSize.w / this.globalData.compSize.h > s ? ((e = r / this.globalData.compSize.w), (t = r / this.globalData.compSize.w), (n = 0), (i = (a - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2)) : ((e = a / this.globalData.compSize.h), (t = a / this.globalData.compSize.h), (n = (r - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2), (i = 0));
                var o = this.resizerElem.style;
                (o.webkitTransform = 'matrix3d(' + e + ',0,0,0,0,' + t + ',0,0,0,0,1,0,' + n + ',' + i + ',0,1)'), (o.transform = o.webkitTransform);
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
                        i = this.threeDElements.length;
                    for (e = 0; e < i; e += 1) {
                        var r = this.threeDElements[e].perspectiveElem.style;
                        (r.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(n, 2)) + 'px'), (r.perspective = r.webkitPerspective);
                    }
                }
            }),
            (HybridRendererBase.prototype.searchExtraCompositions = function (e) {
                var t,
                    n = e.length,
                    i = createTag('div');
                for (t = 0; t < n; t += 1)
                    if (e[t].xt) {
                        var r = this.createComp(e[t], i, this.globalData.comp, null);
                        r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
                    }
            }),
            extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
            (HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function () {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute('width', this.data.w), this.svgElement.setAttribute('height', this.data.h), (this.transformedElement = this.baseElement)) : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function (e, t) {
                for (var n, i = 0; i < t; ) this.elements[i] && this.elements[i].getBaseElement && (n = this.elements[i].getBaseElement()), (i += 1);
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
                    for (var n = 0, i = e.layers.length; n < i; ) {
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
                i = this,
                r = 256,
                a = 6,
                s = 52,
                o = 'random',
                l = t.pow(r, a),
                u = t.pow(2, s),
                c = 2 * u,
                d = r - 1;
            function f(n, i, s) {
                var d = [],
                    f = m(h((i = !0 === i ? { entropy: !0 } : i || {}).entropy ? [n, E(e)] : null === n ? g() : n, 3), d),
                    v = new _(d),
                    y = function () {
                        for (var e = v.g(a), t = l, n = 0; e < u; ) (e = (e + n) * r), (t *= r), (n = v.g(1));
                        for (; e >= c; ) (e /= 2), (t /= 2), (n >>>= 1);
                        return (e + n) / t;
                    };
                return (
                    (y.int32 = function () {
                        return 0 | v.g(4);
                    }),
                    (y.quick = function () {
                        return v.g(4) / 4294967296;
                    }),
                    (y.double = y),
                    m(E(v.S), e),
                    (
                        i.pass ||
                        s ||
                        function (e, n, i, r) {
                            return (r &&
                                (r.S && p(r, v),
                                (e.state = function () {
                                    return p(v, {});
                                })),
                            i)
                                ? ((t[o] = e), n)
                                : e;
                        }
                    )(y, f, 'global' in i ? i.global : this == t, i.state)
                );
            }
            function _(e) {
                var t,
                    n = e.length,
                    i = this,
                    a = 0,
                    s = (i.i = i.j = 0),
                    o = (i.S = []);
                for (n || (e = [n++]); a < r; ) o[a] = a++;
                for (a = 0; a < r; a++) (o[a] = o[(s = d & (s + e[a % n] + (t = o[a])))]), (o[s] = t);
                i.g = function (e) {
                    for (var t, n = 0, a = i.i, s = i.j, o = i.S; e--; ) (t = o[(a = d & (a + 1))]), (n = n * r + o[d & ((o[a] = o[(s = d & (s + t))]) + (o[s] = t))]);
                    return (i.i = a), (i.j = s), n;
                };
            }
            function p(e, t) {
                return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t;
            }
            function h(e, t) {
                var n,
                    i = [],
                    r = _typeof$2(e);
                if (t && 'object' == r)
                    for (n in e)
                        try {
                            i.push(h(e[n], t - 1));
                        } catch (e) {}
                return i.length ? i : 'string' == r ? e : e + '\0';
            }
            function m(e, t) {
                for (var n, i = e + '', r = 0; r < i.length; ) t[d & r] = d & ((n ^= 19 * t[d & r]) + i.charCodeAt(r++));
                return E(t);
            }
            function g() {
                try {
                    if (n) return E(n.randomBytes(r));
                    var t = new Uint8Array(r);
                    return (i.crypto || i.msCrypto).getRandomValues(t), E(t);
                } catch (t) {
                    var a = i.navigator,
                        s = a && a.plugins;
                    return [+new Date(), i, s, i.screen, E(e)];
                }
            }
            function E(e) {
                return String.fromCharCode.apply(0, e);
            }
            (t['seed' + o] = f), m(t.random(), e);
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
                            i = e.length,
                            r = [];
                        for (n = 0; n < i; n += 1) r[n] = -e[n];
                        return r;
                    }
                    return e.propType ? e.v : -e;
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get,
                    easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get,
                    easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;
                function sum(e, t) {
                    var n = _typeof$1(e),
                        i = _typeof$1(t);
                    if ((isNumerable(n, e) && isNumerable(i, t)) || 'string' === n || 'string' === i) return e + t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0)), (e[0] += t), e;
                    if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return ((t = t.slice(0))[0] = e + t[0]), t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var r = 0, a = e.length, s = t.length, o = []; r < a || r < s; ) ('number' == typeof e[r] || e[r] instanceof Number) && ('number' == typeof t[r] || t[r] instanceof Number) ? (o[r] = e[r] + t[r]) : (o[r] = void 0 === t[r] ? e[r] : e[r] || t[r]), (r += 1);
                        return o;
                    }
                    return 0;
                }
                var add = sum;
                function sub(e, t) {
                    var n = _typeof$1(e),
                        i = _typeof$1(t);
                    if (isNumerable(n, e) && isNumerable(i, t)) return 'string' === n && (e = parseInt(e, 10)), 'string' === i && (t = parseInt(t, 10)), e - t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0)), (e[0] -= t), e;
                    if (isNumerable(n, e) && $bm_isInstanceOfArray(t)) return ((t = t.slice(0))[0] = e - t[0]), t;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                        for (var r = 0, a = e.length, s = t.length, o = []; r < a || r < s; ) ('number' == typeof e[r] || e[r] instanceof Number) && ('number' == typeof t[r] || t[r] instanceof Number) ? (o[r] = e[r] - t[r]) : (o[r] = void 0 === t[r] ? e[r] : e[r] || t[r]), (r += 1);
                        return o;
                    }
                    return 0;
                }
                function mul(e, t) {
                    var n,
                        i,
                        r,
                        a = _typeof$1(e),
                        s = _typeof$1(t);
                    if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                        for (i = 0, n = createTypedArray('float32', (r = e.length)); i < r; i += 1) n[i] = e[i] * t;
                        return n;
                    }
                    if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                        for (i = 0, n = createTypedArray('float32', (r = t.length)); i < r; i += 1) n[i] = e * t[i];
                        return n;
                    }
                    return 0;
                }
                function div(e, t) {
                    var n,
                        i,
                        r,
                        a = _typeof$1(e),
                        s = _typeof$1(t);
                    if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
                    if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                        for (i = 0, n = createTypedArray('float32', (r = e.length)); i < r; i += 1) n[i] = e[i] / t;
                        return n;
                    }
                    if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                        for (i = 0, n = createTypedArray('float32', (r = t.length)); i < r; i += 1) n[i] = e / t[i];
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
                        var i = n;
                        (n = t), (t = i);
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
                        i = Math.min(e.length, t.length),
                        r = 0;
                    for (n = 0; n < i; n += 1) r += Math.pow(t[n] - e[n], 2);
                    return Math.sqrt(r);
                }
                function normalize(e) {
                    return div(e, length(e));
                }
                function rgbToHsl(e) {
                    var t,
                        n,
                        i = e[0],
                        r = e[1],
                        a = e[2],
                        s = Math.max(i, r, a),
                        o = Math.min(i, r, a),
                        l = (s + o) / 2;
                    if (s === o) (t = 0), (n = 0);
                    else {
                        var u = s - o;
                        switch (((n = l > 0.5 ? u / (2 - s - o) : u / (s + o)), s)) {
                            case i:
                                t = (r - a) / u + (r < a ? 6 : 0);
                                break;
                            case r:
                                t = (a - i) / u + 2;
                                break;
                            case a:
                                t = (i - r) / u + 4;
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
                        i,
                        r = e[0],
                        a = e[1],
                        s = e[2];
                    if (0 === a) (t = s), (i = s), (n = s);
                    else {
                        var o = s < 0.5 ? s * (1 + a) : s + a - s * a,
                            l = 2 * s - o;
                        (t = hue2rgb(l, o, r + 1 / 3)), (n = hue2rgb(l, o, r)), (i = hue2rgb(l, o, r - 1 / 3));
                    }
                    return [t, n, i, e[3]];
                }
                function linear(e, t, n, i, r) {
                    if (((void 0 === i || void 0 === r) && ((i = t), (r = n), (t = 0), (n = 1)), n < t)) {
                        var a,
                            s = n;
                        (n = t), (t = s);
                    }
                    if (e <= t) return i;
                    if (e >= n) return r;
                    var o = n === t ? 0 : (e - t) / (n - t);
                    if (!i.length) return i + (r - i) * o;
                    var l = i.length,
                        u = createTypedArray('float32', l);
                    for (a = 0; a < l; a += 1) u[a] = i[a] + (r[a] - i[a]) * o;
                    return u;
                }
                function random(e, t) {
                    if ((void 0 === t && (void 0 === e ? ((e = 0), (t = 1)) : ((t = e), (e = void 0))), t.length)) {
                        var n,
                            i = t.length;
                        e || (e = createTypedArray('float32', i));
                        var r = createTypedArray('float32', i),
                            a = BMMath.random();
                        for (n = 0; n < i; n += 1) r[n] = e[n] + a * (t[n] - e[n]);
                        return r;
                    }
                    return void 0 === e && (e = 0), e + BMMath.random() * (t - e);
                }
                function createPath(e, t, n, i) {
                    var r,
                        a,
                        s,
                        o = e.length,
                        l = shapePool.newElement();
                    l.setPathData(!!i, o);
                    var u = [0, 0];
                    for (r = 0; r < o; r += 1) (a = t && t[r] ? t[r] : u), (s = n && n[r] ? n[r] : u), l.setTripleAt(e[r][0], e[r][1], s[0] + e[r][0], s[1] + e[r][1], a[0] + e[r][0], a[1] + e[r][1], r, !0);
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
                                i,
                                r = this.pv.length ? this.pv.length : 1,
                                a = createTypedArray('float32', r);
                            e = 5;
                            var s = Math.floor(time * e);
                            for (n = 0, i = 0; n < s; ) {
                                for (i = 0; i < r; i += 1) a[i] += -t + 2 * t * BMMath.random();
                                n += 1;
                            }
                            var o = time * e,
                                l = o - Math.floor(o),
                                u = createTypedArray('float32', r);
                            if (r > 1) {
                                for (i = 0; i < r; i += 1) u[i] = this.pv[i] + a[i] + (-t + 2 * t * BMMath.random()) * l;
                                return u;
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
                            i = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
                        return [-Math.atan2(n[1], n[2]) / degToRads, i, 0];
                    }
                    function easeOut(e, t, n, i, r) {
                        return applyEase(easeOutBez, e, t, n, i, r);
                    }
                    function easeIn(e, t, n, i, r) {
                        return applyEase(easeInBez, e, t, n, i, r);
                    }
                    function ease(e, t, n, i, r) {
                        return applyEase(easeInOutBez, e, t, n, i, r);
                    }
                    function applyEase(e, t, n, i, r, a) {
                        void 0 === r ? ((r = n), (a = i)) : (t = (t - n) / (i - n)), t > 1 ? (t = 1) : t < 0 && (t = 0);
                        var s = e(t);
                        if ($bm_isInstanceOfArray(r)) {
                            var o,
                                l = r.length,
                                u = createTypedArray('float32', l);
                            for (o = 0; o < l; o += 1) u[o] = (a[o] - r[o]) * s + r[o];
                            return u;
                        }
                        return (a - r) * s + r;
                    }
                    function nearestKey(e) {
                        var t,
                            n,
                            i,
                            r = data.k.length;
                        if (data.k.length && 'number' != typeof data.k[0]) {
                            if (((n = -1), (e *= elem.comp.globalData.frameRate) < data.k[0].t)) (n = 1), (i = data.k[0].t);
                            else {
                                for (t = 0; t < r - 1; t += 1) {
                                    if (e === data.k[t].t) {
                                        (n = t + 1), (i = data.k[t].t);
                                        break;
                                    }
                                    if (e > data.k[t].t && e < data.k[t + 1].t) {
                                        e - data.k[t].t > data.k[t + 1].t - e ? ((n = t + 2), (i = data.k[t + 1].t)) : ((n = t + 1), (i = data.k[t].t));
                                        break;
                                    }
                                }
                                -1 === n && ((n = t + 1), (i = data.k[t].t));
                            }
                        } else (n = 0), (i = 0);
                        var a = {};
                        return (a.index = n), (a.time = i / elem.comp.globalData.frameRate), a;
                    }
                    function key(e) {
                        if (!data.k.length || 'number' == typeof data.k[0]) throw Error('The property has no keyframe at index ' + e);
                        (e -= 1),
                            (t = {
                                time: data.k[e].t / elem.comp.globalData.frameRate,
                                value: []
                            });
                        var t,
                            n,
                            i,
                            r = Object.prototype.hasOwnProperty.call(data.k[e], 's') ? data.k[e].s : data.k[e - 1].e;
                        for (n = 0, i = r.length; n < i; n += 1) (t[n] = r[n]), (t.value[n] = r[n]);
                        return t;
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
                function t(e) {
                    var t = 0,
                        n = [];
                    function i() {
                        t += 1;
                    }
                    function r() {
                        0 == (t -= 1) && s();
                    }
                    function a(e) {
                        -1 === n.indexOf(e) && n.push(e);
                    }
                    function s() {
                        var e,
                            t = n.length;
                        for (e = 0; e < t; e += 1) n[e].release();
                        n.length = 0;
                    }
                    (e.renderer.compInterface = CompExpressionInterface(e.renderer)), e.renderer.globalData.projectInterface.registerComposition(e.renderer), (e.renderer.globalData.pushExpression = i), (e.renderer.globalData.popExpression = r), (e.renderer.globalData.registerExpressionProperty = a);
                }
                return (e.initExpressions = t), (e.resetFrame = ExpressionManager.resetFrame), e;
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
                            i = createSizedArray(t.viewData.length),
                            r = t.viewData.length;
                        for (n = 0; n < r; n += 1) i[n] = new e(t.viewData[n], t.masksProperties[n]);
                        return function (e) {
                            for (n = 0; n < r; ) {
                                if (t.masksProperties[n].nm === e) return i[n];
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
                        (e.key = function (i) {
                            if (!e.numKeys) return 0;
                            var r = '';
                            r = 's' in t.keyframes[i - 1] ? t.keyframes[i - 1].s : 'e' in t.keyframes[i - 2] ? t.keyframes[i - 2].e : t.keyframes[i - 2].s;
                            var a = 'unidimensional' === n ? new Number(r) : Object.assign({}, r);
                            return (a.time = t.keyframes[i - 1].t / t.elem.comp.globalData.frameRate), (a.value = 'unidimensional' === n ? r[0] : r), a;
                        }),
                        (e.valueAtTime = t.getValueAtTime),
                        (e.speedAtTime = t.getSpeedAtTime),
                        (e.velocityAtTime = t.getVelocityAtTime),
                        (e.propertyGroup = t.propertyGroup);
                }
                function i(t) {
                    (t && 'pv' in t) || (t = e);
                    var i = 1 / t.mult,
                        r = t.pv * i,
                        a = new Number(r);
                    return (
                        (a.value = r),
                        n(a, t, 'unidimensional'),
                        function () {
                            return t.k && t.getValue(), (r = t.v * i), a.value !== r && (((a = new Number(r)).value = r), n(a, t, 'unidimensional')), a;
                        }
                    );
                }
                function r(e) {
                    (e && 'pv' in e) || (e = t);
                    var i = 1 / e.mult,
                        r = (e.data && e.data.l) || e.pv.length,
                        a = createTypedArray('float32', r),
                        s = createTypedArray('float32', r);
                    return (
                        (a.value = s),
                        n(a, e, 'multidimensional'),
                        function () {
                            e.k && e.getValue();
                            for (var t = 0; t < r; t += 1) (s[t] = e.v[t] * i), (a[t] = s[t]);
                            return a;
                        }
                    );
                }
                function a() {
                    return e;
                }
                return function (e) {
                    return e ? ('unidimensional' === e.propType ? i(e) : r(e)) : a;
                };
            })(),
            TransformExpressionInterface = (function () {
                return function (e) {
                    var t, n, i, r;
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
                        e.p ? (r = ExpressionPropertyInterface(e.p)) : ((t = ExpressionPropertyInterface(e.px)), (n = ExpressionPropertyInterface(e.py)), e.pz && (i = ExpressionPropertyInterface(e.pz))),
                        Object.defineProperty(a, 'position', {
                            get: function () {
                                return e.p ? r() : [t(), n(), i ? i() : 0];
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
                function i(e, t) {
                    var n = this.getMatrix(t);
                    return (n.props[12] = 0), (n.props[13] = 0), (n.props[14] = 0), this.invertPoint(n, e);
                }
                function r(e, t) {
                    var n = this.getMatrix(t);
                    return this.invertPoint(n, e);
                }
                function a(e, t) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n,
                            i = this._elem.hierarchy.length;
                        for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.applyToPointArray(t[0], t[1], t[2] || 0);
                }
                function s(e, t) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var n,
                            i = this._elem.hierarchy.length;
                        for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.inversePoint(t);
                }
                function o(e) {
                    var t = new Matrix();
                    if ((t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length)) {
                        var n,
                            i = this._elem.hierarchy.length;
                        for (n = 0; n < i; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t);
                    }
                    return t.inversePoint(e);
                }
                function l() {
                    return [1, 1, 1, 1];
                }
                return function (u) {
                    function c(e) {
                        f.mask = new MaskManagerInterface(e, u);
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
                    (f.getMatrix = e), (f.invertPoint = s), (f.applyPoint = a), (f.toWorld = n), (f.toWorldVec = t), (f.fromWorld = r), (f.fromWorldVec = i), (f.toComp = n), (f.fromComp = o), (f.sampleImage = l), (f.sourceRectAtTime = u.sourceRectAtTime.bind(u)), (f._elem = u);
                    var _,
                        p = getDescriptor((_ = TransformExpressionInterface(u.finalTransform.mProp)), 'anchorPoint');
                    return (
                        Object.defineProperties(f, {
                            hasParent: {
                                get: function () {
                                    return u.hierarchy.length;
                                }
                            },
                            parent: {
                                get: function () {
                                    return u.hierarchy[0].layerInterface;
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
                                    return u.isInRange;
                                }
                            }
                        }),
                        (f.startTime = u.data.st),
                        (f.index = u.data.ind),
                        (f.source = u.data.refId),
                        (f.height = 0 === u.data.ty ? u.data.h : 100),
                        (f.width = 0 === u.data.ty ? u.data.w : 100),
                        (f.inPoint = u.data.ip / u.comp.globalData.frameRate),
                        (f.outPoint = u.data.op / u.comp.globalData.frameRate),
                        (f._name = u.data.nm),
                        (f.registerMaskInterface = c),
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
                function e(n, i, r, a) {
                    function s(e) {
                        for (var t = n.ef, i = 0, r = t.length; i < r; ) {
                            if (e === t[i].nm || e === t[i].mn || e === t[i].ix) {
                                if (5 === t[i].ty) return u[i];
                                return u[i]();
                            }
                            i += 1;
                        }
                        throw Error();
                    }
                    var o,
                        l = propertyGroupFactory(s, r),
                        u = [],
                        c = n.ef.length;
                    for (o = 0; o < c; o += 1) 5 === n.ef[o].ty ? u.push(e(n.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : u.push(t(i.effectElements[o], n.ef[o].ty, a, l));
                    return (
                        'ADBE Color Control' === n.mn &&
                            Object.defineProperty(s, 'color', {
                                get: function () {
                                    return u[0]();
                                }
                            }),
                        Object.defineProperties(s, {
                            numProperties: {
                                get: function () {
                                    return n.np;
                                }
                            },
                            _name: { value: n.nm },
                            propertyGroup: { value: l }
                        }),
                        (s.enabled = 0 !== n.en),
                        (s.active = s.enabled),
                        s
                    );
                }
                function t(e, t, n, i) {
                    var r = ExpressionPropertyInterface(e.p);
                    function a() {
                        return 10 === t ? n.comp.compInterface(e.p.v) : r();
                    }
                    return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface('', i)), a;
                }
                return {
                    createEffectsInterface: function (t, n) {
                        if (t.effectsManager) {
                            var i,
                                r = [],
                                a = t.data.ef,
                                s = t.effectsManager.effectElements.length;
                            for (i = 0; i < s; i += 1) r.push(e(a[i], t.effectsManager.effectElements[i], n, t));
                            var o = t.data.ef || [],
                                l = function (e) {
                                    for (i = 0, s = o.length; i < s; ) {
                                        if (e === o[i].nm || e === o[i].mn || e === o[i].ix) return r[i];
                                        i += 1;
                                    }
                                    return null;
                                };
                            return (
                                Object.defineProperty(l, 'numProperties', {
                                    get: function () {
                                        return o.length;
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
                    var i = t.sh;
                    function r(e) {
                        return 'Shape' === e || 'shape' === e || 'Path' === e || 'path' === e || 'ADBE Vector Shape' === e || 2 === e ? r.path : null;
                    }
                    var a = propertyGroupFactory(r, n);
                    return (
                        i.setGroupProperty(PropertyInterface('Path', a)),
                        Object.defineProperties(r, {
                            path: {
                                get: function () {
                                    return i.k && i.getValue(), i;
                                }
                            },
                            shape: {
                                get: function () {
                                    return i.k && i.getValue(), i;
                                }
                            },
                            _name: { value: e.nm },
                            ix: { value: e.ix },
                            propertyIndex: { value: e.ix },
                            mn: { value: e.mn },
                            propertyGroup: { value: n }
                        }),
                        r
                    );
                };
            })(),
            ShapeExpressionInterface = (function () {
                function e(e, t, l) {
                    var p,
                        h = [],
                        m = e ? e.length : 0;
                    for (p = 0; p < m; p += 1) 'gr' === e[p].ty ? h.push(n(e[p], t[p], l)) : 'fl' === e[p].ty ? h.push(i(e[p], t[p], l)) : 'st' === e[p].ty ? h.push(s(e[p], t[p], l)) : 'tm' === e[p].ty ? h.push(o(e[p], t[p], l)) : 'tr' === e[p].ty || ('el' === e[p].ty ? h.push(u(e[p], t[p], l)) : 'sr' === e[p].ty ? h.push(c(e[p], t[p], l)) : 'sh' === e[p].ty ? h.push(ShapePathInterface(e[p], t[p], l)) : 'rc' === e[p].ty ? h.push(d(e[p], t[p], l)) : 'rd' === e[p].ty ? h.push(f(e[p], t[p], l)) : 'rp' === e[p].ty ? h.push(_(e[p], t[p], l)) : 'gf' === e[p].ty ? h.push(r(e[p], t[p], l)) : h.push(a(e[p], t[p], l)));
                    return h;
                }
                function t(t, n, i) {
                    var r,
                        a = function (e) {
                            for (var t = 0, n = r.length; t < n; ) {
                                if (r[t]._name === e || r[t].mn === e || r[t].propertyIndex === e || r[t].ix === e || r[t].ind === e) return r[t];
                                t += 1;
                            }
                            return 'number' == typeof e ? r[e - 1] : null;
                        };
                    (a.propertyGroup = propertyGroupFactory(a, i)), (r = e(t.it, n.it, a.propertyGroup)), (a.numProperties = r.length);
                    var s = l(t.it[t.it.length - 1], n.it[n.it.length - 1], a.propertyGroup);
                    return (a.transform = s), (a.propertyIndex = t.cix), (a._name = t.nm), a;
                }
                function n(e, n, i) {
                    var r = function (e) {
                        switch (e) {
                            case 'ADBE Vectors Group':
                            case 'Contents':
                            case 2:
                                return r.content;
                            default:
                                return r.transform;
                        }
                    };
                    r.propertyGroup = propertyGroupFactory(r, i);
                    var a = t(e, n, r.propertyGroup),
                        s = l(e.it[e.it.length - 1], n.it[n.it.length - 1], r.propertyGroup);
                    return (
                        (r.content = a),
                        (r.transform = s),
                        Object.defineProperty(r, '_name', {
                            get: function () {
                                return e.nm;
                            }
                        }),
                        (r.numProperties = e.np),
                        (r.propertyIndex = e.ix),
                        (r.nm = e.nm),
                        (r.mn = e.mn),
                        r
                    );
                }
                function i(e, t, n) {
                    function i(e) {
                        return 'Color' === e || 'color' === e ? i.color : 'Opacity' === e || 'opacity' === e ? i.opacity : null;
                    }
                    return (
                        Object.defineProperties(i, {
                            color: { get: ExpressionPropertyInterface(t.c) },
                            opacity: { get: ExpressionPropertyInterface(t.o) },
                            _name: { value: e.nm },
                            mn: { value: e.mn }
                        }),
                        t.c.setGroupProperty(PropertyInterface('Color', n)),
                        t.o.setGroupProperty(PropertyInterface('Opacity', n)),
                        i
                    );
                }
                function r(e, t, n) {
                    function i(e) {
                        return 'Start Point' === e || 'start point' === e ? i.startPoint : 'End Point' === e || 'end point' === e ? i.endPoint : 'Opacity' === e || 'opacity' === e ? i.opacity : null;
                    }
                    return (
                        Object.defineProperties(i, {
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
                        i
                    );
                }
                function a() {
                    return function () {
                        return null;
                    };
                }
                function s(e, t, n) {
                    var i,
                        r = propertyGroupFactory(u, n),
                        a = propertyGroupFactory(l, r);
                    function s(n) {
                        Object.defineProperty(l, e.d[n].nm, { get: ExpressionPropertyInterface(t.d.dataProps[n].p) });
                    }
                    var o = e.d ? e.d.length : 0,
                        l = {};
                    for (i = 0; i < o; i += 1) s(i), t.d.dataProps[i].p.setGroupProperty(a);
                    function u(e) {
                        return 'Color' === e || 'color' === e ? u.color : 'Opacity' === e || 'opacity' === e ? u.opacity : 'Stroke Width' === e || 'stroke width' === e ? u.strokeWidth : null;
                    }
                    return (
                        Object.defineProperties(u, {
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
                        t.c.setGroupProperty(PropertyInterface('Color', r)),
                        t.o.setGroupProperty(PropertyInterface('Opacity', r)),
                        t.w.setGroupProperty(PropertyInterface('Stroke Width', r)),
                        u
                    );
                }
                function o(e, t, n) {
                    function i(t) {
                        return t === e.e.ix || 'End' === t || 'end' === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : null;
                    }
                    var r = propertyGroupFactory(i, n);
                    return (
                        (i.propertyIndex = e.ix),
                        t.s.setGroupProperty(PropertyInterface('Start', r)),
                        t.e.setGroupProperty(PropertyInterface('End', r)),
                        t.o.setGroupProperty(PropertyInterface('Offset', r)),
                        (i.propertyIndex = e.ix),
                        (i.propertyGroup = n),
                        Object.defineProperties(i, {
                            start: { get: ExpressionPropertyInterface(t.s) },
                            end: { get: ExpressionPropertyInterface(t.e) },
                            offset: { get: ExpressionPropertyInterface(t.o) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function l(e, t, n) {
                    function i(t) {
                        return e.a.ix === t || 'Anchor Point' === t ? i.anchorPoint : e.o.ix === t || 'Opacity' === t ? i.opacity : e.p.ix === t || 'Position' === t ? i.position : e.r.ix === t || 'Rotation' === t || 'ADBE Vector Rotation' === t ? i.rotation : e.s.ix === t || 'Scale' === t ? i.scale : (e.sk && e.sk.ix === t) || 'Skew' === t ? i.skew : (e.sa && e.sa.ix === t) || 'Skew Axis' === t ? i.skewAxis : null;
                    }
                    var r = propertyGroupFactory(i, n);
                    return (
                        t.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', r)),
                        t.transform.mProps.p.setGroupProperty(PropertyInterface('Position', r)),
                        t.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', r)),
                        t.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', r)),
                        t.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', r)),
                        t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', r)), t.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', r))),
                        t.transform.op.setGroupProperty(PropertyInterface('Opacity', r)),
                        Object.defineProperties(i, {
                            opacity: { get: ExpressionPropertyInterface(t.transform.mProps.o) },
                            position: { get: ExpressionPropertyInterface(t.transform.mProps.p) },
                            anchorPoint: { get: ExpressionPropertyInterface(t.transform.mProps.a) },
                            scale: { get: ExpressionPropertyInterface(t.transform.mProps.s) },
                            rotation: { get: ExpressionPropertyInterface(t.transform.mProps.r) },
                            skew: { get: ExpressionPropertyInterface(t.transform.mProps.sk) },
                            skewAxis: { get: ExpressionPropertyInterface(t.transform.mProps.sa) },
                            _name: { value: e.nm }
                        }),
                        (i.ty = 'tr'),
                        (i.mn = e.mn),
                        (i.propertyGroup = n),
                        i
                    );
                }
                function u(e, t, n) {
                    function i(t) {
                        return e.p.ix === t ? i.position : e.s.ix === t ? i.size : null;
                    }
                    var r = propertyGroupFactory(i, n);
                    i.propertyIndex = e.ix;
                    var a = 'tm' === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        a.s.setGroupProperty(PropertyInterface('Size', r)),
                        a.p.setGroupProperty(PropertyInterface('Position', r)),
                        Object.defineProperties(i, {
                            size: { get: ExpressionPropertyInterface(a.s) },
                            position: { get: ExpressionPropertyInterface(a.p) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function c(e, t, n) {
                    function i(t) {
                        return e.p.ix === t ? i.position : e.r.ix === t ? i.rotation : e.pt.ix === t ? i.points : e.or.ix === t || 'ADBE Vector Star Outer Radius' === t ? i.outerRadius : e.os.ix === t ? i.outerRoundness : e.ir && (e.ir.ix === t || 'ADBE Vector Star Inner Radius' === t) ? i.innerRadius : e.is && e.is.ix === t ? i.innerRoundness : null;
                    }
                    var r = propertyGroupFactory(i, n),
                        a = 'tm' === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        (i.propertyIndex = e.ix),
                        a.or.setGroupProperty(PropertyInterface('Outer Radius', r)),
                        a.os.setGroupProperty(PropertyInterface('Outer Roundness', r)),
                        a.pt.setGroupProperty(PropertyInterface('Points', r)),
                        a.p.setGroupProperty(PropertyInterface('Position', r)),
                        a.r.setGroupProperty(PropertyInterface('Rotation', r)),
                        e.ir && (a.ir.setGroupProperty(PropertyInterface('Inner Radius', r)), a.is.setGroupProperty(PropertyInterface('Inner Roundness', r))),
                        Object.defineProperties(i, {
                            position: { get: ExpressionPropertyInterface(a.p) },
                            rotation: { get: ExpressionPropertyInterface(a.r) },
                            points: { get: ExpressionPropertyInterface(a.pt) },
                            outerRadius: { get: ExpressionPropertyInterface(a.or) },
                            outerRoundness: { get: ExpressionPropertyInterface(a.os) },
                            innerRadius: { get: ExpressionPropertyInterface(a.ir) },
                            innerRoundness: { get: ExpressionPropertyInterface(a.is) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function d(e, t, n) {
                    function i(t) {
                        return e.p.ix === t ? i.position : e.r.ix === t ? i.roundness : e.s.ix === t || 'Size' === t || 'ADBE Vector Rect Size' === t ? i.size : null;
                    }
                    var r = propertyGroupFactory(i, n),
                        a = 'tm' === t.sh.ty ? t.sh.prop : t.sh;
                    return (
                        (i.propertyIndex = e.ix),
                        a.p.setGroupProperty(PropertyInterface('Position', r)),
                        a.s.setGroupProperty(PropertyInterface('Size', r)),
                        a.r.setGroupProperty(PropertyInterface('Rotation', r)),
                        Object.defineProperties(i, {
                            position: { get: ExpressionPropertyInterface(a.p) },
                            roundness: { get: ExpressionPropertyInterface(a.r) },
                            size: { get: ExpressionPropertyInterface(a.s) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function f(e, t, n) {
                    function i(t) {
                        return e.r.ix === t || 'Round Corners 1' === t ? i.radius : null;
                    }
                    var r = propertyGroupFactory(i, n),
                        a = t;
                    return (
                        (i.propertyIndex = e.ix),
                        a.rd.setGroupProperty(PropertyInterface('Radius', r)),
                        Object.defineProperties(i, {
                            radius: { get: ExpressionPropertyInterface(a.rd) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function _(e, t, n) {
                    function i(t) {
                        return e.c.ix === t || 'Copies' === t ? i.copies : e.o.ix === t || 'Offset' === t ? i.offset : null;
                    }
                    var r = propertyGroupFactory(i, n),
                        a = t;
                    return (
                        (i.propertyIndex = e.ix),
                        a.c.setGroupProperty(PropertyInterface('Copies', r)),
                        a.o.setGroupProperty(PropertyInterface('Offset', r)),
                        Object.defineProperties(i, {
                            copies: { get: ExpressionPropertyInterface(a.c) },
                            offset: { get: ExpressionPropertyInterface(a.o) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                return function (t, n, i) {
                    var r;
                    function a(e) {
                        if ('number' == typeof e) return 0 === (e = void 0 === e ? 1 : e) ? i : r[e - 1];
                        for (var t = 0, n = r.length; t < n; ) {
                            if (r[t]._name === e) return r[t];
                            t += 1;
                        }
                        return null;
                    }
                    function s() {
                        return i;
                    }
                    return (a.propertyGroup = propertyGroupFactory(a, s)), (r = e(t, n, a.propertyGroup)), (a.numProperties = r.length), (a._name = 'Contents'), a;
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
                        function i(e) {
                            if (n[e]) return ((t = e), (n = n[e]), 'object' === _typeof(n)) ? i : n;
                            var r = e.indexOf(t);
                            return -1 !== r ? (((n = n[parseInt(e.substr(r + t.length), 10)]), 'object' === _typeof(n)) ? i : n) : '';
                        }
                        return function () {
                            return (t = ''), (n = e.getFootageData()), i;
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
                        i = this.getValueAtTime(e),
                        r = this.getValueAtTime(e + n),
                        a = 0;
                    if (i.length) {
                        for (t = 0; t < i.length; t += 1) a += Math.pow(r[t] - i[t], 2);
                        a = 100 * Math.sqrt(a);
                    } else a = 0;
                    return a;
                },
                getVelocityAtTime: function (e) {
                    if (void 0 !== this.vel) return this.vel;
                    var t,
                        n,
                        i = -0.001,
                        r = this.getValueAtTime(e),
                        a = this.getValueAtTime(e + i);
                    if (r.length) for (n = 0, t = createTypedArray('float32', r.length); n < r.length; n += 1) t[n] = (a[n] - r[n]) / i;
                    else t = (a - r) / i;
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
                var i,
                    r,
                    a,
                    s,
                    o,
                    l = this.comp.renderedFrame,
                    u = this.keyframes,
                    c = u[u.length - 1].t;
                if (l <= c) return this.pv;
                if ((n ? ((i = t ? Math.abs(c - this.elem.comp.globalData.frameRate * t) : Math.max(0, c - this.elem.data.ip)), (r = c - i)) : ((!t || t > u.length - 1) && (t = u.length - 1), (i = c - (r = u[u.length - 1 - t].t))), 'pingpong' === e)) {
                    if (Math.floor((l - r) / i) % 2 != 0) return this.getValueAtTime((i - ((l - r) % i) + r) / this.comp.globalData.frameRate, 0);
                } else if ('offset' === e) {
                    var d = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime((((l - r) % i) + r) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((l - r) / i);
                    if (this.pv.length) {
                        for (a = 0, s = (o = Array(d.length)).length; a < s; a += 1) o[a] = (f[a] - d[a]) * p + _[a];
                        return o;
                    }
                    return (f - d) * p + _;
                } else if ('continue' === e) {
                    var h = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        m = this.getValueAtTime((c - 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (a = 0, s = (o = Array(h.length)).length; a < s; a += 1) o[a] = h[a] + ((h[a] - m[a]) * ((l - c) / this.comp.globalData.frameRate)) / 0.0005;
                        return o;
                    }
                    return h + ((l - c) / 0.001) * (h - m);
                }
                return this.getValueAtTime((((l - r) % i) + r) / this.comp.globalData.frameRate, 0);
            }
            function t(e, t, n) {
                if (!this.k) return this.pv;
                e = e ? e.toLowerCase() : '';
                var i,
                    r,
                    a,
                    s,
                    o,
                    l = this.comp.renderedFrame,
                    u = this.keyframes,
                    c = u[0].t;
                if (l >= c) return this.pv;
                if ((n ? ((i = t ? Math.abs(this.elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - c)), (r = c + i)) : ((!t || t > u.length - 1) && (t = u.length - 1), (i = (r = u[t].t) - c)), 'pingpong' === e)) {
                    if (Math.floor((c - l) / i) % 2 == 0) return this.getValueAtTime((((c - l) % i) + c) / this.comp.globalData.frameRate, 0);
                } else if ('offset' === e) {
                    var d = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime((i - ((c - l) % i) + c) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((c - l) / i) + 1;
                    if (this.pv.length) {
                        for (a = 0, s = (o = Array(d.length)).length; a < s; a += 1) o[a] = _[a] - (f[a] - d[a]) * p;
                        return o;
                    }
                    return _ - (f - d) * p;
                } else if ('continue' === e) {
                    var h = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                        m = this.getValueAtTime((c + 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (a = 0, s = (o = Array(h.length)).length; a < s; a += 1) o[a] = h[a] + ((h[a] - m[a]) * (c - l)) / 0.001;
                        return o;
                    }
                    return h + ((h - m) * (c - l)) / 0.001;
                }
                return this.getValueAtTime((i - (((c - l) % i) + c)) / this.comp.globalData.frameRate, 0);
            }
            function n(e, t) {
                if (!this.k || ((e = 0.5 * (e || 0.4)), (t = Math.floor(t || 5)) <= 1)) return this.pv;
                var n,
                    i,
                    r = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    a = r - e,
                    s = r + e,
                    o = t > 1 ? (s - a) / (t - 1) : 1,
                    l = 0,
                    u = 0;
                for (n = this.pv.length ? createTypedArray('float32', this.pv.length) : 0; l < t; ) {
                    if (((i = this.getValueAtTime(a + l * o)), this.pv.length)) for (u = 0; u < this.pv.length; u += 1) n[u] += i[u];
                    else n += i;
                    l += 1;
                }
                if (this.pv.length) for (u = 0; u < this.pv.length; u += 1) n[u] /= t;
                else n /= t;
                return n;
            }
            function i(e) {
                this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
                var t = this._transformCachingAtTime.v;
                if ((t.cloneFromProps(this.pre.props), this.appliedTransformations < 1)) {
                    var n = this.a.getValueAtTime(e);
                    t.translate(-n[0] * this.a.mult, -n[1] * this.a.mult, n[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var i = this.s.getValueAtTime(e);
                    t.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var r = this.sk.getValueAtTime(e),
                        a = this.sa.getValueAtTime(e);
                    t.skewFromAxis(-r * this.sk.mult, a * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var s = this.r.getValueAtTime(e);
                    t.rotate(-s * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var o = this.rz.getValueAtTime(e),
                        l = this.ry.getValueAtTime(e),
                        u = this.rx.getValueAtTime(e),
                        c = this.or.getValueAtTime(e);
                    t.rotateZ(-o * this.rz.mult)
                        .rotateY(l * this.ry.mult)
                        .rotateX(u * this.rx.mult)
                        .rotateZ(-c[2] * this.or.mult)
                        .rotateY(c[1] * this.or.mult)
                        .rotateX(c[0] * this.or.mult);
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
            function r() {
                return this.v.clone(new Matrix());
            }
            var a = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (e, t, n) {
                var s = a(e, t, n);
                return s.dynamicProperties.length ? (s.getValueAtTime = i.bind(s)) : (s.getValueAtTime = r.bind(s)), (s.setGroupProperty = expressionHelpers.setGroupProperty), s;
            };
            var s = PropertyFactory.getProp;
            function o(e) {
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
            PropertyFactory.getProp = function (i, r, a, o, l) {
                var u = s(i, r, a, o, l);
                u.kf ? (u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u)) : (u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u)), (u.setGroupProperty = expressionHelpers.setGroupProperty), (u.loopOut = e), (u.loopIn = t), (u.smooth = n), (u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u)), (u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u)), (u.numKeys = 1 === r.a ? r.k.length : 0), (u.propertyIndex = r.ix);
                var c = 0;
                return (
                    0 !== a && (c = createTypedArray('float32', 1 === r.a ? r.k[0].s.length : r.k.length)),
                    (u._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: c
                    }),
                    expressionHelpers.searchExpressions(i, r, u),
                    u.k && l.addDynamicProperty(u),
                    u
                );
            };
            var l = ShapePropertyFactory.getConstructorFunction(),
                u = ShapePropertyFactory.getKeyframedConstructorFunction();
            function c() {}
            (c.prototype = {
                vertices: function (e, t) {
                    this.k && this.getValue();
                    var n,
                        i = this.v;
                    void 0 !== t && (i = this.getValueAtTime(t, 0));
                    var r = i._length,
                        a = i[e],
                        s = i.v,
                        o = createSizedArray(r);
                    for (n = 0; n < r; n += 1) 'i' === e || 'o' === e ? (o[n] = [a[n][0] - s[n][0], a[n][1] - s[n][1]]) : (o[n] = [a[n][0], a[n][1]]);
                    return o;
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
                        i = this.v;
                    void 0 !== t && (i = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                    for (var r = this._segmentsLength, a = r.lengths, s = r.totalLength * e, o = 0, l = a.length, u = 0; o < l; ) {
                        if (u + a[o].addedLength > s) {
                            var c = o,
                                d = i.c && o === l - 1 ? 0 : o + 1,
                                f = (s - u) / a[o].addedLength;
                            n = bez.getPointInSegment(i.v[c], i.v[d], i.o[c], i.i[d], f, a[o]);
                            break;
                        }
                        (u += a[o].addedLength), (o += 1);
                    }
                    return n || (n = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), n;
                },
                vectorOnPath: function (e, t, n) {
                    1 == e ? (e = this.v.c) : 0 == e && (e = 0.999);
                    var i = this.pointOnPath(e, t),
                        r = this.pointOnPath(e + 0.001, t),
                        a = r[0] - i[0],
                        s = r[1] - i[1],
                        o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
                    return 0 === o ? [0, 0] : 'tangent' === n ? [a / o, s / o] : [-s / o, a / o];
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
                extendPrototype([c], l),
                extendPrototype([c], u),
                (u.prototype.getValueAtTime = o),
                (u.prototype.initiateExpression = ExpressionManager.initiateExpression);
            var d = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (e, t, n, i, r) {
                var a = d(e, t, n, i, r);
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
                    var i = {};
                    return this.copyData(i, e), (i.t = n.toString()), (i.__complete = !1), i;
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
                    i,
                    r = createNS('feMerge');
                for (r.setAttribute('result', e), i = 0; i < t.length; i += 1) (n = createNS('feMergeNode')).setAttribute('in', t[i]), r.appendChild(n), r.appendChild(n);
                return r;
            }
        };
        var linearFilterValue = '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0';
        function SVGTintFilter(e, t, n, i, r) {
            this.filterManager = t;
            var a = createNS('feColorMatrix');
            a.setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'linearRGB'), a.setAttribute('values', linearFilterValue + ' 1 0'), (this.linearFilter = a), a.setAttribute('result', i + '_tint_1'), e.appendChild(a), (a = createNS('feColorMatrix')).setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), a.setAttribute('result', i + '_tint_2'), e.appendChild(a), (this.matrixFilter = a);
            var s = this.createMergeNode(i, [r, i + '_tint_1', i + '_tint_2']);
            e.appendChild(s);
        }
        function SVGFillFilter(e, t, n, i) {
            this.filterManager = t;
            var r = createNS('feColorMatrix');
            r.setAttribute('type', 'matrix'), r.setAttribute('color-interpolation-filters', 'sRGB'), r.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), r.setAttribute('result', i), e.appendChild(r), (this.matrixFilter = r);
        }
        function SVGStrokeEffect(e, t, n) {
            (this.initialized = !1), (this.filterManager = t), (this.elem = n), (this.paths = []);
        }
        function SVGTritoneFilter(e, t, n, i) {
            this.filterManager = t;
            var r = createNS('feColorMatrix');
            r.setAttribute('type', 'matrix'), r.setAttribute('color-interpolation-filters', 'linearRGB'), r.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'), e.appendChild(r);
            var a = createNS('feComponentTransfer');
            a.setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('result', i), (this.matrixFilter = a);
            var s = createNS('feFuncR');
            s.setAttribute('type', 'table'), a.appendChild(s), (this.feFuncR = s);
            var o = createNS('feFuncG');
            o.setAttribute('type', 'table'), a.appendChild(o), (this.feFuncG = o);
            var l = createNS('feFuncB');
            l.setAttribute('type', 'table'), a.appendChild(l), (this.feFuncB = l), e.appendChild(a);
        }
        function SVGProLevelsFilter(e, t, n, i) {
            this.filterManager = t;
            var r = this.filterManager.effectElements,
                a = createNS('feComponentTransfer');
            (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc('feFuncR', a)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc('feFuncG', a)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc('feFuncB', a)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc('feFuncA', a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute('color-interpolation-filters', 'sRGB'), e.appendChild(a)), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && ((a = createNS('feComponentTransfer')).setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('result', i), e.appendChild(a), (this.feFuncRComposed = this.createFeFunc('feFuncR', a)), (this.feFuncGComposed = this.createFeFunc('feFuncG', a)), (this.feFuncBComposed = this.createFeFunc('feFuncB', a)));
        }
        function SVGDropShadowEffect(e, t, n, i, r) {
            var a = t.container.globalData.renderConfig.filterSize,
                s = t.data.fs || a;
            e.setAttribute('x', s.x || a.x), e.setAttribute('y', s.y || a.y), e.setAttribute('width', s.width || a.width), e.setAttribute('height', s.height || a.height), (this.filterManager = t);
            var o = createNS('feGaussianBlur');
            o.setAttribute('in', 'SourceAlpha'), o.setAttribute('result', i + '_drop_shadow_1'), o.setAttribute('stdDeviation', '0'), (this.feGaussianBlur = o), e.appendChild(o);
            var l = createNS('feOffset');
            l.setAttribute('dx', '25'), l.setAttribute('dy', '0'), l.setAttribute('in', i + '_drop_shadow_1'), l.setAttribute('result', i + '_drop_shadow_2'), (this.feOffset = l), e.appendChild(l);
            var u = createNS('feFlood');
            u.setAttribute('flood-color', '#00ff00'), u.setAttribute('flood-opacity', '1'), u.setAttribute('result', i + '_drop_shadow_3'), (this.feFlood = u), e.appendChild(u);
            var c = createNS('feComposite');
            c.setAttribute('in', i + '_drop_shadow_3'), c.setAttribute('in2', i + '_drop_shadow_2'), c.setAttribute('operator', 'in'), c.setAttribute('result', i + '_drop_shadow_4'), e.appendChild(c);
            var d = this.createMergeNode(i, [i + '_drop_shadow_4', r]);
            e.appendChild(d);
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter),
            (SVGTintFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = this.filterManager.effectElements[0].p.v,
                        n = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute('values', linearFilterValue + ' ' + i + ' 0'), this.matrixFilter.setAttribute('values', n[0] - t[0] + ' 0 0 0 ' + t[0] + ' ' + (n[1] - t[1]) + ' 0 0 0 ' + t[1] + ' ' + (n[2] - t[2]) + ' 0 0 0 ' + t[2] + ' 0 0 0 1 0');
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
                    i,
                    r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? ((i = this.elem.maskManager.masksProperties.length), (n = 0)) : (i = (n = this.filterManager.effectElements[0].p.v - 1) + 1), (t = createNS('g')).setAttribute('fill', 'none'), t.setAttribute('stroke-linecap', 'round'), t.setAttribute('stroke-dashoffset', 1); n < i; n += 1)
                    (e = createNS('path')),
                        t.appendChild(e),
                        this.paths.push({
                            p: e,
                            m: n
                        });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var a = createNS('mask'),
                        s = createElementID();
                    a.setAttribute('id', s), a.setAttribute('mask-type', 'alpha'), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
                    var o = createNS('g');
                    for (o.setAttribute('mask', 'url(' + getLocationHref() + '#' + s + ')'); r[0]; ) o.appendChild(r[0]);
                    this.elem.layerElement.appendChild(o), (this.masker = a), t.setAttribute('stroke', '#fff');
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v) for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length; ) this.elem.layerElement.removeChild(r[0]);
                    this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute('mask'), t.setAttribute('stroke', '#fff');
                }
                (this.initialized = !0), (this.pathMasker = t);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function (e) {
                this.initialized || this.initialize();
                var t = this.paths.length;
                for (n = 0; n < t; n += 1)
                    if (-1 !== this.paths[n].m && ((i = this.elem.maskManager.viewData[this.paths[n].m]), (r = this.paths[n].p), (e || this.filterManager._mdf || i.prop._mdf) && r.setAttribute('d', i.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var n,
                                i,
                                r,
                                a,
                                s,
                                o = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                l = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                u = r.getTotalLength();
                            a = '0 0 0 ' + u * o + ' ';
                            var c = Math.floor((u * (l - o)) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01));
                            for (s = 0; s < c; s += 1) a += '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
                            a += '0 ' + 10 * u + ' 0 0';
                        } else a = '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
                        r.setAttribute('stroke-dasharray', a);
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
                        i = this.filterManager.effectElements[2].p.v,
                        r = i[0] + ' ' + n[0] + ' ' + t[0],
                        a = i[1] + ' ' + n[1] + ' ' + t[1],
                        s = i[2] + ' ' + n[2] + ' ' + t[2];
                    this.feFuncR.setAttribute('tableValues', r), this.feFuncG.setAttribute('tableValues', a), this.feFuncB.setAttribute('tableValues', s);
                }
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
                var n = createNS(e);
                return n.setAttribute('type', 'table'), t.appendChild(n), n;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function (e, t, n, i, r) {
                for (var a, s, o = 0, l = 256, u = Math.min(e, t), c = Math.max(e, t), d = Array.call(null, { length: 256 }), f = 0, _ = r - i, p = t - e; o <= 256; ) (s = (a = o / 256) <= u ? (p < 0 ? r : i) : a >= c ? (p < 0 ? i : r) : i + _ * Math.pow((a - e) / p, 1 / n)), (d[f] = s), (f += 1), (o += 256 / (l - 1));
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
                            i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            r = n * Math.cos(i),
                            a = n * Math.sin(i);
                        this.feOffset.setAttribute('dx', r), this.feOffset.setAttribute('dy', a);
                    }
                }
            });
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(e, t, n) {
            (this.initialized = !1), (this.filterManager = t), (this.filterElem = e), (this.elem = n), (n.matteElement = createNS('g')), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), (n.baseElement = n.matteElement);
        }
        function SVGGaussianBlurEffect(e, t, n, i) {
            e.setAttribute('x', '-100%'), e.setAttribute('y', '-100%'), e.setAttribute('width', '300%'), e.setAttribute('height', '300%'), (this.filterManager = t);
            var r = createNS('feGaussianBlur');
            r.setAttribute('result', i), e.appendChild(r), (this.feGaussianBlur = r);
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
                    i = e.layerElement.parentNode;
                if (i) {
                    for (var r = i.children, a = 0, s = r.length; a < s && r[a] !== e.layerElement; ) a += 1;
                    a <= s - 2 && (n = r[a + 1]);
                    var o = createNS('use');
                    o.setAttribute('href', '#' + t), n ? i.insertBefore(o, n) : i.appendChild(o);
                }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
                if (!this.findSymbol(t)) {
                    var n = createElementID(),
                        i = createNS('mask');
                    i.setAttribute('id', t.layerId), i.setAttribute('mask-type', 'alpha'), _svgMatteSymbols.push(t);
                    var r = e.globalData.defs;
                    r.appendChild(i);
                    var a = createNS('symbol');
                    a.setAttribute('id', n), this.replaceInParent(t, n), a.appendChild(t.layerElement), r.appendChild(a);
                    var s = createNS('use');
                    s.setAttribute('href', '#' + n), i.appendChild(s), (t.data.hd = !1), t.show();
                }
                e.setMatte(t.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
                for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, n = 0, i = t.length; n < i; ) t[n] && t[n].data.ind === e && this.setElementAsMask(this.elem, t[n]), (n += 1);
                this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
                this.initialized || this.initialize();
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var t = 0.3,
                        n = this.filterManager.effectElements[0].p.v * t,
                        i = this.filterManager.effectElements[1].p.v,
                        r = 3 == i ? 0 : n,
                        a = 2 == i ? 0 : n;
                    this.feGaussianBlur.setAttribute('stdDeviation', r + ' ' + a);
                    var s = 1 == this.filterManager.effectElements[2].p.v ? 'wrap' : 'duplicate';
                    this.feGaussianBlur.setAttribute('edgeMode', s);
                }
            }),
            (TransformEffect.prototype.init = function (e) {
                (this.effectsManager = e), (this.type = effectTypes.TRANSFORM_EFFECT), (this.matrix = new Matrix()), (this.opacity = -1), (this._mdf = !1), (this._opMdf = !1);
            }),
            (TransformEffect.prototype.renderFrame = function (e) {
                if (((this._opMdf = !1), (this._mdf = !1), e || this.effectsManager._mdf)) {
                    var t = this.effectsManager.effectElements,
                        n = t[0].p.v,
                        i = t[1].p.v,
                        r = 1 === t[2].p.v,
                        a = t[3].p.v,
                        s = r ? a : t[4].p.v,
                        o = t[5].p.v,
                        l = t[6].p.v,
                        u = t[7].p.v;
                    this.matrix.reset(), this.matrix.translate(-n[0], -n[1], n[2]), this.matrix.scale(0.01 * s, 0.01 * a, 1), this.matrix.rotate(-u * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), (this._mdf = !0), this.opacity !== t[8].p.v && ((this.opacity = t[8].p.v), (this._opMdf = !0));
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
