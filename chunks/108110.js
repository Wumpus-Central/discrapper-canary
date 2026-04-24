e.exports = (function () {
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
                        n && t(e.prototype, n), r && t(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e
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
                                          var a = Object.getOwnPropertyDescriptor(i, t);
                                          return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value;
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
                                            a = this.bufferSize,
                                            u = 0;
                                        u < t;
                                        u++
                                    ) {
                                        for (var o = 0; o < n; o++) i[o][r] = e[o][u];
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
                                    for (var a = [], u = 0; u < this.channels; u++) a[u] = e[u].subarray(t, i);
                                    return a;
                                }),
                                (e.exports = n);
                        },
                        function (e, t, n) {
                            n(0);
                            var r = n(2),
                                i = n(4);
                            function a(e) {
                                (this._options = e || {}),
                                    (this._backend = null),
                                    (this._resampleFractional = 0),
                                    (this._resampleLastSampleData = void 0),
                                    (this._tempoChanger = null);
                            }
                            (a.prototype.rate = 0),
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
                                    (this.targetRate = this._backend.rate),
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
                                        }.bind(this));
                                }),
                                (a.prototype._resample = function (e) {
                                    var t = this.rate,
                                        n = this.channels,
                                        r = this._backend.rate,
                                        i = this._backend.channels;
                                    if (t == r && n == i) return e;
                                    var a,
                                        u = [],
                                        o = e[0].length,
                                        s = this._resampleFractional,
                                        l = (o * r) / t + s,
                                        d = Math.floor(l),
                                        c = l - d;
                                    a =
                                        t < r
                                            ? function (e, n, i, a) {
                                                  for (
                                                      var u = function (t) {
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
                                                      var l,
                                                          d = ((o + 1 - s) * t) / r - 1,
                                                          c = Math.floor(d),
                                                          f = Math.ceil(d);
                                                      (l = c == f ? u(c) : u(c) * (f - d) + u(f) * (d - c)),
                                                          (n[o] = a * l);
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
                                        var m = e[p],
                                            _ = new Float32Array(d);
                                        a(
                                            m,
                                            _,
                                            this._resampleLastSampleData ? this._resampleLastSampleData[p] : void 0,
                                            f,
                                        ),
                                            u.push(_);
                                    }
                                    return (this._resampleFractional = c), (this._resampleLastSampleData = e), u;
                                }),
                                (a.prototype.bufferData = function (e) {
                                    if (!this._backend)
                                        throw "Invalid state: AudioFeeder cannot bufferData before init";
                                    var t = this._resample(e);
                                    (t = this._tempoChanger.process(t)), this._backend.appendBuffer(t);
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
                                    this._tempoChanger.flush(this.durationBuffered), this._backend.flush();
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
                                (e.exports = a);
                        },
                        function (e, t, n) {
                            var r = window.AudioContext || window.webkitAudioContext,
                                i = n(0),
                                a = n(3);
                            function u(e, t, n) {
                                var r = n.audioContext || u.initSharedAudioContext();
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
                            (u.prototype.bufferSize = 4096),
                                (u.prototype.bufferThreshold = 8192),
                                (u.prototype._volume = 1),
                                Object.defineProperty(u.prototype, "volume", {
                                    get: function () {
                                        return this._volume;
                                    },
                                    set: function (e) {
                                        this._volume = +e;
                                    },
                                }),
                                (u.prototype._muted = !1),
                                Object.defineProperty(u.prototype, "muted", {
                                    get: function () {
                                        return this._muted;
                                    },
                                    set: function (e) {
                                        this._muted = !!e;
                                    },
                                }),
                                (u.prototype._audioProcess = function (e) {
                                    var t,
                                        n,
                                        r,
                                        i,
                                        u =
                                            "number" == typeof e.playbackTime
                                                ? e.playbackTime
                                                : this._context.currentTime + this.bufferSize / this.rate,
                                        o = this._playbackTimeAtBufferTail;
                                    if (
                                        (o < u && (this._delayedTime += u - o),
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
                                        var s = this.muted ? 0 : this.volume,
                                            l = this._bufferQueue.nextBuffer();
                                        if (l[0].length < this.bufferSize) throw "Audio buffer not expected length.";
                                        for (t = 0; t < this.channels; t++)
                                            for (
                                                n = l[t],
                                                    this._liveBuffer[t].set(l[t]),
                                                    r = e.outputBuffer.getChannelData(t),
                                                    i = 0;
                                                i < n.length;
                                                i++
                                            )
                                                r[i] = n[i] * s;
                                        (this._queuedTime += this.bufferSize / this.rate),
                                            (this._playbackTimeAtBufferTail = u + this.bufferSize / this.rate),
                                            this._bufferQueue.sampleCount() <
                                                Math.max(this.bufferSize, this.bufferThreshold) &&
                                                this.onbufferlow &&
                                                a(this.onbufferlow.bind(this));
                                    }
                                }),
                                (u.prototype._samplesQueued = function () {
                                    return (
                                        this._bufferQueue.sampleCount() +
                                        Math.floor(this._timeAwaitingPlayback() * this.rate)
                                    );
                                }),
                                (u.prototype._timeAwaitingPlayback = function () {
                                    return Math.max(0, this._playbackTimeAtBufferTail - this._context.currentTime);
                                }),
                                (u.prototype.getPlaybackState = function () {
                                    return {
                                        playbackPosition: this._queuedTime - this._timeAwaitingPlayback(),
                                        samplesQueued: this._samplesQueued(),
                                        dropped: this._dropped,
                                        delayed: this._delayedTime,
                                    };
                                }),
                                (u.prototype.waitUntilReady = function (e) {
                                    e();
                                }),
                                (u.prototype.appendBuffer = function (e) {
                                    this._bufferQueue.appendBuffer(e);
                                }),
                                (u.prototype.start = function () {
                                    (this._node.onaudioprocess = this._audioProcess.bind(this)),
                                        this._node.connect(this.output),
                                        (this._playbackTimeAtBufferTail = this._context.currentTime);
                                }),
                                (u.prototype.stop = function () {
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
                                (u.prototype.flush = function () {
                                    this._bufferQueue.flush();
                                }),
                                (u.prototype.close = function () {
                                    this.stop(), (this._context = null);
                                }),
                                (u.prototype.onstarved = null),
                                (u.prototype.onbufferlow = null),
                                (u.isSupported = function () {
                                    return !!r;
                                }),
                                (u.sharedAudioContext = null),
                                (u.initSharedAudioContext = function () {
                                    if (!u.sharedAudioContext && u.isSupported()) {
                                        var e,
                                            t = new r();
                                        if (t.createScriptProcessor) e = t.createScriptProcessor(1024, 0, 2);
                                        else {
                                            if (!t.createJavaScriptNode) throw Error("Bad version of web audio API?");
                                            e = t.createJavaScriptNode(1024, 0, 2);
                                        }
                                        e.connect(t.destination), e.disconnect(), (u.sharedAudioContext = t);
                                    }
                                    return u.sharedAudioContext;
                                }),
                                (e.exports = u);
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
                                                (r = n(0)),
                                                    (i = n(2)),
                                                    (e.exports = function (e) {
                                                        var t = (e = e || {}).sampleRate || 44100,
                                                            n = e.wsizeLog || 11,
                                                            a = e.tempo || 1,
                                                            u = (e.numChannels, Math.pow(2, 50 / 1200) - 1),
                                                            o = 1 << n,
                                                            s = i(n),
                                                            l = 1 << (n - 2);
                                                        l -= l % 100;
                                                        for (
                                                            var d = r.float_array(o + l + 5),
                                                                c = r.float_array(o + l + 5),
                                                                f = l,
                                                                h = l,
                                                                p = r.float_array(o),
                                                                m = 0;
                                                            m < o;
                                                            m++
                                                        )
                                                            p[m] = 0.5 * (1 - Math.cos((2 * Math.PI * m) / o));
                                                        var _ = 1 + (o >> 1),
                                                            v = r.float_array(_),
                                                            g = r.float_array(_),
                                                            y = r.float_array(_),
                                                            D = r.float_array(_),
                                                            b = r.float_array(_),
                                                            C = r.float_array(_),
                                                            E = 1 + (_ >> 1),
                                                            w = [0, 0],
                                                            A = [],
                                                            B = [],
                                                            F = [],
                                                            V = [];
                                                        for (m = 0; m < 2; m++)
                                                            A.push(r.float_array(E)),
                                                                B.push(r.float_array(E)),
                                                                F.push(r.float_array(E)),
                                                                V.push(r.float_array(_));
                                                        var T = r.float_array(E),
                                                            k = r.float_array(E),
                                                            x = 0,
                                                            P = 0,
                                                            O = [{ in_time: 0, out_time: 0, tempo: a }],
                                                            S = 0,
                                                            R = 0,
                                                            M = 1,
                                                            N = 0,
                                                            L = 0,
                                                            I = 0,
                                                            j = 0,
                                                            G = {
                                                                mapOutputToInputTime: function (e) {
                                                                    for (
                                                                        var t = O.length - 1;
                                                                        e < O[t].out_time && t > 0;
                                                                    )
                                                                        t--;
                                                                    var n = O[t];
                                                                    return n.in_time + n.tempo * (e - n.out_time);
                                                                },
                                                                flush: function (e) {
                                                                    (N = 0), (w = [0, 0]), (R = 0), (j = 0), (I = 0);
                                                                    for (var t = 0; t < 2; t++)
                                                                        for (var n = 0; n < _; n++) V[t][n] = 0;
                                                                    for (t = 0; t < d.length; t++) d[t] = 0;
                                                                    for (t = 0; t < c.length; t++) c[t] = 0;
                                                                    if (e) {
                                                                        (P = Math.max(0, P - e)),
                                                                            (x = G.mapOutputToInputTime(P));
                                                                        for (
                                                                            var r = O.length - 1;
                                                                            P <= O[r].out_time && r >= 0;
                                                                        )
                                                                            O.pop(), r--;
                                                                        O.push({ in_time: x, out_time: P, tempo: a });
                                                                    }
                                                                },
                                                                getTempo: function () {
                                                                    return a;
                                                                },
                                                                setTempo: function (e) {
                                                                    (f = h = l),
                                                                        e >= 1
                                                                            ? (h = Math.round(f / e))
                                                                            : (f = Math.round(h * e)),
                                                                        (L = (1 / e - h / f) * f),
                                                                        (M = (function (e, t) {
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
                                                                        (a = e);
                                                                    var t = O[O.length - 1];
                                                                    t.out_time == P
                                                                        ? (t.tempo = e)
                                                                        : O.push({ in_time: x, out_time: P, tempo: e });
                                                                },
                                                            };
                                                        G.flush(0), G.setTempo(a);
                                                        var W = function (e, t, n) {
                                                                var r = Math.floor(n),
                                                                    i = r % 2 == 1 ? -1 : 1;
                                                                return Math.atan2(
                                                                    i * (t[r] - t[r + 1]),
                                                                    i * (e[r] - e[r + 1]),
                                                                );
                                                            },
                                                            K = function (e, t, n, r, i) {
                                                                var a,
                                                                    u = ((2 * Math.PI) / o) * 0.5 * (r + t) * f;
                                                                return (
                                                                    ((a = e - n - u) -
                                                                        2 * Math.PI * Math.round(a / (2 * Math.PI)) +
                                                                        u) *
                                                                    i
                                                                );
                                                            },
                                                            U = function (e, t, n, r, i, a) {
                                                                for (
                                                                    var s = e % 2,
                                                                        l = 1 - s,
                                                                        d = V[l],
                                                                        c = w[l],
                                                                        f = A[l],
                                                                        h = B[l],
                                                                        p = F[l],
                                                                        m = V[s],
                                                                        _ = 1;
                                                                    _ < m.length;
                                                                    _++
                                                                )
                                                                    m[_] = t[_] * t[_] + n[_] * n[_];
                                                                var v = A[s],
                                                                    g = (w[s] = (function (e, t) {
                                                                        for (var n = 0, r = 0; r < e.length; r++)
                                                                            e[r] > n && (n = e[r]);
                                                                        var i = 1e-8 * n,
                                                                            a = 1,
                                                                            o = 1;
                                                                        for (t[0] = 1, r = 2; r < e.length; r++) {
                                                                            var s = r * u;
                                                                            if (
                                                                                e[r] > i &&
                                                                                e[r] > e[r - 1] &&
                                                                                e[r] >= e[r + 1]
                                                                            ) {
                                                                                var l =
                                                                                    r +
                                                                                    (e[r - 1] - e[r + 1]) /
                                                                                        (2 *
                                                                                            (e[r - 1] -
                                                                                                2 * e[r] +
                                                                                                e[r + 1]));
                                                                                l - t[a - 1] > s
                                                                                    ? ((t[a++] = l), (o = r))
                                                                                    : e[r] > e[o] &&
                                                                                      ((t[a - 1] = l), (o = r));
                                                                            }
                                                                        }
                                                                        return a;
                                                                    })(m, v)),
                                                                    y = B[s],
                                                                    D = F[s];
                                                                if (0 != e && 0 != g) {
                                                                    var b = 0;
                                                                    for (I = 0; I < g; I++) {
                                                                        for (j = v[I]; v[I] > f[b] && b != c; ) ++b;
                                                                        var C = b;
                                                                        b > 0 && j - f[b - 1] < f[b] - j && (C = b - 1);
                                                                        var E = j * u;
                                                                        if (
                                                                            Math.abs(f[C] - j) < E &&
                                                                            d[Math.round(f[C])] > 0.1 * m[Math.round(j)]
                                                                        ) {
                                                                            var x = W(t, n, j),
                                                                                P =
                                                                                    h[C] +
                                                                                    p[C] +
                                                                                    K(x, j, h[C], f[C], a) -
                                                                                    x;
                                                                            (y[I] = x),
                                                                                (D[I] = P),
                                                                                (T[I] = Math.cos(P)),
                                                                                (k[I] = Math.sin(P));
                                                                        } else
                                                                            (y[I] = W(t, n, j)),
                                                                                (D[I] = 0),
                                                                                (T[I] = 1),
                                                                                (k[I] = 0);
                                                                    }
                                                                    v[g] = 2 * o;
                                                                    var O = v[(C = 0)],
                                                                        S = v[C + 1],
                                                                        R = T[C],
                                                                        M = k[C];
                                                                    for (_ = 1; _ < t.length - 1; _++) {
                                                                        _ >= O &&
                                                                            _ - O > S - _ &&
                                                                            ((O = v[++C]),
                                                                            (S = v[C + 1]),
                                                                            (R = T[C]),
                                                                            (M = k[C]));
                                                                        var N = t[_] * R - n[_] * M,
                                                                            L = t[_] * M + n[_] * R;
                                                                        (t[_] = N), (n[_] = L);
                                                                    }
                                                                } else
                                                                    for (var I = 0; I < g; I++) {
                                                                        var j = v[I];
                                                                        h[I] = p[I] = W(t, n, j);
                                                                    }
                                                            },
                                                            H = function () {
                                                                var e = 0 | (N += 2 * L);
                                                                N -= e;
                                                                for (var t = 0; t < o; t++)
                                                                    (s.m_re[t] = p[t] * d[t]),
                                                                        (s.m_im[t] = p[t] * d[f + t]);
                                                                r.blit(d, 2 * f, d, 0, o - f),
                                                                    s.inplace(!1),
                                                                    s.unpack(v, g, y, D),
                                                                    U(S, v, g, 0, 0, h / f),
                                                                    U(S + 1, y, D, 0, 0, (h + e) / f),
                                                                    r.blit(y, 0, b, 0, _),
                                                                    r.blit(D, 0, C, 0, _),
                                                                    s.repack(v, g, y, D),
                                                                    s.inplace(!0);
                                                                var n = c.length;
                                                                for (r.blit(c, R, c, 0, n - R), t = n - R; t < n; t++)
                                                                    c[t] = 0;
                                                                var i = 0,
                                                                    a = M;
                                                                for (t = 0; t < h; t++)
                                                                    Math.abs(2 * s.m_re[t]) > i &&
                                                                        (i = Math.abs(2 * s.m_re[t]));
                                                                for (t = 0; t < o - h; t++)
                                                                    Math.abs(s.m_re[t + h + e] + s.m_im[t]) > i &&
                                                                        (i = Math.abs(s.m_re[t + h + e] + s.m_im[t]));
                                                                for (t = o - h; t < o; t++)
                                                                    Math.abs(2 * s.m_im[t]) > i &&
                                                                        (i = Math.abs(2 * s.m_im[t]));
                                                                var u = 1 / Math.floor(o / (2 * h));
                                                                for (a * i > u && (a = u / i), t = 0; t < o; t++)
                                                                    (c[t] += a * s.m_re[t]),
                                                                        (c[t + h + e] += a * s.m_im[t]);
                                                                return (S += 2), (R = 2 * h + e);
                                                            };
                                                        return (
                                                            (G.process = function (e) {
                                                                var n = e[0].length,
                                                                    i = e[0];
                                                                if (e.length > 1) {
                                                                    i = r.float_array(e[0].length);
                                                                    for (var u = 1 / e.length, s = 0; s < e.length; s++)
                                                                        for (var l = 0; l < n; l++) i[l] += u * e[s][l];
                                                                }
                                                                if (1 == a) {
                                                                    if (j + I > 0) {
                                                                        var p = j + I + n,
                                                                            m = [];
                                                                        for (s = 0; s < e.length; s++) {
                                                                            var _ = r.float_array(p);
                                                                            r.blit(c, 0, _, 0, j),
                                                                                r.blit(d, 0, _, j, I),
                                                                                r.blit(e[s], 0, _, j + I, n),
                                                                                m.push(_);
                                                                        }
                                                                        G.flush(0), (n = p), (e = m);
                                                                    }
                                                                    return (x += n / t), (P += n / t), e;
                                                                }
                                                                var v =
                                                                        2 *
                                                                        Math.floor(
                                                                            Math.max(0, I + n - (o - f)) / (2 * f),
                                                                        ),
                                                                    g = j + h * v + Math.floor(N + L * v);
                                                                j > g && (g = j);
                                                                var y = r.float_array(g);
                                                                r.blit(c, 0, y, 0, j);
                                                                for (var D = 0, b = j, C = 0, E = 0; ; ) {
                                                                    var w = o + f - I;
                                                                    if (D + w > n) {
                                                                        r.blit(i, D, d, I, n - D),
                                                                            (I += n - D),
                                                                            (D = n);
                                                                        break;
                                                                    }
                                                                    w <= 0
                                                                        ? (I -= 2 * f)
                                                                        : (r.blit(i, D, d, I, w),
                                                                          (D += w),
                                                                          (I = o - f)),
                                                                        (E = H()),
                                                                        (x += (2 * f) / t),
                                                                        (P += E / t),
                                                                        (C = b + E - g) < 0 && (C = 0),
                                                                        r.blit(c, 0, y, b, E - C),
                                                                        (b += E);
                                                                }
                                                                r.blit(c, E - C, c, 0, C), (j = C);
                                                                var A = [];
                                                                for (s = 0; s < e.length; s++) A.push(y);
                                                                return A;
                                                            }),
                                                            G
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
                                                        for (var a = i, u = 0, o = 0; o < e; o++)
                                                            (u <<= 1), (u |= 1 & a), (a >>= 1);
                                                        n.m_revTgt[i] = u;
                                                    }
                                                    (n.twiddleRe = r.float_array(n.m_logN)),
                                                        (n.twiddleIm = r.float_array(n.m_logN));
                                                    for (var s = 1, l = 0; l < n.m_logN; l++) {
                                                        var d = 2 * s * Math.PI * n.m_invN;
                                                        (n.twiddleRe[l] = Math.cos(d)),
                                                            (n.twiddleIm[l] = Math.sin(d)),
                                                            (s <<= 1);
                                                    }
                                                    n.inplace = function (e) {
                                                        var t = n.m_re,
                                                            r = n.m_im,
                                                            i = n.m_N,
                                                            a = n.m_logN,
                                                            u = i >> 1,
                                                            o = i >> 1,
                                                            s = i;
                                                        if (e)
                                                            for (var l = 1 / i, d = 0; d < i; d++)
                                                                (t[d] *= l), (r[d] *= l);
                                                        for (var c = 0; c < a; c++) {
                                                            var f = n.twiddleRe[c],
                                                                h = n.twiddleIm[c];
                                                            e || (h *= -1);
                                                            for (var p = 0; p < i; ) {
                                                                for (
                                                                    var m = p, _ = p + o, v = 1, g = 0, y = 0;
                                                                    y < u;
                                                                    y++
                                                                ) {
                                                                    var D = t[m],
                                                                        b = r[m],
                                                                        C = t[_],
                                                                        E = r[_];
                                                                    (t[m] = D + C),
                                                                        (r[m] = b + E),
                                                                        (C = D - C),
                                                                        (E = b - E),
                                                                        (t[_] = C * v - E * g),
                                                                        (r[_] = C * g + E * v),
                                                                        m++,
                                                                        _++;
                                                                    var w = v;
                                                                    (v = v * f - g * h), (g = w * h + g * f);
                                                                }
                                                                p += s;
                                                            }
                                                            (u >>= 1), (o >>= 1), (s >>= 1);
                                                        }
                                                        for (var A, B, F = n.m_revTgt, V = 0; V < i; V++)
                                                            F[V] > V &&
                                                                ((B = t[(A = F[V])]),
                                                                (t[A] = t[V]),
                                                                (t[V] = B),
                                                                (B = r[A]),
                                                                (r[A] = r[V]),
                                                                (r[V] = B));
                                                    };
                                                    var c = t >> 1;
                                                    return (
                                                        (n.unpack = function (e, r, i, a) {
                                                            (e[0] = n.m_re[0]),
                                                                (i[0] = n.m_im[0]),
                                                                (r[0] = a[0] = 0),
                                                                (e[c] = n.m_re[c]),
                                                                (i[c] = n.m_im[c]),
                                                                (r[c] = a[c] = 0);
                                                            for (var u = 1; u < c; u++)
                                                                (e[u] = (n.m_re[u] + n.m_re[t - u]) / 2),
                                                                    (r[u] = (n.m_im[u] - n.m_im[t - u]) / 2),
                                                                    (i[u] = (n.m_im[u] + n.m_im[t - u]) / 2),
                                                                    (a[u] = (-n.m_re[u] + n.m_re[t - u]) / 2);
                                                        }),
                                                        (n.repack = function (e, r, i, a) {
                                                            (n.m_re[0] = e[0]),
                                                                (n.m_im[0] = i[0]),
                                                                (n.m_re[c] = e[c]),
                                                                (n.m_im[c] = i[c]);
                                                            for (var u = 1; u < c; u++)
                                                                (n.m_re[u] = e[u] - a[u]),
                                                                    (n.m_im[u] = r[u] + i[u]),
                                                                    (n.m_re[t - u] = e[u] + a[u]),
                                                                    (n.m_im[t - u] = -r[u] + i[u]);
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
                                })());
                        },
                    ]));
            },
            893: (e, t, n) => {
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(575)),
                    a = r(n(913));
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
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(575)),
                    a = r(n(913)),
                    u = r(n(205)),
                    o = r(n(585)),
                    s = r(n(754));
                t.default = (function (e) {
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
                                    n = (0, s.default)(r);
                                return (
                                    (e = t
                                        ? Reflect.construct(n, arguments, (0, s.default)(this).constructor)
                                        : n.apply(this, arguments)),
                                    (0, o.default)(this, e)
                                );
                            });
                    function r() {
                        return (0, i.default)(this, r), n.apply(this, arguments);
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
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(575)),
                    a = r(n(913)),
                    u = r(n(205)),
                    o = r(n(585)),
                    s = r(n(754));
                t.default = (function (e) {
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
                                    n = (0, s.default)(r);
                                return (
                                    (e = t
                                        ? Reflect.construct(n, arguments, (0, s.default)(this).constructor)
                                        : n.apply(this, arguments)),
                                    (0, o.default)(this, e)
                                );
                            });
                    function r() {
                        return (0, i.default)(this, r), n.apply(this, arguments);
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
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(575)),
                    a = r(n(913)),
                    u = r(n(539)),
                    o = "1.8.9-20220406232920-cb5f7ff",
                    s = {
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
                        (0, a.default)(e, [
                            { key: "defaultBase", value: function () {} },
                            {
                                key: "wasmSupported",
                                value: function () {
                                    return u.default.wasmSupported();
                                },
                            },
                            {
                                key: "scriptForClass",
                                value: function (e) {
                                    return s[e];
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
                                        u = function (t) {
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
                                        ? t(u)
                                        : this.loadScript(a, function () {
                                              t(u);
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
                    a = r(n(913)),
                    u = r(n(525)),
                    o = r(n(205)),
                    s = r(n(585)),
                    l = r(n(754)),
                    d = r(n(408)),
                    c = r(n(319)),
                    f = r(n(445)),
                    h = {
                        audio: { proxy: d.default, worker: "ogv-worker-audio.js" },
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
                    m = new ((function (e) {
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
                                        n = (0, l.default)(r);
                                    return (
                                        (e = t
                                            ? Reflect.construct(n, arguments, (0, l.default)(this).constructor)
                                            : n.apply(this, arguments)),
                                        (0, s.default)(this, e)
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
                                            : (0, u.default)((0, l.default)(r.prototype), "loadClass", this).call(
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
                                        var n = h[p[e]];
                                        if (!n) throw Error("Requested worker for class with no proxy: " + e);
                                        var r,
                                            i = n.proxy,
                                            a = n.worker,
                                            u = this.urlForScript(this.scriptForClass(e)),
                                            o = this.urlForScript(a),
                                            s = function (t) {
                                                return new i(r, e, t);
                                            };
                                        if (o.match(/^https?:|\/\//i)) {
                                            var l,
                                                d,
                                                c,
                                                f,
                                                _,
                                                v = function () {
                                                    if (1 == g && 1 == y) {
                                                        var e =
                                                            c +
                                                            " " +
                                                            f +
                                                            "\nOGVLoader.base = " +
                                                            JSON.stringify(m.base);
                                                        try {
                                                            _ = new Blob([e], { type: "application/javascript" });
                                                        } catch (t) {
                                                            (window.BlobBuilder =
                                                                window.BlobBuilder ||
                                                                window.WebKitBlobBuilder ||
                                                                window.MozBlobBuilder),
                                                                (_ = new BlobBuilder()).append(e),
                                                                (_ = _.getBlob());
                                                        }
                                                        (r = new Worker(URL.createObjectURL(_))),
                                                            t(function (e) {
                                                                return Promise.resolve(new s(e));
                                                            });
                                                    }
                                                },
                                                g = !1,
                                                y = !1;
                                            (l = new XMLHttpRequest()).open("GET", u, !0),
                                                (l.onreadystatechange = function () {
                                                    4 == l.readyState &&
                                                        200 == l.status &&
                                                        ((c = l.responseText), (g = !0), v());
                                                }),
                                                l.send(),
                                                (d = new XMLHttpRequest()).open("GET", o, !0),
                                                (d.onreadystatechange = function () {
                                                    4 == d.readyState &&
                                                        200 == d.status &&
                                                        ((f = d.responseText), (y = !0), v());
                                                }),
                                                d.send();
                                        } else
                                            (r = new Worker(o)),
                                                t(function (e) {
                                                    return Promise.resolve(new s(e));
                                                });
                                    },
                                },
                            ]),
                            r
                        );
                    })(f.default))();
                t.default = m;
            },
            759: (e, t, n) => {
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(913)),
                    a = r(n(575)),
                    u = r(n(309)),
                    o = {
                        MEDIA_ERR_ABORTED: 1,
                        MEDIA_ERR_NETWORK: 2,
                        MEDIA_ERR_DECODE: 3,
                        MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
                    },
                    s = (0, i.default)(function e(t, n) {
                        (0, a.default)(this, e), (this.code = t), (this.message = n);
                    });
                (0, u.default)(s, o), (0, u.default)(s.prototype, o), (t.default = s);
            },
            278: (e, t, n) => {
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(913)),
                    a = r(n(575));
                function u(e, t, n) {
                    var r = e.split(t, n).map(function (e) {
                        return e.replace(/^\s+/, "").replace(/\s+$/, "");
                    });
                    if ("number" == typeof n) for (; r.length < n; ) r.push(null);
                    return r;
                }
                t.default = (0, i.default)(function e(t) {
                    (0, a.default)(this, e),
                        (t = String(t)),
                        (this.major = null),
                        (this.minor = null),
                        (this.codecs = null);
                    var n = u(t, ";");
                    if (n.length) {
                        var r = n.shift();
                        if (r) {
                            var i = u(r, "/", 2);
                            (this.major = i[0]), (this.minor = i[1]);
                        }
                        for (var o in n) {
                            var s = n[o].match(/^codecs\s*=\s*"(.*?)"$/);
                            if (s) {
                                this.codecs = u(s[1], ",");
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
                var i,
                    a = r(n(575)),
                    u = r(n(913)),
                    o = r(n(506)),
                    s = r(n(205)),
                    l = r(n(585)),
                    d = r(n(754)),
                    c = r(n(8)),
                    f = r(n(731)),
                    h = r(n(936)),
                    p = r(n(848)),
                    m = r(n(964)),
                    _ = r(n(893)),
                    v = r(n(309)),
                    g = r(n(759)),
                    y = r(n(278)),
                    D = r(n(168)),
                    b = r(n(625)),
                    C = r(n(302)),
                    E = (function () {
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
                    w = {
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
                    B = "SEEKING_END",
                    F = "LOADED",
                    V = "PRELOAD",
                    T = "READY",
                    k = "PLAYING",
                    x = "SEEKING",
                    P = "ERROR",
                    O = "NOT_SEEKING",
                    S = "BISECT_TO_TARGET",
                    R = "BISECT_TO_KEYPOINT",
                    M = "LINEAR_TO_TARGET",
                    N = "fast";
                function L() {
                    var e = document.createElement("ogvjs");
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, Object.getPrototypeOf(this))
                            : (e.__proto__ = this.__proto__),
                        e
                    );
                }
                (i =
                    "u" < typeof performance || void 0 === (0, c.default)(performance.now)
                        ? Date.now
                        : performance.now.bind(performance)),
                    (L.prototype = Object.create(HTMLElement.prototype, {}));
                var I = (function (e) {
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
                                    n = (0, d.default)(r);
                                return (
                                    (e = t
                                        ? Reflect.construct(n, arguments, (0, d.default)(this).constructor)
                                        : n.apply(this, arguments)),
                                    (0, l.default)(this, e)
                                );
                            });
                    function r(e) {
                        var t;
                        if (
                            ((0, a.default)(this, r),
                            (t = n.call(this)),
                            ((e = e || {}).base = e.base || m.default.base),
                            (t._options = e),
                            (t._instanceId = "ogvjs" + ++r.instanceCount),
                            void 0 !== e.worker ? (t._enableWorker = !!e.worker) : (t._enableWorker = !!window.Worker),
                            !m.default.wasmSupported())
                        )
                            throw Error("WebAssembly not supported");
                        return (
                            (t._enableThreading = !!e.threading),
                            (t._enableSIMD = !!e.simd),
                            (t._state = A),
                            (t._seekState = O),
                            (t._detectedType = null),
                            (t._canvas = document.createElement("canvas")),
                            (t._frameSink = null),
                            (t.className = t._instanceId),
                            (0, v.default)((0, o.default)(t), w),
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
                                            new D.default(e)
                                        );
                                    },
                                },
                                seekable: {
                                    get: function () {
                                        return new D.default(
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
                                        return this._state == x
                                            ? this._seekTargetTime
                                            : this._codec
                                              ? this._state != k || this._paused
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
                                        return this._state == x;
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
                                            var n = new Image();
                                            (n.crossOrigin = this.crossOrigin),
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
                                                this.appendChild(n);
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
                                        return this._state === P
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
                                        this._audioFeeder
                                            ? (this._audioFeeder.tempo = t)
                                            : this._paused ||
                                              ((this._initialPlaybackOffset = this._getPlaybackTime()),
                                              (this._initialPlaybackPosition = (t * i()) / 1e3)),
                                            (this._playbackRate = t),
                                            this._fireEventAsync("ratechange");
                                    },
                                },
                                played: {
                                    get: function () {
                                        return new D.default([[0, this.currentTime]]);
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
                        (0, u.default)(
                            r,
                            [
                                {
                                    key: "_time",
                                    value: function (e) {
                                        var t = i();
                                        e();
                                        var n = i() - t;
                                        return (this._lastFrameDecodeTime += n), n;
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
                                        this._log("fireEventAsync " + e),
                                            E(function () {
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
                                        var r = (this._audioFeeder = new p.default(n));
                                        r.init(this._audioInfo.channels, this._audioInfo.rate),
                                            this.onaudiofeedercreated && this.onaudiofeedercreated(this._audioFeeder),
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
                                        } else this._initialPlaybackPosition = (this._playbackRate * i()) / 1e3;
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
                                                  : (this._playbackRate * i()) / 1e3) -
                                                  this._initialPlaybackPosition +
                                                  this._initialPlaybackOffset;
                                    },
                                },
                                {
                                    key: "_stopVideo",
                                    value: function () {
                                        this._log("STOPPING"),
                                            (this._state = A),
                                            (this._seekState = O),
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
                                            E(function () {
                                                e.stop();
                                            });
                                        var n = i(),
                                            r = n - this._lastFrameTimestamp,
                                            a = this._actualPerFrameTime - this._targetPerFrameTime;
                                        (this._totalJitter += Math.abs(a)), (this._playTime += r);
                                        var u = {
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
                                        this._codec &&
                                            ((u.demuxerTime =
                                                this._codec.demuxerCpuTime - this._lastFrameDemuxerCpuTime),
                                            (u.videoTime += this._currentVideoCpuTime - this._lastFrameVideoCpuTime),
                                            (u.audioTime += this._codec.audioCpuTime - this._lastFrameAudioCpuTime)),
                                            (u.cpuTime += u.demuxerTime),
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
                                                    o(u.cpuTime) +
                                                    " (mux: " +
                                                    o(u.demuxerTime) +
                                                    " buf: " +
                                                    o(u.bufferTime) +
                                                    " draw: " +
                                                    o(u.drawingTime) +
                                                    " proxy: " +
                                                    o(u.proxyTime) +
                                                    ") vid: " +
                                                    o(u.videoTime) +
                                                    " aud: " +
                                                    o(u.audioTime),
                                            ),
                                            this._fireEventAsync("framecallback", u),
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
                                              (this._mediaError = new g.default(
                                                  g.default.MEDIA_ERR_NETWORK,
                                                  String(e),
                                              )),
                                              (this._state = P),
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
                                                (n._state = x),
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
                                            (this._state = x),
                                            (this._seekTargetTime = e),
                                            (this._lastSeekPosition = -1),
                                            (this._decodedFrames = []),
                                            (this._pendingFrames = []),
                                            (this._pendingFrame = 0),
                                            (this._pendingAudio = 0),
                                            (this._didSeek = !1),
                                            this._codec.seekToKeypoint(e, function (n) {
                                                n
                                                    ? ((t._seekState = M),
                                                      t._fireEventAsync("seeking"),
                                                      t._didSeek || t._pingProcessing())
                                                    : t._codec.getKeypointOffset(e, function (e) {
                                                          e > 0
                                                              ? ((t._seekState = M), t._seekStream(e))
                                                              : ((t._seekState = S),
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
                                            (this._seekBisector = new _.default({
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
                                        (this._seekState = O),
                                            (this._state = T),
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
                                                this._seekMode === N &&
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
                                            (t = this._codec.frameTimestamp), (e = this._targetPerFrameTime / 1e3);
                                        else {
                                            if (!this._codec.hasAudio)
                                                throw Error("Invalid seek state; no audio or video track available");
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
                                                  (this._seekState = M),
                                                  this._pingProcessing())
                                                : this._seekState == S &&
                                                    this._codec.hasVideo &&
                                                    this._codec.keyframeTimestamp < this._codec.frameTimestamp
                                                  ? (this._log("finding the keypoint now"),
                                                    (this._seekState = R),
                                                    this._startBisection(this._codec.keyframeTimestamp))
                                                  : (this._log("straight seeking now"),
                                                    (this._seekState = M),
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
                                            r.styleManager.appendRule("." + this._instanceId, {
                                                width: this._videoInfo.displayWidth + "px",
                                                height: this._videoInfo.displayHeight + "px",
                                            });
                                        var e = {};
                                        void 0 !== this._options.webGL && (e.webGL = this._options.webGL),
                                            this._options.forceWebGL && (e.webGL = "required"),
                                            (this._frameSink = f.default.attach(this._canvas, e));
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
                                        else if (this._state == B) this._doProcessSeekingEnd();
                                        else if (this._state == F) this._doProcessLoaded();
                                        else if (this._state == V) this._doProcessPreload();
                                        else if (this._state == T) this._doProcessReady();
                                        else if (this._state == x) this._doProcessSeeking();
                                        else if (this._state == k) this._doProcessPlay();
                                        else {
                                            if (this._state != P)
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
                                                    ((this._videoInfo = this._codec.videoFormat), this._setupVideo()),
                                                isNaN(this._codec.duration) || (this._duration = this._codec.duration),
                                                null === this._duration &&
                                                this._stream.seekable &&
                                                "video/ogg" == this._detectedType
                                                    ? ((this._state = B),
                                                      (this._lastSeenTimestamp = -1),
                                                      this._codec.flush(function () {
                                                          e._seekStream(Math.max(0, e._stream.length - 131072));
                                                      }))
                                                    : ((this._state = F), this._pingProcessing());
                                        } else
                                            this._codec.process(function (t) {
                                                if (t) e._pingProcessing();
                                                else {
                                                    if (e._streamEnded) throw Error("end of file before headers found");
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
                                                            (e._state = F),
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
                                        (this._state = V),
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
                                            : ((this._state = T),
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
                                                    (e._state = k),
                                                    (e._lastFrameTimestamp = i()),
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
                                        if (this._seekState == O)
                                            throw Error("seeking in invalid state (not seeking?)");
                                        if (this._seekState == S) this._doProcessBisectionSeek();
                                        else if (this._seekState == R) this._doProcessBisectionSeek();
                                        else {
                                            if (this._seekState != M)
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
                                                u = 0,
                                                o = !1,
                                                s = 0;
                                            if (
                                                (t.hasAudio && this._audioFeeder
                                                    ? ((a = this._audioFeeder.getPlaybackState()),
                                                      (u = this._getPlaybackTime(a)),
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
                                                          this._startPlayback(u),
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
                                                    : ((u = this._getPlaybackTime()),
                                                      (n = this._codec.audioReady && this._audioEndTimestamp < u)),
                                                this._codec.hasVideo)
                                            ) {
                                                (r = this._decodedFrames.length > 0),
                                                    (i =
                                                        this._pendingFrame + this._decodedFrames.length <
                                                            this._framePipelineDepth + this._frameParallelism &&
                                                        this._codec.frameReady),
                                                    r &&
                                                        ((s = 1e3 * (this._decodedFrames[0].frameEndTimestamp - u)),
                                                        (this._actualPerFrameTime = this._targetPerFrameTime - s));
                                                var l = this._targetPerFrameTime;
                                                if (this._prebufferingAudio)
                                                    i && this._log("decoding a frame during prebuffering"), (r = !1);
                                                else if (r && this._dataEnded && o)
                                                    this._log("audio timeline ended? ready to draw frame");
                                                else if (r && -s >= l) {
                                                    for (var d = -1, c = 0; c < this._decodedFrames.length - 1; c++)
                                                        this._decodedFrames[c].frameEndTimestamp < u && (d = c - 1);
                                                    if (d >= 0)
                                                        for (; d-- >= 0; ) {
                                                            this._lateFrames++;
                                                            var f = this._decodedFrames.shift();
                                                            this._log(
                                                                "skipping already-decoded late frame at " +
                                                                    f.frameEndTimestamp,
                                                            ),
                                                                (s = 1e3 * (f.frameEndTimestamp - u)),
                                                                (this._frameEndTimestamp = f.frameEndTimestamp),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - s),
                                                                this._framesProcessed++,
                                                                (f.dropped = !0),
                                                                this._doFrameComplete(f);
                                                        }
                                                    var h = this._codec.nextKeyframeTimestamp,
                                                        p =
                                                            h -
                                                            (this._targetPerFrameTime / 1e3) *
                                                                (this._framePipelineDepth + this._pendingFrame);
                                                    if (h >= 0 && h != this._codec.frameTimestamp && u >= p) {
                                                        this._log(
                                                            "skipping late frame at " +
                                                                this._decodedFrames[0].frameEndTimestamp +
                                                                " vs " +
                                                                u +
                                                                ", expect to see keyframe at " +
                                                                h,
                                                        );
                                                        for (var m = 0; m < this._decodedFrames.length; m++) {
                                                            var _ = this._decodedFrames[m];
                                                            this._lateFrames++,
                                                                this._framesProcessed++,
                                                                (this._frameEndTimestamp = _.frameEndTimestamp),
                                                                (s = 1e3 * (_.frameEndTimestamp - u)),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - s),
                                                                (_.dropped = !0),
                                                                this._doFrameComplete(_);
                                                        }
                                                        this._decodedFrames = [];
                                                        for (var v = 0; v < this._pendingFrames.length; v++) {
                                                            var g = this._pendingFrames[v];
                                                            this._lateFrames++,
                                                                this._framesProcessed++,
                                                                (this._frameEndTimestamp = g.frameEndTimestamp),
                                                                (s = 1e3 * (g.frameEndTimestamp - u)),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - s),
                                                                (g.dropped = !0),
                                                                this._doFrameComplete(g);
                                                        }
                                                        for (
                                                            this._pendingFrames = [], this._pendingFrame = 0;
                                                            this._codec.frameReady && this._codec.frameTimestamp < h;
                                                        ) {
                                                            var y = {
                                                                frameEndTimestamp: this._codec.frameTimestamp,
                                                                dropped: !0,
                                                            };
                                                            (s = 1e3 * (y.frameEndTimestamp - u)),
                                                                (this._actualPerFrameTime =
                                                                    this._targetPerFrameTime - s),
                                                                this._lateFrames++,
                                                                this._codec.discardFrame(function () {}),
                                                                this._framesProcessed++,
                                                                this._doFrameComplete(y);
                                                        }
                                                        return void (this._isProcessing() || this._pingProcessing());
                                                    }
                                                } else (r && s <= 4) || (r = !1);
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
                                                var D = (this._frameEndTimestamp = this._codec.frameTimestamp);
                                                this._pendingFrame++,
                                                    this._pendingFrames.push({ frameEndTimestamp: D });
                                                var b = this._pendingFrames,
                                                    C = !1,
                                                    E = this._time(function () {
                                                        e._codec.decodeFrame(function (t) {
                                                            b === e._pendingFrames
                                                                ? (e._log("play loop callback: decoded frame"),
                                                                  e._pendingFrame--,
                                                                  e._pendingFrames.shift(),
                                                                  t
                                                                      ? e._decodedFrames.push({
                                                                            yCbCrBuffer: e._codec.frameBuffer,
                                                                            videoCpuTime: e._codec.videoCpuTime,
                                                                            frameEndTimestamp: D,
                                                                        })
                                                                      : e._log("Bad video packet or something"),
                                                                  e._codec.process(function () {
                                                                      e._isProcessing() ||
                                                                          e._pingProcessing(C ? void 0 : 0);
                                                                  }))
                                                                : e._log("play loop callback after flush, discarding");
                                                        });
                                                    });
                                                this._pendingFrame &&
                                                    ((C = !0),
                                                    (this._proxyTime += E),
                                                    this._pingProcessing(),
                                                    this._dataEnded && this._codec.sync());
                                            } else if (n) {
                                                this._log("play loop: ready for audio; depth: " + this._pendingAudio),
                                                    this._pendingAudio++;
                                                var w = this._codec.audioTimestamp,
                                                    A = this._time(function () {
                                                        e._codec.decodeAudio(function (t) {
                                                            if (
                                                                (e._pendingAudio--,
                                                                e._log("play loop callback: decoded audio"),
                                                                (e._audioEndTimestamp = w),
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
                                                this._log("play loop: ready to draw frame"),
                                                    this._nextFrameTimer &&
                                                        (clearTimeout(this._nextFrameTimer),
                                                        (this._nextFrameTimer = null)),
                                                    this._thumbnail &&
                                                        (this.removeChild(this._thumbnail), (this._thumbnail = null));
                                                var B = this._decodedFrames.shift();
                                                (this._currentVideoCpuTime = B.videoCpuTime),
                                                    (this._drawingTime += this._time(function () {
                                                        e._drawFrame(B.yCbCrBuffer);
                                                    })),
                                                    this._framesProcessed++,
                                                    this._doFrameComplete(B),
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
                                                    var F = 0;
                                                    this._codec.hasAudio &&
                                                        this._audioFeeder &&
                                                        (F = 1e3 * this._audioFeeder.durationBuffered),
                                                        F > 0
                                                            ? (this._log("play loop: ending pending " + F + " ms"),
                                                              this._pingProcessing(Math.max(0, F)))
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
                                                var V = s;
                                                this._log("play loop: setting a timer for drawing " + V),
                                                    (this._nextFrameTimer = setTimeout(function () {
                                                        (e._nextFrameTimer = null), e._pingProcessing();
                                                    }, V));
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
                                                (this._codec = new b.default(n)),
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
                                                : r.length > 4 && 26 == r[0] && 69 == r[1] && 223 == r[2] && 163 == r[3]
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
                                                              (t._loading = !1),
                                                                  (t._currentSrc = t.src),
                                                                  (t._byteLength = t._stream.seekable
                                                                      ? t._stream.length
                                                                      : 0);
                                                              var e = t._stream.headers["x-content-duration"];
                                                              "string" == typeof e && (t._duration = parseFloat(e)),
                                                                  t._loadCodec(function (e) {
                                                                      t._startProcessingVideo(e);
                                                                  });
                                                          })
                                                          .catch(function (e) {
                                                              t._onStreamError(e);
                                                          }));
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
                                        var t = new y.default(e);
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
                                        this._muted || this._options.audioContext || r.initSharedAudioContext(),
                                            this._paused &&
                                                ((this._startedPlaybackInDocument = document.body.contains(this)),
                                                (this._paused = !1),
                                                this._state == x ||
                                                    (this._started && this._codec && this._codec.loadedMetadata
                                                        ? (this._ended && this._stream && this._byteLength
                                                              ? (this._log(".play() starting over after end"),
                                                                this._seek(0))
                                                              : this._log(".play() while already started"),
                                                          (this._state = T),
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
                                        this._seek(+e, N);
                                    },
                                },
                            ],
                            [
                                {
                                    key: "initSharedAudioContext",
                                    value: function () {
                                        var e = document.createElement("audio");
                                        (e.src = C.default), e.play(), p.default.initSharedAudioContext();
                                    },
                                },
                            ],
                        ),
                        r
                    );
                })(L);
                (0, v.default)(I, w),
                    (I.instanceCount = 0),
                    (I.styleManager = new (function () {
                        var e = document.createElement("style");
                        (e.type = "text/css"),
                            (e.textContent =
                                "ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); "),
                            document.head.appendChild(e);
                        var t = e.sheet;
                        this.appendRule = function (e, n) {
                            var r = [];
                            for (var i in n) n.hasOwnProperty(i) && r.push(i + ":" + n[i]);
                            var a = e + "{" + r.join(";") + "}";
                            t.insertRule(a, t.cssRules.length - 1);
                        };
                    })()),
                    (t.default = I);
            },
            580: (e, t, n) => {
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(575)),
                    a = r(n(913));
                t.default = function (e) {
                    function t(n, r, a) {
                        var u = this;
                        for (var o in ((0, i.default)(this, t),
                        (a = a || {}),
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
                                u.handleMessage(e);
                            }),
                            this.proxy("construct", [r, a], function () {});
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
                                    this.processingQueue++,
                                        this.transferables ? this.worker.postMessage(a, r) : this.worker.postMessage(a);
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
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(575)),
                    a = r(n(913));
                t.default = (function () {
                    function e(t) {
                        (0, i.default)(this, e), (this._ranges = t), (this.length = t.length);
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
                "use strict";
                var r = n(318);
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                var i = r(n(575)),
                    a = r(n(913)),
                    u = r(n(964));
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
                                    (this.processing = !0),
                                        (t =
                                            "video/webm" === this.options.type || "audio/webm" === this.options.type
                                                ? "OGVDemuxerWebMW"
                                                : "OGVDemuxerOggW"),
                                        u.default.loadClass(t, function (t) {
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
                                        this.videoDecoder && (this.videoDecoder.close(), (this.videoDecoder = null)),
                                        this.audioDecoder && (this.audioDecoder.close(), (this.audioDecoder = null));
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
                                        (t.videoBytes += e.byteLength),
                                            t.videoDecoder.processFrame(e, function (e) {
                                                var a = t.videoDecoder.frameBuffer;
                                                a && ((a.timestamp = r), (a.keyframeTimestamp = i)), n(e);
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
                                                        a = [],
                                                        u = (function (e) {
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
                                                                u = !1;
                                                            return {
                                                                s: function () {
                                                                    t = t.call(e);
                                                                },
                                                                n: function () {
                                                                    var e = t.next();
                                                                    return (a = e.done), e;
                                                                },
                                                                e: function (e) {
                                                                    (u = !0), (i = e);
                                                                },
                                                                f: function () {
                                                                    try {
                                                                        a || null == t.return || t.return();
                                                                    } finally {
                                                                        if (u) throw i;
                                                                    }
                                                                },
                                                            };
                                                        })(t.audioDecoder.audioBuffer);
                                                    try {
                                                        for (u.s(); !(i = u.n()).done; ) {
                                                            var s = i.value,
                                                                l = Math.round((r * t.audioFormat.rate) / 1e9);
                                                            l > 0
                                                                ? a.push(
                                                                      s.subarray(0, s.length - Math.min(l, s.length)),
                                                                  )
                                                                : a.push(
                                                                      s.subarray(
                                                                          Math.min(Math.abs(l), s.length),
                                                                          s.length,
                                                                      ),
                                                                  );
                                                        }
                                                    } catch (e) {
                                                        u.e(e);
                                                    } finally {
                                                        u.f();
                                                    }
                                                    t.audioDecoder.audioBuffer = a;
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
                                            u.default.loadClass(
                                                n,
                                                function (n) {
                                                    var r = {};
                                                    t.demuxer.audioFormat && (r.audioFormat = t.demuxer.audioFormat),
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
                                            u.default.loadClass(
                                                i,
                                                function (n) {
                                                    var i = {};
                                                    t.demuxer.videoFormat && (i.videoFormat = t.demuxer.videoFormat),
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
                    a = r(n(575)),
                    u = r(n(913));
                t.default = new ((function () {
                    function e() {
                        (0, a.default)(this, e), (this.tested = !1), (this.testResult = void 0);
                    }
                    return (
                        (0, u.default)(e, [
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
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var u = i.get;
                        return void 0 !== u ? u.call(r) : void 0;
                    },
                    a = n(828),
                    u = "arraybuffer",
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
                                            (this.xhr.responseType = u);
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
                    })(a);
                (o.supported = function () {
                    try {
                        var e = new XMLHttpRequest();
                        return (e.responseType = u), e.responseType === u;
                    } catch (e) {
                        return !1;
                    }
                }),
                    (e.exports = o);
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
                        var u = (function (e, t) {
                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
                        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                        return (
                            (u.url = n),
                            (u.offset = r),
                            (u.length = i),
                            (u.cachever = void 0 === a ? 0 : a),
                            (u.loaded = !1),
                            (u.seekable = !1),
                            (u.headers = {}),
                            (u.eof = !1),
                            (u.bytesRead = 0),
                            (u.xhr = new XMLHttpRequest()),
                            u
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t)
                                throw TypeError("Super expression must either be null or a function, not " + typeof t);
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
                                                        var a,
                                                            u,
                                                            o,
                                                            s = (o = i(e.xhr)) ? parseInt(o[1], 10) : 0;
                                                        if (e.offset != s)
                                                            return (
                                                                console.log(
                                                                    "Expected start at " +
                                                                        e.offset +
                                                                        " but got " +
                                                                        s +
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
                                                          (u = {}),
                                                          a
                                                              .getAllResponseHeaders()
                                                              .split(/\r?\n/)
                                                              .forEach(function (e) {
                                                                  var t = e.split(/:\s*/, 2);
                                                                  t.length > 1 && (u[t[0].toLowerCase()] = t[1]);
                                                              }),
                                                          (e.headers = u),
                                                          e.onXHRStart())
                                                        : (r(), n(Error("HTTP error " + e.xhr.status)));
                                                }
                                            },
                                            u = function () {
                                                r(), n(Error("network error"));
                                            },
                                            o = function () {
                                                r(), t();
                                            };
                                        (r = function () {
                                            e.xhr.removeEventListener("readystatechange", a),
                                                e.xhr.removeEventListener("error", u),
                                                e.off("open", o),
                                                (e._onAbort = null);
                                        }),
                                            e.initXHR(),
                                            e.xhr.addEventListener("readystatechange", a),
                                            e.xhr.addEventListener("error", u),
                                            e.on("open", o),
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
                                    this.cachever && (e += "?buggy_cachever=" + this.cachever), this.xhr.open("GET", e);
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
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var u = i.get;
                        return void 0 !== u ? u.call(r) : void 0;
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
                (a.supported = function () {
                    try {
                        return !!new XMLHttpRequest().overrideMimeType;
                    } catch (e) {
                        return !1;
                    }
                }),
                    (e.exports = a);
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
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var u = i.get;
                        return void 0 !== u ? u.call(r) : void 0;
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
                                            var a = function () {
                                                    t.offset >= e && !t.eof && (i(), n());
                                                },
                                                u = function () {
                                                    i(), n();
                                                },
                                                o = function () {
                                                    i(), r(Error("error streaming"));
                                                };
                                            (i = function () {
                                                (t.buffering = !1),
                                                    t.off("buffer", a),
                                                    t.off("done", u),
                                                    t.off("error", o),
                                                    (t._onAbort = null);
                                            }),
                                                (t.buffering = !0),
                                                t.on("buffer", a),
                                                t.on("done", u),
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
                    a = n(431),
                    u = null;
                e.exports = function (e) {
                    if (!1 === e.progressive) return new a(e);
                    if ((u || (u = r.supported() ? r : i.supported() ? i : null), !u))
                        throw Error("No supported backend class");
                    return new u(e);
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
                            var a = Object.getPrototypeOf(t);
                            return null === a ? void 0 : e(a, n, r);
                        }
                        if ("value" in i) return i.value;
                        var u = i.get;
                        return void 0 !== u ? u.call(r) : void 0;
                    },
                    a = n(828),
                    u = "moz-chunked-arraybuffer",
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
                                            (this.xhr.responseType = u);
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
                    })(a);
                (o.supported = function () {
                    try {
                        var e = new XMLHttpRequest();
                        return (e.responseType = u), e.responseType === u;
                    } catch (e) {
                        return !1;
                    }
                }),
                    (e.exports = o);
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
                e.exports = (function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.buffer,
                            r = void 0 === n ? void 0 : n,
                            i = t.string,
                            a = void 0 === i ? void 0 : i,
                            u = t.start,
                            o = void 0 === u ? 0 : u,
                            s = t.end,
                            l = void 0 === s ? o + (r ? r.byteLength : a ? a.length : 0) : s,
                            d = t.prev,
                            c = t.next,
                            f = t.eof,
                            h = t.empty,
                            p = void 0 === h ? !(r || a) : h,
                            m = t.timestamp,
                            _ = void 0 === m ? Date.now() : m;
                        (function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.start = o),
                            (this.end = l),
                            (this.prev = void 0 === d ? null : d),
                            (this.next = void 0 === c ? null : c),
                            (this.eof = void 0 !== f && f),
                            (this.empty = p),
                            (this.timestamp = _),
                            (this.buffer = r),
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
                                        var a = new Uint8Array(this.buffer, r, i);
                                        e.set(a);
                                    } else {
                                        if (!this.string) throw Error("invalid state");
                                        for (var u = this.string, o = 0; o < i; o++) e[o] = u.charCodeAt(r + o);
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
                    })(),
                    i = n(503);
                e.exports = (function () {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.cacheSize;
                        if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
                        var r = new i({ eof: !0 });
                        (this.head = r),
                            (this.tail = r),
                            (this.readOffset = 0),
                            (this.readCursor = r),
                            (this.writeOffset = 0),
                            (this.writeCursor = r),
                            (this.cacheSize = void 0 === n ? 0 : n);
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
                                            a = r,
                                            u = this.readCursor;
                                        u && !u.empty && !(u.start >= i);
                                        u = u.next
                                    ) {
                                        var o = Math.min(i, u.end),
                                            s = e.subarray(a - r, o - r);
                                        u.readBytes(s, a, o), (a = o);
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
                                            (n.end < this.readOffset || n.start > this.readOffset + this.chunkSize) &&
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
                                    var t = new i({ start: e.start, end: e.end });
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
                                        n = new i({ start: e.start, end: t.end });
                                    return this.splice(e, t, n, n), n;
                                },
                            },
                            {
                                key: "splice",
                                value: function (e, t, n, r) {
                                    var i = this;
                                    if (e.start !== n.start) throw Error("invalid splice head");
                                    if (!(t.end === r.end || (t.eof && r.eof))) throw Error("invalid splice tail");
                                    var a = e.prev,
                                        u = t.next;
                                    (e.prev = null),
                                        (t.next = null),
                                        a && ((a.next = n), (n.prev = a)),
                                        u && ((u.prev = r), (r.next = u)),
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
                    a = n(761);
                e.exports = (function () {
                    function e(t) {
                        var n = t.url,
                            r = t.chunkSize,
                            a = t.cacheSize,
                            u = t.progressive;
                        !(function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
                        })(this, e),
                            (this.length = -1),
                            (this.loaded = !1),
                            (this.loading = !1),
                            (this.seekable = !1),
                            (this.buffering = !1),
                            (this.seeking = !1),
                            (this.progressive = void 0 === u || u),
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
                            (this._chunkSize = void 0 === r ? 1048576 : r);
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
                                                u = r.bytesReadable(i),
                                                o = r.readOffset + u;
                                            if ((r.seekWrite(o), e.length >= 0 && o >= e.length)) return void t(null);
                                            var s =
                                                e._clampToLength(r.writeOffset + r.bytesWritable(i)) - r.writeOffset;
                                            if (0 === s) t(null);
                                            else {
                                                var l = (e._backend = new a({
                                                        url: e.url,
                                                        offset: e._cache.writeOffset,
                                                        length: s,
                                                        cachever: e._cachever,
                                                        progressive: e.progressive,
                                                    })),
                                                    d = null,
                                                    c = function () {
                                                        l !== e._backend
                                                            ? (d(), n(Error("invalid state")))
                                                            : (l.on("buffer", function (t) {
                                                                  l === e._backend && e._cache.write(t);
                                                              }),
                                                              l.on("done", function () {
                                                                  l === e._backend &&
                                                                      (-1 === e.length &&
                                                                          (e.length =
                                                                              e._backend.offset + e._backend.bytesRead),
                                                                      (e._backend = null));
                                                              }),
                                                              t(l));
                                                    },
                                                    f = function (t) {
                                                        l !== e._backend
                                                            ? n(Error("invalid state"))
                                                            : ((e._backend = null), n(t));
                                                    };
                                                (d = function () {
                                                    l.off("open", c), l.off("error", f);
                                                }),
                                                    l.on("open", c),
                                                    l.on("error", f),
                                                    l.on("cachever", function () {
                                                        e._cachever++;
                                                    }),
                                                    l.load();
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
                                    if (!this.loaded || this.buffering || this.seeking) throw Error("invalid state");
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
                                            a = i - t.offset,
                                            u = t.bytesAvailable(a);
                                        u >= a
                                            ? n(u)
                                            : ((t.buffering = !0),
                                              t
                                                  ._openBackend()
                                                  .then(function (n) {
                                                      return n
                                                          ? n.bufferToOffset(i).then(function () {
                                                                return (t.buffering = !1), t.buffer(e);
                                                            })
                                                          : Promise.resolve(u);
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
                        var t = e.getContext("2d"),
                            n = null,
                            i = null,
                            a = null;
                        return (
                            (this.drawFrame = function (u) {
                                var o,
                                    s,
                                    l = u.format;
                                (e.width === l.displayWidth && e.height === l.displayHeight) ||
                                    ((e.width = l.displayWidth), (e.height = l.displayHeight)),
                                    (null !== n && n.width == l.width && n.height == l.height) ||
                                        (function (e, r) {
                                            for (
                                                var i = (n = t.createImageData(e, r)).data, a = e * r * 4, u = 0;
                                                u < a;
                                                u += 4
                                            )
                                                i[u + 3] = 255;
                                        })(l.width, l.height),
                                    r.convertYCbCr(u, n.data);
                                var d,
                                    c = l.cropWidth != l.displayWidth || l.cropHeight != l.displayHeight;
                                c
                                    ? (i ||
                                          ((o = l.cropWidth),
                                          (s = l.cropHeight),
                                          ((i = document.createElement("canvas")).width = o),
                                          (i.height = s),
                                          (a = i.getContext("2d"))),
                                      (d = a))
                                    : (d = t),
                                    d.putImageData(
                                        n,
                                        -l.cropLeft,
                                        -l.cropTop,
                                        l.cropLeft,
                                        l.cropTop,
                                        l.cropWidth,
                                        l.cropHeight,
                                    ),
                                    c && t.drawImage(i, 0, 0, l.displayWidth, l.displayHeight);
                            }),
                            (this.clear = function () {
                                t.clearRect(0, 0, e.width, e.height);
                            }),
                            this
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
                            a = this,
                            u = i.contextForCanvas(e);
                        if (null === u) throw Error("WebGL unavailable");
                        function o(e, t) {
                            var n = u.createShader(e);
                            if (
                                (u.shaderSource(n, t), u.compileShader(n), !u.getShaderParameter(n, u.COMPILE_STATUS))
                            ) {
                                var r = u.getShaderInfoLog(n);
                                throw (u.deleteShader(n), Error("GL shader compilation for " + e + " failed: " + r));
                            }
                            return n;
                        }
                        var s,
                            l,
                            d,
                            c,
                            f,
                            h,
                            p,
                            m,
                            _,
                            v,
                            g = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
                            y = {},
                            D = {},
                            b = {};
                        function C(e, t) {
                            return (y[e] && !t) || (y[e] = u.createTexture()), y[e];
                        }
                        function E(e, t, n, r, a) {
                            var o = !y[e] || t,
                                s = C(e, t);
                            if ((u.activeTexture(u.TEXTURE0), i.stripe)) {
                                var l = !y[e + "_temp"] || t,
                                    d = C(e + "_temp", t);
                                u.bindTexture(u.TEXTURE_2D, d),
                                    l
                                        ? (u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
                                          u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
                                          u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST),
                                          u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST),
                                          u.texImage2D(
                                              u.TEXTURE_2D,
                                              0,
                                              u.RGBA,
                                              n / 4,
                                              r,
                                              0,
                                              u.RGBA,
                                              u.UNSIGNED_BYTE,
                                              a,
                                          ))
                                        : u.texSubImage2D(u.TEXTURE_2D, 0, 0, 0, n / 4, r, u.RGBA, u.UNSIGNED_BYTE, a);
                                var c = y[e + "_stripe"],
                                    f = !c || t;
                                f && (c = C(e + "_stripe", t)),
                                    u.bindTexture(u.TEXTURE_2D, c),
                                    f &&
                                        (u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
                                        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
                                        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST),
                                        u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST),
                                        u.texImage2D(
                                            u.TEXTURE_2D,
                                            0,
                                            u.RGBA,
                                            n,
                                            1,
                                            0,
                                            u.RGBA,
                                            u.UNSIGNED_BYTE,
                                            (function (e) {
                                                if (b[e]) return b[e];
                                                for (var t = new Uint32Array(e), n = 0; n < e; n += 4)
                                                    (t[n] = 255),
                                                        (t[n + 1] = 65280),
                                                        (t[n + 2] = 0xff0000),
                                                        (t[n + 3] = 0xff000000);
                                                return (b[e] = new Uint8Array(t.buffer));
                                            })(n),
                                        ));
                            } else
                                u.bindTexture(u.TEXTURE_2D, s),
                                    o
                                        ? (u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
                                          u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
                                          u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR),
                                          u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.LINEAR),
                                          u.texImage2D(u.TEXTURE_2D, 0, u.ALPHA, n, r, 0, u.ALPHA, u.UNSIGNED_BYTE, a))
                                        : u.texSubImage2D(u.TEXTURE_2D, 0, 0, 0, n, r, u.ALPHA, u.UNSIGNED_BYTE, a);
                        }
                        function w(e, t, r, i) {
                            var a = y[e];
                            u.useProgram(n);
                            var o = D[e];
                            (o && !t) ||
                                (u.activeTexture(u.TEXTURE0),
                                u.bindTexture(u.TEXTURE_2D, a),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.LINEAR),
                                u.texImage2D(u.TEXTURE_2D, 0, u.RGBA, r, i, 0, u.RGBA, u.UNSIGNED_BYTE, null),
                                (o = D[e] = u.createFramebuffer())),
                                u.bindFramebuffer(u.FRAMEBUFFER, o),
                                u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, a, 0);
                            var p = y[e + "_temp"];
                            u.activeTexture(u.TEXTURE1), u.bindTexture(u.TEXTURE_2D, p), u.uniform1i(h, 1);
                            var m = y[e + "_stripe"];
                            u.activeTexture(u.TEXTURE2),
                                u.bindTexture(u.TEXTURE_2D, m),
                                u.uniform1i(f, 2),
                                u.bindBuffer(u.ARRAY_BUFFER, s),
                                u.enableVertexAttribArray(l),
                                u.vertexAttribPointer(l, 2, u.FLOAT, !1, 0, 0),
                                u.bindBuffer(u.ARRAY_BUFFER, d),
                                u.enableVertexAttribArray(c),
                                u.vertexAttribPointer(c, 2, u.FLOAT, !1, 0, 0),
                                u.viewport(0, 0, r, i),
                                u.drawArrays(u.TRIANGLES, 0, g.length / 2),
                                u.bindFramebuffer(u.FRAMEBUFFER, null);
                        }
                        function A(e, n, r) {
                            u.activeTexture(n),
                                u.bindTexture(u.TEXTURE_2D, y[e]),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, u.CLAMP_TO_EDGE),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, u.CLAMP_TO_EDGE),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.LINEAR),
                                u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.LINEAR),
                                u.uniform1i(u.getUniformLocation(t, e), r);
                        }
                        function B(e, t) {
                            var n = o(u.VERTEX_SHADER, e),
                                r = o(u.FRAGMENT_SHADER, t),
                                i = u.createProgram();
                            if (
                                (u.attachShader(i, n),
                                u.attachShader(i, r),
                                u.linkProgram(i),
                                !u.getProgramParameter(i, u.LINK_STATUS))
                            ) {
                                var a = u.getProgramInfoLog(i);
                                throw (u.deleteProgram(i), Error("GL program linking failed: " + a));
                            }
                            return i;
                        }
                        return (
                            (a.drawFrame = function (o) {
                                var y = o.format,
                                    D = !t || e.width !== y.displayWidth || e.height !== y.displayHeight;
                                if (
                                    (D && ((e.width = y.displayWidth), (e.height = y.displayHeight), a.clear()),
                                    t ||
                                        (function () {
                                            if (i.stripe) {
                                                (n = B(r.vertexStripe, r.fragmentStripe)),
                                                    u.getAttribLocation(n, "aPosition"),
                                                    (d = u.createBuffer());
                                                var e = new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]);
                                                u.bindBuffer(u.ARRAY_BUFFER, d),
                                                    u.bufferData(u.ARRAY_BUFFER, e, u.STATIC_DRAW),
                                                    (c = u.getAttribLocation(n, "aTexturePosition")),
                                                    (f = u.getUniformLocation(n, "uStripe")),
                                                    (h = u.getUniformLocation(n, "uTexture"));
                                            }
                                            (t = B(r.vertex, r.fragment)),
                                                (s = u.createBuffer()),
                                                u.bindBuffer(u.ARRAY_BUFFER, s),
                                                u.bufferData(u.ARRAY_BUFFER, g, u.STATIC_DRAW),
                                                (l = u.getAttribLocation(t, "aPosition")),
                                                (p = u.createBuffer()),
                                                (m = u.getAttribLocation(t, "aLumaPosition")),
                                                (_ = u.createBuffer()),
                                                (v = u.getAttribLocation(t, "aChromaPosition"));
                                        })(),
                                    D)
                                ) {
                                    var b = function (e, t, n) {
                                        var r = y.cropLeft / n,
                                            i = (y.cropLeft + y.cropWidth) / n,
                                            a = (y.cropTop + y.cropHeight) / y.height,
                                            o = y.cropTop / y.height,
                                            s = new Float32Array([r, a, i, a, r, o, r, o, i, a, i, o]);
                                        u.bindBuffer(u.ARRAY_BUFFER, e), u.bufferData(u.ARRAY_BUFFER, s, u.STATIC_DRAW);
                                    };
                                    b(p, 0, o.y.stride), b(_, 0, (o.u.stride * y.width) / y.chromaWidth);
                                }
                                E("uTextureY", D, o.y.stride, y.height, o.y.bytes),
                                    E("uTextureCb", D, o.u.stride, y.chromaHeight, o.u.bytes),
                                    E("uTextureCr", D, o.v.stride, y.chromaHeight, o.v.bytes),
                                    i.stripe &&
                                        (w("uTextureY", D, o.y.stride, y.height),
                                        w("uTextureCb", D, o.u.stride, y.chromaHeight),
                                        w("uTextureCr", D, o.v.stride, y.chromaHeight)),
                                    u.useProgram(t),
                                    u.viewport(0, 0, e.width, e.height),
                                    A("uTextureY", u.TEXTURE0, 0),
                                    A("uTextureCb", u.TEXTURE1, 1),
                                    A("uTextureCr", u.TEXTURE2, 2),
                                    u.bindBuffer(u.ARRAY_BUFFER, s),
                                    u.enableVertexAttribArray(l),
                                    u.vertexAttribPointer(l, 2, u.FLOAT, !1, 0, 0),
                                    u.bindBuffer(u.ARRAY_BUFFER, p),
                                    u.enableVertexAttribArray(m),
                                    u.vertexAttribPointer(m, 2, u.FLOAT, !1, 0, 0),
                                    u.bindBuffer(u.ARRAY_BUFFER, _),
                                    u.enableVertexAttribArray(v),
                                    u.vertexAttribPointer(v, 2, u.FLOAT, !1, 0, 0),
                                    u.drawArrays(u.TRIANGLES, 0, g.length / 2);
                            }),
                            (a.clear = function () {
                                u.viewport(0, 0, e.width, e.height),
                                    u.clearColor(0, 0, 0, 0),
                                    u.clear(u.COLOR_BUFFER_BIT);
                            }),
                            a.clear(),
                            a
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
                                    a = new Uint8Array(16),
                                    u = i.stripe ? 1 : 4,
                                    o = i.stripe ? e.RGBA : e.ALPHA,
                                    s = i.stripe ? e.NEAREST : e.LINEAR;
                                return (
                                    e.activeTexture(n),
                                    e.bindTexture(e.TEXTURE_2D, r),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, s),
                                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, s),
                                    e.texImage2D(e.TEXTURE_2D, 0, o, u, 4, 0, o, e.UNSIGNED_BYTE, a),
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
                                a = 0 | t(e.format.width / e.format.chromaWidth),
                                u = 0 | t(e.format.height / e.format.chromaHeight),
                                o = e.y.bytes,
                                s = e.u.bytes,
                                l = e.v.bytes,
                                d = 0 | e.y.stride,
                                c = 0 | e.u.stride,
                                f = 0 | e.v.stride,
                                h = r << 2,
                                p = 0,
                                m = 0,
                                _ = 0,
                                v = 0,
                                g = 0,
                                y = 0,
                                D = 0,
                                b = 0,
                                C = 0,
                                E = 0,
                                w = 0,
                                A = 0,
                                B = 0,
                                F = 0,
                                V = 0,
                                T = 0,
                                k = 0,
                                x = 0;
                            if (1 == a && 1 == u)
                                for (D = 0, b = h, x = 0, T = 0; T < i; T += 2) {
                                    for (
                                        _ = ((m = (T * d) | 0) + d) | 0, v = (x * c) | 0, g = (x * f) | 0, V = 0;
                                        V < r;
                                        V += 2
                                    )
                                        (C = 0 | s[v++]),
                                            (A = (((409 * (E = 0 | l[g++])) | 0) - 57088) | 0),
                                            (B = (((100 * C) | 0) + ((208 * E) | 0) - 34816) | 0),
                                            (F = (((516 * C) | 0) - 70912) | 0),
                                            (w = (298 * o[m++]) | 0),
                                            (n[D] = (w + A) >> 8),
                                            (n[D + 1] = (w - B) >> 8),
                                            (n[D + 2] = (w + F) >> 8),
                                            (D += 4),
                                            (w = (298 * o[m++]) | 0),
                                            (n[D] = (w + A) >> 8),
                                            (n[D + 1] = (w - B) >> 8),
                                            (n[D + 2] = (w + F) >> 8),
                                            (D += 4),
                                            (w = (298 * o[_++]) | 0),
                                            (n[b] = (w + A) >> 8),
                                            (n[b + 1] = (w - B) >> 8),
                                            (n[b + 2] = (w + F) >> 8),
                                            (b += 4),
                                            (w = (298 * o[_++]) | 0),
                                            (n[b] = (w + A) >> 8),
                                            (n[b + 1] = (w - B) >> 8),
                                            (n[b + 2] = (w + F) >> 8),
                                            (b += 4);
                                    (D += h), (b += h), x++;
                                }
                            else
                                for (y = 0, T = 0; T < i; T++)
                                    for (
                                        k = 0, p = (T * d) | 0, v = ((x = T >> u) * c) | 0, g = (x * f) | 0, V = 0;
                                        V < r;
                                        V++
                                    )
                                        (C = 0 | s[v + (k = V >> a)]),
                                            (A = (((409 * (E = 0 | l[g + k])) | 0) - 57088) | 0),
                                            (B = (((100 * C) | 0) + ((208 * E) | 0) - 34816) | 0),
                                            (F = (((516 * C) | 0) - 70912) | 0),
                                            (w = (298 * o[p++]) | 0),
                                            (n[y] = (w + A) >> 8),
                                            (n[y + 1] = (w - B) >> 8),
                                            (n[y + 2] = (w + F) >> 8),
                                            (y += 4);
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
                            throw "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " + e;
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
        return e[r](a, a.exports, n), a.exports;
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
            var e = n(318);
            Object.defineProperty(r, "__esModule", { value: !0 }),
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
                        return u.default;
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
                        return s.default;
                    },
                }),
                Object.defineProperty(r, "OGVTimeRanges", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                }),
                (r.OGVVersion = void 0);
            var t = e(n(8)),
                i = e(n(523)),
                a = e(n(964)),
                u = e(n(759)),
                o = e(n(278)),
                s = e(n(869)),
                l = e(n(168)),
                d = "1.8.9-20220406232920-cb5f7ff";
            (r.OGVVersion = d),
                "object" === ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
                    ((window.OGVCompat = i.default),
                    (window.OGVLoader = a.default),
                    (window.OGVMediaError = u.default),
                    (window.OGVMediaType = o.default),
                    (window.OGVTimeRanges = l.default),
                    (window.OGVPlayer = s.default),
                    (window.OGVVersion = d));
        })(),
        r
    );
})();
