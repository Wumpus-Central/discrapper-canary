'undefined' != typeof navigator &&
    (function (e, n) {
        module.exports = n();
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
        function extendPrototype(e, n) {
            var r,
                i,
                a = e.length;
            for (r = 0; r < a; r += 1) for (var s in (i = e[r].prototype)) Object.prototype.hasOwnProperty.call(i, s) && (n.prototype[s] = i[s]);
        }
        function getDescriptor(e, n) {
            return Object.getOwnPropertyDescriptor(e, n);
        }
        function createProxyFunction(e) {
            function n() {}
            return (n.prototype = e), n;
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
                                n = this.audios.length;
                            for (e = 0; e < n; e += 1) this.audios[e].pause();
                        },
                        resume: function () {
                            var e,
                                n = this.audios.length;
                            for (e = 0; e < n; e += 1) this.audios[e].resume();
                        },
                        setRate: function (e) {
                            var n,
                                r = this.audios.length;
                            for (n = 0; n < r; n += 1) this.audios[n].setRate(e);
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
                                n = this.audios.length;
                            for (e = 0; e < n; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
                        }
                    }),
                    function () {
                        return new e();
                    }
                );
            })(),
            createTypedArray = (function () {
                function e(e, n) {
                    var r,
                        i = 0,
                        a = [];
                    switch (e) {
                        case 'int16':
                        case 'uint8c':
                            r = 1;
                            break;
                        default:
                            r = 1.1;
                    }
                    for (i = 0; i < n; i += 1) a.push(r);
                    return a;
                }
                function n(n, r) {
                    return 'float32' === n ? new Float32Array(r) : 'int16' === n ? new Int16Array(r) : 'uint8c' === n ? new Uint8ClampedArray(r) : e(n, r);
                }
                return 'function' == typeof Uint8ClampedArray && 'function' == typeof Float32Array ? n : e;
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
                n = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'],
                r = n.length;
            for (e = 0; e < r; e += 1) BMMath[n[e]] = Math[n[e]];
        })(),
            (BMMath.random = Math.random),
            (BMMath.abs = function (e) {
                if ('object' === _typeof$6(e) && e.length) {
                    var n,
                        r = createSizedArray(e.length),
                        i = e.length;
                    for (n = 0; n < i; n += 1) r[n] = Math.abs(e[n]);
                    return r;
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
        function BMEnterFrameEvent(e, n, r, i) {
            (this.type = e), (this.currentTime = n), (this.totalTime = r), (this.direction = i < 0 ? -1 : 1);
        }
        function BMCompleteEvent(e, n) {
            (this.type = e), (this.direction = n < 0 ? -1 : 1);
        }
        function BMCompleteLoopEvent(e, n, r, i) {
            (this.type = e), (this.currentLoop = r), (this.totalLoops = n), (this.direction = i < 0 ? -1 : 1);
        }
        function BMSegmentStartEvent(e, n, r) {
            (this.type = e), (this.firstFrame = n), (this.totalFrames = r);
        }
        function BMDestroyEvent(e, n) {
            (this.type = e), (this.target = n);
        }
        function BMRenderFrameErrorEvent(e, n) {
            (this.type = 'renderFrameError'), (this.nativeError = e), (this.currentTime = n);
        }
        function BMConfigErrorEvent(e) {
            (this.type = 'configError'), (this.nativeError = e);
        }
        function BMAnimationConfigErrorEvent(e, n) {
            (this.type = e), (this.nativeError = n);
        }
        var createElementID = (function () {
            var e = 0;
            return function () {
                return (e += 1), idPrefix$1 + '__lottie_element_' + e;
            };
        })();
        function HSVtoRGB(e, n, r) {
            var i, a, s, o, l, u, c, d;
            switch (((o = Math.floor(6 * e)), (l = 6 * e - o), (u = r * (1 - n)), (c = r * (1 - l * n)), (d = r * (1 - (1 - l) * n)), o % 6)) {
                case 0:
                    (i = r), (a = d), (s = u);
                    break;
                case 1:
                    (i = c), (a = r), (s = u);
                    break;
                case 2:
                    (i = u), (a = r), (s = d);
                    break;
                case 3:
                    (i = u), (a = c), (s = r);
                    break;
                case 4:
                    (i = d), (a = u), (s = r);
                    break;
                case 5:
                    (i = r), (a = u), (s = c);
            }
            return [i, a, s];
        }
        function RGBtoHSV(e, n, r) {
            var i,
                a = Math.max(e, n, r),
                s = Math.min(e, n, r),
                o = a - s,
                l = 0 === a ? 0 : o / a,
                u = a / 255;
            switch (a) {
                case s:
                    i = 0;
                    break;
                case e:
                    i = (n - r + o * (n < r ? 6 : 0)) / (6 * o);
                    break;
                case n:
                    i = (r - e + 2 * o) / (6 * o);
                    break;
                case r:
                    i = (e - n + 4 * o) / (6 * o);
            }
            return [i, l, u];
        }
        function addSaturationToRGB(e, n) {
            var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (r[1] += n), r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
        }
        function addBrightnessToRGB(e, n) {
            var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (r[2] += n), r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
        }
        function addHueToRGB(e, n) {
            var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
            return (r[0] += n / 360), r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
        }
        var rgbToHex = (function () {
                var e,
                    n,
                    r = [];
                for (e = 0; e < 256; e += 1) (n = e.toString(16)), (r[e] = 1 === n.length ? '0' + n : n);
                return function (e, n, i) {
                    return e < 0 && (e = 0), n < 0 && (n = 0), i < 0 && (i = 0), '#' + r[e] + r[n] + r[i];
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
                    n,
                    r = 1,
                    i = [],
                    a = {
                        onmessage: function () {},
                        postMessage: function (n) {
                            e({ data: n });
                        }
                    },
                    s = {
                        postMessage: function (e) {
                            a.onmessage({ data: e });
                        }
                    };
                function o(n) {
                    if (window.Worker && window.Blob && getWebWorker()) {
                        var r = new Blob(['var _workerSelf = self; self.onmessage = ', n.toString()], { type: 'text/javascript' });
                        return new Worker(URL.createObjectURL(r));
                    }
                    return (e = n), a;
                }
                function l() {
                    !n &&
                        ((n = o(function (e) {
                            function n() {
                                function e(n, r) {
                                    var o,
                                        l,
                                        u,
                                        c,
                                        d,
                                        f,
                                        _ = n.length;
                                    for (l = 0; l < _; l += 1)
                                        if ('ks' in (o = n[l]) && !o.completed) {
                                            if (((o.completed = !0), o.hasMask)) {
                                                var p = o.masksProperties;
                                                for (u = 0, c = p.length; u < c; u += 1)
                                                    if (p[u].pt.k.i) s(p[u].pt.k);
                                                    else for (d = 0, f = p[u].pt.k.length; d < f; d += 1) p[u].pt.k[d].s && s(p[u].pt.k[d].s[0]), p[u].pt.k[d].e && s(p[u].pt.k[d].e[0]);
                                            }
                                            0 === o.ty ? ((o.layers = i(o.refId, r)), e(o.layers, r)) : 4 === o.ty ? a(o.shapes) : 5 === o.ty && h(o);
                                        }
                                }
                                function n(n, r) {
                                    if (n) {
                                        var a = 0,
                                            s = n.length;
                                        for (a = 0; a < s; a += 1) 1 === n[a].t && ((n[a].data.layers = i(n[a].data.refId, r)), e(n[a].data.layers, r));
                                    }
                                }
                                function r(e, n) {
                                    for (var r = 0, i = n.length; r < i; ) {
                                        if (n[r].id === e) return n[r];
                                        r += 1;
                                    }
                                    return null;
                                }
                                function i(e, n) {
                                    var i = r(e, n);
                                    if (i) return i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : ((i.layers.__used = !0), i.layers);
                                    return null;
                                }
                                function a(e) {
                                    var n, r, i;
                                    for (n = e.length - 1; n >= 0; n -= 1)
                                        if ('sh' === e[n].ty) {
                                            if (e[n].ks.k.i) s(e[n].ks.k);
                                            else for (r = 0, i = e[n].ks.k.length; r < i; r += 1) e[n].ks.k[r].s && s(e[n].ks.k[r].s[0]), e[n].ks.k[r].e && s(e[n].ks.k[r].e[0]);
                                        } else 'gr' === e[n].ty && a(e[n].it);
                                }
                                function s(e) {
                                    var n,
                                        r = e.i.length;
                                    for (n = 0; n < r; n += 1) (e.i[n][0] += e.v[n][0]), (e.i[n][1] += e.v[n][1]), (e.o[n][0] += e.v[n][0]), (e.o[n][1] += e.v[n][1]);
                                }
                                function o(e, n) {
                                    var r = n ? n.split('.') : [100, 100, 100];
                                    return !!(e[0] > r[0]) || (!(r[0] > e[0]) && (!!(e[1] > r[1]) || (!(r[1] > e[1]) && (!!(e[2] > r[2]) || (!(r[2] > e[2]) && null)))));
                                }
                                var l = (function () {
                                        var e = [4, 4, 14];
                                        function n(e) {
                                            var n = e.t.d;
                                            e.t.d = {
                                                k: [
                                                    {
                                                        s: n,
                                                        t: 0
                                                    }
                                                ]
                                            };
                                        }
                                        function r(e) {
                                            var r,
                                                i = e.length;
                                            for (r = 0; r < i; r += 1) 5 === e[r].ty && n(e[r]);
                                        }
                                        return function (n) {
                                            if (o(e, n.v) && (r(n.layers), n.assets)) {
                                                var i,
                                                    a = n.assets.length;
                                                for (i = 0; i < a; i += 1) n.assets[i].layers && r(n.assets[i].layers);
                                            }
                                        };
                                    })(),
                                    u = (function () {
                                        var e = [4, 7, 99];
                                        return function (n) {
                                            if (n.chars && !o(e, n.v)) {
                                                var r,
                                                    i = n.chars.length;
                                                for (r = 0; r < i; r += 1) {
                                                    var s = n.chars[r];
                                                    s.data &&
                                                        s.data.shapes &&
                                                        (a(s.data.shapes),
                                                        (s.data.ip = 0),
                                                        (s.data.op = 99999),
                                                        (s.data.st = 0),
                                                        (s.data.sr = 1),
                                                        (s.data.ks = {
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
                                                        !n.chars[r].t &&
                                                            (s.data.shapes.push({ ty: 'no' }),
                                                            s.data.shapes[0].it.push({
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
                                        function n(e) {
                                            var n = e.t.p;
                                            'number' == typeof n.a &&
                                                (n.a = {
                                                    a: 0,
                                                    k: n.a
                                                }),
                                                'number' == typeof n.p &&
                                                    (n.p = {
                                                        a: 0,
                                                        k: n.p
                                                    }),
                                                'number' == typeof n.r &&
                                                    (n.r = {
                                                        a: 0,
                                                        k: n.r
                                                    });
                                        }
                                        function r(e) {
                                            var r,
                                                i = e.length;
                                            for (r = 0; r < i; r += 1) 5 === e[r].ty && n(e[r]);
                                        }
                                        return function (n) {
                                            if (o(e, n.v) && (r(n.layers), n.assets)) {
                                                var i,
                                                    a = n.assets.length;
                                                for (i = 0; i < a; i += 1) n.assets[i].layers && r(n.assets[i].layers);
                                            }
                                        };
                                    })(),
                                    d = (function () {
                                        var e = [4, 1, 9];
                                        function n(e) {
                                            var r,
                                                i,
                                                a,
                                                s = e.length;
                                            for (r = 0; r < s; r += 1)
                                                if ('gr' === e[r].ty) n(e[r].it);
                                                else if ('fl' === e[r].ty || 'st' === e[r].ty) {
                                                    if (e[r].c.k && e[r].c.k[0].i) for (i = 0, a = e[r].c.k.length; i < a; i += 1) e[r].c.k[i].s && ((e[r].c.k[i].s[0] /= 255), (e[r].c.k[i].s[1] /= 255), (e[r].c.k[i].s[2] /= 255), (e[r].c.k[i].s[3] /= 255)), e[r].c.k[i].e && ((e[r].c.k[i].e[0] /= 255), (e[r].c.k[i].e[1] /= 255), (e[r].c.k[i].e[2] /= 255), (e[r].c.k[i].e[3] /= 255));
                                                    else (e[r].c.k[0] /= 255), (e[r].c.k[1] /= 255), (e[r].c.k[2] /= 255), (e[r].c.k[3] /= 255);
                                                }
                                        }
                                        function r(e) {
                                            var r,
                                                i = e.length;
                                            for (r = 0; r < i; r += 1) 4 === e[r].ty && n(e[r].shapes);
                                        }
                                        return function (n) {
                                            if (o(e, n.v) && (r(n.layers), n.assets)) {
                                                var i,
                                                    a = n.assets.length;
                                                for (i = 0; i < a; i += 1) n.assets[i].layers && r(n.assets[i].layers);
                                            }
                                        };
                                    })(),
                                    f = (function () {
                                        var e = [4, 4, 18];
                                        function n(e) {
                                            var r, i, a;
                                            for (r = e.length - 1; r >= 0; r -= 1)
                                                if ('sh' === e[r].ty) {
                                                    if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed;
                                                    else for (i = 0, a = e[r].ks.k.length; i < a; i += 1) e[r].ks.k[i].s && (e[r].ks.k[i].s[0].c = e[r].closed), e[r].ks.k[i].e && (e[r].ks.k[i].e[0].c = e[r].closed);
                                                } else 'gr' === e[r].ty && n(e[r].it);
                                        }
                                        function r(e) {
                                            var r,
                                                i,
                                                a,
                                                s,
                                                o,
                                                l,
                                                u = e.length;
                                            for (i = 0; i < u; i += 1) {
                                                if ((r = e[i]).hasMask) {
                                                    var c = r.masksProperties;
                                                    for (a = 0, s = c.length; a < s; a += 1)
                                                        if (c[a].pt.k.i) c[a].pt.k.c = c[a].cl;
                                                        else for (o = 0, l = c[a].pt.k.length; o < l; o += 1) c[a].pt.k[o].s && (c[a].pt.k[o].s[0].c = c[a].cl), c[a].pt.k[o].e && (c[a].pt.k[o].e[0].c = c[a].cl);
                                                }
                                                4 === r.ty && n(r.shapes);
                                            }
                                        }
                                        return function (n) {
                                            if (o(e, n.v) && (r(n.layers), n.assets)) {
                                                var i,
                                                    a = n.assets.length;
                                                for (i = 0; i < a; i += 1) n.assets[i].layers && r(n.assets[i].layers);
                                            }
                                        };
                                    })();
                                function _(r) {
                                    if (!r.__complete) d(r), l(r), u(r), c(r), f(r), e(r.layers, r.assets), n(r.chars, r.assets), (r.__complete = !0);
                                }
                                function h(e) {
                                    0 === e.t.a.length && e.t.p;
                                }
                                var p = {};
                                return (p.completeData = _), (p.checkColors = d), (p.checkChars = u), (p.checkPathProperties = c), (p.checkShapes = f), (p.completeLayers = e), p;
                            }
                            if (
                                (!s.dataManager && (s.dataManager = n()),
                                !s.assetLoader &&
                                    (s.assetLoader = (function () {
                                        function e(e) {
                                            var n = e.getResponseHeader('content-type');
                                            return (n && 'json' === e.responseType && -1 !== n.indexOf('json')) || (e.response && 'object' === _typeof$5(e.response)) ? e.response : e.response && 'string' == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : null;
                                        }
                                        return {
                                            load: function n(n, r, i, a) {
                                                var s,
                                                    o = new XMLHttpRequest();
                                                try {
                                                    o.responseType = 'json';
                                                } catch (e) {}
                                                o.onreadystatechange = function () {
                                                    if (4 === o.readyState) {
                                                        if (200 === o.status) i((s = e(o)));
                                                        else
                                                            try {
                                                                (s = e(o)), i(s);
                                                            } catch (e) {
                                                                a && a(e);
                                                            }
                                                    }
                                                };
                                                try {
                                                    o.open('GET', n, !0);
                                                } catch (e) {
                                                    o.open('GET', r + '/' + n, !0);
                                                }
                                                o.send();
                                            }
                                        };
                                    })()),
                                'loadAnimation' === e.data.type)
                            )
                                s.assetLoader.load(
                                    e.data.path,
                                    e.data.fullPath,
                                    function (n) {
                                        s.dataManager.completeData(n),
                                            s.postMessage({
                                                id: e.data.id,
                                                payload: n,
                                                status: 'success'
                                            });
                                    },
                                    function () {
                                        s.postMessage({
                                            id: e.data.id,
                                            status: 'error'
                                        });
                                    }
                                );
                            else if ('complete' === e.data.type) {
                                var r = e.data.animation;
                                s.dataManager.completeData(r),
                                    s.postMessage({
                                        id: e.data.id,
                                        payload: r,
                                        status: 'success'
                                    });
                            } else
                                'loadData' === e.data.type &&
                                    s.assetLoader.load(
                                        e.data.path,
                                        e.data.fullPath,
                                        function (n) {
                                            s.postMessage({
                                                id: e.data.id,
                                                payload: n,
                                                status: 'success'
                                            });
                                        },
                                        function () {
                                            s.postMessage({
                                                id: e.data.id,
                                                status: 'error'
                                            });
                                        }
                                    );
                        })).onmessage = function (e) {
                            var n = e.data,
                                r = n.id,
                                a = i[r];
                            (i[r] = null), 'success' === n.status ? a.onComplete(n.payload) : a.onError && a.onError();
                        });
                }
                function u(e, n) {
                    var a = 'processId_' + (r += 1);
                    return (
                        (i[a] = {
                            onComplete: e,
                            onError: n
                        }),
                        a
                    );
                }
                return {
                    loadAnimation: function e(e, r, i) {
                        l();
                        var a = u(r, i);
                        n.postMessage({
                            type: 'loadAnimation',
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: a
                        });
                    },
                    loadData: function e(e, r, i) {
                        l();
                        var a = u(r, i);
                        n.postMessage({
                            type: 'loadData',
                            path: e,
                            fullPath: window.location.origin + window.location.pathname,
                            id: a
                        });
                    },
                    completeAnimation: function e(e, r, i) {
                        l();
                        var a = u(r, i);
                        n.postMessage({
                            type: 'complete',
                            animation: e,
                            id: a
                        });
                    }
                };
            })(),
            ImagePreloader = (function () {
                var e = (function () {
                    var e = createTag('canvas');
                    (e.width = 1), (e.height = 1);
                    var n = e.getContext('2d');
                    return (n.fillStyle = 'rgba(0,0,0,0)'), n.fillRect(0, 0, 1, 1), e;
                })();
                function n() {
                    (this.loadedAssets += 1), this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                }
                function r() {
                    (this.loadedFootagesCount += 1), this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
                }
                function i(e, n, r) {
                    var i = '';
                    if (e.e) i = e.p;
                    else if (n) {
                        var a = e.p;
                        -1 !== a.indexOf('images/') && (a = a.split('/')[1]), (i = n + a);
                    } else i = r + (e.u ? e.u : '') + e.p;
                    return i;
                }
                function a(e) {
                    var n = 0,
                        r = setInterval(
                            function () {
                                (e.getBBox().width || n > 500) && (this._imageLoaded(), clearInterval(r)), (n += 1);
                            }.bind(this),
                            50
                        );
                }
                function s(n) {
                    var r = i(n, this.assetsPath, this.path),
                        a = createNS('image');
                    isSafari ? this.testImageLoaded(a) : a.addEventListener('load', this._imageLoaded, !1),
                        a.addEventListener(
                            'error',
                            function () {
                                (s.img = e), this._imageLoaded();
                            }.bind(this),
                            !1
                        ),
                        a.setAttributeNS('http://www.w3.org/1999/xlink', 'href', r),
                        this._elementHelper.append ? this._elementHelper.append(a) : this._elementHelper.appendChild(a);
                    var s = {
                        img: a,
                        assetData: n
                    };
                    return s;
                }
                function o(n) {
                    var r = i(n, this.assetsPath, this.path),
                        a = createTag('img');
                    (a.crossOrigin = 'anonymous'),
                        a.addEventListener('load', this._imageLoaded, !1),
                        a.addEventListener(
                            'error',
                            function () {
                                (s.img = e), this._imageLoaded();
                            }.bind(this),
                            !1
                        ),
                        (a.src = r);
                    var s = {
                        img: a,
                        assetData: n
                    };
                    return s;
                }
                function l(e) {
                    var n = { assetData: e },
                        r = i(e, this.assetsPath, this.path);
                    return (
                        dataManager.loadData(
                            r,
                            function (e) {
                                (n.img = e), this._footageLoaded();
                            }.bind(this),
                            function () {
                                (n.img = {}), this._footageLoaded();
                            }.bind(this)
                        ),
                        n
                    );
                }
                function u(e, n) {
                    this.imagesLoadedCb = n;
                    var r,
                        i = e.length;
                    for (r = 0; r < i; r += 1) !e[r].layers && (e[r].t && 'seq' !== e[r].t ? 3 === e[r].t && ((this.totalFootages += 1), this.images.push(this.createFootageData(e[r]))) : ((this.totalImages += 1), this.images.push(this._createImageData(e[r]))));
                }
                function c(e) {
                    this.path = e || '';
                }
                function d(e) {
                    this.assetsPath = e || '';
                }
                function f(e) {
                    for (var n = 0, r = this.images.length; n < r; ) {
                        if (this.images[n].assetData === e) return this.images[n].img;
                        n += 1;
                    }
                    return null;
                }
                function _() {
                    (this.imagesLoadedCb = null), (this.images.length = 0);
                }
                function h() {
                    return this.totalImages === this.loadedAssets;
                }
                function p() {
                    return this.totalFootages === this.loadedFootagesCount;
                }
                function m(e, n) {
                    'svg' === e ? ((this._elementHelper = n), (this._createImageData = this.createImageData.bind(this))) : (this._createImageData = this.createImgData.bind(this));
                }
                function g() {
                    (this._imageLoaded = n.bind(this)), (this._footageLoaded = r.bind(this)), (this.testImageLoaded = a.bind(this)), (this.createFootageData = l.bind(this)), (this.assetsPath = ''), (this.path = ''), (this.totalImages = 0), (this.totalFootages = 0), (this.loadedAssets = 0), (this.loadedFootagesCount = 0), (this.imagesLoadedCb = null), (this.images = []);
                }
                return (
                    (g.prototype = {
                        loadAssets: u,
                        setAssetsPath: d,
                        setPath: c,
                        loadedImages: h,
                        loadedFootages: p,
                        destroy: _,
                        getAsset: f,
                        createImgData: o,
                        createImageData: s,
                        imageLoaded: n,
                        footageLoaded: r,
                        setCacheType: m
                    }),
                    g
                );
            })();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function (e, n) {
                if (this._cbs[e]) {
                    for (var r = this._cbs[e], i = 0; i < r.length; i += 1) r[i](n);
                }
            },
            addEventListener: function (e, n) {
                return (
                    !this._cbs[e] && (this._cbs[e] = []),
                    this._cbs[e].push(n),
                    function () {
                        this.removeEventListener(e, n);
                    }.bind(this)
                );
            },
            removeEventListener: function (e, n) {
                if (n) {
                    if (this._cbs[e]) {
                        for (var r = 0, i = this._cbs[e].length; r < i; ) this._cbs[e][r] === n && (this._cbs[e].splice(r, 1), (r -= 1), (i -= 1)), (r += 1);
                        !this._cbs[e].length && (this._cbs[e] = null);
                    }
                } else this._cbs[e] = null;
            }
        };
        var markerParser = (function () {
                function e(e) {
                    for (var n, r = e.split('\r\n'), i = {}, a = 0, s = 0; s < r.length; s += 1) 2 === (n = r[s].split(':')).length && ((i[n[0]] = n[1].trim()), (a += 1));
                    if (0 === a) throw Error();
                    return i;
                }
                return function (n) {
                    for (var r = [], i = 0; i < n.length; i += 1) {
                        var a = n[i],
                            s = {
                                time: a.tm,
                                duration: a.dr
                            };
                        try {
                            s.payload = JSON.parse(n[i].cm);
                        } catch (r) {
                            try {
                                s.payload = e(n[i].cm);
                            } catch (e) {
                                s.payload = { name: n[i].cm };
                            }
                        }
                        r.push(s);
                    }
                    return r;
                };
            })(),
            ProjectInterface = (function () {
                function e(e) {
                    this.compositions.push(e);
                }
                return function () {
                    function n(e) {
                        for (var n = 0, r = this.compositions.length; n < r; ) {
                            if (this.compositions[n].data && this.compositions[n].data.nm === e) return this.compositions[n].prepareFrame && this.compositions[n].data.xt && this.compositions[n].prepareFrame(this.currentFrame), this.compositions[n].compInterface;
                            n += 1;
                        }
                        return null;
                    }
                    return (n.compositions = []), (n.currentFrame = 0), (n.registerComposition = e), n;
                };
            })(),
            renderers = {},
            registerRenderer = function (e, n) {
                renderers[e] = n;
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
                var n = 'svg';
                e.animType ? (n = e.animType) : e.renderer && (n = e.renderer);
                var r = getRenderer(n);
                (this.renderer = new r(this, e.rendererSettings)), this.imagePreloader.setCacheType(n, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), (this.animType = n), '' === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop ? (this.loop = !0) : !1 === e.loop ? (this.loop = !1) : (this.loop = parseInt(e.loop, 10)), (this.autoplay = !('autoplay' in e) || e.autoplay), (this.name = e.name ? e.name : ''), (this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, 'autoloadSegments') || e.autoloadSegments), (this.assetsPath = e.assetsPath), (this.initialSegment = e.initialSegment), e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (-1 !== e.path.lastIndexOf('\\') ? (this.path = e.path.substr(0, e.path.lastIndexOf('\\') + 1)) : (this.path = e.path.substr(0, e.path.lastIndexOf('/') + 1)), (this.fileName = e.path.substr(e.path.lastIndexOf('/') + 1)), (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'))), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError));
            }),
            (AnimationItem.prototype.onSetupError = function () {
                this.trigger('data_failed');
            }),
            (AnimationItem.prototype.setupAnimation = function (e) {
                dataManager.completeAnimation(e, this.configAnimation);
            }),
            (AnimationItem.prototype.setData = function (e, n) {
                n && 'object' !== _typeof$4(n) && (n = JSON.parse(n));
                var r = {
                        wrapper: e,
                        animationData: n
                    },
                    i = e.attributes;
                (r.path = i.getNamedItem('data-animation-path') ? i.getNamedItem('data-animation-path').value : i.getNamedItem('data-bm-path') ? i.getNamedItem('data-bm-path').value : i.getNamedItem('bm-path') ? i.getNamedItem('bm-path').value : ''), (r.animType = i.getNamedItem('data-anim-type') ? i.getNamedItem('data-anim-type').value : i.getNamedItem('data-bm-type') ? i.getNamedItem('data-bm-type').value : i.getNamedItem('bm-type') ? i.getNamedItem('bm-type').value : i.getNamedItem('data-bm-renderer') ? i.getNamedItem('data-bm-renderer').value : i.getNamedItem('bm-renderer') ? i.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas');
                var a = i.getNamedItem('data-anim-loop') ? i.getNamedItem('data-anim-loop').value : i.getNamedItem('data-bm-loop') ? i.getNamedItem('data-bm-loop').value : i.getNamedItem('bm-loop') ? i.getNamedItem('bm-loop').value : '';
                'false' === a ? (r.loop = !1) : 'true' === a ? (r.loop = !0) : '' !== a && (r.loop = parseInt(a, 10));
                var s = i.getNamedItem('data-anim-autoplay') ? i.getNamedItem('data-anim-autoplay').value : i.getNamedItem('data-bm-autoplay') ? i.getNamedItem('data-bm-autoplay').value : !i.getNamedItem('bm-autoplay') || i.getNamedItem('bm-autoplay').value;
                (r.autoplay = 'false' !== s), (r.name = i.getNamedItem('data-name') ? i.getNamedItem('data-name').value : i.getNamedItem('data-bm-name') ? i.getNamedItem('data-bm-name').value : i.getNamedItem('bm-name') ? i.getNamedItem('bm-name').value : ''), 'false' === (i.getNamedItem('data-anim-prerender') ? i.getNamedItem('data-anim-prerender').value : i.getNamedItem('data-bm-prerender') ? i.getNamedItem('data-bm-prerender').value : i.getNamedItem('bm-prerender') ? i.getNamedItem('bm-prerender').value : '') && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger('destroy');
            }),
            (AnimationItem.prototype.includeLayers = function (e) {
                e.op > this.animationData.op && ((this.animationData.op = e.op), (this.totalFrames = Math.floor(e.op - this.animationData.ip)));
                var n,
                    r,
                    i = this.animationData.layers,
                    a = i.length,
                    s = e.layers,
                    o = s.length;
                for (r = 0; r < o; r += 1)
                    for (n = 0; n < a; ) {
                        if (i[n].id === s[r].id) {
                            i[n] = s[r];
                            break;
                        }
                        n += 1;
                    }
                if (((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)) for (n = 0, a = e.assets.length; n < a; n += 1) this.animationData.assets.push(e.assets[n]);
                (this.animationData.__complete = !1), dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
            }),
            (AnimationItem.prototype.onSegmentComplete = function (e) {
                this.animationData = e;
                var n = getExpressionsPlugin();
                n && n.initExpressions(this), this.loadNextSegment();
            }),
            (AnimationItem.prototype.loadNextSegment = function () {
                var e = this.animationData.segments;
                if (!e || 0 === e.length || !this.autoloadSegments) {
                    this.trigger('data_ready'), (this.timeCompleted = this.totalFrames);
                    return;
                }
                var n = e.shift();
                this.timeCompleted = n.time * this.frameRate;
                var r = this.path + this.fileName + '_' + this.segmentPos + '.json';
                (this.segmentPos += 1),
                    dataManager.loadData(
                        r,
                        this.includeLayers.bind(this),
                        function () {
                            this.trigger('data_failed');
                        }.bind(this)
                    );
            }),
            (AnimationItem.prototype.loadSegments = function () {
                !this.animationData.segments && (this.timeCompleted = this.totalFrames), this.loadNextSegment();
            }),
            (AnimationItem.prototype.imagesLoaded = function () {
                this.trigger('loaded_images'), this.checkLoaded();
            }),
            (AnimationItem.prototype.preloadImages = function () {
                this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
            }),
            (AnimationItem.prototype.configAnimation = function (e) {
                if (!!this.renderer)
                    try {
                        (this.animationData = e), this.initialSegment ? ((this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0])), (this.firstFrame = Math.round(this.initialSegment[0]))) : ((this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip)), (this.firstFrame = Math.round(this.animationData.ip))), this.renderer.configAnimation(e), !e.assets && (e.assets = []), (this.assets = this.animationData.assets), (this.frameRate = this.animationData.fr), (this.frameMult = this.animationData.fr / 1000), this.renderer.searchExtraCompositions(e.assets), (this.markers = markerParser(e.markers || [])), this.trigger('config_ready'), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
                    } catch (e) {
                        this.triggerConfigError(e);
                    }
            }),
            (AnimationItem.prototype.waitForFontsLoaded = function () {
                if (!!this.renderer) this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20);
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
            (AnimationItem.prototype.resize = function (e, n) {
                var r = 'number' == typeof e ? e : void 0,
                    i = 'number' == typeof n ? n : void 0;
                this.renderer.updateContainerSize(r, i);
            }),
            (AnimationItem.prototype.setSubframe = function (e) {
                this.isSubframeEnabled = !!e;
            }),
            (AnimationItem.prototype.gotoFrame = function () {
                (this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger('enterFrame'), this.renderFrame(), this.trigger('drawnFrame');
            }),
            (AnimationItem.prototype.renderFrame = function () {
                if (!1 !== this.isLoaded && !!this.renderer)
                    try {
                        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                    } catch (e) {
                        this.triggerRenderFrameError(e);
                    }
            }),
            (AnimationItem.prototype.play = function (e) {
                if (!e || this.name === e) !0 === this.isPaused && ((this.isPaused = !1), this.trigger('_play'), this.audioController.resume(), this._idle && ((this._idle = !1), this.trigger('_active')));
            }),
            (AnimationItem.prototype.pause = function (e) {
                if (!e || this.name === e) !1 === this.isPaused && ((this.isPaused = !0), this.trigger('_pause'), (this._idle = !0), this.trigger('_idle'), this.audioController.pause());
            }),
            (AnimationItem.prototype.togglePause = function (e) {
                if (!e || this.name === e) !0 === this.isPaused ? this.play() : this.pause();
            }),
            (AnimationItem.prototype.stop = function (e) {
                if (!e || this.name === e) this.pause(), (this.playCount = 0), (this._completedLoop = !1), this.setCurrentRawFrameValue(0);
            }),
            (AnimationItem.prototype.getMarkerData = function (e) {
                for (var n, r = 0; r < this.markers.length; r += 1) if ((n = this.markers[r]).payload && n.payload.name === e) return n;
                return null;
            }),
            (AnimationItem.prototype.goToAndStop = function (e, n, r) {
                if (!r || this.name === r) {
                    if (isNaN(Number(e))) {
                        var i = this.getMarkerData(e);
                        i && this.goToAndStop(i.time, !0);
                    } else n ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
                    this.pause();
                }
            }),
            (AnimationItem.prototype.goToAndPlay = function (e, n, r) {
                if (!r || this.name === r) {
                    var i = Number(e);
                    if (isNaN(i)) {
                        var a = this.getMarkerData(e);
                        a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0));
                    } else this.goToAndStop(i, n, r);
                    this.play();
                }
            }),
            (AnimationItem.prototype.advanceTime = function (e) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var n = this.currentRawFrame + e * this.frameModifier,
                        r = !1;
                    n >= this.totalFrames - 1 && this.frameModifier > 0 ? (this.loop && this.playCount !== this.loop ? (n >= this.totalFrames ? ((this.playCount += 1), !this.checkSegments(n % this.totalFrames) && (this.setCurrentRawFrameValue(n % this.totalFrames), (this._completedLoop = !0), this.trigger('loopComplete'))) : this.setCurrentRawFrameValue(n)) : !this.checkSegments(n > this.totalFrames ? n % this.totalFrames : 0) && ((r = !0), (n = this.totalFrames - 1))) : n < 0 ? !this.checkSegments(n % this.totalFrames) && (this.loop && !(this.playCount-- <= 0 && !0 !== this.loop) ? (this.setCurrentRawFrameValue(this.totalFrames + (n % this.totalFrames)), this._completedLoop ? this.trigger('loopComplete') : (this._completedLoop = !0)) : ((r = !0), (n = 0))) : this.setCurrentRawFrameValue(n), r && (this.setCurrentRawFrameValue(n), this.pause(), this.trigger('complete'));
                }
            }),
            (AnimationItem.prototype.adjustSegment = function (e, n) {
                (this.playCount = 0), e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), (this.totalFrames = e[0] - e[1]), (this.timeCompleted = this.totalFrames), (this.firstFrame = e[1]), this.setCurrentRawFrameValue(this.totalFrames - 0.001 - n)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), (this.totalFrames = e[1] - e[0]), (this.timeCompleted = this.totalFrames), (this.firstFrame = e[0]), this.setCurrentRawFrameValue(0.001 + n)), this.trigger('segmentStart');
            }),
            (AnimationItem.prototype.setSegment = function (e, n) {
                var r = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < e ? (r = e) : this.currentRawFrame + this.firstFrame > n && (r = n - e)), (this.firstFrame = e), (this.totalFrames = n - e), (this.timeCompleted = this.totalFrames), -1 !== r && this.goToAndStop(r, !0);
            }),
            (AnimationItem.prototype.playSegments = function (e, n) {
                if ((n && (this.segments.length = 0), 'object' === _typeof$4(e[0]))) {
                    var r,
                        i = e.length;
                    for (r = 0; r < i; r += 1) this.segments.push(e[r]);
                } else this.segments.push(e);
                this.segments.length && n && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
            }),
            (AnimationItem.prototype.resetSegments = function (e) {
                (this.segments.length = 0), this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0);
            }),
            (AnimationItem.prototype.checkSegments = function (e) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0);
            }),
            (AnimationItem.prototype.destroy = function (e) {
                if ((!e || this.name === e) && !!this.renderer) this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger('destroy'), (this._cbs = null), (this.onEnterFrame = null), (this.onLoopComplete = null), (this.onComplete = null), (this.onSegmentStart = null), (this.onDestroy = null), (this.renderer = null), (this.expressionsPlugin = null), (this.imagePreloader = null), (this.projectInterface = null);
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
            (AnimationItem.prototype.setVolume = function (e, n) {
                if (!n || this.name === n) this.audioController.setVolume(e);
            }),
            (AnimationItem.prototype.getVolume = function () {
                return this.audioController.getVolume();
            }),
            (AnimationItem.prototype.mute = function (e) {
                if (!e || this.name === e) this.audioController.mute();
            }),
            (AnimationItem.prototype.unmute = function (e) {
                if (!e || this.name === e) this.audioController.unmute();
            }),
            (AnimationItem.prototype.updaFrameModifier = function () {
                (this.frameModifier = this.frameMult * this.playSpeed * this.playDirection), this.audioController.setRate(this.playSpeed * this.playDirection);
            }),
            (AnimationItem.prototype.getPath = function () {
                return this.path;
            }),
            (AnimationItem.prototype.getAssetsPath = function (e) {
                var n = '';
                if (e.e) n = e.p;
                else if (this.assetsPath) {
                    var r = e.p;
                    -1 !== r.indexOf('images/') && (r = r.split('/')[1]), (n = this.assetsPath + r);
                } else n = this.path + (e.u ? e.u : '') + e.p;
                return n;
            }),
            (AnimationItem.prototype.getAssetData = function (e) {
                for (var n = 0, r = this.assets.length; n < r; ) {
                    if (e === this.assets[n].id) return this.assets[n];
                    n += 1;
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
            (AnimationItem.prototype.updateDocumentData = function (e, n, r) {
                try {
                    this.renderer.getElementByPath(e).updateDocumentData(n, r);
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
                var n = new BMRenderFrameErrorEvent(e, this.currentFrame);
                this.triggerEvent('error', n), this.onError && this.onError.call(this, n);
            }),
            (AnimationItem.prototype.triggerConfigError = function (e) {
                var n = new BMConfigErrorEvent(e, this.currentFrame);
                this.triggerEvent('error', n), this.onError && this.onError.call(this, n);
            });
        var animationManager = (function () {
                var e = {},
                    n = [],
                    r = 0,
                    i = 0,
                    a = 0,
                    s = !0,
                    o = !1;
                function l(e) {
                    for (var r = 0, a = e.target; r < i; ) n[r].animation === a && (n.splice(r, 1), (r -= 1), (i -= 1), !a.isPaused && f()), (r += 1);
                }
                function u(e, r) {
                    if (!e) return null;
                    for (var a = 0; a < i; ) {
                        if (n[a].elem === e && null !== n[a].elem) return n[a].animation;
                        a += 1;
                    }
                    var s = new AnimationItem();
                    return _(s, e), s.setData(e, r), s;
                }
                function c() {
                    var e,
                        r = n.length,
                        i = [];
                    for (e = 0; e < r; e += 1) i.push(n[e].animation);
                    return i;
                }
                function d() {
                    (a += 1), C();
                }
                function f() {
                    a -= 1;
                }
                function _(e, r) {
                    e.addEventListener('destroy', l),
                        e.addEventListener('_active', d),
                        e.addEventListener('_idle', f),
                        n.push({
                            elem: r,
                            animation: e
                        }),
                        (i += 1);
                }
                function h(e) {
                    var n = new AnimationItem();
                    return _(n, null), n.setParams(e), n;
                }
                function p(e, r) {
                    var a;
                    for (a = 0; a < i; a += 1) n[a].animation.setSpeed(e, r);
                }
                function m(e, r) {
                    var a;
                    for (a = 0; a < i; a += 1) n[a].animation.setDirection(e, r);
                }
                function g(e) {
                    var r;
                    for (r = 0; r < i; r += 1) n[r].animation.play(e);
                }
                function E(e) {
                    var l,
                        u = e - r;
                    for (l = 0; l < i; l += 1) n[l].animation.advanceTime(u);
                    (r = e), a && !o ? window.requestAnimationFrame(E) : (s = !0);
                }
                function v(e) {
                    (r = e), window.requestAnimationFrame(E);
                }
                function I(e) {
                    var r;
                    for (r = 0; r < i; r += 1) n[r].animation.pause(e);
                }
                function T(e, r, a) {
                    var s;
                    for (s = 0; s < i; s += 1) n[s].animation.goToAndStop(e, r, a);
                }
                function b(e) {
                    var r;
                    for (r = 0; r < i; r += 1) n[r].animation.stop(e);
                }
                function y(e) {
                    var r;
                    for (r = 0; r < i; r += 1) n[r].animation.togglePause(e);
                }
                function S(e) {
                    var r;
                    for (r = i - 1; r >= 0; r -= 1) n[r].animation.destroy(e);
                }
                function A(e, n, r) {
                    var i,
                        a = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin'))),
                        s = a.length;
                    for (i = 0; i < s; i += 1) r && a[i].setAttribute('data-bm-type', r), u(a[i], e);
                    if (n && 0 === s) {
                        !r && (r = 'svg');
                        var o = document.getElementsByTagName('body')[0];
                        o.innerText = '';
                        var l = createTag('div');
                        (l.style.width = '100%'), (l.style.height = '100%'), l.setAttribute('data-bm-type', r), o.appendChild(l), u(l, e);
                    }
                }
                function N() {
                    var e;
                    for (e = 0; e < i; e += 1) n[e].animation.resize();
                }
                function C() {
                    !o && a && s && (window.requestAnimationFrame(v), (s = !1));
                }
                function R() {
                    o = !0;
                }
                function O() {
                    (o = !1), C();
                }
                function D(e, r) {
                    var a;
                    for (a = 0; a < i; a += 1) n[a].animation.setVolume(e, r);
                }
                function L(e) {
                    var r;
                    for (r = 0; r < i; r += 1) n[r].animation.mute(e);
                }
                function x(e) {
                    var r;
                    for (r = 0; r < i; r += 1) n[r].animation.unmute(e);
                }
                return (e.registerAnimation = u), (e.loadAnimation = h), (e.setSpeed = p), (e.setDirection = m), (e.play = g), (e.pause = I), (e.stop = b), (e.togglePause = y), (e.searchAnimations = A), (e.resize = N), (e.goToAndStop = T), (e.destroy = S), (e.freeze = R), (e.unfreeze = O), (e.setVolume = D), (e.mute = L), (e.unmute = x), (e.getRegisteredAnimations = c), e;
            })(),
            BezierFactory = (function () {
                var e = {};
                e.getBezierEasing = r;
                var n = {};
                function r(e, r, i, a, s) {
                    var o = s || ('bez_' + e + '_' + r + '_' + i + '_' + a).replace(/\./g, 'p');
                    if (n[o]) return n[o];
                    var l = new E([e, r, i, a]);
                    return (n[o] = l), l;
                }
                var i = 4,
                    a = 0.001,
                    s = 1e-7,
                    o = 10,
                    l = 11,
                    u = 0.1,
                    c = 'function' == typeof Float32Array;
                function d(e, n) {
                    return 1 - 3 * n + 3 * e;
                }
                function f(e, n) {
                    return 3 * n - 6 * e;
                }
                function _(e) {
                    return 3 * e;
                }
                function h(e, n, r) {
                    return ((d(n, r) * e + f(n, r)) * e + _(n)) * e;
                }
                function p(e, n, r) {
                    return 3 * d(n, r) * e * e + 2 * f(n, r) * e + _(n);
                }
                function m(e, n, r, i, a) {
                    var l,
                        u,
                        c = 0;
                    do (l = h((u = n + (r - n) / 2), i, a) - e) > 0 ? (r = u) : (n = u);
                    while (Math.abs(l) > s && ++c < o);
                    return u;
                }
                function g(e, n, r, a) {
                    for (var s = 0; s < i; ++s) {
                        var o = p(n, r, a);
                        if (0 === o) break;
                        var l = h(n, r, a) - e;
                        n -= l / o;
                    }
                    return n;
                }
                function E(e) {
                    (this._p = e), (this._mSampleValues = c ? new Float32Array(l) : Array(l)), (this._precomputed = !1), (this.get = this.get.bind(this));
                }
                return (
                    (E.prototype = {
                        get: function (e) {
                            var n = this._p[0],
                                r = this._p[1],
                                i = this._p[2],
                                a = this._p[3];
                            return (!this._precomputed && this._precompute(), n === r && i === a) ? e : 0 === e ? 0 : 1 === e ? 1 : h(this._getTForX(e), r, a);
                        },
                        _precompute: function () {
                            var e = this._p[0],
                                n = this._p[1],
                                r = this._p[2],
                                i = this._p[3];
                            (this._precomputed = !0), (e !== n || r !== i) && this._calcSampleValues();
                        },
                        _calcSampleValues: function () {
                            for (var e = this._p[0], n = this._p[2], r = 0; r < l; ++r) this._mSampleValues[r] = h(r * u, e, n);
                        },
                        _getTForX: function (e) {
                            for (var n = this._p[0], r = this._p[2], i = this._mSampleValues, s = 0, o = 1, c = l - 1; o !== c && i[o] <= e; ++o) s += u;
                            var d = s + ((e - i[--o]) / (i[o + 1] - i[o])) * u,
                                f = p(d, n, r);
                            return f >= a ? g(e, d, n, r) : 0 === f ? d : m(e, s, s + u, n, r);
                        }
                    }),
                    e
                );
            })(),
            pooling = (function () {
                return {
                    double: function e(e) {
                        return e.concat(createSizedArray(e.length));
                    }
                };
            })(),
            poolFactory = (function () {
                return function (e, n, r) {
                    var i = 0,
                        a = e,
                        s = createSizedArray(a);
                    return {
                        newElement: function e() {
                            var e;
                            return i ? ((i -= 1), (e = s[i])) : (e = n()), e;
                        },
                        release: function e(e) {
                            i === a && ((s = pooling.double(s)), (a *= 2)), r && r(e), (s[i] = e), (i += 1);
                        }
                    };
                };
            })(),
            bezierLengthPool = (function () {
                return poolFactory(8, function e() {
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
                    function e() {
                        return {
                            lengths: [],
                            totalLength: 0
                        };
                    },
                    function e(e) {
                        var n,
                            r = e.lengths.length;
                        for (n = 0; n < r; n += 1) bezierLengthPool.release(e.lengths[n]);
                        e.lengths.length = 0;
                    }
                );
            })();
        function bezFunction() {
            var e = Math;
            function n(e, n, r, i, a, s) {
                var o = e * i + n * a + r * s - a * i - s * e - r * n;
                return o > -0.001 && o < 0.001;
            }
            function r(r, i, a, s, o, l, u, c, d) {
                if (0 === a && 0 === l && 0 === d) return n(r, i, s, o, u, c);
                var f,
                    _ = e.sqrt(e.pow(s - r, 2) + e.pow(o - i, 2) + e.pow(l - a, 2)),
                    h = e.sqrt(e.pow(u - r, 2) + e.pow(c - i, 2) + e.pow(d - a, 2)),
                    p = e.sqrt(e.pow(u - s, 2) + e.pow(c - o, 2) + e.pow(d - l, 2));
                return (f = _ > h ? (_ > p ? _ - h - p : p - h - _) : p > h ? p - h - _ : h - _ - p) > -0.0001 && f < 0.0001;
            }
            var i = (function () {
                return function (e, n, r, i) {
                    var a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d = getDefaultCurveSegments(),
                        f = 0,
                        _ = [],
                        h = [],
                        p = bezierLengthPool.newElement();
                    for (a = 0, o = r.length; a < d; a += 1) {
                        for (s = 0, u = a / (d - 1), c = 0; s < o; s += 1) (l = bmPow(1 - u, 3) * e[s] + 3 * bmPow(1 - u, 2) * u * r[s] + 3 * (1 - u) * bmPow(u, 2) * i[s] + bmPow(u, 3) * n[s]), (_[s] = l), null !== h[s] && (c += bmPow(_[s] - h[s], 2)), (h[s] = _[s]);
                        c && (f += c = bmSqrt(c)), (p.percents[a] = u), (p.lengths[a] = f);
                    }
                    return (p.addedLength = f), p;
                };
            })();
            function a(e) {
                var n,
                    r = segmentsLengthPool.newElement(),
                    a = e.c,
                    s = e.v,
                    o = e.o,
                    l = e.i,
                    u = e._length,
                    c = r.lengths,
                    d = 0;
                for (n = 0; n < u - 1; n += 1) (c[n] = i(s[n], s[n + 1], o[n], l[n + 1])), (d += c[n].addedLength);
                return a && u && ((c[n] = i(s[n], s[0], o[n], l[0])), (d += c[n].addedLength)), (r.totalLength = d), r;
            }
            function s(e) {
                (this.segmentLength = 0), (this.points = Array(e));
            }
            function o(e, n) {
                (this.partialLength = e), (this.point = n);
            }
            var l = (function () {
                var e = {};
                return function (r, i, a, l) {
                    var u = (r[0] + '_' + r[1] + '_' + i[0] + '_' + i[1] + '_' + a[0] + '_' + a[1] + '_' + l[0] + '_' + l[1]).replace(/\./g, 'p');
                    if (!e[u]) {
                        var c,
                            d,
                            f,
                            _,
                            h,
                            p,
                            m,
                            g = getDefaultCurveSegments(),
                            E = 0,
                            v = null;
                        2 === r.length && (r[0] !== i[0] || r[1] !== i[1]) && n(r[0], r[1], i[0], i[1], r[0] + a[0], r[1] + a[1]) && n(r[0], r[1], i[0], i[1], i[0] + l[0], i[1] + l[1]) && (g = 2);
                        var I = new s(g);
                        for (c = 0, f = a.length; c < g; c += 1) {
                            for (d = 0, m = createSizedArray(f), h = c / (g - 1), p = 0; d < f; d += 1) (_ = bmPow(1 - h, 3) * r[d] + 3 * bmPow(1 - h, 2) * h * (r[d] + a[d]) + 3 * (1 - h) * bmPow(h, 2) * (i[d] + l[d]) + bmPow(h, 3) * i[d]), (m[d] = _), null !== v && (p += bmPow(m[d] - v[d], 2));
                            (E += p = bmSqrt(p)), (I.points[c] = new o(p, m)), (v = m);
                        }
                        (I.segmentLength = E), (e[u] = I);
                    }
                    return e[u];
                };
            })();
            function u(e, n) {
                var r = n.percents,
                    i = n.lengths,
                    a = r.length,
                    s = bmFloor((a - 1) * e),
                    o = e * n.addedLength,
                    l = 0;
                if (s === a - 1 || 0 === s || o === i[s]) return r[s];
                for (var u = i[s] > o ? -1 : 1, c = !0; c; )
                    if ((i[s] <= o && i[s + 1] > o ? ((l = (o - i[s]) / (i[s + 1] - i[s])), (c = !1)) : (s += u), s < 0 || s >= a - 1)) {
                        if (s === a - 1) return r[s];
                        c = !1;
                    }
                return r[s] + (r[s + 1] - r[s]) * l;
            }
            function c(n, r, i, a, s, o) {
                var l = u(s, o),
                    c = 1 - l;
                return [e.round((c * c * c * n[0] + (l * c * c + c * l * c + c * c * l) * i[0] + (l * l * c + c * l * l + l * c * l) * a[0] + l * l * l * r[0]) * 1000) / 1000, e.round((c * c * c * n[1] + (l * c * c + c * l * c + c * c * l) * i[1] + (l * l * c + c * l * l + l * c * l) * a[1] + l * l * l * r[1]) * 1000) / 1000];
            }
            var d = createTypedArray('float32', 8);
            return {
                getSegmentsLength: a,
                getNewSegment: function n(n, r, i, a, s, o, l) {
                    s < 0 ? (s = 0) : s > 1 && (s = 1);
                    var c,
                        f = u(s, l),
                        _ = u((o = o > 1 ? 1 : o), l),
                        h = n.length,
                        p = 1 - f,
                        m = 1 - _,
                        g = p * p * p,
                        E = f * p * p * 3,
                        v = f * f * p * 3,
                        I = f * f * f,
                        T = p * p * m,
                        b = f * p * m + p * f * m + p * p * _,
                        y = f * f * m + p * f * _ + f * p * _,
                        S = f * f * _,
                        A = p * m * m,
                        N = f * m * m + p * _ * m + p * m * _,
                        C = f * _ * m + p * _ * _ + f * m * _,
                        R = f * _ * _,
                        O = m * m * m,
                        D = _ * m * m + m * _ * m + m * m * _,
                        L = _ * _ * m + m * _ * _ + _ * m * _,
                        x = _ * _ * _;
                    for (c = 0; c < h; c += 1) (d[4 * c] = e.round((g * n[c] + E * i[c] + v * a[c] + I * r[c]) * 1000) / 1000), (d[4 * c + 1] = e.round((T * n[c] + b * i[c] + y * a[c] + S * r[c]) * 1000) / 1000), (d[4 * c + 2] = e.round((A * n[c] + N * i[c] + C * a[c] + R * r[c]) * 1000) / 1000), (d[4 * c + 3] = e.round((O * n[c] + D * i[c] + L * a[c] + x * r[c]) * 1000) / 1000);
                    return d;
                },
                getPointInSegment: c,
                buildBezierData: l,
                pointOnLine2D: n,
                pointOnLine3D: r
            };
        }
        var bez = bezFunction(),
            initFrame = initialDefaultFrame,
            mathAbs = Math.abs;
        function interpolateValue(e, n) {
            var r,
                i,
                a,
                s,
                o,
                l = this.offsetTime;
            'multidimensional' === this.propType && (g = createTypedArray('float32', this.pv.length));
            for (var u = n.lastIndex, c = u, d = this.keyframes.length - 1, f = !0; f; ) {
                if (((E = this.keyframes[c]), (v = this.keyframes[c + 1]), c === d - 1 && e >= v.t - l)) {
                    E.h && (E = v), (u = 0);
                    break;
                }
                if (v.t - l > e) {
                    u = c;
                    break;
                }
                c < d - 1 ? (c += 1) : ((u = 0), (f = !1));
            }
            I = this.keyframesMetadata[c] || {};
            var _ = v.t - l,
                h = E.t - l;
            if (E.to) {
                !I.bezierData && (I.bezierData = bez.buildBezierData(E.s, v.s || E.e, E.to, E.ti));
                var p = I.bezierData;
                if (e >= _ || e < h) {
                    var m = e >= _ ? p.points.length - 1 : 0;
                    for (T = 0, b = p.points[m].point.length; T < b; T += 1) g[T] = p.points[m].point[T];
                } else {
                    I.__fnct ? (N = I.__fnct) : ((N = BezierFactory.getBezierEasing(E.o.x, E.o.y, E.i.x, E.i.y, E.n).get), (I.__fnct = N)), (y = N((e - h) / (_ - h)));
                    var g,
                        E,
                        v,
                        I,
                        T,
                        b,
                        y,
                        S,
                        A,
                        N,
                        C,
                        R,
                        O = p.segmentLength * y,
                        D = n.lastFrame < e && n._lastKeyframeIndex === c ? n._lastAddedLength : 0;
                    for (A = n.lastFrame < e && n._lastKeyframeIndex === c ? n._lastPoint : 0, f = !0, S = p.points.length; f; ) {
                        if (((D += p.points[A].partialLength), 0 === O || 0 === y || A === p.points.length - 1)) {
                            for (T = 0, b = p.points[A].point.length; T < b; T += 1) g[T] = p.points[A].point[T];
                            break;
                        }
                        if (O >= D && O < D + p.points[A + 1].partialLength) {
                            for (T = 0, R = (O - D) / p.points[A + 1].partialLength, b = p.points[A].point.length; T < b; T += 1) g[T] = p.points[A].point[T] + (p.points[A + 1].point[T] - p.points[A].point[T]) * R;
                            break;
                        }
                        A < S - 1 ? (A += 1) : (f = !1);
                    }
                    (n._lastPoint = A), (n._lastAddedLength = D - p.points[A].partialLength), (n._lastKeyframeIndex = c);
                }
            } else if (((d = E.s.length), (C = v.s || E.e), this.sh && 1 !== E.h)) {
                if (e >= _) (g[0] = C[0]), (g[1] = C[1]), (g[2] = C[2]);
                else if (e <= h) (g[0] = E.s[0]), (g[1] = E.s[1]), (g[2] = E.s[2]);
                else {
                    quaternionToEuler(g, slerp(createQuaternion(E.s), createQuaternion(C), (e - h) / (_ - h)));
                }
            } else for (c = 0; c < d; c += 1) 1 !== E.h && (e >= _ ? (y = 1) : e < h ? (y = 0) : (E.o.x.constructor === Array ? (!I.__fnct && (I.__fnct = []), I.__fnct[c] ? (N = I.__fnct[c]) : ((r = void 0 === E.o.x[c] ? E.o.x[0] : E.o.x[c]), (i = void 0 === E.o.y[c] ? E.o.y[0] : E.o.y[c]), (a = void 0 === E.i.x[c] ? E.i.x[0] : E.i.x[c]), (s = void 0 === E.i.y[c] ? E.i.y[0] : E.i.y[c]), (N = BezierFactory.getBezierEasing(r, i, a, s).get), (I.__fnct[c] = N))) : I.__fnct ? (N = I.__fnct) : ((r = E.o.x), (i = E.o.y), (a = E.i.x), (s = E.i.y), (N = BezierFactory.getBezierEasing(r, i, a, s).get), (E.keyframeMetadata = N)), (y = N((e - h) / (_ - h))))), (C = v.s || E.e), (o = 1 === E.h ? E.s[c] : E.s[c] + (C[c] - E.s[c]) * y), 'multidimensional' === this.propType ? (g[c] = o) : (g = o);
            return (n.lastIndex = u), g;
        }
        function slerp(e, n, r) {
            var i,
                a,
                s,
                o,
                l,
                u = [],
                c = e[0],
                d = e[1],
                f = e[2],
                _ = e[3],
                h = n[0],
                p = n[1],
                m = n[2],
                g = n[3];
            return (a = c * h + d * p + f * m + _ * g) < 0 && ((a = -a), (h = -h), (p = -p), (m = -m), (g = -g)), 1 - a > 0.000001 ? ((s = Math.sin((i = Math.acos(a)))), (o = Math.sin((1 - r) * i) / s), (l = Math.sin(r * i) / s)) : ((o = 1 - r), (l = r)), (u[0] = o * c + l * h), (u[1] = o * d + l * p), (u[2] = o * f + l * m), (u[3] = o * _ + l * g), u;
        }
        function quaternionToEuler(e, n) {
            var r = n[0],
                i = n[1],
                a = n[2],
                s = n[3],
                o = Math.atan2(2 * i * s - 2 * r * a, 1 - 2 * i * i - 2 * a * a),
                l = Math.asin(2 * r * i + 2 * a * s),
                u = Math.atan2(2 * r * s - 2 * i * a, 1 - 2 * r * r - 2 * a * a);
            (e[0] = o / degToRads), (e[1] = l / degToRads), (e[2] = u / degToRads);
        }
        function createQuaternion(e) {
            var n = e[0] * degToRads,
                r = e[1] * degToRads,
                i = e[2] * degToRads,
                a = Math.cos(n / 2),
                s = Math.cos(r / 2),
                o = Math.cos(i / 2),
                l = Math.sin(n / 2),
                u = Math.sin(r / 2),
                c = Math.sin(i / 2),
                d = a * s * o - l * u * c;
            return [l * u * o + a * s * c, l * s * o + a * u * c, a * u * o - l * s * c, d];
        }
        function getValueAtCurrentTime() {
            var e = this.comp.renderedFrame - this.offsetTime,
                n = this.keyframes[0].t - this.offsetTime,
                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(e === this._caching.lastFrame || (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= r && e >= r) || (this._caching.lastFrame < n && e < n))))) {
                this._caching.lastFrame >= e && ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0));
                var i = this.interpolateValue(e, this._caching);
                this.pv = i;
            }
            return (this._caching.lastFrame = e), this.pv;
        }
        function setVValue(e) {
            var n;
            if ('unidimensional' === this.propType) (n = e * this.mult), mathAbs(this.v - n) > 0.00001 && ((this.v = n), (this._mdf = !0));
            else {
                for (var r = 0, i = this.v.length; r < i; ) (n = e[r] * this.mult), mathAbs(this.v[r] - n) > 0.00001 && ((this.v[r] = n), (this._mdf = !0)), (r += 1);
            }
        }
        function processEffectsSequence() {
            if (this.elem.globalData.frameId !== this.frameId && !!this.effectsSequence.length) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return;
                }
                (this.lock = !0), (this._mdf = this._isFirstFrame);
                var e,
                    n = this.effectsSequence.length,
                    r = this.kf ? this.pv : this.data.k;
                for (e = 0; e < n; e += 1) r = this.effectsSequence[e](r);
                this.setVValue(r), (this._isFirstFrame = !1), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
            }
        }
        function addEffect(e) {
            this.effectsSequence.push(e), this.container.addDynamicProperty(this);
        }
        function ValueProperty(e, n, r, i) {
            (this.propType = 'unidimensional'), (this.mult = r || 1), (this.data = n), (this.v = r ? n.k * r : n.k), (this.pv = n.k), (this._mdf = !1), (this.elem = e), (this.container = i), (this.comp = e.comp), (this.k = !1), (this.kf = !1), (this.vel = 0), (this.effectsSequence = []), (this._isFirstFrame = !0), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.addEffect = addEffect);
        }
        function MultiDimensionalProperty(e, n, r, i) {
            (this.propType = 'multidimensional'), (this.mult = r || 1), (this.data = n), (this._mdf = !1), (this.elem = e), (this.container = i), (this.comp = e.comp), (this.k = !1), (this.kf = !1), (this.frameId = -1);
            var a,
                s = n.k.length;
            for (a = 0, this.v = createTypedArray('float32', s), this.pv = createTypedArray('float32', s), this.vel = createTypedArray('float32', s); a < s; a += 1) (this.v[a] = n.k[a] * this.mult), (this.pv[a] = n.k[a]);
            (this._isFirstFrame = !0), (this.effectsSequence = []), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.addEffect = addEffect);
        }
        function KeyframedValueProperty(e, n, r, i) {
            (this.propType = 'unidimensional'),
                (this.keyframes = n.k),
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
                (this.data = n),
                (this.mult = r || 1),
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
        function KeyframedMultidimensionalProperty(e, n, r, i) {
            this.propType = 'multidimensional';
            var a,
                s,
                o,
                l,
                u,
                c = n.k.length;
            for (a = 0; a < c - 1; a += 1) n.k[a].to && n.k[a].s && n.k[a + 1] && n.k[a + 1].s && ((s = n.k[a].s), (o = n.k[a + 1].s), (l = n.k[a].to), (u = n.k[a].ti), ((2 === s.length && !(s[0] === o[0] && s[1] === o[1]) && bez.pointOnLine2D(s[0], s[1], o[0], o[1], s[0] + l[0], s[1] + l[1]) && bez.pointOnLine2D(s[0], s[1], o[0], o[1], o[0] + u[0], o[1] + u[1])) || (3 === s.length && !(s[0] === o[0] && s[1] === o[1] && s[2] === o[2]) && bez.pointOnLine3D(s[0], s[1], s[2], o[0], o[1], o[2], s[0] + l[0], s[1] + l[1], s[2] + l[2]) && bez.pointOnLine3D(s[0], s[1], s[2], o[0], o[1], o[2], o[0] + u[0], o[1] + u[1], o[2] + u[2]))) && ((n.k[a].to = null), (n.k[a].ti = null)), s[0] === o[0] && s[1] === o[1] && 0 === l[0] && 0 === l[1] && 0 === u[0] && 0 === u[1] && (2 === s.length || (s[2] === o[2] && 0 === l[2] && 0 === u[2])) && ((n.k[a].to = null), (n.k[a].ti = null)));
            (this.effectsSequence = [getValueAtCurrentTime.bind(this)]), (this.data = n), (this.keyframes = n.k), (this.keyframesMetadata = []), (this.offsetTime = e.data.st), (this.k = !0), (this.kf = !0), (this._isFirstFrame = !0), (this.mult = r || 1), (this.elem = e), (this.container = i), (this.comp = e.comp), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.interpolateValue = interpolateValue), (this.frameId = -1);
            var d = n.k[0].s.length;
            for (a = 0, this.v = createTypedArray('float32', d), this.pv = createTypedArray('float32', d); a < d; a += 1) (this.v[a] = initFrame), (this.pv[a] = initFrame);
            (this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray('float32', d)
            }),
                (this.addEffect = addEffect);
        }
        var PropertyFactory = (function () {
            return {
                getProp: function e(e, n, r, i, a) {
                    var s;
                    if ((n.sid && (n = e.globalData.slotManager.getProp(n)), n.k.length)) {
                        if ('number' == typeof n.k[0]) s = new MultiDimensionalProperty(e, n, i, a);
                        else
                            switch (r) {
                                case 0:
                                    s = new KeyframedValueProperty(e, n, i, a);
                                    break;
                                case 1:
                                    s = new KeyframedMultidimensionalProperty(e, n, i, a);
                            }
                    } else s = new ValueProperty(e, n, i, a);
                    return s.effectsSequence.length && a.addDynamicProperty(s), s;
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
                    n = this.dynamicProperties.length;
                for (e = 0; e < n; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
            },
            initDynamicPropertyContainer: function (e) {
                (this.container = e), (this.dynamicProperties = []), (this._mdf = !1), (this._isAnimated = !1);
            }
        };
        var pointPool = (function () {
            return poolFactory(8, function e() {
                return createTypedArray('float32', 2);
            });
        })();
        function ShapePath() {
            (this.c = !1), (this._length = 0), (this._maxLength = 8), (this.v = createSizedArray(this._maxLength)), (this.o = createSizedArray(this._maxLength)), (this.i = createSizedArray(this._maxLength));
        }
        (ShapePath.prototype.setPathData = function (e, n) {
            (this.c = e), this.setLength(n);
            for (var r = 0; r < n; ) (this.v[r] = pointPool.newElement()), (this.o[r] = pointPool.newElement()), (this.i[r] = pointPool.newElement()), (r += 1);
        }),
            (ShapePath.prototype.setLength = function (e) {
                for (; this._maxLength < e; ) this.doubleArrayLength();
                this._length = e;
            }),
            (ShapePath.prototype.doubleArrayLength = function () {
                (this.v = this.v.concat(createSizedArray(this._maxLength))), (this.i = this.i.concat(createSizedArray(this._maxLength))), (this.o = this.o.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2);
            }),
            (ShapePath.prototype.setXYAt = function (e, n, r, i, a) {
                var s;
                switch (((this._length = Math.max(this._length, i + 1)), this._length >= this._maxLength && this.doubleArrayLength(), r)) {
                    case 'v':
                        s = this.v;
                        break;
                    case 'i':
                        s = this.i;
                        break;
                    case 'o':
                        s = this.o;
                        break;
                    default:
                        s = [];
                }
                (!s[i] || (s[i] && !a)) && (s[i] = pointPool.newElement()), (s[i][0] = e), (s[i][1] = n);
            }),
            (ShapePath.prototype.setTripleAt = function (e, n, r, i, a, s, o, l) {
                this.setXYAt(e, n, 'v', o, l), this.setXYAt(r, i, 'o', o, l), this.setXYAt(a, s, 'i', o, l);
            }),
            (ShapePath.prototype.reverse = function () {
                var e,
                    n = new ShapePath();
                n.setPathData(this.c, this._length);
                var r = this.v,
                    i = this.o,
                    a = this.i,
                    s = 0;
                this.c && (n.setTripleAt(r[0][0], r[0][1], a[0][0], a[0][1], i[0][0], i[0][1], 0, !1), (s = 1));
                var o = this._length - 1,
                    l = this._length;
                for (e = s; e < l; e += 1) n.setTripleAt(r[o][0], r[o][1], a[o][0], a[o][1], i[o][0], i[o][1], e, !1), (o -= 1);
                return n;
            }),
            (ShapePath.prototype.length = function () {
                return this._length;
            });
        var shapePool = (function () {
            function e(e) {
                var r,
                    i = n.newElement(),
                    a = void 0 === e._length ? e.v.length : e._length;
                for (i.setLength(a), i.c = e.c, r = 0; r < a; r += 1) i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
                return i;
            }
            var n = poolFactory(
                4,
                function e() {
                    return new ShapePath();
                },
                function e(e) {
                    var n,
                        r = e._length;
                    for (n = 0; n < r; n += 1) pointPool.release(e.v[n]), pointPool.release(e.i[n]), pointPool.release(e.o[n]), (e.v[n] = null), (e.i[n] = null), (e.o[n] = null);
                    (e._length = 0), (e.c = !1);
                }
            );
            return (n.clone = e), n;
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
                        newShapeCollection: a,
                        release: s
                    },
                    n = 0,
                    r = 4,
                    i = createSizedArray(4);
                function a() {
                    var e;
                    return n ? ((n -= 1), (e = i[n])) : (e = new ShapeCollection()), e;
                }
                function s(e) {
                    var a,
                        s = e._length;
                    for (a = 0; a < s; a += 1) shapePool.release(e.shapes[a]);
                    (e._length = 0), n === r && ((i = pooling.double(i)), (r *= 2)), (i[n] = e), (n += 1);
                }
                return e;
            })(),
            ShapePropertyFactory = (function () {
                var e = -999999;
                function n(e, n, r) {
                    var i = r.lastIndex,
                        a = this.keyframes;
                    if (e < a[0].t - this.offsetTime) (s = a[0].s[0]), (l = !0), (i = 0);
                    else if (e >= a[a.length - 1].t - this.offsetTime) (s = a[a.length - 1].s ? a[a.length - 1].s[0] : a[a.length - 2].e[0]), (l = !0);
                    else {
                        for (var s, o, l, u, c, d, f, _, h, p, m, g, E, v = i, I = a.length - 1, T = !0; T && ((p = a[v]), !((m = a[v + 1]).t - this.offsetTime > e)); ) {
                            v < I - 1 ? (v += 1) : (T = !1);
                        }
                        (g = this.keyframesMetadata[v] || {}), (l = 1 === p.h), (i = v), !l && (e >= m.t - this.offsetTime ? (_ = 1) : e < p.t - this.offsetTime ? (_ = 0) : (g.__fnct ? (E = g.__fnct) : ((E = BezierFactory.getBezierEasing(p.o.x, p.o.y, p.i.x, p.i.y).get), (g.__fnct = E)), (_ = E((e - (p.t - this.offsetTime)) / (m.t - this.offsetTime - (p.t - this.offsetTime))))), (o = m.s ? m.s[0] : p.e[0])), (s = p.s[0]);
                    }
                    for (u = 0, d = n._length, f = s.i[0].length, r.lastIndex = i; u < d; u += 1) for (c = 0; c < f; c += 1) (h = l ? s.i[u][c] : s.i[u][c] + (o.i[u][c] - s.i[u][c]) * _), (n.i[u][c] = h), (h = l ? s.o[u][c] : s.o[u][c] + (o.o[u][c] - s.o[u][c]) * _), (n.o[u][c] = h), (h = l ? s.v[u][c] : s.v[u][c] + (o.v[u][c] - s.v[u][c]) * _), (n.v[u][c] = h);
                }
                function r() {
                    var n = this.comp.renderedFrame - this.offsetTime,
                        r = this.keyframes[0].t - this.offsetTime,
                        i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        a = this._caching.lastFrame;
                    return !(a !== e && ((a < r && n < r) || (a > i && n > i))) && ((this._caching.lastIndex = a < n ? this._caching.lastIndex : 0), this.interpolateShape(n, this.pv, this._caching)), (this._caching.lastFrame = n), this.pv;
                }
                function i() {
                    this.paths = this.localShapeCollection;
                }
                function a(e, n) {
                    if (e._length !== n._length || e.c !== n.c) return !1;
                    var r,
                        i = e._length;
                    for (r = 0; r < i; r += 1) if (e.v[r][0] !== n.v[r][0] || e.v[r][1] !== n.v[r][1] || e.o[r][0] !== n.o[r][0] || e.o[r][1] !== n.o[r][1] || e.i[r][0] !== n.i[r][0] || e.i[r][1] !== n.i[r][1]) return !1;
                    return !0;
                }
                function s(e) {
                    !a(this.v, e) && ((this.v = shapePool.clone(e)), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), (this._mdf = !0), (this.paths = this.localShapeCollection));
                }
                function o() {
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
                            n,
                            r = this.effectsSequence.length;
                        for (n = 0; n < r; n += 1) e = this.effectsSequence[n](e);
                        this.setVValue(e), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                    }
                }
                function l(e, n, r) {
                    (this.propType = 'shape'), (this.comp = e.comp), (this.container = e), (this.elem = e), (this.data = n), (this.k = !1), (this.kf = !1), (this._mdf = !1);
                    var a = 3 === r ? n.pt.k : n.ks.k;
                    (this.v = shapePool.clone(a)), (this.pv = shapePool.clone(this.v)), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), (this.paths = this.localShapeCollection), this.paths.addShape(this.v), (this.reset = i), (this.effectsSequence = []);
                }
                function u(e) {
                    this.effectsSequence.push(e), this.container.addDynamicProperty(this);
                }
                function c(n, a, s) {
                    (this.propType = 'shape'), (this.comp = n.comp), (this.elem = n), (this.container = n), (this.offsetTime = n.data.st), (this.keyframes = 3 === s ? a.pt.k : a.ks.k), (this.keyframesMetadata = []), (this.k = !0), (this.kf = !0);
                    var o = this.keyframes[0].s[0].i.length;
                    (this.v = shapePool.newElement()),
                        this.v.setPathData(this.keyframes[0].s[0].c, o),
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
                        (this.effectsSequence = [r.bind(this)]);
                }
                (l.prototype.interpolateShape = n), (l.prototype.getValue = o), (l.prototype.setVValue = s), (l.prototype.addEffect = u), (c.prototype.getValue = o), (c.prototype.interpolateShape = n), (c.prototype.setVValue = s), (c.prototype.addEffect = u);
                var d = (function () {
                        var e = roundCorner;
                        function n(e, n) {
                            (this.v = shapePool.newElement()), this.v.setPathData(!0, 4), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), (this.paths = this.localShapeCollection), this.localShapeCollection.addShape(this.v), (this.d = n.d), (this.elem = e), (this.comp = e.comp), (this.frameId = -1), this.initDynamicPropertyContainer(e), (this.p = PropertyFactory.getProp(e, n.p, 1, 0, this)), (this.s = PropertyFactory.getProp(e, n.s, 1, 0, this)), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertEllToPath());
                        }
                        return (
                            (n.prototype = {
                                reset: i,
                                getValue: function () {
                                    if (this.elem.globalData.frameId !== this.frameId) (this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertEllToPath();
                                },
                                convertEllToPath: function () {
                                    var n = this.p.v[0],
                                        r = this.p.v[1],
                                        i = this.s.v[0] / 2,
                                        a = this.s.v[1] / 2,
                                        s = 3 !== this.d,
                                        o = this.v;
                                    (o.v[0][0] = n), (o.v[0][1] = r - a), (o.v[1][0] = s ? n + i : n - i), (o.v[1][1] = r), (o.v[2][0] = n), (o.v[2][1] = r + a), (o.v[3][0] = s ? n - i : n + i), (o.v[3][1] = r), (o.i[0][0] = s ? n - i * e : n + i * e), (o.i[0][1] = r - a), (o.i[1][0] = s ? n + i : n - i), (o.i[1][1] = r - a * e), (o.i[2][0] = s ? n + i * e : n - i * e), (o.i[2][1] = r + a), (o.i[3][0] = s ? n - i : n + i), (o.i[3][1] = r + a * e), (o.o[0][0] = s ? n + i * e : n - i * e), (o.o[0][1] = r - a), (o.o[1][0] = s ? n + i : n - i), (o.o[1][1] = r + a * e), (o.o[2][0] = s ? n - i * e : n + i * e), (o.o[2][1] = r + a), (o.o[3][0] = s ? n - i : n + i), (o.o[3][1] = r - a * e);
                                }
                            }),
                            extendPrototype([DynamicPropertyContainer], n),
                            n
                        );
                    })(),
                    f = (function () {
                        function e(e, n) {
                            (this.v = shapePool.newElement()), this.v.setPathData(!0, 0), (this.elem = e), (this.comp = e.comp), (this.data = n), (this.frameId = -1), (this.d = n.d), this.initDynamicPropertyContainer(e), 1 === n.sy ? ((this.ir = PropertyFactory.getProp(e, n.ir, 0, 0, this)), (this.is = PropertyFactory.getProp(e, n.is, 0, 0.01, this)), (this.convertToPath = this.convertStarToPath)) : (this.convertToPath = this.convertPolygonToPath), (this.pt = PropertyFactory.getProp(e, n.pt, 0, 0, this)), (this.p = PropertyFactory.getProp(e, n.p, 1, 0, this)), (this.r = PropertyFactory.getProp(e, n.r, 0, degToRads, this)), (this.or = PropertyFactory.getProp(e, n.or, 0, 0, this)), (this.os = PropertyFactory.getProp(e, n.os, 0, 0.01, this)), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), this.localShapeCollection.addShape(this.v), (this.paths = this.localShapeCollection), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertToPath());
                        }
                        return (
                            (e.prototype = {
                                reset: i,
                                getValue: function () {
                                    if (this.elem.globalData.frameId !== this.frameId) (this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertToPath();
                                },
                                convertStarToPath: function () {
                                    var e,
                                        n,
                                        r,
                                        i,
                                        a = 2 * Math.floor(this.pt.v),
                                        s = (2 * Math.PI) / a,
                                        o = !0,
                                        l = this.or.v,
                                        u = this.ir.v,
                                        c = this.os.v,
                                        d = this.is.v,
                                        f = (2 * Math.PI * l) / (2 * a),
                                        _ = (2 * Math.PI * u) / (2 * a),
                                        h = -Math.PI / 2;
                                    h += this.r.v;
                                    var p = 3 === this.data.d ? -1 : 1;
                                    for (e = 0, this.v._length = 0; e < a; e += 1) {
                                        (n = o ? l : u), (r = o ? c : d), (i = o ? f : _);
                                        var m = n * Math.cos(h),
                                            g = n * Math.sin(h),
                                            E = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                                            v = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                                        (m += +this.p.v[0]), (g += +this.p.v[1]), this.v.setTripleAt(m, g, m - E * i * r * p, g - v * i * r * p, m + E * i * r * p, g + v * i * r * p, e, !0), (o = !o), (h += s * p);
                                    }
                                },
                                convertPolygonToPath: function () {
                                    var e,
                                        n = Math.floor(this.pt.v),
                                        r = (2 * Math.PI) / n,
                                        i = this.or.v,
                                        a = this.os.v,
                                        s = (2 * Math.PI * i) / (4 * n),
                                        o = -(0.5 * Math.PI),
                                        l = 3 === this.data.d ? -1 : 1;
                                    for (o += this.r.v, this.v._length = 0, e = 0; e < n; e += 1) {
                                        var u = i * Math.cos(o),
                                            c = i * Math.sin(o),
                                            d = 0 === u && 0 === c ? 0 : c / Math.sqrt(u * u + c * c),
                                            f = 0 === u && 0 === c ? 0 : -u / Math.sqrt(u * u + c * c);
                                        (u += +this.p.v[0]), (c += +this.p.v[1]), this.v.setTripleAt(u, c, u - d * s * a * l, c - f * s * a * l, u + d * s * a * l, c + f * s * a * l, e, !0), (o += r * l);
                                    }
                                    (this.paths.length = 0), (this.paths[0] = this.v);
                                }
                            }),
                            extendPrototype([DynamicPropertyContainer], e),
                            e
                        );
                    })(),
                    _ = (function () {
                        function e(e, n) {
                            (this.v = shapePool.newElement()), (this.v.c = !0), (this.localShapeCollection = shapeCollectionPool.newShapeCollection()), this.localShapeCollection.addShape(this.v), (this.paths = this.localShapeCollection), (this.elem = e), (this.comp = e.comp), (this.frameId = -1), (this.d = n.d), this.initDynamicPropertyContainer(e), (this.p = PropertyFactory.getProp(e, n.p, 1, 0, this)), (this.s = PropertyFactory.getProp(e, n.s, 1, 0, this)), (this.r = PropertyFactory.getProp(e, n.r, 0, 0, this)), this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertRectToPath());
                        }
                        return (
                            (e.prototype = {
                                convertRectToPath: function () {
                                    var e = this.p.v[0],
                                        n = this.p.v[1],
                                        r = this.s.v[0] / 2,
                                        i = this.s.v[1] / 2,
                                        a = bmMin(r, i, this.r.v),
                                        s = a * (1 - roundCorner);
                                    (this.v._length = 0), 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + r, n - i + a, e + r, n - i + a, e + r, n - i + s, 0, !0), this.v.setTripleAt(e + r, n + i - a, e + r, n + i - s, e + r, n + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(e + r - a, n + i, e + r - a, n + i, e + r - s, n + i, 2, !0), this.v.setTripleAt(e - r + a, n + i, e - r + s, n + i, e - r + a, n + i, 3, !0), this.v.setTripleAt(e - r, n + i - a, e - r, n + i - a, e - r, n + i - s, 4, !0), this.v.setTripleAt(e - r, n - i + a, e - r, n - i + s, e - r, n - i + a, 5, !0), this.v.setTripleAt(e - r + a, n - i, e - r + a, n - i, e - r + s, n - i, 6, !0), this.v.setTripleAt(e + r - a, n - i, e + r - s, n - i, e + r - a, n - i, 7, !0)) : (this.v.setTripleAt(e - r, n + i, e - r + s, n + i, e - r, n + i, 2), this.v.setTripleAt(e - r, n - i, e - r, n - i + s, e - r, n - i, 3))) : (this.v.setTripleAt(e + r, n - i + a, e + r, n - i + s, e + r, n - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(e + r - a, n - i, e + r - a, n - i, e + r - s, n - i, 1, !0), this.v.setTripleAt(e - r + a, n - i, e - r + s, n - i, e - r + a, n - i, 2, !0), this.v.setTripleAt(e - r, n - i + a, e - r, n - i + a, e - r, n - i + s, 3, !0), this.v.setTripleAt(e - r, n + i - a, e - r, n + i - s, e - r, n + i - a, 4, !0), this.v.setTripleAt(e - r + a, n + i, e - r + a, n + i, e - r + s, n + i, 5, !0), this.v.setTripleAt(e + r - a, n + i, e + r - s, n + i, e + r - a, n + i, 6, !0), this.v.setTripleAt(e + r, n + i - a, e + r, n + i - a, e + r, n + i - s, 7, !0)) : (this.v.setTripleAt(e - r, n - i, e - r + s, n - i, e - r, n - i, 1, !0), this.v.setTripleAt(e - r, n + i, e - r, n + i - s, e - r, n + i, 2, !0), this.v.setTripleAt(e + r, n + i, e + r - s, n + i, e + r, n + i, 3, !0)));
                                },
                                getValue: function () {
                                    if (this.elem.globalData.frameId !== this.frameId) (this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertRectToPath();
                                },
                                reset: i
                            }),
                            extendPrototype([DynamicPropertyContainer], e),
                            e
                        );
                    })();
                function h(e, n, r) {
                    var i;
                    return 3 === r || 4 === r ? (i = (3 === r ? n.pt : n.ks).k.length ? new c(e, n, r) : new l(e, n, r)) : 5 === r ? (i = new _(e, n)) : 6 === r ? (i = new d(e, n)) : 7 === r && (i = new f(e, n)), i.k && e.addDynamicProperty(i), i;
                }
                function p() {
                    return l;
                }
                function m() {
                    return c;
                }
                var g = {};
                return (g.getShapeProp = h), (g.getConstructorFunction = p), (g.getKeyframedConstructorFunction = m), g;
            })(),
            Matrix = (function () {
                var e = Math.cos,
                    n = Math.sin,
                    r = Math.tan,
                    i = Math.round;
                function a() {
                    return (this.props[0] = 1), (this.props[1] = 0), (this.props[2] = 0), (this.props[3] = 0), (this.props[4] = 0), (this.props[5] = 1), (this.props[6] = 0), (this.props[7] = 0), (this.props[8] = 0), (this.props[9] = 0), (this.props[10] = 1), (this.props[11] = 0), (this.props[12] = 0), (this.props[13] = 0), (this.props[14] = 0), (this.props[15] = 1), this;
                }
                function s(r) {
                    if (0 === r) return this;
                    var i = e(r),
                        a = n(r);
                    return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function o(r) {
                    if (0 === r) return this;
                    var i = e(r),
                        a = n(r);
                    return this._t(1, 0, 0, 0, 0, i, -a, 0, 0, a, i, 0, 0, 0, 0, 1);
                }
                function l(r) {
                    if (0 === r) return this;
                    var i = e(r),
                        a = n(r);
                    return this._t(i, 0, a, 0, 0, 1, 0, 0, -a, 0, i, 0, 0, 0, 0, 1);
                }
                function u(r) {
                    if (0 === r) return this;
                    var i = e(r),
                        a = n(r);
                    return this._t(i, -a, 0, 0, a, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function c(e, n) {
                    return this._t(1, n, e, 1, 0, 0);
                }
                function d(e, n) {
                    return this.shear(r(e), r(n));
                }
                function f(i, a) {
                    var s = e(a),
                        o = n(a);
                    return this._t(s, o, 0, 0, -o, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -o, 0, 0, o, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
                }
                function _(e, n, r) {
                    return (!r && 0 !== r && (r = 1), 1 === e && 1 === n && 1 === r) ? this : this._t(e, 0, 0, 0, 0, n, 0, 0, 0, 0, r, 0, 0, 0, 0, 1);
                }
                function h(e, n, r, i, a, s, o, l, u, c, d, f, _, h, p, m) {
                    return (this.props[0] = e), (this.props[1] = n), (this.props[2] = r), (this.props[3] = i), (this.props[4] = a), (this.props[5] = s), (this.props[6] = o), (this.props[7] = l), (this.props[8] = u), (this.props[9] = c), (this.props[10] = d), (this.props[11] = f), (this.props[12] = _), (this.props[13] = h), (this.props[14] = p), (this.props[15] = m), this;
                }
                function p(e, n, r) {
                    return ((r = r || 0), 0 !== e || 0 !== n || 0 !== r) ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, n, r, 1) : this;
                }
                function m(e, n, r, i, a, s, o, l, u, c, d, f, _, h, p, m) {
                    var g = this.props;
                    if (1 === e && 0 === n && 0 === r && 0 === i && 0 === a && 1 === s && 0 === o && 0 === l && 0 === u && 0 === c && 1 === d && 0 === f) return (g[12] = g[12] * e + g[15] * _), (g[13] = g[13] * s + g[15] * h), (g[14] = g[14] * d + g[15] * p), (g[15] *= m), (this._identityCalculated = !1), this;
                    var E = g[0],
                        v = g[1],
                        I = g[2],
                        T = g[3],
                        b = g[4],
                        y = g[5],
                        S = g[6],
                        A = g[7],
                        N = g[8],
                        C = g[9],
                        R = g[10],
                        O = g[11],
                        D = g[12],
                        L = g[13],
                        x = g[14],
                        w = g[15];
                    return (g[0] = E * e + v * a + I * u + T * _), (g[1] = E * n + v * s + I * c + T * h), (g[2] = E * r + v * o + I * d + T * p), (g[3] = E * i + v * l + I * f + T * m), (g[4] = b * e + y * a + S * u + A * _), (g[5] = b * n + y * s + S * c + A * h), (g[6] = b * r + y * o + S * d + A * p), (g[7] = b * i + y * l + S * f + A * m), (g[8] = N * e + C * a + R * u + O * _), (g[9] = N * n + C * s + R * c + O * h), (g[10] = N * r + C * o + R * d + O * p), (g[11] = N * i + C * l + R * f + O * m), (g[12] = D * e + L * a + x * u + w * _), (g[13] = D * n + L * s + x * c + w * h), (g[14] = D * r + L * o + x * d + w * p), (g[15] = D * i + L * l + x * f + w * m), (this._identityCalculated = !1), this;
                }
                function g(e) {
                    var n = e.props;
                    return this.transform(n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], n[8], n[9], n[10], n[11], n[12], n[13], n[14], n[15]);
                }
                function E() {
                    return !this._identityCalculated && ((this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15])), (this._identityCalculated = !0)), this._identity;
                }
                function v(e) {
                    for (var n = 0; n < 16; ) {
                        if (e.props[n] !== this.props[n]) return !1;
                        n += 1;
                    }
                    return !0;
                }
                function I(e) {
                    var n;
                    for (n = 0; n < 16; n += 1) e.props[n] = this.props[n];
                    return e;
                }
                function T(e) {
                    var n;
                    for (n = 0; n < 16; n += 1) this.props[n] = e[n];
                }
                function b(e, n, r) {
                    return {
                        x: e * this.props[0] + n * this.props[4] + r * this.props[8] + this.props[12],
                        y: e * this.props[1] + n * this.props[5] + r * this.props[9] + this.props[13],
                        z: e * this.props[2] + n * this.props[6] + r * this.props[10] + this.props[14]
                    };
                }
                function y(e, n, r) {
                    return e * this.props[0] + n * this.props[4] + r * this.props[8] + this.props[12];
                }
                function S(e, n, r) {
                    return e * this.props[1] + n * this.props[5] + r * this.props[9] + this.props[13];
                }
                function A(e, n, r) {
                    return e * this.props[2] + n * this.props[6] + r * this.props[10] + this.props[14];
                }
                function N() {
                    var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                        n = this.props[5] / e,
                        r = -this.props[1] / e,
                        i = -this.props[4] / e,
                        a = this.props[0] / e,
                        s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                        o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                        l = new Matrix();
                    return (l.props[0] = n), (l.props[1] = r), (l.props[4] = i), (l.props[5] = a), (l.props[12] = s), (l.props[13] = o), l;
                }
                function C(e) {
                    return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0);
                }
                function R(e) {
                    var n,
                        r = e.length,
                        i = [];
                    for (n = 0; n < r; n += 1) i[n] = C(e[n]);
                    return i;
                }
                function O(e, n, r) {
                    var i = createTypedArray('float32', 6);
                    if (this.isIdentity()) (i[0] = e[0]), (i[1] = e[1]), (i[2] = n[0]), (i[3] = n[1]), (i[4] = r[0]), (i[5] = r[1]);
                    else {
                        var a = this.props[0],
                            s = this.props[1],
                            o = this.props[4],
                            l = this.props[5],
                            u = this.props[12],
                            c = this.props[13];
                        (i[0] = e[0] * a + e[1] * o + u), (i[1] = e[0] * s + e[1] * l + c), (i[2] = n[0] * a + n[1] * o + u), (i[3] = n[0] * s + n[1] * l + c), (i[4] = r[0] * a + r[1] * o + u), (i[5] = r[0] * s + r[1] * l + c);
                    }
                    return i;
                }
                function D(e, n, r) {
                    var i;
                    return (i = this.isIdentity() ? [e, n, r] : [e * this.props[0] + n * this.props[4] + r * this.props[8] + this.props[12], e * this.props[1] + n * this.props[5] + r * this.props[9] + this.props[13], e * this.props[2] + n * this.props[6] + r * this.props[10] + this.props[14]]);
                }
                function L(e, n) {
                    if (this.isIdentity()) return e + ',' + n;
                    var r = this.props;
                    return Math.round((e * r[0] + n * r[4] + r[12]) * 100) / 100 + ',' + Math.round((e * r[1] + n * r[5] + r[13]) * 100) / 100;
                }
                function x() {
                    for (var e = 0, n = this.props, r = 'matrix3d(', a = 10000; e < 16; ) (r += i(n[e] * a) / a + (15 === e ? ')' : ',')), (e += 1);
                    return r;
                }
                function w(e) {
                    var n = 10000;
                    return (e < 0.000001 && e > 0) || (e > -0.000001 && e < 0) ? i(e * n) / n : e;
                }
                function P() {
                    var e = this.props;
                    return 'matrix(' + w(e[0]) + ',' + w(e[1]) + ',' + w(e[4]) + ',' + w(e[5]) + ',' + w(e[12]) + ',' + w(e[13]) + ')';
                }
                return function () {
                    (this.reset = a), (this.rotate = s), (this.rotateX = o), (this.rotateY = l), (this.rotateZ = u), (this.skew = d), (this.skewFromAxis = f), (this.shear = c), (this.scale = _), (this.setTransform = h), (this.translate = p), (this.transform = m), (this.multiply = g), (this.applyToPoint = b), (this.applyToX = y), (this.applyToY = S), (this.applyToZ = A), (this.applyToPointArray = D), (this.applyToTriplePoints = O), (this.applyToPointStringified = L), (this.toCSS = x), (this.to2dCSS = P), (this.clone = I), (this.cloneFromProps = T), (this.equals = v), (this.inversePoints = R), (this.inversePoint = C), (this.getInverseMatrix = N), (this._t = this.transform), (this.isIdentity = E), (this._identity = !0), (this._identityCalculated = !1), (this.props = createTypedArray('float32', 16)), this.reset();
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
        function installPlugin(e, n) {
            'expressions' === e && setExpressionsPlugin(n);
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
            for (var n = queryString.split('&'), r = 0; r < n.length; r += 1) {
                var i = n[r].split('=');
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
            'object' !== _typeof$3(exports) && !('function' == typeof define && define.amd) && (window.bodymovin = lottie);
        } catch (err) {}
        var ShapeModifiers = (function () {
            var e = {},
                n = {};
            function r(e, r) {
                !n[e] && (n[e] = r);
            }
            function i(e, r, i) {
                return new n[e](r, i);
            }
            return (e.registerModifier = r), (e.getModifier = i), e;
        })();
        function ShapeModifier() {}
        function TrimModifier() {}
        function PuckerAndBloatModifier() {}
        (ShapeModifier.prototype.initModifierProperties = function () {}),
            (ShapeModifier.prototype.addShapeToModifier = function () {}),
            (ShapeModifier.prototype.addShape = function (e) {
                if (!this.closed) {
                    e.sh.container.addDynamicProperty(e.sh);
                    var n = {
                        shape: e.sh,
                        data: e,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(n), this.addShapeToModifier(n), this._isAnimated && e.setAsAnimated();
                }
            }),
            (ShapeModifier.prototype.init = function (e, n) {
                (this.shapes = []), (this.elem = e), this.initDynamicPropertyContainer(e), this.initModifierProperties(e, n), (this.frameId = initialDefaultFrame), (this.closed = !1), (this.k = !1), this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (ShapeModifier.prototype.processKeys = function () {
                if (this.elem.globalData.frameId !== this.frameId) (this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties();
            }),
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            (TrimModifier.prototype.initModifierProperties = function (e, n) {
                (this.s = PropertyFactory.getProp(e, n.s, 0, 0.01, this)), (this.e = PropertyFactory.getProp(e, n.e, 0, 0.01, this)), (this.o = PropertyFactory.getProp(e, n.o, 0, 0, this)), (this.sValue = 0), (this.eValue = 0), (this.getValue = this.processKeys), (this.m = n.m), (this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length);
            }),
            (TrimModifier.prototype.addShapeToModifier = function (e) {
                e.pathsData = [];
            }),
            (TrimModifier.prototype.calculateShapeEdges = function (e, n, r, i, a) {
                var s,
                    o,
                    l,
                    u,
                    c = [];
                n <= 1
                    ? c.push({
                          s: e,
                          e: n
                      })
                    : e >= 1
                      ? c.push({
                            s: e - 1,
                            e: n - 1
                        })
                      : (c.push({
                            s: e,
                            e: 1
                        }),
                        c.push({
                            s: 0,
                            e: n - 1
                        }));
                var d = [],
                    f = c.length;
                for (s = 0; s < f; s += 1) !((o = c[s]).e * a < i || o.s * a > i + r) && ((l = o.s * a <= i ? 0 : (o.s * a - i) / r), (u = o.e * a >= i + r ? 1 : (o.e * a - i) / r), d.push([l, u]));
                return !d.length && d.push([0, 0]), d;
            }),
            (TrimModifier.prototype.releasePathsData = function (e) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) segmentsLengthPool.release(e[n]);
                return (e.length = 0), e;
            }),
            (TrimModifier.prototype.processShapes = function (e) {
                if (this._mdf || e) {
                    var n = (this.o.v % 360) / 360;
                    if ((n < 0 && (n += 1), (s = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n), s > (o = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n))) {
                        var r = s;
                        (s = o), (o = r);
                    }
                    (s = 0.0001 * Math.round(10000 * s)), (o = 0.0001 * Math.round(10000 * o)), (this.sValue = s), (this.eValue = o);
                } else (s = this.sValue), (o = this.eValue);
                var i = this.shapes.length,
                    a = 0;
                if (o === s) for (u = 0; u < i; u += 1) this.shapes[u].localShapeCollection.releaseShapes(), (this.shapes[u].shape._mdf = !0), (this.shapes[u].shape.paths = this.shapes[u].localShapeCollection), this._mdf && (this.shapes[u].pathsData.length = 0);
                else if ((1 === o && 0 === s) || (0 === o && 1 === s)) {
                    if (this._mdf) for (u = 0; u < i; u += 1) (this.shapes[u].pathsData.length = 0), (this.shapes[u].shape._mdf = !0);
                } else {
                    var s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        f,
                        _,
                        h,
                        p,
                        m,
                        g,
                        E = [];
                    for (u = 0; u < i; u += 1)
                        if ((p = this.shapes[u]).shape._mdf || this._mdf || e || 2 === this.m) {
                            if (((d = (l = p.shape.paths)._length), (h = 0), !p.shape._mdf && p.pathsData.length)) h = p.totalShapeLength;
                            else {
                                for (c = 0, f = this.releasePathsData(p.pathsData); c < d; c += 1) (_ = bez.getSegmentsLength(l.shapes[c])), f.push(_), (h += _.totalLength);
                                (p.totalShapeLength = h), (p.pathsData = f);
                            }
                            (a += h), (p.shape._mdf = !0);
                        } else p.shape.paths = p.localShapeCollection;
                    var v = s,
                        I = o,
                        T = 0;
                    for (u = i - 1; u >= 0; u -= 1)
                        if ((p = this.shapes[u]).shape._mdf) {
                            for ((m = p.localShapeCollection).releaseShapes(), 2 === this.m && i > 1 ? ((g = this.calculateShapeEdges(s, o, p.totalShapeLength, T, a)), (T += p.totalShapeLength)) : (g = [[v, I]]), d = g.length, c = 0; c < d; c += 1) {
                                (v = g[c][0]),
                                    (I = g[c][1]),
                                    (E.length = 0),
                                    I <= 1
                                        ? E.push({
                                              s: p.totalShapeLength * v,
                                              e: p.totalShapeLength * I
                                          })
                                        : v >= 1
                                          ? E.push({
                                                s: p.totalShapeLength * (v - 1),
                                                e: p.totalShapeLength * (I - 1)
                                            })
                                          : (E.push({
                                                s: p.totalShapeLength * v,
                                                e: p.totalShapeLength
                                            }),
                                            E.push({
                                                s: 0,
                                                e: p.totalShapeLength * (I - 1)
                                            }));
                                var b = this.addShapes(p, E[0]);
                                if (E[0].s !== E[0].e) {
                                    if (E.length > 1) {
                                        if (p.shape.paths.shapes[p.shape.paths._length - 1].c) {
                                            var y = b.pop();
                                            this.addPaths(b, m), (b = this.addShapes(p, E[1], y));
                                        } else this.addPaths(b, m), (b = this.addShapes(p, E[1]));
                                    }
                                    this.addPaths(b, m);
                                }
                            }
                            p.shape.paths = m;
                        }
                }
            }),
            (TrimModifier.prototype.addPaths = function (e, n) {
                var r,
                    i = e.length;
                for (r = 0; r < i; r += 1) n.addShape(e[r]);
            }),
            (TrimModifier.prototype.addSegment = function (e, n, r, i, a, s, o) {
                a.setXYAt(n[0], n[1], 'o', s), a.setXYAt(r[0], r[1], 'i', s + 1), o && a.setXYAt(e[0], e[1], 'v', s), a.setXYAt(i[0], i[1], 'v', s + 1);
            }),
            (TrimModifier.prototype.addSegmentFromArray = function (e, n, r, i) {
                n.setXYAt(e[1], e[5], 'o', r), n.setXYAt(e[2], e[6], 'i', r + 1), i && n.setXYAt(e[0], e[4], 'v', r), n.setXYAt(e[3], e[7], 'v', r + 1);
            }),
            (TrimModifier.prototype.addShapes = function (e, n, r) {
                var i,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    f = e.pathsData,
                    _ = e.shape.paths.shapes,
                    h = e.shape.paths._length,
                    p = 0,
                    m = [],
                    g = !0;
                for (r ? ((l = r._length), (d = r._length)) : ((r = shapePool.newElement()), (l = 0), (d = 0)), m.push(r), i = 0; i < h; i += 1) {
                    for (a = 1, u = f[i].lengths, r.c = _[i].c, s = _[i].c ? u.length : u.length + 1; a < s; a += 1)
                        if (p + (o = u[a - 1]).addedLength < n.s) (p += o.addedLength), (r.c = !1);
                        else if (p > n.e) {
                            r.c = !1;
                            break;
                        } else n.s <= p && n.e >= p + o.addedLength ? (this.addSegment(_[i].v[a - 1], _[i].o[a - 1], _[i].i[a], _[i].v[a], r, l, g), (g = !1)) : ((c = bez.getNewSegment(_[i].v[a - 1], _[i].v[a], _[i].o[a - 1], _[i].i[a], (n.s - p) / o.addedLength, (n.e - p) / o.addedLength, u[a - 1])), this.addSegmentFromArray(c, r, l, g), (g = !1), (r.c = !1)), (p += o.addedLength), (l += 1);
                    if (_[i].c && u.length) {
                        if (((o = u[a - 1]), p <= n.e)) {
                            var E = u[a - 1].addedLength;
                            n.s <= p && n.e >= p + E ? (this.addSegment(_[i].v[a - 1], _[i].o[a - 1], _[i].i[0], _[i].v[0], r, l, g), (g = !1)) : ((c = bez.getNewSegment(_[i].v[a - 1], _[i].v[0], _[i].o[a - 1], _[i].i[0], (n.s - p) / E, (n.e - p) / E, u[a - 1])), this.addSegmentFromArray(c, r, l, g), (g = !1), (r.c = !1));
                        } else r.c = !1;
                        (p += o.addedLength), (l += 1);
                    }
                    if ((r._length && (r.setXYAt(r.v[d][0], r.v[d][1], 'i', d), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], 'o', r._length - 1)), p > n.e)) break;
                    i < h - 1 && ((r = shapePool.newElement()), (g = !0), m.push(r), (l = 0));
                }
                return m;
            }),
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            (PuckerAndBloatModifier.prototype.initModifierProperties = function (e, n) {
                (this.getValue = this.processKeys), (this.amount = PropertyFactory.getProp(e, n.a, 0, null, this)), (this._isAnimated = !!this.amount.effectsSequence.length);
            }),
            (PuckerAndBloatModifier.prototype.processPath = function (e, n) {
                var r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    u = n / 100,
                    c = [0, 0],
                    d = e._length,
                    f = 0;
                for (f = 0; f < d; f += 1) (c[0] += e.v[f][0]), (c[1] += e.v[f][1]);
                (c[0] /= d), (c[1] /= d);
                var _ = shapePool.newElement();
                for (f = 0, _.c = e.c; f < d; f += 1) (r = e.v[f][0] + (c[0] - e.v[f][0]) * u), (i = e.v[f][1] + (c[1] - e.v[f][1]) * u), (a = e.o[f][0] + -((c[0] - e.o[f][0]) * u)), (s = e.o[f][1] + -((c[1] - e.o[f][1]) * u)), (o = e.i[f][0] + -((c[0] - e.i[f][0]) * u)), (l = e.i[f][1] + -((c[1] - e.i[f][1]) * u)), _.setTripleAt(r, i, a, s, o, l, f);
                return _;
            }),
            (PuckerAndBloatModifier.prototype.processShapes = function (e) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l = this.shapes.length,
                    u = this.amount.v;
                if (0 !== u)
                    for (r = 0; r < l; r += 1) {
                        if (((o = (s = this.shapes[r]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), s.shape._mdf = !0, n = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) o.addShape(this.processPath(n[i], u));
                        s.shape.paths = s.localShapeCollection;
                    }
                !this.dynamicProperties.length && (this._mdf = !1);
            });
        var TransformPropertyFactory = (function () {
            var e = [0, 0];
            function n(e) {
                var n = this._mdf;
                this.iterateDynamicProperties(), (this._mdf = this._mdf || n), this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? (this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0)) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function r(n) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if ((this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)), this.iterateDynamicProperties(), this._mdf || n)) {
                        var r;
                        if ((this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented)) {
                            if (((r = this.elem.globalData.frameRate), this.p && this.p.keyframes && this.p.getValueAtTime)) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? ((i = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / r, 0)), (a = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0))) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? ((i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0)), (a = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / r, 0))) : ((i = this.p.pv), (a = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / r, this.p.offsetTime)));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                (i = []), (a = []);
                                var i,
                                    a,
                                    s = this.px,
                                    o = this.py;
                                s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? ((i[0] = s.getValueAtTime((s.keyframes[0].t + 0.01) / r, 0)), (i[1] = o.getValueAtTime((o.keyframes[0].t + 0.01) / r, 0)), (a[0] = s.getValueAtTime(s.keyframes[0].t / r, 0)), (a[1] = o.getValueAtTime(o.keyframes[0].t / r, 0))) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? ((i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0)), (i[1] = o.getValueAtTime(o.keyframes[o.keyframes.length - 1].t / r, 0)), (a[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - 0.01) / r, 0)), (a[1] = o.getValueAtTime((o.keyframes[o.keyframes.length - 1].t - 0.01) / r, 0))) : ((i = [s.pv, o.pv]), (a[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - 0.01) / r, s.offsetTime)), (a[1] = o.getValueAtTime((o._caching.lastFrame + o.offsetTime - 0.01) / r, o.offsetTime)));
                            } else i = a = e;
                            this.v.rotate(-Math.atan2(i[1] - a[1], i[0] - a[0]));
                        }
                        this.data.p && this.data.p.s ? (this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0)) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                }
            }
            function i() {
                if (((this.appliedTransformations = 0), this.pre.reset(), this.a.effectsSequence.length)) return;
                this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), (this.appliedTransformations = 1);
                if (!this.s.effectsSequence.length) {
                    this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), (this.appliedTransformations = 2);
                    if (this.sk) {
                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
                    }
                    this.r ? !this.r.effectsSequence.length && (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4)) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), (this.appliedTransformations = 4));
                }
            }
            function a() {}
            function s(e) {
                this._addDynamicProperty(e), this.elem.addDynamicProperty(e), (this._isDirty = !0);
            }
            function o(e, n, r) {
                if (
                    ((this.elem = e),
                    (this.frameId = -1),
                    (this.propType = 'transform'),
                    (this.data = n),
                    (this.v = new Matrix()),
                    (this.pre = new Matrix()),
                    (this.appliedTransformations = 0),
                    this.initDynamicPropertyContainer(r || e),
                    n.p && n.p.s
                        ? ((this.px = PropertyFactory.getProp(e, n.p.x, 0, 0, this)), (this.py = PropertyFactory.getProp(e, n.p.y, 0, 0, this)), n.p.z && (this.pz = PropertyFactory.getProp(e, n.p.z, 0, 0, this)))
                        : (this.p = PropertyFactory.getProp(
                              e,
                              n.p || {
                                  k: [0, 0, 0]
                              },
                              1,
                              0,
                              this
                          )),
                    n.rx)
                ) {
                    if (((this.rx = PropertyFactory.getProp(e, n.rx, 0, degToRads, this)), (this.ry = PropertyFactory.getProp(e, n.ry, 0, degToRads, this)), (this.rz = PropertyFactory.getProp(e, n.rz, 0, degToRads, this)), n.or.k[0].ti)) {
                        var i,
                            a = n.or.k.length;
                        for (i = 0; i < a; i += 1) (n.or.k[i].to = null), (n.or.k[i].ti = null);
                    }
                    (this.or = PropertyFactory.getProp(e, n.or, 1, degToRads, this)), (this.or.sh = !0);
                } else this.r = PropertyFactory.getProp(e, n.r || { k: 0 }, 0, degToRads, this);
                n.sk && ((this.sk = PropertyFactory.getProp(e, n.sk, 0, degToRads, this)), (this.sa = PropertyFactory.getProp(e, n.sa, 0, degToRads, this))),
                    (this.a = PropertyFactory.getProp(
                        e,
                        n.a || {
                            k: [0, 0, 0]
                        },
                        1,
                        0,
                        this
                    )),
                    (this.s = PropertyFactory.getProp(
                        e,
                        n.s || {
                            k: [100, 100, 100]
                        },
                        1,
                        0.01,
                        this
                    )),
                    n.o
                        ? (this.o = PropertyFactory.getProp(e, n.o, 0, 0.01, e))
                        : (this.o = {
                              _mdf: !1,
                              v: 1
                          }),
                    (this._isDirty = !0),
                    !this.dynamicProperties.length && this.getValue(!0);
            }
            return (
                (o.prototype = {
                    applyToMatrix: n,
                    getValue: r,
                    precalculateMatrix: i,
                    autoOrient: a
                }),
                extendPrototype([DynamicPropertyContainer], o),
                (o.prototype.addDynamicProperty = s),
                (o.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                    getTransformProperty: function e(e, n, r) {
                        return new o(e, n, r);
                    }
                }
            );
        })();
        function RepeaterModifier() {}
        function RoundCornersModifier() {}
        function floatEqual(e, n) {
            return 100000 * Math.abs(e - n) <= Math.min(Math.abs(e), Math.abs(n));
        }
        function floatZero(e) {
            return 0.00001 >= Math.abs(e);
        }
        function lerp(e, n, r) {
            return e * (1 - r) + n * r;
        }
        function lerpPoint(e, n, r) {
            return [lerp(e[0], n[0], r), lerp(e[1], n[1], r)];
        }
        function quadRoots(e, n, r) {
            if (0 === e) return [];
            var i = n * n - 4 * e * r;
            if (i < 0) return [];
            var a = -n / (2 * e);
            if (0 === i) return [a];
            var s = Math.sqrt(i) / (2 * e);
            return [a - s, a + s];
        }
        function polynomialCoefficients(e, n, r, i) {
            return [-e + 3 * n - 3 * r + i, 3 * e - 6 * n + 3 * r, -3 * e + 3 * n, e];
        }
        function singlePoint(e) {
            return new PolynomialBezier(e, e, e, e, !1);
        }
        function PolynomialBezier(e, n, r, i, a) {
            a && pointEqual(e, n) && (n = lerpPoint(e, i, 1 / 3)), a && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
            var s = polynomialCoefficients(e[0], n[0], r[0], i[0]),
                o = polynomialCoefficients(e[1], n[1], r[1], i[1]);
            (this.a = [s[0], o[0]]), (this.b = [s[1], o[1]]), (this.c = [s[2], o[2]]), (this.d = [s[3], o[3]]), (this.points = [e, n, r, i]);
        }
        function extrema(e, n) {
            var r = e.points[0][n],
                i = e.points[e.points.length - 1][n];
            if (r > i) {
                var a = i;
                (i = r), (r = a);
            }
            for (var s = quadRoots(3 * e.a[n], 2 * e.b[n], e.c[n]), o = 0; o < s.length; o += 1)
                if (s[o] > 0 && s[o] < 1) {
                    var l = e.point(s[o])[n];
                    l < r ? (r = l) : l > i && (i = l);
                }
            return {
                min: r,
                max: i
            };
        }
        function intersectData(e, n, r) {
            var i = e.boundingBox();
            return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: e,
                t: (n + r) / 2,
                t1: n,
                t2: r
            };
        }
        function splitData(e) {
            var n = e.bez.split(0.5);
            return [intersectData(n[0], e.t1, e.t), intersectData(n[1], e.t, e.t2)];
        }
        function boxIntersect(e, n) {
            return 2 * Math.abs(e.cx - n.cx) < e.width + n.width && 2 * Math.abs(e.cy - n.cy) < e.height + n.height;
        }
        function intersectsImpl(e, n, r, i, a, s) {
            if (boxIntersect(e, n)) {
                if (r >= s || (e.width <= i && e.height <= i && n.width <= i && n.height <= i)) {
                    a.push([e.t, n.t]);
                    return;
                }
                var o = splitData(e),
                    l = splitData(n);
                intersectsImpl(o[0], l[0], r + 1, i, a, s), intersectsImpl(o[0], l[1], r + 1, i, a, s), intersectsImpl(o[1], l[0], r + 1, i, a, s), intersectsImpl(o[1], l[1], r + 1, i, a, s);
            }
        }
        function crossProduct(e, n) {
            return [e[1] * n[2] - e[2] * n[1], e[2] * n[0] - e[0] * n[2], e[0] * n[1] - e[1] * n[0]];
        }
        function lineIntersection(e, n, r, i) {
            var a = [e[0], e[1], 1],
                s = [n[0], n[1], 1],
                o = [r[0], r[1], 1],
                l = [i[0], i[1], 1],
                u = crossProduct(crossProduct(a, s), crossProduct(o, l));
            return floatZero(u[2]) ? null : [u[0] / u[2], u[1] / u[2]];
        }
        function polarOffset(e, n, r) {
            return [e[0] + Math.cos(n) * r, e[1] - Math.sin(n) * r];
        }
        function pointDistance(e, n) {
            return Math.hypot(e[0] - n[0], e[1] - n[1]);
        }
        function pointEqual(e, n) {
            return floatEqual(e[0], n[0]) && floatEqual(e[1], n[1]);
        }
        function ZigZagModifier() {}
        function setPoint(e, n, r, i, a, s, o) {
            var l = r - Math.PI / 2,
                u = r + Math.PI / 2,
                c = n[0] + Math.cos(r) * i * a,
                d = n[1] - Math.sin(r) * i * a;
            e.setTripleAt(c, d, c + Math.cos(l) * s, d - Math.sin(l) * s, c + Math.cos(u) * o, d - Math.sin(u) * o, e.length());
        }
        function getPerpendicularVector(e, n) {
            var r = [n[0] - e[0], n[1] - e[1]],
                i = -(0.5 * Math.PI);
            return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
        }
        function getProjectingAngle(e, n) {
            var r = 0 === n ? e.length() - 1 : n - 1,
                i = (n + 1) % e.length(),
                a = getPerpendicularVector(e.v[r], e.v[i]);
            return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
        }
        function zigZagCorner(e, n, r, i, a, s, o) {
            var l = getProjectingAngle(n, r),
                u = n.v[r % n._length],
                c = n.v[0 === r ? n._length - 1 : r - 1],
                d = n.v[(r + 1) % n._length],
                f = 2 === s ? Math.sqrt(Math.pow(u[0] - c[0], 2) + Math.pow(u[1] - c[1], 2)) : 0,
                _ = 2 === s ? Math.sqrt(Math.pow(u[0] - d[0], 2) + Math.pow(u[1] - d[1], 2)) : 0;
            setPoint(e, n.v[r % n._length], l, o, i, _ / ((a + 1) * 2), f / ((a + 1) * 2), s);
        }
        function zigZagSegment(e, n, r, i, a, s) {
            for (var o = 0; o < i; o += 1) {
                var l = (o + 1) / (i + 1),
                    u = 2 === a ? Math.sqrt(Math.pow(n.points[3][0] - n.points[0][0], 2) + Math.pow(n.points[3][1] - n.points[0][1], 2)) : 0,
                    c = n.normalAngle(l);
                setPoint(e, n.point(l), c, s, r, u / ((i + 1) * 2), u / ((i + 1) * 2), a), (s = -s);
            }
            return s;
        }
        function linearOffset(e, n, r) {
            var i = Math.atan2(n[0] - e[0], n[1] - e[1]);
            return [polarOffset(e, i, r), polarOffset(n, i, r)];
        }
        function offsetSegment(e, n) {
            (r = (u = linearOffset(e.points[0], e.points[1], n))[0]), (i = u[1]), (a = (u = linearOffset(e.points[1], e.points[2], n))[0]), (s = u[1]), (o = (u = linearOffset(e.points[2], e.points[3], n))[0]), (l = u[1]);
            var r,
                i,
                a,
                s,
                o,
                l,
                u,
                c = lineIntersection(r, i, a, s);
            null === c && (c = i);
            var d = lineIntersection(o, l, a, s);
            return null === d && (d = o), new PolynomialBezier(r, c, d, l);
        }
        function joinLines(e, n, r, i, a) {
            var s = n.points[3],
                o = r.points[0];
            if (3 === i || pointEqual(s, o)) return s;
            if (2 === i) {
                var l = -n.tangentAngle(1),
                    u = -r.tangentAngle(0) + Math.PI,
                    c = lineIntersection(s, polarOffset(s, l + Math.PI / 2, 100), o, polarOffset(o, l + Math.PI / 2, 100)),
                    d = c ? pointDistance(c, s) : pointDistance(s, o) / 2,
                    f = polarOffset(s, l, 2 * d * roundCorner);
                return e.setXYAt(f[0], f[1], 'o', e.length() - 1), (f = polarOffset(o, u, 2 * d * roundCorner)), e.setTripleAt(o[0], o[1], o[0], o[1], f[0], f[1], e.length()), o;
            }
            var _ = pointEqual(s, n.points[2]) ? n.points[0] : n.points[2],
                h = pointEqual(o, r.points[1]) ? r.points[3] : r.points[1],
                p = lineIntersection(_, s, o, h);
            return p && pointDistance(p, s) < a ? (e.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], e.length()), p) : s;
        }
        function getIntersection(e, n) {
            var r = e.intersections(n);
            return (r.length && floatEqual(r[0][0], 1) && r.shift(), r.length) ? r[0] : null;
        }
        function pruneSegmentIntersection(e, n) {
            var r = e.slice(),
                i = n.slice(),
                a = getIntersection(e[e.length - 1], n[0]);
            return (a && ((r[e.length - 1] = e[e.length - 1].split(a[0])[0]), (i[0] = n[0].split(a[1])[1])), e.length > 1 && n.length > 1 && (a = getIntersection(e[0], n[n.length - 1]))) ? [[e[0].split(a[0])[0]], [n[n.length - 1].split(a[1])[1]]] : [r, i];
        }
        function pruneIntersections(e) {
            for (var n, r = 1; r < e.length; r += 1) (n = pruneSegmentIntersection(e[r - 1], e[r])), (e[r - 1] = n[0]), (e[r] = n[1]);
            return e.length > 1 && ((n = pruneSegmentIntersection(e[e.length - 1], e[0])), (e[e.length - 1] = n[0]), (e[0] = n[1])), e;
        }
        function offsetSegmentSplit(e, n) {
            var r,
                i,
                a,
                s,
                o = e.inflectionPoints();
            if (0 === o.length) return [offsetSegment(e, n)];
            if (1 === o.length || floatEqual(o[1], 1)) return (r = (a = e.split(o[0]))[0]), (i = a[1]), [offsetSegment(r, n), offsetSegment(i, n)];
            r = (a = e.split(o[0]))[0];
            var l = (o[1] - o[0]) / (1 - o[0]);
            return (s = (a = a[1].split(l))[0]), (i = a[1]), [offsetSegment(r, n), offsetSegment(s, n), offsetSegment(i, n)];
        }
        function OffsetPathModifier() {}
        function getFontProperties(e) {
            for (var n = e.fStyle ? e.fStyle.split(' ') : [], r = 'normal', i = 'normal', a = n.length, s = 0; s < a; s += 1)
                switch (n[s].toLowerCase()) {
                    case 'italic':
                        i = 'italic';
                        break;
                    case 'bold':
                        r = '700';
                        break;
                    case 'black':
                        r = '900';
                        break;
                    case 'medium':
                        r = '500';
                        break;
                    case 'regular':
                    case 'normal':
                        r = '400';
                        break;
                    case 'light':
                    case 'thin':
                        r = '200';
                }
            return {
                style: i,
                weight: e.fWeight || r
            };
        }
        extendPrototype([ShapeModifier], RepeaterModifier),
            (RepeaterModifier.prototype.initModifierProperties = function (e, n) {
                (this.getValue = this.processKeys), (this.c = PropertyFactory.getProp(e, n.c, 0, null, this)), (this.o = PropertyFactory.getProp(e, n.o, 0, null, this)), (this.tr = TransformPropertyFactory.getTransformProperty(e, n.tr, this)), (this.so = PropertyFactory.getProp(e, n.tr.so, 0, 0.01, this)), (this.eo = PropertyFactory.getProp(e, n.tr.eo, 0, 0.01, this)), (this.data = n), !this.dynamicProperties.length && this.getValue(!0), (this._isAnimated = !!this.dynamicProperties.length), (this.pMatrix = new Matrix()), (this.rMatrix = new Matrix()), (this.sMatrix = new Matrix()), (this.tMatrix = new Matrix()), (this.matrix = new Matrix());
            }),
            (RepeaterModifier.prototype.applyTransforms = function (e, n, r, i, a, s) {
                var o = s ? -1 : 1,
                    l = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
                    u = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
                e.translate(i.p.v[0] * o * a, i.p.v[1] * o * a, i.p.v[2]), n.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), n.rotate(-i.r.v * o * a), n.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(s ? 1 / l : l, s ? 1 / u : u), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
            }),
            (RepeaterModifier.prototype.init = function (e, n, r, i) {
                for (this.elem = e, this.arr = n, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, n[r]); r > 0; ) (r -= 1), this._elements.unshift(n[r]);
                this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
            }),
            (RepeaterModifier.prototype.resetElements = function (e) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) (e[n]._processed = !1), 'gr' === e[n].ty && this.resetElements(e[n].it);
            }),
            (RepeaterModifier.prototype.cloneElements = function (e) {
                var n = JSON.parse(JSON.stringify(e));
                return this.resetElements(n), n;
            }),
            (RepeaterModifier.prototype.changeGroupRender = function (e, n) {
                var r,
                    i = e.length;
                for (r = 0; r < i; r += 1) (e[r]._render = n), 'gr' === e[r].ty && this.changeGroupRender(e[r].it, n);
            }),
            (RepeaterModifier.prototype.processShapes = function (e) {
                var n = !1;
                if (this._mdf || e) {
                    var r,
                        i,
                        a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d = Math.ceil(this.c.v);
                    if (this._groups.length < d) {
                        for (; this._groups.length < d; ) {
                            var f = {
                                it: this.cloneElements(this._elements),
                                ty: 'gr'
                            };
                            f.it.push({
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
                                this.arr.splice(0, 0, f),
                                this._groups.splice(0, 0, f),
                                (this._currentCopies += 1);
                        }
                        this.elem.reloadShapes(), (n = !0);
                    }
                    for (a = 0, o = 0; a <= this._groups.length - 1; a += 1) {
                        if (((l = o < d), (this._groups[a]._render = l), this.changeGroupRender(this._groups[a].it, l), !l)) {
                            var _ = this.elemsData[a].it,
                                h = _[_.length - 1];
                            0 !== h.transform.op.v ? ((h.transform.op._mdf = !0), (h.transform.op.v = 0)) : (h.transform.op._mdf = !1);
                        }
                        o += 1;
                    }
                    this._currentCopies = d;
                    var p = this.o.v,
                        m = p % 1,
                        g = p > 0 ? Math.floor(p) : Math.ceil(p),
                        E = this.pMatrix.props,
                        v = this.rMatrix.props,
                        I = this.sMatrix.props;
                    this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                    var T = 0;
                    if (p > 0) {
                        for (; T < g; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (T += 1);
                        m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, m, !1), (T += m));
                    } else if (p < 0) {
                        for (; T > g; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), (T -= 1);
                        m && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -m, !0), (T -= m));
                    }
                    for (a = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, o = this._currentCopies; o; ) {
                        if (((c = (i = (r = this.elemsData[a].it)[r.length - 1].transform.mProps.v.props).length), (r[r.length - 1].transform.mProps._mdf = !0), (r[r.length - 1].transform.op._mdf = !0), (r[r.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (a / (this._currentCopies - 1))), 0 !== T)) {
                            for (((0 !== a && 1 === s) || (a !== this._currentCopies - 1 && -1 === s)) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(I[0], I[1], I[2], I[3], I[4], I[5], I[6], I[7], I[8], I[9], I[10], I[11], I[12], I[13], I[14], I[15]), this.matrix.transform(E[0], E[1], E[2], E[3], E[4], E[5], E[6], E[7], E[8], E[9], E[10], E[11], E[12], E[13], E[14], E[15]), u = 0; u < c; u += 1) i[u] = this.matrix.props[u];
                            this.matrix.reset();
                        } else for (this.matrix.reset(), u = 0; u < c; u += 1) i[u] = this.matrix.props[u];
                        (T += 1), (o -= 1), (a += s);
                    }
                } else for (o = this._currentCopies, a = 0, s = 1; o; ) (i = (r = this.elemsData[a].it)[r.length - 1].transform.mProps.v.props), (r[r.length - 1].transform.mProps._mdf = !1), (r[r.length - 1].transform.op._mdf = !1), (o -= 1), (a += s);
                return n;
            }),
            (RepeaterModifier.prototype.addShape = function () {}),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            (RoundCornersModifier.prototype.initModifierProperties = function (e, n) {
                (this.getValue = this.processKeys), (this.rd = PropertyFactory.getProp(e, n.r, 0, null, this)), (this._isAnimated = !!this.rd.effectsSequence.length);
            }),
            (RoundCornersModifier.prototype.processPath = function (e, n) {
                var r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    f,
                    _,
                    h,
                    p,
                    m = shapePool.newElement();
                m.c = e.c;
                var g = e._length,
                    E = 0;
                for (r = 0; r < g; r += 1) (i = e.v[r]), (s = e.o[r]), (a = e.i[r]), i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? ((0 !== r && r !== g - 1) || e.c ? ((o = 0 === r ? e.v[g - 1] : e.v[r - 1]), (u = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, n) / l : 0), (c = h = i[0] + (o[0] - i[0]) * u), (d = p = i[1] - (i[1] - o[1]) * u), (f = c - (c - i[0]) * roundCorner), (_ = d - (d - i[1]) * roundCorner), m.setTripleAt(c, d, f, _, h, p, E), (E += 1), (o = r === g - 1 ? e.v[0] : e.v[r + 1]), (u = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, n) / l : 0), (c = f = i[0] + (o[0] - i[0]) * u), (d = _ = i[1] + (o[1] - i[1]) * u), (h = c - (c - i[0]) * roundCorner), (p = d - (d - i[1]) * roundCorner), m.setTripleAt(c, d, f, _, h, p, E)) : m.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], E)) : m.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], E), (E += 1);
                return m;
            }),
            (RoundCornersModifier.prototype.processShapes = function (e) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l = this.shapes.length,
                    u = this.rd.v;
                if (0 !== u)
                    for (r = 0; r < l; r += 1) {
                        if (((o = (s = this.shapes[r]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), s.shape._mdf = !0, n = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) o.addShape(this.processPath(n[i], u));
                        s.shape.paths = s.localShapeCollection;
                    }
                !this.dynamicProperties.length && (this._mdf = !1);
            }),
            (PolynomialBezier.prototype.point = function (e) {
                return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]];
            }),
            (PolynomialBezier.prototype.derivative = function (e) {
                return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]];
            }),
            (PolynomialBezier.prototype.tangentAngle = function (e) {
                var n = this.derivative(e);
                return Math.atan2(n[1], n[0]);
            }),
            (PolynomialBezier.prototype.normalAngle = function (e) {
                var n = this.derivative(e);
                return Math.atan2(n[0], n[1]);
            }),
            (PolynomialBezier.prototype.inflectionPoints = function () {
                var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
                if (floatZero(e)) return [];
                var n = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / e,
                    r = n * n - ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / e;
                if (r < 0) return [];
                var i = Math.sqrt(r);
                if (floatZero(i)) return i > 0 && i < 1 ? [n] : [];
                return [n - i, n + i].filter(function (e) {
                    return e > 0 && e < 1;
                });
            }),
            (PolynomialBezier.prototype.split = function (e) {
                if (e <= 0) return [singlePoint(this.points[0]), this];
                if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
                var n = lerpPoint(this.points[0], this.points[1], e),
                    r = lerpPoint(this.points[1], this.points[2], e),
                    i = lerpPoint(this.points[2], this.points[3], e),
                    a = lerpPoint(n, r, e),
                    s = lerpPoint(r, i, e),
                    o = lerpPoint(a, s, e);
                return [new PolynomialBezier(this.points[0], n, a, o, !0), new PolynomialBezier(o, s, i, this.points[3], !0)];
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
            (PolynomialBezier.prototype.intersections = function (e, n, r) {
                void 0 === n && (n = 2), void 0 === r && (r = 7);
                var i = [];
                return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, n, i, r), i;
            }),
            (PolynomialBezier.shapeSegment = function (e, n) {
                var r = (n + 1) % e.length();
                return new PolynomialBezier(e.v[n], e.o[n], e.i[r], e.v[r], !0);
            }),
            (PolynomialBezier.shapeSegmentInverted = function (e, n) {
                var r = (n + 1) % e.length();
                return new PolynomialBezier(e.v[r], e.i[r], e.o[n], e.v[n], !0);
            }),
            extendPrototype([ShapeModifier], ZigZagModifier),
            (ZigZagModifier.prototype.initModifierProperties = function (e, n) {
                (this.getValue = this.processKeys), (this.amplitude = PropertyFactory.getProp(e, n.s, 0, null, this)), (this.frequency = PropertyFactory.getProp(e, n.r, 0, null, this)), (this.pointsType = PropertyFactory.getProp(e, n.pt, 0, null, this)), (this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length);
            }),
            (ZigZagModifier.prototype.processPath = function (e, n, r, i) {
                var a = e._length,
                    s = shapePool.newElement();
                if (((s.c = e.c), !e.c && (a -= 1), 0 === a)) return s;
                var o = -1,
                    l = PolynomialBezier.shapeSegment(e, 0);
                zigZagCorner(s, e, 0, n, r, i, o);
                for (var u = 0; u < a; u += 1) (o = zigZagSegment(s, l, n, r, i, -o)), (l = u !== a - 1 || e.c ? PolynomialBezier.shapeSegment(e, (u + 1) % a) : null), zigZagCorner(s, e, u + 1, n, r, i, o);
                return s;
            }),
            (ZigZagModifier.prototype.processShapes = function (e) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l = this.shapes.length,
                    u = this.amplitude.v,
                    c = Math.max(0, Math.round(this.frequency.v)),
                    d = this.pointsType.v;
                if (0 !== u)
                    for (r = 0; r < l; r += 1) {
                        if (((o = (s = this.shapes[r]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), s.shape._mdf = !0, n = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) o.addShape(this.processPath(n[i], u, c, d));
                        s.shape.paths = s.localShapeCollection;
                    }
                !this.dynamicProperties.length && (this._mdf = !1);
            }),
            extendPrototype([ShapeModifier], OffsetPathModifier),
            (OffsetPathModifier.prototype.initModifierProperties = function (e, n) {
                (this.getValue = this.processKeys), (this.amount = PropertyFactory.getProp(e, n.a, 0, null, this)), (this.miterLimit = PropertyFactory.getProp(e, n.ml, 0, null, this)), (this.lineJoin = n.lj), (this._isAnimated = 0 !== this.amount.effectsSequence.length);
            }),
            (OffsetPathModifier.prototype.processPath = function (e, n, r, i) {
                var a,
                    s,
                    o,
                    l = shapePool.newElement();
                l.c = e.c;
                var u = e.length();
                !e.c && (u -= 1);
                var c = [];
                for (a = 0; a < u; a += 1) (o = PolynomialBezier.shapeSegment(e, a)), c.push(offsetSegmentSplit(o, n));
                if (!e.c) for (a = u - 1; a >= 0; a -= 1) (o = PolynomialBezier.shapeSegmentInverted(e, a)), c.push(offsetSegmentSplit(o, n));
                c = pruneIntersections(c);
                var d = null,
                    f = null;
                for (a = 0; a < c.length; a += 1) {
                    var _ = c[a];
                    for (f && (d = joinLines(l, f, _[0], r, i)), f = _[_.length - 1], s = 0; s < _.length; s += 1) (o = _[s]), d && pointEqual(o.points[0], d) ? l.setXYAt(o.points[1][0], o.points[1][1], 'o', l.length() - 1) : l.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], l.length()), l.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], l.length()), (d = o.points[3]);
                }
                return c.length && joinLines(l, f, c[0][0], r, i), l;
            }),
            (OffsetPathModifier.prototype.processShapes = function (e) {
                var n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l = this.shapes.length,
                    u = this.amount.v,
                    c = this.miterLimit.v,
                    d = this.lineJoin;
                if (0 !== u)
                    for (r = 0; r < l; r += 1) {
                        if (((o = (s = this.shapes[r]).localShapeCollection), !(!s.shape._mdf && !this._mdf && !e))) for (o.releaseShapes(), s.shape._mdf = !0, n = s.shape.paths.shapes, a = s.shape.paths._length, i = 0; i < a; i += 1) o.addShape(this.processPath(n[i], u, d, c));
                        s.shape.paths = s.localShapeCollection;
                    }
                !this.dynamicProperties.length && (this._mdf = !1);
            });
        var FontManager = (function () {
            var e = 5000,
                n = {
                    w: 0,
                    size: 0,
                    shapes: [],
                    data: { shapes: [] }
                },
                r = [];
            r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var i = 127988,
                a = 917631,
                s = 917601,
                o = 917626,
                l = 65039,
                u = 8205,
                c = 127462,
                d = 127487,
                f = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'];
            function _(e) {
                var n,
                    r = e.split(','),
                    i = r.length,
                    a = [];
                for (n = 0; n < i; n += 1) 'sans-serif' !== r[n] && 'monospace' !== r[n] && a.push(r[n]);
                return a.join(',');
            }
            function h(e, n) {
                var r = createTag('span');
                r.setAttribute('aria-hidden', !0), (r.style.fontFamily = n);
                var i = createTag('span');
                (i.innerText = 'giItT1WQy@!-/#'), (r.style.position = 'absolute'), (r.style.left = '-10000px'), (r.style.top = '-10000px'), (r.style.fontSize = '300px'), (r.style.fontVariant = 'normal'), (r.style.fontStyle = 'normal'), (r.style.fontWeight = 'normal'), (r.style.letterSpacing = '0'), r.appendChild(i), document.body.appendChild(r);
                var a = i.offsetWidth;
                return (
                    (i.style.fontFamily = _(e) + ', ' + n),
                    {
                        node: i,
                        w: a,
                        parent: r
                    }
                );
            }
            function p() {
                var n,
                    r,
                    i,
                    a = this.fonts.length,
                    s = a;
                for (n = 0; n < a; n += 1) this.fonts[n].loaded ? (s -= 1) : 'n' === this.fonts[n].fOrigin || 0 === this.fonts[n].origin ? (this.fonts[n].loaded = !0) : ((r = this.fonts[n].monoCase.node), (i = this.fonts[n].monoCase.w), r.offsetWidth !== i ? ((s -= 1), (this.fonts[n].loaded = !0)) : ((r = this.fonts[n].sansCase.node), (i = this.fonts[n].sansCase.w), r.offsetWidth !== i && ((s -= 1), (this.fonts[n].loaded = !0))), this.fonts[n].loaded && (this.fonts[n].sansCase.parent.parentNode.removeChild(this.fonts[n].sansCase.parent), this.fonts[n].monoCase.parent.parentNode.removeChild(this.fonts[n].monoCase.parent)));
                0 !== s && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function m(e, n) {
                var r,
                    i = document.body && n ? 'svg' : 'canvas',
                    a = getFontProperties(e);
                if ('svg' === i) {
                    var s = createNS('text');
                    (s.style.fontSize = '100px'), s.setAttribute('font-family', e.fFamily), s.setAttribute('font-style', a.style), s.setAttribute('font-weight', a.weight), (s.textContent = '1'), e.fClass ? ((s.style.fontFamily = 'inherit'), s.setAttribute('class', e.fClass)) : (s.style.fontFamily = e.fFamily), n.appendChild(s), (r = s);
                } else {
                    var o = new OffscreenCanvas(500, 500).getContext('2d');
                    (o.font = a.style + ' ' + a.weight + ' 100px ' + e.fFamily), (r = o);
                }
                return {
                    measureText: function e(e) {
                        return 'svg' === i ? ((r.textContent = e), r.getComputedTextLength()) : r.measureText(e).width;
                    }
                };
            }
            function g(e, n) {
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
                            (e.helper = m(e)), (e.cache = {});
                        }),
                        (this.fonts = e.list);
                    return;
                }
                var r = e.list,
                    i = r.length,
                    a = i;
                for (s = 0; s < i; s += 1) {
                    var s,
                        o,
                        l,
                        u = !0;
                    if (((r[s].loaded = !1), (r[s].monoCase = h(r[s].fFamily, 'monospace')), (r[s].sansCase = h(r[s].fFamily, 'sans-serif')), r[s].fPath)) {
                        if ('p' === r[s].fOrigin || 3 === r[s].origin) {
                            if (((o = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[s].fFamily + '"], style[f-origin="3"][f-family="' + r[s].fFamily + '"]')).length > 0 && (u = !1), u)) {
                                var c = createTag('style');
                                c.setAttribute('f-forigin', r[s].fOrigin), c.setAttribute('f-origin', r[s].origin), c.setAttribute('f-family', r[s].fFamily), (c.type = 'text/css'), (c.innerText = '@font-face {font-family: ' + r[s].fFamily + "; font-style: normal; src: url('" + r[s].fPath + "');}"), n.appendChild(c);
                            }
                        } else if ('g' === r[s].fOrigin || 1 === r[s].origin) {
                            for (l = 0, o = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'); l < o.length; l += 1) -1 !== o[l].href.indexOf(r[s].fPath) && (u = !1);
                            if (u) {
                                var d = createTag('link');
                                d.setAttribute('f-forigin', r[s].fOrigin), d.setAttribute('f-origin', r[s].origin), (d.type = 'text/css'), (d.rel = 'stylesheet'), (d.href = r[s].fPath), document.body.appendChild(d);
                            }
                        } else if ('t' === r[s].fOrigin || 2 === r[s].origin) {
                            for (l = 0, o = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'); l < o.length; l += 1) r[s].fPath === o[l].src && (u = !1);
                            if (u) {
                                var f = createTag('link');
                                f.setAttribute('f-forigin', r[s].fOrigin), f.setAttribute('f-origin', r[s].origin), f.setAttribute('rel', 'stylesheet'), f.setAttribute('href', r[s].fPath), n.appendChild(f);
                            }
                        }
                    } else (r[s].loaded = !0), (a -= 1);
                    (r[s].helper = m(r[s], n)), (r[s].cache = {}), this.fonts.push(r[s]);
                }
                0 === a ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function E(e) {
                if (!!e) {
                    !this.chars && (this.chars = []);
                    var n,
                        r,
                        i,
                        a = e.length,
                        s = this.chars.length;
                    for (n = 0; n < a; n += 1) {
                        for (r = 0, i = !1; r < s; ) this.chars[r].style === e[n].style && this.chars[r].fFamily === e[n].fFamily && this.chars[r].ch === e[n].ch && (i = !0), (r += 1);
                        !i && (this.chars.push(e[n]), (s += 1));
                    }
                }
            }
            function v(e, r, i) {
                for (var a = 0, s = this.chars.length; a < s; ) {
                    if (this.chars[a].ch === e && this.chars[a].style === r && this.chars[a].fFamily === i) return this.chars[a];
                    a += 1;
                }
                return (('string' == typeof e && 13 !== e.charCodeAt(0)) || !e) && console && console.warn && !this._warned && ((this._warned = !0), console.warn('Missing character from exported characters list: ', e, r, i)), n;
            }
            function I(e, n, r) {
                var i = this.getFontByName(n),
                    a = e;
                if (!i.cache[a]) {
                    var s = i.helper;
                    if (' ' === e) {
                        var o = s.measureText('|' + e + '|'),
                            l = s.measureText('||');
                        i.cache[a] = (o - l) / 100;
                    } else i.cache[a] = s.measureText(e) / 100;
                }
                return i.cache[a] * r;
            }
            function T(e) {
                for (var n = 0, r = this.fonts.length; n < r; ) {
                    if (this.fonts[n].fName === e) return this.fonts[n];
                    n += 1;
                }
                return this.fonts[0];
            }
            function b(e) {
                var n = 0,
                    r = e.charCodeAt(0);
                if (r >= 55296 && r <= 56319) {
                    var i = e.charCodeAt(1);
                    i >= 56320 && i <= 57343 && (n = (r - 55296) * 1024 + i - 56320 + 65536);
                }
                return n;
            }
            function y(e, n) {
                var r = e.toString(16) + n.toString(16);
                return -1 !== f.indexOf(r);
            }
            function S(e) {
                return e === u;
            }
            function A(e) {
                return e === l;
            }
            function N(e) {
                var n = b(e);
                return (!!(n >= c) && !!(n <= d)) || !1;
            }
            function C(e) {
                return N(e.substr(0, 2)) && N(e.substr(2, 2));
            }
            function R(e) {
                return -1 !== r.indexOf(e);
            }
            function O(e, n) {
                var r = b(e.substr(n, 2));
                if (r !== i) return !1;
                var l = 0;
                for (n += 2; l < 5; ) {
                    if ((r = b(e.substr(n, 2))) < s || r > o) return !1;
                    (l += 1), (n += 2);
                }
                return b(e.substr(n, 2)) === a;
            }
            function D() {
                this.isLoaded = !0;
            }
            var L = function () {
                (this.fonts = []), (this.chars = null), (this.typekitLoaded = 0), (this.isLoaded = !1), (this._warned = !1), (this.initTime = Date.now()), (this.setIsLoadedBinded = this.setIsLoaded.bind(this)), (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
            };
            (L.isModifier = y), (L.isZeroWidthJoiner = S), (L.isFlagEmoji = C), (L.isRegionalCode = N), (L.isCombinedCharacter = R), (L.isRegionalFlag = O), (L.isVariationSelector = A), (L.BLACK_FLAG_CODE_POINT = i);
            var x = {
                addChars: E,
                addFonts: g,
                getCharData: v,
                getFontByName: T,
                measureText: I,
                checkLoadedFonts: p,
                setIsLoaded: D
            };
            return (L.prototype = x), L;
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
                        n = this.renderableComponents.length;
                    for (e = 0; e < n; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
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
            return function (n) {
                return e[n] || '';
            };
        })();
        function SliderEffect(e, n, r) {
            this.p = PropertyFactory.getProp(n, e.v, 0, 0, r);
        }
        function AngleEffect(e, n, r) {
            this.p = PropertyFactory.getProp(n, e.v, 0, 0, r);
        }
        function ColorEffect(e, n, r) {
            this.p = PropertyFactory.getProp(n, e.v, 1, 0, r);
        }
        function PointEffect(e, n, r) {
            this.p = PropertyFactory.getProp(n, e.v, 1, 0, r);
        }
        function LayerIndexEffect(e, n, r) {
            this.p = PropertyFactory.getProp(n, e.v, 0, 0, r);
        }
        function MaskIndexEffect(e, n, r) {
            this.p = PropertyFactory.getProp(n, e.v, 0, 0, r);
        }
        function CheckboxEffect(e, n, r) {
            this.p = PropertyFactory.getProp(n, e.v, 0, 0, r);
        }
        function NoValueEffect() {
            this.p = {};
        }
        function EffectsManager(e, n) {
            var r,
                i,
                a = e.ef || [];
            this.effectElements = [];
            var s = a.length;
            for (r = 0; r < s; r += 1) (i = new GroupEffect(a[r], n)), this.effectElements.push(i);
        }
        function GroupEffect(e, n) {
            this.init(e, n);
        }
        function BaseElement() {}
        function FrameElement() {}
        function FootageElement(e, n, r) {
            this.initFrame(), this.initRenderable(), (this.assetData = n.getAssetData(e.refId)), (this.footageData = n.imageLoader.getAsset(this.assetData)), this.initBaseData(e, n, r);
        }
        function AudioElement(e, n, r) {
            this.initFrame(), this.initRenderable(), (this.assetData = n.getAssetData(e.refId)), this.initBaseData(e, n, r), (this._isPlaying = !1), (this._canPlay = !1);
            var i = this.globalData.getAssetsPath(this.assetData);
            (this.audio = this.globalData.audioController.createAudio(i)), (this._currentTime = 0), this.globalData.audioController.addAudio(this), (this._volumeMultiplier = 1), (this._volume = 1), (this._previousVolume = null), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, n.frameRate, this) : { _placeholder: !0 }), (this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : { k: [100] }, 1, 0.01, this));
        }
        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect),
            (GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
            (GroupEffect.prototype.init = function (e, n) {
                (this.data = e), (this.effectElements = []), this.initDynamicPropertyContainer(n);
                var r,
                    i,
                    a = this.data.ef.length,
                    s = this.data.ef;
                for (r = 0; r < a; r += 1) {
                    switch (((i = null), s[r].ty)) {
                        case 0:
                            i = new SliderEffect(s[r], n, this);
                            break;
                        case 1:
                            i = new AngleEffect(s[r], n, this);
                            break;
                        case 2:
                            i = new ColorEffect(s[r], n, this);
                            break;
                        case 3:
                            i = new PointEffect(s[r], n, this);
                            break;
                        case 4:
                        case 7:
                            i = new CheckboxEffect(s[r], n, this);
                            break;
                        case 10:
                            i = new LayerIndexEffect(s[r], n, this);
                            break;
                        case 11:
                            i = new MaskIndexEffect(s[r], n, this);
                            break;
                        case 5:
                            i = new EffectsManager(s[r], n, this);
                            break;
                        default:
                            i = new NoValueEffect(s[r], n, this);
                    }
                    i && this.effectElements.push(i);
                }
            }),
            (BaseElement.prototype = {
                checkMasks: function () {
                    if (!this.data.hasMask) return !1;
                    for (var e = 0, n = this.data.masksProperties.length; e < n; ) {
                        if ('n' !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
                        e += 1;
                    }
                    return !1;
                },
                initExpressions: function () {
                    var e = getExpressionInterfaces();
                    if (!!e) {
                        var n = e('layer'),
                            r = e('effects'),
                            i = e('shape'),
                            a = e('text'),
                            s = e('comp');
                        (this.layerInterface = n(this)), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var o = r.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(o), 0 === this.data.ty || this.data.xt ? (this.compInterface = s(this)) : 4 === this.data.ty ? ((this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface)), (this.layerInterface.content = this.layerInterface.shapeInterface)) : 5 === this.data.ty && ((this.layerInterface.textInterface = a(this)), (this.layerInterface.text = this.layerInterface.textInterface));
                    }
                },
                setBlendMode: function () {
                    var e = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style['mix-blend-mode'] = e;
                },
                initBaseData: function (e, n, r) {
                    (this.globalData = n), (this.comp = r), (this.data = e), (this.layerId = createElementID()), !this.data.sr && (this.data.sr = 1), (this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties));
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
                prepareProperties: function (e, n) {
                    var r,
                        i = this.dynamicProperties.length;
                    for (r = 0; r < i; r += 1) (n || (this._isParent && 'transform' === this.dynamicProperties[r].propType)) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
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
                if (!!e) {
                    var n = e('footage');
                    this.layerInterface = n(this);
                }
            }),
            (FootageElement.prototype.getFootageData = function () {
                return this.footageData;
            }),
            (AudioElement.prototype.prepareFrame = function (e) {
                if ((this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder)) this._currentTime = e / this.data.sr;
                else {
                    var n = this.tm.v;
                    this._currentTime = n;
                }
                this._volume = this.lv.v[0];
                var r = this._volume * this._volumeMultiplier;
                this._previousVolume !== r && ((this._previousVolume = r), this.audio.volume(r));
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
                var n,
                    r,
                    i = this.layers.length;
                for (this.completeLayers = !0, n = i - 1; n >= 0; n -= 1) !this.elements[n] && (r = this.layers[n]).ip - r.st <= e - this.layers[n].st && r.op - r.st > e - this.layers[n].st && this.buildItem(n), (this.completeLayers = !!this.elements[n] && this.completeLayers);
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
                    n = this.layers.length;
                for (e = 0; e < n; e += 1) this.buildItem(e);
                this.checkPendingElements();
            }),
            (BaseRenderer.prototype.includeLayers = function (e) {
                this.completeLayers = !1;
                var n,
                    r,
                    i = e.length,
                    a = this.layers.length;
                for (n = 0; n < i; n += 1)
                    for (r = 0; r < a; ) {
                        if (this.layers[r].id === e[n].id) {
                            this.layers[r] = e[n];
                            break;
                        }
                        r += 1;
                    }
            }),
            (BaseRenderer.prototype.setProjectInterface = function (e) {
                this.globalData.projectInterface = e;
            }),
            (BaseRenderer.prototype.initItems = function () {
                !this.globalData.progressiveLoad && this.buildAllItems();
            }),
            (BaseRenderer.prototype.buildElementParenting = function (e, n, r) {
                for (var i = this.elements, a = this.layers, s = 0, o = a.length; s < o; ) a[s].ind == n && (i[s] && !0 !== i[s] ? (r.push(i[s]), i[s].setAsParent(), void 0 !== a[s].parent ? this.buildElementParenting(e, a[s].parent, r) : e.setHierarchy(r)) : (this.buildItem(s), this.addPendingElement(e))), (s += 1);
            }),
            (BaseRenderer.prototype.addPendingElement = function (e) {
                this.pendingElements.push(e);
            }),
            (BaseRenderer.prototype.searchExtraCompositions = function (e) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1)
                    if (e[n].xt) {
                        var i = this.createComp(e[n]);
                        i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
                    }
            }),
            (BaseRenderer.prototype.getElementById = function (e) {
                var n,
                    r = this.elements.length;
                for (n = 0; n < r; n += 1) if (this.elements[n].data.ind === e) return this.elements[n];
                return null;
            }),
            (BaseRenderer.prototype.getElementByPath = function (e) {
                var n = e.shift();
                if ('number' == typeof n) r = this.elements[n];
                else {
                    var r,
                        i,
                        a = this.elements.length;
                    for (i = 0; i < a; i += 1)
                        if (this.elements[i].data.nm === n) {
                            r = this.elements[i];
                            break;
                        }
                }
                return 0 === e.length ? r : r.getElementByPath(e);
            }),
            (BaseRenderer.prototype.setupGlobalData = function (e, n) {
                (this.globalData.fontManager = new FontManager()),
                    (this.globalData.slotManager = slotFactory(e)),
                    this.globalData.fontManager.addChars(e.chars),
                    this.globalData.fontManager.addFonts(e.fonts, n),
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
        function MaskElement(e, n, r) {
            (this.data = e), (this.element = n), (this.globalData = r), (this.storedData = []), (this.masksProperties = this.data.masksProperties || []), (this.maskElement = null);
            var i = this.globalData.defs,
                a = this.masksProperties ? this.masksProperties.length : 0;
            (this.viewData = createSizedArray(a)), (this.solidPath = '');
            var s = this.masksProperties,
                o = 0,
                l = [],
                u = createElementID(),
                c = 'clipPath',
                d = 'clip-path';
            for (f = 0; f < a; f += 1)
                if (((('a' !== s[f].mode && 'n' !== s[f].mode) || s[f].inv || 100 !== s[f].o.k || s[f].o.x) && ((c = 'mask'), (d = 'mask')), ('s' === s[f].mode || 'i' === s[f].mode) && 0 === o ? ((m = createNS('rect')).setAttribute('fill', '#ffffff'), m.setAttribute('width', this.element.comp.data.w || 0), m.setAttribute('height', this.element.comp.data.h || 0), l.push(m)) : (m = null), (_ = createNS('path')), 'n' === s[f].mode))
                    (this.viewData[f] = {
                        op: PropertyFactory.getProp(this.element, s[f].o, 0, 0.01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, s[f], 3),
                        elem: _,
                        lastPath: ''
                    }),
                        i.appendChild(_);
                else {
                    if (
                        ((o += 1),
                        _.setAttribute('fill', 's' === s[f].mode ? '#000000' : '#ffffff'),
                        _.setAttribute('clip-rule', 'nonzero'),
                        0 !== s[f].x.k ? ((c = 'mask'), (d = 'mask'), (v = PropertyFactory.getProp(this.element, s[f].x, 0, null, this.element)), (I = createElementID()), (g = createNS('filter')).setAttribute('id', I), (E = createNS('feMorphology')).setAttribute('operator', 'erode'), E.setAttribute('in', 'SourceGraphic'), E.setAttribute('radius', '0'), g.appendChild(E), i.appendChild(g), _.setAttribute('stroke', 's' === s[f].mode ? '#000000' : '#ffffff')) : ((E = null), (v = null)),
                        (this.storedData[f] = {
                            elem: _,
                            x: v,
                            expan: E,
                            lastPath: '',
                            lastOperator: '',
                            filterId: I,
                            lastRadius: 0
                        }),
                        'i' === s[f].mode)
                    ) {
                        p = l.length;
                        var f,
                            _,
                            h,
                            p,
                            m,
                            g,
                            E,
                            v,
                            I,
                            T = createNS('g');
                        for (h = 0; h < p; h += 1) T.appendChild(l[h]);
                        var b = createNS('mask');
                        b.setAttribute('mask-type', 'alpha'), b.setAttribute('id', u + '_' + o), b.appendChild(_), i.appendChild(b), T.setAttribute('mask', 'url(' + getLocationHref() + '#' + u + '_' + o + ')'), (l.length = 0), l.push(T);
                    } else l.push(_);
                    s[f].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        (this.viewData[f] = {
                            elem: _,
                            lastPath: '',
                            op: PropertyFactory.getProp(this.element, s[f].o, 0, 0.01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, s[f], 3),
                            invRect: m
                        }),
                        !this.viewData[f].prop.k && this.drawPath(s[f], this.viewData[f].prop.v, this.viewData[f]);
                }
            for (f = 0, this.maskElement = createNS(c), a = l.length; f < a; f += 1) this.maskElement.appendChild(l[f]);
            o > 0 && (this.maskElement.setAttribute('id', u), this.element.maskedElement.setAttribute(d, 'url(' + getLocationHref() + '#' + u + ')'), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
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
                        n = this.finalTransform.mat,
                        r = 0,
                        i = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; r < i; ) {
                            if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break;
                            }
                            r += 1;
                        }
                    if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, n.cloneFromProps(e), r = 0; r < i; r += 1) n.multiply(this.hierarchy[r].finalTransform.mProp.v);
                }
                this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
            },
            renderLocalTransform: function () {
                if (this.localTransforms) {
                    var e = 0,
                        n = this.localTransforms.length;
                    if (((this.finalTransform._localMatMdf = this.finalTransform._matMdf), !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)) for (; e < n; ) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && ((this.finalTransform.localOpacity = this.finalTransform.mProp.o.v), (this.finalTransform._opMdf = !0)), (e += 1);
                    if (this.finalTransform._localMatMdf) {
                        var r = this.finalTransform.localMat;
                        for (this.localTransforms[0].matrix.clone(r), e = 1; e < n; e += 1) {
                            var i = this.localTransforms[e].matrix;
                            r.multiply(i);
                        }
                        r.multiply(this.finalTransform.mat);
                    }
                    if (this.finalTransform._opMdf) {
                        var a = this.finalTransform.localOpacity;
                        for (e = 0; e < n; e += 1) a *= 0.01 * this.localTransforms[e].opacity;
                        this.finalTransform.localOpacity = a;
                    }
                }
            },
            searchEffectTransforms: function () {
                if (this.renderableEffectsManager) {
                    var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                    if (e.length) {
                        (this.localTransforms = []), (this.finalTransform.localMat = new Matrix());
                        var n = 0,
                            r = e.length;
                        for (n = 0; n < r; n += 1) this.localTransforms.push(e[n]);
                    }
                }
            },
            globalToLocal: function (e) {
                var n,
                    r,
                    i = [];
                i.push(this.finalTransform);
                for (var a = !0, s = this.comp; a; ) s.finalTransform ? (s.data.hasMask && i.splice(0, 0, s.finalTransform), (s = s.comp)) : (a = !1);
                var o = i.length;
                for (n = 0; n < o; n += 1) (r = i[n].mat.applyToPointArray(0, 0, 0)), (e = [e[0] - r[0], e[1] - r[1], 0]);
                return e;
            },
            mHelper: new Matrix()
        }),
            (MaskElement.prototype.getMaskProperty = function (e) {
                return this.viewData[e].prop;
            }),
            (MaskElement.prototype.renderFrame = function (e) {
                var n,
                    r = this.element.finalTransform.mat,
                    i = this.masksProperties.length;
                for (n = 0; n < i; n += 1)
                    if (((this.viewData[n].prop._mdf || e) && this.drawPath(this.masksProperties[n], this.viewData[n].prop.v, this.viewData[n]), (this.viewData[n].op._mdf || e) && this.viewData[n].elem.setAttribute('fill-opacity', this.viewData[n].op.v), 'n' !== this.masksProperties[n].mode && (this.viewData[n].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[n].invRect.setAttribute('transform', r.getInverseMatrix().to2dCSS()), this.storedData[n].x && (this.storedData[n].x._mdf || e)))) {
                        var a = this.storedData[n].expan;
                        this.storedData[n].x.v < 0 ? ('erode' !== this.storedData[n].lastOperator && ((this.storedData[n].lastOperator = 'erode'), this.storedData[n].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[n].filterId + ')')), a.setAttribute('radius', -this.storedData[n].x.v)) : ('dilate' !== this.storedData[n].lastOperator && ((this.storedData[n].lastOperator = 'dilate'), this.storedData[n].elem.setAttribute('filter', null)), this.storedData[n].elem.setAttribute('stroke-width', 2 * this.storedData[n].x.v));
                    }
            }),
            (MaskElement.prototype.getMaskelement = function () {
                return this.maskElement;
            }),
            (MaskElement.prototype.createLayerSolidPath = function () {
                var e = 'M0,0 ';
                return (e += ' h' + this.globalData.compSize.w + (' v' + this.globalData.compSize.h) + (' h-' + this.globalData.compSize.w) + (' v-' + this.globalData.compSize.h + ' '));
            }),
            (MaskElement.prototype.drawPath = function (e, n, r) {
                var i,
                    a,
                    s = ' M' + n.v[0][0] + ',' + n.v[0][1];
                for (i = 1, a = n._length; i < a; i += 1) s += ' C' + n.o[i - 1][0] + ',' + n.o[i - 1][1] + ' ' + n.i[i][0] + ',' + n.i[i][1] + ' ' + n.v[i][0] + ',' + n.v[i][1];
                if ((n.c && a > 1 && (s += ' C' + n.o[i - 1][0] + ',' + n.o[i - 1][1] + ' ' + n.i[0][0] + ',' + n.i[0][1] + ' ' + n.v[0][0] + ',' + n.v[0][1]), r.lastPath !== s)) {
                    var o = '';
                    r.elem && (n.c && (o = e.inv ? this.solidPath + s : s), r.elem.setAttribute('d', o)), (r.lastPath = s);
                }
            }),
            (MaskElement.prototype.destroy = function () {
                (this.element = null), (this.globalData = null), (this.maskElement = null), (this.data = null), (this.masksProperties = null);
            });
        var filtersFactory = (function () {
                var e = {};
                function n(e, n) {
                    var r = createNS('filter');
                    return r.setAttribute('id', e), !0 !== n && (r.setAttribute('filterUnits', 'objectBoundingBox'), r.setAttribute('x', '0%'), r.setAttribute('y', '0%'), r.setAttribute('width', '100%'), r.setAttribute('height', '100%')), r;
                }
                function r() {
                    var e = createNS('feColorMatrix');
                    return e.setAttribute('type', 'matrix'), e.setAttribute('color-interpolation-filters', 'sRGB'), e.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1'), e;
                }
                return (e.createFilter = n), (e.createAlphaToLuminanceFilter = r), e;
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
            var n,
                r,
                i = 'SourceGraphic',
                a = e.data.ef ? e.data.ef.length : 0,
                s = createElementID(),
                o = filtersFactory.createFilter(s, !0),
                l = 0;
            for (n = 0, this.filters = []; n < a; n += 1) {
                r = null;
                var u = e.data.ef[n].ty;
                registeredEffects$1[u] && ((r = new registeredEffects$1[u].effect(o, e.effectsManager.effectElements[n], e, idPrefix + l, i)), (i = idPrefix + l), registeredEffects$1[u].countsAsEffect && (l += 1)), r && this.filters.push(r);
            }
            l && (e.globalData.defs.appendChild(o), e.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + s + ')')), this.filters.length && e.addRenderableComponent(this);
        }
        function registerEffect$1(e, n, r) {
            registeredEffects$1[e] = {
                effect: n,
                countsAsEffect: r
            };
        }
        function SVGBaseElement() {}
        function HierarchyElement() {}
        function RenderableDOMElement() {}
        function IImageElement(e, n, r) {
            (this.assetData = n.getAssetData(e.refId)),
                this.assetData && this.assetData.sid && (this.assetData = n.slotManager.getProp(this.assetData)),
                this.initElement(e, n, r),
                (this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                });
        }
        function ProcessedElement(e, n) {
            (this.elem = e), (this.pos = n);
        }
        function IShapeElement() {}
        (SVGEffects.prototype.renderFrame = function (e) {
            var n,
                r = this.filters.length;
            for (n = 0; n < r; n += 1) this.filters[n].renderFrame(e);
        }),
            (SVGEffects.prototype.getEffects = function (e) {
                var n,
                    r = this.filters.length,
                    i = [];
                for (n = 0; n < r; n += 1) this.filters[n].type === e && i.push(this.filters[n]);
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
                        var n = createNS('g');
                        n.setAttribute('id', this.layerId), n.appendChild(this.layerElement), (e = n), this.globalData.defs.appendChild(n);
                    } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), (e = this.matteElement), (this.baseElement = this.matteElement)) : (this.baseElement = this.layerElement);
                    if ((this.data.ln && this.layerElement.setAttribute('id', this.data.ln), this.data.cl && this.layerElement.setAttribute('class', this.data.cl), 0 === this.data.ty && !this.data.hd)) {
                        var r = createNS('clipPath'),
                            i = createNS('path');
                        i.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
                        var a = createElementID();
                        if ((r.setAttribute('id', a), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks())) {
                            var s = createNS('g');
                            s.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + a + ')'), s.appendChild(this.layerElement), (this.transformedElement = s), e ? e.appendChild(this.transformedElement) : (this.baseElement = this.transformedElement);
                        } else this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + a + ')');
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
                    if ((!this.matteMasks && (this.matteMasks = {}), !this.matteMasks[e])) {
                        var n,
                            r,
                            i,
                            a,
                            s = this.layerId + '_' + e;
                        if (1 === e || 3 === e) {
                            var o = createNS('mask');
                            o.setAttribute('id', s), o.setAttribute('mask-type', 3 === e ? 'luminance' : 'alpha'), (i = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), o.appendChild(i), this.globalData.defs.appendChild(o), !featureSupport.maskType && 1 === e && (o.setAttribute('mask-type', 'luminance'), (n = createElementID()), (r = filtersFactory.createFilter(n)), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS('g')).appendChild(i), o.appendChild(a), a.setAttribute('filter', 'url(' + getLocationHref() + '#' + n + ')'));
                        } else if (2 === e) {
                            var l = createNS('mask');
                            l.setAttribute('id', s), l.setAttribute('mask-type', 'alpha');
                            var u = createNS('g');
                            l.appendChild(u), (n = createElementID()), (r = filtersFactory.createFilter(n));
                            var c = createNS('feComponentTransfer');
                            c.setAttribute('in', 'SourceGraphic'), r.appendChild(c);
                            var d = createNS('feFuncA');
                            d.setAttribute('type', 'table'), d.setAttribute('tableValues', '1.0 0.0'), c.appendChild(d), this.globalData.defs.appendChild(r);
                            var f = createNS('rect');
                            f.setAttribute('width', this.comp.data.w), f.setAttribute('height', this.comp.data.h), f.setAttribute('x', '0'), f.setAttribute('y', '0'), f.setAttribute('fill', '#ffffff'), f.setAttribute('opacity', '0'), u.setAttribute('filter', 'url(' + getLocationHref() + '#' + n + ')'), u.appendChild(f), (i = createNS('use')).setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId), u.appendChild(i), !featureSupport.maskType && (l.setAttribute('mask-type', 'luminance'), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS('g')), u.appendChild(f), a.appendChild(this.layerElement), u.appendChild(a)), this.globalData.defs.appendChild(l);
                        }
                        this.matteMasks[e] = s;
                    }
                    return this.matteMasks[e];
                },
                setMatte: function (e) {
                    if (!!this.matteElement) this.matteElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + e + ')');
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
            !(function () {
                extendPrototype(
                    [
                        RenderableElement,
                        createProxyFunction({
                            initElement: function (e, n, r) {
                                this.initFrame(), this.initBaseData(e, n, r), this.initTransform(e, n, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                            },
                            hide: function () {
                                !this.hidden && (!this.isInRange || this.isTransparent) && (((this.baseElement || this.layerElement).style.display = 'none'), (this.hidden = !0));
                            },
                            show: function () {
                                this.isInRange && !this.isTransparent && (!this.data.hd && ((this.baseElement || this.layerElement).style.display = 'block'), (this.hidden = !1), (this._isFirstFrame = !0));
                            },
                            renderFrame: function () {
                                if (!this.data.hd && !this.hidden) this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1);
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
                    var n,
                        r = this.shapeModifiers.length;
                    for (n = 0; n < r; n += 1) this.shapeModifiers[n].addShape(e);
                },
                isShapeInAnimatedModifiers: function (e) {
                    for (var n = 0, r = this.shapeModifiers.length; n < r; ) if (this.shapeModifiers[n].isAnimatedWithShape(e)) return !0;
                    return !1;
                },
                renderModifiers: function () {
                    if (!!this.shapeModifiers.length) {
                        var e,
                            n = this.shapes.length;
                        for (e = 0; e < n; e += 1) this.shapes[e].sh.reset();
                        for (e = (n = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
                    }
                },
                searchProcessedElement: function (e) {
                    for (var n = this.processedElements, r = 0, i = n.length; r < i; ) {
                        if (n[r].elem === e) return n[r].pos;
                        r += 1;
                    }
                    return 0;
                },
                addProcessedElement: function (e, n) {
                    for (var r = this.processedElements, i = r.length; i; )
                        if (r[(i -= 1)].elem === e) {
                            r[i].pos = n;
                            return;
                        }
                    r.push(new ProcessedElement(e, n));
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
        function SVGShapeData(e, n, r) {
            (this.caches = []), (this.styles = []), (this.transformers = e), (this.lStr = ''), (this.sh = r), (this.lvl = n), (this._isAnimated = !!r.k);
            for (var i = 0, a = e.length; i < a; ) {
                if (e[i].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break;
                }
                i += 1;
            }
        }
        function SVGStyleData(e, n) {
            (this.data = e), (this.type = e.ty), (this.d = ''), (this.lvl = n), (this._mdf = !1), (this.closed = !0 === e.hd), (this.pElem = createNS('path')), (this.msElem = null);
        }
        function DashProperty(e, n, r, i) {
            (this.elem = e), (this.frameId = -1), (this.dataProps = createSizedArray(n.length)), (this.renderer = r), (this.k = !1), (this.dashStr = ''), (this.dashArray = createTypedArray('float32', n.length ? n.length - 1 : 0)), (this.dashoffset = createTypedArray('float32', 1)), this.initDynamicPropertyContainer(i);
            var a,
                s,
                o = n.length || 0;
            for (a = 0; a < o; a += 1)
                (s = PropertyFactory.getProp(e, n[a].v, 0, 0, this)),
                    (this.k = s.k || this.k),
                    (this.dataProps[a] = {
                        n: n[a].n,
                        p: s
                    });
            !this.k && this.getValue(!0), (this._isAnimated = this.k);
        }
        function SVGStrokeStyleData(e, n, r) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.o = PropertyFactory.getProp(e, n.o, 0, 0.01, this)), (this.w = PropertyFactory.getProp(e, n.w, 0, null, this)), (this.d = new DashProperty(e, n.d || {}, 'svg', this)), (this.c = PropertyFactory.getProp(e, n.c, 1, 255, this)), (this.style = r), (this._isAnimated = !!this._isAnimated);
        }
        function SVGFillStyleData(e, n, r) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.o = PropertyFactory.getProp(e, n.o, 0, 0.01, this)), (this.c = PropertyFactory.getProp(e, n.c, 1, 255, this)), (this.style = r);
        }
        function SVGNoStyleData(e, n, r) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.style = r);
        }
        function GradientProperty(e, n, r) {
            (this.data = n), (this.c = createTypedArray('uint8c', 4 * n.p));
            var i = n.k.k[0].s ? n.k.k[0].s.length - 4 * n.p : n.k.k.length - 4 * n.p;
            (this.o = createTypedArray('float32', i)), (this._cmdf = !1), (this._omdf = !1), (this._collapsable = this.checkCollapsable()), (this._hasOpacity = i), this.initDynamicPropertyContainer(r), (this.prop = PropertyFactory.getProp(e, n.k, 1, null, this)), (this.k = this.prop.k), this.getValue(!0);
        }
        function SVGGradientFillStyleData(e, n, r) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), this.initGradientData(e, n, r);
        }
        function SVGGradientStrokeStyleData(e, n, r) {
            this.initDynamicPropertyContainer(e), (this.getValue = this.iterateDynamicProperties), (this.w = PropertyFactory.getProp(e, n.w, 0, null, this)), (this.d = new DashProperty(e, n.d || {}, 'svg', this)), this.initGradientData(e, n, r), (this._isAnimated = !!this._isAnimated);
        }
        function ShapeGroupData() {
            (this.it = []), (this.prevViewData = []), (this.gr = createNS('g'));
        }
        function SVGTransformData(e, n, r) {
            (this.transform = {
                mProps: e,
                op: n,
                container: r
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
                if (this.elem.globalData.frameId !== this.frameId || !!e) {
                    if (((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), (this._mdf = this._mdf || e), this._mdf)) {
                        var n = 0,
                            r = this.dataProps.length;
                        for ('svg' === this.renderer && (this.dashStr = ''), n = 0; n < r; n += 1) 'o' !== this.dataProps[n].n ? ('svg' === this.renderer ? (this.dashStr += ' ' + this.dataProps[n].p.v) : (this.dashArray[n] = this.dataProps[n].p.v)) : (this.dashoffset[0] = this.dataProps[n].p.v);
                    }
                }
            }),
            extendPrototype([DynamicPropertyContainer], DashProperty),
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
            (GradientProperty.prototype.comparePoints = function (e, n) {
                for (var r = 0, i = this.o.length / 2; r < i; ) {
                    if (Math.abs(e[4 * r] - e[4 * n + 2 * r]) > 0.01) return !1;
                    r += 1;
                }
                return !0;
            }),
            (GradientProperty.prototype.checkCollapsable = function () {
                if (this.o.length / 2 != this.c.length / 4) return !1;
                if (this.data.k.k[0].s) {
                    for (var e = 0, n = this.data.k.k.length; e < n; ) {
                        if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
                        e += 1;
                    }
                } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                return !0;
            }),
            (GradientProperty.prototype.getValue = function (e) {
                if ((this.prop.getValue(), (this._mdf = !1), (this._cmdf = !1), (this._omdf = !1), this.prop._mdf || e)) {
                    var n,
                        r,
                        i,
                        a = 4 * this.data.p;
                    for (n = 0; n < a; n += 1) (r = n % 4 == 0 ? 100 : 255), (i = Math.round(this.prop.v[n] * r)), this.c[n] !== i && ((this.c[n] = i), (this._cmdf = !e));
                    if (this.o.length) for (a = this.prop.v.length, n = 4 * this.data.p; n < a; n += 1) (r = n % 2 == 0 ? 100 : 1), (i = n % 2 == 0 ? Math.round(100 * this.prop.v[n]) : this.prop.v[n]), this.o[n - 4 * this.data.p] !== i && ((this.o[n - 4 * this.data.p] = i), (this._omdf = !e));
                    this._mdf = !e;
                }
            }),
            extendPrototype([DynamicPropertyContainer], GradientProperty),
            (SVGGradientFillStyleData.prototype.initGradientData = function (e, n, r) {
                (this.o = PropertyFactory.getProp(e, n.o, 0, 0.01, this)), (this.s = PropertyFactory.getProp(e, n.s, 1, null, this)), (this.e = PropertyFactory.getProp(e, n.e, 1, null, this)), (this.h = PropertyFactory.getProp(e, n.h || { k: 0 }, 0, 0.01, this)), (this.a = PropertyFactory.getProp(e, n.a || { k: 0 }, 0, degToRads, this)), (this.g = new GradientProperty(e, n.g, this)), (this.style = r), (this.stops = []), this.setGradientData(r.pElem, n), this.setGradientOpacity(n, r), (this._isAnimated = !!this._isAnimated);
            }),
            (SVGGradientFillStyleData.prototype.setGradientData = function (e, n) {
                var r,
                    i,
                    a,
                    s = createElementID(),
                    o = createNS(1 === n.t ? 'linearGradient' : 'radialGradient');
                o.setAttribute('id', s), o.setAttribute('spreadMethod', 'pad'), o.setAttribute('gradientUnits', 'userSpaceOnUse');
                var l = [];
                for (i = 0, a = 4 * n.g.p; i < a; i += 4) (r = createNS('stop')), o.appendChild(r), l.push(r);
                e.setAttribute('gf' === n.ty ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + s + ')'), (this.gf = o), (this.cst = l);
            }),
            (SVGGradientFillStyleData.prototype.setGradientOpacity = function (e, n) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var r,
                        i,
                        a,
                        s = createNS('mask'),
                        o = createNS('path');
                    s.appendChild(o);
                    var l = createElementID(),
                        u = createElementID();
                    s.setAttribute('id', u);
                    var c = createNS(1 === e.t ? 'linearGradient' : 'radialGradient');
                    c.setAttribute('id', l), c.setAttribute('spreadMethod', 'pad'), c.setAttribute('gradientUnits', 'userSpaceOnUse'), (a = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
                    var d = this.stops;
                    for (i = 4 * e.g.p; i < a; i += 2) (r = createNS('stop')).setAttribute('stop-color', 'rgb(255,255,255)'), c.appendChild(r), d.push(r);
                    o.setAttribute('gf' === e.ty ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + l + ')'), 'gs' === e.ty && (o.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]), o.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]), 1 === e.lj && o.setAttribute('stroke-miterlimit', e.ml)), (this.of = c), (this.ms = s), (this.ost = d), (this.maskId = u), (n.msElem = o);
                }
            }),
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function (e, n, r, i) {
                if (0 === n) return '';
                var a,
                    s = e.o,
                    o = e.i,
                    l = e.v,
                    u = ' M' + i.applyToPointStringified(l[0][0], l[0][1]);
                for (a = 1; a < n; a += 1) u += ' C' + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + ' ' + i.applyToPointStringified(o[a][0], o[a][1]) + ' ' + i.applyToPointStringified(l[a][0], l[a][1]);
                return r && n && (u += ' C' + i.applyToPointStringified(s[a - 1][0], s[a - 1][1]) + ' ' + i.applyToPointStringified(o[0][0], o[0][1]) + ' ' + i.applyToPointStringified(l[0][0], l[0][1]) + 'z'), u;
            },
            SVGElementsRenderer = (function () {
                var e = new Matrix(),
                    n = new Matrix();
                function r(e, n, r) {
                    (r || n.transform.op._mdf) && n.transform.container.setAttribute('opacity', n.transform.op.v), (r || n.transform.mProps._mdf) && n.transform.container.setAttribute('transform', n.transform.mProps.v.to2dCSS());
                }
                function i() {}
                function a(r, i, a) {
                    var s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        f,
                        _,
                        h,
                        p,
                        m = i.styles.length,
                        g = i.lvl;
                    for (d = 0; d < m; d += 1) {
                        if (((u = i.sh._mdf || a), i.styles[d].lvl < g)) {
                            for (_ = n.reset(), h = g - i.styles[d].lvl, p = i.transformers.length - 1; !u && h > 0; ) (u = i.transformers[p].mProps._mdf || u), (h -= 1), (p -= 1);
                            if (u) for (h = g - i.styles[d].lvl, p = i.transformers.length - 1; h > 0; ) _.multiply(i.transformers[p].mProps.v), (h -= 1), (p -= 1);
                        } else _ = e;
                        if (((o = (f = i.sh.paths)._length), u)) {
                            for (s = 0, l = ''; s < o; s += 1) (c = f.shapes[s]) && c._length && (l += buildShapeString(c, c._length, c.c, _));
                            i.caches[d] = l;
                        } else l = i.caches[d];
                        (i.styles[d].d += !0 === r.hd ? '' : l), (i.styles[d]._mdf = u || i.styles[d]._mdf);
                    }
                }
                function s(e, n, r) {
                    var i = n.style;
                    (n.c._mdf || r) && i.pElem.setAttribute('fill', 'rgb(' + bmFloor(n.c.v[0]) + ',' + bmFloor(n.c.v[1]) + ',' + bmFloor(n.c.v[2]) + ')'), (n.o._mdf || r) && i.pElem.setAttribute('fill-opacity', n.o.v);
                }
                function o(e, n, r) {
                    l(e, n, r), u(e, n, r);
                }
                function l(e, n, r) {
                    var i,
                        a,
                        s,
                        o,
                        l,
                        u = n.gf,
                        c = n.g._hasOpacity,
                        d = n.s.v,
                        f = n.e.v;
                    if (n.o._mdf || r) {
                        var _ = 'gf' === e.ty ? 'fill-opacity' : 'stroke-opacity';
                        n.style.pElem.setAttribute(_, n.o.v);
                    }
                    if (n.s._mdf || r) {
                        var h = 1 === e.t ? 'x1' : 'cx',
                            p = 'x1' === h ? 'y1' : 'cy';
                        u.setAttribute(h, d[0]), u.setAttribute(p, d[1]), c && !n.g._collapsable && (n.of.setAttribute(h, d[0]), n.of.setAttribute(p, d[1]));
                    }
                    if (n.g._cmdf || r) {
                        i = n.cst;
                        var m = n.g.c;
                        for (a = 0, s = i.length; a < s; a += 1) (o = i[a]).setAttribute('offset', m[4 * a] + '%'), o.setAttribute('stop-color', 'rgb(' + m[4 * a + 1] + ',' + m[4 * a + 2] + ',' + m[4 * a + 3] + ')');
                    }
                    if (c && (n.g._omdf || r)) {
                        var g = n.g.o;
                        for (a = 0, s = (i = n.g._collapsable ? n.cst : n.ost).length; a < s; a += 1) (o = i[a]), !n.g._collapsable && o.setAttribute('offset', g[2 * a] + '%'), o.setAttribute('stop-opacity', g[2 * a + 1]);
                    }
                    if (1 === e.t) (n.e._mdf || r) && (u.setAttribute('x2', f[0]), u.setAttribute('y2', f[1]), c && !n.g._collapsable && (n.of.setAttribute('x2', f[0]), n.of.setAttribute('y2', f[1])));
                    else if (((n.s._mdf || n.e._mdf || r) && ((l = Math.sqrt(Math.pow(d[0] - f[0], 2) + Math.pow(d[1] - f[1], 2))), u.setAttribute('r', l), c && !n.g._collapsable && n.of.setAttribute('r', l)), n.e._mdf || n.h._mdf || n.a._mdf || r)) {
                        !l && (l = Math.sqrt(Math.pow(d[0] - f[0], 2) + Math.pow(d[1] - f[1], 2)));
                        var E = Math.atan2(f[1] - d[1], f[0] - d[0]),
                            v = n.h.v;
                        v >= 1 ? (v = 0.99) : v <= -1 && (v = -0.99);
                        var I = l * v,
                            T = Math.cos(E + n.a.v) * I + d[0],
                            b = Math.sin(E + n.a.v) * I + d[1];
                        u.setAttribute('fx', T), u.setAttribute('fy', b), c && !n.g._collapsable && (n.of.setAttribute('fx', T), n.of.setAttribute('fy', b));
                    }
                }
                function u(e, n, r) {
                    var i = n.style,
                        a = n.d;
                    a && (a._mdf || r) && a.dashStr && (i.pElem.setAttribute('stroke-dasharray', a.dashStr), i.pElem.setAttribute('stroke-dashoffset', a.dashoffset[0])), n.c && (n.c._mdf || r) && i.pElem.setAttribute('stroke', 'rgb(' + bmFloor(n.c.v[0]) + ',' + bmFloor(n.c.v[1]) + ',' + bmFloor(n.c.v[2]) + ')'), (n.o._mdf || r) && i.pElem.setAttribute('stroke-opacity', n.o.v), (n.w._mdf || r) && (i.pElem.setAttribute('stroke-width', n.w.v), i.msElem && i.msElem.setAttribute('stroke-width', n.w.v));
                }
                return {
                    createRenderFunction: function e(e) {
                        switch (e.ty) {
                            case 'fl':
                                return s;
                            case 'gf':
                                return l;
                            case 'gs':
                                return o;
                            case 'st':
                                return u;
                            case 'sh':
                            case 'el':
                            case 'rc':
                            case 'sr':
                                return a;
                            case 'tr':
                                return r;
                            case 'no':
                                return i;
                            default:
                                return null;
                        }
                    }
                };
            })();
        function SVGShapeElement(e, n, r) {
            (this.shapes = []), (this.shapesData = e.shapes), (this.stylesList = []), (this.shapeModifiers = []), (this.itemsData = []), (this.processedElements = []), (this.animatedContents = []), this.initElement(e, n, r), (this.prevViewData = []);
        }
        function LetterProps(e, n, r, i, a, s) {
            (this.o = e),
                (this.sw = n),
                (this.sc = r),
                (this.fc = i),
                (this.m = a),
                (this.p = s),
                (this._mdf = {
                    o: !0,
                    sw: !!n,
                    sc: !!r,
                    fc: !!i,
                    m: !0,
                    p: !0
                });
        }
        function TextProperty(e, n) {
            (this._frameId = initialDefaultFrame),
                (this.pv = ''),
                (this.v = ''),
                (this.kf = !1),
                (this._isFirstFrame = !0),
                (this._mdf = !1),
                n.d && n.d.sid && (n.d = e.globalData.slotManager.getProp(n.d)),
                (this.data = n),
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
                !this.searchProperty() && this.completeTextData(this.currentData);
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
                    n,
                    r,
                    i,
                    a = this.shapes.length,
                    s = this.stylesList.length,
                    o = [],
                    l = !1;
                for (r = 0; r < s; r += 1) {
                    for (e = 0, i = this.stylesList[r], l = !1, o.length = 0; e < a; e += 1) -1 !== (n = this.shapes[e]).styles.indexOf(i) && (o.push(n), (l = n._isAnimated || l));
                    o.length > 1 && l && this.setShapesAsAnimated(o);
                }
            }),
            (SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) e[n].setAsAnimated();
            }),
            (SVGShapeElement.prototype.createStyleElement = function (e, n) {
                var r,
                    i = new SVGStyleData(e, n),
                    a = i.pElem;
                return 'st' === e.ty ? (r = new SVGStrokeStyleData(this, e, i)) : 'fl' === e.ty ? (r = new SVGFillStyleData(this, e, i)) : 'gf' === e.ty || 'gs' === e.ty ? ((r = new ('gf' === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, i)), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), a.setAttribute('mask', 'url(' + getLocationHref() + '#' + r.maskId + ')'))) : 'no' === e.ty && (r = new SVGNoStyleData(this, e, i)), ('st' === e.ty || 'gs' === e.ty) && (a.setAttribute('stroke-linecap', lineCapEnum[e.lc || 2]), a.setAttribute('stroke-linejoin', lineJoinEnum[e.lj || 2]), a.setAttribute('fill-opacity', '0'), 1 === e.lj && a.setAttribute('stroke-miterlimit', e.ml)), 2 === e.r && a.setAttribute('fill-rule', 'evenodd'), e.ln && a.setAttribute('id', e.ln), e.cl && a.setAttribute('class', e.cl), e.bm && (a.style['mix-blend-mode'] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, r), r;
            }),
            (SVGShapeElement.prototype.createGroupElement = function (e) {
                var n = new ShapeGroupData();
                return e.ln && n.gr.setAttribute('id', e.ln), e.cl && n.gr.setAttribute('class', e.cl), e.bm && (n.gr.style['mix-blend-mode'] = getBlendMode(e.bm)), n;
            }),
            (SVGShapeElement.prototype.createTransformElement = function (e, n) {
                var r = TransformPropertyFactory.getTransformProperty(this, e, this),
                    i = new SVGTransformData(r, r.o, n);
                return this.addToAnimatedContents(e, i), i;
            }),
            (SVGShapeElement.prototype.createShapeElement = function (e, n, r) {
                var i = 4;
                'rc' === e.ty ? (i = 5) : 'el' === e.ty ? (i = 6) : 'sr' === e.ty && (i = 7);
                var a = new SVGShapeData(n, r, ShapePropertyFactory.getShapeProp(this, e, i, this));
                return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(e, a), a;
            }),
            (SVGShapeElement.prototype.addToAnimatedContents = function (e, n) {
                for (var r = 0, i = this.animatedContents.length; r < i; ) {
                    if (this.animatedContents[r].element === n) return;
                    r += 1;
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(e),
                    element: n,
                    data: e
                });
            }),
            (SVGShapeElement.prototype.setElementStyles = function (e) {
                var n,
                    r = e.styles,
                    i = this.stylesList.length;
                for (n = 0; n < i; n += 1) !this.stylesList[n].closed && r.push(this.stylesList[n]);
            }),
            (SVGShapeElement.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var e,
                    n = this.itemsData.length;
                for (e = 0; e < n; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), n = this.dynamicProperties.length, e = 0; e < n; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers();
            }),
            (SVGShapeElement.prototype.searchShapes = function (e, n, r, i, a, s, o) {
                var l,
                    u,
                    c,
                    d,
                    f,
                    _,
                    h = [].concat(s),
                    p = e.length - 1,
                    m = [],
                    g = [];
                for (l = p; l >= 0; l -= 1) {
                    if (((_ = this.searchProcessedElement(e[l])) ? (n[l] = r[_ - 1]) : (e[l]._render = o), 'fl' === e[l].ty || 'st' === e[l].ty || 'gf' === e[l].ty || 'gs' === e[l].ty || 'no' === e[l].ty)) _ ? (n[l].style.closed = !1) : (n[l] = this.createStyleElement(e[l], a)), e[l]._render && n[l].style.pElem.parentNode !== i && i.appendChild(n[l].style.pElem), m.push(n[l].style);
                    else if ('gr' === e[l].ty) {
                        if (_) for (u = 0, c = n[l].it.length; u < c; u += 1) n[l].prevViewData[u] = n[l].it[u];
                        else n[l] = this.createGroupElement(e[l]);
                        this.searchShapes(e[l].it, n[l].it, n[l].prevViewData, n[l].gr, a + 1, h, o), e[l]._render && n[l].gr.parentNode !== i && i.appendChild(n[l].gr);
                    } else 'tr' === e[l].ty ? (!_ && (n[l] = this.createTransformElement(e[l], i)), (d = n[l].transform), h.push(d)) : 'sh' === e[l].ty || 'rc' === e[l].ty || 'el' === e[l].ty || 'sr' === e[l].ty ? (!_ && (n[l] = this.createShapeElement(e[l], h, a)), this.setElementStyles(n[l])) : 'tm' === e[l].ty || 'rd' === e[l].ty || 'ms' === e[l].ty || 'pb' === e[l].ty || 'zz' === e[l].ty || 'op' === e[l].ty ? (_ ? ((f = n[l]).closed = !1) : ((f = ShapeModifiers.getModifier(e[l].ty)).init(this, e[l]), (n[l] = f), this.shapeModifiers.push(f)), g.push(f)) : 'rp' === e[l].ty && (_ ? ((f = n[l]).closed = !0) : ((f = ShapeModifiers.getModifier(e[l].ty)), (n[l] = f), f.init(this, e, l, n), this.shapeModifiers.push(f), (o = !1)), g.push(f));
                    this.addProcessedElement(e[l], l + 1);
                }
                for (l = 0, p = m.length; l < p; l += 1) m[l].closed = !0;
                for (l = 0, p = g.length; l < p; l += 1) g[l].closed = !0;
            }),
            (SVGShapeElement.prototype.renderInnerContent = function () {
                this.renderModifiers();
                var e,
                    n = this.stylesList.length;
                for (e = 0; e < n; e += 1) this.stylesList[e].reset();
                for (this.renderShape(), e = 0; e < n; e += 1) (this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute('d', this.stylesList[e].d), (this.stylesList[e].d = 'M0 0' + this.stylesList[e].d)), this.stylesList[e].pElem.setAttribute('d', this.stylesList[e].d || 'M0 0'));
            }),
            (SVGShapeElement.prototype.renderShape = function () {
                var e,
                    n,
                    r = this.animatedContents.length;
                for (e = 0; e < r; e += 1) (n = this.animatedContents[e]), (this._isFirstFrame || n.element._isAnimated) && !0 !== n.data && n.fn(n.data, n.element, this._isFirstFrame);
            }),
            (SVGShapeElement.prototype.destroy = function () {
                this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
            }),
            (LetterProps.prototype.update = function (e, n, r, i, a, s) {
                (this._mdf.o = !1), (this._mdf.sw = !1), (this._mdf.sc = !1), (this._mdf.fc = !1), (this._mdf.m = !1), (this._mdf.p = !1);
                var o = !1;
                return this.o !== e && ((this.o = e), (this._mdf.o = !0), (o = !0)), this.sw !== n && ((this.sw = n), (this._mdf.sw = !0), (o = !0)), this.sc !== r && ((this.sc = r), (this._mdf.sc = !0), (o = !0)), this.fc !== i && ((this.fc = i), (this._mdf.fc = !0), (o = !0)), this.m !== a && ((this.m = a), (this._mdf.m = !0), (o = !0)), s.length && (this.p[0] !== s[0] || this.p[1] !== s[1] || this.p[4] !== s[4] || this.p[5] !== s[5] || this.p[12] !== s[12] || this.p[13] !== s[13]) && ((this.p = s), (this._mdf.p = !0), (o = !0)), o;
            }),
            (TextProperty.prototype.defaultBoxWidth = [0, 0]),
            (TextProperty.prototype.copyData = function (e, n) {
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                return e;
            }),
            (TextProperty.prototype.setCurrentData = function (e) {
                !e.__complete && this.completeTextData(e), (this.currentData = e), (this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth), (this._mdf = !0);
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
                if ((this.elem.globalData.frameId !== this.frameId && !!this.effectsSequence.length) || !!e) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var n,
                        r = this.currentData,
                        i = this.keysIndex;
                    if (this.lock) {
                        this.setCurrentData(this.currentData);
                        return;
                    }
                    (this.lock = !0), (this._mdf = !1);
                    var a = this.effectsSequence.length,
                        s = e || this.data.d.k[this.keysIndex].s;
                    for (n = 0; n < a; n += 1) s = i !== this.keysIndex ? this.effectsSequence[n](s, s.t) : this.effectsSequence[n](this.currentData, s.t);
                    r !== s && this.setCurrentData(s), (this.v = this.currentData), (this.pv = this.v), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                }
            }),
            (TextProperty.prototype.getKeyframeValue = function () {
                for (var e = this.data.d.k, n = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && r !== i - 1 && !(e[r + 1].t > n); ) {
                    r += 1;
                }
                return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
            }),
            (TextProperty.prototype.buildFinalText = function (e) {
                for (var n, r, i = [], a = 0, s = e.length, o = !1, l = !1, u = ''; a < s; ) (o = l), (l = !1), (n = e.charCodeAt(a)), (u = e.charAt(a)), FontManager.isCombinedCharacter(n) ? (o = !0) : n >= 55296 && n <= 56319 ? (FontManager.isRegionalFlag(e, a) ? (u = e.substr(a, 14)) : (r = e.charCodeAt(a + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(n, r) ? ((u = e.substr(a, 2)), (o = !0)) : (u = FontManager.isFlagEmoji(e.substr(a, 4)) ? e.substr(a, 4) : e.substr(a, 2)))) : n > 56319 ? ((r = e.charCodeAt(a + 1)), FontManager.isVariationSelector(n) && (o = !0)) : FontManager.isZeroWidthJoiner(n) && ((o = !0), (l = !0)), o ? ((i[i.length - 1] += u), (o = !1)) : i.push(u), (a += u.length);
                return i;
            }),
            (TextProperty.prototype.completeTextData = function (e) {
                e.__complete = !0;
                var n = this.elem.globalData.fontManager,
                    r = this.data,
                    i = [],
                    a = 0,
                    s = r.m.g,
                    o = 0,
                    l = 0,
                    u = 0,
                    c = [],
                    d = 0,
                    f = 0,
                    _ = n.getFontByName(e.f),
                    h = 0,
                    p = getFontProperties(_);
                (e.fWeight = p.weight), (e.fStyle = p.style), (e.finalSize = e.s), (e.finalText = this.buildFinalText(e.t)), (E = e.finalText.length), (e.finalLineHeight = e.lh);
                var m = (e.tr / 1000) * e.finalSize;
                if (e.sz) {
                    for (var g, E, v, I, T, b, y, S, A, N, C = !0, R = e.sz[0], O = e.sz[1]; C; ) {
                        (N = this.buildFinalText(e.t)), (A = 0), (d = 0), (E = N.length), (m = (e.tr / 1000) * e.finalSize);
                        var D = -1;
                        for (g = 0; g < E; g += 1) (S = N[g].charCodeAt(0)), (v = !1), ' ' === N[g] ? (D = g) : (13 === S || 3 === S) && ((d = 0), (v = !0), (A += e.finalLineHeight || 1.2 * e.finalSize)), n.chars ? ((y = n.getCharData(N[g], _.fStyle, _.fFamily)), (h = v ? 0 : (y.w * e.finalSize) / 100)) : (h = n.measureText(N[g], e.f, e.finalSize)), d + h > R && ' ' !== N[g] ? (-1 === D ? (E += 1) : (g = D), (A += e.finalLineHeight || 1.2 * e.finalSize), N.splice(g, D === g ? 1 : 0, '\r'), (D = -1), (d = 0)) : (d += h + m);
                        (A += (_.ascent * e.finalSize) / 100), this.canResize && e.finalSize > this.minimumFontSize && O < A ? ((e.finalSize -= 1), (e.finalLineHeight = (e.finalSize * e.lh) / e.s)) : ((e.finalText = N), (E = e.finalText.length), (C = !1));
                    }
                }
                (d = -m), (h = 0);
                var L = 0;
                for (g = 0; g < E; g += 1)
                    if (
                        ((v = !1),
                        13 === (S = (P = e.finalText[g]).charCodeAt(0)) || 3 === S ? ((L = 0), c.push(d), (f = d > f ? d : f), (d = -2 * m), (I = ''), (v = !0), (u += 1)) : (I = P),
                        n.chars ? ((y = n.getCharData(P, _.fStyle, n.getFontByName(e.f).fFamily)), (h = v ? 0 : (y.w * e.finalSize) / 100)) : (h = n.measureText(I, e.f, e.finalSize)),
                        ' ' === P ? (L += h + m) : ((d += h + m + L), (L = 0)),
                        i.push({
                            l: h,
                            an: h,
                            add: o,
                            n: v,
                            anIndexes: [],
                            val: I,
                            line: u,
                            animatorJustifyOffset: 0
                        }),
                        2 == s)
                    ) {
                        if (((o += h), '' === I || ' ' === I || g === E - 1)) {
                            for (('' === I || ' ' === I) && (o -= h); l <= g; ) (i[l].an = o), (i[l].ind = a), (i[l].extra = h), (l += 1);
                            (a += 1), (o = 0);
                        }
                    } else if (3 == s) {
                        if (((o += h), '' === I || g === E - 1)) {
                            for ('' === I && (o -= h); l <= g; ) (i[l].an = o), (i[l].ind = a), (i[l].extra = h), (l += 1);
                            (o = 0), (a += 1);
                        }
                    } else (i[a].ind = a), (i[a].extra = 0), (a += 1);
                if (((e.l = i), (f = d > f ? d : f), c.push(d), e.sz)) (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
                else
                    switch (((e.boxWidth = f), e.j)) {
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
                var x = r.a;
                b = x.length;
                var w = [];
                for (T = 0; T < b; T += 1) {
                    for ((M = x[T]).a.sc && (e.strokeColorAnim = !0), M.a.sw && (e.strokeWidthAnim = !0), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (e.fillColorAnim = !0), B = 0, U = M.s.b, g = 0; g < E; g += 1) ((k = i[g]).anIndexes[T] = B), ((1 == U && '' !== k.val) || (2 == U && '' !== k.val && ' ' !== k.val) || (3 == U && (k.n || ' ' == k.val || g == E - 1)) || (4 == U && (k.n || g == E - 1))) && (1 === M.s.rn && w.push(B), (B += 1));
                    r.a[T].s.totalChars = B;
                    var P,
                        M,
                        k,
                        U,
                        B,
                        G,
                        Z = -1;
                    if (1 === M.s.rn) for (g = 0; g < E; g += 1) Z != (k = i[g]).anIndexes[T] && ((Z = k.anIndexes[T]), (G = w.splice(Math.floor(Math.random() * w.length), 1)[0])), (k.anIndexes[T] = G);
                }
                (e.yOffset = e.finalLineHeight || 1.2 * e.finalSize), (e.ls = e.ls || 0), (e.ascent = (_.ascent * e.finalSize) / 100);
            }),
            (TextProperty.prototype.updateDocumentData = function (e, n) {
                n = void 0 === n ? this.keysIndex : n;
                var r = this.copyData({}, this.data.d.k[n].s);
                (r = this.copyData(r, e)), (this.data.d.k[n].s = r), this.recalculate(n), this.setCurrentData(r), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.recalculate = function (e) {
                var n = this.data.d.k[e].s;
                (n.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(n);
            }),
            (TextProperty.prototype.canResizeFont = function (e) {
                (this.canResize = e), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            }),
            (TextProperty.prototype.setMinimumFontSize = function (e) {
                (this.minimumFontSize = Math.floor(e) || 1), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            });
        var TextSelectorProp = (function () {
            var e = Math.max,
                n = Math.min,
                r = Math.floor;
            function i(e, n) {
                (this._currentTextLength = -1), (this.k = !1), (this.data = n), (this.elem = e), (this.comp = e.comp), (this.finalS = 0), (this.finalE = 0), this.initDynamicPropertyContainer(e), (this.s = PropertyFactory.getProp(e, n.s || { k: 0 }, 0, 0, this)), 'e' in n ? (this.e = PropertyFactory.getProp(e, n.e, 0, 0, this)) : (this.e = { v: 100 }), (this.o = PropertyFactory.getProp(e, n.o || { k: 0 }, 0, 0, this)), (this.xe = PropertyFactory.getProp(e, n.xe || { k: 0 }, 0, 0, this)), (this.ne = PropertyFactory.getProp(e, n.ne || { k: 0 }, 0, 0, this)), (this.sm = PropertyFactory.getProp(e, n.sm || { k: 100 }, 0, 0, this)), (this.a = PropertyFactory.getProp(e, n.a, 0, 0.01, this)), !this.dynamicProperties.length && this.getValue();
            }
            return (
                (i.prototype = {
                    getMult: function (i) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var a = 0,
                            s = 0,
                            o = 1,
                            l = 1;
                        this.ne.v > 0 ? (a = this.ne.v / 100) : (s = -this.ne.v / 100), this.xe.v > 0 ? (o = 1 - this.xe.v / 100) : (l = 1 + this.xe.v / 100);
                        var u = BezierFactory.getBezierEasing(a, s, o, l).get,
                            c = 0,
                            d = this.finalS,
                            f = this.finalE,
                            _ = this.data.sh;
                        if (2 === _) c = u((c = f === d ? (i >= f ? 1 : 0) : e(0, n(0.5 / (f - d) + (i - d) / (f - d), 1))));
                        else if (3 === _) c = u((c = f === d ? (i >= f ? 0 : 1) : 1 - e(0, n(0.5 / (f - d) + (i - d) / (f - d), 1))));
                        else if (4 === _) f === d ? (c = 0) : (c = e(0, n(0.5 / (f - d) + (i - d) / (f - d), 1))) < 0.5 ? (c *= 2) : (c = 1 - 2 * (c - 0.5)), (c = u(c));
                        else if (5 === _) {
                            if (f === d) c = 0;
                            else {
                                var h = f - d,
                                    p = -h / 2 + (i = n(e(0, i + 0.5 - d), f - d)),
                                    m = h / 2;
                                c = Math.sqrt(1 - (p * p) / (m * m));
                            }
                            c = u(c);
                        } else 6 === _ ? (c = u((c = f === d ? 0 : (1 + Math.cos(Math.PI + (2 * Math.PI * (i = n(e(0, i + 0.5 - d), f - d))) / (f - d))) / 2))) : (i >= r(d) && (c = i - d < 0 ? e(0, n(n(f, 1) - (d - i), 1)) : e(0, n(f - i, 1))), (c = u(c)));
                        if (100 !== this.sm.v) {
                            var g = 0.01 * this.sm.v;
                            0 === g && (g = 1e-8);
                            var E = 0.5 - 0.5 * g;
                            c < E ? (c = 0) : (c = (c - E) / g) > 1 && (c = 1);
                        }
                        return c * this.a.v;
                    },
                    getValue: function (e) {
                        this.iterateDynamicProperties(), (this._mdf = e || this._mdf), (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0), e && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var n = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            r = this.o.v / n,
                            i = this.s.v / n + r,
                            a = this.e.v / n + r;
                        if (i > a) {
                            var s = i;
                            (i = a), (a = s);
                        }
                        (this.finalS = i), (this.finalE = a);
                    }
                }),
                extendPrototype([DynamicPropertyContainer], i),
                {
                    getTextSelectorProp: function e(e, n, r) {
                        return new i(e, n, r);
                    }
                }
            );
        })();
        function TextAnimatorDataProperty(e, n, r) {
            var i = { propType: !1 },
                a = PropertyFactory.getProp,
                s = n.a;
            (this.a = {
                r: s.r ? a(e, s.r, 0, degToRads, r) : i,
                rx: s.rx ? a(e, s.rx, 0, degToRads, r) : i,
                ry: s.ry ? a(e, s.ry, 0, degToRads, r) : i,
                sk: s.sk ? a(e, s.sk, 0, degToRads, r) : i,
                sa: s.sa ? a(e, s.sa, 0, degToRads, r) : i,
                s: s.s ? a(e, s.s, 1, 0.01, r) : i,
                a: s.a ? a(e, s.a, 1, 0, r) : i,
                o: s.o ? a(e, s.o, 0, 0.01, r) : i,
                p: s.p ? a(e, s.p, 1, 0, r) : i,
                sw: s.sw ? a(e, s.sw, 0, 0, r) : i,
                sc: s.sc ? a(e, s.sc, 1, 0, r) : i,
                fc: s.fc ? a(e, s.fc, 1, 0, r) : i,
                fh: s.fh ? a(e, s.fh, 0, 0, r) : i,
                fs: s.fs ? a(e, s.fs, 0, 0.01, r) : i,
                fb: s.fb ? a(e, s.fb, 0, 0.01, r) : i,
                t: s.t ? a(e, s.t, 0, 0, r) : i
            }),
                (this.s = TextSelectorProp.getTextSelectorProp(e, n.s, r)),
                (this.s.t = n.s.t);
        }
        function TextAnimatorProperty(e, n, r) {
            (this._isFirstFrame = !0), (this._hasMaskedPath = !1), (this._frameId = -1), (this._textData = e), (this._renderType = n), (this._elem = r), (this._animatorsData = createSizedArray(this._textData.a.length)), (this._pathData = {}), (this._moreOptions = { alignment: {} }), (this.renderedLetters = []), (this.lettersChangedFlag = !1), this.initDynamicPropertyContainer(r);
        }
        function ITextElement() {}
        (TextAnimatorProperty.prototype.searchProperties = function () {
            var e,
                n,
                r = this._textData.a.length,
                i = PropertyFactory.getProp;
            for (e = 0; e < r; e += 1) (n = this._textData.a[e]), (this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, n, this));
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
            (TextAnimatorProperty.prototype.getMeasures = function (e, n) {
                if (((this.lettersChangedFlag = n), !!this._mdf || !!this._isFirstFrame || !!n || (!!this._hasMaskedPath && !!this._pathData.m._mdf))) {
                    this._isFirstFrame = !1;
                    var r,
                        i,
                        a,
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        f,
                        _,
                        h,
                        p,
                        m,
                        g,
                        E,
                        v,
                        I,
                        T = this._moreOptions.alignment.v,
                        b = this._animatorsData,
                        y = this._textData,
                        S = this.mHelper,
                        A = this._renderType,
                        N = this.renderedLetters.length,
                        C = e.l;
                    if (this._hasMaskedPath) {
                        if (((Y = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                            var R,
                                O,
                                D,
                                L,
                                x,
                                w,
                                P,
                                M,
                                k,
                                U,
                                B,
                                G,
                                Z,
                                F,
                                V,
                                j,
                                H,
                                Y,
                                W,
                                K = Y.v;
                            for (
                                this._pathData.r.v && (K = K.reverse()),
                                    x = {
                                        tLength: 0,
                                        segments: []
                                    },
                                    L = K._length - 1,
                                    j = 0,
                                    D = 0;
                                D < L;
                                D += 1
                            )
                                (W = bez.buildBezierData(K.v[D], K.v[D + 1], [K.o[D][0] - K.v[D][0], K.o[D][1] - K.v[D][1]], [K.i[D + 1][0] - K.v[D + 1][0], K.i[D + 1][1] - K.v[D + 1][1]])), (x.tLength += W.segmentLength), x.segments.push(W), (j += W.segmentLength);
                            (D = L), Y.v.c && ((W = bez.buildBezierData(K.v[D], K.v[0], [K.o[D][0] - K.v[D][0], K.o[D][1] - K.v[D][1]], [K.i[0][0] - K.v[0][0], K.i[0][1] - K.v[0][1]])), (x.tLength += W.segmentLength), x.segments.push(W), (j += W.segmentLength)), (this._pathData.pi = x);
                        }
                        if (((x = this._pathData.pi), (w = this._pathData.f.v), (B = 0), (U = 1), (M = 0), (k = !0), (F = x.segments), w < 0 && Y.v.c)) for (x.tLength < Math.abs(w) && (w = -Math.abs(w) % x.tLength), B = F.length - 1, U = (Z = F[B].points).length - 1; w < 0; ) (w += Z[U].partialLength), (U -= 1) < 0 && ((B -= 1), (U = (Z = F[B].points).length - 1));
                        (G = (Z = F[B].points)[U - 1]), (V = (P = Z[U]).partialLength);
                    }
                    (L = C.length), (R = 0), (O = 0);
                    var z = 1.2 * e.finalSize * 0.714,
                        q = !0;
                    s = b.length;
                    var Q = -1,
                        X = w,
                        J = B,
                        $ = U,
                        ee = -1,
                        et = '',
                        en = this.defaultPropsArray;
                    if (2 === e.j || 1 === e.j) {
                        var er = 0,
                            ei = 0,
                            ea = 2 === e.j ? -0.5 : -1,
                            es = 0,
                            eo = !0;
                        for (D = 0; D < L; D += 1)
                            if (C[D].n) {
                                for (er && (er += ei); es < D; ) (C[es].animatorJustifyOffset = er), (es += 1);
                                (er = 0), (eo = !0);
                            } else {
                                for (a = 0; a < s; a += 1) (r = b[a].a).t.propType && (eo && 2 === e.j && (ei += r.t.v * ea), (l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)).length ? (er += r.t.v * l[0] * ea) : (er += r.t.v * l * ea));
                                eo = !1;
                            }
                        for (er && (er += ei); es < D; ) (C[es].animatorJustifyOffset = er), (es += 1);
                    }
                    for (D = 0; D < L; D += 1) {
                        if ((S.reset(), (f = 1), C[D].n)) (R = 0), (O += e.yOffset + (q ? 1 : 0)), (w = X), (q = !1), this._hasMaskedPath && ((B = J), (U = $), (G = (Z = F[B].points)[U - 1]), (V = (P = Z[U]).partialLength), (M = 0)), (et = ''), (v = ''), (g = ''), (I = ''), (en = this.defaultPropsArray);
                        else {
                            if (this._hasMaskedPath) {
                                if (ee !== C[D].line) {
                                    switch (e.j) {
                                        case 1:
                                            w += j - e.lineWidths[C[D].line];
                                            break;
                                        case 2:
                                            w += (j - e.lineWidths[C[D].line]) / 2;
                                    }
                                    ee = C[D].line;
                                }
                                Q !== C[D].ind && (C[Q] && (w += C[Q].extra), (w += C[D].an / 2), (Q = C[D].ind)), (w += T[0] * C[D].an * 0.005);
                                var el = 0;
                                for (a = 0; a < s; a += 1) (r = b[a].a).p.propType && ((l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)).length ? (el += r.p.v[0] * l[0]) : (el += r.p.v[0] * l)), r.a.propType && ((l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)).length ? (el += r.a.v[0] * l[0]) : (el += r.a.v[0] * l));
                                for (k = !0, this._pathData.a.v && (w = 0.5 * C[0].an + ((j - this._pathData.f.v - 0.5 * C[0].an - 0.5 * C[C.length - 1].an) * Q) / (L - 1) + this._pathData.f.v); k; ) M + V >= w + el || !Z ? ((H = (w + el - M) / P.partialLength), (c = G.point[0] + (P.point[0] - G.point[0]) * H), (d = G.point[1] + (P.point[1] - G.point[1]) * H), S.translate(-T[0] * C[D].an * 0.005, -(0.01 * (T[1] * z))), (k = !1)) : Z && ((M += P.partialLength), (U += 1) >= Z.length && ((U = 0), F[(B += 1)] ? (Z = F[B].points) : Y.v.c ? ((U = 0), (Z = F[(B = 0)].points)) : ((M -= P.partialLength), (Z = null))), Z && ((G = P), (V = (P = Z[U]).partialLength)));
                                (u = C[D].an / 2 - C[D].add), S.translate(-u, 0, 0);
                            } else (u = C[D].an / 2 - C[D].add), S.translate(-u, 0, 0), S.translate(-T[0] * C[D].an * 0.005, -T[1] * z * 0.01, 0);
                            for (a = 0; a < s; a += 1) (r = b[a].a).t.propType && ((l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)), (0 !== R || 0 !== e.j) && (this._hasMaskedPath ? (l.length ? (w += r.t.v * l[0]) : (w += r.t.v * l)) : l.length ? (R += r.t.v * l[0]) : (R += r.t.v * l)));
                            for (e.strokeWidthAnim && (h = e.sw || 0), e.strokeColorAnim && (_ = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (p = [e.fc[0], e.fc[1], e.fc[2]]), a = 0; a < s; a += 1) (r = b[a].a).a.propType && ((l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)).length ? S.translate(-r.a.v[0] * l[0], -r.a.v[1] * l[1], r.a.v[2] * l[2]) : S.translate(-r.a.v[0] * l, -r.a.v[1] * l, r.a.v[2] * l));
                            for (a = 0; a < s; a += 1) (r = b[a].a).s.propType && ((l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)).length ? S.scale(1 + (r.s.v[0] - 1) * l[0], 1 + (r.s.v[1] - 1) * l[1], 1) : S.scale(1 + (r.s.v[0] - 1) * l, 1 + (r.s.v[1] - 1) * l, 1));
                            for (a = 0; a < s; a += 1) {
                                if (((r = b[a].a), (l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)), r.sk.propType && (l.length ? S.skewFromAxis(-r.sk.v * l[0], r.sa.v * l[1]) : S.skewFromAxis(-r.sk.v * l, r.sa.v * l)), r.r.propType && (l.length ? S.rotateZ(-r.r.v * l[2]) : S.rotateZ(-r.r.v * l)), r.ry.propType && (l.length ? S.rotateY(r.ry.v * l[1]) : S.rotateY(r.ry.v * l)), r.rx.propType && (l.length ? S.rotateX(r.rx.v * l[0]) : S.rotateX(r.rx.v * l)), r.o.propType && (l.length ? (f += (r.o.v * l[0] - f) * l[0]) : (f += (r.o.v * l - f) * l)), e.strokeWidthAnim && r.sw.propType && (l.length ? (h += r.sw.v * l[0]) : (h += r.sw.v * l)), e.strokeColorAnim && r.sc.propType)) for (m = 0; m < 3; m += 1) l.length ? (_[m] += (r.sc.v[m] - _[m]) * l[0]) : (_[m] += (r.sc.v[m] - _[m]) * l);
                                if (e.fillColorAnim && e.fc) {
                                    if (r.fc.propType) for (m = 0; m < 3; m += 1) l.length ? (p[m] += (r.fc.v[m] - p[m]) * l[0]) : (p[m] += (r.fc.v[m] - p[m]) * l);
                                    r.fh.propType && (p = l.length ? addHueToRGB(p, r.fh.v * l[0]) : addHueToRGB(p, r.fh.v * l)), r.fs.propType && (p = l.length ? addSaturationToRGB(p, r.fs.v * l[0]) : addSaturationToRGB(p, r.fs.v * l)), r.fb.propType && (p = l.length ? addBrightnessToRGB(p, r.fb.v * l[0]) : addBrightnessToRGB(p, r.fb.v * l));
                                }
                            }
                            for (a = 0; a < s; a += 1) (r = b[a].a).p.propType && ((l = (i = b[a].s).getMult(C[D].anIndexes[a], y.a[a].s.totalChars)), this._hasMaskedPath ? (l.length ? S.translate(0, r.p.v[1] * l[0], -r.p.v[2] * l[1]) : S.translate(0, r.p.v[1] * l, -r.p.v[2] * l)) : l.length ? S.translate(r.p.v[0] * l[0], r.p.v[1] * l[1], -r.p.v[2] * l[2]) : S.translate(r.p.v[0] * l, r.p.v[1] * l, -r.p.v[2] * l));
                            if ((e.strokeWidthAnim && (g = h < 0 ? 0 : h), e.strokeColorAnim && (E = 'rgb(' + Math.round(255 * _[0]) + ',' + Math.round(255 * _[1]) + ',' + Math.round(255 * _[2]) + ')'), e.fillColorAnim && e.fc && (v = 'rgb(' + Math.round(255 * p[0]) + ',' + Math.round(255 * p[1]) + ',' + Math.round(255 * p[2]) + ')'), this._hasMaskedPath)) {
                                if ((S.translate(0, -e.ls), S.translate(0, T[1] * z * 0.01 + O, 0), this._pathData.p.v)) {
                                    var eu = (180 * Math.atan((P.point[1] - G.point[1]) / (P.point[0] - G.point[0]))) / Math.PI;
                                    P.point[0] < G.point[0] && (eu += 180), S.rotate((-eu * Math.PI) / 180);
                                }
                                S.translate(c, d, 0), (w -= T[0] * C[D].an * 0.005), C[D + 1] && Q !== C[D + 1].ind && (w += C[D].an / 2 + 0.001 * e.tr * e.finalSize);
                            } else {
                                switch ((S.translate(R, O, 0), e.ps && S.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j)) {
                                    case 1:
                                        S.translate(C[D].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[D].line]), 0, 0);
                                        break;
                                    case 2:
                                        S.translate(C[D].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[C[D].line]) / 2, 0, 0);
                                }
                                S.translate(0, -e.ls), S.translate(u, 0, 0), S.translate(T[0] * C[D].an * 0.005, T[1] * z * 0.01, 0), (R += C[D].l + 0.001 * e.tr * e.finalSize);
                            }
                            'html' === A ? (et = S.toCSS()) : 'svg' === A ? (et = S.to2dCSS()) : (en = [S.props[0], S.props[1], S.props[2], S.props[3], S.props[4], S.props[5], S.props[6], S.props[7], S.props[8], S.props[9], S.props[10], S.props[11], S.props[12], S.props[13], S.props[14], S.props[15]]), (I = f);
                        }
                        N <= D ? ((o = new LetterProps(I, g, E, v, et, en)), this.renderedLetters.push(o), (N += 1), (this.lettersChangedFlag = !0)) : ((o = this.renderedLetters[D]), (this.lettersChangedFlag = o.update(I, g, E, v, et, en) || this.lettersChangedFlag));
                    }
                }
            }),
            (TextAnimatorProperty.prototype.getValue = function () {
                if (this._elem.globalData.frameId !== this._frameId) (this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties();
            }),
            (TextAnimatorProperty.prototype.mHelper = new Matrix()),
            (TextAnimatorProperty.prototype.defaultPropsArray = []),
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            (ITextElement.prototype.initElement = function (e, n, r) {
                (this.lettersChangedFlag = !0), this.initFrame(), this.initBaseData(e, n, r), (this.textProperty = new TextProperty(this, e.t, this.dynamicProperties)), (this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this)), this.initTransform(e, n, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
            }),
            (ITextElement.prototype.prepareFrame = function (e) {
                (this._mdf = !1), this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
            }),
            (ITextElement.prototype.createPathShape = function (e, n) {
                var r,
                    i,
                    a = n.length,
                    s = '';
                for (r = 0; r < a; r += 1) 'sh' === n[r].ty && (s += buildShapeString((i = n[r].ks.k), i.i.length, !0, e));
                return s;
            }),
            (ITextElement.prototype.updateDocumentData = function (e, n) {
                this.textProperty.updateDocumentData(e, n);
            }),
            (ITextElement.prototype.canResizeFont = function (e) {
                this.textProperty.canResizeFont(e);
            }),
            (ITextElement.prototype.setMinimumFontSize = function (e) {
                this.textProperty.setMinimumFontSize(e);
            }),
            (ITextElement.prototype.applyTextPropertiesToMatrix = function (e, n, r, i, a) {
                switch ((e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0), n.translate(0, -e.ls, 0), e.j)) {
                    case 1:
                        n.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
                        break;
                    case 2:
                        n.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0);
                }
                n.translate(i, a, 0);
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
        function SVGTextLottieElement(e, n, r) {
            (this.textSpans = []), (this.renderType = 'svg'), this.initElement(e, n, r);
        }
        function ISolidElement(e, n, r) {
            this.initElement(e, n, r);
        }
        function NullElement(e, n, r) {
            this.initFrame(), this.initBaseData(e, n, r), this.initFrame(), this.initTransform(e, n, r), this.initHierarchy();
        }
        function SVGRendererBase() {}
        function ICompElement() {}
        function SVGCompElement(e, n, r) {
            (this.layers = e.layers), (this.supports3d = !0), (this.completeLayers = !1), (this.pendingElements = []), (this.elements = this.layers ? createSizedArray(this.layers.length) : []), this.initElement(e, n, r), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, n.frameRate, this) : { _placeholder: !0 });
        }
        function SVGRenderer(e, n) {
            (this.animationItem = e), (this.layers = null), (this.renderedFrame = -1), (this.svgElement = createNS('svg'));
            var r = '';
            if (n && n.title) {
                var i = createNS('title'),
                    a = createElementID();
                i.setAttribute('id', a), (i.textContent = n.title), this.svgElement.appendChild(i), (r += a);
            }
            if (n && n.description) {
                var s = createNS('desc'),
                    o = createElementID();
                s.setAttribute('id', o), (s.textContent = n.description), this.svgElement.appendChild(s), (r += ' ' + o);
            }
            r && this.svgElement.setAttribute('aria-labelledby', r);
            var l = createNS('defs');
            this.svgElement.appendChild(l);
            var u = createNS('g');
            this.svgElement.appendChild(u),
                (this.layerElement = u),
                (this.renderConfig = {
                    preserveAspectRatio: (n && n.preserveAspectRatio) || 'xMidYMid meet',
                    imagePreserveAspectRatio: (n && n.imagePreserveAspectRatio) || 'xMidYMid slice',
                    contentVisibility: (n && n.contentVisibility) || 'visible',
                    progressiveLoad: (n && n.progressiveLoad) || !1,
                    hideOnTransparent: !(n && !1 === n.hideOnTransparent),
                    viewBoxOnly: (n && n.viewBoxOnly) || !1,
                    viewBoxSize: (n && n.viewBoxSize) || !1,
                    className: (n && n.className) || '',
                    id: (n && n.id) || '',
                    focusable: n && n.focusable,
                    filterSize: {
                        width: (n && n.filterSize && n.filterSize.width) || '100%',
                        height: (n && n.filterSize && n.filterSize.height) || '100%',
                        x: (n && n.filterSize && n.filterSize.x) || '0%',
                        y: (n && n.filterSize && n.filterSize.y) || '0%'
                    },
                    width: n && n.width,
                    height: n && n.height,
                    runExpressions: !n || void 0 === n.runExpressions || n.runExpressions
                }),
                (this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: l,
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
                for (var n = 0, r = e.length, i = [], a = ''; n < r; ) '\r' === e[n] || '\x03' === e[n] ? (i.push(a), (a = '')) : (a += e[n]), (n += 1);
                return i.push(a), i;
            }),
            (SVGTextLottieElement.prototype.buildShapeData = function (e, n) {
                if (e.shapes && e.shapes.length) {
                    var r = e.shapes[0];
                    if (r.it) {
                        var i = r.it[r.it.length - 1];
                        i.s && ((i.s.k[0] = n), (i.s.k[1] = n));
                    }
                }
                return e;
            }),
            (SVGTextLottieElement.prototype.buildNewText = function () {
                this.addDynamicProperty(this);
                var e = this.textProperty.currentData;
                (this.renderedLetters = createSizedArray(e ? e.l.length : 0)), e.fc ? this.layerElement.setAttribute('fill', this.buildColor(e.fc)) : this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)'), e.sc && (this.layerElement.setAttribute('stroke', this.buildColor(e.sc)), this.layerElement.setAttribute('stroke-width', e.sw)), this.layerElement.setAttribute('font-size', e.finalSize);
                var n = this.globalData.fontManager.getFontByName(e.f);
                if (n.fClass) this.layerElement.setAttribute('class', n.fClass);
                else {
                    this.layerElement.setAttribute('font-family', n.fFamily);
                    var r = e.fWeight,
                        i = e.fStyle;
                    this.layerElement.setAttribute('font-style', i), this.layerElement.setAttribute('font-weight', r);
                }
                this.layerElement.setAttribute('aria-label', e.t);
                var a = e.l || [],
                    s = !!this.globalData.fontManager.chars;
                g = a.length;
                var o = this.mHelper,
                    l = '',
                    u = this.data.singleShape,
                    c = 0,
                    d = 0,
                    f = !0,
                    _ = 0.001 * e.tr * e.finalSize;
                if (!u || s || e.sz) {
                    var h = this.textSpans.length;
                    for (m = 0; m < g; m += 1) {
                        if (
                            (!this.textSpans[m] &&
                                (this.textSpans[m] = {
                                    span: null,
                                    childSpan: null,
                                    glyph: null
                                }),
                            !s || !u || 0 === m)
                        ) {
                            if (((E = h > m ? this.textSpans[m].span : createNS(s ? 'g' : 'text')), h <= m)) {
                                if ((E.setAttribute('stroke-linecap', 'butt'), E.setAttribute('stroke-linejoin', 'round'), E.setAttribute('stroke-miterlimit', '4'), (this.textSpans[m].span = E), s)) {
                                    var p = createNS('g');
                                    E.appendChild(p), (this.textSpans[m].childSpan = p);
                                }
                                (this.textSpans[m].span = E), this.layerElement.appendChild(E);
                            }
                            E.style.display = 'inherit';
                        }
                        if ((o.reset(), u && (a[m].n && ((c = -_), (d += e.yOffset + (f ? 1 : 0)), (f = !1)), this.applyTextPropertiesToMatrix(e, o, a[m].line, c, d), (c += (a[m].l || 0) + _)), s)) {
                            if (1 === (v = this.globalData.fontManager.getCharData(e.finalText[m], n.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)).t) I = new SVGCompElement(v.data, this.globalData, this);
                            else {
                                var m,
                                    g,
                                    E,
                                    v,
                                    I,
                                    T = emptyShapeData;
                                v.data && v.data.shapes && (T = this.buildShapeData(v.data, e.finalSize)), (I = new SVGShapeElement(T, this.globalData, this));
                            }
                            if (this.textSpans[m].glyph) {
                                var b = this.textSpans[m].glyph;
                                this.textSpans[m].childSpan.removeChild(b.layerElement), b.destroy();
                            }
                            (this.textSpans[m].glyph = I), (I._debug = !0), I.prepareFrame(0), I.renderFrame(), this.textSpans[m].childSpan.appendChild(I.layerElement), 1 === v.t && this.textSpans[m].childSpan.setAttribute('transform', 'scale(' + e.finalSize / 100 + ',' + e.finalSize / 100 + ')');
                        } else u && E.setAttribute('transform', 'translate(' + o.props[12] + ',' + o.props[13] + ')'), (E.textContent = a[m].val), E.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
                    }
                    u && E && E.setAttribute('d', l);
                } else {
                    var y = this.textContainer,
                        S = 'start';
                    switch (e.j) {
                        case 1:
                            S = 'end';
                            break;
                        case 2:
                            S = 'middle';
                            break;
                        default:
                            S = 'start';
                    }
                    y.setAttribute('text-anchor', S), y.setAttribute('letter-spacing', _);
                    var A = this.buildTextContents(e.finalText);
                    for (m = 0, g = A.length, d = e.ps ? e.ps[1] + e.ascent : 0; m < g; m += 1)
                        ((E = this.textSpans[m].span || createNS('tspan')).textContent = A[m]),
                            E.setAttribute('x', 0),
                            E.setAttribute('y', d),
                            (E.style.display = 'inherit'),
                            y.appendChild(E),
                            !this.textSpans[m] &&
                                (this.textSpans[m] = {
                                    span: null,
                                    glyph: null
                                }),
                            (this.textSpans[m].span = E),
                            (d += e.finalLineHeight);
                    this.layerElement.appendChild(y);
                }
                for (; m < this.textSpans.length; ) (this.textSpans[m].span.style.display = 'none'), (m += 1);
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
                    n,
                    r = this.textSpans.length;
                for (e = 0, this.renderedFrame = this.comp.renderedFrame; e < r; e += 1) (n = this.textSpans[e].glyph) && (n.prepareFrame(this.comp.renderedFrame - this.data.st), n._mdf && (this._mdf = !0));
            }),
            (SVGTextLottieElement.prototype.renderInnerContent = function () {
                if ((this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag))) {
                    this._sizeChanged = !0;
                    var e,
                        n,
                        r,
                        i,
                        a,
                        s = this.textAnimator.renderedLetters,
                        o = this.textProperty.currentData.l;
                    for (e = 0, n = o.length; e < n; e += 1) !o[e].n && ((r = s[e]), (i = this.textSpans[e].span), (a = this.textSpans[e].glyph) && a.renderFrame(), r._mdf.m && i.setAttribute('transform', r.m), r._mdf.o && i.setAttribute('opacity', r.o), r._mdf.sw && i.setAttribute('stroke-width', r.sw), r._mdf.sc && i.setAttribute('stroke', r.sc), r._mdf.fc && i.setAttribute('fill', r.fc));
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
                this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg'), this.svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink'), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize) : this.svgElement.setAttribute('viewBox', '0 0 ' + e.w + ' ' + e.h), !this.renderConfig.viewBoxOnly && (this.svgElement.setAttribute('width', e.w), this.svgElement.setAttribute('height', e.h), (this.svgElement.style.width = '100%'), (this.svgElement.style.height = '100%'), (this.svgElement.style.transform = 'translate3d(0,0,0)'), (this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility)), this.renderConfig.width && this.svgElement.setAttribute('width', this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute('height', this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute('class', this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute('id', this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute('focusable', this.renderConfig.focusable), this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                var n = this.globalData.defs;
                this.setupGlobalData(e, n), (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad), (this.data = e);
                var r = createNS('clipPath'),
                    i = createNS('rect');
                i.setAttribute('width', e.w), i.setAttribute('height', e.h), i.setAttribute('x', 0), i.setAttribute('y', 0);
                var a = createElementID();
                r.setAttribute('id', a), r.appendChild(i), this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + a + ')'), n.appendChild(r), (this.layers = e.layers), (this.elements = createSizedArray(e.layers.length));
            }),
            (SVGRendererBase.prototype.destroy = function () {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), (this.layerElement = null), (this.globalData.defs = null);
                var e,
                    n = this.layers ? this.layers.length : 0;
                for (e = 0; e < n; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (SVGRendererBase.prototype.updateContainerSize = function () {}),
            (SVGRendererBase.prototype.findIndexByInd = function (e) {
                var n = 0,
                    r = this.layers.length;
                for (n = 0; n < r; n += 1) if (this.layers[n].ind === e) return n;
                return -1;
            }),
            (SVGRendererBase.prototype.buildItem = function (e) {
                var n = this.elements;
                if (!n[e] && 99 !== this.layers[e].ty) {
                    n[e] = !0;
                    var r = this.createItem(this.layers[e]);
                    if (((n[e] = r), getExpressionsPlugin() && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt)) {
                        var i = 'tp' in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
                        if (-1 === i) return;
                        if (this.elements[i] && !0 !== this.elements[i]) {
                            var a = n[i].getMatte(this.layers[e].tt);
                            r.setMatte(a);
                        } else this.buildItem(i), this.addPendingElement(r);
                    }
                }
            }),
            (SVGRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) {
                    var e = this.pendingElements.pop();
                    if ((e.checkParenting(), e.data.tt)) {
                        for (var n = 0, r = this.elements.length; n < r; ) {
                            if (this.elements[n] === e) {
                                var i = 'tp' in e.data ? this.findIndexByInd(e.data.tp) : n - 1,
                                    a = this.elements[i].getMatte(this.layers[n].tt);
                                e.setMatte(a);
                                break;
                            }
                            n += 1;
                        }
                    }
                }
            }),
            (SVGRendererBase.prototype.renderFrame = function (e) {
                if (this.renderedFrame !== e && !this.destroyed) {
                    null === e ? (e = this.renderedFrame) : (this.renderedFrame = e), (this.globalData.frameNum = e), (this.globalData.frameId += 1), (this.globalData.projectInterface.currentFrame = e), (this.globalData._mdf = !1);
                    var n,
                        r = this.layers.length;
                    for (!this.completeLayers && this.checkLayers(e), n = r - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(e - this.layers[n].st);
                    if (this.globalData._mdf) for (n = 0; n < r; n += 1) (this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
                }
            }),
            (SVGRendererBase.prototype.appendElementInPos = function (e, n) {
                var r,
                    i = e.getBaseElement();
                if (!!i) {
                    for (var a = 0; a < n; ) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (r = this.elements[a].getBaseElement()), (a += 1);
                    r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i);
                }
            }),
            (SVGRendererBase.prototype.hide = function () {
                this.layerElement.style.display = 'none';
            }),
            (SVGRendererBase.prototype.show = function () {
                this.layerElement.style.display = 'block';
            }),
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
            (ICompElement.prototype.initElement = function (e, n, r) {
                this.initFrame(), this.initBaseData(e, n, r), this.initTransform(e, n, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !n.progressiveLoad) && this.buildAllItems(), this.hide();
            }),
            (ICompElement.prototype.prepareFrame = function (e) {
                if (((this._mdf = !1), this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), !!this.isInRange || !!this.data.xt)) {
                    if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
                    else {
                        var n,
                            r = this.tm.v;
                        r === this.data.op && (r = this.data.op - 1), (this.renderedFrame = r);
                    }
                    var i = this.elements.length;
                    for (!this.completeLayers && this.checkLayers(this.renderedFrame), n = i - 1; n >= 0; n -= 1) (this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st), this.elements[n]._mdf && (this._mdf = !0));
                }
            }),
            (ICompElement.prototype.renderInnerContent = function () {
                var e,
                    n = this.layers.length;
                for (e = 0; e < n; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }),
            (ICompElement.prototype.setElements = function (e) {
                this.elements = e;
            }),
            (ICompElement.prototype.getElements = function () {
                return this.elements;
            }),
            (ICompElement.prototype.destroyElements = function () {
                var e,
                    n = this.layers.length;
                for (e = 0; e < n; e += 1) this.elements[e] && this.elements[e].destroy();
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
                    var n,
                        r = e.length,
                        i = '_';
                    for (n = 0; n < r; n += 1) i += e[n].transform.key + '_';
                    var a = this.sequences[i];
                    return (
                        !a &&
                            ((a = {
                                transforms: [].concat(e),
                                finalTransform: new Matrix(),
                                _mdf: !1
                            }),
                            (this.sequences[i] = a),
                            this.sequenceList.push(a)),
                        a
                    );
                },
                processSequence: function (e, n) {
                    for (var r = 0, i = e.transforms.length, a = n; r < i && !n; ) {
                        if (e.transforms[r].transform.mProps._mdf) {
                            a = !0;
                            break;
                        }
                        r += 1;
                    }
                    if (a) for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
                    e._mdf = a;
                },
                processSequences: function (e) {
                    var n,
                        r = this.sequenceList.length;
                    for (n = 0; n < r; n += 1) this.processSequence(this.sequenceList[n], e);
                },
                getNewKey: function () {
                    return (this.transform_key_count += 1), '_' + this.transform_key_count;
                }
            });
        var lumaLoader = function () {
            var e = '__lottie_element_luma_buffer',
                n = null,
                r = null,
                i = null;
            function a() {
                var n = createNS('svg'),
                    r = createNS('filter'),
                    i = createNS('feColorMatrix');
                return r.setAttribute('id', e), i.setAttribute('type', 'matrix'), i.setAttribute('color-interpolation-filters', 'sRGB'), i.setAttribute('values', '0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0'), r.appendChild(i), n.appendChild(r), n.setAttribute('id', e + '_svg'), featureSupport.svgLumaHidden && (n.style.display = 'none'), n;
            }
            function s() {
                !n && ((i = a()), document.body.appendChild(i), ((r = (n = createTag('canvas')).getContext('2d')).filter = 'url(#' + e + ')'), (r.fillStyle = 'rgba(0,0,0,0)'), r.fillRect(0, 0, 1, 1));
            }
            function o(i) {
                return !n && s(), (n.width = i.width), (n.height = i.height), (r.filter = 'url(#' + e + ')'), n;
            }
            return {
                load: s,
                get: o
            };
        };
        function createCanvas(e, n) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, n);
            var r = createTag('canvas');
            return (r.width = e), (r.height = n), r;
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
            var n,
                r,
                i = e.data.ef ? e.data.ef.length : 0;
            for (n = 0, this.filters = []; n < i; n += 1) {
                r = null;
                var a = e.data.ef[n].ty;
                registeredEffects[a] && (r = new registeredEffects[a].effect(e.effectsManager.effectElements[n], e)), r && this.filters.push(r);
            }
            this.filters.length && e.addRenderableComponent(this);
        }
        function registerEffect(e, n) {
            registeredEffects[e] = { effect: n };
        }
        function CVMaskElement(e, n) {
            (this.data = e), (this.element = n), (this.masksProperties = this.data.masksProperties || []), (this.viewData = createSizedArray(this.masksProperties.length));
            var r,
                i = this.masksProperties.length,
                a = !1;
            for (r = 0; r < i; r += 1) 'n' !== this.masksProperties[r].mode && (a = !0), (this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3));
            (this.hasMasks = a), a && this.element.addRenderableComponent(this);
        }
        function CVBaseElement() {}
        (CVEffects.prototype.renderFrame = function (e) {
            var n,
                r = this.filters.length;
            for (n = 0; n < r; n += 1) this.filters[n].renderFrame(e);
        }),
            (CVEffects.prototype.getEffects = function (e) {
                var n,
                    r = this.filters.length,
                    i = [];
                for (n = 0; n < r; n += 1) this.filters[n].type === e && i.push(this.filters[n]);
                return i;
            }),
            (CVMaskElement.prototype.renderFrame = function () {
                if (!!this.hasMasks) {
                    var e = this.element.finalTransform.mat,
                        n = this.element.canvasContext,
                        r = this.masksProperties.length;
                    for (n.beginPath(), i = 0; i < r; i += 1)
                        if ('n' !== this.masksProperties[i].mode) {
                            this.masksProperties[i].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compSize.w, 0), n.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), n.lineTo(0, this.element.globalData.compSize.h), n.lineTo(0, 0)), (o = this.viewData[i].v), (a = e.applyToPointArray(o.v[0][0], o.v[0][1], 0)), n.moveTo(a[0], a[1]);
                            var i,
                                a,
                                s,
                                o,
                                l,
                                u = o._length;
                            for (l = 1; l < u; l += 1) (s = e.applyToTriplePoints(o.o[l - 1], o.i[l], o.v[l])), n.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                            (s = e.applyToTriplePoints(o.o[l - 1], o.i[0], o.v[0])), n.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                        }
                    this.element.globalData.renderer.save(!0), n.clip();
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
        function CVShapeData(e, n, r, i) {
            (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
            var a,
                s,
                o = 4;
            'rc' === n.ty ? (o = 5) : 'el' === n.ty ? (o = 6) : 'sr' === n.ty && (o = 7), (this.sh = ShapePropertyFactory.getShapeProp(e, n, o, e));
            var l = r.length;
            for (a = 0; a < l; a += 1)
                !r[a].closed &&
                    ((s = {
                        transforms: i.addTransformSequence(r[a].transforms),
                        trNodes: []
                    }),
                    this.styledShapes.push(s),
                    r[a].elements.push(s));
        }
        function CVShapeElement(e, n, r) {
            (this.shapes = []), (this.shapesData = e.shapes), (this.stylesList = []), (this.itemsData = []), (this.prevViewData = []), (this.shapeModifiers = []), (this.processedElements = []), (this.transformsManager = new ShapeTransformManager()), this.initElement(e, n, r);
        }
        function CVTextElement(e, n, r) {
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
                this.initElement(e, n, r);
        }
        function CVImageElement(e, n, r) {
            (this.assetData = n.getAssetData(e.refId)), (this.img = n.imageLoader.getAsset(this.assetData)), this.initElement(e, n, r);
        }
        function CVSolidElement(e, n, r) {
            this.initElement(e, n, r);
        }
        function CanvasRendererBase() {}
        function CanvasContext() {
            (this.opacity = -1), (this.transform = createTypedArray('float32', 16)), (this.fillStyle = ''), (this.strokeStyle = ''), (this.lineWidth = ''), (this.lineCap = ''), (this.lineJoin = ''), (this.miterLimit = ''), (this.id = Math.random());
        }
        function CVContextData() {
            (this.stack = []), (this.cArrPos = 0), (this.cTr = new Matrix());
            var e,
                n = 15;
            for (e = 0; e < n; e += 1) {
                var r = new CanvasContext();
                this.stack[e] = r;
            }
            (this._length = n), (this.nativeContext = null), (this.transformMat = new Matrix()), (this.currentOpacity = 1), (this.currentFillStyle = ''), (this.appliedFillStyle = ''), (this.currentStrokeStyle = ''), (this.appliedStrokeStyle = ''), (this.currentLineWidth = ''), (this.appliedLineWidth = ''), (this.currentLineCap = ''), (this.appliedLineCap = ''), (this.currentLineJoin = ''), (this.appliedLineJoin = ''), (this.appliedMiterLimit = ''), (this.currentMiterLimit = '');
        }
        function CVCompElement(e, n, r) {
            (this.completeLayers = !1), (this.layers = e.layers), (this.pendingElements = []), (this.elements = createSizedArray(this.layers.length)), this.initElement(e, n, r), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, n.frameRate, this) : { _placeholder: !0 });
        }
        function CanvasRenderer(e, n) {
            (this.animationItem = e),
                (this.renderConfig = {
                    clearCanvas: !n || void 0 === n.clearCanvas || n.clearCanvas,
                    context: (n && n.context) || null,
                    progressiveLoad: (n && n.progressiveLoad) || !1,
                    preserveAspectRatio: (n && n.preserveAspectRatio) || 'xMidYMid meet',
                    imagePreserveAspectRatio: (n && n.imagePreserveAspectRatio) || 'xMidYMid slice',
                    contentVisibility: (n && n.contentVisibility) || 'visible',
                    className: (n && n.className) || '',
                    id: (n && n.id) || '',
                    runExpressions: !n || void 0 === n.runExpressions || n.runExpressions
                }),
                (this.renderConfig.dpr = (n && n.dpr) || 1),
                this.animationItem.wrapper && (this.renderConfig.dpr = (n && n.dpr) || window.devicePixelRatio || 1),
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
        function HSolidElement(e, n, r) {
            this.initElement(e, n, r);
        }
        function HShapeElement(e, n, r) {
            (this.shapes = []),
                (this.shapesData = e.shapes),
                (this.stylesList = []),
                (this.shapeModifiers = []),
                (this.itemsData = []),
                (this.processedElements = []),
                (this.animatedContents = []),
                (this.shapesContainer = createNS('g')),
                this.initElement(e, n, r),
                (this.prevViewData = []),
                (this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                });
        }
        function HTextElement(e, n, r) {
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
                this.initElement(e, n, r);
        }
        function HCameraElement(e, n, r) {
            this.initFrame(), this.initBaseData(e, n, r), this.initHierarchy();
            var i = PropertyFactory.getProp;
            if (((this.pe = i(this, e.pe, 0, 0, this)), e.ks.p.s ? ((this.px = i(this, e.ks.p.x, 1, 0, this)), (this.py = i(this, e.ks.p.y, 1, 0, this)), (this.pz = i(this, e.ks.p.z, 1, 0, this))) : (this.p = i(this, e.ks.p, 1, 0, this)), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to)) {
                var a,
                    s = e.ks.or.k.length;
                for (a = 0; a < s; a += 1) (e.ks.or.k[a].to = null), (e.ks.or.k[a].ti = null);
            }
            (this.or = i(this, e.ks.or, 1, degToRads, this)), (this.or.sh = !0), (this.rx = i(this, e.ks.rx, 0, degToRads, this)), (this.ry = i(this, e.ks.ry, 0, degToRads, this)), (this.rz = i(this, e.ks.rz, 0, degToRads, this)), (this.mat = new Matrix()), (this._prevMat = new Matrix()), (this._isFirstFrame = !0), (this.finalTransform = { mProp: this });
        }
        function HImageElement(e, n, r) {
            (this.assetData = n.getAssetData(e.refId)), this.initElement(e, n, r);
        }
        function HybridRendererBase(e, n) {
            (this.animationItem = e),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                    className: (n && n.className) || '',
                    imagePreserveAspectRatio: (n && n.imagePreserveAspectRatio) || 'xMidYMid slice',
                    hideOnTransparent: !(n && !1 === n.hideOnTransparent),
                    filterSize: {
                        width: (n && n.filterSize && n.filterSize.width) || '400%',
                        height: (n && n.filterSize && n.filterSize.height) || '400%',
                        x: (n && n.filterSize && n.filterSize.x) || '-100%',
                        y: (n && n.filterSize && n.filterSize.y) || '-100%'
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
        function HCompElement(e, n, r) {
            (this.layers = e.layers), (this.supports3d = !e.hasMask), (this.completeLayers = !1), (this.pendingElements = []), (this.elements = this.layers ? createSizedArray(this.layers.length) : []), this.initElement(e, n, r), (this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, n.frameRate, this) : { _placeholder: !0 });
        }
        function HybridRenderer(e, n) {
            (this.animationItem = e),
                (this.layers = null),
                (this.renderedFrame = -1),
                (this.renderConfig = {
                    className: (n && n.className) || '',
                    imagePreserveAspectRatio: (n && n.imagePreserveAspectRatio) || 'xMidYMid slice',
                    hideOnTransparent: !(n && !1 === n.hideOnTransparent),
                    filterSize: {
                        width: (n && n.filterSize && n.filterSize.width) || '400%',
                        height: (n && n.filterSize && n.filterSize.height) || '400%',
                        x: (n && n.filterSize && n.filterSize.x) || '-100%',
                        y: (n && n.filterSize && n.filterSize.y) || '-100%'
                    },
                    runExpressions: !n || void 0 === n.runExpressions || n.runExpressions
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
                        n = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(n);
                    var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
                    this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
                }
                (this.canvasContext = this.globalData.canvasContext), (this.transformCanvas = this.globalData.transformCanvas), (this.renderableEffectsManager = new CVEffects(this)), this.searchEffectTransforms();
            },
            createContent: function () {},
            setBlendMode: function () {
                var e = this.globalData;
                if (e.blendMode !== this.data.bm) {
                    e.blendMode = this.data.bm;
                    var n = getBlendMode(this.data.bm);
                    e.canvasContext.globalCompositeOperation = n;
                }
            },
            createRenderableComponents: function () {
                (this.maskManager = new CVMaskElement(this.data, this)), (this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT));
            },
            hideElement: function () {
                !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
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
                        n = e.getContext('2d');
                    if ((this.clearCanvas(n), n.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById('tp' in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy)) {
                        var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                        r.getContext('2d').drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0);
                    }
                    (this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt]), this.canvasContext.drawImage(e, 0, 0), (this.canvasContext.globalCompositeOperation = 'destination-over'), this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), (this.canvasContext.globalCompositeOperation = 'source-over');
                }
            },
            renderFrame: function (e) {
                if (!this.hidden && !this.data.hd && (1 !== this.data.td || !!e)) {
                    this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
                    var n = 0 === this.data.ty;
                    this.prepareLayer(), this.globalData.renderer.save(n), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(n), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
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
            (CVShapeElement.prototype.createStyleElement = function (e, n) {
                var r = {
                        data: e,
                        type: e.ty,
                        preTransforms: this.transformsManager.addTransformSequence(n),
                        transforms: [],
                        elements: [],
                        closed: !0 === e.hd
                    },
                    i = {};
                if (('fl' === e.ty || 'st' === e.ty ? ((i.c = PropertyFactory.getProp(this, e.c, 1, 255, this)), !i.c.k && (r.co = 'rgb(' + bmFloor(i.c.v[0]) + ',' + bmFloor(i.c.v[1]) + ',' + bmFloor(i.c.v[2]) + ')')) : ('gf' === e.ty || 'gs' === e.ty) && ((i.s = PropertyFactory.getProp(this, e.s, 1, null, this)), (i.e = PropertyFactory.getProp(this, e.e, 1, null, this)), (i.h = PropertyFactory.getProp(this, e.h || { k: 0 }, 0, 0.01, this)), (i.a = PropertyFactory.getProp(this, e.a || { k: 0 }, 0, degToRads, this)), (i.g = new GradientProperty(this, e.g, this))), (i.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this)), 'st' === e.ty || 'gs' === e.ty)) {
                    if (((r.lc = lineCapEnum[e.lc || 2]), (r.lj = lineJoinEnum[e.lj || 2]), 1 == e.lj && (r.ml = e.ml), (i.w = PropertyFactory.getProp(this, e.w, 0, null, this)), !i.w.k && (r.wi = i.w.v), e.d)) {
                        var a = new DashProperty(this, e.d, 'canvas', this);
                        (i.d = a), !i.d.k && ((r.da = i.d.dashArray), (r.do = i.d.dashoffset[0]));
                    }
                } else r.r = 2 === e.r ? 'evenodd' : 'nonzero';
                return this.stylesList.push(r), (i.style = r), i;
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
                var n = new CVShapeData(this, e, this.stylesList, this.transformsManager);
                return this.shapes.push(n), this.addShapeToModifiers(n), n;
            }),
            (CVShapeElement.prototype.reloadShapes = function () {
                this._isFirstFrame = !0;
                var e,
                    n = this.itemsData.length;
                for (e = 0; e < n; e += 1) this.prevViewData[e] = this.itemsData[e];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), n = this.dynamicProperties.length, e = 0; e < n; e += 1) this.dynamicProperties[e].getValue();
                this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
            }),
            (CVShapeElement.prototype.addTransformToStyleList = function (e) {
                var n,
                    r = this.stylesList.length;
                for (n = 0; n < r; n += 1) !this.stylesList[n].closed && this.stylesList[n].transforms.push(e);
            }),
            (CVShapeElement.prototype.removeTransformFromStyleList = function () {
                var e,
                    n = this.stylesList.length;
                for (e = 0; e < n; e += 1) !this.stylesList[e].closed && this.stylesList[e].transforms.pop();
            }),
            (CVShapeElement.prototype.closeStyles = function (e) {
                var n,
                    r = e.length;
                for (n = 0; n < r; n += 1) e[n].closed = !0;
            }),
            (CVShapeElement.prototype.searchShapes = function (e, n, r, i, a) {
                var s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    f = e.length - 1,
                    _ = [],
                    h = [],
                    p = [].concat(a);
                for (s = f; s >= 0; s -= 1) {
                    if (((u = this.searchProcessedElement(e[s])) ? (n[s] = r[u - 1]) : (e[s]._shouldRender = i), 'fl' === e[s].ty || 'st' === e[s].ty || 'gf' === e[s].ty || 'gs' === e[s].ty)) u ? (n[s].style.closed = !1) : (n[s] = this.createStyleElement(e[s], p)), _.push(n[s].style);
                    else if ('gr' === e[s].ty) {
                        if (u) for (o = 0, l = n[s].it.length; o < l; o += 1) n[s].prevViewData[o] = n[s].it[o];
                        else n[s] = this.createGroupElement(e[s]);
                        this.searchShapes(e[s].it, n[s].it, n[s].prevViewData, i, p);
                    } else 'tr' === e[s].ty ? (!u && ((d = this.createTransformElement(e[s])), (n[s] = d)), p.push(n[s]), this.addTransformToStyleList(n[s])) : 'sh' === e[s].ty || 'rc' === e[s].ty || 'el' === e[s].ty || 'sr' === e[s].ty ? !u && (n[s] = this.createShapeElement(e[s])) : 'tm' === e[s].ty || 'rd' === e[s].ty || 'pb' === e[s].ty || 'zz' === e[s].ty || 'op' === e[s].ty ? (u ? ((c = n[s]).closed = !1) : ((c = ShapeModifiers.getModifier(e[s].ty)).init(this, e[s]), (n[s] = c), this.shapeModifiers.push(c)), h.push(c)) : 'rp' === e[s].ty && (u ? ((c = n[s]).closed = !0) : ((c = ShapeModifiers.getModifier(e[s].ty)), (n[s] = c), c.init(this, e, s, n), this.shapeModifiers.push(c), (i = !1)), h.push(c));
                    this.addProcessedElement(e[s], s + 1);
                }
                for (this.removeTransformFromStyleList(), this.closeStyles(_), f = h.length, s = 0; s < f; s += 1) h[s].closed = !0;
            }),
            (CVShapeElement.prototype.renderInnerContent = function () {
                (this.transformHelper.opacity = 1), (this.transformHelper._opMdf = !1), this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
            }),
            (CVShapeElement.prototype.renderShapeTransform = function (e, n) {
                (e._opMdf || n.op._mdf || this._isFirstFrame) && ((n.opacity = e.opacity), (n.opacity *= n.op.v), (n._opMdf = !0));
            }),
            (CVShapeElement.prototype.drawLayer = function () {
                var e,
                    n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c = this.stylesList.length,
                    d = this.globalData.renderer,
                    f = this.globalData.canvasContext;
                for (e = 0; e < c; e += 1)
                    if (!((('st' === (l = (u = this.stylesList[e]).type) || 'gs' === l) && 0 === u.wi) || !u.data._shouldRender || 0 === u.coOp || 0 === this.globalData.currentGlobalAlpha)) {
                        for (d.save(), s = u.elements, 'st' === l || 'gs' === l ? (d.ctxStrokeStyle('st' === l ? u.co : u.grd), d.ctxLineWidth(u.wi), d.ctxLineCap(u.lc), d.ctxLineJoin(u.lj), d.ctxMiterLimit(u.ml || 0)) : d.ctxFillStyle('fl' === l ? u.co : u.grd), d.ctxOpacity(u.coOp), 'st' !== l && 'gs' !== l && f.beginPath(), d.ctxTransform(u.preTransforms.finalTransform.props), r = s.length, n = 0; n < r; n += 1) {
                            for (('st' === l || 'gs' === l) && (f.beginPath(), u.da && (f.setLineDash(u.da), (f.lineDashOffset = u.do))), a = (o = s[n].trNodes).length, i = 0; i < a; i += 1) 'm' === o[i].t ? f.moveTo(o[i].p[0], o[i].p[1]) : 'c' === o[i].t ? f.bezierCurveTo(o[i].pts[0], o[i].pts[1], o[i].pts[2], o[i].pts[3], o[i].pts[4], o[i].pts[5]) : f.closePath();
                            ('st' === l || 'gs' === l) && (d.ctxStroke(), u.da && f.setLineDash(this.dashResetter));
                        }
                        'st' !== l && 'gs' !== l && this.globalData.renderer.ctxFill(u.r), d.restore();
                    }
            }),
            (CVShapeElement.prototype.renderShape = function (e, n, r, i) {
                var a,
                    s,
                    o = n.length - 1;
                for (s = e, a = o; a >= 0; a -= 1) 'tr' === n[a].ty ? ((s = r[a].transform), this.renderShapeTransform(e, s)) : 'sh' === n[a].ty || 'el' === n[a].ty || 'rc' === n[a].ty || 'sr' === n[a].ty ? this.renderPath(n[a], r[a]) : 'fl' === n[a].ty ? this.renderFill(n[a], r[a], s) : 'st' === n[a].ty ? this.renderStroke(n[a], r[a], s) : 'gf' === n[a].ty || 'gs' === n[a].ty ? this.renderGradientFill(n[a], r[a], s) : 'gr' === n[a].ty ? this.renderShape(s, n[a].it, r[a].it) : n[a].ty;
                i && this.drawLayer();
            }),
            (CVShapeElement.prototype.renderStyledShape = function (e, n) {
                if (this._isFirstFrame || n._mdf || e.transforms._mdf) {
                    var r,
                        i,
                        a,
                        s = e.trNodes,
                        o = n.paths,
                        l = o._length;
                    s.length = 0;
                    var u = e.transforms.finalTransform;
                    for (a = 0; a < l; a += 1) {
                        var c = o.shapes[a];
                        if (c && c.v) {
                            for (r = 1, i = c._length; r < i; r += 1)
                                1 === r &&
                                    s.push({
                                        t: 'm',
                                        p: u.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                    }),
                                    s.push({
                                        t: 'c',
                                        pts: u.applyToTriplePoints(c.o[r - 1], c.i[r], c.v[r])
                                    });
                            1 === i &&
                                s.push({
                                    t: 'm',
                                    p: u.applyToPointArray(c.v[0][0], c.v[0][1], 0)
                                }),
                                c.c &&
                                    i &&
                                    (s.push({
                                        t: 'c',
                                        pts: u.applyToTriplePoints(c.o[r - 1], c.i[0], c.v[0])
                                    }),
                                    s.push({ t: 'z' }));
                        }
                    }
                    e.trNodes = s;
                }
            }),
            (CVShapeElement.prototype.renderPath = function (e, n) {
                if (!0 !== e.hd && e._shouldRender) {
                    var r,
                        i = n.styledShapes.length;
                    for (r = 0; r < i; r += 1) this.renderStyledShape(n.styledShapes[r], n.sh);
                }
            }),
            (CVShapeElement.prototype.renderFill = function (e, n, r) {
                var i = n.style;
                (n.c._mdf || this._isFirstFrame) && (i.co = 'rgb(' + bmFloor(n.c.v[0]) + ',' + bmFloor(n.c.v[1]) + ',' + bmFloor(n.c.v[2]) + ')'), (n.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = n.o.v * r.opacity);
            }),
            (CVShapeElement.prototype.renderGradientFill = function (e, n, r) {
                var i = n.style;
                if (!i.grd || n.g._mdf || n.s._mdf || n.e._mdf || (1 !== e.t && (n.h._mdf || n.a._mdf))) {
                    var a,
                        s,
                        o = this.globalData.canvasContext,
                        l = n.s.v,
                        u = n.e.v;
                    if (1 === e.t) a = o.createLinearGradient(l[0], l[1], u[0], u[1]);
                    else {
                        var c = Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)),
                            d = Math.atan2(u[1] - l[1], u[0] - l[0]),
                            f = n.h.v;
                        f >= 1 ? (f = 0.99) : f <= -1 && (f = -0.99);
                        var _ = c * f,
                            h = Math.cos(d + n.a.v) * _ + l[0],
                            p = Math.sin(d + n.a.v) * _ + l[1];
                        a = o.createRadialGradient(h, p, 0, l[0], l[1], c);
                    }
                    var m = e.g.p,
                        g = n.g.c,
                        E = 1;
                    for (s = 0; s < m; s += 1) n.g._hasOpacity && n.g._collapsable && (E = n.g.o[2 * s + 1]), a.addColorStop(g[4 * s] / 100, 'rgba(' + g[4 * s + 1] + ',' + g[4 * s + 2] + ',' + g[4 * s + 3] + ',' + E + ')');
                    i.grd = a;
                }
                i.coOp = n.o.v * r.opacity;
            }),
            (CVShapeElement.prototype.renderStroke = function (e, n, r) {
                var i = n.style,
                    a = n.d;
                a && (a._mdf || this._isFirstFrame) && ((i.da = a.dashArray), (i.do = a.dashoffset[0])), (n.c._mdf || this._isFirstFrame) && (i.co = 'rgb(' + bmFloor(n.c.v[0]) + ',' + bmFloor(n.c.v[1]) + ',' + bmFloor(n.c.v[2]) + ')'), (n.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = n.o.v * r.opacity), (n.w._mdf || this._isFirstFrame) && (i.wi = n.w.v);
            }),
            (CVShapeElement.prototype.destroy = function () {
                (this.shapesData = null), (this.globalData = null), (this.canvasContext = null), (this.stylesList.length = 0), (this.itemsData.length = 0);
            }),
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
            (CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d')),
            (CVTextElement.prototype.buildNewText = function () {
                var e,
                    n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c,
                    d,
                    f,
                    _ = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(_.l ? _.l.length : 0);
                var h = !1;
                _.fc ? ((h = !0), (this.values.fill = this.buildColor(_.fc))) : (this.values.fill = 'rgba(0,0,0,0)'), (this.fill = h);
                var p = !1;
                _.sc && ((p = !0), (this.values.stroke = this.buildColor(_.sc)), (this.values.sWidth = _.sw));
                var m = this.globalData.fontManager.getFontByName(_.f),
                    g = _.l,
                    E = this.mHelper;
                (this.stroke = p), (this.values.fValue = _.finalSize + 'px ' + this.globalData.fontManager.getFontByName(_.f).fFamily), (n = _.finalText.length);
                var v = this.data.singleShape,
                    I = 0.001 * _.tr * _.finalSize,
                    T = 0,
                    b = 0,
                    y = !0,
                    S = 0;
                for (e = 0; e < n; e += 1) {
                    (i = ((r = this.globalData.fontManager.getCharData(_.finalText[e], m.fStyle, this.globalData.fontManager.getFontByName(_.f).fFamily)) && r.data) || {}), E.reset(), v && g[e].n && ((T = -I), (b += _.yOffset + (y ? 1 : 0)), (y = !1)), (u = (o = i.shapes ? i.shapes[0].it : []).length), E.scale(_.finalSize / 100, _.finalSize / 100), v && this.applyTextPropertiesToMatrix(_, E, g[e].line, T, b), (d = createSizedArray(u - 1));
                    var A = 0;
                    for (l = 0; l < u; l += 1)
                        if ('sh' === o[l].ty) {
                            for (a = 1, s = o[l].ks.k.i.length, c = o[l].ks.k, f = []; a < s; a += 1) 1 === a && f.push(E.applyToX(c.v[0][0], c.v[0][1], 0), E.applyToY(c.v[0][0], c.v[0][1], 0)), f.push(E.applyToX(c.o[a - 1][0], c.o[a - 1][1], 0), E.applyToY(c.o[a - 1][0], c.o[a - 1][1], 0), E.applyToX(c.i[a][0], c.i[a][1], 0), E.applyToY(c.i[a][0], c.i[a][1], 0), E.applyToX(c.v[a][0], c.v[a][1], 0), E.applyToY(c.v[a][0], c.v[a][1], 0));
                            f.push(E.applyToX(c.o[a - 1][0], c.o[a - 1][1], 0), E.applyToY(c.o[a - 1][0], c.o[a - 1][1], 0), E.applyToX(c.i[0][0], c.i[0][1], 0), E.applyToY(c.i[0][0], c.i[0][1], 0), E.applyToX(c.v[0][0], c.v[0][1], 0), E.applyToY(c.v[0][0], c.v[0][1], 0)), (d[A] = f), (A += 1);
                        }
                    v && (T += g[e].l + I), this.textSpans[S] ? (this.textSpans[S].elem = d) : (this.textSpans[S] = { elem: d }), (S += 1);
                }
            }),
            (CVTextElement.prototype.renderInnerContent = function () {
                this.validateText(), (this.canvasContext.font = this.values.fValue), this.globalData.renderer.ctxLineCap('butt'), this.globalData.renderer.ctxLineJoin('miter'), this.globalData.renderer.ctxMiterLimit(4), !this.data.singleShape && this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var e,
                    n,
                    r,
                    i,
                    a,
                    s,
                    o,
                    l,
                    u,
                    c = this.textAnimator.renderedLetters,
                    d = this.textProperty.currentData.l;
                n = d.length;
                var f = null,
                    _ = null,
                    h = null,
                    p = this.globalData.renderer;
                for (e = 0; e < n; e += 1)
                    if (!d[e].n) {
                        if (((o = c[e]) && (p.save(), p.ctxTransform(o.p), p.ctxOpacity(o.o)), this.fill)) {
                            for (o && o.fc ? f !== o.fc && (p.ctxFillStyle(o.fc), (f = o.fc)) : f !== this.values.fill && ((f = this.values.fill), p.ctxFillStyle(this.values.fill)), i = (l = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1) for (s = (u = l[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(u[a], u[a + 1], u[a + 2], u[a + 3], u[a + 4], u[a + 5]);
                            this.globalData.canvasContext.closePath(), p.ctxFill();
                        }
                        if (this.stroke) {
                            for (o && o.sw ? h !== o.sw && ((h = o.sw), p.ctxLineWidth(o.sw)) : h !== this.values.sWidth && ((h = this.values.sWidth), p.ctxLineWidth(this.values.sWidth)), o && o.sc ? _ !== o.sc && ((_ = o.sc), p.ctxStrokeStyle(o.sc)) : _ !== this.values.stroke && ((_ = this.values.stroke), p.ctxStrokeStyle(this.values.stroke)), i = (l = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1) for (s = (u = l[r]).length, this.globalData.canvasContext.moveTo(u[0], u[1]), a = 2; a < s; a += 6) this.globalData.canvasContext.bezierCurveTo(u[a], u[a + 1], u[a + 2], u[a + 3], u[a + 4], u[a + 5]);
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
                        n,
                        r = createTag('canvas');
                    (r.width = this.assetData.w), (r.height = this.assetData.h);
                    var i = r.getContext('2d'),
                        a = this.img.width,
                        s = this.img.height,
                        o = a / s,
                        l = this.assetData.w / this.assetData.h,
                        u = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    (o > l && 'xMidYMid slice' === u) || (o < l && 'xMidYMid slice' !== u) ? (e = (n = s) * l) : (n = (e = a) / l), i.drawImage(this.img, (a - e) / 2, (s - n) / 2, e, n, 0, 0, this.assetData.w, this.assetData.h), (this.img = r);
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
                if (1 !== e[0] || 0 !== e[1] || 0 !== e[4] || 1 !== e[5] || 0 !== e[12] || 0 !== e[13]) this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13]);
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
            (CanvasRendererBase.prototype.ctxFillRect = function (e, n, r, i) {
                this.canvasContext.fillRect(e, n, r, i);
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
                    var n = this.animationItem.container.style;
                    (n.width = '100%'), (n.height = '100%');
                    var r = '0px 0px 0px';
                    (n.transformOrigin = r), (n.mozTransformOrigin = r), (n.webkitTransformOrigin = r), (n['-webkit-transform'] = r), (n.contentVisibility = this.renderConfig.contentVisibility), this.animationItem.wrapper.appendChild(this.animationItem.container), (this.canvasContext = this.animationItem.container.getContext('2d')), this.renderConfig.className && this.animationItem.container.setAttribute('class', this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute('id', this.renderConfig.id);
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
            (CanvasRendererBase.prototype.updateContainerSize = function (e, n) {
                if ((this.reset(), e ? ((r = e), (i = n), (this.canvasContext.canvas.width = r), (this.canvasContext.canvas.height = i)) : (this.animationItem.wrapper && this.animationItem.container ? ((r = this.animationItem.wrapper.offsetWidth), (i = this.animationItem.wrapper.offsetHeight)) : ((r = this.canvasContext.canvas.width), (i = this.canvasContext.canvas.height)), (this.canvasContext.canvas.width = r * this.renderConfig.dpr), (this.canvasContext.canvas.height = i * this.renderConfig.dpr)), -1 !== this.renderConfig.preserveAspectRatio.indexOf('meet') || -1 !== this.renderConfig.preserveAspectRatio.indexOf('slice'))) {
                    var r,
                        i,
                        a,
                        s,
                        o = this.renderConfig.preserveAspectRatio.split(' '),
                        l = o[1] || 'meet',
                        u = o[0] || 'xMidYMid',
                        c = u.substr(0, 4),
                        d = u.substr(4);
                    (a = r / i), ((s = this.transformCanvas.w / this.transformCanvas.h) > a && 'meet' === l) || (s < a && 'slice' === l) ? ((this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr))) : ((this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr)), (this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr))), 'xMid' === c && ((s < a && 'meet' === l) || (s > a && 'slice' === l)) ? (this.transformCanvas.tx = ((r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2) * this.renderConfig.dpr) : 'xMax' === c && ((s < a && 'meet' === l) || (s > a && 'slice' === l)) ? (this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr) : (this.transformCanvas.tx = 0), 'YMid' === d && ((s > a && 'meet' === l) || (s < a && 'slice' === l)) ? (this.transformCanvas.ty = ((i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2) * this.renderConfig.dpr) : 'YMax' === d && ((s > a && 'meet' === l) || (s < a && 'slice' === l)) ? (this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr) : (this.transformCanvas.ty = 0);
                } else 'none' === this.renderConfig.preserveAspectRatio ? ((this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr))) : ((this.transformCanvas.sx = this.renderConfig.dpr), (this.transformCanvas.sy = this.renderConfig.dpr)), (this.transformCanvas.tx = 0), (this.transformCanvas.ty = 0);
                (this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1]), this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
            }),
            (CanvasRendererBase.prototype.destroy = function () {
                var e;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.globalData.canvasContext = null), (this.animationItem.container = null), (this.destroyed = !0);
            }),
            (CanvasRendererBase.prototype.renderFrame = function (e, n) {
                if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || !!n) && !this.destroyed && -1 !== e) {
                    (this.renderedFrame = e), (this.globalData.frameNum = e - this.animationItem._isFirstFrame), (this.globalData.frameId += 1), (this.globalData._mdf = !this.renderConfig.clearCanvas || n), (this.globalData.projectInterface.currentFrame = e);
                    var r,
                        i = this.layers.length;
                    for (!this.completeLayers && this.checkLayers(e), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore();
                    }
                }
            }),
            (CanvasRendererBase.prototype.buildItem = function (e) {
                var n = this.elements;
                if (!n[e] && 99 !== this.layers[e].ty) {
                    var r = this.createItem(this.layers[e], this, this.globalData);
                    (n[e] = r), r.initExpressions();
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
                    n = 0;
                for (n = this._length; n < e; n += 1) this.stack[n] = new CanvasContext();
                this._length = e;
            }),
            (CVContextData.prototype.reset = function () {
                (this.cArrPos = 0), this.cTr.reset(), (this.stack[this.cArrPos].opacity = 1);
            }),
            (CVContextData.prototype.restore = function (e) {
                this.cArrPos -= 1;
                var n,
                    r = this.stack[this.cArrPos],
                    i = r.transform,
                    a = this.cTr.props;
                for (n = 0; n < 16; n += 1) a[n] = i[n];
                if (e) {
                    this.nativeContext.restore();
                    var s = this.stack[this.cArrPos + 1];
                    (this.appliedFillStyle = s.fillStyle), (this.appliedStrokeStyle = s.strokeStyle), (this.appliedLineWidth = s.lineWidth), (this.appliedLineCap = s.lineCap), (this.appliedLineJoin = s.lineJoin), (this.appliedMiterLimit = s.miterLimit);
                }
                this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (e || (-1 !== r.opacity && this.currentOpacity !== r.opacity)) && ((this.nativeContext.globalAlpha = r.opacity), (this.currentOpacity = r.opacity)), (this.currentFillStyle = r.fillStyle), (this.currentStrokeStyle = r.strokeStyle), (this.currentLineWidth = r.lineWidth), (this.currentLineCap = r.lineCap), (this.currentLineJoin = r.lineJoin), (this.currentMiterLimit = r.miterLimit);
            }),
            (CVContextData.prototype.save = function (e) {
                e && this.nativeContext.save();
                var n,
                    r = this.cTr.props;
                this._length <= this.cArrPos && this.duplicate();
                var i = this.stack[this.cArrPos];
                for (n = 0; n < 16; n += 1) i.transform[n] = r[n];
                this.cArrPos += 1;
                var a = this.stack[this.cArrPos];
                (a.opacity = i.opacity), (a.fillStyle = i.fillStyle), (a.strokeStyle = i.strokeStyle), (a.lineWidth = i.lineWidth), (a.lineCap = i.lineCap), (a.lineJoin = i.lineJoin), (a.miterLimit = i.miterLimit);
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
                var n = this.cTr;
                this.transformMat.multiply(n), n.cloneFromProps(this.transformMat.props);
                var r = n.props;
                this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
            }),
            (CVContextData.prototype.opacity = function (e) {
                var n = this.stack[this.cArrPos].opacity;
                (n *= e < 0 ? 0 : e), this.stack[this.cArrPos].opacity !== n && (this.currentOpacity !== e && ((this.nativeContext.globalAlpha = e), (this.currentOpacity = e)), (this.stack[this.cArrPos].opacity = n));
            }),
            (CVContextData.prototype.fill = function (e) {
                this.appliedFillStyle !== this.currentFillStyle && ((this.appliedFillStyle = this.currentFillStyle), (this.nativeContext.fillStyle = this.appliedFillStyle)), this.nativeContext.fill(e);
            }),
            (CVContextData.prototype.fillRect = function (e, n, r, i) {
                this.appliedFillStyle !== this.currentFillStyle && ((this.appliedFillStyle = this.currentFillStyle), (this.nativeContext.fillStyle = this.appliedFillStyle)), this.nativeContext.fillRect(e, n, r, i);
            }),
            (CVContextData.prototype.stroke = function () {
                this.appliedStrokeStyle !== this.currentStrokeStyle && ((this.appliedStrokeStyle = this.currentStrokeStyle), (this.nativeContext.strokeStyle = this.appliedStrokeStyle)), this.appliedLineWidth !== this.currentLineWidth && ((this.appliedLineWidth = this.currentLineWidth), (this.nativeContext.lineWidth = this.appliedLineWidth)), this.appliedLineCap !== this.currentLineCap && ((this.appliedLineCap = this.currentLineCap), (this.nativeContext.lineCap = this.appliedLineCap)), this.appliedLineJoin !== this.currentLineJoin && ((this.appliedLineJoin = this.currentLineJoin), (this.nativeContext.lineJoin = this.appliedLineJoin)), this.appliedMiterLimit !== this.currentMiterLimit && ((this.appliedMiterLimit = this.currentMiterLimit), (this.nativeContext.miterLimit = this.appliedMiterLimit)), this.nativeContext.stroke();
            }),
            extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
            (CVCompElement.prototype.renderInnerContent = function () {
                var e,
                    n = this.canvasContext;
                for (n.beginPath(), n.moveTo(0, 0), n.lineTo(this.data.w, 0), n.lineTo(this.data.w, this.data.h), n.lineTo(0, this.data.h), n.lineTo(0, 0), n.clip(), e = this.layers.length - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
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
                        var n = this.finalTransform.mat.toCSS();
                        (e.transform = n), (e.webkitTransform = n);
                    }
                    this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
                },
                renderFrame: function () {
                    if (!this.data.hd && !this.hidden) this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1);
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
                    var n = this.comp.data ? this.comp.data : this.globalData.compSize;
                    e.setAttribute('width', n.w), e.setAttribute('height', n.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e);
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), (this.shapeCont = e);
            }),
            (HShapeElement.prototype.getTransformedPoint = function (e, n) {
                var r,
                    i = e.length;
                for (r = 0; r < i; r += 1) n = e[r].mProps.v.applyToPointArray(n[0], n[1], 0);
                return n;
            }),
            (HShapeElement.prototype.calculateShapeBoundingBox = function (e, n) {
                var r,
                    i,
                    a,
                    s,
                    o,
                    l = e.sh.v,
                    u = e.transformers,
                    c = l._length;
                if (!(c <= 1)) {
                    for (r = 0; r < c - 1; r += 1) (i = this.getTransformedPoint(u, l.v[r])), (a = this.getTransformedPoint(u, l.o[r])), (s = this.getTransformedPoint(u, l.i[r + 1])), (o = this.getTransformedPoint(u, l.v[r + 1])), this.checkBounds(i, a, s, o, n);
                    l.c && ((i = this.getTransformedPoint(u, l.v[r])), (a = this.getTransformedPoint(u, l.o[r])), (s = this.getTransformedPoint(u, l.i[0])), (o = this.getTransformedPoint(u, l.v[0])), this.checkBounds(i, a, s, o, n));
                }
            }),
            (HShapeElement.prototype.checkBounds = function (e, n, r, i, a) {
                this.getBoundsOfCurve(e, n, r, i);
                var s = this.shapeBoundingBox;
                (a.x = bmMin(s.left, a.x)), (a.xMax = bmMax(s.right, a.xMax)), (a.y = bmMin(s.top, a.y)), (a.yMax = bmMax(s.bottom, a.yMax));
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
            (HShapeElement.prototype.getBoundsOfCurve = function (e, n, r, i) {
                for (
                    var a = [
                            [e[0], i[0]],
                            [e[1], i[1]]
                        ],
                        s,
                        o,
                        l,
                        u,
                        c,
                        d,
                        f,
                        _ = 0;
                    _ < 2;
                    ++_
                )
                    (o = 6 * e[_] - 12 * n[_] + 6 * r[_]), (s = -3 * e[_] + 9 * n[_] - 9 * r[_] + 3 * i[_]), (l = 3 * n[_] - 3 * e[_]), (o |= 0), (l |= 0), (0 == (s |= 0) && 0 === o) || (0 === s ? (u = -l / o) > 0 && u < 1 && a[_].push(this.calculateF(u, e, n, r, i, _)) : (c = o * o - 4 * l * s) >= 0 && ((d = (-o + bmSqrt(c)) / (2 * s)) > 0 && d < 1 && a[_].push(this.calculateF(d, e, n, r, i, _)), (f = (-o - bmSqrt(c)) / (2 * s)) > 0 && f < 1 && a[_].push(this.calculateF(f, e, n, r, i, _))));
                (this.shapeBoundingBox.left = bmMin.apply(null, a[0])), (this.shapeBoundingBox.top = bmMin.apply(null, a[1])), (this.shapeBoundingBox.right = bmMax.apply(null, a[0])), (this.shapeBoundingBox.bottom = bmMax.apply(null, a[1]));
            }),
            (HShapeElement.prototype.calculateF = function (e, n, r, i, a, s) {
                return bmPow(1 - e, 3) * n[s] + 3 * bmPow(1 - e, 2) * e * r[s] + 3 * (1 - e) * bmPow(e, 2) * i[s] + bmPow(e, 3) * a[s];
            }),
            (HShapeElement.prototype.calculateBoundingBox = function (e, n) {
                var r,
                    i = e.length;
                for (r = 0; r < i; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], n) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, n) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, n);
            }),
            (HShapeElement.prototype.expandStrokeBoundingBox = function (e, n) {
                var r = 0;
                if (e.keyframes) {
                    for (var i = 0; i < e.keyframes.length; i += 1) {
                        var a = e.keyframes[i].s;
                        a > r && (r = a);
                    }
                    r *= e.mult;
                } else r = e.v * e.mult;
                (n.x -= r), (n.xMax += r), (n.y -= r), (n.yMax += r);
            }),
            (HShapeElement.prototype.currentBoxContains = function (e) {
                return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height;
            }),
            (HShapeElement.prototype.renderInnerContent = function () {
                if ((this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf))) {
                    var e = this.tempBoundingBox,
                        n = 999999;
                    if (((e.x = n), (e.xMax = -n), (e.y = n), (e.yMax = -n), this.calculateBoundingBox(this.itemsData, e), (e.width = e.xMax < e.x ? 0 : e.xMax - e.x), (e.height = e.yMax < e.y ? 0 : e.yMax - e.y), !this.currentBoxContains(e))) {
                        var r = !1;
                        if ((this.currentBBox.w !== e.width && ((this.currentBBox.w = e.width), this.shapeCont.setAttribute('width', e.width), (r = !0)), this.currentBBox.h !== e.height && ((this.currentBBox.h = e.height), this.shapeCont.setAttribute('height', e.height), (r = !0)), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y)) {
                            (this.currentBBox.w = e.width), (this.currentBBox.h = e.height), (this.currentBBox.x = e.x), (this.currentBBox.y = e.y), this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
                            var i = this.shapeCont.style,
                                a = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                            (i.transform = a), (i.webkitTransform = a);
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
                var n = this.innerElem.style,
                    r = e.fc ? this.buildColor(e.fc) : 'rgba(0,0,0,0)';
                (n.fill = r), (n.color = r), e.sc && ((n.stroke = this.buildColor(e.sc)), (n.strokeWidth = e.sw + 'px'));
                var i = this.globalData.fontManager.getFontByName(e.f);
                if (!this.globalData.fontManager.chars) {
                    if (((n.fontSize = e.finalSize + 'px'), (n.lineHeight = e.finalSize + 'px'), i.fClass)) this.innerElem.className = i.fClass;
                    else {
                        n.fontFamily = i.fFamily;
                        var a = e.fWeight,
                            s = e.fStyle;
                        (n.fontStyle = s), (n.fontWeight = a);
                    }
                }
                var o = e.l;
                f = o.length;
                var l = this.mHelper,
                    u = '',
                    c = 0;
                for (d = 0; d < f; d += 1) {
                    if ((this.globalData.fontManager.chars ? (this.textPaths[c] ? (_ = this.textPaths[c]) : ((_ = createNS('path')).setAttribute('stroke-linecap', lineCapEnum[1]), _.setAttribute('stroke-linejoin', lineJoinEnum[2]), _.setAttribute('stroke-miterlimit', '4')), !this.isMasked && (this.textSpans[c] ? (p = (h = this.textSpans[c]).children[0]) : (((h = createTag('div')).style.lineHeight = 0), (p = createNS('svg')).appendChild(_), styleDiv(h)))) : this.isMasked ? (_ = this.textPaths[c] ? this.textPaths[c] : createNS('text')) : this.textSpans[c] ? ((h = this.textSpans[c]), (_ = this.textPaths[c])) : (styleDiv((h = createTag('span'))), styleDiv((_ = createTag('span'))), h.appendChild(_)), this.globalData.fontManager.chars)) {
                        var d,
                            f,
                            _,
                            h,
                            p,
                            m,
                            g,
                            E = this.globalData.fontManager.getCharData(e.finalText[d], i.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
                        if (((g = E ? E.data : null), l.reset(), g && g.shapes && g.shapes.length && ((m = g.shapes[0].it), l.scale(e.finalSize / 100, e.finalSize / 100), (u = this.createPathShape(l, m)), _.setAttribute('d', u)), this.isMasked)) this.innerElem.appendChild(_);
                        else {
                            if ((this.innerElem.appendChild(h), g && g.shapes)) {
                                document.body.appendChild(p);
                                var v = p.getBBox();
                                p.setAttribute('width', v.width + 2), p.setAttribute('height', v.height + 2), p.setAttribute('viewBox', v.x - 1 + ' ' + (v.y - 1) + ' ' + (v.width + 2) + ' ' + (v.height + 2));
                                var I = p.style,
                                    T = 'translate(' + (v.x - 1) + 'px,' + (v.y - 1) + 'px)';
                                (I.transform = T), (I.webkitTransform = T), (o[d].yOffset = v.y - 1);
                            } else p.setAttribute('width', 1), p.setAttribute('height', 1);
                            h.appendChild(p);
                        }
                    } else if (((_.textContent = o[d].val), _.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve'), this.isMasked)) this.innerElem.appendChild(_);
                    else {
                        this.innerElem.appendChild(h);
                        var b = _.style,
                            y = 'translate3d(0,' + -e.finalSize / 1.2 + 'px,0)';
                        (b.transform = y), (b.webkitTransform = y);
                    }
                    this.isMasked ? (this.textSpans[c] = _) : (this.textSpans[c] = h), (this.textSpans[c].style.display = 'block'), (this.textPaths[c] = _), (c += 1);
                }
                for (; c < this.textSpans.length; ) (this.textSpans[c].style.display = 'none'), (c += 1);
            }),
            (HTextElement.prototype.renderInnerContent = function () {
                if ((this.validateText(), this.data.singleShape)) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH), (e = this.svgElement.style);
                        var e,
                            n,
                            r,
                            i,
                            a,
                            s,
                            o = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
                        (e.transform = o), (e.webkitTransform = o);
                    }
                }
                if ((this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !!this.lettersChangedFlag || !!this.textAnimator.lettersChangedFlag)) {
                    var l = 0,
                        u = this.textAnimator.renderedLetters,
                        c = this.textProperty.currentData.l;
                    for (n = 0, r = c.length; n < r; n += 1) c[n].n ? (l += 1) : ((a = this.textSpans[n]), (s = this.textPaths[n]), (i = u[l]), (l += 1), i._mdf.m && (this.isMasked ? a.setAttribute('transform', i.m) : ((a.style.webkitTransform = i.m), (a.style.transform = i.m))), (a.style.opacity = i.o), i.sw && i._mdf.sw && s.setAttribute('stroke-width', i.sw), i.sc && i._mdf.sc && s.setAttribute('stroke', i.sc), i.fc && i._mdf.fc && (s.setAttribute('fill', i.fc), (s.style.color = i.fc)));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var d = this.innerElem.getBBox();
                        this.currentBBox.w !== d.width && ((this.currentBBox.w = d.width), this.svgElement.setAttribute('width', d.width)), this.currentBBox.h !== d.height && ((this.currentBBox.h = d.height), this.svgElement.setAttribute('height', d.height));
                        var f = 1;
                        if (this.currentBBox.w !== d.width + 2 * f || this.currentBBox.h !== d.height + 2 * f || this.currentBBox.x !== d.x - f || this.currentBBox.y !== d.y - f) {
                            (this.currentBBox.w = d.width + 2 * f), (this.currentBBox.h = d.height + 2 * f), (this.currentBBox.x = d.x - f), (this.currentBBox.y = d.y - f), this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h), (e = this.svgElement.style);
                            var _ = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
                            (e.transform = _), (e.webkitTransform = _);
                        }
                    }
                }
            }),
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            (HCameraElement.prototype.setup = function () {
                var e,
                    n,
                    r,
                    i,
                    a = this.comp.threeDElements.length;
                for (e = 0; e < a; e += 1)
                    if ('3d' === (n = this.comp.threeDElements[e]).type) {
                        (r = n.perspectiveElem.style), (i = n.container.style);
                        var s = this.pe.v + 'px',
                            o = '0px 0px 0px',
                            l = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                        (r.perspective = s), (r.webkitPerspective = s), (i.transformOrigin = o), (i.mozTransformOrigin = o), (i.webkitTransformOrigin = o), (r.transform = l), (r.webkitTransform = l);
                    }
            }),
            (HCameraElement.prototype.createElements = function () {}),
            (HCameraElement.prototype.hide = function () {}),
            (HCameraElement.prototype.renderFrame = function () {
                var e = this._isFirstFrame;
                if (this.hierarchy) for (r = 0, i = this.hierarchy.length; r < i; r += 1) e = this.hierarchy[r].finalTransform.mProp._mdf || e;
                if (e || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
                    if ((this.mat.reset(), this.hierarchy))
                        for (r = i = this.hierarchy.length - 1; r >= 0; r -= 1) {
                            var n = this.hierarchy[r].finalTransform.mProp;
                            this.mat.translate(-n.p.v[0], -n.p.v[1], n.p.v[2]), this.mat.rotateX(-n.or.v[0]).rotateY(-n.or.v[1]).rotateZ(n.or.v[2]), this.mat.rotateX(-n.rx.v).rotateY(-n.ry.v).rotateZ(n.rz.v), this.mat.scale(1 / n.s.v[0], 1 / n.s.v[1], 1 / n.s.v[2]), this.mat.translate(n.a.v[0], n.a.v[1], n.a.v[2]);
                        }
                    if ((this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a)) {
                        var r,
                            i,
                            a,
                            s = Math.sqrt(Math.pow((a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]])[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)),
                            o = [a[0] / s, a[1] / s, a[2] / s],
                            l = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
                            u = Math.atan2(o[1], l),
                            c = Math.atan2(o[0], -o[2]);
                        this.mat.rotateY(c).rotateX(-u);
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                    var d = !this._prevMat.equals(this.mat);
                    if ((d || this.pe._mdf) && this.comp.threeDElements) {
                        for (r = 0, i = this.comp.threeDElements.length; r < i; r += 1)
                            if ('3d' === (f = this.comp.threeDElements[r]).type) {
                                if (d) {
                                    var f,
                                        _,
                                        h,
                                        p = this.mat.toCSS();
                                    ((h = f.container.style).transform = p), (h.webkitTransform = p);
                                }
                                this.pe._mdf && (((_ = f.perspectiveElem.style).perspective = this.pe.v + 'px'), (_.webkitPerspective = this.pe.v + 'px'));
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
                    n = new Image();
                this.data.hasMask ? ((this.imageElem = createNS('image')), this.imageElem.setAttribute('width', this.assetData.w + 'px'), this.imageElem.setAttribute('height', this.assetData.h + 'px'), this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute('width', this.assetData.w), this.baseElement.setAttribute('height', this.assetData.h)) : this.layerElement.appendChild(n), (n.crossOrigin = 'anonymous'), (n.src = e), this.data.ln && this.baseElement.setAttribute('id', this.data.ln);
            }),
            extendPrototype([BaseRenderer], HybridRendererBase),
            (HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem),
            (HybridRendererBase.prototype.checkPendingElements = function () {
                for (; this.pendingElements.length; ) this.pendingElements.pop().checkParenting();
            }),
            (HybridRendererBase.prototype.appendElementInPos = function (e, n) {
                var r = e.getBaseElement();
                if (!!r) {
                    var i = this.layers[n];
                    if (i.ddd && this.supports3d) this.addTo3dContainer(r, n);
                    else if (this.threeDElements) this.addTo3dContainer(r, n);
                    else {
                        for (var a, s, o = 0; o < n; ) this.elements[o] && !0 !== this.elements[o] && this.elements[o].getBaseElement && ((s = this.elements[o]), (a = (this.layers[o].ddd ? this.getThreeDContainerByPos(o) : s.getBaseElement()) || a)), (o += 1);
                        a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r);
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
                for (var n = 0, r = this.threeDElements.length; n < r; ) {
                    if (this.threeDElements[n].startPos <= e && this.threeDElements[n].endPos >= e) return this.threeDElements[n].perspectiveElem;
                    n += 1;
                }
                return null;
            }),
            (HybridRendererBase.prototype.createThreeDContainer = function (e, n) {
                var r,
                    i,
                    a = createTag('div');
                styleDiv(a);
                var s = createTag('div');
                if ((styleDiv(s), '3d' === n)) {
                    ((r = a.style).width = this.globalData.compSize.w + 'px'), (r.height = this.globalData.compSize.h + 'px');
                    var o = '50% 50%';
                    (r.webkitTransformOrigin = o), (r.mozTransformOrigin = o), (r.transformOrigin = o), (i = s.style);
                    var l = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
                    (i.transform = l), (i.webkitTransform = l);
                }
                a.appendChild(s);
                var u = {
                    container: s,
                    perspectiveElem: a,
                    startPos: e,
                    endPos: e,
                    type: n
                };
                return this.threeDElements.push(u), u;
            }),
            (HybridRendererBase.prototype.build3dContainers = function () {
                var e,
                    n,
                    r = this.layers.length,
                    i = '';
                for (e = 0; e < r; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? '3d' !== i && ((i = '3d'), (n = this.createThreeDContainer(e, '3d'))) : '2d' !== i && ((i = '2d'), (n = this.createThreeDContainer(e, '2d'))), (n.endPos = Math.max(n.endPos, e));
                for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem);
            }),
            (HybridRendererBase.prototype.addTo3dContainer = function (e, n) {
                for (var r = 0, i = this.threeDElements.length; r < i; ) {
                    if (n <= this.threeDElements[r].endPos) {
                        for (var a, s = this.threeDElements[r].startPos; s < n; ) this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), (s += 1);
                        a ? this.threeDElements[r].container.insertBefore(e, a) : this.threeDElements[r].container.appendChild(e);
                        break;
                    }
                    r += 1;
                }
            }),
            (HybridRendererBase.prototype.configAnimation = function (e) {
                var n = createTag('div'),
                    r = this.animationItem.wrapper,
                    i = n.style;
                (i.width = e.w + 'px'), (i.height = e.h + 'px'), (this.resizerElem = n), styleDiv(n), (i.transformStyle = 'flat'), (i.mozTransformStyle = 'flat'), (i.webkitTransformStyle = 'flat'), this.renderConfig.className && n.setAttribute('class', this.renderConfig.className), r.appendChild(n), (i.overflow = 'hidden');
                var a = createNS('svg');
                a.setAttribute('width', '1'), a.setAttribute('height', '1'), styleDiv(a), this.resizerElem.appendChild(a);
                var s = createNS('defs');
                a.appendChild(s), (this.data = e), this.setupGlobalData(e, a), (this.globalData.defs = s), (this.layers = e.layers), (this.layerElement = this.resizerElem), this.build3dContainers(), this.updateContainerSize();
            }),
            (HybridRendererBase.prototype.destroy = function () {
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ''), (this.animationItem.container = null), (this.globalData.defs = null);
                var e,
                    n = this.layers ? this.layers.length : 0;
                for (e = 0; e < n; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
                (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
            }),
            (HybridRendererBase.prototype.updateContainerSize = function () {
                var e,
                    n,
                    r,
                    i,
                    a = this.animationItem.wrapper.offsetWidth,
                    s = this.animationItem.wrapper.offsetHeight,
                    o = a / s;
                this.globalData.compSize.w / this.globalData.compSize.h > o ? ((e = a / this.globalData.compSize.w), (n = a / this.globalData.compSize.w), (r = 0), (i = (s - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2)) : ((e = s / this.globalData.compSize.h), (n = s / this.globalData.compSize.h), (r = (a - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2), (i = 0));
                var l = this.resizerElem.style;
                (l.webkitTransform = 'matrix3d(' + e + ',0,0,0,0,' + n + ',0,0,0,0,1,0,' + r + ',' + i + ',0,1)'), (l.transform = l.webkitTransform);
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
                        n = this.globalData.compSize.w,
                        r = this.globalData.compSize.h,
                        i = this.threeDElements.length;
                    for (e = 0; e < i; e += 1) {
                        var a = this.threeDElements[e].perspectiveElem.style;
                        (a.webkitPerspective = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)) + 'px'), (a.perspective = a.webkitPerspective);
                    }
                }
            }),
            (HybridRendererBase.prototype.searchExtraCompositions = function (e) {
                var n,
                    r = e.length,
                    i = createTag('div');
                for (n = 0; n < r; n += 1)
                    if (e[n].xt) {
                        var a = this.createComp(e[n], i, this.globalData.comp, null);
                        a.initExpressions(), this.globalData.projectInterface.registerComposition(a);
                    }
            }),
            extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
            (HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements),
            (HCompElement.prototype.createContainerElements = function () {
                this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute('width', this.data.w), this.svgElement.setAttribute('height', this.data.h), (this.transformedElement = this.baseElement)) : (this.transformedElement = this.layerElement);
            }),
            (HCompElement.prototype.addTo3dContainer = function (e, n) {
                for (var r, i = 0; i < n; ) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), (i += 1);
                r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e);
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
                function n(n) {
                    for (var r = 0, i = e.layers.length; r < i; ) {
                        if (e.layers[r].nm === n || e.layers[r].ind === n) return e.elements[r].layerInterface;
                        r += 1;
                    }
                    return null;
                }
                return Object.defineProperty(n, '_name', { value: e.data.nm }), (n.layer = n), (n.pixelAspect = 1), (n.height = e.data.h || e.globalData.compSize.h), (n.width = e.data.w || e.globalData.compSize.w), (n.pixelAspect = 1), (n.frameDuration = 1 / e.globalData.frameRate), (n.displayStartTime = 0), (n.numLayers = e.layers.length), n;
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
        function seedRandom(e, n) {
            var r,
                i = this,
                a = 256,
                s = 6,
                o = 52,
                l = 'random',
                u = n.pow(a, s),
                c = n.pow(2, o),
                d = 2 * c,
                f = a - 1;
            function _(r, i, o) {
                var f = [],
                    _ = g(m((i = !0 === i ? { entropy: !0 } : i || {}).entropy ? [r, v(e)] : null === r ? E() : r, 3), f),
                    I = new h(f),
                    T = function () {
                        for (var e = I.g(s), n = u, r = 0; e < c; ) (e = (e + r) * a), (n *= a), (r = I.g(1));
                        for (; e >= d; ) (e /= 2), (n /= 2), (r >>>= 1);
                        return (e + r) / n;
                    };
                return (
                    (T.int32 = function () {
                        return 0 | I.g(4);
                    }),
                    (T.quick = function () {
                        return I.g(4) / 4294967296;
                    }),
                    (T.double = T),
                    g(v(I.S), e),
                    (
                        i.pass ||
                        o ||
                        function (e, r, i, a) {
                            return (a &&
                                (a.S && p(a, I),
                                (e.state = function () {
                                    return p(I, {});
                                })),
                            i)
                                ? ((n[l] = e), r)
                                : e;
                        }
                    )(T, _, 'global' in i ? i.global : this == n, i.state)
                );
            }
            function h(e) {
                var n,
                    r = e.length,
                    i = this,
                    s = 0,
                    o = (i.i = i.j = 0),
                    l = (i.S = []);
                for (!r && (e = [r++]); s < a; ) l[s] = s++;
                for (s = 0; s < a; s++) (l[s] = l[(o = f & (o + e[s % r] + (n = l[s])))]), (l[o] = n);
                i.g = function (e) {
                    for (var n, r = 0, s = i.i, o = i.j, l = i.S; e--; ) (n = l[(s = f & (s + 1))]), (r = r * a + l[f & ((l[s] = l[(o = f & (o + n))]) + (l[o] = n))]);
                    return (i.i = s), (i.j = o), r;
                };
            }
            function p(e, n) {
                return (n.i = e.i), (n.j = e.j), (n.S = e.S.slice()), n;
            }
            function m(e, n) {
                var r,
                    i = [],
                    a = _typeof$2(e);
                if (n && 'object' == a)
                    for (r in e)
                        try {
                            i.push(m(e[r], n - 1));
                        } catch (e) {}
                return i.length ? i : 'string' == a ? e : e + '\0';
            }
            function g(e, n) {
                for (var r, i = e + '', a = 0; a < i.length; ) n[f & a] = f & ((r ^= 19 * n[f & a]) + i.charCodeAt(a++));
                return v(n);
            }
            function E() {
                try {
                    if (r) return v(r.randomBytes(a));
                    var n = new Uint8Array(a);
                    return (i.crypto || i.msCrypto).getRandomValues(n), v(n);
                } catch (n) {
                    var s = i.navigator,
                        o = s && s.plugins;
                    return [+new Date(), i, o, i.screen, v(e)];
                }
            }
            function v(e) {
                return String.fromCharCode.apply(0, e);
            }
            (n['seed' + l] = _), g(n.random(), e);
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
                function isNumerable(e, n) {
                    return 'number' === e || n instanceof Number || 'boolean' === e || 'string' === e;
                }
                function $bm_neg(e) {
                    var n = _typeof$1(e);
                    if ('number' === n || e instanceof Number || 'boolean' === n) return -e;
                    if ($bm_isInstanceOfArray(e)) {
                        var r,
                            i = e.length,
                            a = [];
                        for (r = 0; r < i; r += 1) a[r] = -e[r];
                        return a;
                    }
                    return e.propType ? e.v : -e;
                }
                initialize$2(BMMath);
                var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get,
                    easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get,
                    easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;
                function sum(e, n) {
                    var r = _typeof$1(e),
                        i = _typeof$1(n);
                    if ((isNumerable(r, e) && isNumerable(i, n)) || 'string' === r || 'string' === i) return e + n;
                    if ($bm_isInstanceOfArray(e) && isNumerable(i, n)) return (e = e.slice(0)), (e[0] += n), e;
                    if (isNumerable(r, e) && $bm_isInstanceOfArray(n)) return ((n = n.slice(0))[0] = e + n[0]), n;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(n)) {
                        for (var a = 0, s = e.length, o = n.length, l = []; a < s || a < o; ) ('number' == typeof e[a] || e[a] instanceof Number) && ('number' == typeof n[a] || n[a] instanceof Number) ? (l[a] = e[a] + n[a]) : (l[a] = void 0 === n[a] ? e[a] : e[a] || n[a]), (a += 1);
                        return l;
                    }
                    return 0;
                }
                var add = sum;
                function sub(e, n) {
                    var r = _typeof$1(e),
                        i = _typeof$1(n);
                    if (isNumerable(r, e) && isNumerable(i, n)) return 'string' === r && (e = parseInt(e, 10)), 'string' === i && (n = parseInt(n, 10)), e - n;
                    if ($bm_isInstanceOfArray(e) && isNumerable(i, n)) return (e = e.slice(0)), (e[0] -= n), e;
                    if (isNumerable(r, e) && $bm_isInstanceOfArray(n)) return ((n = n.slice(0))[0] = e - n[0]), n;
                    if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(n)) {
                        for (var a = 0, s = e.length, o = n.length, l = []; a < s || a < o; ) ('number' == typeof e[a] || e[a] instanceof Number) && ('number' == typeof n[a] || n[a] instanceof Number) ? (l[a] = e[a] - n[a]) : (l[a] = void 0 === n[a] ? e[a] : e[a] || n[a]), (a += 1);
                        return l;
                    }
                    return 0;
                }
                function mul(e, n) {
                    var r,
                        i,
                        a,
                        s = _typeof$1(e),
                        o = _typeof$1(n);
                    if (isNumerable(s, e) && isNumerable(o, n)) return e * n;
                    if ($bm_isInstanceOfArray(e) && isNumerable(o, n)) {
                        for (i = 0, r = createTypedArray('float32', (a = e.length)); i < a; i += 1) r[i] = e[i] * n;
                        return r;
                    }
                    if (isNumerable(s, e) && $bm_isInstanceOfArray(n)) {
                        for (i = 0, r = createTypedArray('float32', (a = n.length)); i < a; i += 1) r[i] = e * n[i];
                        return r;
                    }
                    return 0;
                }
                function div(e, n) {
                    var r,
                        i,
                        a,
                        s = _typeof$1(e),
                        o = _typeof$1(n);
                    if (isNumerable(s, e) && isNumerable(o, n)) return e / n;
                    if ($bm_isInstanceOfArray(e) && isNumerable(o, n)) {
                        for (i = 0, r = createTypedArray('float32', (a = e.length)); i < a; i += 1) r[i] = e[i] / n;
                        return r;
                    }
                    if (isNumerable(s, e) && $bm_isInstanceOfArray(n)) {
                        for (i = 0, r = createTypedArray('float32', (a = n.length)); i < a; i += 1) r[i] = e / n[i];
                        return r;
                    }
                    return 0;
                }
                function mod(e, n) {
                    return 'string' == typeof e && (e = parseInt(e, 10)), 'string' == typeof n && (n = parseInt(n, 10)), e % n;
                }
                var $bm_sum = sum,
                    $bm_sub = sub,
                    $bm_mul = mul,
                    $bm_div = div,
                    $bm_mod = mod;
                function clamp(e, n, r) {
                    if (n > r) {
                        var i = r;
                        (r = n), (n = i);
                    }
                    return Math.min(Math.max(e, n), r);
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
                function length(e, n) {
                    if ('number' == typeof e || e instanceof Number) return (n = n || 0), Math.abs(e - n);
                    !n && (n = helperLengthArray);
                    var r,
                        i = Math.min(e.length, n.length),
                        a = 0;
                    for (r = 0; r < i; r += 1) a += Math.pow(n[r] - e[r], 2);
                    return Math.sqrt(a);
                }
                function normalize(e) {
                    return div(e, length(e));
                }
                function rgbToHsl(e) {
                    var n,
                        r,
                        i = e[0],
                        a = e[1],
                        s = e[2],
                        o = Math.max(i, a, s),
                        l = Math.min(i, a, s),
                        u = (o + l) / 2;
                    if (o === l) (n = 0), (r = 0);
                    else {
                        var c = o - l;
                        switch (((r = u > 0.5 ? c / (2 - o - l) : c / (o + l)), o)) {
                            case i:
                                n = (a - s) / c + (a < s ? 6 : 0);
                                break;
                            case a:
                                n = (s - i) / c + 2;
                                break;
                            case s:
                                n = (i - a) / c + 4;
                        }
                        n /= 6;
                    }
                    return [n, r, u, e[3]];
                }
                function hue2rgb(e, n, r) {
                    return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (n - e) * 6 * r : r < 0.5 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
                }
                function hslToRgb(e) {
                    var n,
                        r,
                        i,
                        a = e[0],
                        s = e[1],
                        o = e[2];
                    if (0 === s) (n = o), (i = o), (r = o);
                    else {
                        var l = o < 0.5 ? o * (1 + s) : o + s - o * s,
                            u = 2 * o - l;
                        (n = hue2rgb(u, l, a + 1 / 3)), (r = hue2rgb(u, l, a)), (i = hue2rgb(u, l, a - 1 / 3));
                    }
                    return [n, r, i, e[3]];
                }
                function linear(e, n, r, i, a) {
                    if (((void 0 === i || void 0 === a) && ((i = n), (a = r), (n = 0), (r = 1)), r < n)) {
                        var s,
                            o = r;
                        (r = n), (n = o);
                    }
                    if (e <= n) return i;
                    if (e >= r) return a;
                    var l = r === n ? 0 : (e - n) / (r - n);
                    if (!i.length) return i + (a - i) * l;
                    var u = i.length,
                        c = createTypedArray('float32', u);
                    for (s = 0; s < u; s += 1) c[s] = i[s] + (a[s] - i[s]) * l;
                    return c;
                }
                function random(e, n) {
                    if ((void 0 === n && (void 0 === e ? ((e = 0), (n = 1)) : ((n = e), (e = void 0))), n.length)) {
                        var r,
                            i = n.length;
                        !e && (e = createTypedArray('float32', i));
                        var a = createTypedArray('float32', i),
                            s = BMMath.random();
                        for (r = 0; r < i; r += 1) a[r] = e[r] + s * (n[r] - e[r]);
                        return a;
                    }
                    return void 0 === e && (e = 0), e + BMMath.random() * (n - e);
                }
                function createPath(e, n, r, i) {
                    var a,
                        s,
                        o,
                        l = e.length,
                        u = shapePool.newElement();
                    u.setPathData(!!i, l);
                    var c = [0, 0];
                    for (a = 0; a < l; a += 1) (s = n && n[a] ? n[a] : c), (o = r && r[a] ? r[a] : c), u.setTripleAt(e[a][0], e[a][1], o[0] + e[a][0], o[1] + e[a][1], s[0] + e[a][0], s[1] + e[a][1], a, !0);
                    return u;
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
                        wiggle = function (e, n) {
                            var r,
                                i,
                                a = this.pv.length ? this.pv.length : 1,
                                s = createTypedArray('float32', a);
                            e = 5;
                            var o = Math.floor(time * e);
                            for (r = 0, i = 0; r < o; ) {
                                for (i = 0; i < a; i += 1) s[i] += -n + 2 * n * BMMath.random();
                                r += 1;
                            }
                            var l = time * e,
                                u = l - Math.floor(l),
                                c = createTypedArray('float32', a);
                            if (a > 1) {
                                for (i = 0; i < a; i += 1) c[i] = this.pv[i] + s[i] + (-n + 2 * n * BMMath.random()) * u;
                                return c;
                            }
                            return this.pv + s[0] + (-n + 2 * n * BMMath.random()) * u;
                        }.bind(this);
                    function loopInDuration(e, n) {
                        return loopIn(e, n, !0);
                    }
                    function loopOutDuration(e, n) {
                        return loopOut(e, n, !0);
                    }
                    thisProperty.loopIn && (loop_in = loopIn = thisProperty.loopIn.bind(thisProperty)), thisProperty.loopOut && (loop_out = loopOut = thisProperty.loopOut.bind(thisProperty)), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                    function lookAt(e, n) {
                        var r = [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
                            i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                        return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
                    }
                    function easeOut(e, n, r, i, a) {
                        return applyEase(easeOutBez, e, n, r, i, a);
                    }
                    function easeIn(e, n, r, i, a) {
                        return applyEase(easeInBez, e, n, r, i, a);
                    }
                    function ease(e, n, r, i, a) {
                        return applyEase(easeInOutBez, e, n, r, i, a);
                    }
                    function applyEase(e, n, r, i, a, s) {
                        void 0 === a ? ((a = r), (s = i)) : (n = (n - r) / (i - r)), n > 1 ? (n = 1) : n < 0 && (n = 0);
                        var o = e(n);
                        if ($bm_isInstanceOfArray(a)) {
                            var l,
                                u = a.length,
                                c = createTypedArray('float32', u);
                            for (l = 0; l < u; l += 1) c[l] = (s[l] - a[l]) * o + a[l];
                            return c;
                        }
                        return (s - a) * o + a;
                    }
                    function nearestKey(e) {
                        var n,
                            r,
                            i,
                            a = data.k.length;
                        if (data.k.length && 'number' != typeof data.k[0]) {
                            if (((r = -1), (e *= elem.comp.globalData.frameRate) < data.k[0].t)) (r = 1), (i = data.k[0].t);
                            else {
                                for (n = 0; n < a - 1; n += 1) {
                                    if (e === data.k[n].t) {
                                        (r = n + 1), (i = data.k[n].t);
                                        break;
                                    }
                                    if (e > data.k[n].t && e < data.k[n + 1].t) {
                                        e - data.k[n].t > data.k[n + 1].t - e ? ((r = n + 2), (i = data.k[n + 1].t)) : ((r = n + 1), (i = data.k[n].t));
                                        break;
                                    }
                                }
                                -1 === r && ((r = n + 1), (i = data.k[n].t));
                            }
                        } else (r = 0), (i = 0);
                        var s = {};
                        return (s.index = r), (s.time = i / elem.comp.globalData.frameRate), s;
                    }
                    function key(e) {
                        if (!data.k.length || 'number' == typeof data.k[0]) throw Error('The property has no keyframe at index ' + e);
                        (e -= 1),
                            (n = {
                                time: data.k[e].t / elem.comp.globalData.frameRate,
                                value: []
                            });
                        var n,
                            r,
                            i,
                            a = Object.prototype.hasOwnProperty.call(data.k[e], 's') ? data.k[e].s : data.k[e - 1].e;
                        for (r = 0, i = a.length; r < i; r += 1) (n[r] = a[r]), (n.value[r] = a[r]);
                        return n;
                    }
                    function framesToTime(e, n) {
                        return !n && (n = elem.comp.globalData.frameRate), e / n;
                    }
                    function timeToFrames(e, n) {
                        return !e && 0 !== e && (e = time), !n && (n = elem.comp.globalData.frameRate), e * n;
                    }
                    function seedRandom(e) {
                        BMMath.seedrandom(randSeed + e);
                    }
                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime();
                    }
                    function substring(e, n) {
                        if ('string' == typeof value) return void 0 === n ? value.substring(e) : value.substring(e, n);
                        return '';
                    }
                    function substr(e, n) {
                        if ('string' == typeof value) return void 0 === n ? value.substr(e) : value.substr(e, n);
                        return '';
                    }
                    function posterizeTime(e) {
                        (time = 0 === e ? 0 : Math.floor(time * e) / e), (value = valueAtTime(time));
                    }
                    var index = elem.data.ind,
                        hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                        randSeed = Math.floor(1000000 * Math.random()),
                        globalData = elem.globalData;
                    function executeExpression(e) {
                        return ((value = e), this.frameExpressionId === elem.globalData.frameId && 'textSelector' !== this.propType) ? value : ('textSelector' === this.propType && ((textIndex = this.textIndex), (textTotal = this.textTotal), (selectorValue = this.selectorValue)), !thisLayer && ((text = elem.layerInterface.text), (thisLayer = elem.layerInterface), (thisComp = elem.comp.compInterface), (toWorld = thisLayer.toWorld.bind(thisLayer)), (fromWorld = thisLayer.fromWorld.bind(thisLayer)), (fromComp = thisLayer.fromComp.bind(thisLayer)), (toComp = thisLayer.toComp.bind(thisLayer)), (mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null), (fromCompToSurface = fromComp)), !transform && (($bm_transform = transform = elem.layerInterface('ADBE Transform Group')), transform && (anchorPoint = transform.anchorPoint)), 4 === elemType && !content && (content = thisLayer('ADBE Root Vectors Group')), !effect && (effect = thisLayer(4)), (hasParent = !!(elem.hierarchy && elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), (time = this.comp.renderedFrame / this.comp.globalData.frameRate), _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), (this.frameExpressionId = elem.globalData.frameId), (scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt));
                    }
                    return (executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData]), executeExpression;
                }
                return (ob.initiateExpression = initiateExpression), (ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal]), (ob.resetFrame = resetFrame), ob;
            })(),
            Expressions = (function () {
                var e = {};
                function n(e) {
                    var n = 0,
                        r = [];
                    function i() {
                        n += 1;
                    }
                    function a() {
                        0 == (n -= 1) && o();
                    }
                    function s(e) {
                        -1 === r.indexOf(e) && r.push(e);
                    }
                    function o() {
                        var e,
                            n = r.length;
                        for (e = 0; e < n; e += 1) r[e].release();
                        r.length = 0;
                    }
                    (e.renderer.compInterface = CompExpressionInterface(e.renderer)), e.renderer.globalData.projectInterface.registerComposition(e.renderer), (e.renderer.globalData.pushExpression = i), (e.renderer.globalData.popExpression = a), (e.renderer.globalData.registerExpressionProperty = s);
                }
                return (e.initExpressions = n), (e.resetFrame = ExpressionManager.resetFrame), e;
            })(),
            MaskManagerInterface = (function () {
                function e(e, n) {
                    (this._mask = e), (this._data = n);
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
                    function (n) {
                        var r,
                            i = createSizedArray(n.viewData.length),
                            a = n.viewData.length;
                        for (r = 0; r < a; r += 1) i[r] = new e(n.viewData[r], n.masksProperties[r]);
                        return function (e) {
                            for (r = 0; r < a; ) {
                                if (n.masksProperties[r].nm === e) return i[r];
                                r += 1;
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
                    n = {
                        pv: [0, 0, 0],
                        v: [0, 0, 0],
                        mult: 1
                    };
                function r(e, n, r) {
                    Object.defineProperty(e, 'velocity', {
                        get: function () {
                            return n.getVelocityAtTime(n.comp.currentFrame);
                        }
                    }),
                        (e.numKeys = n.keyframes ? n.keyframes.length : 0),
                        (e.key = function (i) {
                            if (!e.numKeys) return 0;
                            var a = '';
                            a = 's' in n.keyframes[i - 1] ? n.keyframes[i - 1].s : 'e' in n.keyframes[i - 2] ? n.keyframes[i - 2].e : n.keyframes[i - 2].s;
                            var s = 'unidimensional' === r ? new Number(a) : Object.assign({}, a);
                            return (s.time = n.keyframes[i - 1].t / n.elem.comp.globalData.frameRate), (s.value = 'unidimensional' === r ? a[0] : a), s;
                        }),
                        (e.valueAtTime = n.getValueAtTime),
                        (e.speedAtTime = n.getSpeedAtTime),
                        (e.velocityAtTime = n.getVelocityAtTime),
                        (e.propertyGroup = n.propertyGroup);
                }
                function i(n) {
                    (!n || !('pv' in n)) && (n = e);
                    var i = 1 / n.mult,
                        a = n.pv * i,
                        s = new Number(a);
                    return (
                        (s.value = a),
                        r(s, n, 'unidimensional'),
                        function () {
                            return n.k && n.getValue(), (a = n.v * i), s.value !== a && (((s = new Number(a)).value = a), r(s, n, 'unidimensional')), s;
                        }
                    );
                }
                function a(e) {
                    (!e || !('pv' in e)) && (e = n);
                    var i = 1 / e.mult,
                        a = (e.data && e.data.l) || e.pv.length,
                        s = createTypedArray('float32', a),
                        o = createTypedArray('float32', a);
                    return (
                        (s.value = o),
                        r(s, e, 'multidimensional'),
                        function () {
                            e.k && e.getValue();
                            for (var n = 0; n < a; n += 1) (o[n] = e.v[n] * i), (s[n] = o[n]);
                            return s;
                        }
                    );
                }
                function s() {
                    return e;
                }
                return function (e) {
                    return e ? ('unidimensional' === e.propType ? i(e) : a(e)) : s;
                };
            })(),
            TransformExpressionInterface = (function () {
                return function (e) {
                    var n, r, i, a;
                    function s(e) {
                        switch (e) {
                            case 'scale':
                            case 'Scale':
                            case 'ADBE Scale':
                            case 6:
                                return s.scale;
                            case 'rotation':
                            case 'Rotation':
                            case 'ADBE Rotation':
                            case 'ADBE Rotate Z':
                            case 10:
                                return s.rotation;
                            case 'ADBE Rotate X':
                                return s.xRotation;
                            case 'ADBE Rotate Y':
                                return s.yRotation;
                            case 'position':
                            case 'Position':
                            case 'ADBE Position':
                            case 2:
                                return s.position;
                            case 'ADBE Position_0':
                                return s.xPosition;
                            case 'ADBE Position_1':
                                return s.yPosition;
                            case 'ADBE Position_2':
                                return s.zPosition;
                            case 'anchorPoint':
                            case 'AnchorPoint':
                            case 'Anchor Point':
                            case 'ADBE AnchorPoint':
                            case 1:
                                return s.anchorPoint;
                            case 'opacity':
                            case 'Opacity':
                            case 11:
                                return s.opacity;
                            default:
                                return null;
                        }
                    }
                    return (
                        Object.defineProperty(s, 'rotation', { get: ExpressionPropertyInterface(e.r || e.rz) }),
                        Object.defineProperty(s, 'zRotation', { get: ExpressionPropertyInterface(e.rz || e.r) }),
                        Object.defineProperty(s, 'xRotation', { get: ExpressionPropertyInterface(e.rx) }),
                        Object.defineProperty(s, 'yRotation', { get: ExpressionPropertyInterface(e.ry) }),
                        Object.defineProperty(s, 'scale', { get: ExpressionPropertyInterface(e.s) }),
                        e.p ? (a = ExpressionPropertyInterface(e.p)) : ((n = ExpressionPropertyInterface(e.px)), (r = ExpressionPropertyInterface(e.py)), e.pz && (i = ExpressionPropertyInterface(e.pz))),
                        Object.defineProperty(s, 'position', {
                            get: function () {
                                return e.p ? a() : [n(), r(), i ? i() : 0];
                            }
                        }),
                        Object.defineProperty(s, 'xPosition', { get: ExpressionPropertyInterface(e.px) }),
                        Object.defineProperty(s, 'yPosition', { get: ExpressionPropertyInterface(e.py) }),
                        Object.defineProperty(s, 'zPosition', { get: ExpressionPropertyInterface(e.pz) }),
                        Object.defineProperty(s, 'anchorPoint', { get: ExpressionPropertyInterface(e.a) }),
                        Object.defineProperty(s, 'opacity', { get: ExpressionPropertyInterface(e.o) }),
                        Object.defineProperty(s, 'skew', { get: ExpressionPropertyInterface(e.sk) }),
                        Object.defineProperty(s, 'skewAxis', { get: ExpressionPropertyInterface(e.sa) }),
                        Object.defineProperty(s, 'orientation', { get: ExpressionPropertyInterface(e.or) }),
                        s
                    );
                };
            })(),
            LayerExpressionInterface = (function () {
                function e(e) {
                    var n = new Matrix();
                    return void 0 !== e ? this._elem.finalTransform.mProp.getValueAtTime(e).clone(n) : this._elem.finalTransform.mProp.applyToMatrix(n), n;
                }
                function n(e, n) {
                    var r = this.getMatrix(n);
                    return (r.props[12] = 0), (r.props[13] = 0), (r.props[14] = 0), this.applyPoint(r, e);
                }
                function r(e, n) {
                    var r = this.getMatrix(n);
                    return this.applyPoint(r, e);
                }
                function i(e, n) {
                    var r = this.getMatrix(n);
                    return (r.props[12] = 0), (r.props[13] = 0), (r.props[14] = 0), this.invertPoint(r, e);
                }
                function a(e, n) {
                    var r = this.getMatrix(n);
                    return this.invertPoint(r, e);
                }
                function s(e, n) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r,
                            i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.applyToPointArray(n[0], n[1], n[2] || 0);
                }
                function o(e, n) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r,
                            i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                    }
                    return e.inversePoint(n);
                }
                function l(e) {
                    var n = new Matrix();
                    if ((n.reset(), this._elem.finalTransform.mProp.applyToMatrix(n), this._elem.hierarchy && this._elem.hierarchy.length)) {
                        var r,
                            i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(n);
                    }
                    return n.inversePoint(e);
                }
                function u() {
                    return [1, 1, 1, 1];
                }
                return function (c) {
                    function d(e) {
                        _.mask = new MaskManagerInterface(e, c);
                    }
                    function f(e) {
                        _.effect = e;
                    }
                    function _(e) {
                        switch (e) {
                            case 'ADBE Root Vectors Group':
                            case 'Contents':
                            case 2:
                                return _.shapeInterface;
                            case 1:
                            case 6:
                            case 'Transform':
                            case 'transform':
                            case 'ADBE Transform Group':
                                return h;
                            case 4:
                            case 'ADBE Effect Parade':
                            case 'effects':
                            case 'Effects':
                                return _.effect;
                            case 'ADBE Text Properties':
                                return _.textInterface;
                            default:
                                return null;
                        }
                    }
                    (_.getMatrix = e), (_.invertPoint = o), (_.applyPoint = s), (_.toWorld = r), (_.toWorldVec = n), (_.fromWorld = a), (_.fromWorldVec = i), (_.toComp = r), (_.fromComp = l), (_.sampleImage = u), (_.sourceRectAtTime = c.sourceRectAtTime.bind(c)), (_._elem = c);
                    var h,
                        p = getDescriptor((h = TransformExpressionInterface(c.finalTransform.mProp)), 'anchorPoint');
                    return (
                        Object.defineProperties(_, {
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
                            rotation: getDescriptor(h, 'rotation'),
                            scale: getDescriptor(h, 'scale'),
                            position: getDescriptor(h, 'position'),
                            opacity: getDescriptor(h, 'opacity'),
                            anchorPoint: p,
                            anchor_point: p,
                            transform: {
                                get: function () {
                                    return h;
                                }
                            },
                            active: {
                                get: function () {
                                    return c.isInRange;
                                }
                            }
                        }),
                        (_.startTime = c.data.st),
                        (_.index = c.data.ind),
                        (_.source = c.data.refId),
                        (_.height = 0 === c.data.ty ? c.data.h : 100),
                        (_.width = 0 === c.data.ty ? c.data.w : 100),
                        (_.inPoint = c.data.ip / c.comp.globalData.frameRate),
                        (_.outPoint = c.data.op / c.comp.globalData.frameRate),
                        (_._name = c.data.nm),
                        (_.registerMaskInterface = d),
                        (_.registerEffectsInterface = f),
                        _
                    );
                };
            })(),
            propertyGroupFactory = (function () {
                return function (e, n) {
                    return function (r) {
                        return (r = void 0 === r ? 1 : r) <= 0 ? e : n(r - 1);
                    };
                };
            })(),
            PropertyInterface = (function () {
                return function (e, n) {
                    var r = { _name: e };
                    return function e(e) {
                        return (e = void 0 === e ? 1 : e) <= 0 ? r : n(e - 1);
                    };
                };
            })(),
            EffectsExpressionInterface = (function () {
                function e(r, i, a, s) {
                    function o(e) {
                        for (var n = r.ef, i = 0, a = n.length; i < a; ) {
                            if (e === n[i].nm || e === n[i].mn || e === n[i].ix) {
                                if (5 === n[i].ty) return c[i];
                                return c[i]();
                            }
                            i += 1;
                        }
                        throw Error();
                    }
                    var l,
                        u = propertyGroupFactory(o, a),
                        c = [],
                        d = r.ef.length;
                    for (l = 0; l < d; l += 1) 5 === r.ef[l].ty ? c.push(e(r.ef[l], i.effectElements[l], i.effectElements[l].propertyGroup, s)) : c.push(n(i.effectElements[l], r.ef[l].ty, s, u));
                    return (
                        'ADBE Color Control' === r.mn &&
                            Object.defineProperty(o, 'color', {
                                get: function () {
                                    return c[0]();
                                }
                            }),
                        Object.defineProperties(o, {
                            numProperties: {
                                get: function () {
                                    return r.np;
                                }
                            },
                            _name: { value: r.nm },
                            propertyGroup: { value: u }
                        }),
                        (o.enabled = 0 !== r.en),
                        (o.active = o.enabled),
                        o
                    );
                }
                function n(e, n, r, i) {
                    var a = ExpressionPropertyInterface(e.p);
                    function s() {
                        return 10 === n ? r.comp.compInterface(e.p.v) : a();
                    }
                    return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface('', i)), s;
                }
                return {
                    createEffectsInterface: function n(n, r) {
                        if (n.effectsManager) {
                            var i,
                                a = [],
                                s = n.data.ef,
                                o = n.effectsManager.effectElements.length;
                            for (i = 0; i < o; i += 1) a.push(e(s[i], n.effectsManager.effectElements[i], r, n));
                            var l = n.data.ef || [],
                                u = function (e) {
                                    for (i = 0, o = l.length; i < o; ) {
                                        if (e === l[i].nm || e === l[i].mn || e === l[i].ix) return a[i];
                                        i += 1;
                                    }
                                    return null;
                                };
                            return (
                                Object.defineProperty(u, 'numProperties', {
                                    get: function () {
                                        return l.length;
                                    }
                                }),
                                u
                            );
                        }
                        return null;
                    }
                };
            })(),
            ShapePathInterface = (function () {
                return function (e, n, r) {
                    var i = n.sh;
                    function a(e) {
                        return 'Shape' === e || 'shape' === e || 'Path' === e || 'path' === e || 'ADBE Vector Shape' === e || 2 === e ? a.path : null;
                    }
                    var s = propertyGroupFactory(a, r);
                    return (
                        i.setGroupProperty(PropertyInterface('Path', s)),
                        Object.defineProperties(a, {
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
                            propertyGroup: { value: r }
                        }),
                        a
                    );
                };
            })(),
            ShapeExpressionInterface = (function () {
                function e(e, n, u) {
                    var p,
                        m = [],
                        g = e ? e.length : 0;
                    for (p = 0; p < g; p += 1) 'gr' === e[p].ty ? m.push(r(e[p], n[p], u)) : 'fl' === e[p].ty ? m.push(i(e[p], n[p], u)) : 'st' === e[p].ty ? m.push(o(e[p], n[p], u)) : 'tm' === e[p].ty ? m.push(l(e[p], n[p], u)) : 'tr' === e[p].ty || ('el' === e[p].ty ? m.push(c(e[p], n[p], u)) : 'sr' === e[p].ty ? m.push(d(e[p], n[p], u)) : 'sh' === e[p].ty ? m.push(ShapePathInterface(e[p], n[p], u)) : 'rc' === e[p].ty ? m.push(f(e[p], n[p], u)) : 'rd' === e[p].ty ? m.push(_(e[p], n[p], u)) : 'rp' === e[p].ty ? m.push(h(e[p], n[p], u)) : 'gf' === e[p].ty ? m.push(a(e[p], n[p], u)) : m.push(s(e[p], n[p], u)));
                    return m;
                }
                function n(n, r, i) {
                    var a,
                        s = function (e) {
                            for (var n = 0, r = a.length; n < r; ) {
                                if (a[n]._name === e || a[n].mn === e || a[n].propertyIndex === e || a[n].ix === e || a[n].ind === e) return a[n];
                                n += 1;
                            }
                            return 'number' == typeof e ? a[e - 1] : null;
                        };
                    (s.propertyGroup = propertyGroupFactory(s, i)), (a = e(n.it, r.it, s.propertyGroup)), (s.numProperties = a.length);
                    var o = u(n.it[n.it.length - 1], r.it[r.it.length - 1], s.propertyGroup);
                    return (s.transform = o), (s.propertyIndex = n.cix), (s._name = n.nm), s;
                }
                function r(e, r, i) {
                    var a = function (e) {
                        switch (e) {
                            case 'ADBE Vectors Group':
                            case 'Contents':
                            case 2:
                                return a.content;
                            default:
                                return a.transform;
                        }
                    };
                    a.propertyGroup = propertyGroupFactory(a, i);
                    var s = n(e, r, a.propertyGroup),
                        o = u(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                    return (
                        (a.content = s),
                        (a.transform = o),
                        Object.defineProperty(a, '_name', {
                            get: function () {
                                return e.nm;
                            }
                        }),
                        (a.numProperties = e.np),
                        (a.propertyIndex = e.ix),
                        (a.nm = e.nm),
                        (a.mn = e.mn),
                        a
                    );
                }
                function i(e, n, r) {
                    function i(e) {
                        return 'Color' === e || 'color' === e ? i.color : 'Opacity' === e || 'opacity' === e ? i.opacity : null;
                    }
                    return (
                        Object.defineProperties(i, {
                            color: { get: ExpressionPropertyInterface(n.c) },
                            opacity: { get: ExpressionPropertyInterface(n.o) },
                            _name: { value: e.nm },
                            mn: { value: e.mn }
                        }),
                        n.c.setGroupProperty(PropertyInterface('Color', r)),
                        n.o.setGroupProperty(PropertyInterface('Opacity', r)),
                        i
                    );
                }
                function a(e, n, r) {
                    function i(e) {
                        return 'Start Point' === e || 'start point' === e ? i.startPoint : 'End Point' === e || 'end point' === e ? i.endPoint : 'Opacity' === e || 'opacity' === e ? i.opacity : null;
                    }
                    return (
                        Object.defineProperties(i, {
                            startPoint: { get: ExpressionPropertyInterface(n.s) },
                            endPoint: { get: ExpressionPropertyInterface(n.e) },
                            opacity: { get: ExpressionPropertyInterface(n.o) },
                            type: {
                                get: function () {
                                    return 'a';
                                }
                            },
                            _name: { value: e.nm },
                            mn: { value: e.mn }
                        }),
                        n.s.setGroupProperty(PropertyInterface('Start Point', r)),
                        n.e.setGroupProperty(PropertyInterface('End Point', r)),
                        n.o.setGroupProperty(PropertyInterface('Opacity', r)),
                        i
                    );
                }
                function s() {
                    return function e() {
                        return null;
                    };
                }
                function o(e, n, r) {
                    var i,
                        a = propertyGroupFactory(c, r),
                        s = propertyGroupFactory(u, a);
                    function o(r) {
                        Object.defineProperty(u, e.d[r].nm, { get: ExpressionPropertyInterface(n.d.dataProps[r].p) });
                    }
                    var l = e.d ? e.d.length : 0,
                        u = {};
                    for (i = 0; i < l; i += 1) o(i), n.d.dataProps[i].p.setGroupProperty(s);
                    function c(e) {
                        return 'Color' === e || 'color' === e ? c.color : 'Opacity' === e || 'opacity' === e ? c.opacity : 'Stroke Width' === e || 'stroke width' === e ? c.strokeWidth : null;
                    }
                    return (
                        Object.defineProperties(c, {
                            color: { get: ExpressionPropertyInterface(n.c) },
                            opacity: { get: ExpressionPropertyInterface(n.o) },
                            strokeWidth: { get: ExpressionPropertyInterface(n.w) },
                            dash: {
                                get: function () {
                                    return u;
                                }
                            },
                            _name: { value: e.nm },
                            mn: { value: e.mn }
                        }),
                        n.c.setGroupProperty(PropertyInterface('Color', a)),
                        n.o.setGroupProperty(PropertyInterface('Opacity', a)),
                        n.w.setGroupProperty(PropertyInterface('Stroke Width', a)),
                        c
                    );
                }
                function l(e, n, r) {
                    function i(n) {
                        return n === e.e.ix || 'End' === n || 'end' === n ? i.end : n === e.s.ix ? i.start : n === e.o.ix ? i.offset : null;
                    }
                    var a = propertyGroupFactory(i, r);
                    return (
                        (i.propertyIndex = e.ix),
                        n.s.setGroupProperty(PropertyInterface('Start', a)),
                        n.e.setGroupProperty(PropertyInterface('End', a)),
                        n.o.setGroupProperty(PropertyInterface('Offset', a)),
                        (i.propertyIndex = e.ix),
                        (i.propertyGroup = r),
                        Object.defineProperties(i, {
                            start: { get: ExpressionPropertyInterface(n.s) },
                            end: { get: ExpressionPropertyInterface(n.e) },
                            offset: { get: ExpressionPropertyInterface(n.o) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function u(e, n, r) {
                    function i(n) {
                        return e.a.ix === n || 'Anchor Point' === n ? i.anchorPoint : e.o.ix === n || 'Opacity' === n ? i.opacity : e.p.ix === n || 'Position' === n ? i.position : e.r.ix === n || 'Rotation' === n || 'ADBE Vector Rotation' === n ? i.rotation : e.s.ix === n || 'Scale' === n ? i.scale : (e.sk && e.sk.ix === n) || 'Skew' === n ? i.skew : (e.sa && e.sa.ix === n) || 'Skew Axis' === n ? i.skewAxis : null;
                    }
                    var a = propertyGroupFactory(i, r);
                    return (
                        n.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', a)),
                        n.transform.mProps.p.setGroupProperty(PropertyInterface('Position', a)),
                        n.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', a)),
                        n.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', a)),
                        n.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', a)),
                        n.transform.mProps.sk && (n.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', a)), n.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', a))),
                        n.transform.op.setGroupProperty(PropertyInterface('Opacity', a)),
                        Object.defineProperties(i, {
                            opacity: { get: ExpressionPropertyInterface(n.transform.mProps.o) },
                            position: { get: ExpressionPropertyInterface(n.transform.mProps.p) },
                            anchorPoint: { get: ExpressionPropertyInterface(n.transform.mProps.a) },
                            scale: { get: ExpressionPropertyInterface(n.transform.mProps.s) },
                            rotation: { get: ExpressionPropertyInterface(n.transform.mProps.r) },
                            skew: { get: ExpressionPropertyInterface(n.transform.mProps.sk) },
                            skewAxis: { get: ExpressionPropertyInterface(n.transform.mProps.sa) },
                            _name: { value: e.nm }
                        }),
                        (i.ty = 'tr'),
                        (i.mn = e.mn),
                        (i.propertyGroup = r),
                        i
                    );
                }
                function c(e, n, r) {
                    function i(n) {
                        return e.p.ix === n ? i.position : e.s.ix === n ? i.size : null;
                    }
                    var a = propertyGroupFactory(i, r);
                    i.propertyIndex = e.ix;
                    var s = 'tm' === n.sh.ty ? n.sh.prop : n.sh;
                    return (
                        s.s.setGroupProperty(PropertyInterface('Size', a)),
                        s.p.setGroupProperty(PropertyInterface('Position', a)),
                        Object.defineProperties(i, {
                            size: { get: ExpressionPropertyInterface(s.s) },
                            position: { get: ExpressionPropertyInterface(s.p) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function d(e, n, r) {
                    function i(n) {
                        return e.p.ix === n ? i.position : e.r.ix === n ? i.rotation : e.pt.ix === n ? i.points : e.or.ix === n || 'ADBE Vector Star Outer Radius' === n ? i.outerRadius : e.os.ix === n ? i.outerRoundness : e.ir && (e.ir.ix === n || 'ADBE Vector Star Inner Radius' === n) ? i.innerRadius : e.is && e.is.ix === n ? i.innerRoundness : null;
                    }
                    var a = propertyGroupFactory(i, r),
                        s = 'tm' === n.sh.ty ? n.sh.prop : n.sh;
                    return (
                        (i.propertyIndex = e.ix),
                        s.or.setGroupProperty(PropertyInterface('Outer Radius', a)),
                        s.os.setGroupProperty(PropertyInterface('Outer Roundness', a)),
                        s.pt.setGroupProperty(PropertyInterface('Points', a)),
                        s.p.setGroupProperty(PropertyInterface('Position', a)),
                        s.r.setGroupProperty(PropertyInterface('Rotation', a)),
                        e.ir && (s.ir.setGroupProperty(PropertyInterface('Inner Radius', a)), s.is.setGroupProperty(PropertyInterface('Inner Roundness', a))),
                        Object.defineProperties(i, {
                            position: { get: ExpressionPropertyInterface(s.p) },
                            rotation: { get: ExpressionPropertyInterface(s.r) },
                            points: { get: ExpressionPropertyInterface(s.pt) },
                            outerRadius: { get: ExpressionPropertyInterface(s.or) },
                            outerRoundness: { get: ExpressionPropertyInterface(s.os) },
                            innerRadius: { get: ExpressionPropertyInterface(s.ir) },
                            innerRoundness: { get: ExpressionPropertyInterface(s.is) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function f(e, n, r) {
                    function i(n) {
                        return e.p.ix === n ? i.position : e.r.ix === n ? i.roundness : e.s.ix === n || 'Size' === n || 'ADBE Vector Rect Size' === n ? i.size : null;
                    }
                    var a = propertyGroupFactory(i, r),
                        s = 'tm' === n.sh.ty ? n.sh.prop : n.sh;
                    return (
                        (i.propertyIndex = e.ix),
                        s.p.setGroupProperty(PropertyInterface('Position', a)),
                        s.s.setGroupProperty(PropertyInterface('Size', a)),
                        s.r.setGroupProperty(PropertyInterface('Rotation', a)),
                        Object.defineProperties(i, {
                            position: { get: ExpressionPropertyInterface(s.p) },
                            roundness: { get: ExpressionPropertyInterface(s.r) },
                            size: { get: ExpressionPropertyInterface(s.s) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function _(e, n, r) {
                    function i(n) {
                        return e.r.ix === n || 'Round Corners 1' === n ? i.radius : null;
                    }
                    var a = propertyGroupFactory(i, r),
                        s = n;
                    return (
                        (i.propertyIndex = e.ix),
                        s.rd.setGroupProperty(PropertyInterface('Radius', a)),
                        Object.defineProperties(i, {
                            radius: { get: ExpressionPropertyInterface(s.rd) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                function h(e, n, r) {
                    function i(n) {
                        return e.c.ix === n || 'Copies' === n ? i.copies : e.o.ix === n || 'Offset' === n ? i.offset : null;
                    }
                    var a = propertyGroupFactory(i, r),
                        s = n;
                    return (
                        (i.propertyIndex = e.ix),
                        s.c.setGroupProperty(PropertyInterface('Copies', a)),
                        s.o.setGroupProperty(PropertyInterface('Offset', a)),
                        Object.defineProperties(i, {
                            copies: { get: ExpressionPropertyInterface(s.c) },
                            offset: { get: ExpressionPropertyInterface(s.o) },
                            _name: { value: e.nm }
                        }),
                        (i.mn = e.mn),
                        i
                    );
                }
                return function (n, r, i) {
                    var a;
                    function s(e) {
                        if ('number' == typeof e) return 0 === (e = void 0 === e ? 1 : e) ? i : a[e - 1];
                        for (var n = 0, r = a.length; n < r; ) {
                            if (a[n]._name === e) return a[n];
                            n += 1;
                        }
                        return null;
                    }
                    function o() {
                        return i;
                    }
                    return (s.propertyGroup = propertyGroupFactory(s, o)), (a = e(n, r, s.propertyGroup)), (s.numProperties = a.length), (s._name = 'Contents'), s;
                };
            })(),
            TextExpressionInterface = (function () {
                return function (e) {
                    var n;
                    function r(e) {
                        if ('ADBE Text Document' === e) return r.sourceText;
                        return null;
                    }
                    return (
                        Object.defineProperty(r, 'sourceText', {
                            get: function () {
                                e.textProperty.getValue();
                                var r = e.textProperty.currentData.t;
                                return (
                                    (!n || r !== n.value) &&
                                        (((n = new String(r)).value = r || new String(r)),
                                        Object.defineProperty(n, 'style', {
                                            get: function () {
                                                return { fillColor: e.textProperty.currentData.fc };
                                            }
                                        })),
                                    n
                                );
                            }
                        }),
                        r
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
                        var n = '',
                            r = e.getFootageData();
                        function i(e) {
                            if (r[e]) return ((n = e), (r = r[e]), 'object' === _typeof(r)) ? i : r;
                            var a = e.indexOf(n);
                            if (-1 !== a) return ((r = r[parseInt(e.substr(a + n.length), 10)]), 'object' === _typeof(r)) ? i : r;
                            return '';
                        }
                        return function a() {
                            return (n = ''), (r = e.getFootageData()), i;
                        };
                    },
                    n = function (n) {
                        function r(e) {
                            return 'Outline' === e ? r.outlineInterface() : null;
                        }
                        return (r._name = 'Outline'), (r.outlineInterface = e(n)), r;
                    };
                return function (e) {
                    function r(e) {
                        return 'Data' === e ? r.dataInterface : null;
                    }
                    return (r._name = 'Data'), (r.dataInterface = n(e)), r;
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
                searchExpressions: function e(e, n, r) {
                    n.x && ((r.k = !0), (r.x = !0), (r.initiateExpression = ExpressionManager.initiateExpression), r.effectsSequence.push(r.initiateExpression(e, n, r).bind(r)));
                },
                getSpeedAtTime: function e(e) {
                    var n,
                        r = -0.01,
                        i = this.getValueAtTime(e),
                        a = this.getValueAtTime(e + r),
                        s = 0;
                    if (i.length) {
                        for (n = 0; n < i.length; n += 1) s += Math.pow(a[n] - i[n], 2);
                        s = 100 * Math.sqrt(s);
                    } else s = 0;
                    return s;
                },
                getVelocityAtTime: function e(e) {
                    if (void 0 !== this.vel) return this.vel;
                    var n,
                        r,
                        i = -0.001,
                        a = this.getValueAtTime(e),
                        s = this.getValueAtTime(e + i);
                    if (a.length) for (r = 0, n = createTypedArray('float32', a.length); r < a.length; r += 1) n[r] = (s[r] - a[r]) / i;
                    else n = (s - a) / i;
                    return n;
                },
                getValueAtTime: function e(e) {
                    return (e *= this.elem.globalData.frameRate), (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && ((this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0), (this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime)), (this._cachingAtTime.lastFrame = e)), this._cachingAtTime.value;
                },
                getStaticValueAtTime: function e() {
                    return this.pv;
                },
                setGroupProperty: function e(e) {
                    this.propertyGroup = e;
                }
            };
        })();
        function addPropertyDecorator() {
            function e(e, n, r) {
                if (!this.k || !this.keyframes) return this.pv;
                e = e ? e.toLowerCase() : '';
                var i,
                    a,
                    s,
                    o,
                    l,
                    u = this.comp.renderedFrame,
                    c = this.keyframes,
                    d = c[c.length - 1].t;
                if (u <= d) return this.pv;
                if ((r ? ((i = n ? Math.abs(d - this.elem.comp.globalData.frameRate * n) : Math.max(0, d - this.elem.data.ip)), (a = d - i)) : ((!n || n > c.length - 1) && (n = c.length - 1), (i = d - (a = c[c.length - 1 - n].t))), 'pingpong' === e)) {
                    if (Math.floor((u - a) / i) % 2 != 0) return this.getValueAtTime((i - ((u - a) % i) + a) / this.comp.globalData.frameRate, 0);
                } else if ('offset' === e) {
                    var f = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
                        h = this.getValueAtTime((((u - a) % i) + a) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((u - a) / i);
                    if (this.pv.length) {
                        for (s = 0, o = (l = Array(f.length)).length; s < o; s += 1) l[s] = (_[s] - f[s]) * p + h[s];
                        return l;
                    }
                    return (_ - f) * p + h;
                } else if ('continue' === e) {
                    var m = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
                        g = this.getValueAtTime((d - 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (s = 0, o = (l = Array(m.length)).length; s < o; s += 1) l[s] = m[s] + ((m[s] - g[s]) * ((u - d) / this.comp.globalData.frameRate)) / 0.0005;
                        return l;
                    }
                    return m + ((u - d) / 0.001) * (m - g);
                }
                return this.getValueAtTime((((u - a) % i) + a) / this.comp.globalData.frameRate, 0);
            }
            function n(e, n, r) {
                if (!this.k) return this.pv;
                e = e ? e.toLowerCase() : '';
                var i,
                    a,
                    s,
                    o,
                    l,
                    u = this.comp.renderedFrame,
                    c = this.keyframes,
                    d = c[0].t;
                if (u >= d) return this.pv;
                if ((r ? ((i = n ? Math.abs(this.elem.comp.globalData.frameRate * n) : Math.max(0, this.elem.data.op - d)), (a = d + i)) : ((!n || n > c.length - 1) && (n = c.length - 1), (i = (a = c[n].t) - d)), 'pingpong' === e)) {
                    if (Math.floor((d - u) / i) % 2 == 0) return this.getValueAtTime((((d - u) % i) + d) / this.comp.globalData.frameRate, 0);
                } else if ('offset' === e) {
                    var f = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
                        _ = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                        h = this.getValueAtTime((i - ((d - u) % i) + d) / this.comp.globalData.frameRate, 0),
                        p = Math.floor((d - u) / i) + 1;
                    if (this.pv.length) {
                        for (s = 0, o = (l = Array(f.length)).length; s < o; s += 1) l[s] = h[s] - (_[s] - f[s]) * p;
                        return l;
                    }
                    return h - (_ - f) * p;
                } else if ('continue' === e) {
                    var m = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
                        g = this.getValueAtTime((d + 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (s = 0, o = (l = Array(m.length)).length; s < o; s += 1) l[s] = m[s] + ((m[s] - g[s]) * (d - u)) / 0.001;
                        return l;
                    }
                    return m + ((m - g) * (d - u)) / 0.001;
                }
                return this.getValueAtTime((i - (((d - u) % i) + d)) / this.comp.globalData.frameRate, 0);
            }
            function r(e, n) {
                if (!this.k) return this.pv;
                if (((e = 0.5 * (e || 0.4)), (n = Math.floor(n || 5)) <= 1)) return this.pv;
                var r,
                    i,
                    a = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    s = a - e,
                    o = a + e,
                    l = n > 1 ? (o - s) / (n - 1) : 1,
                    u = 0,
                    c = 0;
                for (r = this.pv.length ? createTypedArray('float32', this.pv.length) : 0; u < n; ) {
                    if (((i = this.getValueAtTime(s + u * l)), this.pv.length)) for (c = 0; c < this.pv.length; c += 1) r[c] += i[c];
                    else r += i;
                    u += 1;
                }
                if (this.pv.length) for (c = 0; c < this.pv.length; c += 1) r[c] /= n;
                else r /= n;
                return r;
            }
            function i(e) {
                !this._transformCachingAtTime && (this._transformCachingAtTime = { v: new Matrix() });
                var n = this._transformCachingAtTime.v;
                if ((n.cloneFromProps(this.pre.props), this.appliedTransformations < 1)) {
                    var r = this.a.getValueAtTime(e);
                    n.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                    var i = this.s.getValueAtTime(e);
                    n.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var a = this.sk.getValueAtTime(e),
                        s = this.sa.getValueAtTime(e);
                    n.skewFromAxis(-a * this.sk.mult, s * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                    var o = this.r.getValueAtTime(e);
                    n.rotate(-o * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                    var l = this.rz.getValueAtTime(e),
                        u = this.ry.getValueAtTime(e),
                        c = this.rx.getValueAtTime(e),
                        d = this.or.getValueAtTime(e);
                    n.rotateZ(-l * this.rz.mult)
                        .rotateY(u * this.ry.mult)
                        .rotateX(c * this.rx.mult)
                        .rotateZ(-d[2] * this.or.mult)
                        .rotateY(d[1] * this.or.mult)
                        .rotateX(d[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                    var f = this.px.getValueAtTime(e),
                        _ = this.py.getValueAtTime(e);
                    if (this.data.p.z) {
                        var h = this.pz.getValueAtTime(e);
                        n.translate(f * this.px.mult, _ * this.py.mult, -h * this.pz.mult);
                    } else n.translate(f * this.px.mult, _ * this.py.mult, 0);
                } else {
                    var p = this.p.getValueAtTime(e);
                    n.translate(p[0] * this.p.mult, p[1] * this.p.mult, -p[2] * this.p.mult);
                }
                return n;
            }
            function a() {
                return this.v.clone(new Matrix());
            }
            var s = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function (e, n, r) {
                var o = s(e, n, r);
                return o.dynamicProperties.length ? (o.getValueAtTime = i.bind(o)) : (o.getValueAtTime = a.bind(o)), (o.setGroupProperty = expressionHelpers.setGroupProperty), o;
            };
            var o = PropertyFactory.getProp;
            function l(e) {
                return (
                    !this._cachingAtTime &&
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
            PropertyFactory.getProp = function (i, a, s, l, u) {
                var c = o(i, a, s, l, u);
                c.kf ? (c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c)) : (c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c)), (c.setGroupProperty = expressionHelpers.setGroupProperty), (c.loopOut = e), (c.loopIn = n), (c.smooth = r), (c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c)), (c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c)), (c.numKeys = 1 === a.a ? a.k.length : 0), (c.propertyIndex = a.ix);
                var d = 0;
                return (
                    0 !== s && (d = createTypedArray('float32', 1 === a.a ? a.k[0].s.length : a.k.length)),
                    (c._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: d
                    }),
                    expressionHelpers.searchExpressions(i, a, c),
                    c.k && u.addDynamicProperty(c),
                    c
                );
            };
            var u = ShapePropertyFactory.getConstructorFunction(),
                c = ShapePropertyFactory.getKeyframedConstructorFunction();
            function d() {}
            (d.prototype = {
                vertices: function (e, n) {
                    this.k && this.getValue();
                    var r,
                        i = this.v;
                    void 0 !== n && (i = this.getValueAtTime(n, 0));
                    var a = i._length,
                        s = i[e],
                        o = i.v,
                        l = createSizedArray(a);
                    for (r = 0; r < a; r += 1) 'i' === e || 'o' === e ? (l[r] = [s[r][0] - o[r][0], s[r][1] - o[r][1]]) : (l[r] = [s[r][0], s[r][1]]);
                    return l;
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
                pointOnPath: function (e, n) {
                    var r,
                        i = this.v;
                    void 0 !== n && (i = this.getValueAtTime(n, 0)), !this._segmentsLength && (this._segmentsLength = bez.getSegmentsLength(i));
                    for (var a = this._segmentsLength, s = a.lengths, o = a.totalLength * e, l = 0, u = s.length, c = 0; l < u; ) {
                        if (c + s[l].addedLength > o) {
                            var d = l,
                                f = i.c && l === u - 1 ? 0 : l + 1,
                                _ = (o - c) / s[l].addedLength;
                            r = bez.getPointInSegment(i.v[d], i.v[f], i.o[d], i.i[f], _, s[l]);
                            break;
                        }
                        c += s[l].addedLength;
                        l += 1;
                    }
                    return !r && (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r;
                },
                vectorOnPath: function (e, n, r) {
                    1 == e ? (e = this.v.c) : 0 == e && (e = 0.999);
                    var i = this.pointOnPath(e, n),
                        a = this.pointOnPath(e + 0.001, n),
                        s = a[0] - i[0],
                        o = a[1] - i[1],
                        l = Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
                    return 0 === l ? [0, 0] : 'tangent' === r ? [s / l, o / l] : [-o / l, s / l];
                },
                tangentOnPath: function (e, n) {
                    return this.vectorOnPath(e, n, 'tangent');
                },
                normalOnPath: function (e, n) {
                    return this.vectorOnPath(e, n, 'normal');
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            }),
                extendPrototype([d], u),
                extendPrototype([d], c),
                (c.prototype.getValueAtTime = l),
                (c.prototype.initiateExpression = ExpressionManager.initiateExpression);
            var f = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function (e, n, r, i, a) {
                var s = f(e, n, r, i, a);
                return (s.propertyIndex = n.ix), (s.lock = !1), 3 === r ? expressionHelpers.searchExpressions(e, n.pt, s) : 4 === r && expressionHelpers.searchExpressions(e, n.ks, s), s.k && e.addDynamicProperty(s), s;
            };
        }
        function initialize$1() {
            addPropertyDecorator();
        }
        function addDecorator() {
            function e() {
                return this.data.d.x ? ((this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this)), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
            }
            (TextProperty.prototype.getExpressionValue = function (e, n) {
                var r = this.calculateExpression(n);
                if (e.t !== r) {
                    var i = {};
                    return this.copyData(i, e), (i.t = r.toString()), (i.__complete = !1), i;
                }
                return e;
            }),
                (TextProperty.prototype.searchProperty = function () {
                    var e = this.searchKeyframes(),
                        n = this.searchExpressions();
                    return (this.kf = e || n), this.kf;
                }),
                (TextProperty.prototype.searchExpressions = e);
        }
        function initialize() {
            addDecorator();
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function (e, n) {
                var r,
                    i,
                    a = createNS('feMerge');
                for (a.setAttribute('result', e), i = 0; i < n.length; i += 1) (r = createNS('feMergeNode')).setAttribute('in', n[i]), a.appendChild(r), a.appendChild(r);
                return a;
            }
        };
        var linearFilterValue = '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0';
        function SVGTintFilter(e, n, r, i, a) {
            this.filterManager = n;
            var s = createNS('feColorMatrix');
            s.setAttribute('type', 'matrix'), s.setAttribute('color-interpolation-filters', 'linearRGB'), s.setAttribute('values', linearFilterValue + ' 1 0'), (this.linearFilter = s), s.setAttribute('result', i + '_tint_1'), e.appendChild(s), (s = createNS('feColorMatrix')).setAttribute('type', 'matrix'), s.setAttribute('color-interpolation-filters', 'sRGB'), s.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), s.setAttribute('result', i + '_tint_2'), e.appendChild(s), (this.matrixFilter = s);
            var o = this.createMergeNode(i, [a, i + '_tint_1', i + '_tint_2']);
            e.appendChild(o);
        }
        function SVGFillFilter(e, n, r, i) {
            this.filterManager = n;
            var a = createNS('feColorMatrix');
            a.setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'sRGB'), a.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'), a.setAttribute('result', i), e.appendChild(a), (this.matrixFilter = a);
        }
        function SVGStrokeEffect(e, n, r) {
            (this.initialized = !1), (this.filterManager = n), (this.elem = r), (this.paths = []);
        }
        function SVGTritoneFilter(e, n, r, i) {
            this.filterManager = n;
            var a = createNS('feColorMatrix');
            a.setAttribute('type', 'matrix'), a.setAttribute('color-interpolation-filters', 'linearRGB'), a.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'), e.appendChild(a);
            var s = createNS('feComponentTransfer');
            s.setAttribute('color-interpolation-filters', 'sRGB'), s.setAttribute('result', i), (this.matrixFilter = s);
            var o = createNS('feFuncR');
            o.setAttribute('type', 'table'), s.appendChild(o), (this.feFuncR = o);
            var l = createNS('feFuncG');
            l.setAttribute('type', 'table'), s.appendChild(l), (this.feFuncG = l);
            var u = createNS('feFuncB');
            u.setAttribute('type', 'table'), s.appendChild(u), (this.feFuncB = u), e.appendChild(s);
        }
        function SVGProLevelsFilter(e, n, r, i) {
            this.filterManager = n;
            var a = this.filterManager.effectElements,
                s = createNS('feComponentTransfer');
            (a[10].p.k || 0 !== a[10].p.v || a[11].p.k || 1 !== a[11].p.v || a[12].p.k || 1 !== a[12].p.v || a[13].p.k || 0 !== a[13].p.v || a[14].p.k || 1 !== a[14].p.v) && (this.feFuncR = this.createFeFunc('feFuncR', s)), (a[17].p.k || 0 !== a[17].p.v || a[18].p.k || 1 !== a[18].p.v || a[19].p.k || 1 !== a[19].p.v || a[20].p.k || 0 !== a[20].p.v || a[21].p.k || 1 !== a[21].p.v) && (this.feFuncG = this.createFeFunc('feFuncG', s)), (a[24].p.k || 0 !== a[24].p.v || a[25].p.k || 1 !== a[25].p.v || a[26].p.k || 1 !== a[26].p.v || a[27].p.k || 0 !== a[27].p.v || a[28].p.k || 1 !== a[28].p.v) && (this.feFuncB = this.createFeFunc('feFuncB', s)), (a[31].p.k || 0 !== a[31].p.v || a[32].p.k || 1 !== a[32].p.v || a[33].p.k || 1 !== a[33].p.v || a[34].p.k || 0 !== a[34].p.v || a[35].p.k || 1 !== a[35].p.v) && (this.feFuncA = this.createFeFunc('feFuncA', s)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (s.setAttribute('color-interpolation-filters', 'sRGB'), e.appendChild(s)), (a[3].p.k || 0 !== a[3].p.v || a[4].p.k || 1 !== a[4].p.v || a[5].p.k || 1 !== a[5].p.v || a[6].p.k || 0 !== a[6].p.v || a[7].p.k || 1 !== a[7].p.v) && ((s = createNS('feComponentTransfer')).setAttribute('color-interpolation-filters', 'sRGB'), s.setAttribute('result', i), e.appendChild(s), (this.feFuncRComposed = this.createFeFunc('feFuncR', s)), (this.feFuncGComposed = this.createFeFunc('feFuncG', s)), (this.feFuncBComposed = this.createFeFunc('feFuncB', s)));
        }
        function SVGDropShadowEffect(e, n, r, i, a) {
            var s = n.container.globalData.renderConfig.filterSize,
                o = n.data.fs || s;
            e.setAttribute('x', o.x || s.x), e.setAttribute('y', o.y || s.y), e.setAttribute('width', o.width || s.width), e.setAttribute('height', o.height || s.height), (this.filterManager = n);
            var l = createNS('feGaussianBlur');
            l.setAttribute('in', 'SourceAlpha'), l.setAttribute('result', i + '_drop_shadow_1'), l.setAttribute('stdDeviation', '0'), (this.feGaussianBlur = l), e.appendChild(l);
            var u = createNS('feOffset');
            u.setAttribute('dx', '25'), u.setAttribute('dy', '0'), u.setAttribute('in', i + '_drop_shadow_1'), u.setAttribute('result', i + '_drop_shadow_2'), (this.feOffset = u), e.appendChild(u);
            var c = createNS('feFlood');
            c.setAttribute('flood-color', '#00ff00'), c.setAttribute('flood-opacity', '1'), c.setAttribute('result', i + '_drop_shadow_3'), (this.feFlood = c), e.appendChild(c);
            var d = createNS('feComposite');
            d.setAttribute('in', i + '_drop_shadow_3'), d.setAttribute('in2', i + '_drop_shadow_2'), d.setAttribute('operator', 'in'), d.setAttribute('result', i + '_drop_shadow_4'), e.appendChild(d);
            var f = this.createMergeNode(i, [i + '_drop_shadow_4', a]);
            e.appendChild(f);
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter),
            (SVGTintFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var n = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v / 100;
                    this.linearFilter.setAttribute('values', linearFilterValue + ' ' + i + ' 0'), this.matrixFilter.setAttribute('values', r[0] - n[0] + ' 0 0 0 ' + n[0] + ' ' + (r[1] - n[1]) + ' 0 0 0 ' + n[1] + ' ' + (r[2] - n[2]) + ' 0 0 0 ' + n[2] + ' 0 0 0 1 0');
                }
            }),
            (SVGFillFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var n = this.filterManager.effectElements[2].p.v,
                        r = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute('values', '0 0 0 0 ' + n[0] + ' 0 0 0 0 ' + n[1] + ' 0 0 0 0 ' + n[2] + ' 0 0 0 ' + r + ' 0');
                }
            }),
            (SVGStrokeEffect.prototype.initialize = function () {
                var e,
                    n,
                    r,
                    i,
                    a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? ((i = this.elem.maskManager.masksProperties.length), (r = 0)) : (i = (r = this.filterManager.effectElements[0].p.v - 1) + 1), (n = createNS('g')).setAttribute('fill', 'none'), n.setAttribute('stroke-linecap', 'round'), n.setAttribute('stroke-dashoffset', 1); r < i; r += 1)
                    (e = createNS('path')),
                        n.appendChild(e),
                        this.paths.push({
                            p: e,
                            m: r
                        });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var s = createNS('mask'),
                        o = createElementID();
                    s.setAttribute('id', o), s.setAttribute('mask-type', 'alpha'), s.appendChild(n), this.elem.globalData.defs.appendChild(s);
                    var l = createNS('g');
                    for (l.setAttribute('mask', 'url(' + getLocationHref() + '#' + o + ')'); a[0]; ) l.appendChild(a[0]);
                    this.elem.layerElement.appendChild(l), (this.masker = s), n.setAttribute('stroke', '#fff');
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v) for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length; ) this.elem.layerElement.removeChild(a[0]);
                    this.elem.layerElement.appendChild(n), this.elem.layerElement.removeAttribute('mask'), n.setAttribute('stroke', '#fff');
                }
                (this.initialized = !0), (this.pathMasker = n);
            }),
            (SVGStrokeEffect.prototype.renderFrame = function (e) {
                !this.initialized && this.initialize();
                var n = this.paths.length;
                for (r = 0; r < n; r += 1)
                    if (-1 !== this.paths[r].m && ((i = this.elem.maskManager.viewData[this.paths[r].m]), (a = this.paths[r].p), (e || this.filterManager._mdf || i.prop._mdf) && a.setAttribute('d', i.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var r,
                                i,
                                a,
                                s,
                                o,
                                l = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                u = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                c = a.getTotalLength();
                            s = '0 0 0 ' + c * l + ' ';
                            var d = Math.floor((c * (u - l)) / (1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01));
                            for (o = 0; o < d; o += 1) s += '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
                            s += '0 ' + 10 * c + ' 0 0';
                        } else s = '1 ' + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
                        a.setAttribute('stroke-dasharray', s);
                    }
                if (((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute('stroke-width', 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf))) {
                    var f = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(255 * f[0]) + ',' + bmFloor(255 * f[1]) + ',' + bmFloor(255 * f[2]) + ')');
                }
            }),
            (SVGTritoneFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var n = this.filterManager.effectElements[0].p.v,
                        r = this.filterManager.effectElements[1].p.v,
                        i = this.filterManager.effectElements[2].p.v,
                        a = i[0] + ' ' + r[0] + ' ' + n[0],
                        s = i[1] + ' ' + r[1] + ' ' + n[1],
                        o = i[2] + ' ' + r[2] + ' ' + n[2];
                    this.feFuncR.setAttribute('tableValues', a), this.feFuncG.setAttribute('tableValues', s), this.feFuncB.setAttribute('tableValues', o);
                }
            }),
            (SVGProLevelsFilter.prototype.createFeFunc = function (e, n) {
                var r = createNS(e);
                return r.setAttribute('type', 'table'), n.appendChild(r), r;
            }),
            (SVGProLevelsFilter.prototype.getTableValue = function (e, n, r, i, a) {
                for (var s, o, l = 0, u = 256, c = Math.min(e, n), d = Math.max(e, n), f = Array.call(null, { length: 256 }), _ = 0, h = a - i, p = n - e; l <= 256; ) (o = (s = l / 256) <= c ? (p < 0 ? a : i) : s >= d ? (p < 0 ? i : a) : i + h * Math.pow((s - e) / p, 1 / r)), (f[_] = o), (_ += 1), (l += 256 / (u - 1));
                return f.join(' ');
            }),
            (SVGProLevelsFilter.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var n,
                        r = this.filterManager.effectElements;
                    this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && ((n = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v)), this.feFuncRComposed.setAttribute('tableValues', n), this.feFuncGComposed.setAttribute('tableValues', n), this.feFuncBComposed.setAttribute('tableValues', n)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && ((n = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v)), this.feFuncR.setAttribute('tableValues', n)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && ((n = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v)), this.feFuncG.setAttribute('tableValues', n)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && ((n = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v)), this.feFuncB.setAttribute('tableValues', n)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && ((n = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v)), this.feFuncA.setAttribute('tableValues', n));
                }
            }),
            extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
            (SVGDropShadowEffect.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    if (((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf)) {
                        var n = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(255 * n[0]), Math.round(255 * n[1]), Math.round(255 * n[2])));
                    }
                    if (((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf)) {
                        var r = this.filterManager.effectElements[3].p.v,
                            i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                            a = r * Math.cos(i),
                            s = r * Math.sin(i);
                        this.feOffset.setAttribute('dx', a), this.feOffset.setAttribute('dy', s);
                    }
                }
            });
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(e, n, r) {
            (this.initialized = !1), (this.filterManager = n), (this.filterElem = e), (this.elem = r), (r.matteElement = createNS('g')), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), (r.baseElement = r.matteElement);
        }
        function SVGGaussianBlurEffect(e, n, r, i) {
            e.setAttribute('x', '-100%'), e.setAttribute('y', '-100%'), e.setAttribute('width', '300%'), e.setAttribute('height', '300%'), (this.filterManager = n);
            var a = createNS('feGaussianBlur');
            a.setAttribute('result', i), e.appendChild(a), (this.feGaussianBlur = a);
        }
        function TransformEffect() {}
        function SVGTransformEffect(e, n) {
            this.init(n);
        }
        function CVTransformEffect(e) {
            this.init(e);
        }
        return (
            (SVGMatte3Effect.prototype.findSymbol = function (e) {
                for (var n = 0, r = _svgMatteSymbols.length; n < r; ) {
                    if (_svgMatteSymbols[n] === e) return _svgMatteSymbols[n];
                    n += 1;
                }
                return null;
            }),
            (SVGMatte3Effect.prototype.replaceInParent = function (e, n) {
                var r,
                    i = e.layerElement.parentNode;
                if (!!i) {
                    for (var a = i.children, s = 0, o = a.length; s < o && a[s] !== e.layerElement; ) {
                        s += 1;
                    }
                    s <= o - 2 && (r = a[s + 1]);
                    var l = createNS('use');
                    l.setAttribute('href', '#' + n), r ? i.insertBefore(l, r) : i.appendChild(l);
                }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (e, n) {
                if (!this.findSymbol(n)) {
                    var r = createElementID(),
                        i = createNS('mask');
                    i.setAttribute('id', n.layerId), i.setAttribute('mask-type', 'alpha'), _svgMatteSymbols.push(n);
                    var a = e.globalData.defs;
                    a.appendChild(i);
                    var s = createNS('symbol');
                    s.setAttribute('id', r), this.replaceInParent(n, r), s.appendChild(n.layerElement), a.appendChild(s);
                    var o = createNS('use');
                    o.setAttribute('href', '#' + r), i.appendChild(o), (n.data.hd = !1), n.show();
                }
                e.setMatte(n.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
                for (var e = this.filterManager.effectElements[0].p.v, n = this.elem.comp.elements, r = 0, i = n.length; r < i; ) n[r] && n[r].data.ind === e && this.setElementAsMask(this.elem, n[r]), (r += 1);
                this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
                !this.initialized && this.initialize();
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
                if (e || this.filterManager._mdf) {
                    var n = 0.3,
                        r = this.filterManager.effectElements[0].p.v * n,
                        i = this.filterManager.effectElements[1].p.v,
                        a = 3 == i ? 0 : r,
                        s = 2 == i ? 0 : r;
                    this.feGaussianBlur.setAttribute('stdDeviation', a + ' ' + s);
                    var o = 1 == this.filterManager.effectElements[2].p.v ? 'wrap' : 'duplicate';
                    this.feGaussianBlur.setAttribute('edgeMode', o);
                }
            }),
            (TransformEffect.prototype.init = function (e) {
                (this.effectsManager = e), (this.type = effectTypes.TRANSFORM_EFFECT), (this.matrix = new Matrix()), (this.opacity = -1), (this._mdf = !1), (this._opMdf = !1);
            }),
            (TransformEffect.prototype.renderFrame = function (e) {
                if (((this._opMdf = !1), (this._mdf = !1), e || this.effectsManager._mdf)) {
                    var n = this.effectsManager.effectElements,
                        r = n[0].p.v,
                        i = n[1].p.v,
                        a = 1 === n[2].p.v,
                        s = n[3].p.v,
                        o = a ? s : n[4].p.v,
                        l = n[5].p.v,
                        u = n[6].p.v,
                        c = n[7].p.v;
                    this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(0.01 * o, 0.01 * s, 1), this.matrix.rotate(-c * degToRads), this.matrix.skewFromAxis(-l * degToRads, (u + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), (this._mdf = !0), this.opacity !== n[8].p.v && ((this.opacity = n[8].p.v), (this._opMdf = !0));
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
