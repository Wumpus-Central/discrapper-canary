n.d(t, { Z: () => s }), n(47120), n(653041);
var i = n(878604);
function r(e) {
    return {
        id: e.payloadType,
        name: e.mimeType.split('/').slice(1)[0]
    };
}
function a(e) {
    return null === e || 0 === e;
}
function s(e, t, n, s, o) {
    var l, u;
    let c = {},
        d = {},
        f = [],
        _ = [];
    for (let t of e.values())
        switch (t.type) {
            case 'candidate-pair':
                c[t.id] = t;
                break;
            case 'codec':
                d[t.id] = t;
                break;
            case 'inbound-rtp':
                f.push(t);
                break;
            case 'outbound-rtp':
                _.push(t);
        }
    let p = Object.values(c).find((e) => 'succeeded' === e.state);
    if (void 0 === p) return null;
    let h = [];
    for (let e of _) {
        let t = d[e.codecId];
        if (null == t) continue;
        let s = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, i.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, i.F)(n, e.ssrc),
            codec: r(t),
            bytesSent: e.bytesSent,
            packetsSent: e.packetsSent
        };
        if ('audio' === e.kind)
            h.push({
                ...s,
                type: 'audio'
            });
        else if ('video' === e.kind && o) {
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            h.push({
                ...s,
                framesEncoded: e.framesEncoded,
                keyFramesEncoded: e.keyFramesEncoded,
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                bitrateTarget: e.targetBitrate,
                qpSum: e.qpSum,
                averageEncodeTime: null == e.framesEncoded || a(e.totalEncodeTime) ? void 0 : ((1000 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                resolution: t,
                framesSent: e.framesSent,
                frameRateInput: e.framesPerSecond,
                type: 'video'
            });
        }
    }
    let m = {};
    for (let e of f) {
        let a = d[e.codecId];
        if (null == a) continue;
        let o = t(e.ssrc);
        if (null == o) continue;
        let l = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, i.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, i.F)(n, e.ssrc),
            sinkWantLocal: (0, i.f)(s, e.ssrc, 'video' === e.kind),
            sinkWantLocalAsInt: (0, i.F)(s, e.ssrc),
            codec: r(a),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost
        };
        if ('audio' === e.kind) {
            let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount) : 0;
            null == m[o] && (m[o] = []),
                m[o].push({
                    ...l,
                    audioLevel: e.audioLevel,
                    jitter: 1000 * e.jitter,
                    jitterBuffer: t
                });
        } else if ('video' === e.kind) {
            null == m[o] && (m[o] = []);
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            m[o].push({
                ...l,
                resolution: t,
                framesDecoded: e.framesDecoded,
                keyFramesDecoded: e.keyFramesDecoded,
                framesDropped: e.framesDropped,
                framesReceived: e.framesReceived,
                frameRateDecode: e.framesPerSecond,
                averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? void 0 : ((1000 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                freezeCount: e.freezeCount,
                pauseCount: e.pauseCount,
                totalFreezesDuration: e.totalFreezesDuration,
                totalPausesDuration: e.totalPausesDuration,
                qpSum: e.qpSum,
                decoderImplementationName: 'WebRTC'
            });
        }
    }
    let g = (null !== (l = p.currentRoundTripTime) && void 0 !== l ? l : 0) * 1000;
    return {
        transport: {
            availableOutgoingBitrate: null !== (u = p.availableOutgoingBitrate) && void 0 !== u ? u : 0,
            bytesReceived: p.bytesReceived,
            bytesSent: p.bytesSent,
            ping: g
        },
        rtp: {
            inbound: m,
            outbound: h
        }
    };
}
