!(function e(t, n, i) {
    function r(a, o) {
        if (!n[a]) {
            if (!t[a]) {
                if (s) return s(a, !0);
                var l = Error("Cannot find module '" + a + "'");
                throw ((l.code = "MODULE_NOT_FOUND"), l);
            }
            var u = (n[a] = { exports: {} });
            t[a][0].call(
                u.exports,
                function (e) {
                    return r(t[a][1][e] || e);
                },
                u,
                u.exports,
                e,
                t,
                n,
                i,
            );
        }
        return n[a].exports;
    }
    for (var s = void 0, a = 0; a < i.length; a++) r(i[a]);
    return r;
})(
    {
        1: [
            function (e, t, n) {
                "use strict";
                t.exports = (0, e("./adapter_factory.js").adapterFactory)({
                    window: "u" < typeof window ? void 0 : window,
                });
            },
            { "./adapter_factory.js": 2 },
        ],
        2: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.adapterFactory = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.window,
                            n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                    ? arguments[1]
                                    : { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 },
                            u = i.log,
                            c = i.detectBrowser(t),
                            d = {
                                browserDetails: c,
                                commonShim: l,
                                extractVersion: i.extractVersion,
                                disableLog: i.disableLog,
                                disableWarnings: i.disableWarnings,
                            };
                        switch (c.browser) {
                            case "chrome":
                                if (!r || !r.shimPeerConnection || !n.shimChrome) {
                                    u("Chrome shim is not included in this adapter release.");
                                    break;
                                }
                                if (null === c.version) {
                                    u("Chrome shim can not determine version, not shimming.");
                                    break;
                                }
                                u("adapter.js shimming chrome."),
                                    (d.browserShim = r),
                                    l.shimAddIceCandidateNullOrEmpty(t, c),
                                    r.shimGetUserMedia(t, c),
                                    r.shimMediaStream(t, c),
                                    r.shimPeerConnection(t, c),
                                    r.shimOnTrack(t, c),
                                    r.shimAddTrackRemoveTrack(t, c),
                                    r.shimGetSendersWithDtmf(t, c),
                                    r.shimGetStats(t, c),
                                    r.shimSenderReceiverGetStats(t, c),
                                    r.fixNegotiationNeeded(t, c),
                                    l.shimRTCIceCandidate(t, c),
                                    l.shimConnectionState(t, c),
                                    l.shimMaxMessageSize(t, c),
                                    l.shimSendThrowTypeError(t, c),
                                    l.removeExtmapAllowMixed(t, c);
                                break;
                            case "firefox":
                                if (!a || !a.shimPeerConnection || !n.shimFirefox) {
                                    u("Firefox shim is not included in this adapter release.");
                                    break;
                                }
                                u("adapter.js shimming firefox."),
                                    (d.browserShim = a),
                                    l.shimAddIceCandidateNullOrEmpty(t, c),
                                    a.shimGetUserMedia(t, c),
                                    a.shimPeerConnection(t, c),
                                    a.shimOnTrack(t, c),
                                    a.shimRemoveStream(t, c),
                                    a.shimSenderGetStats(t, c),
                                    a.shimReceiverGetStats(t, c),
                                    a.shimRTCDataChannel(t, c),
                                    a.shimAddTransceiver(t, c),
                                    a.shimGetParameters(t, c),
                                    a.shimCreateOffer(t, c),
                                    a.shimCreateAnswer(t, c),
                                    l.shimRTCIceCandidate(t, c),
                                    l.shimConnectionState(t, c),
                                    l.shimMaxMessageSize(t, c),
                                    l.shimSendThrowTypeError(t, c);
                                break;
                            case "edge":
                                if (!s || !s.shimPeerConnection || !n.shimEdge) {
                                    u("MS edge shim is not included in this adapter release.");
                                    break;
                                }
                                u("adapter.js shimming edge."),
                                    (d.browserShim = s),
                                    s.shimGetUserMedia(t, c),
                                    s.shimGetDisplayMedia(t, c),
                                    s.shimPeerConnection(t, c),
                                    s.shimReplaceTrack(t, c),
                                    l.shimMaxMessageSize(t, c),
                                    l.shimSendThrowTypeError(t, c);
                                break;
                            case "safari":
                                if (!o || !n.shimSafari) {
                                    u("Safari shim is not included in this adapter release.");
                                    break;
                                }
                                u("adapter.js shimming safari."),
                                    (d.browserShim = o),
                                    l.shimAddIceCandidateNullOrEmpty(t, c),
                                    o.shimRTCIceServerUrls(t, c),
                                    o.shimCreateOfferLegacy(t, c),
                                    o.shimCallbacksAPI(t, c),
                                    o.shimLocalStreamsAPI(t, c),
                                    o.shimRemoteStreamsAPI(t, c),
                                    o.shimTrackEventTransceiver(t, c),
                                    o.shimGetUserMedia(t, c),
                                    o.shimAudioContext(t, c),
                                    l.shimRTCIceCandidate(t, c),
                                    l.shimMaxMessageSize(t, c),
                                    l.shimSendThrowTypeError(t, c),
                                    l.removeExtmapAllowMixed(t, c);
                                break;
                            default:
                                u("Unsupported browser!");
                        }
                        return d;
                    });
                var i = u(e("./utils")),
                    r = u(e("./chrome/chrome_shim")),
                    s = u(e("./edge/edge_shim")),
                    a = u(e("./firefox/firefox_shim")),
                    o = u(e("./safari/safari_shim")),
                    l = u(e("./common_shim"));
                function u(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                }
            },
            {
                "./chrome/chrome_shim": 3,
                "./common_shim": 6,
                "./edge/edge_shim": 12,
                "./firefox/firefox_shim": 7,
                "./safari/safari_shim": 10,
                "./utils": 11,
            },
        ],
        3: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.shimGetDisplayMedia = n.shimGetUserMedia = void 0);
                var i =
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
                              },
                    r = e("./getusermedia");
                Object.defineProperty(n, "shimGetUserMedia", {
                    enumerable: !0,
                    get: function () {
                        return r.shimGetUserMedia;
                    },
                });
                var s = e("./getdisplaymedia");
                Object.defineProperty(n, "shimGetDisplayMedia", {
                    enumerable: !0,
                    get: function () {
                        return s.shimGetDisplayMedia;
                    },
                }),
                    (n.shimMediaStream = function (e) {
                        e.MediaStream = e.MediaStream || e.webkitMediaStream;
                    }),
                    (n.shimOnTrack = function (e) {
                        if (
                            (void 0 === e ? "undefined" : i(e)) !== "object" ||
                            !e.RTCPeerConnection ||
                            "ontrack" in e.RTCPeerConnection.prototype
                        )
                            a.wrapPeerConnectionEvent(e, "track", function (e) {
                                return (
                                    e.transceiver ||
                                        Object.defineProperty(e, "transceiver", { value: { receiver: e.receiver } }),
                                    e
                                );
                            });
                        else {
                            Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                                get: function () {
                                    return this._ontrack;
                                },
                                set: function (e) {
                                    this._ontrack && this.removeEventListener("track", this._ontrack),
                                        this.addEventListener("track", (this._ontrack = e));
                                },
                                enumerable: !0,
                                configurable: !0,
                            });
                            var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                                var n = this;
                                return (
                                    this._ontrackpoly ||
                                        ((this._ontrackpoly = function (t) {
                                            t.stream.addEventListener("addtrack", function (i) {
                                                var r = void 0;
                                                r = e.RTCPeerConnection.prototype.getReceivers
                                                    ? n.getReceivers().find(function (e) {
                                                          return e.track && e.track.id === i.track.id;
                                                      })
                                                    : { track: i.track };
                                                var s = new Event("track");
                                                (s.track = i.track),
                                                    (s.receiver = r),
                                                    (s.transceiver = { receiver: r }),
                                                    (s.streams = [t.stream]),
                                                    n.dispatchEvent(s);
                                            }),
                                                t.stream.getTracks().forEach(function (i) {
                                                    var r = void 0;
                                                    r = e.RTCPeerConnection.prototype.getReceivers
                                                        ? n.getReceivers().find(function (e) {
                                                              return e.track && e.track.id === i.id;
                                                          })
                                                        : { track: i };
                                                    var s = new Event("track");
                                                    (s.track = i),
                                                        (s.receiver = r),
                                                        (s.transceiver = { receiver: r }),
                                                        (s.streams = [t.stream]),
                                                        n.dispatchEvent(s);
                                                });
                                        }),
                                        this.addEventListener("addstream", this._ontrackpoly)),
                                    t.apply(this, arguments)
                                );
                            };
                        }
                    }),
                    (n.shimGetSendersWithDtmf = function (e) {
                        if (
                            (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCPeerConnection &&
                            !("getSenders" in e.RTCPeerConnection.prototype) &&
                            "createDTMFSender" in e.RTCPeerConnection.prototype
                        ) {
                            var t = function (e, t) {
                                return {
                                    track: t,
                                    get dtmf() {
                                        return (
                                            void 0 === this._dtmf &&
                                                ("audio" === t.kind
                                                    ? (this._dtmf = e.createDTMFSender(t))
                                                    : (this._dtmf = null)),
                                            this._dtmf
                                        );
                                    },
                                    _pc: e,
                                };
                            };
                            if (!e.RTCPeerConnection.prototype.getSenders) {
                                e.RTCPeerConnection.prototype.getSenders = function () {
                                    return (this._senders = this._senders || []), this._senders.slice();
                                };
                                var n = e.RTCPeerConnection.prototype.addTrack;
                                e.RTCPeerConnection.prototype.addTrack = function (e, i) {
                                    var r = n.apply(this, arguments);
                                    return r || ((r = t(this, e)), this._senders.push(r)), r;
                                };
                                var r = e.RTCPeerConnection.prototype.removeTrack;
                                e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                    r.apply(this, arguments);
                                    var t = this._senders.indexOf(e);
                                    -1 !== t && this._senders.splice(t, 1);
                                };
                            }
                            var s = e.RTCPeerConnection.prototype.addStream;
                            e.RTCPeerConnection.prototype.addStream = function (e) {
                                var n = this;
                                (this._senders = this._senders || []),
                                    s.apply(this, [e]),
                                    e.getTracks().forEach(function (e) {
                                        n._senders.push(t(n, e));
                                    });
                            };
                            var a = e.RTCPeerConnection.prototype.removeStream;
                            e.RTCPeerConnection.prototype.removeStream = function (e) {
                                var t = this;
                                (this._senders = this._senders || []),
                                    a.apply(this, [e]),
                                    e.getTracks().forEach(function (e) {
                                        var n = t._senders.find(function (t) {
                                            return t.track === e;
                                        });
                                        n && t._senders.splice(t._senders.indexOf(n), 1);
                                    });
                            };
                        } else if (
                            (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCPeerConnection &&
                            "getSenders" in e.RTCPeerConnection.prototype &&
                            "createDTMFSender" in e.RTCPeerConnection.prototype &&
                            e.RTCRtpSender &&
                            !("dtmf" in e.RTCRtpSender.prototype)
                        ) {
                            var o = e.RTCPeerConnection.prototype.getSenders;
                            (e.RTCPeerConnection.prototype.getSenders = function () {
                                var e = this,
                                    t = o.apply(this, []);
                                return (
                                    t.forEach(function (t) {
                                        return (t._pc = e);
                                    }),
                                    t
                                );
                            }),
                                Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                                    get: function () {
                                        return (
                                            void 0 === this._dtmf &&
                                                ("audio" === this.track.kind
                                                    ? (this._dtmf = this._pc.createDTMFSender(this.track))
                                                    : (this._dtmf = null)),
                                            this._dtmf
                                        );
                                    },
                                });
                        }
                    }),
                    (n.shimGetStats = function (e) {
                        if (e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.getStats;
                            e.RTCPeerConnection.prototype.getStats = function () {
                                var e = this,
                                    n = Array.prototype.slice.call(arguments),
                                    i = n[0],
                                    r = n[1],
                                    s = n[2];
                                if (arguments.length > 0 && "function" == typeof i) return t.apply(this, arguments);
                                if (0 === t.length && (0 == arguments.length || "function" != typeof i))
                                    return t.apply(this, []);
                                var a = function (e) {
                                        var t = {};
                                        return (
                                            e.result().forEach(function (e) {
                                                var n = {
                                                    id: e.id,
                                                    timestamp: e.timestamp,
                                                    type:
                                                        {
                                                            localcandidate: "local-candidate",
                                                            remotecandidate: "remote-candidate",
                                                        }[e.type] || e.type,
                                                };
                                                e.names().forEach(function (t) {
                                                    n[t] = e.stat(t);
                                                }),
                                                    (t[n.id] = n);
                                            }),
                                            t
                                        );
                                    },
                                    o = function (e) {
                                        return new Map(
                                            Object.keys(e).map(function (t) {
                                                return [t, e[t]];
                                            }),
                                        );
                                    };
                                return arguments.length >= 2
                                    ? t.apply(this, [
                                          function (e) {
                                              r(o(a(e)));
                                          },
                                          i,
                                      ])
                                    : new Promise(function (n, i) {
                                          t.apply(e, [
                                              function (e) {
                                                  n(o(a(e)));
                                              },
                                              i,
                                          ]);
                                      }).then(r, s);
                            };
                        }
                    }),
                    (n.shimSenderReceiverGetStats = function (e) {
                        if (
                            (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCPeerConnection &&
                            e.RTCRtpSender &&
                            e.RTCRtpReceiver
                        ) {
                            if (!("getStats" in e.RTCRtpSender.prototype)) {
                                var t = e.RTCPeerConnection.prototype.getSenders;
                                t &&
                                    (e.RTCPeerConnection.prototype.getSenders = function () {
                                        var e = this,
                                            n = t.apply(this, []);
                                        return (
                                            n.forEach(function (t) {
                                                return (t._pc = e);
                                            }),
                                            n
                                        );
                                    });
                                var n = e.RTCPeerConnection.prototype.addTrack;
                                n &&
                                    (e.RTCPeerConnection.prototype.addTrack = function () {
                                        var e = n.apply(this, arguments);
                                        return (e._pc = this), e;
                                    }),
                                    (e.RTCRtpSender.prototype.getStats = function () {
                                        var e = this;
                                        return this._pc.getStats().then(function (t) {
                                            return a.filterStats(t, e.track, !0);
                                        });
                                    });
                            }
                            if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                                var r = e.RTCPeerConnection.prototype.getReceivers;
                                r &&
                                    (e.RTCPeerConnection.prototype.getReceivers = function () {
                                        var e = this,
                                            t = r.apply(this, []);
                                        return (
                                            t.forEach(function (t) {
                                                return (t._pc = e);
                                            }),
                                            t
                                        );
                                    }),
                                    a.wrapPeerConnectionEvent(e, "track", function (e) {
                                        return (e.receiver._pc = e.srcElement), e;
                                    }),
                                    (e.RTCRtpReceiver.prototype.getStats = function () {
                                        var e = this;
                                        return this._pc.getStats().then(function (t) {
                                            return a.filterStats(t, e.track, !1);
                                        });
                                    });
                            }
                            if ("getStats" in e.RTCRtpSender.prototype && "getStats" in e.RTCRtpReceiver.prototype) {
                                var s = e.RTCPeerConnection.prototype.getStats;
                                e.RTCPeerConnection.prototype.getStats = function () {
                                    if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                                        var t = arguments[0],
                                            n = void 0,
                                            i = void 0,
                                            r = void 0;
                                        return (this.getSenders().forEach(function (e) {
                                            e.track === t && (n ? (r = !0) : (n = e));
                                        }),
                                        this.getReceivers().forEach(function (e) {
                                            return e.track === t && (i ? (r = !0) : (i = e)), e.track === t;
                                        }),
                                        r || (n && i))
                                            ? Promise.reject(
                                                  new DOMException(
                                                      "There are more than one sender or receiver for the track.",
                                                      "InvalidAccessError",
                                                  ),
                                              )
                                            : n
                                              ? n.getStats()
                                              : i
                                                ? i.getStats()
                                                : Promise.reject(
                                                      new DOMException(
                                                          "There is no sender or receiver for the track.",
                                                          "InvalidAccessError",
                                                      ),
                                                  );
                                    }
                                    return s.apply(this, arguments);
                                };
                            }
                        }
                    }),
                    (n.shimAddTrackRemoveTrackWithNative = l),
                    (n.shimAddTrackRemoveTrack = function (e, t) {
                        if (e.RTCPeerConnection) {
                            if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return l(e);
                            var n = e.RTCPeerConnection.prototype.getLocalStreams;
                            e.RTCPeerConnection.prototype.getLocalStreams = function () {
                                var e = this,
                                    t = n.apply(this);
                                return (
                                    (this._reverseStreams = this._reverseStreams || {}),
                                    t.map(function (t) {
                                        return e._reverseStreams[t.id];
                                    })
                                );
                            };
                            var i = e.RTCPeerConnection.prototype.addStream;
                            e.RTCPeerConnection.prototype.addStream = function (t) {
                                var n = this;
                                if (
                                    ((this._streams = this._streams || {}),
                                    (this._reverseStreams = this._reverseStreams || {}),
                                    t.getTracks().forEach(function (e) {
                                        if (
                                            n.getSenders().find(function (t) {
                                                return t.track === e;
                                            })
                                        )
                                            throw new DOMException("Track already exists.", "InvalidAccessError");
                                    }),
                                    !this._reverseStreams[t.id])
                                ) {
                                    var r = new e.MediaStream(t.getTracks());
                                    (this._streams[t.id] = r), (this._reverseStreams[r.id] = t), (t = r);
                                }
                                i.apply(this, [t]);
                            };
                            var r = e.RTCPeerConnection.prototype.removeStream;
                            (e.RTCPeerConnection.prototype.removeStream = function (e) {
                                (this._streams = this._streams || {}),
                                    (this._reverseStreams = this._reverseStreams || {}),
                                    r.apply(this, [this._streams[e.id] || e]),
                                    delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id],
                                    delete this._streams[e.id];
                            }),
                                (e.RTCPeerConnection.prototype.addTrack = function (t, n) {
                                    var i = this;
                                    if ("closed" === this.signalingState)
                                        throw new DOMException(
                                            "The RTCPeerConnection's signalingState is 'closed'.",
                                            "InvalidStateError",
                                        );
                                    var r = [].slice.call(arguments, 1);
                                    if (
                                        1 !== r.length ||
                                        !r[0].getTracks().find(function (e) {
                                            return e === t;
                                        })
                                    )
                                        throw new DOMException(
                                            "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
                                            "NotSupportedError",
                                        );
                                    if (
                                        this.getSenders().find(function (e) {
                                            return e.track === t;
                                        })
                                    )
                                        throw new DOMException("Track already exists.", "InvalidAccessError");
                                    (this._streams = this._streams || {}),
                                        (this._reverseStreams = this._reverseStreams || {});
                                    var s = this._streams[n.id];
                                    if (s)
                                        s.addTrack(t),
                                            Promise.resolve().then(function () {
                                                i.dispatchEvent(new Event("negotiationneeded"));
                                            });
                                    else {
                                        var a = new e.MediaStream([t]);
                                        (this._streams[n.id] = a), (this._reverseStreams[a.id] = n), this.addStream(a);
                                    }
                                    return this.getSenders().find(function (e) {
                                        return e.track === t;
                                    });
                                }),
                                ["createOffer", "createAnswer"].forEach(function (t) {
                                    var n = e.RTCPeerConnection.prototype[t],
                                        i = o({}, t, function () {
                                            var e = this,
                                                t = arguments,
                                                i = arguments.length && "function" == typeof arguments[0];
                                            return i
                                                ? n.apply(this, [
                                                      function (n) {
                                                          var i = u(e, n);
                                                          t[0].apply(null, [i]);
                                                      },
                                                      function (e) {
                                                          t[1] && t[1].apply(null, e);
                                                      },
                                                      arguments[2],
                                                  ])
                                                : n.apply(this, arguments).then(function (t) {
                                                      return u(e, t);
                                                  });
                                        });
                                    e.RTCPeerConnection.prototype[t] = i[t];
                                });
                            var s = e.RTCPeerConnection.prototype.setLocalDescription;
                            e.RTCPeerConnection.prototype.setLocalDescription = function () {
                                var e, t, n;
                                return (
                                    arguments.length &&
                                        arguments[0].type &&
                                        (arguments[0] =
                                            ((e = this),
                                            (t = arguments[0]),
                                            (n = t.sdp),
                                            Object.keys(e._reverseStreams || []).forEach(function (t) {
                                                var i = e._reverseStreams[t],
                                                    r = e._streams[i.id];
                                                n = n.replace(RegExp(i.id, "g"), r.id);
                                            }),
                                            new RTCSessionDescription({ type: t.type, sdp: n }))),
                                    s.apply(this, arguments)
                                );
                            };
                            var a = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
                            Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                                get: function () {
                                    var e = a.get.apply(this);
                                    return "" === e.type ? e : u(this, e);
                                },
                            }),
                                (e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                    var t = this;
                                    if ("closed" === this.signalingState)
                                        throw new DOMException(
                                            "The RTCPeerConnection's signalingState is 'closed'.",
                                            "InvalidStateError",
                                        );
                                    if (!e._pc)
                                        throw new DOMException(
                                            "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
                                            "TypeError",
                                        );
                                    if (e._pc !== this)
                                        throw new DOMException(
                                            "Sender was not created by this connection.",
                                            "InvalidAccessError",
                                        );
                                    this._streams = this._streams || {};
                                    var n = void 0;
                                    Object.keys(this._streams).forEach(function (i) {
                                        t._streams[i].getTracks().find(function (t) {
                                            return e.track === t;
                                        }) && (n = t._streams[i]);
                                    }),
                                        n &&
                                            (1 === n.getTracks().length
                                                ? this.removeStream(this._reverseStreams[n.id])
                                                : n.removeTrack(e.track),
                                            this.dispatchEvent(new Event("negotiationneeded")));
                                });
                        }
                        function u(e, t) {
                            var n = t.sdp;
                            return (
                                Object.keys(e._reverseStreams || []).forEach(function (t) {
                                    var i = e._reverseStreams[t],
                                        r = e._streams[i.id];
                                    n = n.replace(RegExp(r.id, "g"), i.id);
                                }),
                                new RTCSessionDescription({ type: t.type, sdp: n })
                            );
                        }
                    }),
                    (n.shimPeerConnection = function (e, t) {
                        !e.RTCPeerConnection &&
                            e.webkitRTCPeerConnection &&
                            (e.RTCPeerConnection = e.webkitRTCPeerConnection),
                            e.RTCPeerConnection &&
                                t.version < 53 &&
                                ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(
                                    function (t) {
                                        var n = e.RTCPeerConnection.prototype[t],
                                            i = o({}, t, function () {
                                                return (
                                                    (arguments[0] = new (
                                                        "addIceCandidate" === t
                                                            ? e.RTCIceCandidate
                                                            : e.RTCSessionDescription
                                                    )(arguments[0])),
                                                    n.apply(this, arguments)
                                                );
                                            });
                                        e.RTCPeerConnection.prototype[t] = i[t];
                                    },
                                );
                    }),
                    (n.fixNegotiationNeeded = function (e, t) {
                        a.wrapPeerConnectionEvent(e, "negotiationneeded", function (e) {
                            var n = e.target;
                            if (
                                (!(t.version < 72) &&
                                    (!n.getConfiguration || "plan-b" !== n.getConfiguration().sdpSemantics)) ||
                                "stable" === n.signalingState
                            )
                                return e;
                        });
                    });
                var a = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                })(e("../utils.js"));
                function o(e, t, n) {
                    return (
                        t in e
                            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                            : (e[t] = n),
                        e
                    );
                }
                function l(e) {
                    e.RTCPeerConnection.prototype.getLocalStreams = function () {
                        var e = this;
                        return (
                            (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                            Object.keys(this._shimmedLocalStreams).map(function (t) {
                                return e._shimmedLocalStreams[t][0];
                            })
                        );
                    };
                    var t = e.RTCPeerConnection.prototype.addTrack;
                    e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                        if (!n) return t.apply(this, arguments);
                        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                        var i = t.apply(this, arguments);
                        return (
                            this._shimmedLocalStreams[n.id]
                                ? -1 === this._shimmedLocalStreams[n.id].indexOf(i) &&
                                  this._shimmedLocalStreams[n.id].push(i)
                                : (this._shimmedLocalStreams[n.id] = [n, i]),
                            i
                        );
                    };
                    var n = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function (e) {
                        var t = this;
                        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                            e.getTracks().forEach(function (e) {
                                if (
                                    t.getSenders().find(function (t) {
                                        return t.track === e;
                                    })
                                )
                                    throw new DOMException("Track already exists.", "InvalidAccessError");
                            });
                        var i = this.getSenders();
                        n.apply(this, arguments);
                        var r = this.getSenders().filter(function (e) {
                            return -1 === i.indexOf(e);
                        });
                        this._shimmedLocalStreams[e.id] = [e].concat(r);
                    };
                    var i = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function (e) {
                        return (
                            (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                            delete this._shimmedLocalStreams[e.id],
                            i.apply(this, arguments)
                        );
                    };
                    var r = e.RTCPeerConnection.prototype.removeTrack;
                    e.RTCPeerConnection.prototype.removeTrack = function (e) {
                        var t = this;
                        return (
                            (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                            e &&
                                Object.keys(this._shimmedLocalStreams).forEach(function (n) {
                                    var i = t._shimmedLocalStreams[n].indexOf(e);
                                    -1 !== i && t._shimmedLocalStreams[n].splice(i, 1),
                                        1 === t._shimmedLocalStreams[n].length && delete t._shimmedLocalStreams[n];
                                }),
                            r.apply(this, arguments)
                        );
                    };
                }
            },
            { "../utils.js": 11, "./getdisplaymedia": 4, "./getusermedia": 5 },
        ],
        4: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.shimGetDisplayMedia = function (e, t) {
                        if (
                            (!e.navigator.mediaDevices || !("getDisplayMedia" in e.navigator.mediaDevices)) &&
                            e.navigator.mediaDevices
                        ) {
                            if ("function" != typeof t)
                                return void console.error(
                                    "shimGetDisplayMedia: getSourceId argument is not a function",
                                );
                            e.navigator.mediaDevices.getDisplayMedia = function (n) {
                                return t(n).then(function (t) {
                                    var i = n.video && n.video.width,
                                        r = n.video && n.video.height,
                                        s = n.video && n.video.frameRate;
                                    return (
                                        (n.video = {
                                            mandatory: {
                                                chromeMediaSource: "desktop",
                                                chromeMediaSourceId: t,
                                                maxFrameRate: s || 3,
                                            },
                                        }),
                                        i && (n.video.mandatory.maxWidth = i),
                                        r && (n.video.mandatory.maxHeight = r),
                                        e.navigator.mediaDevices.getUserMedia(n)
                                    );
                                });
                            };
                        }
                    });
            },
            {},
        ],
        5: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var i =
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
                          };
                n.shimGetUserMedia = function (e, t) {
                    var n = e && e.navigator;
                    if (n.mediaDevices) {
                        var s = function (e) {
                                if ((void 0 === e ? "undefined" : i(e)) !== "object" || e.mandatory || e.optional)
                                    return e;
                                var t = {};
                                return (
                                    Object.keys(e).forEach(function (n) {
                                        if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                                            var r = "object" === i(e[n]) ? e[n] : { ideal: e[n] };
                                            void 0 !== r.exact &&
                                                "number" == typeof r.exact &&
                                                (r.min = r.max = r.exact);
                                            var s = function (e, t) {
                                                return e
                                                    ? e + t.charAt(0).toUpperCase() + t.slice(1)
                                                    : "deviceId" === t
                                                      ? "sourceId"
                                                      : t;
                                            };
                                            if (void 0 !== r.ideal) {
                                                t.optional = t.optional || [];
                                                var a = {};
                                                "number" == typeof r.ideal
                                                    ? ((a[s("min", n)] = r.ideal),
                                                      t.optional.push(a),
                                                      ((a = {})[s("max", n)] = r.ideal))
                                                    : (a[s("", n)] = r.ideal),
                                                    t.optional.push(a);
                                            }
                                            void 0 !== r.exact && "number" != typeof r.exact
                                                ? ((t.mandatory = t.mandatory || {}), (t.mandatory[s("", n)] = r.exact))
                                                : ["min", "max"].forEach(function (e) {
                                                      void 0 !== r[e] &&
                                                          ((t.mandatory = t.mandatory || {}),
                                                          (t.mandatory[s(e, n)] = r[e]));
                                                  });
                                        }
                                    }),
                                    e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
                                    t
                                );
                            },
                            a = function (e, a) {
                                if (t.version >= 61) return a(e);
                                if ((e = JSON.parse(JSON.stringify(e))) && "object" === i(e.audio)) {
                                    var o = function (e, t, n) {
                                        t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
                                    };
                                    o(
                                        (e = JSON.parse(JSON.stringify(e))).audio,
                                        "autoGainControl",
                                        "googAutoGainControl",
                                    ),
                                        o(e.audio, "noiseSuppression", "googNoiseSuppression"),
                                        (e.audio = s(e.audio));
                                }
                                if (e && "object" === i(e.video)) {
                                    var l = e.video.facingMode;
                                    l = l && ((void 0 === l ? "undefined" : i(l)) === "object" ? l : { ideal: l });
                                    var u = t.version < 66;
                                    if (
                                        l &&
                                        ("user" === l.exact ||
                                            "environment" === l.exact ||
                                            "user" === l.ideal ||
                                            "environment" === l.ideal) &&
                                        !(
                                            n.mediaDevices.getSupportedConstraints &&
                                            n.mediaDevices.getSupportedConstraints().facingMode &&
                                            !u
                                        )
                                    ) {
                                        delete e.video.facingMode;
                                        var c = void 0;
                                        if (
                                            ("environment" === l.exact || "environment" === l.ideal
                                                ? (c = ["back", "rear"])
                                                : ("user" === l.exact || "user" === l.ideal) && (c = ["front"]),
                                            c)
                                        )
                                            return n.mediaDevices.enumerateDevices().then(function (t) {
                                                var n = (t = t.filter(function (e) {
                                                    return "videoinput" === e.kind;
                                                })).find(function (e) {
                                                    return c.some(function (t) {
                                                        return e.label.toLowerCase().includes(t);
                                                    });
                                                });
                                                return (
                                                    !n && t.length && c.includes("back") && (n = t[t.length - 1]),
                                                    n &&
                                                        (e.video.deviceId = l.exact
                                                            ? { exact: n.deviceId }
                                                            : { ideal: n.deviceId }),
                                                    (e.video = s(e.video)),
                                                    r("chrome: " + JSON.stringify(e)),
                                                    a(e)
                                                );
                                            });
                                    }
                                    e.video = s(e.video);
                                }
                                return r("chrome: " + JSON.stringify(e)), a(e);
                            },
                            o = function (e) {
                                return t.version >= 64
                                    ? e
                                    : {
                                          name:
                                              {
                                                  PermissionDeniedError: "NotAllowedError",
                                                  PermissionDismissedError: "NotAllowedError",
                                                  InvalidStateError: "NotAllowedError",
                                                  DevicesNotFoundError: "NotFoundError",
                                                  ConstraintNotSatisfiedError: "OverconstrainedError",
                                                  TrackStartError: "NotReadableError",
                                                  MediaDeviceFailedDueToShutdown: "NotAllowedError",
                                                  MediaDeviceKillSwitchOn: "NotAllowedError",
                                                  TabCaptureError: "AbortError",
                                                  ScreenCaptureError: "AbortError",
                                                  DeviceCaptureError: "AbortError",
                                              }[e.name] || e.name,
                                          message: e.message,
                                          constraint: e.constraint || e.constraintName,
                                          toString: function () {
                                              return this.name + (this.message && ": ") + this.message;
                                          },
                                      };
                            };
                        if (
                            ((n.getUserMedia = function (e, t, i) {
                                a(e, function (e) {
                                    n.webkitGetUserMedia(e, t, function (e) {
                                        i && i(o(e));
                                    });
                                });
                            }.bind(n)),
                            n.mediaDevices.getUserMedia)
                        ) {
                            var l = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                            n.mediaDevices.getUserMedia = function (e) {
                                return a(e, function (e) {
                                    return l(e).then(
                                        function (t) {
                                            if (
                                                (e.audio && !t.getAudioTracks().length) ||
                                                (e.video && !t.getVideoTracks().length)
                                            )
                                                throw (
                                                    (t.getTracks().forEach(function (e) {
                                                        e.stop();
                                                    }),
                                                    new DOMException("", "NotFoundError"))
                                                );
                                            return t;
                                        },
                                        function (e) {
                                            return Promise.reject(o(e));
                                        },
                                    );
                                });
                            };
                        }
                    }
                };
                var r = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                })(e("../utils.js")).log;
            },
            { "../utils.js": 11 },
        ],
        6: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var i,
                    r =
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
                              };
                (n.shimRTCIceCandidate = function (e) {
                    if (e.RTCIceCandidate && (!e.RTCIceCandidate || !("foundation" in e.RTCIceCandidate.prototype))) {
                        var t = e.RTCIceCandidate;
                        (e.RTCIceCandidate = function (e) {
                            if (
                                ((void 0 === e ? "undefined" : r(e)) === "object" &&
                                    e.candidate &&
                                    0 === e.candidate.indexOf("a=") &&
                                    ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)),
                                e.candidate && e.candidate.length)
                            ) {
                                var n = Object.assign(new t(e), s.default.parseCandidate(e.candidate));
                                return (
                                    (n.toJSON = function () {
                                        return {
                                            candidate: n.candidate,
                                            sdpMid: n.sdpMid,
                                            sdpMLineIndex: n.sdpMLineIndex,
                                            usernameFragment: n.usernameFragment,
                                        };
                                    }),
                                    n
                                );
                            }
                            return new t(e);
                        }),
                            (e.RTCIceCandidate.prototype = t.prototype),
                            a.wrapPeerConnectionEvent(e, "icecandidate", function (t) {
                                return (
                                    t.candidate &&
                                        Object.defineProperty(t, "candidate", {
                                            value: new e.RTCIceCandidate(t.candidate),
                                            writable: "false",
                                        }),
                                    t
                                );
                            });
                    }
                }),
                    (n.shimMaxMessageSize = function (e, t) {
                        if (e.RTCPeerConnection) {
                            "sctp" in e.RTCPeerConnection.prototype ||
                                Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                                    get: function () {
                                        return void 0 === this._sctp ? null : this._sctp;
                                    },
                                });
                            var n = function (e) {
                                    if (!e || !e.sdp) return !1;
                                    var t = s.default.splitSections(e.sdp);
                                    return (
                                        t.shift(),
                                        t.some(function (e) {
                                            var t = s.default.parseMLine(e);
                                            return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP");
                                        })
                                    );
                                },
                                i = function (e) {
                                    var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                    if (null === t || t.length < 2) return -1;
                                    var n = parseInt(t[1], 10);
                                    return n != n ? -1 : n;
                                },
                                r = function (e) {
                                    var n = 65536;
                                    return (
                                        "firefox" === t.browser &&
                                            (n =
                                                t.version < 57
                                                    ? -1 === e
                                                        ? 16384
                                                        : 0x7ffffff5
                                                    : t.version < 60
                                                      ? 57 === t.version
                                                          ? 65535
                                                          : 65536
                                                      : 0x7ffffff5),
                                        n
                                    );
                                },
                                a = function (e, n) {
                                    var i = 65536;
                                    "firefox" === t.browser && 57 === t.version && (i = 65535);
                                    var r = s.default.matchPrefix(e.sdp, "a=max-message-size:");
                                    return (
                                        r.length > 0
                                            ? (i = parseInt(r[0].substr(19), 10))
                                            : "firefox" === t.browser && -1 !== n && (i = 0x7ffffff5),
                                        i
                                    );
                                },
                                o = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                                if (
                                    ((this._sctp = null),
                                    "chrome" === t.browser &&
                                        t.version >= 76 &&
                                        "plan-b" === this.getConfiguration().sdpSemantics &&
                                        Object.defineProperty(this, "sctp", {
                                            get: function () {
                                                return void 0 === this._sctp ? null : this._sctp;
                                            },
                                            enumerable: !0,
                                            configurable: !0,
                                        }),
                                    n(arguments[0]))
                                ) {
                                    var e = i(arguments[0]),
                                        s = r(e),
                                        l = a(arguments[0], e),
                                        u = void 0;
                                    u =
                                        0 === s && 0 === l
                                            ? 1 / 0
                                            : 0 === s || 0 === l
                                              ? Math.max(s, l)
                                              : Math.min(s, l);
                                    var c = {};
                                    Object.defineProperty(c, "maxMessageSize", {
                                        get: function () {
                                            return u;
                                        },
                                    }),
                                        (this._sctp = c);
                                }
                                return o.apply(this, arguments);
                            };
                        }
                    }),
                    (n.shimSendThrowTypeError = function (e) {
                        if (e.RTCPeerConnection && "createDataChannel" in e.RTCPeerConnection.prototype) {
                            var t = e.RTCPeerConnection.prototype.createDataChannel;
                            (e.RTCPeerConnection.prototype.createDataChannel = function () {
                                var e = t.apply(this, arguments);
                                return n(e, this), e;
                            }),
                                a.wrapPeerConnectionEvent(e, "datachannel", function (e) {
                                    return n(e.channel, e.target), e;
                                });
                        }
                        function n(e, t) {
                            var n = e.send;
                            e.send = function () {
                                var i = arguments[0],
                                    r = i.length || i.size || i.byteLength;
                                if ("open" === e.readyState && t.sctp && r > t.sctp.maxMessageSize)
                                    throw TypeError(
                                        "Message too large (can send a maximum of " + t.sctp.maxMessageSize + " bytes)",
                                    );
                                return n.apply(e, arguments);
                            };
                        }
                    }),
                    (n.shimConnectionState = function (e) {
                        if (e.RTCPeerConnection && !("connectionState" in e.RTCPeerConnection.prototype)) {
                            var t = e.RTCPeerConnection.prototype;
                            Object.defineProperty(t, "connectionState", {
                                get: function () {
                                    return (
                                        { completed: "connected", checking: "connecting" }[this.iceConnectionState] ||
                                        this.iceConnectionState
                                    );
                                },
                                enumerable: !0,
                                configurable: !0,
                            }),
                                Object.defineProperty(t, "onconnectionstatechange", {
                                    get: function () {
                                        return this._onconnectionstatechange || null;
                                    },
                                    set: function (e) {
                                        this._onconnectionstatechange &&
                                            (this.removeEventListener(
                                                "connectionstatechange",
                                                this._onconnectionstatechange,
                                            ),
                                            delete this._onconnectionstatechange),
                                            e &&
                                                this.addEventListener(
                                                    "connectionstatechange",
                                                    (this._onconnectionstatechange = e),
                                                );
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                }),
                                ["setLocalDescription", "setRemoteDescription"].forEach(function (e) {
                                    var n = t[e];
                                    t[e] = function () {
                                        return (
                                            this._connectionstatechangepoly ||
                                                ((this._connectionstatechangepoly = function (e) {
                                                    var t = e.target;
                                                    if (t._lastConnectionState !== t.connectionState) {
                                                        t._lastConnectionState = t.connectionState;
                                                        var n = new Event("connectionstatechange", e);
                                                        t.dispatchEvent(n);
                                                    }
                                                    return e;
                                                }),
                                                this.addEventListener(
                                                    "iceconnectionstatechange",
                                                    this._connectionstatechangepoly,
                                                )),
                                            n.apply(this, arguments)
                                        );
                                    };
                                });
                        }
                    }),
                    (n.removeExtmapAllowMixed = function (e, t) {
                        if (
                            e.RTCPeerConnection &&
                            ("chrome" !== t.browser || !(t.version >= 71)) &&
                            ("safari" !== t.browser || !(t.version >= 605))
                        ) {
                            var n = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function (t) {
                                if (t && t.sdp && -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")) {
                                    var i = t.sdp
                                        .split("\n")
                                        .filter(function (e) {
                                            return "a=extmap-allow-mixed" !== e.trim();
                                        })
                                        .join("\n");
                                    e.RTCSessionDescription && t instanceof e.RTCSessionDescription
                                        ? (arguments[0] = new e.RTCSessionDescription({ type: t.type, sdp: i }))
                                        : (t.sdp = i);
                                }
                                return n.apply(this, arguments);
                            };
                        }
                    }),
                    (n.shimAddIceCandidateNullOrEmpty = function (e, t) {
                        if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
                            var n = e.RTCPeerConnection.prototype.addIceCandidate;
                            n &&
                                0 !== n.length &&
                                (e.RTCPeerConnection.prototype.addIceCandidate = function () {
                                    return arguments[0]
                                        ? (("chrome" === t.browser && t.version < 78) ||
                                              ("firefox" === t.browser && t.version < 68) ||
                                              "safari" === t.browser) &&
                                          arguments[0] &&
                                          "" === arguments[0].candidate
                                            ? Promise.resolve()
                                            : n.apply(this, arguments)
                                        : (arguments[1] && arguments[1].apply(null), Promise.resolve());
                                });
                        }
                    });
                var s = (i = e("sdp")) && i.__esModule ? i : { default: i },
                    a = (function (e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                        return (t.default = e), t;
                    })(e("./utils"));
            },
            { "./utils": 11, sdp: 13 },
        ],
        7: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.shimGetDisplayMedia = n.shimGetUserMedia = void 0);
                var i =
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
                              },
                    r = e("./getusermedia");
                Object.defineProperty(n, "shimGetUserMedia", {
                    enumerable: !0,
                    get: function () {
                        return r.shimGetUserMedia;
                    },
                });
                var s = e("./getdisplaymedia");
                Object.defineProperty(n, "shimGetDisplayMedia", {
                    enumerable: !0,
                    get: function () {
                        return s.shimGetDisplayMedia;
                    },
                }),
                    (n.shimOnTrack = function (e) {
                        (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCTrackEvent &&
                            "receiver" in e.RTCTrackEvent.prototype &&
                            !("transceiver" in e.RTCTrackEvent.prototype) &&
                            Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                                get: function () {
                                    return { receiver: this.receiver };
                                },
                            });
                    }),
                    (n.shimPeerConnection = function (e, t) {
                        if (
                            (void 0 === e ? "undefined" : i(e)) === "object" &&
                            (e.RTCPeerConnection || e.mozRTCPeerConnection)
                        ) {
                            !e.RTCPeerConnection &&
                                e.mozRTCPeerConnection &&
                                (e.RTCPeerConnection = e.mozRTCPeerConnection),
                                t.version < 53 &&
                                    ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(
                                        function (t) {
                                            var n,
                                                i,
                                                r = e.RTCPeerConnection.prototype[t],
                                                s =
                                                    ((n = {}),
                                                    (i = function () {
                                                        return (
                                                            (arguments[0] = new (
                                                                "addIceCandidate" === t
                                                                    ? e.RTCIceCandidate
                                                                    : e.RTCSessionDescription
                                                            )(arguments[0])),
                                                            r.apply(this, arguments)
                                                        );
                                                    }),
                                                    t in n
                                                        ? Object.defineProperty(n, t, {
                                                              value: i,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (n[t] = i),
                                                    n);
                                            e.RTCPeerConnection.prototype[t] = s[t];
                                        },
                                    );
                            var n = {
                                    inboundrtp: "inbound-rtp",
                                    outboundrtp: "outbound-rtp",
                                    candidatepair: "candidate-pair",
                                    localcandidate: "local-candidate",
                                    remotecandidate: "remote-candidate",
                                },
                                r = e.RTCPeerConnection.prototype.getStats;
                            e.RTCPeerConnection.prototype.getStats = function () {
                                var e = Array.prototype.slice.call(arguments),
                                    i = e[0],
                                    s = e[1],
                                    a = e[2];
                                return r
                                    .apply(this, [i || null])
                                    .then(function (e) {
                                        if (t.version < 53 && !s)
                                            try {
                                                e.forEach(function (e) {
                                                    e.type = n[e.type] || e.type;
                                                });
                                            } catch (t) {
                                                if ("TypeError" !== t.name) throw t;
                                                e.forEach(function (t, i) {
                                                    e.set(i, Object.assign({}, t, { type: n[t.type] || t.type }));
                                                });
                                            }
                                        return e;
                                    })
                                    .then(s, a);
                            };
                        }
                    }),
                    (n.shimSenderGetStats = function (e) {
                        if (
                            (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCPeerConnection &&
                            e.RTCRtpSender &&
                            (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype))
                        ) {
                            var t = e.RTCPeerConnection.prototype.getSenders;
                            t &&
                                (e.RTCPeerConnection.prototype.getSenders = function () {
                                    var e = this,
                                        n = t.apply(this, []);
                                    return (
                                        n.forEach(function (t) {
                                            return (t._pc = e);
                                        }),
                                        n
                                    );
                                });
                            var n = e.RTCPeerConnection.prototype.addTrack;
                            n &&
                                (e.RTCPeerConnection.prototype.addTrack = function () {
                                    var e = n.apply(this, arguments);
                                    return (e._pc = this), e;
                                }),
                                (e.RTCRtpSender.prototype.getStats = function () {
                                    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
                                });
                        }
                    }),
                    (n.shimReceiverGetStats = function (e) {
                        if (
                            (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCPeerConnection &&
                            e.RTCRtpSender &&
                            (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype))
                        ) {
                            var t = e.RTCPeerConnection.prototype.getReceivers;
                            t &&
                                (e.RTCPeerConnection.prototype.getReceivers = function () {
                                    var e = this,
                                        n = t.apply(this, []);
                                    return (
                                        n.forEach(function (t) {
                                            return (t._pc = e);
                                        }),
                                        n
                                    );
                                }),
                                a.wrapPeerConnectionEvent(e, "track", function (e) {
                                    return (e.receiver._pc = e.srcElement), e;
                                }),
                                (e.RTCRtpReceiver.prototype.getStats = function () {
                                    return this._pc.getStats(this.track);
                                });
                        }
                    }),
                    (n.shimRemoveStream = function (e) {
                        !e.RTCPeerConnection ||
                            "removeStream" in e.RTCPeerConnection.prototype ||
                            (e.RTCPeerConnection.prototype.removeStream = function (e) {
                                var t = this;
                                a.deprecated("removeStream", "removeTrack"),
                                    this.getSenders().forEach(function (n) {
                                        n.track && e.getTracks().includes(n.track) && t.removeTrack(n);
                                    });
                            });
                    }),
                    (n.shimRTCDataChannel = function (e) {
                        e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
                    }),
                    (n.shimAddTransceiver = function (e) {
                        if ((void 0 === e ? "undefined" : i(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.addTransceiver;
                            t &&
                                (e.RTCPeerConnection.prototype.addTransceiver = function () {
                                    this.setParametersPromises = [];
                                    var e = arguments[1],
                                        n = e && "sendEncodings" in e;
                                    n &&
                                        e.sendEncodings.forEach(function (e) {
                                            if ("rid" in e && !/^[a-z0-9]{0,16}$/i.test(e.rid))
                                                throw TypeError("Invalid RID value provided.");
                                            if (
                                                "scaleResolutionDownBy" in e &&
                                                !(parseFloat(e.scaleResolutionDownBy) >= 1)
                                            )
                                                throw RangeError("scale_resolution_down_by must be >= 1.0");
                                            if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0))
                                                throw RangeError("max_framerate must be >= 0.0");
                                        });
                                    var i = t.apply(this, arguments);
                                    if (n) {
                                        var r = i.sender,
                                            s = r.getParameters();
                                        ("encodings" in s &&
                                            (1 !== s.encodings.length || 0 !== Object.keys(s.encodings[0]).length)) ||
                                            ((s.encodings = e.sendEncodings),
                                            (r.sendEncodings = e.sendEncodings),
                                            this.setParametersPromises.push(
                                                r
                                                    .setParameters(s)
                                                    .then(function () {
                                                        delete r.sendEncodings;
                                                    })
                                                    .catch(function () {
                                                        delete r.sendEncodings;
                                                    }),
                                            ));
                                    }
                                    return i;
                                });
                        }
                    }),
                    (n.shimGetParameters = function (e) {
                        if ((void 0 === e ? "undefined" : i(e)) === "object" && e.RTCRtpSender) {
                            var t = e.RTCRtpSender.prototype.getParameters;
                            t &&
                                (e.RTCRtpSender.prototype.getParameters = function () {
                                    var e = t.apply(this, arguments);
                                    return "encodings" in e || (e.encodings = [].concat(this.sendEncodings || [{}])), e;
                                });
                        }
                    }),
                    (n.shimCreateOffer = function (e) {
                        if ((void 0 === e ? "undefined" : i(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.createOffer;
                            e.RTCPeerConnection.prototype.createOffer = function () {
                                var e = this,
                                    n = arguments;
                                return this.setParametersPromises && this.setParametersPromises.length
                                    ? Promise.all(this.setParametersPromises)
                                          .then(function () {
                                              return t.apply(e, n);
                                          })
                                          .finally(function () {
                                              e.setParametersPromises = [];
                                          })
                                    : t.apply(this, arguments);
                            };
                        }
                    }),
                    (n.shimCreateAnswer = function (e) {
                        if ((void 0 === e ? "undefined" : i(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype.createAnswer;
                            e.RTCPeerConnection.prototype.createAnswer = function () {
                                var e = this,
                                    n = arguments;
                                return this.setParametersPromises && this.setParametersPromises.length
                                    ? Promise.all(this.setParametersPromises)
                                          .then(function () {
                                              return t.apply(e, n);
                                          })
                                          .finally(function () {
                                              e.setParametersPromises = [];
                                          })
                                    : t.apply(this, arguments);
                            };
                        }
                    });
                var a = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                })(e("../utils"));
            },
            { "../utils": 11, "./getdisplaymedia": 8, "./getusermedia": 9 },
        ],
        8: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.shimGetDisplayMedia = function (e, t) {
                        (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
                            (e.navigator.mediaDevices &&
                                (e.navigator.mediaDevices.getDisplayMedia = function (n) {
                                    if (!(n && n.video)) {
                                        var i = new DOMException(
                                            "getDisplayMedia without video constraints is undefined",
                                        );
                                        return (i.name = "NotFoundError"), (i.code = 8), Promise.reject(i);
                                    }
                                    return (
                                        !0 === n.video ? (n.video = { mediaSource: t }) : (n.video.mediaSource = t),
                                        e.navigator.mediaDevices.getUserMedia(n)
                                    );
                                }));
                    });
            },
            {},
        ],
        9: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var i =
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
                          };
                n.shimGetUserMedia = function (e, t) {
                    var n = e && e.navigator,
                        s = e && e.MediaStreamTrack;
                    if (
                        ((n.getUserMedia = function (e, t, i) {
                            r.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
                                n.mediaDevices.getUserMedia(e).then(t, i);
                        }),
                        !(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints()))
                    ) {
                        var a = function (e, t, n) {
                                t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
                            },
                            o = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                        if (
                            ((n.mediaDevices.getUserMedia = function (e) {
                                return (
                                    (void 0 === e ? "undefined" : i(e)) === "object" &&
                                        "object" === i(e.audio) &&
                                        (a(
                                            (e = JSON.parse(JSON.stringify(e))).audio,
                                            "autoGainControl",
                                            "mozAutoGainControl",
                                        ),
                                        a(e.audio, "noiseSuppression", "mozNoiseSuppression")),
                                    o(e)
                                );
                            }),
                            s && s.prototype.getSettings)
                        ) {
                            var l = s.prototype.getSettings;
                            s.prototype.getSettings = function () {
                                var e = l.apply(this, arguments);
                                return (
                                    a(e, "mozAutoGainControl", "autoGainControl"),
                                    a(e, "mozNoiseSuppression", "noiseSuppression"),
                                    e
                                );
                            };
                        }
                        if (s && s.prototype.applyConstraints) {
                            var u = s.prototype.applyConstraints;
                            s.prototype.applyConstraints = function (e) {
                                return (
                                    "audio" === this.kind &&
                                        (void 0 === e ? "undefined" : i(e)) === "object" &&
                                        (a(
                                            (e = JSON.parse(JSON.stringify(e))),
                                            "autoGainControl",
                                            "mozAutoGainControl",
                                        ),
                                        a(e, "noiseSuppression", "mozNoiseSuppression")),
                                    u.apply(this, [e])
                                );
                            };
                        }
                    }
                };
                var r = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                })(e("../utils"));
            },
            { "../utils": 11 },
        ],
        10: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var i =
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
                          };
                (n.shimLocalStreamsAPI = function (e) {
                    if ((void 0 === e ? "undefined" : i(e)) === "object" && e.RTCPeerConnection) {
                        if (
                            ("getLocalStreams" in e.RTCPeerConnection.prototype ||
                                (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                                    return this._localStreams || (this._localStreams = []), this._localStreams;
                                }),
                            !("addStream" in e.RTCPeerConnection.prototype))
                        ) {
                            var t = e.RTCPeerConnection.prototype.addTrack;
                            (e.RTCPeerConnection.prototype.addStream = function (e) {
                                var n = this;
                                this._localStreams || (this._localStreams = []),
                                    this._localStreams.includes(e) || this._localStreams.push(e),
                                    e.getAudioTracks().forEach(function (i) {
                                        return t.call(n, i, e);
                                    }),
                                    e.getVideoTracks().forEach(function (i) {
                                        return t.call(n, i, e);
                                    });
                            }),
                                (e.RTCPeerConnection.prototype.addTrack = function (e) {
                                    for (
                                        var n = this, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), s = 1;
                                        s < i;
                                        s++
                                    )
                                        r[s - 1] = arguments[s];
                                    return (
                                        r &&
                                            r.forEach(function (e) {
                                                n._localStreams
                                                    ? n._localStreams.includes(e) || n._localStreams.push(e)
                                                    : (n._localStreams = [e]);
                                            }),
                                        t.apply(this, arguments)
                                    );
                                });
                        }
                        "removeStream" in e.RTCPeerConnection.prototype ||
                            (e.RTCPeerConnection.prototype.removeStream = function (e) {
                                var t = this;
                                this._localStreams || (this._localStreams = []);
                                var n = this._localStreams.indexOf(e);
                                if (-1 !== n) {
                                    this._localStreams.splice(n, 1);
                                    var i = e.getTracks();
                                    this.getSenders().forEach(function (e) {
                                        i.includes(e.track) && t.removeTrack(e);
                                    });
                                }
                            });
                    }
                }),
                    (n.shimRemoteStreamsAPI = function (e) {
                        if (
                            (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCPeerConnection &&
                            ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
                                (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                                    return this._remoteStreams ? this._remoteStreams : [];
                                }),
                            !("onaddstream" in e.RTCPeerConnection.prototype))
                        ) {
                            Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                                get: function () {
                                    return this._onaddstream;
                                },
                                set: function (e) {
                                    var t = this;
                                    this._onaddstream &&
                                        (this.removeEventListener("addstream", this._onaddstream),
                                        this.removeEventListener("track", this._onaddstreampoly)),
                                        this.addEventListener("addstream", (this._onaddstream = e)),
                                        this.addEventListener(
                                            "track",
                                            (this._onaddstreampoly = function (e) {
                                                e.streams.forEach(function (e) {
                                                    if (
                                                        (t._remoteStreams || (t._remoteStreams = []),
                                                        !t._remoteStreams.includes(e))
                                                    ) {
                                                        t._remoteStreams.push(e);
                                                        var n = new Event("addstream");
                                                        (n.stream = e), t.dispatchEvent(n);
                                                    }
                                                });
                                            }),
                                        );
                                },
                            });
                            var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                                var e = this;
                                return (
                                    this._onaddstreampoly ||
                                        this.addEventListener(
                                            "track",
                                            (this._onaddstreampoly = function (t) {
                                                t.streams.forEach(function (t) {
                                                    if (
                                                        (e._remoteStreams || (e._remoteStreams = []),
                                                        !(e._remoteStreams.indexOf(t) >= 0))
                                                    ) {
                                                        e._remoteStreams.push(t);
                                                        var n = new Event("addstream");
                                                        (n.stream = t), e.dispatchEvent(n);
                                                    }
                                                });
                                            }),
                                        ),
                                    t.apply(e, arguments)
                                );
                            };
                        }
                    }),
                    (n.shimCallbacksAPI = function (e) {
                        if ((void 0 === e ? "undefined" : i(e)) === "object" && e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection.prototype,
                                n = t.createOffer,
                                r = t.createAnswer,
                                s = t.setLocalDescription,
                                a = t.setRemoteDescription,
                                o = t.addIceCandidate;
                            (t.createOffer = function (e, t) {
                                var i = arguments.length >= 2 ? arguments[2] : arguments[0],
                                    r = n.apply(this, [i]);
                                return t ? (r.then(e, t), Promise.resolve()) : r;
                            }),
                                (t.createAnswer = function (e, t) {
                                    var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                                        i = r.apply(this, [n]);
                                    return t ? (i.then(e, t), Promise.resolve()) : i;
                                });
                            var l = function (e, t, n) {
                                var i = s.apply(this, [e]);
                                return n ? (i.then(t, n), Promise.resolve()) : i;
                            };
                            (t.setLocalDescription = l),
                                (t.setRemoteDescription = l =
                                    function (e, t, n) {
                                        var i = a.apply(this, [e]);
                                        return n ? (i.then(t, n), Promise.resolve()) : i;
                                    }),
                                (t.addIceCandidate = l =
                                    function (e, t, n) {
                                        var i = o.apply(this, [e]);
                                        return n ? (i.then(t, n), Promise.resolve()) : i;
                                    });
                        }
                    }),
                    (n.shimGetUserMedia = function (e) {
                        var t = e && e.navigator;
                        if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                            var n = t.mediaDevices,
                                i = n.getUserMedia.bind(n);
                            t.mediaDevices.getUserMedia = function (e) {
                                return i(s(e));
                            };
                        }
                        !t.getUserMedia &&
                            t.mediaDevices &&
                            t.mediaDevices.getUserMedia &&
                            (t.getUserMedia = function (e, n, i) {
                                t.mediaDevices.getUserMedia(e).then(n, i);
                            }.bind(t));
                    }),
                    (n.shimConstraints = s),
                    (n.shimRTCIceServerUrls = function (e) {
                        if (e.RTCPeerConnection) {
                            var t = e.RTCPeerConnection;
                            (e.RTCPeerConnection = function (e, n) {
                                if (e && e.iceServers) {
                                    for (var i = [], s = 0; s < e.iceServers.length; s++) {
                                        var a = e.iceServers[s];
                                        !a.hasOwnProperty("urls") && a.hasOwnProperty("url")
                                            ? (r.deprecated("RTCIceServer.url", "RTCIceServer.urls"),
                                              ((a = JSON.parse(JSON.stringify(a))).urls = a.url),
                                              delete a.url,
                                              i.push(a))
                                            : i.push(e.iceServers[s]);
                                    }
                                    e.iceServers = i;
                                }
                                return new t(e, n);
                            }),
                                (e.RTCPeerConnection.prototype = t.prototype),
                                "generateCertificate" in t &&
                                    Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                                        get: function () {
                                            return t.generateCertificate;
                                        },
                                    });
                        }
                    }),
                    (n.shimTrackEventTransceiver = function (e) {
                        (void 0 === e ? "undefined" : i(e)) === "object" &&
                            e.RTCTrackEvent &&
                            "receiver" in e.RTCTrackEvent.prototype &&
                            !("transceiver" in e.RTCTrackEvent.prototype) &&
                            Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                                get: function () {
                                    return { receiver: this.receiver };
                                },
                            });
                    }),
                    (n.shimCreateOfferLegacy = function (e) {
                        var t = e.RTCPeerConnection.prototype.createOffer;
                        e.RTCPeerConnection.prototype.createOffer = function (e) {
                            if (e) {
                                void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                                var n = this.getTransceivers().find(function (e) {
                                    return "audio" === e.receiver.track.kind;
                                });
                                !1 === e.offerToReceiveAudio && n
                                    ? "sendrecv" === n.direction
                                        ? n.setDirection
                                            ? n.setDirection("sendonly")
                                            : (n.direction = "sendonly")
                                        : "recvonly" === n.direction &&
                                          (n.setDirection ? n.setDirection("inactive") : (n.direction = "inactive"))
                                    : !0 !== e.offerToReceiveAudio || n || this.addTransceiver("audio"),
                                    void 0 !== e.offerToReceiveVideo &&
                                        (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                                var i = this.getTransceivers().find(function (e) {
                                    return "video" === e.receiver.track.kind;
                                });
                                !1 === e.offerToReceiveVideo && i
                                    ? "sendrecv" === i.direction
                                        ? i.setDirection
                                            ? i.setDirection("sendonly")
                                            : (i.direction = "sendonly")
                                        : "recvonly" === i.direction &&
                                          (i.setDirection ? i.setDirection("inactive") : (i.direction = "inactive"))
                                    : !0 !== e.offerToReceiveVideo || i || this.addTransceiver("video");
                            }
                            return t.apply(this, arguments);
                        };
                    }),
                    (n.shimAudioContext = function (e) {
                        (void 0 === e ? "undefined" : i(e)) !== "object" ||
                            e.AudioContext ||
                            (e.AudioContext = e.webkitAudioContext);
                    });
                var r = (function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return (t.default = e), t;
                })(e("../utils"));
                function s(e) {
                    return e && void 0 !== e.video ? Object.assign({}, e, { video: r.compactObject(e.video) }) : e;
                }
            },
            { "../utils": 11 },
        ],
        11: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var i =
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
                          };
                (n.extractVersion = a),
                    (n.wrapPeerConnectionEvent = function (e, t, n) {
                        if (e.RTCPeerConnection) {
                            var i = e.RTCPeerConnection.prototype,
                                r = i.addEventListener;
                            i.addEventListener = function (e, i) {
                                if (e !== t) return r.apply(this, arguments);
                                var s = function (e) {
                                    var t = n(e);
                                    t && (i.handleEvent ? i.handleEvent(t) : i(t));
                                };
                                return (
                                    (this._eventMap = this._eventMap || {}),
                                    this._eventMap[t] || (this._eventMap[t] = new Map()),
                                    this._eventMap[t].set(i, s),
                                    r.apply(this, [e, s])
                                );
                            };
                            var s = i.removeEventListener;
                            (i.removeEventListener = function (e, n) {
                                if (e !== t || !this._eventMap || !this._eventMap[t] || !this._eventMap[t].has(n))
                                    return s.apply(this, arguments);
                                var i = this._eventMap[t].get(n);
                                return (
                                    this._eventMap[t].delete(n),
                                    0 === this._eventMap[t].size && delete this._eventMap[t],
                                    0 === Object.keys(this._eventMap).length && delete this._eventMap,
                                    s.apply(this, [e, i])
                                );
                            }),
                                Object.defineProperty(i, "on" + t, {
                                    get: function () {
                                        return this["_on" + t];
                                    },
                                    set: function (e) {
                                        this["_on" + t] &&
                                            (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]),
                                            e && this.addEventListener(t, (this["_on" + t] = e));
                                    },
                                    enumerable: !0,
                                    configurable: !0,
                                });
                        }
                    }),
                    (n.disableLog = function (e) {
                        return "boolean" != typeof e
                            ? Error("Argument type: " + (void 0 === e ? "undefined" : i(e)) + ". Please use a boolean.")
                            : ((r = e), e ? "adapter.js logging disabled" : "adapter.js logging enabled");
                    }),
                    (n.disableWarnings = function (e) {
                        return "boolean" != typeof e
                            ? Error("Argument type: " + (void 0 === e ? "undefined" : i(e)) + ". Please use a boolean.")
                            : ((s = !e), "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
                    }),
                    (n.log = function () {
                        ("u" < typeof window ? "undefined" : i(window)) === "object" &&
                            !r &&
                            "u" > typeof console &&
                            "function" == typeof console.log &&
                            console.log.apply(console, arguments);
                    }),
                    (n.deprecated = function (e, t) {
                        s && console.warn(e + " is deprecated, please use " + t + " instead.");
                    }),
                    (n.detectBrowser = function (e) {
                        var t = { browser: null, version: null };
                        if (void 0 === e || !e.navigator) return (t.browser = "Not a browser."), t;
                        var n = e.navigator;
                        return (
                            n.mozGetUserMedia
                                ? ((t.browser = "firefox"), (t.version = a(n.userAgent, /Firefox\/(\d+)\./, 1)))
                                : n.webkitGetUserMedia ||
                                    (!1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer)
                                  ? ((t.browser = "chrome"), (t.version = a(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)))
                                  : n.mediaDevices && n.userAgent.match(/Edge\/(\d+).(\d+)$/)
                                    ? ((t.browser = "edge"), (t.version = a(n.userAgent, /Edge\/(\d+).(\d+)$/, 2)))
                                    : e.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./)
                                      ? ((t.browser = "safari"),
                                        (t.version = a(n.userAgent, /AppleWebKit\/(\d+)\./, 1)),
                                        (t.supportsUnifiedPlan =
                                            e.RTCRtpTransceiver && "currentDirection" in e.RTCRtpTransceiver.prototype))
                                      : (t.browser = "Not a supported browser."),
                            t
                        );
                    }),
                    (n.compactObject = function e(t) {
                        return o(t)
                            ? Object.keys(t).reduce(function (n, i) {
                                  var r,
                                      s = o(t[i]),
                                      a = s ? e(t[i]) : t[i],
                                      l = s && !Object.keys(a).length;
                                  return void 0 === a || l
                                      ? n
                                      : Object.assign(
                                            n,
                                            (i in (r = {})
                                                ? Object.defineProperty(r, i, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (r[i] = a),
                                            r),
                                        );
                              }, {})
                            : t;
                    }),
                    (n.walkStats = l),
                    (n.filterStats = function (e, t, n) {
                        var i = n ? "outbound-rtp" : "inbound-rtp",
                            r = new Map();
                        if (null === t) return r;
                        var s = [];
                        return (
                            e.forEach(function (e) {
                                "track" === e.type && e.trackIdentifier === t.id && s.push(e);
                            }),
                            s.forEach(function (t) {
                                e.forEach(function (n) {
                                    n.type === i && n.trackId === t.id && l(e, n, r);
                                });
                            }),
                            r
                        );
                    });
                var r = !0,
                    s = !0;
                function a(e, t, n) {
                    var i = e.match(t);
                    return i && i.length >= n && parseInt(i[n], 10);
                }
                function o(e) {
                    return "[object Object]" === Object.prototype.toString.call(e);
                }
                function l(e, t, n) {
                    !t ||
                        n.has(t.id) ||
                        (n.set(t.id, t),
                        Object.keys(t).forEach(function (i) {
                            i.endsWith("Id")
                                ? l(e, e.get(t[i]), n)
                                : i.endsWith("Ids") &&
                                  t[i].forEach(function (t) {
                                      l(e, e.get(t), n);
                                  });
                        }));
                }
            },
            {},
        ],
        12: [function (e, t, n) {}, {}],
        13: [
            function (e, t, n) {
                "use strict";
                var i = {};
                (i.generateIdentifier = function () {
                    return Math.random().toString(36).substr(2, 10);
                }),
                    (i.localCName = i.generateIdentifier()),
                    (i.splitLines = function (e) {
                        return e
                            .trim()
                            .split("\n")
                            .map(function (e) {
                                return e.trim();
                            });
                    }),
                    (i.splitSections = function (e) {
                        return e.split("\nm=").map(function (e, t) {
                            return (t > 0 ? "m=" + e : e).trim() + "\r\n";
                        });
                    }),
                    (i.getDescription = function (e) {
                        var t = i.splitSections(e);
                        return t && t[0];
                    }),
                    (i.getMediaSections = function (e) {
                        var t = i.splitSections(e);
                        return t.shift(), t;
                    }),
                    (i.matchPrefix = function (e, t) {
                        return i.splitLines(e).filter(function (e) {
                            return 0 === e.indexOf(t);
                        });
                    }),
                    (i.parseCandidate = function (e) {
                        for (
                            var t =
                                    0 === e.indexOf("a=candidate:")
                                        ? e.substring(12).split(" ")
                                        : e.substring(10).split(" "),
                                n = {
                                    foundation: t[0],
                                    component: parseInt(t[1], 10),
                                    protocol: t[2].toLowerCase(),
                                    priority: parseInt(t[3], 10),
                                    ip: t[4],
                                    address: t[4],
                                    port: parseInt(t[5], 10),
                                    type: t[7],
                                },
                                i = 8;
                            i < t.length;
                            i += 2
                        )
                            switch (t[i]) {
                                case "raddr":
                                    n.relatedAddress = t[i + 1];
                                    break;
                                case "rport":
                                    n.relatedPort = parseInt(t[i + 1], 10);
                                    break;
                                case "tcptype":
                                    n.tcpType = t[i + 1];
                                    break;
                                case "ufrag":
                                    (n.ufrag = t[i + 1]), (n.usernameFragment = t[i + 1]);
                                    break;
                                default:
                                    n[t[i]] = t[i + 1];
                            }
                        return n;
                    }),
                    (i.writeCandidate = function (e) {
                        var t = [];
                        t.push(e.foundation),
                            t.push(e.component),
                            t.push(e.protocol.toUpperCase()),
                            t.push(e.priority),
                            t.push(e.address || e.ip),
                            t.push(e.port);
                        var n = e.type;
                        return (
                            t.push("typ"),
                            t.push(n),
                            "host" !== n &&
                                e.relatedAddress &&
                                e.relatedPort &&
                                (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)),
                            e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)),
                            (e.usernameFragment || e.ufrag) && (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
                            "candidate:" + t.join(" ")
                        );
                    }),
                    (i.parseIceOptions = function (e) {
                        return e.substr(14).split(" ");
                    }),
                    (i.parseRtpMap = function (e) {
                        var t = e.substr(9).split(" "),
                            n = { payloadType: parseInt(t.shift(), 10) };
                        return (
                            (n.name = (t = t[0].split("/"))[0]),
                            (n.clockRate = parseInt(t[1], 10)),
                            (n.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
                            (n.numChannels = n.channels),
                            n
                        );
                    }),
                    (i.writeRtpMap = function (e) {
                        var t = e.payloadType;
                        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
                        var n = e.channels || e.numChannels || 1;
                        return "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== n ? "/" + n : "") + "\r\n";
                    }),
                    (i.parseExtmap = function (e) {
                        var t = e.substr(9).split(" ");
                        return {
                            id: parseInt(t[0], 10),
                            direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                            uri: t[1],
                        };
                    }),
                    (i.writeExtmap = function (e) {
                        return (
                            "a=extmap:" +
                            (e.id || e.preferredId) +
                            (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") +
                            " " +
                            e.uri +
                            "\r\n"
                        );
                    }),
                    (i.parseFmtp = function (e) {
                        for (var t, n = {}, i = e.substr(e.indexOf(" ") + 1).split(";"), r = 0; r < i.length; r++)
                            n[(t = i[r].trim().split("="))[0].trim()] = t[1];
                        return n;
                    }),
                    (i.writeFmtp = function (e) {
                        var t = "",
                            n = e.payloadType;
                        if (
                            (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType),
                            e.parameters && Object.keys(e.parameters).length)
                        ) {
                            var i = [];
                            Object.keys(e.parameters).forEach(function (t) {
                                e.parameters[t] ? i.push(t + "=" + e.parameters[t]) : i.push(t);
                            }),
                                (t += "a=fmtp:" + n + " " + i.join(";") + "\r\n");
                        }
                        return t;
                    }),
                    (i.parseRtcpFb = function (e) {
                        var t = e.substr(e.indexOf(" ") + 1).split(" ");
                        return { type: t.shift(), parameter: t.join(" ") };
                    }),
                    (i.writeRtcpFb = function (e) {
                        var t = "",
                            n = e.payloadType;
                        return (
                            void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType),
                            e.rtcpFeedback &&
                                e.rtcpFeedback.length &&
                                e.rtcpFeedback.forEach(function (e) {
                                    t +=
                                        "a=rtcp-fb:" +
                                        n +
                                        " " +
                                        e.type +
                                        (e.parameter && e.parameter.length ? " " + e.parameter : "") +
                                        "\r\n";
                                }),
                            t
                        );
                    }),
                    (i.parseSsrcMedia = function (e) {
                        var t = e.indexOf(" "),
                            n = { ssrc: parseInt(e.substr(7, t - 7), 10) },
                            i = e.indexOf(":", t);
                        return (
                            i > -1
                                ? ((n.attribute = e.substr(t + 1, i - t - 1)), (n.value = e.substr(i + 1)))
                                : (n.attribute = e.substr(t + 1)),
                            n
                        );
                    }),
                    (i.parseSsrcGroup = function (e) {
                        var t = e.substr(13).split(" ");
                        return {
                            semantics: t.shift(),
                            ssrcs: t.map(function (e) {
                                return parseInt(e, 10);
                            }),
                        };
                    }),
                    (i.getMid = function (e) {
                        var t = i.matchPrefix(e, "a=mid:")[0];
                        if (t) return t.substr(6);
                    }),
                    (i.parseFingerprint = function (e) {
                        var t = e.substr(14).split(" ");
                        return { algorithm: t[0].toLowerCase(), value: t[1] };
                    }),
                    (i.getDtlsParameters = function (e, t) {
                        return {
                            role: "auto",
                            fingerprints: i.matchPrefix(e + t, "a=fingerprint:").map(i.parseFingerprint),
                        };
                    }),
                    (i.writeDtlsParameters = function (e, t) {
                        var n = "a=setup:" + t + "\r\n";
                        return (
                            e.fingerprints.forEach(function (e) {
                                n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
                            }),
                            n
                        );
                    }),
                    (i.parseCryptoLine = function (e) {
                        var t = e.substr(9).split(" ");
                        return {
                            tag: parseInt(t[0], 10),
                            cryptoSuite: t[1],
                            keyParams: t[2],
                            sessionParams: t.slice(3),
                        };
                    }),
                    (i.writeCryptoLine = function (e) {
                        return (
                            "a=crypto:" +
                            e.tag +
                            " " +
                            e.cryptoSuite +
                            " " +
                            ("object" == typeof e.keyParams ? i.writeCryptoKeyParams(e.keyParams) : e.keyParams) +
                            (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
                            "\r\n"
                        );
                    }),
                    (i.parseCryptoKeyParams = function (e) {
                        if (0 !== e.indexOf("inline:")) return null;
                        var t = e.substr(7).split("|");
                        return {
                            keyMethod: "inline",
                            keySalt: t[0],
                            lifeTime: t[1],
                            mkiValue: t[2] ? t[2].split(":")[0] : void 0,
                            mkiLength: t[2] ? t[2].split(":")[1] : void 0,
                        };
                    }),
                    (i.writeCryptoKeyParams = function (e) {
                        return (
                            e.keyMethod +
                            ":" +
                            e.keySalt +
                            (e.lifeTime ? "|" + e.lifeTime : "") +
                            (e.mkiValue && e.mkiLength ? "|" + e.mkiValue + ":" + e.mkiLength : "")
                        );
                    }),
                    (i.getCryptoParameters = function (e, t) {
                        return i.matchPrefix(e + t, "a=crypto:").map(i.parseCryptoLine);
                    }),
                    (i.getIceParameters = function (e, t) {
                        var n = i.matchPrefix(e + t, "a=ice-ufrag:")[0],
                            r = i.matchPrefix(e + t, "a=ice-pwd:")[0];
                        return n && r ? { usernameFragment: n.substr(12), password: r.substr(10) } : null;
                    }),
                    (i.writeIceParameters = function (e) {
                        return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n";
                    }),
                    (i.parseRtpParameters = function (e) {
                        for (
                            var t = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] },
                                n = i.splitLines(e)[0].split(" "),
                                r = 3;
                            r < n.length;
                            r++
                        ) {
                            var s = n[r],
                                a = i.matchPrefix(e, "a=rtpmap:" + s + " ")[0];
                            if (a) {
                                var o = i.parseRtpMap(a),
                                    l = i.matchPrefix(e, "a=fmtp:" + s + " ");
                                switch (
                                    ((o.parameters = l.length ? i.parseFmtp(l[0]) : {}),
                                    (o.rtcpFeedback = i.matchPrefix(e, "a=rtcp-fb:" + s + " ").map(i.parseRtcpFb)),
                                    t.codecs.push(o),
                                    o.name.toUpperCase())
                                ) {
                                    case "RED":
                                    case "ULPFEC":
                                        t.fecMechanisms.push(o.name.toUpperCase());
                                }
                            }
                        }
                        return (
                            i.matchPrefix(e, "a=extmap:").forEach(function (e) {
                                t.headerExtensions.push(i.parseExtmap(e));
                            }),
                            t
                        );
                    }),
                    (i.writeRtpDescription = function (e, t) {
                        var n = "";
                        (n += "m=" + e + " "),
                            (n += t.codecs.length > 0 ? "9" : "0"),
                            (n += " UDP/TLS/RTP/SAVPF "),
                            (n +=
                                t.codecs
                                    .map(function (e) {
                                        return void 0 !== e.preferredPayloadType
                                            ? e.preferredPayloadType
                                            : e.payloadType;
                                    })
                                    .join(" ") + "\r\n"),
                            (n += "c=IN IP4 0.0.0.0\r\n"),
                            (n += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
                            t.codecs.forEach(function (e) {
                                (n += i.writeRtpMap(e)), (n += i.writeFmtp(e)), (n += i.writeRtcpFb(e));
                            });
                        var r = 0;
                        return (
                            t.codecs.forEach(function (e) {
                                e.maxptime > r && (r = e.maxptime);
                            }),
                            r > 0 && (n += "a=maxptime:" + r + "\r\n"),
                            (n += "a=rtcp-mux\r\n"),
                            t.headerExtensions &&
                                t.headerExtensions.forEach(function (e) {
                                    n += i.writeExtmap(e);
                                }),
                            n
                        );
                    }),
                    (i.parseRtpEncodingParameters = function (e) {
                        var t,
                            n = [],
                            r = i.parseRtpParameters(e),
                            s = -1 !== r.fecMechanisms.indexOf("RED"),
                            a = -1 !== r.fecMechanisms.indexOf("ULPFEC"),
                            o = i
                                .matchPrefix(e, "a=ssrc:")
                                .map(function (e) {
                                    return i.parseSsrcMedia(e);
                                })
                                .filter(function (e) {
                                    return "cname" === e.attribute;
                                }),
                            l = o.length > 0 && o[0].ssrc,
                            u = i.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                                return e
                                    .substr(17)
                                    .split(" ")
                                    .map(function (e) {
                                        return parseInt(e, 10);
                                    });
                            });
                        u.length > 0 && u[0].length > 1 && u[0][0] === l && (t = u[0][1]),
                            r.codecs.forEach(function (e) {
                                if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                                    var i = { ssrc: l, codecPayloadType: parseInt(e.parameters.apt, 10) };
                                    l && t && (i.rtx = { ssrc: t }),
                                        n.push(i),
                                        s &&
                                            (((i = JSON.parse(JSON.stringify(i))).fec = {
                                                ssrc: l,
                                                mechanism: a ? "red+ulpfec" : "red",
                                            }),
                                            n.push(i));
                                }
                            }),
                            0 === n.length && l && n.push({ ssrc: l });
                        var c = i.matchPrefix(e, "b=");
                        return (
                            c.length &&
                                ((c =
                                    0 === c[0].indexOf("b=TIAS:")
                                        ? parseInt(c[0].substr(7), 10)
                                        : 0 === c[0].indexOf("b=AS:")
                                          ? 1e3 * parseInt(c[0].substr(5), 10) * 0.95 - 16e3
                                          : void 0),
                                n.forEach(function (e) {
                                    e.maxBitrate = c;
                                })),
                            n
                        );
                    }),
                    (i.parseRtcpParameters = function (e) {
                        var t = {},
                            n = i
                                .matchPrefix(e, "a=ssrc:")
                                .map(function (e) {
                                    return i.parseSsrcMedia(e);
                                })
                                .filter(function (e) {
                                    return "cname" === e.attribute;
                                })[0];
                        n && ((t.cname = n.value), (t.ssrc = n.ssrc));
                        var r = i.matchPrefix(e, "a=rtcp-rsize");
                        return (
                            (t.reducedSize = r.length > 0),
                            (t.compound = 0 === r.length),
                            (t.mux = i.matchPrefix(e, "a=rtcp-mux").length > 0),
                            t
                        );
                    }),
                    (i.parseMsid = function (e) {
                        var t,
                            n = i.matchPrefix(e, "a=msid:");
                        if (1 === n.length) return { stream: (t = n[0].substr(7).split(" "))[0], track: t[1] };
                        var r = i
                            .matchPrefix(e, "a=ssrc:")
                            .map(function (e) {
                                return i.parseSsrcMedia(e);
                            })
                            .filter(function (e) {
                                return "msid" === e.attribute;
                            });
                        if (r.length > 0) return { stream: (t = r[0].value.split(" "))[0], track: t[1] };
                    }),
                    (i.parseSctpDescription = function (e) {
                        var t,
                            n = i.parseMLine(e),
                            r = i.matchPrefix(e, "a=max-message-size:");
                        r.length > 0 && (t = parseInt(r[0].substr(19), 10)), isNaN(t) && (t = 65536);
                        var s = i.matchPrefix(e, "a=sctp-port:");
                        if (s.length > 0)
                            return { port: parseInt(s[0].substr(12), 10), protocol: n.fmt, maxMessageSize: t };
                        if (i.matchPrefix(e, "a=sctpmap:").length > 0) {
                            var a = i.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
                            return { port: parseInt(a[0], 10), protocol: a[1], maxMessageSize: t };
                        }
                    }),
                    (i.writeSctpDescription = function (e, t) {
                        var n = [];
                        return (
                            (n =
                                "DTLS/SCTP" !== e.protocol
                                    ? [
                                          "m=" + e.kind + " 9 " + e.protocol + " " + t.protocol + "\r\n",
                                          "c=IN IP4 0.0.0.0\r\n",
                                          "a=sctp-port:" + t.port + "\r\n",
                                      ]
                                    : [
                                          "m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n",
                                          "c=IN IP4 0.0.0.0\r\n",
                                          "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n",
                                      ]),
                            void 0 !== t.maxMessageSize && n.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
                            n.join("")
                        );
                    }),
                    (i.generateSessionId = function () {
                        return Math.random().toString().substr(2, 21);
                    }),
                    (i.writeSessionBoilerplate = function (e, t, n) {
                        return (
                            "v=0\r\no=" +
                            (n || "thisisadapterortc") +
                            " " +
                            (e || i.generateSessionId()) +
                            " " +
                            (void 0 !== t ? t : 2) +
                            " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                        );
                    }),
                    (i.writeMediaSection = function (e, t, n, r) {
                        var s = i.writeRtpDescription(e.kind, t);
                        if (
                            ((s += i.writeIceParameters(e.iceGatherer.getLocalParameters())),
                            (s += i.writeDtlsParameters(
                                e.dtlsTransport.getLocalParameters(),
                                "offer" === n ? "actpass" : "active",
                            )),
                            (s += "a=mid:" + e.mid + "\r\n"),
                            e.direction
                                ? (s += "a=" + e.direction + "\r\n")
                                : e.rtpSender && e.rtpReceiver
                                  ? (s += "a=sendrecv\r\n")
                                  : e.rtpSender
                                    ? (s += "a=sendonly\r\n")
                                    : e.rtpReceiver
                                      ? (s += "a=recvonly\r\n")
                                      : (s += "a=inactive\r\n"),
                            e.rtpSender)
                        ) {
                            var a = "msid:" + r.id + " " + e.rtpSender.track.id + "\r\n";
                            (s += "a=" + a),
                                (s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a),
                                e.sendEncodingParameters[0].rtx &&
                                    ((s += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a),
                                    (s +=
                                        "a=ssrc-group:FID " +
                                        e.sendEncodingParameters[0].ssrc +
                                        " " +
                                        e.sendEncodingParameters[0].rtx.ssrc +
                                        "\r\n"));
                        }
                        return (
                            (s += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + i.localCName + "\r\n"),
                            e.rtpSender &&
                                e.sendEncodingParameters[0].rtx &&
                                (s +=
                                    "a=ssrc:" +
                                    e.sendEncodingParameters[0].rtx.ssrc +
                                    " cname:" +
                                    i.localCName +
                                    "\r\n"),
                            s
                        );
                    }),
                    (i.getDirection = function (e, t) {
                        for (var n = i.splitLines(e), r = 0; r < n.length; r++)
                            switch (n[r]) {
                                case "a=sendrecv":
                                case "a=sendonly":
                                case "a=recvonly":
                                case "a=inactive":
                                    return n[r].substr(2);
                            }
                        return t ? i.getDirection(t) : "sendrecv";
                    }),
                    (i.getKind = function (e) {
                        return i.splitLines(e)[0].split(" ")[0].substr(2);
                    }),
                    (i.isRejected = function (e) {
                        return "0" === e.split(" ", 2)[1];
                    }),
                    (i.parseMLine = function (e) {
                        var t = i.splitLines(e)[0].substr(2).split(" ");
                        return { kind: t[0], port: parseInt(t[1], 10), protocol: t[2], fmt: t.slice(3).join(" ") };
                    }),
                    (i.parseOLine = function (e) {
                        var t = i.matchPrefix(e, "o=")[0].substr(2).split(" ");
                        return {
                            username: t[0],
                            sessionId: t[1],
                            sessionVersion: parseInt(t[2], 10),
                            netType: t[3],
                            addressType: t[4],
                            address: t[5],
                        };
                    }),
                    (i.isValidSDP = function (e) {
                        if ("string" != typeof e || 0 === e.length) return !1;
                        for (var t = i.splitLines(e), n = 0; n < t.length; n++)
                            if (t[n].length < 2 || "=" !== t[n].charAt(1)) return !1;
                        return !0;
                    }),
                    "object" == typeof t && (t.exports = i);
            },
            {},
        ],
    },
    {},
    [1],
);
