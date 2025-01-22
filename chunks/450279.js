r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(878604);
function s(e) {
    return {
        id: e.payloadType,
        name: e.mimeType.split('/').slice(1)[0]
    };
}
function l(e) {
    return null === e || 0 === e;
}
function u(e, n, r, i, a) {
    var u, c;
    let d = {},
        f = {},
        p = [],
        h = [];
    for (let n of e.values())
        switch (n.type) {
            case 'candidate-pair':
                d[n.id] = n;
                break;
            case 'codec':
                f[n.id] = n;
                break;
            case 'inbound-rtp':
                p.push(n);
                break;
            case 'outbound-rtp':
                h.push(n);
        }
    let _ = Object.values(d).find((e) => 'succeeded' === e.state);
    if (void 0 === _) return null;
    let m = [];
    for (let e of h) {
        let n = f[e.codecId];
        if (null == n) continue;
        let i = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, o.f)(r, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, o.F)(r, e.ssrc),
            codec: s(n),
            bytesSent: e.bytesSent,
            packetsSent: e.packetsSent
        };
        if ('audio' === e.kind)
            m.push({
                ...i,
                type: 'audio'
            });
        else if ('video' === e.kind && a) {
            let n =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            m.push({
                ...i,
                framesEncoded: e.framesEncoded,
                keyFramesEncoded: e.keyFramesEncoded,
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                bitrateTarget: e.targetBitrate,
                qpSum: e.qpSum,
                averageEncodeTime: null == e.framesEncoded || l(e.totalEncodeTime) ? void 0 : ((1000 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                resolution: n,
                framesSent: e.framesSent,
                frameRateInput: e.framesPerSecond,
                type: 'video'
            });
        }
    }
    let g = {};
    for (let e of p) {
        let a = f[e.codecId];
        if (null == a) continue;
        let l = n(e.ssrc);
        if (null == l) continue;
        let u = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, o.f)(r, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, o.F)(r, e.ssrc),
            sinkWantLocal: (0, o.f)(i, e.ssrc, 'video' === e.kind),
            sinkWantLocalAsInt: (0, o.F)(i, e.ssrc),
            codec: s(a),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost
        };
        if ('audio' === e.kind) {
            let n = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount) : 0;
            null == g[l] && (g[l] = []),
                g[l].push({
                    ...u,
                    audioLevel: e.audioLevel,
                    jitter: 1000 * e.jitter,
                    jitterBuffer: n
                });
        } else if ('video' === e.kind) {
            null == g[l] && (g[l] = []);
            let n =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            g[l].push({
                ...u,
                resolution: n,
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
    let E = (null !== (u = _.currentRoundTripTime) && void 0 !== u ? u : 0) * 1000;
    return {
        transport: {
            availableOutgoingBitrate: null !== (c = _.availableOutgoingBitrate) && void 0 !== c ? c : 0,
            bytesReceived: _.bytesReceived,
            bytesSent: _.bytesSent,
            ping: E
        },
        rtp: {
            inbound: g,
            outbound: m
        }
    };
}
