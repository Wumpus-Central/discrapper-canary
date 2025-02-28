n.d(t, { Z: () => y });
var r = n(785141),
    i = n(251625),
    o = n(823379),
    a = n(981631),
    s = n(388032);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = 15,
    d = 10,
    f = 3,
    _ = 10,
    p = 5,
    h = 30,
    g = 5;
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? f : e <= 15 ? d : u;
}
function E(e, t) {
    let n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            numDatapoints: 0
        },
        r = e.slice(-1 * t).filter(o.lm);
    if (0 === r.length) return c({ type: 'streamer' }, n);
    r.forEach((e, t, r) => {
        (n.packetsSentOrReceived += t > 0 ? r[t].packetsSentOrReceived - r[t - 1].packetsSentOrReceived : 0), (n.packetsLost += t > 0 ? r[t].packetsLost - r[t - 1].packetsLost : 0), (n.frameRate += e.frameRate), (n.resolution += e.resolution);
    });
    let i = r[0].type,
        a = r.length;
    return {
        type: i,
        packetsSentOrReceived: n.packetsSentOrReceived,
        packetsLost: n.packetsLost,
        packetLossRate: n.packetsLost / (n.packetsLost + n.packetsSentOrReceived),
        frameRate: n.frameRate / a,
        resolution: n.resolution / a,
        numDatapoints: a
    };
}
let v = (0, i.oH)((e, t, n) => ({
    message: e,
    errorType: t,
    avError: n
}));
function b(e, t) {
    if ('streamer' === e.type) {
        if (100 * e.packetLossRate > _) return v(s.NW.string(s.t['1f1LHh']), 'Packet Loss', r.u.STREAM_SEND_HIGH_PACKET_LOSS);
        if (e.frameRate <= m(t)) return v(s.NW.string(s.t['1f1LHh']), 'Frame Rate Encode', r.u.STREAM_SEND_LOW_FPS);
    } else {
        if (100 * e.packetLossRate > _) return v(s.NW.string(s.t.BcOif3), 'Packet Loss', r.u.STREAM_VIEW_HIGH_PACKET_LOSS);
        if (e.frameRate <= m(t)) return v(s.NW.string(s.t.BcOif3), 'Frame Rate Decode', r.u.STREAM_VIEW_LOW_FPS);
    }
    return null;
}
function y(e, t, n, i) {
    if (n) return v(s.NW.string(s.t['9lcycn']), 'Soundshare Failed', r.u.STREAM_SOUNDSHARE_FAILED);
    if (null != t) {
        let e = E(t, p),
            n = E(t, h);
        if (n.numDatapoints >= g) {
            var o;
            return null !== (o = b(e, null == i ? void 0 : i.maxFrameRate)) && void 0 !== o ? o : b(n, null == i ? void 0 : i.maxFrameRate);
        }
    }
    return e === a.IE4.BAD ? v(s.NW.string(s.t.Ic588P), 'Bad Connection', r.u.STREAM_BAD_NETWORK_QUALITY) : null;
}
