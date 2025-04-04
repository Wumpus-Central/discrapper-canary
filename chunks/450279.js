n.d(t, { Z: () => u }), n(301563), n(47120), n(653041);
var r = n(878604);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : a(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e) {
    return {
        id: e.payloadType,
        name: e.mimeType.split('/').slice(1)[0]
    };
}
function c(e) {
    return null === e || 0 === e;
}
function u(e, t, n, i, a) {
    var u, d;
    let f = {},
        _ = {},
        p = [],
        h = [];
    for (let t of e.values())
        switch (t.type) {
            case 'candidate-pair':
                f[t.id] = t;
                break;
            case 'codec':
                _[t.id] = t;
                break;
            case 'inbound-rtp':
                p.push(t);
                break;
            case 'outbound-rtp':
                h.push(t);
        }
    let m = Object.values(f).find((e) => 'succeeded' === e.state);
    if (void 0 === m) return null;
    let g = [];
    for (let e of h) {
        let t = _[e.codecId];
        if (null == t) continue;
        let i = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, r.F)(n, e.ssrc),
            codec: l(t),
            bytesSent: e.bytesSent,
            packetsSent: e.packetsSent,
            bitrateTarget: e.targetBitrate
        };
        if ('audio' === e.kind) g.push(s(o({}, i), { type: 'audio' }));
        else if ('video' === e.kind && a) {
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            g.push(
                s(o({}, i), {
                    framesEncoded: e.framesEncoded,
                    keyFramesEncoded: e.keyFramesEncoded,
                    firCount: e.firCount,
                    nackCount: e.nackCount,
                    pliCount: e.pliCount,
                    qpSum: e.qpSum,
                    averageEncodeTime: null == e.framesEncoded || c(e.totalEncodeTime) ? void 0 : ((1000 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                    resolution: t,
                    framesSent: e.framesSent,
                    frameRateInput: e.framesPerSecond,
                    type: 'video'
                })
            );
        }
    }
    let E = {};
    for (let e of p) {
        let a = _[e.codecId];
        if (null == a) continue;
        let c = t(e.ssrc);
        if (null == c) continue;
        let u = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, r.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, r.F)(n, e.ssrc),
            sinkWantLocal: (0, r.f)(i, e.ssrc, 'video' === e.kind),
            sinkWantLocalAsInt: (0, r.F)(i, e.ssrc),
            codec: l(a),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost,
            nackCount: e.nackCount
        };
        if ('audio' === e.kind) {
            let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount) : 0;
            null == E[c] && (E[c] = []),
                E[c].push(
                    s(o({}, u), {
                        audioLevel: e.audioLevel,
                        jitter: 1000 * e.jitter,
                        jitterBuffer: t
                    })
                );
        } else if ('video' === e.kind) {
            null == E[c] && (E[c] = []);
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            E[c].push(
                s(o({}, u), {
                    resolution: t,
                    framesDecoded: e.framesDecoded,
                    keyFramesDecoded: e.keyFramesDecoded,
                    framesDropped: e.framesDropped,
                    framesReceived: e.framesReceived,
                    frameRateDecode: e.framesPerSecond,
                    averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? void 0 : ((1000 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
                    firCount: e.firCount,
                    pliCount: e.pliCount,
                    freezeCount: e.freezeCount,
                    pauseCount: e.pauseCount,
                    totalFreezesDuration: e.totalFreezesDuration,
                    totalPausesDuration: e.totalPausesDuration,
                    qpSum: e.qpSum,
                    decoderImplementationName: 'WebRTC'
                })
            );
        }
    }
    let b = (null != (u = m.currentRoundTripTime) ? u : 0) * 1000;
    return {
        transport: {
            availableOutgoingBitrate: null != (d = m.availableOutgoingBitrate) ? d : 0,
            bytesReceived: m.bytesReceived,
            bytesSent: m.bytesSent,
            ping: b
        },
        rtp: {
            inbound: E,
            outbound: g
        }
    };
}
