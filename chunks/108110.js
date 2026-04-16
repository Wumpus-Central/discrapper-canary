!(function (t, n) {
    e.exports = n();
})(globalThis, function () {
    return (() => {
        var e = {
                506: (e) => {
                    (e.exports = function (e) {
                        if (void 0 === e)
                            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                575: (e) => {
                    (e.exports = function (e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                913: (e) => {
                    function t(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            (r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r);
                        }
                    }
                    (e.exports = function (e, n, r) {
                        return (
                            n && t(e.prototype, n),
                            r && t(e, r),
                            Object.defineProperty(e, "prototype", { writable: !1 }),
                            e
                        );
                    }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports);
                },
                525: (e, t, n) => {
                    var r = n(331);
                    function i() {
                        return (
                            "u" > typeof Reflect && Reflect.get
                                ? (e.exports = i = Reflect.get)
                                : (e.exports = i =
                                      function (e, t, n) {
                                          var i = r(e, t);
                                          if (i) {
                                              var s = Object.getOwnPropertyDescriptor(i, t);
                                              return s.get ? s.get.call(arguments.length < 3 ? e : n) : s.value;
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
                        if ("function" != typeof t && null !== t)
                            throw TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: { value: e, writable: !0, configurable: !0 },
                        })),
                            Object.defineProperty(e, "prototype", { writable: !1 }),
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
                        if (t && ("object" === r(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
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
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e &&
                                              "function" == typeof Symbol &&
                                              e.constructor === Symbol &&
                                              e !== Symbol.prototype
                                              ? "symbol"
                                              : typeof e;
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
                                var i = (t[r] = { i: r, l: !1, exports: {} });
                                return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                            }
                            return (
                                (n.m = e),
                                (n.c = t),
                                (n.d = function (e, t, r) {
                                    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                                }),
                                (n.r = function (e) {
                                    "u" > typeof Symbol &&
                                        Symbol.toStringTag &&
                                        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                                        Object.defineProperty(e, "__esModule", { value: !0 });
                                }),
                                (n.t = function (e, t) {
                                    if (
                                        (1 & t && (e = n(e)),
                                        8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
                                    )
                                        return e;
                                    var r = Object.create(null);
                                    if (
                                        (n.r(r),
                                        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
                                        2 & t && "string" != typeof e)
                                    )
                                        for (var i in e)
                                            n.d(
                                                r,
                                                i,
                                                function (t) {
                                                    return e[t];
                                                }.bind(null, i),
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
                                    return n.d(t, "a", t), t;
                                }),
                                (n.o = function (e, t) {
                                    return Object.prototype.hasOwnProperty.call(e, t);
                                }),
                                (n.p = ""),
                                n((n.s = 1))
                            );
                        })([
                            function (e, t) {
                                function n(e, t) {
                                    if (e < 1 || e !== Math.round(e)) throw "Invalid channel count for BufferQueue";
                                    (this.channels = e), (this.bufferSize = t), this.flush();
                                }
                                (n.prototype.flush = function () {
                                    (this._buffers = []),
                                        (this._pendingBuffer = this.createBuffer(this.bufferSize)),
                                        (this._pendingPos = 0);
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
                                        if (!this.validate(e))
                                            throw "Invalid audio buffer passed to BufferQueue.appendBuffer";
                                        for (
                                            var t = e[0].length,
                                                n = this.channels,
                                                r = this._pendingPos,
                                                i = this._pendingBuffer,
                                                s = this.bufferSize,
                                                a = 0;
                                            a < t;
                                            a++
                                        ) {
                                            for (var o = 0; o < n; o++) i[o][r] = e[o][a];
                                            ++r == s &&
                                                (this._buffers.push(i),
                                                (r = this._pendingPos = 0),
                                                (i = this._pendingBuffer = this.createBuffer(s)));
                                        }
                                        this._pendingPos = r;
                                    }),
                                    (n.prototype.prependBuffer = function (e) {
                                        if (!this.validate(e))
                                            throw "Invalid audio buffer passed to BufferQueue.prependBuffer";
                                        var t = this._buffers.slice(0);
                                        t.push(this.trimBuffer(this._pendingBuffer, 0, this._pendingPos)),
                                            this.flush(),
                                            this.appendBuffer(e);
                                        for (var n = 0; n < t.length; n++) this.appendBuffer(t[n]);
                                    }),
                                    (n.prototype.nextBuffer = function () {
                                        if (this._buffers.length) return this._buffers.shift();
                                        var e = this.trimBuffer(this._pendingBuffer, 0, this._pendingPos);
                                        return (
                                            (this._pendingBuffer = this.createBuffer(this.bufferSize)),
                                            (this._pendingPos = 0),
                                            e
                                        );
                                    }),
                                    (n.prototype.trimBuffer = function (e, t, n) {
                                        var r = e[0].length,
                                            i = t + Math.min(n, r);
                                        if (0 == t && i >= r) return e;
                                        for (var s = [], a = 0; a < this.channels; a++) s[a] = e[a].subarray(t, i);
                                        return s;
                                    }),
                                    (e.exports = n);
                            },
                            function (e, t, n) {
                                !(function () {
                                    n(0);
                                    var t = n(2),
                                        r = n(4);
                                    function i(e) {
                                        (this._options = e || {}),
                                            (this._backend = null),
                                            (this._resampleFractional = 0),
                                            (this._resampleLastSampleData = void 0),
                                            (this._tempoChanger = null);
                                    }
                                    (i.prototype.rate = 0),
                                        (i.prototype.targetRate = 0),
                                        (i.prototype.channels = 0),
                                        (i.prototype.bufferSize = 0),
                                        Object.defineProperty(i.prototype, "bufferDuration", {
                                            get: function () {
                                                return this.targetRate ? this.bufferSize / this.targetRate : 0;
                                            },
                                        }),
                                        Object.defineProperty(i.prototype, "bufferThreshold", {
                                            get: function () {
                                                return this._backend
                                                    ? this._backend.bufferThreshold / this.targetRate
                                                    : 0;
                                            },
                                            set: function (e) {
                                                if (!this._backend)
                                                    throw "Invalid state: AudioFeeder cannot set bufferThreshold before init";
                                                this._backend.bufferThreshold = Math.round(e * this.targetRate);
                                            },
                                        }),
                                        Object.defineProperty(i.prototype, "playbackPosition", {
                                            get: function () {
                                                return this._backend ? this.getPlaybackState().playbackPosition : 0;
                                            },
                                        }),
                                        Object.defineProperty(i.prototype, "outputPlaybackPosition", {
                                            get: function () {
                                                return this._backend
                                                    ? this.getPlaybackState().outputPlaybackPosition
                                                    : 0;
                                            },
                                        }),
                                        Object.defineProperty(i.prototype, "durationBuffered", {
                                            get: function () {
                                                return this._backend
                                                    ? this.getPlaybackState().samplesQueued / this.targetRate
                                                    : 0;
                                            },
                                        }),
                                        Object.defineProperty(i.prototype, "muted", {
                                            get: function () {
                                                if (this._backend) return this._backend.muted;
                                                throw "Invalid state: cannot get mute before init";
                                            },
                                            set: function (e) {
                                                if (!this._backend) throw "Invalid state: cannot set mute before init";
                                                this._backend.muted = e;
                                            },
                                        }),
                                        (i.prototype.mute = function () {
                                            this.muted = !0;
                                        }),
                                        (i.prototype.unmute = function () {
                                            this.muted = !1;
                                        }),
                                        Object.defineProperty(i.prototype, "volume", {
                                            get: function () {
                                                if (this._backend) return this._backend.volume;
                                                throw "Invalid state: cannot get volume before init";
                                            },
                                            set: function (e) {
                                                if (!this._backend)
                                                    throw "Invalid state: cannot set volume before init";
                                                this._backend.volume = e;
                                            },
                                        }),
                                        Object.defineProperty(i.prototype, "tempo", {
                                            get: function () {
                                                if (this._tempoChanger) return this._tempoChanger.getTempo();
                                                throw "Invalid state: cannot get tempo before init";
                                            },
                                            set: function (e) {
                                                if (!this._tempoChanger)
                                                    throw "Invalid state: cannot set tempo before init";
                                                this._tempoChanger.setTempo(e);
                                            },
                                        }),
                                        (i.prototype.init = function (e, n) {
                                            if (((this.channels = e), (this.rate = n), this._options.backendFactory))
                                                this._backend = this._options.backendFactory(e, n, this._options);
                                            else {
                                                if (!t.isSupported()) throw "No supported backend";
                                                this._backend = new t(e, n, this._options);
                                            }
                                            (this.targetRate = this._backend.rate),
                                                (this.bufferSize = this._backend.bufferSize),
                                                (this._tempoChanger = r({
                                                    sampleRate: this.targetRate,
                                                    numChannels: e,
                                                    tempo: 1,
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
                                            var s,
                                                a = [],
                                                o = e[0].length,
                                                l = this._resampleFractional,
                                                u = (o * r) / t + l,
                                                c = Math.floor(u),
                                                d = u - c;
                                            s =
                                                t < r
                                                    ? function (e, n, i, s) {
                                                          for (
                                                              var a = function (t) {
                                                                      return t < 0
                                                                          ? i && i.length + t > 0
                                                                              ? i[i.length + t]
                                                                              : e[0]
                                                                          : e[t];
                                                                  },
                                                                  o = 0;
                                                              o < n.length;
                                                              o++
                                                          ) {
                                                              var u,
                                                                  c = ((o + 1 - l) * t) / r - 1,
                                                                  d = Math.floor(c),
                                                                  _ = Math.ceil(c);
                                                              (u = d == _ ? a(d) : a(d) * (_ - c) + a(_) * (c - d)),
                                                                  (n[o] = s * u);
                                                          }
                                                      }
                                                    : function (e, t, n, r) {
                                                          for (var i = 0; i < t.length; i++)
                                                              t[i] = r * e[((i * e.length) / t.length) | 0];
                                                      };
                                            var _ = 1;
                                            i > n && (_ = Math.SQRT1_2);
                                            for (var f = 0; f < i; f++) {
                                                var p = f;
                                                f >= n && (p = 0);
                                                var h = e[p],
                                                    m = new Float32Array(c);
                                                s(
                                                    h,
                                                    m,
                                                    this._resampleLastSampleData
                                                        ? this._resampleLastSampleData[p]
                                                        : void 0,
                                                    _,
                                                ),
                                                    a.push(m);
                                            }
                                            return (
                                                (this._resampleFractional = d), (this._resampleLastSampleData = e), a
                                            );
                                        }),
                                        (i.prototype.bufferData = function (e) {
                                            if (!this._backend)
                                                throw "Invalid state: AudioFeeder cannot bufferData before init";
                                            var t = this._resample(e);
                                            (t = this._tempoChanger.process(t)), this._backend.appendBuffer(t);
                                        }),
                                        (i.prototype.getPlaybackState = function () {
                                            if (this._backend) {
                                                var e = this._backend.getPlaybackState();
                                                return (
                                                    (e.outputPlaybackPosition = e.playbackPosition),
                                                    (e.playbackPosition = this._tempoChanger.mapOutputToInputTime(
                                                        e.outputPlaybackPosition,
                                                    )),
                                                    e
                                                );
                                            }
                                            throw "Invalid state: AudioFeeder cannot getPlaybackState before init";
                                        }),
                                        (i.prototype.waitUntilReady = function (e) {
                                            if (!this._backend)
                                                throw "Invalid state: AudioFeeder cannot waitUntilReady before init";
                                            this._backend.waitUntilReady(e);
                                        }),
                                        (i.prototype.start = function () {
                                            if (!this._backend)
                                                throw "Invalid state: AudioFeeder cannot start before init";
                                            this._backend.start();
                                        }),
                                        (i.prototype.stop = function () {
                                            if (!this._backend)
                                                throw "Invalid state: AudioFeeder cannot stop before init";
                                            this._backend.stop();
                                        }),
                                        (i.prototype.flush = function () {
                                            if (
                                                ((this._resampleFractional = 0),
                                                (this._resampleLastSampleData = void 0),
                                                !this._backend)
                                            )
                                                throw "Invalid state: AudioFeeder cannot flush before init";
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
                                    function s(e, t, n) {
                                        var i = n.audioContext || s.initSharedAudioContext();
                                        if (
                                            ((this._context = i),
                                            (this.output = n.output || i.destination),
                                            (this.rate = i.sampleRate),
                                            (this.channels = 2),
                                            n.bufferSize && (this.bufferSize = 0 | n.bufferSize),
                                            (this.bufferThreshold = 2 * this.bufferSize),
                                            (this._bufferQueue = new r(this.channels, this.bufferSize)),
                                            (this._playbackTimeAtBufferTail = i.currentTime),
                                            (this._queuedTime = 0),
                                            (this._delayedTime = 0),
                                            (this._dropped = 0),
                                            (this._liveBuffer = this._bufferQueue.createBuffer(this.bufferSize)),
                                            i.createScriptProcessor)
                                        )
                                            this._node = i.createScriptProcessor(this.bufferSize, 0, this.channels);
                                        else {
                                            if (!i.createJavaScriptNode) throw Error("Bad version of web audio API?");
                                            this._node = i.createJavaScriptNode(this.bufferSize, 0, this.channels);
                                        }
                                    }
                                    (s.prototype.bufferSize = 4096),
                                        (s.prototype.bufferThreshold = 8192),
                                        (s.prototype._volume = 1),
                                        Object.defineProperty(s.prototype, "volume", {
                                            get: function () {
                                                return this._volume;
                                            },
                                            set: function (e) {
                                                this._volume = +e;
                                            },
                                        }),
                                        (s.prototype._muted = !1),
                                        Object.defineProperty(s.prototype, "muted", {
                                            get: function () {
                                                return this._muted;
                                            },
                                            set: function (e) {
                                                this._muted = !!e;
                                            },
                                        }),
                                        (s.prototype._audioProcess = function (e) {
                                            var t,
                                                n,
                                                r,
                                                s,
                                                a =
                                                    "number" == typeof e.playbackTime
                                                        ? e.playbackTime
                                                        : this._context.currentTime + this.bufferSize / this.rate,
                                                o = this._playbackTimeAtBufferTail;
                                            if (
                                                (o < a && (this._delayedTime += a - o),
                                                this._bufferQueue.sampleCount() < this.bufferSize &&
                                                    this.onstarved &&
                                                    this.onstarved(),
                                                this._bufferQueue.sampleCount() < this.bufferSize)
                                            ) {
                                                for (t = 0; t < this.channels; t++)
                                                    for (
                                                        r = e.outputBuffer.getChannelData(t), s = 0;
                                                        s < this.bufferSize;
                                                        s++
                                                    )
                                                        r[s] = 0;
                                                this._dropped++;
                                            } else {
                                                var l = this.muted ? 0 : this.volume,
                                                    u = this._bufferQueue.nextBuffer();
                                                if (u[0].length < this.bufferSize)
                                                    throw "Audio buffer not expected length.";
                                                for (t = 0; t < this.channels; t++)
                                                    for (
                                                        n = u[t],
                                                            this._liveBuffer[t].set(u[t]),
                                                            r = e.outputBuffer.getChannelData(t),
                                                            s = 0;
                                                        s < n.length;
                                                        s++
                                                    )
                                                        r[s] = n[s] * l;
                                                (this._queuedTime += this.bufferSize / this.rate),
                                                    (this._playbackTimeAtBufferTail = a + this.bufferSize / this.rate),
                                                    this._bufferQueue.sampleCount() <
                                                        Math.max(this.bufferSize, this.bufferThreshold) &&
                                                        this.onbufferlow &&
                                                        i(this.onbufferlow.bind(this));
                                            }
                                        }),
                                        (s.prototype._samplesQueued = function () {
                                            return (
                                                this._bufferQueue.sampleCount() +
                                                Math.floor(this._timeAwaitingPlayback() * this.rate)
                                            );
                                        }),
                                        (s.prototype._timeAwaitingPlayback = function () {
                                            return Math.max(
                                                0,
                                                this._playbackTimeAtBufferTail - this._context.currentTime,
                                            );
                                        }),
                                        (s.prototype.getPlaybackState = function () {
                                            return {
                                                playbackPosition: this._queuedTime - this._timeAwaitingPlayback(),
                                                samplesQueued: this._samplesQueued(),
                                                dropped: this._dropped,
                                                delayed: this._delayedTime,
                                            };
                                        }),
                                        (s.prototype.waitUntilReady = function (e) {
                                            e();
                                        }),
                                        (s.prototype.appendBuffer = function (e) {
                                            this._bufferQueue.appendBuffer(e);
                                        }),
                                        (s.prototype.start = function () {
                                            (this._node.onaudioprocess = this._audioProcess.bind(this)),
                                                this._node.connect(this.output),
                                                (this._playbackTimeAtBufferTail = this._context.currentTime);
                                        }),
                                        (s.prototype.stop = function () {
                                            if (this._node) {
                                                var e = this._timeAwaitingPlayback();
                                                if (e > 0) {
                                                    var t = Math.round(e * this.rate),
                                                        n = this._liveBuffer ? this._liveBuffer[0].length : 0;
                                                    t > n
                                                        ? (this._bufferQueue.prependBuffer(this._liveBuffer),
                                                          this._bufferQueue.prependBuffer(
                                                              this._bufferQueue.createBuffer(t - n),
                                                          ))
                                                        : this._bufferQueue.prependBuffer(
                                                              this._bufferQueue.trimBuffer(this._liveBuffer, n - t, t),
                                                          ),
                                                        (this._playbackTimeAtBufferTail -= e);
                                                }
                                                (this._node.onaudioprocess = null), this._node.disconnect();
                                            }
                                        }),
                                        (s.prototype.flush = function () {
                                            this._bufferQueue.flush();
                                        }),
                                        (s.prototype.close = function () {
                                            this.stop(), (this._context = null);
                                        }),
                                        (s.prototype.onstarved = null),
                                        (s.prototype.onbufferlow = null),
                                        (s.isSupported = function () {
                                            return !!t;
                                        }),
                                        (s.sharedAudioContext = null),
                                        (s.initSharedAudioContext = function () {
                                            if (!s.sharedAudioContext && s.isSupported()) {
                                                var e,
                                                    n = new t();
                                                if (n.createScriptProcessor) e = n.createScriptProcessor(1024, 0, 2);
                                                else {
                                                    if (!n.createJavaScriptNode)
                                                        throw Error("Bad version of web audio API?");
                                                    e = n.createJavaScriptNode(1024, 0, 2);
                                                }
                                                e.connect(n.destination), e.disconnect(), (s.sharedAudioContext = n);
                                            }
                                            return s.sharedAudioContext;
                                        }),
                                        (e.exports = s);
                                })();
                            },
                            function (e, t) {
                                e.exports = (function () {
                                    if (void 0 !== window.setImmediate) return window.setImmediate;
                                    if (window && window.postMessage) {
                                        var e = [];
                                        return (
                                            window.addEventListener("message", function (t) {
                                                if (t.source === window) {
                                                    var n = t.data;
                                                    if ("object" == typeof n && n.nextTickBrowserPingMessage) {
                                                        var r = e.pop();
                                                        r && r();
                                                    }
                                                }
                                            }),
                                            function (t) {
                                                e.push(t),
                                                    window.postMessage(
                                                        { nextTickBrowserPingMessage: !0 },
                                                        document.location.toString(),
                                                    );
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
                                                var i = (t[r] = { i: r, l: !1, exports: {} });
                                                return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
                                            }
                                            return (
                                                (n.m = e),
                                                (n.c = t),
                                                (n.d = function (e, t, r) {
                                                    n.o(e, t) ||
                                                        Object.defineProperty(e, t, { enumerable: !0, get: r });
                                                }),
                                                (n.r = function (e) {
                                                    "u" > typeof Symbol &&
                                                        Symbol.toStringTag &&
                                                        Object.defineProperty(e, Symbol.toStringTag, {
                                                            value: "Module",
                                                        }),
                                                        Object.defineProperty(e, "__esModule", { value: !0 });
                                                }),
                                                (n.t = function (e, t) {
                                                    if (
                                                        (1 & t && (e = n(e)),
                                                        8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
                                                    )
                                                        return e;
                                                    var r = Object.create(null);
                                                    if (
                                                        (n.r(r),
                                                        Object.defineProperty(r, "default", {
                                                            enumerable: !0,
                                                            value: e,
                                                        }),
                                                        2 & t && "string" != typeof e)
                                                    )
                                                        for (var i in e)
                                                            n.d(
                                                                r,
                                                                i,
                                                                function (t) {
                                                                    return e[t];
                                                                }.bind(null, i),
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
                                                    return n.d(t, "a", t), t;
                                                }),
                                                (n.o = function (e, t) {
                                                    return Object.prototype.hasOwnProperty.call(e, t);
                                                }),
                                                (n.p = ""),
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
                                                    },
                                                };
                                            },
                                            function (e, t, n) {
                                                var r, i;
                                                (r = n(0)),
                                                    (i = n(2)),
                                                    (e.exports = function (e) {
                                                        var t = (e = e || {}).sampleRate || 44100,
                                                            n = e.wsizeLog || 11,
                                                            s = e.tempo || 1,
                                                            a = (e.numChannels, Math.pow(2, 50 / 1200) - 1),
                                                            o = 1 << n,
                                                            l = i(n),
                                                            u = 1 << (n - 2);
                                                        u -= u % 100;
                                                        for (
                                                            var c = r.float_array(o + u + 5),
                                                                d = r.float_array(o + u + 5),
                                                                _ = u,
                                                                f = u,
                                                                p = r.float_array(o),
                                                                h = 0;
                                                            h < o;
                                                            h++
                                                        )
                                                            p[h] = 0.5 * (1 - Math.cos((2 * Math.PI * h) / o));
                                                        var m = 1 + (o >> 1),
                                                            E = r.float_array(m),
                                                            g = r.float_array(m),
                                                            A = r.float_array(m),
                                                            I = r.float_array(m),
                                                            T = r.float_array(m),
                                                            S = r.float_array(m),
                                                            y = 1 + (m >> 1),
                                                            v = [0, 0],
                                                            N = [],
                                                            C = [],
                                                            R = [],
                                                            O = [];
                                                        for (h = 0; h < 2; h++)
                                                            N.push(r.float_array(y)),
                                                                C.push(r.float_array(y)),
                                                                R.push(r.float_array(y)),
                                                                O.push(r.float_array(m));
                                                        var b = r.float_array(y),
                                                            D = r.float_array(y),
                                                            L = 0,
                                                            w = 0,
                                                            M = [{ in_time: 0, out_time: 0, tempo: s }],
                                                            P = 0,
                                                            x = 0,
                                                            k = 1,
                                                            U = 0,
                                                            G = 0,
                                                            F = 0,
                                                            V = 0,
                                                            B = {
                                                                mapOutputToInputTime: function (e) {
                                                                    for (
                                                                        var t = M.length - 1;
                                                                        e < M[t].out_time && t > 0;
                                                                    )
                                                                        t--;
                                                                    var n = M[t];
                                                                    return n.in_time + n.tempo * (e - n.out_time);
                                                                },
                                                                flush: function (e) {
                                                                    (U = 0), (v = [0, 0]), (x = 0), (V = 0), (F = 0);
                                                                    for (var t = 0; t < 2; t++)
                                                                        for (var n = 0; n < m; n++) O[t][n] = 0;
                                                                    for (t = 0; t < c.length; t++) c[t] = 0;
                                                                    for (t = 0; t < d.length; t++) d[t] = 0;
                                                                    if (e) {
                                                                        (w = Math.max(0, w - e)),
                                                                            (L = B.mapOutputToInputTime(w));
                                                                        for (
                                                                            var r = M.length - 1;
                                                                            w <= M[r].out_time && r >= 0;
                                                                        )
                                                                            M.pop(), r--;
                                                                        M.push({ in_time: L, out_time: w, tempo: s });
                                                                    }
                                                                },
                                                                getTempo: function () {
                                                                    return s;
                                                                },
                                                                setTempo: function (e) {
                                                                    (_ = f = u),
                                                                        e >= 1
                                                                            ? (f = Math.round(_ / e))
                                                                            : (_ = Math.round(f * e)),
                                                                        (G = (1 / e - f / _) * _),
                                                                        (k = (function (e, t) {
                                                                            for (
                                                                                var n = (e.length / t) | 0,
                                                                                    r = 0,
                                                                                    i = 0;
                                                                                i < n;
                                                                                i++
                                                                            )
                                                                                r += e[i * t];
                                                                            return 0.9 / r;
                                                                        })(p, f)),
                                                                        (s = e);
                                                                    var t = M[M.length - 1];
                                                                    t.out_time == w
                                                                        ? (t.tempo = e)
                                                                        : M.push({ in_time: L, out_time: w, tempo: e });
                                                                },
                                                            };
                                                        B.flush(0), B.setTempo(s);
                                                        var H = function (e, t, n) {
                                                                var r = Math.floor(n),
                                                                    i = r % 2 == 1 ? -1 : 1;
                                                                return Math.atan2(
                                                                    i * (t[r] - t[r + 1]),
                                                                    i * (e[r] - e[r + 1]),
                                                                );
                                                            },
                                                            j = function (e, t, n, r, i) {
                                                                var s = ((2 * Math.PI) / o) * 0.5 * (r + t) * _;
                                                                return (
                                                                    ((function (e) {
                                                                        return (
                                                                            e -
                                                                            2 * Math.PI * Math.round(e / (2 * Math.PI))
                                                                        );
                                                                    })(e - n - s) +
                                                                        s) *
                                                                    i
                                                                );
                                                            },
                                                            Y = function (e, t, n, r, i, s) {
                                                                for (
                                                                    var l = e % 2,
                                                                        u = 1 - l,
                                                                        c = O[u],
                                                                        d = v[u],
                                                                        _ = N[u],
                                                                        f = C[u],
                                                                        p = R[u],
                                                                        h = O[l],
                                                                        m = 1;
                                                                    m < h.length;
                                                                    m++
                                                                )
                                                                    h[m] = t[m] * t[m] + n[m] * n[m];
                                                                var E = N[l],
                                                                    g = (v[l] = (function (e, t) {
                                                                        for (var n = 0, r = 0; r < e.length; r++)
                                                                            e[r] > n && (n = e[r]);
                                                                        var i = 1e-8 * n,
                                                                            s = 1,
                                                                            o = 1;
                                                                        for (t[0] = 1, r = 2; r < e.length; r++) {
                                                                            var l = r * a;
                                                                            if (
                                                                                e[r] > i &&
                                                                                e[r] > e[r - 1] &&
                                                                                e[r] >= e[r + 1]
                                                                            ) {
                                                                                var u =
                                                                                    r +
                                                                                    (e[r - 1] - e[r + 1]) /
                                                                                        (2 *
                                                                                            (e[r - 1] -
                                                                                                2 * e[r] +
                                                                                                e[r + 1]));
                                                                                u - t[s - 1] > l
                                                                                    ? ((t[s++] = u), (o = r))
                                                                                    : e[r] > e[o] &&
                                                                                      ((t[s - 1] = u), (o = r));
                                                                            }
                                                                        }
                                                                        return s;
                                                                    })(h, E)),
                                                                    A = C[l],
                                                                    I = R[l];
                                                                if (0 != e && 0 != g) {
                                                                    var T = 0;
                                                                    for (F = 0; F < g; F++) {
                                                                        for (V = E[F]; E[F] > _[T] && T != d; ) ++T;
                                                                        var S = T;
                                                                        T > 0 && V - _[T - 1] < _[T] - V && (S = T - 1);
                                                                        var y = V * a;
                                                                        if (
                                                                            Math.abs(_[S] - V) < y &&
                                                                            c[Math.round(_[S])] > 0.1 * h[Math.round(V)]
                                                                        ) {
                                                                            var L = H(t, n, V),
                                                                                w =
                                                                                    f[S] +
                                                                                    p[S] +
                                                                                    j(L, V, f[S], _[S], s) -
                                                                                    L;
                                                                            (A[F] = L),
                                                                                (I[F] = w),
                                                                                (b[F] = Math.cos(w)),
                                                                                (D[F] = Math.sin(w));
                                                                        } else
                                                                            (A[F] = H(t, n, V)),
                                                                                (I[F] = 0),
                                                                                (b[F] = 1),
                                                                                (D[F] = 0);
                                                                    }
                                                                    E[g] = 2 * o;
                                                                    var M = E[(S = 0)],
                                                                        P = E[S + 1],
                                                                        x = b[S],
                                                                        k = D[S];
                                                                    for (m = 1; m < t.length - 1; m++) {
                                                                        m >= M &&
                                                                            m - M > P - m &&
                                                                            ((M = E[++S]),
                                                                            (P = E[S + 1]),
                                                                            (x = b[S]),
                                                                            (k = D[S]));
                                                                        var U = t[m] * x - n[m] * k,
                                                                            G = t[m] * k + n[m] * x;
                                                                        (t[m] = U), (n[m] = G);
                                                                    }
                                                                } else
                                                                    for (var F = 0; F < g; F++) {
                                                                        var V = E[F];
                                                                        f[F] = p[F] = H(t, n, V);
                                                                    }
                                                            },
                                                            W = function () {
                                                                var e = 0 | (U += 2 * G);
                                                                U -= e;
                                                                for (var t = 0; t < o; t++)
                                                                    (l.m_re[t] = p[t] * c[t]),
                                                                        (l.m_im[t] = p[t] * c[_ + t]);
                                                                r.blit(c, 2 * _, c, 0, o - _),
                                                                    l.inplace(!1),
                                                                    l.unpack(E, g, A, I),
                                                                    Y(P, E, g, 0, 0, f / _),
                                                                    Y(P + 1, A, I, 0, 0, (f + e) / _),
                                                                    r.blit(A, 0, T, 0, m),
                                                                    r.blit(I, 0, S, 0, m),
                                                                    l.repack(E, g, A, I),
                                                                    l.inplace(!0);
                                                                var n = d.length;
                                                                for (r.blit(d, x, d, 0, n - x), t = n - x; t < n; t++)
                                                                    d[t] = 0;
                                                                var i = 0,
                                                                    s = k;
                                                                for (t = 0; t < f; t++)
                                                                    Math.abs(2 * l.m_re[t]) > i &&
                                                                        (i = Math.abs(2 * l.m_re[t]));
                                                                for (t = 0; t < o - f; t++)
                                                                    Math.abs(l.m_re[t + f + e] + l.m_im[t]) > i &&
                                                                        (i = Math.abs(l.m_re[t + f + e] + l.m_im[t]));
                                                                for (t = o - f; t < o; t++)
                                                                    Math.abs(2 * l.m_im[t]) > i &&
                                                                        (i = Math.abs(2 * l.m_im[t]));
                                                                var a = 1 / Math.floor(o / (2 * f));
                                                                for (s * i > a && (s = a / i), t = 0; t < o; t++)
                                                                    (d[t] += s * l.m_re[t]),
                                                                        (d[t + f + e] += s * l.m_im[t]);
                                                                return (P += 2), (x = 2 * f + e);
                                                            };
                                                        return (
                                                            (B.process = function (e) {
                                                                var n = e[0].length,
                                                                    i = e[0];
                                                                if (e.length > 1) {
                                                                    i = r.float_array(e[0].length);
                                                                    for (var a = 1 / e.length, l = 0; l < e.length; l++)
                                                                        for (var u = 0; u < n; u++) i[u] += a * e[l][u];
                                                                }
                                                                if (1 == s) {
                                                                    if (V + F > 0) {
                                                                        var p = V + F + n,
                                                                            h = [];
                                                                        for (l = 0; l < e.length; l++) {
                                                                            var m = r.float_array(p);
                                                                            r.blit(d, 0, m, 0, V),
                                                                                r.blit(c, 0, m, V, F),
                                                                                r.blit(e[l], 0, m, V + F, n),
                                                                                h.push(m);
                                                                        }
                                                                        B.flush(0), (n = p), (e = h);
                                                                    }
                                                                    return (L += n / t), (w += n / t), e;
                                                                }
                                                                var E =
                                                                        2 *
                                                                        Math.floor(
                                                                            Math.max(0, F + n - (o - _)) / (2 * _),
                                                                        ),
                                                                    g = V + f * E + Math.floor(U + G * E);
                                                                V > g && (g = V);
                                                                var A = r.float_array(g);
                                                                r.blit(d, 0, A, 0, V);
                                                                for (var I = 0, T = V, S = 0, y = 0; ; ) {
                                                                    var v = o + _ - F;
                                                                    if (I + v > n) {
                                                                        r.blit(i, I, c, F, n - I),
                                                                            (F += n - I),
                                                                            (I = n);
                                                                        break;
                                                                    }
                                                                    v <= 0
                                                                        ? (F -= 2 * _)
                                                                        : (r.blit(i, I, c, F, v),
                                                                          (I += v),
                                                                          (F = o - _)),
                                                                        (y = W()),
                                                                        (L += (2 * _) / t),
                                                                        (w += y / t),
                                                                        (S = T + y - g) < 0 && (S = 0),
                                                                        r.blit(d, 0, A, T, y - S),
                                                                        (T += y);
                                                                }
                                                                r.blit(d, y - S, d, 0, S), (V = S);
                                                                var N = [];
                                                                for (l = 0; l < e.length; l++) N.push(A);
                                                                return N;
                                                            }),
                                                            B
                                                        );
                                                    });
                                            },
                                            function (e, t, n) {
                                                "use strict";
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
                                                                m_revTgt: Array(t),
                                                            },
                                                            i = 0;
                                                        i < t;
                                                        i++
                                                    ) {
                                                        for (var s = i, a = 0, o = 0; o < e; o++)
                                                            (a <<= 1), (a |= 1 & s), (s >>= 1);
                                                        n.m_revTgt[i] = a;
                                                    }
                                                    (n.twiddleRe = r.float_array(n.m_logN)),
                                                        (n.twiddleIm = r.float_array(n.m_logN));
                                                    for (var l = 1, u = 0; u < n.m_logN; u++) {
                                                        var c = 2 * l * Math.PI * n.m_invN;
                                                        (n.twiddleRe[u] = Math.cos(c)),
                                                            (n.twiddleIm[u] = Math.sin(c)),
                                                            (l <<= 1);
                                                    }
                                                    n.inplace = function (e) {
                                                        var t = n.m_re,
                                                            r = n.m_im,
                                                            i = n.m_N,
                                                            s = n.m_logN,
                                                            a = i >> 1,
                                                            o = i >> 1,
                                                            l = i;
                                                        if (e)
                                                            for (var u = 1 / i, c = 0; c < i; c++)
                                                                (t[c] *= u), (r[c] *= u);
                                                        for (var d = 0; d < s; d++) {
                                                            var _ = n.twiddleRe[d],
                                                                f = n.twiddleIm[d];
                                                            e || (f *= -1);
                                                            for (var p = 0; p < i; ) {
                                                                for (
                                                                    var h = p, m = p + o, E = 1, g = 0, A = 0;
                                                                    A < a;
                                                                    A++
                                                                ) {
                                                                    var I = t[h],
                                                                        T = r[h],
                                                                        S = t[m],
                                                                        y = r[m];
                                                                    (t[h] = I + S),
                                                                        (r[h] = T + y),
                                                                        (S = I - S),
                                                                        (y = T - y),
                                                                        (t[m] = S * E - y * g),
                                                                        (r[m] = S * g + y * E),
                                                                        h++,
                                                                        m++;
                                                                    var v = E;
                                                                    (E = E * _ - g * f), (g = v * f + g * _);
                                                                }
                                                                p += l;
                                                            }
                                                            (a >>= 1), (o >>= 1), (l >>= 1);
                                                        }
                                                        for (var N, C, R = n.m_revTgt, O = 0; O < i; O++)
                                                            R[O] > O &&
                                                                ((C = t[(N = R[O])]),
                                                                (t[N] = t[O]),
                                                                (t[O] = C),
                                                                (C = r[N]),
                                                                (r[N] = r[O]),
                                                                (r[O] = C));
                                                    };
                                                    var d = t >> 1;
                                                    return (
                                                        (n.unpack = function (e, r, i, s) {
                                                            (e[0] = n.m_re[0]),
                                                                (i[0] = n.m_im[0]),
                                                                (r[0] = s[0] = 0),
                                                                (e[d] = n.m_re[d]),
                                                                (i[d] = n.m_im[d]),
                                                                (r[d] = s[d] = 0);
                                                            for (var a = 1; a < d; a++)
                                                                (e[a] = (n.m_re[a] + n.m_re[t - a]) / 2),
                                                                    (r[a] = (n.m_im[a] - n.m_im[t - a]) / 2),
                                                                    (i[a] = (n.m_im[a] + n.m_im[t - a]) / 2),
                                                                    (s[a] = (-n.m_re[a] + n.m_re[t - a]) / 2);
                                                        }),
                                                        (n.repack = function (e, r, i, s) {
                                                            (n.m_re[0] = e[0]),
                                                                (n.m_im[0] = i[0]),
                                                                (n.m_re[d] = e[d]),
                                                                (n.m_im[d] = i[d]);
                                                            for (var a = 1; a < d; a++)
                                                                (n.m_re[a] = e[a] - s[a]),
                                                                    (n.m_im[a] = r[a] + i[a]),
                                                                    (n.m_re[t - a] = e[a] + s[a]),
                                                                    (n.m_im[t - a] = -r[a] + i[a]);
                                                        }),
                                                        n
                                                    );
                                                };
                                            },
                                        ]);
                                    })());
                            },
                        ]));
                },
                893: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913));
                    t.default = (function () {
                        function e(t) {
                            (0, i.default)(this, e),
                                (this.lower = t.start),
                                (this.upper = t.end),
                                (this.onprocess = t.process),
                                (this.position = 0),
                                (this.n = 0);
                        }
                        return (
                            (0, s.default)(e, [
                                {
                                    key: "iterate",
                                    value: function () {
                                        return (
                                            this.n++,
                                            (this.position = Math.floor((this.lower + this.upper) / 2)),
                                            this.onprocess(this.lower, this.upper, this.position)
                                        );
                                    },
                                },
                                {
                                    key: "start",
                                    value: function () {
                                        return this.iterate(), this;
                                    },
                                },
                                {
                                    key: "left",
                                    value: function () {
                                        return (this.upper = this.position), this.iterate();
                                    },
                                },
                                {
                                    key: "right",
                                    value: function () {
                                        return (this.lower = this.position), this.iterate();
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                523: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913));
                    t.default = new ((function () {
                        function e() {
                            (0, i.default)(this, e);
                        }
                        return (
                            (0, s.default)(e, [
                                {
                                    key: "hasTypedArrays",
                                    value: function () {
                                        return !!window.Uint32Array;
                                    },
                                },
                                {
                                    key: "hasWebAssembly",
                                    value: function () {
                                        return !!window.WebAssembly;
                                    },
                                },
                                {
                                    key: "hasWebAudio",
                                    value: function () {
                                        return !(!window.AudioContext && !window.webkitAudioContext);
                                    },
                                },
                                {
                                    key: "hasFlash",
                                    value: function () {
                                        return !1;
                                    },
                                },
                                {
                                    key: "hasAudio",
                                    value: function () {
                                        return this.hasWebAudio();
                                    },
                                },
                                {
                                    key: "isBlacklisted",
                                    value: function (e) {
                                        return !1;
                                    },
                                },
                                {
                                    key: "isSlow",
                                    value: function () {
                                        return !1;
                                    },
                                },
                                {
                                    key: "isTooSlow",
                                    value: function () {
                                        return !1;
                                    },
                                },
                                {
                                    key: "supported",
                                    value: function (e) {
                                        return "OGVDecoder" === e
                                            ? this.hasWebAssembly()
                                            : "OGVPlayer" === e && this.supported("OGVDecoder") && this.hasAudio();
                                    },
                                },
                            ]),
                            e
                        );
                    })())();
                },
                408: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913)),
                        a = r(n(205)),
                        o = r(n(585)),
                        l = r(n(754));
                    function u(e) {
                        var t = (function () {
                            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, l.default)(e);
                            return (
                                (n = t
                                    ? Reflect.construct(r, arguments, (0, l.default)(this).constructor)
                                    : r.apply(this, arguments)),
                                (0, o.default)(this, n)
                            );
                        };
                    }
                    t.default = (function (e) {
                        (0, a.default)(n, e);
                        var t = u(n);
                        function n() {
                            return (0, i.default)(this, n), t.apply(this, arguments);
                        }
                        return (
                            (0, s.default)(n, [
                                {
                                    key: "init",
                                    value: function (e) {
                                        this.proxy("init", [], e);
                                    },
                                },
                                {
                                    key: "processHeader",
                                    value: function (e, t) {
                                        this.proxy("processHeader", [e], t, [e]);
                                    },
                                },
                                {
                                    key: "processAudio",
                                    value: function (e, t) {
                                        this.proxy("processAudio", [e], t, [e]);
                                    },
                                },
                                {
                                    key: "close",
                                    value: function () {
                                        this.terminate();
                                    },
                                },
                            ]),
                            n
                        );
                    })(
                        (0, r(n(580)).default)({
                            loadedMetadata: !1,
                            audioFormat: null,
                            audioBuffer: null,
                            cpuTime: 0,
                        }),
                    );
                },
                319: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913)),
                        a = r(n(205)),
                        o = r(n(585)),
                        l = r(n(754));
                    function u(e) {
                        var t = (function () {
                            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, l.default)(e);
                            return (
                                (n = t
                                    ? Reflect.construct(r, arguments, (0, l.default)(this).constructor)
                                    : r.apply(this, arguments)),
                                (0, o.default)(this, n)
                            );
                        };
                    }
                    t.default = (function (e) {
                        (0, a.default)(n, e);
                        var t = u(n);
                        function n() {
                            return (0, i.default)(this, n), t.apply(this, arguments);
                        }
                        return (
                            (0, s.default)(n, [
                                {
                                    key: "init",
                                    value: function (e) {
                                        this.proxy("init", [], e);
                                    },
                                },
                                {
                                    key: "processHeader",
                                    value: function (e, t) {
                                        this.proxy("processHeader", [e], t, [e]);
                                    },
                                },
                                {
                                    key: "processFrame",
                                    value: function (e, t) {
                                        this.proxy("processFrame", [e], t, [e]);
                                    },
                                },
                                {
                                    key: "close",
                                    value: function () {
                                        this.terminate();
                                    },
                                },
                                {
                                    key: "sync",
                                    value: function () {
                                        this.proxy("sync", [], function () {});
                                    },
                                },
                                {
                                    key: "recycleFrame",
                                    value: function (e) {
                                        this.proxy("recycleFrame", [e], function () {}, [
                                            e.y.bytes.buffer,
                                            e.u.bytes.buffer,
                                            e.v.bytes.buffer,
                                        ]);
                                    },
                                },
                            ]),
                            n
                        );
                    })(
                        (0, r(n(580)).default)({
                            loadedMetadata: !1,
                            videoFormat: null,
                            frameBuffer: null,
                            cpuTime: 0,
                        }),
                    );
                },
                445: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913)),
                        a = r(n(539)),
                        o = "1.8.9-20220406232920-cb5f7ff",
                        l = {
                            OGVDemuxerOggW: "ogv-demuxer-ogg-wasm.js",
                            OGVDemuxerWebMW: "ogv-demuxer-webm-wasm.js",
                            OGVDecoderAudioOpusW: "ogv-decoder-audio-opus-wasm.js",
                            OGVDecoderAudioVorbisW: "ogv-decoder-audio-vorbis-wasm.js",
                            OGVDecoderVideoTheoraW: "ogv-decoder-video-theora-wasm.js",
                            OGVDecoderVideoVP8W: "ogv-decoder-video-vp8-wasm.js",
                            OGVDecoderVideoVP8MTW: "ogv-decoder-video-vp8-mt-wasm.js",
                            OGVDecoderVideoVP9W: "ogv-decoder-video-vp9-wasm.js",
                            OGVDecoderVideoVP9SIMDW: "ogv-decoder-video-vp9-simd-wasm.js",
                            OGVDecoderVideoVP9MTW: "ogv-decoder-video-vp9-mt-wasm.js",
                            OGVDecoderVideoVP9SIMDMTW: "ogv-decoder-video-vp9-simd-mt-wasm.js",
                            OGVDecoderVideoAV1W: "ogv-decoder-video-av1-wasm.js",
                            OGVDecoderVideoAV1SIMDW: "ogv-decoder-video-av1-simd-wasm.js",
                            OGVDecoderVideoAV1MTW: "ogv-decoder-video-av1-mt-wasm.js",
                            OGVDecoderVideoAV1SIMDMTW: "ogv-decoder-video-av1-simd-mt-wasm.js",
                        };
                    t.default = (function () {
                        function e() {
                            (0, i.default)(this, e), (this.base = this.defaultBase());
                        }
                        return (
                            (0, s.default)(e, [
                                { key: "defaultBase", value: function () {} },
                                {
                                    key: "wasmSupported",
                                    value: function () {
                                        return a.default.wasmSupported();
                                    },
                                },
                                {
                                    key: "scriptForClass",
                                    value: function (e) {
                                        return l[e];
                                    },
                                },
                                {
                                    key: "urlForClass",
                                    value: function (e) {
                                        var t = this.scriptForClass(e);
                                        if (t) return this.urlForScript(t);
                                        throw Error("asked for URL for unknown class " + e);
                                    },
                                },
                                {
                                    key: "urlForScript",
                                    value: function (e) {
                                        if (e) {
                                            var t = this.base;
                                            return (
                                                void 0 === t ? (t = "") : (t += "/"),
                                                t + e + "?version=" + encodeURIComponent(o)
                                            );
                                        }
                                        throw Error("asked for URL for unknown script " + e);
                                    },
                                },
                                {
                                    key: "loadClass",
                                    value: function (e, t, n) {
                                        var r = this;
                                        n = n || {};
                                        var i = this.getGlobal(),
                                            s = this.urlForClass(e),
                                            a = function (t) {
                                                return (
                                                    ((t = t || {}).locateFile = function (e) {
                                                        return "data:" === e.slice(0, 5) ? e : r.urlForScript(e);
                                                    }),
                                                    (t.mainScriptUrlOrBlob =
                                                        r.scriptForClass(e) + "?version=" + encodeURIComponent(o)),
                                                    i[e](t)
                                                );
                                            };
                                        "function" == typeof i[e]
                                            ? t(a)
                                            : this.loadScript(s, function () {
                                                  t(a);
                                              });
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                964: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913)),
                        a = r(n(525)),
                        o = r(n(205)),
                        l = r(n(585)),
                        u = r(n(754)),
                        c = r(n(408)),
                        d = r(n(319)),
                        _ = r(n(445));
                    function f(e) {
                        var t = (function () {
                            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, u.default)(e);
                            return (
                                (n = t
                                    ? Reflect.construct(r, arguments, (0, u.default)(this).constructor)
                                    : r.apply(this, arguments)),
                                (0, l.default)(this, n)
                            );
                        };
                    }
                    var p = {
                            audio: { proxy: c.default, worker: "ogv-worker-audio.js" },
                            video: { proxy: d.default, worker: "ogv-worker-video.js" },
                        },
                        h = {
                            OGVDecoderAudioOpusW: "audio",
                            OGVDecoderAudioVorbisW: "audio",
                            OGVDecoderVideoTheoraW: "video",
                            OGVDecoderVideoVP8W: "video",
                            OGVDecoderVideoVP9W: "video",
                            OGVDecoderVideoVP9SIMDW: "video",
                            OGVDecoderVideoAV1W: "video",
                            OGVDecoderVideoAV1SIMDW: "video",
                        },
                        m = new ((function (e) {
                            (0, o.default)(n, e);
                            var t = f(n);
                            function n() {
                                var e;
                                return (
                                    (0, i.default)(this, n),
                                    ((e = t.call(this)).scriptStatus = {}),
                                    (e.scriptCallbacks = {}),
                                    e
                                );
                            }
                            return (
                                (0, s.default)(n, [
                                    {
                                        key: "getGlobal",
                                        value: function () {
                                            return window;
                                        },
                                    },
                                    {
                                        key: "defaultBase",
                                        value: function () {
                                            for (
                                                var e,
                                                    t,
                                                    n = document.querySelectorAll("script"),
                                                    r = /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/,
                                                    i = 0;
                                                i < n.length;
                                                i++
                                            )
                                                if ((e = n[i].getAttribute("src")) && (t = e.match(r))) return t[1];
                                        },
                                    },
                                    {
                                        key: "loadClass",
                                        value: function (e, t, r) {
                                            (r = r || {}).worker
                                                ? this.workerProxy(e, t)
                                                : (0, a.default)((0, u.default)(n.prototype), "loadClass", this).call(
                                                      this,
                                                      e,
                                                      t,
                                                      r,
                                                  );
                                        },
                                    },
                                    {
                                        key: "loadScript",
                                        value: function (e, t) {
                                            var n = this;
                                            if ("done" == this.scriptStatus[e]) t();
                                            else if ("loading" == this.scriptStatus[e]) this.scriptCallbacks[e].push(t);
                                            else {
                                                (this.scriptStatus[e] = "loading"), (this.scriptCallbacks[e] = [t]);
                                                var r = document.createElement("script"),
                                                    i = function (t) {
                                                        var r = n.scriptCallbacks[e];
                                                        delete n.scriptCallbacks[e],
                                                            (n.scriptStatus[e] = "done"),
                                                            r.forEach(function (e) {
                                                                e();
                                                            });
                                                    };
                                                r.addEventListener("load", i),
                                                    r.addEventListener("error", i),
                                                    (r.src = e),
                                                    document.querySelector("head").appendChild(r);
                                            }
                                        },
                                    },
                                    {
                                        key: "workerProxy",
                                        value: function (e, t) {
                                            var n = p[h[e]];
                                            if (!n) throw Error("Requested worker for class with no proxy: " + e);
                                            var r,
                                                i = n.proxy,
                                                s = n.worker,
                                                a = this.urlForScript(this.scriptForClass(e)),
                                                o = this.urlForScript(s),
                                                l = function (t) {
                                                    return new i(r, e, t);
                                                };
                                            if (o.match(/^https?:|\/\//i)) {
                                                var u,
                                                    c,
                                                    d,
                                                    _,
                                                    f,
                                                    E = function () {
                                                        if (1 == g && 1 == A) {
                                                            var e =
                                                                d +
                                                                " " +
                                                                _ +
                                                                "\nOGVLoader.base = " +
                                                                JSON.stringify(m.base);
                                                            try {
                                                                f = new Blob([e], { type: "application/javascript" });
                                                            } catch (t) {
                                                                (window.BlobBuilder =
                                                                    window.BlobBuilder ||
                                                                    window.WebKitBlobBuilder ||
                                                                    window.MozBlobBuilder),
                                                                    (f = new BlobBuilder()).append(e),
                                                                    (f = f.getBlob());
                                                            }
                                                            (r = new Worker(URL.createObjectURL(f))),
                                                                t(function (e) {
                                                                    return Promise.resolve(new l(e));
                                                                });
                                                        }
                                                    },
                                                    g = !1,
                                                    A = !1;
                                                (u = new XMLHttpRequest()).open("GET", a, !0),
                                                    (u.onreadystatechange = function () {
                                                        4 == u.readyState &&
                                                            200 == u.status &&
                                                            ((d = u.responseText), (g = !0), E());
                                                    }),
                                                    u.send(),
                                                    (c = new XMLHttpRequest()).open("GET", o, !0),
                                                    (c.onreadystatechange = function () {
                                                        4 == c.readyState &&
                                                            200 == c.status &&
                                                            ((_ = c.responseText), (A = !0), E());
                                                    }),
                                                    c.send();
                                            } else
                                                (r = new Worker(o)),
                                                    t(function (e) {
                                                        return Promise.resolve(new l(e));
                                                    });
                                        },
                                    },
                                ]),
                                n
                            );
                        })(_.default))();
                    t.default = m;
                },
                759: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(913)),
                        s = r(n(575)),
                        a = r(n(309)),
                        o = {
                            MEDIA_ERR_ABORTED: 1,
                            MEDIA_ERR_NETWORK: 2,
                            MEDIA_ERR_DECODE: 3,
                            MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
                        },
                        l = (0, i.default)(function e(t, n) {
                            (0, s.default)(this, e), (this.code = t), (this.message = n);
                        });
                    (0, a.default)(l, o), (0, a.default)(l.prototype, o), (t.default = l);
                },
                278: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(913)),
                        s = r(n(575));
                    function a(e, t, n) {
                        var r = e.split(t, n).map(function (e) {
                            return (function (e) {
                                return e.replace(/^\s+/, "").replace(/\s+$/, "");
                            })(e);
                        });
                        if ("number" == typeof n) for (; r.length < n; ) r.push(null);
                        return r;
                    }
                    t.default = (0, i.default)(function e(t) {
                        (0, s.default)(this, e),
                            (t = String(t)),
                            (this.major = null),
                            (this.minor = null),
                            (this.codecs = null);
                        var n = a(t, ";");
                        if (n.length) {
                            var r = n.shift();
                            if (r) {
                                var i = a(r, "/", 2);
                                (this.major = i[0]), (this.minor = i[1]);
                            }
                            for (var o in n) {
                                var l = n[o].match(/^codecs\s*=\s*"(.*?)"$/);
                                if (l) {
                                    this.codecs = a(l[1], ",");
                                    break;
                                }
                            }
                        }
                    });
                },
                869: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913)),
                        a = r(n(506)),
                        o = r(n(205)),
                        l = r(n(585)),
                        u = r(n(754)),
                        c = r(n(8)),
                        d = r(n(731)),
                        _ = r(n(936)),
                        f = r(n(848)),
                        p = r(n(964)),
                        h = r(n(893)),
                        m = r(n(309)),
                        E = r(n(759)),
                        g = r(n(278)),
                        A = r(n(168)),
                        I = r(n(625)),
                        T = r(n(302));
                    function S(e) {
                        var t = (function () {
                            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return (
                                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                                );
                            } catch (e) {
                                return !1;
                            }
                        })();
                        return function () {
                            var n,
                                r = (0, u.default)(e);
                            return (
                                (n = t
                                    ? Reflect.construct(r, arguments, (0, u.default)(this).constructor)
                                    : r.apply(this, arguments)),
                                (0, l.default)(this, n)
                            );
                        };
                    }
                    var y,
                        v = (function () {
                            if ("function" == typeof setImmediate) return setImmediate;
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
                        N = {
                            NETWORK_EMPTY: 0,
                            NETWORK_IDLE: 1,
                            NETWORK_LOADING: 2,
                            NETWORK_NO_SOURCE: 3,
                            HAVE_NOTHING: 0,
                            HAVE_METADATA: 1,
                            HAVE_CURRENT_DATA: 2,
                            HAVE_FUTURE_DATA: 3,
                            HAVE_ENOUGH_DATA: 4,
                        },
                        C = "INITIAL",
                        R = "SEEKING_END",
                        O = "LOADED",
                        b = "PRELOAD",
                        D = "READY",
                        L = "PLAYING",
                        w = "SEEKING",
                        M = "ERROR",
                        P = "NOT_SEEKING",
                        x = "BISECT_TO_TARGET",
                        k = "BISECT_TO_KEYPOINT",
                        U = "LINEAR_TO_TARGET",
                        G = "exact",
                        F = "fast";
                    function V() {
                        var e = document.createElement("ogvjs");
                        return (
                            Object.setPrototypeOf
                                ? Object.setPrototypeOf(e, Object.getPrototypeOf(this))
                                : (e.__proto__ = this.__proto__),
                            e
                        );
                    }
                    (y =
                        "u" < typeof performance || void 0 === (0, c.default)(performance.now)
                            ? Date.now
                            : performance.now.bind(performance)),
                        (V.prototype = Object.create(HTMLElement.prototype, {}));
                    var B = (function (e) {
                        (0, o.default)(n, e);
                        var t = S(n);
                        function n(e) {
                            var r;
                            if (
                                ((0, i.default)(this, n),
                                (r = t.call(this)),
                                ((e = e || {}).base = e.base || p.default.base),
                                (r._options = e),
                                (r._instanceId = "ogvjs" + ++n.instanceCount),
                                void 0 !== e.worker
                                    ? (r._enableWorker = !!e.worker)
                                    : (r._enableWorker = !!window.Worker),
                                !p.default.wasmSupported())
                            )
                                throw Error("WebAssembly not supported");
                            return (
                                (r._enableThreading = !!e.threading),
                                (r._enableSIMD = !!e.simd),
                                (r._state = C),
                                (r._seekState = P),
                                (r._detectedType = null),
                                (r._canvas = document.createElement("canvas")),
                                (r._frameSink = null),
                                (r.className = r._instanceId),
                                (0, m.default)((0, a.default)(r), N),
                                (r._view = r._canvas),
                                (r._view.style.position = "absolute"),
                                (r._view.style.top = "0"),
                                (r._view.style.left = "0"),
                                (r._view.style.width = "100%"),
                                (r._view.style.height = "100%"),
                                (r._view.style.objectFit = "contain"),
                                r.appendChild(r._view),
                                (r._startTime = y()),
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
                                (r._currentSrc = ""),
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
                                (r._targetPerFrameTime = 1e3 / 60),
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
                                (r._poster = ""),
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
                                (r._frameParallelism = r._enableThreading
                                    ? Math.min(16, navigator.hardwareConcurrency) || 1
                                    : 0),
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
                                            return this.getAttribute("src") || "";
                                        },
                                        set: function (e) {
                                            this.setAttribute("src", e),
                                                (this._loading = !1),
                                                this._prepForLoad("interactive");
                                        },
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
                                                new A.default(e)
                                            );
                                        },
                                    },
                                    seekable: {
                                        get: function () {
                                            return new A.default(
                                                this.duration < 1 / 0 &&
                                                    this._stream &&
                                                    this._stream.seekable &&
                                                    this._codec &&
                                                    this._codec.seekable
                                                    ? [[0, this._duration]]
                                                    : [],
                                            );
                                        },
                                    },
                                    currentTime: {
                                        get: function () {
                                            return this._state == w
                                                ? this._seekTargetTime
                                                : this._codec
                                                  ? this._state != L || this._paused
                                                      ? this._initialPlaybackOffset
                                                      : this._getPlaybackTime()
                                                  : this._initialSeekTime;
                                        },
                                        set: function (e) {
                                            this._seek(e, G);
                                        },
                                    },
                                    duration: {
                                        get: function () {
                                            return this._codec && this._codec.loadedMetadata
                                                ? null !== this._duration
                                                    ? this._duration
                                                    : 1 / 0
                                                : NaN;
                                        },
                                    },
                                    paused: {
                                        get: function () {
                                            return this._paused;
                                        },
                                    },
                                    ended: {
                                        get: function () {
                                            return this._ended;
                                        },
                                    },
                                    seeking: {
                                        get: function () {
                                            return this._state == w;
                                        },
                                    },
                                    muted: {
                                        get: function () {
                                            return this._muted;
                                        },
                                        set: function (e) {
                                            (this._muted = e),
                                                this._audioFeeder
                                                    ? (this._audioFeeder.muted = this._muted)
                                                    : this._started &&
                                                      !this._muted &&
                                                      this._codec &&
                                                      this._codec.hasAudio &&
                                                      (this._log("unmuting: switching from timer to audio clock"),
                                                      this._initAudioFeeder(),
                                                      this._startPlayback(this._audioEndTimestamp)),
                                                this._fireEventAsync("volumechange");
                                        },
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
                                                    (r.className = "ogvjs-poster"),
                                                    (r.style.position = "absolute"),
                                                    (r.style.top = "0"),
                                                    (r.style.left = "0"),
                                                    (r.style.width = "100%"),
                                                    (r.style.height = "100%"),
                                                    (r.style.objectFit = "contain"),
                                                    (r.style.visibility = "hidden"),
                                                    r.addEventListener("load", function () {
                                                        t._thumbnail === r &&
                                                            (n.styleManager.appendRule("." + t._instanceId, {
                                                                width: r.naturalWidth + "px",
                                                                height: r.naturalHeight + "px",
                                                            }),
                                                            (r.style.visibility = "visible"));
                                                    }),
                                                    (this._thumbnail = r),
                                                    this.appendChild(r);
                                            }
                                        },
                                    },
                                    videoWidth: {
                                        get: function () {
                                            return this._videoInfo ? this._videoInfo.displayWidth : 0;
                                        },
                                    },
                                    videoHeight: {
                                        get: function () {
                                            return this._videoInfo ? this._videoInfo.displayHeight : 0;
                                        },
                                    },
                                    ogvjsVideoFrameRate: {
                                        get: function () {
                                            return this._videoInfo
                                                ? 0 == this._videoInfo.fps
                                                    ? this._totalFrameCount / (this._totalFrameTime / 1e3)
                                                    : this._videoInfo.fps
                                                : 0;
                                        },
                                    },
                                    ogvjsAudioChannels: {
                                        get: function () {
                                            return this._audioInfo ? this._audioInfo.channels : 0;
                                        },
                                    },
                                    ogvjsAudioSampleRate: {
                                        get: function () {
                                            return this._audioInfo ? this._audioInfo.rate : 0;
                                        },
                                    },
                                    width: {
                                        get: function () {
                                            return this._width;
                                        },
                                        set: function (e) {
                                            (this._width = parseInt(e, 10)), (this.style.width = this._width + "px");
                                        },
                                    },
                                    height: {
                                        get: function () {
                                            return this._height;
                                        },
                                        set: function (e) {
                                            (this._height = parseInt(e, 10)), (this.style.height = this._height + "px");
                                        },
                                    },
                                    autoplay: {
                                        get: function () {
                                            return !1;
                                        },
                                        set: function (e) {},
                                    },
                                    controls: {
                                        get: function () {
                                            return !1;
                                        },
                                        set: function (e) {},
                                    },
                                    loop: {
                                        get: function () {
                                            return !1;
                                        },
                                        set: function (e) {},
                                    },
                                    crossOrigin: {
                                        get: function () {
                                            return this._crossOrigin;
                                        },
                                        set: function (e) {
                                            switch (e) {
                                                case null:
                                                    (this._crossOrigin = e), this.removeAttribute("crossorigin");
                                                    break;
                                                default:
                                                    e = "anonymous";
                                                case "":
                                                case "anonymous":
                                                case "use-credentials":
                                                    (this._crossOrigin = e), this.setAttribute("crossorigin", e);
                                            }
                                            this._thumbnail && (this._thumbnail.crossOrigin = e);
                                        },
                                    },
                                    currentSrc: {
                                        get: function () {
                                            return this._currentSrc;
                                        },
                                    },
                                    defaultMuted: {
                                        get: function () {
                                            return !1;
                                        },
                                    },
                                    defaultPlaybackRate: {
                                        get: function () {
                                            return 1;
                                        },
                                    },
                                    error: {
                                        get: function () {
                                            return this._state === M
                                                ? this._mediaError
                                                    ? this._mediaError
                                                    : new E.default("unknown error occurred in media procesing")
                                                : null;
                                        },
                                    },
                                    preload: {
                                        get: function () {
                                            return this.getAttribute("preload") || "";
                                        },
                                        set: function (e) {
                                            this.setAttribute("preload", e);
                                        },
                                    },
                                    readyState: {
                                        get: function () {
                                            return this._stream && this._codec && this._codec.loadedMetadata
                                                ? n.HAVE_ENOUGH_DATA
                                                : n.HAVE_NOTHING;
                                        },
                                    },
                                    networkState: {
                                        get: function () {
                                            return this._stream
                                                ? this._stream.waiting
                                                    ? n.NETWORK_LOADING
                                                    : n.NETWORK_IDLE
                                                : this.readyState == n.HAVE_NOTHING
                                                  ? n.NETWORK_EMPTY
                                                  : n.NETWORK_NO_SOURCE;
                                        },
                                    },
                                    playbackRate: {
                                        get: function () {
                                            return this._playbackRate;
                                        },
                                        set: function (e) {
                                            var t = Number(e) || 1;
                                            this._audioFeeder
                                                ? (this._audioFeeder.tempo = t)
                                                : this._paused ||
                                                  ((this._initialPlaybackOffset = this._getPlaybackTime()),
                                                  (this._initialPlaybackPosition = (t * y()) / 1e3)),
                                                (this._playbackRate = t),
                                                this._fireEventAsync("ratechange");
                                        },
                                    },
                                    played: {
                                        get: function () {
                                            return new A.default([[0, this.currentTime]]);
                                        },
                                    },
                                    volume: {
                                        get: function () {
                                            return this._volume;
                                        },
                                        set: function (e) {
                                            (this._volume = +e),
                                                this._audioFeeder && (this._audioFeeder.volume = this._volume),
                                                this._fireEventAsync("volumechange");
                                        },
                                    },
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
                            (0, s.default)(
                                n,
                                [
                                    {
                                        key: "_time",
                                        value: function (e) {
                                            var t = y();
                                            e();
                                            var n = y() - t;
                                            return (this._lastFrameDecodeTime += n), n;
                                        },
                                    },
                                    {
                                        key: "_log",
                                        value: function (e) {
                                            var t = this._options;
                                            if (t.debug) {
                                                var n = y() - this._startTime;
                                                (t.debugFilter && !e.match(t.debugFilter)) ||
                                                    console.log("[" + Math.round(10 * n) / 10 + "ms] " + e);
                                            }
                                        },
                                    },
                                    {
                                        key: "_fireEvent",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            this._log("fireEvent " + e);
                                            var n,
                                                r = "function" == typeof Event;
                                            for (var i in (r
                                                ? (n = new CustomEvent(e))
                                                : (n = document.createEvent("Event")).initEvent(e, !1, !1),
                                            t))
                                                t.hasOwnProperty(i) && (n[i] = t[i]);
                                            var s = this.dispatchEvent(n);
                                            !r && "resize" === e && this.onresize && s && this.onresize.call(this, n);
                                        },
                                    },
                                    {
                                        key: "_fireEventAsync",
                                        value: function (e) {
                                            var t = this,
                                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                            this._log("fireEventAsync " + e),
                                                v(function () {
                                                    t._fireEvent(e, n);
                                                });
                                        },
                                    },
                                    {
                                        key: "_initAudioFeeder",
                                        value: function () {
                                            var e = this,
                                                t = this._options,
                                                n = { bufferSize: 8192 };
                                            t.audioContext && (n.audioContext = t.audioContext),
                                                t.audioDestination && (n.output = t.audioDestination),
                                                t.audioBackendFactory && (n.backendFactory = t.audioBackendFactory);
                                            var r = (this._audioFeeder = new f.default(n));
                                            r.init(this._audioInfo.channels, this._audioInfo.rate),
                                                this.onaudiofeedercreated &&
                                                    this.onaudiofeedercreated(this._audioFeeder),
                                                (r.bufferThreshold = 1),
                                                (r.volume = this.volume),
                                                (r.muted = this.muted),
                                                (r.tempo = this.playbackRate),
                                                (r.onbufferlow = function () {
                                                    e._log("onbufferlow"),
                                                        (e._stream && (e._stream.buffering || e._stream.seeking)) ||
                                                            e._pendingAudio ||
                                                            e._pingProcessing();
                                                }),
                                                (r.onstarved = function () {
                                                    e._dataEnded
                                                        ? e._log("onstarved: appear to have reached end of audio")
                                                        : (e._log("onstarved: halting audio due to starvation"),
                                                          e._stopPlayback(),
                                                          (e._prebufferingAudio = !0)),
                                                        e._isProcessing() || e._pingProcessing(0);
                                                });
                                        },
                                    },
                                    {
                                        key: "_startPlayback",
                                        value: function (e) {
                                            if (this._audioFeeder) {
                                                this._audioFeeder.start();
                                                var t = this._audioFeeder.getPlaybackState();
                                                this._initialPlaybackPosition = t.playbackPosition;
                                            } else this._initialPlaybackPosition = (this._playbackRate * y()) / 1e3;
                                            void 0 !== e && (this._initialPlaybackOffset = e),
                                                (this._prebufferingAudio = !1),
                                                this._log(
                                                    "continuing at " +
                                                        this._initialPlaybackPosition +
                                                        ", " +
                                                        this._initialPlaybackOffset,
                                                );
                                        },
                                    },
                                    {
                                        key: "_stopPlayback",
                                        value: function () {
                                            (this._initialPlaybackOffset = this._getPlaybackTime()),
                                                this._log("pausing at " + this._initialPlaybackOffset),
                                                this._audioFeeder && this._audioFeeder.stop();
                                        },
                                    },
                                    {
                                        key: "_getPlaybackTime",
                                        value: function (e) {
                                            return this._prebufferingAudio || this._paused
                                                ? this._initialPlaybackOffset
                                                : (this._audioFeeder
                                                      ? (e = e || this._audioFeeder.getPlaybackState()).playbackPosition
                                                      : (this._playbackRate * y()) / 1e3) -
                                                      this._initialPlaybackPosition +
                                                      this._initialPlaybackOffset;
                                        },
                                    },
                                    {
                                        key: "_stopVideo",
                                        value: function () {
                                            this._log("STOPPING"),
                                                (this._state = C),
                                                (this._seekState = P),
                                                (this._started = !1),
                                                (this._ended = !1),
                                                (this._frameEndTimestamp = 0),
                                                (this._audioEndTimestamp = 0),
                                                (this._lastFrameDecodeTime = 0),
                                                (this._prebufferingAudio = !1),
                                                this._actionQueue.splice(0, this._actionQueue.length),
                                                this._stream &&
                                                    (this._stream.abort(),
                                                    (this._stream = null),
                                                    (this._streamEnded = !1)),
                                                this._codec &&
                                                    (this._codec.close(),
                                                    (this._codec = null),
                                                    (this._pendingFrame = 0),
                                                    (this._pendingAudio = 0),
                                                    (this._dataEnded = !1)),
                                                (this._videoInfo = null),
                                                (this._audioInfo = null),
                                                this._audioFeeder &&
                                                    (this._audioFeeder.close(), (this._audioFeeder = null)),
                                                this._nextProcessingTimer &&
                                                    (clearTimeout(this._nextProcessingTimer),
                                                    (this._nextProcessingTimer = null)),
                                                this._nextFrameTimer &&
                                                    (clearTimeout(this._nextFrameTimer), (this._nextFrameTimer = null)),
                                                this._frameSink && (this._frameSink.clear(), (this._frameSink = null)),
                                                this._decodedFrames && (this._decodedFrames = []),
                                                this._pendingFrames && (this._pendingFrames = []),
                                                (this._initialSeekTime = 0),
                                                (this._initialPlaybackPosition = 0),
                                                (this._initialPlaybackOffset = 0),
                                                (this._duration = null);
                                        },
                                    },
                                    {
                                        key: "_doFrameComplete",
                                        value: function () {
                                            var e = this,
                                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            this._startedPlaybackInDocument &&
                                                !document.body.contains(this) &&
                                                v(function () {
                                                    e.stop();
                                                });
                                            var n = y(),
                                                r = n - this._lastFrameTimestamp,
                                                i = this._actualPerFrameTime - this._targetPerFrameTime;
                                            (this._totalJitter += Math.abs(i)), (this._playTime += r);
                                            var s = {
                                                cpuTime: this._lastFrameDecodeTime,
                                                drawingTime: this._drawingTime - this._lastFrameDrawingTime,
                                                bufferTime: this._bufferTime - this._lastFrameBufferTime,
                                                proxyTime: this._proxyTime - this._lastFrameProxyTime,
                                                demuxerTime: 0,
                                                videoTime: 0,
                                                audioTime: 0,
                                                clockTime: this._actualPerFrameTime,
                                                late: t.dropped,
                                                dropped: t.dropped,
                                            };
                                            function a(e) {
                                                return Math.round(10 * e) / 10;
                                            }
                                            this._codec &&
                                                ((s.demuxerTime =
                                                    this._codec.demuxerCpuTime - this._lastFrameDemuxerCpuTime),
                                                (s.videoTime +=
                                                    this._currentVideoCpuTime - this._lastFrameVideoCpuTime),
                                                (s.audioTime +=
                                                    this._codec.audioCpuTime - this._lastFrameAudioCpuTime)),
                                                (s.cpuTime += s.demuxerTime),
                                                (this._lastFrameDecodeTime = 0),
                                                (this._lastFrameTimestamp = n),
                                                this._codec
                                                    ? ((this._lastFrameVideoCpuTime = this._currentVideoCpuTime),
                                                      (this._lastFrameAudioCpuTime = this._codec.audioCpuTime),
                                                      (this._lastFrameDemuxerCpuTime = this._codec.demuxerCpuTime))
                                                    : ((this._lastFrameVideoCpuTime = 0),
                                                      (this._lastFrameAudioCpuTime = 0),
                                                      (this._lastFrameDemuxerCpuTime = 0)),
                                                (this._lastFrameDrawingTime = this._drawingTime),
                                                (this._lastFrameBufferTime = this._bufferTime),
                                                (this._lastFrameProxyTime = this._proxyTime),
                                                this._log(
                                                    "drew frame " +
                                                        t.frameEndTimestamp +
                                                        ": clock time " +
                                                        a(r) +
                                                        " (jitter " +
                                                        a(i) +
                                                        ") cpu: " +
                                                        a(s.cpuTime) +
                                                        " (mux: " +
                                                        a(s.demuxerTime) +
                                                        " buf: " +
                                                        a(s.bufferTime) +
                                                        " draw: " +
                                                        a(s.drawingTime) +
                                                        " proxy: " +
                                                        a(s.proxyTime) +
                                                        ") vid: " +
                                                        a(s.videoTime) +
                                                        " aud: " +
                                                        a(s.audioTime),
                                                ),
                                                this._fireEventAsync("framecallback", s),
                                                (!this._lastTimeUpdate ||
                                                    n - this._lastTimeUpdate >= this._timeUpdateInterval) &&
                                                    ((this._lastTimeUpdate = n), this._fireEventAsync("timeupdate")),
                                                this._codec && t.yCbCrBuffer && this._codec.recycleFrame(t.yCbCrBuffer);
                                        },
                                    },
                                    {
                                        key: "_seekStream",
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
                                        },
                                    },
                                    {
                                        key: "_onStreamError",
                                        value: function (e) {
                                            "AbortError" === e.name
                                                ? this._log("i/o promise canceled; ignoring")
                                                : (this._log("i/o error: " + e),
                                                  (this._mediaError = new E.default(
                                                      E.default.MEDIA_ERR_NETWORK,
                                                      String(e),
                                                  )),
                                                  (this._state = M),
                                                  this._stopPlayback());
                                        },
                                    },
                                    {
                                        key: "_seek",
                                        value: function (e, t) {
                                            var n = this;
                                            if (
                                                (this._log("requested seek to " + e + ", mode " + t),
                                                this.readyState == this.HAVE_NOTHING)
                                            )
                                                return (
                                                    this._log("not yet loaded; saving seek position for later"),
                                                    void (this._initialSeekTime = e)
                                                );
                                            if (this._stream && !this._stream.seekable)
                                                throw Error("Cannot seek a non-seekable stream");
                                            if (this._codec && !this._codec.seekable)
                                                throw Error("Cannot seek in a non-seekable file");
                                            var r = function (r) {
                                                n._stream && n._stream.buffering && n._stream.abort(),
                                                    n._stream && n._stream.seeking && n._stream.abort(),
                                                    n._actionQueue.splice(0, n._actionQueue.length),
                                                    n._stopPlayback(),
                                                    (n._prebufferingAudio = !1),
                                                    n._audioFeeder && n._audioFeeder.flush(),
                                                    (n._state = w),
                                                    (n._seekTargetTime = e),
                                                    (n._seekMode = t),
                                                    n._codec ? n._codec.flush(r) : r();
                                            };
                                            r(function () {
                                                n._isProcessing() || n._pingProcessing(0);
                                            }),
                                                this._actionQueue.push(function () {
                                                    r(function () {
                                                        n._doSeek(e);
                                                    });
                                                });
                                        },
                                    },
                                    {
                                        key: "_doSeek",
                                        value: function (e) {
                                            var t = this;
                                            (this._streamEnded = !1),
                                                (this._dataEnded = !1),
                                                (this._ended = !1),
                                                (this._state = w),
                                                (this._seekTargetTime = e),
                                                (this._lastSeekPosition = -1),
                                                (this._decodedFrames = []),
                                                (this._pendingFrames = []),
                                                (this._pendingFrame = 0),
                                                (this._pendingAudio = 0),
                                                (this._didSeek = !1),
                                                this._codec.seekToKeypoint(e, function (n) {
                                                    n
                                                        ? ((t._seekState = U),
                                                          t._fireEventAsync("seeking"),
                                                          t._didSeek || t._pingProcessing())
                                                        : t._codec.getKeypointOffset(e, function (e) {
                                                              e > 0
                                                                  ? ((t._seekState = U), t._seekStream(e))
                                                                  : ((t._seekState = x),
                                                                    t._startBisection(t._seekTargetTime)),
                                                                  t._fireEventAsync("seeking");
                                                          });
                                                });
                                        },
                                    },
                                    {
                                        key: "_startBisection",
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
                                                    },
                                                })),
                                                this._seekBisector.start();
                                        },
                                    },
                                    {
                                        key: "_continueSeekedPlayback",
                                        value: function () {
                                            var e = this;
                                            (this._seekState = P),
                                                (this._state = D),
                                                (this._frameEndTimestamp = this._codec.frameTimestamp),
                                                (this._audioEndTimestamp = this._codec.audioTimestamp),
                                                this._codec.hasAudio
                                                    ? (this._seekTargetTime = this._codec.audioTimestamp)
                                                    : (this._seekTargetTime = this._codec.frameTimestamp),
                                                (this._initialPlaybackOffset = this._seekTargetTime);
                                            var t = function () {
                                                (e._lastTimeUpdate = e._seekTargetTime),
                                                    e._fireEventAsync("timeupdate"),
                                                    e._fireEventAsync("seeked"),
                                                    e._isProcessing() || e._pingProcessing();
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
                                        },
                                    },
                                    {
                                        key: "_drawFrame",
                                        value: function (e) {
                                            this._thumbnail &&
                                                (this.removeChild(this._thumbnail), (this._thumbnail = null)),
                                                this._frameSink.drawFrame(e);
                                        },
                                    },
                                    {
                                        key: "_doProcessLinearSeeking",
                                        value: function () {
                                            var e,
                                                t = this;
                                            if (
                                                ((e = this._codec.hasVideo ? this._targetPerFrameTime / 1e3 : 1 / 256),
                                                this._codec.hasVideo)
                                            ) {
                                                if (this._pendingFrame) return;
                                                if (!this._codec.frameReady)
                                                    return void this._codec.process(function (e) {
                                                        e
                                                            ? t._pingProcessing()
                                                            : t._streamEnded
                                                              ? (t._log("stream ended during linear seeking on video"),
                                                                (t._dataEnded = !0),
                                                                t._continueSeekedPlayback())
                                                              : t._readBytesAndWait();
                                                    });
                                                if (
                                                    this._seekMode === F &&
                                                    this._codec.keyframeTimestamp == this._codec.frameTimestamp
                                                )
                                                    return void this._continueSeekedPlayback();
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
                                                                    frameEndTimestamp: n,
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
                                                          e
                                                              ? t._pingProcessing()
                                                              : t._streamEnded
                                                                ? (t._log(
                                                                      "stream ended during linear seeking on audio",
                                                                  ),
                                                                  (t._dataEnded = !0),
                                                                  t._continueSeekedPlayback())
                                                                : t._readBytesAndWait();
                                                      });
                                            }
                                        },
                                    },
                                    {
                                        key: "_doProcessBisectionSeek",
                                        value: function () {
                                            var e,
                                                t,
                                                n = this;
                                            if (this._codec.hasVideo)
                                                (t = this._codec.frameTimestamp), (e = this._targetPerFrameTime / 1e3);
                                            else {
                                                if (!this._codec.hasAudio)
                                                    throw Error(
                                                        "Invalid seek state; no audio or video track available",
                                                    );
                                                (t = this._codec.audioTimestamp), (e = 1 / 256);
                                            }
                                            t < 0
                                                ? this._codec.process(function (e) {
                                                      if (e) n._pingProcessing();
                                                      else if (n._streamEnded) {
                                                          if (
                                                              (n._log("stream ended during bisection seek"),
                                                              !n._seekBisector.right())
                                                          )
                                                              throw (
                                                                  (n._log("failed going back"),
                                                                  Error("not sure what to do"))
                                                              );
                                                      } else n._readBytesAndWait();
                                                  })
                                                : t - e / 2 > this._bisectTargetTime
                                                  ? this._seekBisector.left() ||
                                                    (this._log("close enough (left)"),
                                                    (this._seekTargetTime = t),
                                                    this._continueSeekedPlayback())
                                                  : t + e / 2 < this._bisectTargetTime
                                                    ? this._seekBisector.right() ||
                                                      (this._log("close enough (right)"),
                                                      (this._seekState = U),
                                                      this._pingProcessing())
                                                    : this._seekState == x &&
                                                        this._codec.hasVideo &&
                                                        this._codec.keyframeTimestamp < this._codec.frameTimestamp
                                                      ? (this._log("finding the keypoint now"),
                                                        (this._seekState = k),
                                                        this._startBisection(this._codec.keyframeTimestamp))
                                                      : (this._log("straight seeking now"),
                                                        (this._seekState = U),
                                                        this._pingProcessing());
                                        },
                                    },
                                    {
                                        key: "_setupVideo",
                                        value: function () {
                                            this._videoInfo.fps > 0
                                                ? (this._targetPerFrameTime = 1e3 / this._videoInfo.fps)
                                                : (this._targetPerFrameTime = 16.667),
                                                (this._canvas.width = this._videoInfo.displayWidth),
                                                (this._canvas.height = this._videoInfo.displayHeight),
                                                n.styleManager.appendRule("." + this._instanceId, {
                                                    width: this._videoInfo.displayWidth + "px",
                                                    height: this._videoInfo.displayHeight + "px",
                                                });
                                            var e = {};
                                            void 0 !== this._options.webGL && (e.webGL = this._options.webGL),
                                                this._options.forceWebGL && (e.webGL = "required"),
                                                (this._frameSink = d.default.attach(this._canvas, e));
                                        },
                                    },
                                    {
                                        key: "_doProcessing",
                                        value: function () {
                                            if (
                                                (this._didSeek && (this._didSeek = !1),
                                                (this._nextProcessingTimer = null),
                                                this._isProcessing(),
                                                this._depth > 0)
                                            )
                                                throw Error("REENTRANCY FAIL: doProcessing recursing unexpectedly");
                                            var e = 0;
                                            do {
                                                if (
                                                    ((this._needProcessing = !1),
                                                    this._depth++,
                                                    this._doProcessingLoop(),
                                                    this._depth--,
                                                    this._needProcessing && this._isProcessing())
                                                )
                                                    throw Error(
                                                        "REENTRANCY FAIL: waiting on input or codec but asked to keep processing",
                                                    );
                                                ++e > 500 &&
                                                    (this._log("stuck in processing loop; breaking with timer"),
                                                    (this._needProcessing = 0),
                                                    this._pingProcessing(0));
                                            } while (this._needProcessing);
                                        },
                                    },
                                    {
                                        key: "_doProcessingLoop",
                                        value: function () {
                                            if (this._actionQueue.length) this._actionQueue.shift()();
                                            else if (this._state == C) this._doProcessInitial();
                                            else if (this._state == R) this._doProcessSeekingEnd();
                                            else if (this._state == O) this._doProcessLoaded();
                                            else if (this._state == b) this._doProcessPreload();
                                            else if (this._state == D) this._doProcessReady();
                                            else if (this._state == w) this._doProcessSeeking();
                                            else if (this._state == L) this._doProcessPlay();
                                            else {
                                                if (this._state != M)
                                                    throw Error("Unexpected OGVPlayer state " + this._state);
                                                this._doProcessError();
                                            }
                                        },
                                    },
                                    {
                                        key: "_doProcessInitial",
                                        value: function () {
                                            var e = this;
                                            if (this._codec.loadedMetadata) {
                                                if (!this._codec.hasVideo && !this._codec.hasAudio)
                                                    throw Error("No audio or video found, something is wrong");
                                                this._codec.hasAudio && (this._audioInfo = this._codec.audioFormat),
                                                    this._codec.hasVideo &&
                                                        ((this._videoInfo = this._codec.videoFormat),
                                                        this._setupVideo()),
                                                    isNaN(this._codec.duration) ||
                                                        (this._duration = this._codec.duration),
                                                    null === this._duration &&
                                                    this._stream.seekable &&
                                                    "video/ogg" == this._detectedType
                                                        ? ((this._state = R),
                                                          (this._lastSeenTimestamp = -1),
                                                          this._codec.flush(function () {
                                                              e._seekStream(Math.max(0, e._stream.length - 131072));
                                                          }))
                                                        : ((this._state = O), this._pingProcessing());
                                            } else
                                                this._codec.process(function (t) {
                                                    if (t) e._pingProcessing();
                                                    else {
                                                        if (e._streamEnded)
                                                            throw Error("end of file before headers found");
                                                        e._log("reading more cause we are out of data"),
                                                            e._readBytesAndWait();
                                                    }
                                                });
                                        },
                                    },
                                    {
                                        key: "_doProcessSeekingEnd",
                                        value: function () {
                                            var e = this;
                                            this._codec.frameReady
                                                ? (this._log("saw frame with " + this._codec.frameTimestamp),
                                                  (this._lastSeenTimestamp = Math.max(
                                                      this._lastSeenTimestamp,
                                                      this._codec.frameTimestamp,
                                                  )),
                                                  this._codec.discardFrame(function () {
                                                      e._pingProcessing();
                                                  }))
                                                : this._codec.audioReady
                                                  ? (this._log("saw audio with " + this._codec.audioTimestamp),
                                                    (this._lastSeenTimestamp = Math.max(
                                                        this._lastSeenTimestamp,
                                                        this._codec.audioTimestamp,
                                                    )),
                                                    this._codec.discardAudio(function () {
                                                        e._pingProcessing();
                                                    }))
                                                  : this._codec.process(function (t) {
                                                        t
                                                            ? e._pingProcessing()
                                                            : e._stream.eof
                                                              ? (e._log(
                                                                    "seek-duration: we are at the end: " +
                                                                        e._lastSeenTimestamp,
                                                                ),
                                                                e._lastSeenTimestamp > 0 &&
                                                                    (e._duration = e._lastSeenTimestamp),
                                                                (e._state = O),
                                                                e._codec.flush(function () {
                                                                    (e._streamEnded = !1),
                                                                        (e._dataEnded = !1),
                                                                        e._seekStream(0);
                                                                }))
                                                              : e._readBytesAndWait();
                                                    });
                                        },
                                    },
                                    {
                                        key: "_doProcessLoaded",
                                        value: function () {
                                            (this._state = b),
                                                this._fireEventAsync("loadedmetadata"),
                                                this._fireEventAsync("durationchange"),
                                                this._codec.hasVideo && this._fireEventAsync("resize"),
                                                this._pingProcessing(0);
                                        },
                                    },
                                    {
                                        key: "_doProcessPreload",
                                        value: function () {
                                            var e = this;
                                            (!this._codec.frameReady && this._codec.hasVideo) ||
                                            (!this._codec.audioReady && this._codec.hasAudio)
                                                ? this._codec.process(function (t) {
                                                      t
                                                          ? e._pingProcessing()
                                                          : e._streamEnded
                                                            ? (e._ended = !0)
                                                            : e._readBytesAndWait();
                                                  })
                                                : ((this._state = D),
                                                  this._fireEventAsync("loadeddata"),
                                                  this._pingProcessing());
                                        },
                                    },
                                    {
                                        key: "_doProcessReady",
                                        value: function () {
                                            var e = this;
                                            if (
                                                (this._log("initial seek to " + this._initialSeekTime),
                                                this._initialSeekTime > 0)
                                            ) {
                                                var t = this._initialSeekTime;
                                                (this._initialSeekTime = 0),
                                                    this._log("initial seek to " + t),
                                                    this._doSeek(t);
                                            } else if (this._paused) this._log("paused while in ready");
                                            else {
                                                var n = function () {
                                                    e._log("finishStartPlaying"),
                                                        (e._state = L),
                                                        (e._lastFrameTimestamp = y()),
                                                        e._codec.hasAudio && e._audioFeeder
                                                            ? (e._prebufferingAudio = !0)
                                                            : e._startPlayback(),
                                                        e._pingProcessing(0),
                                                        e._fireEventAsync("play"),
                                                        e._fireEventAsync("playing");
                                                };
                                                !this._codec.hasAudio || this._audioFeeder || this._muted
                                                    ? n()
                                                    : (this._initAudioFeeder(), this._audioFeeder.waitUntilReady(n));
                                            }
                                        },
                                    },
                                    {
                                        key: "_doProcessSeeking",
                                        value: function () {
                                            if (this._seekState == P)
                                                throw Error("seeking in invalid state (not seeking?)");
                                            if (this._seekState == x) this._doProcessBisectionSeek();
                                            else if (this._seekState == k) this._doProcessBisectionSeek();
                                            else {
                                                if (this._seekState != U)
                                                    throw Error("Invalid seek state " + this._seekState);
                                                this._doProcessLinearSeeking();
                                            }
                                        },
                                    },
                                    {
                                        key: "_doProcessPlay",
                                        value: function () {
                                            var e = this,
                                                t = this._codec;
                                            if (this._paused) this._log("paused during playback; stopping loop");
                                            else if (
                                                (!t.hasAudio ||
                                                    t.audioReady ||
                                                    this._pendingAudio ||
                                                    this._dataEnded) &&
                                                (!t.hasVideo ||
                                                    t.frameReady ||
                                                    this._pendingFrame ||
                                                    this._decodedFrames.length ||
                                                    this._dataEnded)
                                            ) {
                                                var n,
                                                    r,
                                                    i,
                                                    s = null,
                                                    a = 0,
                                                    o = !1,
                                                    l = 0;
                                                if (
                                                    (t.hasAudio && this._audioFeeder
                                                        ? ((s = this._audioFeeder.getPlaybackState()),
                                                          (a = this._getPlaybackTime(s)),
                                                          (o =
                                                              this._dataEnded &&
                                                              0 == this._audioFeeder.durationBuffered),
                                                          this._prebufferingAudio &&
                                                              ((this._audioFeeder.durationBuffered >=
                                                                  2 * this._audioFeeder.bufferThreshold &&
                                                                  (!t.hasVideo ||
                                                                      this._decodedFrames.length >=
                                                                          this._framePipelineDepth)) ||
                                                                  this._dataEnded) &&
                                                              (this._log(
                                                                  "prebuffering audio done; buffered to " +
                                                                      this._audioFeeder.durationBuffered,
                                                              ),
                                                              this._startPlayback(a),
                                                              (this._prebufferingAudio = !1)),
                                                          s.dropped != this._droppedAudio &&
                                                              this._log("dropped " + (s.dropped - this._droppedAudio)),
                                                          s.delayed != this._delayedAudio &&
                                                              this._log("delayed " + (s.delayed - this._delayedAudio)),
                                                          (this._droppedAudio = s.dropped),
                                                          (this._delayedAudio = s.delayed),
                                                          (n =
                                                              this._audioFeeder.durationBuffered <=
                                                              2 * this._audioFeeder.bufferThreshold) &&
                                                              (this._codec.audioReady
                                                                  ? this._pendingAudio >= this._audioPipelineDepth &&
                                                                    (this._log(
                                                                        "audio decode disabled: " +
                                                                            this._pendingAudio +
                                                                            " packets in flight",
                                                                    ),
                                                                    (n = !1))
                                                                  : (n = !1)))
                                                        : ((a = this._getPlaybackTime()),
                                                          (n = this._codec.audioReady && this._audioEndTimestamp < a)),
                                                    this._codec.hasVideo)
                                                ) {
                                                    (r = this._decodedFrames.length > 0),
                                                        (i =
                                                            this._pendingFrame + this._decodedFrames.length <
                                                                this._framePipelineDepth + this._frameParallelism &&
                                                            this._codec.frameReady),
                                                        r &&
                                                            ((l = 1e3 * (this._decodedFrames[0].frameEndTimestamp - a)),
                                                            (this._actualPerFrameTime = this._targetPerFrameTime - l));
                                                    var u = this._targetPerFrameTime;
                                                    if (this._prebufferingAudio)
                                                        i && this._log("decoding a frame during prebuffering"),
                                                            (r = !1);
                                                    else if (r && this._dataEnded && o)
                                                        this._log("audio timeline ended? ready to draw frame");
                                                    else if (r && -l >= u) {
                                                        for (var c = -1, d = 0; d < this._decodedFrames.length - 1; d++)
                                                            this._decodedFrames[d].frameEndTimestamp < a && (c = d - 1);
                                                        if (c >= 0)
                                                            for (; c-- >= 0; ) {
                                                                this._lateFrames++;
                                                                var _ = this._decodedFrames.shift();
                                                                this._log(
                                                                    "skipping already-decoded late frame at " +
                                                                        _.frameEndTimestamp,
                                                                ),
                                                                    (l = 1e3 * (_.frameEndTimestamp - a)),
                                                                    (this._frameEndTimestamp = _.frameEndTimestamp),
                                                                    (this._actualPerFrameTime =
                                                                        this._targetPerFrameTime - l),
                                                                    this._framesProcessed++,
                                                                    (_.dropped = !0),
                                                                    this._doFrameComplete(_);
                                                            }
                                                        var f = this._codec.nextKeyframeTimestamp,
                                                            p =
                                                                f -
                                                                (this._targetPerFrameTime / 1e3) *
                                                                    (this._framePipelineDepth + this._pendingFrame);
                                                        if (f >= 0 && f != this._codec.frameTimestamp && a >= p) {
                                                            this._log(
                                                                "skipping late frame at " +
                                                                    this._decodedFrames[0].frameEndTimestamp +
                                                                    " vs " +
                                                                    a +
                                                                    ", expect to see keyframe at " +
                                                                    f,
                                                            );
                                                            for (var h = 0; h < this._decodedFrames.length; h++) {
                                                                var m = this._decodedFrames[h];
                                                                this._lateFrames++,
                                                                    this._framesProcessed++,
                                                                    (this._frameEndTimestamp = m.frameEndTimestamp),
                                                                    (l = 1e3 * (m.frameEndTimestamp - a)),
                                                                    (this._actualPerFrameTime =
                                                                        this._targetPerFrameTime - l),
                                                                    (m.dropped = !0),
                                                                    this._doFrameComplete(m);
                                                            }
                                                            this._decodedFrames = [];
                                                            for (var E = 0; E < this._pendingFrames.length; E++) {
                                                                var g = this._pendingFrames[E];
                                                                this._lateFrames++,
                                                                    this._framesProcessed++,
                                                                    (this._frameEndTimestamp = g.frameEndTimestamp),
                                                                    (l = 1e3 * (g.frameEndTimestamp - a)),
                                                                    (this._actualPerFrameTime =
                                                                        this._targetPerFrameTime - l),
                                                                    (g.dropped = !0),
                                                                    this._doFrameComplete(g);
                                                            }
                                                            for (
                                                                this._pendingFrames = [], this._pendingFrame = 0;
                                                                this._codec.frameReady &&
                                                                this._codec.frameTimestamp < f;
                                                            ) {
                                                                var A = {
                                                                    frameEndTimestamp: this._codec.frameTimestamp,
                                                                    dropped: !0,
                                                                };
                                                                (l = 1e3 * (A.frameEndTimestamp - a)),
                                                                    (this._actualPerFrameTime =
                                                                        this._targetPerFrameTime - l),
                                                                    this._lateFrames++,
                                                                    this._codec.discardFrame(function () {}),
                                                                    this._framesProcessed++,
                                                                    this._doFrameComplete(A);
                                                            }
                                                            return void (
                                                                this._isProcessing() || this._pingProcessing()
                                                            );
                                                        }
                                                    } else (r && l <= 4) || (r = !1);
                                                }
                                                if (i) {
                                                    this._log(
                                                        "play loop: ready to decode frame; thread depth: " +
                                                            this._pendingFrame +
                                                            ", have buffered: " +
                                                            this._decodedFrames.length,
                                                    ),
                                                        0 == this._videoInfo.fps &&
                                                            this._codec.frameTimestamp - this._frameEndTimestamp > 0 &&
                                                            (this._targetPerFrameTime =
                                                                1e3 *
                                                                (this._codec.frameTimestamp - this._frameEndTimestamp)),
                                                        (this._totalFrameTime += this._targetPerFrameTime),
                                                        this._totalFrameCount++;
                                                    var I = (this._frameEndTimestamp = this._codec.frameTimestamp);
                                                    this._pendingFrame++,
                                                        this._pendingFrames.push({ frameEndTimestamp: I });
                                                    var T = this._pendingFrames,
                                                        S = !1,
                                                        y = this._time(function () {
                                                            e._codec.decodeFrame(function (t) {
                                                                T === e._pendingFrames
                                                                    ? (e._log("play loop callback: decoded frame"),
                                                                      e._pendingFrame--,
                                                                      e._pendingFrames.shift(),
                                                                      t
                                                                          ? e._decodedFrames.push({
                                                                                yCbCrBuffer: e._codec.frameBuffer,
                                                                                videoCpuTime: e._codec.videoCpuTime,
                                                                                frameEndTimestamp: I,
                                                                            })
                                                                          : e._log("Bad video packet or something"),
                                                                      e._codec.process(function () {
                                                                          e._isProcessing() ||
                                                                              e._pingProcessing(S ? void 0 : 0);
                                                                      }))
                                                                    : e._log(
                                                                          "play loop callback after flush, discarding",
                                                                      );
                                                            });
                                                        });
                                                    this._pendingFrame &&
                                                        ((S = !0),
                                                        (this._proxyTime += y),
                                                        this._pingProcessing(),
                                                        this._dataEnded && this._codec.sync());
                                                } else if (n) {
                                                    this._log(
                                                        "play loop: ready for audio; depth: " + this._pendingAudio,
                                                    ),
                                                        this._pendingAudio++;
                                                    var v = this._codec.audioTimestamp,
                                                        N = this._time(function () {
                                                            e._codec.decodeAudio(function (t) {
                                                                if (
                                                                    (e._pendingAudio--,
                                                                    e._log("play loop callback: decoded audio"),
                                                                    (e._audioEndTimestamp = v),
                                                                    t)
                                                                ) {
                                                                    var n = e._codec.audioBuffer;
                                                                    if (
                                                                        n &&
                                                                        ((e._bufferTime += e._time(function () {
                                                                            e._audioFeeder &&
                                                                                e._audioFeeder.bufferData(n);
                                                                        })),
                                                                        !e._codec.hasVideo)
                                                                    ) {
                                                                        e._framesProcessed++;
                                                                        var r = {
                                                                            frameEndTimestamp: e._audioEndTimestamp,
                                                                        };
                                                                        e._doFrameComplete(r);
                                                                    }
                                                                }
                                                                e._isProcessing() || e._pingProcessing();
                                                            });
                                                        });
                                                    this._pendingAudio &&
                                                        ((this._proxyTime += N),
                                                        this._codec.audioReady
                                                            ? this._pingProcessing()
                                                            : this._doProcessPlayDemux());
                                                } else if (r) {
                                                    this._log("play loop: ready to draw frame"),
                                                        this._nextFrameTimer &&
                                                            (clearTimeout(this._nextFrameTimer),
                                                            (this._nextFrameTimer = null)),
                                                        this._thumbnail &&
                                                            (this.removeChild(this._thumbnail),
                                                            (this._thumbnail = null));
                                                    var C = this._decodedFrames.shift();
                                                    (this._currentVideoCpuTime = C.videoCpuTime),
                                                        (this._drawingTime += this._time(function () {
                                                            e._drawFrame(C.yCbCrBuffer);
                                                        })),
                                                        this._framesProcessed++,
                                                        this._doFrameComplete(C),
                                                        this._pingProcessing();
                                                } else if (
                                                    !this._decodedFrames.length ||
                                                    this._nextFrameTimer ||
                                                    this._prebufferingAudio
                                                )
                                                    if (
                                                        this._dataEnded &&
                                                        !(
                                                            this._pendingAudio ||
                                                            this._pendingFrame ||
                                                            this._decodedFrames.length
                                                        )
                                                    ) {
                                                        this._log(
                                                            "play loop: playback reached end of data " +
                                                                [
                                                                    this._pendingAudio,
                                                                    this._pendingFrame,
                                                                    this._decodedFrames.length,
                                                                ],
                                                        );
                                                        var R = 0;
                                                        this._codec.hasAudio &&
                                                            this._audioFeeder &&
                                                            (R = 1e3 * this._audioFeeder.durationBuffered),
                                                            R > 0
                                                                ? (this._log("play loop: ending pending " + R + " ms"),
                                                                  this._pingProcessing(Math.max(0, R)))
                                                                : (this._log(
                                                                      "play loop: ENDING NOW: playback time " +
                                                                          this._getPlaybackTime() +
                                                                          "; frameEndTimestamp: " +
                                                                          this._frameEndTimestamp,
                                                                  ),
                                                                  this._stopPlayback(),
                                                                  (this._prebufferingAudio = !1),
                                                                  (this._initialPlaybackOffset = Math.max(
                                                                      this._audioEndTimestamp,
                                                                      this._frameEndTimestamp,
                                                                  )),
                                                                  (this._ended = !0),
                                                                  (this._paused = !0),
                                                                  this._fireEventAsync("pause"),
                                                                  this._fireEventAsync("ended"));
                                                    } else
                                                        this._prebufferingAudio &&
                                                        ((t.hasVideo && !t.frameReady) || (t.hasAudio && !t.audioReady))
                                                            ? (this._log("play loop: prebuffering demuxing"),
                                                              this._doProcessPlayDemux())
                                                            : this._log("play loop: waiting on async/timers");
                                                else {
                                                    var O = l;
                                                    this._log("play loop: setting a timer for drawing " + O),
                                                        (this._nextFrameTimer = setTimeout(function () {
                                                            (e._nextFrameTimer = null), e._pingProcessing();
                                                        }, O));
                                                }
                                            } else this._log("play loop: demuxing"), this._doProcessPlayDemux();
                                        },
                                    },
                                    {
                                        key: "_doProcessPlayDemux",
                                        value: function () {
                                            var e = this,
                                                t = this._codec.frameReady,
                                                n = this._codec.audioReady;
                                            this._codec.process(function (r) {
                                                (e._codec.frameReady && !t) || (e._codec.audioReady && !n)
                                                    ? (e._log("demuxer has packets"), e._pingProcessing())
                                                    : r
                                                      ? (e._log("demuxer processing to find more packets"),
                                                        e._pingProcessing())
                                                      : (e._log("demuxer ran out of data"),
                                                        e._streamEnded
                                                            ? (e._log("demuxer reached end of data stream"),
                                                              (e._dataEnded = !0),
                                                              e._pingProcessing())
                                                            : (e._log("demuxer loading more data"),
                                                              e._readBytesAndWait()));
                                            });
                                        },
                                    },
                                    { key: "_doProcessError", value: function () {} },
                                    {
                                        key: "_isProcessing",
                                        value: function () {
                                            return (
                                                (this._stream && (this._stream.buffering || this._stream.seeking)) ||
                                                (this._codec && this._codec.processing)
                                            );
                                        },
                                    },
                                    {
                                        key: "_readBytesAndWait",
                                        value: function () {
                                            var e = this;
                                            this._stream.buffering || this._stream.seeking
                                                ? this._log("readBytesAndWait during i/o")
                                                : this._stream
                                                      .read(32768)
                                                      .then(function (t) {
                                                          e._log("got input " + [t.byteLength]),
                                                              t.byteLength &&
                                                                  e._actionQueue.push(function () {
                                                                      e._codec.receiveInput(t, function () {
                                                                          e._pingProcessing();
                                                                      });
                                                                  }),
                                                              e._stream.eof &&
                                                                  (e._log("stream is at end!"), (e._streamEnded = !0)),
                                                              e._isProcessing() || e._pingProcessing();
                                                      })
                                                      .catch(function (t) {
                                                          e._onStreamError(t);
                                                      });
                                        },
                                    },
                                    {
                                        key: "_pingProcessing",
                                        value: function () {
                                            var e = this,
                                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                                            this._stream && this._stream.waiting
                                                ? this._log("waiting on input")
                                                : (this._nextProcessingTimer &&
                                                      (this._log("canceling old processing timer"),
                                                      clearTimeout(this._nextProcessingTimer),
                                                      (this._nextProcessingTimer = null)),
                                                  t > -1 / 256
                                                      ? (this._nextProcessingTimer = setTimeout(function () {
                                                            e._pingProcessing();
                                                        }, t))
                                                      : this._depth
                                                        ? (this._needProcessing = !0)
                                                        : this._doProcessing());
                                        },
                                    },
                                    {
                                        key: "_startProcessingVideo",
                                        value: function (e) {
                                            var t = this;
                                            if (!this._started && !this._codec) {
                                                (this._framesProcessed = 0),
                                                    (this._bufferTime = 0),
                                                    (this._drawingTime = 0),
                                                    (this._proxyTime = 0),
                                                    (this._started = !0),
                                                    (this._ended = !1);
                                                var n = {
                                                    base: this._options.base,
                                                    worker: this._enableWorker,
                                                    threading: this._enableThreading,
                                                    simd: this._enableSIMD,
                                                };
                                                this._detectedType && (n.type = this._detectedType),
                                                    (this._codec = new I.default(n)),
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
                                        },
                                    },
                                    {
                                        key: "_loadCodec",
                                        value: function (e) {
                                            var t = this;
                                            this._stream.read(1024).then(function (n) {
                                                var r = new Uint8Array(n);
                                                r.length > 4 && 79 == r[0] && 103 == r[1] && 103 == r[2] && 83 == r[3]
                                                    ? (t._detectedType = "video/ogg")
                                                    : r.length > 4 &&
                                                        26 == r[0] &&
                                                        69 == r[1] &&
                                                        223 == r[2] &&
                                                        163 == r[3]
                                                      ? (t._detectedType = "video/webm")
                                                      : (t._detectedType = "video/ogg"),
                                                    e(n);
                                            });
                                        },
                                    },
                                    {
                                        key: "_prepForLoad",
                                        value: function (e) {
                                            var t = this;
                                            this._stopVideo(),
                                                (this._currentSrc = ""),
                                                (this._loading = !0),
                                                this._actionQueue.push(function () {
                                                    e && "none" === t.preload
                                                        ? (t._loading = !1)
                                                        : (function () {
                                                              t._options.stream
                                                                  ? (t._stream = t._options.stream)
                                                                  : (t._stream = new _.default({
                                                                        url: t.src,
                                                                        cacheSize: 0x1000000,
                                                                        progressive: !1,
                                                                    })),
                                                                  t._stream
                                                                      .load()
                                                                      .then(function () {
                                                                          (t._loading = !1),
                                                                              (t._currentSrc = t.src),
                                                                              (t._byteLength = t._stream.seekable
                                                                                  ? t._stream.length
                                                                                  : 0);
                                                                          var e =
                                                                              t._stream.headers["x-content-duration"];
                                                                          "string" == typeof e &&
                                                                              (t._duration = parseFloat(e)),
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
                                        },
                                    },
                                    {
                                        key: "load",
                                        value: function () {
                                            this._prepForLoad();
                                        },
                                    },
                                    {
                                        key: "canPlayType",
                                        value: function (e) {
                                            var t = new g.default(e);
                                            function n(e) {
                                                if (t.codecs) {
                                                    var n = 0,
                                                        r = 0;
                                                    return (
                                                        t.codecs.forEach(function (t) {
                                                            e.indexOf(t) >= 0 ? n++ : r++;
                                                        }),
                                                        0 === n || r > 0 ? "" : "probably"
                                                    );
                                                }
                                                return "maybe";
                                            }
                                            return "ogg" !== t.minor ||
                                                ("audio" !== t.major &&
                                                    "video" !== t.major &&
                                                    "application" !== t.major)
                                                ? "webm" !== t.minor || ("audio" !== t.major && "video" !== t.major)
                                                    ? ""
                                                    : n(["vorbis", "opus", "vp8", "vp9"])
                                                : n(["vorbis", "opus", "theora"]);
                                        },
                                    },
                                    {
                                        key: "play",
                                        value: function () {
                                            this._muted || this._options.audioContext || n.initSharedAudioContext(),
                                                this._paused &&
                                                    ((this._startedPlaybackInDocument = document.body.contains(this)),
                                                    (this._paused = !1),
                                                    this._state == w ||
                                                        (this._started && this._codec && this._codec.loadedMetadata
                                                            ? (this._ended && this._stream && this._byteLength
                                                                  ? (this._log(".play() starting over after end"),
                                                                    this._seek(0))
                                                                  : this._log(".play() while already started"),
                                                              (this._state = D),
                                                              this._isProcessing() || this._pingProcessing())
                                                            : this._loading
                                                              ? this._log(".play() while loading")
                                                              : (this._log(".play() before started"),
                                                                this._stream || this.load())));
                                        },
                                    },
                                    {
                                        key: "getPlaybackStats",
                                        value: function () {
                                            return {
                                                targetPerFrameTime: this._targetPerFrameTime,
                                                framesProcessed: this._framesProcessed,
                                                videoBytes: this._codec ? this._codec.videoBytes : 0,
                                                audioBytes: this._codec ? this._codec.audioBytes : 0,
                                                playTime: this._playTime,
                                                demuxingTime: this._codec
                                                    ? this._codec.demuxerCpuTime - this._lastDemuxerCpuTime
                                                    : 0,
                                                videoDecodingTime: this._codec
                                                    ? this._codec.videoCpuTime - this._lastVideoCpuTime
                                                    : 0,
                                                audioDecodingTime: this._codec
                                                    ? this._codec.audioCpuTime - this._lastAudioCpuTime
                                                    : 0,
                                                bufferTime: this._bufferTime - this._lastBufferTime,
                                                drawingTime: this._drawingTime - this._lastDrawingTime,
                                                proxyTime: this._proxyTime - this._lastProxyTime,
                                                droppedAudio: this._droppedAudio,
                                                delayedAudio: this._delayedAudio,
                                                jitter: this._totalJitter / this._framesProcessed,
                                                lateFrames: this._lateFrames,
                                            };
                                        },
                                    },
                                    {
                                        key: "resetPlaybackStats",
                                        value: function () {
                                            (this._framesProcessed = 0),
                                                (this._playTime = 0),
                                                this._codec &&
                                                    ((this._lastDemuxerCpuTime = this._codec.demuxerCpuTime),
                                                    (this._lastVideoCpuTime = this._codec.videoCpuTime),
                                                    (this._lastAudioCpuTime = this._codec.audioCpuTime),
                                                    (this._codec.videoBytes = 0),
                                                    (this._codec.audioBytes = 0)),
                                                (this._lastBufferTime = this._bufferTime),
                                                (this._lastDrawingTime = this._drawingTime),
                                                (this._lastProxyTime = this._proxyTime),
                                                (this._totalJitter = 0),
                                                (this._totalFrameTime = 0),
                                                (this._totalFrameCount = 0);
                                        },
                                    },
                                    {
                                        key: "getVideoFrameSink",
                                        value: function () {
                                            return this._frameSink;
                                        },
                                    },
                                    {
                                        key: "getCanvas",
                                        value: function () {
                                            return this._canvas;
                                        },
                                    },
                                    {
                                        key: "getVideo",
                                        value: function () {
                                            return null;
                                        },
                                    },
                                    {
                                        key: "pause",
                                        value: function () {
                                            this._paused ||
                                                (this._nextProcessingTimer &&
                                                    (clearTimeout(this._nextProcessingTimer),
                                                    (this._nextProcessingTimer = null)),
                                                this._stopPlayback(),
                                                (this._prebufferingAudio = !1),
                                                (this._paused = !0),
                                                this._fireEvent("pause"));
                                        },
                                    },
                                    {
                                        key: "stop",
                                        value: function () {
                                            this._stopVideo(), (this._paused = !0);
                                        },
                                    },
                                    {
                                        key: "fastSeek",
                                        value: function (e) {
                                            this._seek(+e, F);
                                        },
                                    },
                                ],
                                [
                                    {
                                        key: "initSharedAudioContext",
                                        value: function () {
                                            var e = document.createElement("audio");
                                            (e.src = T.default), e.play(), f.default.initSharedAudioContext();
                                        },
                                    },
                                ],
                            ),
                            n
                        );
                    })(V);
                    (0, m.default)(B, N),
                        (B.instanceCount = 0),
                        (B.styleManager = new (function () {
                            var e = document.createElement("style");
                            (e.type = "text/css"),
                                (e.textContent =
                                    "ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); "),
                                document.head.appendChild(e);
                            var t = e.sheet;
                            this.appendRule = function (e, n) {
                                var r = [];
                                for (var i in n) n.hasOwnProperty(i) && r.push(i + ":" + n[i]);
                                var s = e + "{" + r.join(";") + "}";
                                t.insertRule(s, t.cssRules.length - 1);
                            };
                        })()),
                        (t.default = B);
                },
                580: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913));
                    t.default = function (e) {
                        return (function () {
                            function t(n, r, s) {
                                var a = this;
                                for (var o in ((0, i.default)(this, t),
                                (s = s || {}),
                                (this.worker = n),
                                (this.transferables = (function () {
                                    var e = new ArrayBuffer(1024),
                                        t = new Uint8Array(e);
                                    try {
                                        return n.postMessage({ action: "transferTest", bytes: t }, [e]), !e.byteLength;
                                    } catch (e) {
                                        return !1;
                                    }
                                })()),
                                e))
                                    e.hasOwnProperty(o) && (this[o] = e[o]);
                                (this.processingQueue = 0),
                                    Object.defineProperty(this, "processing", {
                                        get: function () {
                                            return this.processingQueue > 0;
                                        },
                                    }),
                                    (this.messageCount = 0),
                                    (this.pendingCallbacks = {}),
                                    this.worker.addEventListener("message", function (e) {
                                        a.handleMessage(e);
                                    }),
                                    this.proxy("construct", [r, s], function () {});
                            }
                            return (
                                (0, s.default)(t, [
                                    {
                                        key: "proxy",
                                        value: function (e, t, n) {
                                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                                            if (!this.worker)
                                                throw 'Tried to call "' + e + '" method on closed proxy object';
                                            var i = "callback-" + ++this.messageCount + "-" + e;
                                            n && (this.pendingCallbacks[i] = n);
                                            var s = { action: e, callbackId: i, args: t || [] };
                                            this.processingQueue++,
                                                this.transferables
                                                    ? this.worker.postMessage(s, r)
                                                    : this.worker.postMessage(s);
                                        },
                                    },
                                    {
                                        key: "terminate",
                                        value: function () {
                                            this.worker &&
                                                (this.worker.terminate(),
                                                (this.worker = null),
                                                (this.processingQueue = 0),
                                                (this.pendingCallbacks = {}));
                                        },
                                    },
                                    {
                                        key: "handleMessage",
                                        value: function (e) {
                                            if ((this.processingQueue--, "callback" === e.data.action)) {
                                                var t = e.data,
                                                    n = t.callbackId,
                                                    r = t.args,
                                                    i = this.pendingCallbacks[n];
                                                if (t.props)
                                                    for (var s in t.props)
                                                        t.props.hasOwnProperty(s) && (this[s] = t.props[s]);
                                                i && (delete this.pendingCallbacks[n], i.apply(this, r));
                                            }
                                        },
                                    },
                                ]),
                                t
                            );
                        })();
                    };
                },
                168: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913));
                    t.default = (function () {
                        function e(t) {
                            (0, i.default)(this, e), (this._ranges = t), (this.length = t.length);
                        }
                        return (
                            (0, s.default)(e, [
                                {
                                    key: "start",
                                    value: function (e) {
                                        if (e < 0 || e > this.length || e !== (0 | e))
                                            throw RangeError("Invalid index");
                                        return this._ranges[e][0];
                                    },
                                },
                                {
                                    key: "end",
                                    value: function (e) {
                                        if (e < 0 || e > this.length || e !== (0 | e))
                                            throw RangeError("Invalid index");
                                        return this._ranges[e][1];
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                625: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(575)),
                        s = r(n(913)),
                        a = r(n(964));
                    function o(e, t) {
                        var n = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (!n) {
                            if (
                                Array.isArray(e) ||
                                (n = (function (e) {
                                    if (e) {
                                        if ("string" == typeof e) return l(e, void 0);
                                        var t = Object.prototype.toString.call(e).slice(8, -1);
                                        if (
                                            ("Object" === t && e.constructor && (t = e.constructor.name),
                                            "Map" === t || "Set" === t)
                                        )
                                            return Array.from(e);
                                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                            return l(e, void 0);
                                    }
                                })(e)) ||
                                (t && e && "number" == typeof e.length)
                            ) {
                                n && (e = n);
                                var r = 0,
                                    i = function () {};
                                return {
                                    s: i,
                                    n: function () {
                                        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                                    },
                                    e: function (e) {
                                        throw e;
                                    },
                                    f: i,
                                };
                            }
                            throw TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                        }
                        var s,
                            a = !0,
                            o = !1;
                        return {
                            s: function () {
                                n = n.call(e);
                            },
                            n: function () {
                                var e = n.next();
                                return (a = e.done), e;
                            },
                            e: function (e) {
                                (o = !0), (s = e);
                            },
                            f: function () {
                                try {
                                    a || null == n.return || n.return();
                                } finally {
                                    if (o) throw s;
                                }
                            },
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
                                        },
                                    },
                                    hasAudio: {
                                        get: function () {
                                            return this.loadedMetadata && !!this.audioDecoder;
                                        },
                                    },
                                    audioReady: {
                                        get: function () {
                                            return this.hasAudio && this.demuxer.audioReady;
                                        },
                                    },
                                    audioTimestamp: {
                                        get: function () {
                                            return this.demuxer.audioTimestamp;
                                        },
                                    },
                                    audioFormat: {
                                        get: function () {
                                            return this.hasAudio ? this.audioDecoder.audioFormat : null;
                                        },
                                    },
                                    audioBuffer: {
                                        get: function () {
                                            return this.hasAudio ? this.audioDecoder.audioBuffer : null;
                                        },
                                    },
                                    hasVideo: {
                                        get: function () {
                                            return this.loadedMetadata && !!this.videoDecoder;
                                        },
                                    },
                                    frameReady: {
                                        get: function () {
                                            return this.hasVideo && this.demuxer.frameReady;
                                        },
                                    },
                                    frameTimestamp: {
                                        get: function () {
                                            return this.demuxer.frameTimestamp;
                                        },
                                    },
                                    keyframeTimestamp: {
                                        get: function () {
                                            return this.demuxer.keyframeTimestamp;
                                        },
                                    },
                                    nextKeyframeTimestamp: {
                                        get: function () {
                                            return this.demuxer.nextKeyframeTimestamp;
                                        },
                                    },
                                    videoFormat: {
                                        get: function () {
                                            return this.hasVideo ? this.videoDecoder.videoFormat : null;
                                        },
                                    },
                                    frameBuffer: {
                                        get: function () {
                                            return this.hasVideo ? this.videoDecoder.frameBuffer : null;
                                        },
                                    },
                                    seekable: {
                                        get: function () {
                                            return this.demuxer.seekable;
                                        },
                                    },
                                    demuxerCpuTime: {
                                        get: function () {
                                            return this.demuxer ? this.demuxer.cpuTime : 0;
                                        },
                                    },
                                    audioCpuTime: {
                                        get: function () {
                                            return this.audioDecoder ? this.audioDecoder.cpuTime : 0;
                                        },
                                    },
                                    videoCpuTime: {
                                        get: function () {
                                            return this.videoDecoder ? this.videoDecoder.cpuTime : 0;
                                        },
                                    },
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
                            (0, s.default)(e, [
                                {
                                    key: "flushSafe",
                                    value: function (e) {
                                        var t = this,
                                            n = this.flushIter;
                                        return function (r) {
                                            t.flushIter <= n && e(r);
                                        };
                                    },
                                },
                                {
                                    key: "init",
                                    value: function (e) {
                                        var t,
                                            n = this;
                                        (this.processing = !0),
                                            (t =
                                                "video/webm" === this.options.type || "audio/webm" === this.options.type
                                                    ? "OGVDemuxerWebMW"
                                                    : "OGVDemuxerOggW"),
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
                                    },
                                },
                                {
                                    key: "close",
                                    value: function () {
                                        this.demuxer && (this.demuxer.close(), (this.demuxer = null)),
                                            this.videoDecoder &&
                                                (this.videoDecoder.close(), (this.videoDecoder = null)),
                                            this.audioDecoder &&
                                                (this.audioDecoder.close(), (this.audioDecoder = null));
                                    },
                                },
                                {
                                    key: "receiveInput",
                                    value: function (e, t) {
                                        this.demuxer.receiveInput(e, t);
                                    },
                                },
                                {
                                    key: "process",
                                    value: function (e) {
                                        var t = this;
                                        if (this.processing) throw Error("reentrancy fail on OGVWrapperCodec.process");
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
                                                      (t.loadedDemuxerMetadata = !0),
                                                          (t.loadedAudioMetadata = !t.audioDecoder),
                                                          (t.loadedVideoMetadata = !t.videoDecoder),
                                                          (t.loadedAllMetadata =
                                                              t.loadedAudioMetadata && t.loadedVideoMetadata),
                                                          n(!0);
                                                  });
                                              })
                                            : this.loadedDemuxerMetadata && !this.loadedAudioMetadata
                                              ? this.audioDecoder.loadedMetadata
                                                  ? ((this.loadedAudioMetadata = !0),
                                                    (this.loadedAllMetadata =
                                                        this.loadedAudioMetadata && this.loadedVideoMetadata),
                                                    n(!0))
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
                                                    ? ((this.loadedVideoMetadata = !0),
                                                      (this.loadedAllMetadata =
                                                          this.loadedAudioMetadata && this.loadedVideoMetadata),
                                                      n(!0))
                                                    : this.demuxer.frameReady
                                                      ? ((this.processing = !0),
                                                        this.demuxer.dequeueVideoPacket(function (e) {
                                                            (t.videoBytes += e.byteLength),
                                                                t.videoDecoder.processHeader(e, function () {
                                                                    n(!0);
                                                                });
                                                        }))
                                                      : r()
                                                : this.loadedVideoMetadata &&
                                                    !this.loadedMetadata &&
                                                    this.loadedAllMetadata
                                                  ? ((this.loadedMetadata = !0), n(!0))
                                                  : this.loadedMetadata &&
                                                      (!this.hasAudio || this.demuxer.audioReady) &&
                                                      (!this.hasVideo || this.demuxer.frameReady)
                                                    ? n(!0)
                                                    : r();
                                    },
                                },
                                {
                                    key: "decodeFrame",
                                    value: function (e) {
                                        var t = this,
                                            n = this.flushSafe(e),
                                            r = this.frameTimestamp,
                                            i = this.keyframeTimestamp;
                                        this.demuxer.dequeueVideoPacket(function (e) {
                                            (t.videoBytes += e.byteLength),
                                                t.videoDecoder.processFrame(e, function (e) {
                                                    var s = t.videoDecoder.frameBuffer;
                                                    s && ((s.timestamp = r), (s.keyframeTimestamp = i)), n(e);
                                                });
                                        });
                                    },
                                },
                                {
                                    key: "decodeAudio",
                                    value: function (e) {
                                        var t = this,
                                            n = this.flushSafe(e);
                                        this.demuxer.dequeueAudioPacket(function (e, r) {
                                            (t.audioBytes += e.byteLength),
                                                t.audioDecoder.processAudio(e, function (e) {
                                                    if (r) {
                                                        var i,
                                                            s = [],
                                                            a = o(t.audioDecoder.audioBuffer);
                                                        try {
                                                            for (a.s(); !(i = a.n()).done; ) {
                                                                var l = i.value,
                                                                    u = Math.round((r * t.audioFormat.rate) / 1e9);
                                                                u > 0
                                                                    ? s.push(
                                                                          l.subarray(
                                                                              0,
                                                                              l.length - Math.min(u, l.length),
                                                                          ),
                                                                      )
                                                                    : s.push(
                                                                          l.subarray(
                                                                              Math.min(Math.abs(u), l.length),
                                                                              l.length,
                                                                          ),
                                                                      );
                                                            }
                                                        } catch (e) {
                                                            a.e(e);
                                                        } finally {
                                                            a.f();
                                                        }
                                                        t.audioDecoder.audioBuffer = s;
                                                    }
                                                    return n(e);
                                                });
                                        });
                                    },
                                },
                                {
                                    key: "discardFrame",
                                    value: function (e) {
                                        var t = this;
                                        this.demuxer.dequeueVideoPacket(function (n) {
                                            (t.videoBytes += n.byteLength), e();
                                        });
                                    },
                                },
                                {
                                    key: "discardAudio",
                                    value: function (e) {
                                        var t = this;
                                        this.demuxer.dequeueAudioPacket(function (n, r) {
                                            (t.audioBytes += n.byteLength), e();
                                        });
                                    },
                                },
                                {
                                    key: "flush",
                                    value: function (e) {
                                        this.flushIter++, this.demuxer.flush(e);
                                    },
                                },
                                {
                                    key: "sync",
                                    value: function () {
                                        this.videoDecoder && this.videoDecoder.sync();
                                    },
                                },
                                {
                                    key: "recycleFrame",
                                    value: function (e) {
                                        this.videoDecoder && this.videoDecoder.recycleFrame(e);
                                    },
                                },
                                {
                                    key: "getKeypointOffset",
                                    value: function (e, t) {
                                        this.demuxer.getKeypointOffset(e, t);
                                    },
                                },
                                {
                                    key: "seekToKeypoint",
                                    value: function (e, t) {
                                        this.demuxer.seekToKeypoint(e, this.flushSafe(t));
                                    },
                                },
                                {
                                    key: "loadAudioCodec",
                                    value: function (e) {
                                        var t = this;
                                        if (this.demuxer.audioCodec) {
                                            var n = { vorbis: "OGVDecoderAudioVorbisW", opus: "OGVDecoderAudioOpusW" }[
                                                this.demuxer.audioCodec
                                            ];
                                            (this.processing = !0),
                                                a.default.loadClass(
                                                    n,
                                                    function (n) {
                                                        var r = {};
                                                        t.demuxer.audioFormat &&
                                                            (r.audioFormat = t.demuxer.audioFormat),
                                                            n(r).then(function (n) {
                                                                (t.audioDecoder = n),
                                                                    n.init(function () {
                                                                        (t.loadedAudioMetadata = n.loadedMetadata),
                                                                            (t.processing = !1),
                                                                            e();
                                                                    });
                                                            });
                                                    },
                                                    { worker: this.options.worker },
                                                );
                                        } else e();
                                    },
                                },
                                {
                                    key: "loadVideoCodec",
                                    value: function (e) {
                                        var t = this;
                                        if (this.demuxer.videoCodec) {
                                            var n = !!this.options.simd,
                                                r = !!this.options.threading,
                                                i = {
                                                    theora: "OGVDecoderVideoTheoraW",
                                                    vp8: r ? "OGVDecoderVideoVP8MTW" : "OGVDecoderVideoVP8W",
                                                    vp9: r
                                                        ? n
                                                            ? "OGVDecoderVideoVP9SIMDMTW"
                                                            : "OGVDecoderVideoVP9MTW"
                                                        : n
                                                          ? "OGVDecoderVideoVP9SIMDW"
                                                          : "OGVDecoderVideoVP9W",
                                                    av1: r
                                                        ? n
                                                            ? "OGVDecoderVideoAV1SIMDMTW"
                                                            : "OGVDecoderVideoAV1MTW"
                                                        : n
                                                          ? "OGVDecoderVideoAV1SIMDW"
                                                          : "OGVDecoderVideoAV1W",
                                                }[this.demuxer.videoCodec];
                                            (this.processing = !0),
                                                a.default.loadClass(
                                                    i,
                                                    function (n) {
                                                        var i = {};
                                                        t.demuxer.videoFormat &&
                                                            (i.videoFormat = t.demuxer.videoFormat),
                                                            r && delete window.ENVIRONMENT_IS_PTHREAD,
                                                            n(i).then(function (n) {
                                                                (t.videoDecoder = n),
                                                                    n.init(function () {
                                                                        (t.loadedVideoMetadata = n.loadedMetadata),
                                                                            (t.processing = !1),
                                                                            e();
                                                                    });
                                                            });
                                                    },
                                                    { worker: this.options.worker && !this.options.threading },
                                                );
                                        } else e();
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                539: (e, t, n) => {
                    "use strict";
                    var r = n(318);
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var i = r(n(8)),
                        s = r(n(575)),
                        a = r(n(913));
                    t.default = new ((function () {
                        function e() {
                            (0, s.default)(this, e), (this.tested = !1), (this.testResult = void 0);
                        }
                        return (
                            (0, a.default)(e, [
                                {
                                    key: "wasmSupported",
                                    value: function () {
                                        if (!this.tested) {
                                            try {
                                                "object" ===
                                                ("u" < typeof WebAssembly ? "undefined" : (0, i.default)(WebAssembly))
                                                    ? (this.testResult = (function () {
                                                          var e = new Uint8Array([
                                                                  0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1,
                                                                  127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101,
                                                                  115, 116, 0, 0, 10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2,
                                                                  0, 32, 0, 40, 2, 0, 11,
                                                              ]),
                                                              t = new WebAssembly.Module(e);
                                                          return 0 !== new WebAssembly.Instance(t, {}).exports.test(4);
                                                      })())
                                                    : (this.testResult = !1);
                                            } catch (e) {
                                                console.log("Exception while testing WebAssembly", e),
                                                    (this.testResult = !1);
                                            }
                                            this.tested = !0;
                                        }
                                        return this.testResult;
                                    },
                                },
                            ]),
                            e
                        );
                    })())();
                },
                309: (e, t) => {
                    "use strict";
                    Object.defineProperty(t, "__esModule", { value: !0 }),
                        (t.default = void 0),
                        (t.default = function (e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        });
                },
                431: (e, t, n) => {
                    "use strict";
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1),
                                        (r.configurable = !0),
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r);
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
                                var s = Object.getPrototypeOf(t);
                                return null === s ? void 0 : e(s, n, r);
                            }
                            if ("value" in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function s(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                    }
                    var o = n(828),
                        l = "arraybuffer",
                        u = (function (e) {
                            function t() {
                                return (
                                    s(this, t),
                                    a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                                );
                            }
                            return (
                                (function (e, t) {
                                    if ("function" != typeof t && null !== t)
                                        throw TypeError(
                                            "Super expression must either be null or a function, not " + typeof t,
                                        );
                                    (e.prototype = Object.create(t && t.prototype, {
                                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                    })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                r(t, [
                                    {
                                        key: "initXHR",
                                        value: function () {
                                            i(
                                                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                "initXHR",
                                                this,
                                            ).call(this),
                                                (this.xhr.responseType = l);
                                        },
                                    },
                                    { key: "onXHRProgress", value: function () {} },
                                    {
                                        key: "onXHRLoad",
                                        value: function () {
                                            var e = this.xhr.response;
                                            (this.bytesRead += e.byteLength),
                                                this.emit("buffer", e),
                                                i(
                                                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                    "onXHRLoad",
                                                    this,
                                                ).call(this);
                                        },
                                    },
                                ]),
                                t
                            );
                        })(o);
                    (u.supported = function () {
                        try {
                            var e = new XMLHttpRequest();
                            return (e.responseType = l), e.responseType === l;
                        } catch (e) {
                            return !1;
                        }
                    }),
                        (e.exports = u);
                },
                306: (e, t, n) => {
                    "use strict";
                    var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    function i(e) {
                        if (206 == e.status)
                            return (function (e) {
                                var t = s(e);
                                return t ? parseInt(t[3], 10) : -1;
                            })(e);
                        var t = e.getResponseHeader("Content-Length");
                        return null === t || "" === t ? -1 : parseInt(t, 10);
                    }
                    function s(e) {
                        var t = e.getResponseHeader("Content-Range");
                        return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
                    }
                    e.exports = (function (e) {
                        function t(e) {
                            var n = e.url,
                                r = e.offset,
                                i = e.length,
                                s = e.cachever,
                                a = void 0 === s ? 0 : s;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                            })(this, t);
                            var o = (function (e, t) {
                                if (!e)
                                    throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return (
                                (o.url = n),
                                (o.offset = r),
                                (o.length = i),
                                (o.cachever = a),
                                (o.loaded = !1),
                                (o.seekable = !1),
                                (o.headers = {}),
                                (o.eof = !1),
                                (o.bytesRead = 0),
                                (o.xhr = new XMLHttpRequest()),
                                o
                            );
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw TypeError(
                                        "Super expression must either be null or a function, not " + typeof t,
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(t, e),
                            r(t, [
                                {
                                    key: "load",
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
                                                                var t = s(e);
                                                                return t ? parseInt(t[1], 10) : 0;
                                                            })(e.xhr);
                                                            if (e.offset != a)
                                                                return (
                                                                    console.log(
                                                                        "Expected start at " +
                                                                            e.offset +
                                                                            " but got " +
                                                                            a +
                                                                            "; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672",
                                                                    ),
                                                                    e.cachever++,
                                                                    e.emit("cachever"),
                                                                    e.abort(),
                                                                    r(),
                                                                    void e.load().then(t).catch(n)
                                                                );
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
                                                                              n.length > 1 &&
                                                                                  (t[n[0].toLowerCase()] = n[1]);
                                                                          }),
                                                                      t
                                                                  );
                                                              })(e.xhr)),
                                                              e.onXHRStart())
                                                            : (r(), n(Error("HTTP error " + e.xhr.status)));
                                                    }
                                                },
                                                o = function () {
                                                    r(), n(Error("network error"));
                                                },
                                                l = function () {
                                                    r(), t();
                                                };
                                            (r = function () {
                                                e.xhr.removeEventListener("readystatechange", a),
                                                    e.xhr.removeEventListener("error", o),
                                                    e.off("open", l),
                                                    (e._onAbort = null);
                                            }),
                                                e.initXHR(),
                                                e.xhr.addEventListener("readystatechange", a),
                                                e.xhr.addEventListener("error", o),
                                                e.on("open", l),
                                                e.xhr.send();
                                        });
                                    },
                                },
                                {
                                    key: "bufferToOffset",
                                    value: function (e) {
                                        return Promise.reject(Error("abstract"));
                                    },
                                },
                                {
                                    key: "abort",
                                    value: function () {
                                        if ((this.xhr.abort(), this._onAbort)) {
                                            var e = this._onAbort;
                                            this._onAbort = null;
                                            var t = Error("Aborted");
                                            (t.name = "AbortError"), e(t);
                                        }
                                    },
                                },
                                {
                                    key: "initXHR",
                                    value: function () {
                                        var e = this.url;
                                        this.cachever && (e += "?buggy_cachever=" + this.cachever),
                                            this.xhr.open("GET", e);
                                        var t = null;
                                        (this.offset || this.length) && (t = "bytes=" + this.offset + "-"),
                                            this.length && (t += this.offset + this.length - 1),
                                            null !== t && this.xhr.setRequestHeader("Range", t);
                                    },
                                },
                                {
                                    key: "onXHRStart",
                                    value: function () {
                                        throw Error("abstract");
                                    },
                                },
                            ]),
                            t
                        );
                    })(n(566));
                },
                810: (e, t, n) => {
                    "use strict";
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1),
                                        (r.configurable = !0),
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r);
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
                                var s = Object.getPrototypeOf(t);
                                return null === s ? void 0 : e(s, n, r);
                            }
                            if ("value" in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function s(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                    }
                    var o = (function (e) {
                        function t() {
                            return (
                                s(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            );
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw TypeError(
                                        "Super expression must either be null or a function, not " + typeof t,
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(t, e),
                            r(t, [
                                {
                                    key: "initXHR",
                                    value: function () {
                                        i(
                                            t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                            "initXHR",
                                            this,
                                        ).call(this),
                                            (this.xhr.responseType = "text"),
                                            this.xhr.overrideMimeType("text/plain; charset=x-user-defined");
                                    },
                                },
                                {
                                    key: "onXHRProgress",
                                    value: function () {
                                        var e = this.xhr.responseText.slice(this.bytesRead);
                                        e.length > 0 && ((this.bytesRead += e.length), this.emit("buffer", e));
                                    },
                                },
                                {
                                    key: "onXHRLoad",
                                    value: function () {
                                        this.onXHRProgress(),
                                            i(
                                                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                "onXHRLoad",
                                                this,
                                            ).call(this);
                                    },
                                },
                            ]),
                            t
                        );
                    })(n(828));
                    (o.supported = function () {
                        try {
                            return !!new XMLHttpRequest().overrideMimeType;
                        } catch (e) {
                            return !1;
                        }
                    }),
                        (e.exports = o);
                },
                828: (e, t, n) => {
                    "use strict";
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1),
                                        (r.configurable = !0),
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r);
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
                                var s = Object.getPrototypeOf(t);
                                return null === s ? void 0 : e(s, n, r);
                            }
                            if ("value" in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function s(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                    }
                    e.exports = (function (e) {
                        function t() {
                            return (
                                s(this, t), a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            );
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw TypeError(
                                        "Super expression must either be null or a function, not " + typeof t,
                                    );
                                (e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                            })(t, e),
                            r(t, [
                                {
                                    key: "bufferToOffset",
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n, r) {
                                            if (t.eof || t.offset >= e) n();
                                            else {
                                                var i = null;
                                                t._onAbort = function (e) {
                                                    i(), r(e);
                                                };
                                                var s = function () {
                                                        t.offset >= e && !t.eof && (i(), n());
                                                    },
                                                    a = function () {
                                                        i(), n();
                                                    },
                                                    o = function () {
                                                        i(), r(Error("error streaming"));
                                                    };
                                                (i = function () {
                                                    (t.buffering = !1),
                                                        t.off("buffer", s),
                                                        t.off("done", a),
                                                        t.off("error", o),
                                                        (t._onAbort = null);
                                                }),
                                                    (t.buffering = !0),
                                                    t.on("buffer", s),
                                                    t.on("done", a),
                                                    t.on("error", o);
                                            }
                                        });
                                    },
                                },
                                {
                                    key: "initXHR",
                                    value: function () {
                                        i(
                                            t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                            "initXHR",
                                            this,
                                        ).call(this);
                                    },
                                },
                                {
                                    key: "onXHRStart",
                                    value: function () {
                                        var e = this;
                                        this.xhr.addEventListener("progress", function () {
                                            return e.onXHRProgress();
                                        }),
                                            this.xhr.addEventListener("error", function () {
                                                return e.onXHRError();
                                            }),
                                            this.xhr.addEventListener("load", function () {
                                                return e.onXHRLoad();
                                            }),
                                            this.emit("open");
                                    },
                                },
                                {
                                    key: "onXHRProgress",
                                    value: function () {
                                        throw Error("abstract");
                                    },
                                },
                                {
                                    key: "onXHRError",
                                    value: function () {
                                        this.emit("error");
                                    },
                                },
                                {
                                    key: "onXHRLoad",
                                    value: function () {
                                        (this.eof = !0), this.emit("done");
                                    },
                                },
                            ]),
                            t
                        );
                    })(n(306));
                },
                761: (e, t, n) => {
                    "use strict";
                    var r = n(855),
                        i = n(810),
                        s = n(431),
                        a = null;
                    e.exports = function (e) {
                        if (!1 === e.progressive) return new s(e);
                        if (
                            (a ||
                                (a = (function () {
                                    return r.supported() ? r : i.supported() ? i : null;
                                })()),
                            !a)
                        )
                            throw Error("No supported backend class");
                        return new a(e);
                    };
                },
                855: (e, t, n) => {
                    "use strict";
                    var r = (function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    (r.enumerable = r.enumerable || !1),
                                        (r.configurable = !0),
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r);
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
                                var s = Object.getPrototypeOf(t);
                                return null === s ? void 0 : e(s, n, r);
                            }
                            if ("value" in i) return i.value;
                            var a = i.get;
                            return void 0 !== a ? a.call(r) : void 0;
                        };
                    function s(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    }
                    function a(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                    }
                    var o = n(828),
                        l = "moz-chunked-arraybuffer",
                        u = (function (e) {
                            function t() {
                                return (
                                    s(this, t),
                                    a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                                );
                            }
                            return (
                                (function (e, t) {
                                    if ("function" != typeof t && null !== t)
                                        throw TypeError(
                                            "Super expression must either be null or a function, not " + typeof t,
                                        );
                                    (e.prototype = Object.create(t && t.prototype, {
                                        constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                    })),
                                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                                })(t, e),
                                r(t, [
                                    {
                                        key: "initXHR",
                                        value: function () {
                                            i(
                                                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                "initXHR",
                                                this,
                                            ).call(this),
                                                (this.xhr.responseType = l);
                                        },
                                    },
                                    {
                                        key: "onXHRProgress",
                                        value: function () {
                                            var e = this.xhr.response;
                                            (this.bytesRead += e.byteLength), this.emit("buffer", e);
                                        },
                                    },
                                ]),
                                t
                            );
                        })(o);
                    (u.supported = function () {
                        try {
                            var e = new XMLHttpRequest();
                            return (e.responseType = l), e.responseType === l;
                        } catch (e) {
                            return !1;
                        }
                    }),
                        (e.exports = u);
                },
                503: (e) => {
                    "use strict";
                    var t = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    function n(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    }
                    e.exports = (function () {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = t.buffer,
                                i = void 0 === r ? void 0 : r,
                                s = t.string,
                                a = void 0 === s ? void 0 : s,
                                o = t.start,
                                l = void 0 === o ? 0 : o,
                                u = t.end,
                                c = void 0 === u ? l + (i ? i.byteLength : a ? a.length : 0) : u,
                                d = t.prev,
                                _ = void 0 === d ? null : d,
                                f = t.next,
                                p = void 0 === f ? null : f,
                                h = t.eof,
                                m = void 0 !== h && h,
                                E = t.empty,
                                g = void 0 === E ? !(i || a) : E,
                                A = t.timestamp,
                                I = void 0 === A ? Date.now() : A;
                            n(this, e),
                                (this.start = l),
                                (this.end = c),
                                (this.prev = _),
                                (this.next = p),
                                (this.eof = m),
                                (this.empty = g),
                                (this.timestamp = I),
                                (this.buffer = i),
                                (this.string = a),
                                Object.defineProperty(this, "length", {
                                    get: function () {
                                        return this.end - this.start;
                                    },
                                });
                        }
                        return (
                            t(e, [
                                {
                                    key: "contains",
                                    value: function (e) {
                                        return e >= this.start && (e < this.end || this.eof);
                                    },
                                },
                                {
                                    key: "readBytes",
                                    value: function (e, t, n) {
                                        var r = t - this.start,
                                            i = n - t;
                                        if (this.buffer) {
                                            var s = new Uint8Array(this.buffer, r, i);
                                            e.set(s);
                                        } else {
                                            if (!this.string) throw Error("invalid state");
                                            for (var a = this.string, o = 0; o < i; o++) e[o] = a.charCodeAt(r + o);
                                        }
                                        this.timestamp = Date.now();
                                    },
                                },
                                {
                                    key: "split",
                                    value: function (t) {
                                        if (!this.empty || !this.contains(t)) throw Error("invalid split");
                                        var n = new e({ start: this.start, end: t }),
                                            r = new e({ start: t, end: this.eof ? t : this.end, eof: this.eof });
                                        return (n.next = r), (r.prev = n), [n, r];
                                    },
                                },
                                {
                                    key: "first",
                                    value: function (e) {
                                        for (var t = this; t; t = t.next) if (e(t)) return t;
                                        return null;
                                    },
                                },
                                {
                                    key: "last",
                                    value: function (e) {
                                        for (var t = null, n = this; n && e(n); n = n.next) t = n;
                                        return t;
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                91: (e, t, n) => {
                    "use strict";
                    var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    function i(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                    }
                    var s = n(503);
                    e.exports = (function () {
                        function e() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = t.cacheSize,
                                r = void 0 === n ? 0 : n;
                            i(this, e);
                            var a = new s({ eof: !0 });
                            (this.head = a),
                                (this.tail = a),
                                (this.readOffset = 0),
                                (this.readCursor = a),
                                (this.writeOffset = 0),
                                (this.writeCursor = a),
                                (this.cacheSize = r);
                        }
                        return (
                            r(e, [
                                {
                                    key: "bytesReadable",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                                            t = this.readOffset,
                                            n = this.readCursor.last(function (n) {
                                                return !n.empty && n.start <= t + e;
                                            });
                                        return n ? Math.min(e, n.end - t) : 0;
                                    },
                                },
                                {
                                    key: "bytesWritable",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0,
                                            t = this.writeOffset,
                                            n = this.writeCursor;
                                        if (n.eof) return e;
                                        var r = n.last(function (n) {
                                            return n.empty && n.start <= t + e;
                                        });
                                        return r ? Math.min(e, r.end - t) : 0;
                                    },
                                },
                                {
                                    key: "seekRead",
                                    value: function (e) {
                                        var t = this.head.first(function (t) {
                                            return t.contains(e);
                                        });
                                        if (!t) throw Error("read seek out of range");
                                        (this.readOffset = e), (this.readCursor = t);
                                    },
                                },
                                {
                                    key: "seekWrite",
                                    value: function (e) {
                                        var t = this.head.first(function (t) {
                                            return t.contains(e);
                                        });
                                        if (!t) throw Error("write seek out of range");
                                        (this.writeOffset = e), (this.writeCursor = t);
                                    },
                                },
                                {
                                    key: "readBytes",
                                    value: function (e) {
                                        for (
                                            var t = e.byteLength,
                                                n = this.bytesReadable(t),
                                                r = this.readOffset,
                                                i = r + n,
                                                s = r,
                                                a = this.readCursor;
                                            a && !a.empty && !(a.start >= i);
                                            a = a.next
                                        ) {
                                            var o = Math.min(i, a.end),
                                                l = e.subarray(s - r, o - r);
                                            a.readBytes(l, s, o), (s = o);
                                        }
                                        return (
                                            (this.readOffset = s),
                                            (this.readCursor = this.readCursor.first(function (e) {
                                                return e.contains(s);
                                            })),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "write",
                                    value: function (e) {
                                        var t = this.bufferItem(e),
                                            n = this.writeCursor;
                                        if (!n.empty) throw Error("write cursor not empty");
                                        if (!n.contains(t.end) && n.end !== t.end)
                                            throw Error("write cursor too small");
                                        n.start < t.start && (this.split(n, t.start), (n = this.writeCursor)),
                                            (t.end < n.end || n.eof) && (this.split(n, t.end), (n = this.writeCursor)),
                                            this.splice(n, n, t, t),
                                            (this.writeOffset = t.end),
                                            (this.writeCursor = t.next),
                                            this.gc();
                                    },
                                },
                                {
                                    key: "bufferItem",
                                    value: function (e) {
                                        if (e instanceof ArrayBuffer)
                                            return new s({
                                                start: this.writeOffset,
                                                end: this.writeOffset + e.byteLength,
                                                buffer: e,
                                            });
                                        if ("string" == typeof e)
                                            return new s({
                                                start: this.writeOffset,
                                                end: this.writeOffset + e.length,
                                                string: e,
                                            });
                                        throw Error("invalid input to write");
                                    },
                                },
                                {
                                    key: "split",
                                    value: function (e, t) {
                                        var n = e.split(t);
                                        this.splice(e, e, n[0], n[1]);
                                    },
                                },
                                {
                                    key: "ranges",
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
                                    },
                                },
                                {
                                    key: "gc",
                                    value: function () {
                                        for (var e = 0, t = [], n = this.head; n; n = n.next)
                                            n.empty ||
                                                ((e += n.length),
                                                (n.end < this.readOffset ||
                                                    n.start > this.readOffset + this.chunkSize) &&
                                                    t.push(n));
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
                                    },
                                },
                                {
                                    key: "remove",
                                    value: function (e) {
                                        var t = new s({ start: e.start, end: e.end });
                                        this.splice(e, e, t, t),
                                            (e = t).prev && e.prev.empty && (e = this.consolidate(e.prev)),
                                            e.next && e.next.empty && !e.next.eof && (e = this.consolidate(e)),
                                            0 === e.start && (this.head = e);
                                    },
                                },
                                {
                                    key: "consolidate",
                                    value: function (e) {
                                        var t = e.last(function (e) {
                                                return e.empty && !e.eof;
                                            }),
                                            n = new s({ start: e.start, end: t.end });
                                        return this.splice(e, t, n, n), n;
                                    },
                                },
                                {
                                    key: "splice",
                                    value: function (e, t, n, r) {
                                        var i = this;
                                        if (e.start !== n.start) throw Error("invalid splice head");
                                        if (!(t.end === r.end || (t.eof && r.eof))) throw Error("invalid splice tail");
                                        var s = e.prev,
                                            a = t.next;
                                        (e.prev = null),
                                            (t.next = null),
                                            s && ((s.next = n), (n.prev = s)),
                                            a && ((a.prev = r), (r.next = a)),
                                            e === this.head && (this.head = n),
                                            t === this.tail && (this.tail = r),
                                            (this.readCursor = this.head.first(function (e) {
                                                return e.contains(i.readOffset);
                                            })),
                                            (this.writeCursor = this.head.first(function (e) {
                                                return e.contains(i.writeOffset);
                                            }));
                                    },
                                },
                                {
                                    key: "eof",
                                    get: function () {
                                        return this.readCursor.eof;
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                814: (e, t, n) => {
                    "use strict";
                    e.exports = n(91);
                },
                566: (e) => {
                    "use strict";
                    var t = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    e.exports = (function () {
                        function e() {
                            !(function (e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this._e = {});
                        }
                        return (
                            t(e, [
                                {
                                    key: "on",
                                    value: function (e, t) {
                                        (this._e[e] || (this._e[e] = [])).push(t);
                                    },
                                },
                                {
                                    key: "off",
                                    value: function (e, t) {
                                        var n = this._e[e] || [],
                                            r = n.indexOf(t);
                                        t >= 0 && n.splice(r, 1);
                                    },
                                },
                                {
                                    key: "emit",
                                    value: function (e, t) {
                                        (this._e[e] || []).slice().forEach(function (e) {
                                            return e(t);
                                        });
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                936: (e, t, n) => {
                    "use strict";
                    var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r);
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t;
                        };
                    })();
                    n(566);
                    var i = n(814),
                        s = n(761);
                    e.exports = (function () {
                        function e(t) {
                            var n = t.url,
                                r = void 0 === n ? "" : n,
                                s = t.chunkSize,
                                a = void 0 === s ? 1048576 : s,
                                o = t.cacheSize,
                                l = void 0 === o ? 0 : o,
                                u = t.progressive,
                                c = void 0 === u || u;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.length = -1),
                                (this.loaded = !1),
                                (this.loading = !1),
                                (this.seekable = !1),
                                (this.buffering = !1),
                                (this.seeking = !1),
                                (this.progressive = c),
                                Object.defineProperties(this, {
                                    offset: {
                                        get: function () {
                                            return this._cache.readOffset;
                                        },
                                    },
                                    eof: {
                                        get: function () {
                                            return this.length === this._cache.readOffset;
                                        },
                                    },
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
                                    key: "load",
                                    value: function () {
                                        var e = this;
                                        return new Promise(function (t, n) {
                                            if (e.loading) throw Error("cannot load when loading");
                                            if (e.loaded) throw Error("cannot load when loaded");
                                            (e.loading = !0),
                                                e
                                                    ._openBackend()
                                                    .then(function (n) {
                                                        (e.seekable = n.seekable),
                                                            (e.headers = n.headers),
                                                            (e.length = n.length),
                                                            (e.loaded = !0),
                                                            (e.loading = !1),
                                                            t();
                                                    })
                                                    .catch(function (t) {
                                                        "AbortError" !== t.name && (e.loading = !1), n(t);
                                                    });
                                        });
                                    },
                                },
                                {
                                    key: "_openBackend",
                                    value: function () {
                                        var e = this;
                                        return new Promise(function (t, n) {
                                            if (e._backend) t(e._backend);
                                            else if (e.eof) n(Error("cannot open at end of file"));
                                            else {
                                                var r = e._cache,
                                                    i = e._chunkSize,
                                                    a = r.bytesReadable(i),
                                                    o = r.readOffset + a;
                                                if ((r.seekWrite(o), e.length >= 0 && o >= e.length))
                                                    return void t(null);
                                                var l =
                                                    e._clampToLength(r.writeOffset + r.bytesWritable(i)) -
                                                    r.writeOffset;
                                                if (0 === l) t(null);
                                                else {
                                                    var u = (e._backend = new s({
                                                            url: e.url,
                                                            offset: e._cache.writeOffset,
                                                            length: l,
                                                            cachever: e._cachever,
                                                            progressive: e.progressive,
                                                        })),
                                                        c = null,
                                                        d = function () {
                                                            u !== e._backend
                                                                ? (c(), n(Error("invalid state")))
                                                                : (u.on("buffer", function (t) {
                                                                      u === e._backend && e._cache.write(t);
                                                                  }),
                                                                  u.on("done", function () {
                                                                      u === e._backend &&
                                                                          (-1 === e.length &&
                                                                              (e.length =
                                                                                  e._backend.offset +
                                                                                  e._backend.bytesRead),
                                                                          (e._backend = null));
                                                                  }),
                                                                  t(u));
                                                        },
                                                        _ = function (t) {
                                                            u !== e._backend
                                                                ? n(Error("invalid state"))
                                                                : ((e._backend = null), n(t));
                                                        };
                                                    (c = function () {
                                                        u.off("open", d), u.off("error", _);
                                                    }),
                                                        u.on("open", d),
                                                        u.on("error", _),
                                                        u.on("cachever", function () {
                                                            e._cachever++;
                                                        }),
                                                        u.load();
                                                }
                                            }
                                        });
                                    },
                                },
                                {
                                    key: "_readAhead",
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
                                    },
                                },
                                {
                                    key: "seek",
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n, r) {
                                            if (!t.loaded || t.buffering || t.seeking) throw Error("invalid state");
                                            if (e !== (0 | e) || e < 0) throw Error("invalid input");
                                            if (t.length >= 0 && e > t.length) throw Error("seek past end of file");
                                            if (!t.seekable) throw Error("seek on non-seekable stream");
                                            t._backend && t.abort(),
                                                t._cache.seekRead(e),
                                                t._cache.seekWrite(e),
                                                t._readAhead().then(n).catch(r);
                                        });
                                    },
                                },
                                {
                                    key: "read",
                                    value: function (e) {
                                        var t = this;
                                        return this.buffer(e).then(function (e) {
                                            return t.readSync(e);
                                        });
                                    },
                                },
                                {
                                    key: "readSync",
                                    value: function (e) {
                                        var t = this.bytesAvailable(e),
                                            n = new Uint8Array(t);
                                        if (this.readBytes(n) !== t) throw Error("failed to read expected data");
                                        return n.buffer;
                                    },
                                },
                                {
                                    key: "readBytes",
                                    value: function (e) {
                                        if (!this.loaded || this.buffering || this.seeking)
                                            throw Error("invalid state");
                                        if (!(e instanceof Uint8Array)) throw Error("invalid input");
                                        var t = this._cache.readBytes(e);
                                        return this._readAhead(), t;
                                    },
                                },
                                {
                                    key: "buffer",
                                    value: function (e) {
                                        var t = this;
                                        return new Promise(function (n, r) {
                                            if (!t.loaded || t.buffering || t.seeking) throw Error("invalid state");
                                            if (e !== (0 | e) || e < 0) throw Error("invalid input");
                                            var i = t._clampToLength(t.offset + e),
                                                s = i - t.offset,
                                                a = t.bytesAvailable(s);
                                            a >= s
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
                                                          "AbortError" !== e.name && (t.buffering = !1), r(e);
                                                      }));
                                        });
                                    },
                                },
                                {
                                    key: "bytesAvailable",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1 / 0;
                                        return this._cache.bytesReadable(e);
                                    },
                                },
                                {
                                    key: "abort",
                                    value: function () {
                                        this.loading && (this.loading = !1),
                                            this.buffering && (this.buffering = !1),
                                            this.seeking && (this.seeking = !1),
                                            this._backend && (this._backend.abort(), (this._backend = null));
                                    },
                                },
                                {
                                    key: "getBufferedRanges",
                                    value: function () {
                                        return this._cache.ranges();
                                    },
                                },
                                {
                                    key: "_clampToLength",
                                    value: function (e) {
                                        return this.length < 0 ? e : Math.min(this.length, e);
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                },
                302: (e, t, n) => {
                    "use strict";
                    n.r(t), n.d(t, { default: () => r });
                    let r =
                        "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU5LjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAAEEwCZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ//////////////////////////////////////////////////////////////////8AAAAATGF2YzU5LjE4AAAAAAAAAAAAAAAAJAZAAAAAAAAABBMIw3vfAAAAAAAAAAAAAAAAAAAAAP/7kGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
                },
                826: (e) => {
                    e.exports = {
                        vertex: "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n",
                        fragment:
                            "// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n",
                        vertexStripe:
                            "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n",
                        fragmentStripe:
                            "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n",
                    };
                },
                487: (e) => {
                    !(function () {
                        "use strict";
                        function t(e, t) {
                            throw Error("abstract");
                        }
                        (t.prototype.drawFrame = function (e) {
                            throw Error("abstract");
                        }),
                            (t.prototype.clear = function () {
                                throw Error("abstract");
                            }),
                            (e.exports = t);
                    })();
                },
                926: (e, t, n) => {
                    !(function () {
                        "use strict";
                        var t = n(487),
                            r = n(627);
                        function i(e) {
                            var t = this,
                                n = e.getContext("2d"),
                                i = null,
                                s = null,
                                a = null;
                            return (
                                (t.drawFrame = function (t) {
                                    var o = t.format;
                                    (e.width === o.displayWidth && e.height === o.displayHeight) ||
                                        ((e.width = o.displayWidth), (e.height = o.displayHeight)),
                                        (null !== i && i.width == o.width && i.height == o.height) ||
                                            (function (e, t) {
                                                for (
                                                    var r = (i = n.createImageData(e, t)).data, s = e * t * 4, a = 0;
                                                    a < s;
                                                    a += 4
                                                )
                                                    r[a + 3] = 255;
                                            })(o.width, o.height),
                                        r.convertYCbCr(t, i.data);
                                    var l,
                                        u = o.cropWidth != o.displayWidth || o.cropHeight != o.displayHeight;
                                    u
                                        ? (s ||
                                              (function (e, t) {
                                                  ((s = document.createElement("canvas")).width = e),
                                                      (s.height = t),
                                                      (a = s.getContext("2d"));
                                              })(o.cropWidth, o.cropHeight),
                                          (l = a))
                                        : (l = n),
                                        l.putImageData(
                                            i,
                                            -o.cropLeft,
                                            -o.cropTop,
                                            o.cropLeft,
                                            o.cropTop,
                                            o.cropWidth,
                                            o.cropHeight,
                                        ),
                                        u && n.drawImage(s, 0, 0, o.displayWidth, o.displayHeight);
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
                        "use strict";
                        var t = n(487),
                            r = n(826);
                        function i(e) {
                            var t,
                                n,
                                s = this,
                                a = i.contextForCanvas(e);
                            if (null === a) throw Error("WebGL unavailable");
                            function o(e, t) {
                                var n = a.createShader(e);
                                if (
                                    (a.shaderSource(n, t),
                                    a.compileShader(n),
                                    !a.getShaderParameter(n, a.COMPILE_STATUS))
                                ) {
                                    var r = a.getShaderInfoLog(n);
                                    throw (
                                        (a.deleteShader(n), Error("GL shader compilation for " + e + " failed: " + r))
                                    );
                                }
                                return n;
                            }
                            var l,
                                u,
                                c,
                                d,
                                _,
                                f,
                                p,
                                h,
                                m,
                                E,
                                g = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                                A = {},
                                I = {},
                                T = {};
                            function S(e, t) {
                                return (A[e] && !t) || (A[e] = a.createTexture()), A[e];
                            }
                            function y(e, t, n, r, s) {
                                var o = !A[e] || t,
                                    l = S(e, t);
                                if ((a.activeTexture(a.TEXTURE0), i.stripe)) {
                                    var u = !A[e + "_temp"] || t,
                                        c = S(e + "_temp", t);
                                    a.bindTexture(a.TEXTURE_2D, c),
                                        u
                                            ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                                              a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                                              a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.NEAREST),
                                              a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.NEAREST),
                                              a.texImage2D(
                                                  a.TEXTURE_2D,
                                                  0,
                                                  a.RGBA,
                                                  n / 4,
                                                  r,
                                                  0,
                                                  a.RGBA,
                                                  a.UNSIGNED_BYTE,
                                                  s,
                                              ))
                                            : a.texSubImage2D(
                                                  a.TEXTURE_2D,
                                                  0,
                                                  0,
                                                  0,
                                                  n / 4,
                                                  r,
                                                  a.RGBA,
                                                  a.UNSIGNED_BYTE,
                                                  s,
                                              );
                                    var d = A[e + "_stripe"],
                                        _ = !d || t;
                                    _ && (d = S(e + "_stripe", t)),
                                        a.bindTexture(a.TEXTURE_2D, d),
                                        _ &&
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
                                                    if (T[e]) return T[e];
                                                    for (var t = e, n = new Uint32Array(t), r = 0; r < t; r += 4)
                                                        (n[r] = 255),
                                                            (n[r + 1] = 65280),
                                                            (n[r + 2] = 0xff0000),
                                                            (n[r + 3] = 0xff000000);
                                                    return (T[e] = new Uint8Array(n.buffer));
                                                })(n),
                                            ));
                                } else
                                    a.bindTexture(a.TEXTURE_2D, l),
                                        o
                                            ? (a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                                              a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                                              a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                                              a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
                                              a.texImage2D(
                                                  a.TEXTURE_2D,
                                                  0,
                                                  a.ALPHA,
                                                  n,
                                                  r,
                                                  0,
                                                  a.ALPHA,
                                                  a.UNSIGNED_BYTE,
                                                  s,
                                              ))
                                            : a.texSubImage2D(a.TEXTURE_2D, 0, 0, 0, n, r, a.ALPHA, a.UNSIGNED_BYTE, s);
                            }
                            function v(e, t, r, i) {
                                var s = A[e];
                                a.useProgram(n);
                                var o = I[e];
                                (o && !t) ||
                                    (a.activeTexture(a.TEXTURE0),
                                    a.bindTexture(a.TEXTURE_2D, s),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
                                    a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, r, i, 0, a.RGBA, a.UNSIGNED_BYTE, null),
                                    (o = I[e] = a.createFramebuffer())),
                                    a.bindFramebuffer(a.FRAMEBUFFER, o),
                                    a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, s, 0);
                                var p = A[e + "_temp"];
                                a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, p), a.uniform1i(f, 1);
                                var h = A[e + "_stripe"];
                                a.activeTexture(a.TEXTURE2),
                                    a.bindTexture(a.TEXTURE_2D, h),
                                    a.uniform1i(_, 2),
                                    a.bindBuffer(a.ARRAY_BUFFER, l),
                                    a.enableVertexAttribArray(u),
                                    a.vertexAttribPointer(u, 2, a.FLOAT, !1, 0, 0),
                                    a.bindBuffer(a.ARRAY_BUFFER, c),
                                    a.enableVertexAttribArray(d),
                                    a.vertexAttribPointer(d, 2, a.FLOAT, !1, 0, 0),
                                    a.viewport(0, 0, r, i),
                                    a.drawArrays(a.TRIANGLES, 0, g.length / 2),
                                    a.bindFramebuffer(a.FRAMEBUFFER, null);
                            }
                            function N(e, n, r) {
                                a.activeTexture(n),
                                    a.bindTexture(a.TEXTURE_2D, A[e]),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR),
                                    a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR),
                                    a.uniform1i(a.getUniformLocation(t, e), r);
                            }
                            function C(e, t) {
                                var n = o(a.VERTEX_SHADER, e),
                                    r = o(a.FRAGMENT_SHADER, t),
                                    i = a.createProgram();
                                if (
                                    (a.attachShader(i, n),
                                    a.attachShader(i, r),
                                    a.linkProgram(i),
                                    !a.getProgramParameter(i, a.LINK_STATUS))
                                ) {
                                    var s = a.getProgramInfoLog(i);
                                    throw (a.deleteProgram(i), Error("GL program linking failed: " + s));
                                }
                                return i;
                            }
                            return (
                                (s.drawFrame = function (o) {
                                    var A = o.format,
                                        I = !t || e.width !== A.displayWidth || e.height !== A.displayHeight;
                                    if (
                                        (I && ((e.width = A.displayWidth), (e.height = A.displayHeight), s.clear()),
                                        t ||
                                            (function () {
                                                if (i.stripe) {
                                                    (n = C(r.vertexStripe, r.fragmentStripe)),
                                                        a.getAttribLocation(n, "aPosition"),
                                                        (c = a.createBuffer());
                                                    var e = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
                                                    a.bindBuffer(a.ARRAY_BUFFER, c),
                                                        a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW),
                                                        (d = a.getAttribLocation(n, "aTexturePosition")),
                                                        (_ = a.getUniformLocation(n, "uStripe")),
                                                        (f = a.getUniformLocation(n, "uTexture"));
                                                }
                                                (t = C(r.vertex, r.fragment)),
                                                    (l = a.createBuffer()),
                                                    a.bindBuffer(a.ARRAY_BUFFER, l),
                                                    a.bufferData(a.ARRAY_BUFFER, g, a.STATIC_DRAW),
                                                    (u = a.getAttribLocation(t, "aPosition")),
                                                    (p = a.createBuffer()),
                                                    (h = a.getAttribLocation(t, "aLumaPosition")),
                                                    (m = a.createBuffer()),
                                                    (E = a.getAttribLocation(t, "aChromaPosition"));
                                            })(),
                                        I)
                                    ) {
                                        var T = function (e, t, n) {
                                            var r = A.cropLeft / n,
                                                i = (A.cropLeft + A.cropWidth) / n,
                                                s = (A.cropTop + A.cropHeight) / A.height,
                                                o = A.cropTop / A.height,
                                                l = new Float32Array([r, s, i, s, r, o, r, o, i, s, i, o]);
                                            a.bindBuffer(a.ARRAY_BUFFER, e),
                                                a.bufferData(a.ARRAY_BUFFER, l, a.STATIC_DRAW);
                                        };
                                        T(p, 0, o.y.stride), T(m, 0, (o.u.stride * A.width) / A.chromaWidth);
                                    }
                                    y("uTextureY", I, o.y.stride, A.height, o.y.bytes),
                                        y("uTextureCb", I, o.u.stride, A.chromaHeight, o.u.bytes),
                                        y("uTextureCr", I, o.v.stride, A.chromaHeight, o.v.bytes),
                                        i.stripe &&
                                            (v("uTextureY", I, o.y.stride, A.height),
                                            v("uTextureCb", I, o.u.stride, A.chromaHeight),
                                            v("uTextureCr", I, o.v.stride, A.chromaHeight)),
                                        a.useProgram(t),
                                        a.viewport(0, 0, e.width, e.height),
                                        N("uTextureY", a.TEXTURE0, 0),
                                        N("uTextureCb", a.TEXTURE1, 1),
                                        N("uTextureCr", a.TEXTURE2, 2),
                                        a.bindBuffer(a.ARRAY_BUFFER, l),
                                        a.enableVertexAttribArray(u),
                                        a.vertexAttribPointer(u, 2, a.FLOAT, !1, 0, 0),
                                        a.bindBuffer(a.ARRAY_BUFFER, p),
                                        a.enableVertexAttribArray(h),
                                        a.vertexAttribPointer(h, 2, a.FLOAT, !1, 0, 0),
                                        a.bindBuffer(a.ARRAY_BUFFER, m),
                                        a.enableVertexAttribArray(E),
                                        a.vertexAttribPointer(E, 2, a.FLOAT, !1, 0, 0),
                                        a.drawArrays(a.TRIANGLES, 0, g.length / 2);
                                }),
                                (s.clear = function () {
                                    a.viewport(0, 0, e.width, e.height),
                                        a.clearColor(0, 0, 0, 0),
                                        a.clear(a.COLOR_BUFFER_BIT);
                                }),
                                s.clear(),
                                s
                            );
                        }
                        (i.stripe = !1),
                            (i.contextForCanvas = function (e) {
                                var t = {
                                    preferLowPowerToHighPerformance: !0,
                                    powerPreference: "low-power",
                                    failIfMajorPerformanceCaveat: !0,
                                    preserveDrawingBuffer: !0,
                                };
                                return e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
                            }),
                            (i.isAvailable = function () {
                                var e,
                                    t = document.createElement("canvas");
                                (t.width = 1), (t.height = 1);
                                try {
                                    e = i.contextForCanvas(t);
                                } catch (e) {
                                    return !1;
                                }
                                if (e) {
                                    var n = e.TEXTURE0,
                                        r = e.createTexture(),
                                        s = new Uint8Array(16),
                                        a = i.stripe ? 1 : 4,
                                        o = i.stripe ? e.RGBA : e.ALPHA,
                                        l = i.stripe ? e.NEAREST : e.LINEAR;
                                    return (
                                        e.activeTexture(n),
                                        e.bindTexture(e.TEXTURE_2D, r),
                                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, l),
                                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, l),
                                        e.texImage2D(e.TEXTURE_2D, 0, o, a, 4, 0, o, e.UNSIGNED_BYTE, s),
                                        !e.getError()
                                    );
                                }
                                return !1;
                            }),
                            (i.prototype = Object.create(t.prototype)),
                            (e.exports = i);
                    })();
                },
                627: (e, t, n) => {
                    !(function () {
                        "use strict";
                        var t = n(877);
                        e.exports = {
                            convertYCbCr: function (e, n) {
                                var r = 0 | e.format.width,
                                    i = 0 | e.format.height,
                                    s = 0 | t(e.format.width / e.format.chromaWidth),
                                    a = 0 | t(e.format.height / e.format.chromaHeight),
                                    o = e.y.bytes,
                                    l = e.u.bytes,
                                    u = e.v.bytes,
                                    c = 0 | e.y.stride,
                                    d = 0 | e.u.stride,
                                    _ = 0 | e.v.stride,
                                    f = r << 2,
                                    p = 0,
                                    h = 0,
                                    m = 0,
                                    E = 0,
                                    g = 0,
                                    A = 0,
                                    I = 0,
                                    T = 0,
                                    S = 0,
                                    y = 0,
                                    v = 0,
                                    N = 0,
                                    C = 0,
                                    R = 0,
                                    O = 0,
                                    b = 0,
                                    D = 0,
                                    L = 0;
                                if (1 == s && 1 == a)
                                    for (I = 0, T = f, L = 0, b = 0; b < i; b += 2) {
                                        for (
                                            m = ((h = (b * c) | 0) + c) | 0, E = (L * d) | 0, g = (L * _) | 0, O = 0;
                                            O < r;
                                            O += 2
                                        )
                                            (S = 0 | l[E++]),
                                                (N = (((409 * (y = 0 | u[g++])) | 0) - 57088) | 0),
                                                (C = (((100 * S) | 0) + ((208 * y) | 0) - 34816) | 0),
                                                (R = (((516 * S) | 0) - 70912) | 0),
                                                (v = (298 * o[h++]) | 0),
                                                (n[I] = (v + N) >> 8),
                                                (n[I + 1] = (v - C) >> 8),
                                                (n[I + 2] = (v + R) >> 8),
                                                (I += 4),
                                                (v = (298 * o[h++]) | 0),
                                                (n[I] = (v + N) >> 8),
                                                (n[I + 1] = (v - C) >> 8),
                                                (n[I + 2] = (v + R) >> 8),
                                                (I += 4),
                                                (v = (298 * o[m++]) | 0),
                                                (n[T] = (v + N) >> 8),
                                                (n[T + 1] = (v - C) >> 8),
                                                (n[T + 2] = (v + R) >> 8),
                                                (T += 4),
                                                (v = (298 * o[m++]) | 0),
                                                (n[T] = (v + N) >> 8),
                                                (n[T + 1] = (v - C) >> 8),
                                                (n[T + 2] = (v + R) >> 8),
                                                (T += 4);
                                        (I += f), (T += f), L++;
                                    }
                                else
                                    for (A = 0, b = 0; b < i; b++)
                                        for (
                                            D = 0, p = (b * c) | 0, E = ((L = b >> a) * d) | 0, g = (L * _) | 0, O = 0;
                                            O < r;
                                            O++
                                        )
                                            (S = 0 | l[E + (D = O >> s)]),
                                                (N = (((409 * (y = 0 | u[g + D])) | 0) - 57088) | 0),
                                                (C = (((100 * S) | 0) + ((208 * y) | 0) - 34816) | 0),
                                                (R = (((516 * S) | 0) - 70912) | 0),
                                                (v = (298 * o[p++]) | 0),
                                                (n[A] = (v + N) >> 8),
                                                (n[A + 1] = (v - C) >> 8),
                                                (n[A + 2] = (v + R) >> 8),
                                                (A += 4);
                            },
                        };
                    })();
                },
                877: (e) => {
                    !(function () {
                        "use strict";
                        e.exports = function (e) {
                            for (var t = 0, n = e >> 1; 0 != n; ) (n >>= 1), t++;
                            if (e !== 1 << t)
                                throw (
                                    "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " +
                                    e
                                );
                            return t;
                        };
                    })();
                },
                731: (e, t, n) => {
                    !(function () {
                        "use strict";
                        var t = n(487),
                            r = n(926),
                            i = n(895);
                        e.exports = {
                            FrameSink: t,
                            SoftwareFrameSink: r,
                            WebGLFrameSink: i,
                            attach: function (e, t) {
                                return ("webGL" in (t = t || {}) ? t.webGL : i.isAvailable())
                                    ? new i(e, t)
                                    : new r(e, t);
                            },
                        };
                    })();
                },
            },
            t = {};
        function n(r) {
            var i = t[r];
            if (void 0 !== i) return i.exports;
            var s = (t[r] = { exports: {} });
            return e[r](s, s.exports, n), s.exports;
        }
        (n.d = (e, t) => {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
            (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (n.r = (e) => {
                "u" > typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            });
        var r = {};
        return (
            (() => {
                "use strict";
                var e = r,
                    t = n(318);
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    Object.defineProperty(e, "OGVCompat", {
                        enumerable: !0,
                        get: function () {
                            return s.default;
                        },
                    }),
                    Object.defineProperty(e, "OGVLoader", {
                        enumerable: !0,
                        get: function () {
                            return a.default;
                        },
                    }),
                    Object.defineProperty(e, "OGVMediaError", {
                        enumerable: !0,
                        get: function () {
                            return o.default;
                        },
                    }),
                    Object.defineProperty(e, "OGVMediaType", {
                        enumerable: !0,
                        get: function () {
                            return l.default;
                        },
                    }),
                    Object.defineProperty(e, "OGVPlayer", {
                        enumerable: !0,
                        get: function () {
                            return u.default;
                        },
                    }),
                    Object.defineProperty(e, "OGVTimeRanges", {
                        enumerable: !0,
                        get: function () {
                            return c.default;
                        },
                    }),
                    (e.OGVVersion = void 0);
                var i = t(n(8)),
                    s = t(n(523)),
                    a = t(n(964)),
                    o = t(n(759)),
                    l = t(n(278)),
                    u = t(n(869)),
                    c = t(n(168)),
                    d = "1.8.9-20220406232920-cb5f7ff";
                (e.OGVVersion = d),
                    "object" === ("u" < typeof window ? "undefined" : (0, i.default)(window)) &&
                        ((window.OGVCompat = s.default),
                        (window.OGVLoader = a.default),
                        (window.OGVMediaError = o.default),
                        (window.OGVMediaType = l.default),
                        (window.OGVTimeRanges = c.default),
                        (window.OGVPlayer = u.default),
                        (window.OGVVersion = d));
            })(),
            r
        );
    })();
});
