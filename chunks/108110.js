e.exports = (function () {
    var e = {
            506: (e) => {
                ((e.exports = function (e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports));
            },
            575: (e) => {
                ((e.exports = function (e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports));
            },
            913: (e) => {
                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        ((r.enumerable = r.enumerable || !1),
                            (r.configurable = !0),
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r));
                    }
                }
                ((e.exports = function (e, n, r) {
                    return (
                        n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e
                    );
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports));
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
                                          var a = Object.getOwnPropertyDescriptor(i, t);
                                          return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value;
                                      }
                                  }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports),
                        i.apply(this, arguments)
                    );
                }
                ((e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports));
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
                ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
            },
            205: (e, t, n) => {
                var r = n(489);
                ((e.exports = function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Super expression must either be null or a function");
                    ((e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        t && r(e, t));
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports));
            },
            318: (e) => {
                ((e.exports = function (e) {
                    return e && e.__esModule ? e : { default: e };
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports));
            },
            585: (e, t, n) => {
                var r = n(8).default,
                    i = n(506);
                ((e.exports = function (e, t) {
                    if (t && ("object" === r(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                    return i(e);
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports));
            },
            489: (e) => {
                function t(n, r) {
                    return (
                        (e.exports = t =
                            Object.setPrototypeOf ||
                            function (e, t) {
                                return ((e.__proto__ = t), e);
                            }),
                        (e.exports.__esModule = !0),
                        (e.exports.default = e.exports),
                        t(n, r)
                    );
                }
                ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
            },
            331: (e, t, n) => {
                var r = n(754);
                ((e.exports = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)););
                    return e;
                }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports));
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
                ((e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports));
            },
            848: (e) => {
                (window,
                    (e.exports = (function (e) {
                        var t = {};
                        function n(r) {
                            if (t[r]) return t[r].exports;
                            var i = (t[r] = { i: r, l: !1, exports: {} });
                            return (e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports);
                        }
                        return (
                            (n.m = e),
                            (n.c = t),
                            (n.d = function (e, t, r) {
                                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                            }),
                            (n.r = function (e) {
                                ("u" > typeof Symbol &&
                                    Symbol.toStringTag &&
                                    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                                    Object.defineProperty(e, "__esModule", { value: !0 }));
                            }),
                            (n.t = function (e, t) {
                                if (
                                    (1 & t && (e = n(e)), 8 & t || (4 & t && "object" == typeof e && e && e.__esModule))
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
                                return (n.d(t, "a", t), t);
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
                                ((this.channels = e), (this.bufferSize = t), this.flush());
                            }
                            ((n.prototype.flush = function () {
                                ((this._buffers = []),
                                    (this._pendingBuffer = this.createBuffer(this.bufferSize)),
                                    (this._pendingPos = 0));
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
                                            a = this.bufferSize,
                                            s = 0;
                                        s < t;
                                        s++
                                    ) {
                                        for (var o = 0; o < n; o++) i[o][r] = e[o][s];
                                        ++r == a &&
                                            (this._buffers.push(i),
                                            (r = this._pendingPos = 0),
                                            (i = this._pendingBuffer = this.createBuffer(a)));
                                    }
                                    this._pendingPos = r;
                                }),
                                (n.prototype.prependBuffer = function (e) {
                                    if (!this.validate(e))
                                        throw "Invalid audio buffer passed to BufferQueue.prependBuffer";
                                    var t = this._buffers.slice(0);
                                    (t.push(this.trimBuffer(this._pendingBuffer, 0, this._pendingPos)),
                                        this.flush(),
                                        this.appendBuffer(e));
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
                                    for (var a = [], s = 0; s < this.channels; s++) a[s] = e[s].subarray(t, i);
                                    return a;
                                }),
                                (e.exports = n));
                        },
                        function (e, t, n) {
                            n(0);
                            var r = n(2),
                                i = n(4);
                            function a(e) {
                                ((this._options = e || {}),
                                    (this._backend = null),
                                    (this._resampleFractional = 0),
                                    (this._resampleLastSampleData = void 0),
                                    (this._tempoChanger = null));
                            }
                            ((a.prototype.rate = 0),
                                (a.prototype.targetRate = 0),
                                (a.prototype.channels = 0),
                                (a.prototype.bufferSize = 0),
                                Object.defineProperty(a.prototype, "bufferDuration", {
                                    get: function () {
                                        return this.targetRate ? this.bufferSize / this.targetRate : 0;
                                    },
                                }),
                                Object.defineProperty(a.prototype, "bufferThreshold", {
                                    get: function () {
                                        return this._backend ? this._backend.bufferThreshold / this.targetRate : 0;
                                    },
                                    set: function (e) {
                                        if (!this._backend)
                                            throw "Invalid state: AudioFeeder cannot set bufferThreshold before init";
                                        this._backend.bufferThreshold = Math.round(e * this.targetRate);
                                    },
                                }),
                                Object.defineProperty(a.prototype, "playbackPosition", {
                                    get: function () {
                                        return this._backend ? this.getPlaybackState().playbackPosition : 0;
                                    },
                                }),
                                Object.defineProperty(a.prototype, "outputPlaybackPosition", {
                                    get: function () {
                                        return this._backend ? this.getPlaybackState().outputPlaybackPosition : 0;
                                    },
                                }),
                                Object.defineProperty(a.prototype, "durationBuffered", {
                                    get: function () {
                                        return this._backend
                                            ? this.getPlaybackState().samplesQueued / this.targetRate
                                            : 0;
                                    },
                                }),
                                Object.defineProperty(a.prototype, "muted", {
                                    get: function () {
                                        if (this._backend) return this._backend.muted;
                                        throw "Invalid state: cannot get mute before init";
                                    },
                                    set: function (e) {
                                        if (!this._backend) throw "Invalid state: cannot set mute before init";
                                        this._backend.muted = e;
                                    },
                                }),
                                (a.prototype.mute = function () {
                                    this.muted = !0;
                                }),
                                (a.prototype.unmute = function () {
                                    this.muted = !1;
                                }),
                                Object.defineProperty(a.prototype, "volume", {
                                    get: function () {
                                        if (this._backend) return this._backend.volume;
                                        throw "Invalid state: cannot get volume before init";
                                    },
                                    set: function (e) {
                                        if (!this._backend) throw "Invalid state: cannot set volume before init";
                                        this._backend.volume = e;
                                    },
                                }),
                                Object.defineProperty(a.prototype, "tempo", {
                                    get: function () {
                                        if (this._tempoChanger) return this._tempoChanger.getTempo();
                                        throw "Invalid state: cannot get tempo before init";
                                    },
                                    set: function (e) {
                                        if (!this._tempoChanger) throw "Invalid state: cannot set tempo before init";
                                        this._tempoChanger.setTempo(e);
                                    },
                                }),
                                (a.prototype.init = function (e, t) {
                                    if (((this.channels = e), (this.rate = t), this._options.backendFactory))
                                        this._backend = this._options.backendFactory(e, t, this._options);
                                    else {
                                        if (!r.isSupported()) throw "No supported backend";
                                        this._backend = new r(e, t, this._options);
                                    }
                                    ((this.targetRate = this._backend.rate),
                                        (this.bufferSize = this._backend.bufferSize),
                                        (this._tempoChanger = i({
                                            sampleRate: this.targetRate,
                                            numChannels: e,
                                            tempo: 1,
                                        })),
                                        (this._backend.onstarved = function () {
                                            this.onstarved && this.onstarved();
                                        }.bind(this)),
                                        (this._backend.onbufferlow = function () {
                                            this.onbufferlow && this.onbufferlow();
                                        }.bind(this)));
                                }),
                                (a.prototype._resample = function (e) {
                                    var t = this.rate,
                                        n = this.channels,
                                        r = this._backend.rate,
                                        i = this._backend.channels;
                                    if (t == r && n == i) return e;
                                    var a,
                                        s = [],
                                        o = e[0].length,
                                        u = this._resampleFractional,
                                        d = (o * r) / t + u,
                                        l = Math.floor(d),
                                        c = d - l;
                                    a =
                                        t < r
                                            ? function (e, n, i, a) {
                                                  for (
                                                      var s = function (t) {
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
                                                      var d,
                                                          l = ((o + 1 - u) * t) / r - 1,
                                                          c = Math.floor(l),
                                                          f = Math.ceil(l);
                                                      ((d = c == f ? s(c) : s(c) * (f - l) + s(f) * (l - c)),
                                                          (n[o] = a * d));
                                                  }
                                              }
                                            : function (e, t, n, r) {
                                                  for (var i = 0; i < t.length; i++)
                                                      t[i] = r * e[((i * e.length) / t.length) | 0];
                                              };
                                    var f = 1;
                                    i > n && (f = Math.SQRT1_2);
                                    for (var h = 0; h < i; h++) {
                                        var p = h;
                                        h >= n && (p = 0);
                                        var _ = e[p],
                                            m = new Float32Array(l);
                                        (a(
                                            _,
                                            m,
                                            this._resampleLastSampleData ? this._resampleLastSampleData[p] : void 0,
                                            f,
                                        ),
                                            s.push(m));
                                    }
                                    return ((this._resampleFractional = c), (this._resampleLastSampleData = e), s);
                                }),
                                (a.prototype.bufferData = function (e) {
                                    if (!this._backend)
                                        throw "Invalid state: AudioFeeder cannot bufferData before init";
                                    var t = this._resample(e);
                                    ((t = this._tempoChanger.process(t)), this._backend.appendBuffer(t));
                                }),
                                (a.prototype.getPlaybackState = function () {
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
                                (a.prototype.waitUntilReady = function (e) {
                                    if (!this._backend)
                                        throw "Invalid state: AudioFeeder cannot waitUntilReady before init";
                                    this._backend.waitUntilReady(e);
                                }),
                                (a.prototype.start = function () {
                                    if (!this._backend) throw "Invalid state: AudioFeeder cannot start before init";
                                    this._backend.start();
                                }),
                                (a.prototype.stop = function () {
                                    if (!this._backend) throw "Invalid state: AudioFeeder cannot stop before init";
                                    this._backend.stop();
                                }),
                                (a.prototype.flush = function () {
                                    if (
                                        ((this._resampleFractional = 0),
                                        (this._resampleLastSampleData = void 0),
                                        !this._backend)
                                    )
                                        throw "Invalid state: AudioFeeder cannot flush before init";
                                    (this._tempoChanger.flush(this.durationBuffered), this._backend.flush());
                                }),
                                (a.prototype.close = function () {
                                    this._backend && (this._backend.close(), (this._backend = null));
                                }),
                                (a.prototype.onstarved = null),
                                (a.prototype.onbufferlow = null),
                                (a.isSupported = function () {
                                    return !!Float32Array && r.isSupported();
                                }),
                                (a.initSharedAudioContext = function () {
                                    return r.isSupported() ? r.initSharedAudioContext() : null;
                                }),
                                (e.exports = a));
                        },
                        function (e, t, n) {
                            var r = window.AudioContext || window.webkitAudioContext,
                                i = n(0),
                                a = n(3);
                            function s(e, t, n) {
                                var r = n.audioContext || s.initSharedAudioContext();
                                if (
                                    ((this._context = r),
                                    (this.output = n.output || r.destination),
                                    (this.rate = r.sampleRate),
                                    (this.channels = 2),
                                    n.bufferSize && (this.bufferSize = 0 | n.bufferSize),
                                    (this.bufferThreshold = 2 * this.bufferSize),
                                    (this._bufferQueue = new i(this.channels, this.bufferSize)),
                                    (this._playbackTimeAtBufferTail = r.currentTime),
                                    (this._queuedTime = 0),
                                    (this._delayedTime = 0),
                                    (this._dropped = 0),
                                    (this._liveBuffer = this._bufferQueue.createBuffer(this.bufferSize)),
                                    r.createScriptProcessor)
                                )
                                    this._node = r.createScriptProcessor(this.bufferSize, 0, this.channels);
                                else {
                                    if (!r.createJavaScriptNode) throw Error("Bad version of web audio API?");
                                    this._node = r.createJavaScriptNode(this.bufferSize, 0, this.channels);
                                }
                            }
                            ((s.prototype.bufferSize = 4096),
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
                                        i,
                                        s =
                                            "number" == typeof e.playbackTime
                                                ? e.playbackTime
                                                : this._context.currentTime + this.bufferSize / this.rate,
                                        o = this._playbackTimeAtBufferTail;
                                    if (
                                        (o < s && (this._delayedTime += s - o),
                                        this._bufferQueue.sampleCount() < this.bufferSize &&
                                            this.onstarved &&
                                            this.onstarved(),
                                        this._bufferQueue.sampleCount() < this.bufferSize)
                                    ) {
                                        for (t = 0; t < this.channels; t++)
                                            for (r = e.outputBuffer.getChannelData(t), i = 0; i < this.bufferSize; i++)
                                                r[i] = 0;
                                        this._dropped++;
                                    } else {
                                        var u = this.muted ? 0 : this.volume,
                                            d = this._bufferQueue.nextBuffer();
                                        if (d[0].length < this.bufferSize) throw "Audio buffer not expected length.";
                                        for (t = 0; t < this.channels; t++)
                                            for (
                                                n = d[t],
                                                    this._liveBuffer[t].set(d[t]),
                                                    r = e.outputBuffer.getChannelData(t),
                                                    i = 0;
                                                i < n.length;
                                                i++
                                            )
                                                r[i] = n[i] * u;
                                        ((this._queuedTime += this.bufferSize / this.rate),
                                            (this._playbackTimeAtBufferTail = s + this.bufferSize / this.rate),
                                            this._bufferQueue.sampleCount() <
                                                Math.max(this.bufferSize, this.bufferThreshold) &&
                                                this.onbufferlow &&
                                                a(this.onbufferlow.bind(this)));
                                    }
                                }),
                                (s.prototype._samplesQueued = function () {
                                    return (
                                        this._bufferQueue.sampleCount() +
                                        Math.floor(this._timeAwaitingPlayback() * this.rate)
                                    );
                                }),
                                (s.prototype._timeAwaitingPlayback = function () {
                                    return Math.max(0, this._playbackTimeAtBufferTail - this._context.currentTime);
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
                                    ((this._node.onaudioprocess = this._audioProcess.bind(this)),
                                        this._node.connect(this.output),
                                        (this._playbackTimeAtBufferTail = this._context.currentTime));
                                }),
                                (s.prototype.stop = function () {
                                    if (this._node) {
                                        var e = this._timeAwaitingPlayback();
                                        if (e > 0) {
                                            var t = Math.round(e * this.rate),
                                                n = this._liveBuffer ? this._liveBuffer[0].length : 0;
                                            (t > n
                                                ? (this._bufferQueue.prependBuffer(this._liveBuffer),
                                                  this._bufferQueue.prependBuffer(
                                                      this._bufferQueue.createBuffer(t - n),
                                                  ))
                                                : this._bufferQueue.prependBuffer(
                                                      this._bufferQueue.trimBuffer(this._liveBuffer, n - t, t),
                                                  ),
                                                (this._playbackTimeAtBufferTail -= e));
                                        }
                                        ((this._node.onaudioprocess = null), this._node.disconnect());
                                    }
                                }),
                                (s.prototype.flush = function () {
                                    this._bufferQueue.flush();
                                }),
                                (s.prototype.close = function () {
                                    (this.stop(), (this._context = null));
                                }),
                                (s.prototype.onstarved = null),
                                (s.prototype.onbufferlow = null),
                                (s.isSupported = function () {
                                    return !!r;
                                }),
                                (s.sharedAudioContext = null),
                                (s.initSharedAudioContext = function () {
                                    if (!s.sharedAudioContext && s.isSupported()) {
                                        var e,
                                            t = new r();
                                        if (t.createScriptProcessor) e = t.createScriptProcessor(1024, 0, 2);
                                        else {
                                            if (!t.createJavaScriptNode) throw Error("Bad version of web audio API?");
                                            e = t.createJavaScriptNode(1024, 0, 2);
                                        }
                                        (e.connect(t.destination), e.disconnect(), (s.sharedAudioContext = t));
                                    }
                                    return s.sharedAudioContext;
                                }),
                                (e.exports = s));
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
                                            (e.push(t),
                                                window.postMessage(
                                                    { nextTickBrowserPingMessage: !0 },
                                                    document.location.toString(),
                                                ));
                                        }
                                    );
                                }
                                return function (e) {
                                    setTimeout(e, 0);
                                };
                            })();
                        },
                        function (e, t, n) {
                            (window,
                                (e.exports = (function () {
                                    var e = [
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
                                                ((r = n(0)),
                                                    (i = n(2)),
                                                    (e.exports = function (e) {
                                                        var t = (e = e || {}).sampleRate || 44100,
                                                            n = e.wsizeLog || 11,
                                                            a = e.tempo || 1,
                                                            s = (e.numChannels, Math.pow(2, 50 / 1200) - 1),
                                                            o = 1 << n,
                                                            u = i(n),
                                                            d = 1 << (n - 2);
                                                        d -= d % 100;
                                                        for (
                                                            var l = r.float_array(o + d + 5),
                                                                c = r.float_array(o + d + 5),
                                                                f = d,
                                                                h = d,
                                                                p = r.float_array(o),
                                                                _ = 0;
                                                            _ < o;
                                                            _++
                                                        )
                                                            p[_] = 0.5 * (1 - Math.cos((2 * Math.PI * _) / o));
                                                        var m = 1 + (o >> 1),
                                                            y = r.float_array(m),
                                                            g = r.float_array(m),
                                                            v = r.float_array(m),
                                                            b = r.float_array(m),
                                                            w = r.float_array(m),
                                                            V = r.float_array(m),
                                                            T = 1 + (m >> 1),
                                                            k = [0, 0],
                                                            A = [],
                                                            E = [],
                                                            P = [],
                                                            x = [];
                                                        for (_ = 0; _ < 2; _++)
                                                            (A.push(r.float_array(T)),
                                                                E.push(r.float_array(T)),
                                                                P.push(r.float_array(T)),
                                                                x.push(r.float_array(m)));
                                                        var S = r.float_array(T),
                                                            O = r.float_array(T),
                                                            R = 0,
                                                            M = 0,
                                                            F = [{ in_time: 0, out_time: 0, tempo: a }],
                                                            C = 0,
                                                            D = 0,
                                                            z = 1,
                                                            I = 0,
                                                            L = 0,
                                                            j = 0,
                                                            B = 0,
                                                            N = {
                                                                mapOutputToInputTime: function (e) {
                                                                    for (
                                                                        var t = F.length - 1;
                                                                        e < F[t].out_time && t > 0;
                                                                    )
                                                                        t--;
                                                                    var n = F[t];
                                                                    return n.in_time + n.tempo * (e - n.out_time);
                                                                },
                                                                flush: function (e) {
                                                                    ((I = 0), (k = [0, 0]), (D = 0), (B = 0), (j = 0));
                                                                    for (var t = 0; t < 2; t++)
                                                                        for (var n = 0; n < m; n++) x[t][n] = 0;
                                                                    for (t = 0; t < l.length; t++) l[t] = 0;
                                                                    for (t = 0; t < c.length; t++) c[t] = 0;
                                                                    if (e) {
                                                                        ((M = Math.max(0, M - e)),
                                                                            (R = N.mapOutputToInputTime(M)));
                                                                        for (
                                                                            var r = F.length - 1;
                                                                            M <= F[r].out_time && r >= 0;
                                                                        )
                                                                            (F.pop(), r--);
                                                                        F.push({ in_time: R, out_time: M, tempo: a });
                                                                    }
                                                                },
                                                                getTempo: function () {
                                                                    return a;
                                                                },
                                                                setTempo: function (e) {
                                                                    ((f = h = d),
                                                                        e >= 1
                                                                            ? (h = Math.round(f / e))
                                                                            : (f = Math.round(h * e)),
                                                                        (L = (1 / e - h / f) * f),
                                                                        (z = (function (e, t) {
                                                                            for (
                                                                                var n = (e.length / t) | 0,
                                                                                    r = 0,
                                                                                    i = 0;
                                                                                i < n;
                                                                                i++
                                                                            )
                                                                                r += e[i * t];
                                                                            return 0.9 / r;
                                                                        })(p, h)),
                                                                        (a = e));
                                                                    var t = F[F.length - 1];
                                                                    t.out_time == M
                                                                        ? (t.tempo = e)
                                                                        : F.push({ in_time: R, out_time: M, tempo: e });
                                                                },
                                                            };
                                                        (N.flush(0), N.setTempo(a));
                                                        var G = function (e, t, n) {
                                                                var r = Math.floor(n),
                                                                    i = r % 2 == 1 ? -1 : 1;
                                                                return Math.atan2(
                                                                    i * (t[r] - t[r + 1]),
                                                                    i * (e[r] - e[r + 1]),
                                                                );
                                                            },
                                                            U = function (e, t, n, r, i) {
                                                                var a,
                                                                    s = ((2 * Math.PI) / o) * 0.5 * (r + t) * f;
                                                                return (
                                                                    ((a = e - n - s) -
                                                                        2 * Math.PI * Math.round(a / (2 * Math.PI)) +
                                                                        s) *
                                                                    i
                                                                );
                                                            },
                                                            $ = function (e, t, n, r, i, a) {
                                                                for (
                                                                    var u = e % 2,
                                                                        d = 1 - u,
                                                                        l = x[d],
                                                                        c = k[d],
                                                                        f = A[d],
                                                                        h = E[d],
                                                                        p = P[d],
                                                                        _ = x[u],
                                                                        m = 1;
                                                                    m < _.length;
                                                                    m++
                                                                )
                                                                    _[m] = t[m] * t[m] + n[m] * n[m];
                                                                var y = A[u],
                                                                    g = (k[u] = (function (e, t) {
                                                                        for (var n = 0, r = 0; r < e.length; r++)
                                                                            e[r] > n && (n = e[r]);
                                                                        var i = 1e-8 * n,
                                                                            a = 1,
                                                                            o = 1;
                                                                        for (t[0] = 1, r = 2; r < e.length; r++) {
                                                                            var u = r * s;
                                                                            if (
                                                                                e[r] > i &&
                                                                                e[r] > e[r - 1] &&
                                                                                e[r] >= e[r + 1]
                                                                            ) {
                                                                                var d =
                                                                                    r +
                                                                                    (e[r - 1] - e[r + 1]) /
                                                                                        (2 *
                                                                                            (e[r - 1] -
                                                                                                2 * e[r] +
                                                                                                e[r + 1]));
                                                                                d - t[a - 1] > u
                                                                                    ? ((t[a++] = d), (o = r))
                                                                                    : e[r] > e[o] &&
                                                                                      ((t[a - 1] = d), (o = r));
                                                                            }
                                                                        }
                                                                        return a;
                                                                    })(_, y)),
                                                                    v = E[u],
                                                                    b = P[u];
                                                                if (0 != e && 0 != g) {
                                                                    var w = 0;
                                                                    for (j = 0; j < g; j++) {
                                                                        for (B = y[j]; y[j] > f[w] && w != c;) ++w;
                                                                        var V = w;
                                                                        w > 0 && B - f[w - 1] < f[w] - B && (V = w - 1);
                                                                        var T = B * s;
                                                                        if (
                                                                            Math.abs(f[V] - B) < T &&
                                                                            l[Math.round(f[V])] > 0.1 * _[Math.round(B)]
                                                                        ) {
                                                                            var R = G(t, n, B),
                                                                                M =
                                                                                    h[V] +
                                                                                    p[V] +
                                                                                    U(R, B, h[V], f[V], a) -
                                                                                    R;
                                                                            ((v[j] = R),
                                                                                (b[j] = M),
                                                                                (S[j] = Math.cos(M)),
                                                                                (O[j] = Math.sin(M)));
                                                                        } else
                                                                            ((v[j] = G(t, n, B)),
                                                                                (b[j] = 0),
                                                                                (S[j] = 1),
                                                                                (O[j] = 0));
                                                                    }
                                                                    y[g] = 2 * o;
                                                                    var F = y[(V = 0)],
                                                                        C = y[V + 1],
                                                                        D = S[V],
                                                                        z = O[V];
                                                                    for (m = 1; m < t.length - 1; m++) {
                                                                        m >= F &&
                                                                            m - F > C - m &&
                                                                            ((F = y[++V]),
                                                                            (C = y[V + 1]),
                                                                            (D = S[V]),
                                                                            (z = O[V]));
                                                                        var I = t[m] * D - n[m] * z,
                                                                            L = t[m] * z + n[m] * D;
                                                                        ((t[m] = I), (n[m] = L));
                                                                    }
                                                                } else
                                                                    for (var j = 0; j < g; j++) {
                                                                        var B = y[j];
                                                                        h[j] = p[j] = G(t, n, B);
                                                                    }
                                                            },
                                                            Z = function () {
                                                                var e = 0 | (I += 2 * L);
                                                                I -= e;
                                                                for (var t = 0; t < o; t++)
                                                                    ((u.m_re[t] = p[t] * l[t]),
                                                                        (u.m_im[t] = p[t] * l[f + t]));
                                                                (r.blit(l, 2 * f, l, 0, o - f),
                                                                    u.inplace(!1),
                                                                    u.unpack(y, g, v, b),
                                                                    $(C, y, g, 0, 0, h / f),
                                                                    $(C + 1, v, b, 0, 0, (h + e) / f),
                                                                    r.blit(v, 0, w, 0, m),
                                                                    r.blit(b, 0, V, 0, m),
                                                                    u.repack(y, g, v, b),
                                                                    u.inplace(!0));
                                                                var n = c.length;
                                                                for (r.blit(c, D, c, 0, n - D), t = n - D; t < n; t++)
                                                                    c[t] = 0;
                                                                var i = 0,
                                                                    a = z;
                                                                for (t = 0; t < h; t++)
                                                                    Math.abs(2 * u.m_re[t]) > i &&
                                                                        (i = Math.abs(2 * u.m_re[t]));
                                                                for (t = 0; t < o - h; t++)
                                                                    Math.abs(u.m_re[t + h + e] + u.m_im[t]) > i &&
                                                                        (i = Math.abs(u.m_re[t + h + e] + u.m_im[t]));
                                                                for (t = o - h; t < o; t++)
                                                                    Math.abs(2 * u.m_im[t]) > i &&
                                                                        (i = Math.abs(2 * u.m_im[t]));
                                                                var s = 1 / Math.floor(o / (2 * h));
                                                                for (a * i > s && (a = s / i), t = 0; t < o; t++)
                                                                    ((c[t] += a * u.m_re[t]),
                                                                        (c[t + h + e] += a * u.m_im[t]));
                                                                return ((C += 2), (D = 2 * h + e));
                                                            };
                                                        return (
                                                            (N.process = function (e) {
                                                                var n = e[0].length,
                                                                    i = e[0];
                                                                if (e.length > 1) {
                                                                    i = r.float_array(e[0].length);
                                                                    for (var s = 1 / e.length, u = 0; u < e.length; u++)
                                                                        for (var d = 0; d < n; d++) i[d] += s * e[u][d];
                                                                }
                                                                if (1 == a) {
                                                                    if (B + j > 0) {
                                                                        var p = B + j + n,
                                                                            _ = [];
                                                                        for (u = 0; u < e.length; u++) {
                                                                            var m = r.float_array(p);
                                                                            (r.blit(c, 0, m, 0, B),
                                                                                r.blit(l, 0, m, B, j),
                                                                                r.blit(e[u], 0, m, B + j, n),
                                                                                _.push(m));
                                                                        }
                                                                        (N.flush(0), (n = p), (e = _));
                                                                    }
                                                                    return ((R += n / t), (M += n / t), e);
                                                                }
                                                                var y =
                                                                        2 *
                                                                        Math.floor(
                                                                            Math.max(0, j + n - (o - f)) / (2 * f),
                                                                        ),
                                                                    g = B + h * y + Math.floor(I + L * y);
                                                                B > g && (g = B);
                                                                var v = r.float_array(g);
                                                                r.blit(c, 0, v, 0, B);
                                                                for (var b = 0, w = B, V = 0, T = 0; ;) {
                                                                    var k = o + f - j;
                                                                    if (b + k > n) {
                                                                        (r.blit(i, b, l, j, n - b),
                                                                            (j += n - b),
                                                                            (b = n));
                                                                        break;
                                                                    }
                                                                    (k <= 0
                                                                        ? (j -= 2 * f)
                                                                        : (r.blit(i, b, l, j, k),
                                                                          (b += k),
                                                                          (j = o - f)),
                                                                        (T = Z()),
                                                                        (R += (2 * f) / t),
                                                                        (M += T / t),
                                                                        (V = w + T - g) < 0 && (V = 0),
                                                                        r.blit(c, 0, v, w, T - V),
                                                                        (w += T));
                                                                }
                                                                (r.blit(c, T - V, c, 0, V), (B = V));
                                                                var A = [];
                                                                for (u = 0; u < e.length; u++) A.push(v);
                                                                return A;
                                                            }),
                                                            N
                                                        );
                                                    }));
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
                                                                m_revTgt: Array(t),
                                                            },
                                                            i = 0;
                                                        i < t;
                                                        i++
                                                    ) {
                                                        for (var a = i, s = 0, o = 0; o < e; o++)
                                                            ((s <<= 1), (s |= 1 & a), (a >>= 1));
                                                        n.m_revTgt[i] = s;
                                                    }
                                                    ((n.twiddleRe = r.float_array(n.m_logN)),
                                                        (n.twiddleIm = r.float_array(n.m_logN)));
                                                    for (var u = 1, d = 0; d < n.m_logN; d++) {
                                                        var l = 2 * u * Math.PI * n.m_invN;
                                                        ((n.twiddleRe[d] = Math.cos(l)),
                                                            (n.twiddleIm[d] = Math.sin(l)),
                                                            (u <<= 1));
                                                    }
                                                    n.inplace = function (e) {
                                                        var t = n.m_re,
                                                            r = n.m_im,
                                                            i = n.m_N,
                                                            a = n.m_logN,
                                                            s = i >> 1,
                                                            o = i >> 1,
                                                            u = i;
                                                        if (e)
                                                            for (var d = 1 / i, l = 0; l < i; l++)
                                                                ((t[l] *= d), (r[l] *= d));
                                                        for (var c = 0; c < a; c++) {
                                                            var f = n.twiddleRe[c],
                                                                h = n.twiddleIm[c];
                                                            e || (h *= -1);
                                                            for (var p = 0; p < i;) {
                                                                for (
                                                                    var _ = p, m = p + o, y = 1, g = 0, v = 0;
                                                                    v < s;
                                                                    v++
                                                                ) {
                                                                    var b = t[_],
                                                                        w = r[_],
                                                                        V = t[m],
                                                                        T = r[m];
                                                                    ((t[_] = b + V),
                                                                        (r[_] = w + T),
                                                                        (V = b - V),
                                                                        (T = w - T),
                                                                        (t[m] = V * y - T * g),
                                                                        (r[m] = V * g + T * y),
                                                                        _++,
                                                                        m++);
                                                                    var k = y;
                                                                    ((y = y * f - g * h), (g = k * h + g * f));
                                                                }
                                                                p += u;
                                                            }
                                                            ((s >>= 1), (o >>= 1), (u >>= 1));
                                                        }
                                                        for (var A, E, P = n.m_revTgt, x = 0; x < i; x++)
                                                            P[x] > x &&
                                                                ((E = t[(A = P[x])]),
                                                                (t[A] = t[x]),
                                                                (t[x] = E),
                                                                (E = r[A]),
                                                                (r[A] = r[x]),
                                                                (r[x] = E));
                                                    };
                                                    var c = t >> 1;
                                                    return (
                                                        (n.unpack = function (e, r, i, a) {
                                                            ((e[0] = n.m_re[0]),
                                                                (i[0] = n.m_im[0]),
                                                                (r[0] = a[0] = 0),
                                                                (e[c] = n.m_re[c]),
                                                                (i[c] = n.m_im[c]),
                                                                (r[c] = a[c] = 0));
                                                            for (var s = 1; s < c; s++)
                                                                ((e[s] = (n.m_re[s] + n.m_re[t - s]) / 2),
                                                                    (r[s] = (n.m_im[s] - n.m_im[t - s]) / 2),
                                                                    (i[s] = (n.m_im[s] + n.m_im[t - s]) / 2),
                                                                    (a[s] = (-n.m_re[s] + n.m_re[t - s]) / 2));
                                                        }),
                                                        (n.repack = function (e, r, i, a) {
                                                            ((n.m_re[0] = e[0]),
                                                                (n.m_im[0] = i[0]),
                                                                (n.m_re[c] = e[c]),
                                                                (n.m_im[c] = i[c]));
                                                            for (var s = 1; s < c; s++)
                                                                ((n.m_re[s] = e[s] - a[s]),
                                                                    (n.m_im[s] = r[s] + i[s]),
                                                                    (n.m_re[t - s] = e[s] + a[s]),
                                                                    (n.m_im[t - s] = -r[s] + i[s]));
                                                        }),
                                                        n
                                                    );
                                                };
                                            },
                                        ],
                                        t = {};
                                    function n(r) {
                                        if (t[r]) return t[r].exports;
                                        var i = (t[r] = { i: r, l: !1, exports: {} });
                                        return (e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports);
                                    }
                                    return (
                                        (n.m = e),
                                        (n.c = t),
                                        (n.d = function (e, t, r) {
                                            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
                                        }),
                                        (n.r = function (e) {
                                            ("u" > typeof Symbol &&
                                                Symbol.toStringTag &&
                                                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                                                Object.defineProperty(e, "__esModule", { value: !0 }));
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
                                            return (n.d(t, "a", t), t);
                                        }),
                                        (n.o = function (e, t) {
                                            return Object.prototype.hasOwnProperty.call(e, t);
                                        }),
                                        (n.p = ""),
                                        n((n.s = 1))
                                    );
                                })()));
                        },
                    ])));
            },
            893: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913));
                t.default = (function () {
                    function e(t) {
                        ((0, i.default)(this, e),
                            (this.lower = t.start),
                            (this.upper = t.end),
                            (this.onprocess = t.process),
                            (this.position = 0),
                            (this.n = 0));
                    }
                    return (
                        (0, a.default)(e, [
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
                                    return (this.iterate(), this);
                                },
                            },
                            {
                                key: "left",
                                value: function () {
                                    return ((this.upper = this.position), this.iterate());
                                },
                            },
                            {
                                key: "right",
                                value: function () {
                                    return ((this.lower = this.position), this.iterate());
                                },
                            },
                        ]),
                        e
                    );
                })();
            },
            523: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913));
                t.default = new ((function () {
                    function e() {
                        (0, i.default)(this, e);
                    }
                    return (
                        (0, a.default)(e, [
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
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913)),
                    s = r(n(205)),
                    o = r(n(585)),
                    u = r(n(754));
                t.default = (function (e) {
                    (0, s.default)(r, e);
                    var t,
                        n =
                            ((t = (function () {
                                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                        !0
                                    );
                                } catch (e) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var e,
                                    n = (0, u.default)(r);
                                return (
                                    (e = t
                                        ? Reflect.construct(n, arguments, (0, u.default)(this).constructor)
                                        : n.apply(this, arguments)),
                                    (0, o.default)(this, e)
                                );
                            });
                    function r() {
                        return ((0, i.default)(this, r), n.apply(this, arguments));
                    }
                    return (
                        (0, a.default)(r, [
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
                        r
                    );
                })((0, r(n(580)).default)({ loadedMetadata: !1, audioFormat: null, audioBuffer: null, cpuTime: 0 }));
            },
            319: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913)),
                    s = r(n(205)),
                    o = r(n(585)),
                    u = r(n(754));
                t.default = (function (e) {
                    (0, s.default)(r, e);
                    var t,
                        n =
                            ((t = (function () {
                                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                        !0
                                    );
                                } catch (e) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var e,
                                    n = (0, u.default)(r);
                                return (
                                    (e = t
                                        ? Reflect.construct(n, arguments, (0, u.default)(this).constructor)
                                        : n.apply(this, arguments)),
                                    (0, o.default)(this, e)
                                );
                            });
                    function r() {
                        return ((0, i.default)(this, r), n.apply(this, arguments));
                    }
                    return (
                        (0, a.default)(r, [
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
                        r
                    );
                })((0, r(n(580)).default)({ loadedMetadata: !1, videoFormat: null, frameBuffer: null, cpuTime: 0 }));
            },
            445: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913)),
                    s = r(n(539)),
                    o = "1.8.9-20220406232920-cb5f7ff",
                    u = {
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
                        ((0, i.default)(this, e), (this.base = this.defaultBase()));
                    }
                    return (
                        (0, a.default)(e, [
                            { key: "defaultBase", value: function () {} },
                            {
                                key: "wasmSupported",
                                value: function () {
                                    return s.default.wasmSupported();
                                },
                            },
                            {
                                key: "scriptForClass",
                                value: function (e) {
                                    return u[e];
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
                                        a = this.urlForClass(e),
                                        s = function (t) {
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
                                        ? t(s)
                                        : this.loadScript(a, function () {
                                              t(s);
                                          });
                                },
                            },
                        ]),
                        e
                    );
                })();
            },
            964: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913)),
                    s = r(n(525)),
                    o = r(n(205)),
                    u = r(n(585)),
                    d = r(n(754)),
                    l = r(n(408)),
                    c = r(n(319)),
                    f = r(n(445)),
                    h = {
                        audio: { proxy: l.default, worker: "ogv-worker-audio.js" },
                        video: { proxy: c.default, worker: "ogv-worker-video.js" },
                    },
                    p = {
                        OGVDecoderAudioOpusW: "audio",
                        OGVDecoderAudioVorbisW: "audio",
                        OGVDecoderVideoTheoraW: "video",
                        OGVDecoderVideoVP8W: "video",
                        OGVDecoderVideoVP9W: "video",
                        OGVDecoderVideoVP9SIMDW: "video",
                        OGVDecoderVideoAV1W: "video",
                        OGVDecoderVideoAV1SIMDW: "video",
                    },
                    _ = new ((function (e) {
                        (0, o.default)(r, e);
                        var t,
                            n =
                                ((t = (function () {
                                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return (
                                            Boolean.prototype.valueOf.call(
                                                Reflect.construct(Boolean, [], function () {}),
                                            ),
                                            !0
                                        );
                                    } catch (e) {
                                        return !1;
                                    }
                                })()),
                                function () {
                                    var e,
                                        n = (0, d.default)(r);
                                    return (
                                        (e = t
                                            ? Reflect.construct(n, arguments, (0, d.default)(this).constructor)
                                            : n.apply(this, arguments)),
                                        (0, u.default)(this, e)
                                    );
                                });
                        function r() {
                            var e;
                            return (
                                (0, i.default)(this, r),
                                ((e = n.call(this)).scriptStatus = {}),
                                (e.scriptCallbacks = {}),
                                e
                            );
                        }
                        return (
                            (0, a.default)(r, [
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
                                    value: function (e, t, n) {
                                        (n = n || {}).worker
                                            ? this.workerProxy(e, t)
                                            : (0, s.default)((0, d.default)(r.prototype), "loadClass", this).call(
                                                  this,
                                                  e,
                                                  t,
                                                  n,
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
                                            ((this.scriptStatus[e] = "loading"), (this.scriptCallbacks[e] = [t]));
                                            var r = document.createElement("script"),
                                                i = function (t) {
                                                    var r = n.scriptCallbacks[e];
                                                    (delete n.scriptCallbacks[e],
                                                        (n.scriptStatus[e] = "done"),
                                                        r.forEach(function (e) {
                                                            e();
                                                        }));
                                                };
                                            (r.addEventListener("load", i),
                                                r.addEventListener("error", i),
                                                (r.src = e),
                                                document.querySelector("head").appendChild(r));
                                        }
                                    },
                                },
                                {
                                    key: "workerProxy",
                                    value: function (e, t) {
                                        var n = h[p[e]];
                                        if (!n) throw Error("Requested worker for class with no proxy: " + e);
                                        var r,
                                            i = n.proxy,
                                            a = n.worker,
                                            s = this.urlForScript(this.scriptForClass(e)),
                                            o = this.urlForScript(a),
                                            u = function (t) {
                                                return new i(r, e, t);
                                            };
                                        if (o.match(/^https?:|\/\//i)) {
                                            var d,
                                                l,
                                                c,
                                                f,
                                                m,
                                                y = function () {
                                                    if (1 == g && 1 == v) {
                                                        var e =
                                                            c +
                                                            " " +
                                                            f +
                                                            "\nOGVLoader.base = " +
                                                            JSON.stringify(_.base);
                                                        try {
                                                            m = new Blob([e], { type: "application/javascript" });
                                                        } catch (t) {
                                                            ((window.BlobBuilder =
                                                                window.BlobBuilder ||
                                                                window.WebKitBlobBuilder ||
                                                                window.MozBlobBuilder),
                                                                (m = new BlobBuilder()).append(e),
                                                                (m = m.getBlob()));
                                                        }
                                                        ((r = new Worker(URL.createObjectURL(m))),
                                                            t(function (e) {
                                                                return Promise.resolve(new u(e));
                                                            }));
                                                    }
                                                },
                                                g = !1,
                                                v = !1;
                                            ((d = new XMLHttpRequest()).open("GET", s, !0),
                                                (d.onreadystatechange = function () {
                                                    4 == d.readyState &&
                                                        200 == d.status &&
                                                        ((c = d.responseText), (g = !0), y());
                                                }),
                                                d.send(),
                                                (l = new XMLHttpRequest()).open("GET", o, !0),
                                                (l.onreadystatechange = function () {
                                                    4 == l.readyState &&
                                                        200 == l.status &&
                                                        ((f = l.responseText), (v = !0), y());
                                                }),
                                                l.send());
                                        } else
                                            ((r = new Worker(o)),
                                                t(function (e) {
                                                    return Promise.resolve(new u(e));
                                                }));
                                    },
                                },
                            ]),
                            r
                        );
                    })(f.default))();
                t.default = _;
            },
            759: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(913)),
                    a = r(n(575)),
                    s = r(n(309)),
                    o = {
                        MEDIA_ERR_ABORTED: 1,
                        MEDIA_ERR_NETWORK: 2,
                        MEDIA_ERR_DECODE: 3,
                        MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
                    },
                    u = (0, i.default)(function e(t, n) {
                        ((0, a.default)(this, e), (this.code = t), (this.message = n));
                    });
                ((0, s.default)(u, o), (0, s.default)(u.prototype, o), (t.default = u));
            },
            278: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(913)),
                    a = r(n(575));
                function s(e, t, n) {
                    var r = e.split(t, n).map(function (e) {
                        return e.replace(/^\s+/, "").replace(/\s+$/, "");
                    });
                    if ("number" == typeof n) for (; r.length < n;) r.push(null);
                    return r;
                }
                t.default = (0, i.default)(function e(t) {
                    ((0, a.default)(this, e),
                        (t = String(t)),
                        (this.major = null),
                        (this.minor = null),
                        (this.codecs = null));
                    var n = s(t, ";");
                    if (n.length) {
                        var r = n.shift();
                        if (r) {
                            var i = s(r, "/", 2);
                            ((this.major = i[0]), (this.minor = i[1]));
                        }
                        for (var o in n) {
                            var u = n[o].match(/^codecs\s*=\s*"(.*?)"$/);
                            if (u) {
                                this.codecs = s(u[1], ",");
                                break;
                            }
                        }
                    }
                });
            },
            869: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i,
                    a = r(n(575)),
                    s = r(n(913)),
                    o = r(n(506)),
                    u = r(n(205)),
                    d = r(n(585)),
                    l = r(n(754)),
                    c = r(n(8)),
                    f = r(n(731)),
                    h = r(n(936)),
                    p = r(n(848)),
                    _ = r(n(964)),
                    m = r(n(893)),
                    y = r(n(309)),
                    g = r(n(759)),
                    v = r(n(278)),
                    b = r(n(168)),
                    w = r(n(625)),
                    V = r(n(302)),
                    T = (function () {
                        if ("function" == typeof setImmediate) return setImmediate;
                        var e = new MessageChannel(),
                            t = [];
                        return (
                            (e.port1.onmessage = function (e) {
                                t.shift()();
                            }),
                            function (n) {
                                (t.push(n), e.port2.postMessage({}));
                            }
                        );
                    })(),
                    k = {
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
                    A = "INITIAL",
                    E = "SEEKING_END",
                    P = "LOADED",
                    x = "PRELOAD",
                    S = "READY",
                    O = "PLAYING",
                    R = "SEEKING",
                    M = "ERROR",
                    F = "NOT_SEEKING",
                    C = "BISECT_TO_TARGET",
                    D = "BISECT_TO_KEYPOINT",
                    z = "LINEAR_TO_TARGET",
                    I = "fast";
                function L() {
                    var e = document.createElement("ogvjs");
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, Object.getPrototypeOf(this))
                            : (e.__proto__ = this.__proto__),
                        e
                    );
                }
                ((i =
                    "u" < typeof performance || void 0 === (0, c.default)(performance.now)
                        ? Date.now
                        : performance.now.bind(performance)),
                    (L.prototype = Object.create(HTMLElement.prototype, {})));
                var j = (function (e) {
                    (0, u.default)(r, e);
                    var t,
                        n =
                            ((t = (function () {
                                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return (
                                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                                        !0
                                    );
                                } catch (e) {
                                    return !1;
                                }
                            })()),
                            function () {
                                var e,
                                    n = (0, l.default)(r);
                                return (
                                    (e = t
                                        ? Reflect.construct(n, arguments, (0, l.default)(this).constructor)
                                        : n.apply(this, arguments)),
                                    (0, d.default)(this, e)
                                );
                            });
                    function r(e) {
                        var t;
                        if (
                            ((0, a.default)(this, r),
                            (t = n.call(this)),
                            ((e = e || {}).base = e.base || _.default.base),
                            (t._options = e),
                            (t._instanceId = "ogvjs" + ++r.instanceCount),
                            void 0 !== e.worker ? (t._enableWorker = !!e.worker) : (t._enableWorker = !!window.Worker),
                            !_.default.wasmSupported())
                        )
                            throw Error("WebAssembly not supported");
                        return (
                            (t._enableThreading = !!e.threading),
                            (t._enableSIMD = !!e.simd),
                            (t._state = A),
                            (t._seekState = F),
                            (t._detectedType = null),
                            (t._canvas = document.createElement("canvas")),
                            (t._frameSink = null),
                            (t.className = t._instanceId),
                            (0, y.default)((0, o.default)(t), k),
                            (t._view = t._canvas),
                            (t._view.style.position = "absolute"),
                            (t._view.style.top = "0"),
                            (t._view.style.left = "0"),
                            (t._view.style.width = "100%"),
                            (t._view.style.height = "100%"),
                            (t._view.style.objectFit = "contain"),
                            t.appendChild(t._view),
                            (t._startTime = i()),
                            (t._codec = null),
                            (t._audioInfo = null),
                            (t._videoInfo = null),
                            (t._actionQueue = []),
                            (t._audioFeeder = null),
                            (t._muted = !1),
                            (t._initialPlaybackPosition = 0),
                            (t._initialPlaybackOffset = 0),
                            (t._prebufferingAudio = !1),
                            (t._initialSeekTime = 0),
                            (t._currentSrc = ""),
                            (t._crossOrigin = null),
                            (t._streamEnded = !1),
                            (t._mediaError = null),
                            (t._dataEnded = !1),
                            (t._byteLength = 0),
                            (t._duration = null),
                            (t._lastSeenTimestamp = null),
                            t._nextProcessingTimer,
                            (t._nextFrameTimer = null),
                            (t._loading = !1),
                            (t._started = !1),
                            (t._paused = !0),
                            (t._ended = !1),
                            (t._startedPlaybackInDocument = !1),
                            (t._stream = void 0),
                            (t._framesProcessed = 0),
                            (t._targetPerFrameTime = 1e3 / 60),
                            (t._actualPerFrameTime = 0),
                            (t._totalFrameTime = 0),
                            (t._totalFrameCount = 0),
                            (t._playTime = 0),
                            (t._bufferTime = 0),
                            (t._drawingTime = 0),
                            (t._proxyTime = 0),
                            (t._totalJitter = 0),
                            (t._droppedAudio = 0),
                            (t._delayedAudio = 0),
                            (t._lateFrames = 0),
                            (t._poster = ""),
                            (t._thumbnail = null),
                            (t._frameEndTimestamp = 0),
                            (t._audioEndTimestamp = 0),
                            (t._decodedFrames = []),
                            (t._pendingFrames = []),
                            (t._lastFrameDecodeTime = 0),
                            (t._lastFrameVideoCpuTime = 0),
                            (t._lastFrameAudioCpuTime = 0),
                            (t._lastFrameDemuxerCpuTime = 0),
                            (t._lastFrameDrawingTime = 0),
                            (t._lastFrameBufferTime = 0),
                            (t._lastFrameProxyTime = 0),
                            (t._lastVideoCpuTime = 0),
                            (t._lastAudioCpuTime = 0),
                            (t._lastDemuxerCpuTime = 0),
                            (t._lastBufferTime = 0),
                            (t._lastProxyTime = 0),
                            (t._lastDrawingTime = 0),
                            (t._lastFrameTimestamp = 0),
                            (t._currentVideoCpuTime = 0),
                            (t._lastTimeUpdate = 0),
                            (t._timeUpdateInterval = 250),
                            (t._seekTargetTime = 0),
                            (t._bisectTargetTime = 0),
                            (t._seekMode = null),
                            (t._lastSeekPosition = null),
                            (t._seekBisector = null),
                            (t._didSeek = null),
                            (t._depth = 0),
                            (t._needProcessing = !1),
                            (t._pendingFrame = 0),
                            (t._pendingAudio = 0),
                            (t._framePipelineDepth = 8),
                            (t._frameParallelism = t._enableThreading
                                ? Math.min(16, navigator.hardwareConcurrency) || 1
                                : 0),
                            (t._audioPipelineDepth = 12),
                            (t._videoInfo = null),
                            (t._audioInfo = null),
                            (t._width = 0),
                            (t._height = 0),
                            (t._volume = 1),
                            (t._playbackRate = 1),
                            Object.defineProperties((0, o.default)(t), {
                                src: {
                                    get: function () {
                                        return this.getAttribute("src") || "";
                                    },
                                    set: function (e) {
                                        (this.setAttribute("src", e),
                                            (this._loading = !1),
                                            this._prepForLoad("interactive"));
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
                                            new b.default(e)
                                        );
                                    },
                                },
                                seekable: {
                                    get: function () {
                                        return new b.default(
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
                                        return this._state == R
                                            ? this._seekTargetTime
                                            : this._codec
                                              ? this._state != O || this._paused
                                                  ? this._initialPlaybackOffset
                                                  : this._getPlaybackTime()
                                              : this._initialSeekTime;
                                    },
                                    set: function (e) {
                                        this._seek(e, "exact");
                                    },
                                },
                                duration: {
                                    get: function () {
                                        return this._codec && this._codec.loadedMetadata
                                            ? null !== this._duration
                                                ? this._duration
                                                : 1 / 0
                                            : 0 / 0;
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
                                        return this._state == R;
                                    },
                                },
                                muted: {
                                    get: function () {
                                        return this._muted;
                                    },
                                    set: function (e) {
                                        ((this._muted = e),
                                            this._audioFeeder
                                                ? (this._audioFeeder.muted = this._muted)
                                                : this._started &&
                                                  !this._muted &&
                                                  this._codec &&
                                                  this._codec.hasAudio &&
                                                  (this._log("unmuting: switching from timer to audio clock"),
                                                  this._initAudioFeeder(),
                                                  this._startPlayback(this._audioEndTimestamp)),
                                            this._fireEventAsync("volumechange"));
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
                                            var n = new Image();
                                            ((n.crossOrigin = this.crossOrigin),
                                                (n.src = this._poster),
                                                (n.className = "ogvjs-poster"),
                                                (n.style.position = "absolute"),
                                                (n.style.top = "0"),
                                                (n.style.left = "0"),
                                                (n.style.width = "100%"),
                                                (n.style.height = "100%"),
                                                (n.style.objectFit = "contain"),
                                                (n.style.visibility = "hidden"),
                                                n.addEventListener("load", function () {
                                                    t._thumbnail === n &&
                                                        (r.styleManager.appendRule("." + t._instanceId, {
                                                            width: n.naturalWidth + "px",
                                                            height: n.naturalHeight + "px",
                                                        }),
                                                        (n.style.visibility = "visible"));
                                                }),
                                                (this._thumbnail = n),
                                                this.appendChild(n));
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
                                        ((this._width = parseInt(e, 10)), (this.style.width = this._width + "px"));
                                    },
                                },
                                height: {
                                    get: function () {
                                        return this._height;
                                    },
                                    set: function (e) {
                                        ((this._height = parseInt(e, 10)), (this.style.height = this._height + "px"));
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
                                                ((this._crossOrigin = e), this.removeAttribute("crossorigin"));
                                                break;
                                            default:
                                                e = "anonymous";
                                            case "":
                                            case "anonymous":
                                            case "use-credentials":
                                                ((this._crossOrigin = e), this.setAttribute("crossorigin", e));
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
                                                : new g.default("unknown error occurred in media procesing")
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
                                            ? r.HAVE_ENOUGH_DATA
                                            : r.HAVE_NOTHING;
                                    },
                                },
                                networkState: {
                                    get: function () {
                                        return this._stream
                                            ? this._stream.waiting
                                                ? r.NETWORK_LOADING
                                                : r.NETWORK_IDLE
                                            : this.readyState == r.HAVE_NOTHING
                                              ? r.NETWORK_EMPTY
                                              : r.NETWORK_NO_SOURCE;
                                    },
                                },
                                playbackRate: {
                                    get: function () {
                                        return this._playbackRate;
                                    },
                                    set: function (e) {
                                        var t = Number(e) || 1;
                                        (this._audioFeeder
                                            ? (this._audioFeeder.tempo = t)
                                            : this._paused ||
                                              ((this._initialPlaybackOffset = this._getPlaybackTime()),
                                              (this._initialPlaybackPosition = (t * i()) / 1e3)),
                                            (this._playbackRate = t),
                                            this._fireEventAsync("ratechange"));
                                    },
                                },
                                played: {
                                    get: function () {
                                        return new b.default([[0, this.currentTime]]);
                                    },
                                },
                                volume: {
                                    get: function () {
                                        return this._volume;
                                    },
                                    set: function (e) {
                                        ((this._volume = +e),
                                            this._audioFeeder && (this._audioFeeder.volume = this._volume),
                                            this._fireEventAsync("volumechange"));
                                    },
                                },
                            }),
                            (t.onframecallback = null),
                            (t.onloadstate = null),
                            (t.onprogress = null),
                            (t.onsuspend = null),
                            (t.onabort = null),
                            (t.onemptied = null),
                            (t.onstalled = null),
                            (t.onloadedmetadata = null),
                            (t.onloadeddata = null),
                            (t.oncanplay = null),
                            (t.oncanplaythrough = null),
                            (t.onplaying = null),
                            (t.onwaiting = null),
                            (t.onseeking = null),
                            (t.onseeked = null),
                            (t.onended = null),
                            (t.ondurationchange = null),
                            (t.ontimeupdate = null),
                            (t.onplay = null),
                            (t.onpause = null),
                            (t.onratechange = null),
                            (t.onresize = null),
                            (t.onvolumechange = null),
                            (t.onaudiofeedercreated = null),
                            t
                        );
                    }
                    return (
                        (0, s.default)(
                            r,
                            [
                                {
                                    key: "_time",
                                    value: function (e) {
                                        var t = i();
                                        e();
                                        var n = i() - t;
                                        return ((this._lastFrameDecodeTime += n), n);
                                    },
                                },
                                {
                                    key: "_log",
                                    value: function (e) {
                                        var t = this._options;
                                        if (t.debug) {
                                            var n = i() - this._startTime;
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
                                        var a = this.dispatchEvent(n);
                                        !r && "resize" === e && this.onresize && a && this.onresize.call(this, n);
                                    },
                                },
                                {
                                    key: "_fireEventAsync",
                                    value: function (e) {
                                        var t = this,
                                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        (this._log("fireEventAsync " + e),
                                            T(function () {
                                                t._fireEvent(e, n);
                                            }));
                                    },
                                },
                                {
                                    key: "_initAudioFeeder",
                                    value: function () {
                                        var e = this,
                                            t = this._options,
                                            n = { bufferSize: 8192 };
                                        (t.audioContext && (n.audioContext = t.audioContext),
                                            t.audioDestination && (n.output = t.audioDestination),
                                            t.audioBackendFactory && (n.backendFactory = t.audioBackendFactory));
                                        var r = (this._audioFeeder = new p.default(n));
                                        (r.init(this._audioInfo.channels, this._audioInfo.rate),
                                            this.onaudiofeedercreated && this.onaudiofeedercreated(this._audioFeeder),
                                            (r.bufferThreshold = 1),
                                            (r.volume = this.volume),
                                            (r.muted = this.muted),
                                            (r.tempo = this.playbackRate),
                                            (r.onbufferlow = function () {
                                                (e._log("onbufferlow"),
                                                    (e._stream && (e._stream.buffering || e._stream.seeking)) ||
                                                        e._pendingAudio ||
                                                        e._pingProcessing());
                                            }),
                                            (r.onstarved = function () {
                                                (e._dataEnded
                                                    ? e._log("onstarved: appear to have reached end of audio")
                                                    : (e._log("onstarved: halting audio due to starvation"),
                                                      e._stopPlayback(),
                                                      (e._prebufferingAudio = !0)),
                                                    e._isProcessing() || e._pingProcessing(0));
                                            }));
                                    },
                                },
                                {
                                    key: "_startPlayback",
                                    value: function (e) {
                                        if (this._audioFeeder) {
                                            this._audioFeeder.start();
                                            var t = this._audioFeeder.getPlaybackState();
                                            this._initialPlaybackPosition = t.playbackPosition;
                                        } else this._initialPlaybackPosition = (this._playbackRate * i()) / 1e3;
                                        (void 0 !== e && (this._initialPlaybackOffset = e),
                                            (this._prebufferingAudio = !1),
                                            this._log(
                                                "continuing at " +
                                                    this._initialPlaybackPosition +
                                                    ", " +
                                                    this._initialPlaybackOffset,
                                            ));
                                    },
                                },
                                {
                                    key: "_stopPlayback",
                                    value: function () {
                                        ((this._initialPlaybackOffset = this._getPlaybackTime()),
                                            this._log("pausing at " + this._initialPlaybackOffset),
                                            this._audioFeeder && this._audioFeeder.stop());
                                    },
                                },
                                {
                                    key: "_getPlaybackTime",
                                    value: function (e) {
                                        return this._prebufferingAudio || this._paused
                                            ? this._initialPlaybackOffset
                                            : (this._audioFeeder
                                                  ? (e = e || this._audioFeeder.getPlaybackState()).playbackPosition
                                                  : (this._playbackRate * i()) / 1e3) -
                                                  this._initialPlaybackPosition +
                                                  this._initialPlaybackOffset;
                                    },
                                },
                                {
                                    key: "_stopVideo",
                                    value: function () {
                                        (this._log("STOPPING"),
                                            (this._state = A),
                                            (this._seekState = F),
                                            (this._started = !1),
                                            (this._ended = !1),
                                            (this._frameEndTimestamp = 0),
                                            (this._audioEndTimestamp = 0),
                                            (this._lastFrameDecodeTime = 0),
                                            (this._prebufferingAudio = !1),
                                            this._actionQueue.splice(0, this._actionQueue.length),
                                            this._stream &&
                                                (this._stream.abort(), (this._stream = null), (this._streamEnded = !1)),
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
                                            (this._duration = null));
                                    },
                                },
                                {
                                    key: "_doFrameComplete",
                                    value: function () {
                                        var e = this,
                                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        this._startedPlaybackInDocument &&
                                            !document.body.contains(this) &&
                                            T(function () {
                                                e.stop();
                                            });
                                        var n = i(),
                                            r = n - this._lastFrameTimestamp,
                                            a = this._actualPerFrameTime - this._targetPerFrameTime;
                                        ((this._totalJitter += Math.abs(a)), (this._playTime += r));
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
                                        function o(e) {
                                            return Math.round(10 * e) / 10;
                                        }
                                        (this._codec &&
                                            ((s.demuxerTime =
                                                this._codec.demuxerCpuTime - this._lastFrameDemuxerCpuTime),
                                            (s.videoTime += this._currentVideoCpuTime - this._lastFrameVideoCpuTime),
                                            (s.audioTime += this._codec.audioCpuTime - this._lastFrameAudioCpuTime)),
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
                                                    o(r) +
                                                    " (jitter " +
                                                    o(a) +
                                                    ") cpu: " +
                                                    o(s.cpuTime) +
                                                    " (mux: " +
                                                    o(s.demuxerTime) +
                                                    " buf: " +
                                                    o(s.bufferTime) +
                                                    " draw: " +
                                                    o(s.drawingTime) +
                                                    " proxy: " +
                                                    o(s.proxyTime) +
                                                    ") vid: " +
                                                    o(s.videoTime) +
                                                    " aud: " +
                                                    o(s.audioTime),
                                            ),
                                            this._fireEventAsync("framecallback", s),
                                            (!this._lastTimeUpdate ||
                                                n - this._lastTimeUpdate >= this._timeUpdateInterval) &&
                                                ((this._lastTimeUpdate = n), this._fireEventAsync("timeupdate")),
                                            this._codec && t.yCbCrBuffer && this._codec.recycleFrame(t.yCbCrBuffer));
                                    },
                                },
                                {
                                    key: "_seekStream",
                                    value: function (e) {
                                        var t = this;
                                        (this._stream.seeking && this._stream.abort(),
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
                                                }));
                                    },
                                },
                                {
                                    key: "_onStreamError",
                                    value: function (e) {
                                        "AbortError" === e.name
                                            ? this._log("i/o promise canceled; ignoring")
                                            : (this._log("i/o error: " + e),
                                              (this._mediaError = new g.default(
                                                  g.default.MEDIA_ERR_NETWORK,
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
                                            (n._stream && n._stream.buffering && n._stream.abort(),
                                                n._stream && n._stream.seeking && n._stream.abort(),
                                                n._actionQueue.splice(0, n._actionQueue.length),
                                                n._stopPlayback(),
                                                (n._prebufferingAudio = !1),
                                                n._audioFeeder && n._audioFeeder.flush(),
                                                (n._state = R),
                                                (n._seekTargetTime = e),
                                                (n._seekMode = t),
                                                n._codec ? n._codec.flush(r) : r());
                                        };
                                        (r(function () {
                                            n._isProcessing() || n._pingProcessing(0);
                                        }),
                                            this._actionQueue.push(function () {
                                                r(function () {
                                                    n._doSeek(e);
                                                });
                                            }));
                                    },
                                },
                                {
                                    key: "_doSeek",
                                    value: function (e) {
                                        var t = this;
                                        ((this._streamEnded = !1),
                                            (this._dataEnded = !1),
                                            (this._ended = !1),
                                            (this._state = R),
                                            (this._seekTargetTime = e),
                                            (this._lastSeekPosition = -1),
                                            (this._decodedFrames = []),
                                            (this._pendingFrames = []),
                                            (this._pendingFrame = 0),
                                            (this._pendingAudio = 0),
                                            (this._didSeek = !1),
                                            this._codec.seekToKeypoint(e, function (n) {
                                                n
                                                    ? ((t._seekState = z),
                                                      t._fireEventAsync("seeking"),
                                                      t._didSeek || t._pingProcessing())
                                                    : t._codec.getKeypointOffset(e, function (e) {
                                                          (e > 0
                                                              ? ((t._seekState = z), t._seekStream(e))
                                                              : ((t._seekState = C),
                                                                t._startBisection(t._seekTargetTime)),
                                                              t._fireEventAsync("seeking"));
                                                      });
                                            }));
                                    },
                                },
                                {
                                    key: "_startBisection",
                                    value: function (e) {
                                        var t = this,
                                            n = Math.max(0, this._stream.length - 65536);
                                        ((this._bisectTargetTime = e),
                                            (this._seekBisector = new m.default({
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
                                            this._seekBisector.start());
                                    },
                                },
                                {
                                    key: "_continueSeekedPlayback",
                                    value: function () {
                                        var e = this;
                                        ((this._seekState = F),
                                            (this._state = S),
                                            (this._frameEndTimestamp = this._codec.frameTimestamp),
                                            (this._audioEndTimestamp = this._codec.audioTimestamp),
                                            this._codec.hasAudio
                                                ? (this._seekTargetTime = this._codec.audioTimestamp)
                                                : (this._seekTargetTime = this._codec.frameTimestamp),
                                            (this._initialPlaybackOffset = this._seekTargetTime));
                                        var t = function () {
                                            ((e._lastTimeUpdate = e._seekTargetTime),
                                                e._fireEventAsync("timeupdate"),
                                                e._fireEventAsync("seeked"),
                                                e._isProcessing() || e._pingProcessing());
                                        };
                                        if (this._codec.hasVideo && this._decodedFrames.length) {
                                            var n = this._decodedFrames.shift();
                                            (this._drawFrame(n.yCbCrBuffer), t());
                                        } else {
                                            if (this._codec.hasVideo && this._codec.frameReady)
                                                return (
                                                    this._codec.decodeFrame(function (n) {
                                                        (n && e._drawFrame(e._codec.frameBuffer), t());
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
                                        (this._thumbnail &&
                                            (this.removeChild(this._thumbnail), (this._thumbnail = null)),
                                            this._frameSink.drawFrame(e));
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
                                                this._seekMode === I &&
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
                                                        (t._pendingFrame--,
                                                            t._pendingFrames.shift(),
                                                            t._decodedFrames.push({
                                                                yCbCrBuffer: t._codec.frameBuffer,
                                                                videoCpuTime: t._codec.videoCpuTime,
                                                                frameEndTimestamp: n,
                                                            }),
                                                            t._pingProcessing());
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
                                                            ? (t._log("stream ended during linear seeking on audio"),
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
                                            ((t = this._codec.frameTimestamp), (e = this._targetPerFrameTime / 1e3));
                                        else {
                                            if (!this._codec.hasAudio)
                                                throw Error("Invalid seek state; no audio or video track available");
                                            ((t = this._codec.audioTimestamp), (e = 1 / 256));
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
                                                              n._log("failed going back"), Error("not sure what to do")
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
                                                  (this._seekState = z),
                                                  this._pingProcessing())
                                                : this._seekState == C &&
                                                    this._codec.hasVideo &&
                                                    this._codec.keyframeTimestamp < this._codec.frameTimestamp
                                                  ? (this._log("finding the keypoint now"),
                                                    (this._seekState = D),
                                                    this._startBisection(this._codec.keyframeTimestamp))
                                                  : (this._log("straight seeking now"),
                                                    (this._seekState = z),
                                                    this._pingProcessing());
                                    },
                                },
                                {
                                    key: "_setupVideo",
                                    value: function () {
                                        (this._videoInfo.fps > 0
                                            ? (this._targetPerFrameTime = 1e3 / this._videoInfo.fps)
                                            : (this._targetPerFrameTime = 16.667),
                                            (this._canvas.width = this._videoInfo.displayWidth),
                                            (this._canvas.height = this._videoInfo.displayHeight),
                                            r.styleManager.appendRule("." + this._instanceId, {
                                                width: this._videoInfo.displayWidth + "px",
                                                height: this._videoInfo.displayHeight + "px",
                                            }));
                                        var e = {};
                                        (void 0 !== this._options.webGL && (e.webGL = this._options.webGL),
                                            this._options.forceWebGL && (e.webGL = "required"),
                                            (this._frameSink = f.default.attach(this._canvas, e)));
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
                                        else if (this._state == A) this._doProcessInitial();
                                        else if (this._state == E) this._doProcessSeekingEnd();
                                        else if (this._state == P) this._doProcessLoaded();
                                        else if (this._state == x) this._doProcessPreload();
                                        else if (this._state == S) this._doProcessReady();
                                        else if (this._state == R) this._doProcessSeeking();
                                        else if (this._state == O) this._doProcessPlay();
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
                                            (this._codec.hasAudio && (this._audioInfo = this._codec.audioFormat),
                                                this._codec.hasVideo &&
                                                    ((this._videoInfo = this._codec.videoFormat), this._setupVideo()),
                                                isNaN(this._codec.duration) || (this._duration = this._codec.duration),
                                                null === this._duration &&
                                                this._stream.seekable &&
                                                "video/ogg" == this._detectedType
                                                    ? ((this._state = E),
                                                      (this._lastSeenTimestamp = -1),
                                                      this._codec.flush(function () {
                                                          e._seekStream(Math.max(0, e._stream.length - 131072));
                                                      }))
                                                    : ((this._state = P), this._pingProcessing()));
                                        } else
                                            this._codec.process(function (t) {
                                                if (t) e._pingProcessing();
                                                else {
                                                    if (e._streamEnded) throw Error("end of file before headers found");
                                                    (e._log("reading more cause we are out of data"),
                                                        e._readBytesAndWait());
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
                                                            (e._state = P),
                                                            e._codec.flush(function () {
                                                                ((e._streamEnded = !1),
                                                                    (e._dataEnded = !1),
                                                                    e._seekStream(0));
                                                            }))
                                                          : e._readBytesAndWait();
                                                });
                                    },
                                },
                                {
                                    key: "_doProcessLoaded",
                                    value: function () {
                                        ((this._state = x),
                                            this._fireEventAsync("loadedmetadata"),
                                            this._fireEventAsync("durationchange"),
                                            this._codec.hasVideo && this._fireEventAsync("resize"),
                                            this._pingProcessing(0));
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
                                            : ((this._state = S),
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
                                            ((this._initialSeekTime = 0),
                                                this._log("initial seek to " + t),
                                                this._doSeek(t));
                                        } else if (this._paused) this._log("paused while in ready");
                                        else {
                                            var n = function () {
                                                (e._log("finishStartPlaying"),
                                                    (e._state = O),
                                                    (e._lastFrameTimestamp = i()),
                                                    e._codec.hasAudio && e._audioFeeder
                                                        ? (e._prebufferingAudio = !0)
                                                        : e._startPlayback(),
                                                    e._pingProcessing(0),
                                                    e._fireEventAsync("play"),
                                                    e._fireEventAsync("playing"));
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
                                        if (this._seekState == F)
                                            throw Error("seeking in invalid state (not seeking?)");
                                        if (this._seekState == C) this._doProcessBisectionSeek();
                                        else if (this._seekState == D) this._doProcessBisectionSeek();
                                        else {
                                            if (this._seekState != z)
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
                                            (!t.hasAudio || t.audioReady || this._pendingAudio || this._dataEnded) &&
                                            (!t.hasVideo ||
                                                t.frameReady ||
                                                this._pendingFrame ||
                                                this._decodedFrames.length ||
                                                this._dataEnded)
                                        ) {
                                            var n,
                                                r,
                                                i,
                                                a = null,
                                                s = 0,
                                                o = !1,
                                                u = 0;
                                            if (
                                                (t.hasAudio && this._audioFeeder
                                                    ? ((a = this._audioFeeder.getPlaybackState()),
                                                      (s = this._getPlaybackTime(a)),
                                                      (o = this._dataEnded && 0 == this._audioFeeder.durationBuffered),
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
                                                          this._startPlayback(s),
                                                          (this._prebufferingAudio = !1)),
                                                      a.dropped != this._droppedAudio &&
                                                          this._log("dropped " + (a.dropped - this._droppedAudio)),
                                                      a.delayed != this._delayedAudio &&
                                                          this._log("delayed " + (a.delayed - this._delayedAudio)),
                                                      (this._droppedAudio = a.dropped),
                                                      (this._delayedAudio = a.delayed),
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
                                                    : ((s = this._getPlaybackTime()),
                                                      (n = this._codec.audioReady && this._audioEndTimestamp < s)),
                                                this._codec.hasVideo)
                                            ) {
                                                ((r = this._decodedFrames.length > 0),
                                                    (i =
                                                        this._pendingFrame + this._decodedFrames.length <
                                                            this._framePipelineDepth + this._frameParallelism &&
                                                        this._codec.frameReady),
                                                    r &&
                                                        ((u = 1e3 * (this._decodedFrames[0].frameEndTimestamp - s)),
                                                        (this._actualPerFrameTime = this._targetPerFrameTime - u)));
                                                var d = this._targetPerFrameTime;
                                                if (this._prebufferingAudio)
                                                    (i && this._log("decoding a frame during prebuffering"), (r = !1));
                                                else if (r && this._dataEnded && o)
                                                    this._log("audio timeline ended? ready to draw frame");
                                                else if (r && -u >= d) {
                                                    for (var l = -1, c = 0; c < this._decodedFrames.length - 1; c++)
                                                        this._decodedFrames[c].frameEndTimestamp < s && (l = c - 1);
                                                    if (l >= 0)
                                                        for (; l-- >= 0;) {
                                                            this._lateFrames++;
                                                            var f = this._decodedFrames.shift();
                                                            (this._log(
                                                                "skipping already-decoded late frame at " +
                                                                    f.frameEndTimestamp,
                                                            ),
                                                                (u = 1e3 * (f.frameEndTimestamp - s)),
                                                                (this._frameEndTimestamp = f.frameEndTimestamp),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - u),
                                                                this._framesProcessed++,
                                                                (f.dropped = !0),
                                                                this._doFrameComplete(f));
                                                        }
                                                    var h = this._codec.nextKeyframeTimestamp,
                                                        p =
                                                            h -
                                                            (this._targetPerFrameTime / 1e3) *
                                                                (this._framePipelineDepth + this._pendingFrame);
                                                    if (h >= 0 && h != this._codec.frameTimestamp && s >= p) {
                                                        this._log(
                                                            "skipping late frame at " +
                                                                this._decodedFrames[0].frameEndTimestamp +
                                                                " vs " +
                                                                s +
                                                                ", expect to see keyframe at " +
                                                                h,
                                                        );
                                                        for (var _ = 0; _ < this._decodedFrames.length; _++) {
                                                            var m = this._decodedFrames[_];
                                                            (this._lateFrames++,
                                                                this._framesProcessed++,
                                                                (this._frameEndTimestamp = m.frameEndTimestamp),
                                                                (u = 1e3 * (m.frameEndTimestamp - s)),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - u),
                                                                (m.dropped = !0),
                                                                this._doFrameComplete(m));
                                                        }
                                                        this._decodedFrames = [];
                                                        for (var y = 0; y < this._pendingFrames.length; y++) {
                                                            var g = this._pendingFrames[y];
                                                            (this._lateFrames++,
                                                                this._framesProcessed++,
                                                                (this._frameEndTimestamp = g.frameEndTimestamp),
                                                                (u = 1e3 * (g.frameEndTimestamp - s)),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - u),
                                                                (g.dropped = !0),
                                                                this._doFrameComplete(g));
                                                        }
                                                        for (
                                                            this._pendingFrames = [], this._pendingFrame = 0;
                                                            this._codec.frameReady && this._codec.frameTimestamp < h;
                                                        ) {
                                                            var v = {
                                                                frameEndTimestamp: this._codec.frameTimestamp,
                                                                dropped: !0,
                                                            };
                                                            ((u = 1e3 * (v.frameEndTimestamp - s)),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - u),
                                                                this._lateFrames++,
                                                                this._codec.discardFrame(function () {}),
                                                                this._framesProcessed++,
                                                                this._doFrameComplete(v));
                                                        }
                                                        return void (this._isProcessing() || this._pingProcessing());
                                                    }
                                                } else (r && u <= 4) || (r = !1);
                                            }
                                            if (i) {
                                                (this._log(
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
                                                    this._totalFrameCount++);
                                                var b = (this._frameEndTimestamp = this._codec.frameTimestamp);
                                                (this._pendingFrame++,
                                                    this._pendingFrames.push({ frameEndTimestamp: b }));
                                                var w = this._pendingFrames,
                                                    V = !1,
                                                    T = this._time(function () {
                                                        e._codec.decodeFrame(function (t) {
                                                            w === e._pendingFrames
                                                                ? (e._log("play loop callback: decoded frame"),
                                                                  e._pendingFrame--,
                                                                  e._pendingFrames.shift(),
                                                                  t
                                                                      ? e._decodedFrames.push({
                                                                            yCbCrBuffer: e._codec.frameBuffer,
                                                                            videoCpuTime: e._codec.videoCpuTime,
                                                                            frameEndTimestamp: b,
                                                                        })
                                                                      : e._log("Bad video packet or something"),
                                                                  e._codec.process(function () {
                                                                      e._isProcessing() ||
                                                                          e._pingProcessing(V ? void 0 : 0);
                                                                  }))
                                                                : e._log("play loop callback after flush, discarding");
                                                        });
                                                    });
                                                this._pendingFrame &&
                                                    ((V = !0),
                                                    (this._proxyTime += T),
                                                    this._pingProcessing(),
                                                    this._dataEnded && this._codec.sync());
                                            } else if (n) {
                                                (this._log("play loop: ready for audio; depth: " + this._pendingAudio),
                                                    this._pendingAudio++);
                                                var k = this._codec.audioTimestamp,
                                                    A = this._time(function () {
                                                        e._codec.decodeAudio(function (t) {
                                                            if (
                                                                (e._pendingAudio--,
                                                                e._log("play loop callback: decoded audio"),
                                                                (e._audioEndTimestamp = k),
                                                                t)
                                                            ) {
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
                                                this._pendingAudio &&
                                                    ((this._proxyTime += A),
                                                    this._codec.audioReady
                                                        ? this._pingProcessing()
                                                        : this._doProcessPlayDemux());
                                            } else if (r) {
                                                (this._log("play loop: ready to draw frame"),
                                                    this._nextFrameTimer &&
                                                        (clearTimeout(this._nextFrameTimer),
                                                        (this._nextFrameTimer = null)),
                                                    this._thumbnail &&
                                                        (this.removeChild(this._thumbnail), (this._thumbnail = null)));
                                                var E = this._decodedFrames.shift();
                                                ((this._currentVideoCpuTime = E.videoCpuTime),
                                                    (this._drawingTime += this._time(function () {
                                                        e._drawFrame(E.yCbCrBuffer);
                                                    })),
                                                    this._framesProcessed++,
                                                    this._doFrameComplete(E),
                                                    this._pingProcessing());
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
                                                    var P = 0;
                                                    (this._codec.hasAudio &&
                                                        this._audioFeeder &&
                                                        (P = 1e3 * this._audioFeeder.durationBuffered),
                                                        P > 0
                                                            ? (this._log("play loop: ending pending " + P + " ms"),
                                                              this._pingProcessing(Math.max(0, P)))
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
                                                              this._fireEventAsync("ended")));
                                                } else
                                                    this._prebufferingAudio &&
                                                    ((t.hasVideo && !t.frameReady) || (t.hasAudio && !t.audioReady))
                                                        ? (this._log("play loop: prebuffering demuxing"),
                                                          this._doProcessPlayDemux())
                                                        : this._log("play loop: waiting on async/timers");
                                            else {
                                                var x = u;
                                                (this._log("play loop: setting a timer for drawing " + x),
                                                    (this._nextFrameTimer = setTimeout(function () {
                                                        ((e._nextFrameTimer = null), e._pingProcessing());
                                                    }, x)));
                                            }
                                        } else (this._log("play loop: demuxing"), this._doProcessPlayDemux());
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
                                                        : (e._log("demuxer loading more data"), e._readBytesAndWait()));
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
                                                      (e._log("got input " + [t.byteLength]),
                                                          t.byteLength &&
                                                              e._actionQueue.push(function () {
                                                                  e._codec.receiveInput(t, function () {
                                                                      e._pingProcessing();
                                                                  });
                                                              }),
                                                          e._stream.eof &&
                                                              (e._log("stream is at end!"), (e._streamEnded = !0)),
                                                          e._isProcessing() || e._pingProcessing());
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
                                            ((this._framesProcessed = 0),
                                                (this._bufferTime = 0),
                                                (this._drawingTime = 0),
                                                (this._proxyTime = 0),
                                                (this._started = !0),
                                                (this._ended = !1));
                                            var n = {
                                                base: this._options.base,
                                                worker: this._enableWorker,
                                                threading: this._enableThreading,
                                                simd: this._enableSIMD,
                                            };
                                            (this._detectedType && (n.type = this._detectedType),
                                                (this._codec = new w.default(n)),
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
                                                    ((t._didSeek = !0), t._stream && t._seekStream(e));
                                                }),
                                                this._codec.init(function () {
                                                    t._codec.receiveInput(e, function () {
                                                        t._readBytesAndWait();
                                                    });
                                                }));
                                        }
                                    },
                                },
                                {
                                    key: "_loadCodec",
                                    value: function (e) {
                                        var t = this;
                                        this._stream.read(1024).then(function (n) {
                                            var r = new Uint8Array(n);
                                            (r.length > 4 && 79 == r[0] && 103 == r[1] && 103 == r[2] && 83 == r[3]
                                                ? (t._detectedType = "video/ogg")
                                                : r.length > 4 && 26 == r[0] && 69 == r[1] && 223 == r[2] && 163 == r[3]
                                                  ? (t._detectedType = "video/webm")
                                                  : (t._detectedType = "video/ogg"),
                                                e(n));
                                        });
                                    },
                                },
                                {
                                    key: "_prepForLoad",
                                    value: function (e) {
                                        var t = this;
                                        (this._stopVideo(),
                                            (this._currentSrc = ""),
                                            (this._loading = !0),
                                            this._actionQueue.push(function () {
                                                e && "none" === t.preload
                                                    ? (t._loading = !1)
                                                    : (t._options.stream
                                                          ? (t._stream = t._options.stream)
                                                          : (t._stream = new h.default({
                                                                url: t.src,
                                                                cacheSize: 0x1000000,
                                                                progressive: !1,
                                                            })),
                                                      t._stream
                                                          .load()
                                                          .then(function () {
                                                              ((t._loading = !1),
                                                                  (t._currentSrc = t.src),
                                                                  (t._byteLength = t._stream.seekable
                                                                      ? t._stream.length
                                                                      : 0));
                                                              var e = t._stream.headers["x-content-duration"];
                                                              ("string" == typeof e && (t._duration = parseFloat(e)),
                                                                  t._loadCodec(function (e) {
                                                                      t._startProcessingVideo(e);
                                                                  }));
                                                          })
                                                          .catch(function (e) {
                                                              t._onStreamError(e);
                                                          }));
                                            }),
                                            this._pingProcessing(0));
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
                                        var t = new v.default(e);
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
                                            ("audio" !== t.major && "video" !== t.major && "application" !== t.major)
                                            ? "webm" !== t.minor || ("audio" !== t.major && "video" !== t.major)
                                                ? ""
                                                : n(["vorbis", "opus", "vp8", "vp9"])
                                            : n(["vorbis", "opus", "theora"]);
                                    },
                                },
                                {
                                    key: "play",
                                    value: function () {
                                        (this._muted || this._options.audioContext || r.initSharedAudioContext(),
                                            this._paused &&
                                                ((this._startedPlaybackInDocument = document.body.contains(this)),
                                                (this._paused = !1),
                                                this._state == R ||
                                                    (this._started && this._codec && this._codec.loadedMetadata
                                                        ? (this._ended && this._stream && this._byteLength
                                                              ? (this._log(".play() starting over after end"),
                                                                this._seek(0))
                                                              : this._log(".play() while already started"),
                                                          (this._state = S),
                                                          this._isProcessing() || this._pingProcessing())
                                                        : this._loading
                                                          ? this._log(".play() while loading")
                                                          : (this._log(".play() before started"),
                                                            this._stream || this.load()))));
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
                                        ((this._framesProcessed = 0),
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
                                            (this._totalFrameCount = 0));
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
                                        (this._stopVideo(), (this._paused = !0));
                                    },
                                },
                                {
                                    key: "fastSeek",
                                    value: function (e) {
                                        this._seek(+e, I);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "initSharedAudioContext",
                                    value: function () {
                                        var e = document.createElement("audio");
                                        ((e.src = V.default), e.play(), p.default.initSharedAudioContext());
                                    },
                                },
                            ],
                        ),
                        r
                    );
                })(L);
                ((0, y.default)(j, k),
                    (j.instanceCount = 0),
                    (j.styleManager = new (function () {
                        var e = document.createElement("style");
                        ((e.type = "text/css"),
                            (e.textContent =
                                "ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); "),
                            document.head.appendChild(e));
                        var t = e.sheet;
                        this.appendRule = function (e, n) {
                            var r = [];
                            for (var i in n) n.hasOwnProperty(i) && r.push(i + ":" + n[i]);
                            var a = e + "{" + r.join(";") + "}";
                            t.insertRule(a, t.cssRules.length - 1);
                        };
                    })()),
                    (t.default = j));
            },
            580: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913));
                t.default = function (e) {
                    function t(n, r, a) {
                        var s = this;
                        for (var o in ((0, i.default)(this, t),
                        (a = a || {}),
                        (this.worker = n),
                        (this.transferables = (function () {
                            var e = new ArrayBuffer(1024),
                                t = new Uint8Array(e);
                            try {
                                return (n.postMessage({ action: "transferTest", bytes: t }, [e]), !e.byteLength);
                            } catch (e) {
                                return !1;
                            }
                        })()),
                        e))
                            e.hasOwnProperty(o) && (this[o] = e[o]);
                        ((this.processingQueue = 0),
                            Object.defineProperty(this, "processing", {
                                get: function () {
                                    return this.processingQueue > 0;
                                },
                            }),
                            (this.messageCount = 0),
                            (this.pendingCallbacks = {}),
                            this.worker.addEventListener("message", function (e) {
                                s.handleMessage(e);
                            }),
                            this.proxy("construct", [r, a], function () {}));
                    }
                    return (
                        (0, a.default)(t, [
                            {
                                key: "proxy",
                                value: function (e, t, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                                    if (!this.worker) throw 'Tried to call "' + e + '" method on closed proxy object';
                                    var i = "callback-" + ++this.messageCount + "-" + e;
                                    n && (this.pendingCallbacks[i] = n);
                                    var a = { action: e, callbackId: i, args: t || [] };
                                    (this.processingQueue++,
                                        this.transferables
                                            ? this.worker.postMessage(a, r)
                                            : this.worker.postMessage(a));
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
                                            for (var a in t.props) t.props.hasOwnProperty(a) && (this[a] = t.props[a]);
                                        i && (delete this.pendingCallbacks[n], i.apply(this, r));
                                    }
                                },
                            },
                        ]),
                        t
                    );
                };
            },
            168: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913));
                t.default = (function () {
                    function e(t) {
                        ((0, i.default)(this, e), (this._ranges = t), (this.length = t.length));
                    }
                    return (
                        (0, a.default)(e, [
                            {
                                key: "start",
                                value: function (e) {
                                    if (e < 0 || e > this.length || e !== (0 | e)) throw RangeError("Invalid index");
                                    return this._ranges[e][0];
                                },
                            },
                            {
                                key: "end",
                                value: function (e) {
                                    if (e < 0 || e > this.length || e !== (0 | e)) throw RangeError("Invalid index");
                                    return this._ranges[e][1];
                                },
                            },
                        ]),
                        e
                    );
                })();
            },
            625: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(575)),
                    a = r(n(913)),
                    s = r(n(964));
                function o(e, t) {
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
                                        return this.loadedMetadata ? this.demuxer.duration : 0 / 0;
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
                        (0, a.default)(e, [
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
                                    ((this.processing = !0),
                                        (t =
                                            "video/webm" === this.options.type || "audio/webm" === this.options.type
                                                ? "OGVDemuxerWebMW"
                                                : "OGVDemuxerOggW"),
                                        s.default.loadClass(t, function (t) {
                                            t().then(function (t) {
                                                ((n.demuxer = t),
                                                    (t.onseek = function (e) {
                                                        n.onseek && n.onseek(e);
                                                    }),
                                                    t.init(function () {
                                                        ((n.processing = !1), e());
                                                    }));
                                            });
                                        }));
                                },
                            },
                            {
                                key: "close",
                                value: function () {
                                    (this.demuxer && (this.demuxer.close(), (this.demuxer = null)),
                                        this.videoDecoder && (this.videoDecoder.close(), (this.videoDecoder = null)),
                                        this.audioDecoder && (this.audioDecoder.close(), (this.audioDecoder = null)));
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
                                            ((t.processing = !1), e(n));
                                        },
                                        r = function () {
                                            t.demuxer.process(n);
                                        };
                                    this.demuxer.loadedMetadata && !this.loadedDemuxerMetadata
                                        ? this.loadAudioCodec(function () {
                                              t.loadVideoCodec(function () {
                                                  ((t.loadedDemuxerMetadata = !0),
                                                      (t.loadedAudioMetadata = !t.audioDecoder),
                                                      (t.loadedVideoMetadata = !t.videoDecoder),
                                                      (t.loadedAllMetadata =
                                                          t.loadedAudioMetadata && t.loadedVideoMetadata),
                                                      n(!0));
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
                                                      ((t.audioBytes += e.byteLength),
                                                          t.audioDecoder.processHeader(e, function (e) {
                                                              n(!0);
                                                          }));
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
                                                        ((t.videoBytes += e.byteLength),
                                                            t.videoDecoder.processHeader(e, function () {
                                                                n(!0);
                                                            }));
                                                    }))
                                                  : r()
                                            : this.loadedVideoMetadata && !this.loadedMetadata && this.loadedAllMetadata
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
                                        ((t.videoBytes += e.byteLength),
                                            t.videoDecoder.processFrame(e, function (e) {
                                                var a = t.videoDecoder.frameBuffer;
                                                (a && ((a.timestamp = r), (a.keyframeTimestamp = i)), n(e));
                                            }));
                                    });
                                },
                            },
                            {
                                key: "decodeAudio",
                                value: function (e) {
                                    var t = this,
                                        n = this.flushSafe(e);
                                    this.demuxer.dequeueAudioPacket(function (e, r) {
                                        ((t.audioBytes += e.byteLength),
                                            t.audioDecoder.processAudio(e, function (e) {
                                                if (r) {
                                                    var i,
                                                        a = [],
                                                        s = (function (e) {
                                                            var t =
                                                                ("u" > typeof Symbol && e[Symbol.iterator]) ||
                                                                e["@@iterator"];
                                                            if (!t) {
                                                                if (
                                                                    Array.isArray(e) ||
                                                                    (t = (function (e) {
                                                                        if (e) {
                                                                            if ("string" == typeof e)
                                                                                return o(e, void 0);
                                                                            var t = Object.prototype.toString
                                                                                .call(e)
                                                                                .slice(8, -1);
                                                                            if (
                                                                                ("Object" === t &&
                                                                                    e.constructor &&
                                                                                    (t = e.constructor.name),
                                                                                "Map" === t || "Set" === t)
                                                                            )
                                                                                return Array.from(e);
                                                                            if (
                                                                                "Arguments" === t ||
                                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                                    t,
                                                                                )
                                                                            )
                                                                                return o(e, void 0);
                                                                        }
                                                                    })(e))
                                                                ) {
                                                                    t && (e = t);
                                                                    var n = 0,
                                                                        r = function () {};
                                                                    return {
                                                                        s: r,
                                                                        n: function () {
                                                                            return n >= e.length
                                                                                ? { done: !0 }
                                                                                : { done: !1, value: e[n++] };
                                                                        },
                                                                        e: function (e) {
                                                                            throw e;
                                                                        },
                                                                        f: r,
                                                                    };
                                                                }
                                                                throw TypeError(
                                                                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                                                );
                                                            }
                                                            var i,
                                                                a = !0,
                                                                s = !1;
                                                            return {
                                                                s: function () {
                                                                    t = t.call(e);
                                                                },
                                                                n: function () {
                                                                    var e = t.next();
                                                                    return ((a = e.done), e);
                                                                },
                                                                e: function (e) {
                                                                    ((s = !0), (i = e));
                                                                },
                                                                f: function () {
                                                                    try {
                                                                        a || null == t.return || t.return();
                                                                    } finally {
                                                                        if (s) throw i;
                                                                    }
                                                                },
                                                            };
                                                        })(t.audioDecoder.audioBuffer);
                                                    try {
                                                        for (s.s(); !(i = s.n()).done;) {
                                                            var u = i.value,
                                                                d = Math.round((r * t.audioFormat.rate) / 1e9);
                                                            d > 0
                                                                ? a.push(
                                                                      u.subarray(0, u.length - Math.min(d, u.length)),
                                                                  )
                                                                : a.push(
                                                                      u.subarray(
                                                                          Math.min(Math.abs(d), u.length),
                                                                          u.length,
                                                                      ),
                                                                  );
                                                        }
                                                    } catch (e) {
                                                        s.e(e);
                                                    } finally {
                                                        s.f();
                                                    }
                                                    t.audioDecoder.audioBuffer = a;
                                                }
                                                return n(e);
                                            }));
                                    });
                                },
                            },
                            {
                                key: "discardFrame",
                                value: function (e) {
                                    var t = this;
                                    this.demuxer.dequeueVideoPacket(function (n) {
                                        ((t.videoBytes += n.byteLength), e());
                                    });
                                },
                            },
                            {
                                key: "discardAudio",
                                value: function (e) {
                                    var t = this;
                                    this.demuxer.dequeueAudioPacket(function (n, r) {
                                        ((t.audioBytes += n.byteLength), e());
                                    });
                                },
                            },
                            {
                                key: "flush",
                                value: function (e) {
                                    (this.flushIter++, this.demuxer.flush(e));
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
                                        ((this.processing = !0),
                                            s.default.loadClass(
                                                n,
                                                function (n) {
                                                    var r = {};
                                                    (t.demuxer.audioFormat && (r.audioFormat = t.demuxer.audioFormat),
                                                        n(r).then(function (n) {
                                                            ((t.audioDecoder = n),
                                                                n.init(function () {
                                                                    ((t.loadedAudioMetadata = n.loadedMetadata),
                                                                        (t.processing = !1),
                                                                        e());
                                                                }));
                                                        }));
                                                },
                                                { worker: this.options.worker },
                                            ));
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
                                        ((this.processing = !0),
                                            s.default.loadClass(
                                                i,
                                                function (n) {
                                                    var i = {};
                                                    (t.demuxer.videoFormat && (i.videoFormat = t.demuxer.videoFormat),
                                                        r && delete window.ENVIRONMENT_IS_PTHREAD,
                                                        n(i).then(function (n) {
                                                            ((t.videoDecoder = n),
                                                                n.init(function () {
                                                                    ((t.loadedVideoMetadata = n.loadedMetadata),
                                                                        (t.processing = !1),
                                                                        e());
                                                                }));
                                                        }));
                                                },
                                                { worker: this.options.worker && !this.options.threading },
                                            ));
                                    } else e();
                                },
                            },
                        ]),
                        e
                    );
                })();
            },
            539: (e, t, n) => {
                var r = n(318);
                (Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0));
                var i = r(n(8)),
                    a = r(n(575)),
                    s = r(n(913));
                t.default = new ((function () {
                    function e() {
                        ((0, a.default)(this, e), (this.tested = !1), (this.testResult = void 0));
                    }
                    return (
                        (0, s.default)(e, [
                            {
                                key: "wasmSupported",
                                value: function () {
                                    if (!this.tested) {
                                        try {
                                            var e, t;
                                            "object" ===
                                            ("u" < typeof WebAssembly ? "undefined" : (0, i.default)(WebAssembly))
                                                ? (this.testResult =
                                                      ((e = new Uint8Array([
                                                          0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 127, 1, 127, 3,
                                                          2, 1, 0, 5, 3, 1, 0, 1, 7, 8, 1, 4, 116, 101, 115, 116, 0, 0,
                                                          10, 16, 1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40, 2, 0, 11,
                                                      ])),
                                                      (t = new WebAssembly.Module(e)),
                                                      0 !== new WebAssembly.Instance(t, {}).exports.test(4)))
                                                : (this.testResult = !1);
                                        } catch (e) {
                                            (console.log("Exception while testing WebAssembly", e),
                                                (this.testResult = !1));
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
                (Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = void 0),
                    (t.default = function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                    }));
            },
            431: (e, t, n) => {
                var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                ((r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r));
                            }
                        }
                        return function (t, n, r) {
                            return (n && e(t.prototype, n), r && e(t, r), t);
                        };
                    })(),
                    i = function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var s = i.get;
                        return void 0 !== s ? s.call(r) : void 0;
                    },
                    a = n(828),
                    s = "arraybuffer",
                    o = (function (e) {
                        function t() {
                            return (
                                (function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t),
                                (function (e, t) {
                                    if (!e)
                                        throw ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            );
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw TypeError(
                                        "Super expression must either be null or a function, not " + typeof t,
                                    );
                                ((e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
                            })(t, e),
                            r(t, [
                                {
                                    key: "initXHR",
                                    value: function () {
                                        (i(
                                            t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                            "initXHR",
                                            this,
                                        ).call(this),
                                            (this.xhr.responseType = s));
                                    },
                                },
                                { key: "onXHRProgress", value: function () {} },
                                {
                                    key: "onXHRLoad",
                                    value: function () {
                                        var e = this.xhr.response;
                                        ((this.bytesRead += e.byteLength),
                                            this.emit("buffer", e),
                                            i(
                                                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                "onXHRLoad",
                                                this,
                                            ).call(this));
                                    },
                                },
                            ]),
                            t
                        );
                    })(a);
                ((o.supported = function () {
                    try {
                        var e = new XMLHttpRequest();
                        return ((e.responseType = s), e.responseType === s);
                    } catch (e) {
                        return !1;
                    }
                }),
                    (e.exports = o));
            },
            306: (e, t, n) => {
                var r = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r));
                        }
                    }
                    return function (t, n, r) {
                        return (n && e(t.prototype, n), r && e(t, r), t);
                    };
                })();
                function i(e) {
                    var t = e.getResponseHeader("Content-Range");
                    return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
                }
                e.exports = (function (e) {
                    function t(e) {
                        var n = e.url,
                            r = e.offset,
                            i = e.length,
                            a = e.cachever;
                        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
                        var s = (function (e, t) {
                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return (
                            (s.url = n),
                            (s.offset = r),
                            (s.length = i),
                            (s.cachever = void 0 === a ? 0 : a),
                            (s.loaded = !1),
                            (s.seekable = !1),
                            (s.headers = {}),
                            (s.eof = !1),
                            (s.bytesRead = 0),
                            (s.xhr = new XMLHttpRequest()),
                            s
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            ((e.prototype = Object.create(t && t.prototype, {
                                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                            })),
                                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
                        })(t, e),
                        r(t, [
                            {
                                key: "load",
                                value: function () {
                                    var e = this;
                                    return new Promise(function (t, n) {
                                        var r = null;
                                        e._onAbort = function (e) {
                                            (r(), n(e));
                                        };
                                        var a = function () {
                                                if (2 == e.xhr.readyState) {
                                                    if (206 == e.xhr.status) {
                                                        var a,
                                                            s,
                                                            o,
                                                            u = (o = i(e.xhr)) ? parseInt(o[1], 10) : 0;
                                                        if (e.offset != u)
                                                            return (
                                                                console.log(
                                                                    "Expected start at " +
                                                                        e.offset +
                                                                        " but got " +
                                                                        u +
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
                                                        ? ((e.length = (function (e) {
                                                              if (206 == e.status) {
                                                                  var t;
                                                                  return (t = i(e)) ? parseInt(t[3], 10) : -1;
                                                              }
                                                              var n = e.getResponseHeader("Content-Length");
                                                              return null === n || "" === n ? -1 : parseInt(n, 10);
                                                          })(e.xhr)),
                                                          (a = e.xhr),
                                                          (s = {}),
                                                          a
                                                              .getAllResponseHeaders()
                                                              .split(/\r?\n/)
                                                              .forEach(function (e) {
                                                                  var t = e.split(/:\s*/, 2);
                                                                  t.length > 1 && (s[t[0].toLowerCase()] = t[1]);
                                                              }),
                                                          (e.headers = s),
                                                          e.onXHRStart())
                                                        : (r(), n(Error("HTTP error " + e.xhr.status)));
                                                }
                                            },
                                            s = function () {
                                                (r(), n(Error("network error")));
                                            },
                                            o = function () {
                                                (r(), t());
                                            };
                                        ((r = function () {
                                            (e.xhr.removeEventListener("readystatechange", a),
                                                e.xhr.removeEventListener("error", s),
                                                e.off("open", o),
                                                (e._onAbort = null));
                                        }),
                                            e.initXHR(),
                                            e.xhr.addEventListener("readystatechange", a),
                                            e.xhr.addEventListener("error", s),
                                            e.on("open", o),
                                            e.xhr.send());
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
                                        ((t.name = "AbortError"), e(t));
                                    }
                                },
                            },
                            {
                                key: "initXHR",
                                value: function () {
                                    var e = this.url;
                                    (this.cachever && (e += "?buggy_cachever=" + this.cachever),
                                        this.xhr.open("GET", e));
                                    var t = null;
                                    ((this.offset || this.length) && (t = "bytes=" + this.offset + "-"),
                                        this.length && (t += this.offset + this.length - 1),
                                        null !== t && this.xhr.setRequestHeader("Range", t));
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
                var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                ((r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r));
                            }
                        }
                        return function (t, n, r) {
                            return (n && e(t.prototype, n), r && e(t, r), t);
                        };
                    })(),
                    i = function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var s = i.get;
                        return void 0 !== s ? s.call(r) : void 0;
                    },
                    a = (function (e) {
                        function t() {
                            return (
                                (function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t),
                                (function (e, t) {
                                    if (!e)
                                        throw ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            );
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw TypeError(
                                        "Super expression must either be null or a function, not " + typeof t,
                                    );
                                ((e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
                            })(t, e),
                            r(t, [
                                {
                                    key: "initXHR",
                                    value: function () {
                                        (i(
                                            t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                            "initXHR",
                                            this,
                                        ).call(this),
                                            (this.xhr.responseType = "text"),
                                            this.xhr.overrideMimeType("text/plain; charset=x-user-defined"));
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
                                        (this.onXHRProgress(),
                                            i(
                                                t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                                "onXHRLoad",
                                                this,
                                            ).call(this));
                                    },
                                },
                            ]),
                            t
                        );
                    })(n(828));
                ((a.supported = function () {
                    try {
                        return !!new XMLHttpRequest().overrideMimeType;
                    } catch (e) {
                        return !1;
                    }
                }),
                    (e.exports = a));
            },
            828: (e, t, n) => {
                var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                ((r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r));
                            }
                        }
                        return function (t, n, r) {
                            return (n && e(t.prototype, n), r && e(t, r), t);
                        };
                    })(),
                    i = function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var s = i.get;
                        return void 0 !== s ? s.call(r) : void 0;
                    };
                e.exports = (function (e) {
                    function t() {
                        return (
                            (function (e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                            })(this, t),
                            (function (e, t) {
                                if (!e)
                                    throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            ((e.prototype = Object.create(t && t.prototype, {
                                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                            })),
                                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
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
                                                (i(), r(e));
                                            };
                                            var a = function () {
                                                    t.offset >= e && !t.eof && (i(), n());
                                                },
                                                s = function () {
                                                    (i(), n());
                                                },
                                                o = function () {
                                                    (i(), r(Error("error streaming")));
                                                };
                                            ((i = function () {
                                                ((t.buffering = !1),
                                                    t.off("buffer", a),
                                                    t.off("done", s),
                                                    t.off("error", o),
                                                    (t._onAbort = null));
                                            }),
                                                (t.buffering = !0),
                                                t.on("buffer", a),
                                                t.on("done", s),
                                                t.on("error", o));
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
                                    (this.xhr.addEventListener("progress", function () {
                                        return e.onXHRProgress();
                                    }),
                                        this.xhr.addEventListener("error", function () {
                                            return e.onXHRError();
                                        }),
                                        this.xhr.addEventListener("load", function () {
                                            return e.onXHRLoad();
                                        }),
                                        this.emit("open"));
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
                                    ((this.eof = !0), this.emit("done"));
                                },
                            },
                        ]),
                        t
                    );
                })(n(306));
            },
            761: (e, t, n) => {
                var r = n(855),
                    i = n(810),
                    a = n(431),
                    s = null;
                e.exports = function (e) {
                    if (!1 === e.progressive) return new a(e);
                    if ((s || (s = r.supported() ? r : i.supported() ? i : null), !s))
                        throw Error("No supported backend class");
                    return new s(e);
                };
            },
            855: (e, t, n) => {
                var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                ((r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r));
                            }
                        }
                        return function (t, n, r) {
                            return (n && e(t.prototype, n), r && e(t, r), t);
                        };
                    })(),
                    i = function e(t, n, r) {
                        null === t && (t = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        if (void 0 === i) {
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var s = i.get;
                        return void 0 !== s ? s.call(r) : void 0;
                    },
                    a = n(828),
                    s = "moz-chunked-arraybuffer",
                    o = (function (e) {
                        function t() {
                            return (
                                (function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                                })(this, t),
                                (function (e, t) {
                                    if (!e)
                                        throw ReferenceError(
                                            "this hasn't been initialised - super() hasn't been called",
                                        );
                                    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                                })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                            );
                        }
                        return (
                            (function (e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw TypeError(
                                        "Super expression must either be null or a function, not " + typeof t,
                                    );
                                ((e.prototype = Object.create(t && t.prototype, {
                                    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                                })),
                                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t)));
                            })(t, e),
                            r(t, [
                                {
                                    key: "initXHR",
                                    value: function () {
                                        (i(
                                            t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                                            "initXHR",
                                            this,
                                        ).call(this),
                                            (this.xhr.responseType = s));
                                    },
                                },
                                {
                                    key: "onXHRProgress",
                                    value: function () {
                                        var e = this.xhr.response;
                                        ((this.bytesRead += e.byteLength), this.emit("buffer", e));
                                    },
                                },
                            ]),
                            t
                        );
                    })(a);
                ((o.supported = function () {
                    try {
                        var e = new XMLHttpRequest();
                        return ((e.responseType = s), e.responseType === s);
                    } catch (e) {
                        return !1;
                    }
                }),
                    (e.exports = o));
            },
            503: (e) => {
                var t = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r));
                        }
                    }
                    return function (t, n, r) {
                        return (n && e(t.prototype, n), r && e(t, r), t);
                    };
                })();
                e.exports = (function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.buffer,
                            r = void 0 === n ? void 0 : n,
                            i = t.string,
                            a = void 0 === i ? void 0 : i,
                            s = t.start,
                            o = void 0 === s ? 0 : s,
                            u = t.end,
                            d = void 0 === u ? o + (r ? r.byteLength : a ? a.length : 0) : u,
                            l = t.prev,
                            c = t.next,
                            f = t.eof,
                            h = t.empty,
                            p = void 0 === h ? !(r || a) : h,
                            _ = t.timestamp,
                            m = void 0 === _ ? Date.now() : _;
                        ((function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.start = o),
                            (this.end = d),
                            (this.prev = void 0 === l ? null : l),
                            (this.next = void 0 === c ? null : c),
                            (this.eof = void 0 !== f && f),
                            (this.empty = p),
                            (this.timestamp = m),
                            (this.buffer = r),
                            (this.string = a),
                            Object.defineProperty(this, "length", {
                                get: function () {
                                    return this.end - this.start;
                                },
                            }));
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
                                        var a = new Uint8Array(this.buffer, r, i);
                                        e.set(a);
                                    } else {
                                        if (!this.string) throw Error("invalid state");
                                        for (var s = this.string, o = 0; o < i; o++) e[o] = s.charCodeAt(r + o);
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
                                    return ((n.next = r), (r.prev = n), [n, r]);
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
                var r = (function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                ((r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    Object.defineProperty(e, r.key, r));
                            }
                        }
                        return function (t, n, r) {
                            return (n && e(t.prototype, n), r && e(t, r), t);
                        };
                    })(),
                    i = n(503);
                e.exports = (function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.cacheSize;
                        if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                        var r = new i({ eof: !0 });
                        ((this.head = r),
                            (this.tail = r),
                            (this.readOffset = 0),
                            (this.readCursor = r),
                            (this.writeOffset = 0),
                            (this.writeCursor = r),
                            (this.cacheSize = void 0 === n ? 0 : n));
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
                                    ((this.readOffset = e), (this.readCursor = t));
                                },
                            },
                            {
                                key: "seekWrite",
                                value: function (e) {
                                    var t = this.head.first(function (t) {
                                        return t.contains(e);
                                    });
                                    if (!t) throw Error("write seek out of range");
                                    ((this.writeOffset = e), (this.writeCursor = t));
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
                                            a = r,
                                            s = this.readCursor;
                                        s && !s.empty && !(s.start >= i);
                                        s = s.next
                                    ) {
                                        var o = Math.min(i, s.end),
                                            u = e.subarray(a - r, o - r);
                                        (s.readBytes(u, a, o), (a = o));
                                    }
                                    return (
                                        (this.readOffset = a),
                                        (this.readCursor = this.readCursor.first(function (e) {
                                            return e.contains(a);
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
                                    if (!n.contains(t.end) && n.end !== t.end) throw Error("write cursor too small");
                                    (n.start < t.start && (this.split(n, t.start), (n = this.writeCursor)),
                                        (t.end < n.end || n.eof) && (this.split(n, t.end), (n = this.writeCursor)),
                                        this.splice(n, n, t, t),
                                        (this.writeOffset = t.end),
                                        (this.writeCursor = t.next),
                                        this.gc());
                                },
                            },
                            {
                                key: "bufferItem",
                                value: function (e) {
                                    if (e instanceof ArrayBuffer)
                                        return new i({
                                            start: this.writeOffset,
                                            end: this.writeOffset + e.byteLength,
                                            buffer: e,
                                        });
                                    if ("string" == typeof e)
                                        return new i({
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
                                            ((t = t.last(function (e) {
                                                return !e.empty;
                                            })),
                                                e.push([n.start, t.end]));
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
                                            (n.end < this.readOffset || n.start > this.readOffset + this.chunkSize) &&
                                                t.push(n));
                                    if (e > this.cacheSize) {
                                        t.sort(function (e, t) {
                                            return e.timestamp - t.timestamp;
                                        });
                                        for (var r = 0; r < t.length; r++) {
                                            var i = t[r];
                                            if (e <= this.cacheSize) break;
                                            (this.remove(i), (e -= i.length));
                                        }
                                    }
                                },
                            },
                            {
                                key: "remove",
                                value: function (e) {
                                    var t = new i({ start: e.start, end: e.end });
                                    (this.splice(e, e, t, t),
                                        (e = t).prev && e.prev.empty && (e = this.consolidate(e.prev)),
                                        e.next && e.next.empty && !e.next.eof && (e = this.consolidate(e)),
                                        0 === e.start && (this.head = e));
                                },
                            },
                            {
                                key: "consolidate",
                                value: function (e) {
                                    var t = e.last(function (e) {
                                            return e.empty && !e.eof;
                                        }),
                                        n = new i({ start: e.start, end: t.end });
                                    return (this.splice(e, t, n, n), n);
                                },
                            },
                            {
                                key: "splice",
                                value: function (e, t, n, r) {
                                    var i = this;
                                    if (e.start !== n.start) throw Error("invalid splice head");
                                    if (!(t.end === r.end || (t.eof && r.eof))) throw Error("invalid splice tail");
                                    var a = e.prev,
                                        s = t.next;
                                    ((e.prev = null),
                                        (t.next = null),
                                        a && ((a.next = n), (n.prev = a)),
                                        s && ((s.prev = r), (r.next = s)),
                                        e === this.head && (this.head = n),
                                        t === this.tail && (this.tail = r),
                                        (this.readCursor = this.head.first(function (e) {
                                            return e.contains(i.readOffset);
                                        })),
                                        (this.writeCursor = this.head.first(function (e) {
                                            return e.contains(i.writeOffset);
                                        })));
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
                e.exports = n(91);
            },
            566: (e) => {
                var t = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r));
                        }
                    }
                    return function (t, n, r) {
                        return (n && e(t.prototype, n), r && e(t, r), t);
                    };
                })();
                e.exports = (function () {
                    function e() {
                        (!(function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this._e = {}));
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
                var r = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            ((r.enumerable = r.enumerable || !1),
                                (r.configurable = !0),
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(e, r.key, r));
                        }
                    }
                    return function (t, n, r) {
                        return (n && e(t.prototype, n), r && e(t, r), t);
                    };
                })();
                n(566);
                var i = n(814),
                    a = n(761);
                e.exports = (function () {
                    function e(t) {
                        var n = t.url,
                            r = t.chunkSize,
                            a = t.cacheSize,
                            s = t.progressive;
                        (!(function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.length = -1),
                            (this.loaded = !1),
                            (this.loading = !1),
                            (this.seekable = !1),
                            (this.buffering = !1),
                            (this.seeking = !1),
                            (this.progressive = void 0 === s || s),
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
                            (this.url = void 0 === n ? "" : n),
                            (this.headers = {}),
                            (this._cache = new i({ cacheSize: void 0 === a ? 0 : a })),
                            (this._backend = null),
                            (this._cachever = 0),
                            (this._chunkSize = void 0 === r ? 1048576 : r));
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
                                        ((e.loading = !0),
                                            e
                                                ._openBackend()
                                                .then(function (n) {
                                                    ((e.seekable = n.seekable),
                                                        (e.headers = n.headers),
                                                        (e.length = n.length),
                                                        (e.loaded = !0),
                                                        (e.loading = !1),
                                                        t());
                                                })
                                                .catch(function (t) {
                                                    ("AbortError" !== t.name && (e.loading = !1), n(t));
                                                }));
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
                                                s = r.bytesReadable(i),
                                                o = r.readOffset + s;
                                            if ((r.seekWrite(o), e.length >= 0 && o >= e.length)) return void t(null);
                                            var u =
                                                e._clampToLength(r.writeOffset + r.bytesWritable(i)) - r.writeOffset;
                                            if (0 === u) t(null);
                                            else {
                                                var d = (e._backend = new a({
                                                        url: e.url,
                                                        offset: e._cache.writeOffset,
                                                        length: u,
                                                        cachever: e._cachever,
                                                        progressive: e.progressive,
                                                    })),
                                                    l = null,
                                                    c = function () {
                                                        d !== e._backend
                                                            ? (l(), n(Error("invalid state")))
                                                            : (d.on("buffer", function (t) {
                                                                  d === e._backend && e._cache.write(t);
                                                              }),
                                                              d.on("done", function () {
                                                                  d === e._backend &&
                                                                      (-1 === e.length &&
                                                                          (e.length =
                                                                              e._backend.offset + e._backend.bytesRead),
                                                                      (e._backend = null));
                                                              }),
                                                              t(d));
                                                    },
                                                    f = function (t) {
                                                        d !== e._backend
                                                            ? n(Error("invalid state"))
                                                            : ((e._backend = null), n(t));
                                                    };
                                                ((l = function () {
                                                    (d.off("open", c), d.off("error", f));
                                                }),
                                                    d.on("open", c),
                                                    d.on("error", f),
                                                    d.on("cachever", function () {
                                                        e._cachever++;
                                                    }),
                                                    d.load());
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
                                        (t._backend && t.abort(),
                                            t._cache.seekRead(e),
                                            t._cache.seekWrite(e),
                                            t._readAhead().then(n).catch(r));
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
                                    if (!this.loaded || this.buffering || this.seeking) throw Error("invalid state");
                                    if (!(e instanceof Uint8Array)) throw Error("invalid input");
                                    var t = this._cache.readBytes(e);
                                    return (this._readAhead(), t);
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
                                            a = i - t.offset,
                                            s = t.bytesAvailable(a);
                                        s >= a
                                            ? n(s)
                                            : ((t.buffering = !0),
                                              t
                                                  ._openBackend()
                                                  .then(function (n) {
                                                      return n
                                                          ? n.bufferToOffset(i).then(function () {
                                                                return ((t.buffering = !1), t.buffer(e));
                                                            })
                                                          : Promise.resolve(s);
                                                  })
                                                  .then(function (e) {
                                                      ((t.buffering = !1), n(e));
                                                  })
                                                  .catch(function (e) {
                                                      ("AbortError" !== e.name && (t.buffering = !1), r(e));
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
                                    (this.loading && (this.loading = !1),
                                        this.buffering && (this.buffering = !1),
                                        this.seeking && (this.seeking = !1),
                                        this._backend && (this._backend.abort(), (this._backend = null)));
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
                (n.r(t), n.d(t, { default: () => r }));
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
                    function t(e, t) {
                        throw Error("abstract");
                    }
                    ((t.prototype.drawFrame = function (e) {
                        throw Error("abstract");
                    }),
                        (t.prototype.clear = function () {
                            throw Error("abstract");
                        }),
                        (e.exports = t));
                })();
            },
            926: (e, t, n) => {
                !(function () {
                    var t = n(487),
                        r = n(627);
                    function i(e) {
                        var t = e.getContext("2d"),
                            n = null,
                            i = null,
                            a = null;
                        return (
                            (this.drawFrame = function (s) {
                                var o,
                                    u,
                                    d = s.format;
                                ((e.width === d.displayWidth && e.height === d.displayHeight) ||
                                    ((e.width = d.displayWidth), (e.height = d.displayHeight)),
                                    (null !== n && n.width == d.width && n.height == d.height) ||
                                        (function (e, r) {
                                            for (
                                                var i = (n = t.createImageData(e, r)).data, a = e * r * 4, s = 0;
                                                s < a;
                                                s += 4
                                            )
                                                i[s + 3] = 255;
                                        })(d.width, d.height),
                                    r.convertYCbCr(s, n.data));
                                var l,
                                    c = d.cropWidth != d.displayWidth || d.cropHeight != d.displayHeight;
                                (c
                                    ? (i ||
                                          ((o = d.cropWidth),
                                          (u = d.cropHeight),
                                          ((i = document.createElement("canvas")).width = o),
                                          (i.height = u),
                                          (a = i.getContext("2d"))),
                                      (l = a))
                                    : (l = t),
                                    l.putImageData(
                                        n,
                                        -d.cropLeft,
                                        -d.cropTop,
                                        d.cropLeft,
                                        d.cropTop,
                                        d.cropWidth,
                                        d.cropHeight,
                                    ),
                                    c && t.drawImage(i, 0, 0, d.displayWidth, d.displayHeight));
                            }),
                            (this.clear = function () {
                                t.clearRect(0, 0, e.width, e.height);
                            }),
                            this
                        );
                    }
                    ((i.prototype = Object.create(t.prototype)), (e.exports = i));
                })();
            },
            895: (e, t, n) => {
                !(function () {
                    var t = n(487),
                        r = n(826);
                    function i(e) {
                        var t,
                            n,
                            a = this,
                            s = i.contextForCanvas(e);
                        if (null === s) throw Error("WebGL unavailable");
                        function o(e, t) {
                            var n = s.createShader(e);
                            if (
                                (s.shaderSource(n, t), s.compileShader(n), !s.getShaderParameter(n, s.COMPILE_STATUS))
                            ) {
                                var r = s.getShaderInfoLog(n);
                                throw (s.deleteShader(n), Error("GL shader compilation for " + e + " failed: " + r));
                            }
                            return n;
                        }
                        var u,
                            d,
                            l,
                            c,
                            f,
                            h,
                            p,
                            _,
                            m,
                            y,
                            g = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                            v = {},
                            b = {},
                            w = {};
                        function V(e, t) {
                            return ((v[e] && !t) || (v[e] = s.createTexture()), v[e]);
                        }
                        function T(e, t, n, r, a) {
                            var o = !v[e] || t,
                                u = V(e, t);
                            if ((s.activeTexture(s.TEXTURE0), i.stripe)) {
                                var d = !v[e + "_temp"] || t,
                                    l = V(e + "_temp", t);
                                (s.bindTexture(s.TEXTURE_2D, l),
                                    d
                                        ? (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                                          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                                          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST),
                                          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
                                          s.texImage2D(
                                              s.TEXTURE_2D,
                                              0,
                                              s.RGBA,
                                              n / 4,
                                              r,
                                              0,
                                              s.RGBA,
                                              s.UNSIGNED_BYTE,
                                              a,
                                          ))
                                        : s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, n / 4, r, s.RGBA, s.UNSIGNED_BYTE, a));
                                var c = v[e + "_stripe"],
                                    f = !c || t;
                                (f && (c = V(e + "_stripe", t)),
                                    s.bindTexture(s.TEXTURE_2D, c),
                                    f &&
                                        (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST),
                                        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
                                        s.texImage2D(
                                            s.TEXTURE_2D,
                                            0,
                                            s.RGBA,
                                            n,
                                            1,
                                            0,
                                            s.RGBA,
                                            s.UNSIGNED_BYTE,
                                            (function (e) {
                                                if (w[e]) return w[e];
                                                for (var t = new Uint32Array(e), n = 0; n < e; n += 4)
                                                    ((t[n] = 255),
                                                        (t[n + 1] = 65280),
                                                        (t[n + 2] = 0xff0000),
                                                        (t[n + 3] = 0xff000000));
                                                return (w[e] = new Uint8Array(t.buffer));
                                            })(n),
                                        )));
                            } else
                                (s.bindTexture(s.TEXTURE_2D, u),
                                    o
                                        ? (s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                                          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                                          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR),
                                          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
                                          s.texImage2D(s.TEXTURE_2D, 0, s.ALPHA, n, r, 0, s.ALPHA, s.UNSIGNED_BYTE, a))
                                        : s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, n, r, s.ALPHA, s.UNSIGNED_BYTE, a));
                        }
                        function k(e, t, r, i) {
                            var a = v[e];
                            s.useProgram(n);
                            var o = b[e];
                            ((o && !t) ||
                                (s.activeTexture(s.TEXTURE0),
                                s.bindTexture(s.TEXTURE_2D, a),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
                                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, r, i, 0, s.RGBA, s.UNSIGNED_BYTE, null),
                                (o = b[e] = s.createFramebuffer())),
                                s.bindFramebuffer(s.FRAMEBUFFER, o),
                                s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, a, 0));
                            var p = v[e + "_temp"];
                            (s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, p), s.uniform1i(h, 1));
                            var _ = v[e + "_stripe"];
                            (s.activeTexture(s.TEXTURE2),
                                s.bindTexture(s.TEXTURE_2D, _),
                                s.uniform1i(f, 2),
                                s.bindBuffer(s.ARRAY_BUFFER, u),
                                s.enableVertexAttribArray(d),
                                s.vertexAttribPointer(d, 2, s.FLOAT, !1, 0, 0),
                                s.bindBuffer(s.ARRAY_BUFFER, l),
                                s.enableVertexAttribArray(c),
                                s.vertexAttribPointer(c, 2, s.FLOAT, !1, 0, 0),
                                s.viewport(0, 0, r, i),
                                s.drawArrays(s.TRIANGLES, 0, g.length / 2),
                                s.bindFramebuffer(s.FRAMEBUFFER, null));
                        }
                        function A(e, n, r) {
                            (s.activeTexture(n),
                                s.bindTexture(s.TEXTURE_2D, v[e]),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR),
                                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
                                s.uniform1i(s.getUniformLocation(t, e), r));
                        }
                        function E(e, t) {
                            var n = o(s.VERTEX_SHADER, e),
                                r = o(s.FRAGMENT_SHADER, t),
                                i = s.createProgram();
                            if (
                                (s.attachShader(i, n),
                                s.attachShader(i, r),
                                s.linkProgram(i),
                                !s.getProgramParameter(i, s.LINK_STATUS))
                            ) {
                                var a = s.getProgramInfoLog(i);
                                throw (s.deleteProgram(i), Error("GL program linking failed: " + a));
                            }
                            return i;
                        }
                        return (
                            (a.drawFrame = function (o) {
                                var v = o.format,
                                    b = !t || e.width !== v.displayWidth || e.height !== v.displayHeight;
                                if (
                                    (b && ((e.width = v.displayWidth), (e.height = v.displayHeight), a.clear()),
                                    t ||
                                        (function () {
                                            if (i.stripe) {
                                                ((n = E(r.vertexStripe, r.fragmentStripe)),
                                                    s.getAttribLocation(n, "aPosition"),
                                                    (l = s.createBuffer()));
                                                var e = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
                                                (s.bindBuffer(s.ARRAY_BUFFER, l),
                                                    s.bufferData(s.ARRAY_BUFFER, e, s.STATIC_DRAW),
                                                    (c = s.getAttribLocation(n, "aTexturePosition")),
                                                    (f = s.getUniformLocation(n, "uStripe")),
                                                    (h = s.getUniformLocation(n, "uTexture")));
                                            }
                                            ((t = E(r.vertex, r.fragment)),
                                                (u = s.createBuffer()),
                                                s.bindBuffer(s.ARRAY_BUFFER, u),
                                                s.bufferData(s.ARRAY_BUFFER, g, s.STATIC_DRAW),
                                                (d = s.getAttribLocation(t, "aPosition")),
                                                (p = s.createBuffer()),
                                                (_ = s.getAttribLocation(t, "aLumaPosition")),
                                                (m = s.createBuffer()),
                                                (y = s.getAttribLocation(t, "aChromaPosition")));
                                        })(),
                                    b)
                                ) {
                                    var w = function (e, t, n) {
                                        var r = v.cropLeft / n,
                                            i = (v.cropLeft + v.cropWidth) / n,
                                            a = (v.cropTop + v.cropHeight) / v.height,
                                            o = v.cropTop / v.height,
                                            u = new Float32Array([r, a, i, a, r, o, r, o, i, a, i, o]);
                                        (s.bindBuffer(s.ARRAY_BUFFER, e),
                                            s.bufferData(s.ARRAY_BUFFER, u, s.STATIC_DRAW));
                                    };
                                    (w(p, 0, o.y.stride), w(m, 0, (o.u.stride * v.width) / v.chromaWidth));
                                }
                                (T("uTextureY", b, o.y.stride, v.height, o.y.bytes),
                                    T("uTextureCb", b, o.u.stride, v.chromaHeight, o.u.bytes),
                                    T("uTextureCr", b, o.v.stride, v.chromaHeight, o.v.bytes),
                                    i.stripe &&
                                        (k("uTextureY", b, o.y.stride, v.height),
                                        k("uTextureCb", b, o.u.stride, v.chromaHeight),
                                        k("uTextureCr", b, o.v.stride, v.chromaHeight)),
                                    s.useProgram(t),
                                    s.viewport(0, 0, e.width, e.height),
                                    A("uTextureY", s.TEXTURE0, 0),
                                    A("uTextureCb", s.TEXTURE1, 1),
                                    A("uTextureCr", s.TEXTURE2, 2),
                                    s.bindBuffer(s.ARRAY_BUFFER, u),
                                    s.enableVertexAttribArray(d),
                                    s.vertexAttribPointer(d, 2, s.FLOAT, !1, 0, 0),
                                    s.bindBuffer(s.ARRAY_BUFFER, p),
                                    s.enableVertexAttribArray(_),
                                    s.vertexAttribPointer(_, 2, s.FLOAT, !1, 0, 0),
                                    s.bindBuffer(s.ARRAY_BUFFER, m),
                                    s.enableVertexAttribArray(y),
                                    s.vertexAttribPointer(y, 2, s.FLOAT, !1, 0, 0),
                                    s.drawArrays(s.TRIANGLES, 0, g.length / 2));
                            }),
                            (a.clear = function () {
                                (s.viewport(0, 0, e.width, e.height),
                                    s.clearColor(0, 0, 0, 0),
                                    s.clear(s.COLOR_BUFFER_BIT));
                            }),
                            a.clear(),
                            a
                        );
                    }
                    ((i.stripe = !1),
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
                            ((t.width = 1), (t.height = 1));
                            try {
                                e = i.contextForCanvas(t);
                            } catch (e) {
                                return !1;
                            }
                            if (e) {
                                var n = e.TEXTURE0,
                                    r = e.createTexture(),
                                    a = new Uint8Array(16),
                                    s = i.stripe ? 1 : 4,
                                    o = i.stripe ? e.RGBA : e.ALPHA,
                                    u = i.stripe ? e.NEAREST : e.LINEAR;
                                return (
                                    e.activeTexture(n),
                                    e.bindTexture(e.TEXTURE_2D, r),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, u),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, u),
                                    e.texImage2D(e.TEXTURE_2D, 0, o, s, 4, 0, o, e.UNSIGNED_BYTE, a),
                                    !e.getError()
                                );
                            }
                            return !1;
                        }),
                        (i.prototype = Object.create(t.prototype)),
                        (e.exports = i));
                })();
            },
            627: (e, t, n) => {
                !(function () {
                    var t = n(877);
                    e.exports = {
                        convertYCbCr: function (e, n) {
                            var r = 0 | e.format.width,
                                i = 0 | e.format.height,
                                a = 0 | t(e.format.width / e.format.chromaWidth),
                                s = 0 | t(e.format.height / e.format.chromaHeight),
                                o = e.y.bytes,
                                u = e.u.bytes,
                                d = e.v.bytes,
                                l = 0 | e.y.stride,
                                c = 0 | e.u.stride,
                                f = 0 | e.v.stride,
                                h = r << 2,
                                p = 0,
                                _ = 0,
                                m = 0,
                                y = 0,
                                g = 0,
                                v = 0,
                                b = 0,
                                w = 0,
                                V = 0,
                                T = 0,
                                k = 0,
                                A = 0,
                                E = 0,
                                P = 0,
                                x = 0,
                                S = 0,
                                O = 0,
                                R = 0;
                            if (1 == a && 1 == s)
                                for (b = 0, w = h, R = 0, S = 0; S < i; S += 2) {
                                    for (
                                        m = ((_ = (S * l) | 0) + l) | 0, y = (R * c) | 0, g = (R * f) | 0, x = 0;
                                        x < r;
                                        x += 2
                                    )
                                        ((V = 0 | u[y++]),
                                            (A = (((409 * (T = 0 | d[g++])) | 0) - 57088) | 0),
                                            (E = (((100 * V) | 0) + ((208 * T) | 0) - 34816) | 0),
                                            (P = (((516 * V) | 0) - 70912) | 0),
                                            (k = (298 * o[_++]) | 0),
                                            (n[b] = (k + A) >> 8),
                                            (n[b + 1] = (k - E) >> 8),
                                            (n[b + 2] = (k + P) >> 8),
                                            (b += 4),
                                            (k = (298 * o[_++]) | 0),
                                            (n[b] = (k + A) >> 8),
                                            (n[b + 1] = (k - E) >> 8),
                                            (n[b + 2] = (k + P) >> 8),
                                            (b += 4),
                                            (k = (298 * o[m++]) | 0),
                                            (n[w] = (k + A) >> 8),
                                            (n[w + 1] = (k - E) >> 8),
                                            (n[w + 2] = (k + P) >> 8),
                                            (w += 4),
                                            (k = (298 * o[m++]) | 0),
                                            (n[w] = (k + A) >> 8),
                                            (n[w + 1] = (k - E) >> 8),
                                            (n[w + 2] = (k + P) >> 8),
                                            (w += 4));
                                    ((b += h), (w += h), R++);
                                }
                            else
                                for (v = 0, S = 0; S < i; S++)
                                    for (
                                        O = 0, p = (S * l) | 0, y = ((R = S >> s) * c) | 0, g = (R * f) | 0, x = 0;
                                        x < r;
                                        x++
                                    )
                                        ((V = 0 | u[y + (O = x >> a)]),
                                            (A = (((409 * (T = 0 | d[g + O])) | 0) - 57088) | 0),
                                            (E = (((100 * V) | 0) + ((208 * T) | 0) - 34816) | 0),
                                            (P = (((516 * V) | 0) - 70912) | 0),
                                            (k = (298 * o[p++]) | 0),
                                            (n[v] = (k + A) >> 8),
                                            (n[v + 1] = (k - E) >> 8),
                                            (n[v + 2] = (k + P) >> 8),
                                            (v += 4));
                        },
                    };
                })();
            },
            877: (e) => {
                !(function () {
                    e.exports = function (e) {
                        for (var t = 0, n = e >> 1; 0 != n;) ((n >>= 1), t++);
                        if (e !== 1 << t)
                            throw "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " + e;
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
                            return ("webGL" in (t = t || {}) ? t.webGL : i.isAvailable()) ? new i(e, t) : new r(e, t);
                        },
                    };
                })();
            },
        },
        t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var a = (t[r] = { exports: {} });
        return (e[r](a, a.exports, n), a.exports);
    }
    ((n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = (e) => {
            ("u" > typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 }));
        }));
    var r = {};
    return (
        (() => {
            var e = n(318);
            (Object.defineProperty(r, "__esModule", { value: !0 }),
                Object.defineProperty(r, "OGVCompat", {
                    enumerable: !0,
                    get: function () {
                        return i.default;
                    },
                }),
                Object.defineProperty(r, "OGVLoader", {
                    enumerable: !0,
                    get: function () {
                        return a.default;
                    },
                }),
                Object.defineProperty(r, "OGVMediaError", {
                    enumerable: !0,
                    get: function () {
                        return s.default;
                    },
                }),
                Object.defineProperty(r, "OGVMediaType", {
                    enumerable: !0,
                    get: function () {
                        return o.default;
                    },
                }),
                Object.defineProperty(r, "OGVPlayer", {
                    enumerable: !0,
                    get: function () {
                        return u.default;
                    },
                }),
                Object.defineProperty(r, "OGVTimeRanges", {
                    enumerable: !0,
                    get: function () {
                        return d.default;
                    },
                }),
                (r.OGVVersion = void 0));
            var t = e(n(8)),
                i = e(n(523)),
                a = e(n(964)),
                s = e(n(759)),
                o = e(n(278)),
                u = e(n(869)),
                d = e(n(168)),
                l = "1.8.9-20220406232920-cb5f7ff";
            ((r.OGVVersion = l),
                "object" === ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
                    ((window.OGVCompat = i.default),
                    (window.OGVLoader = a.default),
                    (window.OGVMediaError = s.default),
                    (window.OGVMediaType = o.default),
                    (window.OGVTimeRanges = d.default),
                    (window.OGVPlayer = u.default),
                    (window.OGVVersion = l)));
        })(),
        r
    );
})();
