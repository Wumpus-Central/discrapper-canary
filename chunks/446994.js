!(function (t, n) {
    e.exports = n();
})(globalThis, function () {
    return (() => {
        var e = {
                506: (e) => {
                    (e.exports = function (e) {
                        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                575: (e) => {
                    (e.exports = function (e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                913: (e) => {
                    function t(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                        }
                    }
                    (e.exports = function (e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                525: (e, t, n) => {
                    var r = n(331);
                    function i() {
                        return (
                            'undefined' != typeof Reflect && Reflect.get
                                ? (e.exports = i = Reflect.get)
                                : (e.exports = i =
                                      function (e, t, n) {
                                          var i = r(e, t);
                                          if (i) {
                                              var o = Object.getOwnPropertyDescriptor(i, t);
                                              return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value;
                                          }
                                      }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports),
                            i.apply(this, arguments)
                        );
                    }
                    (e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                },
                754: (e) => {
                    function t(n) {
                        return (
                            (e.exports = t =
                                Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (e) {
                                          return e.__proto__ || Object.getPrototypeOf(e);
                                      }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports),
                            t(n)
                        );
                    }
                    (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                },
                205: (e, t, n) => {
                    var r = n(489);
                    (e.exports = function (e, t) {
                        if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function');
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            Object.defineProperty(e, 'prototype', { writable: !1 }),
                            t && r(e, t);
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                318: (e) => {
                    (e.exports = function (e) {
                        return e && e.__esModule ? e : { default: e };
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                585: (e, t, n) => {
                    var r = n(8).default,
                        i = n(506);
                    (e.exports = function (e, t) {
                        if (t && ('object' === r(t) || 'function' == typeof t)) return t;
                        if (void 0 !== t) throw TypeError('Derived constructors may only return object or undefined');
                        return i(e);
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                489: (e) => {
                    function t(n, r) {
                        return (
                            (e.exports = t =
                                Object.setPrototypeOf ||
                                function (e, t) {
                                    return (e.__proto__ = t), e;
                                }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports),
                            t(n, r)
                        );
                    }
                    (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                },
                331: (e, t, n) => {
                    var r = n(754);
                    (e.exports = function (e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)); );
                        return e;
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                8: (e) => {
                    function t(n) {
                        return (
                            (e.exports = t =
                                'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                                      }),
                            (e.exports.__esModule = !0),
                            (e.exports.default = e.exports),
                            t(n)
                        );
                    }
                    (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
                },
                848: (e) => {
                    window,
                        (e.exports = (function (e) {
                            var t = {};
                            function n(r) {
                                if (t[r]) return t[r].exports;
                                var i = (t[r] = {
                                    i: r,
                                    l: !1,
                                    exports: {}
                                });
                                return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                            }
                            return (
                                (n.m = e),
                                (n.c = t),
                                (n.d = function (e, t, r) {
                                    n.o(e, t) ||
                                        Object.defineProperty(e, t, {
                                            enumerable: !0,
                                            get: r
                                        });
                                }),
                                (n.r = function (e) {
                                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
                                }),
                                (n.t = function (e, t) {
                                    if ((1 & t && (e = n(e)), 8 & t || (4 & t && 'object' == typeof e && e && e.__esModule))) return e;
                                    var r = Object.create(null);
                                    if (
                                        (n.r(r),
                                        Object.defineProperty(r, 'default', {
                                            enumerable: !0,
                                            value: e
                                        }),
                                        2 & t && 'string' != typeof e)
                                    )
                                        for (var i in e)
                                            n.d(
                                                r,
                                                i,
                                                function (t) {
                                                    return e[t];
                                                }.bind(null, i)
                                            );
                                    return r;
                                }),
                                (n.n = function (e) {
                                    var t =
                                        e && e.__esModule
                                            ? function () {
                                                  return e.default;
                                              }
                                            : function () {
                                                  return e;
                                              };
                                    return n.d(t, 'a', t), t;
                                }),
                                (n.o = function (e, t) {
                                    return Object.prototype.hasOwnProperty.call(e, t);
                                }),
                                (n.p = ''),
                                n((n.s = 1))
                            );
                        })([
                            function (e, t) {
                                function n(e, t) {
                                    if (e < 1 || e !== Math.round(e)) throw 'Invalid channel count for BufferQueue';
                                    (this.channels = e), (this.bufferSize = t), this.flush();
                                }
                                (n.prototype.flush = function () {
                                    (this._buffers = []), (this._pendingBuffer = this.createBuffer(this.bufferSize)), (this._pendingPos = 0);
                                }),
                                    (n.prototype.sampleCount = function () {
                                        var e = 0;
                                        return (
                                            this._buffers.forEach(function (t) {
                                                e += t[0].length;
                                            }),
                                            e
                                        );
                                    }),
                                    (n.prototype.createBuffer = function (e) {
                                        for (var t = [], n = 0; n < this.channels; n++) t[n] = new Float32Array(e);
                                        return t;
                                    }),
                                    (n.prototype.validate = function (e) {
                                        if (e.length !== this.channels) return !1;
                                        for (var t, n = 0; n < e.length; n++) {
                                            var r = e[n];
                                            if (!(r instanceof Float32Array)) return !1;
                                            if (0 == n) t = r.length;
                                            else if (r.length !== t) return !1;
                                        }
                                        return !0;
                                    }),
                                    (n.prototype.appendBuffer = function (e) {
                                        if (!this.validate(e)) throw 'Invalid audio buffer passed to BufferQueue.appendBuffer';
                                        for (var t = e[0].length, n = this.channels, r = this._pendingPos, i = this._pendingBuffer, o = this.bufferSize, a = 0; a < t; a++) {
                                            for (var s = 0; s < n; s++) i[s][r] = e[s][a];
                                            ++r == o && (this._buffers.push(i), (r = this._pendingPos = 0), (i = this._pendingBuffer = this.createBuffer(o)));
                                        }
                                        this._pendingPos = r;
                                    }),
                                    (n.prototype.prependBuffer = function (e) {
                                        if (!this.validate(e)) throw 'Invalid audio buffer passed to BufferQueue.prependBuffer';
                                        var t = this._buffers.slice(0);
                                        t.push(this.trimBuffer(this._pendingBuffer, 0, this._pendingPos)), this.flush(), this.appendBuffer(e);
                                        for (var n = 0; n < t.length; n++) this.appendBuffer(t[n]);
                                    }),
                                    (n.prototype.nextBuffer = function () {
                                        if (this._buffers.length) return this._buffers.shift();
                                        var e = this.trimBuffer(this._pendingBuffer, 0, this._pendingPos);
                                        return (this._pendingBuffer = this.createBuffer(this.bufferSize)), (this._pendingPos = 0), e;
                                    }),
                                    (n.prototype.trimBuffer = function (e, t, n) {
                                        var r = e[0].length,
                                            i = t + Math.min(n, r);
                                        if (0 == t && i >= r) return e;
                                        for (var o = [], a = 0; a < this.channels; a++) o[a] = e[a].subarray(t, i);
                                        return o;
                                    }),
                                    (e.exports = n);
                            },
                            function (e, t, n) {
                                !(function () {
                                    n(0);
                                    var t = n(2),
                                        r = n(4);
                                    function i(e) {
                                        (this._options = e || {}), (this._backend = null), (this._resampleFractional = 0), (this._resampleLastSampleData = void 0), (this._tempoChanger = null);
                                    }
                                    (i.prototype.rate = 0),
                                        (i.prototype.targetRate = 0),
                                        (i.prototype.channels = 0),
                                        (i.prototype.bufferSize = 0),
                                        Object.defineProperty(i.prototype, 'bufferDuration', {
                                            get: function () {
                                                return this.targetRate ? this.bufferSize / this.targetRate : 0;
                                            }
                                        }),
                                        Object.defineProperty(i.prototype, 'bufferThreshold', {
                                            get: function () {
                                                return this._backend ? this._backend.bufferThreshold / this.targetRate : 0;
                                            },
                                            set: function (e) {
                                                if (!this._backend) throw 'Invalid state: AudioFeeder cannot set bufferThreshold before init';
                                                this._backend.bufferThreshold = Math.round(e * this.targetRate);
                                            }
                                        }),
                                        Object.defineProperty(i.prototype, 'playbackPosition', {
                                            get: function () {
                                                return this._backend ? this.getPlaybackState().playbackPosition : 0;
                                            }
                                        }),
                                        Object.defineProperty(i.prototype, 'outputPlaybackPosition', {
                                            get: function () {
                                                return this._backend ? this.getPlaybackState().outputPlaybackPosition : 0;
                                            }
                                        }),
                                        Object.defineProperty(i.prototype, 'durationBuffered', {
                                            get: function () {
                                                return this._backend ? this.getPlaybackState().samplesQueued / this.targetRate : 0;
                                            }
                                        }),
                                        Object.defineProperty(i.prototype, 'muted', {
                                            get: function () {
                                                if (this._backend) return this._backend.muted;
                                                throw 'Invalid state: cannot get mute before init';
                                            },
                                            set: function (e) {
                                                if (!this._backend) throw 'Invalid state: cannot set mute before init';
                                                this._backend.muted = e;
                                            }
                                        }),
                                        (i.prototype.mute = function () {
                                            this.muted = !0;
                                        }),
                                        (i.prototype.unmute = function () {
                                            this.muted = !1;
                                        }),
                                        Object.defineProperty(i.prototype, 'volume', {
                                            get: function () {
                                                if (this._backend) return this._backend.volume;
                                                throw 'Invalid state: cannot get volume before init';
                                            },
                                            set: function (e) {
                                                if (!this._backend) throw 'Invalid state: cannot set volume before init';
                                                this._backend.volume = e;
                                            }
                                        }),
                                        Object.defineProperty(i.prototype, 'tempo', {
                                            get: function () {
                                                if (this._tempoChanger) return this._tempoChanger.getTempo();
                                                throw 'Invalid state: cannot get tempo before init';
                                            },
                                            set: function (e) {
                                                if (!this._tempoChanger) throw 'Invalid state: cannot set tempo before init';
                                                this._tempoChanger.setTempo(e);
                                            }
                                        }),
                                        (i.prototype.init = function (e, n) {
                                            if (((this.channels = e), (this.rate = n), this._options.backendFactory)) this._backend = this._options.backendFactory(e, n, this._options);
                                            else {
                                                if (!t.isSupported()) throw 'No supported backend';
                                                this._backend = new t(e, n, this._options);
                                            }
                                            (this.targetRate = this._backend.rate),
                                                (this.bufferSize = this._backend.bufferSize),
                                                (this._tempoChanger = r({
                                                    sampleRate: this.targetRate,
                                                    numChannels: e,
                                                    tempo: 1
                                                })),
                                                (this._backend.onstarved = function () {
                                                    this.onstarved && this.onstarved();
                                                }.bind(this)),
                                                (this._backend.onbufferlow = function () {
                                                    this.onbufferlow && this.onbufferlow();
                                                }.bind(this));
                                        }),
                                        (i.prototype._resample = function (e) {
                                            var t = this.rate,
                                                n = this.channels,
                                                r = this._backend.rate,
                                                i = this._backend.channels;
                                            if (t == r && n == i) return e;
                                            var o,
                                                a = [],
                                                s = e[0].length,
                                                l = this._resampleFractional,
                                                c = (s * r) / t + l,
                                                u = Math.floor(c),
                                                d = c - u;
                                            o =
                                                t < r
                                                    ? function (e, n, i, o) {
                                                          for (
                                                              var a = function (t) {
                                                                      return t < 0 ? (i && i.length + t > 0 ? i[i.length + t] : e[0]) : e[t];
                                                                  },
                                                                  s = 0;
                                                              s < n.length;
                                                              s++
                                                          ) {
                                                              var c,
                                                                  u = ((s + 1 - l) * t) / r - 1,
                                                                  d = Math.floor(u),
                                                                  f = Math.ceil(u);
                                                              (c = d == f ? a(d) : a(d) * (f - u) + a(f) * (u - d)), (n[s] = o * c);
                                                          }
                                                      }
                                                    : function (e, t, n, r) {
                                                          for (var i = 0; i < t.length; i++) t[i] = r * e[((i * e.length) / t.length) | 0];
                                                      };
                                            var f = 1;
                                            i > n && (f = Math.SQRT1_2);
                                            for (var _ = 0; _ < i; _++) {
                                                var p = _;
                                                _ >= n && (p = 0);
                                                var h = e[p],
                                                    m = new Float32Array(u);
                                                o(h, m, this._resampleLastSampleData ? this._resampleLastSampleData[p] : void 0, f), a.push(m);
                                            }
                                            return (this._resampleFractional = d), (this._resampleLastSampleData = e), a;
                                        }),
                                        (i.prototype.bufferData = function (e) {
                                            if (!this._backend) throw 'Invalid state: AudioFeeder cannot bufferData before init';
                                            var t = this._resample(e);
                                            (t = this._tempoChanger.process(t)), this._backend.appendBuffer(t);
                                        }),
                                        (i.prototype.getPlaybackState = function () {
                                            if (this._backend) {
                                                var e = this._backend.getPlaybackState();
                                                return (e.outputPlaybackPosition = e.playbackPosition), (e.playbackPosition = this._tempoChanger.mapOutputToInputTime(e.outputPlaybackPosition)), e;
                                            }
                                            throw 'Invalid state: AudioFeeder cannot getPlaybackState before init';
                                        }),
                                        (i.prototype.waitUntilReady = function (e) {
                                            if (!this._backend) throw 'Invalid state: AudioFeeder cannot waitUntilReady before init';
                                            this._backend.waitUntilReady(e);
                                        }),
                                        (i.prototype.start = function () {
                                            if (!this._backend) throw 'Invalid state: AudioFeeder cannot start before init';
                                            this._backend.start();
                                        }),
                                        (i.prototype.stop = function () {
                                            if (!this._backend) throw 'Invalid state: AudioFeeder cannot stop before init';
                                            this._backend.stop();
                                        }),
                                        (i.prototype.flush = function () {
                                            if (((this._resampleFractional = 0), (this._resampleLastSampleData = void 0), !this._backend)) throw 'Invalid state: AudioFeeder cannot flush before init';
                                            this._tempoChanger.flush(this.durationBuffered), this._backend.flush();
                                        }),
                                        (i.prototype.close = function () {
                                            this._backend && (this._backend.close(), (this._backend = null));
                                        }),
                                        (i.prototype.onstarved = null),
                                        (i.prototype.onbufferlow = null),
                                        (i.isSupported = function () {
                                            return !!Float32Array && t.isSupported();
                                        }),
                                        (i.initSharedAudioContext = function () {
                                            return t.isSupported() ? t.initSharedAudioContext() : null;
                                        }),
                                        (e.exports = i);
                                })();
                            },
                            function (e, t, n) {
                                !(function () {
                                    var t = window.AudioContext || window.webkitAudioContext,
                                        r = n(0),
                                        i = n(3);
                                    function o(e, t, n) {
                                        var i = n.audioContext || o.initSharedAudioContext();
                                        if (((this._context = i), (this.output = n.output || i.destination), (this.rate = i.sampleRate), (this.channels = 2), n.bufferSize && (this.bufferSize = 0 | n.bufferSize), (this.bufferThreshold = 2 * this.bufferSize), (this._bufferQueue = new r(this.channels, this.bufferSize)), (this._playbackTimeAtBufferTail = i.currentTime), (this._queuedTime = 0), (this._delayedTime = 0), (this._dropped = 0), (this._liveBuffer = this._bufferQueue.createBuffer(this.bufferSize)), i.createScriptProcessor)) this._node = i.createScriptProcessor(this.bufferSize, 0, this.channels);
                                        else {
                                            if (!i.createJavaScriptNode) throw Error('Bad version of web audio API?');
                                            this._node = i.createJavaScriptNode(this.bufferSize, 0, this.channels);
                                        }
                                    }
                                    (o.prototype.bufferSize = 4096),
                                        (o.prototype.bufferThreshold = 8192),
                                        (o.prototype._volume = 1),
                                        Object.defineProperty(o.prototype, 'volume', {
                                            get: function () {
                                                return this._volume;
                                            },
                                            set: function (e) {
                                                this._volume = +e;
                                            }
                                        }),
                                        (o.prototype._muted = !1),
                                        Object.defineProperty(o.prototype, 'muted', {
                                            get: function () {
                                                return this._muted;
                                            },
                                            set: function (e) {
                                                this._muted = !!e;
                                            }
                                        }),
                                        (o.prototype._audioProcess = function (e) {
                                            var t,
                                                n,
                                                r,
                                                o,
                                                a = 'number' == typeof e.playbackTime ? e.playbackTime : this._context.currentTime + this.bufferSize / this.rate,
                                                s = this._playbackTimeAtBufferTail;
                                            if ((s < a && (this._delayedTime += a - s), this._bufferQueue.sampleCount() < this.bufferSize && this.onstarved && this.onstarved(), this._bufferQueue.sampleCount() < this.bufferSize)) {
                                                for (t = 0; t < this.channels; t++) for (r = e.outputBuffer.getChannelData(t), o = 0; o < this.bufferSize; o++) r[o] = 0;
                                                this._dropped++;
                                            } else {
                                                var l = this.muted ? 0 : this.volume,
                                                    c = this._bufferQueue.nextBuffer();
                                                if (c[0].length < this.bufferSize) throw 'Audio buffer not expected length.';
                                                for (t = 0; t < this.channels; t++) for (n = c[t], this._liveBuffer[t].set(c[t]), r = e.outputBuffer.getChannelData(t), o = 0; o < n.length; o++) r[o] = n[o] * l;
                                                (this._queuedTime += this.bufferSize / this.rate), (this._playbackTimeAtBufferTail = a + this.bufferSize / this.rate), this._bufferQueue.sampleCount() < Math.max(this.bufferSize, this.bufferThreshold) && this.onbufferlow && i(this.onbufferlow.bind(this));
                                            }
                                        }),
                                        (o.prototype._samplesQueued = function () {
                                            return this._bufferQueue.sampleCount() + Math.floor(this._timeAwaitingPlayback() * this.rate);
                                        }),
                                        (o.prototype._timeAwaitingPlayback = function () {
                                            return Math.max(0, this._playbackTimeAtBufferTail - this._context.currentTime);
                                        }),
                                        (o.prototype.getPlaybackState = function () {
                                            return {
                                                playbackPosition: this._queuedTime - this._timeAwaitingPlayback(),
                                                samplesQueued: this._samplesQueued(),
                                                dropped: this._dropped,
                                                delayed: this._delayedTime
                                            };
                                        }),
                                        (o.prototype.waitUntilReady = function (e) {
                                            e();
                                        }),
                                        (o.prototype.appendBuffer = function (e) {
                                            this._bufferQueue.appendBuffer(e);
                                        }),
                                        (o.prototype.start = function () {
                                            (this._node.onaudioprocess = this._audioProcess.bind(this)), this._node.connect(this.output), (this._playbackTimeAtBufferTail = this._context.currentTime);
                                        }),
                                        (o.prototype.stop = function () {
                                            if (this._node) {
                                                var e = this._timeAwaitingPlayback();
                                                if (e > 0) {
                                                    var t = Math.round(e * this.rate),
                                                        n = this._liveBuffer ? this._liveBuffer[0].length : 0;
                                                    t > n ? (this._bufferQueue.prependBuffer(this._liveBuffer), this._bufferQueue.prependBuffer(this._bufferQueue.createBuffer(t - n))) : this._bufferQueue.prependBuffer(this._bufferQueue.trimBuffer(this._liveBuffer, n - t, t)), (this._playbackTimeAtBufferTail -= e);
                                                }
                                                (this._node.onaudioprocess = null), this._node.disconnect();
                                            }
                                        }),
                                        (o.prototype.flush = function () {
                                            this._bufferQueue.flush();
                                        }),
                                        (o.prototype.close = function () {
                                            this.stop(), (this._context = null);
                                        }),
                                        (o.prototype.onstarved = null),
                                        (o.prototype.onbufferlow = null),
                                        (o.isSupported = function () {
                                            return !!t;
                                        }),
                                        (o.sharedAudioContext = null),
                                        (o.initSharedAudioContext = function () {
                                            if (!o.sharedAudioContext && o.isSupported()) {
                                                var e,
                                                    n = new t();
                                                if (n.createScriptProcessor) e = n.createScriptProcessor(1024, 0, 2);
                                                else {
                                                    if (!n.createJavaScriptNode) throw Error('Bad version of web audio API?');
                                                    e = n.createJavaScriptNode(1024, 0, 2);
                                                }
                                                e.connect(n.destination), e.disconnect(), (o.sharedAudioContext = n);
                                            }
                                            return o.sharedAudioContext;
                                        }),
                                        (e.exports = o);
                                })();
                            },
                            function (e, t) {
                                e.exports = (function () {
                                    if (void 0 !== window.setImmediate) return window.setImmediate;
                                    if (window && window.postMessage) {
                                        var e = [];
                                        return (
                                            window.addEventListener('message', function (t) {
                                                if (t.source === window) {
                                                    var n = t.data;
                                                    if ('object' == typeof n && n.nextTickBrowserPingMessage) {
                                                        var r = e.pop();
                                                        r && r();
                                                    }
                                                }
                                            }),
                                            function (t) {
                                                e.push(t), window.postMessage({ nextTickBrowserPingMessage: !0 }, document.location.toString());
                                            }
                                        );
                                    }
                                    return function (e) {
                                        setTimeout(e, 0);
                                    };
                                })();
                            },
                            function (e, t, n) {
                                window,
                                    (e.exports = (function () {
                                        return (function (e) {
                                            var t = {};
                                            function n(r) {
                                                if (t[r]) return t[r].exports;
                                                var i = (t[r] = {
                                                    i: r,
                                                    l: !1,
                                                    exports: {}
                                                });
                                                return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                                            }
                                            return (
                                                (n.m = e),
                                                (n.c = t),
                                                (n.d = function (e, t, r) {
                                                    n.o(e, t) ||
                                                        Object.defineProperty(e, t, {
                                                            enumerable: !0,
                                                            get: r
                                                        });
                                                }),
                                                (n.r = function (e) {
                                                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
                                                }),
                                                (n.t = function (e, t) {
                                                    if ((1 & t && (e = n(e)), 8 & t || (4 & t && 'object' == typeof e && e && e.__esModule))) return e;
                                                    var r = Object.create(null);
                                                    if (
                                                        (n.r(r),
                                                        Object.defineProperty(r, 'default', {
                                                            enumerable: !0,
                                                            value: e
                                                        }),
                                                        2 & t && 'string' != typeof e)
                                                    )
                                                        for (var i in e)
                                                            n.d(
                                                                r,
                                                                i,
                                                                function (t) {
                                                                    return e[t];
                                                                }.bind(null, i)
                                                            );
                                                    return r;
                                                }),
                                                (n.n = function (e) {
                                                    var t =
                                                        e && e.__esModule
                                                            ? function () {
                                                                  return e.default;
                                                              }
                                                            : function () {
                                                                  return e;
                                                              };
                                                    return n.d(t, 'a', t), t;
                                                }),
                                                (n.o = function (e, t) {
                                                    return Object.prototype.hasOwnProperty.call(e, t);
                                                }),
                                                (n.p = ''),
                                                n((n.s = 1))
                                            );
                                        })([
                                            function (e, t) {
                                                e.exports = {
                                                    float_array: function (e) {
                                                        return new Float32Array(e);
                                                    },
                                                    blit: function (e, t, n, r, i) {
                                                        n.set(e.subarray(t, t + i), r);
                                                    }
                                                };
                                            },
                                            function (e, t, n) {
                                                var r, i;
                                                (r = n(0)),
                                                    (i = n(2)),
                                                    (e.exports = function (e) {
                                                        var t = (e = e || {}).sampleRate || 44100,
                                                            n = e.wsizeLog || 11,
                                                            o = e.tempo || 1,
                                                            a = (e.numChannels, Math.pow(2, 50 / 1200) - 1),
                                                            s = 1 << n,
                                                            l = i(n),
                                                            c = 1 << (n - 2);
                                                        c -= c % 100;
                                                        for (var u = r.float_array(s + c + 5), d = r.float_array(s + c + 5), f = c, _ = c, p = r.float_array(s), h = 0; h < s; h++) p[h] = 0.5 * (1 - Math.cos((2 * Math.PI * h) / s));
                                                        var m = 1 + (s >> 1),
                                                            g = r.float_array(m),
                                                            E = r.float_array(m),
                                                            b = r.float_array(m),
                                                            y = r.float_array(m),
                                                            v = r.float_array(m),
                                                            O = r.float_array(m),
                                                            I = 1 + (m >> 1),
                                                            S = [0, 0],
                                                            T = [],
                                                            N = [],
                                                            A = [],
                                                            C = [];
                                                        for (h = 0; h < 2; h++) T.push(r.float_array(I)), N.push(r.float_array(I)), A.push(r.float_array(I)), C.push(r.float_array(m));
                                                        var R = r.float_array(I),
                                                            P = r.float_array(I),
                                                            w = 0,
                                                            D = 0,
                                                            L = [
                                                                {
                                                                    in_time: 0,
                                                                    out_time: 0,
                                                                    tempo: o
                                                                }
                                                            ],
                                                            x = 0,
                                                            M = 0,
                                                            k = 1,
                                                            j = 0,
                                                            U = 0,
                                                            G = 0,
                                                            B = 0,
                                                            F = {
                                                                mapOutputToInputTime: function (e) {
                                                                    for (var t = L.length - 1; e < L[t].out_time && t > 0; ) t--;
                                                                    var n = L[t];
                                                                    return n.in_time + n.tempo * (e - n.out_time);
                                                                },
                                                                flush: function (e) {
                                                                    (j = 0), (S = [0, 0]), (M = 0), (B = 0), (G = 0);
                                                                    for (var t = 0; t < 2; t++) for (var n = 0; n < m; n++) C[t][n] = 0;
                                                                    for (t = 0; t < u.length; t++) u[t] = 0;
                                                                    for (t = 0; t < d.length; t++) d[t] = 0;
                                                                    if (e) {
                                                                        (D = Math.max(0, D - e)), (w = F.mapOutputToInputTime(D));
                                                                        for (var r = L.length - 1; D <= L[r].out_time && r >= 0; ) L.pop(), r--;
                                                                        L.push({
                                                                            in_time: w,
                                                                            out_time: D,
                                                                            tempo: o
                                                                        });
                                                                    }
                                                                },
                                                                getTempo: function () {
                                                                    return o;
                                                                },
                                                                setTempo: function (e) {
                                                                    (f = _ = c),
                                                                        e >= 1 ? (_ = Math.round(f / e)) : (f = Math.round(_ * e)),
                                                                        (U = (1 / e - +_ / f) * f),
                                                                        (k = (function (e, t) {
                                                                            for (var n = (e.length / t) | 0, r = 0, i = 0; i < n; i++) r += e[i * t];
                                                                            return 0.9 / r;
                                                                        })(p, _)),
                                                                        (o = e);
                                                                    var t = L[L.length - 1];
                                                                    t.out_time == D
                                                                        ? (t.tempo = e)
                                                                        : L.push({
                                                                              in_time: w,
                                                                              out_time: D,
                                                                              tempo: e
                                                                          });
                                                                }
                                                            };
                                                        F.flush(0), F.setTempo(o);
                                                        var V = function (e, t, n) {
                                                                var r = Math.floor(n),
                                                                    i = r % 2 == 1 ? -1 : 1;
                                                                return Math.atan2(i * (t[r] - t[r + 1]), i * (e[r] - e[r + 1]));
                                                            },
                                                            Z = function (e, t, n, r, i) {
                                                                var o = ((2 * Math.PI) / s) * 0.5 * (r + t) * f;
                                                                return (
                                                                    ((function (e) {
                                                                        return e - 2 * Math.PI * Math.round(e / (2 * Math.PI));
                                                                    })(e - n - o) +
                                                                        o) *
                                                                    i
                                                                );
                                                            },
                                                            H = function (e, t, n, r, i, o) {
                                                                for (var l = e % 2, c = 1 - l, u = C[c], d = S[c], f = T[c], _ = N[c], p = A[c], h = C[l], m = 1; m < h.length; m++) h[m] = t[m] * t[m] + n[m] * n[m];
                                                                var g = T[l],
                                                                    E = (S[l] = (function (e, t) {
                                                                        for (var n = 0, r = 0; r < e.length; r++) e[r] > n && (n = e[r]);
                                                                        var i = 1e-8 * n,
                                                                            o = 1,
                                                                            s = 1;
                                                                        for (t[0] = 1, r = 2; r < e.length; r++) {
                                                                            var l = r * a;
                                                                            if (e[r] > i && e[r] > e[r - 1] && e[r] >= e[r + 1]) {
                                                                                var c = r + (e[r - 1] - e[r + 1]) / (2 * (e[r - 1] - 2 * e[r] + e[r + 1]));
                                                                                c - t[o - 1] > l ? ((t[o++] = c), (s = r)) : e[r] > e[s] && ((t[o - 1] = c), (s = r));
                                                                            }
                                                                        }
                                                                        return o;
                                                                    })(h, g)),
                                                                    b = N[l],
                                                                    y = A[l];
                                                                if (0 != e && 0 != E) {
                                                                    var v = 0;
                                                                    for (G = 0; G < E; G++) {
                                                                        for (B = g[G]; g[G] > f[v] && v != d; ) ++v;
                                                                        var O = v;
                                                                        v > 0 && B - f[v - 1] < f[v] - B && (O = v - 1);
                                                                        var I = B * a;
                                                                        if (Math.abs(f[O] - B) < I && u[Math.round(f[O])] > 0.1 * h[Math.round(B)]) {
                                                                            var w = V(t, n, B),
                                                                                D = _[O] + p[O] + Z(w, B, _[O], f[O], o) - w;
                                                                            (b[G] = w), (y[G] = D), (R[G] = Math.cos(D)), (P[G] = Math.sin(D));
                                                                        } else (b[G] = V(t, n, B)), (y[G] = 0), (R[G] = 1), (P[G] = 0);
                                                                    }
                                                                    g[E] = 2 * s;
                                                                    var L = g[(O = 0)],
                                                                        x = g[O + 1],
                                                                        M = R[O],
                                                                        k = P[O];
                                                                    for (m = 1; m < t.length - 1; m++) {
                                                                        m >= L && m - L > x - m && ((L = g[++O]), (x = g[O + 1]), (M = R[O]), (k = P[O]));
                                                                        var j = t[m] * M - n[m] * k,
                                                                            U = t[m] * k + n[m] * M;
                                                                        (t[m] = j), (n[m] = U);
                                                                    }
                                                                } else
                                                                    for (var G = 0; G < E; G++) {
                                                                        var B = g[G];
                                                                        _[G] = p[G] = V(t, n, B);
                                                                    }
                                                            },
                                                            W = function () {
                                                                var e = 0 | (j += 2 * U);
                                                                j -= e;
                                                                for (var t = 0; t < s; t++) (l.m_re[t] = p[t] * u[t]), (l.m_im[t] = p[t] * u[f + t]);
                                                                r.blit(u, 2 * f, u, 0, s - f), l.inplace(!1), l.unpack(g, E, b, y), H(x, g, E, 0, 0, +_ / f), H(x + 1, b, y, 0, 0, +(_ + e) / f), r.blit(b, 0, v, 0, m), r.blit(y, 0, O, 0, m), l.repack(g, E, b, y), l.inplace(!0);
                                                                var n = d.length;
                                                                for (r.blit(d, M, d, 0, n - M), t = n - M; t < n; t++) d[t] = 0;
                                                                var i = 0,
                                                                    o = k;
                                                                for (t = 0; t < _; t++) Math.abs(2 * l.m_re[t]) > i && (i = Math.abs(2 * l.m_re[t]));
                                                                for (t = 0; t < s - _; t++) Math.abs(l.m_re[t + _ + e] + l.m_im[t]) > i && (i = Math.abs(l.m_re[t + _ + e] + l.m_im[t]));
                                                                for (t = s - _; t < s; t++) Math.abs(2 * l.m_im[t]) > i && (i = Math.abs(2 * l.m_im[t]));
                                                                var a = 1 / Math.floor(+s / (2 * _));
                                                                for (o * i > a && (o = a / i), t = 0; t < s; t++) (d[t] += o * l.m_re[t]), (d[t + _ + e] += o * l.m_im[t]);
                                                                return (x += 2), (M = 2 * _ + e);
                                                            };
                                                        return (
                                                            (F.process = function (e) {
                                                                var n = e[0].length,
                                                                    i = e[0];
                                                                if (e.length > 1) {
                                                                    i = r.float_array(e[0].length);
                                                                    for (var a = 1 / e.length, l = 0; l < e.length; l++) for (var c = 0; c < n; c++) i[c] += a * e[l][c];
                                                                }
                                                                if (1 == o) {
                                                                    if (B + G > 0) {
                                                                        var p = B + G + n,
                                                                            h = [];
                                                                        for (l = 0; l < e.length; l++) {
                                                                            var m = r.float_array(p);
                                                                            r.blit(d, 0, m, 0, B), r.blit(u, 0, m, B, G), r.blit(e[l], 0, m, B + G, n), h.push(m);
                                                                        }
                                                                        F.flush(0), (n = p), (e = h);
                                                                    }
                                                                    return (w += n / t), (D += n / t), e;
                                                                }
                                                                var g = 2 * Math.floor(Math.max(0, G + n - (s - f)) / (2 * f)),
                                                                    E = B + _ * g + Math.floor(j + U * g);
                                                                B > E && (E = B);
                                                                var b = r.float_array(E);
                                                                r.blit(d, 0, b, 0, B);
                                                                for (var y = 0, v = B, O = 0, I = 0; ; ) {
                                                                    var S = s + f - G;
                                                                    if (y + S > n) {
                                                                        r.blit(i, y, u, G, n - y), (G += n - y), (y = n);
                                                                        break;
                                                                    }
                                                                    S <= 0 ? (G -= 2 * f) : (r.blit(i, y, u, G, S), (y += S), (G = s - f)), (I = W()), (w += (2 * f) / t), (D += I / t), (O = v + I - E) < 0 && (O = 0), r.blit(d, 0, b, v, I - O), (v += I);
                                                                }
                                                                r.blit(d, I - O, d, 0, O), (B = O);
                                                                var T = [];
                                                                for (l = 0; l < e.length; l++) T.push(b);
                                                                return T;
                                                            }),
                                                            F
                                                        );
                                                    });
                                            },
                                            function (e, t, n) {
                                                var r = n(0);
                                                e.exports = function (e) {
                                                    for (
                                                        var t = 1 << e,
                                                            n = {
                                                                m_logN: e,
                                                                m_N: t,
                                                                m_invN: 1 / t,
                                                                m_re: r.float_array(t),
                                                                m_im: r.float_array(t),
                                                                m_revTgt: Array(t)
                                                            },
                                                            i = 0;
                                                        i < t;
                                                        i++
                                                    ) {
                                                        for (var o = i, a = 0, s = 0; s < e; s++) (a <<= 1), (a |= 1 & o), (o >>= 1);
                                                        n.m_revTgt[i] = a;
                                                    }
                                                    (n.twiddleRe = r.float_array(n.m_logN)), (n.twiddleIm = r.float_array(n.m_logN));
                                                    for (var l = 1, c = 0; c < n.m_logN; c++) {
                                                        var u = 2 * l * Math.PI * n.m_invN;
                                                        (n.twiddleRe[c] = Math.cos(u)), (n.twiddleIm[c] = Math.sin(u)), (l <<= 1);
                                                    }
                                                    n.inplace = function (e) {
                                                        var t = n.m_re,
                                                            r = n.m_im,
                                                            i = n.m_N,
                                                            o = n.m_logN,
                                                            a = i >> 1,
                                                            s = i >> 1,
                                                            l = i;
                                                        if (e) for (var c = 1 / i, u = 0; u < i; u++) (t[u] *= c), (r[u] *= c);
                                                        for (var d = 0; d < o; d++) {
                                                            var f = n.twiddleRe[d],
                                                                _ = n.twiddleIm[d];
                                                            e || (_ *= -1);
                                                            for (var p = 0; p < i; ) {
                                                                for (var h = p, m = p + s, g = 1, E = 0, b = 0; b < a; b++) {
                                                                    var y = t[h],
                                                                        v = r[h],
                                                                        O = t[m],
                                                                        I = r[m];
                                                                    (t[h] = y + O), (r[h] = v + I), (O = y - O), (I = v - I), (t[m] = O * g - I * E), (r[m] = O * E + I * g), h++, m++;
                                                                    var S = g;
                                                                    (g = g * f - E * _), (E = S * _ + E * f);
                                                                }
                                                                p += l;
                                                            }
                                                            (a >>= 1), (s >>= 1), (l >>= 1);
                                                        }
                                                        for (var T, N, A = n.m_revTgt, C = 0; C < i; C++) A[C] > C && ((N = t[(T = A[C])]), (t[T] = t[C]), (t[C] = N), (N = r[T]), (r[T] = r[C]), (r[C] = N));
                                                    };
                                                    var d = t >> 1;
                                                    return (
                                                        (n.unpack = function (e, r, i, o) {
                                                            (e[0] = n.m_re[0]), (i[0] = n.m_im[0]), (r[0] = o[0] = 0), (e[d] = n.m_re[d]), (i[d] = n.m_im[d]), (r[d] = o[d] = 0);
                                                            for (var a = 1; a < d; a++) (e[a] = (n.m_re[a] + n.m_re[t - a]) / 2), (r[a] = (n.m_im[a] - n.m_im[t - a]) / 2), (i[a] = (n.m_im[a] + n.m_im[t - a]) / 2), (o[a] = (-n.m_re[a] + n.m_re[t - a]) / 2);
                                                        }),
                                                        (n.repack = function (e, r, i, o) {
                                                            (n.m_re[0] = e[0]), (n.m_im[0] = i[0]), (n.m_re[d] = e[d]), (n.m_im[d] = i[d]);
                                                            for (var a = 1; a < d; a++) (n.m_re[a] = e[a] - o[a]), (n.m_im[a] = r[a] + i[a]), (n.m_re[t - a] = e[a] + o[a]), (n.m_im[t - a] = -r[a] + i[a]);
                                                        }),
                                                        n
                                                    );
                                                };
                                            }
                                        ]);
                                    })());
                            }
                        ]));
                },
                893: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913));
                    t.default = (function () {
                        function e(t) {
                            (0, i.default)(this, e), (this.lower = t.start), (this.upper = t.end), (this.onprocess = t.process), (this.position = 0), (this.n = 0);
                        }
                        return (
                            (0, o.default)(e, [
                                {
                                    key: 'iterate',
                                    value: function () {
                                        return this.n++, (this.position = Math.floor((this.lower + this.upper) / 2)), this.onprocess(this.lower, this.upper, this.position);
                                    }
                                },
                                {
                                    key: 'start',
                                    value: function () {
                                        return this.iterate(), this;
                                    }
                                },
                                {
                                    key: 'left',
                                    value: function () {
                                        return (this.upper = this.position), this.iterate();
                                    }
                                },
                                {
                                    key: 'right',
                                    value: function () {
                                        return (this.lower = this.position), this.iterate();
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                523: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913));
                    t.default = new ((function () {
                        function e() {
                            (0, i.default)(this, e);
                        }
                        return (
                            (0, o.default)(e, [
                                {
                                    key: 'hasTypedArrays',
                                    value: function () {
                                        return !!window.Uint32Array;
                                    }
                                },
                                {
                                    key: 'hasWebAssembly',
                                    value: function () {
                                        return !!window.WebAssembly;
                                    }
                                },
                                {
                                    key: 'hasWebAudio',
                                    value: function () {
                                        return !(!window.AudioContext && !window.webkitAudioContext);
                                    }
                                },
                                {
                                    key: 'hasFlash',
                                    value: function () {
                                        return !1;
                                    }
                                },
                                {
                                    key: 'hasAudio',
                                    value: function () {
                                        return this.hasWebAudio();
                                    }
                                },
                                {
                                    key: 'isBlacklisted',
                                    value: function (e) {
                                        return !1;
                                    }
                                },
                                {
                                    key: 'isSlow',
                                    value: function () {
                                        return !1;
                                    }
                                },
                                {
                                    key: 'isTooSlow',
                                    value: function () {
                                        return !1;
                                    }
                                },
                                {
                                    key: 'supported',
                                    value: function (e) {
                                        return 'OGVDecoder' === e ? this.hasWebAssembly() : 'OGVPlayer' === e && this.supported('OGVDecoder') && this.hasAudio();
                                    }
                                }
                            ]),
                            e
                        );
                    })())();
                },
                408: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913)),
                        a = r(n(205)),
                        s = r(n(585)),
                        l = r(n(754));
                    function c(e) {
                        var t = (function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, l.default)(e);
                            return (n = t ? Reflect.construct(r, arguments, (0, l.default)(this).constructor) : r.apply(this, arguments)), (0, s.default)(this, n);
                        };
                    }
                    t.default = (function (e) {
                        (0, a.default)(n, e);
                        var t = c(n);
                        function n() {
                            return (0, i.default)(this, n), t.apply(this, arguments);
                        }
                        return (
                            (0, o.default)(n, [
                                {
                                    key: 'init',
                                    value: function (e) {
                                        this.proxy('init', [], e);
                                    }
                                },
                                {
                                    key: 'processHeader',
                                    value: function (e, t) {
                                        this.proxy('processHeader', [e], t, [e]);
                                    }
                                },
                                {
                                    key: 'processAudio',
                                    value: function (e, t) {
                                        this.proxy('processAudio', [e], t, [e]);
                                    }
                                },
                                {
                                    key: 'close',
                                    value: function () {
                                        this.terminate();
                                    }
                                }
                            ]),
                            n
                        );
                    })(
                        (0, r(n(580)).default)({
                            loadedMetadata: !1,
                            audioFormat: null,
                            audioBuffer: null,
                            cpuTime: 0
                        })
                    );
                },
                319: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913)),
                        a = r(n(205)),
                        s = r(n(585)),
                        l = r(n(754));
                    function c(e) {
                        var t = (function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, l.default)(e);
                            return (n = t ? Reflect.construct(r, arguments, (0, l.default)(this).constructor) : r.apply(this, arguments)), (0, s.default)(this, n);
                        };
                    }
                    t.default = (function (e) {
                        (0, a.default)(n, e);
                        var t = c(n);
                        function n() {
                            return (0, i.default)(this, n), t.apply(this, arguments);
                        }
                        return (
                            (0, o.default)(n, [
                                {
                                    key: 'init',
                                    value: function (e) {
                                        this.proxy('init', [], e);
                                    }
                                },
                                {
                                    key: 'processHeader',
                                    value: function (e, t) {
                                        this.proxy('processHeader', [e], t, [e]);
                                    }
                                },
                                {
                                    key: 'processFrame',
                                    value: function (e, t) {
                                        this.proxy('processFrame', [e], t, [e]);
                                    }
                                },
                                {
                                    key: 'close',
                                    value: function () {
                                        this.terminate();
                                    }
                                },
                                {
                                    key: 'sync',
                                    value: function () {
                                        this.proxy('sync', [], function () {});
                                    }
                                },
                                {
                                    key: 'recycleFrame',
                                    value: function (e) {
                                        this.proxy('recycleFrame', [e], function () {}, [e.y.bytes.buffer, e.u.bytes.buffer, e.v.bytes.buffer]);
                                    }
                                }
                            ]),
                            n
                        );
                    })(
                        (0, r(n(580)).default)({
                            loadedMetadata: !1,
                            videoFormat: null,
                            frameBuffer: null,
                            cpuTime: 0
                        })
                    );
                },
                445: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913)),
                        a = r(n(539)),
                        s = '1.8.9-20220406232920-cb5f7ff',
                        l = {
                            OGVDemuxerOggW: 'ogv-demuxer-ogg-wasm.js',
                            OGVDemuxerWebMW: 'ogv-demuxer-webm-wasm.js',
                            OGVDecoderAudioOpusW: 'ogv-decoder-audio-opus-wasm.js',
                            OGVDecoderAudioVorbisW: 'ogv-decoder-audio-vorbis-wasm.js',
                            OGVDecoderVideoTheoraW: 'ogv-decoder-video-theora-wasm.js',
                            OGVDecoderVideoVP8W: 'ogv-decoder-video-vp8-wasm.js',
                            OGVDecoderVideoVP8MTW: 'ogv-decoder-video-vp8-mt-wasm.js',
                            OGVDecoderVideoVP9W: 'ogv-decoder-video-vp9-wasm.js',
                            OGVDecoderVideoVP9SIMDW: 'ogv-decoder-video-vp9-simd-wasm.js',
                            OGVDecoderVideoVP9MTW: 'ogv-decoder-video-vp9-mt-wasm.js',
                            OGVDecoderVideoVP9SIMDMTW: 'ogv-decoder-video-vp9-simd-mt-wasm.js',
                            OGVDecoderVideoAV1W: 'ogv-decoder-video-av1-wasm.js',
                            OGVDecoderVideoAV1SIMDW: 'ogv-decoder-video-av1-simd-wasm.js',
                            OGVDecoderVideoAV1MTW: 'ogv-decoder-video-av1-mt-wasm.js',
                            OGVDecoderVideoAV1SIMDMTW: 'ogv-decoder-video-av1-simd-mt-wasm.js'
                        };
                    t.default = (function () {
                        function e() {
                            (0, i.default)(this, e), (this.base = this.defaultBase());
                        }
                        return (
                            (0, o.default)(e, [
                                {
                                    key: 'defaultBase',
                                    value: function () {}
                                },
                                {
                                    key: 'wasmSupported',
                                    value: function () {
                                        return a.default.wasmSupported();
                                    }
                                },
                                {
                                    key: 'scriptForClass',
                                    value: function (e) {
                                        return l[e];
                                    }
                                },
                                {
                                    key: 'urlForClass',
                                    value: function (e) {
                                        var t = this.scriptForClass(e);
                                        if (t) return this.urlForScript(t);
                                        throw Error('asked for URL for unknown class ' + e);
                                    }
                                },
                                {
                                    key: 'urlForScript',
                                    value: function (e) {
                                        if (e) {
                                            var t = this.base;
                                            return void 0 === t ? (t = '') : (t += '/'), t + e + '?version=' + encodeURIComponent(s);
                                        }
                                        throw Error('asked for URL for unknown script ' + e);
                                    }
                                },
                                {
                                    key: 'loadClass',
                                    value: function (e, t, n) {
                                        var r = this;
                                        n = n || {};
                                        var i = this.getGlobal(),
                                            o = this.urlForClass(e),
                                            a = function (t) {
                                                return (
                                                    ((t = t || {}).locateFile = function (e) {
                                                        return 'data:' === e.slice(0, 5) ? e : r.urlForScript(e);
                                                    }),
                                                    (t.mainScriptUrlOrBlob = r.scriptForClass(e) + '?version=' + encodeURIComponent(s)),
                                                    i[e](t)
                                                );
                                            };
                                        'function' == typeof i[e]
                                            ? t(a)
                                            : this.loadScript(o, function () {
                                                  t(a);
                                              });
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                964: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913)),
                        a = r(n(525)),
                        s = r(n(205)),
                        l = r(n(585)),
                        c = r(n(754)),
                        u = r(n(408)),
                        d = r(n(319)),
                        f = r(n(445));
                    function _(e) {
                        var t = (function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, c.default)(e);
                            return (n = t ? Reflect.construct(r, arguments, (0, c.default)(this).constructor) : r.apply(this, arguments)), (0, l.default)(this, n);
                        };
                    }
                    var p = {
                            audio: {
                                proxy: u.default,
                                worker: 'ogv-worker-audio.js'
                            },
                            video: {
                                proxy: d.default,
                                worker: 'ogv-worker-video.js'
                            }
                        },
                        h = {
                            OGVDecoderAudioOpusW: 'audio',
                            OGVDecoderAudioVorbisW: 'audio',
                            OGVDecoderVideoTheoraW: 'video',
                            OGVDecoderVideoVP8W: 'video',
                            OGVDecoderVideoVP9W: 'video',
                            OGVDecoderVideoVP9SIMDW: 'video',
                            OGVDecoderVideoAV1W: 'video',
                            OGVDecoderVideoAV1SIMDW: 'video'
                        },
                        m = new ((function (e) {
                            (0, s.default)(n, e);
                            var t = _(n);
                            function n() {
                                var e;
                                return (0, i.default)(this, n), ((e = t.call(this)).scriptStatus = {}), (e.scriptCallbacks = {}), e;
                            }
                            return (
                                (0, o.default)(n, [
                                    {
                                        key: 'getGlobal',
                                        value: function () {
                                            return window;
                                        }
                                    },
                                    {
                                        key: 'defaultBase',
                                        value: function () {
                                            for (var e, t, n = document.querySelectorAll('script'), r = /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/, i = 0; i < n.length; i++) if ((e = n[i].getAttribute('src')) && (t = e.match(r))) return t[1];
                                        }
                                    },
                                    {
                                        key: 'loadClass',
                                        value: function (e, t, r) {
                                            (r = r || {}).worker ? this.workerProxy(e, t) : (0, a.default)((0, c.default)(n.prototype), 'loadClass', this).call(this, e, t, r);
                                        }
                                    },
                                    {
                                        key: 'loadScript',
                                        value: function (e, t) {
                                            var n = this;
                                            if ('done' == this.scriptStatus[e]) t();
                                            else if ('loading' == this.scriptStatus[e]) this.scriptCallbacks[e].push(t);
                                            else {
                                                (this.scriptStatus[e] = 'loading'), (this.scriptCallbacks[e] = [t]);
                                                var r = document.createElement('script'),
                                                    i = function (t) {
                                                        var r = n.scriptCallbacks[e];
                                                        delete n.scriptCallbacks[e],
                                                            (n.scriptStatus[e] = 'done'),
                                                            r.forEach(function (e) {
                                                                e();
                                                            });
                                                    };
                                                r.addEventListener('load', i), r.addEventListener('error', i), (r.src = e), document.querySelector('head').appendChild(r);
                                            }
                                        }
                                    },
                                    {
                                        key: 'workerProxy',
                                        value: function (e, t) {
                                            var n = p[h[e]];
                                            if (!n) throw Error('Requested worker for class with no proxy: ' + e);
                                            var r,
                                                i = n.proxy,
                                                o = n.worker,
                                                a = this.urlForScript(this.scriptForClass(e)),
                                                s = this.urlForScript(o),
                                                l = function (t) {
                                                    return new i(r, e, t);
                                                };
                                            if (s.match(/^https?:|\/\//i)) {
                                                var c,
                                                    u,
                                                    d,
                                                    f,
                                                    _,
                                                    g = function () {
                                                        if (1 == E && 1 == b) {
                                                            var e = d + ' ' + f + '\nOGVLoader.base = ' + JSON.stringify(m.base);
                                                            try {
                                                                _ = new Blob([e], { type: 'application/javascript' });
                                                            } catch (t) {
                                                                (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder), (_ = new BlobBuilder()).append(e), (_ = _.getBlob());
                                                            }
                                                            (r = new Worker(URL.createObjectURL(_))),
                                                                t(function (e) {
                                                                    return Promise.resolve(new l(e));
                                                                });
                                                        }
                                                    },
                                                    E = !1,
                                                    b = !1;
                                                (c = new XMLHttpRequest()).open('GET', a, !0),
                                                    (c.onreadystatechange = function () {
                                                        4 == c.readyState && 200 == c.status && ((d = c.responseText), (E = !0), g());
                                                    }),
                                                    c.send(),
                                                    (u = new XMLHttpRequest()).open('GET', s, !0),
                                                    (u.onreadystatechange = function () {
                                                        4 == u.readyState && 200 == u.status && ((f = u.responseText), (b = !0), g());
                                                    }),
                                                    u.send();
                                            } else
                                                (r = new Worker(s)),
                                                    t(function (e) {
                                                        return Promise.resolve(new l(e));
                                                    });
                                        }
                                    }
                                ]),
                                n
                            );
                        })(f.default))();
                    t.default = m;
                },
                759: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(913)),
                        o = r(n(575)),
                        a = r(n(309)),
                        s = {
                            MEDIA_ERR_ABORTED: 1,
                            MEDIA_ERR_NETWORK: 2,
                            MEDIA_ERR_DECODE: 3,
                            MEDIA_ERR_SRC_NOT_SUPPORTED: 4
                        },
                        l = (0, i.default)(function e(t, n) {
                            (0, o.default)(this, e), (this.code = t), (this.message = n);
                        });
                    (0, a.default)(l, s), (0, a.default)(l.prototype, s), (t.default = l);
                },
                278: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(913)),
                        o = r(n(575));
                    function a(e, t, n) {
                        var r = e.split(t, n).map(function (e) {
                            return (function (e) {
                                return e.replace(/^\s+/, '').replace(/\s+$/, '');
                            })(e);
                        });
                        if ('number' == typeof n) for (; r.length < n; ) r.push(null);
                        return r;
                    }
                    t.default = (0, i.default)(function e(t) {
                        (0, o.default)(this, e), (t = String(t)), (this.major = null), (this.minor = null), (this.codecs = null);
                        var n = a(t, ';');
                        if (n.length) {
                            var r = n.shift();
                            if (r) {
                                var i = a(r, '/', 2);
                                (this.major = i[0]), (this.minor = i[1]);
                            }
                            for (var s in n) {
                                var l = n[s].match(/^codecs\s*=\s*"(.*?)"$/);
                                if (l) {
                                    this.codecs = a(l[1], ',');
                                    break;
                                }
                            }
                        }
                    });
                },
                869: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913)),
                        a = r(n(506)),
                        s = r(n(205)),
                        l = r(n(585)),
                        c = r(n(754)),
                        u = r(n(8)),
                        d = r(n(731)),
                        f = r(n(936)),
                        _ = r(n(848)),
                        p = r(n(964)),
                        h = r(n(893)),
                        m = r(n(309)),
                        g = r(n(759)),
                        E = r(n(278)),
                        b = r(n(168)),
                        y = r(n(625)),
                        v = r(n(302));
                    function O(e) {
                        var t = (function () {
                            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ('function' == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, c.default)(e);
                            return (n = t ? Reflect.construct(r, arguments, (0, c.default)(this).constructor) : r.apply(this, arguments)), (0, l.default)(this, n);
                        };
                    }
                    var I,
                        S = (function () {
                            if ('function' == typeof setImmediate) return setImmediate;
                            var e = new MessageChannel(),
                                t = [];
                            return (
                                (e.port1.onmessage = function (e) {
                                    t.shift()();
                                }),
                                function (n) {
                                    t.push(n), e.port2.postMessage({});
                                }
                            );
                        })(),
                        T = {
                            NETWORK_EMPTY: 0,
                            NETWORK_IDLE: 1,
                            NETWORK_LOADING: 2,
                            NETWORK_NO_SOURCE: 3,
                            HAVE_NOTHING: 0,
                            HAVE_METADATA: 1,
                            HAVE_CURRENT_DATA: 2,
                            HAVE_FUTURE_DATA: 3,
                            HAVE_ENOUGH_DATA: 4
                        },
                        N = 'INITIAL',
                        A = 'SEEKING_END',
                        C = 'LOADED',
                        R = 'PRELOAD',
                        P = 'READY',
                        w = 'PLAYING',
                        D = 'SEEKING',
                        L = 'ERROR',
                        x = 'NOT_SEEKING',
                        M = 'BISECT_TO_TARGET',
                        k = 'BISECT_TO_KEYPOINT',
                        j = 'LINEAR_TO_TARGET',
                        U = 'exact',
                        G = 'fast';
                    function B() {
                        var e = document.createElement('ogvjs');
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, Object.getPrototypeOf(this)) : (e.__proto__ = this.__proto__), e;
                    }
                    (I = 'undefined' == typeof performance || void 0 === (0, u.default)(performance.now) ? Date.now : performance.now.bind(performance)), (B.prototype = Object.create(HTMLElement.prototype, {}));
                    var F = (function (e) {
                        (0, s.default)(n, e);
                        var t = O(n);
                        function n(e) {
                            var r;
                            if (((0, i.default)(this, n), (r = t.call(this)), ((e = e || {}).base = e.base || p.default.base), (r._options = e), (r._instanceId = 'ogvjs' + ++n.instanceCount), void 0 !== e.worker ? (r._enableWorker = !!e.worker) : (r._enableWorker = !!window.Worker), !p.default.wasmSupported())) throw Error('WebAssembly not supported');
                            return (
                                (r._enableThreading = !!e.threading),
                                (r._enableSIMD = !!e.simd),
                                (r._state = N),
                                (r._seekState = x),
                                (r._detectedType = null),
                                (r._canvas = document.createElement('canvas')),
                                (r._frameSink = null),
                                (r.className = r._instanceId),
                                (0, m.default)((0, a.default)(r), T),
                                (r._view = r._canvas),
                                (r._view.style.position = 'absolute'),
                                (r._view.style.top = '0'),
                                (r._view.style.left = '0'),
                                (r._view.style.width = '100%'),
                                (r._view.style.height = '100%'),
                                (r._view.style.objectFit = 'contain'),
                                r.appendChild(r._view),
                                (r._startTime = I()),
                                (r._codec = null),
                                (r._audioInfo = null),
                                (r._videoInfo = null),
                                (r._actionQueue = []),
                                (r._audioFeeder = null),
                                (r._muted = !1),
                                (r._initialPlaybackPosition = 0),
                                (r._initialPlaybackOffset = 0),
                                (r._prebufferingAudio = !1),
                                (r._initialSeekTime = 0),
                                (r._currentSrc = ''),
                                (r._crossOrigin = null),
                                (r._streamEnded = !1),
                                (r._mediaError = null),
                                (r._dataEnded = !1),
                                (r._byteLength = 0),
                                (r._duration = null),
                                (r._lastSeenTimestamp = null),
                                r._nextProcessingTimer,
                                (r._nextFrameTimer = null),
                                (r._loading = !1),
                                (r._started = !1),
                                (r._paused = !0),
                                (r._ended = !1),
                                (r._startedPlaybackInDocument = !1),
                                (r._stream = void 0),
                                (r._framesProcessed = 0),
                                (r._targetPerFrameTime = 1000 / 60),
                                (r._actualPerFrameTime = 0),
                                (r._totalFrameTime = 0),
                                (r._totalFrameCount = 0),
                                (r._playTime = 0),
                                (r._bufferTime = 0),
                                (r._drawingTime = 0),
                                (r._proxyTime = 0),
                                (r._totalJitter = 0),
                                (r._droppedAudio = 0),
                                (r._delayedAudio = 0),
                                (r._lateFrames = 0),
                                (r._poster = ''),
                                (r._thumbnail = null),
                                (r._frameEndTimestamp = 0),
                                (r._audioEndTimestamp = 0),
                                (r._decodedFrames = []),
                                (r._pendingFrames = []),
                                (r._lastFrameDecodeTime = 0),
                                (r._lastFrameVideoCpuTime = 0),
                                (r._lastFrameAudioCpuTime = 0),
                                (r._lastFrameDemuxerCpuTime = 0),
                                (r._lastFrameDrawingTime = 0),
                                (r._lastFrameBufferTime = 0),
                                (r._lastFrameProxyTime = 0),
                                (r._lastVideoCpuTime = 0),
                                (r._lastAudioCpuTime = 0),
                                (r._lastDemuxerCpuTime = 0),
                                (r._lastBufferTime = 0),
                                (r._lastProxyTime = 0),
                                (r._lastDrawingTime = 0),
                                (r._lastFrameTimestamp = 0),
                                (r._currentVideoCpuTime = 0),
                                (r._lastTimeUpdate = 0),
                                (r._timeUpdateInterval = 250),
                                (r._seekTargetTime = 0),
                                (r._bisectTargetTime = 0),
                                (r._seekMode = null),
                                (r._lastSeekPosition = null),
                                (r._seekBisector = null),
                                (r._didSeek = null),
                                (r._depth = 0),
                                (r._needProcessing = !1),
                                (r._pendingFrame = 0),
                                (r._pendingAudio = 0),
                                (r._framePipelineDepth = 8),
                                (r._frameParallelism = r._enableThreading ? Math.min(16, navigator.hardwareConcurrency) || 1 : 0),
                                (r._audioPipelineDepth = 12),
                                (r._videoInfo = null),
                                (r._audioInfo = null),
                                (r._width = 0),
                                (r._height = 0),
                                (r._volume = 1),
                                (r._playbackRate = 1),
                                Object.defineProperties((0, a.default)(r), {
                                    src: {
                                        get: function () {
                                            return this.getAttribute('src') || '';
                                        },
                                        set: function (e) {
                                            this.setAttribute('src', e), (this._loading = !1), this._prepForLoad('interactive');
                                        }
                                    },
                                    buffered: {
                                        get: function () {
                                            var e,
                                                t = this;
                                            return (
                                                (e =
                                                    this._stream && this._byteLength && this._duration
                                                        ? this._stream.getBufferedRanges().map(function (e) {
                                                              return e.map(function (e) {
                                                                  return (e / t._stream.length) * t._duration;
                                                              });
                                                          })
                                                        : [[0, 0]]),
                                                new b.default(e)
                                            );
                                        }
                                    },
                                    seekable: {
                                        get: function () {
                                            return new b.default(this.duration < 1 / 0 && this._stream && this._stream.seekable && this._codec && this._codec.seekable ? [[0, this._duration]] : []);
                                        }
                                    },
                                    currentTime: {
                                        get: function () {
                                            return this._state == D ? this._seekTargetTime : this._codec ? (this._state != w || this._paused ? this._initialPlaybackOffset : this._getPlaybackTime()) : this._initialSeekTime;
                                        },
                                        set: function (e) {
                                            this._seek(e, U);
                                        }
                                    },
                                    duration: {
                                        get: function () {
                                            return this._codec && this._codec.loadedMetadata ? (null !== this._duration ? this._duration : 1 / 0) : NaN;
                                        }
                                    },
                                    paused: {
                                        get: function () {
                                            return this._paused;
                                        }
                                    },
                                    ended: {
                                        get: function () {
                                            return this._ended;
                                        }
                                    },
                                    seeking: {
                                        get: function () {
                                            return this._state == D;
                                        }
                                    },
                                    muted: {
                                        get: function () {
                                            return this._muted;
                                        },
                                        set: function (e) {
                                            (this._muted = e), this._audioFeeder ? (this._audioFeeder.muted = this._muted) : this._started && !this._muted && this._codec && this._codec.hasAudio && (this._log('unmuting: switching from timer to audio clock'), this._initAudioFeeder(), this._startPlayback(this._audioEndTimestamp)), this._fireEventAsync('volumechange');
                                        }
                                    },
                                    poster: {
                                        get: function () {
                                            return this._poster;
                                        },
                                        set: function (e) {
                                            var t = this;
                                            if (((this._poster = e), !this._started)) {
                                                this._thumbnail && this.removeChild(this._thumbnail);
                                                var r = new Image();
                                                (r.crossOrigin = this.crossOrigin),
                                                    (r.src = this._poster),
                                                    (r.className = 'ogvjs-poster'),
                                                    (r.style.position = 'absolute'),
                                                    (r.style.top = '0'),
                                                    (r.style.left = '0'),
                                                    (r.style.width = '100%'),
                                                    (r.style.height = '100%'),
                                                    (r.style.objectFit = 'contain'),
                                                    (r.style.visibility = 'hidden'),
                                                    r.addEventListener('load', function () {
                                                        t._thumbnail === r &&
                                                            (n.styleManager.appendRule('.' + t._instanceId, {
                                                                width: r.naturalWidth + 'px',
                                                                height: r.naturalHeight + 'px'
                                                            }),
                                                            (r.style.visibility = 'visible'));
                                                    }),
                                                    (this._thumbnail = r),
                                                    this.appendChild(r);
                                            }
                                        }
                                    },
                                    videoWidth: {
                                        get: function () {
                                            return this._videoInfo ? this._videoInfo.displayWidth : 0;
                                        }
                                    },
                                    videoHeight: {
                                        get: function () {
                                            return this._videoInfo ? this._videoInfo.displayHeight : 0;
                                        }
                                    },
                                    ogvjsVideoFrameRate: {
                                        get: function () {
                                            return this._videoInfo ? (0 == this._videoInfo.fps ? this._totalFrameCount / (this._totalFrameTime / 1000) : this._videoInfo.fps) : 0;
                                        }
                                    },
                                    ogvjsAudioChannels: {
                                        get: function () {
                                            return this._audioInfo ? this._audioInfo.channels : 0;
                                        }
                                    },
                                    ogvjsAudioSampleRate: {
                                        get: function () {
                                            return this._audioInfo ? this._audioInfo.rate : 0;
                                        }
                                    },
                                    width: {
                                        get: function () {
                                            return this._width;
                                        },
                                        set: function (e) {
                                            (this._width = parseInt(e, 10)), (this.style.width = this._width + 'px');
                                        }
                                    },
                                    height: {
                                        get: function () {
                                            return this._height;
                                        },
                                        set: function (e) {
                                            (this._height = parseInt(e, 10)), (this.style.height = this._height + 'px');
                                        }
                                    },
                                    autoplay: {
                                        get: function () {
                                            return !1;
                                        },
                                        set: function (e) {}
                                    },
                                    controls: {
                                        get: function () {
                                            return !1;
                                        },
                                        set: function (e) {}
                                    },
                                    loop: {
                                        get: function () {
                                            return !1;
                                        },
                                        set: function (e) {}
                                    },
                                    crossOrigin: {
                                        get: function () {
                                            return this._crossOrigin;
                                        },
                                        set: function (e) {
                                            switch (e) {
                                                case null:
                                                    (this._crossOrigin = e), this.removeAttribute('crossorigin');
                                                    break;
                                                default:
                                                    e = 'anonymous';
                                                case '':
                                                case 'anonymous':
                                                case 'use-credentials':
                                                    (this._crossOrigin = e), this.setAttribute('crossorigin', e);
                                            }
                                            this._thumbnail && (this._thumbnail.crossOrigin = e);
                                        }
                                    },
                                    currentSrc: {
                                        get: function () {
                                            return this._currentSrc;
                                        }
                                    },
                                    defaultMuted: {
                                        get: function () {
                                            return !1;
                                        }
                                    },
                                    defaultPlaybackRate: {
                                        get: function () {
                                            return 1;
                                        }
                                    },
                                    error: {
                                        get: function () {
                                            return this._state === L ? (this._mediaError ? this._mediaError : new g.default('unknown error occurred in media procesing')) : null;
                                        }
                                    },
                                    preload: {
                                        get: function () {
                                            return this.getAttribute('preload') || '';
                                        },
                                        set: function (e) {
                                            this.setAttribute('preload', e);
                                        }
                                    },
                                    readyState: {
                                        get: function () {
                                            return this._stream && this._codec && this._codec.loadedMetadata ? n.HAVE_ENOUGH_DATA : n.HAVE_NOTHING;
                                        }
                                    },
                                    networkState: {
                                        get: function () {
                                            return this._stream ? (this._stream.waiting ? n.NETWORK_LOADING : n.NETWORK_IDLE) : this.readyState == n.HAVE_NOTHING ? n.NETWORK_EMPTY : n.NETWORK_NO_SOURCE;
                                        }
                                    },
                                    playbackRate: {
                                        get: function () {
                                            return this._playbackRate;
                                        },
                                        set: function (e) {
                                            var t = Number(e) || 1;
                                            this._audioFeeder ? (this._audioFeeder.tempo = t) : this._paused || ((this._initialPlaybackOffset = this._getPlaybackTime()), (this._initialPlaybackPosition = (t * I()) / 1000)), (this._playbackRate = t), this._fireEventAsync('ratechange');
                                        }
                                    },
                                    played: {
                                        get: function () {
                                            return new b.default([[0, this.currentTime]]);
                                        }
                                    },
                                    volume: {
                                        get: function () {
                                            return this._volume;
                                        },
                                        set: function (e) {
                                            (this._volume = +e), this._audioFeeder && (this._audioFeeder.volume = this._volume), this._fireEventAsync('volumechange');
                                        }
                                    }
                                }),
                                (r.onframecallback = null),
                                (r.onloadstate = null),
                                (r.onprogress = null),
                                (r.onsuspend = null),
                                (r.onabort = null),
                                (r.onemptied = null),
                                (r.onstalled = null),
                                (r.onloadedmetadata = null),
                                (r.onloadeddata = null),
                                (r.oncanplay = null),
                                (r.oncanplaythrough = null),
                                (r.onplaying = null),
                                (r.onwaiting = null),
                                (r.onseeking = null),
                                (r.onseeked = null),
                                (r.onended = null),
                                (r.ondurationchange = null),
                                (r.ontimeupdate = null),
                                (r.onplay = null),
                                (r.onpause = null),
                                (r.onratechange = null),
                                (r.onresize = null),
                                (r.onvolumechange = null),
                                (r.onaudiofeedercreated = null),
                                r
                            );
                        }
                        return (
                            (0, o.default)(
                                n,
                                [
                                    {
                                        key: '_time',
                                        value: function (e) {
                                            var t = I();
                                            e();
                                            var n = I() - t;
                                            return (this._lastFrameDecodeTime += n), n;
                                        }
                                    },
                                    {
                                        key: '_log',
                                        value: function (e) {
                                            var t = this._options;
                                            if (t.debug) {
                                                var n = I() - this._startTime;
                                                (t.debugFilter && !e.match(t.debugFilter)) || console.log('[' + Math.round(10 * n) / 10 + 'ms] ' + e);
                                            }
                                        }
                                    },
                                    {
                                        key: '_fireEvent',
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            this._log('fireEvent ' + e);
                                            var n,
                                                r = 'function' == typeof Event;
                                            for (var i in (r ? (n = new CustomEvent(e)) : (n = document.createEvent('Event')).initEvent(e, !1, !1), t)) t.hasOwnProperty(i) && (n[i] = t[i]);
                                            var o = this.dispatchEvent(n);
                                            !r && 'resize' === e && this.onresize && o && this.onresize.call(this, n);
                                        }
                                    },
                                    {
                                        key: '_fireEventAsync',
                                        value: function (e) {
                                            var t = this,
                                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            this._log('fireEventAsync ' + e),
                                                S(function () {
                                                    t._fireEvent(e, n);
                                                });
                                        }
                                    },
                                    {
                                        key: '_initAudioFeeder',
                                        value: function () {
                                            var e = this,
                                                t = this._options,
                                                n = { bufferSize: 8192 };
                                            t.audioContext && (n.audioContext = t.audioContext), t.audioDestination && (n.output = t.audioDestination), t.audioBackendFactory && (n.backendFactory = t.audioBackendFactory);
                                            var r = (this._audioFeeder = new _.default(n));
                                            r.init(this._audioInfo.channels, this._audioInfo.rate),
                                                this.onaudiofeedercreated && this.onaudiofeedercreated(this._audioFeeder),
                                                (r.bufferThreshold = 1),
                                                (r.volume = this.volume),
                                                (r.muted = this.muted),
                                                (r.tempo = this.playbackRate),
                                                (r.onbufferlow = function () {
                                                    e._log('onbufferlow'), (e._stream && (e._stream.buffering || e._stream.seeking)) || e._pendingAudio || e._pingProcessing();
                                                }),
                                                (r.onstarved = function () {
                                                    e._dataEnded ? e._log('onstarved: appear to have reached end of audio') : (e._log('onstarved: halting audio due to starvation'), e._stopPlayback(), (e._prebufferingAudio = !0)), e._isProcessing() || e._pingProcessing(0);
                                                });
                                        }
                                    },
                                    {
                                        key: '_startPlayback',
                                        value: function (e) {
                                            if (this._audioFeeder) {
                                                this._audioFeeder.start();
                                                var t = this._audioFeeder.getPlaybackState();
                                                this._initialPlaybackPosition = t.playbackPosition;
                                            } else this._initialPlaybackPosition = (this._playbackRate * I()) / 1000;
                                            void 0 !== e && (this._initialPlaybackOffset = e), (this._prebufferingAudio = !1), this._log('continuing at ' + this._initialPlaybackPosition + ', ' + this._initialPlaybackOffset);
                                        }
                                    },
                                    {
                                        key: '_stopPlayback',
                                        value: function () {
                                            (this._initialPlaybackOffset = this._getPlaybackTime()), this._log('pausing at ' + this._initialPlaybackOffset), this._audioFeeder && this._audioFeeder.stop();
                                        }
                                    },
                                    {
                                        key: '_getPlaybackTime',
                                        value: function (e) {
                                            return this._prebufferingAudio || this._paused ? this._initialPlaybackOffset : (this._audioFeeder ? (e = e || this._audioFeeder.getPlaybackState()).playbackPosition : (this._playbackRate * I()) / 1000) - this._initialPlaybackPosition + this._initialPlaybackOffset;
                                        }
                                    },
                                    {
                                        key: '_stopVideo',
                                        value: function () {
                                            this._log('STOPPING'), (this._state = N), (this._seekState = x), (this._started = !1), (this._ended = !1), (this._frameEndTimestamp = 0), (this._audioEndTimestamp = 0), (this._lastFrameDecodeTime = 0), (this._prebufferingAudio = !1), this._actionQueue.splice(0, this._actionQueue.length), this._stream && (this._stream.abort(), (this._stream = null), (this._streamEnded = !1)), this._codec && (this._codec.close(), (this._codec = null), (this._pendingFrame = 0), (this._pendingAudio = 0), (this._dataEnded = !1)), (this._videoInfo = null), (this._audioInfo = null), this._audioFeeder && (this._audioFeeder.close(), (this._audioFeeder = null)), this._nextProcessingTimer && (clearTimeout(this._nextProcessingTimer), (this._nextProcessingTimer = null)), this._nextFrameTimer && (clearTimeout(this._nextFrameTimer), (this._nextFrameTimer = null)), this._frameSink && (this._frameSink.clear(), (this._frameSink = null)), this._decodedFrames && (this._decodedFrames = []), this._pendingFrames && (this._pendingFrames = []), (this._initialSeekTime = 0), (this._initialPlaybackPosition = 0), (this._initialPlaybackOffset = 0), (this._duration = null);
                                        }
                                    },
                                    {
                                        key: '_doFrameComplete',
                                        value: function () {
                                            var e = this,
                                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            this._startedPlaybackInDocument &&
                                                !document.body.contains(this) &&
                                                S(function () {
                                                    e.stop();
                                                });
                                            var n = I(),
                                                r = n - this._lastFrameTimestamp,
                                                i = this._actualPerFrameTime - this._targetPerFrameTime;
                                            (this._totalJitter += Math.abs(i)), (this._playTime += r);
                                            var o = {
                                                cpuTime: this._lastFrameDecodeTime,
                                                drawingTime: this._drawingTime - this._lastFrameDrawingTime,
                                                bufferTime: this._bufferTime - this._lastFrameBufferTime,
                                                proxyTime: this._proxyTime - this._lastFrameProxyTime,
                                                demuxerTime: 0,
                                                videoTime: 0,
                                                audioTime: 0,
                                                clockTime: this._actualPerFrameTime,
                                                late: t.dropped,
                                                dropped: t.dropped
                                            };
                                            function a(e) {
                                                return Math.round(10 * e) / 10;
                                            }
                                            this._codec && ((o.demuxerTime = this._codec.demuxerCpuTime - this._lastFrameDemuxerCpuTime), (o.videoTime += this._currentVideoCpuTime - this._lastFrameVideoCpuTime), (o.audioTime += this._codec.audioCpuTime - this._lastFrameAudioCpuTime)), (o.cpuTime += o.demuxerTime), (this._lastFrameDecodeTime = 0), (this._lastFrameTimestamp = n), this._codec ? ((this._lastFrameVideoCpuTime = this._currentVideoCpuTime), (this._lastFrameAudioCpuTime = this._codec.audioCpuTime), (this._lastFrameDemuxerCpuTime = this._codec.demuxerCpuTime)) : ((this._lastFrameVideoCpuTime = 0), (this._lastFrameAudioCpuTime = 0), (this._lastFrameDemuxerCpuTime = 0)), (this._lastFrameDrawingTime = this._drawingTime), (this._lastFrameBufferTime = this._bufferTime), (this._lastFrameProxyTime = this._proxyTime), this._log('drew frame ' + t.frameEndTimestamp + ': clock time ' + a(r) + ' (jitter ' + a(i) + ') cpu: ' + a(o.cpuTime) + ' (mux: ' + a(o.demuxerTime) + ' buf: ' + a(o.bufferTime) + ' draw: ' + a(o.drawingTime) + ' proxy: ' + a(o.proxyTime) + ') vid: ' + a(o.videoTime) + ' aud: ' + a(o.audioTime)), this._fireEventAsync('framecallback', o), (!this._lastTimeUpdate || n - this._lastTimeUpdate >= this._timeUpdateInterval) && ((this._lastTimeUpdate = n), this._fireEventAsync('timeupdate')), this._codec && t.yCbCrBuffer && this._codec.recycleFrame(t.yCbCrBuffer);
                                        }
                                    },
                                    {
                                        key: '_seekStream',
                                        value: function (e) {
                                            var t = this;
                                            this._stream.seeking && this._stream.abort(),
                                                this._stream.buffering && this._stream.abort(),
                                                (this._streamEnded = !1),
                                                (this._dataEnded = !1),
                                                (this._ended = !1),
                                                this._stream
                                                    .seek(e)
                                                    .then(function () {
                                                        t._readBytesAndWait();
                                                    })
                                                    .catch(function (e) {
                                                        t._onStreamError(e);
                                                    });
                                        }
                                    },
                                    {
                                        key: '_onStreamError',
                                        value: function (e) {
                                            'AbortError' === e.name ? this._log('i/o promise canceled; ignoring') : (this._log('i/o error: ' + e), (this._mediaError = new g.default(g.default.MEDIA_ERR_NETWORK, String(e))), (this._state = L), this._stopPlayback());
                                        }
                                    },
                                    {
                                        key: '_seek',
                                        value: function (e, t) {
                                            var n = this;
                                            if ((this._log('requested seek to ' + e + ', mode ' + t), this.readyState == this.HAVE_NOTHING)) return this._log('not yet loaded; saving seek position for later'), void (this._initialSeekTime = e);
                                            if (this._stream && !this._stream.seekable) throw Error('Cannot seek a non-seekable stream');
                                            if (this._codec && !this._codec.seekable) throw Error('Cannot seek in a non-seekable file');
                                            var r = function (r) {
                                                n._stream && n._stream.buffering && n._stream.abort(), n._stream && n._stream.seeking && n._stream.abort(), n._actionQueue.splice(0, n._actionQueue.length), n._stopPlayback(), (n._prebufferingAudio = !1), n._audioFeeder && n._audioFeeder.flush(), (n._state = D), (n._seekTargetTime = e), (n._seekMode = t), n._codec ? n._codec.flush(r) : r();
                                            };
                                            r(function () {
                                                n._isProcessing() || n._pingProcessing(0);
                                            }),
                                                this._actionQueue.push(function () {
                                                    r(function () {
                                                        n._doSeek(e);
                                                    });
                                                });
                                        }
                                    },
                                    {
                                        key: '_doSeek',
                                        value: function (e) {
                                            var t = this;
                                            (this._streamEnded = !1),
                                                (this._dataEnded = !1),
                                                (this._ended = !1),
                                                (this._state = D),
                                                (this._seekTargetTime = e),
                                                (this._lastSeekPosition = -1),
                                                (this._decodedFrames = []),
                                                (this._pendingFrames = []),
                                                (this._pendingFrame = 0),
                                                (this._pendingAudio = 0),
                                                (this._didSeek = !1),
                                                this._codec.seekToKeypoint(e, function (n) {
                                                    if (n) return (t._seekState = j), t._fireEventAsync('seeking'), t._didSeek ? void 0 : void t._pingProcessing();
                                                    t._codec.getKeypointOffset(e, function (e) {
                                                        e > 0 ? ((t._seekState = j), t._seekStream(e)) : ((t._seekState = M), t._startBisection(t._seekTargetTime)), t._fireEventAsync('seeking');
                                                    });
                                                });
                                        }
                                    },
                                    {
                                        key: '_startBisection',
                                        value: function (e) {
                                            var t = this,
                                                n = Math.max(0, this._stream.length - 65536);
                                            (this._bisectTargetTime = e),
                                                (this._seekBisector = new h.default({
                                                    start: 0,
                                                    end: n,
                                                    process: function (e, n, r) {
                                                        return (
                                                            r != t._lastSeekPosition &&
                                                            ((t._lastSeekPosition = r),
                                                            t._codec.flush(function () {
                                                                t._seekStream(r);
                                                            }),
                                                            !0)
                                                        );
                                                    }
                                                })),
                                                this._seekBisector.start();
                                        }
                                    },
                                    {
                                        key: '_continueSeekedPlayback',
                                        value: function () {
                                            var e = this;
                                            (this._seekState = x), (this._state = P), (this._frameEndTimestamp = this._codec.frameTimestamp), (this._audioEndTimestamp = this._codec.audioTimestamp), this._codec.hasAudio ? (this._seekTargetTime = this._codec.audioTimestamp) : (this._seekTargetTime = this._codec.frameTimestamp), (this._initialPlaybackOffset = this._seekTargetTime);
                                            var t = function () {
                                                (e._lastTimeUpdate = e._seekTargetTime), e._fireEventAsync('timeupdate'), e._fireEventAsync('seeked'), e._isProcessing() || e._pingProcessing();
                                            };
                                            if (this._codec.hasVideo && this._decodedFrames.length) {
                                                var n = this._decodedFrames.shift();
                                                this._drawFrame(n.yCbCrBuffer), t();
                                            } else {
                                                if (this._codec.hasVideo && this._codec.frameReady)
                                                    return (
                                                        this._codec.decodeFrame(function (n) {
                                                            n && e._drawFrame(e._codec.frameBuffer), t();
                                                        }),
                                                        void this._codec.sync()
                                                    );
                                                t();
                                            }
                                        }
                                    },
                                    {
                                        key: '_drawFrame',
                                        value: function (e) {
                                            this._thumbnail && (this.removeChild(this._thumbnail), (this._thumbnail = null)), this._frameSink.drawFrame(e);
                                        }
                                    },
                                    {
                                        key: '_doProcessLinearSeeking',
                                        value: function () {
                                            var e,
                                                t = this;
                                            if (((e = this._codec.hasVideo ? this._targetPerFrameTime / 1000 : 1 / 256), this._codec.hasVideo)) {
                                                if (this._pendingFrame) return;
                                                if (!this._codec.frameReady)
                                                    return void this._codec.process(function (e) {
                                                        e ? t._pingProcessing() : t._streamEnded ? (t._log('stream ended during linear seeking on video'), (t._dataEnded = !0), t._continueSeekedPlayback()) : t._readBytesAndWait();
                                                    });
                                                if (this._seekMode === G && this._codec.keyframeTimestamp == this._codec.frameTimestamp) return void this._continueSeekedPlayback();
                                                if (this._codec.frameTimestamp <= this._seekTargetTime) {
                                                    var n = this._codec.frameTimestamp;
                                                    return (
                                                        this._pendingFrame++,
                                                        this._pendingFrames.push({ frameEndTimestamp: n }),
                                                        this._decodedFrames.splice(0, this._decodedFrames.length),
                                                        this._codec.decodeFrame(function (e) {
                                                            t._pendingFrame--,
                                                                t._pendingFrames.shift(),
                                                                t._decodedFrames.push({
                                                                    yCbCrBuffer: t._codec.frameBuffer,
                                                                    videoCpuTime: t._codec.videoCpuTime,
                                                                    frameEndTimestamp: n
                                                                }),
                                                                t._pingProcessing();
                                                        }),
                                                        void this._codec.sync()
                                                    );
                                                }
                                                if (!this._codec.hasAudio) return void this._continueSeekedPlayback();
                                            }
                                            if (this._codec.hasAudio) {
                                                if (this._pendingAudio) return;
                                                return this._codec.audioReady
                                                    ? this._codec.audioTimestamp + e < this._seekTargetTime
                                                        ? void this._codec.decodeAudio(function () {
                                                              t._pingProcessing();
                                                          })
                                                        : void this._continueSeekedPlayback()
                                                    : void this._codec.process(function (e) {
                                                          e ? t._pingProcessing() : t._streamEnded ? (t._log('stream ended during linear seeking on audio'), (t._dataEnded = !0), t._continueSeekedPlayback()) : t._readBytesAndWait();
                                                      });
                                            }
                                        }
                                    },
                                    {
                                        key: '_doProcessBisectionSeek',
                                        value: function () {
                                            var e,
                                                t,
                                                n = this;
                                            if (this._codec.hasVideo) (t = this._codec.frameTimestamp), (e = this._targetPerFrameTime / 1000);
                                            else {
                                                if (!this._codec.hasAudio) throw Error('Invalid seek state; no audio or video track available');
                                                (t = this._codec.audioTimestamp), (e = 1 / 256);
                                            }
                                            t < 0
                                                ? this._codec.process(function (e) {
                                                      if (e) n._pingProcessing();
                                                      else if (n._streamEnded) {
                                                          if ((n._log('stream ended during bisection seek'), !n._seekBisector.right())) throw (n._log('failed going back'), Error('not sure what to do'));
                                                      } else n._readBytesAndWait();
                                                  })
                                                : t - e / 2 > this._bisectTargetTime
                                                  ? this._seekBisector.left() || (this._log('close enough (left)'), (this._seekTargetTime = t), this._continueSeekedPlayback())
                                                  : t + e / 2 < this._bisectTargetTime
                                                    ? this._seekBisector.right() || (this._log('close enough (right)'), (this._seekState = j), this._pingProcessing())
                                                    : this._seekState == M && this._codec.hasVideo && this._codec.keyframeTimestamp < this._codec.frameTimestamp
                                                      ? (this._log('finding the keypoint now'), (this._seekState = k), this._startBisection(this._codec.keyframeTimestamp))
                                                      : (this._log('straight seeking now'), (this._seekState = j), this._pingProcessing());
                                        }
                                    },
                                    {
                                        key: '_setupVideo',
                                        value: function () {
                                            this._videoInfo.fps > 0 ? (this._targetPerFrameTime = 1000 / this._videoInfo.fps) : (this._targetPerFrameTime = 16.667),
                                                (this._canvas.width = this._videoInfo.displayWidth),
                                                (this._canvas.height = this._videoInfo.displayHeight),
                                                n.styleManager.appendRule('.' + this._instanceId, {
                                                    width: this._videoInfo.displayWidth + 'px',
                                                    height: this._videoInfo.displayHeight + 'px'
                                                });
                                            var e = {};
                                            void 0 !== this._options.webGL && (e.webGL = this._options.webGL), this._options.forceWebGL && (e.webGL = 'required'), (this._frameSink = d.default.attach(this._canvas, e));
                                        }
                                    },
                                    {
                                        key: '_doProcessing',
                                        value: function () {
                                            if ((this._didSeek && (this._didSeek = !1), (this._nextProcessingTimer = null), this._isProcessing(), this._depth > 0)) throw Error('REENTRANCY FAIL: doProcessing recursing unexpectedly');
                                            var e = 0;
                                            do {
                                                if (((this._needProcessing = !1), this._depth++, this._doProcessingLoop(), this._depth--, this._needProcessing && this._isProcessing())) throw Error('REENTRANCY FAIL: waiting on input or codec but asked to keep processing');
                                                ++e > 500 && (this._log('stuck in processing loop; breaking with timer'), (this._needProcessing = 0), this._pingProcessing(0));
                                            } while (this._needProcessing);
                                        }
                                    },
                                    {
                                        key: '_doProcessingLoop',
                                        value: function () {
                                            if (this._actionQueue.length) this._actionQueue.shift()();
                                            else if (this._state == N) this._doProcessInitial();
                                            else if (this._state == A) this._doProcessSeekingEnd();
                                            else if (this._state == C) this._doProcessLoaded();
                                            else if (this._state == R) this._doProcessPreload();
                                            else if (this._state == P) this._doProcessReady();
                                            else if (this._state == D) this._doProcessSeeking();
                                            else if (this._state == w) this._doProcessPlay();
                                            else {
                                                if (this._state != L) throw Error('Unexpected OGVPlayer state ' + this._state);
                                                this._doProcessError();
                                            }
                                        }
                                    },
                                    {
                                        key: '_doProcessInitial',
                                        value: function () {
                                            var e = this;
                                            if (this._codec.loadedMetadata) {
                                                if (!this._codec.hasVideo && !this._codec.hasAudio) throw Error('No audio or video found, something is wrong');
                                                this._codec.hasAudio && (this._audioInfo = this._codec.audioFormat),
                                                    this._codec.hasVideo && ((this._videoInfo = this._codec.videoFormat), this._setupVideo()),
                                                    isNaN(this._codec.duration) || (this._duration = this._codec.duration),
                                                    null === this._duration && this._stream.seekable && 'video/ogg' == this._detectedType
                                                        ? ((this._state = A),
                                                          (this._lastSeenTimestamp = -1),
                                                          this._codec.flush(function () {
                                                              e._seekStream(Math.max(0, e._stream.length - 131072));
                                                          }))
                                                        : ((this._state = C), this._pingProcessing());
                                            } else
                                                this._codec.process(function (t) {
                                                    if (t) e._pingProcessing();
                                                    else {
                                                        if (e._streamEnded) throw Error('end of file before headers found');
                                                        e._log('reading more cause we are out of data'), e._readBytesAndWait();
                                                    }
                                                });
                                        }
                                    },
                                    {
                                        key: '_doProcessSeekingEnd',
                                        value: function () {
                                            var e = this;
                                            this._codec.frameReady
                                                ? (this._log('saw frame with ' + this._codec.frameTimestamp),
                                                  (this._lastSeenTimestamp = Math.max(this._lastSeenTimestamp, this._codec.frameTimestamp)),
                                                  this._codec.discardFrame(function () {
                                                      e._pingProcessing();
                                                  }))
                                                : this._codec.audioReady
                                                  ? (this._log('saw audio with ' + this._codec.audioTimestamp),
                                                    (this._lastSeenTimestamp = Math.max(this._lastSeenTimestamp, this._codec.audioTimestamp)),
                                                    this._codec.discardAudio(function () {
                                                        e._pingProcessing();
                                                    }))
                                                  : this._codec.process(function (t) {
                                                        t
                                                            ? e._pingProcessing()
                                                            : e._stream.eof
                                                              ? (e._log('seek-duration: we are at the end: ' + e._lastSeenTimestamp),
                                                                e._lastSeenTimestamp > 0 && (e._duration = e._lastSeenTimestamp),
                                                                (e._state = C),
                                                                e._codec.flush(function () {
                                                                    (e._streamEnded = !1), (e._dataEnded = !1), e._seekStream(0);
                                                                }))
                                                              : e._readBytesAndWait();
                                                    });
                                        }
                                    },
                                    {
                                        key: '_doProcessLoaded',
                                        value: function () {
                                            (this._state = R), this._fireEventAsync('loadedmetadata'), this._fireEventAsync('durationchange'), this._codec.hasVideo && this._fireEventAsync('resize'), this._pingProcessing(0);
                                        }
                                    },
                                    {
                                        key: '_doProcessPreload',
                                        value: function () {
                                            var e = this;
                                            (!this._codec.frameReady && this._codec.hasVideo) || (!this._codec.audioReady && this._codec.hasAudio)
                                                ? this._codec.process(function (t) {
                                                      t ? e._pingProcessing() : e._streamEnded ? (e._ended = !0) : e._readBytesAndWait();
                                                  })
                                                : ((this._state = P), this._fireEventAsync('loadeddata'), this._pingProcessing());
                                        }
                                    },
                                    {
                                        key: '_doProcessReady',
                                        value: function () {
                                            var e = this;
                                            if ((this._log('initial seek to ' + this._initialSeekTime), this._initialSeekTime > 0)) {
                                                var t = this._initialSeekTime;
                                                (this._initialSeekTime = 0), this._log('initial seek to ' + t), this._doSeek(t);
                                            } else if (this._paused) this._log('paused while in ready');
                                            else {
                                                var n = function () {
                                                    e._log('finishStartPlaying'), (e._state = w), (e._lastFrameTimestamp = I()), e._codec.hasAudio && e._audioFeeder ? (e._prebufferingAudio = !0) : e._startPlayback(), e._pingProcessing(0), e._fireEventAsync('play'), e._fireEventAsync('playing');
                                                };
                                                !this._codec.hasAudio || this._audioFeeder || this._muted ? n() : (this._initAudioFeeder(), this._audioFeeder.waitUntilReady(n));
                                            }
                                        }
                                    },
                                    {
                                        key: '_doProcessSeeking',
                                        value: function () {
                                            if (this._seekState == x) throw Error('seeking in invalid state (not seeking?)');
                                            if (this._seekState == M) this._doProcessBisectionSeek();
                                            else if (this._seekState == k) this._doProcessBisectionSeek();
                                            else {
                                                if (this._seekState != j) throw Error('Invalid seek state ' + this._seekState);
                                                this._doProcessLinearSeeking();
                                            }
                                        }
                                    },
                                    {
                                        key: '_doProcessPlay',
                                        value: function () {
                                            var e = this,
                                                t = this._codec;
                                            if (this._paused) this._log('paused during playback; stopping loop');
                                            else if ((!t.hasAudio || t.audioReady || this._pendingAudio || this._dataEnded) && (!t.hasVideo || t.frameReady || this._pendingFrame || this._decodedFrames.length || this._dataEnded)) {
                                                var n,
                                                    r,
                                                    i,
                                                    o = null,
                                                    a = 0,
                                                    s = !1,
                                                    l = 0;
                                                if ((t.hasAudio && this._audioFeeder ? ((o = this._audioFeeder.getPlaybackState()), (a = this._getPlaybackTime(o)), (s = this._dataEnded && 0 == this._audioFeeder.durationBuffered), this._prebufferingAudio && ((this._audioFeeder.durationBuffered >= 2 * this._audioFeeder.bufferThreshold && (!t.hasVideo || this._decodedFrames.length >= this._framePipelineDepth)) || this._dataEnded) && (this._log('prebuffering audio done; buffered to ' + this._audioFeeder.durationBuffered), this._startPlayback(a), (this._prebufferingAudio = !1)), o.dropped != this._droppedAudio && this._log('dropped ' + (o.dropped - this._droppedAudio)), o.delayed != this._delayedAudio && this._log('delayed ' + (o.delayed - this._delayedAudio)), (this._droppedAudio = o.dropped), (this._delayedAudio = o.delayed), (n = this._audioFeeder.durationBuffered <= 2 * this._audioFeeder.bufferThreshold) && (this._codec.audioReady ? this._pendingAudio >= this._audioPipelineDepth && (this._log('audio decode disabled: ' + this._pendingAudio + ' packets in flight'), (n = !1)) : (n = !1))) : ((a = this._getPlaybackTime()), (n = this._codec.audioReady && this._audioEndTimestamp < a)), this._codec.hasVideo)) {
                                                    (r = this._decodedFrames.length > 0), (i = this._pendingFrame + this._decodedFrames.length < this._framePipelineDepth + this._frameParallelism && this._codec.frameReady), r && ((l = 1000 * (this._decodedFrames[0].frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - l));
                                                    var c = this._targetPerFrameTime;
                                                    if (this._prebufferingAudio) i && this._log('decoding a frame during prebuffering'), (r = !1);
                                                    else if (r && this._dataEnded && s) this._log('audio timeline ended? ready to draw frame');
                                                    else if (r && -l >= c) {
                                                        for (var u = -1, d = 0; d < this._decodedFrames.length - 1; d++) this._decodedFrames[d].frameEndTimestamp < a && (u = d - 1);
                                                        if (u >= 0)
                                                            for (; u-- >= 0; ) {
                                                                this._lateFrames++;
                                                                var f = this._decodedFrames.shift();
                                                                this._log('skipping already-decoded late frame at ' + f.frameEndTimestamp), (l = 1000 * (f.frameEndTimestamp - a)), (this._frameEndTimestamp = f.frameEndTimestamp), (this._actualPerFrameTime = this._targetPerFrameTime - l), this._framesProcessed++, (f.dropped = !0), this._doFrameComplete(f);
                                                            }
                                                        var _ = this._codec.nextKeyframeTimestamp,
                                                            p = _ - (this._targetPerFrameTime / 1000) * (this._framePipelineDepth + this._pendingFrame);
                                                        if (_ >= 0 && _ != this._codec.frameTimestamp && a >= p) {
                                                            this._log('skipping late frame at ' + this._decodedFrames[0].frameEndTimestamp + ' vs ' + a + ', expect to see keyframe at ' + _);
                                                            for (var h = 0; h < this._decodedFrames.length; h++) {
                                                                var m = this._decodedFrames[h];
                                                                this._lateFrames++, this._framesProcessed++, (this._frameEndTimestamp = m.frameEndTimestamp), (l = 1000 * (m.frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - l), (m.dropped = !0), this._doFrameComplete(m);
                                                            }
                                                            this._decodedFrames = [];
                                                            for (var g = 0; g < this._pendingFrames.length; g++) {
                                                                var E = this._pendingFrames[g];
                                                                this._lateFrames++, this._framesProcessed++, (this._frameEndTimestamp = E.frameEndTimestamp), (l = 1000 * (E.frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - l), (E.dropped = !0), this._doFrameComplete(E);
                                                            }
                                                            for (this._pendingFrames = [], this._pendingFrame = 0; this._codec.frameReady && this._codec.frameTimestamp < _; ) {
                                                                var b = {
                                                                    frameEndTimestamp: this._codec.frameTimestamp,
                                                                    dropped: !0
                                                                };
                                                                (l = 1000 * (b.frameEndTimestamp - a)), (this._actualPerFrameTime = this._targetPerFrameTime - l), this._lateFrames++, this._codec.discardFrame(function () {}), this._framesProcessed++, this._doFrameComplete(b);
                                                            }
                                                            return void (this._isProcessing() || this._pingProcessing());
                                                        }
                                                    } else (r && l <= 4) || (r = !1);
                                                }
                                                if (i) {
                                                    this._log('play loop: ready to decode frame; thread depth: ' + this._pendingFrame + ', have buffered: ' + this._decodedFrames.length), 0 == this._videoInfo.fps && this._codec.frameTimestamp - this._frameEndTimestamp > 0 && (this._targetPerFrameTime = 1000 * (this._codec.frameTimestamp - this._frameEndTimestamp)), (this._totalFrameTime += this._targetPerFrameTime), this._totalFrameCount++;
                                                    var y = (this._frameEndTimestamp = this._codec.frameTimestamp);
                                                    this._pendingFrame++, this._pendingFrames.push({ frameEndTimestamp: y });
                                                    var v = this._pendingFrames,
                                                        O = !1,
                                                        I = this._time(function () {
                                                            e._codec.decodeFrame(function (t) {
                                                                v === e._pendingFrames
                                                                    ? (e._log('play loop callback: decoded frame'),
                                                                      e._pendingFrame--,
                                                                      e._pendingFrames.shift(),
                                                                      t
                                                                          ? e._decodedFrames.push({
                                                                                yCbCrBuffer: e._codec.frameBuffer,
                                                                                videoCpuTime: e._codec.videoCpuTime,
                                                                                frameEndTimestamp: y
                                                                            })
                                                                          : e._log('Bad video packet or something'),
                                                                      e._codec.process(function () {
                                                                          e._isProcessing() || e._pingProcessing(O ? void 0 : 0);
                                                                      }))
                                                                    : e._log('play loop callback after flush, discarding');
                                                            });
                                                        });
                                                    this._pendingFrame && ((O = !0), (this._proxyTime += I), this._pingProcessing(), this._dataEnded && this._codec.sync());
                                                } else if (n) {
                                                    this._log('play loop: ready for audio; depth: ' + this._pendingAudio), this._pendingAudio++;
                                                    var S = this._codec.audioTimestamp,
                                                        T = this._time(function () {
                                                            e._codec.decodeAudio(function (t) {
                                                                if ((e._pendingAudio--, e._log('play loop callback: decoded audio'), (e._audioEndTimestamp = S), t)) {
                                                                    var n = e._codec.audioBuffer;
                                                                    if (
                                                                        n &&
                                                                        ((e._bufferTime += e._time(function () {
                                                                            e._audioFeeder && e._audioFeeder.bufferData(n);
                                                                        })),
                                                                        !e._codec.hasVideo)
                                                                    ) {
                                                                        e._framesProcessed++;
                                                                        var r = { frameEndTimestamp: e._audioEndTimestamp };
                                                                        e._doFrameComplete(r);
                                                                    }
                                                                }
                                                                e._isProcessing() || e._pingProcessing();
                                                            });
                                                        });
                                                    this._pendingAudio && ((this._proxyTime += T), this._codec.audioReady ? this._pingProcessing() : this._doProcessPlayDemux());
                                                } else if (r) {
                                                    this._log('play loop: ready to draw frame'), this._nextFrameTimer && (clearTimeout(this._nextFrameTimer), (this._nextFrameTimer = null)), this._thumbnail && (this.removeChild(this._thumbnail), (this._thumbnail = null));
                                                    var N = this._decodedFrames.shift();
                                                    (this._currentVideoCpuTime = N.videoCpuTime),
                                                        (this._drawingTime += this._time(function () {
                                                            e._drawFrame(N.yCbCrBuffer);
                                                        })),
                                                        this._framesProcessed++,
                                                        this._doFrameComplete(N),
                                                        this._pingProcessing();
                                                } else if (!this._decodedFrames.length || this._nextFrameTimer || this._prebufferingAudio)
                                                    if (this._dataEnded && !(this._pendingAudio || this._pendingFrame || this._decodedFrames.length)) {
                                                        this._log('play loop: playback reached end of data ' + [this._pendingAudio, this._pendingFrame, this._decodedFrames.length]);
                                                        var A = 0;
                                                        this._codec.hasAudio && this._audioFeeder && (A = 1000 * this._audioFeeder.durationBuffered), A > 0 ? (this._log('play loop: ending pending ' + A + ' ms'), this._pingProcessing(Math.max(0, A))) : (this._log('play loop: ENDING NOW: playback time ' + this._getPlaybackTime() + '; frameEndTimestamp: ' + this._frameEndTimestamp), this._stopPlayback(), (this._prebufferingAudio = !1), (this._initialPlaybackOffset = Math.max(this._audioEndTimestamp, this._frameEndTimestamp)), (this._ended = !0), (this._paused = !0), this._fireEventAsync('pause'), this._fireEventAsync('ended'));
                                                    } else this._prebufferingAudio && ((t.hasVideo && !t.frameReady) || (t.hasAudio && !t.audioReady)) ? (this._log('play loop: prebuffering demuxing'), this._doProcessPlayDemux()) : this._log('play loop: waiting on async/timers');
                                                else {
                                                    var C = l;
                                                    this._log('play loop: setting a timer for drawing ' + C),
                                                        (this._nextFrameTimer = setTimeout(function () {
                                                            (e._nextFrameTimer = null), e._pingProcessing();
                                                        }, C));
                                                }
                                            } else this._log('play loop: demuxing'), this._doProcessPlayDemux();
                                        }
                                    },
                                    {
                                        key: '_doProcessPlayDemux',
                                        value: function () {
                                            var e = this,
                                                t = this._codec.frameReady,
                                                n = this._codec.audioReady;
                                            this._codec.process(function (r) {
                                                (e._codec.frameReady && !t) || (e._codec.audioReady && !n) ? (e._log('demuxer has packets'), e._pingProcessing()) : r ? (e._log('demuxer processing to find more packets'), e._pingProcessing()) : (e._log('demuxer ran out of data'), e._streamEnded ? (e._log('demuxer reached end of data stream'), (e._dataEnded = !0), e._pingProcessing()) : (e._log('demuxer loading more data'), e._readBytesAndWait()));
                                            });
                                        }
                                    },
                                    {
                                        key: '_doProcessError',
                                        value: function () {}
                                    },
                                    {
                                        key: '_isProcessing',
                                        value: function () {
                                            return (this._stream && (this._stream.buffering || this._stream.seeking)) || (this._codec && this._codec.processing);
                                        }
                                    },
                                    {
                                        key: '_readBytesAndWait',
                                        value: function () {
                                            var e = this;
                                            this._stream.buffering || this._stream.seeking
                                                ? this._log('readBytesAndWait during i/o')
                                                : this._stream
                                                      .read(32768)
                                                      .then(function (t) {
                                                          e._log('got input ' + [t.byteLength]),
                                                              t.byteLength &&
                                                                  e._actionQueue.push(function () {
                                                                      e._codec.receiveInput(t, function () {
                                                                          e._pingProcessing();
                                                                      });
                                                                  }),
                                                              e._stream.eof && (e._log('stream is at end!'), (e._streamEnded = !0)),
                                                              e._isProcessing() || e._pingProcessing();
                                                      })
                                                      .catch(function (t) {
                                                          e._onStreamError(t);
                                                      });
                                        }
                                    },
                                    {
                                        key: '_pingProcessing',
                                        value: function () {
                                            var e = this,
                                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                                            this._stream && this._stream.waiting
                                                ? this._log('waiting on input')
                                                : (this._nextProcessingTimer && (this._log('canceling old processing timer'), clearTimeout(this._nextProcessingTimer), (this._nextProcessingTimer = null)),
                                                  t > -1 / 256
                                                      ? (this._nextProcessingTimer = setTimeout(function () {
                                                            e._pingProcessing();
                                                        }, t))
                                                      : this._depth
                                                        ? (this._needProcessing = !0)
                                                        : this._doProcessing());
                                        }
                                    },
                                    {
                                        key: '_startProcessingVideo',
                                        value: function (e) {
                                            var t = this;
                                            if (!this._started && !this._codec) {
                                                (this._framesProcessed = 0), (this._bufferTime = 0), (this._drawingTime = 0), (this._proxyTime = 0), (this._started = !0), (this._ended = !1);
                                                var n = {
                                                    base: this._options.base,
                                                    worker: this._enableWorker,
                                                    threading: this._enableThreading,
                                                    simd: this._enableSIMD
                                                };
                                                this._detectedType && (n.type = this._detectedType),
                                                    (this._codec = new y.default(n)),
                                                    (this._lastVideoCpuTime = 0),
                                                    (this._lastAudioCpuTime = 0),
                                                    (this._lastDemuxerCpuTime = 0),
                                                    (this._lastBufferTime = 0),
                                                    (this._lastDrawingTime = 0),
                                                    (this._lastProxyTime = 0),
                                                    (this._lastFrameVideoCpuTime = 0),
                                                    (this._lastFrameAudioCpuTime = 0),
                                                    (this._lastFrameDemuxerCpuTime = 0),
                                                    (this._lastFrameBufferTime = 0),
                                                    (this._lastFrameProxyTime = 0),
                                                    (this._lastFrameDrawingTime = 0),
                                                    (this._currentVideoCpuTime = 0),
                                                    (this._codec.onseek = function (e) {
                                                        (t._didSeek = !0), t._stream && t._seekStream(e);
                                                    }),
                                                    this._codec.init(function () {
                                                        t._codec.receiveInput(e, function () {
                                                            t._readBytesAndWait();
                                                        });
                                                    });
                                            }
                                        }
                                    },
                                    {
                                        key: '_loadCodec',
                                        value: function (e) {
                                            var t = this;
                                            this._stream.read(1024).then(function (n) {
                                                var r = new Uint8Array(n);
                                                r.length > 4 && 79 == r[0] && 103 == r[1] && 103 == r[2] && 83 == r[3] ? (t._detectedType = 'video/ogg') : r.length > 4 && 26 == r[0] && 69 == r[1] && 223 == r[2] && 163 == r[3] ? (t._detectedType = 'video/webm') : (t._detectedType = 'video/ogg'), e(n);
                                            });
                                        }
                                    },
                                    {
                                        key: '_prepForLoad',
                                        value: function (e) {
                                            var t = this;
                                            this._stopVideo(),
                                                (this._currentSrc = ''),
                                                (this._loading = !0),
                                                this._actionQueue.push(function () {
                                                    e && 'none' === t.preload
                                                        ? (t._loading = !1)
                                                        : (function () {
                                                              t._options.stream
                                                                  ? (t._stream = t._options.stream)
                                                                  : (t._stream = new f.default({
                                                                        url: t.src,
                                                                        cacheSize: 16777216,
                                                                        progressive: !1
                                                                    })),
                                                                  t._stream
                                                                      .load()
                                                                      .then(function () {
                                                                          (t._loading = !1), (t._currentSrc = t.src), (t._byteLength = t._stream.seekable ? t._stream.length : 0);
                                                                          var e = t._stream.headers['x-content-duration'];
                                                                          'string' == typeof e && (t._duration = parseFloat(e)),
                                                                              t._loadCodec(function (e) {
                                                                                  t._startProcessingVideo(e);
                                                                              });
                                                                      })
                                                                      .catch(function (e) {
                                                                          t._onStreamError(e);
                                                                      });
                                                          })();
                                                }),
                                                this._pingProcessing(0);
                                        }
                                    },
                                    {
                                        key: 'load',
                                        value: function () {
                                            this._prepForLoad();
                                        }
                                    },
                                    {
                                        key: 'canPlayType',
                                        value: function (e) {
                                            var t = new E.default(e);
                                            function n(e) {
                                                if (t.codecs) {
                                                    var n = 0,
                                                        r = 0;
                                                    return (
                                                        t.codecs.forEach(function (t) {
                                                            e.indexOf(t) >= 0 ? n++ : r++;
                                                        }),
                                                        0 === n || r > 0 ? '' : 'probably'
                                                    );
                                                }
                                                return 'maybe';
                                            }
                                            return 'ogg' !== t.minor || ('audio' !== t.major && 'video' !== t.major && 'application' !== t.major) ? ('webm' !== t.minor || ('audio' !== t.major && 'video' !== t.major) ? '' : n(['vorbis', 'opus', 'vp8', 'vp9'])) : n(['vorbis', 'opus', 'theora']);
                                        }
                                    },
                                    {
                                        key: 'play',
                                        value: function () {
                                            this._muted || this._options.audioContext || n.initSharedAudioContext(), this._paused && ((this._startedPlaybackInDocument = document.body.contains(this)), (this._paused = !1), this._state == D || (this._started && this._codec && this._codec.loadedMetadata ? (this._ended && this._stream && this._byteLength ? (this._log('.play() starting over after end'), this._seek(0)) : this._log('.play() while already started'), (this._state = P), this._isProcessing() || this._pingProcessing()) : this._loading ? this._log('.play() while loading') : (this._log('.play() before started'), this._stream || this.load())));
                                        }
                                    },
                                    {
                                        key: 'getPlaybackStats',
                                        value: function () {
                                            return {
                                                targetPerFrameTime: this._targetPerFrameTime,
                                                framesProcessed: this._framesProcessed,
                                                videoBytes: this._codec ? this._codec.videoBytes : 0,
                                                audioBytes: this._codec ? this._codec.audioBytes : 0,
                                                playTime: this._playTime,
                                                demuxingTime: this._codec ? this._codec.demuxerCpuTime - this._lastDemuxerCpuTime : 0,
                                                videoDecodingTime: this._codec ? this._codec.videoCpuTime - this._lastVideoCpuTime : 0,
                                                audioDecodingTime: this._codec ? this._codec.audioCpuTime - this._lastAudioCpuTime : 0,
                                                bufferTime: this._bufferTime - this._lastBufferTime,
                                                drawingTime: this._drawingTime - this._lastDrawingTime,
                                                proxyTime: this._proxyTime - this._lastProxyTime,
                                                droppedAudio: this._droppedAudio,
                                                delayedAudio: this._delayedAudio,
                                                jitter: this._totalJitter / this._framesProcessed,
                                                lateFrames: this._lateFrames
                                            };
                                        }
                                    },
                                    {
                                        key: 'resetPlaybackStats',
                                        value: function () {
                                            (this._framesProcessed = 0), (this._playTime = 0), this._codec && ((this._lastDemuxerCpuTime = this._codec.demuxerCpuTime), (this._lastVideoCpuTime = this._codec.videoCpuTime), (this._lastAudioCpuTime = this._codec.audioCpuTime), (this._codec.videoBytes = 0), (this._codec.audioBytes = 0)), (this._lastBufferTime = this._bufferTime), (this._lastDrawingTime = this._drawingTime), (this._lastProxyTime = this._proxyTime), (this._totalJitter = 0), (this._totalFrameTime = 0), (this._totalFrameCount = 0);
                                        }
                                    },
                                    {
                                        key: 'getVideoFrameSink',
                                        value: function () {
                                            return this._frameSink;
                                        }
                                    },
                                    {
                                        key: 'getCanvas',
                                        value: function () {
                                            return this._canvas;
                                        }
                                    },
                                    {
                                        key: 'getVideo',
                                        value: function () {
                                            return null;
                                        }
                                    },
                                    {
                                        key: 'pause',
                                        value: function () {
                                            this._paused || (this._nextProcessingTimer && (clearTimeout(this._nextProcessingTimer), (this._nextProcessingTimer = null)), this._stopPlayback(), (this._prebufferingAudio = !1), (this._paused = !0), this._fireEvent('pause'));
                                        }
                                    },
                                    {
                                        key: 'stop',
                                        value: function () {
                                            this._stopVideo(), (this._paused = !0);
                                        }
                                    },
                                    {
                                        key: 'fastSeek',
                                        value: function (e) {
                                            this._seek(+e, G);
                                        }
                                    }
                                ],
                                [
                                    {
                                        key: 'initSharedAudioContext',
                                        value: function () {
                                            var e = document.createElement('audio');
                                            (e.src = v.default), e.play(), _.default.initSharedAudioContext();
                                        }
                                    }
                                ]
                            ),
                            n
                        );
                    })(B);
                    (0, m.default)(F, T),
                        (F.instanceCount = 0),
                        (F.styleManager = new (function () {
                            var e = document.createElement('style');
                            (e.type = 'text/css'), (e.textContent = 'ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); '), document.head.appendChild(e);
                            var t = e.sheet;
                            this.appendRule = function (e, n) {
                                var r = [];
                                for (var i in n) n.hasOwnProperty(i) && r.push(i + ':' + n[i]);
                                var o = e + '{' + r.join(';') + '}';
                                t.insertRule(o, t.cssRules.length - 1);
                            };
                        })()),
                        (t.default = F);
                },
                580: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913));
                    t.default = function (e) {
                        return (function () {
                            function t(n, r, o) {
                                var a = this;
                                for (var s in ((0, i.default)(this, t),
                                (o = o || {}),
                                (this.worker = n),
                                (this.transferables = (function () {
                                    var e = new ArrayBuffer(1024),
                                        t = new Uint8Array(e);
                                    try {
                                        return (
                                            n.postMessage(
                                                {
                                                    action: 'transferTest',
                                                    bytes: t
                                                },
                                                [e]
                                            ),
                                            !e.byteLength
                                        );
                                    } catch (e) {
                                        return !1;
                                    }
                                })()),
                                e))
                                    e.hasOwnProperty(s) && (this[s] = e[s]);
                                (this.processingQueue = 0),
                                    Object.defineProperty(this, 'processing', {
                                        get: function () {
                                            return this.processingQueue > 0;
                                        }
                                    }),
                                    (this.messageCount = 0),
                                    (this.pendingCallbacks = {}),
                                    this.worker.addEventListener('message', function (e) {
                                        a.handleMessage(e);
                                    }),
                                    this.proxy('construct', [r, o], function () {});
                            }
                            return (
                                (0, o.default)(t, [
                                    {
                                        key: 'proxy',
                                        value: function (e, t, n) {
                                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                                            if (!this.worker) throw 'Tried to call "' + e + '" method on closed proxy object';
                                            var i = 'callback-' + ++this.messageCount + '-' + e;
                                            n && (this.pendingCallbacks[i] = n);
                                            var o = {
                                                action: e,
                                                callbackId: i,
                                                args: t || []
                                            };
                                            this.processingQueue++, this.transferables ? this.worker.postMessage(o, r) : this.worker.postMessage(o);
                                        }
                                    },
                                    {
                                        key: 'terminate',
                                        value: function () {
                                            this.worker && (this.worker.terminate(), (this.worker = null), (this.processingQueue = 0), (this.pendingCallbacks = {}));
                                        }
                                    },
                                    {
                                        key: 'handleMessage',
                                        value: function (e) {
                                            if ((this.processingQueue--, 'callback' === e.data.action)) {
                                                var t = e.data,
                                                    n = t.callbackId,
                                                    r = t.args,
                                                    i = this.pendingCallbacks[n];
                                                if (t.props) for (var o in t.props) t.props.hasOwnProperty(o) && (this[o] = t.props[o]);
                                                i && (delete this.pendingCallbacks[n], i.apply(this, r));
                                            }
                                        }
                                    }
                                ]),
                                t
                            );
                        })();
                    };
                },
                168: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913));
                    t.default = (function () {
                        function e(t) {
                            (0, i.default)(this, e), (this._ranges = t), (this.length = t.length);
                        }
                        return (
                            (0, o.default)(e, [
                                {
                                    key: 'start',
                                    value: function (e) {
                                        if (e < 0 || e > this.length || e !== (0 | e)) throw RangeError('Invalid index');
                                        return this._ranges[e][0];
                                    }
                                },
                                {
                                    key: 'end',
                                    value: function (e) {
                                        if (e < 0 || e > this.length || e !== (0 | e)) throw RangeError('Invalid index');
                                        return this._ranges[e][1];
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                625: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        o = r(n(913)),
                        a = r(n(964));
                    function s(e, t) {
                        var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (!n) {
                            if (
                                Array.isArray(e) ||
                                (n = (function (e, t) {
                                    if (e) {
                                        if ('string' == typeof e) return l(e, void 0);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
                                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, void 0);
                                    }
                                })(e)) ||
                                (t && e && 'number' == typeof e.length)
                            ) {
                                n && (e = n);
                                var r = 0,
                                    i = function () {};
                                return {
                                    s: i,
                                    n: function () {
                                        return r >= e.length
                                            ? { done: !0 }
                                            : {
                                                  done: !1,
                                                  value: e[r++]
                                              };
                                    },
                                    e: function (e) {
                                        throw e;
                                    },
                                    f: i
                                };
                            }
                            throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                        }
                        var o,
                            a = !0,
                            s = !1;
                        return {
                            s: function () {
                                n = n.call(e);
                            },
                            n: function () {
                                var e = n.next();
                                return (a = e.done), e;
                            },
                            e: function (e) {
                                (s = !0), (o = e);
                            },
                            f: function () {
                                try {
                                    a || null == n.return || n.return();
                                } finally {
                                    if (s) throw o;
                                }
                            }
                        };
                    }
                    function l(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                        return r;
                    }
                    t.default = (function () {
                        function e(t) {
                            return (
                                (0, i.default)(this, e),
                                (this.options = t || {}),
                                (this.demuxer = null),
                                (this.videoDecoder = null),
                                (this.audioDecoder = null),
                                (this.flushIter = 0),
                                (this.loadedMetadata = !1),
                                (this.processing = !1),
                                Object.defineProperties(this, {
                                    duration: {
                                        get: function () {
                                            return this.loadedMetadata ? this.demuxer.duration : NaN;
                                        }
                                    },
                                    hasAudio: {
                                        get: function () {
                                            return this.loadedMetadata && !!this.audioDecoder;
                                        }
                                    },
                                    audioReady: {
                                        get: function () {
                                            return this.hasAudio && this.demuxer.audioReady;
                                        }
                                    },
                                    audioTimestamp: {
                                        get: function () {
                                            return this.demuxer.audioTimestamp;
                                        }
                                    },
                                    audioFormat: {
                                        get: function () {
                                            return this.hasAudio ? this.audioDecoder.audioFormat : null;
                                        }
                                    },
                                    audioBuffer: {
                                        get: function () {
                                            return this.hasAudio ? this.audioDecoder.audioBuffer : null;
                                        }
                                    },
                                    hasVideo: {
                                        get: function () {
                                            return this.loadedMetadata && !!this.videoDecoder;
                                        }
                                    },
                                    frameReady: {
                                        get: function () {
                                            return this.hasVideo && this.demuxer.frameReady;
                                        }
                                    },
                                    frameTimestamp: {
                                        get: function () {
                                            return this.demuxer.frameTimestamp;
                                        }
                                    },
                                    keyframeTimestamp: {
                                        get: function () {
                                            return this.demuxer.keyframeTimestamp;
                                        }
                                    },
                                    nextKeyframeTimestamp: {
                                        get: function () {
                                            return this.demuxer.nextKeyframeTimestamp;
                                        }
                                    },
                                    videoFormat: {
                                        get: function () {
                                            return this.hasVideo ? this.videoDecoder.videoFormat : null;
                                        }
                                    },
                                    frameBuffer: {
                                        get: function () {
                                            return this.hasVideo ? this.videoDecoder.frameBuffer : null;
                                        }
                                    },
                                    seekable: {
                                        get: function () {
                                            return this.demuxer.seekable;
                                        }
                                    },
                                    demuxerCpuTime: {
                                        get: function () {
                                            return this.demuxer ? this.demuxer.cpuTime : 0;
                                        }
                                    },
                                    audioCpuTime: {
                                        get: function () {
                                            return this.audioDecoder ? this.audioDecoder.cpuTime : 0;
                                        }
                                    },
                                    videoCpuTime: {
                                        get: function () {
                                            return this.videoDecoder ? this.videoDecoder.cpuTime : 0;
                                        }
                                    }
                                }),
                                (this.loadedDemuxerMetadata = !1),
                                (this.loadedAudioMetadata = !1),
                                (this.loadedVideoMetadata = !1),
                                (this.loadedAllMetadata = !1),
                                (this.onseek = null),
                                (this.videoBytes = 0),
                                (this.audioBytes = 0),
                                this
                            );
                        }
                        return (
                            (0, o.default)(e, [
                                {
                                    key: 'flushSafe',
                                    value: function (e) {
                                        var t = this,
                                            n = this.flushIter;
                                        return function (r) {
                                            t.flushIter <= n && e(r);
                                        };
                                    }
                                },
                                {
                                    key: 'init',
                                    value: function (e) {
                                        var t,
                                            n = this;
                                        (this.processing = !0),
                                            (t = 'video/webm' === this.options.type || 'audio/webm' === this.options.type ? 'OGVDemuxerWebMW' : 'OGVDemuxerOggW'),
                                            a.default.loadClass(t, function (t) {
                                                t().then(function (t) {
                                                    (n.demuxer = t),
                                                        (t.onseek = function (e) {
                                                            n.onseek && n.onseek(e);
                                                        }),
                                                        t.init(function () {
                                                            (n.processing = !1), e();
                                                        });
                                                });
                                            });
                                    }
                                },
                                {
                                    key: 'close',
                                    value: function () {
                                        this.demuxer && (this.demuxer.close(), (this.demuxer = null)), this.videoDecoder && (this.videoDecoder.close(), (this.videoDecoder = null)), this.audioDecoder && (this.audioDecoder.close(), (this.audioDecoder = null));
                                    }
                                },
                                {
                                    key: 'receiveInput',
                                    value: function (e, t) {
                                        this.demuxer.receiveInput(e, t);
                                    }
                                },
                                {
                                    key: 'process',
                                    value: function (e) {
                                        var t = this;
                                        if (this.processing) throw Error('reentrancy fail on OGVWrapperCodec.process');
                                        this.processing = !0;
                                        var n = function (n) {
                                                (t.processing = !1), e(n);
                                            },
                                            r = function () {
                                                t.demuxer.process(n);
                                            };
                                        this.demuxer.loadedMetadata && !this.loadedDemuxerMetadata
                                            ? this.loadAudioCodec(function () {
                                                  t.loadVideoCodec(function () {
                                                      (t.loadedDemuxerMetadata = !0), (t.loadedAudioMetadata = !t.audioDecoder), (t.loadedVideoMetadata = !t.videoDecoder), (t.loadedAllMetadata = t.loadedAudioMetadata && t.loadedVideoMetadata), n(!0);
                                                  });
                                              })
                                            : this.loadedDemuxerMetadata && !this.loadedAudioMetadata
                                              ? this.audioDecoder.loadedMetadata
                                                  ? ((this.loadedAudioMetadata = !0), (this.loadedAllMetadata = this.loadedAudioMetadata && this.loadedVideoMetadata), n(!0))
                                                  : this.demuxer.audioReady
                                                    ? this.demuxer.dequeueAudioPacket(function (e, r) {
                                                          (t.audioBytes += e.byteLength),
                                                              t.audioDecoder.processHeader(e, function (e) {
                                                                  n(!0);
                                                              });
                                                      })
                                                    : r()
                                              : this.loadedAudioMetadata && !this.loadedVideoMetadata
                                                ? this.videoDecoder.loadedMetadata
                                                    ? ((this.loadedVideoMetadata = !0), (this.loadedAllMetadata = this.loadedAudioMetadata && this.loadedVideoMetadata), n(!0))
                                                    : this.demuxer.frameReady
                                                      ? ((this.processing = !0),
                                                        this.demuxer.dequeueVideoPacket(function (e) {
                                                            (t.videoBytes += e.byteLength),
                                                                t.videoDecoder.processHeader(e, function () {
                                                                    n(!0);
                                                                });
                                                        }))
                                                      : r()
                                                : this.loadedVideoMetadata && !this.loadedMetadata && this.loadedAllMetadata
                                                  ? ((this.loadedMetadata = !0), n(!0))
                                                  : this.loadedMetadata && (!this.hasAudio || this.demuxer.audioReady) && (!this.hasVideo || this.demuxer.frameReady)
                                                    ? n(!0)
                                                    : r();
                                    }
                                },
                                {
                                    key: 'decodeFrame',
                                    value: function (e) {
                                        var t = this,
                                            n = this.flushSafe(e),
                                            r = this.frameTimestamp,
                                            i = this.keyframeTimestamp;
                                        this.demuxer.dequeueVideoPacket(function (e) {
                                            (t.videoBytes += e.byteLength),
                                                t.videoDecoder.processFrame(e, function (e) {
                                                    var o = t.videoDecoder.frameBuffer;
                                                    o && ((o.timestamp = r), (o.keyframeTimestamp = i)), n(e);
                                                });
                                        });
                                    }
                                },
                                {
                                    key: 'decodeAudio',
                                    value: function (e) {
                                        var t = this,
                                            n = this.flushSafe(e);
                                        this.demuxer.dequeueAudioPacket(function (e, r) {
                                            (t.audioBytes += e.byteLength),
                                                t.audioDecoder.processAudio(e, function (e) {
                                                    if (r) {
                                                        var i,
                                                            o = [],
                                                            a = s(t.audioDecoder.audioBuffer);
                                                        try {
                                                            for (a.s(); !(i = a.n()).done; ) {
                                                                var l = i.value,
                                                                    c = Math.round((r * t.audioFormat.rate) / 1000000000);
                                                                c > 0 ? o.push(l.subarray(0, l.length - Math.min(c, l.length))) : o.push(l.subarray(Math.min(Math.abs(c), l.length), l.length));
                                                            }
                                                        } catch (e) {
                                                            a.e(e);
                                                        } finally {
                                                            a.f();
                                                        }
                                                        t.audioDecoder.audioBuffer = o;
                                                    }
                                                    return n(e);
                                                });
                                        });
                                    }
                                },
                                {
                                    key: 'discardFrame',
                                    value: function (e) {
                                        var t = this;
                                        this.demuxer.dequeueVideoPacket(function (n) {
                                            (t.videoBytes += n.byteLength), e();
                                        });
                                    }
                                },
                                {
                                    key: 'discardAudio',
                                    value: function (e) {
                                        var t = this;
                                        this.demuxer.dequeueAudioPacket(function (n, r) {
                                            (t.audioBytes += n.byteLength), e();
                                        });
                                    }
                                },
                                {
                                    key: 'flush',
                                    value: function (e) {
                                        this.flushIter++, this.demuxer.flush(e);
                                    }
                                },
                                {
                                    key: 'sync',
                                    value: function () {
                                        this.videoDecoder && this.videoDecoder.sync();
                                    }
                                },
                                {
                                    key: 'recycleFrame',
                                    value: function (e) {
                                        this.videoDecoder && this.videoDecoder.recycleFrame(e);
                                    }
                                },
                                {
                                    key: 'getKeypointOffset',
                                    value: function (e, t) {
                                        this.demuxer.getKeypointOffset(e, t);
                                    }
                                },
                                {
                                    key: 'seekToKeypoint',
                                    value: function (e, t) {
                                        this.demuxer.seekToKeypoint(e, this.flushSafe(t));
                                    }
                                },
                                {
                                    key: 'loadAudioCodec',
                                    value: function (e) {
                                        var t = this;
                                        if (this.demuxer.audioCodec) {
                                            var n = {
                                                vorbis: 'OGVDecoderAudioVorbisW',
                                                opus: 'OGVDecoderAudioOpusW'
                                            }[this.demuxer.audioCodec];
                                            (this.processing = !0),
                                                a.default.loadClass(
                                                    n,
                                                    function (n) {
                                                        var r = {};
                                                        t.demuxer.audioFormat && (r.audioFormat = t.demuxer.audioFormat),
                                                            n(r).then(function (n) {
                                                                (t.audioDecoder = n),
                                                                    n.init(function () {
                                                                        (t.loadedAudioMetadata = n.loadedMetadata), (t.processing = !1), e();
                                                                    });
                                                            });
                                                    },
                                                    { worker: this.options.worker }
                                                );
                                        } else e();
                                    }
                                },
                                {
                                    key: 'loadVideoCodec',
                                    value: function (e) {
                                        var t = this;
                                        if (this.demuxer.videoCodec) {
                                            var n = !!this.options.simd,
                                                r = !!this.options.threading,
                                                i = {
                                                    theora: 'OGVDecoderVideoTheoraW',
                                                    vp8: r ? 'OGVDecoderVideoVP8MTW' : 'OGVDecoderVideoVP8W',
                                                    vp9: r ? (n ? 'OGVDecoderVideoVP9SIMDMTW' : 'OGVDecoderVideoVP9MTW') : n ? 'OGVDecoderVideoVP9SIMDW' : 'OGVDecoderVideoVP9W',
                                                    av1: r ? (n ? 'OGVDecoderVideoAV1SIMDMTW' : 'OGVDecoderVideoAV1MTW') : n ? 'OGVDecoderVideoAV1SIMDW' : 'OGVDecoderVideoAV1W'
                                                }[this.demuxer.videoCodec];
                                            (this.processing = !0),
                                                a.default.loadClass(
                                                    i,
                                                    function (n) {
                                                        var i = {};
                                                        t.demuxer.videoFormat && (i.videoFormat = t.demuxer.videoFormat),
                                                            r && delete window.ENVIRONMENT_IS_PTHREAD,
                                                            n(i).then(function (n) {
                                                                (t.videoDecoder = n),
                                                                    n.init(function () {
                                                                        (t.loadedVideoMetadata = n.loadedMetadata), (t.processing = !1), e();
                                                                    });
                                                            });
                                                    },
                                                    { worker: this.options.worker && !this.options.threading }
                                                );
                                        } else e();
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                539: (e, t, n) => {
                    var r = n(318);
                    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
                    var i = r(n(8)),
                        o = r(n(575)),
                        a = r(n(913));
                    t.default = new ((function () {
                        function e() {
                            (0, o.default)(this, e), (this.tested = !1), (this.testResult = void 0);
                        }
                        return (
                            (0, a.default)(e, [
                                {
                                    key: 'wasmSupported',
                                    value: function () {
                                        if (!this.tested) {
                                            try {
                                                'object' === ('undefined' == typeof WebAssembly ? 'undefined' : (0, i.default)(WebAssembly))
                                                    ? (this.testResult = (function () {
                                                          var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11]),
                                                              t = new WebAssembly.Module(e);
                                                          return 0 !== new WebAssembly.Instance(t, {}).exports.test(4);
                                                      })())
                                                    : (this.testResult = !1);
                                            } catch (e) {
                                                console.log('Exception while testing WebAssembly', e), (this.testResult = !1);
                                            }
                                            this.tested = !0;
                                        }
                                        return this.testResult;
                                    }
                                }
                            ]),
                            e
                        );
                    })())();
                },
                309: (e, t) => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.default = void 0),
                        (t.default = function (e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        });
                },
                431: (e, t, n) => {
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t;
                            };
                        })(),
                        i = function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r);
                            }
                            if ('value' in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function o(e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                    }
                    var s = n(828),
                        l = 'arraybuffer',
                        c = (function (e) {
                            function t() {
                                return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                            }
                            return (
                                (function (e, t) {
                                    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                r(t, [
                                    {
                                        key: 'initXHR',
                                        value: function () {
                                            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this), (this.xhr.responseType = l);
                                        }
                                    },
                                    {
                                        key: 'onXHRProgress',
                                        value: function () {}
                                    },
                                    {
                                        key: 'onXHRLoad',
                                        value: function () {
                                            var e = this.xhr.response;
                                            (this.bytesRead += e.byteLength), this.emit('buffer', e), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'onXHRLoad', this).call(this);
                                        }
                                    }
                                ]),
                                t
                            );
                        })(s);
                    (c.supported = function () {
                        try {
                            var e = new XMLHttpRequest();
                            return (e.responseType = l), e.responseType === l;
                        } catch (e) {
                            return !1;
                        }
                    }),
                        (e.exports = c);
                },
                306: (e, t, n) => {
                    var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    function i(e) {
                        if (206 == e.status)
                            return (function (e) {
                                var t = o(e);
                                return t ? parseInt(t[3], 10) : -1;
                            })(e);
                        var t = e.getResponseHeader('Content-Length');
                        return null === t || '' === t ? -1 : parseInt(t, 10);
                    }
                    function o(e) {
                        var t = e.getResponseHeader('Content-Range');
                        return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
                    }
                    e.exports = (function (e) {
                        function t(e) {
                            var n = e.url,
                                r = e.offset,
                                i = e.length,
                                o = e.cachever,
                                a = void 0 === o ? 0 : o;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                            })(this, t);
                            var s = (function (e, t) {
                                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return (s.url = n), (s.offset = r), (s.length = i), (s.cachever = a), (s.loaded = !1), (s.seekable = !1), (s.headers = {}), (s.eof = !1), (s.bytesRead = 0), (s.xhr = new XMLHttpRequest()), s;
                        }
                        return (
                            (function (e, t) {
                                if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(t, e),
                            r(t, [
                                {
                                    key: 'load',
                                    value: function () {
                                        var e = this;
                                        return new Promise(function (t, n) {
                                            var r = null;
                                            e._onAbort = function (e) {
                                                r(), n(e);
                                            };
                                            var a = function () {
                                                    if (2 == e.xhr.readyState) {
                                                        if (206 == e.xhr.status) {
                                                            var a = (function (e) {
                                                                var t = o(e);
                                                                return t ? parseInt(t[1], 10) : 0;
                                                            })(e.xhr);
                                                            if (e.offset != a) return console.log('Expected start at ' + e.offset + ' but got ' + a + '; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672'), e.cachever++, e.emit('cachever'), e.abort(), r(), void e.load().then(t).catch(n);
                                                            e.seekable = !0;
                                                        }
                                                        e.xhr.status >= 200 && e.xhr.status < 300
                                                            ? ((e.length = i(e.xhr)),
                                                              (e.headers = (function (e) {
                                                                  var t = {};
                                                                  return (
                                                                      e
                                                                          .getAllResponseHeaders()
                                                                          .split(/\r?\n/)
                                                                          .forEach(function (e) {
                                                                              var n = e.split(/:\s*/, 2);
                                                                              n.length > 1 && (t[n[0].toLowerCase()] = n[1]);
                                                                          }),
                                                                      t
                                                                  );
                                                              })(e.xhr)),
                                                              e.onXHRStart())
                                                            : (r(), n(Error('HTTP error ' + e.xhr.status)));
                                                    }
                                                },
                                                s = function () {
                                                    r(), n(Error('network error'));
                                                },
                                                l = function () {
                                                    r(), t();
                                                };
                                            (r = function () {
                                                e.xhr.removeEventListener('readystatechange', a), e.xhr.removeEventListener('error', s), e.off('open', l), (e._onAbort = null);
                                            }),
                                                e.initXHR(),
                                                e.xhr.addEventListener('readystatechange', a),
                                                e.xhr.addEventListener('error', s),
                                                e.on('open', l),
                                                e.xhr.send();
                                        });
                                    }
                                },
                                {
                                    key: 'bufferToOffset',
                                    value: function (e) {
                                        return Promise.reject(Error('abstract'));
                                    }
                                },
                                {
                                    key: 'abort',
                                    value: function () {
                                        if ((this.xhr.abort(), this._onAbort)) {
                                            var e = this._onAbort;
                                            this._onAbort = null;
                                            var t = Error('Aborted');
                                            (t.name = 'AbortError'), e(t);
                                        }
                                    }
                                },
                                {
                                    key: 'initXHR',
                                    value: function () {
                                        var e = this.url;
                                        this.cachever && (e += '?buggy_cachever=' + this.cachever), this.xhr.open('GET', e);
                                        var t = null;
                                        (this.offset || this.length) && (t = 'bytes=' + this.offset + '-'), this.length && (t += this.offset + this.length - 1), null !== t && this.xhr.setRequestHeader('Range', t);
                                    }
                                },
                                {
                                    key: 'onXHRStart',
                                    value: function () {
                                        throw Error('abstract');
                                    }
                                }
                            ]),
                            t
                        );
                    })(n(566));
                },
                810: (e, t, n) => {
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t;
                            };
                        })(),
                        i = function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r);
                            }
                            if ('value' in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function o(e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                    }
                    var s = (function (e) {
                        function t() {
                            return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                        }
                        return (
                            (function (e, t) {
                                if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(t, e),
                            r(t, [
                                {
                                    key: 'initXHR',
                                    value: function () {
                                        i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this), (this.xhr.responseType = 'text'), this.xhr.overrideMimeType('text/plain; charset=x-user-defined');
                                    }
                                },
                                {
                                    key: 'onXHRProgress',
                                    value: function () {
                                        var e = this.xhr.responseText.slice(this.bytesRead);
                                        e.length > 0 && ((this.bytesRead += e.length), this.emit('buffer', e));
                                    }
                                },
                                {
                                    key: 'onXHRLoad',
                                    value: function () {
                                        this.onXHRProgress(), i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'onXHRLoad', this).call(this);
                                    }
                                }
                            ]),
                            t
                        );
                    })(n(828));
                    (s.supported = function () {
                        try {
                            return !!new XMLHttpRequest().overrideMimeType;
                        } catch (e) {
                            return !1;
                        }
                    }),
                        (e.exports = s);
                },
                828: (e, t, n) => {
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t;
                            };
                        })(),
                        i = function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r);
                            }
                            if ('value' in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function o(e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                    }
                    e.exports = (function (e) {
                        function t() {
                            return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                        }
                        return (
                            (function (e, t) {
                                if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(t, e),
                            r(t, [
                                {
                                    key: 'bufferToOffset',
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n, r) {
                                            if (t.eof || t.offset >= e) n();
                                            else {
                                                var i = null;
                                                t._onAbort = function (e) {
                                                    i(), r(e);
                                                };
                                                var o = function () {
                                                        t.offset >= e && !t.eof && (i(), n());
                                                    },
                                                    a = function () {
                                                        i(), n();
                                                    },
                                                    s = function () {
                                                        i(), r(Error('error streaming'));
                                                    };
                                                (i = function () {
                                                    (t.buffering = !1), t.off('buffer', o), t.off('done', a), t.off('error', s), (t._onAbort = null);
                                                }),
                                                    (t.buffering = !0),
                                                    t.on('buffer', o),
                                                    t.on('done', a),
                                                    t.on('error', s);
                                            }
                                        });
                                    }
                                },
                                {
                                    key: 'initXHR',
                                    value: function () {
                                        i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this);
                                    }
                                },
                                {
                                    key: 'onXHRStart',
                                    value: function () {
                                        var e = this;
                                        this.xhr.addEventListener('progress', function () {
                                            return e.onXHRProgress();
                                        }),
                                            this.xhr.addEventListener('error', function () {
                                                return e.onXHRError();
                                            }),
                                            this.xhr.addEventListener('load', function () {
                                                return e.onXHRLoad();
                                            }),
                                            this.emit('open');
                                    }
                                },
                                {
                                    key: 'onXHRProgress',
                                    value: function () {
                                        throw Error('abstract');
                                    }
                                },
                                {
                                    key: 'onXHRError',
                                    value: function () {
                                        this.emit('error');
                                    }
                                },
                                {
                                    key: 'onXHRLoad',
                                    value: function () {
                                        (this.eof = !0), this.emit('done');
                                    }
                                }
                            ]),
                            t
                        );
                    })(n(306));
                },
                761: (e, t, n) => {
                    var r = n(855),
                        i = n(810),
                        o = n(431),
                        a = null;
                    e.exports = function (e) {
                        if (!1 === e.progressive) return new o(e);
                        if (
                            (a ||
                                (a = (function () {
                                    return r.supported() ? r : i.supported() ? i : null;
                                })()),
                            !a)
                        )
                            throw Error('No supported backend class');
                        return new a(e);
                    };
                },
                855: (e, t, n) => {
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t;
                            };
                        })(),
                        i = function e(t, n, r) {
                            null === t && (t = Function.prototype);
                            var i = Object.getOwnPropertyDescriptor(t, n);
                            if (void 0 === i) {
                                var o = Object.getPrototypeOf(t);
                                return null === o ? void 0 : e(o, n, r);
                            }
                            if ('value' in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function o(e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
                    }
                    var s = n(828),
                        l = 'moz-chunked-arraybuffer',
                        c = (function (e) {
                            function t() {
                                return o(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
                            }
                            return (
                                (function (e, t) {
                                    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                                    (e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                r(t, [
                                    {
                                        key: 'initXHR',
                                        value: function () {
                                            i(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'initXHR', this).call(this), (this.xhr.responseType = l);
                                        }
                                    },
                                    {
                                        key: 'onXHRProgress',
                                        value: function () {
                                            var e = this.xhr.response;
                                            (this.bytesRead += e.byteLength), this.emit('buffer', e);
                                        }
                                    }
                                ]),
                                t
                            );
                        })(s);
                    (c.supported = function () {
                        try {
                            var e = new XMLHttpRequest();
                            return (e.responseType = l), e.responseType === l;
                        } catch (e) {
                            return !1;
                        }
                    }),
                        (e.exports = c);
                },
                503: (e) => {
                    var t = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    function n(e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    }
                    e.exports = (function () {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = t.buffer,
                                i = void 0 === r ? void 0 : r,
                                o = t.string,
                                a = void 0 === o ? void 0 : o,
                                s = t.start,
                                l = void 0 === s ? 0 : s,
                                c = t.end,
                                u = void 0 === c ? l + (i ? i.byteLength : a ? a.length : 0) : c,
                                d = t.prev,
                                f = void 0 === d ? null : d,
                                _ = t.next,
                                p = void 0 === _ ? null : _,
                                h = t.eof,
                                m = void 0 !== h && h,
                                g = t.empty,
                                E = void 0 === g ? !(i || a) : g,
                                b = t.timestamp,
                                y = void 0 === b ? Date.now() : b;
                            n(this, e),
                                (this.start = l),
                                (this.end = u),
                                (this.prev = f),
                                (this.next = p),
                                (this.eof = m),
                                (this.empty = E),
                                (this.timestamp = y),
                                (this.buffer = i),
                                (this.string = a),
                                Object.defineProperty(this, 'length', {
                                    get: function () {
                                        return this.end - this.start;
                                    }
                                });
                        }
                        return (
                            t(e, [
                                {
                                    key: 'contains',
                                    value: function (e) {
                                        return e >= this.start && (e < this.end || this.eof);
                                    }
                                },
                                {
                                    key: 'readBytes',
                                    value: function (e, t, n) {
                                        var r = t - this.start,
                                            i = n - t;
                                        if (this.buffer) {
                                            var o = new Uint8Array(this.buffer, r, i);
                                            e.set(o);
                                        } else {
                                            if (!this.string) throw Error('invalid state');
                                            for (var a = this.string, s = 0; s < i; s++) e[s] = a.charCodeAt(r + s);
                                        }
                                        this.timestamp = Date.now();
                                    }
                                },
                                {
                                    key: 'split',
                                    value: function (t) {
                                        if (!this.empty || !this.contains(t)) throw Error('invalid split');
                                        var n = new e({
                                                start: this.start,
                                                end: t
                                            }),
                                            r = new e({
                                                start: t,
                                                end: this.eof ? t : this.end,
                                                eof: this.eof
                                            });
                                        return (n.next = r), (r.prev = n), [n, r];
                                    }
                                },
                                {
                                    key: 'first',
                                    value: function (e) {
                                        for (var t = this; t; t = t.next) if (e(t)) return t;
                                        return null;
                                    }
                                },
                                {
                                    key: 'last',
                                    value: function (e) {
                                        for (var t = null, n = this; n && e(n); n = n.next) t = n;
                                        return t;
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                91: (e, t, n) => {
                    var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    function i(e, t) {
                        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                    }
                    var o = n(503);
                    e.exports = (function () {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.cacheSize,
                                r = void 0 === n ? 0 : n;
                            i(this, e);
                            var a = new o({ eof: !0 });
                            (this.head = a), (this.tail = a), (this.readOffset = 0), (this.readCursor = a), (this.writeOffset = 0), (this.writeCursor = a), (this.cacheSize = r);
                        }
                        return (
                            r(e, [
                                {
                                    key: 'bytesReadable',
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                                            t = this.readOffset,
                                            n = this.readCursor.last(function (n) {
                                                return !n.empty && n.start <= t + e;
                                            });
                                        return n ? Math.min(e, n.end - t) : 0;
                                    }
                                },
                                {
                                    key: 'bytesWritable',
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                                            t = this.writeOffset,
                                            n = this.writeCursor;
                                        if (n.eof) return e;
                                        var r = n.last(function (n) {
                                            return n.empty && n.start <= t + e;
                                        });
                                        return r ? Math.min(e, r.end - t) : 0;
                                    }
                                },
                                {
                                    key: 'seekRead',
                                    value: function (e) {
                                        var t = this.head.first(function (t) {
                                            return t.contains(e);
                                        });
                                        if (!t) throw Error('read seek out of range');
                                        (this.readOffset = e), (this.readCursor = t);
                                    }
                                },
                                {
                                    key: 'seekWrite',
                                    value: function (e) {
                                        var t = this.head.first(function (t) {
                                            return t.contains(e);
                                        });
                                        if (!t) throw Error('write seek out of range');
                                        (this.writeOffset = e), (this.writeCursor = t);
                                    }
                                },
                                {
                                    key: 'readBytes',
                                    value: function (e) {
                                        for (var t = e.byteLength, n = this.bytesReadable(t), r = this.readOffset, i = r + n, o = r, a = this.readCursor; a && !a.empty && !(a.start >= i); a = a.next) {
                                            var s = Math.min(i, a.end),
                                                l = e.subarray(o - r, s - r);
                                            a.readBytes(l, o, s), (o = s);
                                        }
                                        return (
                                            (this.readOffset = o),
                                            (this.readCursor = this.readCursor.first(function (e) {
                                                return e.contains(o);
                                            })),
                                            n
                                        );
                                    }
                                },
                                {
                                    key: 'write',
                                    value: function (e) {
                                        var t = this.bufferItem(e),
                                            n = this.writeCursor;
                                        if (!n.empty) throw Error('write cursor not empty');
                                        if (!n.contains(t.end) && n.end !== t.end) throw Error('write cursor too small');
                                        n.start < t.start && (this.split(n, t.start), (n = this.writeCursor)), (t.end < n.end || n.eof) && (this.split(n, t.end), (n = this.writeCursor)), this.splice(n, n, t, t), (this.writeOffset = t.end), (this.writeCursor = t.next), this.gc();
                                    }
                                },
                                {
                                    key: 'bufferItem',
                                    value: function (e) {
                                        if (e instanceof ArrayBuffer)
                                            return new o({
                                                start: this.writeOffset,
                                                end: this.writeOffset + e.byteLength,
                                                buffer: e
                                            });
                                        if ('string' == typeof e)
                                            return new o({
                                                start: this.writeOffset,
                                                end: this.writeOffset + e.length,
                                                string: e
                                            });
                                        throw Error('invalid input to write');
                                    }
                                },
                                {
                                    key: 'split',
                                    value: function (e, t) {
                                        var n = e.split(t);
                                        this.splice(e, e, n[0], n[1]);
                                    }
                                },
                                {
                                    key: 'ranges',
                                    value: function () {
                                        for (var e = [], t = this.head; t; t = t.next)
                                            if (!t.empty) {
                                                var n = t;
                                                (t = t.last(function (e) {
                                                    return !e.empty;
                                                })),
                                                    e.push([n.start, t.end]);
                                            }
                                        return e;
                                    }
                                },
                                {
                                    key: 'gc',
                                    value: function () {
                                        for (var e = 0, t = [], n = this.head; n; n = n.next) n.empty || ((e += n.length), (n.end < this.readOffset || n.start > this.readOffset + this.chunkSize) && t.push(n));
                                        if (e > this.cacheSize) {
                                            t.sort(function (e, t) {
                                                return e.timestamp - t.timestamp;
                                            });
                                            for (var r = 0; r < t.length; r++) {
                                                var i = t[r];
                                                if (e <= this.cacheSize) break;
                                                this.remove(i), (e -= i.length);
                                            }
                                        }
                                    }
                                },
                                {
                                    key: 'remove',
                                    value: function (e) {
                                        var t = new o({
                                            start: e.start,
                                            end: e.end
                                        });
                                        this.splice(e, e, t, t), (e = t).prev && e.prev.empty && (e = this.consolidate(e.prev)), e.next && e.next.empty && !e.next.eof && (e = this.consolidate(e)), 0 === e.start && (this.head = e);
                                    }
                                },
                                {
                                    key: 'consolidate',
                                    value: function (e) {
                                        var t = e.last(function (e) {
                                                return e.empty && !e.eof;
                                            }),
                                            n = new o({
                                                start: e.start,
                                                end: t.end
                                            });
                                        return this.splice(e, t, n, n), n;
                                    }
                                },
                                {
                                    key: 'splice',
                                    value: function (e, t, n, r) {
                                        var i = this;
                                        if (e.start !== n.start) throw Error('invalid splice head');
                                        if (!(t.end === r.end || (t.eof && r.eof))) throw Error('invalid splice tail');
                                        var o = e.prev,
                                            a = t.next;
                                        (e.prev = null),
                                            (t.next = null),
                                            o && ((o.next = n), (n.prev = o)),
                                            a && ((a.prev = r), (r.next = a)),
                                            e === this.head && (this.head = n),
                                            t === this.tail && (this.tail = r),
                                            (this.readCursor = this.head.first(function (e) {
                                                return e.contains(i.readOffset);
                                            })),
                                            (this.writeCursor = this.head.first(function (e) {
                                                return e.contains(i.writeOffset);
                                            }));
                                    }
                                },
                                {
                                    key: 'eof',
                                    get: function () {
                                        return this.readCursor.eof;
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                814: (e, t, n) => {
                    e.exports = n(91);
                },
                566: (e) => {
                    var t = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    e.exports = (function () {
                        function e() {
                            !(function (e, t) {
                                if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                            })(this, e),
                                (this._e = {});
                        }
                        return (
                            t(e, [
                                {
                                    key: 'on',
                                    value: function (e, t) {
                                        (this._e[e] || (this._e[e] = [])).push(t);
                                    }
                                },
                                {
                                    key: 'off',
                                    value: function (e, t) {
                                        var n = this._e[e] || [],
                                            r = n.indexOf(t);
                                        t >= 0 && n.splice(r, 1);
                                    }
                                },
                                {
                                    key: 'emit',
                                    value: function (e, t) {
                                        (this._e[e] || []).slice().forEach(function (e) {
                                            return e(t);
                                        });
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                936: (e, t, n) => {
                    var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    n(566);
                    var i = n(814),
                        o = n(761);
                    e.exports = (function () {
                        function e(t) {
                            var n = t.url,
                                r = void 0 === n ? '' : n,
                                o = t.chunkSize,
                                a = void 0 === o ? 1048576 : o,
                                s = t.cacheSize,
                                l = void 0 === s ? 0 : s,
                                c = t.progressive,
                                u = void 0 === c || c;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
                            })(this, e),
                                (this.length = -1),
                                (this.loaded = !1),
                                (this.loading = !1),
                                (this.seekable = !1),
                                (this.buffering = !1),
                                (this.seeking = !1),
                                (this.progressive = u),
                                Object.defineProperties(this, {
                                    offset: {
                                        get: function () {
                                            return this._cache.readOffset;
                                        }
                                    },
                                    eof: {
                                        get: function () {
                                            return this.length === this._cache.readOffset;
                                        }
                                    }
                                }),
                                (this.url = r),
                                (this.headers = {}),
                                (this._cache = new i({ cacheSize: l })),
                                (this._backend = null),
                                (this._cachever = 0),
                                (this._chunkSize = a);
                        }
                        return (
                            r(e, [
                                {
                                    key: 'load',
                                    value: function () {
                                        var e = this;
                                        return new Promise(function (t, n) {
                                            if (e.loading) throw Error('cannot load when loading');
                                            if (e.loaded) throw Error('cannot load when loaded');
                                            (e.loading = !0),
                                                e
                                                    ._openBackend()
                                                    .then(function (n) {
                                                        (e.seekable = n.seekable), (e.headers = n.headers), (e.length = n.length), (e.loaded = !0), (e.loading = !1), t();
                                                    })
                                                    .catch(function (t) {
                                                        'AbortError' !== t.name && (e.loading = !1), n(t);
                                                    });
                                        });
                                    }
                                },
                                {
                                    key: '_openBackend',
                                    value: function () {
                                        var e = this;
                                        return new Promise(function (t, n) {
                                            if (e._backend) t(e._backend);
                                            else if (e.eof) n(Error('cannot open at end of file'));
                                            else {
                                                var r = e._cache,
                                                    i = e._chunkSize,
                                                    a = r.bytesReadable(i),
                                                    s = r.readOffset + a;
                                                if ((r.seekWrite(s), e.length >= 0 && s >= e.length)) return void t(null);
                                                var l = e._clampToLength(r.writeOffset + r.bytesWritable(i)) - r.writeOffset;
                                                if (0 === l) t(null);
                                                else {
                                                    var c = (e._backend = new o({
                                                            url: e.url,
                                                            offset: e._cache.writeOffset,
                                                            length: l,
                                                            cachever: e._cachever,
                                                            progressive: e.progressive
                                                        })),
                                                        u = null,
                                                        d = function () {
                                                            c !== e._backend
                                                                ? (u(), n(Error('invalid state')))
                                                                : (c.on('buffer', function (t) {
                                                                      c === e._backend && e._cache.write(t);
                                                                  }),
                                                                  c.on('done', function () {
                                                                      c === e._backend && (-1 === e.length && (e.length = e._backend.offset + e._backend.bytesRead), (e._backend = null));
                                                                  }),
                                                                  t(c));
                                                        },
                                                        f = function (t) {
                                                            c !== e._backend ? n(Error('invalid state')) : ((e._backend = null), n(t));
                                                        };
                                                    (u = function () {
                                                        c.off('open', d), c.off('error', f);
                                                    }),
                                                        c.on('open', d),
                                                        c.on('error', f),
                                                        c.on('cachever', function () {
                                                            e._cachever++;
                                                        }),
                                                        c.load();
                                                }
                                            }
                                        });
                                    }
                                },
                                {
                                    key: '_readAhead',
                                    value: function () {
                                        var e = this;
                                        return new Promise(function (t, n) {
                                            e._backend || e.eof
                                                ? t()
                                                : e
                                                      ._openBackend()
                                                      .then(function () {
                                                          t();
                                                      })
                                                      .catch(function (e) {
                                                          n(e);
                                                      });
                                        });
                                    }
                                },
                                {
                                    key: 'seek',
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n, r) {
                                            if (!t.loaded || t.buffering || t.seeking) throw Error('invalid state');
                                            if (e !== (0 | e) || e < 0) throw Error('invalid input');
                                            if (t.length >= 0 && e > t.length) throw Error('seek past end of file');
                                            if (!t.seekable) throw Error('seek on non-seekable stream');
                                            t._backend && t.abort(), t._cache.seekRead(e), t._cache.seekWrite(e), t._readAhead().then(n).catch(r);
                                        });
                                    }
                                },
                                {
                                    key: 'read',
                                    value: function (e) {
                                        var t = this;
                                        return this.buffer(e).then(function (e) {
                                            return t.readSync(e);
                                        });
                                    }
                                },
                                {
                                    key: 'readSync',
                                    value: function (e) {
                                        var t = this.bytesAvailable(e),
                                            n = new Uint8Array(t);
                                        if (this.readBytes(n) !== t) throw Error('failed to read expected data');
                                        return n.buffer;
                                    }
                                },
                                {
                                    key: 'readBytes',
                                    value: function (e) {
                                        if (!this.loaded || this.buffering || this.seeking) throw Error('invalid state');
                                        if (!(e instanceof Uint8Array)) throw Error('invalid input');
                                        var t = this._cache.readBytes(e);
                                        return this._readAhead(), t;
                                    }
                                },
                                {
                                    key: 'buffer',
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n, r) {
                                            if (!t.loaded || t.buffering || t.seeking) throw Error('invalid state');
                                            if (e !== (0 | e) || e < 0) throw Error('invalid input');
                                            var i = t._clampToLength(t.offset + e),
                                                o = i - t.offset,
                                                a = t.bytesAvailable(o);
                                            a >= o
                                                ? n(a)
                                                : ((t.buffering = !0),
                                                  t
                                                      ._openBackend()
                                                      .then(function (n) {
                                                          return n
                                                              ? n.bufferToOffset(i).then(function () {
                                                                    return (t.buffering = !1), t.buffer(e);
                                                                })
                                                              : Promise.resolve(a);
                                                      })
                                                      .then(function (e) {
                                                          (t.buffering = !1), n(e);
                                                      })
                                                      .catch(function (e) {
                                                          'AbortError' !== e.name && (t.buffering = !1), r(e);
                                                      }));
                                        });
                                    }
                                },
                                {
                                    key: 'bytesAvailable',
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                        return this._cache.bytesReadable(e);
                                    }
                                },
                                {
                                    key: 'abort',
                                    value: function () {
                                        this.loading && (this.loading = !1), this.buffering && (this.buffering = !1), this.seeking && (this.seeking = !1), this._backend && (this._backend.abort(), (this._backend = null));
                                    }
                                },
                                {
                                    key: 'getBufferedRanges',
                                    value: function () {
                                        return this._cache.ranges();
                                    }
                                },
                                {
                                    key: '_clampToLength',
                                    value: function (e) {
                                        return this.length < 0 ? e : Math.min(this.length, e);
                                    }
                                }
                            ]),
                            e
                        );
                    })();
                },
                302: (e, t, n) => {
                    n.r(t), n.d(t, { default: () => r });
                    let r = 'data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU5LjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAAEEwCZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ//////////////////////////////////////////////////////////////////8AAAAATGF2YzU5LjE4AAAAAAAAAAAAAAAAJAZAAAAAAAAABBMIw3vfAAAAAAAAAAAAAAAAAAAAAP/7kGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=';
                },
                826: (e) => {
                    e.exports = {
                        vertex: 'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n',
                        fragment: '// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n',
                        vertexStripe: 'precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n',
                        fragmentStripe: "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n"
                    };
                },
                487: (e) => {
                    !(function () {
                        function t(e, t) {
                            throw Error('abstract');
                        }
                        (t.prototype.drawFrame = function (e) {
                            throw Error('abstract');
                        }),
                            (t.prototype.clear = function () {
                                throw Error('abstract');
                            }),
                            (e.exports = t);
                    })();
                },
                926: (e, t, n) => {
                    !(function () {
                        var t = n(487),
                            r = n(627);
                        function i(e) {
                            var t = this,
                                n = e.getContext('2d'),
                                i = null,
                                o = null,
                                a = null;
                            return (
                                (t.drawFrame = function (t) {
                                    var s = t.format;
                                    (e.width === s.displayWidth && e.height === s.displayHeight) || ((e.width = s.displayWidth), (e.height = s.displayHeight)),
                                        (null !== i && i.width == s.width && i.height == s.height) ||
                                            (function (e, t) {
                                                for (var r = (i = n.createImageData(e, t)).data, o = e * t * 4, a = 0; a < o; a += 4) r[a + 3] = 255;
                                            })(s.width, s.height),
                                        r.convertYCbCr(t, i.data);
                                    var l,
                                        c = s.cropWidth != s.displayWidth || s.cropHeight != s.displayHeight;
                                    c
                                        ? (o ||
                                              (function (e, t) {
                                                  ((o = document.createElement('canvas')).width = e), (o.height = t), (a = o.getContext('2d'));
                                              })(s.cropWidth, s.cropHeight),
                                          (l = a))
                                        : (l = n),
                                        l.putImageData(i, -s.cropLeft, -s.cropTop, s.cropLeft, s.cropTop, s.cropWidth, s.cropHeight),
                                        c && n.drawImage(o, 0, 0, s.displayWidth, s.displayHeight);
                                }),
                                (t.clear = function () {
                                    n.clearRect(0, 0, e.width, e.height);
                                }),
                                t
                            );
                        }
                        (i.prototype = Object.create(t.prototype)), (e.exports = i);
                    })();
                },
                895: (e, t, n) => {
                    !(function () {
                        var t = n(487),
                            r = n(826);
                        function i(e) {
                            var t,
                                n,
                                o = this,
                                a = i.contextForCanvas(e);
                            if (null === a) throw Error('WebGL unavailable');
                            function s(e, t) {
                                var n = a.createShader(e);
                                if ((a.shaderSource(n, t), a.compileShader(n), !a.getShaderParameter(n, a.COMPILE_STATUS))) {
                                    var r = a.getShaderInfoLog(n);
                                    throw (a.deleteShader(n), Error('GL shader compilation for ' + e + ' failed: ' + r));
                                }
                                return n;
                            }
                            var l,
                                c,
                                u,
                                d,
                                f,
                                _,
                                p,
                                h,
                                m,
                                g,
                                E = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                                b = {},
                                y = {},
                                v = {};
                            function O(e, t) {
                                return (b[e] && !t) || (b[e] = a.createTexture()), b[e];
                            }
                            function I(e, t, n, r, o) {
                                var s = !b[e] || t,
                                    l = O(e, t);
                                if ((a.activeTexture(a.TEXTURE0), i.stripe)) {
                                    var c = !b[e + '_temp'] || t,
                                        u = O(e + '_temp', t);
                                    a.bindTexture(a.TEXTURE_2D, u), c ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, n / 4, r, 0, a.RGBA, a.UNSIGNED_BYTE, o)) : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, n / 4, r, a.RGBA, a.UNSIGNED_BYTE, o);
                                    var d = b[e + '_stripe'],
                                        f = !d || t;
                                    f && (d = O(e + '_stripe', t)),
                                        a.bindTexture(a.TEXTURE_2D, d),
                                        f &&
                                            (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                                            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                                            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST),
                                            a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST),
                                            a.texImage2D(
                                                a.TEXTURE_2D,
                                                0,
                                                a.RGBA,
                                                n,
                                                1,
                                                0,
                                                a.RGBA,
                                                a.UNSIGNED_BYTE,
                                                (function (e) {
                                                    if (v[e]) return v[e];
                                                    for (var t = e, n = new Uint32Array(t), r = 0; r < t; r += 4) (n[r] = 255), (n[r + 1] = 65280), (n[r + 2] = 16711680), (n[r + 3] = 4278190080);
                                                    return (v[e] = new Uint8Array(n.buffer));
                                                })(n)
                                            ));
                                } else a.bindTexture(a.TEXTURE_2D, l), s ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texImage2D(a.TEXTURE_2D, 0, a.ALPHA, n, r, 0, a.ALPHA, a.UNSIGNED_BYTE, o)) : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, n, r, a.ALPHA, a.UNSIGNED_BYTE, o);
                            }
                            function S(e, t, r, i) {
                                var o = b[e];
                                a.useProgram(n);
                                var s = y[e];
                                (s && !t) || (a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, o), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, r, i, 0, a.RGBA, a.UNSIGNED_BYTE, null), (s = y[e] = a.createFramebuffer())), a.bindFramebuffer(a.FRAMEBUFFER, s), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, o, 0);
                                var p = b[e + '_temp'];
                                a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, p), a.uniform1i(_, 1);
                                var h = b[e + '_stripe'];
                                a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, h), a.uniform1i(f, 2), a.bindBuffer(a.ARRAY_BUFFER, l), a.enableVertexAttribArray(c), a.vertexAttribPointer(c, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, u), a.enableVertexAttribArray(d), a.vertexAttribPointer(d, 2, a.FLOAT, !1, 0, 0), a.viewport(0, 0, r, i), a.drawArrays(a.TRIANGLES, 0, E.length / 2), a.bindFramebuffer(a.FRAMEBUFFER, null);
                            }
                            function T(e, n, r) {
                                a.activeTexture(n), a.bindTexture(a.TEXTURE_2D, b[e]), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.uniform1i(a.getUniformLocation(t, e), r);
                            }
                            function N(e, t) {
                                var n = s(a.VERTEX_SHADER, e),
                                    r = s(a.FRAGMENT_SHADER, t),
                                    i = a.createProgram();
                                if ((a.attachShader(i, n), a.attachShader(i, r), a.linkProgram(i), !a.getProgramParameter(i, a.LINK_STATUS))) {
                                    var o = a.getProgramInfoLog(i);
                                    throw (a.deleteProgram(i), Error('GL program linking failed: ' + o));
                                }
                                return i;
                            }
                            return (
                                (o.drawFrame = function (s) {
                                    var b = s.format,
                                        y = !t || e.width !== b.displayWidth || e.height !== b.displayHeight;
                                    if (
                                        (y && ((e.width = b.displayWidth), (e.height = b.displayHeight), o.clear()),
                                        t ||
                                            (function () {
                                                if (i.stripe) {
                                                    (n = N(r.vertexStripe, r.fragmentStripe)), a.getAttribLocation(n, 'aPosition'), (u = a.createBuffer());
                                                    var e = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
                                                    a.bindBuffer(a.ARRAY_BUFFER, u), a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW), (d = a.getAttribLocation(n, 'aTexturePosition')), (f = a.getUniformLocation(n, 'uStripe')), (_ = a.getUniformLocation(n, 'uTexture'));
                                                }
                                                (t = N(r.vertex, r.fragment)), (l = a.createBuffer()), a.bindBuffer(a.ARRAY_BUFFER, l), a.bufferData(a.ARRAY_BUFFER, E, a.STATIC_DRAW), (c = a.getAttribLocation(t, 'aPosition')), (p = a.createBuffer()), (h = a.getAttribLocation(t, 'aLumaPosition')), (m = a.createBuffer()), (g = a.getAttribLocation(t, 'aChromaPosition'));
                                            })(),
                                        y)
                                    ) {
                                        var v = function (e, t, n) {
                                            var r = b.cropLeft / n,
                                                i = (b.cropLeft + b.cropWidth) / n,
                                                o = (b.cropTop + b.cropHeight) / b.height,
                                                s = b.cropTop / b.height,
                                                l = new Float32Array([r, o, i, o, r, s, r, s, i, o, i, s]);
                                            a.bindBuffer(a.ARRAY_BUFFER, e), a.bufferData(a.ARRAY_BUFFER, l, a.STATIC_DRAW);
                                        };
                                        v(p, 0, s.y.stride), v(m, 0, (s.u.stride * b.width) / b.chromaWidth);
                                    }
                                    I('uTextureY', y, s.y.stride, b.height, s.y.bytes), I('uTextureCb', y, s.u.stride, b.chromaHeight, s.u.bytes), I('uTextureCr', y, s.v.stride, b.chromaHeight, s.v.bytes), i.stripe && (S('uTextureY', y, s.y.stride, b.height), S('uTextureCb', y, s.u.stride, b.chromaHeight), S('uTextureCr', y, s.v.stride, b.chromaHeight)), a.useProgram(t), a.viewport(0, 0, e.width, e.height), T('uTextureY', a.TEXTURE0, 0), T('uTextureCb', a.TEXTURE1, 1), T('uTextureCr', a.TEXTURE2, 2), a.bindBuffer(a.ARRAY_BUFFER, l), a.enableVertexAttribArray(c), a.vertexAttribPointer(c, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, p), a.enableVertexAttribArray(h), a.vertexAttribPointer(h, 2, a.FLOAT, !1, 0, 0), a.bindBuffer(a.ARRAY_BUFFER, m), a.enableVertexAttribArray(g), a.vertexAttribPointer(g, 2, a.FLOAT, !1, 0, 0), a.drawArrays(a.TRIANGLES, 0, E.length / 2);
                                }),
                                (o.clear = function () {
                                    a.viewport(0, 0, e.width, e.height), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT);
                                }),
                                o.clear(),
                                o
                            );
                        }
                        (i.stripe = !1),
                            (i.contextForCanvas = function (e) {
                                var t = {
                                    preferLowPowerToHighPerformance: !0,
                                    powerPreference: 'low-power',
                                    failIfMajorPerformanceCaveat: !0,
                                    preserveDrawingBuffer: !0
                                };
                                return e.getContext('webgl', t) || e.getContext('experimental-webgl', t);
                            }),
                            (i.isAvailable = function () {
                                var e,
                                    t = document.createElement('canvas');
                                (t.width = 1), (t.height = 1);
                                try {
                                    e = i.contextForCanvas(t);
                                } catch (e) {
                                    return !1;
                                }
                                if (e) {
                                    var n = e.TEXTURE0,
                                        r = e.createTexture(),
                                        o = new Uint8Array(16),
                                        a = i.stripe ? 1 : 4,
                                        s = i.stripe ? e.RGBA : e.ALPHA,
                                        l = i.stripe ? e.NEAREST : e.LINEAR;
                                    return e.activeTexture(n), e.bindTexture(e.TEXTURE_2D, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, l), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, l), e.texImage2D(e.TEXTURE_2D, 0, s, a, 4, 0, s, e.UNSIGNED_BYTE, o), !e.getError();
                                }
                                return !1;
                            }),
                            (i.prototype = Object.create(t.prototype)),
                            (e.exports = i);
                    })();
                },
                627: (e, t, n) => {
                    !(function () {
                        var t = n(877);
                        e.exports = {
                            convertYCbCr: function (e, n) {
                                var r = 0 | e.format.width,
                                    i = 0 | e.format.height,
                                    o = 0 | t(e.format.width / e.format.chromaWidth),
                                    a = 0 | t(e.format.height / e.format.chromaHeight),
                                    s = e.y.bytes,
                                    l = e.u.bytes,
                                    c = e.v.bytes,
                                    u = 0 | e.y.stride,
                                    d = 0 | e.u.stride,
                                    f = 0 | e.v.stride,
                                    _ = r << 2,
                                    p = 0,
                                    h = 0,
                                    m = 0,
                                    g = 0,
                                    E = 0,
                                    b = 0,
                                    y = 0,
                                    v = 0,
                                    O = 0,
                                    I = 0,
                                    S = 0,
                                    T = 0,
                                    N = 0,
                                    A = 0,
                                    C = 0,
                                    R = 0,
                                    P = 0,
                                    w = 0;
                                if (1 == o && 1 == a)
                                    for (y = 0, v = _, w = 0, R = 0; R < i; R += 2) {
                                        for (m = ((h = (R * u) | 0) + u) | 0, g = (w * d) | 0, E = (w * f) | 0, C = 0; C < r; C += 2) (O = 0 | l[g++]), (T = (((409 * (I = 0 | c[E++])) | 0) - 57088) | 0), (N = (((100 * O) | 0) + ((208 * I) | 0) - 34816) | 0), (A = (((516 * O) | 0) - 70912) | 0), (S = (298 * s[h++]) | 0), (n[y] = (S + T) >> 8), (n[y + 1] = (S - N) >> 8), (n[y + 2] = (S + A) >> 8), (y += 4), (S = (298 * s[h++]) | 0), (n[y] = (S + T) >> 8), (n[y + 1] = (S - N) >> 8), (n[y + 2] = (S + A) >> 8), (y += 4), (S = (298 * s[m++]) | 0), (n[v] = (S + T) >> 8), (n[v + 1] = (S - N) >> 8), (n[v + 2] = (S + A) >> 8), (v += 4), (S = (298 * s[m++]) | 0), (n[v] = (S + T) >> 8), (n[v + 1] = (S - N) >> 8), (n[v + 2] = (S + A) >> 8), (v += 4);
                                        (y += _), (v += _), w++;
                                    }
                                else for (b = 0, R = 0; R < i; R++) for (P = 0, p = (R * u) | 0, g = ((w = R >> a) * d) | 0, E = (w * f) | 0, C = 0; C < r; C++) (O = 0 | l[g + (P = C >> o)]), (T = (((409 * (I = 0 | c[E + P])) | 0) - 57088) | 0), (N = (((100 * O) | 0) + ((208 * I) | 0) - 34816) | 0), (A = (((516 * O) | 0) - 70912) | 0), (S = (298 * s[p++]) | 0), (n[b] = (S + T) >> 8), (n[b + 1] = (S - N) >> 8), (n[b + 2] = (S + A) >> 8), (b += 4);
                            }
                        };
                    })();
                },
                877: (e) => {
                    !(function () {
                        e.exports = function (e) {
                            for (var t = 0, n = e >> 1; 0 != n; ) (n >>= 1), t++;
                            if (e !== 1 << t) throw 'chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got ' + e;
                            return t;
                        };
                    })();
                },
                731: (e, t, n) => {
                    !(function () {
                        var t = n(487),
                            r = n(926),
                            i = n(895);
                        e.exports = {
                            FrameSink: t,
                            SoftwareFrameSink: r,
                            WebGLFrameSink: i,
                            attach: function (e, t) {
                                return ('webGL' in (t = t || {}) ? t.webGL : i.isAvailable()) ? new i(e, t) : new r(e, t);
                            }
                        };
                    })();
                }
            },
            t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var o = (t[r] = { exports: {} });
            return e[r](o, o.exports, n), o.exports;
        }
        (n.d = (e, t) => {
            for (var r in t)
                n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    });
        }),
            (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (n.r = (e) => {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
            });
        var r = {};
        return (
            (() => {
                var e = r,
                    t = n(318);
                Object.defineProperty(e, '__esModule', { value: !0 }),
                    Object.defineProperty(e, 'OGVCompat', {
                        enumerable: !0,
                        get: function () {
                            return o.default;
                        }
                    }),
                    Object.defineProperty(e, 'OGVLoader', {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        }
                    }),
                    Object.defineProperty(e, 'OGVMediaError', {
                        enumerable: !0,
                        get: function () {
                            return s.default;
                        }
                    }),
                    Object.defineProperty(e, 'OGVMediaType', {
                        enumerable: !0,
                        get: function () {
                            return l.default;
                        }
                    }),
                    Object.defineProperty(e, 'OGVPlayer', {
                        enumerable: !0,
                        get: function () {
                            return c.default;
                        }
                    }),
                    Object.defineProperty(e, 'OGVTimeRanges', {
                        enumerable: !0,
                        get: function () {
                            return u.default;
                        }
                    }),
                    (e.OGVVersion = void 0);
                var i = t(n(8)),
                    o = t(n(523)),
                    a = t(n(964)),
                    s = t(n(759)),
                    l = t(n(278)),
                    c = t(n(869)),
                    u = t(n(168)),
                    d = '1.8.9-20220406232920-cb5f7ff';
                (e.OGVVersion = d), 'object' === ('undefined' == typeof window ? 'undefined' : (0, i.default)(window)) && ((window.OGVCompat = o.default), (window.OGVLoader = a.default), (window.OGVMediaError = s.default), (window.OGVMediaType = l.default), (window.OGVTimeRanges = u.default), (window.OGVPlayer = c.default), (window.OGVVersion = d));
            })(),
            r
        );
    })();
});
