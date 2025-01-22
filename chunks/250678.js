(function () {
    function e(n, r, i) {
        function a(s, l) {
            if (!r[s]) {
                if (!n[s]) {
                    var u = void 0;
                    if (!l && u) return require(s, !0);
                    if (o) return o(s, !0);
                    var c = Error("Cannot find module '" + s + "'");
                    throw ((c.code = 'MODULE_NOT_FOUND'), c);
                }
                var d = (r[s] = { exports: {} });
                n[s][0].call(
                    d.exports,
                    function (e) {
                        return a(n[s][1][e] || e);
                    },
                    d,
                    d.exports,
                    e,
                    n,
                    r,
                    i
                );
            }
            return r[s].exports;
        }
        for (var o = void 0, s = 0; s < i.length; s++) a(i[s]);
        return a;
    }
    return e;
})()(
    {
        1: [
            function (e, n, r) {
                var i = (0, e('./adapter_factory.js').adapterFactory)({ window: window });
                n.exports = i;
            },
            { './adapter_factory.js': 2 }
        ],
        2: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 }), (r.adapterFactory = d);
                var i = c(e('./utils')),
                    a = c(e('./chrome/chrome_shim')),
                    o = c(e('./edge/edge_shim')),
                    s = c(e('./firefox/firefox_shim')),
                    l = c(e('./safari/safari_shim')),
                    u = c(e('./common_shim'));
                function c(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return (n.default = e), n;
                }
                function d() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.window,
                        r =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {
                                      shimChrome: !0,
                                      shimFirefox: !0,
                                      shimEdge: !0,
                                      shimSafari: !0
                                  },
                        c = i.log,
                        d = i.detectBrowser(n),
                        f = {
                            browserDetails: d,
                            commonShim: u,
                            extractVersion: i.extractVersion,
                            disableLog: i.disableLog,
                            disableWarnings: i.disableWarnings
                        };
                    switch (d.browser) {
                        case 'chrome':
                            if (!a || !a.shimPeerConnection || !r.shimChrome) {
                                c('Chrome shim is not included in this adapter release.');
                                break;
                            }
                            c('adapter.js shimming chrome.'), (f.browserShim = a), a.shimGetUserMedia(n), a.shimMediaStream(n), a.shimPeerConnection(n), a.shimOnTrack(n), a.shimAddTrackRemoveTrack(n), a.shimGetSendersWithDtmf(n), a.shimGetStats(n), a.shimSenderReceiverGetStats(n), a.fixNegotiationNeeded(n), u.shimRTCIceCandidate(n), u.shimConnectionState(n), u.shimMaxMessageSize(n), u.shimSendThrowTypeError(n), u.removeAllowExtmapMixed(n);
                            break;
                        case 'firefox':
                            if (!s || !s.shimPeerConnection || !r.shimFirefox) {
                                c('Firefox shim is not included in this adapter release.');
                                break;
                            }
                            c('adapter.js shimming firefox.'), (f.browserShim = s), s.shimGetUserMedia(n), s.shimPeerConnection(n), s.shimOnTrack(n), s.shimRemoveStream(n), s.shimSenderGetStats(n), s.shimReceiverGetStats(n), s.shimRTCDataChannel(n), s.shimAddTransceiver(n), s.shimCreateOffer(n), s.shimCreateAnswer(n), u.shimRTCIceCandidate(n), u.shimConnectionState(n), u.shimMaxMessageSize(n), u.shimSendThrowTypeError(n);
                            break;
                        case 'edge':
                            if (!o || !o.shimPeerConnection || !r.shimEdge) {
                                c('MS edge shim is not included in this adapter release.');
                                break;
                            }
                            c('adapter.js shimming edge.'), (f.browserShim = o), o.shimGetUserMedia(n), o.shimGetDisplayMedia(n), o.shimPeerConnection(n), o.shimReplaceTrack(n), u.shimMaxMessageSize(n), u.shimSendThrowTypeError(n);
                            break;
                        case 'safari':
                            if (!l || !r.shimSafari) {
                                c('Safari shim is not included in this adapter release.');
                                break;
                            }
                            c('adapter.js shimming safari.'), (f.browserShim = l), l.shimRTCIceServerUrls(n), l.shimCreateOfferLegacy(n), l.shimCallbacksAPI(n), l.shimLocalStreamsAPI(n), l.shimRemoteStreamsAPI(n), l.shimTrackEventTransceiver(n), l.shimGetUserMedia(n), u.shimRTCIceCandidate(n), u.shimMaxMessageSize(n), u.shimSendThrowTypeError(n), u.removeAllowExtmapMixed(n);
                            break;
                        default:
                            c('Unsupported browser!');
                    }
                    return f;
                }
            },
            {
                './chrome/chrome_shim': 3,
                './common_shim': 6,
                './edge/edge_shim': 12,
                './firefox/firefox_shim': 7,
                './safari/safari_shim': 10,
                './utils': 11
            }
        ],
        3: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 }), (r.shimGetDisplayMedia = r.shimGetUserMedia = void 0);
                var i =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                              },
                    a = e('./getusermedia');
                Object.defineProperty(r, 'shimGetUserMedia', {
                    enumerable: !0,
                    get: function () {
                        return a.shimGetUserMedia;
                    }
                });
                var o = e('./getdisplaymedia');
                Object.defineProperty(r, 'shimGetDisplayMedia', {
                    enumerable: !0,
                    get: function () {
                        return o.shimGetDisplayMedia;
                    }
                }),
                    (r.shimMediaStream = c),
                    (r.shimOnTrack = d),
                    (r.shimGetSendersWithDtmf = f),
                    (r.shimGetStats = p),
                    (r.shimSenderReceiverGetStats = h),
                    (r.shimAddTrackRemoveTrackWithNative = _),
                    (r.shimAddTrackRemoveTrack = m),
                    (r.shimPeerConnection = g),
                    (r.fixNegotiationNeeded = E);
                var s = l(e('../utils.js'));
                function l(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return (n.default = e), n;
                }
                function u(e, n, r) {
                    return (
                        n in e
                            ? Object.defineProperty(e, n, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[n] = r),
                        e
                    );
                }
                function c(e) {
                    e.MediaStream = e.MediaStream || e.webkitMediaStream;
                }
                function d(e) {
                    if ((void 0 === e ? 'undefined' : i(e)) !== 'object' || !e.RTCPeerConnection || 'ontrack' in e.RTCPeerConnection.prototype)
                        s.wrapPeerConnectionEvent(e, 'track', function (e) {
                            return !e.transceiver && Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } }), e;
                        });
                    else {
                        Object.defineProperty(e.RTCPeerConnection.prototype, 'ontrack', {
                            get: function () {
                                return this._ontrack;
                            },
                            set: function (e) {
                                this._ontrack && this.removeEventListener('track', this._ontrack), this.addEventListener('track', (this._ontrack = e));
                            },
                            enumerable: !0,
                            configurable: !0
                        });
                        var n = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                            var r = this;
                            return (
                                !this._ontrackpoly &&
                                    ((this._ontrackpoly = function (n) {
                                        n.stream.addEventListener('addtrack', function (i) {
                                            var a = void 0;
                                            a = e.RTCPeerConnection.prototype.getReceivers
                                                ? r.getReceivers().find(function (e) {
                                                      return e.track && e.track.id === i.track.id;
                                                  })
                                                : { track: i.track };
                                            var o = new Event('track');
                                            (o.track = i.track), (o.receiver = a), (o.transceiver = { receiver: a }), (o.streams = [n.stream]), r.dispatchEvent(o);
                                        }),
                                            n.stream.getTracks().forEach(function (i) {
                                                var a = void 0;
                                                a = e.RTCPeerConnection.prototype.getReceivers
                                                    ? r.getReceivers().find(function (e) {
                                                          return e.track && e.track.id === i.id;
                                                      })
                                                    : { track: i };
                                                var o = new Event('track');
                                                (o.track = i), (o.receiver = a), (o.transceiver = { receiver: a }), (o.streams = [n.stream]), r.dispatchEvent(o);
                                            });
                                    }),
                                    this.addEventListener('addstream', this._ontrackpoly)),
                                n.apply(this, arguments)
                            );
                        };
                    }
                }
                function f(e) {
                    if ((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection && !('getSenders' in e.RTCPeerConnection.prototype) && 'createDTMFSender' in e.RTCPeerConnection.prototype) {
                        var n = function (e, n) {
                            return {
                                track: n,
                                get dtmf() {
                                    return void 0 === this._dtmf && ('audio' === n.kind ? (this._dtmf = e.createDTMFSender(n)) : (this._dtmf = null)), this._dtmf;
                                },
                                _pc: e
                            };
                        };
                        if (!e.RTCPeerConnection.prototype.getSenders) {
                            e.RTCPeerConnection.prototype.getSenders = function () {
                                return (this._senders = this._senders || []), this._senders.slice();
                            };
                            var r = e.RTCPeerConnection.prototype.addTrack;
                            e.RTCPeerConnection.prototype.addTrack = function (e, i) {
                                var a = r.apply(this, arguments);
                                return !a && ((a = n(this, e)), this._senders.push(a)), a;
                            };
                            var a = e.RTCPeerConnection.prototype.removeTrack;
                            e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                a.apply(this, arguments);
                                var n = this._senders.indexOf(e);
                                -1 !== n && this._senders.splice(n, 1);
                            };
                        }
                        var o = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function (e) {
                            var r = this;
                            (this._senders = this._senders || []),
                                o.apply(this, [e]),
                                e.getTracks().forEach(function (e) {
                                    r._senders.push(n(r, e));
                                });
                        };
                        var s = e.RTCPeerConnection.prototype.removeStream;
                        e.RTCPeerConnection.prototype.removeStream = function (e) {
                            var n = this;
                            (this._senders = this._senders || []),
                                s.apply(this, [e]),
                                e.getTracks().forEach(function (e) {
                                    var r = n._senders.find(function (n) {
                                        return n.track === e;
                                    });
                                    r && n._senders.splice(n._senders.indexOf(r), 1);
                                });
                        };
                    } else if ((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection && 'getSenders' in e.RTCPeerConnection.prototype && 'createDTMFSender' in e.RTCPeerConnection.prototype && e.RTCRtpSender && !('dtmf' in e.RTCRtpSender.prototype)) {
                        var l = e.RTCPeerConnection.prototype.getSenders;
                        (e.RTCPeerConnection.prototype.getSenders = function () {
                            var e = this,
                                n = l.apply(this, []);
                            return (
                                n.forEach(function (n) {
                                    return (n._pc = e);
                                }),
                                n
                            );
                        }),
                            Object.defineProperty(e.RTCRtpSender.prototype, 'dtmf', {
                                get: function () {
                                    return void 0 === this._dtmf && ('audio' === this.track.kind ? (this._dtmf = this._pc.createDTMFSender(this.track)) : (this._dtmf = null)), this._dtmf;
                                }
                            });
                    }
                }
                function p(e) {
                    if (!!e.RTCPeerConnection) {
                        var n = e.RTCPeerConnection.prototype.getStats;
                        e.RTCPeerConnection.prototype.getStats = function () {
                            var e = this,
                                r = Array.prototype.slice.call(arguments),
                                i = r[0],
                                a = r[1],
                                o = r[2];
                            if (arguments.length > 0 && 'function' == typeof i) return n.apply(this, arguments);
                            if (0 === n.length && (0 == arguments.length || 'function' != typeof i)) return n.apply(this, []);
                            var s = function (e) {
                                    var n = {};
                                    return (
                                        e.result().forEach(function (e) {
                                            var r = {
                                                id: e.id,
                                                timestamp: e.timestamp,
                                                type:
                                                    {
                                                        localcandidate: 'local-candidate',
                                                        remotecandidate: 'remote-candidate'
                                                    }[e.type] || e.type
                                            };
                                            e.names().forEach(function (n) {
                                                r[n] = e.stat(n);
                                            }),
                                                (n[r.id] = r);
                                        }),
                                        n
                                    );
                                },
                                l = function (e) {
                                    return new Map(
                                        Object.keys(e).map(function (n) {
                                            return [n, e[n]];
                                        })
                                    );
                                };
                            if (arguments.length >= 2) {
                                var u = function (e) {
                                    a(l(s(e)));
                                };
                                return n.apply(this, [u, i]);
                            }
                            return new Promise(function (r, i) {
                                n.apply(e, [
                                    function (e) {
                                        r(l(s(e)));
                                    },
                                    i
                                ]);
                            }).then(a, o);
                        };
                    }
                }
                function h(e) {
                    if (!((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return;
                    if (!('getStats' in e.RTCRtpSender.prototype)) {
                        var n = e.RTCPeerConnection.prototype.getSenders;
                        n &&
                            (e.RTCPeerConnection.prototype.getSenders = function () {
                                var e = this,
                                    r = n.apply(this, []);
                                return (
                                    r.forEach(function (n) {
                                        return (n._pc = e);
                                    }),
                                    r
                                );
                            });
                        var r = e.RTCPeerConnection.prototype.addTrack;
                        r &&
                            (e.RTCPeerConnection.prototype.addTrack = function () {
                                var e = r.apply(this, arguments);
                                return (e._pc = this), e;
                            }),
                            (e.RTCRtpSender.prototype.getStats = function () {
                                var e = this;
                                return this._pc.getStats().then(function (n) {
                                    return s.filterStats(n, e.track, !0);
                                });
                            });
                    }
                    if (!('getStats' in e.RTCRtpReceiver.prototype)) {
                        var a = e.RTCPeerConnection.prototype.getReceivers;
                        a &&
                            (e.RTCPeerConnection.prototype.getReceivers = function () {
                                var e = this,
                                    n = a.apply(this, []);
                                return (
                                    n.forEach(function (n) {
                                        return (n._pc = e);
                                    }),
                                    n
                                );
                            }),
                            s.wrapPeerConnectionEvent(e, 'track', function (e) {
                                return (e.receiver._pc = e.srcElement), e;
                            }),
                            (e.RTCRtpReceiver.prototype.getStats = function () {
                                var e = this;
                                return this._pc.getStats().then(function (n) {
                                    return s.filterStats(n, e.track, !1);
                                });
                            });
                    }
                    if (!!('getStats' in e.RTCRtpSender.prototype && 'getStats' in e.RTCRtpReceiver.prototype)) {
                        var o = e.RTCPeerConnection.prototype.getStats;
                        e.RTCPeerConnection.prototype.getStats = function () {
                            if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
                                var n = arguments[0],
                                    r = void 0,
                                    i = void 0,
                                    a = void 0;
                                if (
                                    (this.getSenders().forEach(function (e) {
                                        e.track === n && (r ? (a = !0) : (r = e));
                                    }),
                                    this.getReceivers().forEach(function (e) {
                                        return e.track === n && (i ? (a = !0) : (i = e)), e.track === n;
                                    }),
                                    a || (r && i))
                                )
                                    return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
                                if (r) return r.getStats();
                                else if (i) return i.getStats();
                                return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
                            }
                            return o.apply(this, arguments);
                        };
                    }
                }
                function _(e) {
                    e.RTCPeerConnection.prototype.getLocalStreams = function () {
                        var e = this;
                        return (
                            (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                            Object.keys(this._shimmedLocalStreams).map(function (n) {
                                return e._shimmedLocalStreams[n][0];
                            })
                        );
                    };
                    var n = e.RTCPeerConnection.prototype.addTrack;
                    e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                        if (!r) return n.apply(this, arguments);
                        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                        var i = n.apply(this, arguments);
                        return this._shimmedLocalStreams[r.id] ? -1 === this._shimmedLocalStreams[r.id].indexOf(i) && this._shimmedLocalStreams[r.id].push(i) : (this._shimmedLocalStreams[r.id] = [r, i]), i;
                    };
                    var r = e.RTCPeerConnection.prototype.addStream;
                    e.RTCPeerConnection.prototype.addStream = function (e) {
                        var n = this;
                        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                            e.getTracks().forEach(function (e) {
                                if (
                                    n.getSenders().find(function (n) {
                                        return n.track === e;
                                    })
                                )
                                    throw new DOMException('Track already exists.', 'InvalidAccessError');
                            });
                        var i = this.getSenders();
                        r.apply(this, arguments);
                        var a = this.getSenders().filter(function (e) {
                            return -1 === i.indexOf(e);
                        });
                        this._shimmedLocalStreams[e.id] = [e].concat(a);
                    };
                    var i = e.RTCPeerConnection.prototype.removeStream;
                    e.RTCPeerConnection.prototype.removeStream = function (e) {
                        return (this._shimmedLocalStreams = this._shimmedLocalStreams || {}), delete this._shimmedLocalStreams[e.id], i.apply(this, arguments);
                    };
                    var a = e.RTCPeerConnection.prototype.removeTrack;
                    e.RTCPeerConnection.prototype.removeTrack = function (e) {
                        var n = this;
                        return (
                            (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                            e &&
                                Object.keys(this._shimmedLocalStreams).forEach(function (r) {
                                    var i = n._shimmedLocalStreams[r].indexOf(e);
                                    -1 !== i && n._shimmedLocalStreams[r].splice(i, 1), 1 === n._shimmedLocalStreams[r].length && delete n._shimmedLocalStreams[r];
                                }),
                            a.apply(this, arguments)
                        );
                    };
                }
                function m(e) {
                    if (!!e.RTCPeerConnection) {
                        var n = s.detectBrowser(e);
                        if (e.RTCPeerConnection.prototype.addTrack && n.version >= 65) return _(e);
                        var r = e.RTCPeerConnection.prototype.getLocalStreams;
                        e.RTCPeerConnection.prototype.getLocalStreams = function () {
                            var e = this,
                                n = r.apply(this);
                            return (
                                (this._reverseStreams = this._reverseStreams || {}),
                                n.map(function (n) {
                                    return e._reverseStreams[n.id];
                                })
                            );
                        };
                        var i = e.RTCPeerConnection.prototype.addStream;
                        e.RTCPeerConnection.prototype.addStream = function (n) {
                            var r = this;
                            if (
                                ((this._streams = this._streams || {}),
                                (this._reverseStreams = this._reverseStreams || {}),
                                n.getTracks().forEach(function (e) {
                                    if (
                                        r.getSenders().find(function (n) {
                                            return n.track === e;
                                        })
                                    )
                                        throw new DOMException('Track already exists.', 'InvalidAccessError');
                                }),
                                !this._reverseStreams[n.id])
                            ) {
                                var a = new e.MediaStream(n.getTracks());
                                (this._streams[n.id] = a), (this._reverseStreams[a.id] = n), (n = a);
                            }
                            i.apply(this, [n]);
                        };
                        var a = e.RTCPeerConnection.prototype.removeStream;
                        (e.RTCPeerConnection.prototype.removeStream = function (e) {
                            (this._streams = this._streams || {}), (this._reverseStreams = this._reverseStreams || {}), a.apply(this, [this._streams[e.id] || e]), delete this._reverseStreams[this._streams[e.id] ? this._streams[e.id].id : e.id], delete this._streams[e.id];
                        }),
                            (e.RTCPeerConnection.prototype.addTrack = function (n, r) {
                                var i = this;
                                if ('closed' === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", 'InvalidStateError');
                                var a = [].slice.call(arguments, 1);
                                if (
                                    1 !== a.length ||
                                    !a[0].getTracks().find(function (e) {
                                        return e === n;
                                    })
                                )
                                    throw new DOMException('The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.', 'NotSupportedError');
                                if (
                                    this.getSenders().find(function (e) {
                                        return e.track === n;
                                    })
                                )
                                    throw new DOMException('Track already exists.', 'InvalidAccessError');
                                (this._streams = this._streams || {}), (this._reverseStreams = this._reverseStreams || {});
                                var o = this._streams[r.id];
                                if (o)
                                    o.addTrack(n),
                                        Promise.resolve().then(function () {
                                            i.dispatchEvent(new Event('negotiationneeded'));
                                        });
                                else {
                                    var s = new e.MediaStream([n]);
                                    (this._streams[r.id] = s), (this._reverseStreams[s.id] = r), this.addStream(s);
                                }
                                return this.getSenders().find(function (e) {
                                    return e.track === n;
                                });
                            }),
                            ['createOffer', 'createAnswer'].forEach(function (n) {
                                var r = e.RTCPeerConnection.prototype[n],
                                    i = u({}, n, function () {
                                        var e = this,
                                            n = arguments,
                                            i = arguments.length && 'function' == typeof arguments[0];
                                        return i
                                            ? r.apply(this, [
                                                  function (r) {
                                                      var i = c(e, r);
                                                      n[0].apply(null, [i]);
                                                  },
                                                  function (e) {
                                                      n[1] && n[1].apply(null, e);
                                                  },
                                                  arguments[2]
                                              ])
                                            : r.apply(this, arguments).then(function (n) {
                                                  return c(e, n);
                                              });
                                    });
                                e.RTCPeerConnection.prototype[n] = i[n];
                            });
                        var o = e.RTCPeerConnection.prototype.setLocalDescription;
                        e.RTCPeerConnection.prototype.setLocalDescription = function () {
                            return arguments.length && arguments[0].type ? ((arguments[0] = d(this, arguments[0])), o.apply(this, arguments)) : o.apply(this, arguments);
                        };
                        var l = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, 'localDescription');
                        Object.defineProperty(e.RTCPeerConnection.prototype, 'localDescription', {
                            get: function () {
                                var e = l.get.apply(this);
                                return '' === e.type ? e : c(this, e);
                            }
                        }),
                            (e.RTCPeerConnection.prototype.removeTrack = function (e) {
                                var n = this;
                                if ('closed' === this.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", 'InvalidStateError');
                                if (!e._pc) throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.', 'TypeError');
                                if (e._pc !== this) throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
                                this._streams = this._streams || {};
                                var r = void 0;
                                Object.keys(this._streams).forEach(function (i) {
                                    n._streams[i].getTracks().find(function (n) {
                                        return e.track === n;
                                    }) && (r = n._streams[i]);
                                }),
                                    r && (1 === r.getTracks().length ? this.removeStream(this._reverseStreams[r.id]) : r.removeTrack(e.track), this.dispatchEvent(new Event('negotiationneeded')));
                            });
                    }
                    function c(e, n) {
                        var r = n.sdp;
                        return (
                            Object.keys(e._reverseStreams || []).forEach(function (n) {
                                var i = e._reverseStreams[n],
                                    a = e._streams[i.id];
                                r = r.replace(RegExp(a.id, 'g'), i.id);
                            }),
                            new RTCSessionDescription({
                                type: n.type,
                                sdp: r
                            })
                        );
                    }
                    function d(e, n) {
                        var r = n.sdp;
                        return (
                            Object.keys(e._reverseStreams || []).forEach(function (n) {
                                var i = e._reverseStreams[n],
                                    a = e._streams[i.id];
                                r = r.replace(RegExp(i.id, 'g'), a.id);
                            }),
                            new RTCSessionDescription({
                                type: n.type,
                                sdp: r
                            })
                        );
                    }
                }
                function g(e) {
                    var n = s.detectBrowser(e);
                    if ((!e.RTCPeerConnection && e.webkitRTCPeerConnection && (e.RTCPeerConnection = e.webkitRTCPeerConnection), !!e.RTCPeerConnection)) {
                        var r = 0 === e.RTCPeerConnection.prototype.addIceCandidate.length;
                        n.version < 53 &&
                            ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (n) {
                                var r = e.RTCPeerConnection.prototype[n],
                                    i = u({}, n, function () {
                                        return (arguments[0] = new ('addIceCandidate' === n ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0])), r.apply(this, arguments);
                                    });
                                e.RTCPeerConnection.prototype[n] = i[n];
                            });
                        var i = e.RTCPeerConnection.prototype.addIceCandidate;
                        e.RTCPeerConnection.prototype.addIceCandidate = function () {
                            return r || arguments[0] ? (n.version < 78 && arguments[0] && '' === arguments[0].candidate ? Promise.resolve() : i.apply(this, arguments)) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
                        };
                    }
                }
                function E(e) {
                    s.wrapPeerConnectionEvent(e, 'negotiationneeded', function (e) {
                        if ('stable' === e.target.signalingState) return e;
                    });
                }
            },
            {
                '../utils.js': 11,
                './getdisplaymedia': 4,
                './getusermedia': 5
            }
        ],
        4: [
            function (e, n, r) {
                function i(e, n) {
                    if ((!e.navigator.mediaDevices || !('getDisplayMedia' in e.navigator.mediaDevices)) && !!e.navigator.mediaDevices) {
                        if ('function' != typeof n) {
                            console.error('shimGetDisplayMedia: getSourceId argument is not a function');
                            return;
                        }
                        e.navigator.mediaDevices.getDisplayMedia = function (r) {
                            return n(r).then(function (n) {
                                var i = r.video && r.video.width,
                                    a = r.video && r.video.height,
                                    o = r.video && r.video.frameRate;
                                return (
                                    (r.video = {
                                        mandatory: {
                                            chromeMediaSource: 'desktop',
                                            chromeMediaSourceId: n,
                                            maxFrameRate: o || 3
                                        }
                                    }),
                                    i && (r.video.mandatory.maxWidth = i),
                                    a && (r.video.mandatory.maxHeight = a),
                                    e.navigator.mediaDevices.getUserMedia(r)
                                );
                            });
                        };
                    }
                }
                Object.defineProperty(r, '__esModule', { value: !0 }), (r.shimGetDisplayMedia = i);
            },
            {}
        ],
        5: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 });
                var i =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          };
                r.shimGetUserMedia = l;
                var a = o(e('../utils.js'));
                function o(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return (n.default = e), n;
                }
                var s = a.log;
                function l(e) {
                    var n = e && e.navigator;
                    if (!!n.mediaDevices) {
                        var r = a.detectBrowser(e),
                            o = function (e) {
                                if ((void 0 === e ? 'undefined' : i(e)) !== 'object' || e.mandatory || e.optional) return e;
                                var n = {};
                                return (
                                    Object.keys(e).forEach(function (r) {
                                        if ('require' !== r && 'advanced' !== r && 'mediaSource' !== r) {
                                            var a = 'object' === i(e[r]) ? e[r] : { ideal: e[r] };
                                            void 0 !== a.exact && 'number' == typeof a.exact && (a.min = a.max = a.exact);
                                            var o = function (e, n) {
                                                return e ? e + n.charAt(0).toUpperCase() + n.slice(1) : 'deviceId' === n ? 'sourceId' : n;
                                            };
                                            if (void 0 !== a.ideal) {
                                                n.optional = n.optional || [];
                                                var s = {};
                                                'number' == typeof a.ideal ? ((s[o('min', r)] = a.ideal), n.optional.push(s), ((s = {})[o('max', r)] = a.ideal)) : (s[o('', r)] = a.ideal), n.optional.push(s);
                                            }
                                            void 0 !== a.exact && 'number' != typeof a.exact
                                                ? ((n.mandatory = n.mandatory || {}), (n.mandatory[o('', r)] = a.exact))
                                                : ['min', 'max'].forEach(function (e) {
                                                      void 0 !== a[e] && ((n.mandatory = n.mandatory || {}), (n.mandatory[o(e, r)] = a[e]));
                                                  });
                                        }
                                    }),
                                    e.advanced && (n.optional = (n.optional || []).concat(e.advanced)),
                                    n
                                );
                            },
                            l = function (e, a) {
                                if (r.version >= 61) return a(e);
                                if ((e = JSON.parse(JSON.stringify(e))) && 'object' === i(e.audio)) {
                                    var l = function (e, n, r) {
                                        n in e && !(r in e) && ((e[r] = e[n]), delete e[n]);
                                    };
                                    l((e = JSON.parse(JSON.stringify(e))).audio, 'autoGainControl', 'googAutoGainControl'), l(e.audio, 'noiseSuppression', 'googNoiseSuppression'), (e.audio = o(e.audio));
                                }
                                if (e && 'object' === i(e.video)) {
                                    var u = e.video.facingMode;
                                    u = u && ((void 0 === u ? 'undefined' : i(u)) === 'object' ? u : { ideal: u });
                                    var c = r.version < 66;
                                    if (u && ('user' === u.exact || 'environment' === u.exact || 'user' === u.ideal || 'environment' === u.ideal) && !(n.mediaDevices.getSupportedConstraints && n.mediaDevices.getSupportedConstraints().facingMode && !c)) {
                                        delete e.video.facingMode;
                                        var d = void 0;
                                        if (('environment' === u.exact || 'environment' === u.ideal ? (d = ['back', 'rear']) : ('user' === u.exact || 'user' === u.ideal) && (d = ['front']), d))
                                            return n.mediaDevices.enumerateDevices().then(function (n) {
                                                var r = (n = n.filter(function (e) {
                                                    return 'videoinput' === e.kind;
                                                })).find(function (e) {
                                                    return d.some(function (n) {
                                                        return e.label.toLowerCase().includes(n);
                                                    });
                                                });
                                                return !r && n.length && d.includes('back') && (r = n[n.length - 1]), r && (e.video.deviceId = u.exact ? { exact: r.deviceId } : { ideal: r.deviceId }), (e.video = o(e.video)), s('chrome: ' + JSON.stringify(e)), a(e);
                                            });
                                    }
                                    e.video = o(e.video);
                                }
                                return s('chrome: ' + JSON.stringify(e)), a(e);
                            },
                            u = function (e) {
                                return r.version >= 64
                                    ? e
                                    : {
                                          name:
                                              {
                                                  PermissionDeniedError: 'NotAllowedError',
                                                  PermissionDismissedError: 'NotAllowedError',
                                                  InvalidStateError: 'NotAllowedError',
                                                  DevicesNotFoundError: 'NotFoundError',
                                                  ConstraintNotSatisfiedError: 'OverconstrainedError',
                                                  TrackStartError: 'NotReadableError',
                                                  MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                                                  MediaDeviceKillSwitchOn: 'NotAllowedError',
                                                  TabCaptureError: 'AbortError',
                                                  ScreenCaptureError: 'AbortError',
                                                  DeviceCaptureError: 'AbortError'
                                              }[e.name] || e.name,
                                          message: e.message,
                                          constraint: e.constraint || e.constraintName,
                                          toString: function () {
                                              return this.name + (this.message && ': ') + this.message;
                                          }
                                      };
                            },
                            c = function (e, r, i) {
                                l(e, function (e) {
                                    n.webkitGetUserMedia(e, r, function (e) {
                                        i && i(u(e));
                                    });
                                });
                            };
                        if (((n.getUserMedia = c.bind(n)), n.mediaDevices.getUserMedia)) {
                            var d = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                            n.mediaDevices.getUserMedia = function (e) {
                                return l(e, function (e) {
                                    return d(e).then(
                                        function (n) {
                                            if ((e.audio && !n.getAudioTracks().length) || (e.video && !n.getVideoTracks().length))
                                                throw (
                                                    (n.getTracks().forEach(function (e) {
                                                        e.stop();
                                                    }),
                                                    new DOMException('', 'NotFoundError'))
                                                );
                                            return n;
                                        },
                                        function (e) {
                                            return Promise.reject(u(e));
                                        }
                                    );
                                });
                            };
                        }
                    }
                }
            },
            { '../utils.js': 11 }
        ],
        6: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 });
                var i =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          };
                (r.shimRTCIceCandidate = u), (r.shimMaxMessageSize = c), (r.shimSendThrowTypeError = d), (r.shimConnectionState = f), (r.removeAllowExtmapMixed = p);
                var a = l(e('sdp')),
                    o = s(e('./utils'));
                function s(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return (n.default = e), n;
                }
                function l(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function u(e) {
                    if (!!e.RTCIceCandidate && (!e.RTCIceCandidate || !('foundation' in e.RTCIceCandidate.prototype))) {
                        var n = e.RTCIceCandidate;
                        (e.RTCIceCandidate = function (e) {
                            if (((void 0 === e ? 'undefined' : i(e)) === 'object' && e.candidate && 0 === e.candidate.indexOf('a=') && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2)), e.candidate && e.candidate.length)) {
                                var r = Object.assign(new n(e), a.default.parseCandidate(e.candidate));
                                return (
                                    (r.toJSON = function () {
                                        return {
                                            candidate: r.candidate,
                                            sdpMid: r.sdpMid,
                                            sdpMLineIndex: r.sdpMLineIndex,
                                            usernameFragment: r.usernameFragment
                                        };
                                    }),
                                    r
                                );
                            }
                            return new n(e);
                        }),
                            (e.RTCIceCandidate.prototype = n.prototype),
                            o.wrapPeerConnectionEvent(e, 'icecandidate', function (n) {
                                return (
                                    n.candidate &&
                                        Object.defineProperty(n, 'candidate', {
                                            value: new e.RTCIceCandidate(n.candidate),
                                            writable: 'false'
                                        }),
                                    n
                                );
                            });
                    }
                }
                function c(e) {
                    if (!!e.RTCPeerConnection) {
                        var n = o.detectBrowser(e);
                        !('sctp' in e.RTCPeerConnection.prototype) &&
                            Object.defineProperty(e.RTCPeerConnection.prototype, 'sctp', {
                                get: function () {
                                    return void 0 === this._sctp ? null : this._sctp;
                                }
                            });
                        var r = function (e) {
                                if (!e || !e.sdp) return !1;
                                var n = a.default.splitSections(e.sdp);
                                return (
                                    n.shift(),
                                    n.some(function (e) {
                                        var n = a.default.parseMLine(e);
                                        return n && 'application' === n.kind && -1 !== n.protocol.indexOf('SCTP');
                                    })
                                );
                            },
                            i = function (e) {
                                var n = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                if (null === n || n.length < 2) return -1;
                                var r = parseInt(n[1], 10);
                                return r != r ? -1 : r;
                            },
                            s = function (e) {
                                var r = 65536;
                                return 'firefox' === n.browser && (r = n.version < 57 ? (-1 === e ? 16384 : 2147483637) : n.version < 60 ? (57 === n.version ? 65535 : 65536) : 2147483637), r;
                            },
                            l = function (e, r) {
                                var i = 65536;
                                'firefox' === n.browser && 57 === n.version && (i = 65535);
                                var o = a.default.matchPrefix(e.sdp, 'a=max-message-size:');
                                return o.length > 0 ? (i = parseInt(o[0].substr(19), 10)) : 'firefox' === n.browser && -1 !== r && (i = 2147483637), i;
                            },
                            u = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                            if (
                                ((this._sctp = null),
                                'chrome' === n.browser &&
                                    n.version >= 76 &&
                                    'plan-b' === this.getConfiguration().sdpSemantics &&
                                    Object.defineProperty(this, 'sctp', {
                                        get: function () {
                                            return void 0 === this._sctp ? null : this._sctp;
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    }),
                                r(arguments[0]))
                            ) {
                                var e = i(arguments[0]),
                                    a = s(e),
                                    o = l(arguments[0], e),
                                    c = void 0;
                                c = 0 === a && 0 === o ? Number.POSITIVE_INFINITY : 0 === a || 0 === o ? Math.max(a, o) : Math.min(a, o);
                                var d = {};
                                Object.defineProperty(d, 'maxMessageSize', {
                                    get: function () {
                                        return c;
                                    }
                                }),
                                    (this._sctp = d);
                            }
                            return u.apply(this, arguments);
                        };
                    }
                }
                function d(e) {
                    if (!!(e.RTCPeerConnection && 'createDataChannel' in e.RTCPeerConnection.prototype)) {
                        var n = e.RTCPeerConnection.prototype.createDataChannel;
                        (e.RTCPeerConnection.prototype.createDataChannel = function () {
                            var e = n.apply(this, arguments);
                            return r(e, this), e;
                        }),
                            o.wrapPeerConnectionEvent(e, 'datachannel', function (e) {
                                return r(e.channel, e.target), e;
                            });
                    }
                    function r(e, n) {
                        var r = e.send;
                        e.send = function () {
                            var i = arguments[0],
                                a = i.length || i.size || i.byteLength;
                            if ('open' === e.readyState && n.sctp && a > n.sctp.maxMessageSize) throw TypeError('Message too large (can send a maximum of ' + n.sctp.maxMessageSize + ' bytes)');
                            return r.apply(e, arguments);
                        };
                    }
                }
                function f(e) {
                    if (!!e.RTCPeerConnection && !('connectionState' in e.RTCPeerConnection.prototype)) {
                        var n = e.RTCPeerConnection.prototype;
                        Object.defineProperty(n, 'connectionState', {
                            get: function () {
                                return (
                                    {
                                        completed: 'connected',
                                        checking: 'connecting'
                                    }[this.iceConnectionState] || this.iceConnectionState
                                );
                            },
                            enumerable: !0,
                            configurable: !0
                        }),
                            Object.defineProperty(n, 'onconnectionstatechange', {
                                get: function () {
                                    return this._onconnectionstatechange || null;
                                },
                                set: function (e) {
                                    this._onconnectionstatechange && (this.removeEventListener('connectionstatechange', this._onconnectionstatechange), delete this._onconnectionstatechange), e && this.addEventListener('connectionstatechange', (this._onconnectionstatechange = e));
                                },
                                enumerable: !0,
                                configurable: !0
                            }),
                            ['setLocalDescription', 'setRemoteDescription'].forEach(function (e) {
                                var r = n[e];
                                n[e] = function () {
                                    return (
                                        !this._connectionstatechangepoly &&
                                            ((this._connectionstatechangepoly = function (e) {
                                                var n = e.target;
                                                if (n._lastConnectionState !== n.connectionState) {
                                                    n._lastConnectionState = n.connectionState;
                                                    var r = new Event('connectionstatechange', e);
                                                    n.dispatchEvent(r);
                                                }
                                                return e;
                                            }),
                                            this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly)),
                                        r.apply(this, arguments)
                                    );
                                };
                            });
                    }
                }
                function p(e) {
                    if (!e.RTCPeerConnection) return;
                    var n = o.detectBrowser(e);
                    if ('chrome' !== n.browser || !(n.version >= 71)) {
                        var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                        e.RTCPeerConnection.prototype.setRemoteDescription = function (e) {
                            return (
                                e &&
                                    e.sdp &&
                                    -1 !== e.sdp.indexOf('\na=extmap-allow-mixed') &&
                                    (e.sdp = e.sdp
                                        .split('\n')
                                        .filter(function (e) {
                                            return 'a=extmap-allow-mixed' !== e.trim();
                                        })
                                        .join('\n')),
                                r.apply(this, arguments)
                            );
                        };
                    }
                }
            },
            {
                './utils': 11,
                sdp: 13
            }
        ],
        7: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 }), (r.shimGetDisplayMedia = r.shimGetUserMedia = void 0);
                var i =
                        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                              },
                    a = e('./getusermedia');
                Object.defineProperty(r, 'shimGetUserMedia', {
                    enumerable: !0,
                    get: function () {
                        return a.shimGetUserMedia;
                    }
                });
                var o = e('./getdisplaymedia');
                Object.defineProperty(r, 'shimGetDisplayMedia', {
                    enumerable: !0,
                    get: function () {
                        return o.shimGetDisplayMedia;
                    }
                }),
                    (r.shimOnTrack = c),
                    (r.shimPeerConnection = d),
                    (r.shimSenderGetStats = f),
                    (r.shimReceiverGetStats = p),
                    (r.shimRemoveStream = h),
                    (r.shimRTCDataChannel = _),
                    (r.shimAddTransceiver = m),
                    (r.shimCreateOffer = g),
                    (r.shimCreateAnswer = E);
                var s = l(e('../utils'));
                function l(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return (n.default = e), n;
                }
                function u(e, n, r) {
                    return (
                        n in e
                            ? Object.defineProperty(e, n, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[n] = r),
                        e
                    );
                }
                function c(e) {
                    (void 0 === e ? 'undefined' : i(e)) === 'object' &&
                        e.RTCTrackEvent &&
                        'receiver' in e.RTCTrackEvent.prototype &&
                        !('transceiver' in e.RTCTrackEvent.prototype) &&
                        Object.defineProperty(e.RTCTrackEvent.prototype, 'transceiver', {
                            get: function () {
                                return { receiver: this.receiver };
                            }
                        });
                }
                function d(e) {
                    var n = s.detectBrowser(e);
                    if ((void 0 === e ? 'undefined' : i(e)) === 'object' && !!(e.RTCPeerConnection || e.mozRTCPeerConnection)) {
                        if (
                            (!e.RTCPeerConnection && e.mozRTCPeerConnection && (e.RTCPeerConnection = e.mozRTCPeerConnection),
                            n.version < 53 &&
                                ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (n) {
                                    var r = e.RTCPeerConnection.prototype[n],
                                        i = u({}, n, function () {
                                            return (arguments[0] = new ('addIceCandidate' === n ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0])), r.apply(this, arguments);
                                        });
                                    e.RTCPeerConnection.prototype[n] = i[n];
                                }),
                            n.version < 68)
                        ) {
                            var r = e.RTCPeerConnection.prototype.addIceCandidate;
                            e.RTCPeerConnection.prototype.addIceCandidate = function () {
                                return arguments[0] ? (arguments[0] && '' === arguments[0].candidate ? Promise.resolve() : r.apply(this, arguments)) : (arguments[1] && arguments[1].apply(null), Promise.resolve());
                            };
                        }
                        var a = {
                                inboundrtp: 'inbound-rtp',
                                outboundrtp: 'outbound-rtp',
                                candidatepair: 'candidate-pair',
                                localcandidate: 'local-candidate',
                                remotecandidate: 'remote-candidate'
                            },
                            o = e.RTCPeerConnection.prototype.getStats;
                        e.RTCPeerConnection.prototype.getStats = function () {
                            var e = Array.prototype.slice.call(arguments),
                                r = e[0],
                                i = e[1],
                                s = e[2];
                            return o
                                .apply(this, [r || null])
                                .then(function (e) {
                                    if (n.version < 53 && !i)
                                        try {
                                            e.forEach(function (e) {
                                                e.type = a[e.type] || e.type;
                                            });
                                        } catch (n) {
                                            if ('TypeError' !== n.name) throw n;
                                            e.forEach(function (n, r) {
                                                e.set(r, Object.assign({}, n, { type: a[n.type] || n.type }));
                                            });
                                        }
                                    return e;
                                })
                                .then(i, s);
                        };
                    }
                }
                function f(e) {
                    if (!!((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection && e.RTCRtpSender) && (!e.RTCRtpSender || !('getStats' in e.RTCRtpSender.prototype))) {
                        var n = e.RTCPeerConnection.prototype.getSenders;
                        n &&
                            (e.RTCPeerConnection.prototype.getSenders = function () {
                                var e = this,
                                    r = n.apply(this, []);
                                return (
                                    r.forEach(function (n) {
                                        return (n._pc = e);
                                    }),
                                    r
                                );
                            });
                        var r = e.RTCPeerConnection.prototype.addTrack;
                        r &&
                            (e.RTCPeerConnection.prototype.addTrack = function () {
                                var e = r.apply(this, arguments);
                                return (e._pc = this), e;
                            }),
                            (e.RTCRtpSender.prototype.getStats = function () {
                                return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
                            });
                    }
                }
                function p(e) {
                    if (!!((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection && e.RTCRtpSender) && (!e.RTCRtpSender || !('getStats' in e.RTCRtpReceiver.prototype))) {
                        var n = e.RTCPeerConnection.prototype.getReceivers;
                        n &&
                            (e.RTCPeerConnection.prototype.getReceivers = function () {
                                var e = this,
                                    r = n.apply(this, []);
                                return (
                                    r.forEach(function (n) {
                                        return (n._pc = e);
                                    }),
                                    r
                                );
                            }),
                            s.wrapPeerConnectionEvent(e, 'track', function (e) {
                                return (e.receiver._pc = e.srcElement), e;
                            }),
                            (e.RTCRtpReceiver.prototype.getStats = function () {
                                return this._pc.getStats(this.track);
                            });
                    }
                }
                function h(e) {
                    if (!!e.RTCPeerConnection && !('removeStream' in e.RTCPeerConnection.prototype))
                        e.RTCPeerConnection.prototype.removeStream = function (e) {
                            var n = this;
                            s.deprecated('removeStream', 'removeTrack'),
                                this.getSenders().forEach(function (r) {
                                    r.track && e.getTracks().includes(r.track) && n.removeTrack(r);
                                });
                        };
                }
                function _(e) {
                    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
                }
                function m(e) {
                    if (!!((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection)) {
                        var n = e.RTCPeerConnection.prototype.addTransceiver;
                        n &&
                            (e.RTCPeerConnection.prototype.addTransceiver = function () {
                                this.setParametersPromises = [];
                                var e = arguments[1],
                                    r = e && 'sendEncodings' in e;
                                r &&
                                    e.sendEncodings.forEach(function (e) {
                                        if ('rid' in e && !/^[a-z0-9]{0,16}$/i.test(e.rid)) throw TypeError('Invalid RID value provided.');
                                        if ('scaleResolutionDownBy' in e && !(parseFloat(e.scaleResolutionDownBy) >= 1)) throw RangeError('scale_resolution_down_by must be >= 1.0');
                                        if ('maxFramerate' in e && !(parseFloat(e.maxFramerate) >= 0)) throw RangeError('max_framerate must be >= 0.0');
                                    });
                                var i = n.apply(this, arguments);
                                if (r) {
                                    var a = i.sender,
                                        o = a.getParameters();
                                    !('encodings' in o) && ((o.encodings = e.sendEncodings), this.setParametersPromises.push(a.setParameters(o).catch(function () {})));
                                }
                                return i;
                            });
                    }
                }
                function g(e) {
                    if (!!((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection)) {
                        var n = e.RTCPeerConnection.prototype.createOffer;
                        e.RTCPeerConnection.prototype.createOffer = function () {
                            var e = this,
                                r = arguments;
                            return this.setParametersPromises && this.setParametersPromises.length
                                ? Promise.all(this.setParametersPromises)
                                      .then(function () {
                                          return n.apply(e, r);
                                      })
                                      .finally(function () {
                                          e.setParametersPromises = [];
                                      })
                                : n.apply(this, arguments);
                        };
                    }
                }
                function E(e) {
                    if (!!((void 0 === e ? 'undefined' : i(e)) === 'object' && e.RTCPeerConnection)) {
                        var n = e.RTCPeerConnection.prototype.createAnswer;
                        e.RTCPeerConnection.prototype.createAnswer = function () {
                            var e = this,
                                r = arguments;
                            return this.setParametersPromises && this.setParametersPromises.length
                                ? Promise.all(this.setParametersPromises)
                                      .then(function () {
                                          return n.apply(e, r);
                                      })
                                      .finally(function () {
                                          e.setParametersPromises = [];
                                      })
                                : n.apply(this, arguments);
                        };
                    }
                }
            },
            {
                '../utils': 11,
                './getdisplaymedia': 8,
                './getusermedia': 9
            }
        ],
        8: [
            function (e, n, r) {
                function i(e, n) {
                    if ((!e.navigator.mediaDevices || !('getDisplayMedia' in e.navigator.mediaDevices)) && !!e.navigator.mediaDevices)
                        e.navigator.mediaDevices.getDisplayMedia = function (r) {
                            if (!(r && r.video)) {
                                var i = new DOMException('getDisplayMedia without video constraints is undefined');
                                return (i.name = 'NotFoundError'), (i.code = 8), Promise.reject(i);
                            }
                            return !0 === r.video ? (r.video = { mediaSource: n }) : (r.video.mediaSource = n), e.navigator.mediaDevices.getUserMedia(r);
                        };
                }
                Object.defineProperty(r, '__esModule', { value: !0 }), (r.shimGetDisplayMedia = i);
            },
            {}
        ],
        9: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 });
                var i =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          };
                r.shimGetUserMedia = s;
                var a = o(e('../utils'));
                function o(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return (n.default = e), n;
                }
                function s(e) {
                    var n = a.detectBrowser(e),
                        r = e && e.navigator,
                        o = e && e.MediaStreamTrack;
                    if (
                        ((r.getUserMedia = function (e, n, i) {
                            a.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'), r.mediaDevices.getUserMedia(e).then(n, i);
                        }),
                        !(n.version > 55 && 'autoGainControl' in r.mediaDevices.getSupportedConstraints()))
                    ) {
                        var s = function (e, n, r) {
                                n in e && !(r in e) && ((e[r] = e[n]), delete e[n]);
                            },
                            l = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                        if (
                            ((r.mediaDevices.getUserMedia = function (e) {
                                return (void 0 === e ? 'undefined' : i(e)) === 'object' && 'object' === i(e.audio) && (s((e = JSON.parse(JSON.stringify(e))).audio, 'autoGainControl', 'mozAutoGainControl'), s(e.audio, 'noiseSuppression', 'mozNoiseSuppression')), l(e);
                            }),
                            o && o.prototype.getSettings)
                        ) {
                            var u = o.prototype.getSettings;
                            o.prototype.getSettings = function () {
                                var e = u.apply(this, arguments);
                                return s(e, 'mozAutoGainControl', 'autoGainControl'), s(e, 'mozNoiseSuppression', 'noiseSuppression'), e;
                            };
                        }
                        if (o && o.prototype.applyConstraints) {
                            var c = o.prototype.applyConstraints;
                            o.prototype.applyConstraints = function (e) {
                                return 'audio' === this.kind && (void 0 === e ? 'undefined' : i(e)) === 'object' && (s((e = JSON.parse(JSON.stringify(e))), 'autoGainControl', 'mozAutoGainControl'), s(e, 'noiseSuppression', 'mozNoiseSuppression')), c.apply(this, [e]);
                            };
                        }
                    }
                }
            },
            { '../utils': 11 }
        ],
        10: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 });
                var i =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          };
                (r.shimLocalStreamsAPI = s), (r.shimRemoteStreamsAPI = l), (r.shimCallbacksAPI = u), (r.shimGetUserMedia = c), (r.shimConstraints = d), (r.shimRTCIceServerUrls = f), (r.shimTrackEventTransceiver = p), (r.shimCreateOfferLegacy = h);
                var a = o(e('../utils'));
                function o(e) {
                    if (e && e.__esModule) return e;
                    var n = {};
                    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                    return (n.default = e), n;
                }
                function s(e) {
                    if ((void 0 === e ? 'undefined' : i(e)) === 'object' && !!e.RTCPeerConnection) {
                        if (
                            (!('getLocalStreams' in e.RTCPeerConnection.prototype) &&
                                (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                                    return !this._localStreams && (this._localStreams = []), this._localStreams;
                                }),
                            !('addStream' in e.RTCPeerConnection.prototype))
                        ) {
                            var n = e.RTCPeerConnection.prototype.addTrack;
                            (e.RTCPeerConnection.prototype.addStream = function (e) {
                                var r = this;
                                !this._localStreams && (this._localStreams = []),
                                    !this._localStreams.includes(e) && this._localStreams.push(e),
                                    e.getAudioTracks().forEach(function (i) {
                                        return n.call(r, i, e);
                                    }),
                                    e.getVideoTracks().forEach(function (i) {
                                        return n.call(r, i, e);
                                    });
                            }),
                                (e.RTCPeerConnection.prototype.addTrack = function (e) {
                                    for (var r = this, i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
                                    return (
                                        a &&
                                            a.forEach(function (e) {
                                                r._localStreams ? !r._localStreams.includes(e) && r._localStreams.push(e) : (r._localStreams = [e]);
                                            }),
                                        n.apply(this, arguments)
                                    );
                                });
                        }
                        !('removeStream' in e.RTCPeerConnection.prototype) &&
                            (e.RTCPeerConnection.prototype.removeStream = function (e) {
                                var n = this;
                                !this._localStreams && (this._localStreams = []);
                                var r = this._localStreams.indexOf(e);
                                if (-1 !== r) {
                                    this._localStreams.splice(r, 1);
                                    var i = e.getTracks();
                                    this.getSenders().forEach(function (e) {
                                        i.includes(e.track) && n.removeTrack(e);
                                    });
                                }
                            });
                    }
                }
                function l(e) {
                    if ((void 0 === e ? 'undefined' : i(e)) === 'object' && !!e.RTCPeerConnection) {
                        if (
                            (!('getRemoteStreams' in e.RTCPeerConnection.prototype) &&
                                (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                                    return this._remoteStreams ? this._remoteStreams : [];
                                }),
                            !('onaddstream' in e.RTCPeerConnection.prototype))
                        ) {
                            Object.defineProperty(e.RTCPeerConnection.prototype, 'onaddstream', {
                                get: function () {
                                    return this._onaddstream;
                                },
                                set: function (e) {
                                    var n = this;
                                    this._onaddstream && (this.removeEventListener('addstream', this._onaddstream), this.removeEventListener('track', this._onaddstreampoly)),
                                        this.addEventListener('addstream', (this._onaddstream = e)),
                                        this.addEventListener(
                                            'track',
                                            (this._onaddstreampoly = function (e) {
                                                e.streams.forEach(function (e) {
                                                    if ((!n._remoteStreams && (n._remoteStreams = []), !n._remoteStreams.includes(e))) {
                                                        n._remoteStreams.push(e);
                                                        var r = new Event('addstream');
                                                        (r.stream = e), n.dispatchEvent(r);
                                                    }
                                                });
                                            })
                                        );
                                }
                            });
                            var n = e.RTCPeerConnection.prototype.setRemoteDescription;
                            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                                var e = this;
                                return (
                                    !this._onaddstreampoly &&
                                        this.addEventListener(
                                            'track',
                                            (this._onaddstreampoly = function (n) {
                                                n.streams.forEach(function (n) {
                                                    if ((!e._remoteStreams && (e._remoteStreams = []), !(e._remoteStreams.indexOf(n) >= 0))) {
                                                        e._remoteStreams.push(n);
                                                        var r = new Event('addstream');
                                                        (r.stream = n), e.dispatchEvent(r);
                                                    }
                                                });
                                            })
                                        ),
                                    n.apply(e, arguments)
                                );
                            };
                        }
                    }
                }
                function u(e) {
                    if ((void 0 === e ? 'undefined' : i(e)) === 'object' && !!e.RTCPeerConnection) {
                        var n = e.RTCPeerConnection.prototype,
                            r = n.createOffer,
                            a = n.createAnswer,
                            o = n.setLocalDescription,
                            s = n.setRemoteDescription,
                            l = n.addIceCandidate;
                        (n.createOffer = function (e, n) {
                            var i = arguments.length >= 2 ? arguments[2] : arguments[0],
                                a = r.apply(this, [i]);
                            return n ? (a.then(e, n), Promise.resolve()) : a;
                        }),
                            (n.createAnswer = function (e, n) {
                                var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                                    i = a.apply(this, [r]);
                                return n ? (i.then(e, n), Promise.resolve()) : i;
                            });
                        var u = function (e, n, r) {
                            var i = o.apply(this, [e]);
                            return r ? (i.then(n, r), Promise.resolve()) : i;
                        };
                        (n.setLocalDescription = u),
                            (u = function (e, n, r) {
                                var i = s.apply(this, [e]);
                                return r ? (i.then(n, r), Promise.resolve()) : i;
                            }),
                            (n.setRemoteDescription = u),
                            (u = function (e, n, r) {
                                var i = l.apply(this, [e]);
                                return r ? (i.then(n, r), Promise.resolve()) : i;
                            }),
                            (n.addIceCandidate = u);
                    }
                }
                function c(e) {
                    var n = e && e.navigator;
                    if (n.mediaDevices && n.mediaDevices.getUserMedia) {
                        var r = n.mediaDevices,
                            i = r.getUserMedia.bind(r);
                        n.mediaDevices.getUserMedia = function (e) {
                            return i(d(e));
                        };
                    }
                    !n.getUserMedia &&
                        n.mediaDevices &&
                        n.mediaDevices.getUserMedia &&
                        (n.getUserMedia = function (e, r, i) {
                            n.mediaDevices.getUserMedia(e).then(r, i);
                        }.bind(n));
                }
                function d(e) {
                    return e && void 0 !== e.video ? Object.assign({}, e, { video: a.compactObject(e.video) }) : e;
                }
                function f(e) {
                    var n = e.RTCPeerConnection;
                    (e.RTCPeerConnection = function (e, r) {
                        if (e && e.iceServers) {
                            for (var i = [], o = 0; o < e.iceServers.length; o++) {
                                var s = e.iceServers[o];
                                !s.hasOwnProperty('urls') && s.hasOwnProperty('url') ? (a.deprecated('RTCIceServer.url', 'RTCIceServer.urls'), ((s = JSON.parse(JSON.stringify(s))).urls = s.url), delete s.url, i.push(s)) : i.push(e.iceServers[o]);
                            }
                            e.iceServers = i;
                        }
                        return new n(e, r);
                    }),
                        (e.RTCPeerConnection.prototype = n.prototype),
                        'generateCertificate' in e.RTCPeerConnection &&
                            Object.defineProperty(e.RTCPeerConnection, 'generateCertificate', {
                                get: function () {
                                    return n.generateCertificate;
                                }
                            });
                }
                function p(e) {
                    (void 0 === e ? 'undefined' : i(e)) === 'object' &&
                        e.RTCTrackEvent &&
                        'receiver' in e.RTCTrackEvent.prototype &&
                        !('transceiver' in e.RTCTrackEvent.prototype) &&
                        Object.defineProperty(e.RTCTrackEvent.prototype, 'transceiver', {
                            get: function () {
                                return { receiver: this.receiver };
                            }
                        });
                }
                function h(e) {
                    var n = e.RTCPeerConnection.prototype.createOffer;
                    e.RTCPeerConnection.prototype.createOffer = function (e) {
                        if (e) {
                            void 0 !== e.offerToReceiveAudio && (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                            var r = this.getTransceivers().find(function (e) {
                                return 'audio' === e.receiver.track.kind;
                            });
                            !1 === e.offerToReceiveAudio && r ? ('sendrecv' === r.direction ? (r.setDirection ? r.setDirection('sendonly') : (r.direction = 'sendonly')) : 'recvonly' === r.direction && (r.setDirection ? r.setDirection('inactive') : (r.direction = 'inactive'))) : !0 === e.offerToReceiveAudio && !r && this.addTransceiver('audio'), void 0 !== e.offerToReceiveVideo && (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                            var i = this.getTransceivers().find(function (e) {
                                return 'video' === e.receiver.track.kind;
                            });
                            !1 === e.offerToReceiveVideo && i ? ('sendrecv' === i.direction ? (i.setDirection ? i.setDirection('sendonly') : (i.direction = 'sendonly')) : 'recvonly' === i.direction && (i.setDirection ? i.setDirection('inactive') : (i.direction = 'inactive'))) : !0 === e.offerToReceiveVideo && !i && this.addTransceiver('video');
                        }
                        return n.apply(this, arguments);
                    };
                }
            },
            { '../utils': 11 }
        ],
        11: [
            function (e, n, r) {
                Object.defineProperty(r, '__esModule', { value: !0 });
                var i =
                    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                          };
                function a(e, n, r) {
                    return (
                        n in e
                            ? Object.defineProperty(e, n, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[n] = r),
                        e
                    );
                }
                (r.extractVersion = l), (r.wrapPeerConnectionEvent = u), (r.disableLog = c), (r.disableWarnings = d), (r.log = f), (r.deprecated = p), (r.detectBrowser = h), (r.compactObject = m), (r.walkStats = g), (r.filterStats = E);
                var o = !0,
                    s = !0;
                function l(e, n, r) {
                    var i = e.match(n);
                    return i && i.length >= r && parseInt(i[r], 10);
                }
                function u(e, n, r) {
                    if (!!e.RTCPeerConnection) {
                        var i = e.RTCPeerConnection.prototype,
                            a = i.addEventListener;
                        i.addEventListener = function (e, i) {
                            if (e !== n) return a.apply(this, arguments);
                            var o = function (e) {
                                var n = r(e);
                                n && i(n);
                            };
                            return (this._eventMap = this._eventMap || {}), (this._eventMap[i] = o), a.apply(this, [e, o]);
                        };
                        var o = i.removeEventListener;
                        (i.removeEventListener = function (e, r) {
                            if (e !== n || !this._eventMap || !this._eventMap[r]) return o.apply(this, arguments);
                            var i = this._eventMap[r];
                            return delete this._eventMap[r], o.apply(this, [e, i]);
                        }),
                            Object.defineProperty(i, 'on' + n, {
                                get: function () {
                                    return this['_on' + n];
                                },
                                set: function (e) {
                                    this['_on' + n] && (this.removeEventListener(n, this['_on' + n]), delete this['_on' + n]), e && this.addEventListener(n, (this['_on' + n] = e));
                                },
                                enumerable: !0,
                                configurable: !0
                            });
                    }
                }
                function c(e) {
                    return 'boolean' != typeof e ? Error('Argument type: ' + (void 0 === e ? 'undefined' : i(e)) + '. Please use a boolean.') : ((o = e), e ? 'adapter.js logging disabled' : 'adapter.js logging enabled');
                }
                function d(e) {
                    return 'boolean' != typeof e ? Error('Argument type: ' + (void 0 === e ? 'undefined' : i(e)) + '. Please use a boolean.') : ((s = !e), 'adapter.js deprecation warnings ' + (e ? 'disabled' : 'enabled'));
                }
                function f() {
                    if (('undefined' == typeof window ? 'undefined' : i(window)) === 'object') {
                        if (!o) 'undefined' != typeof console && 'function' == typeof console.log && console.log.apply(console, arguments);
                    }
                }
                function p(e, n) {
                    if (!!s) console.warn(e + ' is deprecated, please use ' + n + ' instead.');
                }
                function h(e) {
                    var n = e.navigator,
                        r = {
                            browser: null,
                            version: null
                        };
                    return void 0 !== e && e.navigator ? (n.mozGetUserMedia ? ((r.browser = 'firefox'), (r.version = l(n.userAgent, /Firefox\/(\d+)\./, 1))) : n.webkitGetUserMedia || (!1 === e.isSecureContext && e.webkitRTCPeerConnection && !e.RTCIceGatherer) ? ((r.browser = 'chrome'), (r.version = l(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2))) : n.mediaDevices && n.userAgent.match(/Edge\/(\d+).(\d+)$/) ? ((r.browser = 'edge'), (r.version = l(n.userAgent, /Edge\/(\d+).(\d+)$/, 2))) : e.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./) ? ((r.browser = 'safari'), (r.version = l(n.userAgent, /AppleWebKit\/(\d+)\./, 1)), (r.supportsUnifiedPlan = e.RTCRtpTransceiver && 'currentDirection' in e.RTCRtpTransceiver.prototype)) : (r.browser = 'Not a supported browser.'), r) : ((r.browser = 'Not a browser.'), r);
                }
                function _(e) {
                    return '[object Object]' === Object.prototype.toString.call(e);
                }
                function m(e) {
                    return _(e)
                        ? Object.keys(e).reduce(function (n, r) {
                              var i = _(e[r]),
                                  o = i ? m(e[r]) : e[r],
                                  s = i && !Object.keys(o).length;
                              return void 0 === o || s ? n : Object.assign(n, a({}, r, o));
                          }, {})
                        : e;
                }
                function g(e, n, r) {
                    if (!(!n || r.has(n.id)))
                        r.set(n.id, n),
                            Object.keys(n).forEach(function (i) {
                                i.endsWith('Id')
                                    ? g(e, e.get(n[i]), r)
                                    : i.endsWith('Ids') &&
                                      n[i].forEach(function (n) {
                                          g(e, e.get(n), r);
                                      });
                            });
                }
                function E(e, n, r) {
                    var i = r ? 'outbound-rtp' : 'inbound-rtp',
                        a = new Map();
                    if (null === n) return a;
                    var o = [];
                    return (
                        e.forEach(function (e) {
                            'track' === e.type && e.trackIdentifier === n.id && o.push(e);
                        }),
                        o.forEach(function (n) {
                            e.forEach(function (r) {
                                r.type === i && r.trackId === n.id && g(e, r, a);
                            });
                        }),
                        a
                    );
                }
            },
            {}
        ],
        12: [function (e, n, r) {}, {}],
        13: [
            function (e, n, r) {
                var i = {};
                (i.generateIdentifier = function () {
                    return Math.random().toString(36).substr(2, 10);
                }),
                    (i.localCName = i.generateIdentifier()),
                    (i.splitLines = function (e) {
                        return e
                            .trim()
                            .split('\n')
                            .map(function (e) {
                                return e.trim();
                            });
                    }),
                    (i.splitSections = function (e) {
                        return e.split('\nm=').map(function (e, n) {
                            return (n > 0 ? 'm=' + e : e).trim() + '\r\n';
                        });
                    }),
                    (i.getDescription = function (e) {
                        var n = i.splitSections(e);
                        return n && n[0];
                    }),
                    (i.getMediaSections = function (e) {
                        var n = i.splitSections(e);
                        return n.shift(), n;
                    }),
                    (i.matchPrefix = function (e, n) {
                        return i.splitLines(e).filter(function (e) {
                            return 0 === e.indexOf(n);
                        });
                    }),
                    (i.parseCandidate = function (e) {
                        for (
                            var n,
                                r = {
                                    foundation: (n = 0 === e.indexOf('a=candidate:') ? e.substring(12).split(' ') : e.substring(10).split(' '))[0],
                                    component: parseInt(n[1], 10),
                                    protocol: n[2].toLowerCase(),
                                    priority: parseInt(n[3], 10),
                                    ip: n[4],
                                    address: n[4],
                                    port: parseInt(n[5], 10),
                                    type: n[7]
                                },
                                i = 8;
                            i < n.length;
                            i += 2
                        )
                            switch (n[i]) {
                                case 'raddr':
                                    r.relatedAddress = n[i + 1];
                                    break;
                                case 'rport':
                                    r.relatedPort = parseInt(n[i + 1], 10);
                                    break;
                                case 'tcptype':
                                    r.tcpType = n[i + 1];
                                    break;
                                case 'ufrag':
                                    (r.ufrag = n[i + 1]), (r.usernameFragment = n[i + 1]);
                                    break;
                                default:
                                    r[n[i]] = n[i + 1];
                            }
                        return r;
                    }),
                    (i.writeCandidate = function (e) {
                        var n = [];
                        n.push(e.foundation), n.push(e.component), n.push(e.protocol.toUpperCase()), n.push(e.priority), n.push(e.address || e.ip), n.push(e.port);
                        var r = e.type;
                        return n.push('typ'), n.push(r), 'host' !== r && e.relatedAddress && e.relatedPort && (n.push('raddr'), n.push(e.relatedAddress), n.push('rport'), n.push(e.relatedPort)), e.tcpType && 'tcp' === e.protocol.toLowerCase() && (n.push('tcptype'), n.push(e.tcpType)), (e.usernameFragment || e.ufrag) && (n.push('ufrag'), n.push(e.usernameFragment || e.ufrag)), 'candidate:' + n.join(' ');
                    }),
                    (i.parseIceOptions = function (e) {
                        return e.substr(14).split(' ');
                    }),
                    (i.parseRtpMap = function (e) {
                        var n = e.substr(9).split(' '),
                            r = { payloadType: parseInt(n.shift(), 10) };
                        return (n = n[0].split('/')), (r.name = n[0]), (r.clockRate = parseInt(n[1], 10)), (r.channels = 3 === n.length ? parseInt(n[2], 10) : 1), (r.numChannels = r.channels), r;
                    }),
                    (i.writeRtpMap = function (e) {
                        var n = e.payloadType;
                        void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType);
                        var r = e.channels || e.numChannels || 1;
                        return 'a=rtpmap:' + n + ' ' + e.name + '/' + e.clockRate + (1 !== r ? '/' + r : '') + '\r\n';
                    }),
                    (i.parseExtmap = function (e) {
                        var n = e.substr(9).split(' ');
                        return {
                            id: parseInt(n[0], 10),
                            direction: n[0].indexOf('/') > 0 ? n[0].split('/')[1] : 'sendrecv',
                            uri: n[1]
                        };
                    }),
                    (i.writeExtmap = function (e) {
                        return 'a=extmap:' + (e.id || e.preferredId) + (e.direction && 'sendrecv' !== e.direction ? '/' + e.direction : '') + ' ' + e.uri + '\r\n';
                    }),
                    (i.parseFmtp = function (e) {
                        for (var n, r = {}, i = e.substr(e.indexOf(' ') + 1).split(';'), a = 0; a < i.length; a++) r[(n = i[a].trim().split('='))[0].trim()] = n[1];
                        return r;
                    }),
                    (i.writeFmtp = function (e) {
                        var n = '',
                            r = e.payloadType;
                        if ((void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length)) {
                            var i = [];
                            Object.keys(e.parameters).forEach(function (n) {
                                e.parameters[n] ? i.push(n + '=' + e.parameters[n]) : i.push(n);
                            }),
                                (n += 'a=fmtp:' + r + ' ' + i.join(';') + '\r\n');
                        }
                        return n;
                    }),
                    (i.parseRtcpFb = function (e) {
                        var n = e.substr(e.indexOf(' ') + 1).split(' ');
                        return {
                            type: n.shift(),
                            parameter: n.join(' ')
                        };
                    }),
                    (i.writeRtcpFb = function (e) {
                        var n = '',
                            r = e.payloadType;
                        return (
                            void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
                            e.rtcpFeedback &&
                                e.rtcpFeedback.length &&
                                e.rtcpFeedback.forEach(function (e) {
                                    n += 'a=rtcp-fb:' + r + ' ' + e.type + (e.parameter && e.parameter.length ? ' ' + e.parameter : '') + '\r\n';
                                }),
                            n
                        );
                    }),
                    (i.parseSsrcMedia = function (e) {
                        var n = e.indexOf(' '),
                            r = { ssrc: parseInt(e.substr(7, n - 7), 10) },
                            i = e.indexOf(':', n);
                        return i > -1 ? ((r.attribute = e.substr(n + 1, i - n - 1)), (r.value = e.substr(i + 1))) : (r.attribute = e.substr(n + 1)), r;
                    }),
                    (i.parseSsrcGroup = function (e) {
                        var n = e.substr(13).split(' ');
                        return {
                            semantics: n.shift(),
                            ssrcs: n.map(function (e) {
                                return parseInt(e, 10);
                            })
                        };
                    }),
                    (i.getMid = function (e) {
                        var n = i.matchPrefix(e, 'a=mid:')[0];
                        if (n) return n.substr(6);
                    }),
                    (i.parseFingerprint = function (e) {
                        var n = e.substr(14).split(' ');
                        return {
                            algorithm: n[0].toLowerCase(),
                            value: n[1]
                        };
                    }),
                    (i.getDtlsParameters = function (e, n) {
                        return {
                            role: 'auto',
                            fingerprints: i.matchPrefix(e + n, 'a=fingerprint:').map(i.parseFingerprint)
                        };
                    }),
                    (i.writeDtlsParameters = function (e, n) {
                        var r = 'a=setup:' + n + '\r\n';
                        return (
                            e.fingerprints.forEach(function (e) {
                                r += 'a=fingerprint:' + e.algorithm + ' ' + e.value + '\r\n';
                            }),
                            r
                        );
                    }),
                    (i.parseCryptoLine = function (e) {
                        var n = e.substr(9).split(' ');
                        return {
                            tag: parseInt(n[0], 10),
                            cryptoSuite: n[1],
                            keyParams: n[2],
                            sessionParams: n.slice(3)
                        };
                    }),
                    (i.writeCryptoLine = function (e) {
                        return 'a=crypto:' + e.tag + ' ' + e.cryptoSuite + ' ' + ('object' == typeof e.keyParams ? i.writeCryptoKeyParams(e.keyParams) : e.keyParams) + (e.sessionParams ? ' ' + e.sessionParams.join(' ') : '') + '\r\n';
                    }),
                    (i.parseCryptoKeyParams = function (e) {
                        if (0 !== e.indexOf('inline:')) return null;
                        var n = e.substr(7).split('|');
                        return {
                            keyMethod: 'inline',
                            keySalt: n[0],
                            lifeTime: n[1],
                            mkiValue: n[2] ? n[2].split(':')[0] : void 0,
                            mkiLength: n[2] ? n[2].split(':')[1] : void 0
                        };
                    }),
                    (i.writeCryptoKeyParams = function (e) {
                        return e.keyMethod + ':' + e.keySalt + (e.lifeTime ? '|' + e.lifeTime : '') + (e.mkiValue && e.mkiLength ? '|' + e.mkiValue + ':' + e.mkiLength : '');
                    }),
                    (i.getCryptoParameters = function (e, n) {
                        return i.matchPrefix(e + n, 'a=crypto:').map(i.parseCryptoLine);
                    }),
                    (i.getIceParameters = function (e, n) {
                        var r = i.matchPrefix(e + n, 'a=ice-ufrag:')[0],
                            a = i.matchPrefix(e + n, 'a=ice-pwd:')[0];
                        return r && a
                            ? {
                                  usernameFragment: r.substr(12),
                                  password: a.substr(10)
                              }
                            : null;
                    }),
                    (i.writeIceParameters = function (e) {
                        return 'a=ice-ufrag:' + e.usernameFragment + '\r\na=ice-pwd:' + e.password + '\r\n';
                    }),
                    (i.parseRtpParameters = function (e) {
                        for (
                            var n = {
                                    codecs: [],
                                    headerExtensions: [],
                                    fecMechanisms: [],
                                    rtcp: []
                                },
                                r = i.splitLines(e)[0].split(' '),
                                a = 3;
                            a < r.length;
                            a++
                        ) {
                            var o = r[a],
                                s = i.matchPrefix(e, 'a=rtpmap:' + o + ' ')[0];
                            if (s) {
                                var l = i.parseRtpMap(s),
                                    u = i.matchPrefix(e, 'a=fmtp:' + o + ' ');
                                switch (((l.parameters = u.length ? i.parseFmtp(u[0]) : {}), (l.rtcpFeedback = i.matchPrefix(e, 'a=rtcp-fb:' + o + ' ').map(i.parseRtcpFb)), n.codecs.push(l), l.name.toUpperCase())) {
                                    case 'RED':
                                    case 'ULPFEC':
                                        n.fecMechanisms.push(l.name.toUpperCase());
                                }
                            }
                        }
                        return (
                            i.matchPrefix(e, 'a=extmap:').forEach(function (e) {
                                n.headerExtensions.push(i.parseExtmap(e));
                            }),
                            n
                        );
                    }),
                    (i.writeRtpDescription = function (e, n) {
                        var r = '';
                        (r +=
                            'm=' +
                            e +
                            ' ' +
                            (n.codecs.length > 0 ? '9' : '0') +
                            ' UDP/TLS/RTP/SAVPF ' +
                            (n.codecs
                                .map(function (e) {
                                    return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType;
                                })
                                .join(' ') +
                                '\r\n') +
                            'c=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\n'),
                            n.codecs.forEach(function (e) {
                                r += i.writeRtpMap(e) + i.writeFmtp(e) + i.writeRtcpFb(e);
                            });
                        var a = 0;
                        return (
                            n.codecs.forEach(function (e) {
                                e.maxptime > a && (a = e.maxptime);
                            }),
                            a > 0 && (r += 'a=maxptime:' + a + '\r\n'),
                            (r += 'a=rtcp-mux\r\n'),
                            n.headerExtensions &&
                                n.headerExtensions.forEach(function (e) {
                                    r += i.writeExtmap(e);
                                }),
                            r
                        );
                    }),
                    (i.parseRtpEncodingParameters = function (e) {
                        var n,
                            r = [],
                            a = i.parseRtpParameters(e),
                            o = -1 !== a.fecMechanisms.indexOf('RED'),
                            s = -1 !== a.fecMechanisms.indexOf('ULPFEC'),
                            l = i
                                .matchPrefix(e, 'a=ssrc:')
                                .map(function (e) {
                                    return i.parseSsrcMedia(e);
                                })
                                .filter(function (e) {
                                    return 'cname' === e.attribute;
                                }),
                            u = l.length > 0 && l[0].ssrc,
                            c = i.matchPrefix(e, 'a=ssrc-group:FID').map(function (e) {
                                return e
                                    .substr(17)
                                    .split(' ')
                                    .map(function (e) {
                                        return parseInt(e, 10);
                                    });
                            });
                        c.length > 0 && c[0].length > 1 && c[0][0] === u && (n = c[0][1]),
                            a.codecs.forEach(function (e) {
                                if ('RTX' === e.name.toUpperCase() && e.parameters.apt) {
                                    var i = {
                                        ssrc: u,
                                        codecPayloadType: parseInt(e.parameters.apt, 10)
                                    };
                                    u && n && (i.rtx = { ssrc: n }),
                                        r.push(i),
                                        o &&
                                            (((i = JSON.parse(JSON.stringify(i))).fec = {
                                                ssrc: u,
                                                mechanism: s ? 'red+ulpfec' : 'red'
                                            }),
                                            r.push(i));
                                }
                            }),
                            0 === r.length && u && r.push({ ssrc: u });
                        var d = i.matchPrefix(e, 'b=');
                        return (
                            d.length &&
                                ((d = 0 === d[0].indexOf('b=TIAS:') ? parseInt(d[0].substr(7), 10) : 0 === d[0].indexOf('b=AS:') ? 950 * parseInt(d[0].substr(5), 10) - 16000 : void 0),
                                r.forEach(function (e) {
                                    e.maxBitrate = d;
                                })),
                            r
                        );
                    }),
                    (i.parseRtcpParameters = function (e) {
                        var n = {},
                            r = i
                                .matchPrefix(e, 'a=ssrc:')
                                .map(function (e) {
                                    return i.parseSsrcMedia(e);
                                })
                                .filter(function (e) {
                                    return 'cname' === e.attribute;
                                })[0];
                        r && ((n.cname = r.value), (n.ssrc = r.ssrc));
                        var a = i.matchPrefix(e, 'a=rtcp-rsize');
                        (n.reducedSize = a.length > 0), (n.compound = 0 === a.length);
                        var o = i.matchPrefix(e, 'a=rtcp-mux');
                        return (n.mux = o.length > 0), n;
                    }),
                    (i.parseMsid = function (e) {
                        var n,
                            r = i.matchPrefix(e, 'a=msid:');
                        if (1 === r.length)
                            return {
                                stream: (n = r[0].substr(7).split(' '))[0],
                                track: n[1]
                            };
                        var a = i
                            .matchPrefix(e, 'a=ssrc:')
                            .map(function (e) {
                                return i.parseSsrcMedia(e);
                            })
                            .filter(function (e) {
                                return 'msid' === e.attribute;
                            });
                        if (a.length > 0)
                            return {
                                stream: (n = a[0].value.split(' '))[0],
                                track: n[1]
                            };
                    }),
                    (i.parseSctpDescription = function (e) {
                        var n,
                            r = i.parseMLine(e),
                            a = i.matchPrefix(e, 'a=max-message-size:');
                        a.length > 0 && (n = parseInt(a[0].substr(19), 10)), isNaN(n) && (n = 65536);
                        var o = i.matchPrefix(e, 'a=sctp-port:');
                        if (o.length > 0)
                            return {
                                port: parseInt(o[0].substr(12), 10),
                                protocol: r.fmt,
                                maxMessageSize: n
                            };
                        if (i.matchPrefix(e, 'a=sctpmap:').length > 0) {
                            var s = i.matchPrefix(e, 'a=sctpmap:')[0].substr(10).split(' ');
                            return {
                                port: parseInt(s[0], 10),
                                protocol: s[1],
                                maxMessageSize: n
                            };
                        }
                    }),
                    (i.writeSctpDescription = function (e, n) {
                        var r = [];
                        return (r = 'DTLS/SCTP' !== e.protocol ? ['m=' + e.kind + ' 9 ' + e.protocol + ' ' + n.protocol + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctp-port:' + n.port + '\r\n'] : ['m=' + e.kind + ' 9 ' + e.protocol + ' ' + n.port + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctpmap:' + n.port + ' ' + n.protocol + ' 65535\r\n']), void 0 !== n.maxMessageSize && r.push('a=max-message-size:' + n.maxMessageSize + '\r\n'), r.join('');
                    }),
                    (i.generateSessionId = function () {
                        return Math.random().toString().substr(2, 21);
                    }),
                    (i.writeSessionBoilerplate = function (e, n, r) {
                        var a,
                            o = void 0 !== n ? n : 2;
                        return 'v=0\r\no=' + (r || 'thisisadapterortc') + ' ' + (a = e ? e : i.generateSessionId()) + ' ' + o + ' IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n';
                    }),
                    (i.writeMediaSection = function (e, n, r, a) {
                        var o = i.writeRtpDescription(e.kind, n);
                        if (((o += i.writeIceParameters(e.iceGatherer.getLocalParameters()) + i.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), 'offer' === r ? 'actpass' : 'active') + ('a=mid:' + e.mid + '\r\n')), e.direction ? (o += 'a=' + e.direction + '\r\n') : e.rtpSender && e.rtpReceiver ? (o += 'a=sendrecv\r\n') : e.rtpSender ? (o += 'a=sendonly\r\n') : e.rtpReceiver ? (o += 'a=recvonly\r\n') : (o += 'a=inactive\r\n'), e.rtpSender)) {
                            var s = 'msid:' + a.id + ' ' + e.rtpSender.track.id + '\r\n';
                            (o += 'a=' + s + ('a=ssrc:' + e.sendEncodingParameters[0].ssrc + ' ' + s)), e.sendEncodingParameters[0].rtx && (o += 'a=ssrc:' + e.sendEncodingParameters[0].rtx.ssrc + ' ' + s + ('a=ssrc-group:FID ' + e.sendEncodingParameters[0].ssrc + ' ' + e.sendEncodingParameters[0].rtx.ssrc + '\r\n'));
                        }
                        return (o += 'a=ssrc:' + e.sendEncodingParameters[0].ssrc + ' cname:' + i.localCName + '\r\n'), e.rtpSender && e.sendEncodingParameters[0].rtx && (o += 'a=ssrc:' + e.sendEncodingParameters[0].rtx.ssrc + ' cname:' + i.localCName + '\r\n'), o;
                    }),
                    (i.getDirection = function (e, n) {
                        for (var r = i.splitLines(e), a = 0; a < r.length; a++)
                            switch (r[a]) {
                                case 'a=sendrecv':
                                case 'a=sendonly':
                                case 'a=recvonly':
                                case 'a=inactive':
                                    return r[a].substr(2);
                            }
                        return n ? i.getDirection(n) : 'sendrecv';
                    }),
                    (i.getKind = function (e) {
                        return i.splitLines(e)[0].split(' ')[0].substr(2);
                    }),
                    (i.isRejected = function (e) {
                        return '0' === e.split(' ', 2)[1];
                    }),
                    (i.parseMLine = function (e) {
                        var n = i.splitLines(e)[0].substr(2).split(' ');
                        return {
                            kind: n[0],
                            port: parseInt(n[1], 10),
                            protocol: n[2],
                            fmt: n.slice(3).join(' ')
                        };
                    }),
                    (i.parseOLine = function (e) {
                        var n = i.matchPrefix(e, 'o=')[0].substr(2).split(' ');
                        return {
                            username: n[0],
                            sessionId: n[1],
                            sessionVersion: parseInt(n[2], 10),
                            netType: n[3],
                            addressType: n[4],
                            address: n[5]
                        };
                    }),
                    (i.isValidSDP = function (e) {
                        if ('string' != typeof e || 0 === e.length) return !1;
                        for (var n = i.splitLines(e), r = 0; r < n.length; r++) if (n[r].length < 2 || '=' !== n[r].charAt(1)) return !1;
                        return !0;
                    }),
                    'object' == typeof n && (n.exports = i);
            },
            {}
        ]
    },
    {},
    [1]
);
